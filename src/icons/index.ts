import * as path from "path";
import * as vscode from "vscode";

import { TreeItemType, TreeViewIcon } from "../types";

export class Icons {
    public static context: vscode.ExtensionContext = null;

    public static get(type: TreeItemType): TreeViewIcon {

        if (Icons.context == null) {
            throw new Error("Icons.context is null");
            return null;
        }

        const base = Icons.context.extensionPath;

        const icon: TreeViewIcon = {
            dark: path.join(base, "icons", type, "dark.svg"),
            light: path.join(base, "icons", type, "light.svg"),
        };

        return icon;
    }

}
