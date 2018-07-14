import * as path from "path";
import { from as observableFrom, fromEventPattern, ReplaySubject, Subject } from "rxjs";
import { concatMap, filter, take, takeUntil, tap } from "rxjs/operators";
import * as vscode from "vscode";
import { Workspace } from "../workspace";
import { generateHtml } from "./html";

export class WorkbenchPanel {
    public static opened: boolean = false;
    public panel: vscode.WebviewPanel = null;

    private stateWebviewReady = new ReplaySubject<void>(1);
    private eventDestroy = new Subject<void>();
    // private eventMessage = new Subject<ProcMessage>();

    constructor(
        private context: vscode.ExtensionContext,
        private workspace: Workspace,
        // private config: RedisConsoleConfig,
        // private log: RedisLog,
    ) {

        // this.configManager.save(this.config);

        this.panel = vscode.window.createWebviewPanel("cassandra-console", "Cassandra console", vscode.ViewColumn.Active, {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.file(path.join(context.extensionPath, "ng")),
            ],
            retainContextWhenHidden: true,
        });
        this.panel.onDidDispose(() => {
            WorkbenchPanel.opened = false;
            this.eventDestroy.next();
        }, null, context.subscriptions);

        this.panel.webview.html = generateHtml(this.context.extensionPath);

    }
    public start() {

        this.panel.reveal();

        WorkbenchPanel.opened = true;

        this.stateWebviewReady.pipe(
            take(1),
        ).subscribe(() => {

        });
    }
    public reveal() {
        return this.panel.reveal();
    }
    public end() {
        this.panel.dispose();
    }

}
