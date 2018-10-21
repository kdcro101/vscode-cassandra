import { AnalyzedStatement, CqlAnalysis } from "../../../../../../../../src/types/parser";
import { isBaseKeyspaceTableValid } from "../helpers";

export const markBaseTableReferenceError = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement, analysis: CqlAnalysis): monaco.editor.IMarkerData[] => {

    const spec = statement.rules.baseTableSpec;
    const keyspace = statement.keyspace;
    const baseKeyspace = spec.keyspaceToken ? spec.keyspaceToken.text : spec.keyspaceAmbiental;
    const baseTable = spec.tableToken ? spec.tableToken.text : null;

    const tableValid = isBaseKeyspaceTableValid(keyspace, baseKeyspace, baseTable, analysis);

    if (tableValid === "valid") {
        return [];
    }

    const out: monaco.editor.IMarkerData[] = [];

    if (tableValid === "nonexistent") {
        const token = spec.tableToken;
        const ps = model.getPositionAt(token.charStart);
        const pe = model.getPositionAt(token.charStop);

        const o: monaco.editor.IMarkerData = {
            severity: monaco.MarkerSeverity.Error,
            message: `table '${baseTable}' does not exist in keyspace '${baseKeyspace}'`,
            startLineNumber: ps.lineNumber,
            startColumn: ps.column,
            endLineNumber: pe.lineNumber,
            endColumn: pe.column + 1,
        };
        out.push(o);
    }

    return out;

};
