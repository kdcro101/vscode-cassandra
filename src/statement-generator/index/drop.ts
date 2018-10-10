import { CassandraTable } from "../../types/index";
export const indexDrop = (keyspace: string, data: CassandraTable, indexName: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const table = `${data.name}`;

        const out: string[] = [
            `DROP INDEX ${keyspace}.${indexName}`,
        ];

        resolve(out.join("\n"));

    });
};
