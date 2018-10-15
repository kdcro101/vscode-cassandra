import { CassandraType } from "../../types/index";
export const typeCreate = (keyspace: string): Promise<string> => {
    return new Promise((resolve, reject) => {

        const name = `type_name`;

        const out: string[] = [
            `CREATE TYPE ${keyspace}.${name}(`,
            `   member1 text,`,
            `   member2 text,`,
            `   member3 text,`,
            `   member4 text`,
            `);`,
        ];

        resolve(out.join("\n"));
    });
};
export const typeDrop = (keyspace: string, data: CassandraType): Promise<string> => {
    return new Promise((resolve, reject) => {

        const td = data.all;
        const name = `${td.type_name}`;

        const out: string[] = [
            `DROP TYPE ${keyspace}.${name};`,
        ];

        resolve(out.join("\n"));
    });
};
export const typeAlter = (keyspace: string, data: CassandraType): Promise<string> => {
    return new Promise((resolve, reject) => {
        const td = data.all;
        const name = `${td.type_name}`;
        const commentList = td.field_names.map((n, i) => {
            const t = td.field_types[i];
            return `--        ${n} ${t}`;
        }).join(",\n");
        const renameList = td.field_names.map((n, i) => {
            const t = td.field_types[i];
            return `\t${n} TO ${n}`;
        }).join(" AND \n");

        const out: string[] = [
            `ALTER TYPE ${keyspace}.${name}`,
            `ADD`,
            `\tnew_member text`,
            `RENAME`,
            `${renameList}`,
            `;`,
        ];

        resolve(out.join("\n"));
    });
};
export const typeClone = (keyspace: string, data: CassandraType, cloneName?: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = !cloneName ? `${data.name}` : cloneName;
        const td = data.all;

        const list = td.field_names.map((n, i) => {
            const t = td.field_types[i];
            return `\t${n} ${t}`;
        }).join(",\n");

        const out: string[] = [
            `CREATE TYPE ${keyspace}.${name}(`,
            `${list}`,
            `);`,
        ];

        resolve(out.join("\n"));
    });
};
