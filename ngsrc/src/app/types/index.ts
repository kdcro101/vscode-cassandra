import { ProcMessage } from "../../../../src/types/messages";
export interface VscodeWebviewInterface {
    postMessage: <T>(data: ProcMessage) => void;
}
