export abstract class DataTypeValueBase<T> {
    protected resultValue: T;
    protected resultValid: boolean = false;
    protected resultNull: boolean = false;
    constructor(private inputValue: string) {

        if (inputValue == null) {
            this.resultValid = true;
            this.resultValue = null;
            this.resultNull = true;
            return;
        }

        this.resultValid = this.checkValid(inputValue);
        if (this.resultValid) {
            this.resultValue = this.parseValue(inputValue);
        } else {
            this.resultValue = null;
        }
    }

    public get valid(): boolean {
        return this.resultValid;
    }
    public get value(): T {
        return this.resultValue;
    }
    protected abstract checkValid(input: string): boolean;
    protected abstract parseValue(input: string): T;
    protected abstract toString(input: T): string;
    public get stringNull(): string { return "null"; }
    public abstract get stringPlaceholder(): string;
    public get stringValue(): string {
        if (this.resultNull) {
            return `NULL`;
        }
        return this.toString(this.resultValue);
    }
    protected isNumericInt(value: string): boolean {
        const res = value.search(/^\-?(0|[1-9]\d*)?$/);
        if (res === -1) {
            return false;
        }
        return true;
    }
    protected isNumericFloat(value: string): boolean {
        const res = value.search(/^\-?(0|[1-9]\d*)?(\.\d+)?$/);
        if (res === -1) {
            return false;
        }
        return true;
    }
    protected isUuid(value: string) {
        const res = value.search(/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/);
        if (res === -1) {
            return false;
        }
        return true;
    }

}
