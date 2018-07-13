import * as vscode from "vscode";
import { Icons } from "../../icons/index";
import { ValidatedConfigClusterItem } from "../../types";
import { TreeItemBase } from "./tree-item-base";
import { TreeItemCluster } from "./tree-item-cluster";
import { TreeItemKeyspace } from "./tree-item-keyspace";
import { TreeItemPrimaryKey } from "./tree-item-primarykey";
import { TreeItemTable } from "./tree-item-table";

export class TreeviewProvider implements vscode.TreeDataProvider<TreeItemBase> {
    public onDidChangeTreeDataEmmiter = new vscode.EventEmitter<TreeItemBase | undefined>();
    public readonly onDidChangeTreeData: vscode.Event<TreeItemBase | undefined> = this.onDidChangeTreeDataEmmiter.event;

    constructor(
        private config: ValidatedConfigClusterItem[],
    ) {

    }

    /**
     * Get [TreeItem](#TreeItem) representation of the `element`
     *
     * @param element The element for which [TreeItem](#TreeItem) representation is asked for.
     * @return [TreeItem](#TreeItem) representation of the element
     */
    public refresh(): void {
        this.onDidChangeTreeDataEmmiter.fire();
    }
    public getTreeItem(item: TreeItemBase): vscode.TreeItem {
        return item;
    }

    /**
     * Get the children of `element` or root if no element is passed.
     *
     * @param element The element from which the provider gets children. Can be `undefined`.
     * @return Children of `element` or root if no element is passed.
     */
    getChildren(element?: TreeItemBase): Thenable<TreeItemBase[]> {

        if (element == null) {
            return this.getRoot();
        }
        if (element.type === "cluster") {
            return Promise.resolve([
                new TreeItemKeyspace("keyspace",
                    vscode.TreeItemCollapsibleState.Collapsed, "", "", "", null, null, null, "Tultip"),
            ]);
        }
        if (element.type === "keyspace") {
            return Promise.resolve([
                new TreeItemTable("table",
                    vscode.TreeItemCollapsibleState.Collapsed, "", "", "", null, null, null, "Tultip"),
            ]);
        }
        if (element.type === "table") {
            return Promise.resolve([
                new TreeItemPrimaryKey("Primary key",
                    vscode.TreeItemCollapsibleState.Collapsed, "", "", "", null, null, null, "Tultip"),
            ]);
        }

        // });
        return Promise.resolve(null);
    }

    /**
     * Optional method to return the parent of `element`.
     * Return `null` or `undefined` if `element` is a child of root.
     *
     * **NOTE:** This method should be implemented in order to access [reveal](#TreeView.reveal) API.
     *
     * @param element The element for which the parent has to be returned.
     * @return Parent of `element`.
     */
    getParent?(element: TreeItemBase): Thenable<TreeItemBase> {
        return new Promise((resolve, reject) => {

        });
    }
    private getRoot(): Promise<TreeItemCluster[]> {
        return new Promise((resolve, reject) => {
            const items = this.config.map((i) => {
                return new TreeItemCluster(i.name,
                    vscode.TreeItemCollapsibleState.Collapsed, "", "", "", null, null, null, "Tultip");
            });

            resolve(items);
        });
    }
}
