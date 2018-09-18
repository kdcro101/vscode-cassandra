import { animate, state, style, transition, trigger } from "@angular/animations";
import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef,
    HostListener, Input, OnDestroy, OnInit, ViewChild,
} from "@angular/core";
import beautify from "json-beautify";
import { cloneDeep } from "lodash-es";
import ResizeObserver from "resize-observer-polyfill";
import { ReplaySubject, Subject } from "rxjs";
import { debounceTime, filter, take, takeUntil, tap } from "rxjs/operators";
import { ColumnInfo } from "../../../../../../src/cassandra-client/index";
import { AnalyzedStatement, CqlAnalysis } from "../../../../../../src/parser/listeners/cql-analyzer";
import { CassandraColumn, CassandraTable, DataChangeItem } from "../../../../../../src/types/index";
import { ViewDestroyable } from "../../../base/view-destroyable";
import { ThemeService } from "../../../services/theme/theme.service";
import { WorkbenchEditor } from "../../../types/index";
import { onBeforeChange } from "./before-change";
import { CellClassManager } from "./cell-class/cell-class";
import { ChangeManager } from "./change-manager";
import { buildColumns } from "./column-builder/column-builder";
import { gridContextMenu } from "./context-menu";
import { HtmlCache } from "./html-cache/html-cache";
import { measureText } from "./measure-width";
import { headerRenderer } from "./renderers/header-renderer";
import { ScrollAssist } from "./scroll-assist/scroll-assist";
import { SelectionHelper } from "./selection-helper/selection-helper";

const ARROW_DOWN = 40;
const ARROW_UP = 38;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;
const PAGE_UP = 33;
const PAGE_DOWN = 34;

interface CellPosition {
    col: number;
    row: number;
}

interface CellCoord {
    row: number;
    col: number;
}

declare var window: any;

@Component({
    selector: "ui-data-grid",
    templateUrl: "./ui-data-grid.component.html",
    styleUrls: ["./ui-data-grid.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger("gridAnimationState", [
            state("hidden", style({
                opacity: 0,
            })),
            state("ready", style({
                opacity: 1,
            })),
            transition("* => ready", animate("150ms ease-in-out")),
            transition("* => void", animate("50ms ease-in")),
        ]),
        trigger("progressAnimationState", [
            transition(":enter", [
                style({
                    opacity: 0,
                }),
                animate(".25s ease-in-out", style({
                    opacity: 1,
                })),
            ]),
            transition(":leave", [
                style({
                    opacity: 1,
                }),
                animate(".25s ease-in-out", style({
                    opacity: 0,
                })),
            ]),
        ]),
    ],
})
export class UiDataGridComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @ViewChild("root") public root: ElementRef<HTMLDivElement>;
    @ViewChild("gridHost") public gridHost: ElementRef<HTMLDivElement>;
    public gridAnimationState: string;

    public gridInstance: Handsontable = null;
    private gridSettings: Handsontable.GridSettings = null;

    private gridScroll: HTMLDivElement;
    private gridScrollHeader: HTMLDivElement;
    private gridScrollContent: HTMLTableElement;
    private gridScrollContentObserver: ResizeObserver;
    private gridScrollHeaderSpacer: HTMLDivElement;
    private gridScrollContentSpacer: HTMLDivElement;

    private stateViewReady = new ReplaySubject<void>(1);

    private hostResizeObs: ResizeObserver;
    private eventHostResize = new Subject<void>();

    public cellActive: CellCoord = { col: -1, row: -1 };

    public currentSelectedRows: number[] = [];

    public currentClusterName: string;
    public currentKeyspace: string;
    public currentEditor: WorkbenchEditor = null;
    public currentDataRows: any[] = null;
    public currentAnalysis: CqlAnalysis = null;
    public currentColumns: ColumnInfo[] = null;
    public currentStatementIndex: number = -1;
    public currentStatement: AnalyzedStatement = null;
    public currentTableStruct: CassandraTable = null;
    public currentError: Error = null;
    public currentPrimaryKeyAvailable: boolean = false;

    private eventHeaderCellElement = new Subject<[number, HTMLTableHeaderCellElement]>();
    private stateGridReady = new ReplaySubject<void>(1);

    public changeManager: ChangeManager = null;
    public scrollAssist: ScrollAssist;
    public cellClassManager: CellClassManager;
    public htmlCache = new HtmlCache();

    public selectionActive: boolean = false;
    public eventRender: Subject<void>;
    public eventDestroy: Subject<void>;
    public eventModifyColumnWidth = new Subject<void>();
    public eventScroll = new Subject<void>();
    public renderingProgress = false;
    public selectionHelper: SelectionHelper;

    constructor(
        public host: ElementRef<HTMLDivElement>,
        public change: ChangeDetectorRef,
        public theme: ThemeService,
    ) {
        super(change);
        this.hostResizeObs = new ResizeObserver(() => {
            this.eventHostResize.next();
        });
        this.hostResizeObs.observe(this.host.nativeElement);

        window.UiDataGridComponent = this;
        this.cellClassManager = new CellClassManager(this);
        this.selectionHelper = new SelectionHelper(this);

        this.gridAnimationState = "hidden";

    }
    @HostListener("@gridAnimationState.done", ["$event"])
    private onGridAnimationEnd(event: AnimationEvent) {

    }
    @Input("editor") set setData(data: WorkbenchEditor) {
        if (data == null) {
            console.log("UiDataGridComponent -> ̣No data");
            return;
        }
        this.currentEditor = data;
        this.createGridInstance();
    }
    ngOnInit() {
        this.stateViewReady.next();

        this.eventHostResize.pipe(
            takeUntil(this.eventViewDestroyed),
            debounceTime(100),
            filter(() => this.gridInstance != null),
        ).subscribe(() => {
            this.gridInstance.updateSettings({}, false);

        });

        ChangeManager.eventChange.pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((q) => {
            console.log("###################");
            console.log("ChangeManage que changed");
            console.log("###################");
            console.log(q);
        });

        ChangeManager.eventAdd.pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((item) => this.onDataChangeAdded(item));

        ChangeManager.eventRemove.pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((item) => this.onDataChangeRemoved(item));

    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    private onDataChangeAdded(item: DataChangeItem) {
        console.log(`onDataChangeAdded ${JSON.stringify(item)}`);

        const colName = item.column;
        const colIndex = this.currentColumns.findIndex((c) => c.name === colName);

        this.gridInstance.setCellMeta(item.row, colIndex, "className", "changed");
        this.gridInstance.render();
        this.detectChanges();
    }
    private onDataChangeRemoved(item: DataChangeItem) {
        console.log(`onDataChangeRemoved ${JSON.stringify(item)}`);

        const colName = item.column;
        const colIndex = this.currentColumns.findIndex((c) => c.name === colName);

        this.gridInstance.setCellMeta(item.row, colIndex, "className", "");
        this.gridInstance.render();
        this.detectChanges();
    }

    private createGridInstance() {

        this.currentError = null;
        this.stateGridReady = new ReplaySubject<void>(1);
        this.eventRender = new Subject<void>();

        this.gridAnimationState = "hidden";
        this.htmlCache = new HtmlCache();

        this.detectChanges();

        console.log("createGridInstance: ClusterExecuteResults");
        console.log("------------------------------------------");

        this.eventRender.pipe(
            takeUntil(this.eventViewDestroyed),
            debounceTime(300),
            take(1),
        ).subscribe(() => {
            console.log("##################################");
            console.log("RENDERING DONE");
            console.log("##################################");
            this.gridInstance.updateSettings({}, false);
            this.stateGridReady.next();
            this.gridAnimationState = "ready";
            this.renderingProgress = false;
            this.gridScroll = document.getElementsByClassName("wtHolder")[0] as HTMLDivElement;
            this.gridScrollHeader = document.getElementsByClassName("wtHolder")[1] as HTMLDivElement;
            this.gridScrollContent = document.querySelectorAll("table.htCore")[0] as HTMLTableElement;
            this.gridScrollHeaderSpacer = document.createElement("div");
            this.gridScrollContentSpacer = document.createElement("div");

            this.gridScrollHeaderSpacer.style.width = "5000px";
            this.gridScrollHeaderSpacer.style.height = "4px";
            this.gridScrollHeaderSpacer.style.background = "green";

            this.gridScrollContentSpacer.style.width = "5000px";
            this.gridScrollContentSpacer.style.height = "4px";
            this.gridScrollContentSpacer.style.background = "red";

            this.gridScrollHeader.appendChild(this.gridScrollHeaderSpacer);
            this.gridScroll.appendChild(this.gridScrollContentSpacer);

            this.gridScrollContentObserver = new ResizeObserver(() => {
                this.fixContentWidth();
            });
            this.gridScrollContentObserver.observe(this.gridScrollContent);

            this.restoreScrollPosition();
            this.detectChanges();
        });

        this.eventScroll.pipe(
            takeUntil(this.eventViewDestroyed),
            debounceTime(300),
        ).subscribe(() => this.storeScrollPosition());

        this.stateViewReady.pipe(
            take(1),
            tap(() => {

                if (this.gridInstance) {

                    console.log("createGridInstance gridInstance ");
                    console.log(this.gridInstance);

                    try {
                        this.gridInstance.destroy();
                        this.gridInstance = null;
                    } catch (e) {
                        console.log(e);

                        return;
                    }
                }

            }),
        ).subscribe(() => {
            console.log("createGridInstance");
            const data = this.currentEditor.result;

            this.currentStatementIndex = data.analysis.statements.findIndex((s) => s.type === "select");

            if (this.currentStatementIndex < 0) {
                return;
            }

            const error = data.errors[this.currentStatementIndex];

            if (error) {
                console.log("Statement resulted in error");
                console.log(error.error);
                this.currentError = error.error;
                this.renderingProgress = false;
                this.detectChanges();
                return;
            }

            this.renderingProgress = true;
            this.detectChanges();

            const result = data.results[this.currentStatementIndex];
            const analysis = data.analysis;
            const columns = data.columns[this.currentStatementIndex].list;
            const types = columns.reduce((acc, curr) => {
                acc[curr.name] = curr.type;
                return acc;
            }, {});

            this.currentColumns = columns;
            this.currentAnalysis = analysis;
            this.currentStatement = analysis.statements[this.currentStatementIndex];
            this.currentTableStruct = this.currentStatement.tableStruct;
            this.currentPrimaryKeyAvailable = this.primaryKeyAvailable();
            this.currentClusterName = analysis.cluserName;
            this.currentKeyspace = this.currentStatement.keyspace;
            // handle set/map/custom - stringify
            this.currentDataRows = cloneDeep(result.result.rows).slice(0).map((row) => {
                Object.keys(row).forEach((k) => {
                    if (types[k] === "set" || types[k] === "map" || types[k] === "custom") {
                        // row[k] = JSON.stringify(row[k]);
                        row[k] = beautify(row[k], null, 2);
                    }
                });
                return row;
            });

            this.changeManager = new ChangeManager(this);

            const columnDef = buildColumns(this);

            this.gridSettings = {
                data: this.currentDataRows,
                minSpareCols: 0,
                minSpareRows: 0,
                rowHeaders: true,
                contextMenu: gridContextMenu(this),
                colHeaders: headerRenderer(this.currentColumns, this.currentTableStruct),
                columns: columnDef,
                allowRemoveColumn: false,
                allowRemoveRow: false,
                allowInsertColumn: false,
                allowInsertRow: false,
                afterGetColHeader: (col: number, th: HTMLTableHeaderCellElement) => this.eventHeaderCellElement.next([col, th]),
                manualColumnResize: true,
                manualRowResize: true,
                beforeKeyDown: this.onBeforeKeydown,
                selectionMode: "multiple",
                columnSorting: true,
                fillHandle: false,
                sortIndicator: true,
                autoColumnSize: true,
                autoRowSize: { syncLimit: 10 },
                beforeChange: onBeforeChange(this),
                afterSelection: this.onAfterSelection,
                afterSelectionEnd: this.onAfterSelectionEnd,
                afterOnCellMouseDown: this.onCellMouseDown,
                viewportColumnRenderingOffset: 1000,
                viewportRowRenderingOffset: 25,
                beforeOnCellMouseOver: this.onBeforeOnCellMouseOver,
                afterRender: (isForced: boolean) => {
                    console.log(`afterRender ${isForced}`);
                    this.eventRender.next();
                },
                afterDestroy: () => { this.eventDestroy.next(); },
                afterUpdateSettings: () => { console.log("afterUpdateSettings"); },
                afterScrollHorizontally: () => this.eventScroll.next(),
                afterScrollVertically: () => this.eventScroll.next(),
                undo: true,

            };

            this.gridInstance = new Handsontable(this.gridHost.nativeElement, this.gridSettings);

            this.gridInstance.addHook("modifyColWidth", (width: number, col: number) => {

                if (col < 0) {
                    return width;
                }
                const c = this.currentColumns[col];
                const m = measureText(c.name) + 48;

                if (m > width) {
                    return m;
                }
                this.eventModifyColumnWidth.next();
                return width;
            });

            this.gridInstance.updateSettings({
                autoColumnSize: true,
            }, false);

            this.scrollAssist = new ScrollAssist(this);
            this.eventModifyColumnWidth.pipe(
                takeUntil(this.eventViewDestroyed),
                debounceTime(25),
            ).subscribe(() => {
                this.fixContentWidth();
            });
        });

    }

    private onBeforeKeydown = (e: KeyboardEvent) => {
        const ranges = this.gridInstance.getSelected();
        // [startRow, startCol, endRow, endCol];

        if (ranges == null || ranges.length === 0) {
            return;
        }

        const first = ranges[0];

        const startRow = first[0];
        const startCol = first[1];
        const endRow = first[2];
        const endCol = first[3];

        const normalized = this.normalizeSelection(startRow, startCol, endRow, endCol);

        const nStartRow = normalized[0].row;
        const nStartCol = normalized[0].col;
        const nEndRow = normalized[1].row;
        const nEndCol = normalized[1].col;

        const maxCol = this.gridInstance.countSourceCols() - 1;
        const maxRow = this.gridInstance.countSourceRows() - 1;

        const shift = e.shiftKey;
        const keyCode = e.keyCode;

        // console.log(JSON.stringify(first));

        const selectedAll = nStartRow === 0 && nStartCol === 0 && nEndRow === maxRow && nEndCol === maxCol;

        const pageRowSize = this.gridInstance.countVisibleRows();
        // console.log("NORM: " + JSON.stringify(normalized));

        // console.log(`maxCol=${maxCol} maxRow=${maxRow} selectedAll=${selectedAll}`);

        // if ((keyCode === ARROW_LEFT || keyCode === ARROW_UP || keyCode === PAGE_UP) && selectedAll && !shift) {
        if ((keyCode === ARROW_LEFT || keyCode === ARROW_UP) && selectedAll && !shift) {
            this.gridInstance.selectCell(0, 0, 0, 0, false);
            e.stopPropagation();
            e.stopImmediatePropagation();
            return;
        }

        // if ((keyCode === ARROW_RIGHT || keyCode === ARROW_DOWN || keyCode === PAGE_DOWN) && selectedAll && !shift) {
        if ((keyCode === ARROW_RIGHT || keyCode === ARROW_DOWN) && selectedAll && !shift) {
            this.gridInstance.selectCell(maxRow, maxCol, maxRow, maxCol, false);
            e.stopPropagation();
            e.stopImmediatePropagation();
            return;
        }

        if ((keyCode === ARROW_DOWN) && nEndRow === maxRow) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
        if ((keyCode === ARROW_UP) && nStartRow === 0) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
        if (keyCode === ARROW_LEFT && nStartCol === 0) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
        if (keyCode === ARROW_RIGHT && nEndCol === maxCol) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }

        // PAGEUP/DOWN
        const downRowDiff = maxRow - nEndRow;
        if (!shift && keyCode === PAGE_DOWN && downRowDiff < pageRowSize) {
            // got to maxRow
            this.gridInstance.selectCell(maxRow, startCol, maxRow, endCol, false);
            e.stopPropagation();
            e.stopImmediatePropagation();
            return;
        }
        const upRowDiff = nStartRow - pageRowSize;
        if (!shift && keyCode === PAGE_UP && upRowDiff < 0) {
            // got to maxRow
            this.gridInstance.selectCell(0, startCol, 0, endCol, false);
            e.stopPropagation();
            e.stopImmediatePropagation();
            return;
        }

    }

    private normalizeSelection(startRow: number, startCol: number, endRow: number, endCol: number): CellPosition[] {
        const p1: CellPosition = {
            col: startCol,
            row: startRow,
        };
        const p2: CellPosition = {
            col: endCol,
            row: endRow,
        };
        const list = [p1, p2];

        const sorted = list.sort(function (a, b) {
            if (a.col === b.col) { return a.row - b.row; }
            return a.col - b.col;
        });
        return sorted;
    }

    private primaryKeyAvailable(): boolean {
        if (!this.currentTableStruct) {
            return false;
        }
        const keys = this.currentTableStruct.primaryKeys;
        const cols = this.currentColumns;
        const collected: CassandraColumn[] = [];

        keys.forEach((k, i) => {
            const f = cols.find((c) => c.name === k.name);
            if (f) {
                collected.push(k);
            }
        });

        if (collected.length === keys.length) {
            return true;
        }
        return false;
    }
    private getHeaderElement(col: number): Promise<HTMLTableHeaderCellElement> {
        return new Promise((resolve, reject) => {

            this.eventHeaderCellElement.pipe(
                take(1),
                filter((data) => data[0] === col),
            ).subscribe((data) => {
                resolve(data[1]);
            }, (e) => {
                reject(e);
            });

            const c = this.gridInstance.getColHeader(col);

        });
    }
    private onCellMouseDown = (event: MouseEvent, coords: CellCoord, TD: Element): void => {

        this.cellActive.col = coords.col;
        this.cellActive.row = coords.row;

    }

    public onAfterSelection = (r: number, c: number, r2: number, c2: number, preventScrolling: object, selectionLayerLevel: number) => {
        if (this.selectionActive === false) {
            this.selectionActive = true;
        }
    }
    public onBeforeOnCellMouseOver = (event: Event, coords: Handsontable.wot.CellCoords, TD: Element, blockCalculations: object) => {

    }
    public onAfterSelectionEnd = (r: number, c: number, r2: number, c2: number, selectionLayerLevel: number): void => {
        this.selectionActive = false;
        this.currentSelectedRows = this.selectionHelper.getRows(this.gridInstance.getSelected());
        console.log(JSON.stringify(this.currentSelectedRows));
    }
    private storeScrollPosition() {
        const rs = this.gridInstance.getPlugin("autoRowSize");
        const cs = this.gridInstance.getPlugin("autoColumnSize");
        console.log("storeScrollPosition");

        this.currentEditor.scrollPosition = {
            left: this.gridScroll.scrollLeft,
            top: this.gridScroll.scrollTop,
            row: rs.getFirstVisibleRow(),
            col: cs.getFirstVisibleColumn(),
        };

    }
    private restoreScrollPosition() {
        if (!this.currentEditor.scrollPosition) {
            return;
        }
        const pos = this.currentEditor.scrollPosition;
        this.gridInstance.scrollViewportTo(pos.row, pos.col, false, false);
        this.gridScroll.scrollLeft = pos.left;
        this.gridScroll.scrollTop = pos.top;

    }

    private fixContentWidth() {
        if (!this.gridScrollContent) {
            return;
        }
        console.log("fixContentWidth");
        let added = Math.round(this.gridScroll.offsetWidth / 4);
        added = added >= 100 ? added : 100;
        this.gridScrollContentSpacer.style.height = `1px`;
        this.gridScrollHeaderSpacer.style.height = `1px`;

        this.gridScrollContentSpacer.style.width = `${this.gridScrollContent.offsetWidth + added}px`;
        this.gridScrollHeaderSpacer.style.width = `${this.gridScrollContent.offsetWidth + added}px`;

    }
}
