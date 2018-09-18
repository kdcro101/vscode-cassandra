export class HtmlCache {

    public htmlCache: { [key: string]: HTMLElement | DocumentFragment } = {};

    constructor() {

    }
    add(row: number, col: number, element: HTMLElement | DocumentFragment) {
        const key = this.getKey(row, col);
        this.htmlCache[key] = element;
    }
    invalidate(row: number, col: number) {
        const key = this.getKey(row, col);
        delete this.htmlCache[key];
    }
    public get(row: number, col: number): HTMLElement | DocumentFragment {
        const key = this.getKey(row, col);
        return this.htmlCache[key];
    }
    public clear() {
        const keys = Object.keys(this.htmlCache);
        keys.forEach((k) => delete this.htmlCache[k]);
    }
    private getKey(row: number, col: number) {
        return `R${row}C${col}`;
    }

}
