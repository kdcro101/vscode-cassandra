import { AnalyzedStatement, CqlAnalysis } from "../../../../../../../../src/types/parser";
import { getBaseTableData, isBaseKeyspaceTableValid } from "../helpers";
export const decoBaseColumnsKnown = (
    model: monaco.editor.ITextModel,
    statement: AnalyzedStatement, analysis: CqlAnalysis,
): monaco.editor.IModelDeltaDecoration[] => {

    const spec = statement.rules.baseTableSpec;
    const keyspace = statement.keyspace;
    const baseKeyspace = spec.keyspaceToken ? spec.keyspaceToken.text : spec.keyspaceAmbiental;
    const baseTable = spec.tableToken ? spec.tableToken.text : null;

    const tableValid = isBaseKeyspaceTableValid(keyspace, baseKeyspace, baseTable, analysis);

    if (tableValid !== "valid") {
        return [];
    }

    const tableData = getBaseTableData(baseKeyspace, baseTable, analysis);
    const columns = tableData.columns;
    const baseColumns = statement.rules.baseColumns || [];

    const out = baseColumns.reduce<monaco.editor.IModelDeltaDecoration[]>((acc, c) => {
        const ps = model.getPositionAt(c.charStart);
        const pe = model.getPositionAt(c.charStop);

        const pair = columns.find((col) => col.name === c.text);

        if (!pair) {
            return acc;
        }
        const keys = tableData.primaryKeys;
        const partition = keys.filter((k) => k.kind === "partition_key");
        const clustering = keys.filter((k) => k.kind === "clustering");

        if (pair && pair.kind === "regular") {
            const o: monaco.editor.IModelDeltaDecoration = {
                range: new monaco.Range(ps.lineNumber, ps.column, pe.lineNumber, pe.column + 1),
                options: {
                    // inlineClassName: "decoration-base column",
                    inlineClassName: "",
                    hoverMessage: {
                        value: `\`\`\`cqlhover\n${c.text} AS ${pair.type}\`\`\``,
                    },
                },
            };
            acc.push(o);
            return acc;

        }
        if (pair && pair.kind === "partition_key") {
            const o: monaco.editor.IModelDeltaDecoration = {
                range: new monaco.Range(ps.lineNumber, ps.column, pe.lineNumber, pe.column + 1),
                options: {
                    // inlineClassName: "decoration-base column",
                    inlineClassName: "",
                    hoverMessage: [
                        {
                            value: `\`\`\`cqlhover\n${c.text} AS ${pair.type}\`\`\``,
                        },
                        {
                            value: `\`\`\`cql-keys\nPARTITION KEY ${(pair.position + 1)}/${partition.length}\`\`\``,
                        },
                    ],
                },
            };
            acc.push(o);
            return acc;

        }
        if (pair && pair.kind === "clustering") {
            const o: monaco.editor.IModelDeltaDecoration = {
                range: new monaco.Range(ps.lineNumber, ps.column, pe.lineNumber, pe.column + 1),
                options: {
                    // inlineClassName: "decoration-base column",
                    inlineClassName: "",
                    hoverMessage: [
                        {
                            value: `\`\`\`cqlhover\n${c.text} AS ${pair.type}\`\`\``,
                        },
                        {
                            value: `\`\`\`cql-keys\nCOLUMN CLUSTERING KEY ${(pair.position + 1)}/${clustering.length}\`\`\``,
                        },
                    ],
                },
            };
            acc.push(o);
            return acc;

        }

    }, []);

    return out;
};
