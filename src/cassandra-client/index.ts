import * as cassandra from "cassandra-driver";
import { EventEmitter } from "events";
import { BehaviorSubject, from } from "rxjs";
import { CassandraKeyspace, ValidatedConfigClusterItem } from "../types";
import { CassandraClientEvents, CassandraClusterData } from "../types/index";
import { collectKeyspaces } from "./collectors/index";
export type ColumnType = "custom" |
    "ascii" | "bigint" | "blob" | "boolean" | "counter" |
    "decimal" | "double" | "float" | "int" | "text" |
    "timestamp" | "uuid" | "varchar" | "varint" | "timeuuid" |
    "inet" | "date" | "time" | "smallint" | "tinyint" |
    "list" | "map" | "set" | "udt" | "tuple";

export interface ColumnInfo {
    name: string;
    type: ColumnType;
}

export interface QueryExecuteResult {
    info?: {
        speculativeExecutions: number,
        achievedConsistency: cassandra.types.consistencies,
        warnings: string[],
        customPayload: any,
    };
    rows?: any[];
    columns?: ColumnInfo[];
    error?: any;
    hasColumns: boolean;

}

export class CassandraClient extends EventEmitter {

    public stateConnected = new BehaviorSubject<boolean>(false);
    public clusterName: string;

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

        if (config.authProvider && config.authProvider.class === "PasswordAuthenticator") {
            options.authProvider = new cassandra.auth.PlainTextAuthProvider(config.authProvider.username, config.authProvider.password);
        }

        this.client = new cassandra.Client(options);
        this.clusterName = config.name;

    }
    public execute(cql: string, params?: any, preparedStatement: boolean = false): Promise<cassandra.types.ResultSet> {

        return this.client.execute(cql, params, { prepare: preparedStatement });

    }
    public connect(): Promise<void> {
        return new Promise((resolve, reject) => {

            this.client.connect()
                .then((result) => {
                    console.log("Connected to cluster with %d host(s): %j", this.client.hosts.length, this.client.hosts.keys());
                    resolve();

                }).catch((e) => {
                    reject(e);
                });

        });
    }
    public on<T extends keyof CassandraClientEvents>(event: T, callback: (data: CassandraClientEvents[T]) => void) {
        return super.on(event, callback);
    }
    public emit<T extends keyof CassandraClientEvents>(event: T, data: CassandraClientEvents[T]) {
        return super.emit(event, data);
    }
    public getStructure(): Promise<CassandraClusterData> {
        return new Promise((resolve, reject) => {

            const resolveError = (e: any) => {
                const o: CassandraClusterData = {
                    keyspaces: [],
                    name: this.config.name,
                    connected: false,
                    error: e,
                };
                resolve(o);
            };

            if (this.isInvalid) {
                resolveError("invalid");
                return;

            }

            from(collectKeyspaces(this.client))
                .pipe().subscribe((data) => {

                    const o: CassandraClusterData = {
                        name: this.config.name,
                        keyspaces: data,
                        connected: true,
                    };
                    resolve(o);

                }, (e) => {
                    // resolve error
                    console.log(`Error connecting to cluster '${this.config.name}'`);
                    resolveError(e);

                });

        });

    }
    public getNativeTypes(code: number): ColumnType {

        let out: ColumnType = null;

        switch (code) {
            case cassandra.types.dataTypes.custom:
                out = "custom";
                break;
            case cassandra.types.dataTypes.ascii:
                out = "ascii";
                break;
            case cassandra.types.dataTypes.bigint:
                out = "bigint";
                break;
            case cassandra.types.dataTypes.blob:
                out = "blob";
                break;
            case cassandra.types.dataTypes.boolean:
                out = "boolean";
                break;
            case cassandra.types.dataTypes.counter:
                out = "counter";
                break;
            case cassandra.types.dataTypes.decimal:
                out = "decimal";
                break;
            case cassandra.types.dataTypes.double:
                out = "double";
                break;
            case cassandra.types.dataTypes.float:
                out = "float";
                break;
            case cassandra.types.dataTypes.int:
                out = "int";
                break;
            case cassandra.types.dataTypes.text:
                out = "text";
                break;
            case cassandra.types.dataTypes.timestamp:
                out = "timestamp";
                break;
            case cassandra.types.dataTypes.uuid:
                out = "uuid";
                break;
            case cassandra.types.dataTypes.varchar:
                out = "varchar";
                break;
            case cassandra.types.dataTypes.varint:
                out = "varint";
                break;
            case cassandra.types.dataTypes.timeuuid:
                out = "timeuuid";
                break;
            case cassandra.types.dataTypes.inet:
                out = "inet";
                break;
            case cassandra.types.dataTypes.date:
                out = "date";
                break;
            case cassandra.types.dataTypes.time:
                out = "time";
                break;
            case cassandra.types.dataTypes.smallint:
                out = "smallint";
                break;
            case cassandra.types.dataTypes.tinyint:
                out = "tinyint";
                break;
            case cassandra.types.dataTypes.list:
                out = "list";
                break;
            case cassandra.types.dataTypes.map:
                out = "map";
                break;
            case cassandra.types.dataTypes.set:
                out = "set";
                break;
            case cassandra.types.dataTypes.udt:
                out = "udt";
                break;
            case cassandra.types.dataTypes.tuple:
                out = "tuple";
                break;
        }
        return out;
    }
}
