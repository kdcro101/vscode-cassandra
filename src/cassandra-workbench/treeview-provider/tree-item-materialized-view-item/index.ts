import * as vscode from "vscode";
import { Icons } from "../../../icons";
import { TreeItemType } from "../../../types";
import { CassandraMaterializedView } from "../../../types/index";
import { TreeItemBase } from "../tree-item-base";

export class TreeItemMaterializedViewItem extends TreeItemBase {
    public type: TreeItemType = "materialized-views_item";
    constructor(
        public label: string,
        public collapsibleState: vscode.TreeItemCollapsibleState,
        public clusterIndex: number,
        public keyspace: string,
        public contextValue: string,
        public viewData: CassandraMaterializedView,
        public tooltipText?: string,
    ) {
        super(label, collapsibleState);

        this.iconPath = Icons.get(this.type);
        this.tooltip = tooltipText;
    }

}
