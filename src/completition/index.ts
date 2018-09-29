import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener, Token } from "antlr4ts";
import { CqlLexer } from "../antlr/CqlLexer";
import { CqlParser } from "../antlr/CqlParser";

import * as c3 from "./CodeCompletionCore";
import { preferredRules, RuleData } from "./rules";

import * as XRegExp from "xregexp";

import { escapeRegExp } from "lodash";

export interface AnalyzedSituation {

    lastKnown: Token;
    partialInput: string;
    caretTokenIndex: number;
    caretTokenText: string;
    invalid?: boolean;
}
export interface CompletitionOutput {
    list: RuleData[];
    partial: string;
    // tokenStart: number;
    // tokenStop: number;
    // tokenText: string;
    // isPartial: boolean;
}
export class Completition {

    public execute(code: string, caretPosition?: number): CompletitionOutput {

        const rxNonWord = new RegExp(/\W$/);
        const rxPartial = new RegExp(/\b\w+$/);

        const lastNonWord = rxNonWord.test(code);

        let codePartial: string = null;
        let codeWithoutPartial: string = code;

        if (!lastNonWord) {
            const match = rxPartial.exec(code);
            codePartial = match ? match[0] : null;
            codeWithoutPartial = code.replace(rxPartial, "");
        }

        const codeToExecute = `${codeWithoutPartial} `;

        const tokenLexer = new CqlLexer(new ANTLRInputStream(codeToExecute));
        const tokens = tokenLexer.getAllTokens();

        const inputStream = new ANTLRInputStream(codeToExecute);
        const lexer = new CqlLexer(inputStream);

        // const lastNon;
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new CqlParser(tokenStream);

        parser.removeErrorListener(ConsoleErrorListener.INSTANCE);

        const core = new c3.CodeCompletionCore(parser);

        const ruleMap = parser.getRuleIndexMap();
        const ruleMapArray = Array.from(ruleMap.entries());
        const ruleNames = Object.keys(preferredRules);
        const ruleNumbers = ruleNames.map((rule) => parser.getRuleIndex(rule));

        core.preferredRules = new Set<number>([
            ...ruleNumbers,
        ]);

        const tree = parser.root();
        const candidates = core.collectCandidates(tokens.length - 1);
        const candidateRules: RuleData[] = [];

        candidates.rules.forEach((v, k) => {
            const name = ruleMapArray[k]["0"];
            const data = preferredRules[name];
            if (name != null) {
                candidateRules.push(data);
            } else {
                console.log(`WARNING: no rule data for ${name}`);
            }
        });
        const lastToken = this.getLastToken(tokens);
        const f = this.createOutput(candidateRules, codePartial, lastToken);
        return f;
    }
    private createOutput(candidates: RuleData[], codePartial: string, lastToken: Token): CompletitionOutput {

        console.log("-------------------------------");
        console.log(candidates);
        console.log("-------------------------------");

        let list: RuleData[] = candidates;
        // let filtered: RuleData[] = candidates;
        if (lastToken) {
            list = candidates.filter((i) => !this.isEqual(i.text, lastToken.text));
        }
        if (codePartial && codePartial.length > 0) {
            list = list.filter((i) => this.isBeginningWith(i.text, codePartial) && i.type === "keyword");
        }
        const inputs = candidates.filter((r) => r.type.search(/^input/) === 0 );
        list = list.concat(inputs);

        const out: CompletitionOutput = {
            list,
            partial: codePartial,
        };

        return out;
    }
    // private analyzeSituation(code: string, caretPosition: number, tokens: Token[]): AnalyzedSituation {
    //     const tokenIndex = this.getCaretTokenIndex(tokens, caretPosition);
    //     const token = tokens[tokenIndex];
    //     const tokenPart = this.getTokenPart(token, caretPosition);
    //     const tokenLast = this.getLastToken(tokens, tokenIndex);
    //     const out: AnalyzedSituation = {

    //         lastKnown: tokenLast,
    //         partialInput: tokenPart,
    //         caretTokenIndex: tokenIndex,
    //         caretTokenText: token == null ? null : token.text,
    //         invalid: false,
    //     };
    //     return out;
    // }
    private getLastToken(tokens: Token[]): Token {

        for (let i = (tokens.length - 1); i >= 0; i--) {
            const t = tokens[i];
            if (t.channel === 0) {
                return t;
            }
        }

        return null;
    }
    private getTokenPart(token: Token, caretPosition: number): string {
        let out = "";
        if (token == null) {
            return out;
        }

        const text = token.text;
        const split = text.split("");
        for (let i = token.startIndex; i <= caretPosition; i++) {
            const c = split[i - token.startIndex];
            if (c == null) {
                break;
            }
            out = out + c;
        }
        return out;
    }

    private isWhitespace(data: string): boolean {
        if (data == null) {
            return false;
        }
        if (data.search(/\S/) > -1) {
            return false;
        }
        return true;

    }
    private isEqual(a: string, b: string): boolean {
        if (a.toLowerCase() === b.toLowerCase()) {
            return true;
        }
        return false;
    }
    private isBeginningWith(text: string, pattern: string): boolean {
        if (text == null || pattern == null) {
            return false;
        }
        const escaped = escapeRegExp(pattern);
        const r = new RegExp(`${escaped}`, "i");

        const res = text.search(r);

        if (res === 0) {
            return true;
        }
        return false;

    }
    private getCaretTokenIndex(tokens: Token[], caretPosition?: number): number {
        const max = tokens.length + 1;

        if (tokens.length === 0) {
            return 0;
        }

        if (caretPosition == null && tokens.length > 0) {
            return tokens.length - 1;
        }

        const i = tokens.findIndex((tk) => {
            return caretPosition >= tk.startIndex && caretPosition <= tk.stopIndex;
        });

        return i;
    }
    private normalizeCaretPosition(code: string, tokens: Token[], caretPosition: number): number {
        if (tokens.length === 0) {
            return 0;
        }
        if (code.length === 0) {
            return 0;
        }
        if (caretPosition > (code.length - 1)) {
            return code.length - 1;
        }

        if (caretPosition == null) {
            return code.length - 1;
        }

        return caretPosition;
    }
}
