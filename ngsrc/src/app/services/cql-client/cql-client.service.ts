import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
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

    constructor(private message: MessageService) {

    }
    public execute(clusterName: string, cql: string): Subject<ExecuteQueryResponse> {
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
            timeout(5000),
            filter((e) => e.name === "e2w_executeQueryResponse"),
            filter((mi: ProcMessageStrict<"e2w_executeQueryResponse">) => mi.data.id === id),
            take(1),
            map((e) => e as ProcMessageStrict<"e2w_executeQueryResponse">),
        ).subscribe((e) => {
            out.next(e.data);
        }, (e) => {
            out.error(e);
        });

        return out;
    }
}
