import { UiDataGridComponent } from "../ui-data-grid.component";

export const cellRenderer = (dataGridComponent: UiDataGridComponent):
    (row?: number, col?: number, prop?: object | number | string) => Handsontable.GridSettings => {

    return (row?: number, col?: number, prop?: object | number | string): Handsontable.GridSettings => {

        if (col >= 0 && row >= 0 && dataGridComponent.currentTableStruct) {
            const name = prop as string;
            const pkc = dataGridComponent.currentTableStruct.primaryKeys.find((k) => k.name === name);
            if (pkc && pkc.kind === "partition_key") {
                const pkcs: Handsontable.GridSettings = {
                    className: "cell-key-partition",
                    readOnly: true,
                };

                return pkcs;
            }
            if (pkc && pkc.kind === "clustering") {
                const pkcs: Handsontable.GridSettings = {
                    className: "cell-key-column-clustering",
                    readOnly: true,
                };
                return pkcs;
            }

            // no primary key - everything is readonly
            if (!dataGridComponent.currentPrimaryKeyAvailable) {
                return {
                    readOnly: true,
                };
            }
        }

        return {};
    };
};
