import { CassandraTable } from "../../types/index";
export const tableDrop = (keyspace: string, data: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `${data.name}`;

        resolve(`DROP TABLE ${keyspace}.${name};`);

    });
};
