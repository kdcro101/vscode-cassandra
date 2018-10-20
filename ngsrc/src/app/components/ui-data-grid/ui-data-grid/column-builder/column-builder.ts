
import { cellRendererJson } from "../renderers/cell-renderer-json";
import { cellRendererKeyColumnClustering } from "../renderers/cell-renderer-key-column-clustering";
import { cellRendererKeyPartition } from "../renderers/cell-renderer-key-partition";
import { UiDataGridComponent } from "../ui-data-grid.component";

export const buildColumns = (dataGrid: UiDataGridComponent): any[] => {

    const out = dataGrid.currentColumns.map((c) => {
        const keys = dataGrid.currentTableStruct.primaryKeys;

        const isPartition = keys.find((k) => c.name === k.name && k.kind === "partition_key");
        const isColClustering = keys.find((k) => c.name === k.name && k.kind === "clustering");

        // type ??

        if (c.type === "set" || c.type === "map" || c.type === "custom" || c.type === "tuple") {
            return {
                data: c.name,
                renderer: cellRendererJson(dataGrid),
                readOnly: !dataGrid.currentPrimaryKeyAvailable,
            };

        }

        if (isPartition) {
            return {
                data: c.name,
                type: "text",
                renderer: cellRendererKeyPartition(dataGrid),
            };
        }
        if (isColClustering) {
            return {
                data: c.name,
                type: "text",
                renderer: cellRendererKeyColumnClustering(dataGrid),
            };
        }

        return {
            data: c.name,
            type: "text",
            readOnly: !dataGrid.currentPrimaryKeyAvailable,
        };

    });

    return out;
};
