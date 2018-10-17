import * as path from "path";
import { BehaviorSubject, fromEventPattern, ReplaySubject, Subject, zip } from "rxjs";
import { filter, take, takeUntil } from "rxjs/operators";
import * as vscode from "vscode";
import { ExtensionContextBundle, ProcMessage, ProcMessageList } from "../types";
import { WorkbenchCqlStatement } from "../types/editor";
import { Workspace } from "../workspace";
import { generateHtml } from "./html";

declare var extensionContextBundle: ExtensionContextBundle;

export class WorkbenchPanel {
    public static opened: boolean = false;

    public panel: vscode.WebviewPanel = null;
    public eventDestroy = new Subject<void>();
    public eventMessage = new Subject<ProcMessage>();
    public stateWebviewReady = new ReplaySubject<void>(1);
    public stateVisible = new BehaviorSubject<boolean>(true);

    private context: vscode.ExtensionContext = extensionContextBundle.context;

    constructor(
        private workspace: Workspace,
        private persistedEditors: WorkbenchCqlStatement[],

    ) {
        const dir = path.join(extensionContextBundle.context.extensionPath, "worker");

        this.panel = vscode.window.createWebviewPanel("cassandra-workbench", "Cassandra workbench", vscode.ViewColumn.Active, {
            enableScripts: true,
            enableFindWidget: false,
            localResourceRoots: [
                vscode.Uri.file(path.join(this.context.extensionPath, "ng")),
                vscode.Uri.file(path.join(this.context.extensionPath, "worker")),
                vscode.Uri.file(path.join(this.context.extensionPath, "node_modules")),
            ],
            retainContextWhenHidden: true,
        });

        this.panel.iconPath = vscode.Uri.file(path.join(this.context.extensionPath, "icons", "panel.png"));
        // this.panel.options

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

        this.panel.webview.html = generateHtml(this.context.extensionPath, persistedEditors);

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

        fromEventPattern<vscode.WebviewPanelOnDidChangeViewStateEvent>((f: (e: any) => any) => {
            return this.panel.onDidChangeViewState(f, null, this.context.subscriptions);
        }, (f: any, d: vscode.Disposable) => {
            d.dispose();
        }).pipe(
            takeUntil(this.eventDestroy),
        ).subscribe((m) => {
            this.stateVisible.next(m.webviewPanel.visible);
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
        zip(
            this.stateWebviewReady,
            this.stateVisible.pipe(filter((s) => s === true)),
        ).pipe(
            take(1),
            takeUntil(this.eventDestroy),
        ).subscribe(() => {
            console.log(`[panel.emitMessage] ${message.name}`);
            this.panel.webview.postMessage(message);
        });
    }
    private onMessage(e: ProcMessage) {
        const name: keyof ProcMessageList = e.name;
        switch (name) {

            case "w2e_onReady":
                console.log("webview panel ready");
                this.stateWebviewReady.next();
                break;
        }
    }

}
