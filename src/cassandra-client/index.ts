import * as cassandra from "cassandra-driver";
import { EventEmitter } from "events";
import { BehaviorSubject, from } from "rxjs";
import { concatMap, filter } from "rxjs/operators";
import { CassandraKeyspace, ValidatedConfigClusterItem } from "../types";
import { CassandraClientEvents } from "../types/index";
import { collectKeyspaces } from "./collectors/index";

export class CassandraClient extends EventEmitter {

    public stateConnected = new BehaviorSubject<boolean>(false);

    private client: cassandra.Client;
    private structure: CassandraKeyspace[];
    private isInvalid: boolean = false;

    constructor(private config: ValidatedConfigClusterItem) {
        super();

        if (config.valid === false) {
            this.isInvalid = true;
        }

        const options: cassandra.ClientOptions = {
            contactPoints: config.contactPoints,
            // protocolOptions: {
            //     port: config.port,
            // },
        };

        if (config.authProvider && config.authProvider.class === "PlainTextAuthProvider") {
            options.authProvider = new cassandra.auth.PlainTextAuthProvider(config.authProvider.username, config.authProvider.password);
        }

        this.client = new cassandra.Client(options);

        // this.stateConnected.pipe(
        //     filter((d) => d === true),
        // ).subscribe(() => this.initializeClient());

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
    public getStructure(): Promise<CassandraKeyspace[]> {

        if (this.isInvalid) {
            return Promise.resolve([]);
        }

        return new Promise((resolve, reject) => {

            from(this.connect()).pipe(
                concatMap(() => collectKeyspaces(this.client)),
            ).subscribe((data) => {
                resolve(data);
            }, (e) => {
                console.log(e);
            });

        });

    }

}
