
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { from, Subject } from "rxjs";
import * as vscode from "vscode";
import { CqlLexer } from "./antlr/CqlLexer";
import { CqlParser } from "./antlr/CqlParser";
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

    const inputStream = new ANTLRInputStream(`select c_time,c_ascii,c_date,c_blob
from abc_keyspace.example WHERE c_bigint=123 and ;

DELETE FROM abc_keyspace.example WHERE`);

    const cqlLexer = new CqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(cqlLexer);
    const cqlParser = new CqlParser(tokenStream);

    const p = cqlParser.cqls();

    console.log("done");

}

// this method is called when your extension is deactivated
export function deactivate() {
    extensionContextBundle.eventDestroy.next();
    console.log("vscode-cassandra deactivated");

}
