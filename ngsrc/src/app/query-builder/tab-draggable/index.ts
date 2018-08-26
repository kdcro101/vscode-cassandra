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
    private active = false;

    constructor(private container: HTMLDivElement) {
        document.addEventListener("mouseup", this.onDocumentMouseUp, {
            capture: true,
        });

        fromEvent<MouseEvent>(this.container, "mousemove").pipe(
            filter(() => this.active),
        ).subscribe((e) => {
            this.onMove(e);
        });
    }
    public dragStart(element: HTMLDivElement, e: MouseEvent) {
        console.log("dragStart");
        this.element = element;
        this.active = true;

        this.initialX = e.clientX - this.xOffset;
        this.initialY = e.clientY - this.yOffset;

    }
    public dragEnd() {
        console.log("dragEnd");
        this.active = false;
        this.element = null;
    }
    private onDocumentMouseUp = (e: MouseEvent) => {
        console.log("onDocumentMouseUp");
        if (this.active === true) {
            this.dragEnd();
        }
    }
    private setTranslate(xPos, yPos) {
        this.element.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
    private onMove(e: MouseEvent) {
        console.log("onMove");

        if (this.active) {

            const currentX = e.clientX - this.initialX;
            const currentY = e.clientY - this.initialY;

            this.xOffset = currentX;
            this.yOffset = currentY;

            this.setTranslate(currentX, 0);
        }
    }
}
