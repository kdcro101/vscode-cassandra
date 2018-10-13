import { AnalyzedStatement } from "../../../../../../../../src/types/parser";

export const markTableReferenceError = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement): monaco.editor.IMarkerData[] => {

    const out: monaco.editor.IMarkerData[] = [];
    const spec = statement.rules.tableSpec;

    if (!spec || !spec.keyspaceData || !spec.tableToken ) {
        // no keyspace no table no error
        return [];
    }

    const token = spec.tableToken;

    if (spec.tableData) {
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
