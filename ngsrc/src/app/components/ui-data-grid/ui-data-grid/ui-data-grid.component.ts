import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { take, tap } from "rxjs/operators";
import { QueryExecuteResult } from "../../../../../../src/cassandra-client/index";
import { ViewDestroyable } from "../../../base/view-destroyable";

import ResizeObserver from "resize-observer-polyfill";

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

    private hostResizeObs: ResizeObserver;

    constructor(public host: ElementRef<HTMLDivElement>, public change: ChangeDetectorRef) {
        super(change);
        this.hostResizeObs = new ResizeObserver(() => {
            setTimeout(() => this.onHostResize());
        });
        this.hostResizeObs.observe(this.host.nativeElement);
    }
    @Input("queryResult") set setData(data: QueryExecuteResult) {
        this.createGridInstance(data);
    }
    ngOnInit() {
        this.stateReady.next();
        const data = [
            {
                name: "Abc",
                value: "123",
            },
            {
                name: "Abc",
                value: "123",
            },
            {
                name: "Abc",
                value: "123",
            },
            {
                name: "Abc",
                value: "123",
            },
            {
                name: "Abc",
                value: "123",
            },
        ];

        // const data = function () {
        //     return Handsontable.helper.createSpreadsheetData(200, 200);
        // };

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
            console.log(data);
            const names = data.columns;
            const dataRows = data.rows;
            const columnDef = data.columns.map((c) => {
                return {
                    data: c,
                    type: "text",
                };
            });

            this.gridSettings = {
                data: dataRows,
                minSpareCols: 0,
                minSpareRows: 1,
                rowHeaders: true,
                contextMenu: true,
                manualColumnResize: true,
                colHeaders: names,
                columns: columnDef,
                allowRemoveColumn: false,
                allowRemoveRow: false,
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
}
