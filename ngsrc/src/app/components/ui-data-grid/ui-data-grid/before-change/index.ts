import { UiDataGridComponent } from "../ui-data-grid.component";
export const onBeforeChange = (dataGrid: UiDataGridComponent):
    (changes: [number, string | number, any, any][], source: string) => void | boolean => {
    return (changes: [number, string | number, any, any][], source: string): void | boolean => {
        console.log(`onBeforeChange ${JSON.stringify(changes)} -> ${source}`);

        if (!changes || changes.length === 0 || source !== "edit") {
            return;
        }

        const change = changes[0];
        const row = change[0] as number;
        const prop = change[1] as string;
        const valOld = change[2] as any;
        const valNew = change[3] as any;

        const columnInfo = dataGrid.currentColumns.find((c) => c.name === prop);
        const isStringified = columnInfo.type === "set" || columnInfo.type === "map" || columnInfo.type === "custom" ? true : false;

        // change[3] = "AAA";
        return false;

    };
};
