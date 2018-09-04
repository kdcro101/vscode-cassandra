import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";

import { map, timeout } from "rxjs/operators";
import { filter } from "rxjs/operators";
import { take } from "rxjs/operators";
import { QueryExecuteResult } from "../../../../../src/cassandra-client";
import { ProcMessageStrict } from "../../../../../src/types/messages";
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
    public execute(clusterName: string, cql: string): Subject<QueryExecuteResult> {
        const out = new Subject<QueryExecuteResult>();
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
            out.next(e.data.result);
        }, (e) => {
            out.error(e);
        });

        return out;
    }
}
