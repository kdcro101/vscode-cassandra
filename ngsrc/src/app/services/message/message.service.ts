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

        fromEvent<ProcMessage>(window, "message").pipe()
        .subscribe((data) => {
            this.eventMessage.next(data);
        });

     }
    public emit(message: ProcMessage) {
        vscode.postMessage(message);
    }

}
