import * as path from "path";
import { fromEventPattern, ReplaySubject, Subject } from "rxjs";
import { take, takeUntil } from "rxjs/operators";
import * as vscode from "vscode";
import { InputParser } from "../parser";
import { ExtensionContextBundle, ProcMessage, ProcMessageList, ProcMessageStrict } from "../types";
import { Workspace } from "../workspace";
import { generateHtml } from "./html";

declare var extensionContextBundle: ExtensionContextBundle;

export class WorkbenchPanel {
    public static opened: boolean = false;

    public panel: vscode.WebviewPanel = null;
    public eventDestroy = new Subject<void>();
    public eventMessage = new Subject<ProcMessage>();
    public stateWebviewReady = new ReplaySubject<void>(1);

    private context: vscode.ExtensionContext = extensionContextBundle.context;

    private parser = new InputParser();

    constructor(
        private workspace: Workspace,

    ) {

        this.panel = vscode.window.createWebviewPanel("cassandra-console", "Cassandra console", vscode.ViewColumn.Active, {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.file(path.join(this.context.extensionPath, "ng")),
            ],
            retainContextWhenHidden: true,
        });

        this.panel.iconPath = vscode.Uri.file(path.join(this.context.extensionPath, "icons", "panel.png"));

        fromEventPattern<void>((f: (e: any) => any) => {
            return this.panel.onDidDispose(f, null, this.context.subscriptions);
        }, (f: any, d: vscode.Disposable) => {
            d.dispose();
        }).pipe(
            takeUntil(this.eventDestroy),
        ).subscribe(() => {
            WorkbenchPanel.opened = false;
            this.stateWebviewReady = new ReplaySubject<void>(1);
            this.eventDestroy.next();
        });

        this.panel.webview.html = generateHtml(this.context.extensionPath);

        fromEventPattern<ProcMessage>((f: (e: any) => any) => {
            return this.panel.webview.onDidReceiveMessage(f, null, this.context.subscriptions);
        }, (f: any, d: vscode.Disposable) => {
            d.dispose();
        }).pipe(
            takeUntil(this.eventDestroy),
        ).subscribe((m) => {
            this.eventMessage.next(m);
            this.onMessage(m);

        });

    }
    public start(): Promise<void> {
        return new Promise((resolve, reject) => {

            this.panel.reveal();
            this.stateWebviewReady
                .pipe(
                    take(1),
                ).subscribe(() => {
                    WorkbenchPanel.opened = true;
                    resolve();
                }, (e) => {
                    reject(e);
                });

        });
    }
    public emitMessage(message: ProcMessage) {
        this.stateWebviewReady.pipe(
            take(1),
            takeUntil(this.eventDestroy),
        ).subscribe(() => {
            this.panel.webview.postMessage(message);
        });
    }
    private onMessage(e: ProcMessage) {
        const name: keyof ProcMessageList = e.name;
        switch (name) {
            case "w2e_parseInput":
                this.respondParseInput(e as ProcMessageStrict<"w2e_parseInput">);
                break;
            case "w2e_parseInput":
                this.respondParseInput(e as ProcMessageStrict<"w2e_parseInput">);
                break;
            case "w2e_onReady":
                console.log("webview panel ready");
                this.stateWebviewReady.next();
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
