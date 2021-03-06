import * as vscode from "vscode";
import { Icons } from "../../../icons";
import { CassandraTable, TreeItemType } from "../../../types";
import { TreeItemBase } from "../tree-item-base";

export class TreeItemTable extends TreeItemBase {
    public type: TreeItemType = "table";
    constructor(
        public label: string,
        public collapsibleState: vscode.TreeItemCollapsibleState,
        public clusterIndex: number,
        public clusterName: string,
        public keyspace: string,
        public contextValue: string,
        public data: CassandraTable,
        public tooltipText?: string,
    ) {
        super(label, collapsibleState);

        this.iconPath = Icons.get(this.type);
        this.tooltip = tooltipText;
    }

}
