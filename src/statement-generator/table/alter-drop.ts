import { CassandraTable } from "../../types/index";
export const tableAlterDrop = (keyspace: string, data: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `${data.name}`;

        const out: string[] = [
            `-- change column name`,
            `ALTER TABLE ${keyspace}.${name} DROP column_to_drop;`,
        ];

        resolve(out.join("\n"));

    });
};
