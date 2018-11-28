import { quouteCaseSensitive } from "../../helpers/quoting";

export const functionDrop = (keyspace: string, functionName: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const out: string[] = [
            `DROP FUNCTION ${quouteCaseSensitive(keyspace)}.${quouteCaseSensitive(functionName)};`,
        ];

        resolve(out.join("\n"));
    });
};
