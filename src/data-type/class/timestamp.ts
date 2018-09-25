import * as moment from "moment";
import { DataTypeValueBase } from "../base/data-type";

export class TimestampDataTypeValue extends DataTypeValueBase<Date> {
    public checkValid(value: string): boolean {
        try {

            const m = this.parseDateString(value);
            return m.isValid();

        } catch (e) {
            return false;
        }
    }
    public parseValue(value: string) {
        const val = this.parseDateString(value);
        const date = val.toDate();
        return date;
    }
    protected toString(value: Date): string {
        const m = moment(value);
        const s = m.toISOString();
        return `${s}`;
    }
    public get stringPlaceholder(): string {
        const year = moment().year();
        return `'${year}-00:00:00'`;
    }
    private parseDateString(dateString: string): moment.Moment {
        const m = moment(dateString, [
            "YYYY-MM-DD HH:mm:ss",
            "YYYY-MM-DD HH:mm:ss.SSS",
            moment.ISO_8601,
        ]);

        return m;
    }
}
