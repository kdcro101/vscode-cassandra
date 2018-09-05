import { fromEvent, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

export class TableColumnResize {
    constructor(private table: HTMLTableElement, private headerItems: HTMLTableHeaderCellElement[]) { }

    private thSelected: HTMLTableHeaderCellElement;
    private thSelectedIndex: number;
    private thWidthInitial: number;

    private startOffset: number;
    private eventDetach = new Subject<void>();

    private widths: number[] = [];

    public attach() {

        this.headerItems.forEach((th, i) => {
            th.style.position = "relative";
            const grip = document.createElement("div");
            grip.innerHTML = "&nbsp;";
            grip.style.top = "0";
            grip.style.right = "0";
            grip.style.bottom = "0";
            grip.style.width = "5px";
            grip.style.position = "absolute";
            grip.style.cursor = "col-resize";
            grip.style.background = "red";

            fromEvent<MouseEvent>(grip, "mousedown").pipe(
                takeUntil(this.eventDetach),
            ).subscribe((e) => {

                console.log(`Seledcting header ${i}`);

                this.thSelected = th;
                this.thSelectedIndex = i;
                this.thWidthInitial = th.offsetWidth;
                this.startOffset = th.offsetWidth - e.pageX;

                this.stateStore();
            });

            th.appendChild(grip);
        });

        fromEvent<MouseEvent>(document, "mousemove").pipe(
            takeUntil(this.eventDetach),
            filter(() => this.thSelected != null),
        ).subscribe((e) => {
            const w = this.startOffset + e.pageX;
            // this.thSelected.style.width = this.startOffset + e.pageX + "px";

            this.stateUpdate(this.thSelectedIndex, w);
        });

        fromEvent<MouseEvent>(document, "mouseup").pipe(
            takeUntil(this.eventDetach),
        ).subscribe((e) => {
            this.thSelected = null;
            this.thSelectedIndex = null;
        });

    }
    private stateUpdate(index: number, width: number) {
        const diff = width - this.thWidthInitial;
        const tw = this.table.offsetWidth;
        const ntw = tw + diff;
        // console.log(`diff=${diff} tw=${tw} ntw=${ntw} width=${width}`);
        // this.table.style.width = `${ntw}px`;
        this.headerItems[index].style.width = `${width}px`;
        // this.headerItems[index].style.minWidth = `${width}px`;

        // for (let i = 0; i < this.headerItems.length; i++) {
        //     if (i === index) {
        //         continue;
        //     }
        //     const w = this.widths[i];
        //     this.headerItems[index].style.width = `${w}px`;

        // }

        // const sum = this.headerItems.reduce((acc, curr) => {
        //     return acc + curr.offsetWidth;
        // }, 0);

        // this.table.style.width = `${sum}px`;

    }
    private stateStore() {
        this.widths = this.headerItems.map((i) => i.offsetWidth);
    }
    private detach() {
        this.eventDetach.next();
    }
}
