import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component,
    ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild,
} from "@angular/core";
import { fromEventPattern, ReplaySubject, Subject } from "rxjs";
import { debounceTime, take, takeUntil } from "rxjs/operators";
import { CqlParserError } from "../../../../../../src/parser/index";
import { ViewDestroyable } from "../../../base/view-destroyable";
import { AutocompleteService } from "../../../services/autocomplete/autocomplete.service";
import { MonacoService } from "../../../services/monaco/monaco.service";
import { ParserService } from "../../../services/parser/parser.service";
import { cqlCompletitionProvider } from "./lang/completition";
import { cqlLanguageConfig, cqlTokenProvider } from "./lang/tokens";

@Component({
    selector: "ui-monaco-editor",
    templateUrl: "./ui-monaco-editor.component.html",
    styleUrls: ["./ui-monaco-editor.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMonacoEditorComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @Output("onCodeChange") public onCodeChange = new EventEmitter<string>();
    @ViewChild("root") public root: ElementRef<HTMLDivElement>;

    public editor: monaco.editor.IStandaloneCodeEditor;
    private eventCodeSet = new Subject<void>();
    private eventCodeChange = new Subject<string>();
    private stateReady = new ReplaySubject<void>(1);

    constructor(
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
}
