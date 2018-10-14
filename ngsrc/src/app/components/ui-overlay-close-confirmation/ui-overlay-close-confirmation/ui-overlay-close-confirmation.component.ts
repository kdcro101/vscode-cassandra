import { animate, AnimationEvent, state, style, transition, trigger } from "@angular/animations";
import {
    AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef,
    Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, ViewChild,
} from "@angular/core";
import { MatButton } from "@angular/material";
import { Subject } from "rxjs";
import { delay, filter, take, takeUntil, timeout } from "rxjs/operators";
import { ViewDestroyable } from "../../../base/view-destroyable/index";
import { UiOverlayCloseConfirmationService } from "../service";

@Component({
    selector: "ui-overlay-close-confirmation",
    templateUrl: "./ui-overlay-close-confirmation.component.html",
    styleUrls: ["./ui-overlay-close-confirmation.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger("viewAnimation", [
            state("void", style({
                transform: "translate3d(0,0,0) scale3d(0,0,1)",
                opacity: 0,
            })),
            state("active", style({
                transform: "translate3d(0,0,0) scale3d(0,0,1)",
                opacity: 0,
            })),
            state("loaded", style({
                transform: "translate3d(0,0,0) scale3d(1,1,1)",
                opacity: 1,
            })),
            state("hidden", style({
                transform: "translate3d(0,0,0) scale3d(0,0,1)",
                opacity: 1,
            })),
            transition("* => loaded", [animate("120ms ease-in-out")]),
            // transition("loaded => hidden", [animate("1100ms ease-in")]),
            transition("* => void", [style({
                transform: "translate3d(0,0,0)  scale3d(1,1,1)",
                opacity: 1,
            }), animate("100ms ease-in")]),
        ]),
    ],
})
export class UiOverlayCloseConfirmationComponent extends ViewDestroyable implements OnInit, OnDestroy, AfterContentInit {
    public static service: UiOverlayCloseConfirmationService;
    public eventViewAnimationDone = new Subject<string>();
    public filename: string = "";

    @ViewChild("root") public root: ElementRef<HTMLDivElement>;
    @ViewChild("buttonCancel") public buttonCancel: MatButton;

    @HostBinding("@viewAnimation") public viewAnimationState: string;
    @HostListener("@viewAnimation.done", ["$event"])
    public onViewAnimationEnd(event: AnimationEvent) {
        console.debug(`done Animating :from ${event.fromState} --> ${event.toState}`);
        this.eventViewAnimationDone.next(event.toState);
    }
    constructor(public host: ElementRef<HTMLDivElement>, public change: ChangeDetectorRef) {
        super(change);

    }

    ngOnInit() {
        UiOverlayCloseConfirmationComponent.service.stateData.pipe(
            take(1),
            takeUntil(this.eventViewDestroyed),
        ).subscribe((data) => {
            this.filename = data;
            this.detectChanges();
        });

        this.viewAnimationState = "active";
        this.detectChanges();
    }
    ngAfterContentInit() {
        this.viewAnimationState = "loaded";
        this.detectChanges();

        this.buttonCancel.focus();

    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    public hide(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.eventViewAnimationDone.pipe(
                take(1),
                filter((e) => e === "hidden"),
                timeout(2000),
            ).subscribe(() => {
                resolve();
            }, () => {
                resolve();
            });

            this.viewAnimationState = "hidden";
            this.detectChanges();
        });
    }
    public closeWithValue = (val: boolean) => {
        UiOverlayCloseConfirmationComponent.service.close(val);
    }
}
