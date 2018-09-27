export interface DataTypeAnalysis {
    name: string;
    isFrozen: boolean;
    contains?: DataTypeAnalysis[];
    frozenAs?: string;
    parent?: DataTypeAnalysis;
}
