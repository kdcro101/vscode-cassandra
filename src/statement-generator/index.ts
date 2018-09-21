import { CassandraTable } from "../types/index";
export class StatementGenerator {

    constructor(private limit: number = 1000) {

    }

    public generateSelectBasic(keyspace: string, table: CassandraTable) {

        const cols = table.columns.map((c) => c.name).join(",");

        const q = `SELECT ${cols} FROM ${keyspace}.${table.name} LIMIT ${this.limit};\n`;
        return q;
    }

}
