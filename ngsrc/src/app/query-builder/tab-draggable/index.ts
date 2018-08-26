import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

declare var window: Window;
declare var document: Document;

export class TabDraggable {

    private initialX: number;
    private initialY: number;

    private xOffset: number;
    private yOffset: number;

    private element: HTMLDivElement;
    private elementRect: ClientRect;
    private active = false;

    constructor(private container: HTMLDivElement) {
        document.addEventListener("mouseup", this.onDocumentMouseUp, {
            capture: true,
        });

        fromEvent<MouseEvent>(document, "mousemove", { capture: true }).pipe(
            filter(() => this.active),
        ).subscribe((e) => {
            this.onMove(e);
        });
    }
    public dragStart(element: HTMLDivElement, e: MouseEvent) {
        console.log("dragStart");
        this.element = element;
        this.active = true;

        this.initialX = e.offsetX;
        this.initialY = e.offsetY;

        this.elementRect = this.element.getBoundingClientRect();
    }
    public dragEnd() {
        console.log("dragEnd");
        this.active = false;

        this.element.style.transform = "translate3d(0,0,0)";

        this.element = null;
    }
    private onDocumentMouseUp = (e: MouseEvent) => {
        console.log("onDocumentMouseUp");
        if (this.active === true) {
            this.dragEnd();
        }
    }
    private setTransform(xPos, yPos) {
        this.element.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
    private onMove(e: MouseEvent) {
        console.log("onMove");
        // const pos = this.offsetRelativeToDocument(this.element);
        const rect = this.container.getBoundingClientRect();

        const mx = e.clientX - this.elementRect.left;
        const my = e.clientY - this.elementRect.top;

        if (mx < 0) {
            return;
        }

        if (this.active) {

            const currentX = mx - this.initialX;
            const currentY = my - this.initialY;

            // tslint:disable-next-line:max-line-length
            console.log(`clientX=${e.clientX} this.elementRect.left=${this.elementRect.left} mouseX: ${mx}  currentX=${currentX} initialX=${this.initialX}`);
            // console.log(`clientX=${e.clientX}   mouseX: ${mx}`);

            this.setTransform(currentX, 0);
        }
    }

    // private getTransform(): [number, number, number] {
    //     const t = this.element.style.transform;

    //     if (t == null || t === "none") {
    //         return [0, 0, 0];
    //     }

    //     const s = t.search("translate3d");

    //     if (s < 0) {
    //         return [0, 0, 0];
    //     }

    //     const m = t.match(/\(.*\)/);

    //     if (m == null || m.length === 0) {
    //         return [0, 0, 0];
    //     }

    //     const p = m[0];
    //     const n = p.match(/\d+/g);
    //     const i = n.map((e) => parseInt(e, 10));
    //     return [i[0], i[1], i[2]];

    // }
}
