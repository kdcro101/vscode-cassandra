import * as cassandra from "cassandra-driver";
import { ValidatedConfigClusterItem } from "../../types";

export class CassandraClientOptions {

    public static get(config: ValidatedConfigClusterItem, keyspace?: string): cassandra.ClientOptions {
        if (config.valid === false) {
            return null;
        }
        const options: cassandra.ClientOptions = {
            contactPoints: config.contactPoints,
        };
        if (config.authProvider && config.authProvider.class === "PlainTextAuthProvider") {
            options.authProvider = new cassandra.auth.PlainTextAuthProvider(config.authProvider.username, config.authProvider.password);
        }
        if (config.port != null) {
            options.protocolOptions = {
                port: config.port,
            };
        }
        if (keyspace != null && keyspace.length > 0) {
            options.keyspace = keyspace;
        }

        return options;
    }

}
