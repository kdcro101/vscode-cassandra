import { AnalyzedStatement } from "../../../../../../../../src/types/parser";

export const markColunNoValue = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement): monaco.editor.IMarkerData[] => {

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

    return noValue;
};
