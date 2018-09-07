import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component,
    ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild,
} from "@angular/core";
import { MatMenuTrigger } from "@angular/material";

import { fromEvent } from "rxjs";
import { fromEventPattern, ReplaySubject, Subject } from "rxjs";
import { debounceTime, filter, take, takeUntil, tap } from "rxjs/operators";
import { concatMap } from "rxjs/operators";
import { CqlParserError } from "../../../../../../src/parser/index";
import { ViewDestroyable } from "../../../base/view-destroyable";
import { AutocompleteService } from "../../../services/autocomplete/autocomplete.service";
import { MonacoService } from "../../../services/monaco/monaco.service";
import { ParserService } from "../../../services/parser/parser.service";

import { cqlCompletitionProvider } from "./lang/completition";
import { cqlLanguageConfig, cqlTokenProvider } from "./lang/tokens";

// declare var window: Window;

@Component({
    selector: "ui-monaco-editor",
    templateUrl: "./ui-monaco-editor.component.html",
    styleUrls: ["./ui-monaco-editor.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMonacoEditorComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @Output("onCodeChange") public onCodeChange = new EventEmitter<string>();
    @Output("onExecute") public onExecute = new EventEmitter<string>();
    @ViewChild("root") public root: ElementRef<HTMLDivElement>;

    @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

    public editor: monaco.editor.IStandaloneCodeEditor;
    private eventCodeSet = new Subject<void>();
    private eventCodeChange = new Subject<string>();
    private stateReady = new ReplaySubject<void>(1);

    public contextMenuX: number = 0;
    public contextMenuY: number = 0;
    public contextOpened: boolean = false;

    constructor(
        public host: ElementRef<HTMLDivElement>,
        public change: ChangeDetectorRef,
        private monacoService: MonacoService,
        private autocomplete: AutocompleteService,
        private parser: ParserService,
    ) {
        super(change);

    }

    ngOnInit() {
        this.monacoService.stateReady.pipe(
            take(1),
        ).subscribe(() => {

            this.contextMenu.menuClosed.pipe(
                takeUntil(this.eventViewDestroyed),
            ).subscribe(() => {
                this.contextOpened = false;
                this.contextMenuX = 0;
                this.contextMenuY = 0;
                this.detectChanges();
            });
            this.contextMenu.menuOpened.pipe(
                takeUntil(this.eventViewDestroyed),
            ).subscribe(() => {
                this.contextOpened = true;

                // setTimeout(() => {
                //     fromEvent(window, "click", { capture: false }).pipe(
                //         filter(() => this.contextOpened),
                //         takeUntil(this.contextMenu.menuClosed),
                //     ).subscribe(() => {
                //         console.log("Closiung on window event");
                //         this.contextMenu.closeMenu();
                //     });
                // }, 50);
            });

            monaco.languages.register({ id: "cql" });
            monaco.languages.setMonarchTokensProvider("cql", cqlTokenProvider);
            monaco.languages.setLanguageConfiguration("cql", cqlLanguageConfig);
            monaco.languages.registerCompletionItemProvider("cql", cqlCompletitionProvider(this.autocomplete));

            monaco.editor.setTheme("vs-dark");

            this.editor = monaco.editor.create(this.root.nativeElement, {
                value: null,
                language: "cql",
                minimap: {
                    enabled: false,
                },
                automaticLayout: true,
                contextmenu: false,

            });

            fromEventPattern<monaco.editor.IEditorMouseEvent>((f: (e: any) => any) => {
                return this.editor.onMouseDown(f);
                // return this.editor.onContextMenu(f);
            }, (f: any, d: monaco.IDisposable) => {
                d.dispose();
            }).pipe(
                takeUntil(this.eventViewDestroyed),
                filter((e) => e.event.rightButton),
            ).subscribe((eme) => {

                const rect = this.host.nativeElement.getBoundingClientRect();

                this.contextMenuX = eme.event.posx - rect.left;
                this.contextMenuY = eme.event.posy - rect.top;
                this.detectChanges();
                console.log(`Menu @ [${this.contextMenuX},${this.contextMenuY}]`);

                this.contextMenu.openMenu();
                this.contextOpened = true;

                fromEvent<KeyboardEvent>(window, "keyup", { capture: true }).pipe(
                    takeUntil(this.contextMenu.menuClosed),
                    filter((e) => e.keyCode === 27),
                ).subscribe(() => {
                    console.log("Closiung on window event");
                    this.contextMenu.closeMenu();
                });

            });

            fromEventPattern<monaco.IKeyboardEvent>((f: (e: any) => any) => {
                return this.editor.onKeyDown(f);
            }, (f: any, d: monaco.IDisposable) => {
                d.dispose();
            }).pipe(
                tap((e) => {
                    console.log("STARTING onKeyDown");
                    console.log(e);
                }),
                takeUntil(this.eventViewDestroyed),
                filter((e) => e.browserEvent.ctrlKey && e.browserEvent.keyCode === 13),
            ).subscribe((e) => {
                console.log("KY EXECUTE");
                e.preventDefault();
                e.stopPropagation();
                this.onExecute.next();
            });

            this.stateReady.next();
        });

        this.eventCodeChange.pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((code) => {
            this.onCodeChange.emit(code);
        });

        this.eventCodeChange.pipe(
            takeUntil(this.eventViewDestroyed),
            debounceTime(1000),
        ).subscribe((code) => {
            this.parseCode(code);
        });

    }
    ngOnDestroy() {
        super.ngOnDestroy();

    }
    public setCode(code: string) {

        this.stateReady.pipe()
            .subscribe(() => {
                console.log("------------------------------------");
                console.log("Setting CODE VALUE");
                console.log("------------------------------------");
                this.eventCodeSet.next();
                this.editor.setValue(code);
                this.parseCode(code);

                fromEventPattern<monaco.editor.IModelContentChangedEvent>((f: (e: any) => any) => {
                    return this.editor.onDidChangeModelContent(f);
                }, (f: any, d: monaco.IDisposable) => {
                    d.dispose();
                }).pipe(
                    takeUntil(this.eventCodeSet),
                ).subscribe(() => {

                    const v = this.editor.getValue();
                    console.log(`--> onDidChangeModelContent`);
                    console.log(`[${v}]`);

                    setTimeout(() => {
                        this.eventCodeChange.next(v);

                    });
                });

            });
    }
    private parseCode(code: string) {
        this.parser.collectErrors(code).pipe(take(1))
            .subscribe((res) => {
                console.log(`Parse done for [${code}]`);
                console.log(res);
                this.addErrorDecorations(res);
            });
    }
    private addErrorDecorations(errors: CqlParserError[]) {
        monaco.editor.setModelMarkers(this.editor.getModel(), "markersOwnerId", []);
        // const errorDecs: monaco.editor.IModelDeltaDecoration[] = errors.map((e) => {
        //     const o: monaco.editor.IModelDeltaDecoration = {
        //         range: new monaco.Range(e.line, e.linePos, e.line, (e.linePos + e.token.text.length + 1)),
        //         options: {
        //             inlineClassName: "cqlError",
        //             hoverMessage: {
        //                 value: e.name,
        //             },

        //         },
        //     };
        //     return o;
        // });
        const errorDecs: monaco.editor.IMarkerData[] = errors.map((e) => {
            console.log(`Message is : <${e.name}>`);
            const o: monaco.editor.IMarkerData = {
                severity: monaco.MarkerSeverity.Error,
                message: e.name,
                startLineNumber: e.line,
                startColumn: e.linePos,
                endLineNumber: e.line,
                endColumn: (e.linePos + e.token.text.length + 1),
            };
            return o;
        });
        // const d = this.editor.deltaDecorations([], errorDecs);

        monaco.editor.setModelMarkers(this.editor.getModel(), "markersOwnerId", errorDecs);

    }

    public doCopy = () => {

        this.editor.focus();
        document.execCommand("copy");

    }
    public doPaste = () => {
        this.editor.focus();
        document.execCommand("paste");

    }
}
