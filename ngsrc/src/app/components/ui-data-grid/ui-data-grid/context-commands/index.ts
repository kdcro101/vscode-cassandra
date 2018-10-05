import { UiDataGridComponent } from "../ui-data-grid.component";

export type ContextMenuCommand = "undo" | "copy" | "paste" | "cut" | "cancelChange" | "cancelRowDelete" | "deleteRows";

export const contexMenuHandler = (grid: UiDataGridComponent, command: ContextMenuCommand) => {

    console.log(`contexMenuHandler=${command}`);

    switch (command) {
        case "undo":
            onUndo(grid);
            break;
        case "copy":
            onCopy(grid);
            break;
        case "paste":
            onPaste(grid);
            break;
        case "cut":
            onCut(grid);
            break;
        case "cancelChange":
            break;
        case "cancelRowDelete":
            break;
        case "deleteRows":
            break;
    }

};

function onUndo(grid: UiDataGridComponent) {
    console.log("command.undo");

    // const p = grid.gridInstance.getPlugin("");
    // p.copy();
    // grid.gridInstance.undo();
}
function onCopy(grid: UiDataGridComponent) {
    console.log("command.copy");

    const p = grid.gridInstance.getPlugin("copyPaste");
    p.copy();
}
function onPaste(grid: UiDataGridComponent) {
    console.log("command.paste");
    const p = grid.gridInstance.getPlugin("copyPaste");
    p.paste(grid.clipboardCache as any);
}
function onCut(grid: UiDataGridComponent) {
    console.log("command.cut");
    const p = grid.gridInstance.getPlugin("copyPaste");
    p.cut();
}
function onCancelChange(grid: UiDataGridComponent) {

}
function onCancelRowDelete(grid: UiDataGridComponent) {

}
function onDeleteRows(grid: UiDataGridComponent) {

}
