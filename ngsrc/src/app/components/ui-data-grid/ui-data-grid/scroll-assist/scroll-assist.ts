import { fromEvent, interval, merge, Subject } from "rxjs";
import { debounceTime, filter, map, takeUntil } from "rxjs/operators";
import { UiDataGridComponent } from "../ui-data-grid.component";

export type DetectionZone = "top" | "left" | "bottom" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
export interface DetectionRect {
    top: number;
    left: number;
    width: number;
    height: number;
    name: DetectionZone;
}
export class ScrollAssist {

    public scroll: HTMLDivElement;
    public clientRect: ClientRect;
    private zoneMargin = 64;
    private scrollProgress = 16;
    private zones: DetectionRect[] = [];
    private eventChange = new Subject<DetectionZone>();
    private eventStop = new Subject<void>();
    private eventDestroy = new Subject<void>();
    constructor(public dataGrid: UiDataGridComponent) {

        this.scroll = dataGrid.gridScroll;
        this.updateClientRect();

        fromEvent<MouseEvent>(document, "mousemove", { capture: true }).pipe(
            takeUntil(dataGrid.eventViewDestroyed),
        ).subscribe(() => {
            this.eventStop.next();
        });

        fromEvent<MouseEvent>(this.dataGrid.gridHost.nativeElement, "mousemove", { capture: true }).pipe(
            takeUntil(dataGrid.eventViewDestroyed),
            filter(() => this.dataGrid.selectionActive),
            debounceTime(100),
            map((e) => this.detectPoint(e.clientX, e.clientY)),
        ).subscribe((zone) => {
            // console.log(`scrollAssist change ${zone}`);
            this.eventChange.next(zone);
        });

        this.eventChange.pipe().subscribe((zone) => {
            interval(16).pipe(
                takeUntil(
                    merge(
                        dataGrid.eventViewDestroyed,
                        this.eventChange,
                        this.eventStop,
                    ),
                ),
            ).subscribe(() => {
                // console.log(`scrollAssist scrollToZone ${zone}`);
                this.scrollForZone(zone);
            });
        });

        dataGrid.eventGridWrapResize.pipe(
            takeUntil(dataGrid.eventViewDestroyed),
        ).subscribe(() => {
            this.updateClientRect();
        });

    }
    public updateClientRect() {
        this.clientRect = this.dataGrid.gridHost.nativeElement.getBoundingClientRect();
        const top: DetectionRect = {
            top: 0,
            left: 0,
            width: this.clientRect.width,
            height: this.zoneMargin,
            name: "top",
        };
        const left: DetectionRect = {
            top: 0,
            left: 0,
            width: this.zoneMargin,
            height: this.clientRect.height,
            name: "left",
        };
        const right: DetectionRect = {
            top: 0,
            left: this.clientRect.width - this.zoneMargin,
            width: this.zoneMargin,
            height: this.clientRect.height,
            name: "right",
        };
        const bottom: DetectionRect = {
            top: this.clientRect.height - this.zoneMargin,
            left: 0,
            width: this.clientRect.width,
            height: this.zoneMargin,
            name: "bottom",
        };
        this.zones = [];
        this.zones.push(top);
        this.zones.push(left);
        this.zones.push(right);
        this.zones.push(bottom);
    }
    private detectPoint(clientX: number, clientY: number): DetectionZone {
        const cx = clientX - this.clientRect.left;
        const cy = clientY - this.clientRect.top;
        // const cx = pageX ;
        // const cy = pageY ;
        console.log(`${cx}:${cy} ${JSON.stringify(this.clientRect)}`);
        const detected = this.zones.filter((i) => {
            return cx >= i.left && cx <= i.left + i.width && cy >= i.top && cy <= i.top + i.height;
        });
        // console.log(JSON.stringify(detected));
        if (detected.length === 0) {
            return null;
        }
        if (detected.length === 1) {
            return detected[0].name;
        }

        if (detected.find((i) => i.name === "top") && detected.find((i) => i.name === "left")) {
            return "top-left";
        }
        if (detected.find((i) => i.name === "top") && detected.find((i) => i.name === "right")) {
            return "top-right";
        }
        if (detected.find((i) => i.name === "bottom") && detected.find((i) => i.name === "left")) {
            return "bottom-left";
        }
        if (detected.find((i) => i.name === "bottom") && detected.find((i) => i.name === "right")) {
            return "bottom-right";
        }

    }
    private scrollForZone(zone: DetectionZone) {
        switch (zone) {
            case "top":
                this.scroll.scrollTop -= this.scrollProgress;
                break;
            case "left":
                this.scroll.scrollLeft -= this.scrollProgress;
                break;
            case "bottom":
                this.scroll.scrollTop += this.scrollProgress;
                break;
            case "right":
                this.scroll.scrollLeft += this.scrollProgress;
                break;
            case "bottom-left":
                this.scroll.scrollTop += this.scrollProgress;
                this.scroll.scrollLeft -= this.scrollProgress;
                break;
            case "bottom-right":
                this.scroll.scrollTop += this.scrollProgress;
                this.scroll.scrollLeft += this.scrollProgress;
                break;
            case "top-left":
                this.scroll.scrollTop -= this.scrollProgress;
                this.scroll.scrollLeft -= this.scrollProgress;
                break;
            case "top-right":
                this.scroll.scrollTop -= this.scrollProgress;
                this.scroll.scrollLeft += this.scrollProgress;
                break;

        }
    }
}
