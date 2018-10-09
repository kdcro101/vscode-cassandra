import * as fs from "fs-extra";
import { ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import * as vscode from "vscode";
import { CassandraWorkbench } from "../cassandra-workbench";
import { TreeItemKeyspace } from "../cassandra-workbench/treeview-provider/tree-item-keyspace";
import { TreeItemTable } from "../cassandra-workbench/treeview-provider/tree-item-table/index";
import { ConfigurationManager } from "../configuration-manager";
import { StatementGenerator } from "../statement-generator";
import { ExtensionContextBundle } from "../types";

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
            .push(vscode.commands.registerCommand("cassandraWorkbench.tableSelectStatement", this.onTableSelectStatement));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.openEditorInWorkbench", this.onOpenEditorInWorkbench));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.openFileInWorkbench", this.onOpenFileInWorkbench));

        // ------------------------------------------------------------------------------------------------------------------
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTableClone", this.cqlTableClone));
        this.context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.cqlTableDrop", this.cqlTableDrop));
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
    }

    private cqlKeyspaceClone = (item: TreeItemKeyspace) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.label;

            this.generator.keyspaceClone(keyspace, item.keyspaceData)
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
            const keyspace = item.label;

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
            const keyspace = item.label;

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
    private cqlTableClone = (item: TreeItemTable) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {

            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;

            this.generator.tableClone(keyspace, item.tableData)
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
    private onTableSelectStatement = (item: TreeItemTable) => {
        this.stateWorkbench.pipe(
            take(1),
        ).subscribe(() => {
            const clusterName = item.clusterName;
            const clusterIndex = item.clusterIndex;
            const keyspace = item.keyspace;
            const table = item.label;
            const body = this.generator.generateSelectBasic(keyspace, item.tableData);
            this.workbench.editorCreate(clusterIndex, keyspace, body);
        });
    }
}
