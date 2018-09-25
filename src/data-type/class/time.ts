import * as cassandra from "cassandra-driver";
import { DataTypeValueBase } from "../base/data-type";

export class TimeDataTypeValue extends DataTypeValueBase<cassandra.types.LocalTime> {
    public checkValid(value: string): boolean {

        try {
            const val = cassandra.types.LocalTime.fromString(value);
            return val.toString() === value;
        } catch (e) {
            return false;
        }

    }
    public parseValue(value: string) {
        const val = cassandra.types.LocalTime.fromString(value);
        return val;
    }
    protected toString(value: cassandra.types.LocalTime): string {
        return `${value.toString()}`;
    }
    public get stringPlaceholder(): string {
        return `'00:00:00'`;
    }
}
