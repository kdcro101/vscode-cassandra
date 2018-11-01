
import "jasmine";
import { CassandraClient } from "../cassandra-client/index";
import { CassandraClusterData } from "../types";
import { TestStatic } from "./helpers";

describe("Basic tests", () => {

    let client: CassandraClient = null;
    let structure: CassandraClusterData = null;

    beforeAll((done) => {
        client = TestStatic.client;
        structure = TestStatic.structure;
        done();
    });
    it("should have Client and Structure", (done) => {
        expect(client).not.toBeNull();
        expect(structure).not.toBeNull();
        done();
    });

    describe("CQL - Basic", () => {
        it("should parse SELECT", (done) => {
            done();
        });
        it("should parse INSERT", (done) => {
            done();
        });
        it("should parse UPDATE", (done) => {
            done();
        });
    });

});
