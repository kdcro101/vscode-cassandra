-- change keyspace name
CREATE KEYSPACE example_keyspace
	WITH REPLICATION = {
		'class': 'org.apache.cassandra.locator.SimpleStrategy',
		'replication_factor': '1'
	}
	AND DURABLE_WRITES = true;

/*
################################################
################### TYPES ######################
################################################
*/
CREATE TYPE example_keyspace.type_example(
	member1 text,
	member2 text,
	member3 text,
	member4 text
);


/*
################################################
################# FUNCTIONS ####################
################################################
*/
CREATE FUNCTION example_keyspace.function_example(param1 double)
CALLED ON NULL INPUT
RETURNS double LANGUAGE java AS
$$

	return Double.valueOf(Math.log(param1.doubleValue()));

$$;

CREATE FUNCTION example_keyspace.function_state(param1 double, param2 double)
CALLED ON NULL INPUT
RETURNS double LANGUAGE java AS
$$

	return Double.valueOf(Math.log(param1.doubleValue()));

$$;


/*
################################################
################# AGGREGATES ###################
################################################
*/
CREATE AGGREGATE example_keyspace.aggregate_example(double)
SFUNC function_state
STYPE double
FINALFUNC function_example
INITCOND 0.0;


/*
################################################
################### TABLES #####################
################################################
*/
CREATE TABLE example_keyspace.table_collections (
	c_frozen_map frozen<map<text, frozen<map<int, int>>>>,
	c_frozen_set frozen<set<text>>,
	c_frozen_tuple frozen<tuple<text, text, int>>,
	c_list_int list<int>,
	c_list_text list<text>,
	c_map_int map<int, int>,
	c_map_text map<text, text>,
	c_set_int set<int>,
	c_set_text set<text>,
	c_tuple frozen<tuple<text, text, int>>,
	cck1 text,
	cck2 text,
	pk1 text,
	pk2 text,
	PRIMARY KEY((pk1, pk2), cck1, cck2)
) WITH 	dclocal_read_repair_chance = 0.1 AND
	gc_grace_seconds = 864000 AND
	bloom_filter_fp_chance = 0.01 AND
	caching = { 'keys': 'ALL', 'rows_per_partition': 'NONE' } AND
	comment = '' AND
	compaction = { 'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4' } AND
	compression = { 'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor' } AND
	default_time_to_live = 0 AND
	speculative_retry = '99PERCENTILE' AND
	min_index_interval = 128 AND
	max_index_interval = 2048 AND
	crc_check_chance = 1;

CREATE TABLE example_keyspace.table_simple (
	c_ascii ascii,
	c_bigint bigint,
	c_blob blob,
	c_boolean boolean,
	c_date date,
	c_decimal decimal,
	c_double double,
	c_float float,
	c_int int,
	cck1 text,
	cck2 text,
	pk1 text,
	pk2 text,
	PRIMARY KEY((pk1, pk2), cck1, cck2)
) WITH 	dclocal_read_repair_chance = 0.1 AND
	gc_grace_seconds = 864000 AND
	bloom_filter_fp_chance = 0.01 AND
	caching = { 'keys': 'ALL', 'rows_per_partition': 'NONE' } AND
	comment = '' AND
	compaction = { 'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4' } AND
	compression = { 'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor' } AND
	default_time_to_live = 0 AND
	speculative_retry = '99PERCENTILE' AND
	min_index_interval = 128 AND
	max_index_interval = 2048 AND
	crc_check_chance = 1;


CREATE INDEX table_simple_c_int_idx ON example_keyspace.table_simple(c_int);


/*
################################################
############# MATERIALIZED VIEWS ###############
################################################
*/
CREATE MATERIALIZED VIEW example_keyspace.table_collections_view
AS SELECT
c_frozen_map, c_frozen_set, c_frozen_tuple, c_list_int, c_list_text, c_map_int, c_map_text, c_set_int, c_set_text, c_tuple, cck1, cck2, pk1, pk2
FROM example_keyspace.table_collections
WHERE pk1 IS NOT NULL AND pk2 IS NOT NULL AND cck1 IS NOT NULL AND cck2 IS NOT NULL AND c_frozen_map IS NOT NULL AND c_frozen_set IS NOT NULL AND c_frozen_tuple IS NOT NULL AND c_list_int IS NOT NULL AND c_list_text IS NOT NULL AND c_map_int IS NOT NULL AND c_map_text IS NOT NULL AND c_set_int IS NOT NULL AND c_set_text IS NOT NULL AND c_tuple IS NOT NULL
PRIMARY KEY((pk1, pk2), cck1, cck2)
WITH
	dclocal_read_repair_chance = 0.1 AND
	gc_grace_seconds = 864000 AND
	bloom_filter_fp_chance = 0.01 AND
	caching = { 'keys': 'ALL', 'rows_per_partition': 'NONE' } AND
	comment = '' AND
	compaction = { 'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4' } AND
	compression = { 'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor' } AND
	default_time_to_live = 0 AND
	speculative_retry = '99PERCENTILE' AND
	min_index_interval = 128 AND
	max_index_interval = 2048 AND
	crc_check_chance = 1;
