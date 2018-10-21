import { ColumnInfo } from "../../../../../../../src/cassandra-client/index";
import { CassandraMaterializedView, CassandraTable } from "../../../../../../../src/types/index";

export const headerRenderer = (columns: ColumnInfo[],
    tableStruct: CassandraTable | CassandraMaterializedView): boolean | string[] | ((index?: number) => string) => {
    if (!tableStruct) {
        return columns.map((c) => c.name);
    }
    return (index: number): string => {

        const name = columns[index].name;
        const pkc = tableStruct.primaryKeys;
        const k = pkc.find((c) => c.name === name);

        const t = k != null ? k.kind : null;

        let out = "";
        switch (t) {
            case "partition_key":
                out = `<div class="key-indicator key-partition"></div>
                <span class="columnSorting title">${name}</span>`;
                break;
            case "clustering":
                out = `<div class="key-indicator key-clustering"></div>
                <span class="columnSorting title">${name}</span>`;
                break;
            default:
                out = `<span class="columnSorting title">${name}</span>`;
                break;
        }

        return out;
    };
};
