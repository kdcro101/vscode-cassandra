import { RootContext } from "../antlr/CqlParser";
import { CompletitionOutput } from "../completition";
import { CqlParseError } from "../parser";
import { WorkbenchCqlStatement } from "./editor";
import { CassandraCluster } from "./index";

export interface ProcMessageList {
    w2e_getClustersRequest: boolean;
    w2e_onReady: boolean;
    w2e_parseInputRequest: ParseInputRequest;
    w2e_persistEditors: WorkbenchCqlStatement[];
    w2e_autocompleteRequest: AutocompleteRequest;

    e2w_goState: WebviewStateParams;
    e2w_editorCreate: EditorCreateParams;
    e2w_getClustersResponse: CassandraCluster[];
    e2w_autocompleteResponse: AutocompleteResponse;
    e2w_parseInputResponse: ParseInputResponse;
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
export interface ParseInputRequest {
    id: string;
    input: string;
}
export interface ParseInputResponse {
    id: string;
    result: RootContext;
    errors: CqlParseError[];
}
