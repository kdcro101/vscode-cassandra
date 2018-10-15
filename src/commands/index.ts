import * as fs from "fs-extra";
import { ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import * as vscode from "vscode";
import { CassandraWorkbench } from "../cassandra-workbench";
import { TreeItemAggregateItem } from "../cassandra-workbench/treeview-provider/tree-item-aggregate-item";
import { TreeItemCluster } from "../cassandra-workbench/treeview-provider/tree-item-cluster";
import { TreeItemColumnItem } from "../cassandra-workbench/treeview-provider/tree-item-column-item/index";
import { TreeItemFunctionItem } from "../cassandra-workbench/treeview-provider/tree-item-function-item";
import { TreeItemIndexItem } from "../cassandra-workbench/treeview-provider/tree-item-index-item";
import { TreeItemKeyspace } from "../cassandra-workbench/treeview-provider/tree-item-keyspace";
import { TreeItemMaterializedViewItem } from "../cassandra-workbench/treeview-provider/tree-item-materialized-view-item/index";
import { TreeItemTable } from "../cassandra-workbench/treeview-provider/tree-item-table/index";
import { TreeItemTypeItem } from "../cassandra-workbench/treeview-provider/tree-item-type-item";
import { ConfigurationManager } from "../configuration-manager";
import { StatementGenerator } from "../statement-generator";
import { ExtensionContextBundle, TreeItemType } from "../types";

declare var extensionContextBundle: ExtensionContextBundle;

export class VsCommands {
    private context: vscode.ExtensionContext = extensionContextBundle.context;
    private workbench: CassandraWorkbench;

    private stateWorkbench = new ReplaySubject<void>(1);

    constructor(
        private configuration: ConfigurationManager,
        private generator: StatementGenerator,
    ) {

    }
    public setWorkbench(workbench: CassandraWorkbench) {
        this.workbench = workbench;
        this.stateWorkbench.next();
    }
    public register() {

        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.generateConfiguration", this.onConfigurationGenerate));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.refresh", this.onRefresh));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.editConfiguration", this.onEditConfig));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.revealPanel", this.onRevealCqlPanel));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.openEditorInWorkbench", this.onOpenEditorInWorkbench));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.openFileInWorkbench", this.onOpenFileInWorkbench));

        // ------------------------------------------------------------------------------------------------------------------
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTableSelect", this.cqlTableSelect));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTableSelectAll", this.cqlTableSelectAll));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTableClone", this.cqlTableClone));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTableDrop", this.cqlTableDrop));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTableCreate", this.cqlTableCreate));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTableTruncate", this.cqlTableTruncate));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTableAlterAdd", this.cqlTableAlterAdd));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTableAlterDrop", this.cqlTableAlterDrop));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlKeyspaceDrop", this.cqlKeyspaceDrop));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlKeyspaceAlter", this.cqlKeyspaceAlter));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlKeyspaceClone", this.cqlKeyspaceClone));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlKeyspaceCreate", this.cqlKeyspaceCreate));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlKeyspaceExport", this.cqlKeyspaceExport));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlColumnDrop", this.cqlColumnDrop));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlIndexCreate", this.cqlIndexCreate));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlIndexDrop", this.cqlIndexDrop));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlFunctionCreate", this.cqlFunctionCreate));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlFunctionClone", this.cqlFunctionClone));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlFunctionDrop", this.cqlFunctionDrop));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlFunctionReplace", this.cqlFunctionReplace));

        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTypeDrop", this.cqlTypeDrop));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTypeAlter", this.cqlTypeAlter));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTypeClone", this.cqlTypeClone));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTypeCreate", this.cqlTypeCreate));

        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlMaterializedViewDrop", this.cqlMaterializedViewDrop));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlMaterializedViewAlter", this.cqlMaterializedViewAlter));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlMaterializedViewClone", this.cqlMaterializedViewClone));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlMaterializedViewCreate", this.cqlMaterializedViewCreate));

        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlAggregateDrop", this.cqlAggregateDrop));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlAggregateReplace", this.cqlAggregateReplace));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlAggregateClone", this.cqlAggregateClone));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlAggregateCreate", this.cqlAggregateCreate));
    }
    private cqlKeyspaceExport = (item: TreeItemKeyspace) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {
            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            // this.generator.aggregateReplace(keyspace, item.aggregateData)
            //     .then((result) => {
            //         this.workbench.editorCreate(clusterIndex, keyspace, result);
            //     }).catch((e) => {
            //         console.log(e);
            //     });
        });
    }
    private cqlAggregateReplace = (item: TreeItemAggregateItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {
            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.aggregateReplace(keyspace, item.aggregateData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlAggregateDrop = (item: TreeItemAggregateItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.aggregateDrop(keyspace, item.aggregateData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlAggregateClone = (item: TreeItemAggregateItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {
            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.aggregateClone(keyspace, item.aggregateData, false, `${item.aggregateData.name}_clone`)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlAggregateCreate = (item: TreeItemKeyspace) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.aggregateCreate(keyspace)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }

    private cqlMaterializedViewDrop = (item: TreeItemMaterializedViewItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.materializedViewDrop(keyspace, item.viewData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlMaterializedViewAlter = (item: TreeItemMaterializedViewItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.materializedViewAlter(keyspace, item.viewData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlMaterializedViewClone = (item: TreeItemMaterializedViewItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.materializedViewClone(keyspace, item.viewData, `${item.viewData.name}_clone`)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlMaterializedViewCreate = (item: TreeItemTable) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.materializedViewCreate(keyspace, item.tableData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTypeCreate = (item: TreeItemKeyspace) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.typeCreate(keyspace)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTypeClone = (item: TreeItemTypeItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.typeClone(keyspace, item.typeData, `${item.typeData.name}_clone`)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTypeAlter = (item: TreeItemTypeItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.typeAlter(keyspace, item.typeData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTypeDrop = (item: TreeItemTypeItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.typeDrop(keyspace, item.typeData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlFunctionReplace = (item: TreeItemFunctionItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.functionClone(keyspace, item.functionData, true)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlFunctionDrop = (item: TreeItemFunctionItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.functionDrop(keyspace, item.label)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlFunctionClone = (item: TreeItemFunctionItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.functionClone(keyspace, item.functionData, false, `${item.functionData.name}_clone`)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlFunctionCreate = (item: TreeItemKeyspace) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.functionCreate(keyspace)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlIndexDrop = (item: TreeItemIndexItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.indexDrop(keyspace, item.tableData, item.label)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlIndexCreate = (item: TreeItemColumnItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.indexCreate(keyspace, item.tableData, item.label)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlColumnDrop = (item: TreeItemColumnItem) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.tableAlterDrop(keyspace, item.tableData, item.label)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTableSelectAll = (item: TreeItemTable) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.tableSelectAll(keyspace, item.tableData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTableSelect = (item: TreeItemTable) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.tableSelect(keyspace, item.tableData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlKeyspaceCreate = (item: TreeItemCluster) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;

            this.generator.keyspaceCreate()
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, null, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlKeyspaceClone = (item: TreeItemKeyspace) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.keyspaceClone(keyspace, item.keyspaceData, `${keyspace}_clone`)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlKeyspaceAlter = (item: TreeItemKeyspace) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.keyspaceAlter(keyspace, item.keyspaceData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlKeyspaceDrop = (item: TreeItemKeyspace) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.keyspaceDrop(keyspace, item.keyspaceData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTableAlterDrop = (item: TreeItemTable) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.tableAlterDrop(keyspace, item.tableData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTableAlterAdd = (item: TreeItemTable) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.tableAlterAdd(keyspace, item.tableData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTableTruncate = (item: TreeItemTable) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.tableTruncate(keyspace, item.tableData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTableDrop = (item: TreeItemTable) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.tableDrop(keyspace, item.tableData)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);
                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTableCreate = (item: TreeItemKeyspace) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.tableCreate(keyspace)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);

                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private cqlTableClone = (item: TreeItemTable) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.tableClone(keyspace, item.tableData, `${item.tableData.name}_clone`)
                .then((result) => {
                    this.workbench.editorCreate(clusterIndex, keyspace, result);

                }).catch((e) => {
                    console.log(e);
                });
        });
    }
    private onOpenEditorInWorkbench = (fileUri: vscode.Uri) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            try {
                const body = fs.readFileSync(fileUri.fsPath).toString();
                this.workbench.editorCreate(null, null, body, fileUri.fsPath);

            } catch (e) {
                vscode.window.showErrorMessage(`Unable to read ${fileUri.fsPath}`);
            }
        });
    }
    private onOpenFileInWorkbench = (fileUri: vscode.Uri, list: any[]) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            try {
                const body = fs.readFileSync(fileUri.fsPath).toString();
                this.workbench.editorCreate(null, null, body, fileUri.fsPath);

            } catch (e) {
                vscode.window.showErrorMessage(`Unable to read ${fileUri.fsPath}`);
            }
        });
    }

    private onConfigurationGenerate = () => {
        this.configuration.loadConfig()
            .then((result) => {
                console.log("onConfigurationGenerate OK");
            }).catch((e) => {
                console.log("onConfigurationGenerate FAIL");
            });
    }
    private onRefresh = () => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {
            this.workbench.refreshClusterTree();
        });
    }
    private onEditConfig = () => {
        const fp = this.configuration.confPath;
        const uri = vscode.Uri.file(fp);
        vscode.window.showTextDocument(uri, {
            viewColumn: vscode.ViewColumn.Active,
        });
    }

    private onRevealCqlPanel = () => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {
            this.workbench.revealCqlPanel()
                .then((result) => {
                    console.log("Cassandra workbench panel revealed");
                }).catch((e) => {
                    vscode.window.showErrorMessage("Error starting panel!");
                });

        });
    }

}
