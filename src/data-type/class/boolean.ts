import { DataTypeValueBase } from "../base/data-type";
export class BooleanDataTypeValue extends DataTypeValueBase<boolean> {
    public parseValue(value: string) {

        const trim = value.trim();
        let res: boolean = false;
        switch (trim) {
            case "true":
                res = true;
                break;
            case "false":
                res = false;
                break;
        }
        return res;
    }
    protected checkValid(value: string): boolean {
        const trim = value.trim();
        if (trim === "true" || trim === "false") {
            return true;
        }
        return false;
    }
    protected toString(val: boolean): string {
        return `${this.resultValue}`;
    }
    public get stringPlaceholder(): string {
        return `true | false | NULL `;
    }

}
