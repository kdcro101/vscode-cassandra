import { RenderJson } from "../../../../const/render-json";

export const cellRendererJson = (htmlCache: { [key: string]: HTMLElement }): (instance: _Handsontable.Core,
    td: HTMLElement, row: number, col: number, prop: string | number, value: any,
    cellProperties: Handsontable.GridSettings) => void => {

    return (instance: _Handsontable.Core,
        td: HTMLElement, row: number, col: number, prop: string | number, value: any,
        cellProperties: Handsontable.GridSettings): void => {

        const obj = JSON.parse(value);

        RenderJson.set_icons("+", "-");
        Handsontable.dom.empty(td);

        const key = `R${row}C${col}`;
        const cache = htmlCache[key];
        let element: HTMLElement = null;

        if (cache == null) {
            element = RenderJson.render(obj, () => {
                instance.deselectCell();
                instance.selectCell(row, col);
                instance.render();
            });
            htmlCache[key] = element;
        } else {
            element = cache;
        }

        td.appendChild(element);
    };

};
