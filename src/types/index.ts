import * as cassandra from "cassandra-driver";
import { Subject } from "rxjs";
import * as vscode from "vscode";
export * from "./messages";
export * from "./editor";

export interface VscodeCassandraGlobal extends NodeJS.Global {
    extensionContextBundle: ExtensionContextBundle;
}

export interface ExtensionContextBundle {
    context: vscode.ExtensionContext;
    eventDestroy: Subject<void>;
}
export type CassandraDataType = "ascii" | "bigint" | "blob" | "boolean" | "counter" | "date" | "decimal" | "double" | "float" |
    "frozen" | "inet" | "int" | "list" | "map" | "set" | "smallint" | "text" | "time" | "timestamp" | "timeuuid" | "tinyint" |
    "tuple" | "uuid" | "varchar" | "varint";

export type TreeItemType = "cluster" | "cluster-error" | "keyspace" | "table" | "columns" | "column_item" | "indexes" | "index_item" |
    "types" | "type_item" | "functions" | "function_item" | "aggregates" | "aggregate_item" | "primarykey" | "partitioning_key" |
    "clustering_key";

export type CassandraConsistency = "ANY" | "ONE" | "TWO" | "THREE" | "QUORUM" | "ALL" |
    "LOCAL_QUORUM" | "EACH_QUORUM" | "SERIAL" | "LOCAL_SERIAL" | "LOCAL_ONE";

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

export interface CassandraCluster {
    name: string;
    index: number;
}

export interface CassandraClientEvents {
    connected: void;
    log: string;
    error: string;
}

export type CassandraColumnType = "regular" | "partition_key" | "clustering";

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
    primaryKeys: CassandraColumn[];
    name: string;
    all: RowTable;
}
export interface CassandraType {
    name: string;
    field_names: string[];
    field_types: string[];
    all: RowType;
}
export interface CassandraAggregate {
    name: string;
    argument_types: string[];
    final_func: string;
    initcond: string;
    return_type: string;
    state_func: string;
    state_type: string;
    all: RowAggregate;
}

export interface CassandraFunction {
    name: string;
    argument_types: string[];
    argument_names: string[];
    body: string;
    called_on_null_input: boolean;
    language: string;
    return_type: string;
    all: RowFunction;
}
export interface CassandraKeyspace {
    tables: CassandraTable[];
    functions: CassandraFunction[];
    types: CassandraType[];
    aggregates: CassandraAggregate[];
    name: string;
    durable_writes: number;
    replication: { [key: string]: string };
    all: RowKeyspace;
}

export interface CassandraClusterData {
    keyspaces: CassandraKeyspace[];
    name: string;
    connected: boolean;
    error?: any;
}

export interface RowKeyspace extends cassandra.types.Row {
    keyspace_name: string;
    durable_writes: number;
    replication: { [key: string]: string };
}

export interface RowFunction extends cassandra.types.Row {
    keyspace_name: string;
    function_name: string;
    argument_types: string[];
    argument_names: string[];
    body: string;
    called_on_null_input: boolean;
    language: string;
    return_type: string;
}
export interface RowAggregate extends cassandra.types.Row {
    keyspace_name: string;
    aggregate_name: string;
    argument_types: string[];
    final_func: string;
    initcond: string;
    return_type: string;
    state_func: string;
    state_type: string;
}
export interface RowType extends cassandra.types.Row {
    keyspace_name: string;
    type_name: string;
    field_names: string[];
    field_types: string[];
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
