
import { ClusterExecuteResults } from "../../../../src/clusters";
import { WorkbenchCqlStatement } from "../../../../src/types/editor";
import { DataChangeItem, ProcMessage } from "../../../../src/types/messages";
export interface VscodeWebviewInterface {
    postMessage: <T>(data: ProcMessage) => void;
}
export interface WorkbenchEditor {
    statement: WorkbenchCqlStatement;
    model?: monaco.editor.ITextModel;
    viewState?: monaco.editor.ICodeEditorViewState;
    result: ClusterExecuteResults;
    errors?: any[];
    executed: boolean;
    changes: DataChangeItem[];
}
