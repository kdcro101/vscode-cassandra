import * as vscode from "vscode";
export class Workspace {
    private ws = vscode.workspace.getConfiguration();
    public getRootPath(): string {
        return vscode.workspace.workspaceFolders[0].uri.fsPath;
    }

    public isMultiRootWorkspace(): boolean {
        return vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 1;
    }
    // public read<T extends keyof RedisConsoleConfig>(key: T): RedisConsoleConfig[T] {
    //     const v: RedisConsoleConfig[T] = this.ws.get("redis-console." + key) as RedisConsoleConfig[T];
    //     return v;
    // }
    // public write<T extends keyof RedisConsoleConfig>(key: T, value: RedisConsoleConfig[T]): void {
    //     this.ws.update("redis-console." + key, value, false);
    // }
}
