import { ParserRuleContext } from "antlr4ts";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { DataTypeContext, DataTypeStructureContext } from "../../../antlr/CqlParser";
import { CqlParserListener } from "../../../antlr/CqlParserListener";

export class DataTypeParserListener implements CqlParserListener {
    private depth = 0;

    constructor(
        private ruleNames: string[],
    ) { }
    enterDataTypeStructure = (ctx: DataTypeStructureContext): void => {
        // console.log(`entering Structure=${this.depth}`);
    }
    exitDataTypeStructure = (ctx: DataTypeStructureContext): void => {
        // console.log(`EXIT STRUCTURE`);
        this.depth += 1;
    }
    exitDataType = (ctx: DataTypeContext) => {
        // console.log("exiting DataType");
    }
    public visitErrorNode = (node: ErrorNode): void => {

    }
    // public enterEveryRule = (ctx: ParserRuleContext): void => {

    // }
    public exitEveryRule = (ctx: ParserRuleContext): void => {
        const rule: string = this.ruleNames[ctx.ruleIndex];
        // console.log(`exiting every ${rule}`);
    }
}
