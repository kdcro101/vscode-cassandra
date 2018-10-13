import { TokenizerState } from "./tokenizer-state";

export class CqlTokenizer implements monaco.languages.TokensProvider {

    constructor() {

    }
    public getInitialState(): TokenizerState {
        return new TokenizerState(0);
    }
    /**
     * Tokenize a line given the state at the beginning of the line.
     */
    public tokenize(line: string, state: TokenizerState): monaco.languages.ILineTokens {
        const lineNumber = state.lineNumber;
        // console.log(`line [${line}] @ ${lineNumber}`);

        return {
            tokens: [],
            endState: new TokenizerState(lineNumber + 1),
        } as monaco.languages.ILineTokens;
    }
}
