import { CqlEditor } from "./editor";

export interface ProcMessageList {
    e2w_goState: WebviewStateParams;
    w2e_onReady: boolean;
    w2e_parseInput: string;
    e2w_parseOutput: string;
    e2w_editorCreate: CqlEditor;
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
