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
            "revert": { // Own custom option
                name: "Revert changes",
                callback: () => { // Callback for specific option
                    setTimeout(() => {
                        console.log("Reverting changes");
                    }, 0);
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

        },
    };
};
