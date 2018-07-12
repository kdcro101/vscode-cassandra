import * as vscode from "vscode";
import { ValidatedConfigClusterItem } from "../types";
import { Workspace } from "../workspace";
export class CassandraWorkbench {
    constructor(
        private context: vscode.ExtensionContext,
        private workspace: Workspace,
        private config: ValidatedConfigClusterItem[],
    ) {

    }
}
