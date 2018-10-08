import * as fs from "fs-extra";
import * as moment from "moment";
import * as path from "path";
import { from } from "rxjs";
import { concatMap, map, mapTo } from "rxjs/operators";
import { generateId } from "../const/id";
import { HistroyItem } from "../types/history";

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
                    body: body != null ? body.trim() : "",
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
    public removeAll() {
        return new Promise((resolve, reject) => {

            from(this.save([])).pipe(
            ).subscribe(() => {
                resolve();
            }, (e) => {
                reject(e);
            });

        });
    }
    public remove(id: string) {
        return new Promise((resolve, reject) => {

            from(this.get()).pipe(
                map((list) => list.filter((i) => i.id !== id)),
                concatMap((filtered) => this.save(filtered)),
            ).subscribe(() => {
                resolve();
            }, (e) => {
                reject(e);
            });

        });
    }
    private save(list: HistroyItem[]): Promise<void> {
        return fs.writeJson(this.filePath, list);
    }
}
