import * as vscode from "vscode";
import { Icons } from "../../../icons/index";
import { TreeItemType } from "../../../types";
export abstract class TreeItemBase extends vscode.TreeItem {
    public abstract type: TreeItemType;
    constructor(
        public label: string,
        public collapsibleState: vscode.TreeItemCollapsibleState,
    ) {
        super(label, collapsibleState);
        // this.setupIcon();
    }
    // private setupIcon() {
    //     const i = Icons.get(this.type);
    //     this.iconPath = i;
    // }
}
