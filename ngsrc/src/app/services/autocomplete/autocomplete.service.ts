import { Injectable } from "@angular/core";

import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";
import { filter, take, timeout } from "rxjs/operators";
import { CompletitionOutput } from "../../../../../src/completition";
import { ProcMessageStrict } from "../../../../../src/types";
import { CassandraClusterData } from "../../../../../src/types/index";
import { CqlAnalysis, InputParseResult } from "../../../../../src/types/parser";
import { generateId } from "../../const/id";
import { MessageService } from "../message/message.service";

@Injectable({
    providedIn: "root",
})
export class AutocompleteService {

    public activeClusterName: string;
    public activeClusterData: CassandraClusterData;
    public activeKeyspace: string;
    public activeParseResults: InputParseResult;
    public activeAnalysis: CqlAnalysis;
    public stateCluster = new BehaviorSubject<CassandraClusterData>(null);
    public stateKeypace = new BehaviorSubject<string>(null);
    // public stateAnalysis = new BehaviorSubject<CqlAnalysis>(null);
    public stateAnalysis = new ReplaySubject<CqlAnalysis>(1);

    constructor(private messages: MessageService) { }

    public reset() {
        this.stateAnalysis = new ReplaySubject<CqlAnalysis>(1);
    }
    public setParseResult(input: InputParseResult) {
        this.activeParseResults = input;
        this.activeAnalysis = input.analysis;
        this.stateAnalysis.next(this.activeAnalysis);
    }
    public setCluster(clusterName: string, data: CassandraClusterData) {
        this.activeClusterName = clusterName;
        this.activeClusterData = data;
        this.stateCluster.next(data);
    }
    public setKeyspace(keyspace: string) {
        this.activeKeyspace = keyspace;
        try {

            this.stateKeypace.next(keyspace);
        } catch (e) {
            console.log(e);
        }
    }

    public getCandidates(partialInput: string): Subject<CompletitionOutput> {

        // console.log(`AUTOCOMPLETE: [${partialInput}]`);

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
