
import { from, Subject } from "rxjs";
import * as vscode from "vscode";
import { CassandraWorkbench } from "./cassandra-workbench";
import { VsCommands } from "./commands";
import { ConfigurationManager } from "./configuration-manager";
import { TupleDataTypeValue } from "./data-type/class/tuple";
import { typeParser } from "./data-type/type-parser";
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

    // const a = new TupleDataTypeValue(`[1,2,3,"abeceda",["drugi","niz"]]`);

    // const b = a.value;
    // const c = a.stringValue;
    // console.log("");

    // const p = typeParser("frozen<tuple<text,frozen<map<int,int>>>>");
    const p = typeParser("userdata");
    console.log(p);
}

// this method is called when your extension is deactivated
export function deactivate() {
    extensionContextBundle.eventDestroy.next();
    console.log("vscode-cassandra deactivated");

}
