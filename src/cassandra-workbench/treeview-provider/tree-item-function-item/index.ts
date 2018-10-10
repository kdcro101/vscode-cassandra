import * as vscode from "vscode";
import { Icons } from "../../../icons";
import { CassandraFunction, TreeItemType } from "../../../types";
import { TreeItemBase } from "../tree-item-base";

export class TreeItemFunctionItem extends TreeItemBase {
    public type: TreeItemType = "function_item";
    constructor(
        public label: string,
        public collapsibleState: vscode.TreeItemCollapsibleState,
        public clusterIndex: number,
        public keyspace: string,
        public contextValue: string,
        public functionData: CassandraFunction,
        public tooltipText?: string,
    ) {
        super(label, collapsibleState);

        this.iconPath = Icons.get(this.type);
        this.tooltip = tooltipText;
    }

}
