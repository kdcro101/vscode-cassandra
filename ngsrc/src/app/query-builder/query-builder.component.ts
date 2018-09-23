import {
    AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
    Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren,
} from "@angular/core";
import { MatMenuTrigger, MatSnackBar } from "@angular/material";
import { Subject } from "rxjs";
import { concatMap, take, takeUntil } from "rxjs/operators";
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
    @ViewChildren(MatMenuTrigger) menuTriggers: QueryList<MatMenuTrigger>;
    @ViewChildren("triggerWrapper") triggerWrapper: QueryList<ElementRef<HTMLDivElement>>;

    public editor: WorkbenchEditor = null;
    public editorIndex: number = -1;

    private drag: TabDraggable;

    public doSave = new Subject<[number, boolean]>(); // [index,saveAsMode]

    constructor(
        public change: ChangeDetectorRef,
        public system: SystemService,
        public editorService: EditorService,
        public snackBar: MatSnackBar,
    ) {
        super(change);

        this.editorService.stateActive.pipe(
            takeUntil(this.eventViewDestroyed),
            take(1),
        ).subscribe(() => {
            this.doSave.pipe(
                takeUntil(this.eventViewDestroyed),
                concatMap((data) => this.editorService.save(data[0], data[1])),
            ).subscribe((result) => {
                if (result === "success") {
                    this.snackBar.open("Document saved", "OK", {
                        duration: 1000,
                    });
                }
            }, (e) => {
                this.snackBar.open("Error saving document", "OK");
            });

        });
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

        if (e.button === 2) {
            this.menuOpen(e, index);
            return;
        }

        this.tabActivate(index);
        console.log(`Clicked index=${index}`);
        this.drag.dragStart(index, e);

    }
    public doTabClose = (e: MouseEvent, index: number) => {
        this.editorService.remove(index);
    }
    public doTabCloseExcept = (e: MouseEvent, index: number) => {
        this.editorService.removeExcept(index);
    }
    public doTabCloseAfter = (e: MouseEvent, index: number) => {
        this.editorService.removeAfter(index);
    }
    public doTabSave = (e: MouseEvent, index: number) => {
        // this.editorService.save(index, false);
        this.doSave.next([this.editorIndex, false]);
    }
    public doTabSaveAs = (e: MouseEvent, index: number) => {
        // this.editorService.save(index, true);
        this.doSave.next([this.editorIndex, true]);
    }
    public doTabDuplicate = (e: MouseEvent, index: number) => {
        this.editorService.duplicate(index);
    }
    public doTabCreate = () => {
        const clusterName = this.editor ? this.editor.statement.clusterName : null;
        const keyspace = this.editor ? this.editor.statement.keyspace : null;
        this.editorService.createEmpty(clusterName, keyspace);
    }
    public doTabOpen = () => {
        this.editorService.open();
    }
    private replaceTabs(source: number, dest: number) {
        this.editorService.swap(source, dest);
    }
    public onActiveStatementChange = (statement: WorkbenchCqlStatement) => {
        this.editorService.updateStatement(this.editorService.index, statement);
    }
    public menuOpen(ev: MouseEvent, index: number) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        console.log("Right button");
        const e = this.tabItems.toArray()[index].nativeElement;
        const r = e.getBoundingClientRect();
        const w = this.triggerWrapper.toArray()[index].nativeElement;
        const t = this.menuTriggers.toArray()[index];
        const x = ev.clientX - r.left;
        const y = ev.clientY - r.top;
        // console.log(`${x}:${y} [px=${ev.clientX},py=${ev.clientY}] ofL=${r.left} ofT=${r.top}`);
        w.style.left = `${x + 1}px`;
        w.style.top = `${y + 1}px`;

        t.openMenu(); // Open your custom context menu instead
    }

}
