
import * as path from "path";
import * as vscode from "vscode";
import { stringify } from "../const/stringify";
import { WorkbenchCqlStatement } from "../types";

export const generateHtml = (basePath: string, persistedStatements: WorkbenchCqlStatement[]) => {

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
