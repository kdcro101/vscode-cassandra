
import { RenderJson } from "../../../../const/render-json";
import { UiDataGridComponent } from "../ui-data-grid.component";

export const cellRendererJson = (dataGrid: UiDataGridComponent): Function => {

    return function (instance: _Handsontable.Core,
        td: HTMLElement, row: number, col: number, prop: string | number, value: any,
        cellProperties: Handsontable.GridSettings): void {

        if (!dataGrid.currentPrimaryKeyAvailable) {
            cellProperties.readOnly = true;
        }

        Handsontable.renderers.HtmlRenderer.apply(this, arguments);
        // Handsontable.renderers.BaseRenderer.apply(this, arguments);

        const obj = JSON.parse(value);

        RenderJson.set_icons("+", "-");
        let element = dataGrid.htmlCache.get(row, col);

        // const ch1 = td.children.item(0) as HTMLElement;
        // if (ch1 && ch1.isSameNode(element)) {
        //     console.log("is the same");
        //     return;
        // }
        const frag = document.createDocumentFragment();
        if (!element) {
            element = RenderJson.render(obj, () => {
                console.log("Opening node...");
                instance.deselectCell();
                instance.selectCell(row, col);
                instance.render();
            });
            dataGrid.htmlCache.add(row, col, element);

        }

        frag.appendChild(element);
        td.style.fontFamily = dataGrid.theme.getEditorFontFamily();
        td.innerHTML = "";
        td.appendChild(frag);

    };

};
