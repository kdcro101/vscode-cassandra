
import * as fs from "fs-extra";
import * as jsminModule from "jsmin";
import { cloneDeep } from "lodash";
import * as path from "path";
import { from, ReplaySubject } from "rxjs";
import { concatMap, map } from "rxjs/operators";
import * as vscode from "vscode";
import { PersistedConfigClusterItem, ValidatedConfigClusterItem } from "../types";
import { Workspace } from "../workspace";

const jsmin = jsminModule.jsmin;

export class ConfigurationManager {
    public stateConfiguration = new ReplaySubject<ValidatedConfigClusterItem[]>(1);
    public confPath: string;
    private confDefaultPath: string;
    constructor(private context: vscode.ExtensionContext, private workspace: Workspace) {
        const root = this.workspace.getRootPath();
        this.confPath = path.join(root, ".cassandraWorkbench.jsonc");
        this.confDefaultPath = path.join(context.extensionPath, "config", "default.jsonc");

    }

    public generateDefault(): Promise<void> {
        return new Promise((resolve, reject) => {

            from(fs.ensureFile(this.confPath)).pipe(
                concatMap(() => fs.readFile(this.confPath)),
                map((data) => jsmin(data.toString())),
                concatMap((contents) => {
                    if (contents.trim().length === 0) {
                        return fs.copy(this.confDefaultPath, this.confPath);
                    }
                    return Promise.resolve();
                }),

            ).subscribe(() => {
                resolve();
            }, (e) => reject(e));

        });
    }
    public loadConfig(): Promise<void> {
        return new Promise((resolve, reject) => {

            from(fs.pathExists(this.confPath)).pipe(
                concatMap((exist) => {
                    if (!exist) {
                        return this.generateDefault();
                    }
                    return Promise.resolve();
                }),
                concatMap(() => fs.readFile(this.confPath)),
                map((buffer) => buffer.toString()),
                map((data) => jsmin(data)),
                map((data) => this.parseConfigString(data)),
                map((data) => this.validConfig(data)),
            ).subscribe((data) => {
                this.stateConfiguration.next(data);
                resolve();
            }, (e) => {
                reject(e);
            });

        });
        // return ;
    }
    private parseConfigString(data: string): any {
        let o: any = null;
        try {
            o = JSON.parse(data);
            return o;
        } catch (e) {
            return [];
        }
    }
    private validConfig(data: any): ValidatedConfigClusterItem[] {

        if (!Array.isArray(data)) {
            return [];
        }

        const array = (data as any[]);

        if (array.length === 0) {
            return [];
        }
        const list: ValidatedConfigClusterItem[] = array.map((i: PersistedConfigClusterItem) => {
            // const validated = i as ValidatedConfigClusterItem;
            const v = this.validateConfigItem(i);
            // validated.valid = v;
            return v;
        });

        return list;
    }
    private validateConfigItem(item: PersistedConfigClusterItem): ValidatedConfigClusterItem {
        const out = cloneDeep(item) as ValidatedConfigClusterItem;
        if (item === null || Object.keys(item).length === 0) {
            out.valid = false;
            out.errors = ["Invalid configuration item"];
            return out;
        }

        if (!Array.isArray(item.contactPoints) || item.contactPoints.length === 0) {
            out.valid = false;
            out.errors = ["No contact points defined. Check config"];
            return out;
        }

        if (item.name == null) {
            out.valid = false;
            out.errors = ["Name is not defined. Check config"];
            return out;

        }

        if (item.authProvider == null) {
            out.valid = true;
            return out;
        }
        if (item.authProvider != null &&
            item.authProvider.class === "PlainTextAuthProvider" &&
            item.authProvider.username != null && item.authProvider.password != null) {
            out.valid = true;
            return out;
        }

        out.valid = false;
        out.errors = ["AuthProvider invalid. Check config"];
        return out;
    }

}
