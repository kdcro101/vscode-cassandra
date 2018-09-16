import { Subject } from "rxjs";
import { merge } from "rxjs";
import { CassandraColumn } from "../../../../../../../src/types/index";
import { DataChangeItem, DataChangeItemPrimaryKey } from "../../../../../../../src/types/messages";
import { UiDataGridComponent } from "../ui-data-grid.component";

export class ChangeManager {

    public static eventAdd = new Subject<DataChangeItem>();
    public static eventRemove = new Subject<DataChangeItem>();
    public static eventUpdate = new Subject<DataChangeItem>();
    public static eventChange = merge(ChangeManager.eventAdd, ChangeManager.eventRemove, ChangeManager.eventUpdate);

    public que: DataChangeItem[];
    public keys: CassandraColumn[];
    public rowData: any[];

    constructor(private dataGrid: UiDataGridComponent) {
        this.que = dataGrid.currentEditor.changes;
        this.keys = dataGrid.currentTableStruct.primaryKeys;
        this.rowData = dataGrid.currentDataRows;
    }
    public remove(row: number, column: string): DataChangeItem {
        const index = this.getItemIndex(row, column);

        if (index < 0) {
            return;
        }
        return this.removeItem(index);
    }
    public add(row: number, column: string, valueOld: any, valueNew: any) {

        const index = this.getItemIndex(row, column);
        if (index === -1) {
            this.createItem(row, column, valueOld, valueNew);
        } else {
            this.updateItem(index, valueNew);
        }
    }
    public clear() {
        this.que.forEach((c, i) => {
            this.removeItem(i);
        });
    }
    private getItemIndex(row: number, column: string): number {
        const index = this.que.findIndex((i) => {
            return (
                i.clusterName === this.dataGrid.currentClusterName &&
                i.keyspace === this.dataGrid.currentKeyspace &&
                i.row === row &&
                i.column === column
            );
        });
        return index;
    }

    private createItem(row: number, column: string, valueOld: any, valueNew: any) {
        const rowData = this.dataGrid.currentDataRows[row];
        const pks = this.collectPrimaryKey(rowData);
        const item: DataChangeItem = {
            clusterName: this.dataGrid.currentClusterName,
            keyspace: this.dataGrid.currentKeyspace,
            row,
            column,
            primaryKeyValues: pks,
            valueOld,
            valueNew,
        };
        this.que.push(item);

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
    private updateItem(index: number, value: any) {
        const item = this.que[index];
        item.valueNew = value;
        ChangeManager.eventUpdate.next(item);
    }
    private removeItem(index: number): DataChangeItem {
        if (index < 0 || index >= this.que.length) {
            return;
        }
        const item = this.que.splice(index, 1)[0];
        ChangeManager.eventRemove.next(item);

        return item;
    }
    public isChanged(row: number, column: string): boolean {
        const index = this.getItemIndex(row, column);

        if (index < 0) {
            return false;
        }
        return true;
    }

}
