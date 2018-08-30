import { Injectable } from "@angular/core";
import { interval, ReplaySubject, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class MonacoService {
    public stateReady = new ReplaySubject<void>();
    private eventReady = new Subject<void>();
    constructor() {

        interval(20).pipe(
            takeUntil(this.eventReady),
            filter(() => {
                let res = false;
                try {
                    if (monaco != null && monaco.editor != null) {
                        res = true;
                    }

                } catch (e) {
                    console.log(e);
                }

                return res;
            }),
        ).subscribe(() => {
            this.eventReady.next();
            this.stateReady.next();
        });

    }

}
