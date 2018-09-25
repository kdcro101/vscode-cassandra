import { DataTypeValueBase } from "../base/data-type";
export class TextDataTypeValue extends DataTypeValueBase<string> {
    public checkValid(value: string): boolean {
        return true;
    }
    public parseValue(value: string) {

        return value;
    }
    protected toString(val: string): string {
        return `${this.resultValue}`;
    }
    public get stringPlaceholder(): string {
        return `''`;
    }
}
