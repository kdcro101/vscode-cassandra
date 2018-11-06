import * as cassandra from "cassandra-driver";

export interface RowCs2SchemaKeyspaces extends cassandra.types.Row {
    keyspace_name: string;
    durable_writes: boolean;
    strategy_class: string;
    strategy_options: { [key: string]: string };
}
export interface RowCs2SchemaColumnfamilies extends cassandra.types.Row {
    keyspace_name: string;
    columnfamily_name: string;
    bloom_filter_fp_chance: number;
    caching: string;
    cf_id: string;
    comment: string;
    compaction_strategy_class: string;
    compaction_strategy_options: string;
    comparator: string;
    compression_parameters: string;
    default_time_to_live: number;
    default_validator: string;
    dropped_columns: { [key: string]: number };
    gc_grace_seconds: number;
    is_dense: boolean;
    key_validator: string;
    local_read_repair_chance: number;
    max_compaction_threshold: number;
    max_index_interval: number;
    memtable_flush_period_in_ms: number;
    min_compaction_threshold: number;
    min_index_interval: number;
    read_repair_chance: number;
    speculative_retry: string;
    subcomparator: string;
    type: string;

}

export interface RowCs2SchemaColumns extends cassandra.types.Row {
    keyspace_name: string;
    columnfamily_name: string;
    column_name: string;
    component_index: number;
    index_name: string;
    index_options: string;
    index_type: string;
    type: string;
    validator: string;
}
export interface RowCs2SchemaFunctions extends cassandra.types.Row {
    keyspace_name: string;
    function_name: string;
    signature: string[];
    argument_names: string[];
    argument_types: string[];
    body: string;
    called_on_null_input: boolean;
    language: string;
    return_type: string;
}
