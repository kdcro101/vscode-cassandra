import { zip } from "rxjs";
import { take } from "rxjs/operators";
import { AnalyzedStatement, CqlAnalysis } from "../../../../../../src/types/parser";
import { AutocompleteService } from "../../autocomplete/autocomplete.service";

interface AutocompleteAnalysis {
    statement: AnalyzedStatement;
    autocompleteInput: string;
}

export const cqlCompletitionProvider = (autocomplete: AutocompleteService): monaco.languages.CompletionItemProvider => {

    const p: monaco.languages.CompletionItemProvider = {
        provideCompletionItems: (model: monaco.editor.ITextModel, pos: monaco.Position, tok: monaco.CancellationToken,
            ctx: monaco.languages.CompletionContext): Thenable<monaco.languages.CompletionItem[]> => {
            return new Promise((resolve, reject) => {

                // get editor content before the pointer
                const textToOffset = model.getValueInRange({
                    startLineNumber: 1,
                    startColumn: 1, endLineNumber: pos.lineNumber,
                    endColumn: pos.column,
                });

                const offset = model.getOffsetAt(pos);

                zip(autocomplete.stateCluster,
                    autocomplete.stateKeypace,
                    autocomplete.stateAnalysis).pipe(take(1),
                    ).subscribe((args) => {

                        const clusterData = args[0];
                        const keyspaceInitial = args[1];
                        const analysis = args[2];

                        const state = locateCursor(offset, analysis, textToOffset);
                        const statement = state.statement;

                        const keyspaceAmbiental = statement ? statement.keyspace : keyspaceInitial;
                        const keyspace = statement && statement.keyspace ? statement.keyspace : keyspaceAmbiental;
                        const table = statement && statement.table ? statement.table : null;

                        const completeInput = state.autocompleteInput;

                        const keyspaceData = clusterData && keyspace ?
                            clusterData.keyspaces.find((k) => k.name === keyspace) : null;

                        const baseKeyspace: string = (statement && statement.rules &&
                            statement.rules.baseTableSpec && statement.rules.baseTableSpec.keyspaceToken)
                            ? statement.rules.baseTableSpec.keyspaceToken.text : keyspaceAmbiental;

                        const baseKeyspaceData = clusterData && baseKeyspace ?
                            clusterData.keyspaces.find((k) => k.name === keyspace) : null;

                        const columnSource = keyspaceData ?
                            keyspaceData.tables.find((t) => t.name === table) ||
                            keyspaceData.materializedViews.find((t) => t.name === table)
                            : null;

                        autocomplete.getCandidates(completeInput).pipe()
                            .subscribe((result) => {

                                console.log("completition results");
                                console.log(result);

                                let all: monaco.languages.CompletionItem[] = [];
                                // let all: monaco.languages.CompletionItem[] = autocompleteList;

                                const list = result.list;
                                const partial = result.partial == null ? "" : result.partial;
                                const listKeyspaces = list.find((i) => i.type === "inputKeyspace") ? true : false;
                                const listTables = list.find((i) => i.type === "inputTable") ? true : false;
                                const listColumns = list.find((i) => i.type === "inputColumn") ? true : false;
                                const listViews = list.find((i) => i.type === "inputMaterializedView") ? true : false;
                                const listTypes = list.find((i) => i.type === "inputType") ? true : false;
                                const listAggregates = list.find((i) => i.type === "inputAggregate") ? true : false;
                                const listFunctions = list.find((i) => i.type === "inputFunction") ? true : false;
                                const listIndices = list.find((i) => i.type === "inputIndex") ? true : false;
                                const listBaseKeyspaces = list.find((i) => i.type === "inputBaseKeyspace") ? true : false;
                                const listBaseTables = list.find((i) => i.type === "inputBaseTable") ? true : false;

                                const keywords: monaco.languages.CompletionItem[] = list
                                    .filter((i) => i.type === "keyword" || i.type === "dataType" || i.type === "syntaxOperator")
                                    .map((item) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: item.text,
                                            kind: monaco.languages.CompletionItemKind.Keyword,
                                        };
                                        return o;
                                    });

                                all = all.concat(keywords);

                                if (listKeyspaces && clusterData) {
                                    const keyspaces: monaco.languages.CompletionItem[] = clusterData.keyspaces.map((ks) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: ks.name,
                                            kind: monaco.languages.CompletionItemKind.Method,
                                        };
                                        return o;
                                    });

                                    all = all.concat(keyspaces.filter((k) => k.label.search(partial) === 0));
                                }

                                if (listBaseKeyspaces && clusterData) {
                                    const keyspaces: monaco.languages.CompletionItem[] = clusterData.keyspaces.map((ks) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: ks.name,
                                            kind: monaco.languages.CompletionItemKind.Method,
                                        };
                                        return o;
                                    });

                                    all = all.concat(keyspaces.filter((k) => k.label.search(partial) === 0));
                                }

                                if (listTables && keyspaceData) {
                                    const tables: monaco.languages.CompletionItem[] = keyspaceData.tables.map((t) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: t.name,
                                            kind: monaco.languages.CompletionItemKind.Class,
                                        };
                                        return o;
                                    });
                                    all = all.concat(tables.filter((t) => t.label.search(partial) === 0));
                                }
                                if (listBaseTables && baseKeyspaceData) {
                                    const baseTables: monaco.languages.CompletionItem[] = baseKeyspaceData.tables.map((t) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: t.name,
                                            kind: monaco.languages.CompletionItemKind.Class,
                                        };
                                        return o;
                                    });
                                    all = all.concat(baseTables.filter((t) => t.label.search(partial) === 0));
                                }

                                if (listViews && keyspaceData) {
                                    const views = keyspaceData.materializedViews.map((v) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: v.name,
                                            kind: monaco.languages.CompletionItemKind.Class,
                                        };
                                        return o;
                                    });
                                    all = all.concat(views.filter((c) => c.label.search(partial) === 0));
                                }
                                if (listColumns && columnSource) {
                                    const columns: monaco.languages.CompletionItem[] = columnSource.columns.map((t) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: t.name,
                                            kind: monaco.languages.CompletionItemKind.Field,
                                            detail: t.type,
                                        };
                                        return o;
                                    });
                                    all = all.concat(columns.filter((c) => c.label.search(partial) === 0));
                                }
                                if (listTypes && keyspaceData) {
                                    const types = keyspaceData.types.map((v) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: v.name,
                                            kind: monaco.languages.CompletionItemKind.Interface,
                                        };
                                        return o;
                                    });
                                    all = all.concat(types.filter((c) => c.label.search(partial) === 0));
                                }
                                if (listAggregates && keyspaceData) {
                                    const aggregates = keyspaceData.aggregates.map((v) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: v.name,
                                            kind: monaco.languages.CompletionItemKind.Field,
                                        };
                                        return o;
                                    });
                                    all = all.concat(aggregates.filter((c) => c.label.search(partial) === 0));
                                }
                                if (listFunctions && keyspaceData) {
                                    const functions = keyspaceData.functions.map((v) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: v.name,
                                            kind: monaco.languages.CompletionItemKind.Field,
                                        };
                                        return o;
                                    });
                                    all = all.concat(functions.filter((c) => c.label.search(partial) === 0));
                                }
                                if (listIndices && keyspaceData) {
                                    const indices = keyspaceData.tables.reduce((acc, cur) => {

                                        if (cur.indexes && cur.indexes.length > 0) {
                                            acc = acc.concat(cur.indexes);
                                            return acc;
                                        }
                                        return acc;

                                    }, [])
                                        .map((v) => {
                                            const o: monaco.languages.CompletionItem = {
                                                label: v.name,
                                                kind: monaco.languages.CompletionItemKind.Value,
                                            };
                                            return o;
                                        });
                                    all = all.concat(indices.filter((c) => c.label.search(partial) === 0));
                                }
                                resolve(all);
                            });

                    }, (e) => {
                        console.log("ERROR");
                        console.log(e);
                        reject(e);
                    });

            });
        },
    };

    return p;
};

function locateCursor(offset: number, analysis: CqlAnalysis, textToOffset: string): AutocompleteAnalysis {
    const out: AutocompleteAnalysis = {
        statement: null,
        autocompleteInput: textToOffset,
    };
    const statementIndex = analysis.statementRanges.findIndex((s) => {
        return offset >= s.start && offset <= s.stop;
    });
    if (analysis == null || statementIndex === -1) {
        console.log("AUTOCOMPLETE no analysis or statementIndex===-1");
        out.statement = null;
        out.autocompleteInput = textToOffset;
        return out;
    }

    console.log(`AUTOCOMPLETE Statement index=${statementIndex}`);
    const range = analysis.statementRanges[statementIndex];
    const partEnd = offset - range.start;
    const part = range.text.substring(0, partEnd);

    out.statement = analysis.statements[statementIndex];
    out.autocompleteInput = part;

    console.log("AUTOCOMPLETE locateCursor");
    console.log(out);

    return out;
}

function analyzeState(offset: number, analysis: CqlAnalysis, textToOffset: string): AutocompleteAnalysis {

    const out: AutocompleteAnalysis = {
        statement: null,
        autocompleteInput: null,
    };

    if (analysis == null) {
        out.statement = null;
        out.autocompleteInput = textToOffset;
        return out;
    }
    const statements = analysis.statements;

    console.log(`statements.length=${statements.length}`);

    if (statements.length === 0) {
        out.statement = null;
        out.autocompleteInput = textToOffset;
        return out;
    }

    console.log(`looking for offset=${offset}`);
    const found = statements.find((s) => {
        console.log(`item start=${s.charStart} stop=${s.charStop}`);
        return offset >= s.charStart && offset <= s.charStop;
    });

    if (found) {
        out.statement = found;
        out.autocompleteInput = found.text.substring(found.charStart, found.charStart + (offset - found.charStart) + 1);
        return out;
    }

    const last = statements[statements.length - 1];

    const restStart = last.charStop + 1;
    const rest = textToOffset.substring(restStart, restStart + (offset - last.charStop));

    const lastTerminated = rest.trim() === ";" ? true : false;

    console.log(`lastTerminated=${lastTerminated}  [rest]=[${rest}]`);

    if (offset > last.charStop && !lastTerminated) {
        out.statement = last;
        out.autocompleteInput = textToOffset.substring(last.charStart, offset + 1) + " ";
        return out;
    }
    if (offset > last.charStop && lastTerminated) {
        out.statement = null;
        out.autocompleteInput = "";
        return out;
    }

}
