import * as cassandra from "cassandra-driver";
import { DataTypeValueBase } from "../base/data-type";

export class UuidDataTypeValue extends DataTypeValueBase<cassandra.types.Uuid> {
    public checkValid(value: string): boolean {
        return this.isUuid(value);
    }
    public parseValue(value: string) {
        const val = cassandra.types.Uuid.fromString(value);
        return val;
    }
    protected toString(value: cassandra.types.Uuid): string {
        return `${value.toString()}`;
    }
    public get stringPlaceholder(): string {
        return `00000000-0000-0000-0000-000000000000`;
    }
}
