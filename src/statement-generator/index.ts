export class StatementGenerator {

    constructor(private limit: number = 1000) {

    }

    public generateSelectBasic(keyspace: string, table: string) {
        const q = `SELECT * FROM ${keyspace}.${table} LIMIT ${this.limit};\n`;
        return q;
    }

}
