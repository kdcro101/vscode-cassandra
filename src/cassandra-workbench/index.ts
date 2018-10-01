import { from, merge, Subject } from "rxjs";
import { concatMap, map, takeUntil, tap } from "rxjs/operators";
import * as vscode from "vscode";
import { ColumnInfo } from "../cassandra-client";
import { ClusterExecuteResults, Clusters } from "../clusters";
import { Completition } from "../completition";
import { generateId } from "../const/id";
import { DataChangeProcessor } from "../data-change";
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

    private eventPanelReset = new Subject<void>();
    private clusters: Clusters = null;
    private persistence: Persistence;
    private changeProcessor: DataChangeProcessor;
    private parser = new InputParser();

    private completition = new Completition();
    constructor(
        private workspace: Workspace,
        private config: ValidatedConfigClusterItem[],
    ) {
        this.clusters = new Clusters(config);
        this.persistence = new Persistence(workspace);
        this.changeProcessor = new DataChangeProcessor(this.clusters);
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
                this.panel.panel.reveal();
                resolve();
                return;
            }

            from(this.persistence.loadEditorStatements()).pipe()
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
                        source: "action",
                        modified: statementBody == null ? false : true,
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
                this.persistence.saveEditorStatements(pm.data);
                break;
            case "w2e_autocompleteRequest":
                this.autocompleteRespond(m as ProcMessageStrict<"w2e_autocompleteRequest">);
                break;
            case "w2e_checkInputRequest":
                this.parseInputRespond(m as ProcMessageStrict<"w2e_checkInputRequest">);
                break;
            case "w2e_executeQueryRequest":
                this.executeQueryRespond(m as ProcMessageStrict<"w2e_executeQueryRequest">);
                break;
            case "w2e_getClusterStructRequest":
                this.getClusterStructureRespond(m as ProcMessageStrict<"w2e_getClusterStructRequest">);
                break;
            case "w2e_getHistoryRequest":
                this.getHistoryRespond(m as ProcMessageStrict<"w2e_getHistoryRequest">);
                break;
            case "w2e_executeDataChangeRequest":
                this.executeDataChangeRespond(m as ProcMessageStrict<"w2e_executeDataChangeRequest">);
                break;
            case "w2e_statementSaveRequest":
                this.saveStatementRespond(m as ProcMessageStrict<"w2e_statementSaveRequest">);
                break;
            case "w2e_statementOpenRequest":
                this.openStatementRespond(m as ProcMessageStrict<"w2e_statementOpenRequest">);
                break;

        }
    }
    private getHistoryRespond(request: ProcMessageStrict<"w2e_getHistoryRequest">) {
        const req = request.data;
        const id = req.id;

        this.persistence.history.get()
            .then((result) => {

                const out: ProcMessageStrict<"e2w_getHistoryResponse"> = {
                    name: "e2w_getHistoryResponse",
                    data: {
                        id,
                        list: result,
                    },
                };
                this.panel.emitMessage(out);

            }).catch((e) => {

                const out: ProcMessageStrict<"e2w_getHistoryResponse"> = {
                    name: "e2w_getHistoryResponse",
                    data: {
                        id,
                        list: [],
                        error: e,
                    },
                };
                this.panel.emitMessage(out);
            });

    }
    private openStatementRespond(request: ProcMessageStrict<"w2e_statementOpenRequest">) {
        const req = request.data;
        const id = req.id;

        this.persistence.statementOpen()
            .then((result) => {
                const out: ProcMessageStrict<"e2w_statementOpenResponse"> = {
                    name: "e2w_statementOpenResponse",
                    data: {
                        id,
                        responseType: result.responseType,
                        fileName: result.fileName,
                        fsPath: result.fsPath,
                        body: result.body,
                    },
                };

                this.panel.emitMessage(out);

            }).catch((e) => {
                console.error(e);
                const out: ProcMessageStrict<"e2w_statementSaveResponse"> = {
                    name: "e2w_statementSaveResponse",
                    data: {
                        id,
                        responseType: "error",
                        error: e,
                    },
                };
                this.panel.emitMessage(out);
            });

    }
    private saveStatementRespond(request: ProcMessageStrict<"w2e_statementSaveRequest">) {
        const req = request.data;
        const id = req.id;
        const saveAsMode = req.saveAsMode;

        this.persistence.statementSave(req.statement, saveAsMode)
            .then((result) => {
                const out: ProcMessageStrict<"e2w_statementSaveResponse"> = {
                    name: "e2w_statementSaveResponse",
                    data: {
                        id,
                        responseType: result.responseType,
                        fileName: result.fileName,
                        fsPath: result.fsPath,
                    },
                };

                this.panel.emitMessage(out);

            }).catch((e) => {
                console.error(e);
                const out: ProcMessageStrict<"e2w_statementSaveResponse"> = {
                    name: "e2w_statementSaveResponse",
                    data: {
                        id,
                        responseType: "error",
                        error: e,
                    },
                };
                this.panel.emitMessage(out);
            });
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
    private parseInputRespond(request: ProcMessageStrict<"w2e_checkInputRequest">) {
        const req = request.data;
        const id = req.id;
        const input = req.input;
        const clusterName = req.clusterName;
        const keyspaceInitial = req.keyspaceInitial;
        const clusterIndex = this.clusters.getClusterIndex(clusterName);

        if (clusterIndex === -1) {
            const er: ProcMessageStrict<"e2w_checkInputResponse"> = {
                name: "e2w_checkInputResponse",
                data: {
                    id,
                    error: true,
                },
            };
            this.panel.emitMessage(er);
            return;
        }
        from(this.clusters.getStructure(clusterIndex)).pipe(
            map((data) => this.parser.parse(input, data, keyspaceInitial)),
        ).subscribe((result) => {
            const mo: ProcMessageStrict<"e2w_checkInputResponse"> = {
                name: "e2w_checkInputResponse",
                data: {
                    id,
                    result,
                },
            };
            this.panel.emitMessage(mo);
        }, (e) => {
            const er: ProcMessageStrict<"e2w_checkInputResponse"> = {
                name: "e2w_checkInputResponse",
                data: {
                    id,
                    error: true,
                },
            };
            this.panel.emitMessage(er);
        });

    }
    private executeDataChangeRespond(m: ProcMessageStrict<"w2e_executeDataChangeRequest">) {
        const id = m.data.id;
        const req = m.data;
        const item = req.change;

        from(this.changeProcessor.execute(item)).pipe(

        ).subscribe(() => {
            const mo: ProcMessageStrict<"e2w_executeDataChangeResponse"> = {
                name: "e2w_executeDataChangeResponse",
                data: {
                    id,
                    result: {
                        success: true,
                    },
                },
            };
            this.panel.emitMessage(mo);

        }, (e) => {
            const mo: ProcMessageStrict<"e2w_executeDataChangeResponse"> = {
                name: "e2w_executeDataChangeResponse",
                data: {
                    id,
                    result: {
                        success: false,
                        error: e,
                    },
                },
            };
            this.panel.emitMessage(mo);
        });

    }
    private executeQueryRespond(m: ProcMessageStrict<"w2e_executeQueryRequest">) {

        const id = m.data.id;
        const clusterName = m.data.clusterName;
        const keyspaceInitial = m.data.keyspaceInitial;
        const cql = m.data.cql;

        from(this.clusters.execute(clusterName, keyspaceInitial, cql)).pipe(
            tap((result) => {
                this.persistence.history.append(clusterName, keyspaceInitial, cql);
            }),
        ).subscribe((result: ClusterExecuteResults) => {

            const message: ProcMessageStrict<"e2w_executeQueryResponse"> = {
                name: "e2w_executeQueryResponse",
                data: {
                    id,
                    result,
                },
            };
            this.panel.emitMessage(message);
        }, (e) => {
            const errorMessage: ProcMessageStrict<"e2w_executeQueryResponse"> = {
                name: "e2w_executeQueryResponse",
                data: {
                    id,
                    result: null,
                    error: e,
                },
            };
            this.panel.emitMessage(errorMessage);
        });

    }
    private getClusterStructureRespond(m: ProcMessageStrict<"w2e_getClusterStructRequest">) {
        const clusterName = m.data.clusterName;
        const clusterIndex = this.clusters.getClusterIndex(clusterName);
        const id = m.data.id;

        this.clusters.getStructure(clusterIndex, false)
            .then((result) => {

                const out: ProcMessageStrict<"e2w_getClusterStructResponse"> = {
                    name: "e2w_getClusterStructResponse",
                    data: {
                        id,
                        result,
                    },
                };
                this.panel.emitMessage(out);

            }).catch((e) => {
                console.log(e);
                const out: ProcMessageStrict<"e2w_getClusterStructResponse"> = {
                    name: "e2w_getClusterStructResponse",
                    data: {
                        id,
                        error: true,
                        result: null,
                    },

                };
                this.panel.emitMessage(out);
            });
    }

}
