import { QueryExecuteResult } from "../cassandra-client/index";

export interface WorkbenchCqlStatement {
    id: string;
    body: string; // cql statements
    filename: string;
    keyspace?: string;
    clusterName: string;

}
export interface WorkbenchEditor {
    statement: WorkbenchCqlStatement;
    resultset: QueryExecuteResult;
    errors?: any[];
    executed: boolean;
    response: any;
}
