import { sortBy } from "lodash";
import { from, of } from "rxjs";
import { delay, tap } from "rxjs/operators";
import * as vscode from "vscode";
import { Clusters } from "../../clusters";
import { CassandraColumn } from "../../types";
import { TreeItemAggregateItem } from "./tree-item-aggregate-item";
import { TreeItemAggregates } from "./tree-item-aggregates";
import { TreeItemBase } from "./tree-item-base";
import { TreeItemCluster } from "./tree-item-cluster";
import { TreeItemClusterError } from "./tree-item-cluster-error";
import { TreeItemClusteringKey } from "./tree-item-clustering-key";
import { TreeItemColumnItem } from "./tree-item-column-item";
import { TreeItemColumns } from "./tree-item-columns";
import { TreeItemFunctionItem } from "./tree-item-function-item/index";
import { TreeItemFunctions } from "./tree-item-functions";
import { TreeItemIndexItem } from "./tree-item-index-item";
import { TreeItemIndexes } from "./tree-item-indexes";
import { TreeItemKeyspace } from "./tree-item-keyspace";
import { TreeItemMaterializedViewItem } from "./tree-item-materialized-view-item";
import { TreeItemMaterializedViews } from "./tree-item-materialized-views";
import { TreeItemPartitioningKey } from "./tree-item-partitioning-key";
import { TreeItemPrimaryKey } from "./tree-item-primarykey";
import { TreeItemTable } from "./tree-item-table";
import { TreeItemTypeItem } from "./tree-item-type-item";
import { TreeItemTypes } from "./tree-item-types";

export class TreeviewProvider implements vscode.TreeDataProvider<TreeItemBase> {
    public onDidChangeTreeDataEmmiter = new vscode.EventEmitter<TreeItemBase | undefined>();
    public readonly onDidChangeTreeData: vscode.Event<TreeItemBase | undefined> = this.onDidChangeTreeDataEmmiter.event;

    public isRefreshing = false;

    constructor(
        private clusters: Clusters,
    ) { }
    public refresh(): void {

        this.isRefreshing = true;
        of(true).pipe(
            tap(() => {

                this.clusters.configItems.forEach((c, i) => {
                    this.clusters.invalidateStructure(i);
                });

                this.onDidChangeTreeDataEmmiter.fire();
            }),
            delay(500),
        ).subscribe(() => {
            this.isRefreshing = false;
            this.onDidChangeTreeDataEmmiter.fire();
        });

    }
    public getTreeItem(item: TreeItemBase): vscode.TreeItem {
        return item;
    }
    public getChildren(element?: TreeItemBase): Thenable<TreeItemBase[]> {
        return new Promise((resolve, reject) => {

            if (this.isRefreshing) {
                resolve([]);
                return;
            }

            if (element) {
                console.log(`getChildren[${element.label}]`);
            } else {
                console.log(`getChildren[ROOT]`);
            }

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
                resolve(this.getKeyspaceElements(e.clusterIndex, e.label));
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
            if (element.type === "types") {
                const e = element as TreeItemTypes;
                resolve(this.getTypes(e.clusterIndex, e.keyspace));
            }
            if (element.type === "functions") {
                const e = element as TreeItemTypes;
                resolve(this.getFunctions(e.clusterIndex, e.keyspace));
            }
            if (element.type === "aggregates") {
                const e = element as TreeItemTypes;
                resolve(this.getAggregates(e.clusterIndex, e.keyspace));
            }
            if (element.type === "materialized-views") {
                const e = element as TreeItemMaterializedViews;
                resolve(this.getMaterializedViews(e.clusterIndex, e.keyspace));
            }

            resolve(null);

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
    public getParent?(element: TreeItemBase): Thenable<TreeItemBase> {
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
    private getKeyspaces(clusterIndex: number): Promise<TreeItemKeyspace[] | TreeItemClusterError[]> {
        return new Promise((resolve, reject) => {

            from(this.clusters.getStructure(clusterIndex)).pipe()
                .subscribe((clusterData) => {

                    const ks = clusterData.keyspaces;
                    const items = ks.map((k) => {
                        const name = this.clusters.getClusterName(clusterIndex);
                        const tooltip = `${k.name}@${name}`;
                        return new TreeItemKeyspace(k.name, vscode.TreeItemCollapsibleState.Collapsed,
                            clusterIndex, "keyspace", k, tooltip);
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

    private getKeyspaceElements(clusterIndex: number, keyspace: string): Promise<TreeItemBase[]> {
        return new Promise((resolve, reject) => {

            from(this.clusters.getStructure(clusterIndex)).pipe()
                .subscribe((clusterData) => {

                    let items: TreeItemBase[] = [];

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

                    const types = sks.types;
                    const functions = sks.functions;
                    const aggregates = sks.aggregates;
                    const materializedViews = sks.materializedViews;

                    if (types.length > 0) {
                        items.push(new TreeItemTypes("Types", vscode.TreeItemCollapsibleState.Collapsed,
                            clusterIndex, keyspace, "types", `types@${keyspace}`,
                        ));
                    }
                    if (functions.length > 0) {
                        items.push(new TreeItemFunctions("Functions", vscode.TreeItemCollapsibleState.Collapsed,
                            clusterIndex, keyspace, "functions", `functions@${keyspace}`,
                        ));
                    }
                    if (aggregates.length > 0) {
                        items.push(new TreeItemAggregates("Aggregates", vscode.TreeItemCollapsibleState.Collapsed,
                            clusterIndex, keyspace, "aggregates", `aggregates@${keyspace}`,
                        ));
                    }
                    if (materializedViews.length > 0) {
                        items.push(new TreeItemMaterializedViews("Materialized views", vscode.TreeItemCollapsibleState.Collapsed,
                            clusterIndex, keyspace, "materialized-views", `views@${keyspace}`,
                        ));
                    }

                    const tableItems = sks.tables.map((t) => {
                        const tooltip = `${name}/${keyspace}/${t.name}`;
                        return new TreeItemTable(t.name, vscode.TreeItemCollapsibleState.Collapsed,
                            clusterIndex, name, keyspace, "table", t, tooltip);
                    });

                    items = items.concat(tableItems);

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
    private getMaterializedViews(clusterIndex: number, keyspace: string): Promise<TreeItemMaterializedViewItem[]> {
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

                    const views = sks.materializedViews;
                    const items = views.map((c) => {
                        return new TreeItemMaterializedViewItem(c.name, vscode.TreeItemCollapsibleState.None,
                            clusterIndex, keyspace, "materialized-views_item", c);
                    });

                    resolve(items);

                }, (error) => {
                    resolve(null);
                });

        });
    }
    private getAggregates(clusterIndex: number, keyspace: string): Promise<TreeItemAggregateItem[]> {
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

                    const aggregates = sks.aggregates;
                    const items = aggregates.map((c) => {
                        return new TreeItemAggregateItem(c.name, vscode.TreeItemCollapsibleState.None,
                            clusterIndex, keyspace, "aggregate_item", c);
                    });

                    resolve(items);

                }, (error) => {
                    resolve(null);
                });

        });
    }
    private getFunctions(clusterIndex: number, keyspace: string): Promise<TreeItemFunctionItem[]> {
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

                    const functions = sks.functions;
                    const items = functions.map((c) => {
                        return new TreeItemFunctionItem(c.name, vscode.TreeItemCollapsibleState.None,
                            clusterIndex, keyspace, "function_item", c);
                    });

                    resolve(items);

                }, (error) => {
                    resolve(null);
                });

        });
    }
    private getTypes(clusterIndex: number, keyspace: string): Promise<TreeItemTypeItem[]> {
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

                    const types = sks.types;
                    const items = types.map((c) => {
                        return new TreeItemTypeItem(c.name, vscode.TreeItemCollapsibleState.None,
                            clusterIndex, keyspace, "type_item", c);
                    });

                    resolve(items);

                }, (error) => {
                    resolve(null);
                });

        });
    }
    private getIndexes(clusterIndex: number, keyspace: string, table: string): Promise<TreeItemIndexItem[]> {
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
                    const items = t.indexes.map((c) => {
                        return new TreeItemIndexItem(c.name, vscode.TreeItemCollapsibleState.None,
                            clusterIndex, keyspace, table, "index_item", t, c.kind);
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
                            clusterIndex, keyspace, table, "column_item", t, c.type);
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
