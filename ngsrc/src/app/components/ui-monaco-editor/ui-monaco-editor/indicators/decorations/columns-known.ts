import { AnalyzedStatement, CqlAnalysis } from "../../../../../../../../src/types/parser";
import { isKeyspaceTableValid } from "../helpers";
export const decoColumnsKnown = (
    model: monaco.editor.ITextModel,
    statement: AnalyzedStatement, analysis: CqlAnalysis,
): monaco.editor.IModelDeltaDecoration[] => {

    const spec = statement.rules.tableSpec;
    const keyspace = spec.keyspaceToken ? spec.keyspaceToken.text : spec.keyspaceAmbiental;
    const table = spec.tableToken ? spec.tableToken.text : null;

    const tableValid = isKeyspaceTableValid(keyspace, table, analysis);

    if (!tableValid) {
        return [];
    }

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
