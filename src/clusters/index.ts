import { CassandraClient } from "../cassandra-client/index";
import { CassandraCluster, ValidatedConfigClusterItem } from "../types";
export interface CassandraClientCache {
    client: CassandraClient;
    error: boolean;
}
export class Clusters {
    private clusters: CassandraCluster[] = null;
    private clientsCache: CassandraClientCache[] = [];
    constructor(private configItems: ValidatedConfigClusterItem[]) {
        this.clientsCache = configItems.map(() => null); // null array
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
            const cache = this.clientsCache[index];
            if (cache != null && cache.error === false) {
                return cache.client;
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
