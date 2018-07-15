import { ChangeDetectorRef, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

export class ViewDestroyable implements OnDestroy {

    public isViewDestroyed: boolean = false;
    public eventViewDestroyed: Subject<void> = new Subject<void>();

    constructor(protected changeDetector?: ChangeDetectorRef) {

    }

    public ngOnDestroy() {

        this.isViewDestroyed = true;
        this.eventViewDestroyed.next();
        this.eventViewDestroyed.complete();
    }
    public detectChanges() {
        if (!this.changeDetector) {
            console.log("ChangeDetector not initialized in ViewDestroyable");
            return;
        }
        if (!this.isViewDestroyed) {
            this.changeDetector.detectChanges();
        }
    }

}
