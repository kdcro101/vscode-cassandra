
import { range } from "lodash";
import { UiDataGridComponent } from "../ui-data-grid.component";

export class RowSelection {
    public rowIndices = [];
    public rowLast: number;
    constructor(private dataGrid: UiDataGridComponent) {

    }
    public start(row: number) {
        console.log(`RowSelection.start()`);
        if (this.contains(row)) {
            return;
        }
        this.clear();
        this.rowIndices.push(row);
        this.rowLast = row;
        this.setRowSelectState(row, "on");
    }
    public extendTo(row: number) {
        console.log(`RowSelection.extendTo()`);
    }
    public add(row: number) {
        console.log(`RowSelection.add()`);
    }
    public clear() {

        this.rowIndices.forEach((r) => {
            this.setRowSelectState(r, "off");
        });

        this.rowIndices = [];
        this.rowLast = null;

        console.log(`RowSelection.clear()`);
    }
    private contains(row: number) {
        if (this.rowIndices.findIndex((i) => i === row) === -1) {
            return false;
        }
        return true;
    }
    private setRowSelectState(row: number, state: "on" | "off") {

        const cols = this.dataGrid.currentColumns;

        cols.forEach((c, i) => {
            const colName = cols[i].name;
            if (this.dataGrid.changeManager.isCellChanged(row, colName)) {
                return;
            }
            switch (state) {
                case "on":
                    this.dataGrid.gridInstance.setCellMeta(row, i, "className", "highlighted");
                    break;
                case "off":
                    this.dataGrid.gridInstance.setCellMeta(row, i, "className", "");
                    break;

            }

        });
        this.dataGrid.gridInstance.render();
    }
}
