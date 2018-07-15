import * as Split from "split.js";

import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "ui-query",
    templateUrl: "./ui-query.component.html",
    styleUrls: ["./ui-query.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiQueryComponent implements OnInit {
    @ViewChild("top") public top: ElementRef<HTMLDivElement>;
    @ViewChild("bottom") public bottom: ElementRef<HTMLDivElement>;
    @ViewChild("topLeft") public topLeft: ElementRef<HTMLDivElement>;
    @ViewChild("topRight") public topRight: ElementRef<HTMLDivElement>;
    constructor() { }

    ngOnInit() {

        Split([this.top.nativeElement, this.bottom.nativeElement], {
            direction: "vertical",
            gutterSize: 12,
        });

        Split([this.topLeft.nativeElement, this.topRight.nativeElement], {
            sizes: [75, 25],
            gutterSize: 12,
        });

    }

}
