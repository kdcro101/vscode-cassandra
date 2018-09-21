import { UiDataGridComponent } from "../ui-data-grid.component";

export interface ResultState {
    showError?: boolean;
    showReadonly?: boolean;
    showChanges?: boolean;
}

export const buildResultState = (dataGrid: UiDataGridComponent): ResultState => {
    const out: ResultState = {
        showError: dataGrid.currentError ? true : false,
        showReadonly: dataGrid.currentPrimaryKeyAvailable ? false : true,
        showChanges: false,
    };

    return out;
};
