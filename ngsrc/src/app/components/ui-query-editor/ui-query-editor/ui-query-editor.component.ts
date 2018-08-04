import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { range } from "lodash-es";
import { fromEvent, merge } from "rxjs";
import { UiContentScrollComponent } from "../../ui-content-scroll/ui-content-scroll.component";
import { EditorHelper } from "./editor-helper";

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
    @ViewChild("contentEditableWrapper") public contentEditableWrapper: ElementRef<HTMLDivElement>;
    @ViewChild("lines") public lines: ElementRef<HTMLDivElement>;
    @ViewChild("cursorTrap") public cursorTrap: ElementRef<HTMLDivElement>;

    @Input() private textFontFamily: string = "Inconsolata";
    @Input() private textFontSize: number = 15;
    @Input() private textLineHeight: number = 21;

    public helper: EditorHelper;
    public lineNumbers: number[] = [];
    constructor(public change: ChangeDetectorRef) {

    }

    ngOnInit() {
        this.helper = new EditorHelper(
            this.contentEditable.nativeElement,
            this.textLineHeight,
            this.contentEditableWrapper.nativeElement,
        );

        this.contentEditable.nativeElement.style.fontFamily = this.textFontFamily;
        this.contentEditable.nativeElement.style.fontSize = `${this.textFontSize}px`;
        this.contentEditable.nativeElement.style.lineHeight = `${this.textLineHeight}px`;

        this.lines.nativeElement.style.fontFamily = this.textFontFamily;
        this.lines.nativeElement.style.fontSize = `${this.textFontSize}px`;
        this.lines.nativeElement.style.lineHeight = `${this.textLineHeight}px`;

        this.contentEditableWrapper.nativeElement.style.left = `${this.lines.nativeElement.offsetWidth}px`;

        merge(
            fromEvent(this.contentEditable.nativeElement, "input"),
            fromEvent(this.contentEditable.nativeElement, "keyup")
        ).pipe()
            .subscribe((event) => {
                const pos = this.helper.getCaretPosition();
                console.log(`caret: ${pos}`);
                console.log("---------------------------");
                console.log(`[${JSON.stringify(this.helper.getTextFromHeadToCaret())}]`);
                console.log("###########################");
                console.log(`lines: ${this.helper.lineCount}`);
                console.log("###########################");

                this.lineNumbers = range(1, this.helper.lineCount + 1);
                console.log(this.lineNumbers);
                this.change.detectChanges();

            });

        merge(
            fromEvent(this.contentEditableWrapper.nativeElement, "focusin"),
            fromEvent(this.contentEditableWrapper.nativeElement, "mousedown")
        ).pipe()
            .subscribe((e) => {
                console.log("sending focus");
                this.contentEditable.nativeElement.focus();

                e.preventDefault();
            });
        fromEvent(this.contentEditableWrapper.nativeElement, "scroll").pipe()
            .subscribe(() => {
                const st = this.contentEditableWrapper.nativeElement.scrollTop;
                this.lines.nativeElement.scrollTop = st;
                this.cursorTrap.nativeElement.style.transform = `translate3d(0,${st}px,0)`;
            });

    }

}
