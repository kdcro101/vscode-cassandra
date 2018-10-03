import { Injectable } from "@angular/core";
import { interval, ReplaySubject, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { AutocompleteService } from "../autocomplete/autocomplete.service";
import { ThemeService } from "../theme/theme.service";
import { cqlCompletitionProvider } from "./lang/completition";
import { CqlTokenizer } from "./lang/cql-tokenizer";
import { cqlLanguageConfig, cqlTokenProvider } from "./lang/tokens";
import { cqlHoverTokenProvider } from "./lang/tokens-hover";

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

        monaco.languages.setLanguageConfiguration("cql", cqlLanguageConfig);

        monaco.languages.setMonarchTokensProvider("cql", cqlTokenProvider);

        // monaco.languages.setTokensProvider("cql", new CqlTokenizer);

        monaco.editor.defineTheme("vs-dark-custom", {
            base: "vs-dark", // can also be vs-dark or hc-black
            inherit: true, // can also be false to completely replace the builtin rules
            rules: [
                { token: "comment", foreground: "7b7f8b", fontStyle: "" },
                // { token: "keyword", foreground: "f286c4", fontStyle: "" },
                // { token: "default", foreground: "ff0000", fontStyle: "" },
                { token: "type", foreground: "f286c4", fontStyle: "" },
                { token: "delimiter.parenthesis", foreground: "ffb86c", fontStyle: "" },
                { token: "number", foreground: "62e884", fontStyle: "" },
                { token: "string", foreground: "f286c4", fontStyle: "" },
                // { token: "comment.js", foreground: "008800", fontStyle: "bold" },
                // { token: "comment.css", foreground: "0000ff" }, // will inherit fontStyle from `comment` above
            ],
            colors: null,
        });

        monaco.languages.setMonarchTokensProvider("cqlhover", cqlHoverTokenProvider);
        monaco.languages.registerCompletionItemProvider("cql", cqlCompletitionProvider(this.autocomplete));
        const theme = this.theme.isDark ? "vs-dark-custom" : "vs-light";
        monaco.editor.setTheme(theme);

    }

}
