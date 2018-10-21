import { AnalyzedStatement } from "../../../../../../../../src/types/parser";
export const decoValues = (
    model: monaco.editor.ITextModel,
    statement: AnalyzedStatement,
): monaco.editor.IModelDeltaDecoration[] => {

    const out: monaco.editor.IModelDeltaDecoration[] = [];

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
            o.options.inlineClassName = `decoration expression ${pair.kind}`;
            o.options.hoverMessage = [
                {
                    value: `\`\`\`cqlhover\nvalue for ${pair.text} AS ${pair.type}\`\`\``,
                },
            ];
        } else {
            o.options.inlineClassName = "decoration expression";
            o.options.hoverMessage = [];
        }

        if (pair && pair.kind === "partition_key") {
            o.options.hoverMessage.push({
                value: `\`\`\`cql-keys\nPARTITION KEY ${pair.kindIndex + 1}/${pair.kindCount}\`\`\``,
            });
        }
        if (pair && pair.kind === "clustering") {
            o.options.hoverMessage.push({
                value: `\`\`\`cql-keys\nCOLUMN CLUSTERING KEY ${pair.kindIndex + 1}/${pair.kindCount}\`\`\``,
            });
        }

        out.push(o);

    });

    return out;
};
