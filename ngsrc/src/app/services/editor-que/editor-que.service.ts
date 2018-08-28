import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { WorkbenchCqlStatement, WorkbenchEditor } from "../../../../../src/types/editor";
import { ProcMessage, ProcMessageStrict } from "../../../../../src/types/messages";
import { VscodeWebviewInterface } from "../../types/index";
import { MessageService } from "../message/message.service";

declare var vscode: VscodeWebviewInterface;
declare var window: Window;

@Injectable({
    providedIn: "root",
})
export class EditorQueService {
    private filenamePrefix = "script_";
    private filenameExt = "cql";

    public eventChange = new Subject<number>();
    private queCurrent: WorkbenchEditor[] = [];
    constructor(private messages: MessageService) {

        this.messages.eventMessage.pipe()
            .subscribe((d) => {
                this.processMessage(d);
            });

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
    private statementCreate(s: ProcMessageStrict<"e2w_editorCreate">) {
        console.log("statementPrepend");
        console.log(JSON.stringify(s.data));

        this.editorCreate(s.data.statement);

    }
    private editorCreate(statement: WorkbenchCqlStatement) {

        statement.filename = this.generateFilename();

        const e: WorkbenchEditor = {
            statement,
            resultset: null,
            executed: false,
            response: null,
        };

        console.log("---------------------------------------------");
        console.log(JSON.stringify(e));
        this.editorPrepend(e);
        console.log(`editor que len=${this.que.length}`);
        console.log(this.que);

    }
    private editorPrepend(e: WorkbenchEditor) {
        if (e == null) {
            return;
        }
        this.queCurrent = [e].concat(this.queCurrent);
        this.eventChange.next(0);
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

        this.eventChange.next(dest);
    }
}
