import wrap = require("word-wrap");
import { CassandraTable } from "../types/index";
export class StatementGenerator {

    constructor(private limit: number = 1000) {

    }

    public generateSelectBasic(keyspace: string, table: CassandraTable) {

        const cols = table.columns.map((c) => c.name).join(", ");

        const q = `SELECT ${cols}\nFROM ${keyspace}.${table.name}\nLIMIT ${this.limit};\n`;
        const wrapped = wrap(q, {
            width: 80,
            trim: true,
        });
        return wrapped;
    }

}
