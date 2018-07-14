
import * as path from "path";
import * as vscode from "vscode";
// import { RedisConsoleConfig } from "../types";

export const generateHtml = (basePath: string) => {
    //   const iconsPath = "vscode-resource:" + this.context.extensionPath + "/svg/symbol-sprite.svg";
    const ws = vscode.workspace.getConfiguration(null, null);
    const fontFamily = ws.editor.fontFamily;
    // const configString = JSON.stringify(config);

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
            var redisConfig = JSON.parse('');
            </script>
        </head>
        <body>
            <app-root></app-root>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "runtime.js")}"></script>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "polyfills.js")}"></script>
            <script type="text/javascript" src="${path.join("vscode-resource:", basePath, "ng", "main.js")}"></script>
        </body>
    </html>`;

};
