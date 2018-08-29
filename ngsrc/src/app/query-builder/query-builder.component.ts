import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component,
    ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren,
} from "@angular/core";
import { WorkbenchEditor } from "../../../../src/types/editor";
import { ViewDestroyable } from "../base/view-destroyable";
import { UiContentHorizontalComponent } from "../components/ui-content-horizontal/ui-content-horizontal.component";
import { UiQueryComponent } from "../components/ui-query/ui-query/ui-query.component";
import { EditorQueService } from "../services/editor-que/editor-que.service";
import { SystemService } from "../services/system/system.service";
import { TabDraggable } from "./tab-draggable/index";

@Component({
    selector: "query-builder",
    templateUrl: "./query-builder.component.html",
    styleUrls: ["./query-builder.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryBuilderComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @ViewChild("queryEditor") public queryEditor: UiQueryComponent;
    @ViewChild("tabScroll") public tabScroll: UiContentHorizontalComponent;
    @ViewChild("tabList") public tabList: ElementRef<HTMLDivElement>;
    @ViewChildren("tabItems") public tabItems: QueryList<ElementRef<HTMLDivElement>>;

    // public range = range(100);
    public tabActive: number = -1;
    public editorActive: WorkbenchEditor = null;

    private drag: TabDraggable;

    constructor(
        public change: ChangeDetectorRef,
        public system: SystemService,
        public editorQue: EditorQueService,
    ) {
        super(change);
    }

    ngOnInit() {
        this.system.runReady();

        this.drag = new TabDraggable(this.tabList.nativeElement);

        this.editorQue.eventChange.pipe()
            .subscribe((val) => {
                console.log(`eventChange val=${val}`);
                if (val != null) {
                    console.log(`eventChange activating val=${val}`);
                    this.tabActivate(val);
                }
                this.detectChanges();
                this.tabScroll.update();

                this.drag.updateTabItems(this.tabItems);

            });

        this.drag.eventReplace.pipe()
            .subscribe((data: [number, number]) => {
                this.replaceTabs(data[0], data[1]);
            });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    public tabSelect = (index: number) => {
        console.log("tabSelect");
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
    public onTabMousedown = (e: MouseEvent, index: number) => {
        this.tabActivate(index);
        console.log(`Clicked index=${index}`);
        const elem = this.tabItems.toArray()[index].nativeElement;
        this.drag.dragStart(index, e);
    }
    private replaceTabs(source: number, dest: number) {
        console.log(`replacing ${source} with ${dest}`);

        this.editorQue.swap(source, dest);

    }
    private onActiveTabCodeChange = (code: string) => {

    }
}
