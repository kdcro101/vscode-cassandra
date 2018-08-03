
import { from } from "rxjs";
import { mergeMap } from "rxjs/operators";
import * as vscode from "vscode";
import { CassandraWorkbench } from "./cassandra-workbench";
import { VsCommands } from "./commands";
import { Completition } from "./completition";
import { ConfigurationManager } from "./configuration-manager";
import { Icons } from "./icons";
import { Workspace } from "./workspace";

export function activate(context: vscode.ExtensionContext) {
    const workspace = new Workspace();
    const config = new ConfigurationManager(context, workspace);
    const commands = new VsCommands(config);
    commands.attachContext(context);

    Icons.context = context;

    let workbench: CassandraWorkbench = null;

    from(config.loadConfig()).pipe(
        mergeMap(() => config.stateConfiguration),
    ).subscribe((clusterItems) => {
        console.log(clusterItems);
        workbench = new CassandraWorkbench(context, workspace, clusterItems);
        workbench.start();
        // workbench.
    });

    // context.subscriptions.push(disposable);
    // const c = new CassandraClient();
    // (global as any).c = c;
    // c.connect()
    //     .then((result) => {
    //         console.log("OK");
    //     }).catch((e) => {
    //         console.error(e);
    //     });

    // const code = `select a,b,c from a.e where sadasd = 212 and`;
    // const comp = new Completition();
    // const results = comp.execute(code);

    // console.log(results);

}

// this method is called when your extension is deactivated
export function deactivate() {

}
