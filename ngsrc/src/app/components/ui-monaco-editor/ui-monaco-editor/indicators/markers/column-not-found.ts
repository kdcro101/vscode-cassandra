import { AnalyzedStatement } from "../../../../../../../../src/types/parser";

export const markColumnNotFound = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement): monaco.editor.IMarkerData[] => {

    const out: monaco.editor.IMarkerData[] = [];
    statement.columns.forEach((c) => {
        const ps = model.getPositionAt(c.charStart);
        const pe = model.getPositionAt(c.charStop);

        if (c.kind === "not_found") {
            console.log("not_found item");
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
