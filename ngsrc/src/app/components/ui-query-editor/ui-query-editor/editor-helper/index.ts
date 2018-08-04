import { fromEvent } from "rxjs";
import { ThemeService } from "../../../../services/theme/theme.service";

export class EditorHelper {

    constructor(private contentEditable: HTMLDivElement, private lineHeight: number, private scroll: HTMLDivElement) {
        fromEvent(contentEditable, "keydown").pipe()
            .subscribe((e: KeyboardEvent) => {
                if (e.keyCode === 9) {
                    e.preventDefault();
                    // add tab
                    document.execCommand("insertHTML", false, "&#009");
                    // const sel = window.getSelection();
                    // const range = sel.getRangeAt(0);

                    // // const tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
                    // const tabNode = document.createTextNode("\u0009");
                    // range.insertNode(tabNode);
                    // range.setStartAfter(tabNode);
                    // range.setEndAfter(tabNode);

                    // sel.removeAllRanges();
                    // sel.addRange(range);

                    const r = this.getSelectionCoords();
                    console.log(JSON.stringify(r));
                    // this.scroll.scrollLeft = r.x;
                    this.scrollToCaret();

                }
                if (e.ctrlKey === true && (e.keyCode === 65 || e.keyCode === 97)) {
                    console.log("selectAll");
                    this.selectAll();
                }
                // if (e.keyCode === 13) {
                //     e.preventDefault();
                //     // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
                //     document.execCommand("insertHTML", false, "\n");
                //     // prevent the default behaviour of return key pressed

                // }
            });

        fromEvent(this.contentEditable, "paste").pipe()
            .subscribe((e: ClipboardEvent) => {
                e.preventDefault();
                // get text representation of clipboard
                const text = e.clipboardData.getData("text/plain");
                // insert text manually
                document.execCommand("insertHTML", false, text);
                this.scrollToCaret();
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
}
