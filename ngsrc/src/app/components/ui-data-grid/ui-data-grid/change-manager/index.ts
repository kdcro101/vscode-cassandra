import { Subject } from "rxjs";
import { CassandraColumn } from "../../../../../../../src/types/index";
import { DataChangeItem } from "../../../../../../../src/types/messages";
import { WorkbenchEditor } from "../../../../types/index";

export class ChangeManager {

    private sources: { [key: string]: any } = {};

    public que: DataChangeItem[] = [];
    public eventChange = new Subject<DataChangeItem[]>();

    private clusterName: string;
    private keyspace: string;

    constructor(private editor: WorkbenchEditor) {
        this.clusterName = editor.statement.clusterName;
        // this.keyspace = editor.statement.keyspace || editor.result.analysis
    }
    public add(row: number, prop: string, valueOld: any, valueNew: any) {
        // const clusterName = dataf
        const key = this.genKey(row, prop);
        this.sourceAdd(key, valueOld);
    }
    public clear() {
        this.que = [];
        this.eventChange.next();
    }
    private genKey(row: number, prop: string): string {
        return `${prop}/${row}`;
    }
    private sourceAdd(key: string, value: any) {
        if (this.sources[key]) {
            return;
        }

        this.sources[key] = value;
    }
    private sourceRemove(key: string) {
        delete this.sources[key];
    }
}
