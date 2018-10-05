
import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component,
    ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild,
} from "@angular/core";
import { fromEventPattern, ReplaySubject, Subject } from "rxjs";
import { debounceTime, filter, take, takeUntil, tap } from "rxjs/operators";
import { CqlAnalysis, CqlParserError, InputParseResult } from "../../../../../../src/types/parser";
import { ViewDestroyable } from "../../../base/view-destroyable";
import { AutocompleteService } from "../../../services/autocomplete/autocomplete.service";
import { MonacoService } from "../../../services/monaco/monaco.service";
import { ParserService } from "../../../services/parser/parser.service";
import { ThemeService } from "../../../services/theme/theme.service";
import { WorkbenchEditor } from "../../../types/index";
import { UiContextMenuService } from "../../ui-context-menu/service";
import { decorationsForStatement, markersForStatement } from "./decorations";
import { baseColumnDecorations } from "./decorations/base/columns";

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

    public monacoEditor: monaco.editor.IStandaloneCodeEditor;
    public editorCurrent: WorkbenchEditor;
    public modelCurrent: monaco.editor.ITextModel;

    private eventCodeSet = new Subject<void>();
    private eventCodeChange = new Subject<string>();
    private stateReady = new ReplaySubject<void>(1);

    private clusterName: string;
    private keyspace: string;
    private currentDeltaDecorations: string[] = [];

    constructor(
        public host: ElementRef<HTMLDivElement>,
        public change: ChangeDetectorRef,
        private monacoService: MonacoService,
        private parser: ParserService,
        private contextMenu: UiContextMenuService,
        public theme: ThemeService,
        public autocomplete: AutocompleteService,
    ) {
        super(change);

        const style: string = `.monaco-editor {font-family: ${this.theme.getEditorFontFamily()}; }`;
        const styleElement = document.createElement("style");
        styleElement.appendChild(document.createTextNode(style));
        host.nativeElement.appendChild(styleElement);

    }
    @Input("editor") public set setEditor(value: WorkbenchEditor) {
        this.stateReady.pipe(
            take(1),
            filter(() => value != null),
        ).subscribe(() => {
            console.log("UiMonacoEditorComponent.setEditor");
            console.log(value);

            if (this.editorCurrent) {
                this.editorCurrent.viewState = this.monacoEditor.saveViewState();
            }

            this.editorCurrent = value;
            this.updateExecuteParams();

            this.setModel(value.model);

            if (this.editorCurrent.viewState) {
                this.monacoEditor.restoreViewState(this.editorCurrent.viewState);
            }

        });
    }
    ngOnInit() {
        this.monacoService.stateReady.pipe(
            take(1),
        ).subscribe(() => {

            this.contextMenu.eventCommand.pipe(
                takeUntil(this.eventViewDestroyed),
            ).subscribe((c) => {
                this.doCommand(c);
            });

            this.monacoEditor = monaco.editor.create(this.root.nativeElement, {
                value: null,
                language: "cql",
                minimap: {
                    enabled: false,
                },
                lineHeight: this.theme.getEditorFontSize() + 10,
                automaticLayout: true,
                contextmenu: false,
                wordBasedSuggestions: false,
                quickSuggestions: false,

            });

            fromEventPattern<monaco.editor.IEditorMouseEvent>((f: (e: any) => any) => {
                return this.monacoEditor.onMouseDown(f);
                // return this.editor.onContextMenu(f);
            }, (f: any, d: monaco.IDisposable) => {
                d.dispose();
            }).pipe(
                takeUntil(this.eventViewDestroyed),
                filter((e) => e.event.rightButton),
            ).subscribe((eme) => {

                const rect = this.host.nativeElement.getBoundingClientRect();

                this.contextMenu.show(eme.event.posx, eme.event.posy, this.root.nativeElement.getBoundingClientRect());

            });

            fromEventPattern<monaco.IKeyboardEvent>((f: (e: any) => any) => {
                return this.monacoEditor.onKeyDown(f);
            }, (f: any, d: monaco.IDisposable) => {
                d.dispose();
            }).pipe(
                tap((e) => {
                    // console.log("STARTING onKeyDown");
                    // console.log(e);
                }),
                takeUntil(this.eventViewDestroyed),
                filter((e) => e.browserEvent.ctrlKey && e.browserEvent.keyCode === 13),
            ).subscribe((e) => {

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
            tap(() => {
                console.log("autocomplete.reset");
                this.autocomplete.reset();
            }),
            takeUntil(this.eventViewDestroyed),
            debounceTime(250),
        ).subscribe((code) => {
            this.parseCode(code);
        });

    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    public setModel(model: monaco.editor.ITextModel) {
        this.stateReady.pipe()
            .subscribe(() => {
                console.log("------------------------------------");
                console.log("Setting MODEL");
                console.log("------------------------------------");

                this.modelCurrent = model;

                this.eventCodeSet.next();
                this.monacoEditor.setModel(model);

                this.autocomplete.reset();
                this.parseCode(model.getValue());

                fromEventPattern<monaco.editor.IModelContentChangedEvent>((f: (e: any) => any) => {
                    return this.monacoEditor.onDidChangeModelContent(f);
                }, (f: any, d: monaco.IDisposable) => {
                    d.dispose();
                }).pipe(
                    tap(() => {
                        console.log("--- *************");
                        console.log("--- *************");
                        console.log("--- MODEL CHANGED");
                        console.log("--- *************");
                    }),
                    takeUntil(this.eventCodeSet),
                ).subscribe(() => {

                    const v = this.monacoEditor.getValue();
                    console.log(`--> onDidChangeModelContent`);

                    setTimeout(() => {
                        this.eventCodeChange.next(v);

                    });
                });

                const domNode = document.createElement("div");

                this.monacoEditor.changeViewZones(zones => {
                    zones.addZone({
                        afterLineNumber: 0, heightInLines: 1,
                        domNode,
                        suppressMouseDown: false,
                    });
                });

            });
    }

    private parseCode(code: string) {
        this.parser.parseInput(code, this.clusterName, this.keyspace).pipe(take(1))
            .subscribe((result) => {
                this.autocomplete.setParseResult(result);
                // console.log(`Parse done for [${code}]`);
                this.addErrorDecorations(result);
                this.addDeltaDecorations(result.analysis);
            });
    }
    private addDeltaDecorations(analysis: CqlAnalysis) {

        let deltas: monaco.editor.IModelDeltaDecoration[] = [];

        analysis.statements.forEach((s) => {
            const base = baseColumnDecorations(this.modelCurrent, s);
            const sd = decorationsForStatement(this.modelCurrent, s);

            deltas = deltas.concat(base);

            if (sd) {
                deltas = deltas.concat(sd);
            }
        });

        this.currentDeltaDecorations = this.monacoEditor.deltaDecorations(this.currentDeltaDecorations, deltas);

    }
    private addErrorDecorations(result: InputParseResult) {
        const errors = result.errors;
        const analysis = result.analysis;

        monaco.editor.setModelMarkers(this.monacoEditor.getModel(), "markersOwnerId", []);

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

        let statementErrors: monaco.editor.IMarkerData[] = [];
        analysis.statements.forEach((s) => {
            const l = markersForStatement(this.modelCurrent, s);
            if (l) {
                statementErrors = statementErrors.concat(l);
            }
        });

        monaco.editor.setModelMarkers(this.monacoEditor.getModel(), "markersOwnerId", errorDecs.concat(statementErrors));
    }

    public doCopy = () => {

        this.monacoEditor.focus();
        document.execCommand("copy");

    }
    public doPaste = () => {
        this.monacoEditor.focus();
        document.execCommand("paste");

    }
    public doCut = () => {
        this.monacoEditor.focus();
        document.execCommand("cut");

    }
    public doCommand(command: string) {
        switch (command) {
            case "copy":
                this.doCopy();
                break;
            case "cut":
                this.doCut();
                break;
            case "paste":
                this.doPaste();
                break;
        }
    }
    public updateExecuteParams() {
        this.clusterName = this.editorCurrent.statement.clusterName;
        this.keyspace = this.editorCurrent.statement.keyspace;
        console.log(`updateExecuteParams [${this.clusterName}] [${this.keyspace}]`);
    }
}
