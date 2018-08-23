import { from, merge, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as vscode from "vscode";
import { CassandraClient } from "../cassandra-client";
import { Clusters } from "../clusters";
import { ExtensionContextBundle, ValidatedConfigClusterItem } from "../types";
import { WorkbenchPanel } from "../workbench-panel";
import { Workspace } from "../workspace";
import { TreeviewProvider } from "./treeview-provider";

declare var extensionContextBundle: ExtensionContextBundle;

export class CassandraWorkbench {

    public panel: WorkbenchPanel;
    public treeProvider: TreeviewProvider = null;
    private context: vscode.ExtensionContext = extensionContextBundle.context;
    private clients: CassandraClient[] = [];
    private eventPanelReset = new Subject<void>();
    private clusters: Clusters = null;
    constructor(
        private workspace: Workspace,
        private config: ValidatedConfigClusterItem[],
    ) {
        this.clusters = new Clusters(config);
    }
    public start() {
        this.treeProvider = new TreeviewProvider(this.clusters);
        this.context.subscriptions.push(vscode.window.registerTreeDataProvider("cassandraWorkbenchView", this.treeProvider));
    }
    public refreshClusterTree() {
        if (this.treeProvider == null) {
            return;
        }
        this.treeProvider.refresh();
    }
    public revealCqlPanel() {
        return new Promise((resolve, reject) => {
            if (this.panel != null) {
                resolve();
                return;
            }

            this.panel = new WorkbenchPanel(this.workspace);
            this.panel.eventDestroy.pipe(
                takeUntil(merge(extensionContextBundle.eventDestroy, this.eventPanelReset)),
            ).subscribe(() => {
                this.resetPanel();
            });

            this.panel.start()
                .then((result) => {
                    resolve();
                }).catch((e) => {
                    reject(e);
                });

        });
    }
    public editorCreate(clusterIndex: number, keyspace: string, statementBody?: string): Promise<void> {
        return new Promise((resolve, reject) => {

            from(this.revealCqlPanel()).pipe()
                .subscribe(() => {

                });

        });
    }
    private resetPanel() {
        this.panel = null;
        this.eventPanelReset.next();
    }
}
