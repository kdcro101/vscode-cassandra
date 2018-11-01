
import "jasmine";
import { CassandraClient } from "../cassandra-client/index";
import { Clusters } from "../clusters";
import { CassandraClusterData } from "../types";
import { configGood } from "./base/config";

describe("connect", () => {

    const spyClient = jasmine.createSpy("client");
    const spyStructure = jasmine.createSpy("structure");
    const config = configGood;
    let clusters: Clusters = null;
    const clusterIndex: number = 0;
    let client: CassandraClient = null;
    let structure: CassandraClusterData = null;

    beforeAll((done) => {

        console.log("setup cluster");

        clusters = new Clusters(config);
        const clusterName = clusters.getClusterName(clusterIndex);

        clusters.getClientAndStructure(clusterName)
            .then((result) => {
                client = result[0];
                structure = result[1];
                spyClient(client);
                spyStructure(structure);
                console.log("\t setup cluster done");
                done();

            }).catch((e) => {
                done.fail(e);
            });

    });

    beforeAll((done) => {
        console.log("check cluster");
        expect(spyClient).toHaveBeenCalled();
        expect(spyStructure).toHaveBeenCalled();

        client.stateConnected.pipe().subscribe((state) => {
            expect(state).toBe(true);
            console.log("\tcheck cluster done");
            done();
        }, (e) => {
            done.fail(e);
        });

    });

    describe("keyspaces", () => {
        it("should have keyspaces", (done) => {
            expect(structure).not.toBeUndefined();
            expect(structure).not.toBeNull();
            expect(structure).not.toBe(null);
            expect(structure).not.toEqual(null);
            expect(structure.keyspaces.length).toBeGreaterThan(0);
            done();

        });
    });

    afterAll((done) => {

        client.destroy()
            .then((result) => {
                console.log("Destroying client");
                done();
            }).catch((e) => {
                done.fail("failed to destroy client");
            });
    });

});
