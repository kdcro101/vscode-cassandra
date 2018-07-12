import * as cassandra from "cassandra-driver";
import { CassandraKeyspace } from "../types";
import { collectColumns, collectKeyspaces, collectTables } from "./collectors/index";

import { EventEmitter } from "events";
import { BehaviorSubject, from } from "rxjs";
import { filter } from "rxjs/operators";
import { CassandraClientEvents } from "../types/index";

export class CassandraClient extends EventEmitter {

    public stateConnected = new BehaviorSubject<boolean>(false);

    private client: cassandra.Client;
    private structure: CassandraKeyspace[];

    constructor() {
        super();
        this.client = new cassandra.Client({
            contactPoints: ["10.42.0.254"],
            authProvider: new cassandra.auth.PlainTextAuthProvider("cassandra", "__1234567890__"),
        });

        this.stateConnected.pipe(
            filter((d) => d === true),
        ).subscribe(() => this.initializeClient());

    }
    public connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.connect((err: any) => {
                if (err) {
                    this.stateConnected.next(false);
                    this.emit("error", err);
                    reject(err);
                    return;
                }
                console.log(this.client);
                console.log("Connected to cluster with %d host(s): %j", this.client.hosts.length, this.client.hosts.keys());
                this.stateConnected.next(true);
                this.emit("connected", null);
                resolve();
            });
        });
    }
    public on<T extends keyof CassandraClientEvents>(event: T, callback: (data: CassandraClientEvents[T]) => void) {
        return super.on(event, callback);
    }
    public emit<T extends keyof CassandraClientEvents>(event: T, data: CassandraClientEvents[T]) {
        return super.emit(event, data);
    }
    private initializeClient() {
        from(collectKeyspaces(this.client)).subscribe((data) => {
            this.structure = data;
        }, (e) => {
            console.log(e);
        });
    }

}
