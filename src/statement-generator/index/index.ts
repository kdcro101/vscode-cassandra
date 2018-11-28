import { quouteCaseSensitive } from "../../helpers/quoting";
import { CassandraTable } from "../../types/index";

export const indexCreate = (keyspace: string, data: CassandraTable, column: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const table = `${data.name}`;
        const name = `${data.name}_${column}_idx`;

        const out: string[] = [
            `CREATE INDEX ${quouteCaseSensitive(name)} ON
             ${quouteCaseSensitive(keyspace)}.${quouteCaseSensitive(table)}(${quouteCaseSensitive(column)});`,
        ];

        resolve(out.join("\n"));

    });
};
export const indexDrop = (keyspace: string, data: CassandraTable, indexName: string): Promise<string> => {
    return new Promise((resolve, reject) => {

        const out: string[] = [
            `DROP INDEX ${quouteCaseSensitive(keyspace)}.${quouteCaseSensitive(indexName)};`,
        ];

        resolve(out.join("\n"));

    });
};
export const indexClone = (
    keyspace: string, data: CassandraTable,
    indexName: string, cloneName?: string, cloneTableName?: string): Promise<string> => {
    return new Promise((resolve, reject) => {

        const indexData = data.indexes.find((i) => i.name === indexName);

        if (!indexData) {
            resolve("");
        }
        const vRx = new RegExp(/values\([\"]?([a-z][_\w]*)[\"]?\)/i);
        const qRx = new RegExp(/[\"]?([a-z][_\w]*)[\"]?/i);

        const target = indexData.options.target;
        const table = !cloneTableName ? indexData.table_name : cloneTableName;

        const def = vRx.test(target) ? vRx.exec(target)[1] : qRx.exec(target)[1];

        const name = !cloneName ? `${indexData.name}` : cloneName;

        const out: string[] = [
            `CREATE INDEX ${quouteCaseSensitive(name)} ON
            ${quouteCaseSensitive(keyspace)}.${quouteCaseSensitive(table)}(${quouteCaseSensitive(def)});`,
        ];

        resolve(out.join("\n"));

    });
};
