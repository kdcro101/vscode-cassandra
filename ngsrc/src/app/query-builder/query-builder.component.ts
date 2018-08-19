import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";

import { range } from "lodash-es";
import { ViewDestroyable } from "../base/view-destroyable";
import { MessagesService } from "../services/messages/messages.service";

@Component({
    selector: "query-builder",
    templateUrl: "./query-builder.component.html",
    styleUrls: ["./query-builder.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryBuilderComponent extends ViewDestroyable implements OnInit, OnDestroy {
    public range = range(100);
    constructor(
        public change: ChangeDetectorRef,
        public messages: MessagesService,
        ) {
        super(change);
    }

    ngOnInit() {
        this.messages.emitStateReady();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
