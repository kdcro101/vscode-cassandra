import { typeParser, typeRender } from "../../data-type/type-parser/index";
import { CassandraFunction } from "../../types";

export const functionClone = (
    keyspace: string, data: CassandraFunction, replace: boolean = false, cloneName?: string ): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = !cloneName ? `${data.name}` : cloneName;
        const fd = data.all;
        const params = fd.argument_names.map((n, i) => {
            const pt = typeParser(fd.argument_types[i]);
            const rt = pt.isFrozen ? typeRender(pt.contains[0]) : typeRender(pt);
            return `${n} ${rt}`;

        }).join(", ");

        const retType = typeParser(fd.return_type);
        const retTypeFixed = retType.isFrozen ? typeRender(retType.contains[0]) : typeRender(retType);

        const out: string[] = [
            !replace ?
                `CREATE FUNCTION ${keyspace}.${name}_clone(${params})`
                :
                `CREATE OR REPLACE FUNCTION ${keyspace}.${name}(${params})`,
            fd.called_on_null_input ? `CALLED ON NULL INPUT` : `RETURNS NULL ON NULL INPUT`,
            `RETURNS ${retTypeFixed} LANGUAGE ${fd.language} AS`,
            `$$`,
            `${fd.body}`,
            `$$;`,

        ];

        resolve(out.join("\n"));
    });
};
