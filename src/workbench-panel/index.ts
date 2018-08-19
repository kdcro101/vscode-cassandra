import * as path from "path";
import { fromEventPattern, ReplaySubject, Subject } from "rxjs";
import { take, takeUntil } from "rxjs/operators";
import * as vscode from "vscode";
import { InputParser } from "../parser";
import { ProcMessage, ProcMessageStrict } from "../types";
import { Workspace } from "../workspace";
import { generateHtml } from "./html";

export class WorkbenchPanel {
    public static opened: boolean = false;
    public panel: vscode.WebviewPanel = null;

    private stateWebviewReady = new ReplaySubject<void>(1);
    private eventDestroy = new Subject<void>();
    private eventMessage = new Subject<ProcMessage>();

    private parser = new InputParser();

    constructor(
        private context: vscode.ExtensionContext,
        private workspace: Workspace,

    ) {

        this.panel = vscode.window.createWebviewPanel("cassandra-console", "Cassandra console", vscode.ViewColumn.Active, {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.file(path.join(context.extensionPath, "ng")),
            ],
            retainContextWhenHidden: true,
        });

        this.panel.iconPath = vscode.Uri.file(path.join(this.context.extensionPath, "icons", "panel.png"));

        this.panel.onDidDispose(() => {
            WorkbenchPanel.opened = false;
            this.eventDestroy.next();
        }, null, context.subscriptions);

        this.panel.webview.html = generateHtml(this.context.extensionPath);

        fromEventPattern<ProcMessage>((f: (e: any) => any) => {
            return this.panel.webview.onDidReceiveMessage(f, null, context.subscriptions);
        }, (f: any, d: vscode.Disposable) => {
            d.dispose();
        }).pipe(
            takeUntil(this.eventDestroy),
        ).subscribe((m) => {
            this.eventMessage.next(m);
            this.onMessage(m);

        });

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
    private onMessage(e: ProcMessage) {
        console.log(e);
        switch (e.name) {
            case "w2e_parseInput":
                this.respondParseInput(e as ProcMessageStrict<"w2e_parseInput">);
                break;
        }
    }

    private respondParseInput(e: ProcMessageStrict<"w2e_parseInput">) {
        const o = this.parser.parse(e.data);
        const message: ProcMessageStrict<"e2w_parseOutput"> = {
            name: "e2w_parseOutput",
            data: o,
        };
        this.panel.webview.postMessage(message);
    }

}
