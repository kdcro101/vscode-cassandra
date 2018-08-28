import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component,
    ElementRef, OnDestroy, OnInit, ViewChild,
} from "@angular/core";
import ResizeObserver from "resize-observer-polyfill";
import { VsCommands } from "../../../../../../src/commands/index";
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

    @ViewChild("root") public root: ElementRef<HTMLDivElement>;
    private rootResizeObs: ResizeObserver;
    constructor(public change: ChangeDetectorRef) {
        super(change);
    }

    ngOnInit() {

        monaco.languages.register({ id: "cql" });
        monaco.languages.setMonarchTokensProvider("cql", language);
        monaco.languages.registerCompletionItemProvider("cql", cqlCompletitionProvider);

        monaco.editor.setTheme("vs-dark");

        const editor = monaco.editor.create(this.root.nativeElement, {
            value: [
                "select  * ",
                "\t from tablename",
                "where id=21313 and label='adsasd';",
            ].join("\n"),
            language: "cql",
            minimap: {
                enabled: false,
            },
            automaticLayout: true,

        });

        // this.rootResizeObs = new ResizeObserver(entries => {
        //     console.log("resizing editor");
        //     requestAnimationFrame(() => {
        //         editor.layout();
        //     });
        // });
        // this.rootResizeObs.observe(this.root.nativeElement);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.rootResizeObs) {
            this.rootResizeObs.disconnect();
        }
    }

}
