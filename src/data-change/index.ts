import { from } from "rxjs";
import { concatMap } from "rxjs/operators";
import { CassandraClient } from "../cassandra-client";
import { Clusters } from "../clusters";
import { CassandraClusterData, CassandraTable } from "../types/index";
import { DataChangeItem } from "../types/messages";

export class DataChangeProcessor {
    constructor(private clusters: Clusters) {

    }
    public execute(item: DataChangeItem): Promise<void> {
        return new Promise((resolve, reject) => {
            const clusterName = item.clusterName;

            from(this.clusters.getClientAndStructure(clusterName)).pipe(
                concatMap((data) => this.processChange(item, data[0], data[1])),
            );

        });
    }

    private processChange(item: DataChangeItem, client: CassandraClient, struct: CassandraClusterData) {
        return new Promise((resolve, reject) => {

            const tableStruct = this.getTableStruct(struct, item);
            if (tableStruct == null) {
                reject("no_table");
                return;
            }

            if (item.type === "rowDelete") {
                return this.doDeleteRow(item, tableStruct);
            }
            if (item.type === "cellUpdate") {
                return this.doCellUpdate(item, tableStruct);
            }

        });
    }
    private getTableStruct(struct: CassandraClusterData, item: DataChangeItem): CassandraTable {
        const keyspace = item.keyspace;
        const table = item.table;

        const ksd = struct.keyspaces.find((i) => i.name === keyspace);
        if (ksd == null) {
            return null;
        }
        const tbd = ksd.tables.find((t) => t.name === table);
        return tbd;
    }
    private doDeleteRow(item: DataChangeItem, tableStruct: CassandraTable) {

    }
    private doCellUpdate(item: DataChangeItem, tableStruct: CassandraTable) {

    }
}
