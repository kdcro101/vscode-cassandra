import { AnalyzedStatement } from "../../../../../../../src/types/parser";
import { selectDecorations, selectMarkers } from "./select";
export const insertDecorations = (model: monaco.editor.ITextModel, statement: AnalyzedStatement): monaco.editor.IModelDeltaDecoration[] => {
    let out: monaco.editor.IModelDeltaDecoration[] = [];

    out = selectDecorations(model, statement);

    // expression decorations
    statement.expressions.forEach((c, i) => {
        const ps = model.getPositionAt(c.charStart);
        const pe = model.getPositionAt(c.charStop);

        const o: monaco.editor.IModelDeltaDecoration = {
            range: new monaco.Range(ps.lineNumber, ps.column, pe.lineNumber, pe.column + 1),
            options: {
                inlineClassName: null,
                hoverMessage: {
                    value: c.text,

                },
            },
        };

        const pair = statement.columns[i];

        if (pair) {
            o.options.inlineClassName = "decoration expression";
            o.options.hoverMessage = [
                {
                    value: `\`\`\`cqlhover\nvalue for ${pair.text} AS ${pair.type}\`\`\``,
                },
            ];
        } else {
            o.options.inlineClassName = "decoration expression";
            o.options.hoverMessage = [
                {
                    value: `**Error**`,
                },
            ];
        }

        out.push(o);

    });

    return out;
};
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
