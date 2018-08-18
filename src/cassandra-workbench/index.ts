import { from, Subject } from "rxjs";
import * as vscode from "vscode";
import { CassandraClient } from "../cassandra-client";
import { ValidatedConfigClusterItem } from "../types";
import { WorkbenchPanel } from "../workbench-panel";
import { Workspace } from "../workspace";
import { TreeviewProvider } from "./treeview-provider";
export class CassandraWorkbench {

    public panel: WorkbenchPanel;
    public treeProvider: TreeviewProvider = null;

    private clients: CassandraClient[] = [];

    constructor(
        private context: vscode.ExtensionContext,
        private workspace: Workspace,
        private config: ValidatedConfigClusterItem[],
    ) {
        this.treeProvider = new TreeviewProvider(config);

        context.subscriptions.push(vscode.window.registerTreeDataProvider("cassandraWorkbenchView", this.treeProvider));
        this.panel = new WorkbenchPanel(context, workspace);

    }
    public start() {
        this.panel.reveal();
    }
    public refreshTree() {
        if (this.treeProvider == null) {
            return;
        }
        this.treeProvider.refresh();
    }
}
