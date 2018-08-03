import { ANTLRInputStream, CommonTokenStream, Token } from "antlr4ts";
import { CqlLexer } from "../antlr/CqlLexer";
import { CqlParser } from "../antlr/CqlParser";

import * as c3 from "./CodeCompletionCore";
import { preferredRules, RuleData } from "./rules";

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
    tokenStart: number;
    tokenStop: number;
    tokenText: string;
    isPartial: boolean;
}
export class Completition {

    public execute(code: string, caretPosition?: number): CompletitionOutput {
        const tokenLexer = new CqlLexer(new ANTLRInputStream(code));
        const tokens = tokenLexer.getAllTokens();

        const normCaretPosition = this.normalizeCaretPosition(code, tokens, caretPosition);

        const inputStream = new ANTLRInputStream(code);
        const lexer = new CqlLexer(inputStream);

        // const lastNon;
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new CqlParser(tokenStream);

        const core = new c3.CodeCompletionCore(parser);

        const ruleMap = parser.getRuleIndexMap();
        const ruleMapArray = Array.from(ruleMap.entries());
        const ruleNames = Object.keys(preferredRules);
        const ruleNumbers = ruleNames.map((rule) => parser.getRuleIndex(rule));

        const anal = this.analyzeSituation(code, normCaretPosition, tokens);

        core.preferredRules = new Set<number>([
            ...ruleNumbers,
        ]);

        const tree = parser.root();
        // core.showDebugOutput = true;
        // core.showRuleStack = true;
        // const vocabulary = parser.vocabulary;
        const candidates = core.collectCandidates(anal.caretTokenIndex);
        // const candidates = core.collectCandidates(9);
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
        const f = this.createOutput(candidateRules, anal, tokens);
        return f;
    }
    private createOutput(candidates: RuleData[], analysis: AnalyzedSituation, tokens: Token[]): CompletitionOutput {

        console.log("-------------------------------");
        console.log(candidates);
        console.log("-------------------------------");

        const prevText = analysis.lastKnown == null ? null : analysis.lastKnown.text;
        const partial = this.isWhitespace(analysis.partialInput) ? "" : analysis.partialInput;
        let filtered: RuleData[] = candidates;
        if (prevText) {

            filtered = candidates.filter((i) => !this.isEqual(i.text, prevText));
        }
        if (prevText.length > 0) {
            filtered = filtered.filter((i) => this.isBeginningWith(i.text, partial));
        }

        const token = tokens[analysis.caretTokenIndex];
        const out: CompletitionOutput = {
            list: filtered,
            tokenText: analysis.caretTokenText,
            tokenStart: token ? token.startIndex : -1,
            tokenStop: token ? token.stopIndex : -1,
            isPartial: partial.length > 0 ? true : false,
        };

        return out;
    }
    private analyzeSituation(code: string, caretPosition: number, tokens: Token[]): AnalyzedSituation {
        const tokenIndex = this.getCaretTokenIndex(tokens, caretPosition);
        const token = tokens[tokenIndex];
        const tokenPart = this.getTokenPart(token, caretPosition);
        const tokenLast = this.getLastToken(tokens, tokenIndex);
        const out: AnalyzedSituation = {

            lastKnown: tokenLast,
            partialInput: tokenPart,
            caretTokenIndex: tokenIndex,
            caretTokenText: token == null ? null : token.text,
            invalid: false,
        };
        return out;
    }
    private getLastToken(tokens: Token[], caretTokenIndex: number): Token {

        for (let i = (caretTokenIndex - 1); i >= 0; i--) {
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
