import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { of } from "rxjs";
import { ReplaySubject, Subject } from "rxjs";
import { concatMap, filter, map, take, tap } from "rxjs/operators";
import { timeout } from "rxjs/operators";
import { CassandraCluster, CassandraClusterData } from "../../../../../src/types/index";
import { ProcMessageStrict } from "../../../../../src/types/messages";
import { generateId } from "../../const/id";
import { MessageService } from "../message/message.service";
import { SystemService } from "../system/system.service";

@Injectable({
    providedIn: "root",
})
export class ClusterService {
    public stateReady = new ReplaySubject<void>(1);
    public eventChange = new Subject<CassandraCluster[]>();
    public eventInvalidate = new Subject<void>();
    public list: CassandraCluster[] = [];

    constructor(
        private system: SystemService,
        private message: MessageService,
        public snackBar: MatSnackBar,
    ) {

        of(true).pipe(
            concatMap(() => this.system.stateReady.pipe(take(1))),
        ).subscribe(() => {
            this.clusterListRequest();
        });

        this.message.eventMessage.pipe(
            filter((m) => m.name === "e2w_getClustersResponse"),
            map((m) => m as ProcMessageStrict<"e2w_getClustersResponse">),
        ).subscribe((m) => {
            this.list = m.data;
            this.eventChange.next(this.list);
        });

        this.message.eventMessage.pipe(
            filter((m) => m.name === "e2w_invalidateClusterListRequest"),
            map((m) => m as ProcMessageStrict<"e2w_invalidateClusterListRequest">),
        ).subscribe((m) => {
            console.log("[ClusterService] invalidate cluster data");
            this.eventInvalidate.next();
            this.clusterListRequest();
        });

        this.eventInvalidate.pipe().subscribe(() => {
            this.snackBar.open("Cluster list reloaded", "OK", {
                duration: 5000,
            });
        });

    }
    private clusterListRequest() {
        console.log("[ClusterService] clusterListRequest");
        const m: ProcMessageStrict<"w2e_getClustersRequest"> = {
            name: "w2e_getClustersRequest",
            data: true,
        };
        this.message.emit(m);
    }
    public getStructure(clusterName: string): Subject<CassandraClusterData> {
        const out = new Subject<CassandraClusterData>();

        // console.log(`getStructure: [${clusterName}]`);

        const id = generateId();

        const mo: ProcMessageStrict<"w2e_getClusterStructRequest"> = {
            name: "w2e_getClusterStructRequest",
            data: {
                id,
                clusterName,
            },
        };

        this.message.eventMessage.pipe(
            timeout(10000),
            filter((mi) => mi.name === "e2w_getClusterStructResponse"),
            filter((mi: ProcMessageStrict<"e2w_getClusterStructResponse">) => mi.data.id === id),
            take(1) ,
        ).subscribe((message) => {

            if (message.data.error === true) {
                out.error("client_error");
            } else {
                const result = message.data.result;
                out.next(result);

            }

        }, (e) => {
            // console.log(e);
            out.error("response_error");
        });

        this.message.emit(mo);

        return out;
    }

}
