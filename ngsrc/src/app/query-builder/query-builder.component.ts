import {
    AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
    Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren,
} from "@angular/core";
import { takeUntil } from "rxjs/operators";
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
export class QueryBuilderComponent extends ViewDestroyable implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild("queryEditor") public queryEditor: UiQueryComponent;
    @ViewChild("tabScroll") public tabScroll: UiContentHorizontalComponent;
    @ViewChild("tabList") public tabList: ElementRef<HTMLDivElement>;
    @ViewChildren("tabItems") public tabItems: QueryList<ElementRef<HTMLDivElement>>;

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

        this.editorQue.eventChangeQue.pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((val) => {
            this.detectChanges();
            this.tabScroll.update();
            this.drag.updateTabItems(this.tabItems);
        });

        this.editorQue.stateActive.pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((data) => {
            this.editorActive = data[1];
            this.detectChanges();
            this.tabScroll.update();
        });

        this.drag.eventReplace.pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((data: [number, number]) => {
            this.replaceTabs(data[0], data[1]);
        });

    }
    ngAfterViewInit() {
        this.drag.updateTabItems(this.tabItems);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    public tabActivate(index: number) {
        this.editorQue.activate(index);
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
    public onActiveTabCodeChange = (code: string) => {
        this.editorQue.updateStatement(this.editorQue.itemActive, code);
    }

}
