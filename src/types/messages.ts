import { ClusterExecuteResults } from "../clusters";
import { CompletitionOutput } from "../completition";
import { CqlParserError } from "../parser";
import { OpenStatementResultType, SaveStatementResultType } from "../persistence/index";
import { WorkbenchCqlStatement } from "./editor";
import { HistroyItem } from "./history";
import { CassandraCluster, CassandraClusterData } from "./index";

export interface ProcMessageList {
    w2e_getClustersRequest: boolean;
    w2e_getClusterStructRequest: ClusterStructureRequest;
    w2e_getHistoryRequest: MessageWithId;
    w2e_onReady: boolean;
    w2e_checkInputRequest: CheckInputRequest;
    w2e_persistEditors: WorkbenchCqlStatement[];
    w2e_autocompleteRequest: AutocompleteRequest;
    w2e_executeQueryRequest: ExecuteQueryRequest;
    w2e_executeDataChangeRequest: ExecuteDataChangeRequest;
    w2e_statementSaveRequest: StatementSaveRequest;
    w2e_statementOpenRequest: MessageWithId;

    e2w_goState: WebviewStateParams;
    e2w_getClusterStructResponse: ClusterStructureResponse;
    e2w_getHistoryResponse: HistoryGetResponse;
    e2w_editorCreate: EditorCreateParams;
    e2w_getClustersResponse: CassandraCluster[];
    e2w_autocompleteResponse: AutocompleteResponse;
    e2w_checkInputResponse: CheckInputResponse;
    e2w_executeQueryResponse: ExecuteQueryResponse;
    e2w_executeDataChangeResponse: ExecuteDataChangeResponse;
    e2w_statementSaveResponse: StatementSaveResponse;
    e2w_statementOpenResponse: StatementOpenResponse;
}
export type ProcMessageType = keyof ProcMessageList;
export interface ProcMessage {
    name: ProcMessageType;
    data: any;
}
export interface ProcMessageStrict<T extends keyof ProcMessageList> {
    name: T;
    data: ProcMessageList[T];
}

export interface MessageWithId {
    id: string;
    error?: any;
}

export interface WebviewStateParams {
    name: string;
    params: { [key: string]: any };
}
export interface EditorCreateParams {
    statement: WorkbenchCqlStatement;
    execute: boolean;
}
export interface AutocompleteRequest {
    id: string;
    partial: string;
}
export interface AutocompleteResponse {
    id: string;
    result: CompletitionOutput;
}

export interface AutocompleteItem {
    type?: string;
    label: string;
}
export interface CheckInputRequest {
    id: string;
    input: string;
}
export interface CheckInputResponse {
    id: string;
    errors: CqlParserError[];
}
export interface ExecuteQueryRequest {
    id: string;
    clusterName: string;
    keyspaceInitial: string;
    cql: string;
}
export interface ExecuteQueryResponse {
    id: string;
    result: ClusterExecuteResults;
    error?: any;

}
export interface ClusterStructureRequest extends MessageWithId {
    clusterName: string;
}
export interface ClusterStructureResponse extends MessageWithId {
    result: CassandraClusterData;
}

export interface DataChangeItemPrimaryKey {
    [name: string]: any;
}
export type DataChangeType = "rowDelete" | "cellUpdate";
export interface DataChangeItem {
    clusterName: string;
    keyspace: string;
    table: string;
    type: DataChangeType;
    primaryKeyValues: DataChangeItemPrimaryKey;
    row: number;
    column?: string;
    valueOld?: any;
    valueNew?: any;
}
export interface ExecuteDataChangeRequest extends MessageWithId {
    change: DataChangeItem;
}
export interface ExecuteDataChangeResponse extends MessageWithId {
    result: DataChangeItemResult;
}
export interface DataChangeItemResult {

    success: boolean;
    error?: any;
}

export interface StatementSaveRequest extends MessageWithId {
    statement: WorkbenchCqlStatement;
    saveAsMode: boolean;
}
export interface StatementSaveResponse extends MessageWithId {
    fileName?: string;
    fsPath?: string;
    responseType: SaveStatementResultType;
    error?: any;
}
export interface StatementOpenResponse extends MessageWithId {
    body?: string;
    responseType: OpenStatementResultType;
    error?: any;
    fileName?: string;
    fsPath?: string;
}

export interface HistoryGetResponse extends MessageWithId {
    list: HistroyItem[];
    error?: any;
}
