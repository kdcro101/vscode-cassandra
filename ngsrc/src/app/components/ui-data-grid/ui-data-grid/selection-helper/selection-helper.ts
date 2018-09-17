import { UiDataGridComponent } from "../ui-data-grid.component";
export class SelectionHelper {

    constructor(public dataGrid: UiDataGridComponent) {

    }
    public getRows(ranges: [number, number, number, number][]): number[] {
        // r: number, c: number, r2: number, c2: number,
        let out: number[] = [];
        ranges.forEach((r) => {
            out = out.concat(this.getRowsForRange(r));
        });
        return out.sort();
    }
    public getRowsForRange(range: [number, number, number, number]): number[] {
        const norm = this.normalizeRange(range);

        console.log("norm = " + JSON.stringify(norm));

        const rs = norm[0];
        const cs = norm[1];
        const re = norm[2];
        const ce = norm[3];

        const colLast = this.dataGrid.currentColumns.length - 1;

        const out: number[] = [];
        if (cs > 0 || ce < colLast) {
            return [];
        }
        for (let i = rs; i <= re; i++) {
            out.push(i);
        }

        // if(ce)
        return out;
    }
    private normalizeRange(range: [number, number, number, number]): [number, number, number, number] {
        const rs = range[0];
        const cs = range[1];
        const re = range[2];
        const ce = range[3];

        const p1 = [rs, cs];
        const p2 = [re, ce];

        const list = [p1, p2];

        const s = list.sort(function (a, b) {
            if (a[1] === b[1]) { return a[0] - b[0]; }
            return a[1] - b[1];
        });

        const r = [s[0][0], s[0][1], s[1][0], s[1][1]];
        console.log("sorted= " + JSON.stringify(r));
        const out = r.slice(0) as [number, number, number, number];

        if (r[0] > r[2]) {
            out[0] = r[2];
            out[2] = r[0];
        }
        return out;
    }
}
