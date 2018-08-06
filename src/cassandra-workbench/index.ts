import { from, Subject } from "rxjs";
import * as vscode from "vscode";
import { CassandraClient } from "../cassandra-client";
import { ValidatedConfigClusterItem } from "../types";
import { WorkbenchPanel } from "../workbench-panel";
import { Workspace } from "../workspace";
import { TreeviewProvider } from "./treeview-provider";
export class CassandraWorkbench {

    public panel: WorkbenchPanel;
    private clients: CassandraClient[] = [];

    constructor(
        private context: vscode.ExtensionContext,
        private workspace: Workspace,
        private config: ValidatedConfigClusterItem[],
    ) {
        const treeProvider = new TreeviewProvider(config);
        context.subscriptions.push(vscode.window.registerTreeDataProvider("cassandraWorkbenchView", treeProvider));
        this.panel = new WorkbenchPanel(context, workspace);

    }
    public start() {
        this.panel.reveal();
    }
}
