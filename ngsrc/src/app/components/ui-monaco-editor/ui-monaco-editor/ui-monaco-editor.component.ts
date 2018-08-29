import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component,
    ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild,
} from "@angular/core";
import { fromEventPattern, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ViewDestroyable } from "../../../base/view-destroyable";
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

    constructor(public change: ChangeDetectorRef) {
        super(change);
    }

    ngOnInit() {

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

        });

    }
    ngOnDestroy() {
        super.ngOnDestroy();

    }
    public setCode(code: string) {
        if (this.editor == null) {
            return;
        }
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

    }
}
