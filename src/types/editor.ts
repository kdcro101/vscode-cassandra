
export interface WorkbenchCqlStatement {
    id: string;
    body: string; // cql statements
    filename: string;
    keyspace?: string;
    clusterName: string;
}
