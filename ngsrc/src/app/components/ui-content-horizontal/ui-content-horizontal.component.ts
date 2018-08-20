
import { fromEvent as observableFromEvent, fromEventPattern as observableFromEventPattern, Observable, Subject } from "rxjs";

import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectorRef,
    CollectionChangeRecord,
    Component,
    ElementRef,
    NgZone,
    OnDestroy,
    OnInit,
    ViewChild,
} from "@angular/core";

import { takeUntil } from "rxjs/operators";
import { ViewDestroyable } from "../../base/view-destroyable";

declare var IScroll: any;
declare var window: any;

@Component({
    selector: "ui-content-horizontal",
    templateUrl: "./ui-content-horizontal.component.html",
    styleUrls: ["./ui-content-horizontal.component.scss"],
})
export class UiContentHorizontalComponent extends ViewDestroyable implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {
    @ViewChild("wrapper") public wrapperRef: ElementRef<HTMLDivElement>;
    @ViewChild("content") public contentRef: ElementRef<HTMLDivElement>;
    @ViewChild("trap") public trapRef: ElementRef<HTMLDivElement>;
    public eventScroll = new Subject<any>();
    public isc: IScroll = null;

    constructor(
        public host: ElementRef<HTMLDivElement>,
        public change: ChangeDetectorRef,
        public zone: NgZone,
    ) {
        super(change);
        window.UiContentHorizontalComponent = this;
    }

    ngOnInit() {
        // logger.log("ngOnInit");
        // if (this.caps.isTouchDevice) {
            // this.initNative();
        // } else {
            this.initIsc();
        // }
    }
    ngOnDestroy() {
        super.ngOnDestroy();

    }
    ngAfterViewInit() {

    }
    ngAfterContentInit() {
        setTimeout(() => this.update());
    }
    public initNative() {
        // logger.log("initNative");
        this.zone.runOutsideAngular(() => {

            observableFromEvent(this.wrapperRef.nativeElement, "scroll", {
                capture: false,
            }).pipe(takeUntil(this.eventViewDestroyed))
                .subscribe((data) => {

                    this.eventScroll.next(data);

                });

        });
    }
    public initIsc() {
        // logger.log("initIsc");
        this.isc = new IScroll(this.wrapperRef.nativeElement, {

            // scrollbars: true,
            scrollX: true,
            scrollY: false,
            preventDefault: false,
            mouseWheel: true,
            scrollbars: "custom",
            momentum: false,
            interactiveScrollbars: true,
            fadeScrollbars: true,
            shrinkScrollbars: "scale",
            probeType: 3,
            disableTouch: true,
            bounce: false,
            // disablePointer: false,
            // keyBindings: true,
            hScrollbar: true,
            vScrollbar: false,
            // eventPassthrough: false,
        } as any);

        this.zone.runOutsideAngular(() => {

            observableFromEventPattern((f: any) => {
                return this.isc.on("scroll", f);
            }, (f: any) => {
                return this.isc.off("scroll", f);
            }).pipe(takeUntil(this.eventViewDestroyed))
                .subscribe((data) => {
                    this.eventScroll.next(data);
                });

            observableFromEvent(this.wrapperRef.nativeElement, "wheel", {
                capture: false,
            }).pipe(
                takeUntil(this.eventViewDestroyed),
            ).subscribe((e) => {
                // console.log("wheel");

                e.stopImmediatePropagation();
                e.stopPropagation();
                // e.preventDefault();
            });

        });
    }
    public update() {
        if (!this.isc) {
            return;
        }
        // logger.log("update");
        this.isc.refresh();
    }
}
