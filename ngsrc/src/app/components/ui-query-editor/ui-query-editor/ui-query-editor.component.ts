import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { fromEvent, merge, ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import { ParserService } from "../../../services/parser/parser.service";
import { EditorHelper } from "./editor-helper";

import { range } from "lodash";

declare var document: Document;
declare var window: Window;

@Component({
    selector: "ui-query-editor",
    templateUrl: "./ui-query-editor.component.html",
    styleUrls: ["./ui-query-editor.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiQueryEditorComponent implements OnInit {
    @ViewChild("contentEditable") public contentEditable: ElementRef<HTMLDivElement>;
    @ViewChild("contentEditableWrapper") public contentEditableWrapper: ElementRef<HTMLDivElement>;
    @ViewChild("lines") public lines: ElementRef<HTMLDivElement>;
    @ViewChild("cursorTrap") public cursorTrap: ElementRef<HTMLDivElement>;

    @Input() private textFontFamily: string = "Inconsolata";
    @Input() private textFontSize: number = 15;
    @Input() private textLineHeight: number = 21;

    public safeInput: SafeHtml = null;

    public helper: EditorHelper;
    public lineNumbers: number[] = [];
    public lineSelected = new Set<number>();

    public textCurrent: string = "";
    public stateReady = new ReplaySubject<void>();

    constructor(
        public change: ChangeDetectorRef,
        private sanitized: DomSanitizer,
        private parser: ParserService,
    ) {

    }

    @Input() public set text(val: string) {
        this.textCurrent = val;
        this.stateReady.pipe(
            take(1),
        ).subscribe(() => {
            console.log("-------------------");
            console.log("set text queryEditor");
            console.log(val);
            console.log("-------------------");
            this.textLoad();
        });
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
            fromEvent(this.contentEditable.nativeElement, "keyup"),
        ).pipe()
            .subscribe((event) => {
                const pos = this.helper.getCaretPosition();
                console.log(`caret: ${pos}`);
                console.log("---------------------------");
                console.log(`[${JSON.stringify(this.helper.getTextFromHeadToCaret())}]`);
                console.log("###########################");
                console.log(`lines: ${this.helper.lineCount}`);
                console.log("###########################");
                console.log(`getText: [${JSON.stringify(this.helper.getText())}]`);

                this.lineNumbers = range(1, this.helper.lineCount + 1);
                // console.log(this.lineNumbers);
                this.change.detectChanges();

            });
        fromEvent(this.contentEditable.nativeElement, "mousedown", { capture: false }).pipe()
            .subscribe((e) => {
                e.stopPropagation();
                // e.stopImmediatePropagation();
            });
        merge(
            // fromEvent(this.cursorTrap.nativeElement, "focusin"),
            fromEvent(this.cursorTrap.nativeElement, "mousedown", {
                capture: false,
            }),
        ).pipe()
            .subscribe((e) => {
                console.log("sending focus");
                this.helper.moveToEnd();
            });

        fromEvent(this.contentEditableWrapper.nativeElement, "scroll").pipe()
            .subscribe(() => {
                const st = this.contentEditableWrapper.nativeElement.scrollTop;
                this.lines.nativeElement.scrollTop = st;
                // this.cursorTrap.nativeElement.style.transform = `translate3d(0,${st}px,0)`;
                // this.cursorTrap.nativeElement.style.top = `${st}px`;
            });

        this.stateReady.next();

        this.helper.eventSelection.pipe()
            .subscribe((e) => {
                console.log("eventSelection.subscribe");
                this.lineSelected = e.lines;
                this.change.detectChanges();
            });

        fromEvent(this.contentEditable.nativeElement, "input").pipe()
            .subscribe((ev) => {

                const text = this.helper.getText();
                const pos = this.helper.getCaretPosition();
                console.log("---------------");
                console.log(`parse pos: ${pos}`);
                console.log("---------------");

                this.parser.parse(text).pipe()
                    .subscribe((data) => {
                        console.log("got parsed data");
                        this.safeInput = this.safeHtml(data);
                        this.change.detectChanges();
                        this.helper.setCaretPosition(pos);
                    }, (e) => {
                        console.log(e);
                    });
            });

    }

    public safeHtml(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
    private textLoad() {
        this.safeInput = this.safeHtml(this.textCurrent);
        this.change.detectChanges();
        this.lineNumbers = range(1, this.helper.lineCount + 1);
        this.change.detectChanges();

    }
}
