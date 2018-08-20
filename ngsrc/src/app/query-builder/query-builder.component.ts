import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";

import { range } from "lodash-es";
import { ViewDestroyable } from "../base/view-destroyable";
import { UiQueryComponent } from "../components/ui-query/ui-query/ui-query.component";
import { MessagesService } from "../services/messages/messages.service";

@Component({
    selector: "query-builder",
    templateUrl: "./query-builder.component.html",
    styleUrls: ["./query-builder.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryBuilderComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @ViewChild("queryEditor") public queryEditor: UiQueryComponent;

    public range = range(100);
    public tabActive: number = -1;
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
    public tabSelect = (e: Event, index: number) => {
        console.log("mousedown");
        this.tabActive = index;
        this.detectChanges();
        this.queryEditor.updateEditor(null);
    }

}
