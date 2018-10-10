export const keyspaceCreate = (): Promise<string> => {
    return new Promise((resolve, reject) => {

        const out: string[] = [
            `-- modify keyspace name`,
            `CREATE KEYSPACE keyspace_name`,
            `\tWITH REPLICATION = {`,
            `\t\t'class': 'SimpleStrategy',`,
            `\t\t'replication_factor': 1`,
            `\t}`,
            `\tAND DURABLE_WRITES = true;\n`,
        ];

        resolve(out.join("\n"));

    });
};
