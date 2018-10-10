import { CassandraTable } from "../../types/index";
export const tableAlterDrop = (keyspace: string, data: CassandraTable, columnToDrop?: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `${data.name}`;
        const columnName  = columnToDrop || "column_to_drop";

        const out: string[] = [
            `-- change column name`,
            `ALTER TABLE ${keyspace}.${name} DROP ${columnName};`,
        ];

        resolve(out.join("\n"));

    });
};
