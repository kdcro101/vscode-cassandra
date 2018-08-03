import { sortBy } from "lodash";
import { from, ReplaySubject } from "rxjs";
import { filter, take, timeout } from "rxjs/operators";
import * as vscode from "vscode";
import { CassandraClient } from "../../cassandra-client";
import { CassandraKeyspace, ValidatedConfigClusterItem } from "../../types";
import { CassandraColumn } from "../../types";
import { TreeItemBase } from "./tree-item-base";
import { TreeItemCluster } from "./tree-item-cluster";
import { TreeItemClusteringKey } from "./tree-item-clustering-key";
import { TreeItemColumnItem } from "./tree-item-column-item";
import { TreeItemColumns } from "./tree-item-columns";
import { TreeItemIndexItem } from "./tree-item-index-item";
import { TreeItemIndexes } from "./tree-item-indexes";
import { TreeItemKeyspace } from "./tree-item-keyspace";
import { TreeItemPartitioningKey } from "./tree-item-partitioning-key";
import { TreeItemPrimaryKey } from "./tree-item-primarykey";
import { TreeItemTable } from "./tree-item-table";

export class TreeviewProvider implements vscode.TreeDataProvider<TreeItemBase> {
    public onDidChangeTreeDataEmmiter = new vscode.EventEmitter<TreeItemBase | undefined>();
    public readonly onDidChangeTreeData: vscode.Event<TreeItemBase | undefined> = this.onDidChangeTreeDataEmmiter.event;
    public structures: CassandraKeyspace[][] = null;
    public stateStructuresReady = new ReplaySubject<boolean>(1);
    constructor(
        private config: ValidatedConfigClusterItem[],
        // private structures: CassandraKeyspace[][],
    ) {

        this.structures = config.map((i) => []);

        for (let i = 0; i < config.length; i++) {
            const c = config[i];
            (new CassandraClient(c)).getStructure()
            .then((result) => {
                this.structures[i] = result;
                this.refresh();
            }).catch((e) => {
                vscode.window.showWarningMessage(e);
            });
        }

        // from(Promise.all(config.map((i) => (new CassandraClient(i)).getStructure()))).pipe()
        //     .subscribe((data) => {
        //         this.structures = data;
        //         this.stateStructuresReady.next(true);
        //     });

    }

    /**
     * Get [TreeItem](#TreeItem) representation of the `element`
     *
     * @param element The element for which [TreeItem](#TreeItem) representation is asked for.
     * @return [TreeItem](#TreeItem) representation of the element
     */
    public refresh(): void {
        this.onDidChangeTreeDataEmmiter.fire();
    }
    public getTreeItem(item: TreeItemBase): vscode.TreeItem {
        return item;
    }

    /**
     * Get the children of `element` or root if no element is passed.
     *
     * @param element The element from which the provider gets children. Can be `undefined`.
     * @return Children of `element` or root if no element is passed.
     */
    getChildren(element?: TreeItemBase): Thenable<TreeItemBase[]> {
        return new Promise((resolve, reject) => {

            // this.stateStructuresReady.pipe(
            //     timeout(1000),
            //     filter((d) => d === true),
            //     take(1),
            // ).subscribe(() => {

                if (element == null) {
                    resolve(this.getRoot());
                    return;
                }
                if (element.type === "cluster") {
                    const e = element as TreeItemCluster;
                    resolve(this.getKeyspaces(e.clusterIndex));
                }
                if (element.type === "keyspace") {
                    const e = element as TreeItemKeyspace;
                    resolve(this.getTables(e.clusterIndex, e.label));
                }
                if (element.type === "table") {
                    const e = element as TreeItemTable;

                    const items: TreeItemBase[] = [];

                    const ksAll = this.structures[e.clusterIndex];
                    const ks = ksAll.find((i) => i.name === e.keyspace);
                    const t = ks.tables.find((i) => i.name === e.label);

                    items.push(
                        new TreeItemPrimaryKey("Primary key",
                            vscode.TreeItemCollapsibleState.Collapsed, e.clusterIndex, e.keyspace, e.label, "primarykey"),
                    );
                    items.push(
                        new TreeItemColumns("Columns",
                            vscode.TreeItemCollapsibleState.Collapsed, e.clusterIndex, e.keyspace, e.label, "columns"),
                    );

                    if (t.indexes.length > 0) {
                        items.push(
                            new TreeItemIndexes("Indexes",
                                vscode.TreeItemCollapsibleState.Collapsed, e.clusterIndex, e.keyspace, e.label, "indexes"),
                        );

                    }
                    resolve(items);
                }
                if (element.type === "primarykey") {
                    const e = element as TreeItemPrimaryKey;
                    resolve(this.getPrimaryKeys(e.clusterIndex, e.keyspace, e.table));
                }
                if (element.type === "columns") {
                    const e = element as TreeItemColumns;
                    resolve(this.getColumns(e.clusterIndex, e.keyspace, e.table));
                }
                if (element.type === "indexes") {
                    const e = element as TreeItemIndexes;
                    resolve(this.getIndexes(e.clusterIndex, e.keyspace, e.table));
                }

                resolve(null);
            // }, (e) => {
            //     vscode.window.showErrorMessage("Timeout connecting to clusters");
            //     console.log("timeout happened");
            //     resolve([]);
            // });
        });
    }

    /**
     * Optional method to return the parent of `element`.
     * Return `null` or `undefined` if `element` is a child of root.
     *
     * **NOTE:** This method should be implemented in order to access [reveal](#TreeView.reveal) API.
     *
     * @param element The element for which the parent has to be returned.
     * @return Parent of `element`.
     */
    getParent?(element: TreeItemBase): Thenable<TreeItemBase> {
        return new Promise((resolve, reject) => {

        });
    }
    private getRoot(): Promise<TreeItemCluster[]> {
        return new Promise((resolve, reject) => {
            const items = this.config.map((item, i) => {
                const tooltip = this.config[i].contactPoints.join(",");
                return new TreeItemCluster(item.name,
                    vscode.TreeItemCollapsibleState.Collapsed, i, "cluster", tooltip);
            });

            resolve(items);
        });
    }
    private getKeyspaces(clusterIndex: number): Promise<TreeItemKeyspace[]> {
        return new Promise((resolve, reject) => {
            const s = this.structures[clusterIndex];
            if (s.length === 0) {
                resolve(null);
                return;
            }
            const c = this.config[clusterIndex];
            const items = s.map((k) => {
                const tooltip = `${c.name}/${k.name}`;
                return new TreeItemKeyspace(k.name, vscode.TreeItemCollapsibleState.Collapsed, clusterIndex, "keyspace", tooltip);
            });

            resolve(items);

        });

    }
    private getTables(clusterIndex: number, keyspace: string): Promise<TreeItemTable[]> {
        return new Promise((resolve, reject) => {
            const s = this.structures[clusterIndex];
            if (s.length === 0) {
                resolve(null);
                return;
            }
            const c = this.config[clusterIndex];
            const all = this.structures[clusterIndex];
            const ks = all.find((i) => i.name === keyspace);

            if (ks == null) {
                resolve(null);
                return;
            }

            const items = ks.tables.map((t) => {
                const tooltip = `${c.name}/${keyspace}/${t.name}`;
                return new TreeItemTable(t.name, vscode.TreeItemCollapsibleState.Collapsed,
                    clusterIndex, keyspace, "table", tooltip);
            });

            resolve(items);

        });

    }
    private getIndexes(clusterIndex: number, keyspace: string, table: string): Promise<TreeItemColumnItem[]> {
        return new Promise((resolve, reject) => {

            const all = this.structures[clusterIndex];
            const ks = all.find((i) => i.name === keyspace);

            if (ks == null) {
                resolve(null);
                return;
            }
            const t = ks.tables.find((i) => i.name === table);

            const items = t.columns.map((c) => {
                return new TreeItemIndexItem(c.name, vscode.TreeItemCollapsibleState.None,
                    clusterIndex, keyspace, table, "index_item");
            });

            resolve(items);

        });
    }
    private getColumns(clusterIndex: number, keyspace: string, table: string): Promise<TreeItemColumnItem[]> {
        return new Promise((resolve, reject) => {

            const all = this.structures[clusterIndex];
            const ks = all.find((i) => i.name === keyspace);

            if (ks == null) {
                resolve(null);
                return;
            }
            const t = ks.tables.find((i) => i.name === table);

            const items = t.columns.map((c) => {
                return new TreeItemColumnItem(c.name, vscode.TreeItemCollapsibleState.None,
                    clusterIndex, keyspace, table, "column_item");
            });

            resolve(items);

        });
    }
    private getPrimaryKeys(clusterIndex: number, keyspace: string, table: string): Promise<TreeItemBase[]> {
        return new Promise((resolve, reject) => {

            const all = this.structures[clusterIndex];
            const ks = all.find((i) => i.name === keyspace);

            const items: TreeItemBase[] = [];

            if (ks == null) {
                resolve(null);
                return;
            }
            const t = ks.tables.find((i) => i.name === table);

            const pks = sortBy<CassandraColumn>(t.columns.filter((c) => c.kind === "partition_key"), (i) => {
                return i.position;
            });
            const cks = sortBy<CassandraColumn>(t.columns.filter((c) => c.kind === "clustering"), (i) => {
                return i.position;
            });

            pks.forEach((p, i) => {
                items.push(
                    new TreeItemPartitioningKey(p.name, vscode.TreeItemCollapsibleState.None,
                        clusterIndex, keyspace, table, "partitioning_key"),
                );
            });
            cks.forEach((p, i) => {
                items.push(
                    new TreeItemClusteringKey(p.name, vscode.TreeItemCollapsibleState.None,
                        clusterIndex, keyspace, table, "clustering_key"),
                );
            });

            resolve(items);
        });
    }
}
