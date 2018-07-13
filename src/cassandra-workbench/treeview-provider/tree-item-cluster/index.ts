import * as vscode from "vscode";
import { Icons } from "../../../icons/index";
import { TreeItemType } from "../../../types/index";
import { TreeItemBase } from "../tree-item-base";

export class TreeItemCluster extends TreeItemBase {
    public type: TreeItemType = "cluster";
    constructor(
        public label: string,
        public collapsibleState: vscode.TreeItemCollapsibleState,
        public clusterIndex: number,
        public contextValue: string,
        public tooltipText?: string,
    ) {
        super(label, collapsibleState);

        // this.resourceUri = vscode.Uri.file(value);
        this.tooltip = tooltipText;
        this.iconPath = Icons.get(this.type);

    }

}
