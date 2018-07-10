import * as cassandra from "cassandra-driver";
import { CassandraKeyspace, CassandraTable } from "../../types";
import { CassandraColumn } from "../../types/index";

export function collectKeyspaces(client: cassandra.Client): Promise<CassandraKeyspace[]> {
    return new Promise((resolve, reject) => {
        // system_schema.keyspaces
    });
}
export function collectTables(client: cassandra.Client, keyspace: string): Promise<CassandraTable[]> {
    return new Promise((resolve, reject) => {
        // system_schema.tables

    });

}
export function collectColumns(client: cassandra.Client, keyspace: string, table: string): Promise<CassandraColumn[]> {
    return new Promise((resolve, reject) => {
        // system_schema.columns

    });

}
