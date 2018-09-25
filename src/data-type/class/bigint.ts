
import { fromString } from "long";
import { DataTypeValueBase } from "../base/data-type";

export class BigIntDataTypeValue extends DataTypeValueBase<Long> {
    public checkValid(value: string): boolean {

        const m = value.match(/\d+/);

        if (m == null) {
            return false;
        }

        const f = m[0];

        if (f.length === value.length) {
            return true;
        }

        return false;
    }
    public parseValue(value: string) {
        // const Long = cassandra.types.Long;
        const val = fromString(value);

        return val;
    }
    protected toString(value: Long): string {
        return `${value.toString()}`;
    }
    public get stringPlaceholder(): string {
        return `000`;
    }
}
