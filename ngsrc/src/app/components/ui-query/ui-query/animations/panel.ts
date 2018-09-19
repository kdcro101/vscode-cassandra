import {
    animate, AnimationTriggerMetadata, state, style, transition, trigger,
} from "@angular/animations";

export const panelAnimations: AnimationTriggerMetadata[] = [
    trigger("panelAnimation", [
        state("hidden", style({
            transform: "translate3d(100%,0,0)",
        })),
        state("active", style({
            transform: "none",
        })),
        state("void", style({
            transform: "translate3d(0,100%,0)",
        })),
        transition("* => active", [
            style({
                transform: "translate3d(100%,0,0)",
            }),
            animate("150ms ease-in-out"),
        ]),
        transition("active => hidden", [
            style({
                transform: "translate3d(0,0,0)",
            }),
            animate("150ms ease-in-out", style({
                transform: "translate3d(-100%,0,0)",
            })),
        ]),
        transition("* => void", animate("50ms ease-in")),
    ]),
];
