import { ParserRuleContext } from "antlr4ts";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { DataTypeContext, DataTypeFundamentalContext, DataTypeStructureContext } from "../../../antlr/CqlParser";
import { CqlParserVisitor } from "../../../antlr/CqlParserVisitor";
import { DataTypeAnalysis } from "../types";

const RULE_COLLECTION = "dataTypeCollection";
const RULE_FUNDAMENTAL = "dataTypeFundamental";
const RULE_DATATYPE = "dataType";
const TYPE_FROZEN = "frozen";

export class DataTypeParserVisitor implements CqlParserVisitor<any> {
    constructor(
        private ruleNames: string[],
    ) { }

    public visit(tree: ParseTree): any {

    }
    public visitChildren(node: RuleNode): any {

    }
    public visitTerminal(node: TerminalNode): any {

    }
    public visitErrorNode(node: ErrorNode): any {

    }
    public visitDataType(ctx: DataTypeContext): DataTypeAnalysis {
        // console.log(`visitDataType  ${ctx.text}`);
        const root: DataTypeAnalysis = {
            name: null,
            contains: null,
            isFrozen: false,
        };
        this.parseDataType(ctx, root);

        return root;
    }
    private parseDataType(ctx: DataTypeContext, current: DataTypeAnalysis) {
        if (ctx.childCount === 0) {
            return current;
        }
        const child = ctx.children[0] as ParserRuleContext;
        const isFund = this.isFundamental(child);
        const isColl = this.isCollection(child);

        const name: string = child.children[0].text;
        if (isFund) {
            current.name = name;
            return;
        }
        if (isColl) {
            current.name = name;
            current.isFrozen = name === TYPE_FROZEN ? true : false;

            if (current.parent && current.parent.isFrozen) {
                current.parent.frozenAs = name;
            }

            const structure = child.children[1] as DataTypeStructureContext;
            const childTypes = structure.children.filter((c: ParserRuleContext) => this.ruleName(c.ruleIndex) === RULE_DATATYPE);
            current.contains = [];
            childTypes.forEach((ct: DataTypeContext, i) => {
                const nt: DataTypeAnalysis = {
                    name: null,
                    contains: null,
                    isFrozen: false,
                    parent: current,

                };
                current.contains[i] = nt;
                this.parseDataType(ct, nt);
            });

        }

        return;
    }
    private isFundamental(ctx: ParserRuleContext) {
        const ruleName = this.ruleName(ctx.ruleIndex);
        if (ruleName === RULE_FUNDAMENTAL) {
            return true;
        }
        return false;
    }
    private isCollection(ctx: ParserRuleContext) {
        const ruleName = this.ruleName(ctx.ruleIndex);
        if (ruleName === RULE_COLLECTION) {
            return true;
        }
        return false;
    }
    private ruleName(index: number): string {
        return this.ruleNames[index];
    }
}
