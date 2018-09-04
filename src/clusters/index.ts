import { from, Subject } from "rxjs";
import { concatMap } from "rxjs/operators";
import { CassandraClient } from "../cassandra-client/index";
import { InputParser } from "../parser";
import { CassandraCluster, CassandraClusterData, ValidatedConfigClusterItem } from "../types";

import { ParserRuleContext, RuleContext } from "antlr4ts";
import * as cassandra from "cassandra-driver";

export interface CassandraClientCache {
    client: CassandraClient;
    error: boolean;
    structure?: CassandraClusterData;
    name: string;
}

export class Clusters {

    public eventStructureChange = new Subject<number>();
    private clusters: CassandraCluster[] = null;
    private clientsCache: CassandraClientCache[] = [];

    private parser = new InputParser();
    constructor(private configItems: ValidatedConfigClusterItem[]) {
        this.clientsCache = configItems.map(() => null); // null array

        this.eventStructureChange.pipe().subscribe((index: number) => {

            this.clientsCache[index] = null;

        });
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
    public getClusterIndex(clusterName: string): number {

        const i = this.configItems.findIndex((c) => c.name === clusterName);

        return i;

    }
    public getClientByClusterName(clusterName: string): Promise<CassandraClient> {

        const i = this.getClusterIndex(clusterName);
        return this.getClient(i);

    }
    public execute(clusterName: string, cql: string): Promise<cassandra.types.ResultSet> {
        return new Promise((resolve, reject) => {

            const i = this.getClusterIndex(clusterName);
            const isModifier = this.isStructureModifierStatement(cql);

            if (isModifier) {
                this.eventStructureChange.next(i);
            }

            from(this.getClientByClusterName(clusterName)).pipe(
                concatMap((client) => {
                    return client.execute(cql);
                }),
            ).subscribe((resultset) => {
                resolve(resultset);
            }, (e) => {
                reject(e);
            });

        });
    }

    private isStructureModifierStatement(cql: string) {
        const root = this.parser.parse(cql);
        let res = false;
        try {

            const cqls = root.cqls();

            if (cqls.childCount === 0) {
                return false;
            }

            const children = cqls.children;

            res = children.reduce((acc, curr: ParserRuleContext) => {

                if (curr.childCount === 0) {
                    return acc;
                }

                const f = curr.children.filter((item: ParserRuleContext) => {
                    const className = item.constructor.name;
                    const pos = className.search(/^drop|alter|create|grant/i);
                    const modifier = pos === 0 ? true : false;

                    return modifier;
                });

                if (f.length > 0) {
                    return true;
                }

                return acc;
            }, false);

        } catch (e) {

        }
        return res;
    }
}
