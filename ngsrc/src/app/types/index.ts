
import { BehaviorSubject } from "rxjs";
import { Subject } from "rxjs";
import { ClusterExecuteResults } from "../../../../src/clusters";
import { WorkbenchCqlStatement } from "../../../../src/types/editor";
import { DataChangeItem, ProcMessage } from "../../../../src/types/messages";
export interface VscodeWebviewInterface {
    postMessage: <T>(data: ProcMessage) => void;
}
export interface WorkbenchEditor {
    id: string;
    statement: WorkbenchCqlStatement;
    model?: monaco.editor.ITextModel;
    viewState?: monaco.editor.ICodeEditorViewState;
    result: ClusterExecuteResults;
    errors?: any[];
    executed: boolean;
    changes: DataChangeItem[];
    stateExecuting: BehaviorSubject<boolean>;
    eventResult: Subject<void>;
}
