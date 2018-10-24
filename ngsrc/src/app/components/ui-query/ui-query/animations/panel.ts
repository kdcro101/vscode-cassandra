import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const panelAnimations: AnimationTriggerMetadata[] = [
    trigger("panelAnimation", [
        state("hidden", style({
            opacity: 0,
            zIndex: -1,
        })),
        state("active", style({
            opacity: 1,
            zIndex: 10,
        })),
        state("void", style({

            opacity: 0,
            zIndex: -1,
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
