
export class TokenizerState implements monaco.languages.IState {

    constructor(public lineNumber: number) {

    }
    public clone(): TokenizerState {
        return new TokenizerState(this.lineNumber);
    }
    public equals(other: TokenizerState): boolean {
        if (this.lineNumber === other.lineNumber) {
            return true;
        }
        return false;
    }
}
