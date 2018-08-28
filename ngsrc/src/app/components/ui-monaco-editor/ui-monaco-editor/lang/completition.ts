export const cqlCompletitionProvider: monaco.languages.CompletionItemProvider = {
    provideCompletionItems: (document: monaco.editor.ITextModel,
        position: monaco.Position, token: monaco.CancellationToken, context: monaco.languages.CompletionContext) => {
        // get editor content before the pointer
        const text = document.getValueInRange({
            startLineNumber: 1,
            startColumn: 1, endLineNumber: position.lineNumber,
            endColumn: position.column,
        });

        console.log("------------------------------------------------");
        console.log(`text:[${text}]`);
        console.log("------------------------------------------------");

        return [
            {
                label: "simpleText",
                kind: monaco.languages.CompletionItemKind.Text,
            }, {
                label: "testing",
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: {
                    value: "testing(${1:condition})",
                },
            },
            {
                label: "ifelse",
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: {
                    value: [
                        "if (${1:condition}) {",
                        "\t$0",
                        "} else {",
                        "\t",
                        "}",
                    ].join("\n"),
                },
                documentation: "If-Else Statement",
            },
        ];
    },
};
