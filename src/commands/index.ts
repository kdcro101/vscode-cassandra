import { take } from "rxjs/operators";
import * as vscode from "vscode";
import { ConfigurationManager } from "../configuration-manager";

export class VsCommands {
    constructor(private configuration: ConfigurationManager) {

    }
    public attach(context: vscode.ExtensionContext) {

        context.subscriptions.push(vscode.commands.registerCommand("generate-configuration", this.onConfigurationGenerate));
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
