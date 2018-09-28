import { Injectable } from "@angular/core";
import { interval, ReplaySubject, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { AutocompleteService } from "../autocomplete/autocomplete.service";
import { ThemeService } from "../theme/theme.service";
import { cqlCompletitionProvider } from "./lang/completition";
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

        monaco.languages.setMonarchTokensProvider("cql", cqlTokenProvider);
        monaco.languages.setMonarchTokensProvider("cqlhover", cqlHoverTokenProvider);
        monaco.languages.setLanguageConfiguration("cql", cqlLanguageConfig);
        monaco.languages.registerCompletionItemProvider("cql", cqlCompletitionProvider(this.autocomplete));
        const theme = this.theme.isDark ? "vs-dark" : "vs-light";
        monaco.editor.setTheme(theme);

    }

}
