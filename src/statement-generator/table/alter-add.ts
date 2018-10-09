import { CassandraTable } from "../../types/index";
export const tableAlterAdd = (keyspace: string, data: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `${data.name}`;

        const out: string[] = [
            `-- change column name and type`,
            `ALTER TABLE ${keyspace}.${name} ADD new_column_name TEXT;`,
        ];

        resolve(out.join("\n"));

    });
};
