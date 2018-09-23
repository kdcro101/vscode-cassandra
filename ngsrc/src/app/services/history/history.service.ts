import { Injectable } from "@angular/core";
import { timeout } from "rxjs/operators";
import { filter } from "rxjs/operators";
import { take } from "rxjs/operators";
import { map } from "rxjs/operators";
import { HistroyItem } from "../../../../../src/types/history";
import { ProcMessageStrict } from "../../../../../src/types/messages";
import { generateId } from "../../const/id";
import { MessageService } from "../message/message.service";

@Injectable({
    providedIn: "root",
})
export class HistoryService {

    constructor(private messages: MessageService) { }

    public get(): Promise<HistroyItem[]> {
        return new Promise((resolve, reject) => {
            const id = generateId();
            const m: ProcMessageStrict<"w2e_getHistoryRequest"> = {
                name: "w2e_getHistoryRequest",
                data: {
                    id,
                },
            };

            this.messages.emit(m);

            this.messages.eventMessage.pipe(
                timeout(30000),
                filter((e) => e.name === "e2w_getHistoryResponse"),
                filter((mi: ProcMessageStrict<"e2w_getHistoryResponse">) => mi.data.id === id),
                take(1),
                map((e) => e as ProcMessageStrict<"e2w_getHistoryResponse">),
            ).subscribe((e) => {
                resolve(e.data.list);
            }, (e) => {
                reject(e);
            });

        });
    }

}
