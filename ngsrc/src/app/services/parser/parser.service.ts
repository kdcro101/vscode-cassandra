import { Injectable } from "@angular/core";
import { fromEvent, Subject } from "rxjs";
import { filter, map, take, timeout } from "rxjs/operators";
import { ProcMessage, ProcMessageStrict } from "../../../../../src/types/messages";
import { VscodeWebviewInterface } from "../../types/index";

declare var vscode: VscodeWebviewInterface;

@Injectable({
    providedIn: "root"
})
export class ParserService {
    private isVscode: boolean = vscode == null ? false : true;
    private eventMessage = fromEvent<MessageEvent>(window, "message").pipe(map<MessageEvent, ProcMessage>((event) => event.data));
    constructor() {
        console.log(`starting ParserService isVscode=${this.isVscode}`);
    }
    public parse(input: string): Subject<string> {
        const out = new Subject<string>();

        const message: ProcMessageStrict<"w2e_parseInput"> = {
            name: "w2e_parseInput",
            data: input,
        };
        vscode.postMessage(message);
        this.eventMessage.pipe(
            filter((e) => e.name === "e2w_parseOutput"),
            take(1),
            map((e) => e as ProcMessageStrict<"e2w_parseOutput">),
            timeout(5000)
        ).subscribe((e) => {
            out.next(e.data);
        }, (e) => {
            out.error(e);
        });

        return out;
    }
}
