import { AnalyzedStatement } from "../../../../../../../../src/types/parser";
export const decoColumnsKeys = (
    model: monaco.editor.ITextModel,
    statement: AnalyzedStatement,
): monaco.editor.IModelDeltaDecoration[] => {

    const out: monaco.editor.IModelDeltaDecoration[] = [];

    statement.columns.filter((c) => {
        return c.kind === "partition_key" || c.kind === "clustering";
    }).forEach((c) => {
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
                    value: `\`\`\`cql-keys\nPARTITION KEY ${c.kindIndex + 1}/${c.kindCount}\`\`\``,
                },
            ];
            out.push(o);
        }
        if (c.kind === "clustering") {
            o.options.inlineClassName = "decoration clustering";
            o.options.hoverMessage = {
                value: `\`\`\`cql-keys\nCOLUMN CLUSTERING KEY ${c.kindIndex + 1}/${c.kindCount}\`\`\``,
            };
            out.push(o);
        }

    });

    return out;
};
