export type WorkbenchCqlStatementSource = "storage" | "action";
export interface WorkbenchCqlStatement {
    id: string;
    body: string; // cql statements
    filename: string;
    keyspace?: string;
    clusterName: string;
    source: WorkbenchCqlStatementSource;
    fsPath?: string;
    modified: boolean;
}
