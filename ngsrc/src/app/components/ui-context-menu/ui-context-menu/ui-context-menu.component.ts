import { animate, AnimationEvent, state, style, transition, trigger } from "@angular/animations";
import {
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit,
} from "@angular/core";
import { Subject } from "rxjs";
import { ViewDestroyable } from "../../../base/view-destroyable";

@Component({
    selector: "ui-context-menu",
    templateUrl: "./ui-context-menu.component.html",
    styleUrls: ["./ui-context-menu.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger("viewAnimation", [
            state("void", style({
                transform: "scale3d(0.01,0.01,1)",
                opacity: 0,
            })),
            state("active", style({
                transform: "scale3d(1,1,1)",
                opacity: 1,
            })),
            transition("* => active", animate("150ms ease-in-out")),
            transition("* => void", animate("50ms ease-in")),
        ]),
    ],
})
export class UiContextMenuComponent extends ViewDestroyable implements OnInit, OnDestroy {
    public static eventClick = new Subject<string>();
    @HostBinding("@viewAnimation") public viewAnimationState: string;
    @HostListener("@viewAnimation.done", ["$event"])
    private onViewAnimationEnd(event: AnimationEvent) {
        // console.debug("done Animating :from %s --> %s", event.fromState, event.toState);
    }
    constructor(public change: ChangeDetectorRef, public host: ElementRef<HTMLDivElement>) {
        super(change);
    }

    ngOnInit() {
        this.viewAnimationState = "active";
        this.detectChanges();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    public onCommand = (command: string) => {
        // setTimeout(() => {
            UiContextMenuComponent.eventClick.next(command);
        // }, 100);
    }
}
