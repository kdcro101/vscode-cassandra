import { CassandraFunction } from "../../types";

export const functionClone = (keyspace: string, data: CassandraFunction, replace: boolean = false): Promise<string> => {
    return new Promise((resolve, reject) => {

        const fd = data.all;
        const params = fd.argument_names.map((n, i) => `${n} ${fd.argument_types[i]}`).join(", ");

        const out: string[] = [
            !replace ?
                `CREATE FUNCTION ${keyspace}.${data.name}_clone(${params})`
                :
                `CREATE OR REPLACE FUNCTION ${keyspace}.${data.name}(${params})`,
            fd.called_on_null_input ? `CALLED ON NULL INPUT` : `RETURNS NULL ON NULL INPUT`,
            `RETURNS ${fd.return_type} LANGUAGE ${fd.language} AS`,
            `$$`,
            `${fd.body}`,
            `$$`,

        ];

        resolve(out.join("\n"));
    });
};
