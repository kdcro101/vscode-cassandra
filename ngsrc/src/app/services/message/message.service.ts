import { Injectable } from "@angular/core";
import { fromEvent, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { ProcMessage } from "../../../../../src/types";
import { VscodeWebviewInterface } from "../../types/index";

declare var vscode: VscodeWebviewInterface;
declare var window: Window;

@Injectable({
    providedIn: "root",
})
export class MessageService {
    public eventMessage = new Subject<ProcMessage>();
    constructor() {

        fromEvent<MessageEvent>(window, "message").pipe(
            tap((m) => console.log(`[MessageEvent] ${m.data.name}`)),
        ).subscribe((message) => {
            this.eventMessage.next(message.data);
        });

    }
    public emit(message: ProcMessage) {
        vscode.postMessage(message);
    }

}
