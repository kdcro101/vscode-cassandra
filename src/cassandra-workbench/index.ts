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
        this.clients = config.filter((i) => i.valid === true).map((i) => new CassandraClient(i));
        const treeProvider = new TreeviewProvider(config);

        context.subscriptions.push(vscode.window.registerTreeDataProvider("cassandraWorkbenchView", treeProvider));

    }
    public start() {

    }
}
