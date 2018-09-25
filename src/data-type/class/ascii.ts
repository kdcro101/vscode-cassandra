import { DataTypeValueBase } from "../base/data-type";

/*
    ASCII type only 0-127 allowed
*/
export class AsciiDataTypeValue extends DataTypeValueBase<string> {
    constructor(input: string) {
        super(input);
    }
    protected parseValue(value: string) {
        if (!this.valid) { return null; }
        return value;
    }
    protected checkValid(value: string): boolean {
        if (value == null) {
            return true;
        }
        try {

            const chars = value.split("");
            const asciis = chars.filter((c) => {
                const val = c.charCodeAt(0);
                return val >= 0 && val <= 127;
            });

            if (asciis.length === chars.length) {
                return true;
            }

        } catch (e) {
            return false;
        }

        return false;
    }
    protected  toString(): string {
        // maybe escape?
        return `'${this.resultValue}'`;
    }
    public get stringPlaceholder(): string {
        return `''`;
    }

}
