import { from } from "rxjs";
import * as vscode from "vscode";
import { CassandraClient } from "../cassandra-client";
import { ValidatedConfigClusterItem } from "../types";
import { Workspace } from "../workspace";
import { TreeviewProvider } from "./treeview-provider";
export class CassandraWorkbench {

    private clients: CassandraClient[] = [];

    constructor(
        private context: vscode.ExtensionContext,
        private workspace: Workspace,
        private config: ValidatedConfigClusterItem[],
    ) {
        from(Promise.all(config.map((i) => (new CassandraClient(i)).getStructure()))).pipe(

        ).subscribe((data) => {
            const treeProvider = new TreeviewProvider(config, data);
            context.subscriptions.push(vscode.window.registerTreeDataProvider("cassandraWorkbenchView", treeProvider));
        });

    }
    public start() {

    }
}
