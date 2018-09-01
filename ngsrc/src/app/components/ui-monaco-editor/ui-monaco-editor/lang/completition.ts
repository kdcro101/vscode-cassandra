import { AutocompleteService } from "../../../../services/autocomplete/autocomplete.service";

export const cqlCompletitionProvider = (autocomplete: AutocompleteService): monaco.languages.CompletionItemProvider => {

    const p: monaco.languages.CompletionItemProvider = {
        provideCompletionItems: (
            document: monaco.editor.ITextModel,
            position: monaco.Position,
            token: monaco.CancellationToken,
            context: monaco.languages.CompletionContext,
        ): Thenable<monaco.languages.CompletionItem[]> => {
            return new Promise((resolve, reject) => {

                // get editor content before the pointer
                const text = document.getValueInRange({
                    startLineNumber: 1,
                    startColumn: 1, endLineNumber: position.lineNumber,
                    endColumn: position.column,
                });

                console.log("------------------------------------------------");
                console.log(`text:[${text}]`);
                console.log("------------------------------------------------");

                autocomplete.getCandidates(text).pipe()
                    .subscribe((results) => {

                        console.log("GOT RESULTS");
                        console.log(results);

                        const l: monaco.languages.CompletionItem[] = results.list.map((item) => {
                            const o: monaco.languages.CompletionItem = {
                                label: item.text,
                                kind: monaco.languages.CompletionItemKind.Keyword,
                            };
                            return o;
                        });

                        resolve(l);

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
