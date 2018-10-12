import { AnalyzedStatement } from "../../../../../../../src/types/parser";
export const selectDecorations = (model: monaco.editor.ITextModel, statement: AnalyzedStatement): monaco.editor.IModelDeltaDecoration[] => {
    const out: monaco.editor.IModelDeltaDecoration[] = [];

    statement.columns.forEach((c) => {
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

        if (c.kind === "partition_key") {
            o.options.inlineClassName = "decoration partition_key";
            o.options.hoverMessage = [
                {
                    value: `\`\`\`cqlhover\n${c.type} AS PARTITION KEY [${c.kindIndex + 1}/${c.kindCount}]\`\`\``,
                },
            ];
            out.push(o);
        }
        if (c.kind === "clustering") {
            o.options.inlineClassName = "decoration clustering";
            o.options.hoverMessage = {
                value: `\`\`\`cqlhover\n${c.type} AS COLUMN CLUSTERING KEY [${c.kindIndex + 1}/${c.kindCount}]\`\`\``,
            };
            out.push(o);
        }
        if (c.kind === "regular") {
            // o.options.inlineClassName = "decoration";
            o.options.inlineClassName = "";
            o.options.hoverMessage = {
                value: `\`\`\`cqlhover\n${c.text} AS ${c.type}\`\`\``,
            };
            out.push(o);
        }
    });

    return out;
};
export const selectMarkers = (model: monaco.editor.ITextModel,
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
