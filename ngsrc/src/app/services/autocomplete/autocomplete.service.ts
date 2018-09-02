import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { filter, take, tap, timeout } from "rxjs/operators";
import { CompletitionOutput } from "../../../../../src/completition";
import { AutocompleteItem, ProcMessageStrict } from "../../../../../src/types";
import { generateId } from "../../const/id";
import { MessageService } from "../message/message.service";

@Injectable({
    providedIn: "root",
})
export class AutocompleteService {

    constructor(private messages: MessageService) {

    }
    public getCandidates(partialInput: string): Subject<CompletitionOutput> {

        console.log(`AUTOCOMLETE: [${partialInput}]`);

        const o = new Subject<CompletitionOutput>();
        const id = generateId();

        const mo: ProcMessageStrict<"w2e_autocompleteRequest"> = {
            name: "w2e_autocompleteRequest",
            data: {
                id,
                partial: partialInput,
            },
        };

        this.messages.eventMessage.pipe(
            timeout(10000),
            filter((mi) => mi.name === "e2w_autocompleteResponse"),
            filter((mi: ProcMessageStrict<"e2w_autocompleteResponse">) => mi.data.id === id),
            take(1),
        ).subscribe((message) => {
            const result = message.data.result;
            o.next(result);
        }, (e) => {
            console.log(e);
            o.error("autocomplete_error");
        });

        this.messages.emit(mo);

        return o;
    }

}
