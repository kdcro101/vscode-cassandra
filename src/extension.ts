
import { from, Subject } from "rxjs";
import { mergeMap } from "rxjs/operators";
import * as vscode from "vscode";
import { CassandraWorkbench } from "./cassandra-workbench";
import { VsCommands } from "./commands";
import { ConfigurationManager } from "./configuration-manager";
import { Icons } from "./icons";
import { ExtensionContextBundle, VscodeCassandraGlobal } from "./types";
import { Workspace } from "./workspace";

declare var extensionContextBundle: ExtensionContextBundle;

export function activate(context: vscode.ExtensionContext) {
    // initialize context
    (global as VscodeCassandraGlobal).extensionContextBundle = {
        context,
        eventDestroy: new Subject<void>(),
    };
    // ---------------------------------------------------------

    const workspace = new Workspace();
    const config = new ConfigurationManager(context, workspace);

    let commands: VsCommands = null;

    Icons.context = context;

    let workbench: CassandraWorkbench = null;

    from(config.loadConfig()).pipe()
        .subscribe((clusterItems) => {

            workbench = new CassandraWorkbench(workspace, clusterItems);
            workbench.start();
            commands = new VsCommands(config, workbench);
            commands.register();

        });

}

// this method is called when your extension is deactivated
export function deactivate() {
    extensionContextBundle.eventDestroy.next();
    console.log("vscode-cassandra deactivated");

}
