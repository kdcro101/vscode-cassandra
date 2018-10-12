import { AnalyzedStatement } from "../../../../../../../src/types/parser";
import { selectMarkers } from "./select";

export const insertMarkers = (model: monaco.editor.ITextModel, statement: AnalyzedStatement): monaco.editor.IMarkerData[] => {

    let out: monaco.editor.IMarkerData[] = [];
    out = out.concat(selectMarkers(model, statement));

    const noValue = statement.columns.reduce((acc, cur, i) => {
        const ps = model.getPositionAt(cur.charStart);
        const pe = model.getPositionAt(cur.charStop);

        const hasVal = statement.expressions[i] != null ? true : false;

        if (!hasVal) {

            const o: monaco.editor.IMarkerData = {
                severity: monaco.MarkerSeverity.Warning,
                message: `No value defined for destination column '${cur.text}' at ${statement.keyspace}.${statement.table}`,
                startLineNumber: ps.lineNumber,
                startColumn: ps.column,
                endLineNumber: pe.lineNumber,
                endColumn: pe.column + 1,
            };
            acc.push(o);
        }

        return acc;

    }, []);

    out = out.concat(noValue);

    const noDestination = statement.expressions.reduce((acc, cur, i) => {
        const ps = model.getPositionAt(cur.charStart);
        const pe = model.getPositionAt(cur.charStop);

        const hasDest = statement.columns[i] != null ? true : false;

        if (!hasDest) {

            const o: monaco.editor.IMarkerData = {
                severity: monaco.MarkerSeverity.Warning,
                message: `No destination column defined for expresion ${cur.text}`,
                startLineNumber: ps.lineNumber,
                startColumn: ps.column,
                endLineNumber: pe.lineNumber,
                endColumn: pe.column + 1,
            };
            acc.push(o);
        }

        return acc;

    }, []);

    out = out.concat(noDestination);
    return out;
};
