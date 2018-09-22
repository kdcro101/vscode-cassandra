import { wordWrap } from "../const/string-wrap";
import { CassandraTable } from "../types/index";
export class StatementGenerator {

    constructor(private limit: number = 1000) {

    }

    public generateSelectBasic(keyspace: string, table: CassandraTable) {

        const cols = table.columns.map((c) => c.name).join(", ");

        const q = `SELECT ${cols}\nFROM ${keyspace}.${table.name}\nLIMIT ${this.limit};\n`;
        const wrapped = wordWrap(q, 80);
        return wrapped;
    }

}
