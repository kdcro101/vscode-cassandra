import { ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import * as vscode from "vscode";

import { CassandraWorkbench } from "../cassandra-workbench";
import { ConfigurationManager } from "../configuration-manager";

export class VsCommands {
    private context: vscode.ExtensionContext = null;
    private workbench: CassandraWorkbench = null;
    private stateContext = new ReplaySubject<void>(1);
    private stateWorkbench = new ReplaySubject<void>(1);

    constructor(private configuration: ConfigurationManager) {

    }
    public attachContext(context: vscode.ExtensionContext) {
        this.context = context;
        this.stateContext.next();
        context.subscriptions.push(vscode.commands.registerCommand("generate-configuration", this.onConfigurationGenerate));
    }
    public attachWorkbench(workbench: CassandraWorkbench) {
        this.workbench = workbench;
        this.stateWorkbench.next();
    }
    private onConfigurationGenerate = () => {
        this.configuration.loadConfig()
            .then((result) => {
                console.log("onConfigurationGenerate OK");
            }).catch((e) => {
                console.log("onConfigurationGenerate FAIL");
            });
    }
}
