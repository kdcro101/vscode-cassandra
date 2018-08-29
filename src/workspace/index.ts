import * as vscode from "vscode";
export class Workspace {
    private ws = vscode.workspace.getConfiguration();
    public getRootPath(): string {
        return vscode.workspace.workspaceFolders[0].uri.fsPath;
    }

    public isMultiRootWorkspace(): boolean {
        return vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 1;
    }

}
