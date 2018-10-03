import { AnalyzedStatement } from "../../../../../../../../src/types/parser";
export const baseColumnDecorations = (
    model: monaco.editor.ITextModel,
    statement: AnalyzedStatement,
): monaco.editor.IModelDeltaDecoration[] => {

    const out: monaco.editor.IModelDeltaDecoration[] = [];

    statement.columns.forEach((c) => {
        const ps = model.getPositionAt(c.charStart);
        const pe = model.getPositionAt(c.charStop);

        const o: monaco.editor.IModelDeltaDecoration = {
            range: new monaco.Range(ps.lineNumber, ps.column, pe.lineNumber, pe.column + 1),
            options: {
                inlineClassName: "decoration base column",
            },
        };

        out.push(o);

    });

    return out;
};
