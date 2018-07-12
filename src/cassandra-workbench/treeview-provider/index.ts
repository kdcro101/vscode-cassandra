import * as vscode from "vscode";
import { ViewItem } from "./view-item";
export class TreeviewProvider implements vscode.TreeDataProvider<ViewItem> {
    public onDidChangeTreeDataEmmiter = new vscode.EventEmitter<ViewItem | undefined>();
    public readonly onDidChangeTreeData: vscode.Event<ViewItem | undefined> = this.onDidChangeTreeDataEmmiter.event;

    /**
     * Get [TreeItem](#TreeItem) representation of the `element`
     *
     * @param element The element for which [TreeItem](#TreeItem) representation is asked for.
     * @return [TreeItem](#TreeItem) representation of the element
     */
    public refresh(): void {
        this.onDidChangeTreeDataEmmiter.fire();
    }
    public getTreeItem(item: ViewItem): vscode.TreeItem {
        return item;
    }

    /**
     * Get the children of `element` or root if no element is passed.
     *
     * @param element The element from which the provider gets children. Can be `undefined`.
     * @return Children of `element` or root if no element is passed.
     */
    getChildren(element?: ViewItem): Thenable<ViewItem[]> {
        return new Promise((resolve, reject) => {

        });
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
    getParent?(element: ViewItem): Thenable<ViewItem> {
        return new Promise((resolve, reject) => {

        });
    }
}
