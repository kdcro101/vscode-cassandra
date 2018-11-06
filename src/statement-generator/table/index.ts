import { from } from "rxjs";
import { concatMap } from "rxjs/operators";
import { CassandraTable } from "../../types/index";
import { indexClone } from "../index/index";
export const tableTruncate = (keyspace: string, data: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `${data.name}`;

        resolve(`TRUNCATE TABLE ${keyspace}.${name};`);

    });
};

export const tableCreate = (keyspace: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `table_name`;

        const out: string[] = [
            `-- change table name and structure`,
            `CREATE TABLE ${keyspace}.${name}(`,
            `\tpk text,`,
            `\tcck text,`,
            `\tdata text,`,
            `\tPRIMARY KEY(pk,cck)`,
            `);`,
        ];

        resolve(out.join("\n"));

    });
};
export const tableAlterAdd = (keyspace: string, data: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `${data.name}`;

        const out: string[] = [
            `-- change column name and type`,
            `ALTER TABLE ${keyspace}.${name} ADD new_column_name TEXT;`,
        ];

        resolve(out.join("\n"));

    });
};
export const tableAlterDrop = (keyspace: string, data: CassandraTable, columnToDrop?: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `${data.name}`;
        const columnName = columnToDrop || "column_to_drop";

        const out: string[] = [
            `-- change column name`,
            `ALTER TABLE ${keyspace}.${name} DROP ${columnName};`,
        ];

        resolve(out.join("\n"));

    });
};

export const tableDrop = (keyspace: string, data: CassandraTable): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = `${data.name}`;

        resolve(`DROP TABLE ${keyspace}.${name};`);

    });
};
export const tableClone = (keyspace: string, data: CassandraTable, cloneName?: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = !cloneName ? `${data.name}` : cloneName;
        const indexes = data.indexes;

        const lines: string[] = [
            `CREATE TABLE ${keyspace}.${name} (`,
            `${columns(data)},`,
            `\t${primaryKey(data)}`,
            `)${tableOptions(data)};`,
        ];

        if (!indexes || indexes.length === 0) {
            resolve(lines.join("\n"));
            return;
        }

        lines.push("\n");

        from(indexes).pipe(
            concatMap((ix) => {
                const ixName = !cloneName ? null : `${name}_${ix.columnName}_idx`;
                return indexClone(keyspace, data, ix.name, ixName, name);
            }),
        ).subscribe((idxString) => {
            lines.push(idxString);
        }, (e) => {
            reject(e);
        }, () => {
            resolve(lines.join("\n"));
        });

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

function tableOptions(data: CassandraTable): string {

    const clustering = data.primaryKeys.filter((c) => c.kind === "clustering");
    const isDesc = clustering.filter((c) => c.clustering_order === "desc").length > 0 ? true : false;

    const part = clustering.map((c) => `${c.name} ${c.clustering_order.toUpperCase()}`).join(", ");

    const clusteringOption = `CLUSTERING ORDER BY (${part})`;

    let out: string[] = [];

    if (isDesc) {
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
    ]);

    if (data.crc_check_chance) {
        out.push(`\tcrc_check_chance = ${data.crc_check_chance}`);
    }

    return ` WITH ${out.join(" AND \n")}`;
}
