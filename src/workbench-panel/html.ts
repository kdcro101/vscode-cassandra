
import * as path from "path";
import * as vscode from "vscode";
import { WorkbenchCqlStatement } from "../types";
import { Workspace } from "../workspace";

export const generateHtml = (basePath: string, persistedStatements: WorkbenchCqlStatement[]) => {

    const ws = vscode.workspace.getConfiguration(null, null);
    const workspace = new Workspace();
    const fontFamily = ws.editor.fontFamily;
    const lineHeight = ws.editor.lineHeight;
    const fontSize = ws.editor.fontSize;
    const base64Statements = Buffer.from(JSON.stringify(persistedStatements)).toString("base64");
    const splitPosition = workspace.read("splitPosition");

    const runtimeJsSrc = vscode.Uri.file(path.join(basePath, "ng", "runtime.js")).with({ scheme: "vscode-resource" });
    const polyfillsJsSrc = vscode.Uri.file(path.join(basePath, "ng", "polyfills.js")).with({ scheme: "vscode-resource" });
    const scriptsJsSrc = vscode.Uri.file(path.join(basePath, "ng", "scripts.js")).with({ scheme: "vscode-resource" });
    const mainJsSrc = vscode.Uri.file(path.join(basePath, "ng", "main.js")).with({ scheme: "vscode-resource" });

    const monacoJsSrc = vscode.Uri.file(path.join(basePath, "node_modules", "monaco-editor", "min", "vs"))
        .with({ scheme: "vscode-resource" });
    const stylesCssSrc = vscode.Uri.file(path.join(basePath, "ng", "styles.css"))
        .with({ scheme: "vscode-resource" });

    return `
    <!doctype html>
     <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Ngsrc</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="${stylesCssSrc.toString()}">
            <script>

                const vscode = acquireVsCodeApi();
                var codeFontFamily = "${fontFamily}";
                var codeFontSize = "${fontSize}";
                var codeLineHeight = "${lineHeight}";
                var persistedStatements = JSON.parse(window.atob("${base64Statements}"));
                var splitPosition = ${ splitPosition > 0 && splitPosition < 100 ? splitPosition : 50}
            </script>
        </head>
        <body ondragstart="return false;" ondrop="return false;" class="app-icon">
            <script>var require = { paths: { 'vs': '${monacoJsSrc.toString()}' } };</script>

            <ui-view id="appview5332" class="app-root mat-app-background"></ui-view>
            <script type="text/javascript" src="${runtimeJsSrc.toString()}"></script>
            <script type="text/javascript" src="${polyfillsJsSrc.toString()}"></script>
            <script type="text/javascript" src="${scriptsJsSrc.toString()}"></script>
            <script type="text/javascript" src="${mainJsSrc.toString()}"></script>

        </body>
    </html>`;

};
export const generateHtmlDev = (basePath: string, persistedStatements: WorkbenchCqlStatement[]) => {

    const ws = vscode.workspace.getConfiguration(null, null);
    const fontFamily = ws.editor.fontFamily;
    const lineHeight = ws.editor.lineHeight;
    const fontSize = ws.editor.fontSize;
    const base64Statements = Buffer.from(JSON.stringify(persistedStatements)).toString("base64");

    return `
    <!doctype html>
     <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>vscode-cassandra</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script>
                const vscode = acquireVsCodeApi();
                var codeFontFamily = "${fontFamily}";
                var codeFontSize = "${fontSize}";
                var codeLineHeight = "${lineHeight}";
                var persistedStatements = JSON.parse(window.atob("${base64Statements}"));
            </script>
            <link rel="stylesheet" href="${path.join("vscode-resource:", basePath, "ng", "styles.css")}">
        </head>
        <body ondragstart="return false;" ondrop="return false;" class="app-icon">
            <script>var require = { paths: { 'vs': '${path.join("vscode-resource:", basePath,
            "node_modules/monaco-editor/min/vs")}' } };</script>
            <ui-view id="appview5332" class="app-root mat-app-background"></ui-view>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "runtime.js")}"></script>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "polyfills.js")}"></script>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "scripts.js")}"></script>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "vendor.js")}"></script>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "main.js")}"></script>
         </body>
    </html>`;

};
export const generateHtmlProd = (basePath: string, persistedStatements: WorkbenchCqlStatement[]) => {

    const ws = vscode.workspace.getConfiguration(null, null);
    const fontFamily = ws.editor.fontFamily;
    const lineHeight = ws.editor.lineHeight;
    const fontSize = ws.editor.fontSize;
    const base64Statements = Buffer.from(JSON.stringify(persistedStatements)).toString("base64");

    return `
    <!doctype html>
     <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Ngsrc</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="${path.join("vscode-resource:", basePath, "ng", "styles.css")}">
            <script>
                const vscode = acquireVsCodeApi();
                var codeFontFamily = "${fontFamily}";
                var codeFontSize = "${fontSize}";
                var codeLineHeight = "${lineHeight}";
                var persistedStatements = JSON.parse(window.atob("${base64Statements}"));
            </script>
        </head>
        <body ondragstart="return false;" ondrop="return false;" class="app-icon">
            <script>var require = { paths: { 'vs': '${path.join("vscode-resource:", basePath,
            "node_modules/monaco-editor/min/vs")}' } };</script>
            <ui-view id="appview5332" class="app-root mat-app-background"></ui-view>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "runtime.js")}"></script>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "polyfills.js")}"></script>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "scripts.js")}"></script>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "main.js")}"></script>

        </body>
    </html>`;

};
