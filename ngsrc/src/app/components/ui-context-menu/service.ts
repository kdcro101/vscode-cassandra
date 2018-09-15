import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable, NgZone } from "@angular/core";
import { fromEvent, Subject } from "rxjs";
import { concatMap, filter, take, takeUntil, tap } from "rxjs/operators";
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
    public show(x: number, y: number, clientRect: ClientRect) {

        Promise.all([
            this.close(),
        ]).then(() => {

            const config = new OverlayConfig();
            config.hasBackdrop = true;
            config.backdropClass = "backdrop-hidden";

            config.positionStrategy = this.overlay.position()
                .global()
                .left(`${x}px`)
                .top(`${y}px`)
                .width(`auto`)
                .height(`auto`);

            this.overlayRef = this.overlay.create(config);

            this.overlayRef.keydownEvents().pipe(
                takeUntil(this.eventClosed),
                filter((e) => e.keyCode === ESCAPE_KEYCODE),
                take(1))
                .subscribe(() => {
                    this.terminate.next();
                });

            UiContextMenuComponent.eventClick.pipe(
                takeUntil(this.eventClosed),
                tap((c) => this.eventCommand.next(c)),
                concatMap(() => this.close()),
            ).subscribe(() => { });

            this.zone.run(() => {
                this.overlayRef.attach(new ComponentPortal(UiContextMenuComponent, null));

                fromEvent<MouseEvent>(this.overlayRef.backdropElement, "mousedown").pipe(
                    takeUntil(this.eventClosed),
                    filter((e) => e.button === 0),
                ).subscribe((e) => {
                    this.terminate.next();
                });
                fromEvent<MouseEvent>(this.overlayRef.backdropElement, "mousedown").pipe(
                    takeUntil(this.eventClosed),
                    filter((e) => e.button === 2),
                ).subscribe((e) => {
                    console.log("button===2");

                    const inside = this.isInside(e.clientX, e.clientY, clientRect);
                    if (inside) {
                        this.show(e.clientX, e.clientY, clientRect);
                    } else {
                        this.terminate.next();
                    }

                });
            });
        }).catch((e) => {
            console.log(e);
        });
    }
    public close() {
        return new Promise((resolve, reject) => {

            if (this.overlayRef == null) {
                resolve();
                return;
            }

            this.eventClosed.next();
            this.zone.run(() => {
                this.overlayRef.detach();
                this.overlayRef = null;
                resolve();
            });
        });
    }
    private isInside(x: number, y: number, rect: ClientRect): boolean {
        console.log("isInside");
        console.log(arguments);
        if (x < rect.left || y < rect.top || x > (rect.left + rect.width) || y > (rect.top + rect.height)) {
            console.log("isInside=false");
            return false;
        }
        console.log("isInside=true");
        return true;
    }
}
