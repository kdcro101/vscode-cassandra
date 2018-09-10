import { CassandraTable } from "../../../../src/types/index";
export interface ChangeItem<T> {
    value: T;
    type: any;
}
export class ChangeManager {

    constructor(private t: CassandraTable) {

    }
    public add(col) {

    }
}
