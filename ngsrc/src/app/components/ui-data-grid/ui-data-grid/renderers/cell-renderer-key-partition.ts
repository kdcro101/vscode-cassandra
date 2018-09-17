import { UiDataGridComponent } from "../ui-data-grid.component";

// export const cellRendererJson = (dataGrid: UiDataGridComponent): (instance: _Handsontable.Core,
//     td: HTMLElement, row: number, col: number, prop: string | number, value: any,
//     cellProperties: Handsontable.GridSettings) => void => {

export const cellRendererKeyPartition = (dataGrid: UiDataGridComponent): Function => {

    return function (instance: _Handsontable.Core,
        td: HTMLElement, row: number, col: number, prop: string | number, value: any,
        cellProperties: Handsontable.GridSettings): void {

        Handsontable.renderers.BaseRenderer.apply(this, arguments);

        cellProperties.readOnly = true;

        let container = dataGrid.htmlCache.get(row, col);

        if (!container) {
            container = document.createElement("div");
            const text = document.createTextNode(value);
            const triangle = document.createElement("div");
            triangle.classList.add("triangle", "partition-key");
            container.appendChild(text);
            container.appendChild(triangle);
            dataGrid.htmlCache.add(row, col, container);
        }

        // td.style.fontFamily = dataGrid.theme.getEditorFontFamily();
        Handsontable.dom.empty(td);
        td.appendChild(container.cloneNode(true));
    };

};
