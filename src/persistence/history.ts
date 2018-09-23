import * as fs from "fs-extra";
import * as moment from "moment";
import * as path from "path";
import { generateId } from "../const/id";

export interface HistroyItem {
    id: string;
    timestamp: string;
    clusterName: string;
    keyspace: string;
    body: string;
}

export class HistoryManager {
    private filePath: string;
    constructor(private location: string) {
        this.filePath = path.join(location, "history.json");
    }
    public append(clusterName: string, keyspace: string, body: string) {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.get(),
            ]).then((result) => {

                const list = result[0];

                if (list.length > 0 && list[list.length - 1].body === body) {
                    // try to prevent duplicates
                    resolve();
                    return;
                }

                const m = moment(new Date());
                const ts = m.toISOString();
                const item: HistroyItem = {
                    id: generateId(),
                    clusterName,
                    keyspace,
                    timestamp: ts,
                    body,
                };
                list.push(item);

                return this.save(list);

            }).then(() => {
                resolve();
            }).catch((e) => {
                reject(e);
            });
        });
    }

    public get(): Promise<HistroyItem[]> {
        return new Promise((resolve, reject) => {

            fs.readJson(this.filePath)
                .then((result) => {
                    if (!result) {
                        resolve([]);
                        return;
                    }
                    resolve(result);
                }).catch((e) => {
                    resolve([]);
                });

        });

    }
    private save(list: HistroyItem[]): Promise<void> {
        return fs.writeJson(this.filePath, list);
    }

}
