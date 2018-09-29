import { zip } from "rxjs";
import { take } from "rxjs/operators";
import { AnalyzedStatement, CqlAnalysis } from "../../../../../../src/types/parser";
import { AutocompleteService } from "../../autocomplete/autocomplete.service";

export const cqlCompletitionProvider = (autocomplete: AutocompleteService): monaco.languages.CompletionItemProvider => {

    const p: monaco.languages.CompletionItemProvider = {
        provideCompletionItems: (model: monaco.editor.ITextModel, pos: monaco.Position, tok: monaco.CancellationToken,
            ctx: monaco.languages.CompletionContext): Thenable<monaco.languages.CompletionItem[]> => {
            return new Promise((resolve, reject) => {

                // get editor content before the pointer
                const text = model.getValueInRange({
                    startLineNumber: 1,
                    startColumn: 1, endLineNumber: pos.lineNumber,
                    endColumn: pos.column,
                });

                const offset = model.getOffsetAt(pos);

                zip(autocomplete.stateCluster,
                    autocomplete.stateKeypace,
                    autocomplete.stateAnalysis).pipe(
                        take(1),
                    )
                    .subscribe((args) => {

                        const clusterData = args[0];
                        const keyspaceInitial = args[1];
                        const analysis = args[2];

                        const statement = getStatement(offset, analysis);
                        const keyspace = statement && statement.keyspace ? statement.keyspace : keyspaceInitial;
                        const table = statement && statement.table ? statement.table : null;
                        const completeInput = getAutocompleteInput(statement, text, offset);

                        const keyspaceData = clusterData && keyspace ?
                            clusterData.keyspaces.find((k) => k.name === keyspace) : null;
                        const tableData = keyspaceData ? keyspaceData.tables.find((t) => t.name === table) : null;

                        console.log(`autocompleteProvide OFF:${offset} ${Object.keys(clusterData).join(",")} ksInit: ${keyspaceInitial}`);
                        console.log("analysis");
                        console.log(analysis);
                        console.log("statement");
                        console.log(statement);
                        console.log("completeInput");
                        console.log(completeInput);

                        console.log("tableData");
                        console.log(tableData);

                        autocomplete.getCandidates(completeInput).pipe()
                            .subscribe((results) => {

                                let all: monaco.languages.CompletionItem[] = [];
                                const list = results.list;
                                const listKeyspaces = list.find((i) => i.type === "inputKeyspace") ? true : false;
                                const listTables = list.find((i) => i.type === "inputTable") ? true : false;
                                const listColumns = list.find((i) => i.type === "inputColumn") ? true : false;

                                console.log(`listKs:${listKeyspaces} listTb: ${listTables} listCol: ${listColumns}`);

                                const keywords: monaco.languages.CompletionItem[] = list
                                    .filter((i) => i.type === "keyword")
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
                                            kind: monaco.languages.CompletionItemKind.Class,
                                        };
                                        return o;
                                    });
                                    all = all.concat(keyspaces);
                                }
                                if (listTables && keyspaceData) {
                                    const tables: monaco.languages.CompletionItem[] = keyspaceData.tables.map((t) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: t.name,
                                            kind: monaco.languages.CompletionItemKind.Method,
                                        };
                                        return o;
                                    });
                                    all = all.concat(tables);
                                }
                                if (listColumns && tableData) {
                                    const columns: monaco.languages.CompletionItem[] = tableData.columns.map((t) => {
                                        const o: monaco.languages.CompletionItem = {
                                            label: t.name,
                                            kind: monaco.languages.CompletionItemKind.Field,
                                        };
                                        return o;
                                    });
                                    all = all.concat(columns);
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
const getAutocompleteInput = (statement: AnalyzedStatement, fullText: string, offset: number): string => {
    if (statement == null) {
        return `${fullText} `;
    }
    const st = statement.text;
    const len = offset - statement.charStart;
    const part = st.substring(0, len).concat(" ");
    return part;
};
const getStatement = (offset: number, analysis: CqlAnalysis): AnalyzedStatement => {
    if (analysis == null) {
        return null;
    }
    const statements = analysis.statements;

    console.log(`statements.length=${statements.length}`);

    if (statements.length === 0) {
        return null;
    }
    console.log(`looking for offset=${offset}`);
    const found = statements.find((s) => {
        console.log(`item start=${s.charStart} stop=${s.charStop}`);
        return offset >= s.charStart && offset <= s.charStop;
    });

    if (found) {
        return found;
    }

    const last = statements[statements.length - 1];

    if (offset > last.charStop) {
        return last;
    }

    return null;

};
