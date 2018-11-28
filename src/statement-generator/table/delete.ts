import { DataTypeManager } from "../../data-type";
import { rootColumnType, typeParser, typeValueExampleRender } from "../../data-type/type-parser";
import { quouteCaseSensitive } from "../../helpers/quoting";
import { CassandraTable } from "../../types";

export const tableDelete = (keyspace: string, data: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {

        const dtm = new DataTypeManager();
        const name = `${data.name}`;
        const pks = data.primaryKeys;
        const updatables = data.columns.filter((c) => c.kind === "regular");

        const pkConditions = pks.map((c) => {
            const ctype = rootColumnType(c.type);
            const dt = dtm.get(ctype, null);

            return `${quouteCaseSensitive(c.name)}=${dt.stringPlaceholder}`;

        });

        const lines: string[] = [
            `DELETE FROM ${keyspace}.${quouteCaseSensitive(name)}`,
            `WHERE ${pkConditions.join(" AND ")};`,
        ];

        resolve(lines.join("\n"));

    });
};
