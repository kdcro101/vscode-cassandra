import { CassandraClient } from "../cassandra-client/index";
import { CassandraCluster, ValidatedConfigClusterItem } from "../types";

export class Clusters {
    private clusters: CassandraCluster[] = null;
    private clients: CassandraClient[] = [];
    constructor(private configItems: ValidatedConfigClusterItem[]) {
        this.clients = configItems.map(() => null); // null array
    }
    // private async collectClusterData(config: ValidatedConfigClusterItem[]) {

    //     this.clusters = config.map((i) => null);

    //     for (let i = 0; i < config.length; i++) {
    //         const c = config[i];

    //         const struct = await (new CassandraClient(c)).getStructure();
    //         this.clusters[i] = struct;

    //     }

    //     this.stateStructuresReady.next(true);

    // }
    private getClient(index: number): Promise<CassandraClient> {
        return new Promise((resolve, reject) => {
            if (this.clients[index] != null) {
                return this.clients[index];
            }

            const c = this.configItems[index];
            const client = new CassandraClient(c);

            client.connect()
                .then(() => {
                    return client;
                }).catch((e) => {
                    reject(e);
                });
        });

    }
}
