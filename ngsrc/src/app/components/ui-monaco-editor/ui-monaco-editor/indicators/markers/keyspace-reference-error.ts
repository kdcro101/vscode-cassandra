import { AnalyzedStatement, CqlAnalysis } from "../../../../../../../../src/types/parser";

export const markKeyspaceReferenceError = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement, analysis: CqlAnalysis): monaco.editor.IMarkerData[] => {

    const out: monaco.editor.IMarkerData[] = [];

    const spec = statement.rules.tableSpec;
    const refs = analysis.references;

    if (!spec || !spec.keyspaceToken) {
        // no keyspace no error
        return [];
    }
    const keyspace = spec.keyspaceToken.text;

    if (refs.keyspaces.find((k) => k === keyspace)) {
        return [];
    }

    const token = spec.keyspaceToken;

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
