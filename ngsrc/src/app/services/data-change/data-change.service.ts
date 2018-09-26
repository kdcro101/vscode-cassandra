import { Injectable } from "@angular/core";
import { cloneDeep } from "lodash";
import { BehaviorSubject, Subject } from "rxjs";
import { filter, map, take, timeout } from "rxjs/operators";
import { DataChangeItem, DataChangeItemResult, ProcMessageStrict } from "../../../../../src/types/messages";
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
    item: DataChangeItem;
    success: boolean;
    index: number;
}
export interface ChangeCommitResult {
    errors: ChangeCommitError[];
    successCount: number;
    errorCount: number;
    total: number;
}
@Injectable({
    providedIn: "root",
})
export class DataChangeService {
    public stateRunning = new BehaviorSubject<boolean>(false);
    public eventProgress = new Subject<ChangeCommitProgress>(); // progress item/count

    constructor(private message: MessageService) {

    }
    public async commit(input: DataChangeItem[]): Promise<ChangeCommitResult> {

        const changes = cloneDeep(input);

        this.stateRunning.next(true);

        const out: ChangeCommitResult = {
            errors: [],
            successCount: 0,
            errorCount: 0,
            total: changes.length,
        };

        const addError = (e: any, item: DataChangeItem) => {
            out.errorCount += 1;
            const error: ChangeCommitError = {
                item,
                error: e,
            };
            out.errors.push(error);
        };

        for (let i = 0; i < changes.length; i++) {
            let success = false;
            const item = changes[i];
            try {
                console.log(`COMMITING [${i}]`);
                const res = await this.commitItem(item);
                if (res.success) {
                    out.successCount += 1;
                    success = true;
                } else {
                    addError(res.error, item);
                    success = false;
                }

            } catch (e) {
                addError(e, item);
            }

            const current = i + 1;
            const p = Math.round(current / changes.length + 100);
            const progress: ChangeCommitProgress = {
                current,
                total: changes.length,
                percentage: p,
                success,
                item,
                index: i,
            };
            this.eventProgress.next(progress);
        }

        this.stateRunning.next(false);
        return out;
    }

    private commitItem(item: DataChangeItem): Promise<DataChangeItemResult> {
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

                console.log(`GOT COMMIT RESULT`);

                if (e && e.data.result) {
                    resolve(e.data.result);
                    return;
                }
                reject("no_result");
            }, (e) => {
                reject(e);
            });
        });
    }
}
