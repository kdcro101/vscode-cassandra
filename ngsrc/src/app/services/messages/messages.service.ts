import { Injectable } from "@angular/core";

import { fromEvent, Subject } from "rxjs";
import { ProcMessage, ProcMessageStrict } from "../../../../../src/types/messages";
import { VscodeWebviewInterface } from "../../types/index";

declare var vscode: VscodeWebviewInterface;
declare var window: Window;

@Injectable({
    providedIn: "root",
})
export class MessagesService {
    public eventMessage = new Subject<any>();
    constructor() {

        fromEvent<ProcMessage>(window, "message").pipe()
        .subscribe((data) => {
            this.eventMessage.next(data);
        });

     }
    public emit(message: ProcMessage) {
        vscode.postMessage(message);
    }
    public emitStateReady() {
        const m: ProcMessageStrict<"w2e_onReady"> = {
            name: "w2e_onReady",
            data: true,
        };
        this.emit(m);
    }
}
