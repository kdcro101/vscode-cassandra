export interface WorkspaceSettings {
    activeClusterName: string;
    activeKeyspace: Array<[string, string]>;
    defaultSelectLimit: number;
    splitPosition: number;
    useWorkspace: number;
}
