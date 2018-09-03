import { Injectable } from "@angular/core";
import { fromEvent, Subject } from "rxjs";
import { filter, map, take, timeout } from "rxjs/operators";
import { CqlParserError } from "../../../../../src/parser/index";
import { ProcMessage, ProcMessageStrict } from "../../../../../src/types/messages";
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
    public collectErrors(input: string): Subject<CqlParserError[]> {
        const out = new Subject<CqlParserError[]>();
        const id = generateId();

        const message: ProcMessageStrict<"w2e_checkInputRequest"> = {
            name: "w2e_checkInputRequest",
            data: {
                id,
                input,
            },
        };
        vscode.postMessage(message);
        this.eventMessage.pipe(
            timeout(5000),
            filter((e) => e.name === "e2w_checkInputResponse"),
            filter((mi: ProcMessageStrict<"e2w_checkInputResponse">) => mi.data.id === id),
            take(1),
            map((e) => e as ProcMessageStrict<"e2w_checkInputResponse">),
        ).subscribe((e) => {
            out.next(e.data.result);
        }, (e) => {
            out.error(e);
        });

        return out;
    }
}
