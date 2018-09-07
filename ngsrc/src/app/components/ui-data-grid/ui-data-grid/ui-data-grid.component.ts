import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { debounceTime, filter, take, takeUntil, tap } from "rxjs/operators";
import { QueryExecuteResult } from "../../../../../../src/cassandra-client/index";
import { ViewDestroyable } from "../../../base/view-destroyable";

import ResizeObserver from "resize-observer-polyfill";
import { Subject } from "rxjs";
import { RenderJson } from "../../../const/render-json";

@Component({
    selector: "ui-data-grid",
    templateUrl: "./ui-data-grid.component.html",
    styleUrls: ["./ui-data-grid.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDataGridComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @ViewChild("root") public root: ElementRef<HTMLDivElement>;
    // QueryExecuteResult
    private gridInstance: Handsontable = null;
    private gridSettings: Handsontable.GridSettings = null;
    private stateReady = new ReplaySubject<void>(1);

    private htmlCache: { [key: string]: HTMLElement } = {};

    private hostResizeObs: ResizeObserver;
    private eventHostResize = new Subject<void>();

    constructor(public host: ElementRef<HTMLDivElement>, public change: ChangeDetectorRef) {
        super(change);
        this.hostResizeObs = new ResizeObserver(() => {
            // setTimeout(() => this.onHostResize());
            this.eventHostResize.next();
        });
        this.hostResizeObs.observe(this.host.nativeElement);
    }
    @Input("queryResult") set setData(data: QueryExecuteResult) {
        this.createGridInstance(data);
    }
    ngOnInit() {
        this.stateReady.next();

        this.eventHostResize.pipe(
            takeUntil(this.eventViewDestroyed),
            debounceTime(100),
            filter(() => this.gridInstance != null),
        ).subscribe(() => {
            this.gridInstance.updateSettings(this.gridSettings, false);

        });

    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    private createGridInstance(data: QueryExecuteResult) {

        this.stateReady.pipe(
            take(1),
            tap(() => {
                if (this.gridInstance) {
                    try {
                        this.gridInstance.destroy();
                        this.gridInstance = null;
                    } catch (e) {
                        console.log(e);
                    }
                }
            }),
        ).subscribe(() => {
            console.log("createGridInstance");
            this.htmlCache = {};
            const types = data.columns.reduce((acc, curr) => {
                acc[curr.name] = curr.type;
                return acc;
            }, {});

            console.log(types);

            const names = data.columns.map((c) => c.name);

            // handle set/map/custom - stringify
            const dataRows = data.rows.map((row) => {
                Object.keys(row).forEach((k) => {
                    if (types[k] === "set" || types[k] === "map" || types[k] === "custom") {
                        row[k] = JSON.stringify(row[k]);
                    }
                });
                return row;
            });
            // const dataRows = data.rows;
            const columnDef = data.columns.map((c) => {
                if (c.type === "set" || c.type === "map" || c.type === "custom") {
                    return {
                        data: c.name,
                        renderer: this.cellRendererJson,
                    };

                } else {
                    return {
                        data: c.name,
                        type: "text",
                    };
                }

            });

            this.gridSettings = {
                data: dataRows,
                minSpareCols: 0,
                minSpareRows: 0,
                rowHeaders: true,
                contextMenu: true,
                manualColumnResize: true,
                colHeaders: names,
                columns: columnDef,
                allowRemoveColumn: false,
                allowRemoveRow: false,
                allowInsertColumn: false,
                allowInsertRow: false,
                manualRowResize: true,
                columnSorting: true,
                sortIndicator: true,
                renderAllRows: false,
                autoColumnSize: {
                    samplingRatio: 23,
                },
                autoRowSize: { syncLimit: 10 },

            };

            this.gridInstance = new Handsontable(this.root.nativeElement, this.gridSettings);
        });

    }

    private onHostResize() {
        if (this.gridInstance == null) {
            return;
        }
        console.log("onHostResize");
        this.gridInstance.updateSettings(this.gridSettings, false);
    }
    private cellRendererJson = (instance: _Handsontable.Core,
        td: HTMLElement, row: number, col: number, prop: string | number, value: any,
        cellProperties: Handsontable.GridSettings): void => {

        const obj = JSON.parse(value);

        RenderJson.set_icons("+", "-");
        Handsontable.dom.empty(td);

        const key = `R${row}C${col}`;
        const cache = this.htmlCache[key];
        let element: HTMLElement = null;

        if (cache == null) {
            element = RenderJson.render(obj, () => {
                this.gridInstance.deselectCell();
                this.gridInstance.selectCell(row, col);
            });
            this.htmlCache[key] = element;
        } else {
            element = cache;
        }

        td.appendChild(element);

    }
}
