import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { WorkbenchEditor } from "../../../../../src/types/editor";
import { ProcMessage, ProcMessageStrict } from "../../../../../src/types/messages";
import { VscodeWebviewInterface } from "../../types/index";
import { MessageService } from "../message/message.service";

declare var vscode: VscodeWebviewInterface;
declare var window: Window;

@Injectable({
    providedIn: "root",
})
export class EditorQueService {
    public eventChange = new Subject<void>();
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
                this.statementPrepend(message as ProcMessageStrict<"e2w_editorCreate">);
                break;
        }

    }
    private statementPrepend(s: ProcMessageStrict<"e2w_editorCreate">) {
        console.log("statementPrepend");
    }
}
