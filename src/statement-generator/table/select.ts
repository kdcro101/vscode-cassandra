import wrap = require("word-wrap");
import { DataTypeManager } from "../../data-type";
import { rootColumnType } from "../../data-type/type-parser";
import { CassandraMaterializedView, CassandraTable } from "../../types/index";
import { Workspace } from "../../workspace/index";
import { isCaseSensitive } from "../base/helpers";

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
            const cs = isCaseSensitive(c.name);
            if (cs) {
                return `"${c.name}"=${dt.stringPlaceholder}`;
            } else {
                return `${c.name}=${dt.stringPlaceholder}`;
            }
        });

        // double qoute if case sensitive
        const elements = names.map((n) => {
            const cs = isCaseSensitive(n);
            if (cs) {
                return `"${n}"`;
            } else {
                return n;
            }
        }).join(", ");
        const q = `SELECT ${elements}\nFROM ${keyspace}.${data.name}\nWHERE ${pkConditions.join(" AND ")}\nLIMIT ${limit};\n`;
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
            const cs = isCaseSensitive(n);
            if (cs) {
                return `"${n}"`;
            } else {
                return n;
            }
        }).join(", ");

        const q = `SELECT ${elements}\nFROM ${keyspace}.${data.name}\nLIMIT ${limit};\n`;
        const wrapped = wrap(q, {
            width: 80,
            trim: true,
        });
        resolve(wrapped);

    });
};
