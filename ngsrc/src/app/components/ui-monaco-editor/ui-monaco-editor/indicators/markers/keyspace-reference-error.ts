import { AnalyzedStatement } from "../../../../../../../../src/types/parser";

export const markKeyspaceReferenceError = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement): monaco.editor.IMarkerData[] => {

    const out: monaco.editor.IMarkerData[] = [];

    const keyspace = statement.keyspace;
    const token = statement.tokens["keyspace"] == null ? null : statement.tokens["keyspace"].find((t) => t.text === keyspace);

    if (statement.keyspaceData != null) {
        return [];
    }
    if (token == null) {
        return;
    }

    const ps = model.getPositionAt(token.charStart);
    const pe = model.getPositionAt(token.charStop);

    const o: monaco.editor.IMarkerData = {
        severity: monaco.MarkerSeverity.Error,
        message: `keyspace ${statement.keyspace} does not exists`,
        startLineNumber: ps.lineNumber,
        startColumn: ps.column,
        endLineNumber: pe.lineNumber,
        endColumn: pe.column + 1,
    };
    out.push(o);

    return out;

};
