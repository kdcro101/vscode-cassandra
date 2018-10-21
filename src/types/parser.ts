import { CqlAnalyzerListener } from "../parser/listeners/cql-analyzer";
import { CassandraColumnType, CassandraKeyspace, CassandraMaterializedView, CassandraTable, CassandraType } from "./index";

export type ParserTokenFamily = "keyspace" | "table";

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
export interface CqlStatementExpression {
    charStart?: number;
    charStop?: number;
    text: string;
}

export interface AnalyzedStatementRange {
    start: number;
    stop: number;
    text: string;
}
export interface AnalyzedStatement {
    type: CqlStatementType;
    charStart?: number;
    charStop?: number;
    limit?: number;
    keyspace?: string;
    keyspaceAmbiental?: string;
    table?: string;
    text?: string;
    // tableData?: CassandraTable;
    // keyspaceData?: CassandraKeyspace;
    columns: CqlStatementColumn[];
    expressions: CqlStatementExpression[];
    // tokens?: { [key in ParserTokenFamily]: AnalyzedStatementToken[] };
    rules?: AnalyzedStatementRules;
}

export interface AnalyzedStatementRules {
    baseTableSpec?: RuleTableSpec;
    baseColumns?: AnalyzedStatementToken[];
    tableSpec?: RuleTableSpec;
    ViewSpec?: RuleViewSpec;
    objectUnknownSpec?: RuleObjectUnknownSpec;

}
export interface RuleTableSpec {
    keyspaceToken?: AnalyzedStatementToken;
    tableToken?: AnalyzedStatementToken;
    keyspaceAmbiental?: string;
}
export interface RuleViewSpec {
    keyspaceToken?: AnalyzedStatementToken;
    viewToken?: AnalyzedStatementToken;
    keyspaceAmbiental?: string;
}
export interface RuleObjectUnknownSpec {
    keyspace?: AnalyzedStatementToken;
    objectUnknown?: AnalyzedStatementToken;
}

export interface AnalysisReferences {
    objects: { [keyspace: string]: AnalysisKeyspaceReferences };
    keyspaces: string[];
}
export interface AnalysisKeyspaceReferences {
    tables?: { [name: string]: CassandraTable };
    types?: { [name: string]: CassandraType };
    views?: { [name: string]: CassandraMaterializedView };
}
export interface AnalysisKeyspaceReferenceType {
    tables: CassandraTable;
    types: CassandraType;
    views: CassandraMaterializedView;
}

export interface CqlAnalysis {
    statements: AnalyzedStatement[];
    statementRanges: AnalyzedStatementRange[];
    references?: AnalysisReferences;
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

export interface AnalyzedStatementToken {
    charStart: number;
    charStop: number;
    text: string;
}
