import { Subject } from "rxjs";
import { merge } from "rxjs";
import { CassandraColumn } from "../../../../../../../src/types/index";
import { DataChangeItem, DataChangeItemPrimaryKey, DataChangeType } from "../../../../../../../src/types/messages";
import { UiDataGridComponent } from "../ui-data-grid.component";

export class ChangeManager {

    public static eventAdd = new Subject<DataChangeItem>();
    public static eventRemove = new Subject<DataChangeItem>();
    public static eventUpdate = new Subject<DataChangeItem>();
    public static eventChange = merge(ChangeManager.eventAdd, ChangeManager.eventRemove, ChangeManager.eventUpdate);

    public list: DataChangeItem[];
    public keys: CassandraColumn[];
    public rowData: any[];

    constructor(private dataGrid: UiDataGridComponent) {
        this.list = dataGrid.currentEditor.changes;
        this.keys = dataGrid.currentTableStruct.primaryKeys;
        this.rowData = dataGrid.currentDataRows;
    }
    public removeCellUpdate(row: number, column: string): DataChangeItem {
        const index = this.getCellUpdateItemIndex(row, column);

        if (index < 0) {
            return;
        }
        return this.removeCellUpdateItem(index);
    }
    public removeRowDelete(row: number): DataChangeItem {
        const index = this.getRowDeletedItemIndex(row);

        if (index < 0) {
            return;
        }
        return this.removeRowDeleteItem(index);
    }
    public addCellUpdate(row: number, column: string, valueOld: any, valueNew: any) {

        const index = this.getCellUpdateItemIndex(row, column);
        if (index === -1) {
            this.createCellUpdateItem(row, column, valueOld, valueNew);
        } else {
            this.updateCellUpdateItem(index, valueNew);
        }
    }
    public addRowDelete(row: number) {

        const index = this.getRowDeletedItemIndex(row);
        if (index > -1) {
            return;
        }
        const cellUpdates = this.list.filter((u) => u.type === "cellUpdate" && u.row === row);

        cellUpdates.forEach((u) => {
            this.removeCellUpdate(u.row, u.column);
        });

        this.createRowDeleteItem(row);
    }
    public clear() {
        this.list.forEach((c, i) => {
            switch (c.type) {
                case "cellUpdate":
                    this.removeCellUpdateItem(i);
                    break;
                case "rowDelete":
                    this.removeRowDeleteItem(i);
                    break;
            }

        });
    }
    private getCellUpdateItemIndex(row: number, column: string): number {
        const index = this.list.findIndex((i) => {
            return (
                i.clusterName === this.dataGrid.currentClusterName &&
                i.keyspace === this.dataGrid.currentKeyspace &&
                i.row === row &&
                i.column === column &&
                i.type === "cellUpdate"
            );
        });
        return index;
    }
    private getRowDeletedItemIndex(row: number): number {
        const index = this.list.findIndex((i) => {
            return (
                i.clusterName === this.dataGrid.currentClusterName &&
                i.keyspace === this.dataGrid.currentKeyspace &&
                i.row === row &&
                i.type === "rowDelete"

            );
        });
        return index;
    }

    private createRowDeleteItem(row: number) {
        const rowData = this.dataGrid.currentDataRows[row];
        const pks = this.collectPrimaryKey(rowData);
        const item: DataChangeItem = {
            clusterName: this.dataGrid.currentClusterName,
            keyspace: this.dataGrid.currentKeyspace,
            primaryKeyValues: pks,
            type: "rowDelete",
            row,
        };
        this.list.push(item);

        ChangeManager.eventAdd.next(item);
    }
    private createCellUpdateItem(row: number, column: string, valueOld: any, valueNew: any) {
        const rowData = this.dataGrid.currentDataRows[row];
        const pks = this.collectPrimaryKey(rowData);
        const item: DataChangeItem = {
            clusterName: this.dataGrid.currentClusterName,
            keyspace: this.dataGrid.currentKeyspace,
            primaryKeyValues: pks,
            type: "cellUpdate",
            row,
            column,
            valueOld,
            valueNew,
        };
        this.list.push(item);

        ChangeManager.eventAdd.next(item);
    }
    private collectPrimaryKey(rowData: any): DataChangeItemPrimaryKey {
        const out: DataChangeItemPrimaryKey = {};
        const keyNames = this.keys.map((i) => i.name);

        keyNames.forEach((k, i) => {
            out[k] = rowData[k];
        });

        return out;
    }
    private updateCellUpdateItem(index: number, value: any) {
        const item = this.list[index];
        item.valueNew = value;
        ChangeManager.eventUpdate.next(item);
    }
    private removeCellUpdateItem(index: number): DataChangeItem {
        if (index < 0 || index >= this.list.length) {
            return;
        }
        const item = this.list.splice(index, 1)[0];
        ChangeManager.eventRemove.next(item);

        return item;
    }
    private removeRowDeleteItem(index: number): DataChangeItem {
        if (index < 0 || index >= this.list.length) {
            return;
        }
        const item = this.list.splice(index, 1)[0];
        ChangeManager.eventRemove.next(item);

        return item;
    }
    public isCellChanged(row: number, column: string): boolean {
        const index = this.getCellUpdateItemIndex(row, column);

        if (index < 0) {
            return false;
        }
        return true;
    }
    public isRowDeleted(row: number): boolean {
        const index = this.getRowDeletedItemIndex(row);

        if (index < 0) {
            return false;
        }
        return true;
    }

}
