import * as vscode from "vscode";
import { CassandraWorkbench } from "../cassandra-workbench";
import { TreeItemTable } from "../cassandra-workbench/treeview-provider/tree-item-table/index";
import { ConfigurationManager } from "../configuration-manager";
import { StatementGenerator } from "../statement-generator";
import { ExtensionContextBundle } from "../types";

declare var extensionContextBundle: ExtensionContextBundle;

export class VsCommands {
    private context: vscode.ExtensionContext = extensionContextBundle.context;

    constructor(
        private configuration: ConfigurationManager,
        private workbench: CassandraWorkbench,
        private generator: StatementGenerator,
    ) {

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
        this.workbench.refreshClusterTree();
        vscode.window.showInformationMessage("Refreshing...");
    }
    private onEditConfig = () => {
        const fp = this.configuration.confPath;
        const uri = vscode.Uri.file(fp);
        vscode.window.showTextDocument(uri, {
            viewColumn: vscode.ViewColumn.Active,
        });
    }

    private onRevealCqlPanel = () => {

        this.workbench.revealCqlPanel()
            .then((result) => {
                console.log("Cassandra workbench panel revealed");
            }).catch((e) => {
                vscode.window.showErrorMessage("Error starting panel!");
            });

    }
    private onTableSelectStatement = (item: TreeItemTable) => {
        const clusterName = item.clusterName;
        const clusterIndex = item.clusterIndex;
        const keyspace = item.keyspace;
        const table = item.label;
        const body = this.generator.generateSelectBasic(keyspace, table);
        this.workbench.editorCreate(clusterIndex, keyspace, body);

    }
}
