import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, merge } from "rxjs";
import { EditorHelper } from "./editor-helper";
declare var codeFontFamily: string;

declare var document: Document;
declare var window: Window;

@Component({
    selector: "ui-query-editor",
    templateUrl: "./ui-query-editor.component.html",
    styleUrls: ["./ui-query-editor.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiQueryEditorComponent implements OnInit {
    @ViewChild("contentEditable") public contentEditable: ElementRef<HTMLDivElement>;
    private helper: EditorHelper;
    constructor() { }

    ngOnInit() {
        this.helper = new EditorHelper(this.contentEditable.nativeElement);

        this.contentEditable.nativeElement.style.fontFamily = codeFontFamily;
        this.contentEditable.nativeElement.style.lineHeight = "20px";

        merge(
            fromEvent(this.contentEditable.nativeElement, "input"),
            fromEvent(this.contentEditable.nativeElement, "keyup")
        ).pipe()
            .subscribe((event) => {
                const pos = this.helper.getCaretPosition();
                console.log(`caret: ${pos}`);
                console.log("---------------------------");
                console.log(`[${this.helper.getTextFromHeadToCaret()}]`);
                console.log("###########################");
                console.log(`lines: ${this.helper.lineCount}`);
                console.log("###########################");
            });

    }

}
