import { Injectable } from "@angular/core";
import { timeout } from "rxjs/operators";
import { filter } from "rxjs/operators";
import { take } from "rxjs/operators";
import { map } from "rxjs/operators";
import { generateId } from "../../../../../src/const/id";
import { ProcMessageStrict } from "../../../../../src/types/messages";
import { MessageService } from "../message/message.service";

export interface ActiveClusterKeyspace {
    clusterName: string;
    keyspace: string;
}

@Injectable({
    providedIn: "root",
})
export class WorkspaceService {

    constructor(private message: MessageService) { }

    public setSplitSize(size: number): Promise<void> {
        return new Promise((resolve, reject) => {
            const id = generateId();
            const m: ProcMessageStrict<"w2e_setSplitSizeRequest"> = {
                name: "w2e_setSplitSizeRequest",
                data: {
                    id,
                    size,
                },
            };
            this.message.eventMessage.pipe(
                timeout(30000),
                filter((e) => e.name === "e2w_setSplitSizeResponse"),
                filter((mi: ProcMessageStrict<"e2w_setSplitSizeResponse">) => mi.data.id === id),
                take(1),
                map((e) => e as ProcMessageStrict<"e2w_setSplitSizeResponse">),
            ).subscribe((e) => {
                if (e.data && !e.data.error) {
                    resolve();
                    return;
                }
                if (e.data && e.data.error) {
                    reject(e.data.error);
                    return;
                }
                reject("no_response");
            }, (e) => {
                reject(e);
            });

            this.message.emit(m);
        });
    }
    public getActiveClusterKeyspace(): Promise<ActiveClusterKeyspace> {
        return new Promise((resolve, reject) => {
            const id = generateId();
            const m: ProcMessageStrict<"w2e_getActiveClusterAndKeyspaceRequest"> = {
                name: "w2e_getActiveClusterAndKeyspaceRequest",
                data: {
                    id,
                },
            };
            this.message.eventMessage.pipe(
                timeout(30000),
                filter((e) => e.name === "e2w_getActiveClusterAndKeyspaceResponse"),
                filter((mi: ProcMessageStrict<"e2w_getActiveClusterAndKeyspaceResponse">) => mi.data.id === id),
                take(1),
                map((e) => e as ProcMessageStrict<"e2w_getActiveClusterAndKeyspaceResponse">),
            ).subscribe((e) => {
                if (e.data && e.data.success) {

                    resolve({
                        clusterName: e.data.clusterName,
                        keyspace: e.data.keyspace,
                    } as ActiveClusterKeyspace);
                    return;

                }
                if (e.data && !e.data.success) {
                    reject(e.data.error);
                }
                reject("no_response");
            }, (e) => {
                reject(e);
            });

            this.message.emit(m);
        });
    }
    public getActiveKeyspace(clusterName: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const id = generateId();
            const m: ProcMessageStrict<"w2e_getActiveKeyspaceRequest"> = {
                name: "w2e_getActiveKeyspaceRequest",
                data: {
                    id,
                    clusterName,
                },
            };

            this.message.eventMessage.pipe(
                timeout(30000),
                filter((e) => e.name === "e2w_getActiveKeyspaceResponse"),
                filter((mi: ProcMessageStrict<"e2w_getActiveKeyspaceResponse">) => mi.data.id === id),
                take(1),
                map((e) => e as ProcMessageStrict<"e2w_getActiveKeyspaceResponse">),
            ).subscribe((e) => {
                if (e.data && e.data.success) {
                    resolve(e.data.keyspace);
                    return;
                }
                if (e.data && !e.data.success) {
                    reject(e.data.error);
                }
                reject("no_response");
            }, (e) => {
                reject(e);
            });
            this.message.emit(m);
        });

    }
    public setActiveClusterName(clusterName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const id = generateId();
            const m: ProcMessageStrict<"w2e_setActiveClusterNameRequest"> = {
                name: "w2e_setActiveClusterNameRequest",
                data: {
                    id,
                    clusterName,
                },
            };

            this.message.eventMessage.pipe(
                timeout(30000),
                filter((e) => e.name === "e2w_setActiveClusterNameResponse"),
                filter((mi: ProcMessageStrict<"e2w_setActiveClusterNameResponse">) => mi.data.id === id),
                take(1),
                map((e) => e as ProcMessageStrict<"e2w_setActiveClusterNameResponse">),
            ).subscribe((e) => {
                if (e.data && e.data.success) {
                    resolve();
                    return;
                }
                if (e.data && !e.data.success) {
                    reject(e.data.error);
                }
                reject("no_response");
            }, (e) => {
                console.log(e);
                reject(e);
            });
            // console.log(`setActiveClusterName [${clusterName}]`);
            this.message.emit(m);
        });

    }
    public setActiveKeyspace(clusterName: string, keyspace: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const id = generateId();
            const m: ProcMessageStrict<"w2e_setActiveKeyspaceRequest"> = {
                name: "w2e_setActiveKeyspaceRequest",
                data: {
                    id,
                    clusterName,
                    keyspace,
                },
            };

            this.message.eventMessage.pipe(
                timeout(30000),
                filter((e) => e.name === "e2w_setActiveKeyspaceResponse"),
                filter((mi: ProcMessageStrict<"e2w_setActiveKeyspaceResponse">) => mi.data.id === id),
                take(1),
                map((e) => e as ProcMessageStrict<"e2w_setActiveKeyspaceResponse">),
            ).subscribe((e) => {
                if (e.data && e.data.success) {
                    resolve();
                    return;
                }
                if (e.data && !e.data.success) {
                    reject(e.data.error);
                }
                reject("no_response");
            }, (e) => {
                reject(e);
            });

            this.message.emit(m);
        });
    }

}
