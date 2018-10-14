import * as vscode from "vscode";
import { Icons } from "../../../icons";
import { CassandraAggregate, TreeItemType } from "../../../types";
import { TreeItemBase } from "../tree-item-base";

export class TreeItemAggregateItem extends TreeItemBase {
    public type: TreeItemType = "aggregate_item";
    constructor(
        public label: string,
        public collapsibleState: vscode.TreeItemCollapsibleState,
        public clusterIndex: number,
        public keyspace: string,
        public contextValue: string,
        public aggregateData: CassandraAggregate,
        public tooltipText?: string,
    ) {
        super(label, collapsibleState);

        this.iconPath = Icons.get(this.type);
        this.tooltip = tooltipText;
    }

}
