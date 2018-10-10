import { CassandraTable } from "../../types/index";
export const indexCreate = (keyspace: string, data: CassandraTable, column: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const table = `${data.name}`;
        const name = `${data.name}_${column}_idx`;

        const out: string[] = [
            `CREATE INDEX ${name} ON  ${keyspace}.${table}(${column});`,
        ];

        resolve(out.join("\n"));

    });
};
