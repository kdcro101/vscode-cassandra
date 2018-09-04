import { ElementRef, QueryList } from "@angular/core";
import { fromEvent } from "rxjs";
import { Subject } from "rxjs";
import { filter, map } from "rxjs/operators";

declare var window: Window;
declare var document: Document;

export class TabDraggable {

    private initialX: number;
    private initialY: number;

    private xOffset: number;
    private yOffset: number;

    private element: HTMLDivElement;
    private elementRect: ClientRect;
    private elementIndex: number;
    private active = false;

    private containerRect: ClientRect;
    private hoveredIndex: number;

    public eventReplace = new Subject<[number, number]>();
    private tabItems: QueryList<ElementRef<HTMLDivElement>>;

    constructor(private container: HTMLDivElement) {
        document.addEventListener("mouseup", this.onDocumentMouseUp, {
            capture: true,
        });

        // element move
        fromEvent<MouseEvent>(document, "mousemove", { capture: true }).pipe(
            filter(() => this.active),
            map<MouseEvent, [number, number]>((e) => {
                const mx = e.clientX - this.elementRect.left;
                const my = e.clientY - this.elementRect.top;
                return [mx, my];
            }),
        ).subscribe((e) => {
            this.onElementMove(e[0], e[1]);
        });

        // container move
        fromEvent<MouseEvent>(document.body, "mousemove", { capture: true }).pipe(
            filter(() => this.active),
            map<MouseEvent, [number, number]>((e) => {
                const mx = e.pageX - this.containerRect.left;
                const my = e.pageY - this.containerRect.top;
                return [mx, my];
            }),
        ).subscribe((e) => {
            this.onContainerMove(e[0], e[1]);
        });

    }
    public dragStart(index: number, e: MouseEvent) {
        console.log("dragStart");

        this.element = this.tabItems.toArray()[index].nativeElement;
        this.elementIndex = index;
        this.elementRect = this.element.getBoundingClientRect();
        this.containerRect = this.container.getBoundingClientRect();
        this.hoveredIndex = -1;
        this.element.classList.add("dragged");

        this.initialX = e.offsetX;
        this.initialY = e.offsetY;

        this.active = true;

    }
    public dragEnd() {
        console.log("dragEnd");
        this.active = false;

        this.element.classList.remove("dragged");
        this.element.style.transform = "translate3d(0,0,0)";

        const tabs = this.tabItems.toArray();

        tabs.forEach((e) => {
            const div = e.nativeElement;
            div.classList.remove("covered");
        });

        this.element = null;

        if (this.hoveredIndex > -1) {
            this.eventReplace.next([this.elementIndex, this.hoveredIndex]);
        }

    }
    private onDocumentMouseUp = (e: MouseEvent) => {
        if (this.active === true) {
            console.log("onDocumentMouseUp");
            this.dragEnd();
        }
    }
    private setTransform(xPos, yPos) {
        this.element.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
    private onElementMove(x: number, y: number) {
        console.log("onMove");

        if (this.active) {

            const currentX = x - this.initialX;
            const currentY = y - this.initialY;

            this.setTransform(currentX, 0);
        }
    }
    private onContainerMove(x: number, y: number) {
        console.log(`container move (${x},${y})`);

        const tabs = this.tabItems.toArray();
        let hovered: number = -1;

        for (let i = 0; i < tabs.length; i++) {
            if (i === this.elementIndex) {
                continue;
            }

            const e = tabs[i].nativeElement;

            const l = e.offsetLeft;
            const t = e.offsetTop;
            const w = e.offsetWidth;
            const h = e.offsetHeight;

            if (x >= l && x <= (l + w)) {
                // && y >= t && y <= (t + h)
                if (!e.classList.contains("covered")) {
                    e.classList.add("covered");
                }
                hovered = i;
            } else {
                e.classList.remove("covered");
            }

        }

        this.hoveredIndex = hovered;

    }
    public updateTabItems(tabItems: QueryList<ElementRef<HTMLDivElement>>) {
        this.tabItems = tabItems;
    }

}
