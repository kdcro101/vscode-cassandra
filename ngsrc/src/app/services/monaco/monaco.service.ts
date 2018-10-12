import { Injectable } from "@angular/core";
import { interval, ReplaySubject, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { AutocompleteService } from "../autocomplete/autocomplete.service";
import { ThemeService } from "../theme/theme.service";
import { cqlCompletitionProvider } from "./lang/completition";
import { cqlLanguageConfig, cqlTokenProvider } from "./lang/tokens";
import { cqlHoverTokenProvider } from "./lang/tokens-hover";
import { cqlKeysHoverTokenProvider } from "./lang/tokens-keys-hover";

@Injectable({
    providedIn: "root",
})
export class MonacoService {
    public stateReady = new ReplaySubject<void>();
    private eventReady = new Subject<void>();
    constructor(private autocomplete: AutocompleteService, private theme: ThemeService) {

        interval(20).pipe(
            takeUntil(this.eventReady),
            filter(() => {
                let res = false;
                try {
                    if (monaco != null && monaco.editor != null) {
                        res = true;
                    }

                } catch (e) {
                    console.log("no Monaco yet");
                }

                return res;
            }),
        ).subscribe(() => {
            this.prepareMonacoEditor();
            this.eventReady.next();
            this.stateReady.next();
        });
        const d = 22 + 1;
        if (d > 22) {

        }
    }
    private prepareMonacoEditor() {
        monaco.languages.register({ id: "cql" });
        monaco.languages.register({ id: "cqlhover" });
        monaco.languages.register({ id: "cql-keys" });

        monaco.languages.setLanguageConfiguration("cql", cqlLanguageConfig);

        monaco.languages.setMonarchTokensProvider("cql", cqlTokenProvider);

        // monaco.languages.setTokensProvider("cql", new CqlTokenizer);

        monaco.editor.defineTheme("vs-dark-custom", {
            base: "vs-dark", // can also be vs-dark or hc-black
            inherit: true, // can also be false to completely replace the builtin rules
            rules: [
                { token: "invalid", foreground: "ff00ff", fontStyle: "" },
                { token: "identifier", foreground: "ffffff", fontStyle: "" },
                { token: "comment", foreground: "7b7f8b", fontStyle: "" },
                { token: "keyword", foreground: "6495ED", fontStyle: "" },
                { token: "keyword.primary-key", foreground: "ef5350", fontStyle: "" },
                { token: "key.partition", foreground: "ef5350", fontStyle: "" },
                { token: "key.clustering", foreground: "fdd835", fontStyle: "" },
                { token: "type", foreground: "97e1f1", fontStyle: "" },
                { token: "type.null", foreground: "00acc1", fontStyle: "" },
                { token: "type.keyspace", foreground: "B09BDB", fontStyle: "italic" },
                { token: "delimiter.parenthesis", foreground: "FFFF00", fontStyle: "" },
                { token: "delimiter.angle", foreground: "FFFF00", fontStyle: "" },
                { token: "delimiter.square", foreground: "DAA520", fontStyle: "" },
                { token: "delimiter.curly", foreground: "D2691E", fontStyle: "" },
                { token: "delimiter.statement", foreground: "FFFF00", fontStyle: "" },
                { token: "delimiter.comma", foreground: "00FFFF", fontStyle: "" },
                { token: "delimiter.dot", foreground: "00FFFF", fontStyle: "" },
                { token: "number", foreground: "f06292", fontStyle: "" },
                { token: "string", foreground: "62e884", fontStyle: "" },
                { token: "delimiter.type.definition", foreground: "ffffff", fontStyle: "" },
                { token: "operator", foreground: "40E0D0", fontStyle: "" },
                { token: "code.delimiter", foreground: "455a64", fontStyle: "" },
                { token: "code", foreground: "78909c", fontStyle: "" },
            ],
            colors: null,
        });

        monaco.languages.setMonarchTokensProvider("cqlhover", cqlHoverTokenProvider);
        monaco.languages.setMonarchTokensProvider("cql-keys", cqlKeysHoverTokenProvider);
        monaco.languages.registerCompletionItemProvider("cql", cqlCompletitionProvider(this.autocomplete));
        const themeName = this.theme.isDark ? "vs-dark-custom" : "vs-light";
        monaco.editor.setTheme(themeName);
        this.theme.monacoTheme = themeName;

    }

}
