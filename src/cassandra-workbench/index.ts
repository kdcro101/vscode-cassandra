import * as cassandra from "cassandra-driver";
import { from, merge, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as vscode from "vscode";
import { ColumnInfo, ColumnType } from "../cassandra-client";
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
            case "w2e_checkInputRequest":
                this.parseInputRespond(m as ProcMessageStrict<"w2e_checkInputRequest">);
                break;
            case "w2e_executeQueryRequest":
                this.executeQueryRespond(m as ProcMessageStrict<"w2e_executeQueryRequest">);
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
    private parseInputRespond(request: ProcMessageStrict<"w2e_checkInputRequest">) {
        const req = request.data;
        const id = req.id;
        const input = req.input;

        const result = this.parser.collectErrors(input);

        const mo: ProcMessageStrict<"e2w_checkInputResponse"> = {
            name: "e2w_checkInputResponse",
            data: {
                id,
                result,
            },
        };

        this.panel.emitMessage(mo);

    }
    private executeQueryRespond(m: ProcMessageStrict<"w2e_executeQueryRequest">) {

        const id = m.data.id;
        const clusterName = m.data.clusterName;
        const cql = m.data.cql;

        from(this.clusters.execute(clusterName, cql)).pipe(
        ).subscribe((resultset) => {

            const hasColumns = resultset.columns.length > 0 ? true : false;
            const rows = hasColumns ? resultset.rows : null;
            const columns = hasColumns ? resultset.columns.map((c) => {
                const out: ColumnInfo = {
                    name: c.name,
                    type: this.getTypes((c as any).type.code),
                };
                return out;
            }) : null;
            // const types = hasColumns ? resultset.columns.map((c: any) => this.getTypes(c.type.code)) : null;

            const message: ProcMessageStrict<"e2w_executeQueryResponse"> = {
                name: "e2w_executeQueryResponse",
                data: {
                    id,
                    result: {
                        hasColumns,
                        rows,
                        columns,
                    },
                },
            };
            this.panel.emitMessage(message);
        }, (e) => {
            const errorMessage: ProcMessageStrict<"e2w_executeQueryResponse"> = {
                name: "e2w_executeQueryResponse",
                data: {
                    id,
                    result: {
                        error: e,
                        hasColumns: false,
                    },
                },
            };
            this.panel.emitMessage(errorMessage);
        });

    }

    private getTypes(code: number): ColumnType {

        let out: ColumnType = null;

        switch (code) {
            case cassandra.types.dataTypes.custom:
                out = "custom";
                break;
            case cassandra.types.dataTypes.ascii:
                out = "ascii";
                break;
            case cassandra.types.dataTypes.bigint:
                out = "bigint";
                break;
            case cassandra.types.dataTypes.blob:
                out = "blob";
                break;
            case cassandra.types.dataTypes.boolean:
                out = "boolean";
                break;
            case cassandra.types.dataTypes.counter:
                out = "counter";
                break;
            case cassandra.types.dataTypes.decimal:
                out = "decimal";
                break;
            case cassandra.types.dataTypes.double:
                out = "double";
                break;
            case cassandra.types.dataTypes.float:
                out = "float";
                break;
            case cassandra.types.dataTypes.int:
                out = "int";
                break;
            case cassandra.types.dataTypes.text:
                out = "text";
                break;
            case cassandra.types.dataTypes.timestamp:
                out = "timestamp";
                break;
            case cassandra.types.dataTypes.uuid:
                out = "uuid";
                break;
            case cassandra.types.dataTypes.varchar:
                out = "varchar";
                break;
            case cassandra.types.dataTypes.varint:
                out = "varint";
                break;
            case cassandra.types.dataTypes.timeuuid:
                out = "timeuuid";
                break;
            case cassandra.types.dataTypes.inet:
                out = "inet";
                break;
            case cassandra.types.dataTypes.date:
                out = "date";
                break;
            case cassandra.types.dataTypes.time:
                out = "time";
                break;
            case cassandra.types.dataTypes.smallint:
                out = "smallint";
                break;
            case cassandra.types.dataTypes.tinyint:
                out = "tinyint";
                break;
            case cassandra.types.dataTypes.list:
                out = "list";
                break;
            case cassandra.types.dataTypes.map:
                out = "map";
                break;
            case cassandra.types.dataTypes.set:
                out = "set";
                break;
            case cassandra.types.dataTypes.udt:
                out = "udt";
                break;
            case cassandra.types.dataTypes.tuple:
                out = "tuple";
                break;
        }
        return out;
    }

}
