export const functionDrop = (keyspace: string, functionName: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const out: string[] = [
            `DROP FUNCTION ${keyspace}.${functionName};`,
        ];

        resolve(out.join("\n"));
    });
};
