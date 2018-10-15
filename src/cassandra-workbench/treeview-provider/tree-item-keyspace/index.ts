import * as vscode from "vscode";
import { Icons } from "../../../icons";
import { TreeItemType } from "../../../types";
import { CassandraKeyspace } from "../../../types/index";
import { TreeItemBase } from "../tree-item-base";

export class TreeItemKeyspace extends TreeItemBase {
    public type: TreeItemType = "keyspace";
    constructor(
        public label: string,
        public collapsibleState: vscode.TreeItemCollapsibleState,
        public clusterIndex: number,
        public keyspace: string,
        public contextValue: string,
        public keyspaceData: CassandraKeyspace,
        public tooltipText?: string,
    ) {
        super(label, collapsibleState);

        // this.resourceUri = vscode.Uri.file(value);
        // this.tooltip = value;
        this.iconPath = Icons.get(this.type);
        this.tooltip = tooltipText;
    }

}
