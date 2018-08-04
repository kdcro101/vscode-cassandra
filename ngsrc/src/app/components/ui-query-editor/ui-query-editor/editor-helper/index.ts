import { fromEvent } from "rxjs";
import { ThemeService } from "../../../../services/theme/theme.service";

export class EditorHelper {

    private rangeSaved: Range = null;

    constructor(private contentEditable: HTMLDivElement, private lineHeight: number, private scroll: HTMLDivElement) {
        fromEvent(contentEditable, "keydown").pipe().subscribe((e: KeyboardEvent) => {
            if (e.keyCode === 9) {
                e.preventDefault();
                // add tab
                document.execCommand("insertHTML", false, "&#009");

                const r = this.getSelectionCoords();
                console.log(JSON.stringify(r));
                this.scrollToCaret();
            }
            if (e.ctrlKey === true && (e.keyCode === 65 || e.keyCode === 97)) {
                console.log("selectAll");
                this.selectAll();
            }
            // if (e.keyCode === 13) { // enter && shift

            //     e.preventDefault(); // Prevent default browser behavior
            //     // document.execCommand("insertHTML", false, "<span class=\"newline\">\n</span>");
            //     document.execCommand("insertHTML", false, "<br>");
            //     this.scrollToCaret();

            // }

        });

        fromEvent(this.contentEditable, "paste").pipe().subscribe((e: ClipboardEvent) => {
            e.preventDefault();
            const text = e.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", false, text);
            this.scrollToCaret();
        });

        fromEvent(this.contentEditable, "blur").pipe().subscribe(() => {
            this.saveSelection();
        });
        fromEvent(this.contentEditable, "focusin").pipe().subscribe(() => {
            this.restoreSelection();
        });

    }
    public getCaretPosition(): number {
        let caretOffset = 0;
        const doc = this.contentEditable.ownerDocument;
        const win = doc.defaultView;
        let sel;

        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            const range = win.getSelection().getRangeAt(0);
            const preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(this.contentEditable);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }

        return caretOffset;
    }
    public getTextFromHeadToCaret() {
        const pos = this.getCaretPosition();
        const divStr = this.contentEditable.textContent;
        return divStr.substring(0, pos);
    }
    public getCaretOffset(): {
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
    public get lineCount(): number {

        const h = this.contentEditable.offsetHeight;
        const l = Math.round(h / this.lineHeight);
        return l;

    }
    public getSelectionCoords() {
        const win = window;
        const doc = document;

        let x = 0, y = 0;

        const sel = win.getSelection();
        let range: Range = null;
        let rects: ClientRectList = null;
        let rect: ClientRect = null;

        if (sel.rangeCount) {
            range = sel.getRangeAt(0).cloneRange();
            if (range.getClientRects) {
                range.collapse(true);
                rects = range.getClientRects();
                if (rects.length > 0) {
                    rect = rects[0];
                }
                x = rect.left;
                y = rect.top;
            }
            // Fall back to inserting a temporary element
            if (x === 0 && y === 0) {
                const span = doc.createElement("span");
                if (span.getClientRects) {
                    // Ensure span has dimensions and position by
                    // adding a zero-width space character
                    span.appendChild(doc.createTextNode("\u200b"));
                    range.insertNode(span);
                    rect = span.getClientRects()[0];
                    x = rect.left;
                    y = rect.top;
                    const spanParent = span.parentNode;
                    spanParent.removeChild(span);

                    // Glue any broken text nodes back together
                    spanParent.normalize();
                }
            }
        }

        return { x: x, y: y };
    }
    public selectAll() {
        const sel = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(this.contentEditable);
        sel.removeAllRanges();
        sel.addRange(range);
    }
    public scrollToCaret() {
        const pos = this.getSelectionCoords();
        this.scroll.scrollTop = pos.y;
        this.scroll.scrollLeft = pos.x;
    }

    public saveSelection() {

        const sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            // console.log("%c saveSelection ", "background: #f00; color: #fff");
            this.rangeSaved = sel.getRangeAt(0);
        }

        return null;
    }
    public restoreSelection() {
        if (this.rangeSaved) {
            // console.log("%c restoreSelection ", "background: #0f0; color: #fff");
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(this.rangeSaved);
        }
    }
}
