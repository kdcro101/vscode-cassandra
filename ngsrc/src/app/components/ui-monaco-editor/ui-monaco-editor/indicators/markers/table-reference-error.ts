import { AnalyzedStatement } from "../../../../../../../../src/types/parser";

export const markTableReferenceError = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement): monaco.editor.IMarkerData[] => {

    const out: monaco.editor.IMarkerData[] = [];

    const tableName = statement.table;
    const token = statement.tokens["table"] == null ? null : statement.tokens["table"].find((t) => t.text === tableName);

    if (statement.tableData != null) {
        // console.log("TABLE OK");
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
