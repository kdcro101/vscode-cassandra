import { RenderJson } from "../../../../const/render-json";
import { UiDataGridComponent } from "../ui-data-grid.component";

// export const cellRendererJson = (dataGrid: UiDataGridComponent): (instance: _Handsontable.Core,
//     td: HTMLElement, row: number, col: number, prop: string | number, value: any,
//     cellProperties: Handsontable.GridSettings) => void => {
export const cellRendererKeyColumnClustering = (dataGrid: UiDataGridComponent): Function => {

    return function (instance: _Handsontable.Core,
        td: HTMLElement, row: number, col: number, prop: string | number, value: any,
        cellProperties: Handsontable.GridSettings): void {
        Handsontable.dom.empty(td);
        Handsontable.renderers.BaseRenderer.apply(this, arguments);

        const element = document.createTextNode(value);
        const triangle = document.createElement("div");
        triangle.classList.add("triangle", "column-clustering-key");
        // td.style.fontFamily = dataGrid.theme.getEditorFontFamily();
        td.appendChild(element);
        td.appendChild(triangle);

        cellProperties.readOnly = true;

    };

};
