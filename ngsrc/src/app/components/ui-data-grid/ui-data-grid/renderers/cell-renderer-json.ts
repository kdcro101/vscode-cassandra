
import { RenderJson } from "../../../../const/render-json";
import { UiDataGridComponent } from "../ui-data-grid.component";

export const cellRendererJson = (dataGrid: UiDataGridComponent): Function => {

    return function (instance: _Handsontable.Core,
        td: HTMLElement, row: number, col: number, prop: string | number, value: any,
        cellProperties: Handsontable.GridSettings): void {

        if (!dataGrid.currentPrimaryKeyAvailable) {
            // cellProperties.readOnly = true;
        }

        // Handsontable.renderers.HtmlRenderer.apply(this, arguments);
        Handsontable.renderers.BaseRenderer.apply(this, arguments);

        const obj = JSON.parse(value);

        RenderJson.set_icons("+", "-");
        let element = dataGrid.htmlCache.get(row, col);

        if (!element) {
            element = RenderJson.render(obj, () => {
                console.log("Opening node...");
                instance.deselectCell();
                instance.render();
                setTimeout(() => {
                    instance.selectCell(row, col);
                });
            });
            dataGrid.htmlCache.add(row, col, element);

        }

        td.style.fontFamily = dataGrid.theme.getEditorFontFamily();
        Handsontable.dom.empty(td);
        td.appendChild(element);

    };

};
