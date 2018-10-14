import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { ComponentRef, Injectable, NgZone } from "@angular/core";
import { fromEvent, ReplaySubject, Subject } from "rxjs";
import { concatMap, filter, take, takeUntil, tap } from "rxjs/operators";
import { UiOverlayCloseConfirmationComponent } from "./ui-overlay-close-confirmation/ui-overlay-close-confirmation.component";

const ESCAPE_KEYCODE = 27;

@Injectable({
    providedIn: "root",
})
export class UiOverlayCloseConfirmationService {
    protected overlayRef: OverlayRef = null;
    public eventClosed = new Subject<void>();
    // public terminate = new Subject<void>();
    public currentOperation: Subject<boolean> = null;
    public stateData = new ReplaySubject<string>(1);

    public component: ComponentRef<UiOverlayCloseConfirmationComponent> = null;

    constructor(public overlay: Overlay, public zone: NgZone) {

        // this.terminate.pipe(
        //     // concatMap(() => this.component.instance.hide()),
        //     concatMap(() => this.close()),
        // ).subscribe(() => {

        // });
    }
    public show(filePath: string): Subject<boolean> {

        UiOverlayCloseConfirmationComponent.service = this;
        this.currentOperation = new Subject<boolean>();
        this.stateData.next(filePath);

        const config = new OverlayConfig();
        config.hasBackdrop = true;
        config.backdropClass = "backdrop-hidden";

        config.positionStrategy = this.overlay.position()
            .global()
            .width(`auto`)
            .height(`auto`)
            .centerHorizontally()
            .centerVertically();

        this.overlayRef = this.overlay.create(config);

        this.overlayRef.keydownEvents().pipe(
            takeUntil(this.eventClosed),
            filter((e) => e.keyCode === ESCAPE_KEYCODE),
            take(1))
            .subscribe(() => {
                this.close();
            });

        this.zone.run(() => {
            this.component = this.overlayRef.attach(new ComponentPortal(UiOverlayCloseConfirmationComponent, null));

            fromEvent<MouseEvent>(this.overlayRef.backdropElement, "mousedown").pipe(
                takeUntil(this.eventClosed),
                filter((e) => e.button === 0),
            ).subscribe((e) => {
                this.close();
            });
        });

        return this.currentOperation;
    }
    public close(returnValue: boolean = null) {
        return new Promise((resolve, reject) => {

            if (this.overlayRef == null) {
                resolve();
                return;
            }
            this.eventClosed.next();
            this.zone.run(() => {

                this.component.instance.eventViewAnimationDone.pipe(
                    take(1),
                    filter((e) => e === "void"),
                ).subscribe(() => {
                    console.log("Animation to void");
                    this.currentOperation.next(returnValue);
                    resolve();
                    this.overlayRef.dispose();
                    this.overlayRef = null;
                });

                this.overlayRef.detach();
            });
        });
    }

}
