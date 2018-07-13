import * as vscode from "vscode";
import { Icons } from "../../../icons";
import { TreeItemType } from "../../../types";
import { TreeItemBase } from "../tree-item-base";

export class TreeItemColumnItem extends TreeItemBase {
    public type: TreeItemType = "column_item";
    constructor(
        public label: string,
        public collapsibleState: vscode.TreeItemCollapsibleState,
        public clusterIndex: number,
        public keyspace: string,
        public table: string,
        public contextValue: string,
        public tooltipText?: string,
    ) {
        super(label, collapsibleState);

        this.iconPath = Icons.get(this.type);
        this.tooltip = tooltipText;
    }

}
