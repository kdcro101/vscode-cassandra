
import { from, merge, Subject } from "rxjs";
import { filter, take } from "rxjs/operators";
import * as vscode from "vscode";
import { CassandraWorkbench } from "./cassandra-workbench";
import { VsCommands } from "./commands";
import { ConfigurationManager } from "./configuration-manager";
import { Icons } from "./icons";
import { StatementGenerator } from "./statement-generator";
import { ExtensionContextBundle, VscodeCassandraGlobal } from "./types";
import { Workspace } from "./workspace";

declare var extensionContextBundle: ExtensionContextBundle;

export function activate(context: vscode.ExtensionContext) {
    // initialize context
    (global as VscodeCassandraGlobal).extensionContextBundle = {
        context,
        eventDestroy: new Subject<void>(),
    };

    (global as any).vscode = vscode;
    // ---------------------------------------------------------
    const workspace = new Workspace();
    const config = new ConfigurationManager(context, workspace);
    const generator = new StatementGenerator();

    const commands = new VsCommands(config, generator);
    commands.register();
    Icons.context = context;

    let workbench: CassandraWorkbench = null;

    merge(
        from(config.configExists()).pipe(filter((exists) => exists === true)),
        config.stateConfiguration,
    ).pipe(
        take(1),
    ).subscribe(() => {

        workbench = new CassandraWorkbench(context, workspace);
        commands.setWorkbench(workbench);
        workbench.revealCqlPanel();

    });

}
export function deactivate() {
    extensionContextBundle.eventDestroy.next();
    extensionContextBundle = null;
    console.log("vscode-cassandra deactivated");

}
