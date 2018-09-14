import { Injectable } from "@angular/core";
import { interval, ReplaySubject, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { AutocompleteService } from "../autocomplete/autocomplete.service";
import { cqlCompletitionProvider } from "./lang/completition";
import { cqlLanguageConfig, cqlTokenProvider } from "./lang/tokens";

@Injectable({
    providedIn: "root",
})
export class MonacoService {
    public stateReady = new ReplaySubject<void>();
    private eventReady = new Subject<void>();
    constructor(private autocomplete: AutocompleteService) {

        interval(20).pipe(
            takeUntil(this.eventReady),
            filter(() => {
                let res = false;
                try {
                    if (monaco != null && monaco.editor != null) {
                        res = true;
                    }

                } catch (e) {
                    console.log(e);
                }

                return res;
            }),
        ).subscribe(() => {
            this.prepareMonacoEditor();
            this.eventReady.next();
            this.stateReady.next();
        });

    }
    private prepareMonacoEditor() {
        monaco.languages.register({ id: "cql" });
        monaco.languages.setMonarchTokensProvider("cql", cqlTokenProvider);
        monaco.languages.setLanguageConfiguration("cql", cqlLanguageConfig);
        monaco.languages.registerCompletionItemProvider("cql", cqlCompletitionProvider(this.autocomplete));
        monaco.editor.setTheme("vs-dark");

        monaco.languages.registerCodeLensProvider("cql", {
            provideCodeLenses: (model, token) => {
                return [
                    {
                        range: {
                            startLineNumber: 1,
                            startColumn: 1,
                            endLineNumber: 2,
                            endColumn: 1,
                        },
                        id: "First Line",
                        command: {
                            id: null,
                            title: "Abcdefgh",
                        },
                    },
                ];
            },
            resolveCodeLens: (model, codeLens, token) => {
                return codeLens;
            },
        });
    }

}
