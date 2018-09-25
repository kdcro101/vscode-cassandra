import * as cassandra from "cassandra-driver";
import { DataTypeValueBase } from "../base/data-type";

export class InetDataTypeValue extends DataTypeValueBase<cassandra.types.InetAddress> {
    public checkValid(value: string): boolean {

        try {
            const val = cassandra.types.InetAddress.fromString(value);
            return val.toString() === value;
        } catch (e) {
            return false;
        }

    }
    public parseValue(value: string) {
        const val = cassandra.types.InetAddress.fromString(value);
        return val;
    }
    protected toString(value: cassandra.types.InetAddress): string {
        return `${value.toString()}`;
    }
    public get stringPlaceholder(): string {
        return `'127.0.0.1'`;
    }
}
