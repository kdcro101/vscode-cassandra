import * as cassandra from "cassandra-driver";
import { sortBy } from "lodash";
import { from } from "rxjs";
import { concatMap, map } from "rxjs/operators";
import { CassandraClient } from "..";
import { rootColumnType } from "../../data-type/type-parser";
import {
    CassandraAggregate, CassandraColumn, CassandraColumnType, CassandraFunction,
    CassandraIndex, CassandraIndexCollectionType, CassandraKeyspace, CassandraMaterializedView,
    CassandraTable, CassandraType, RowAggregate, RowColumn, RowFunction, RowIndex, RowType,
} from "../../types";
import { RowCs2SchemaColumnfamilies, RowCs2SchemaColumns, RowCs2SchemaKeyspaces } from "../../types/cassandra2";
import { CassandraClusteringOrder } from "../../types/index";
import { columnTypeToV3 } from "./helpers";

export function collectKeyspaces2(client: CassandraClient): Promise<CassandraKeyspace[]> {
    return new Promise((resolve, reject) => {
        // system_schema.keyspaces
        from<cassandra.types.ResultSet>(client.execute("select * from system.schema_keyspaces")).pipe(
            concatMap((data) => {
                const rows = data.rows as RowCs2SchemaKeyspaces[];
                return Promise.all([
                    rows,
                    Promise.all(rows.map((i) => collectTables(client, i.keyspace_name))),
                    Promise.all(rows.map((i) => Promise.resolve([] as CassandraFunction[]))),
                    Promise.all(rows.map((i) => Promise.resolve([] as CassandraType[]))),
                    Promise.all(rows.map((i) => Promise.resolve([] as CassandraAggregate[]))),
                    // Promise.all(rows.map((i) => collectFunctions(client, i.keyspace_name))),
                    // Promise.all(rows.map((i) => collectTypes(client, i.keyspace_name))),
                    // Promise.all(rows.map((i) => collectAggregates(client, i.keyspace_name))),
                    Promise.all(rows.map((i) => Promise.resolve([] as CassandraMaterializedView[]))),
                ]);
            }),
            map((data) => {
                const rows = data[0];
                const allTables = data[1];
                const allFunctions = data[2];
                const allTypes = data[3];
                const allAggregates = data[4];
                const allViews = data[5];

                return rows.map((row, i) => {
                    const tables = allTables[i];
                    const functions = allFunctions[i];
                    const types = allTypes[i];
                    const aggregates = allAggregates[i];
                    const views = allViews[i];

                    const replication = Object.assign(row.strategy_options, {
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

export function collectAggregates(client: cassandra.Client, keyspace: string): Promise<CassandraAggregate[]> {
    return new Promise((resolve, reject) => {
        // system_schema.tables
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.aggregates where keyspace_name=?", [keyspace])).pipe(
            map((data) => {
                const rows = data.rows as RowAggregate[];

                return rows.map((row, i) => {

                    const out: CassandraAggregate = {
                        name: row.aggregate_name,
                        argument_types: row.argument_types,
                        final_func: row.final_func,
                        initcond: row.initcond,
                        return_type: row.return_type,
                        state_func: row.state_func,
                        state_type: row.state_type,
                        all: row,

                    };
                    return out;
                });
            }),
        ).subscribe((data) => {
            resolve(data);
        }, (e) => reject(e));

    });

}
export function collectTypes(client: cassandra.Client, keyspace: string): Promise<CassandraType[]> {
    return new Promise((resolve, reject) => {
        // system_schema.tables
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.types where keyspace_name=?", [keyspace])).pipe(
            map((data) => {
                const rows = data.rows as RowType[];

                return rows.map((row, i) => {

                    const out: CassandraType = {
                        name: row.type_name,
                        field_names: row.field_names,
                        field_types: row.field_types,
                        all: row,

                    };
                    return out;
                });
            }),
        ).subscribe((data) => {
            resolve(data);
        }, (e) => reject(e));

    });

}
export function collectFunctions(client: cassandra.Client, keyspace: string): Promise<CassandraFunction[]> {
    return new Promise((resolve, reject) => {
        // system_schema.tables
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.functions where keyspace_name=?", [keyspace])).pipe(
            map((data) => {
                const rows = data.rows as RowFunction[];

                return rows.map((row, i) => {

                    const out: CassandraFunction = {
                        name: row.function_name,
                        argument_types: row.argument_types,
                        argument_names: row.argument_names,
                        body: row.body,
                        called_on_null_input: row.called_on_null_input,
                        language: row.language,
                        return_type: row.return_type,
                        all: row,

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
        from<cassandra.types.ResultSet>(
            client.execute("select * from system.schema_columnfamilies where keyspace_name=?", [keyspace]),
        ).pipe(
            concatMap((data) => {
                const rows = data.rows as RowCs2SchemaColumnfamilies[];
                return Promise.all([
                    rows,
                    Promise.all(rows.map((i) => collectColumns(client, i.keyspace_name, i.columnfamily_name))),
                    Promise.all(rows.map((i) => Promise.resolve([] as CassandraIndex[]))),
                    // Promise.all(rows.map((i) => collectIndexes(client, i.keyspace_name, i.columnfamily_name))),
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

                    const compaction = Object.assign(row.compaction_strategy_options, {
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

export function collectIndexes(client: cassandra.Client, keyspace: string, table: string): Promise<CassandraIndex[]> {
    return new Promise((resolve, reject) => {
        // system_schema.columns
        const rxExtract = new RegExp(/([a-z]+)\(([a-z][_\w]*)\)/i);
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.indexes \
         where keyspace_name=? AND table_name=?", [keyspace, table])).pipe(
            map((data) => {
                const rows = data.rows as RowIndex[];

                return rows.map((row, i) => {

                    const column_name = rxExtract.test(row.options.target) ? rxExtract.exec(row.options.target)[2] : row.options.target;
                    const index_type = rxExtract.test(row.options.target) ? rxExtract.exec(row.options.target)[1] : null;
                    const out: CassandraIndex = {
                        name: row.index_name,
                        kind: row.kind,
                        options: row.options,
                        all: row,
                        columnName: column_name,
                        indexType: index_type as CassandraIndexCollectionType,
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
                client.client.metadata.getTable(keyspace, table),
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
