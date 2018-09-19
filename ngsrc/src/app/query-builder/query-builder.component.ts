import {
    AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
    Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren,
} from "@angular/core";
import { takeUntil } from "rxjs/operators";
import { WorkbenchCqlStatement } from "../../../../src/types/editor";
import { ViewDestroyable } from "../base/view-destroyable";
import { UiContentHorizontalComponent } from "../components/ui-content-horizontal/ui-content-horizontal.component";
import { UiQueryComponent } from "../components/ui-query/ui-query/ui-query.component";
import { EditorService } from "../services/editor/editor.service";
import { SystemService } from "../services/system/system.service";
import { WorkbenchEditor } from "../types/index";
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
    @ViewChild("container") public container: ElementRef<HTMLDivElement>;
    @ViewChildren("tabItems") public tabItems: QueryList<ElementRef<HTMLDivElement>>;

    public editor: WorkbenchEditor = null;
    public editorIndex: number = -1;

    private drag: TabDraggable;

    constructor(
        public change: ChangeDetectorRef,
        public system: SystemService,
        public editorService: EditorService,
    ) {
        super(change);

    }

    ngOnInit() {
        this.system.runReady();

        this.drag = new TabDraggable(this.tabList.nativeElement);

        this.editorService.eventListChange.pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((val) => {
            this.detectChanges();
            this.tabScroll.update();
            this.drag.updateTabItems(this.tabItems);
        });

        this.editorService.stateActive.pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((data) => {

            this.editorIndex = data[0];
            this.editor = data[1];

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
        this.editorService.activate(index);
    }

    public onTabMousedown = (e: MouseEvent, index: number) => {
        this.tabActivate(index);
        console.log(`Clicked index=${index}`);
        this.drag.dragStart(index, e);
    }
    public onTabClose = (e: MouseEvent, index: number) => {
        e.stopPropagation();
        e.preventDefault();
        this.editorService.remove(index);

    }
    private replaceTabs(source: number, dest: number) {
        console.log(`replacing ${source} with ${dest}`);

        this.editorService.swap(source, dest);

    }
    public onActiveStatementChange = (statement: WorkbenchCqlStatement) => {
        this.editorService.updateStatement(this.editorService.index, statement);
    }

}
