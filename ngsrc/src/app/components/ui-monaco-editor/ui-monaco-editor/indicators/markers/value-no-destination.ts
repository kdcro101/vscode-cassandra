import { AnalyzedStatement } from "../../../../../../../../src/types/parser";

export const markValueNotDefined = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement): monaco.editor.IMarkerData[] => {

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

    return noDestination;
};
