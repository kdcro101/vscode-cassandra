import { from } from "rxjs";
import { concatMap } from "rxjs/operators";

import { CassandraClient } from "../cassandra-client";
import { Clusters } from "../clusters";
import { DataTypeManager } from "../data-type";
import { rootColumnType } from "../data-type/type-parser";
import { CassandraClusterData, CassandraDataType, CassandraTable } from "../types/index";
import { DataChangeItem } from "../types/messages";

export class DataChangeProcessor {
    private dataTypeManager = new DataTypeManager();

    constructor(private clusters: Clusters) {

    }
    public execute(item: DataChangeItem): Promise<void> {
        return new Promise((resolve, reject) => {
            const clusterName = item.clusterName;

            from(this.clusters.getClientAndStructure(clusterName)).pipe(
                concatMap((data) => this.processChange(item, data[0], data[1])),
            ).subscribe(() => {
                resolve();
            }, (e) => {
                reject(e);
            });

        });
    }

    private processChange(item: DataChangeItem, client: CassandraClient, struct: CassandraClusterData) {
        return new Promise((resolve, reject) => {

            const tableStruct = this.getTableStruct(struct, item);
            if (tableStruct == null) {
                reject("no_table");
                return;
            }
            const p: Array<Promise<void>> = [];
            if (item.type === "rowDelete") {
                p.push(this.doDeleteRow(item, tableStruct, client));
            }
            if (item.type === "cellUpdate") {
                p.push(this.doCellUpdate(item, tableStruct, client));
            }
            Promise.all(p)
                .then((result) => {
                    resolve();
                }).catch((e) => {
                    reject(e);
                });
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
    private doDeleteRow(item: DataChangeItem, tableStruct: CassandraTable, client: CassandraClient): Promise<void> {
        return new Promise((resolve, reject) => {

            const checkPk = this.checkPrimaryKey(item, tableStruct);
            const pkeys = tableStruct.primaryKeys;

            if (!checkPk) {
                reject("invalid_primary_key");
                return;
            }

            const where = pkeys.map((k) => `${k.name}=?`).join(" AND ");
            const q = `DELETE FROM ${item.keyspace}.${item.table} WHERE ${where}`;

            const params: any[] = []; // first is value to update
            pkeys.forEach((k) => {
                const ctype = rootColumnType(k.type);
                const kdt = this.dataTypeManager.get(ctype, item.primaryKeyValues[k.name].toString());
                params.push(kdt.value);
            });

            client.execute(q, params, true)
                .then(() => {
                    resolve();
                }).catch((e) => {
                    reject(e);
                });
        });
    }
    private doCellUpdate(item: DataChangeItem, tableStruct: CassandraTable, client: CassandraClient): Promise<void> {
        return new Promise((resolve, reject) => {

            const column = tableStruct.columns.find((c) => c.name === item.column);

            if (column == null) {
                reject("no_column");
                return;
            }
            if (column.kind !== "regular") {
                reject("not_regular_column");
                return;
            }
            const checkPk = this.checkPrimaryKey(item, tableStruct);
            const pkeys = tableStruct.primaryKeys;

            if (!checkPk) {
                reject("invalid_primary_key");
                return;
            }

            const type = rootColumnType(column.type);
            const dt = this.dataTypeManager.get(type, item.valueNew);

            if (!dt.valid) {
                reject("invalid_value");
            }

            const where = pkeys.map((k) => `${k.name}=?`).join(" AND ");
            const q = `UPDATE ${item.keyspace}.${item.table} SET ${item.column}=? WHERE ${where}`;

            const params: any[] = [dt.value]; // first is value to update
            pkeys.forEach((k) => {
                const ctype = rootColumnType(k.type);
                const kdt = this.dataTypeManager.get(ctype, item.primaryKeyValues[k.name].toString());
                params.push(kdt.value);
            });

            client.execute(q, params, true)
                .then(() => {
                    resolve();
                }).catch((e) => {
                    reject(e);
                });

        });
    }
    private checkPrimaryKey(item: DataChangeItem, tableStruct: CassandraTable): boolean {
        const pks = tableStruct.primaryKeys;
        const itemKeys = item.primaryKeyValues;
        const itemKeyNames = Object.keys(itemKeys);
        const have = pks.filter((pk) => itemKeys[pk.name] != null);

        if (itemKeyNames.length !== pks.length || have.length !== pks.length) {
            // no full keys!
            return false;
        }
        const checks = pks.map((k) => {
            const val = itemKeys[k.name].toString();
            const dt = this.dataTypeManager.get(k.type as CassandraDataType, val);
            const check = (dt.valid && dt.value != null);
            return check;
        });

        const passed = checks.filter((i) => i === true);
        if (passed.length === pks.length) {
            return true;
        }
        return false;
    }
}
