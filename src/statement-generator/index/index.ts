import { CassandraTable } from "../../types/index";
import { isCaseSensitive } from "../base/helpers";
export const indexCreate = (keyspace: string, data: CassandraTable, column: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const table = `${data.name}`;
        const name = `${data.name}_${column}_idx`;
        const cs = isCaseSensitive(column);

        const out: string[] = [
            cs ?
                `CREATE INDEX ${name} ON  ${keyspace}.${table}("${column}");`
                :
                `CREATE INDEX ${name} ON  ${keyspace}.${table}(${column});`,
        ];

        resolve(out.join("\n"));

    });
};
export const indexDrop = (keyspace: string, data: CassandraTable, indexName: string): Promise<string> => {
    return new Promise((resolve, reject) => {

        const out: string[] = [
            `DROP INDEX ${keyspace}.${indexName};`,
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
        const tableName = !cloneTableName ? indexData.table_name : cloneTableName;

        const def = vRx.test(target) ? vRx.exec(target)[1] : qRx.exec(target)[1];
        const cs = isCaseSensitive(def);

        const name = !cloneName ? `${indexData.name}` : cloneName;

        const out: string[] = [
            cs ?
                `CREATE INDEX ${name} ON ${keyspace}.${tableName}("${def}");`
                :
                `CREATE INDEX ${name} ON ${keyspace}.${tableName}(${def});`,
        ];

        resolve(out.join("\n"));

    });
};
