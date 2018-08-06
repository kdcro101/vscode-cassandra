import { CommonTokenStream, ParserRuleContext, TokenStreamRewriter } from "antlr4ts";
import { KwSelectContext, KwWhereContext, RootContext } from "../antlr/CqlParser";
import { CqlParserListener } from "../antlr/CqlParserListener";

export type RuleClassType = "keyword" |
    "syntax" |
    "special" |
    "data-type" |
    "plain" |
    "column" |
    "table" |
    "keyspace";

const ruleKeywords: { [prefix: string]: RuleClassType } = {
    kw: "keyword",
    syntax: "syntax",
    special: "special",
    dataType: "data-type",
    column: "column",
    table: "table",
    keyspace: "keyspace",
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
        // console.log(`ENTER: ${rule} <${ruleClass}> [${ctx.text}]`);

        if (ruleClass !== "plain") {
            const tokenStart = this.tokens.get(ctx.start.tokenIndex);
            const tokenStop = this.tokens.get(ctx.stop.tokenIndex);
            this.rewriter.insertBefore(tokenStart, `<span class="${ruleClass} ${rule}">`);
            this.rewriter.insertAfter(tokenStop, "</span>");
        }
    }
    // public enterKwSelect = (ctx: KwSelectContext): void => {
    //     // ctx.K_SELECT.

    //     const t = this.tokens.get(ctx.start.tokenIndex);
    //     this.rewriter.insertBefore(t, `<span class="keyword">`);
    // }
    // public exitKwSelect = (ctx: KwSelectContext): void => {
    //     console.log(ctx);
    //     const t = this.tokens.get(ctx.start.tokenIndex);
    //     this.rewriter.insertAfter(t, "</span>");
    //     // ctx.
    //     // ctx.text = "1231231";
    //     // this.res. = "";

    // }
    // public enterKwWhere = (ctx: KwWhereContext): void => {
    //     console.log(ctx);

    // }
    // public exitKwWhere = (ctx: KwWhereContext): void => {
    //     console.log(ctx);

    // }
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
