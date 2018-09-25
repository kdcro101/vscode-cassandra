import * as cassandra from "cassandra-driver";
import { DataTypeValueBase } from "../base/data-type";

export class TupleDataTypeValue extends DataTypeValueBase<cassandra.types.Tuple> {
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
        const a = JSON.parse(value);
        const val = cassandra.types.Tuple.fromArray(a);
        return val;
    }
    protected toString(value: cassandra.types.Tuple): string {
        const json = (value.toJSON() as any);
        const str = this.stringifyTuple(json);
        return `${str}`;
    }
    public get stringPlaceholder(): string {
        return `()`;
    }
    private stringifyTuple(source: any[]): string {
        const parts = source.map((item: any) => {
            if (Array.isArray(item)) {
                return this.stringifyTuple(item);
            }
            return item;
        });

        return `(${ parts.join(", ")  })`;
    }
}
