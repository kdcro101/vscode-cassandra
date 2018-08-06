import { fromEvent, Subject } from "rxjs";
import { filter, take } from "rxjs/operators";
import { ThemeService } from "../../../../services/theme/theme.service";
export interface SelectionEvent {
    lines: Set<number>;
    text: string;
}
export class EditorHelper {

    private rangeSaved: Range = null;
    private isFocused: boolean = false;
    public eventSelection = new Subject<SelectionEvent>();

    constructor(private contentEditable: HTMLDivElement, private lineHeight: number, private scroll: HTMLDivElement) {
        fromEvent(contentEditable, "keydown").pipe().subscribe((e: KeyboardEvent) => {
            if (e.keyCode === 9) {
                e.preventDefault();
                // add tab
                document.execCommand("insertHTML", false, "&#009");

                const r = this.getCaretViewportPos();
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
            this.isFocused = false;
            // this.saveSelection();
        });
        fromEvent(this.contentEditable, "focusin").pipe().subscribe(() => {
            this.isFocused = true;
            // this.restoreSelection();
        });
        fromEvent(document, "selectionchange").pipe(
            filter(() => this.isFocused),
        ).subscribe((e) => {
            this.processSelection(e);
        });

    }
    public processSelection(e: Event) {
        console.log("procesing selection!");
        const sel = window.getSelection();

        if (sel.rangeCount === 0) {
            console.log("selection range is empty");
            return;
        }

        const range = sel.getRangeAt(0).cloneRange();
        const rangeText = range.toString();
        // get client rects as array!
        let rects = Array.from(range.getClientRects());

        if (rangeText.length === 0) {
            console.log("colapsing range len=0");
            range.collapse(false);
            rects = rects.length > 0 ? [rects[rects.length - 1]] : [];
        }

        // const rect = range.getBoundingClientRect();
        // console.log(JSON.stringify(rect));
        // console.log(`L:${rect.left} T:${rect.top} W:${rect.width} H:${rect.height}`);

        // Array.from(rects).forEach((r, i) => console.log(`[${i}]  L:${r.left} T:${r.top} W:${r.width} H:${r.height}`));
        const selectedLines = new Set<number>();
        Array.from(rects).forEach((r, i) => {
            const cp = this.getViewportToScrollClientPos(r.left, r.top);
            // console.log(`x:${cp.x} y:${cp.y}`);
            console.log(`[${i}] y: ${cp.y} (x: ${cp.x}) width: ${r.width} height: ${r.height}`);
            const line = Math.floor(cp.y / this.lineHeight) + 1;
            selectedLines.add(line);

        });
        console.log(`range text: [${JSON.stringify(range.toString())}]`);
        console.log(`lines: ${JSON.stringify(Array.from(selectedLines.values()))}`);
        console.log(`ranges count: ${sel.rangeCount}`);

        const ev: SelectionEvent = {
            lines: selectedLines,
            text: rangeText,
        };
        this.eventSelection.next(ev);
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
    public setCaretPosition(pos: number, element?: Node) {

        if (element == null) {
            element = this.contentEditable;
        }

        // Loop through all child nodes
        for (const node of Array.from(element.childNodes)) {
            // console.log(`NODE: [${JSON.stringify(node.nodeValue)}]`);
            if (node.nodeType === 3) { // we have a text node
                if (node.nodeValue.length >= pos) {
                    // finally add our range
                    const range = document.createRange(),
                        sel = window.getSelection();
                    range.setStart(node, pos);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    return -1; // we are done
                } else {
                    pos -= node.nodeValue.length;
                }
            } else {
                pos = this.setCaretPosition(pos, node);
                if (pos === -1) {
                    return -1; // no need to finish the for loop
                }
            }
        }
        return pos; // needed because of recursion stuff
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
    public getViewportToScrollClientPos(x: number, y: number): {
        x: number;
        y: number;
    } {
        // const caretViewportPos = this.getCaretViewportCoords();
        const editorViewportRect: ClientRect = this.scroll.getBoundingClientRect();
        const editorScrollTop = this.scroll.scrollTop;
        const editorScrollLeft = this.scroll.scrollLeft;

        const clientX = x - editorViewportRect.left + editorScrollLeft;
        const clientY = y - editorViewportRect.top + editorScrollTop;
        return {
            x: clientX,
            y: clientY,

        };
    }
    public getCaretViewportPos() {
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
    public moveToEnd() {
        const sel = window.getSelection();
        sel.removeAllRanges();

        fromEvent(this.contentEditable, "focusin").pipe(
            take(1),
        ).subscribe(() => {
            const range = document.createRange();
            range.selectNodeContents(this.contentEditable);
            range.collapse(false);
            sel.addRange(range);
        });

        this.contentEditable.focus();
    }
    public scrollToCaret() {
        const vpos = this.getCaretViewportPos();
        const pos = this.getViewportToScrollClientPos(vpos.x, vpos.y);

        const editorHeight = this.scroll.offsetHeight;
        const editorWidth = this.scroll.offsetWidth;
        const editorScrollTop = this.scroll.scrollTop;
        const editorScrollLeft = this.scroll.scrollLeft;
        const editorScrollRight = this.scroll.scrollLeft + editorWidth;
        const editorScrollBottom = this.scroll.scrollTop + editorHeight;
        const editorScrollTopMax = this.scroll.scrollHeight - editorHeight;
        const editorScrollLeftMax = this.scroll.scrollWidth - editorWidth;

        let newLeft: number = null;
        let newTop: number = null;

        if (pos.y > editorScrollBottom) {
            newTop = pos.y - editorHeight + (this.lineHeight * 2);
        }
        if (pos.y < editorScrollBottom) {
            newTop = editorScrollTop - (editorScrollTop - pos.y) - (this.lineHeight * 2);
        }

        if (pos.x > editorScrollRight) {
            newLeft = pos.x - editorWidth + (this.lineHeight * 2);
        }
        if (pos.x < editorScrollLeft) {
            newLeft = editorScrollLeft - (editorScrollLeft - pos.x) - (this.lineHeight * 2);
        }

        if (newTop) {
            newTop = newTop < 0 ? 0 : newTop;
            newTop = newTop > editorScrollTopMax ? editorScrollTopMax : newTop;
            this.scroll.scrollTop = newTop;
        }
        if (newLeft) {
            newLeft = newLeft < 0 ? 0 : newLeft;
            newLeft = newLeft > editorScrollLeftMax ? editorScrollLeftMax : newLeft;
            this.scroll.scrollLeft = newLeft;
        }
        console.log(`pos.x ${pos.x} pos.y ${pos.y}`);
        console.log(`newLeft ${newLeft} newTop ${newLeft}`);
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
    public getText(ignoreClasses: string[] = []) {
        const elems = this.contentEditable.childNodes;
        let ret = "";

        for (let i = 0; elems[i]; i++) {
            const elem = elems[i];

            ret = ret + elem.textContent;
        }

        return ret;

    }
}
