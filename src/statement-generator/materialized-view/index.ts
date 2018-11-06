import wrap = require("word-wrap");
import { CassandraMaterializedView, CassandraTable } from "../../types/index";
export const materializedViewCreate = (keyspace: string, table: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {

        const name = `${table.name}_view`;

        let columns = table.primaryKeys.map((c) => c.name);
        columns = columns.concat(
            table.columns.filter((c) => c.kind === "regular").map((c) => c.name),
        );
        const restriction = columns.map((c) => `${c} IS NOT NULL`);
        const out: string[] = [
            `CREATE MATERIALIZED VIEW ${keyspace}.${name}`,
            `AS SELECT`,
            `${columns.join(", ")}`,
            `FROM ${keyspace}.${table.name}`,
            `WHERE ${restriction.join(" AND ")}`,
            `${primaryKey(table)};`,
        ];
        const wrapped = wrap(out.join("\n"), {
            width: 140,
            trim: true,
        });
        resolve(wrapped);
    });
};
export const materializedViewDrop = (keyspace: string, data: CassandraMaterializedView): Promise<string> => {
    return new Promise((resolve, reject) => {

        const out: string[] = [
            `DROP MATERIALIZED VIEW ${keyspace}.${data.name};`,
        ];

        resolve(out.join("\n"));
    });
};
export const materializedViewAlter = (keyspace: string, data: CassandraMaterializedView): Promise<string> => {
    return new Promise((resolve, reject) => {

        const columns = data.columns;
        const name = `${data.name}`;
        const list = columns.map((n, i) => {
            return `${n.name}`;
        }).join(", ");

        const out: string[] = [
            `-- change table options`,
            `ALTER MATERIALIZED VIEW ${keyspace}.${name}`,
            `${tableOptions(data, false)};`,
        ];

        resolve(out.join("\n"));
    });
};
export const materializedViewClone = (keyspace: string, data: CassandraMaterializedView, cloneName?: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = !cloneName ? `${data.name}` : cloneName;
        const columns = data.columns;

        const list = columns.map((n, i) => {
            return `${n.name}`;
        }).join(", ");

        const out: string[] = [
            `CREATE MATERIALIZED VIEW ${keyspace}.${name}`,
            `AS SELECT`,
            `${list}`,
            `FROM ${keyspace}.${data.base_table_name}`,
            `WHERE ${data.where_clause}`,
            `${primaryKey(data)}`,
            `${tableOptions(data)};`,
        ];
        const wrapped = wrap(out.join("\n"), {
            width: 140,
            trim: true,
        });
        // resolve(wrapped);
        resolve(out.join("\n"));

    });
};
function primaryKey(data: CassandraTable | CassandraMaterializedView): string {
    // handle simple
    if (data.primaryKeys.length === 1) {
        const simple = data.primaryKeys[0].name;
        return `PRIMARY KEY(${simple})`;
    }
    const countPar = data.primaryKeys.filter((k) => k.kind === "partition_key").length;
    const listPar = data.primaryKeys.filter((k) => k.kind === "partition_key").map((k) => k.name);
    const listClu = data.primaryKeys.filter((k) => k.kind === "clustering").map((k) => k.name);

    const partPartition = countPar === 1 ? listPar.join(", ") : `(${listPar.join(", ")})`;
    const partClustering = listClu.join(", ");
    const allKeys = [partPartition];

    if (listClu.length > 0) {
        allKeys.push(partClustering);
    }

    return `PRIMARY KEY(${allKeys.join(", ")})`;

}
function tableOptions(data: CassandraTable | CassandraMaterializedView, outputClusteringOrder: boolean = true): string {

    const clustering = data.primaryKeys.filter((c) => c.kind === "clustering");
    const isDesc = clustering.filter((c) => c.clustering_order === "desc").length > 0 ? true : false;

    const part = clustering.map((c) => `${c.name} ${c.clustering_order.toUpperCase()}`).join(", ");

    const clusteringOption = `CLUSTERING ORDER BY (${part})`;

    let out: string[] = [];

    if (isDesc && outputClusteringOrder) {
        out.push(clusteringOption);
    }

    const cachingString = Object.keys(data.caching).map((k) => `'${k}': '${data.caching[k]}'`).join(", ");
    const compactionString = Object.keys(data.compaction).map((k) => `'${k}': '${data.compaction[k]}'`).join(", ");
    const compressionString = Object.keys(data.compression).map((k) => `'${k}': '${data.compression[k]}'`).join(", ");

    out = out.concat([
        `\tdclocal_read_repair_chance = ${data.dclocal_read_repair_chance}`,
        `\tgc_grace_seconds = ${data.gc_grace_seconds}`,
        `\tbloom_filter_fp_chance = ${data.bloom_filter_fp_chance}`,
        `\tcaching = { ${cachingString} }`,
        `\tcomment = '${data.comment}'`,
        `\tcompaction = { ${compactionString} }`,
        `\tcompression = { ${compressionString} }`,
        `\tdefault_time_to_live = ${data.default_time_to_live}`,
        `\tspeculative_retry = '${data.speculative_retry}'`,
        `\tmin_index_interval = ${data.min_index_interval}`,
        `\tmax_index_interval = ${data.max_index_interval}`,
        // `\tcrc_check_chance = ${data.crc_check_chance}`,
    ]);

    if (data.crc_check_chance) {
        out.push(`\tcrc_check_chance = ${data.crc_check_chance}`);
    }

    return `WITH\n${out.join(" AND \n")}`;
}
