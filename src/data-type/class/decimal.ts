import * as cassandra from "cassandra-driver";
import { DataTypeValueBase } from "../base/data-type";

export class DecimalDataTypeValue extends DataTypeValueBase<cassandra.types.BigDecimal> {
    public checkValid(value: string): boolean {
        return this.isNumericFloat(value);
    }
    public parseValue(value: string) {
        const val = cassandra.types.BigDecimal.fromString(value);
        return val;
    }
    protected toString(value: cassandra.types.BigDecimal): string {
        return `${value.toString()}`;
    }
    public get stringPlaceholder(): string {
        return `0.0`;
    }
}
