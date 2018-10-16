import { DataTypeValueBase } from "../base/data-type";
export class DoubleDataTypeValue extends DataTypeValueBase<number> {
    public checkValid(value: string): boolean {
        return this.isNumericFloat(value);
    }
    public parseValue(value: string) {
        const val = parseFloat(value);
        return val;
    }
    protected toString(value: number): string {
        return `${value.toString()}`;
    }
    public get stringPlaceholder(): string {
        return `0.0`;
    }
}
