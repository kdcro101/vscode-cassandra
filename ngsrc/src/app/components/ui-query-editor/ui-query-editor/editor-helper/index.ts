import { fromEvent } from "rxjs";
import { ThemeService } from "../../../../services/theme/theme.service";

export class EditorHelper {

    constructor(private contentEditable: HTMLDivElement, private lineHeight: number) {
        fromEvent(contentEditable, "keydown").pipe()
            .subscribe((e: KeyboardEvent) => {
                if (e.keyCode === 9) {
                    e.preventDefault();
                    // add tab
                    document.execCommand("insertHTML", false, "&#009");
                }
                // if (e.keyCode === 13) {
                //     e.preventDefault();
                //     // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
                //     document.execCommand("insertHTML", false, "\n");
                //     // prevent the default behaviour of return key pressed

                // }
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

        // const exp = Array.from(this.contentEditable.childNodes);
        // const p = exp.reduce((acc, current, i) => {
        //     return acc + current.textContent;
        // }, "");

        // const content = this.contentEditable.textContent || "";
        // const text = content.replace(/\n\n$/i, "\n");
        // const endsWithSingleNl = (content.search(/\n\n$/) === -1 && content.search(/\n$/) > -1) ? true : false;

        // const splits = text.split("\n");

        // console.log(`split: <${JSON.stringify(splits)}>`);
        // console.log(`replaced: [${JSON.stringify(text)}]`);
        // console.log(`original: [${JSON.stringify(content)}]`);
        // console.log(`exp: [${JSON.stringify(p)}]`);
        // console.log(`endsWithSingleNl: ${endsWithSingleNl}`);

        // // console.log(window.getComputedStyle(this.contentEditable));

        // const lines = endsWithSingleNl ? splits.length - 1 : splits.length;
        // return lines;
    }
}
