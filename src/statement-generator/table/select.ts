import wrap = require("word-wrap");
import { DataTypeManager } from "../../data-type";
import { rootColumnType } from "../../data-type/type-parser";
import { quouteCaseSensitive } from "../../helpers/quoting";
import { CassandraMaterializedView, CassandraTable } from "../../types/index";
import { Workspace } from "../../workspace/index";

export const tableSelect = (keyspace: string, data: CassandraTable | CassandraMaterializedView): Promise<string> => {
    return new Promise((resolve, reject) => {

        const workspace = new Workspace();
        const limit = workspace.read("defaultSelectLimit");
        const dtm = new DataTypeManager();
        const cols = data.columns;
        const pks = data.primaryKeys;

        const names = pks.map((i) => i.name);

        cols.forEach((c) => {
            const f = names.find((i) => i === c.name);
            if (f) {
                return;
            }
            names.push(c.name);
        });

        const pkConditions = pks.map((c) => {
            const ctype = rootColumnType(c.type);
            const dt = dtm.get(ctype, null);

            return `${quouteCaseSensitive(c.name)}=${dt.stringPlaceholder}`;

        });

        // double qoute if case sensitive
        const elements = names.map((n) => {
            return quouteCaseSensitive(n);
        }).join(", ");

        const q = `SELECT ${elements}\n` +
            `FROM ${quouteCaseSensitive(keyspace)}.${quouteCaseSensitive(data.name)}\n` +
            `WHERE ${pkConditions.join(" AND ")}\n` +
            `LIMIT ${limit};\n`;

        const wrapped = wrap(q, {
            width: 80,
            trim: true,
        });
        resolve(wrapped);

    });
};
export const tableSelectAll = (keyspace: string, data: CassandraTable | CassandraMaterializedView): Promise<string> => {
    return new Promise((resolve, reject) => {

        const workspace = new Workspace();
        const limit = workspace.read("defaultSelectLimit");
        const cols = data.columns;
        const pks = data.primaryKeys;

        const names = pks.map((i) => i.name);

        cols.forEach((c) => {
            const f = names.find((i) => i === c.name);
            if (f) {
                return;
            }
            names.push(c.name);
        });

        // double qoute if case sensitive
        const elements = names.map((n) => {
            return quouteCaseSensitive(n);

        }).join(", ");

        const q = `SELECT ${elements}\n` +
            `FROM ${quouteCaseSensitive(keyspace)}.${quouteCaseSensitive(data.name)}\n` +
            `LIMIT ${limit};\n`;

        const wrapped = wrap(q, {
            width: 80,
            trim: true,
        });
        resolve(wrapped);

    });
};
