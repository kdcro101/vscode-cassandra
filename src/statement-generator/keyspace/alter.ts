import { quouteCaseSensitive } from "../../helpers/quoting";
import { CassandraKeyspace } from "../../types/index";
export const keyspaceAlter = (keyspace: string, data: CassandraKeyspace): Promise<string> => {
    return new Promise((resolve, reject) => {

        const replication = replicationOptions(data);

        const out: string[] = [
            `ALTER KEYSPACE ${quouteCaseSensitive(keyspace)}`,
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
