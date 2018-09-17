import { UiDataGridComponent } from "../ui-data-grid.component";
export class CellClassManager {
    constructor(public dataGrid: UiDataGridComponent) {

    }
    add(row: number, col: number, name: string) {
        const has = this.has(row, col, name);
        if (has) {
            return;
        }
        const items = this.getClassName(row, col);
        items.push(name);
        this.dataGrid.gridInstance.setCellMeta(row, col, "className", items.join(" "));
    }
    remove(row: number, col: number, name: string) {
        const has = this.has(row, col, name);
        if (!has) {
            return;
        }
        const items = this.getClassName(row, col);
        const f = items.filter((i) => i !== name);
        this.dataGrid.gridInstance.setCellMeta(row, col, "className", f.join(" "));
    }
    has(row: number, col: number, name: string) {

        const items = this.getClassName(row, col);

        if (items.length === 0) {
            return false;
        }

        const f = items.find((m) => m === name);
        if (f) {
            return true;
        }
        return false;
    }
    public getClassName(row: number, col: number): string[] {
        const meta = this.dataGrid.gridInstance.getCellMeta(row, col);
        if (!meta || !meta.className) {
            return [];
        }
        const items = (meta.className as string).split(" ");
        return items;
    }
}
