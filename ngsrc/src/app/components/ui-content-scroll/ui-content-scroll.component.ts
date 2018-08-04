
import {
    asyncScheduler,
    fromEvent as observableFromEvent, fromEventPattern as observableFromEventPattern, merge as observableMerge, Observable, Subject
} from "rxjs";

import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild
} from "@angular/core";
import { debounceTime, distinctUntilChanged, filter, map, scan, takeUntil, throttleTime } from "rxjs/operators";

import { Input } from "@angular/core";

import { ViewDestroyable } from "../../base/view-destroyable";
import { scrollToY_pps } from "../../const/scroll-to";

declare var IScroll: any;

export interface ScrollVerticalEvent {
    scrollTop: number;
    direction: "up" | "down" | string;
}
export type ScrollState = "beginning" | "end" | "scroll";

@Component({
    selector: "ui-content-scroll",
    templateUrl: "./ui-content-scroll.component.html",
    styleUrls: ["./ui-content-scroll.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class UiContentScrollComponent extends ViewDestroyable
    implements OnInit, AfterViewInit, AfterContentInit, OnDestroy, AfterContentChecked {

    @ViewChild("wrapper") public wrapperRef: ElementRef<HTMLDivElement>;
    @ViewChild("content") public contentRef: ElementRef<HTMLDivElement>;
    @ViewChild("trap") public trapRef: ElementRef<HTMLDivElement>;
    @Input() public fadeScrollBars: boolean = true;
    @Input() public keybindings: boolean = false;

    public isc: IScroll = null;
    public eventScrollEnd = new Subject<ScrollVerticalEvent>();
    public eventScroll = new Subject<ScrollVerticalEvent>();
    public eventScrollState = new Subject<ScrollState>();
    public eventScrollThrottled = new Subject<number>();
    // public eventScrollThrottled = new Subject<ScrollVerticalEvent>();
    public test = true;
    constructor(
        public zone: NgZone,
        public hostRef: ElementRef,
        public change: ChangeDetectorRef,
    ) {

        super(change);

    }
    ngOnInit() {
        this.initIsc();

    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngAfterViewInit() {

    }
    ngAfterContentInit() {
        setTimeout(() => this.update());
    }
    ngAfterContentChecked() {

    }
    public update() {
        if (!this.isc) {
            return;
        }
        // logger.log("update");
        this.isc.refresh();
    }
    public initNative() {
        this.zone.runOutsideAngular(() => {

            observableFromEvent(this.wrapperRef.nativeElement, "scroll", {
                capture: false,
            }).pipe(takeUntil(this.eventViewDestroyed),
                throttleTime(200, asyncScheduler, { leading: false, trailing: true }), )
                .subscribe(() => {
                    // logger.log("eventScrollThrottled");
                    // setZeroTimeout(() => {
                    this.eventScrollThrottled.next(this.scrollTop);
                    // });
                });

            observableFromEvent(this.wrapperRef.nativeElement, "scroll", {
                capture: false,
            }).pipe(takeUntil(this.eventViewDestroyed),
                map(() => ({ scrollTop: this.scrollTop, direction: null } as ScrollVerticalEvent)),
                scan((a, b) => {
                    // console.log("a:%s b:%s", a, b);
                    if (a.scrollTop < b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "down" };
                    } else {
                        return { scrollTop: b.scrollTop, direction: "up" };
                    }
                }, { scrollTop: 0, direction: null }),
                debounceTime(50), )
                .subscribe((data) => {
                    // logger.log("eventScrollEnd");
                    // setZeroTimeout(() => {
                    this.eventScrollEnd.next(data);
                    // });
                });

            observableFromEvent(this.wrapperRef.nativeElement, "scroll", {
                capture: false,
            }).pipe(takeUntil(this.eventViewDestroyed),
                map(() => ({ scrollTop: this.scrollTop, direction: null } as ScrollVerticalEvent)),
                scan((a, b) => {
                    // console.log("a:%s b:%s", a, b);
                    if (a.scrollTop < b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "down" };
                    } else {
                        return { scrollTop: b.scrollTop, direction: "up" };
                    }
                }, { scrollTop: 0, direction: null }), )
                .subscribe((data) => {
                    // logger.log("eventScroll");
                    // setZeroTimeout(() => {
                    this.eventScroll.next(data);
                    // });
                });

            observableFromEvent(this.wrapperRef.nativeElement, "scroll", {
                capture: false,
            }).pipe(takeUntil(this.eventViewDestroyed),
                map<any, ScrollState>(() => {
                    const st = this.scrollTop;
                    if (st === 0) {
                        return "beginning";
                    }
                    if (st === this.maxScrollY) {
                        return "end";
                    }
                    return "scroll";
                }),
                distinctUntilChanged(), )
                .subscribe((d) => {
                    // logger.log("eventScrollState");
                    this.eventScrollState.next(d);
                });

        });
    }
    public initIsc() {
        this.isc = new IScroll(this.wrapperRef.nativeElement, {

            scrollX: true,
            scrollY: true,
            preventDefault: false,
            mouseWheel: true,
            scrollbars: "custom",
            interactiveScrollbars: true,
            fadeScrollbars: this.fadeScrollBars,
            shrinkScrollbars: "scale",
            probeType: 3,
            momentum: false,
            disableTouch: true,
            disablePointer: true,
            keyBindings: this.keybindings === true ? {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            } : false,
        } as any);

        this.zone.runOutsideAngular(() => {
            observableFromEventPattern((f: any) => {
                return this.isc.on("scroll", f);
            }, (f: any) => {
                return this.isc.off("scroll", f);
            }).pipe(takeUntil(this.eventViewDestroyed),
                throttleTime(200, asyncScheduler, { leading: false, trailing: true }), )
                .subscribe(() => {
                    requestAnimationFrame(() => {

                        this.eventScrollThrottled.next(this.scrollTop);
                    });
                });

            observableFromEventPattern((f: any) => {
                return this.isc.on("scroll", f);
            }, (f: any) => {
                return this.isc.off("scroll", f);
            }).pipe(
                takeUntil(this.eventViewDestroyed),
                map(() => ({ scrollTop: this.scrollTop, direction: null } as ScrollVerticalEvent)),
                scan((a, b) => {
                    // console.log(`prev: ${a.scrollTop} current: ${b.scrollTop}`);
                    if (a.scrollTop < b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "down" };
                    }
                    if (a.scrollTop > b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "up" };
                    }
                    if (a.scrollTop === b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "no_move" };
                    }
                }, { scrollTop: 0, direction: null }),
                filter((d) => d.direction === "up" || d.direction === "down"),
                debounceTime(50),
            ).subscribe((data) => {
                // logger.log("eventScrollEnd");
                this.eventScrollEnd.next(data);
            });

            observableFromEventPattern((f: any) => {
                return this.isc.on("scroll", f);
            }, (f: any) => {
                return this.isc.off("scroll", f);
            }).pipe(
                takeUntil(this.eventViewDestroyed),
                map(() => ({ scrollTop: this.scrollTop, direction: null } as ScrollVerticalEvent)),
                scan((a, b) => {
                    // console.log(`prev: ${a.scrollTop} current: ${b.scrollTop}`);
                    if (a.scrollTop < b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "down" };
                    }
                    if (a.scrollTop > b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "up" };
                    }
                    if (a.scrollTop === b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "no_move" };
                    }
                }, { scrollTop: 0, direction: null }),
                filter((d) => d.direction === "up" || d.direction === "down"), )
                .subscribe((data) => {
                    // logger.log("eventScroll");
                    this.eventScroll.next(data);
                });

            observableMerge(
                observableFromEventPattern((f: any) => {
                    return this.isc.on("scrollEnd", f);
                }, (f: any) => {
                    return this.isc.off("scrollEnd", f);
                }),
                observableFromEventPattern((f: any) => {
                    return this.isc.on("scroll", f);
                }, (f: any) => {
                    return this.isc.off("scroll", f);
                })
            ).pipe(takeUntil(this.eventViewDestroyed),
                map<any, ScrollState>(() => {
                    const st = this.scrollTop;
                    if (st === 0) {
                        return "beginning";
                    }
                    if (st === this.maxScrollY) {
                        return "end";
                    }
                    return "scroll";
                }),
                distinctUntilChanged(), )
                .subscribe((d) => {
                    this.eventScrollState.next(d);
                });

            observableFromEvent(this.trapRef.nativeElement, "keyup", {
                capture: true
            }).pipe(
                takeUntil(this.eventViewDestroyed),
                map(() => ({ scrollTop: this.scrollTop, direction: null } as ScrollVerticalEvent)),
                scan((a, b) => {
                    // console.log(`prev: ${a.scrollTop} current: ${b.scrollTop}`);
                    if (a.scrollTop < b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "down" };
                    }
                    if (a.scrollTop > b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "up" };
                    }
                    if (a.scrollTop === b.scrollTop) {
                        return { scrollTop: b.scrollTop, direction: "no_move" };
                    }
                }, { scrollTop: 0, direction: null }),
                filter((d) => d.direction === "up" || d.direction === "down"),
                debounceTime(50),
            ).subscribe((data) => {
                this.eventScrollEnd.next(data);
            });

        });

        observableFromEvent(this.wrapperRef.nativeElement, "wheel", {
            capture: false
        }).pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((e) => {

            e.stopImmediatePropagation();
            e.stopPropagation();

        });

    }
    public get scrollTop() {
        if (this.isc) {
            return Math.abs(this.isc.y);
        } else {
            const e: HTMLDivElement = this.wrapperRef.nativeElement;
            return e.scrollTop;
        }

    }
    public get offsetHeight() {
        const e: HTMLDivElement = this.hostRef.nativeElement;
        return e.offsetHeight;
    }
    public get clientHeight() {
        const e: HTMLDivElement = this.wrapperRef.nativeElement;
        return e.clientHeight;
    }
    public get offsetWidth() {
        const e: HTMLDivElement = this.hostRef.nativeElement;
        return e.offsetWidth;
    }
    public get wrapperElement() {
        const e: HTMLDivElement = this.wrapperRef.nativeElement;
        return e;
    }
    public get maxScrollY() {
        if (this.isc) {
            return Math.abs((this.isc as any).maxScrollY);
        } else {
            const e: HTMLDivElement = this.wrapperRef.nativeElement;
            return e.scrollHeight - e.clientHeight;
        }
    }
    public isOnTop() {
        if (this.isc) {
            return this.scrollTop === Math.abs((this.isc as any).maxScrollY);
        } else {
            const e: HTMLDivElement = this.wrapperRef.nativeElement;
            return e.scrollHeight - this.scrollTop === e.clientHeight;
        }
    }
    public scrollToTop(duration: number = 500) {
        if (this.isc) {
            this.isc.scrollTo(0, 0, duration, IScroll.utils.ease.elastic);
        } else {
            const e: HTMLDivElement = this.wrapperRef.nativeElement;
            scrollToY_pps(e, 0, this.scrollTop * 2);

        }
    }
    public scrollToBottom() {
        if (this.isc) {
            this.isc.scrollTo(0, this.maxScrollY * -1, 333, IScroll.utils.ease.elastic);
        } else {
            const e: HTMLDivElement = this.wrapperRef.nativeElement;
            scrollToY_pps(e, this.maxScrollY, this.maxScrollY * 3);

        }
    }
    public setScrollTop(val: number) {
        if (this.isc) {
            this.isc.scrollTo(0, val * -1, 0);
        } else {
            const e: HTMLDivElement = this.wrapperRef.nativeElement;
            e.scrollTop = val;

        }
        requestAnimationFrame(() => {
            this.eventScrollThrottled.next(val);
        });
    }
    public scrollToAnimated(destination: number, duration: number) {

        const diff = Math.abs(this.scrollTop - destination);
        const pos = duration / 1000;

        if (this.isc) {
            this.isc.scrollTo(0, destination * -1, duration, IScroll.utils.ease.elastic);
        } else {
            const e: HTMLDivElement = this.wrapperRef.nativeElement;
            scrollToY_pps(e, this.maxScrollY, diff * (1 / pos));

        }
    }

    public overflowDisable() {
        if (this.isc) {
            this.isc.disable();
        } else {
            const e: HTMLDivElement = this.wrapperRef.nativeElement;
            e.style.overflowY = "hidden";
            e.style.overflowX = "hidden";

        }
    }
    public overflowEnable() {
        if (this.isc) {
            this.isc.enable();
        } else {
            const e: HTMLDivElement = this.wrapperRef.nativeElement;
            e.style.overflowY = "auto";
            e.style.overflowX = "hidden";

        }
    }

}
