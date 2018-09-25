
import * as fs from "fs-extra";
import * as path from "path";
import { from, Subject } from "rxjs";
import * as vscode from "vscode";
import { CassandraWorkbench } from "./cassandra-workbench";
import { VsCommands } from "./commands";
import { ConfigurationManager } from "./configuration-manager";
import { DataTypeValueBase } from "./data-type/base/data-type";
import { AsciiDataTypeValue } from "./data-type/class/ascii";
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
    // ---------------------------------------------------------
    const workspace = new Workspace();
    const config = new ConfigurationManager(context, workspace);
    const generator = new StatementGenerator();

    const commands = new VsCommands(config, generator);
    commands.register();
    Icons.context = context;

    let workbench: CassandraWorkbench = null;

    from(config.loadConfig()).pipe()
        .subscribe((clusterItems) => {

            workbench = new CassandraWorkbench(workspace, clusterItems);
            workbench.start();
            commands.setWorkbench(workbench);
        });

    const a = new AsciiDataTypeValue();

    const b = a.parse("šđčćć");
    const c = a.parse("abcdasdasd");
    console.log("");
}

// this method is called when your extension is deactivated
export function deactivate() {
    extensionContextBundle.eventDestroy.next();
    console.log("vscode-cassandra deactivated");

}
