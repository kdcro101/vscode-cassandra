import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { filter, map, take, timeout } from "rxjs/operators";
import { ExecuteQueryResponse, ProcMessageStrict } from "../../../../../src/types/messages";
import { generateId } from "../../const/id";
import { VscodeWebviewInterface } from "../../types/index";
import { MessageService } from "../message/message.service";

declare var vscode: VscodeWebviewInterface;

@Injectable({
    providedIn: "root",
})
export class CqlClientService {

    public stateExecuting = new BehaviorSubject(false);

    constructor(private message: MessageService) {

    }
    public execute(clusterName: string, cql: string): Subject<ExecuteQueryResponse> {
        this.stateExecuting.next(true);
        const out = new Subject<ExecuteQueryResponse>();
        const id = generateId();

        const message: ProcMessageStrict<"w2e_executeQueryRequest"> = {
            name: "w2e_executeQueryRequest",
            data: {
                id,
                clusterName,
                cql,
            },
        };
        vscode.postMessage(message);
        this.message.eventMessage.pipe(
            timeout(30000),
            filter((e) => e.name === "e2w_executeQueryResponse"),
            filter((mi: ProcMessageStrict<"e2w_executeQueryResponse">) => mi.data.id === id),
            take(1),
            map((e) => e as ProcMessageStrict<"e2w_executeQueryResponse">),
        ).subscribe((e) => {
            this.stateExecuting.next(false);
            out.next(e.data);
        }, (e) => {
            this.stateExecuting.next(false);
            out.error(e);
        });

        return out;
    }
}
