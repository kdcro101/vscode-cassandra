import * as fs from "fs-extra";
import * as path from "path";
import { of } from "rxjs";
import { concatMap, tap } from "rxjs/operators";
import * as vscode from "vscode";
import { generateId } from "../const/id";
import { WorkbenchCqlStatement } from "../types";
import { Workspace } from "../workspace";

export class Persistence {

    private persistenceRoot: string;
    private persistencePathEditors: string;
    private persistencePathSaved: string;
    private persistencePathTemp: string;

    constructor(private workspace: Workspace) {
        this.persistenceRoot = path.join(workspace.getRootPath(), ".cassandraWorkbench");
        this.persistencePathEditors = path.join(this.persistenceRoot, "editors");
        this.persistencePathSaved = path.join(this.persistenceRoot, "saved");
        this.persistencePathTemp = path.join(this.persistenceRoot, "temp");

        fs.mkdirpSync(this.persistencePathEditors);
        fs.mkdirpSync(this.persistencePathTemp);
        fs.mkdirpSync(this.persistencePathSaved);

    }
    public loadEditors(): Promise<WorkbenchCqlStatement[]> {
        return new Promise((resolve, reject) => {

        });
    }
    public saveEditors(list: WorkbenchCqlStatement[]) {
        return new Promise((resolve, reject) => {
            const id = generateId();
            const pt = this.persistencePathTemp;

            this.emptyTempDir();

            of(true)
                .pipe(
                    concatMap<boolean, string[]>(() => {
                        return new Promise((_resolve, _reject) => {

                            const files: string[] = [];
                            const ps = list.map((e, i) => {
                                const ep = path.join(pt, `${i}.json`);
                                files.push(ep);
                                return fs.writeJson(ep, e);
                            });
                            Promise.all(ps)
                                .then((result) => {
                                    _resolve(files);
                                }).catch((e) => {
                                    _reject(e);
                                });
                        });
                    }),
                    concatMap((files) => {
                        this.emptyEditorsDir();
                        const ps = files.map((f) => {
                            const b = path.basename(f);
                            const d = path.join(this.persistencePathEditors, b);
                            return fs.move(f, d);
                        });

                        return Promise.all(ps);
                    }),
                    tap(() => this.emptyTempDir()),
                ).subscribe(() => {

                    vscode.commands.executeCommand("workbench.files.action.showActiveFileInExplorer");

                    resolve();
                }, (e) => {
                    reject(e);
                });

        });
    }

    private emptyEditorsDir() {
        try {
            fs.removeSync(this.persistencePathEditors);
        } catch (e) { console.log(e); }
        fs.mkdirpSync(this.persistencePathEditors);

    }
    private emptySavedDir() {
        try {
            fs.removeSync(this.persistencePathSaved);
        } catch (e) { console.log(e); }
        fs.mkdirpSync(this.persistencePathSaved);
    }
    private emptyTempDir() {
        try {
            fs.removeSync(this.persistencePathTemp);
        } catch (e) { console.log(e); }
        fs.mkdirpSync(this.persistencePathTemp);
    }

}
