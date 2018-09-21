import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const gridElementAnimations: AnimationTriggerMetadata[] = [
    trigger("gridAnimationState", [
        state("hidden", style({
            opacity: 0,
        })),
        state("ready", style({
            opacity: 1,
        })),
        transition("* => ready", animate("150ms ease-in-out")),
        transition("* => void", animate("50ms ease-in")),
    ]),
    trigger("progressAnimationState", [
        transition(":enter", [
            style({
                opacity: 0,
            }),
            animate(".25s ease-in-out", style({
                opacity: 1,
            })),
        ]),
        transition(":leave", [
            style({
                opacity: 1,
            }),
            animate(".25s ease-in-out", style({
                opacity: 0,
            })),
        ]),
    ]),
    trigger("statusAnimationState", [
        transition(":enter", [
            style({
                opacity: 0,
                transform: "scale3d(0,0,1)",
            }),
            animate("500ms ease-in-out", style({
                opacity: 1,
                transform: "scale3d(1,1,1)",
            })),
        ]),
        transition(":leave", [
            style({
                opacity: 1,
                transform: "scale3d(1,1,1)",
            }),
            animate("500ms ease-in-out", style({
                opacity: 0,
                transform: "scale3d(0,0,1)",
            })),
        ]),
    ]),
];
