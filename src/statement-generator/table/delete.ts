import { DataTypeManager } from "../../data-type";
import { rootColumnType, typeParser, typeValueExampleRender } from "../../data-type/type-parser";
import { CassandraTable } from "../../types";
import { isCaseSensitive } from "../base/helpers";

export const tableDelete = (keyspace: string, data: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {

        const dtm = new DataTypeManager();
        const name = `${data.name}`;
        const pks = data.primaryKeys;
        const updatables = data.columns.filter((c) => c.kind === "regular");

        const pkConditions = pks.map((c) => {
            const ctype = rootColumnType(c.type);
            const dt = dtm.get(ctype, null);
            const cs = isCaseSensitive(c.name);

            if (cs) {
                return `"${c.name}"=${dt.stringPlaceholder}`;
            } else {
                return `${c.name}=${dt.stringPlaceholder}`;

            }
        });

        const tcs = isCaseSensitive(name);
        const tableName = tcs ? `"${name}"` : name;
        const lines: string[] = [
            `DELETE FROM ${keyspace}.${tableName}`,
            `WHERE ${pkConditions.join(" AND ")};`,
        ];

        resolve(lines.join("\n"));

    });
};
