import { Injectable } from "@angular/core";
import { BehaviorSubject, from, Subject } from "rxjs";
import { catchError, concatMap, filter, map, timeout } from "rxjs/operators";
import { take } from "rxjs/operators";
import { Z_VERSION_ERROR } from "zlib";
import { DataChangeItem, ProcMessageStrict } from "../../../../../src/types/messages";
import { generateId } from "../../const/id";
import { MessageService } from "../message/message.service";

export interface ChangeCommitError {
    item: DataChangeItem;
    error: any;
}
export interface ChangeCommitProgress {
    current: number;
    total: number;
    percentage: number;
}
export interface ChangeCommitResult {
    errors: ChangeCommitError[];
    successCount: number;
    errorCount: number;
}
@Injectable({
    providedIn: "root",
})
export class DataChangeService {
    public stateRunning = new BehaviorSubject<boolean>(false);
    public eventProgress = new Subject<>(); // progress item/count
    constructor(private message: MessageService) {

    }
    public async commit(changes: DataChangeItem[]): Promise<ChangeCommitResult> {

        const out: ChangeCommitResult = {
            errors: [],
            successCount: 0,
            errorCount: 0,
        };

        for (let i = 0; i < changes.length; i++) {
            const item = changes[i];
            try {
                const res = await this.commitItem(item);

            } catch (e) {
                out.errorCount += 1;
                const error: ChangeCommitError = {
                    item,
                    error: e,
                };
                out.errors.push(error);
            }

            this.eventProgress.next([]);
        }
        return out;
    }

    private commitItem(item: DataChangeItem): Promise<void> {
        return new Promise((resolve, reject) => {
            const id = generateId();
            const m: ProcMessageStrict<"w2e_executeDataChangeRequest"> = {
                name: "w2e_executeDataChangeRequest",
                data: {
                    id,
                    change: item,
                },
            };

            this.message.emit(m);

            this.message.eventMessage.pipe(
                timeout(30000),
                filter((e) => e.name === "e2w_executeDataChangeResponse"),
                filter((mi: ProcMessageStrict<"e2w_executeDataChangeResponse">) => mi.data.id === id),
                take(1),
                map((e) => e as ProcMessageStrict<"e2w_executeDataChangeResponse">),
            ).subscribe((e) => {

                if (e && e.data.result && e.data.result.success) {
                    resolve();
                }

                resolve(e.data.result);
            }, (e) => {
                reject(e);
            });
        });
    }
}
