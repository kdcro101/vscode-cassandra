import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component,
    ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild,
} from "@angular/core";
import { fromEventPattern, ReplaySubject, Subject } from "rxjs";
import { take, takeUntil } from "rxjs/operators";
import { ViewDestroyable } from "../../../base/view-destroyable";
import { MonacoService } from "../../../services/monaco/monaco.service";
import { cqlCompletitionProvider } from "./lang/completition";
import { language } from "./lang/tokens";

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
    private stateReady = new ReplaySubject<void>(1);

    constructor(
        public change: ChangeDetectorRef,
        private monacoService: MonacoService,
    ) {
        super(change);

    }

    ngOnInit() {
        this.monacoService.stateReady.pipe(
            take(1),
        ).subscribe(() => {
            monaco.languages.register({ id: "cql" });
            monaco.languages.setMonarchTokensProvider("cql", language);
            monaco.languages.registerCompletionItemProvider("cql", cqlCompletitionProvider);

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
                        this.onCodeChange.emit(v);
                    });
                });

            });
    }

}
