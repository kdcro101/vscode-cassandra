import { typeParser, typeRender } from "../../data-type/type-parser/index";
import { quouteCaseSensitive } from "../../helpers/quoting";
import { CassandraFunction } from "../../types";

export const functionClone = (
    keyspace: string, data: CassandraFunction, replace: boolean = false, cloneName?: string ): Promise<string> => {
    return new Promise((resolve, reject) => {

        keyspace = quouteCaseSensitive(keyspace);
        const name = quouteCaseSensitive(!cloneName ? `${data.name}` : cloneName);

        const params = data.argument_names.map((n, i) => {
            const pt = typeParser(data.argument_types[i]);
            const rt = pt.isFrozen ? typeRender(pt.contains[0]) : typeRender(pt);

            return `${n} ${rt}`;

        }).join(", ");

        const retType = typeParser(data.return_type);
        const retTypeFixed = retType.isFrozen ? typeRender(retType.contains[0]) : typeRender(retType);

        const out: string[] = [
            !replace ?
                `CREATE FUNCTION ${keyspace}.${name}(${params})`
                :
                `CREATE OR REPLACE FUNCTION ${keyspace}.${name}(${params})`,
            data.called_on_null_input ? `CALLED ON NULL INPUT` : `RETURNS NULL ON NULL INPUT`,
            `RETURNS ${retTypeFixed} LANGUAGE ${data.language} AS`,
            `$$`,
            `${data.body}`,
            `$$;`,

        ];

        resolve(out.join("\n"));
    });
};
