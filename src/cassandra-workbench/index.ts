import * as path from "path";
import { from, merge, Subject } from "rxjs";
import { concatMap, map, takeUntil, tap } from "rxjs/operators";
import * as vscode from "vscode";
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

import * as clipboardy from "clipboardy";

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
    public editorCreate(clusterIndex: number, keyspace: string, statementBody?: string, fsPath?: string): Promise<void> {
        return new Promise((resolve, reject) => {

            const clusters = this.clusters.getClusters();

            clusterIndex = clusterIndex == null ? -1 : clusterIndex;

            const vClusterName = clusterIndex === -1 ? null : clusters[clusterIndex].name;
            const vKeyspace = keyspace == null ? null : keyspace;

            const vFilename = fsPath == null ? null : path.basename(fsPath);

            from(this.revealCqlPanel()).pipe()
                .subscribe(() => {

                    const s: WorkbenchCqlStatement = {
                        id: generateId(),
                        body: statementBody,
                        filename: vFilename,
                        fsPath,
                        clusterName: vClusterName,
                        keyspace: vKeyspace,
                        source: fsPath == null ? "action" : "storage",
                        modified: fsPath == null ? true : false,
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
            case "w2e_clipboardCopyRequest":
                this.clipboardCopyRespond(m as ProcMessageStrict<"w2e_clipboardCopyRequest">);
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
            case "w2e_setActiveClusterNameRequest":
                this.setActiveClusterNameRespond(m as ProcMessageStrict<"w2e_setActiveClusterNameRequest">);
                break;
            case "w2e_setActiveKeyspaceRequest":
                this.SetActiveKeyspaceRespond(m as ProcMessageStrict<"w2e_setActiveKeyspaceRequest">);
                break;
            case "w2e_getActiveKeyspaceRequest":
                this.getActiveKeyspaceRespond(m as ProcMessageStrict<"w2e_getActiveKeyspaceRequest">);
                break;
            case "w2e_getActiveClusterAndKeyspaceRequest":
                this.getActiveClusterAndKeyspaceRespond(m as ProcMessageStrict<"w2e_getActiveClusterAndKeyspaceRequest">);
                break;

        }
    }

    private clipboardCopyRespond(request: ProcMessageStrict<"w2e_clipboardCopyRequest">) {
        const id = request.data.id;

        clipboardy.writeSync(request.data.data);
        const out: ProcMessageStrict<"e2w_clipboardCopyResponse"> = {
            name: "e2w_clipboardCopyResponse",
            data: {
                id,
            },
        };
        this.panel.emitMessage(out);
    }
    private getActiveClusterAndKeyspaceRespond(request: ProcMessageStrict<"w2e_getActiveClusterAndKeyspaceRequest">) {
        const req = request.data;
        const id = req.id;

        try {

            let clusterName: string = this.workspace.read("activeClusterName") || null;
            let keyspace: string = null;

            if (!clusterName) {
                clusterName = null;
                keyspace = null;
            } else {

                if (!this.clusters.isValidName(clusterName)) {
                    throw new Error("invalid_cluster_name");
                }
                const pairs = this.workspace.read("activeKeyspace") || [];
                const clusterIndex = pairs.findIndex((i) => i[0] === clusterName);

                if (clusterIndex < 0) {
                    keyspace = null;
                } else {
                    keyspace = pairs[clusterIndex][1];
                }
            }
            const out: ProcMessageStrict<"e2w_getActiveClusterAndKeyspaceResponse"> = {
                name: "e2w_getActiveClusterAndKeyspaceResponse",
                data: {
                    id,
                    success: true,
                    clusterName,
                    keyspace,
                },
            };
            this.panel.emitMessage(out);

        } catch (e) {
            const errorOut: ProcMessageStrict<"e2w_getActiveClusterAndKeyspaceResponse"> = {
                name: "e2w_getActiveClusterAndKeyspaceResponse",
                data: {
                    id,
                    success: false,
                    keyspace: null,
                    clusterName: null,
                    error: e,
                },
            };
            this.panel.emitMessage(errorOut);
        }
    }
    private getActiveKeyspaceRespond(request: ProcMessageStrict<"w2e_getActiveKeyspaceRequest">) {
        const req = request.data;
        const id = req.id;
        const clusterName = req.clusterName;
        try {

            if (!this.clusters.isValidName(clusterName)) {
                throw new Error("invalid_cluster_name");
            }

            const pairs = this.workspace.read("activeKeyspace") || [];
            const clusterIndex = pairs.findIndex((i) => i[0] === clusterName);
            let keyspace: string = null;

            if (clusterIndex < 0) {
                keyspace = null;
            } else {
                keyspace = pairs[clusterIndex][1];
            }

            const out: ProcMessageStrict<"e2w_getActiveKeyspaceResponse"> = {
                name: "e2w_getActiveKeyspaceResponse",
                data: {
                    id,
                    success: true,
                    keyspace,
                },
            };
            this.panel.emitMessage(out);

        } catch (e) {
            const errorOut: ProcMessageStrict<"e2w_getActiveKeyspaceResponse"> = {
                name: "e2w_getActiveKeyspaceResponse",
                data: {
                    id,
                    success: false,
                    keyspace: null,
                    error: e,
                },
            };
            this.panel.emitMessage(errorOut);
        }

    }
    private SetActiveKeyspaceRespond(request: ProcMessageStrict<"w2e_setActiveKeyspaceRequest">) {
        const req = request.data;
        const id = req.id;
        const clusterName = req.clusterName;
        const keyspace = req.keyspace;
        try {

            if (!this.clusters.isValidName(clusterName)) {
                throw new Error("invalid_cluster_name");
            }

            const pairs = this.workspace.read("activeKeyspace") || [];
            const clusterIndex = pairs.findIndex((i) => i[0] === clusterName);

            if (clusterIndex < 0) {
                pairs.push([clusterName, keyspace]);
            } else {
                pairs[clusterIndex][1] = keyspace;
            }

            this.workspace.write("activeKeyspace", pairs);

            const out: ProcMessageStrict<"e2w_setActiveClusterNameResponse"> = {
                name: "e2w_setActiveClusterNameResponse",
                data: {
                    id,
                    success: true,
                },
            };
            this.panel.emitMessage(out);

        } catch (e) {
            const errorOut: ProcMessageStrict<"e2w_setActiveClusterNameResponse"> = {
                name: "e2w_setActiveClusterNameResponse",
                data: {
                    id,
                    success: false,
                    error: e,
                },
            };
            this.panel.emitMessage(errorOut);
        }

    }
    private setActiveClusterNameRespond(request: ProcMessageStrict<"w2e_setActiveClusterNameRequest">) {
        const req = request.data;
        const id = req.id;
        const clusterName = req.clusterName;
        try {

            if (!this.clusters.isValidName(clusterName)) {
                throw new Error("invalid_cluster_name");
            }

            this.workspace.write("activeClusterName", clusterName);

            const out: ProcMessageStrict<"e2w_setActiveClusterNameResponse"> = {
                name: "e2w_setActiveClusterNameResponse",
                data: {
                    id,
                    success: true,
                },
            };
            this.panel.emitMessage(out);

        } catch (e) {
            const errorOut: ProcMessageStrict<"e2w_setActiveClusterNameResponse"> = {
                name: "e2w_setActiveClusterNameResponse",
                data: {
                    id,
                    success: false,
                    error: e,
                },
            };
            this.panel.emitMessage(errorOut);

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
        const clusterIndex = this.clusters.getClusterIndex(clusterName);

        from(this.clusters.execute(clusterName, keyspaceInitial, cql)).pipe(
            tap((result) => {
                this.persistence.history.append(clusterName, keyspaceInitial, cql);
            }),
            tap((result) => {
                const message: ProcMessageStrict<"e2w_executeQueryResponse"> = {
                    name: "e2w_executeQueryResponse",
                    data: {
                        id,
                        result,
                    },
                };
                this.panel.emitMessage(message);
            }),
            concatMap((result) => {
                return new Promise((resolve, reject) => {

                    if (!result.analysis.alterStructure) {
                        resolve(result);
                        return;
                    }

                    this.clusters.invalidateStructure(clusterIndex);
                    this.treeProvider.onDidChangeTreeDataEmmiter.fire();
                    resolve();

                });
            }),
        ).subscribe((result: ClusterExecuteResults) => {

            if (result.analysis.alterStructure) {
                console.log("ALTER STRUCTURE RESULT!");
            }

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
