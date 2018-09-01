import { Injectable } from "@angular/core";

import { fromEvent, Subject } from "rxjs";
import { ProcMessage, ProcMessageStrict } from "../../../../../src/types";
import { VscodeWebviewInterface } from "../../types/index";

declare var vscode: VscodeWebviewInterface;
declare var window: Window;

@Injectable({
    providedIn: "root",
})
export class MessageService {
    public eventMessage = new Subject<ProcMessage>();
    constructor() {

        fromEvent<MessageEvent>(window, "message").pipe()
        .subscribe((message) => {
            this.eventMessage.next(message.data);
        });

     }
    public emit(message: ProcMessage) {
        console.log("EMITTING");
        console.log(message);
        vscode.postMessage(message);
    }

}
