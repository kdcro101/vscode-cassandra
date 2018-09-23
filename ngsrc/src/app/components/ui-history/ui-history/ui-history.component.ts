import { animate, AnimationEvent, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { filter, take } from "rxjs/operators";
import { ViewDestroyable } from "../../../base/view-destroyable";
import { UiHistoryService } from "../service";

export type ViewAnimationState = "void" | "active" | "hidden";

@Component({
    selector: "ui-history",
    templateUrl: "./ui-history.component.html",
    styleUrls: ["./ui-history.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger("viewAnimationState", [
            state("void", style({
                transform: "translate3d(0,100%,0)",
            })),
            state("hidden", style({
                transform: "translate3d(0,100%,0)",
            })),
            state("active", style({
                transform: "translate3d(0,0,0)",
            })),
            transition("void => active", [
                style({
                    opacity: 0,
                    transform: "translate3d(0,100%,0)",
                }),
                animate("200ms ease-in-out", style({
                    opacity: 1,
                    transform: "translate3d(0,0,0)",
                })),
            ]),
            transition("active => hidden", [
                style({
                    opacity: 1,
                    transform: "translate3d(0,0,0)",
                }),
                animate("150ms ease-in", style({
                    opacity: 0,
                    transform: "translate3d(0,100%,0)",
                })),
            ]),
        ]),
    ],
})
export class UiHistoryComponent extends ViewDestroyable implements OnInit, OnDestroy {
    public static service: UiHistoryService;
    public eventAnimation = new Subject<ViewAnimationState>();
    @HostBinding("@viewAnimationState") public viewAnimationState: ViewAnimationState;
    @HostListener("@viewAnimationState.done", ["$event"]) public viewAnimationStateDone = (e: AnimationEvent) => {
        this.eventAnimation.next(e.toState as ViewAnimationState);
    }

    constructor(
        public change: ChangeDetectorRef,
    ) {
        super(change);
    }

    ngOnInit() {
        this.viewAnimationState = "active";
        this.detectChanges();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
    public hide(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.eventAnimation.pipe(
                take(1),
                filter((s) => s === "hidden"),
            ).subscribe(() => {
                resolve();
            }, (e) => {
                reject(e);
            });

            this.viewAnimationState = "hidden";
            this.detectChanges();
        });
    }
    public close = () => {
        UiHistoryComponent.service.terminate.next();
    }
}
