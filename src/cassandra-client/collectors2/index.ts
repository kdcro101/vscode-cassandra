import * as cassandra from "cassandra-driver";
import { sortBy } from "lodash";
import { from } from "rxjs";
import { concatMap, map } from "rxjs/operators";
import { CassandraClient } from "..";
import { rootColumnType } from "../../data-type/type-parser";
import {
    CassandraAggregate, CassandraColumn, CassandraColumnType, CassandraFunction,
    CassandraIndex, CassandraIndexCollectionType, CassandraKeyspace, CassandraTable, CassandraType, RowAggregate, RowFunction, RowType,
} from "../../types";
import {
    RowCs2SchemaAggregates, RowCs2SchemaColumnfamilies,
    RowCs2SchemaColumns, RowCs2SchemaFunctions, RowCs2SchemaKeyspaces, RowCs2SchemaUserTypes,
} from "../../types/cassandra2";
import { CassandraClusteringOrder } from "../../types/index";
import { columnTypeToV3 } from "./helpers";

export function collectKeyspaces2(client: CassandraClient): Promise<CassandraKeyspace[]> {
    return new Promise((resolve, reject) => {
        // system_schema.keyspaces
        from(client.execute("select * from system.schema_keyspaces")).pipe(
            concatMap((data) => {
                const rows = data.rows as RowCs2SchemaKeyspaces[];
                return Promise.all([
                    rows,
                    Promise.all(rows.map((i) => collectTables(client, i.keyspace_name))),
                    Promise.all(rows.map((i) => collectFunctions(client, i.keyspace_name))),
                    Promise.all(rows.map((i) => collectTypes(client, i.keyspace_name))),
                    Promise.all(rows.map((i) => collectAggregates(client, i.keyspace_name))),

                ]);
            }),
            map((data) => {
                const rows = data[0];
                const allTables = data[1];
                const allFunctions = data[2];
                const allTypes = data[3];
                const allAggregates = data[4];

                return rows.map((row, i) => {
                    const tables = allTables[i];
                    const functions = allFunctions[i];
                    const types = allTypes[i];
                    const aggregates = allAggregates[i];
                    const views = [];

                    const replication = Object.assign(JSON.parse(row.strategy_options), {
                        class: row.strategy_class,
                    });

                    const out: CassandraKeyspace = {
                        name: row.keyspace_name,
                        tables,
                        functions,
                        types,
                        materializedViews: views,
                        aggregates,
                        durable_writes: row.durable_writes,
                        replication,
                    };

                    return out;
                }).sort((a, b) => {
                    if (a.name < b.name) { return -1; }
                    if (a.name > b.name) { return 1; }
                    return 0;
                });
            }),
        ).subscribe((data) => {
            resolve(data);
        }, (e) => {
            reject(e);
        });

    });
}

export function collectAggregates(client: CassandraClient, keyspace: string): Promise<CassandraAggregate[]> {
    return new Promise((resolve, reject) => {
        // system_schema.tables
        from(client.execute("select * from system.schema_aggregates where keyspace_name=?", [keyspace])).pipe(
            concatMap((resultset) => {
                const rows = resultset.rows as RowCs2SchemaAggregates[];
                return Promise.all([
                    Promise.resolve(rows),
                    Promise.all(rows.map((row) => client.nativeClient.metadata.getAggregates(keyspace, row.aggregate_name))),
                ]);
            }),
            map((data) => {
                const rows = data[0];
                const meta = data[1];

                return rows.map((row, i) => {
                    const aggMeta = meta[i][0];
                    const rt = columnTypeToV3(client, aggMeta.returnType);
                    const st = columnTypeToV3(client, aggMeta.stateType);
                    const argument_types = aggMeta.argumentTypes.map((t) => columnTypeToV3(client, t));

                    const out: CassandraAggregate = {
                        name: row.aggregate_name,
                        argument_types,
                        final_func: row.final_func,
                        initcond: aggMeta.initCondition,
                        return_type: rt,
                        state_func: row.state_func,
                        state_type: st,

                    };
                    return out;
                });
            }),
        ).subscribe((data) => {
            resolve(data);
        }, (e) => reject(e));

    });

}
export function collectTypes(client: CassandraClient, keyspace: string): Promise<CassandraType[]> {
    return new Promise((resolve, reject) => {
        // system_schema.tables
        from(client.execute("select * from system.schema_usertypes where keyspace_name=?", [keyspace])).pipe(
            concatMap((resultset) => {
                const rows = resultset.rows as RowCs2SchemaUserTypes[];
                return Promise.all([
                    Promise.resolve(rows),
                    Promise.all(rows.map((row) => client.nativeClient.metadata.getUdt(keyspace, row.type_name))),
                ]);
            }),
            map((data) => {
                const rows = data[0];
                const meta = data[1];

                return rows.map((row, i) => {
                    const types = meta[i].fields.map((f) => columnTypeToV3(client, f.type));
                    const out: CassandraType = {
                        name: row.type_name,
                        field_names: row.field_names,
                        field_types: types,
                    };
                    return out;
                });
            }),
        ).subscribe((data) => {
            resolve(data);
        }, (e) => reject(e));

    });

}
export function collectFunctions(client: CassandraClient, keyspace: string): Promise<CassandraFunction[]> {
    return new Promise((resolve, reject) => {
        // system_schema.tables
        from(client.execute("select * from system.schema_functions where keyspace_name=?", [keyspace])).pipe(
            concatMap((resultset) => {
                const rows = resultset.rows as RowCs2SchemaFunctions[];
                return Promise.all([
                    Promise.resolve(rows),
                    Promise.all(rows.map((row) => client.nativeClient.metadata.getFunctions(keyspace, row.function_name))),
                ]);
            }),
            map((data) => {
                const rows = data[0];
                const meta = data[1];

                return rows.map((row, i) => {
                    const funcMeta = meta[i][0];
                    const rt = columnTypeToV3(client, funcMeta.returnType);

                    const argument_types = funcMeta.argumentTypes.map((t) => columnTypeToV3(client, t));

                    const out: CassandraFunction = {
                        name: row.function_name,
                        argument_types,
                        argument_names: row.argument_names,
                        body: row.body,
                        called_on_null_input: row.called_on_null_input,
                        language: row.language,
                        return_type: rt,
                    };
                    return out;
                });
            }),
        ).subscribe((data) => {
            resolve(data);
        }, (e) => reject(e));

    });

}
export function collectTables(client: CassandraClient, keyspace: string): Promise<CassandraTable[]> {
    return new Promise((resolve, reject) => {
        // system_schema.tables
        from(
            client.execute("select * from system.schema_columnfamilies where keyspace_name=?", [keyspace]),
        ).pipe(
            concatMap((data) => {
                const rows = data.rows as RowCs2SchemaColumnfamilies[];
                return Promise.all([
                    rows,
                    Promise.all(rows.map((i) => collectColumns(client, i.keyspace_name, i.columnfamily_name))),
                    Promise.all(rows.map((i) => collectIndexes(client, i.keyspace_name, i.columnfamily_name))),
                ]);
            }),
            map((data) => {
                const rows = data[0];
                const allColumns = data[1];
                const allIndexes = data[2];

                return rows.map((row, i) => {
                    const columns = allColumns[i];
                    const indexes = allIndexes[i];

                    const primaryKeys: CassandraColumn[] = [];

                    const pks = sortBy<CassandraColumn>(columns.filter((c) => c.kind === "partition_key"), (c) => {
                        return c.position;
                    });
                    const cks = sortBy<CassandraColumn>(columns.filter((c) => c.kind === "clustering"), (c) => {
                        return c.position;
                    });

                    pks.forEach((p) => primaryKeys.push(p));
                    cks.forEach((p) => primaryKeys.push(p));

                    const compaction = Object.assign(JSON.parse(row.compaction_strategy_options), {
                        class: row.compaction_strategy_class,
                    });

                    const out: CassandraTable = {
                        name: row.columnfamily_name,
                        columns,
                        indexes,
                        primaryKeys,
                        compaction,
                        compression: JSON.parse(row.compression_parameters),
                        caching: JSON.parse(row.caching),
                        crc_check_chance: null,
                        dclocal_read_repair_chance: row.local_read_repair_chance,
                        default_time_to_live: row.default_time_to_live,
                        min_index_interval: row.min_index_interval,
                        max_index_interval: row.max_index_interval,
                        memtable_flush_period_in_ms: row.memtable_flush_period_in_ms,
                        read_repair_chance: row.read_repair_chance,
                        gc_grace_seconds: row.gc_grace_seconds,
                        speculative_retry: row.speculative_retry,
                        bloom_filter_fp_chance: row.bloom_filter_fp_chance,
                        comment: row.comment,

                    };
                    return out;
                });
            }),
        ).subscribe((data) => {
            resolve(data);
        }, (e) => reject(e));

    });

}

export function collectIndexes(client: CassandraClient, keyspace: string, table: string): Promise<CassandraIndex[]> {
    return new Promise((resolve, reject) => {
        // system_schema.columns
        const rxExtract = new RegExp(/([a-z]+)\(([a-z][_\w]*)\)/i);
        from(
            Promise.all([
                client.nativeClient.execute(
                    "select * from system.schema_columns where keyspace_name=? AND columnfamily_name=?",
                    [keyspace, table],
                ),
                client.nativeClient.metadata.getTable(keyspace, table),
            ])).pipe(
                map((data) => {

                    const rows = (data[0].rows as RowCs2SchemaColumns[]).filter((c) => c.index_name != null);
                    const metadata = data[1];

                    return rows.map((row, i) => {
                        const column_name = row.column_name;
                        const columnMeta = metadata.columns.find((c) => c.name === column_name);
                        const collection = isCollection(client, columnMeta);
                        const index_type = collection ? collectionIndexType(client, row, columnMeta) : null;
                        let options: { [key: string]: string } = null;
                        if (index_type) {
                            options = {
                                target: `${index_type}(${column_name})`,
                            };
                        } else {
                            options = {
                                target: column_name,
                            };
                        }

                        const out: CassandraIndex = {
                            name: row.index_name,
                            table_name: row.columnfamily_name,
                            kind: "COMPOSITES",
                            options,
                            columnName: column_name,
                            indexType: index_type,
                        };
                        return out;
                    });
                }),
            ).subscribe((data) => {
                resolve(data);
            }, (e) => reject(e));
    });

}
export function collectColumns(client: CassandraClient, keyspace: string, table: string): Promise<CassandraColumn[]> {
    return new Promise((resolve, reject) => {
        // system_schema.columns
        from(
            Promise.all([
                client.execute("select * from system.schema_columns \
                 where keyspace_name=? AND columnfamily_name=?", [keyspace, table]),
                client.nativeClient.metadata.getTable(keyspace, table),
            ]),
        ).pipe(
            map((result) => {
                const data = result[0];
                const metadata = result[1];
                const rows = data.rows as RowCs2SchemaColumns[];

                return rows.map((row, i) => {

                    let kind: CassandraColumnType = "regular";
                    let clustering_order: CassandraClusteringOrder = null;
                    switch (row.type) {
                        case "partition_key":
                            kind = "partition_key";
                            break;
                        case "clustering_key":
                            kind = "clustering";
                            clustering_order = metadata.clusteringOrder[row.component_index] as CassandraClusteringOrder;
                            break;
                    }
                    const columnInfo = metadata.columns.find((c) => c.name === row.column_name);
                    const type = columnTypeToV3(client, columnInfo.type);
                    const out: CassandraColumn = {
                        name: row.column_name,
                        clustering_order,
                        kind,
                        position: row.component_index,
                        type,
                        typeRoot: rootColumnType(type),
                    };
                    return out;
                });
            }),
        ).subscribe((data) => {
            resolve(data);
        }, (e) => {
            reject(e);
        });
    });

}

function isCollection(client: CassandraClient, meta: cassandra.metadata.ColumnInfo): boolean {

    const native = client.getNativeTypes(meta.type.code);
    let out: boolean = false;

    switch (native) {
        case "udt":
            out = true;
            break;
        case "map":
            out = true;
            break;
        case "list":
            out = true;
            break;
        case "set":
            out = true;
            break;
        case "tuple":
            out = true;
            break;
    }

    return out;
}
function collectionIndexType(
    client: CassandraClient,
    row: RowCs2SchemaColumns,
    metadata: cassandra.metadata.ColumnInfo): CassandraIndexCollectionType {

    const options = JSON.parse(row.index_options);
    const optionsKeys = Object.keys(options);
    const isFrozen = (metadata.type.options && metadata.type.options.frozen) ? true : false;
    const native = client.getNativeTypes(metadata.type.code);

    if (isFrozen && optionsKeys.length === 0 && (native === "map" || native === "udt")) {
        return "full";
    }
    if (!isFrozen && optionsKeys.find((k) => k === "index_keys_and_values")) {
        return "entries";
    }
    if (!isFrozen && optionsKeys.find((k) => k === "index_values")) {
        return "values";
    }
    if (!isFrozen && optionsKeys.find((k) => k === "index_keys")) {
        return "keys";
    }

    return null;
}
