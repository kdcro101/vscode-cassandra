import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, merge } from "rxjs";
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
    constructor() { }

    ngOnInit() {
        this.contentEditable.nativeElement.style.fontFamily = codeFontFamily;
        merge(
            fromEvent(this.contentEditable.nativeElement, "input"),
            fromEvent(this.contentEditable.nativeElement, "keyup")
        ).pipe()
            .subscribe((event) => {
                // console.log(this.getCaretPosition(this.contentEditable.nativeElement));
                const pos = this.getCaretPosition(this.contentEditable.nativeElement);
                console.log(`caret: ${pos}`);
                console.log("---------------------------");
                console.log(`[${this.getTextFromHeadToCaret(pos)}]`);
                // console.log(this.getText());
                console.log("---------------------------");
                console.log(JSON.stringify(this.getCaretColRow()));
                console.log("###########################");
            });

        this.contentEditable.nativeElement.addEventListener("keydown", (e) => {
            //     if (e.keyCode === 13) {
            //         // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
            //         document.execCommand("insertHTML", false, "<br>");
            //         // prevent the default behaviour of return key pressed
            //         e.preventDefault();
            //     }

            // detect 'tab' key
            if (e.keyCode === 9) {
                // add tab
                document.execCommand("insertHTML", false, "&#009");
                // prevent focusing on next element
                e.preventDefault();
            }

        });
    }
    public getCaretPosition(element: HTMLDivElement) {
        let caretOffset = 0;
        const doc = element.ownerDocument;
        const win = doc.defaultView;
        let sel;

        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            const range = win.getSelection().getRangeAt(0);
            const preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }

        return caretOffset;
    }

    public getTextFromHeadToCaret(caretPos: number) {
        // const element = this.contentEditable.nativeElement;
        // let caretOffset = 0;

        // const range = window.getSelection().getRangeAt(0);
        // const preCaretRange = range.cloneRange();
        // preCaretRange.selectNodeContents(element);
        // preCaretRange.setEnd(range.endContainer, range.endOffset);
        // caretOffset = preCaretRange.toString().length;

        // const divStr = this.contentEditable.nativeElement.textContent;
        const divStr = this.contentEditable.nativeElement.textContent;
        return divStr.substring(0, caretPos);
    }
    public getText() {
        const element = this.contentEditable.nativeElement;
        const firstTag = element.firstChild.nodeName;
        const keyTag = new RegExp(
            firstTag === "#text" ? "<br" : "</" + firstTag,
            "i"
        );
        const tmp = document.createElement("p");

        // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        // console.log(element.textContent);
        // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

        tmp.innerHTML = element.innerHTML
            .replace(/<[^>]+>/g, (m, i) => (keyTag.test(m) ? "{ß®}" : ""))
            .replace(/{ß®}$/, "");
        return tmp.innerText.replace(/{ß®}/g, "\n");
    }
    public getCaretColRow(): {
        x: number;
        y: number;
    } {
        let x = 0;
        let y = 0;
        const sel = window.getSelection();
        if (sel.rangeCount) {
            const range = sel.getRangeAt(0).cloneRange();
            if (range.getClientRects()) {
                range.collapse(true);
                const rect = range.getClientRects()[0];
                if (rect) {
                    y = rect.top;
                    x = rect.left;
                }
            }
        }
        return {
            x: x,
            y: y
        };
    }

}
