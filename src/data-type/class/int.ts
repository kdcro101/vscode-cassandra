import { DataTypeValueBase } from "../base/data-type";
export class IntDataTypeValue extends DataTypeValueBase<number> {
    public checkValid(value: string): boolean {
        return this.isNumericInt(value);
    }
    public parseValue(value: string) {
        const val = parseInt(value, 10);
        return val;
    }
    protected toString(value: number): string {
        return `${value.toString()}`;
    }
    public get stringPlaceholder(): string {
        return `000`;
    }
}
