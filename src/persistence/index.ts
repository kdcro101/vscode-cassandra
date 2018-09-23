import * as fs from "fs-extra";
import * as path from "path";
import { from, of, Subject } from "rxjs";
import { concatMap, map, tap } from "rxjs/operators";
import * as vscode from "vscode";
import { generateId } from "../const/id";
import { WorkbenchCqlStatement } from "../types";

import { Workspace } from "../workspace";
import { HistoryManager } from "./history";
export type SaveStatementResultType = "canceled" | "success" | "error";
export type OpenStatementResultType = "canceled" | "success" | "error";
export interface SaveStatementResult {
    responseType: SaveStatementResultType;
    fsPath?: string;
    error?: string;
    fileName?: string;
}
export interface OpenStatementResult {
    responseType: OpenStatementResultType;
    fsPath?: string;
    error?: string;
    fileName?: string;
    body?: string;
}

export class Persistence {

    public history: HistoryManager;

    private editorExt = ".json";
    private editorFileNameRx = new RegExp(`\\d+${this.editorExt}`);

    private persistenceRoot: string;
    private persistencePathEditors: string;
    private persistencePathSaved: string;
    private persistencePathTemp: string;
    private persistencePathHistory: string;

    private eventSaveEditors = new Subject<WorkbenchCqlStatement[]>();

    constructor(private workspace: Workspace) {

        this.persistenceRoot = path.join(workspace.getRootPath(), ".cassandraWorkbench");
        this.persistencePathEditors = path.join(this.persistenceRoot, "editors");
        this.persistencePathSaved = path.join(this.persistenceRoot, "saved");
        this.persistencePathTemp = path.join(this.persistenceRoot, "temp");
        this.persistencePathHistory = path.join(this.persistenceRoot);

        this.history = new HistoryManager(this.persistencePathHistory);

        fs.mkdirpSync(this.persistencePathEditors);
        fs.mkdirpSync(this.persistencePathTemp);
        fs.mkdirpSync(this.persistencePathSaved);

        this.eventSaveEditors.pipe(
            concatMap((l) => this.execSaveEditorStatements(l)),
        ).subscribe(() => {
            console.log("Editors saved...");
        });

    }
    public statementOpen(): Promise<OpenStatementResult> {
        return new Promise((resolve, reject) => {
            const options: vscode.OpenDialogOptions = {
                defaultUri: vscode.Uri.file(this.persistencePathSaved),
                canSelectMany: false,
                canSelectFolders: false,
                filters: { "Apache Cassandra CQL": ["cql"] },
            };

            vscode.window.showOpenDialog(options)
                .then((result) => {

                    if (result == null || result.length === 0) {
                        const outEmpty: OpenStatementResult = {
                            responseType: "canceled",
                        };
                        resolve(outEmpty);
                        return;
                    }

                    const fsPath = result[0].fsPath;
                    fs.readFile(fsPath)
                        .then((data) => {
                            const out: OpenStatementResult = {
                                responseType: "success",
                                fsPath,
                                body: data.toString(),
                                fileName: path.basename(fsPath),
                            };
                            resolve(out);
                        }).catch((e) => {
                            reject(e);
                        });

                }, (e) => {
                    reject(e);
                });
        });
    }
    public statementSave(statement: WorkbenchCqlStatement, saveAsMode: boolean = false): Promise<SaveStatementResult> {
        return new Promise((resolve, reject) => {
            const pathDefault = vscode.Uri.file(path.join(this.persistencePathSaved, statement.filename));
            const options: vscode.SaveDialogOptions = {
                defaultUri: statement.fsPath != null ? vscode.Uri.file(statement.fsPath) : pathDefault,
                filters: { "Apache Cassandra CQL": ["cql"] },
            };
            // const p: Promise<vscode.Uri> = statement.fsPath == null || saveAsMode ?  : null;

            Promise.all([new Promise<vscode.Uri>((res, rej) => {
                if (statement.fsPath && !saveAsMode) {
                    res(vscode.Uri.file(statement.fsPath));
                    return;
                }
                vscode.window.showSaveDialog(options).then((uri) => {
                    res(uri);
                }, (e) => {
                    rej(e);
                });

            })]).then((args) => {
                const result = args[0];

                if (result == null) {
                    const outEmpty: SaveStatementResult = {
                        responseType: "canceled",
                    };
                    resolve(outEmpty);
                    return;
                }
                const fsPath = result.fsPath;
                fs.writeFile(fsPath, statement.body)
                    .then(() => {
                        const out: SaveStatementResult = {
                            responseType: "success",
                            fsPath,
                            fileName: path.basename(fsPath),
                        };
                        resolve(out);
                    }).catch((e) => {
                        reject(e);
                    });

            });

        });
    }
    public loadEditorStatements(): Promise<WorkbenchCqlStatement[]> {
        return new Promise((resolve, reject) => {

            from(fs.readdir(this.persistencePathEditors)).pipe(
                map((list) => list.filter((i) => i.search(this.editorFileNameRx) === 0)),
                map<string[], WorkbenchCqlStatement[]>((list) => {
                    const res: WorkbenchCqlStatement[] = list.map((i) => {
                        const p = path.join(this.persistencePathEditors, i);
                        return fs.readJsonSync(p);
                    });

                    return res;
                }),
            ).subscribe((list) => {

                console.log(list);

                resolve(list);
            });

        });
    }
    public saveEditorStatements(list: WorkbenchCqlStatement[]) {

        this.eventSaveEditors.next(list);
    }

    public execSaveEditorStatements(list: WorkbenchCqlStatement[]): Promise<void> {
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
                                const ep = path.join(pt, `${i}${this.editorExt}`);
                                files.push(ep);
                                return fs.writeFile(ep, JSON.stringify(e));
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

                    // vscode.commands.executeCommand("workbench.files.action.showActiveFileInExplorer");

                    resolve();
                }, (e) => {
                    reject(e);
                });

        });
    }
    public stringify(object: any): string {
        const s = JSON.stringify(object);
        const r = s.replace(/\\n/g, "\\n")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\f/g, "\\f");

        return r;
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
