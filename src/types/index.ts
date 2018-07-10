export type CassandraColumnType = "regular" | "primary_key" | "clustering";

export interface CassandraColumn {
    name: string;
    clustering_order: string;
    kind: CassandraColumnType;
    position: number;
    type: string;
}
export interface CassandraTable {
    columns: CassandraColumn[];
    name: string;
}
export interface CassandraKeyspace {
    tables: CassandraTable[];
    name: string;
    durable_writes: boolean;
    replication: { [key: string]: string };
}
