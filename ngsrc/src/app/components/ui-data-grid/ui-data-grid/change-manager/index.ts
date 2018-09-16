import { Subject } from "rxjs";
import { CassandraColumn } from "../../../../../../../src/types/index";
import { DataChangeItem, DataChangeItemPrimaryKey } from "../../../../../../../src/types/messages";
import { UiDataGridComponent } from "../ui-data-grid.component";

export class ChangeManager {

    public static eventChange = new Subject<DataChangeItem[]>();
    public que: DataChangeItem[];
    public keys: CassandraColumn[];
    public rowData: any[];

    constructor(private dataGrid: UiDataGridComponent) {
        this.que = dataGrid.currentEditor.changes;
        this.keys = dataGrid.currentTableStruct.primaryKeys;
        this.rowData = dataGrid.currentDataRows;
    }
    public add(clusterName: string, keyspace: string, row: number, column: string, valueOld: any, valueNew: any) {

        const index = this.getItemIndex(clusterName, keyspace, row, column);
        if (index === -1) {
            this.createItem(clusterName, keyspace, row, column, valueOld, valueNew);
        } else {
            this.updateItem(index, valueNew);
        }
    }
    public clear() {
        this.que = [];
        ChangeManager.eventChange.next();
    }
    private getItemIndex(clusterName: string, keyspace: string, row: number, column: string): number {
        const index = this.que.findIndex((i) => {
            return (
                i.clusterName === clusterName &&
                i.keyspace === keyspace &&
                i.row === row &&
                i.column === column
            );
        });
        return index;
    }

    private createItem(clusterName: string, keyspace: string, row: number, column: string, valueOld: any, valueNew: any) {
        const rowData = this.dataGrid.currentDataRows[row];
        const pks = this.collectPrimaryKey(rowData);
        const item: DataChangeItem = {
            clusterName,
            keyspace,
            row,
            column,
            primaryKeyValues: pks,
            valueOld,
            valueNew,
        };
        this.que.push(item);

        ChangeManager.eventChange.next(this.que);
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
        this.que[index].valueNew = value;
        ChangeManager.eventChange.next(this.que);
    }
}
