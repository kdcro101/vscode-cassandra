import * as vscode from "vscode";
import { Icons } from "../../../icons";
import { TreeItemType } from "../../../types";
import { TreeItemBase } from "../tree-item-base";

export class TreeItemColumns extends TreeItemBase {
    public type: TreeItemType = "columns";
    constructor(
        public label: string,
        public collapsibleState: vscode.TreeItemCollapsibleState,
        public value: string,
        public contextValue: string,
        public resourceName: string,
        // public resourceType: ResourceType,
        // public icon?: string | vscode.Uri | { light: string | vscode.Uri; dark: string | vscode.Uri },
        public command?: vscode.Command,
        public id?: string,
        public parentId?: string,
        public tooltipText?: string,
    ) {
        super(label, collapsibleState);

        this.resourceUri = vscode.Uri.file(value);
        this.tooltip = value;
        this.iconPath = Icons.get(this.type);
        this.tooltip = tooltipText;
    }

}
