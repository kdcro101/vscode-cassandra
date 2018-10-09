import { CassandraKeyspace } from "../../types/index";
export const keyspaceClone = (keyspace: string, data: CassandraKeyspace): Promise<string> => {
    return new Promise((resolve, reject) => {

        const replication = replicationOptions(data);

        const out: string[] = [
            `-- change keyspace name`,
            `CREATE KEYSPACE ${keyspace}_clone`,
            `\tWITH REPLICATION = {`,
            `${replication}`,
            `\t}`,
            `\tAND DURABLE_WRITES = ${data.durable_writes};\n`,
        ];

        resolve(out.join("\n"));

    });
};

function replicationOptions(data: CassandraKeyspace): string {

    const out = Object.keys(data.replication).map((k) => `\t'${k}': '${data.replication[k]}'`);
    return out.join(",\n");
}
