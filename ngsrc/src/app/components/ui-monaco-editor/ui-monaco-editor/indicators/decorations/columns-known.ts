import { AnalyzedStatement } from "../../../../../../../../src/types/parser";
export const decoColumnsKnown = (
    model: monaco.editor.ITextModel,
    statement: AnalyzedStatement,
): monaco.editor.IModelDeltaDecoration[] => {

    // const out: monaco.editor.IModelDeltaDecoration[] = [];

    const out = statement.columns.reduce<monaco.editor.IModelDeltaDecoration[]>((acc, c) => {
        const ps = model.getPositionAt(c.charStart);
        const pe = model.getPositionAt(c.charStop);

        if (c.kind === "not_found") {
            return acc;
        }

        const o: monaco.editor.IModelDeltaDecoration = {
            range: new monaco.Range(ps.lineNumber, ps.column, pe.lineNumber, pe.column + 1),
            options: {
                // inlineClassName: "decoration-base column",
                inlineClassName: "",
                hoverMessage: {
                    value: `\`\`\`cqlhover\n${c.text} AS ${c.type}\`\`\``,
                },
            },
        };

        acc.push(o);
        return acc;

    }, []);

    return out;
};
