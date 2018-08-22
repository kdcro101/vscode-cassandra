import { sortBy } from "lodash";
import { from, ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import * as vscode from "vscode";
import { CassandraClient } from "../../cassandra-client";
import { Clusters } from "../../clusters";
import { CassandraColumn, ValidatedConfigClusterItem } from "../../types";
import { TreeItemBase } from "./tree-item-base";

import { TreeItemCluster } from "./tree-item-cluster";
import { TreeItemClusterError } from "./tree-item-cluster-error";
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

    constructor(
        private config: ValidatedConfigClusterItem[],
        private clusters: Clusters,
        // private structures: CassandraKeyspace[][],
    ) {

        // from(Promise.all(config.map((i) => (new CassandraClient(i)).getStructure()))).pipe()
        //     .subscribe((data) => {
        //         this.structures = data;
        //         this.stateStructuresReady.next(true);
        //     });

        // this.collectClusterData(config);
    }

    public refresh(): void {
        // this.stateStructuresReady = new ReplaySubject<boolean>(1);
        // this.collectClusterData(this.config);
        this.onDidChangeTreeDataEmmiter.fire();
    }
    public getTreeItem(item: TreeItemBase): vscode.TreeItem {
        return item;
    }

    getChildren(element?: TreeItemBase): Thenable<TreeItemBase[]> {
        return new Promise((resolve, reject) => {

            if (element == null) {
                resolve(this.getRoot());
                return;
            }
            if (element.type === "cluster") {
                const e = element as TreeItemCluster;
                resolve(this.getKeyspaces(e.clusterIndex));
                return;
            }
            if (element.type === "keyspace") {
                const e = element as TreeItemKeyspace;
                resolve(this.getTables(e.clusterIndex, e.label));
            }
            if (element.type === "table") {
                const e = element as TreeItemTable;
                resolve(this.getTableElements(e.clusterIndex, e.keyspace, e.label));
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

            const list = this.clusters.getClusters();

            const root = list.map((c, i) => {
                return new TreeItemCluster(c.name,
                    vscode.TreeItemCollapsibleState.Collapsed, i, "cluster", "");
            });

            resolve(root);

        });
    }
    private getKeyspaces(clusterIndex: number): Promise<TreeItemKeyspace[]> {
        return new Promise((resolve, reject) => {

            from(this.clusters.getStructure(clusterIndex)).pipe()
                .subscribe((clusterData) => {

                    const ks = clusterData.keyspaces;
                    const items = ks.map((k) => {
                        const name = this.clusters.getClusterName(clusterIndex);
                        const tooltip = `${k.name}@${name}`;
                        return new TreeItemKeyspace(k.name, vscode.TreeItemCollapsibleState.Collapsed, clusterIndex, "keyspace", tooltip);
                    });
                    resolve(items);

                }, (e) => {
                    console.log("Error clusters.getStructure");
                    console.log(e);

                    const errorItem = new TreeItemClusterError("Error connecting",
                        vscode.TreeItemCollapsibleState.None, clusterIndex, "cluster-error");

                    resolve([errorItem]);

                });

        });

    }
    private getTables(clusterIndex: number, keyspace: string): Promise<TreeItemTable[]> {
        return new Promise((resolve, reject) => {

            from(this.clusters.getStructure(clusterIndex)).pipe()
                .subscribe((clusterData) => {

                    const ks = clusterData.keyspaces;

                    if (ks == null || ks.length === 0) {
                        resolve(null);
                    }
                    const name = this.clusters.getClusterName(clusterIndex);
                    const sks = ks.find((i) => i.name === keyspace);

                    if (sks == null) {
                        resolve(null);
                        return;
                    }

                    const items = sks.tables.map((t) => {
                        const tooltip = `${name}/${keyspace}/${t.name}`;
                        return new TreeItemTable(t.name, vscode.TreeItemCollapsibleState.Collapsed,
                            clusterIndex, name, keyspace, "table", tooltip);
                    });

                    resolve(items);

                }, (e) => {
                    console.log("Error clusters.getStructure");
                    console.log(e);

                    resolve(null);

                });

        });

    }
    private getTableElements(clusterIndex: number, keyspace: string, table: string): Promise<TreeItemBase[]> {
        return new Promise((resolve, reject) => {
            const items: TreeItemBase[] = [];

            from(this.clusters.getStructure(clusterIndex)).pipe()
                .subscribe((clusterData) => {

                    const ks = clusterData.keyspaces;

                    if (ks == null || ks.length === 0) {
                        resolve(null);
                    }
                    const name = this.clusters.getClusterName(clusterIndex);
                    const sks = ks.find((i) => i.name === keyspace);

                    if (sks == null) {
                        resolve(null);
                        return;
                    }

                    const t = sks.tables.find((i) => i.name === table);

                    items.push(
                        new TreeItemPrimaryKey("Primary key",
                            vscode.TreeItemCollapsibleState.Collapsed, clusterIndex, keyspace, table, "primarykey"),
                    );
                    items.push(
                        new TreeItemColumns("Columns",
                            vscode.TreeItemCollapsibleState.Collapsed, clusterIndex, keyspace, table, "columns"),
                    );

                    if (t.indexes.length > 0) {
                        items.push(
                            new TreeItemIndexes("Indexes",
                                vscode.TreeItemCollapsibleState.Collapsed, clusterIndex, keyspace, table, "indexes"),
                        );

                    }
                    resolve(items);

                }, (error) => {
                    resolve(null);
                });
        });

    }
    private getIndexes(clusterIndex: number, keyspace: string, table: string): Promise<TreeItemColumnItem[]> {
        return new Promise((resolve, reject) => {

            from(this.clusters.getStructure(clusterIndex)).pipe()
                .subscribe((clusterData) => {

                    const ks = clusterData.keyspaces;

                    if (ks == null || ks.length === 0) {
                        resolve(null);
                    }
                    const name = this.clusters.getClusterName(clusterIndex);
                    const sks = ks.find((i) => i.name === keyspace);

                    if (sks == null) {
                        resolve(null);
                        return;
                    }

                    const t = sks.tables.find((i) => i.name === table);
                    const items = t.columns.map((c) => {
                        return new TreeItemIndexItem(c.name, vscode.TreeItemCollapsibleState.None,
                            clusterIndex, keyspace, table, "index_item");
                    });

                    resolve(items);

                }, (error) => {
                    resolve(null);
                });

        });
    }
    private getColumns(clusterIndex: number, keyspace: string, table: string): Promise<TreeItemColumnItem[]> {
        return new Promise((resolve, reject) => {

            from(this.clusters.getStructure(clusterIndex)).pipe()
                .subscribe((clusterData) => {

                    const ks = clusterData.keyspaces;

                    if (ks == null || ks.length === 0) {
                        resolve(null);
                    }
                    const name = this.clusters.getClusterName(clusterIndex);
                    const sks = ks.find((i) => i.name === keyspace);

                    if (sks == null) {
                        resolve(null);
                        return;
                    }

                    const t = sks.tables.find((i) => i.name === table);
                    const items = t.columns.map((c) => {
                        return new TreeItemColumnItem(c.name, vscode.TreeItemCollapsibleState.None,
                            clusterIndex, keyspace, table, "column_item");
                    });

                    resolve(items);

                }, (error) => {
                    resolve(null);
                });

        });
    }
    private getPrimaryKeys(clusterIndex: number, keyspace: string, table: string): Promise<TreeItemBase[]> {
        return new Promise((resolve, reject) => {

            const items: TreeItemBase[] = [];

            from(this.clusters.getStructure(clusterIndex)).pipe()
                .subscribe((clusterData) => {

                    const ks = clusterData.keyspaces;

                    if (ks == null || ks.length === 0) {
                        resolve(null);
                    }
                    const name = this.clusters.getClusterName(clusterIndex);
                    const sks = ks.find((i) => i.name === keyspace);

                    if (sks == null) {
                        resolve(null);
                        return;
                    }

                    const t = sks.tables.find((i) => i.name === table);

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

                }, (error) => {
                    resolve(null);
                });

        });
    }

}
