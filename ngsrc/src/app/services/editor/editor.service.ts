import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { cloneDeep } from "lodash";
import { BehaviorSubject, from, ReplaySubject, Subject, zip } from "rxjs";
import { timeout } from "rxjs/operators";
import { concatMap, filter, map, take } from "rxjs/operators";
import { OpenStatementResultType, SaveStatementResultType } from "../../../../../src/persistence";
import { WorkbenchCqlStatement } from "../../../../../src/types/editor";
import { ProcMessage, ProcMessageStrict } from "../../../../../src/types/messages";
import { generateId } from "../../const/id";
import { UiDialogUnsavedComponent } from "../../dialogs/ui-dialog-unsaved/ui-dialog-unsaved.component";
import { WorkbenchEditor } from "../../types/index";
import { MessageService } from "../message/message.service";
import { MonacoService } from "../monaco/monaco.service";
import { WorkspaceService } from "../workspace/workspace.service";

declare var persistedStatements: WorkbenchCqlStatement[];

@Injectable({
    providedIn: "root",
})
export class EditorService {
    private filenamePrefix = "script_";
    private filenameExt = "cql";

    public eventListChange = new Subject<void>();
    public stateActive = new ReplaySubject<[number, WorkbenchEditor]>(1);
    private listCurrent: WorkbenchEditor[] = [];

    private indexCurrent: number = -1;

    // private activeClusterName: string;
    // private activeKeyspace: string;

    constructor(
        private messages: MessageService,
        private monaco: MonacoService,
        private workspace: WorkspaceService,
        public dialog: MatDialog) {

        this.messages.eventMessage.pipe()
            .subscribe((d) => {
                this.processMessage(d);
            });

        if (Array.isArray(persistedStatements)) {

            from(persistedStatements).pipe(
                concatMap((s) => this.persistedStatement2Editor(s)),
            ).subscribe((e) => {
                this.listCurrent.push(e);
            }, (e) => { }, () => {
                if (this.list.length > 0) {
                    this.activate(0);
                }
            });
        }

    }
    public get index() {
        return this.indexCurrent;
    }
    public get list() {
        return this.listCurrent;
    }
    private processMessage(message: ProcMessage) {
        const name = message.name;

        switch (name) {
            case "e2w_editorCreate":
                this.onStatementCreate(message as ProcMessageStrict<"e2w_editorCreate">);
                break;
        }

    }
    public activate(index: number) {
        if (index < 0 || index >= this.list.length) {
            this.indexCurrent = -1;
            this.stateActive.next([this.indexCurrent, null]);
            return;
        }

        this.indexCurrent = index;
        const e = this.list[index];
        this.stateActive.next([this.indexCurrent, e]);

    }

    private persistedStatement2Editor(statement: WorkbenchCqlStatement): Promise<WorkbenchEditor> {
        return new Promise((resolve, reject) => {

            this.monaco.stateReady.pipe(
                take(1),
            ).subscribe(() => {

                const editor: WorkbenchEditor = {
                    id: generateId(),
                    statement,
                    result: null,
                    executed: false,
                    dataChanges: [],
                    model: monaco.editor.createModel(statement.body, "cql"),
                    stateExecuting: new BehaviorSubject<boolean>(false),
                    eventResult: new Subject<void>(),
                };
                resolve(editor);
            }, (e) => {
                reject(e);
            });
        });
    }
    private editorCreate(statement: WorkbenchCqlStatement) {
        zip(
            this.workspace.getActiveClusterKeyspace(),
            this.monaco.stateReady,
        ).pipe(
            take(1),
        ).subscribe((result) => {

            const clusterKeyspace = result[0];

            statement.filename = statement.filename == null ? this.generateFilename() : statement.filename;

            statement.clusterName = statement.clusterName == null ? clusterKeyspace.clusterName : statement.clusterName;
            statement.keyspace = statement.keyspace == null ? clusterKeyspace.keyspace : statement.keyspace;

            const editor: WorkbenchEditor = {
                id: generateId(),
                statement,
                result: null,
                executed: false,
                dataChanges: [],
                model: monaco.editor.createModel(statement.body, "cql"),
                stateExecuting: new BehaviorSubject<boolean>(false),
                eventResult: new Subject<void>(),
            };

            from(Promise.all(
                this.list.filter((i) => statement.fsPath != null && i.statement.fsPath === statement.fsPath)
                .map((i) => {
                    console.log(`REMOVING EDITOR WITH fsPath=${statement.fsPath}`);
                    return this.remove(i.id);
                }))).subscribe(() => {

                    this.editorPrepend(editor);
                    this.persistEditors();

                });

        });
    }
    private editorPrepend(e: WorkbenchEditor) {
        if (e == null) {
            return;
        }
        this.listCurrent = [e].concat(this.listCurrent);
        this.eventListChange.next();
        this.activate(0);
    }
    private generateFilename(): string {
        const rx = new RegExp(`${this.filenamePrefix}\\d+\\.${this.filenameExt}`);
        const list = this.list.filter((i) => i.statement.filename.search(rx) === 0);

        if (list.length === 0) {
            console.log("que len zero");
            return `${this.filenamePrefix}1.${this.filenameExt}`;
        }

        const nums: number[] = list.map((i) => {
            const m = i.statement.filename.match(/\d+/);
            if (m == null) {
                return 0;
            }
            const val = parseInt(m[0], 10);

            return val;
        }).sort();

        const last = nums.length > 0 ? nums[nums.length - 1] : 0;
        const next = last + 1;
        const fn = `${this.filenamePrefix}${next}.${this.filenameExt}`;
        return fn;
    }

    public swap(source: number, dest: number) {

        const b = this.list[dest];
        this.list[dest] = this.list[source];
        this.list[source] = b;

        this.activate(dest);
        this.persistEditors();
    }
    public updateStatement(editorId: string, statement: WorkbenchCqlStatement, isCodeModified: boolean) {
        const editorIndex = this.list.findIndex((e) => e.id === editorId);

        if (editorIndex < 0) {
            return;
        }
        // const targetStatement = this.list[editorIndex].statement;
        this.list[editorIndex].statement = statement;

        if (isCodeModified) {
            this.list[editorIndex].statement.modified = isCodeModified;
        }

        this.persistEditors();
        this.eventListChange.next();
    }
    public persistEditors() {
        const statements = this.list.map((e) => e.statement);

        const m: ProcMessageStrict<"w2e_persistEditors"> = {
            name: "w2e_persistEditors",
            data: statements,
        };

        this.messages.emit(m);
    }
    public duplicate(index: number) {
        if (index < 0 || index >= this.list.length) {
            return;
        }
        const item = this.list[index];
        const statement = cloneDeep(item.statement);
        statement.source = "action";

        this.editorCreate(statement);
    }
    public async removeAfter(editorId: string): Promise<void> {

        const editorIndex = this.list.findIndex((e) => e.id === editorId);

        if (editorIndex < 0) {
            return;
        }

        const lastActive = this.index;
        const ids = this.list.reduce((acc, cur, i) => {
            if (i > editorIndex) {
                acc.push(cur.id);
            }
            return acc;
        }, []);

        for (let i = 0; i < ids.length; i++) {
            await this.remove(ids[i]);
        }

        // activate tab
        if (lastActive <= editorIndex) {
            this.activate(0);
        } else {
            this.activate(this.list.length - 1);
        }
        // emit list change
        this.eventListChange.next();
        // persist state
        this.persistEditors();
    }
    public async removeExcept(editorId: string): Promise<void> {

        const editorIndex = this.list.findIndex((e) => e.id === editorId);

        if (editorIndex < 0) {
            return;
        }

        const ids = this.list.reduce((acc, cur, i) => {
            if (cur.id !== editorId) {
                acc.push(cur.id);
            }
            return acc;
        }, []);

        for (let i = 0; i < ids.length; i++) {
            await this.remove(ids[i]);
        }

        // activate tab
        this.activate(0);
        // emit list change
        this.eventListChange.next();
        // persist state
        this.persistEditors();
    }

    public remove(editorId: string): Promise<void> {
        return new Promise((resolve, reject) => {

            const editorIndex = this.list.findIndex((e) => e.id === editorId);

            if (editorIndex < 0) {
                resolve();
                return;
            }
            const editor = this.list[editorIndex];
            const modified = editor.statement.modified;

            // if modified verify close with dialog!
            from(modified === true ? this.dialogCloseUnsaved(editor.statement.filename) : Promise.resolve(true))
                .pipe().subscribe((continueClose) => {

                    if (continueClose !== true) {
                        resolve();
                        return;
                    }

                    this.list.splice(editorIndex, 1);
                    let nextActive: number = this.indexCurrent;

                    if (this.listCurrent.length > 0 && editorIndex <= this.indexCurrent) {
                        const minusOne = this.indexCurrent - 1;
                        nextActive = minusOne >= 0 ? minusOne : 0;
                    }
                    // activate tab
                    this.activate(nextActive);
                    // emit list change
                    this.eventListChange.next();
                    // persist state
                    this.persistEditors();
                    resolve();

                });

        });
    }
    public save(editorId: string, saveAsMode: boolean = false): Promise<SaveStatementResultType> {
        return new Promise((resolve, reject) => {
            console.log(`saving editor=${editorId}`);
            const editorIndex = this.list.findIndex((e) => e.id === editorId);

            if (editorIndex < 0) {
                reject("no_editor");
                return;
            }

            const id = generateId();

            const m: ProcMessageStrict<"w2e_statementSaveRequest"> = {
                name: "w2e_statementSaveRequest",
                data: {
                    id,
                    statement: this.list[editorIndex].statement,
                    saveAsMode,
                },
            };

            this.messages.eventMessage.pipe(
                timeout(10000),
                filter((e) => e.name === "e2w_statementSaveResponse"),
                filter((mi: ProcMessageStrict<"e2w_statementSaveResponse">) => mi.data.id === id),
                take(1),
                map((e) => e as ProcMessageStrict<"e2w_statementSaveResponse">),
            ).subscribe((res) => {
                const data = res.data;
                if (!data) {
                    reject("no_data");
                    return;
                }
                if (data.responseType === "success") {

                    this.list[editorIndex].statement.fsPath = data.fsPath;
                    this.list[editorIndex].statement.filename = data.fileName;
                    this.list[editorIndex].statement.modified = false;

                    this.persistEditors();
                    this.eventListChange.next();

                    resolve(data.responseType);

                } else if (data.responseType === "canceled") {
                    resolve(data.responseType);
                } else {
                    reject(data.error);
                }
            }, (e) => {
                console.log(e);
                reject(e);
            });

            this.messages.emit(m);

        });
    }
    public createEmpty(): Promise<void> {
        return new Promise((resolve, reject) => {

            this.workspace.getActiveClusterKeyspace()
                .then((clusterKeyspace) => {
                    const statement: WorkbenchCqlStatement = {
                        id: generateId(),
                        clusterName: clusterKeyspace.clusterName,
                        keyspace: clusterKeyspace.keyspace,
                        body: "",
                        modified: false,
                        filename: null,
                        source: "action",

                    };
                    this.editorCreate(statement);

                }).catch((e) => {
                    console.log(e);
                    reject(e);
                });

        });
    }
    public open(): Promise<OpenStatementResultType> {
        return new Promise((resolve, reject) => {
            const id = generateId();
            const m: ProcMessageStrict<"w2e_statementOpenRequest"> = {
                name: "w2e_statementOpenRequest",
                data: {
                    id,
                },
            };

            zip(
                this.messages.eventMessage.pipe(
                    timeout(10000),
                    filter((e) => e.name === "e2w_statementOpenResponse"),
                    filter((mi: ProcMessageStrict<"e2w_statementOpenResponse">) => mi.data.id === id),
                    take(1),
                    map((e) => e as ProcMessageStrict<"e2w_statementOpenResponse">),
                ),
                this.workspace.getActiveClusterKeyspace(),
            ).pipe().subscribe((results) => {
                const messageData = results[0];
                const clusterKeyspace = results[1];
                const data = messageData.data;
                if (!data) {
                    reject("no_data");
                    return;
                }
                if (data.responseType === "success") {

                    const statement: WorkbenchCqlStatement = {
                        id: generateId(),
                        body: data.body,
                        filename: data.fileName,
                        clusterName: clusterKeyspace.clusterName,
                        keyspace: clusterKeyspace.keyspace,
                        source: "storage",
                        fsPath: data.fsPath,
                        modified: false,
                    };

                    this.persistedStatement2Editor(statement)
                        .then((editor) => {

                            this.editorPrepend(editor);
                            this.persistEditors();
                            this.eventListChange.next();

                            resolve(data.responseType);

                        }).catch((e) => {
                            reject(e);
                        });

                } else if (data.responseType === "canceled") {
                    resolve(data.responseType);
                } else {
                    reject(data.error);
                }
            }, (e) => {
                console.log(e);
                reject(e);
            });

            this.messages.emit(m);

        });

    }
    private dialogCloseUnsaved(filename: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            const dialogRef = this.dialog.open(UiDialogUnsavedComponent, {
                width: "320px",
                data: filename,
            });

            dialogRef.afterClosed().subscribe(result => {
                console.log("The dialog was closed");
                const out = result === true ? true : false;
                resolve(out);
            }, (e) => {
                console.log(e);
                resolve(false);
            });
        });
    }
    private onStatementCreate(s: ProcMessageStrict<"e2w_editorCreate">) {
        this.editorCreate(s.data.statement);
    }
}
