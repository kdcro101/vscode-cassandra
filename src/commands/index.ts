import * as fs from "fs-extra";
import { ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import * as vscode from "vscode";
import { CassandraWorkbench } from "../cassandra-workbench";
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
