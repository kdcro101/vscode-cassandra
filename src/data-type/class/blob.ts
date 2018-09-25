import { DataTypeValueBase } from "../base/data-type";

export class BlobDataTypeValue extends DataTypeValueBase<Buffer> {
    public checkValid(value: string): boolean {
        return true;
    }
    public parseValue(value: string) {
        const val = new Buffer(value);
        return val;
    }
    protected toString(value: Buffer): string {
        return `${value.toString()}`;
    }
    public get stringPlaceholder(): string {
        return `typeAsBlob('')`;
    }
}
