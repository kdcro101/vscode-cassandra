import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { WorkbenchEditor } from "../../../../src/types/editor";
import { ViewDestroyable } from "../base/view-destroyable";
import { UiQueryComponent } from "../components/ui-query/ui-query/ui-query.component";
import { EditorQueService } from "../services/editor-que/editor-que.service";
import { SystemService } from "../services/system/system.service";

@Component({
    selector: "query-builder",
    templateUrl: "./query-builder.component.html",
    styleUrls: ["./query-builder.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryBuilderComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @ViewChild("queryEditor") public queryEditor: UiQueryComponent;

    // public range = range(100);
    public tabActive: number = -1;
    public editorActive: WorkbenchEditor = null;
    constructor(
        public change: ChangeDetectorRef,
        public system: SystemService,
        public editorQue: EditorQueService,
    ) {
        super(change);
    }

    ngOnInit() {
        this.system.runReady();
        this.editorQue.eventChange.pipe()
            .subscribe((val) => {
                console.log(`eventChange val=${val}`);
                if (val != null) {
                    console.log(`eventChange activating val=${val}`);
                    this.tabActivate(val);
                }
                this.detectChanges();
            });
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
    public tabActivate(index: number) {
        const e = this.editorQue.que[index];
        if (e == null) {
            return;
        }
        this.tabActive = index;
        this.editorActive = e;

    }
}
