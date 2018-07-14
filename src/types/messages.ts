export interface ProcMessageTypes {
    e2w_goState: WebviewStateParams;
    w2e_onReady: boolean;
}
export interface ProcMessage {
    name: string;
    data: any;
}
export interface ProcMessageStrict<T extends keyof ProcMessageTypes> {
    name: T;
    data: ProcMessageTypes[T];
}
export interface WebviewStateParams {
    name: string;
    params: { [key: string]: any };
}
