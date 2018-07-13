import * as cassandra from "cassandra-driver";
import { from } from "rxjs";
import { concatMap, map } from "rxjs/operators";
import {
    CassandraColumn, CassandraColumnType,
    CassandraKeyspace, CassandraTable, RowColumn, RowIndex, RowKeyspace, RowTable,
} from "../../types";
import { CassandraIndex } from "../../types/index";

export function collectKeyspaces(client: cassandra.Client): Promise<CassandraKeyspace[]> {
    return new Promise((resolve, reject) => {
        // system_schema.keyspaces
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.keyspaces")).pipe(
            concatMap((data) => {
                const rows = data.rows as RowKeyspace[];
                return Promise.all([
                    rows,
                    Promise.all(rows.map((i) => collectTables(client, i.keyspace_name))),
                ]);
            }),
            map((data) => {
                const rows = data[0];
                const allTables = data[1];

                return rows.map((row, i) => {
                    const tables = allTables[i];
                    const out: CassandraKeyspace = {
                        name: row.keyspace_name,
                        durable_writes: row.durable_writes,
                        tables,
                        replication: row.replication,
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
                ]);
            }),
            map((data) => {
                const rows = data[0];
                const allColumns = data[1];
                const allIndexes = data[2];

                return rows.map((row, i) => {
                    const columns = allColumns[i];
                    const indexes = allIndexes[i];
                    const out: CassandraTable = {
                        name: row.table_name,
                        columns,
                        indexes,
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
export function collectIndexes(client: cassandra.Client, keyspace: string, table: string): Promise<CassandraIndex[]> {
    return new Promise((resolve, reject) => {
        // system_schema.columns
        from<cassandra.types.ResultSet>(client.execute("select * from system_schema.indexes \
         where keyspace_name=? AND table_name=?", [keyspace, table])).pipe(
            map((data) => {
                const rows = data.rows as RowIndex[];

                return rows.map((row, i) => {

                    const out: CassandraIndex = {
                        index_name: row.index_name,
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
                        clustering_order: row.clustering_order,
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
