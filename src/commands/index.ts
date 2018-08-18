import * as path from "path";
import { ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import * as vscode from "vscode";

import { CassandraWorkbench } from "../cassandra-workbench";
import { ConfigurationManager } from "../configuration-manager";

export class VsCommands {

    constructor(
        private configuration: ConfigurationManager,
        private context: vscode.ExtensionContext,
        private workbench: CassandraWorkbench) {

        context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.generateConfiguration", this.onConfigurationGenerate));
        context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.refresh", this.onRefresh));
        context.subscriptions
            .push(vscode.commands.registerCommand("cassandraWorkbench.editConfiguration", this.onEditConfig));
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
        this.workbench.refreshTree();
        vscode.window.showInformationMessage("Refreshing...");
    }
    private onEditConfig = () => {
        const fp = this.configuration.confPath;
        const uri = vscode.Uri.file(fp);
        vscode.window.showTextDocument(uri, {
            viewColumn: vscode.ViewColumn.Active,
         });
        // vscode.window.showWarningMessage(fp);
    }

}
