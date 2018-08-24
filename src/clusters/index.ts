import { from } from "rxjs";
import { concatMap } from "rxjs/operators";
import { CassandraClient } from "../cassandra-client/index";
import { CassandraCluster, CassandraClusterData, ValidatedConfigClusterItem } from "../types";
export interface CassandraClientCache {
    client: CassandraClient;
    error: boolean;
    structure?: CassandraClusterData;
    name: string;
}

export class Clusters {
    private clusters: CassandraCluster[] = null;
    private clientsCache: CassandraClientCache[] = [];
    constructor(private configItems: ValidatedConfigClusterItem[]) {
        this.clientsCache = configItems.map(() => null); // null array
    }
    public getClient(index: number, force: boolean = false): Promise<CassandraClient> {
        return new Promise((resolve, reject) => {

            if (index < 0 || index > (this.configItems.length - 1)) {
                reject("out_of_bounds");
            }

            const cache = this.clientsCache[index];
            if (cache != null && cache.error === false && force === false) {
                resolve(cache.client);
                return;
            }

            const c = this.configItems[index];
            const client = new CassandraClient(c);

            client.connect()
                .then(() => {

                    this.clientsCache[index] = {
                        error: false,
                        client,
                        name: c.name,
                    };

                    resolve(client);
                }).catch((e) => {
                    reject(e);
                });
        });

    }
    public getStructure(index: number, force: boolean = false): Promise<CassandraClusterData> {
        return new Promise((resolve, reject) => {
            if (index < 0 || index > (this.configItems.length - 1)) {
                reject("out_of_bounds");
            }

            const cache = this.clientsCache[index];
            if (cache != null && cache.structure && cache.error === false && force === false) {
                resolve(cache.structure);
                return;
            }

            from(this.getClient(index)).pipe(
                concatMap((client) => client.getStructure()),
            ).subscribe((structure) => {

                // store to cache
                this.clientsCache[index].structure = structure;

                resolve(structure);
            }, (e) => {
                console.error(e);
                reject(e);
            });

        });
    }
    public getClusters(): CassandraCluster[] {

        if (this.configItems.length === 0) {
            return [];
        }

        return this.configItems.map((item, i) => {
            return {
                name: item.name,
                index: i,
            };
        });

    }
    public getClusterName(index: number): string {
        if (index < 0 || index > (this.configItems.length - 1)) {
            return null;
        }
        return this.configItems[index].name;
    }

}
