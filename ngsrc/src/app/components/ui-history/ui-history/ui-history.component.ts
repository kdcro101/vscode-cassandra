import { animate, AnimationEvent, state, style, transition, trigger } from "@angular/animations";
import {
    AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component,
    ElementRef, HostBinding, HostListener, OnDestroy, OnInit, QueryList, ViewChildren,
} from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { from, of, Subject } from "rxjs";
import { concatMap, delay, filter, map, take, takeUntil, tap } from "rxjs/operators";
import { WorkbenchCqlStatement } from "../../../../../../src/types/editor";
import { HistroyItem } from "../../../../../../src/types/history";

import { ProcMessageStrict } from "../../../../../../src/types/messages";
import { ViewDestroyable } from "../../../base/view-destroyable";
import { generateId } from "../../../const/id";
import { EditorService } from "../../../services/editor/editor.service";
import { HistoryService } from "../../../services/history/history.service";
import { MessageService } from "../../../services/message/message.service";
import { ThemeService } from "../../../services/theme/theme.service";
import { WorkbenchEditor } from "../../../types/index";
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
        trigger("itemAnimation", [
            transition(":leave", [
                style({
                    transform: "translate3d(0,0,0)",
                    filter: "blur(0px)",
                }),
                animate(".6s ease-in-out", style({
                    transform: "translate3d(0,0,0) scale3d(0.5,0.5,1)",
                    filter: "blur(8px)",
                })),
                animate(".25s ease-in-out", style({
                    transform: "translate3d(-100%,0,0) scale3d(0.8,0.8,1)",
                    filter: "blur(8px)",
                })),
            ]),
        ]),
        trigger("progressAnimation", [
            transition(":leave", [
                style({
                    opacity: 1,
                }),
                animate(".3s ease-in-out", style({
                    opacity: 0,
                })),

            ]),
        ]),
        trigger("noItemsAnimation", [
            transition(":enter", [
                style({
                    opacity: 0,
                }),
                animate("300ms ease-in-out", style({
                    opacity: 1,
                })),
            ]),
            transition(":leave", [
                style({
                    opacity: 1,
                }),
                animate(".3s ease-in-out", style({
                    opacity: 0,
                })),

            ]),
        ]),
    ],
})
export class UiHistoryComponent extends ViewDestroyable implements OnInit, OnDestroy, AfterContentInit {
    public static service: UiHistoryService;

    @ViewChildren("itemRef") public itemRef: QueryList<ElementRef<HTMLDivElement>>;
    @ViewChildren("itemBodyRef") public itemBodyRef: QueryList<ElementRef<HTMLDivElement>>;
    public items: HistroyItem[] = null;

    public fontSize: number;
    public lineHeight: number;
    public fontFamily: string;

    public editor: WorkbenchEditor = null;

    private eventColorize = new Subject<HTMLDivElement>();
    public eventAnimation = new Subject<ViewAnimationState>();

    public loading = true;

    @HostBinding("@viewAnimationState") public viewAnimationState: ViewAnimationState;
    @HostListener("@viewAnimationState.done", ["$event"]) public viewAnimationStateDone = (e: AnimationEvent) => {
        this.eventAnimation.next(e.toState as ViewAnimationState);
    }

    constructor(
        public change: ChangeDetectorRef,
        private history: HistoryService,
        public snackBar: MatSnackBar,
        public theme: ThemeService,
        public editorService: EditorService,
        public message: MessageService,
    ) {
        super(change);

        this.fontFamily = theme.getEditorFontFamily();
        this.fontSize = theme.getEditorFontSize();
        this.lineHeight = theme.getEditorFontSize() + 10,

            UiHistoryComponent.service.stateData.pipe(
                take(1),
            ).subscribe((data) => {
                this.editor = data;
            });

        this.eventColorize.pipe(
            takeUntil(this.eventViewDestroyed),
            concatMap((element) => {
                return monaco.editor.colorizeElement(element, {
                    tabSize: 4,
                    theme: this.theme.monacoTheme,
                });
            }),
        ).subscribe(() => {

        });
    }
    public trackById = (index: number, item: HistroyItem) => {
        return item.id;
    }
    ngOnInit() {
        this.viewAnimationState = "active";
        this.detectChanges();

    }
    ngAfterContentInit() {

        this.eventAnimation.pipe(
            take(1),
            filter((s) => s === "active"),
        ).subscribe(() => {
            this.loadHistory();
        });
    }
    public loadHistory() {

        // this.loading = true;
        // this.detectChanges();

        of(null).pipe(
            tap(() => {
                this.loading = true;
                this.detectChanges();
            }),
            delay(17),
            concatMap(() => this.history.get()),
            tap((result) => {
                this.items = result.map((i) => {
                    i.body = i.body.trim();
                    return i;
                }).reverse();
                this.detectChanges();

            }),
            map(() => this.itemBodyRef.toArray().map((e) => e.nativeElement)),
            concatMap(async (elements) => {

                for (let i = 0; i < elements.length; i++) {
                    await this.eventColorize.next(elements[i]);

                }
            }),
            // delay(500),
        ).subscribe(() => {
            console.log("initialize done!");

            this.loading = false;
            this.detectChanges();

        }, (e) => {
            this.snackBar.open("Error retrieving history", "OK", {
                duration: 2000,
            });

        });

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
    public createEditor = (item: HistroyItem) => {
        const statement: WorkbenchCqlStatement = {
            body: item.body,
            filename: null,
            modified: true,
            clusterName: null,
            keyspace: null,
            source: "action",
            id: generateId(),
        };
        this.editorService.editorCreate(statement);
        this.close();
    }
    public copyBody = (i: HistroyItem) => {

        const message: ProcMessageStrict<"w2e_clipboardCopyRequest"> = {
            name: "w2e_clipboardCopyRequest",
            data: {
                id: generateId(),
                data: i.body,
            },
        };

        this.message.emit(message);

        this.close();

    }
    public removeItem(i: HistroyItem) {

        this.history.remove(i.id)
            .then((result) => {
                this.loadHistory();
            }).catch((e) => {
                console.log(e);
            });

    }
    public removeAll = () => {
        this.history.removeAll()
            .then((result) => {
                this.loadHistory();
            }).catch((e) => {
                console.log(e);
            });

    }
}
