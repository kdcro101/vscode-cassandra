import { DataTypeClass } from "./types/index";
export class DataTypeManager {

    constructor() {

    }
    get<T extends keyof DataTypeClass>(type: T): DataTypeClass[T] {
        return null;
    }

}
