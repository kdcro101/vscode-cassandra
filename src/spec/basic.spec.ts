
import "jasmine";
import { parse } from "querystring";
import { CassandraClient } from "../cassandra-client/index";
import { InputParser } from "../parser";
import { CassandraClusterData } from "../types";
import { InputParseResult } from "../types/parser";
import { TestStatic } from "./helpers";

describe("Basic tests", () => {

    let client: CassandraClient = null;
    let structure: CassandraClusterData = null;
    let parser: InputParser = null;

    beforeAll((done) => {
        client = TestStatic.client;
        structure = TestStatic.structure;
        parser = new InputParser();
        done();
    });
    it("should have Client and Structure", (done) => {
        expect(client).not.toBeNull();
        expect(structure).not.toBeNull();
        done();
    });

    describe("CQL - Basic", () => {

        it("should parse ALTER KEYSPACE", (done) => {
            const q = `ALTER KEYSPACE example_keyspace
            WITH REPLICATION = {
                'class': 'org.apache.cassandra.locator.SimpleStrategy',
                'replication_factor': '1'
            }
            AND DURABLE_WRITES = true;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });

        });
        it("should parse ALTER MATERIALIZED VIEW", (done) => {

            const q = `ALTER MATERIALIZED VIEW example_keyspace.table_collections_view
                    WITH
                        dclocal_read_repair_chance = 0.1 AND
                        gc_grace_seconds = 864000 AND
                        bloom_filter_fp_chance = 0.01 AND
                        caching = { 'keys': 'ALL', 'rows_per_partition': 'NONE' } AND
                        comment = '' AND
                        compaction = { 'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy',
                         'max_threshold': '32', 'min_threshold': '4' } AND
                        compression = { 'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor' } AND
                        default_time_to_live = 0 AND
                        speculative_retry = '99PERCENTILE' AND
                        min_index_interval = 128 AND
                        max_index_interval = 2048 AND
                        crc_check_chance = 1;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse ALTER ROLE", (done) => {
            const q = `ALTER ROLE coach WITH PASSWORD='bestTeam';`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse ALTER TABLE ADD", (done) => {
            const q = `ALTER TABLE example_keyspace.table_collections ADD new_column_name TEXT;`;
            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse ALTER TABLE DROP", (done) => {
            const q = `ALTER TABLE example_keyspace.table_collections DROP column_to_drop;`;
            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse ALTER TYPE", (done) => {
            const q = `ALTER TYPE example_keyspace.type_example
                        ADD
                            new_member text
                        RENAME
                            member1 TO member1 AND
                            member2 TO member2 AND
                            member3 TO member3 AND
                            member4 TO member4
                        ;`;
            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse ALTER USER", (done) => {
            const q = `ALTER USER moss WITH PASSWORD 'bestReceiver';`;
            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse BATCH", (done) => {
            const q = `BEGIN BATCH USING TIMESTAMP 1481124356754405
                        INSERT INTO example_keyspace.table_simple(
                        pk1,
                        pk2,
                        cck1,
                        cck2,
                        c_ascii,
                        c_bigint,
                        c_blob,
                        c_boolean,
                        c_date,
                        c_decimal,
                        c_double,
                        c_float,
                        c_int
                        )
                        VALUES(
                        '',
                        '',
                        '',
                        '',
                        '',
                        0,
                        NULL,
                        false,
                        '2018-11-02',
                        0.0,
                        0.0,
                        0.0,
                        0
                        );
                      APPLY BATCH;`;
            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse CREATE AGGREGATE", (done) => {
            const q = `CREATE AGGREGATE example_keyspace.aggregate_example(double)
                        SFUNC function_state
                        STYPE double
                        FINALFUNC function_example
                        INITCOND 0;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse CREATE INDEX", (done) => {
            const q = `CREATE INDEX table_simple_c_int_idx ON  example_keyspace.table_simple(c_int);`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });

        });
        it("should parse CREATE FUNCTION", (done) => {
            const q = `CREATE FUNCTION IF NOT EXISTS example_keyspace.function_state (param1 double,param2 double)
                CALLED ON NULL INPUT
                RETURNS double LANGUAGE java AS
                $$
                    return Double.valueOf(Math.log(param1.doubleValue()));
                $$;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });

        });
        it("should parse CREATE KEYSPACE", (done) => {
            const q = `CREATE KEYSPACE keyspace_name
                        WITH REPLICATION = {
                            'class': 'SimpleStrategy',
                            'replication_factor': 1
                        }
                        AND DURABLE_WRITES = true;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse CREATE MATERIALIZED VIEW", (done) => {
            const q = `CREATE MATERIALIZED VIEW example_keyspace.table_simple_view
                AS SELECT
                pk1, pk2, cck1, cck2, c_ascii, c_bigint, c_blob, c_boolean, c_date, c_decimal, c_double, c_float, c_int
                FROM example_keyspace.table_simple
                WHERE pk1 IS NOT NULL AND pk2 IS NOT NULL AND cck1 IS NOT NULL AND cck2 IS NOT NULL AND
                c_ascii IS NOT NULL AND c_bigint IS NOT NULL AND
                c_blob IS NOT NULL AND c_boolean IS NOT NULL AND
                c_date IS NOT NULL AND c_decimal IS NOT NULL AND c_double IS NOT NULL AND c_float IS NOT
                NULL AND c_int IS NOT NULL
                PRIMARY KEY((pk1, pk2), cck1, cck2);
            `;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse CREATE TABLE", (done) => {
            const q = `CREATE TABLE example_keyspace.table_name(
                        pk text,
                        cck text,
                        data text,
                        PRIMARY KEY(pk,cck)
                    );`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse CREATE TYPE", (done) => {
            const q = `CREATE TYPE example_keyspace.type_name(
                       member1 text,
                       member2 text,
                       member3 text,
                       member4 text
                    );`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse CREATE ROLE", (done) => {
            const q = `CREATE ROLE coach
                       WITH PASSWORD = 'All4One2day!'
                       AND LOGIN = true;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse DELETE", (done) => {
            const q = `DELETE FROM example_keyspace.table_simple
                       WHERE pk1='' AND pk2='' AND cck1='' AND cck2='';`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse DROP AGGREGATE", (done) => {
            const q = `DROP AGGREGATE example_keyspace.aggregate_example;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse DROP FUNCTION", (done) => {
            const q = `DROP FUNCTION example_keyspace.function_example;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse DROP INDEX", (done) => {
            const q = `DROP INDEX example_keyspace.table_simple_c_int_idx;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse DROP KEYSPACE", (done) => {
            const q = `DROP KEYSPACE example_keyspace;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse DROP MATERIALIZED VIEW", (done) => {
            const q = `DROP MATERIALIZED VIEW example_keyspace.table_collections_view;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse DROP ROLE", (done) => {
            const q = `DROP ROLE IF EXISTS team_manager;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse DROP TABLE", (done) => {
            const q = `DROP TABLE example_keyspace.table_simple;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse DROP TYPE", (done) => {
            const q = `DROP TYPE example_keyspace.type_example;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse GRANT", (done) => {
            const q = `GRANT SELECT ON ALL KEYSPACES TO coach;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse INSERT", (done) => {
            const q = `INSERT INTO example_keyspace.table_collections(
                        pk1,
                        pk2,
                        cck1,
                        cck2,
                        c_frozen_map,
                        c_frozen_set,
                        c_frozen_tuple,
                        c_list_int,
                        c_list_text,
                        c_map_int,
                        c_map_text,
                        c_set_int,
                        c_set_text,
                        c_tuple
                    )
                    VALUES(
                        '',
                        '',
                        '',
                        '',
                        {'': {0: 0}},
                        {''},
                        ('', '', 0),
                        [0],
                        [''],
                        {0: 0},
                        {'': ''},
                        {0},
                        {''},
                        ('', '', 0)
                    );`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse LIST PERMISSIONS", (done) => {
            const q = `LIST ALL ON example_keyspace.table_collections`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse LIST ROLES", (done) => {
            const q = `LIST ROLES OF manager;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse REVOKE", (done) => {
            const q = `REVOKE SELECT ON example_keyspace.table_collections FROM manager;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse SELECT", (done) => {
            const q = `  SELECT pk1, pk2, cck1, cck2, c_frozen_map, c_frozen_set, c_frozen_tuple,
                            c_list_int, c_list_text, c_map_int, c_map_text, c_set_int, c_set_text, c_tuple
                            FROM example_keyspace.table_collections
                            WHERE pk1='' AND pk2='' AND cck1='' AND cck2=''
                            LIMIT 500;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse TRUNCATE", (done) => {
            const q = `TRUNCATE example_keyspace.table_collections`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse UPDATE", (done) => {
            const q = `UPDATE example_keyspace.table_collections
                        SET
                            c_frozen_map={'': {0: 0}},
                            c_frozen_set={''},
                            c_frozen_tuple=('', '', 0),
                            c_list_int=[0],
                            c_list_text=[''],
                            c_map_int={0: 0},
                            c_map_text={'': ''},
                            c_set_int={0},
                            c_set_text={''},
                            c_tuple=('', '', 0)
                        WHERE pk1='' AND pk2='' AND cck1='' AND cck2='';`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });
        it("should parse USE", (done) => {
            const q = `USE example_keyspace;`;

            parseQuery(q).then((result) => {
                expect(result.errors.length).toBe(0);
                done();
            }).catch((e) => {
                done.fail(e);
            });
        });

    });

    function parseQuery(code: string): Promise<InputParseResult> {
        return new Promise((resolve, reject) => {
            try {
                const res = parser.parse(code, structure, null);
                resolve(res);
            } catch (e) {
                reject(e);
            }

        });
    }

});
