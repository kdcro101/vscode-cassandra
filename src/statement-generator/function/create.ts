import { quouteCaseSensitive } from "../../helpers/quoting";

export const functionCreate = (keyspace: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const out: string[] = [
            `CREATE FUNCTION IF NOT EXISTS ${quouteCaseSensitive(keyspace)}.function_name (param1 double)`,
            `CALLED ON NULL INPUT`,
            `RETURNS double LANGUAGE java AS`,
            `$$`,
            `\treturn Double.valueOf(Math.log(param1.doubleValue()));`,
            `$$;`,

        ];

        resolve(out.join("\n"));
    });
};
