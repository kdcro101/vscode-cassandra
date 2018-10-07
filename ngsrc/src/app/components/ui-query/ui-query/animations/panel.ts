import {
    animate, AnimationTriggerMetadata, query, state, style, transition, trigger,
} from "@angular/animations";

export const panelAnimations: AnimationTriggerMetadata[] = [
    trigger("panelAnimation", [
        state("hidden", style({
            // transform: "translate3d(100%,0,0)",
            opacity: 0,
        })),
        state("active", style({
            // transform: "none",
            opacity: 1,
        })),
        state("void", style({
            // transform: "translate3d(0,100%,0)",
            opacity: 0,
        })),
        transition("hidden => active", [
            style({
                // transform: "translate3d(0,0,0) scale3d(0,0,1)",
                opacity: 0,
            }),
            animate("330ms 200ms ease-in-out"),
        ]),
        transition("active => hidden", [
            style({
                // transform: "translate3d(0,0,0) scale3d(1,1,1)",
                opacity: 1,
                // transformOrigin: "right center",
            }),
            animate("330ms 10ms ease-in-out", style({
                // transform: "translate3d(-100%,0,0)  scale3d(0,0,1)",
                opacity: 0,
                // transformOrigin: "right center",
            })),
        ]),
        transition("* => void", animate("50ms ease-in")),
    ]),
];
