import wrap = require("word-wrap");
import { CassandraTable } from "../types/index";
import { keyspaceAlter } from "./keyspace/alter";
import { keyspaceClone } from "./keyspace/clone";
import { keyspaceDrop } from "./keyspace/drop";
import { tableAlterAdd } from "./table/alter-add";
import { tableAlterDrop } from "./table/alter-drop";
import { tableClone } from "./table/clone";
import { tableDrop } from "./table/drop";
import { tableTruncate } from "./table/truncate";

export class StatementGenerator {

    public tableClone = tableClone;
    public tableDrop = tableDrop;
    public tableTruncate = tableTruncate;
    public tableAlterAdd = tableAlterAdd;
    public tableAlterDrop = tableAlterDrop;
    public keyspaceDrop = keyspaceDrop;
    public keyspaceAlter = keyspaceAlter;
    public keyspaceClone = keyspaceClone;

    constructor(private limit: number = 1000) {

    }

    public generateSelectBasic(keyspace: string, table: CassandraTable) {

        const cols = table.columns;
        const pks = table.primaryKeys;

        const names = pks.map((i) => i.name);

        cols.forEach((c) => {
            const f = names.find((i) => i === c.name);
            if (f) {
                return;
            }
            names.push(c.name);
        });
        const elements = names.join(", ");
        const q = `SELECT ${elements}\nFROM ${keyspace}.${table.name}\nLIMIT ${this.limit};\n`;
        const wrapped = wrap(q, {
            width: 80,
            trim: true,
        });
        return wrapped;
    }

}
