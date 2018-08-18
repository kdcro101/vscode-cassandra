import * as vscode from "vscode";
import { Icons } from "../../../icons/index";
import { TreeItemType } from "../../../types/index";
import { TreeItemBase } from "../tree-item-base";

export class TreeItemClusterError extends TreeItemBase {
    public type: TreeItemType = "cluster-error";
    constructor(
        public label: string,
        public collapsibleState: vscode.TreeItemCollapsibleState,
        public clusterIndex: number,
        public contextValue: string,
        public tooltipText?: string,
    ) {
        super(label, collapsibleState);

        this.tooltip = tooltipText;
        this.iconPath = Icons.get(this.type);

    }

}
