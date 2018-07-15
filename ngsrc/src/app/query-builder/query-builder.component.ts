import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";

import { range } from "lodash-es";
import { ViewDestroyable } from "../base/view-destroyable";

@Component({
    selector: "query-builder",
    templateUrl: "./query-builder.component.html",
    styleUrls: ["./query-builder.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryBuilderComponent extends ViewDestroyable implements OnInit, OnDestroy {
    public range = range(100);
    constructor(public change: ChangeDetectorRef) {
        super(change);
    }

    ngOnInit() {
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
