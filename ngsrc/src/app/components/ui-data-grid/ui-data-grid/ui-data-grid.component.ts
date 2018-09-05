import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ViewDestroyable } from "../../../base/view-destroyable";

@Component({
    selector: "ui-data-grid",
    templateUrl: "./ui-data-grid.component.html",
    styleUrls: ["./ui-data-grid.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDataGridComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @ViewChild("root") public root: ElementRef<HTMLDivElement>;

    constructor(public host: ElementRef<HTMLDivElement>, public change: ChangeDetectorRef) {
        super(change);
    }

    ngOnInit() {

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
        const options: Handsontable.GridSettings = {
            data: data,
            minSpareCols: 0,
            minSpareRows: 1,
            rowHeaders: true,
            contextMenu: true,
            manualColumnResize: true,
            columns: [
                {
                    data: "name",
                    type: "text",
                },
                {
                    data: "value",
                    type: "text",
                },

            ],
            colHeaders: [
                "NAme",
                "VAlue",
            ],
        };
        const hot = new Handsontable(this.root.nativeElement, options);
        console.log("Starting grid");
        console.log(hot);
        console.log(Handsontable);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
