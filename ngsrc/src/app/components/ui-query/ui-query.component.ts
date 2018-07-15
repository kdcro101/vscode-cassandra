import * as splitJs from "split.js";

import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
    selector: "app-ui-query",
    templateUrl: "./ui-query.component.html",
    styleUrls: ["./ui-query.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiQueryComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
