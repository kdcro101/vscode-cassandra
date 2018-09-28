import { AnalyzedStatement } from "../../../../../../../src/types/parser";
import { selectDecorations } from "./select";
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
