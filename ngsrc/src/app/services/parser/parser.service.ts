import { Injectable } from "@angular/core";
import { fromEvent, Subject } from "rxjs";
import { filter, map, take, timeout } from "rxjs/operators";
import { ParseInputResponse, ProcMessage, ProcMessageStrict } from "../../../../../src/types/messages";
import { generateId } from "../../const/id";
import { VscodeWebviewInterface } from "../../types/index";

declare var vscode: VscodeWebviewInterface;

@Injectable({
    providedIn: "root",
})
export class ParserService {
    private isVscode: boolean = vscode == null ? false : true;
    private eventMessage = fromEvent<MessageEvent>(window, "message").pipe(map<MessageEvent, ProcMessage>((event) => event.data));
    constructor() {
        console.log(`starting ParserService isVscode=${this.isVscode}`);
    }
    public parse(input: string): Subject<ParseInputResponse> {
        const out = new Subject<ParseInputResponse>();
        const id = generateId();

        const message: ProcMessageStrict<"w2e_parseInputRequest"> = {
            name: "w2e_parseInputRequest",
            data: {
                id,
                input,
            },
        };
        vscode.postMessage(message);
        this.eventMessage.pipe(
            timeout(5000),
            filter((e) => e.name === "e2w_parseInputResponse"),
            filter((mi: ProcMessageStrict<"e2w_parseInputResponse">) => mi.data.id === id),
            take(1),
            map((e) => e as ProcMessageStrict<"e2w_parseInputResponse">),
        ).subscribe((e) => {
            out.next(e.data);
        }, (e) => {
            out.error(e);
        });

        return out;
    }
}
