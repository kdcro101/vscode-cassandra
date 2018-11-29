
import "jasmine";
import { CassandraClusterData } from "../../types";
import { TestStatic } from "./helpers";

describe("Checking cluster", () => {

    let structure: CassandraClusterData = null;

    beforeAll((done) => {
        structure = TestStatic.structure;
        done();
    });
    beforeAll((done) => {
        TestStatic.client.stateConnected.pipe().subscribe((state) => {
            expect(state).toBe(true);
            done();
        }, (e) => {
            done.fail(e);
        });
    });
    describe("Checking structure", () => {
        it("should have keyspaces", (done) => {
            expect(structure).not.toBeUndefined();
            expect(structure).not.toBeNull();
            expect(structure).not.toBe(null);
            expect(structure).not.toEqual(null);
            expect(Array.isArray(structure.keyspaces)).toBe(true);
            expect(structure.keyspaces.length).toBeGreaterThan(0);
            done();

        });
        it("should have system keyspaces", (done) => {
            const keyspaces = structure.keyspaces;

            expect(keyspaces.find((k) => k.name === "system")).not.toEqual(null);
            expect(keyspaces.find((k) => k.name === "system")).not.toBeUndefined();
            expect(keyspaces.find((k) => k.name === "system_auth")).not.toEqual(null);
            expect(keyspaces.find((k) => k.name === "system_auth")).not.toBeUndefined();
            expect(keyspaces.find((k) => k.name === "system_distributed")).not.toEqual(null);
            expect(keyspaces.find((k) => k.name === "system_distributed")).not.toBeUndefined();
            expect(keyspaces.find((k) => k.name === "system_traces")).not.toEqual(null);
            expect(keyspaces.find((k) => k.name === "system_traces")).not.toBeUndefined();
            expect(keyspaces.find((k) => k.name === "system_schema")).not.toEqual(null);
            expect(keyspaces.find((k) => k.name === "system_schema")).not.toBeUndefined();

            done();

        });

    });
});
