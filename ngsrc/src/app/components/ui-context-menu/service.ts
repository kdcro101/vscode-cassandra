import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable, NgZone } from "@angular/core";
import { Subject } from "rxjs";
import { take, takeUntil } from "rxjs/operators";
import { filter } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { tap } from "rxjs/operators";
import { concatMap } from "rxjs/operators";
import { UiContextMenuComponent } from "./ui-context-menu/ui-context-menu.component";

const ESCAPE_KEYCODE = 27;

@Injectable({
    providedIn: "root",
})
export class UiContextMenuService {
    protected overlayRef: OverlayRef = null;
    public eventClosed = new Subject<void>();
    public terminate = new Subject<void>();
    public eventCommand = new Subject<string>();
    constructor(public overlay: Overlay, public zone: NgZone) {
        this.terminate.pipe(
            concatMap(() => this.close()),
        ).subscribe(() => {
            console.info("UiContextMenuService terminate.done");
        });
    }
    public show(x: number, y: number) {
        const config = new OverlayConfig();
        config.hasBackdrop = false;
        // config.backdropClass = "backdrop-clickable";

        config.positionStrategy = this.overlay.position()
            .global()
            .left(`${x}px`)
            .top(`${y}px`)
            .width(`${100}px`)
            .height(`auto`);

        this.overlayRef = this.overlay.create(config);

        this.overlayRef.keydownEvents().pipe(
            takeUntil(this.eventClosed),
            filter((e) => e.keyCode === ESCAPE_KEYCODE),
            take(1))
            .subscribe(() => {
                this.terminate.next();
            });

        this.overlayRef.backdropClick().pipe(
            takeUntil(this.eventClosed))
            .subscribe(() => {
                this.terminate.next();
            });

        UiContextMenuComponent.eventClick.pipe(
            takeUntil(this.eventClosed),
            tap((c) => this.eventCommand.next(c)),
            concatMap(() => this.close()),
        ).subscribe(() => {

        });

        this.zone.run(() => {
            this.overlayRef.attach(new ComponentPortal(UiContextMenuComponent, null));
        });
    }
    public close() {
        return new Promise((resolve, reject) => {

            this.eventClosed.next();
            this.zone.run(() => {
                this.overlayRef.detach();
                resolve();
            });
        });
    }
}
