import * as cassandra from "cassandra-driver";
import { from, Subject } from "rxjs";
import { concatMap, tap } from "rxjs/operators";
import { CassandraClient, ColumnInfo } from "../cassandra-client/index";
import { InputParser } from "../parser";
import { AnalyzedStatement, CqlAnalysis } from "../parser/listeners/cql-analyzer";
import { CassandraCluster, CassandraClusterData, ValidatedConfigClusterItem } from "../types";

export interface CassandraClientCache {
    client: CassandraClient;
    error: boolean;
    structure?: CassandraClusterData;
    name: string;
}
export interface ClusterExecuteStatementError {
    statementIndex: number;
    error: any;
    text?: string;
}
export interface ClusterExecuteStatementResult {
    statementIndex: number;
    result: cassandra.types.ResultSet;
}
export interface ClusterExecuteStatementColumns {
    statementIndex: number;
    list: ColumnInfo[];
}
export interface ClusterExecuteResults {
    results: ClusterExecuteStatementResult[];
    analysis: CqlAnalysis;
    errors: ClusterExecuteStatementError[];
    columns: ClusterExecuteStatementColumns[];
}

export class Clusters {

    public eventStructureChange = new Subject<number>();
    // private clusters: CassandraCluster[] = null;
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
    public execute(clusterName: string, cql: string): Promise<ClusterExecuteResults> {
        return new Promise((resolve, reject) => {

            const i = this.getClusterIndex(clusterName);
            // const isModifier = this.isStructureModifierStatement(cql);

            // if (isModifier) {
            //     this.eventStructureChange.next(i);
            // }
            // const a = this.parser.analyze(cql);
            let clusterStruct: CassandraClusterData = null;
            let analysis: CqlAnalysis = null;
            from(this.getStructure(i)).pipe(
                concatMap((d) => {
                    clusterStruct = d;
                    analysis = this.parser.analyze(cql, clusterStruct);

                    if (analysis.selectData && (analysis.alterData || analysis.alterStructure)) {
                        return Promise.reject("select_only");
                    }
                    return Promise.resolve();
                }),
                concatMap(() => this.getClientByClusterName(clusterName)),
                concatMap((client) => this.executeCqlAnalysis(client, analysis)),
            ).subscribe((result) => {
                // const out: ClusterExecuteResults = {
                //     results: resultset,
                //     structure: s,
                //     analysis: a,
                // };
                resolve(result);
            }, (e) => {
                reject(e);
            });

        });
    }
    private async executeCqlAnalysis(client: CassandraClient, analysis: CqlAnalysis): Promise<ClusterExecuteResults> {

        const statements = analysis.statements;

        const out: ClusterExecuteResults = {
            results: [],
            analysis,
            errors: [],
            columns: [],
        };

        for (let i = 0; i < statements.length; i++) {
            const s = analysis.statements[i];
            const res = await this.executeCqlAnalysisStatement(client, s);

            const result = res[0];
            const error = res[1];
            const columns = res[2];

            if (result) {
                out.results.push({
                    statementIndex: i,
                    result,
                });
            }

            if (error) {
                out.errors.push({
                    statementIndex: i,
                    error,
                });
            }
            if (columns) {
                out.columns.push({
                    statementIndex: i,
                    list: columns,
                });
            }

        }

        return Promise.resolve(out);

    }
    private executeCqlAnalysisStatement(
        client: CassandraClient,
        statement: AnalyzedStatement): Promise<[cassandra.types.ResultSet, any, ColumnInfo[]]> {

        return new Promise((resolve, reject) => {
            const cql = statement.text;

            client.execute(cql)
                .then((result) => {
                    const hasColumns = result.columns.length > 0 ? true : false;
                    const columns = hasColumns ? result.columns.map((c) => {
                        const out: ColumnInfo = {
                            name: c.name,
                            type: client.getNativeTypes((c as any).type.code),
                        };
                        return out;
                    }) : null;

                    resolve([result, null, columns]);
                }).catch((e) => {
                    resolve([null, e, null]);
                });

        });
    }

}
