import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { ProcMessageStrict } from "../../../../../src/types/messages";
import { MessageService } from "../message/message.service";

@Injectable({
    providedIn: "root",
})
export class SystemService {
    public stateReady = new ReplaySubject<void>(1);
    constructor(private message: MessageService) {

    }
    public runReady() {
        const m: ProcMessageStrict<"w2e_onReady"> = {
            name: "w2e_onReady",
            data: true,
        };
        this.message.emit(m);
        this.stateReady.next();
    }
}
