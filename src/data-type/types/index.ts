import { AsciiDataTypeValue } from "../class/ascii";
import { BigIntDataTypeValue } from "../class/bigint";
import { BlobDataTypeValue } from "../class/blob";
import { BooleanDataTypeValue } from "../class/boolean";
import { DateDataTypeValue } from "../class/date";
import { DecimalDataTypeValue } from "../class/decimal";
import { DoubleDataTypeValue } from "../class/double";
import { InetDataTypeValue } from "../class/inet";
import { IntDataTypeValue } from "../class/int";
import { TextDataTypeValue } from "../class/text";
import { TimeDataTypeValue } from "../class/time";

export interface DataTypeClass {
    ascii: AsciiDataTypeValue;
    bigint: BigIntDataTypeValue;
    blob: BlobDataTypeValue;
    boolean: BooleanDataTypeValue;
    counter: any;
    date: DateDataTypeValue;
    decimal: DecimalDataTypeValue;
    double: DoubleDataTypeValue;
    float: DoubleDataTypeValue;
    frozen: any;
    inet: InetDataTypeValue;
    int: IntDataTypeValue;
    list: any;
    map: any;
    set: any;
    smallint: IntDataTypeValue;
    text: TextDataTypeValue;
    time: TimeDataTypeValue;
    timestamp: any;
    timeuuid: any;
    tinyint: IntDataTypeValue;
    tuple: any;
    uuid: any;
    varchar: TextDataTypeValue;
    varint: IntDataTypeValue;
}
