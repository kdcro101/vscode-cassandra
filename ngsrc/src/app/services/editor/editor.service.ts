import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { cloneDeep } from "lodash";
import { BehaviorSubject, from, ReplaySubject, Subject } from "rxjs";
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

    private activeClusterName: string;
    private activeKeyspace: string;

    constructor(private messages: MessageService, private monaco: MonacoService, public dialog: MatDialog) {

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
    public get clusterName() {
        return this.activeClusterName;
    }
    public get keyspace() {
        return this.activeKeyspace;
    }
    public set clusterName(val: string) {
        console.log(`##################SETTING cluster = ${val}`);
        this.activeClusterName = val;
    }
    public set keyspace(val: string) {
        console.log(`##################SETTING keyspace = ${val}`);
        this.activeKeyspace = val;
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
                this.statementCreate(message as ProcMessageStrict<"e2w_editorCreate">);
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
    private statementCreate(s: ProcMessageStrict<"e2w_editorCreate">) {
        console.log("statementPrepend");
        console.log(JSON.stringify(s.data));

        this.editorCreate(s.data.statement);

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
        this.monaco.stateReady.pipe(
            take(1),
        ).subscribe(() => {

            statement.filename = this.generateFilename();

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

            this.editorPrepend(editor);
            this.persistEditors();

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
    public updateStatement(index: number, statement: WorkbenchCqlStatement) {
        if (index < 0 || index >= this.list.length) {
            return;
        }

        this.list[index].statement = statement;
        this.list[index].statement.modified = true;
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
    public duplicate(index) {
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

        for (let i = editorIndex; i < this.list.length; i++) {
            const eid = this.list[i].id;
            await this.remove(eid);
        }

        // this.listCurrent = this.listCurrent.filter((item, i) => i <= index);
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

        for (let i = 0; i < this.list.length; i++) {
            const eid = this.list[i].id;
            if (eid === editorId) {
                continue;
            }
            await this.remove(eid);
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
            from(modified === true ? this.dialogCloseUnsaved() : Promise.resolve(true))
                .pipe().subscribe((continueClose) => {

                    if (!continueClose) {
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
    public createEmpty(clusterName: string, keyspace: string) {
        const statement: WorkbenchCqlStatement = {
            id: generateId(),
            clusterName,
            keyspace,
            body: "",
            modified: false,
            filename: null,
            source: "action",

        };
        this.editorCreate(statement);
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

            this.messages.eventMessage.pipe(
                timeout(10000),
                filter((e) => e.name === "e2w_statementOpenResponse"),
                filter((mi: ProcMessageStrict<"e2w_statementOpenResponse">) => mi.data.id === id),
                take(1),
                map((e) => e as ProcMessageStrict<"e2w_statementOpenResponse">),
            ).subscribe((res) => {
                const data = res.data;
                if (!data) {
                    reject("no_data");
                    return;
                }
                if (data.responseType === "success") {

                    const statement: WorkbenchCqlStatement = {
                        id: generateId(),
                        body: data.body,
                        filename: data.fileName,
                        keyspace: this.keyspace,
                        clusterName: this.clusterName,
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
    private dialogCloseUnsaved(): Promise<boolean> {
        return new Promise((resolve, reject) => {

            const dialogRef = this.dialog.open(UiDialogUnsavedComponent, {
                width: "320px",
                data: false,
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
}
