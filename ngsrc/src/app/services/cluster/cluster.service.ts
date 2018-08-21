import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import { MessageService } from "../message/message.service";
import { SystemService } from "../system/system.service";

@Injectable({
    providedIn: "root",
})
export class ClusterService {
    public stateReady = new ReplaySubject<void>(1);
    constructor(private system: SystemService, private message: MessageService) {

        this.system.stateReady
            .pipe(take(1))
            .subscribe(() => {

            });

    }

}
