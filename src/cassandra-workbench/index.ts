import { from, merge, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as vscode from "vscode";
import { Clusters } from "../clusters";
import { Completition } from "../completition";
import { generateId } from "../const/id";
import { InputParser } from "../parser";
import { Persistence } from "../persistence";
import { ExtensionContextBundle, ValidatedConfigClusterItem, WorkbenchCqlStatement } from "../types";
import { ProcMessage, ProcMessageStrict } from "../types/messages";
import { WorkbenchPanel } from "../workbench-panel";
import { Workspace } from "../workspace";
import { TreeviewProvider } from "./treeview-provider";

declare var extensionContextBundle: ExtensionContextBundle;

export class CassandraWorkbench {

    public panel: WorkbenchPanel;
    public treeProvider: TreeviewProvider = null;
    private context: vscode.ExtensionContext = extensionContextBundle.context;
    // private clients: CassandraClient[] = [];
    private eventPanelReset = new Subject<void>();
    private clusters: Clusters = null;
    private persistence: Persistence;
    private parser = new InputParser();

    private completition = new Completition();
    constructor(
        private workspace: Workspace,
        private config: ValidatedConfigClusterItem[],
    ) {
        this.clusters = new Clusters(config);
        this.persistence = new Persistence(workspace);
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

            from(this.persistence.loadStatements()).pipe()
                .subscribe((list) => {

                    this.panel = new WorkbenchPanel(this.workspace, list);
                    this.panel.eventDestroy.pipe(
                        takeUntil(merge(extensionContextBundle.eventDestroy, this.eventPanelReset)),
                    ).subscribe(() => {
                        this.resetPanel();
                    });
                    this.panel.eventMessage.pipe(
                        takeUntil(merge(extensionContextBundle.eventDestroy, this.eventPanelReset)),
                    ).subscribe((m) => {
                        this.onPanelMessage(m);
                    });

                    this.panel.start()
                        .then((result) => {
                            resolve();
                        }).catch((e) => {
                            reject(e);
                        });

                });
        });
    }
    public editorCreate(clusterIndex: number, keyspace: string, statementBody?: string): Promise<void> {
        return new Promise((resolve, reject) => {

            const clusters = this.clusters.getClusters();
            const c = clusters[clusterIndex];

            if (c == null) {
                reject("no_cluster");
                return;
            }

            from(this.revealCqlPanel()).pipe()
                .subscribe(() => {

                    const s: WorkbenchCqlStatement = {
                        id: generateId(),
                        body: statementBody,
                        filename: null,
                        keyspace,
                        clusterName: c.name,
                    };

                    const m: ProcMessageStrict<"e2w_editorCreate"> = {
                        name: "e2w_editorCreate",
                        data: {
                            execute: false,
                            statement: s,
                        },
                    };

                    this.panel.emitMessage(m);
                });

        });
    }
    private resetPanel() {
        this.panel = null;
        this.eventPanelReset.next();
    }
    private onPanelMessage = (m: ProcMessage) => {
        const name = m.name;
        switch (name) {
            case "w2e_getClustersRequest":
                const l = this.clusters.getClusters();
                const mGetClustersResponse: ProcMessageStrict<"e2w_getClustersResponse"> = {
                    name: "e2w_getClustersResponse",
                    data: l,
                };
                this.panel.emitMessage(mGetClustersResponse);
                break;
            case "w2e_persistEditors":
                const pm = m as ProcMessageStrict<"w2e_persistEditors">;
                this.persistence.saveStatements(pm.data);
                break;
            case "w2e_autocompleteRequest":
                this.autocompleteRespond(m as ProcMessageStrict<"w2e_autocompleteRequest">);
                break;
            case "w2e_parseInputRequest":
                this.parseInputRespond(m as ProcMessageStrict<"w2e_parseInputRequest">);
                break;

        }
    }
    private autocompleteRespond(request: ProcMessageStrict<"w2e_autocompleteRequest">) {
        const req = request.data;
        const res = this.completition.execute(req.partial);

        const id = req.id;
        const mo: ProcMessageStrict<"e2w_autocompleteResponse"> = {
            name: "e2w_autocompleteResponse",
            data: {
                id,
                result: res,
            },
        };

        this.panel.emitMessage(mo);

    }
    private parseInputRespond(request: ProcMessageStrict<"w2e_parseInputRequest">) {
        const req = request.data;
        const id = req.id;
        const input = req.input;

        const rootContext = this.parser.parse(input);

        const mo: ProcMessageStrict<"e2w_parseInputResponse"> = {
            name: "e2w_parseInputResponse",
            data: {
                id,
                result: null,
                errors: [],
            },
        };

        this.panel.emitMessage(mo);

    }

}
