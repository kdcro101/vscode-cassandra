import * as cassandra from "cassandra-driver";
import { sortBy } from "lodash";
import { from } from "rxjs";
import { concatMap, map } from "rxjs/operators";
import {
    CassandraAggregate,
    CassandraColumn, CassandraColumnType,
    CassandraFunction, CassandraIndex, CassandraKeyspace,
    CassandraMaterializedView, CassandraTable, CassandraType,
    RowAggregate, RowColumn, RowFunction, RowIndex, RowKeyspace, RowMaterializedView, RowTable, RowType,
} from "../../types";
import { CassandraClusteringOrder } from "../../types/index";

export function collectKeyspaces(client: cassandra.Client): Promise<CassandraKeyspace[]> {
    return new Promise((resolve, reject) => {
        // system_schema.keyspaces
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.keyspaces")).pipe(
            concatMap((data) => {
                const rows = data.rows as RowKeyspace[];
                return Promise.all([
                    rows,
                    Promise.all(rows.map((i) => collectTables(client, i.keyspace_name))),
                    Promise.all(rows.map((i) => collectFunctions(client, i.keyspace_name))),
                    Promise.all(rows.map((i) => collectTypes(client, i.keyspace_name))),
                    Promise.all(rows.map((i) => collectAggregates(client, i.keyspace_name))),
                    Promise.all(rows.map((i) => collectMaterializedViews(client, i.keyspace_name))),
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

                    const out: CassandraKeyspace = {
                        name: row.keyspace_name,
                        durable_writes: row.durable_writes,
                        tables,
                        functions,
                        types,
                        materializedViews: views,
                        aggregates,
                        replication: row.replication,
                        all: row,

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
export function collectMaterializedViews(client: cassandra.Client, keyspace: string): Promise<CassandraMaterializedView[]> {
    return new Promise((resolve, reject) => {
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.views where keyspace_name=?", [keyspace])).pipe(
            concatMap((data) => {
                const rows = data.rows as RowMaterializedView[];
                return Promise.all([
                    rows,
                    Promise.all(rows.map((i) => collectColumns(client, i.keyspace_name, i.view_name))),
                    Promise.all(rows.map((i) => collectIndexes(client, i.keyspace_name, i.view_name))),
                    Promise.all(rows.map((i) => collectPrimaryKeys(client, i.keyspace_name, i.view_name))),
                ]);
            }),
            map((data) => {

                const rows = data[0];
                const allColumns = data[1];
                const allIndexes = data[2];
                const allPrimaryKeys = data[3];

                // const rows = data.rows as RowMaterializedView[];

                return rows.map((row, i) => {
                    const columns = allColumns[i];
                    const indexes = allIndexes[i];
                    const primaryKeys = allPrimaryKeys[i];

                    const out: CassandraMaterializedView = {
                        columns,
                        indexes,
                        primaryKeys,
                        keyspace,
                        name: row.view_name,
                        base_table_name: row.base_table_name,
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
export function collectTables(client: cassandra.Client, keyspace: string): Promise<CassandraTable[]> {
    return new Promise((resolve, reject) => {
        // system_schema.tables
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.tables where keyspace_name=?", [keyspace])).pipe(
            concatMap((data) => {
                const rows = data.rows as RowTable[];
                return Promise.all([
                    rows,
                    Promise.all(rows.map((i) => collectColumns(client, i.keyspace_name, i.table_name))),
                    Promise.all(rows.map((i) => collectIndexes(client, i.keyspace_name, i.table_name))),
                    Promise.all(rows.map((i) => collectPrimaryKeys(client, i.keyspace_name, i.table_name))),
                ]);
            }),
            map((data) => {
                const rows = data[0];
                const allColumns = data[1];
                const allIndexes = data[2];
                const allPrimaryKeys = data[3];

                return rows.map((row, i) => {
                    const columns = allColumns[i];
                    const indexes = allIndexes[i];
                    const primaryKeys = allPrimaryKeys[i];
                    const out: CassandraTable = {
                        name: row.table_name,
                        columns,
                        indexes,
                        primaryKeys,
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
export function collectPrimaryKeys(client: cassandra.Client, keyspace: string, table: string): Promise<CassandraColumn[]> {
    return new Promise((resolve, reject) => {
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.columns \
         where keyspace_name=? AND table_name=?", [keyspace, table])).pipe(
            map((data) => {
                const rows = data.rows as RowColumn[];

                const columns = rows.map((row, i) => {

                    const item: CassandraColumn = {
                        name: row.column_name,
                        all: row,
                        clustering_order: row.clustering_order as CassandraClusteringOrder,
                        kind: row.kind as CassandraColumnType,
                        position: row.position,
                        type: row.type,
                    };
                    return item;
                });

                const out: CassandraColumn[] = [];

                const pks = sortBy<CassandraColumn>(columns.filter((c) => c.kind === "partition_key"), (i) => {
                    return i.position;
                });
                const cks = sortBy<CassandraColumn>(columns.filter((c) => c.kind === "clustering"), (i) => {
                    return i.position;
                });

                pks.forEach((p, i) => out.push(p));
                cks.forEach((p, i) => out.push(p));

                return out;
            }),
            ).subscribe((data) => {
                resolve(data);
            }, (e) => reject(e));

    });
}
export function collectIndexes(client: cassandra.Client, keyspace: string, table: string): Promise<CassandraIndex[]> {
    return new Promise((resolve, reject) => {
        // system_schema.columns
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.indexes \
         where keyspace_name=? AND table_name=?", [keyspace, table])).pipe(
            map((data) => {
                const rows = data.rows as RowIndex[];

                return rows.map((row, i) => {

                    const out: CassandraIndex = {
                        name: row.index_name,
                        kind: row.kind,
                        options: row.options,
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
export function collectColumns(client: cassandra.Client, keyspace: string, table: string): Promise<CassandraColumn[]> {
    return new Promise((resolve, reject) => {
        // system_schema.columns
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.columns \
         where keyspace_name=? AND table_name=?", [keyspace, table])).pipe(
            map((data) => {
                const rows = data.rows as RowColumn[];

                return rows.map((row, i) => {

                    const out: CassandraColumn = {
                        name: row.column_name,
                        all: row,
                        clustering_order: row.clustering_order as CassandraClusteringOrder,
                        kind: row.kind as CassandraColumnType,
                        position: row.position,
                        type: row.type,
                    };
                    return out;
                });
            }),
            ).subscribe((data) => {
                resolve(data);
            }, (e) => reject(e));
    });

}
