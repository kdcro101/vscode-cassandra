import { DataTypeValueBase } from "../base/data-type";

export class SetDataTypeValue extends DataTypeValueBase<any[]> {
    public checkValid(value: string): boolean {

        try {
            const p = JSON.parse(value);

            if (Array.isArray(p)) {
                return true;
            }
            return false;

        } catch (e) {
            return false;
        }

    }
    public parseValue(value: string) {
        const val = JSON.parse(value);
        return val;
    }
    protected toString(value: any[]): string {
        return `${JSON.stringify(value)}`;
    }
    public get stringPlaceholder(): string {
        return `[]`;
    }
}
