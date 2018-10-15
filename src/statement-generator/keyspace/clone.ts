import { CassandraKeyspace } from "../../types/index";
export const keyspaceClone = (keyspace: string, data: CassandraKeyspace, cloneName?: string): Promise<string> => {
    return new Promise((resolve, reject) => {

        const name = !cloneName ? `${data.name}` : cloneName;
        const replication = replicationOptions(data);

        const out: string[] = [
            `-- change keyspace name`,
            `CREATE KEYSPACE ${name}`,
            `\tWITH REPLICATION = {`,
            `${replication}`,
            `\t}`,
            `\tAND DURABLE_WRITES = ${data.durable_writes};\n`,
        ];

        resolve(out.join("\n"));

    });
};

function replicationOptions(data: CassandraKeyspace): string {
    const out = Object.keys(data.replication).map((k) => `\t\t'${k}': '${data.replication[k]}'`);
    return out.join(",\n");
}
