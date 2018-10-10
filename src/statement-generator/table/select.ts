import wrap = require("word-wrap");
import { DataTypeManager } from "../../data-type";
import { rootColumnType } from "../../data-type/type-parser";
import { CassandraTable } from "../../types/index";
import { Workspace } from "../../workspace/index";
export const tableSelect = (keyspace: string, data: CassandraTable): Promise<string> => {
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
            return `${c.name}=${dt.stringPlaceholder}`;
        });

        const elements = names.join(", ");
        const q = `SELECT ${elements}\nFROM ${keyspace}.${data.name}\nWHERE ${pkConditions.join(" AND ")}\nLIMIT ${limit};\n`;
        const wrapped = wrap(q, {
            width: 80,
            trim: true,
        });
        resolve(wrapped);

    });
};
export const tableSelectAll = (keyspace: string, data: CassandraTable): Promise<string> => {
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

        const elements = names.join(", ");
        const q = `SELECT ${elements}\nFROM ${keyspace}.${data.name}\nLIMIT ${limit};\n`;
        const wrapped = wrap(q, {
            width: 80,
            trim: true,
        });
        resolve(wrapped);

    });
};
