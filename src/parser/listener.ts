import { CommonTokenStream, ParserRuleContext, TokenStreamRewriter } from "antlr4ts";
import { CqlParserListener } from "../antlr/CqlParserListener";

export type RuleClassType = "keyword" |
    "syntax" |
    "special" |
    "data-type" |
    "plain" |
    "column" |
    "table" |
    "keyspace" |
    "literal";

const ruleKeywords: { [prefix: string]: RuleClassType } = {
    kw: "keyword",
    syntax: "syntax",
    special: "special",
    dataType: "data-type",
    column: "column",
    table: "table",
    keyspace: "keyspace",
    literal: "literal",
};

export class AntlrListener implements CqlParserListener {

    public rewriter: TokenStreamRewriter;

    constructor(public tokens: CommonTokenStream, private ruleNames: string[]) {
        this.rewriter = new TokenStreamRewriter(tokens);
    }
    public enterEveryRule = (ctx: ParserRuleContext): void => {

    }
    public exitEveryRule = (ctx: ParserRuleContext): void => {
        const rule = this.ruleNames[ctx.ruleIndex];
        const ruleClass = this.identify(rule);

        if (ruleClass !== "plain") {
            const tokenStart = this.tokens.get(ctx.start.tokenIndex);
            const tokenStop = this.tokens.get(ctx.stop.tokenIndex);
            this.rewriter.insertBefore(tokenStart, `<span class="${ruleClass} ${rule}">`);
            this.rewriter.insertAfter(tokenStop, "</span>");
        }
    }

    private identify(ruleName: string): RuleClassType {
        const pl = Object.keys(ruleKeywords);

        for (const i of pl) {
            const rx = new RegExp(`^${i}`, "i");
            const res = ruleName.search(rx);

            if (res > -1) {
                const t = ruleKeywords[i];
                return t;
            }
        }

        return "plain";
    }
}
