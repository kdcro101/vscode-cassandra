import { Injectable } from "@angular/core";

import { cloneDeep } from "lodash";
import { BehaviorSubject, from, ReplaySubject, Subject } from "rxjs";
import { concatMap, take } from "rxjs/operators";
import { ClusterExecuteResults } from "../../../../../src/clusters/index";
import { WorkbenchCqlStatement } from "../../../../../src/types/editor";
import { ProcMessage, ProcMessageStrict } from "../../../../../src/types/messages";
import { generateId } from "../../const/id";
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

    constructor(private messages: MessageService, private monaco: MonacoService) {

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
                    changes: [],
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
                changes: [],
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
        this.persistEditors();
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
    public removeAfter(index: number) {
        if (index < 0 || index >= this.list.length) {
            return;
        }
        const lastActive = this.index;
        this.listCurrent = this.listCurrent.filter((item, i) => i <= index);
        // activate tab
        if (lastActive <= index) {
            this.activate(0);
        } else {
            this.activate(this.listCurrent.length - 1);
        }
        // emit list change
        this.eventListChange.next();
        // persist state
        this.persistEditors();
    }
    public removeExcept(index: number) {
        if (index < 0 || index >= this.list.length) {
            return;
        }

        this.listCurrent = this.listCurrent.filter((item, i) => i === index);
        // activate tab
        this.activate(0);
        // emit list change
        this.eventListChange.next();
        // persist state
        this.persistEditors();
    }

    public remove(index: number) {
        if (index < 0 || index >= this.list.length) {
            return;
        }

        this.listCurrent.splice(index, 1);

        let nextActive: number = this.indexCurrent;

        if (this.listCurrent.length > 0 && index <= this.indexCurrent) {
            const minusOne = this.indexCurrent - 1;
            nextActive = minusOne >= 0 ? minusOne : 0;
        }
        // activate tab
        this.activate(nextActive);
        // emit list change
        this.eventListChange.next();
        // persist state
        this.persistEditors();
    }
}
