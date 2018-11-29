import { CassandraClient } from "../../../cassandra-client/index";
import { Clusters } from "../../../clusters";
import { CassandraClusterData } from "../../../types/index";
import { configGood } from "../base/config";

const config = configGood;

export class TestStatic {
    public static clusters: Clusters = null;
    public static structure: CassandraClusterData = null;
    public static client: CassandraClient = null;
    public static clusterIndex: number = 0;
}
beforeAll((done) => {

    console.log("##################");
    console.log("Initializing tests");
    console.log("##################");

    TestStatic.clusters = new Clusters(config);
    const clusterName = TestStatic.clusters.getClusterName(TestStatic.clusterIndex);

    TestStatic.clusters.getClientAndStructure(clusterName)
        .then((result) => {
            TestStatic.client = result[0];
            TestStatic.structure = result[1];
            done();

        }).catch((e) => {
            console.log(e);
            done.fail(e);
        });
});
afterAll((done) => {

    console.log("############");
    console.log("Ending tests");
    console.log("############");

    TestStatic.client.destroy()
        .then((result) => {
            console.log("Destroying client");
            done();
        }).catch((e) => {
            done.fail("failed to destroy client");
        });
});
