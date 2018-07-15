
import { fromEvent as observableFromEvent, fromEventPattern as observableFromEventPattern, Observable, Subject } from "rxjs";

import {
    AfterContentChecked,
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
import { AfterContentInit } from "@angular/core";
import { debounceTime, distinctUntilChanged, map, takeUntil, tap } from "rxjs/operators";
import { ViewDestroyable } from "../../base/view-destroyable";

declare var window: any;

export interface ScrollContentEvent {
    left: number;
    top: number;
}

@Component({
    selector: "ui-content-scroll",
    templateUrl: "./ui-content-scroll.component.html",
    styleUrls: ["./ui-content-scroll.component.scss"],
})
export class UiContentScrollComponent extends ViewDestroyable implements OnInit, OnDestroy, AfterViewInit, AfterContentChecked {
    @ViewChild("wrapper") public wrapperRef: ElementRef;
    @ViewChild("content") public contentRef: ElementRef;
    public eventScroll = new Subject<ScrollContentEvent>();
    public eventScrollStart = new Subject<ScrollContentEvent>();
    public eventScrollEnd = new Subject<ScrollContentEvent>();

    private isScrolling: boolean = false;

    constructor(

        public change: ChangeDetectorRef,
        public zone: NgZone,
    ) {
        super(change);
        window.UiContentScrollComponent = this;

        this.eventScrollEnd
            .subscribe(() => this.isScrolling = false);
    }

    ngOnInit() {

        this.initNative();

    }
    ngAfterContentChecked() {
        this.update();
    }
    ngOnDestroy() {
        super.ngOnDestroy();

    }
    ngAfterViewInit() {

    }
    public initNative() {
        this.zone.runOutsideAngular(() => {

            observableFromEvent(this.wrapperRef.nativeElement, "scroll", {
                capture: false,
            }).pipe(
                takeUntil(this.eventViewDestroyed),
                tap(() => {
                    if (!this.isScrolling) {
                        this.eventScrollStart.next();
                    }
                })
            ).subscribe((data) => {
                this.isScrolling = true;
                this.eventScroll.next({
                    left: this.scrollLeft,
                    top: this.scrollTop,
                });

            });

            observableFromEvent(this.wrapperRef.nativeElement, "scroll", {
                capture: false,
            }).pipe(
                takeUntil(this.eventViewDestroyed),
                debounceTime(50),
            ).subscribe((data) => {
                this.eventScrollEnd.next();
            });

        });
    }

    public update() {

        return;

    }
    public get scrollTop() {

        const e: HTMLDivElement = this.wrapperRef.nativeElement;
        return e.scrollTop;

    }
    public get scrollLeft() {

        const e: HTMLDivElement = this.wrapperRef.nativeElement;
        return e.scrollLeft;

    }
    private generateScrollEvent(): ScrollContentEvent {
        return {
            left: this.scrollLeft,
            top: this.scrollTop,
        };
    }
}
