import * as cassandra from "cassandra-driver";
import * as vscode from "vscode";

export type TreeItemType = "cluster" | "keyspace" | "table" | "column" | "index" | "primarykey";

export type CassandraConsistency = "ANY" | "ONE" | "TWO" | "THREE" |
    "QUORUM" | "ALL" | "LOCAL_QUORUM" | "EACH_QUORUM" | "SERIAL" | "LOCAL_SERIAL" | "LOCAL_ONE";

export interface WorkbenchConfigAuthProvider {
    class: "PlainTextAuthProvider";
    username?: string;
    password?: string;
}
export interface PersistedConfigClusterItem {
    name: string;
    contactPoints: string[];
    port?: number;
    authProvider?: WorkbenchConfigAuthProvider;
}

export interface ValidatedConfigClusterItem extends PersistedConfigClusterItem {
    valid: boolean;
    errors?: string[];
}

export interface CassandraClientEvents {
    connected: void;
    log: string;
    error: string;
}

export type CassandraColumnType = "regular" | "primary_key" | "clustering";

export interface CassandraColumn {
    name: string;
    clustering_order: string;
    kind: CassandraColumnType;
    position: number;
    type: string;
    all: RowColumn;
}

export interface CassandraIndex {
    index_name: string;
    kind: string;
    options: { [key: string]: string };
    all: RowIndex;
}

export interface CassandraTable {
    columns: CassandraColumn[];
    indexes: CassandraIndex[];
    name: string;
    all: RowTable;
}
export interface CassandraKeyspace {
    tables: CassandraTable[];
    name: string;
    durable_writes: number;
    replication: { [key: string]: string };
    all: RowKeyspace;
}

export interface RowKeyspace extends cassandra.types.Row {
    keyspace_name: string;
    durable_writes: number;
    replication: { [key: string]: string };
}
export interface RowTable extends cassandra.types.Row {
    keyspace_name: string;
    table_name: string;
    bloom_filter_fp_chance: number;
    caching: { [key: string]: string };
    cdc: number;
    comment: string;
    compaction: { [key: string]: string };
    compression: { [key: string]: string };
    crc_check_chance: number;
    dclocal_read_repair_chance: number;
    default_time_to_live: number;
    // extensions frozen<map<text, blob>>,
    // flags frozen<set<text>>,
    gc_grace_seconds: number;
    id: string;
    max_index_interval: number;
    memtable_flush_period_in_ms: number;
    min_index_interval: number;
    read_repair_chance: number;
    speculative_retry: string;
}

export interface RowColumn extends cassandra.types.Row {
    keyspace_name: string;
    table_name: string;
    column_name: string;
    clustering_order: string;
    // column_name_bytes blob,
    kind: string;
    position: number;
    type: string;
}
export interface RowIndex extends cassandra.types.Row {
    keyspace_name: string;
    table_name: string;
    index_name: string;
    kind: string;
    options: { [key: string]: string };
}
export interface TreeViewIcon {
    light: string | vscode.Uri;
    dark: string | vscode.Uri;
}
