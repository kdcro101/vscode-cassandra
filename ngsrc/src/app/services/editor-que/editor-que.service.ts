import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ReplaySubject } from "rxjs";
import { WorkbenchCqlStatement, WorkbenchEditor } from "../../../../../src/types/editor";
import { ProcMessage, ProcMessageStrict } from "../../../../../src/types/messages";
import { MessageService } from "../message/message.service";

declare var persistedStatements: WorkbenchCqlStatement[];

@Injectable({
    providedIn: "root",
})
export class EditorQueService {
    private filenamePrefix = "script_";
    private filenameExt = "cql";

    public eventChangeQue = new Subject<void>();
    public stateActive = new ReplaySubject<[number, WorkbenchEditor]>(1);
    private queCurrent: WorkbenchEditor[] = [];

    public itemActive: number = -1;

    constructor(private messages: MessageService) {

        this.messages.eventMessage.pipe()
            .subscribe((d) => {
                this.processMessage(d);
            });

        if (Array.isArray(persistedStatements)) {
            this.queCurrent = persistedStatements.map((s) => this.statement2Editor(s));
        }

        if (this.que.length > 0) {
            this.activate(0);
        }

    }
    public get que() {
        return this.queCurrent;
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
        if (index < 0 || index >= this.que.length) {
            return;
        }

        this.itemActive = index;
        const e = this.que[index];

        this.stateActive.next([this.itemActive, e]);
    }
    private statementCreate(s: ProcMessageStrict<"e2w_editorCreate">) {
        console.log("statementPrepend");
        console.log(JSON.stringify(s.data));

        this.editorCreate(s.data.statement);

    }
    private statement2Editor(statement: WorkbenchCqlStatement): WorkbenchEditor {
        const e: WorkbenchEditor = {
            statement,
            resultset: null,
            executed: false,
            response: null,
        };

        return e;
    }
    private editorCreate(statement: WorkbenchCqlStatement) {

        statement.filename = this.generateFilename();

        const e: WorkbenchEditor = {
            statement,
            resultset: null,
            executed: false,
            response: null,
        };

        this.editorPrepend(e);

    }
    private editorPrepend(e: WorkbenchEditor) {
        if (e == null) {
            return;
        }
        this.queCurrent = [e].concat(this.queCurrent);
        this.eventChangeQue.next();
        this.activate(0);
    }
    private generateFilename(): string {
        const rx = new RegExp(`${this.filenamePrefix}\\d+\\.${this.filenameExt}`);
        const list = this.que.filter((i) => i.statement.filename.search(rx) === 0);

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

        const b = this.que[dest];
        this.que[dest] = this.que[source];
        this.que[source] = b;

        this.activate(dest);
    }
    public updateStatement(index: number, body: string) {
        if (index < 0 || index >= this.que.length) {
            return;
        }

        this.que[index].statement.body = body;
        this.persistEditors();
    }
    public persistEditors() {
        const statements = this.que.map((e) => e.statement);

        const m: ProcMessageStrict<"w2e_persistEditors"> = {
            name: "w2e_persistEditors",
            data: statements,
        };

        this.messages.emit(m);
    }
}
