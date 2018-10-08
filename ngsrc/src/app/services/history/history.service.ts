import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { timeout } from "rxjs/operators";
import { filter } from "rxjs/operators";
import { take } from "rxjs/operators";
import { map } from "rxjs/operators";
import { HistroyItem } from "../../../../../src/types/history";
import { ProcMessageStrict } from "../../../../../src/types/messages";
import { generateId } from "../../const/id";
import { UiDialogHistoryClearConfirmationComponent } from "../../dialogs/ui-dialog-history-clear-confirmation/ui-dialog-history-clear-confirmation.component";
import { MessageService } from "../message/message.service";

@Injectable({
    providedIn: "root",
})
export class HistoryService {

    constructor(
        private messages: MessageService,
        public dialog: MatDialog,
    ) { }

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
    public remove(itemId: string) {
        return new Promise((resolve, reject) => {
            const id = generateId();
            const message: ProcMessageStrict<"w2e_removeHistoryItemRequest"> = {
                name: "w2e_removeHistoryItemRequest",
                data: {
                    id,
                    item_id: itemId,
                },
            };
            this.messages.eventMessage.pipe(
                timeout(30000),
                filter((e) => e.name === "e2w_removeHistoryItemResponse"),
                filter((mi: ProcMessageStrict<"e2w_removeHistoryItemResponse">) => mi.data.id === id),
                take(1),
                map((e) => e as ProcMessageStrict<"e2w_removeHistoryItemResponse">),
            ).subscribe((e) => {
                if (e && !e.data.error) {
                    resolve();
                } else {
                    reject(e.data.error);
                }
            }, (e) => {
                reject(e);
            });
            this.messages.emit(message);
        });
    }
    public removeAll() {
        return new Promise((resolve, reject) => {

            const executeRemoveAll = () => {

                const id = generateId();
                const message: ProcMessageStrict<"w2e_removeAllHistoryRequest"> = {
                    name: "w2e_removeAllHistoryRequest",
                    data: {
                        id,
                    },
                };
                this.messages.eventMessage.pipe(
                    timeout(30000),
                    filter((e) => e.name === "e2w_removeAllHistoryResponse"),
                    filter((mi: ProcMessageStrict<"e2w_removeAllHistoryResponse">) => mi.data.id === id),
                    take(1),
                    map((e) => e as ProcMessageStrict<"e2w_removeAllHistoryResponse">),
                ).subscribe((e) => {
                    if (e && !e.data.error) {
                        resolve();
                    } else {
                        reject(e.data.error);
                    }
                }, (e) => {
                    reject(e);
                });
                this.messages.emit(message);
            };

            const dialogRef = this.dialog.open(UiDialogHistoryClearConfirmationComponent, {
                width: "320px",
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log("The dialog was closed");
                const out = result === true ? true : false;
                if (out) {
                    executeRemoveAll();
                } else {
                    resolve();
                }
            }, (e) => {
                console.log(e);
               reject(e);
            });
        });
    }

}
