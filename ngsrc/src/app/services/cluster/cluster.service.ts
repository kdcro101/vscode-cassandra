import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";
import { of } from "rxjs";
import { concatMap, filter, map, take, tap } from "rxjs/operators";
import { CassandraCluster } from "../../../../../src/types/index";
import { ProcMessageStrict } from "../../../../../src/types/messages";
import { MessageService } from "../message/message.service";
import { SystemService } from "../system/system.service";

@Injectable({
    providedIn: "root",
})
export class ClusterService {
    public stateReady = new ReplaySubject<void>(1);
    public eventChange = new Subject<void>();
    public list: CassandraCluster[] = [];

    constructor(private system: SystemService, private message: MessageService) {

        of(true).pipe(
            concatMap(() => this.system.stateReady.pipe(take(1))),
        ).subscribe(() => {
            this.clusterListRequest();
        });

        this.message.eventMessage.pipe(
            tap((m) => {
                console.log("message in clusterService");
                console.log(JSON.stringify(m));
            }),
            filter((m) => m.name === "e2w_getClustersResponse"),
            map((m) => m as ProcMessageStrict<"e2w_getClustersResponse">),
        ).subscribe((m) => {
            this.list = m.data;
            console.log("Cluster list change");
            console.log(JSON.stringify(this.list));
            this.eventChange.next();
        });

    }
    private clusterListRequest() {
        console.log("Requesting cluster list");
        const m: ProcMessageStrict<"w2e_getClustersRequest"> = {
            name: "w2e_getClustersRequest",
            data: true,
        };
        this.message.emit(m);
    }

}
