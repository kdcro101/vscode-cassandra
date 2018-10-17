import { AnalyzedStatement, CqlAnalysis } from "../../../../../../../../src/types/parser";
import { isKeyspaceTableValid } from "../helpers";

export const markColumnNotFound = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement, analysis: CqlAnalysis): monaco.editor.IMarkerData[] => {

    const spec = statement.rules.tableSpec;
    const keyspace = spec.keyspaceToken ? spec.keyspaceToken.text : spec.keyspaceAmbiental;
    const table = spec.tableToken ? spec.tableToken.text : null;

    const tableValid = isKeyspaceTableValid(keyspace, table, analysis);

    if (!tableValid) {
        return [];
    }

    const out: monaco.editor.IMarkerData[] = [];
    statement.columns.forEach((c) => {
        const ps = model.getPositionAt(c.charStart);
        const pe = model.getPositionAt(c.charStop);

        if (c.kind === "not_found" || c.kind == null) {
            // console.log("not_found item");
            const o: monaco.editor.IMarkerData = {
                severity: monaco.MarkerSeverity.Error,
                message: `column '${c.text}' not found in ${statement.keyspace}.${statement.table}`,
                startLineNumber: ps.lineNumber,
                startColumn: ps.column,
                endLineNumber: pe.lineNumber,
                endColumn: pe.column + 1,
            };
            out.push(o);
        }
    });
    return out;
};
