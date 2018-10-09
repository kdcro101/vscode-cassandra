import { CassandraTable } from "../../types/index";
export const tableClone = (keyspace: string, data: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `${data.name}_clone`;
        const lines: string[] = [
            `CREATE TABLE ${keyspace}.${name} (`,
            `${columns(data)},`,
            `\t${primaryKey(data)}`,
            `)${tableOptions(data)};`,
        ];

        resolve(lines.join("\n"));

    });
};

function columns(data: CassandraTable): string {

    const collection = data.columns.map((c) => {
        return `\t${c.name} ${c.type}`;
    });

    return collection.join(",\n");

}
function primaryKey(data: CassandraTable): string {
    // handle simple
    if (data.primaryKeys.length === 1) {
        const simple = data.primaryKeys[0].name;
        return `PRIMARY KEY(${simple})`;
    }
    const countPar = data.primaryKeys.filter((k) => k.kind === "partition_key").length;
    const countClu = data.primaryKeys.filter((k) => k.kind === "clustering").length;
    const listPar = data.primaryKeys.filter((k) => k.kind === "partition_key").map((k) => k.name);
    const listClu = data.primaryKeys.filter((k) => k.kind === "clustering").map((k) => k.name);

    const partPartition = countPar === 1 ? listPar.join(", ") : `(${listPar.join(", ")})`;
    const partClustering = listClu.join(", ");

    return `PRIMARY KEY(${partPartition}, ${partClustering})`;

}

function tableOptions(data: CassandraTable): string {

    const clustering = data.primaryKeys.filter((c) => c.kind === "clustering");
    const isDesc = clustering.filter((c) => c.clustering_order === "desc").length > 0 ? true : false;

    const part = clustering.map((c) => `${c.name} ${c.clustering_order.toUpperCase()}`).join(", ");

    const clusteringOption = `CLUSTERING ORDER BY (${part})`;

    let out: string[] = [];

    if (isDesc) {
        out.push(clusteringOption);
    }

    const cachingString = Object.keys(data.all.caching).map((k) => `'${k}': '${data.all.caching[k]}'`).join(", ");
    const compactionString = Object.keys(data.all.compaction).map((k) => `'${k}': '${data.all.compaction[k]}'`).join(", ");
    const compressionString = Object.keys(data.all.compression).map((k) => `'${k}': '${data.all.compression[k]}'`).join(", ");

    out = out.concat([
        `dclocal_read_repair_chance = ${data.all.dclocal_read_repair_chance}`,
        `gc_grace_seconds = ${data.all.gc_grace_seconds}`,
        `bloom_filter_fp_chance = ${data.all.bloom_filter_fp_chance}`,
        `caching = { ${cachingString} }`,
        `comment = '${data.all.comment}'`,
        `compaction = { ${compactionString} }`,
        `compression = { ${compressionString} }`,
        `default_time_to_live = ${data.all.default_time_to_live}`,
        `speculative_retry = '${data.all.speculative_retry}'`,
        `min_index_interval = ${data.all.min_index_interval}`,
        `max_index_interval = ${data.all.max_index_interval}`,
        `crc_check_chance = ${data.all.crc_check_chance}`,
    ]);
    return ` WITH ${out.join(" AND \n")}`;
}
