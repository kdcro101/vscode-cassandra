import { RenderJson } from "../../../../const/render-json";
import { UiDataGridComponent } from "../ui-data-grid.component";

// export const cellRendererJson = (dataGrid: UiDataGridComponent): (instance: _Handsontable.Core,
//     td: HTMLElement, row: number, col: number, prop: string | number, value: any,
//     cellProperties: Handsontable.GridSettings) => void => {

export const cellRendererJson = (dataGrid: UiDataGridComponent): Function => {

    return function (instance: _Handsontable.Core,
        td: HTMLElement, row: number, col: number, prop: string | number, value: any,
        cellProperties: Handsontable.GridSettings): void {

        Handsontable.renderers.BaseRenderer.apply(this, arguments);

        const obj = JSON.parse(value);

        RenderJson.set_icons("+", "-");
        Handsontable.dom.empty(td);

        const key = `R${row}C${col}`;
        const cache = dataGrid.htmlCache[key];
        let element: HTMLElement = null;

        if (cache == null) {
            element = RenderJson.render(obj, () => {
                instance.deselectCell();
                instance.selectCell(row, col);
                instance.render();
            });
            dataGrid.htmlCache[key] = element;
        } else {
            element = cache;
        }
        td.style.fontFamily = dataGrid.theme.getEditorFontFamily();
        td.appendChild(element);

    };

};
