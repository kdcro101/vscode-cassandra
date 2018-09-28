import { CassandraDataType } from "../types/index";
import { DataTypeValueBase } from "./base/data-type";
import { AsciiDataTypeValue } from "./class/ascii";
import { BigIntDataTypeValue } from "./class/bigint";
import { BlobDataTypeValue } from "./class/blob";
import { BooleanDataTypeValue } from "./class/boolean";
import { DateDataTypeValue } from "./class/date";
import { DecimalDataTypeValue } from "./class/decimal";
import { DoubleDataTypeValue } from "./class/double";
import { InetDataTypeValue } from "./class/inet";
import { IntDataTypeValue } from "./class/int";
import { ListDataTypeValue } from "./class/list";
import { MapDataTypeValue } from "./class/map";
import { SetDataTypeValue } from "./class/set";
import { TextDataTypeValue } from "./class/text";
import { TimeDataTypeValue } from "./class/time";
import { TimestampDataTypeValue } from "./class/timestamp";
import { TimeUuidDataTypeValue } from "./class/timeuuid";
import { TupleDataTypeValue } from "./class/tuple";
import { UuidDataTypeValue } from "./class/uuid";
export class DataTypeManager {

    constructor() {

    }
    get(type: CassandraDataType, value: string): DataTypeValueBase<any> {
        let out = null;
        switch (type) {
            case "ascii":
                out = new AsciiDataTypeValue(value);
                break;
            case "bigint":
                out = new BigIntDataTypeValue(value);
                break;
            case "blob":
                out = new BlobDataTypeValue(value);
                break;
            case "boolean":
                out = new BooleanDataTypeValue(value);
                break;
            case "counter":
                out = new IntDataTypeValue(value);
                break;
            case "date":
                out = new DateDataTypeValue(value);
                break;
            case "decimal":
                out = new DecimalDataTypeValue(value);
                break;
            case "double":
                out = new DoubleDataTypeValue(value);
                break;
            case "float":
                out = new DoubleDataTypeValue(value);
                break;
            // case "frozen":
                // out = new any(value);
                // break;
            case "inet":
                out = new InetDataTypeValue(value);
                break;
            case "int":
                out = new IntDataTypeValue(value);
                break;
            case "list":
                out = new ListDataTypeValue(value);
                break;
            case "map":
                out = new MapDataTypeValue(value);
                break;
            case "set":
                out = new SetDataTypeValue(value);
                break;
            case "smallint":
                out = new IntDataTypeValue(value);
                break;
            case "text":
                out = new TextDataTypeValue(value);
                break;
            case "time":
                out = new TimeDataTypeValue(value);
                break;
            case "timestamp":
                out = new TimestampDataTypeValue(value);
                break;

            case "timeuuid":
                out = new TimeUuidDataTypeValue(value);
                break;
            case "tinyint":
                out = new IntDataTypeValue(value);
                break;
            case "tuple":
                out = new TupleDataTypeValue(value);
                break;
            case "uuid":
                out = new UuidDataTypeValue(value);
                break;
            case "varchar":
                out = new TextDataTypeValue(value);
                break;
            case "varint":
                out = new IntDataTypeValue(value);
                break;
        }

        return out;
    }

}
