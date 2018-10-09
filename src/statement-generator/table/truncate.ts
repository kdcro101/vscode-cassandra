import { CassandraTable } from "../../types/index";
export const tableTruncate = (keyspace: string, data: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `${data.name}`;

        resolve(`TRUNCATE TABLE ${keyspace}.${name};`);

    });
};
