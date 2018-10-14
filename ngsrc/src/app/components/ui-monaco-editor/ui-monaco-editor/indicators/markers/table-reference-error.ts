import { AnalyzedStatement, CqlAnalysis } from "../../../../../../../../src/types/parser";

export const markTableReferenceError = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement, analysis: CqlAnalysis): monaco.editor.IMarkerData[] => {

    const out: monaco.editor.IMarkerData[] = [];
    const spec = statement.rules.tableSpec;
    const refs = analysis.references;

    if (!spec || !spec.tableToken) {
        // no keyspace no table no error
        return [];
    }

    const token = spec.tableToken;
    const keyspace = spec.keyspaceToken ? spec.keyspaceToken.text : spec.keyspaceAmbiental;

    if (refs && refs[keyspace] && refs[keyspace]["tables"] && refs[keyspace]["tables"][token.text]) {
        return [];
    }

    const ps = model.getPositionAt(token.charStart);
    const pe = model.getPositionAt(token.charStop);

    const o: monaco.editor.IMarkerData = {
        severity: monaco.MarkerSeverity.Error,
        message: `table ${statement.table} not exists in ${statement.keyspace}`,
        startLineNumber: ps.lineNumber,
        startColumn: ps.column,
        endLineNumber: pe.lineNumber,
        endColumn: pe.column + 1,
    };
    out.push(o);

    return out;

};
