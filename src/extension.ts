import * as cassandra from "cassandra-driver";
import * as vscode from "vscode";
// const consistencies: CassandraConsistencies = {
//     ANY: 0,
//     ONE: 1,
//     TWO: 2,
//     THREE: 3,
//     QUORUM: 4,
//     ALL: 5,
//     LOCAL_QUORUM: 6,
//     EACH_QUORUM: 7,
//     SERIAL: 8,
//     LOCAL_SERIAL: 9,
//     LOCAL_ONE: 10,
// };
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const client = new cassandra.Client({
        contactPoints: ["10.42.0.254"],
        authProvider: new cassandra.auth.PlainTextAuthProvider("cassandra", "__1234567890__"),
    });

    console.log(client);

    client.connect((err: any) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(client);
        console.log("Connected to cluster with %d host(s): %j", client.hosts.length, client.hosts.keys());

        client.execute("describe keyspaces;", null, {
            prepare: false,
            consistency: 6,
            autoPage: true,
        }, (_err: any, result: any) => {
            if (_err) {
                console.log(_err);
                return;
            }
            console.log(result);
        });

    });

    // context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
