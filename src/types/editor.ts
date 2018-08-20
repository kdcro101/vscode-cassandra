
export interface CqlEditor {
    id: string;
    cql: string;
    resultset: any[];
    filename: string;
    keyspace?: string;
    cluster?: string;
    table?: string;
}
