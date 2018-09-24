import { CassandraColumnType, CassandraTable } from "./index";

export type CqlStatementColumnType = CassandraColumnType | "not_found" | null;

export interface InputParseResult {
    errors: CqlParserError[];
    analysis: CqlAnalysis;
}

export interface CqlStatementColumn {
    kind: CqlStatementColumnType;
    kindIndex: number;
    kindCount: number;
    type: string;
    charStart?: number;
    charStop?: number;
    text: string;
    clustering_order?: string;
}

export interface AnalyzedStatement {
    type: CqlStatementType;
    charStart?: number;
    charStop?: number;
    limit?: number;
    keyspace?: string;
    table?: string;
    text?: string;
    tableStruct?: CassandraTable;
    columns: CqlStatementColumn[];

}
export interface CqlAnalysis {
    statements: AnalyzedStatement[];
    alterData: boolean;
    alterStructure: boolean;
    selectData: boolean;
    error?: CqlAnalysisError;
    cluserName: string;
}
export enum CqlAnalysisError {
    SELECT_AND_ALTER = "SELECT_AND_ALTER",
    MULTIPLE_SELECT = "MULTIPLE_SELECT",
    NO_KEYSPACE = "NO_KEYSPACE",
}

export type CqlStatementType = "empty" |
    "alterKeyspace" | "alterMaterializedView" | "alterRole" | "alterTable" | "alterType" | "alterUser"
    | "applyBatch" | "createAggregate" | "createFunction" | "createIndex" | "createKeyspace" | "createMaterializedView"
    | "createRole" | "createTable" | "createTrigger" | "createType" | "createUser" | "delete" | "dropAggregate"
    | "dropFunction" | "dropIndex" | "dropKeyspace" | "dropMaterializedView" | "dropRole" | "dropTable" | "dropTrigger"
    | "dropType" | "dropUser" | "grant" | "insert" | "listPermissions" | "listRoles" | "revoke" | "select" | "truncate"
    | "update" | "use";

export interface CqlParserError {
    name: string;
    token: TokenData;
    line: number;
    linePos: number;
}

export interface TokenData {
    text: string;
    type: number;
    line: number;
    charPositionInLine: number;
    channel: number;
    tokenIndex: number;
    startIndex: number;
    stopIndex: number;
}
