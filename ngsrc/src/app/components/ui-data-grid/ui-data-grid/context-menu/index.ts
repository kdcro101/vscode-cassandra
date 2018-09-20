import { UiDataGridComponent } from "../ui-data-grid.component";

export const gridContextMenu = (dataGrid: UiDataGridComponent): Handsontable.contextMenu.Settings => {

    return {

        callback: function (key, selection, clickEvent) {
            // Common callback for all options
            console.log(clickEvent);
        },
        items: {
            // "row_above": {
            //     disabled: () => {
            //         // Disable option when first row was clicked
            //         return this.getSelectedLast()[0] === 0; // `this` === hot3
            //     },
            // },
            "cancelCellChange": { // Own custom option
                name: "Cancel cell change",
                disabled: () => {
                    const cell = dataGrid.cellActive;
                    if (cell.row < 0 || cell.col < 0) {
                        return true;
                    }
                    const colName = dataGrid.currentColumns[cell.col].name;
                    const cellChanged = dataGrid.changeManager.isCellChanged(cell.row, colName);
                    // const rowDeleted = dataGrid.changeManager.isRowDeleted(cell.row);

                    if (cellChanged) {
                        return false;
                    }
                    return true;
                },
                callback: () => { // Callback for specific option
                    console.log("Reverting changes");
                    const cell = dataGrid.cellActive;
                    if (cell.row < 0 || cell.col < 0) {
                        return true;
                    }
                    const colName = dataGrid.currentColumns[cell.col].name;
                    const item = dataGrid.changeManager.removeCellUpdate(cell.row, colName);

                    dataGrid.htmlCache.invalidate(cell.row, cell.col);
                    dataGrid.currentDataRows[cell.row][colName] = item.valueOld;
                    dataGrid.gridInstance.render();

                },
            },
            "cancelRowDelete": { // Own custom option
                name: "Cancel row delete",
                disabled: () => {
                    const cell = dataGrid.cellActive;

                    if (cell.row < 0) {
                        return true;
                    }

                    const rowDeleted = dataGrid.changeManager.isRowDeleted(cell.row);

                    if (rowDeleted) {
                        return false;
                    }
                    return true;
                },
                callback: () => { // Callback for specific option
                    console.log("cancelRowDelete");
                    const cell = dataGrid.cellActive;
                    if (cell.row < 0) {
                        return true;
                    }
                    const rows = dataGrid.currentSelectedRows;
                    rows.forEach((r) => {
                        dataGrid.changeManager.removeRowDelete(cell.row);
                    });

                    dataGrid.gridInstance.render();

                },
            },
            "sep0": { name: "---------" },
            "undo": {},
            "redo": {},
            "sep1": { name: "---------" },
            "copy": {
                name: "Copy", // Set custom text for predefined option
            },
            "cut": {
                name: "Cut", // Set custom text for predefined option
            },
            "sep2": { name: "---------" },
            "alignment": {},
            "sep3": { name: "---------" },
            "row_delete": { // Own custom option
                name: "Delete row(s)",
                disabled: () => {
                    return !dataGrid.currentPrimaryKeyAvailable || dataGrid.currentSelectedRows.length === 0;
                },
                callback: () => { // Callback for specific option
                    console.log("row_delete");
                    const rows = dataGrid.currentSelectedRows;
                    rows.forEach((r) => {
                        dataGrid.changeManager.addRowDelete(r);
                    });
                },
            },
        },
    };
};
