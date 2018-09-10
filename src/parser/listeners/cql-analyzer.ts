import { CommonTokenStream, ParserRuleContext, TokenStreamRewriter } from "antlr4ts";
import { CqlParserListener } from "../../antlr/CqlParserListener";

export interface StatementAnalysis {
    type: StatementType;
    limit?: number;
    keyspace?: string;
    table?: string;
}
export type StatementType = "empty" |
    "alterKeyspace" | "alterMaterializedView" | "alterRole" | "alterTable" | "alterType" | "alterUser"
    | "applyBatch" | "createAggregate" | "createFunction" | "createIndex" | "createKeyspace" | "createMaterializedView"
    | "createRole" | "createTable" | "createTrigger" | "createType" | "createUser" | "delete" | "dropAggregate"
    | "dropFunction" | "dropIndex" | "dropKeyspace" | "dropMaterializedView" | "dropRole" | "dropTable" | "dropTrigger"
    | "dropType" | "dropUser" | "grant" | "insert" | "listPermissions" | "listRoles" | "revoke" | "select" | "truncate"
    | "update" | "use";

export class CqlAnalyzerListener implements CqlParserListener {
    private statementCurrent: number = -1;
    private analysis: StatementAnalysis[] = [];
    private rulePrevious: string;
    private statementRootRule = "cql";

    constructor(private ruleNames: string[]) {

    }
    public getResult() {
        return this.analysis;
    }
    public enterEveryRule = (ctx: ParserRuleContext): void => {
        const rule: string = this.ruleNames[ctx.ruleIndex];
        console.log(`rule: ${rule}`);

        if (this.rulePrevious === this.statementRootRule) {
            this.collectType(ctx);
        }

        // ----
        this.rulePrevious = rule;
    }
    public exitEveryRule = (ctx: ParserRuleContext): void => {

    }
    public enterCql = (ctx: ParserRuleContext): void => {
        this.statementCurrent += 1;
        this.analysis[this.statementCurrent] = {
            type: null,
        };

    }
    private collectType(ctx: ParserRuleContext): void {
        const rule: string = this.ruleNames[ctx.ruleIndex];
        let type: StatementType = null;

        switch (rule) {
            case "alterKeyspace":
                type = rule as StatementType;
                break;
            case "alterMaterializedView":
                type = rule as StatementType;
                break;
            case "alterRole":
                type = rule as StatementType;
                break;
            case "alterTable":
                type = rule as StatementType;
                break;
            case "alterType":
                type = rule as StatementType;
                break;
            case "alterUser":
                type = rule as StatementType;
                break;
            case "applyBatch":
                type = rule as StatementType;
                break;
            case "createAggregate":
                type = rule as StatementType;
                break;
            case "createFunction":
                type = rule as StatementType;
                break;
            case "createIndex":
                type = rule as StatementType;
                break;
            case "createKeyspace":
                type = rule as StatementType;
                break;
            case "createMaterializedView":
                type = rule as StatementType;
                break;
            case "createRole":
                type = rule as StatementType;
                break;
            case "createTable":
                type = rule as StatementType;
                break;
            case "createTrigger":
                type = rule as StatementType;
                break;
            case "createType":
                type = rule as StatementType;
                break;
            case "createUser":
                type = rule as StatementType;
                break;
            case "delete":
                type = rule as StatementType;
                break;
            case "dropAggregate":
                type = rule as StatementType;
                break;
            case "dropFunction":
                type = rule as StatementType;
                break;
            case "dropIndex":
                type = rule as StatementType;
                break;
            case "dropKeyspace":
                type = rule as StatementType;
                break;
            case "dropMaterializedView":
                type = rule as StatementType;
                break;
            case "dropRole":
                type = rule as StatementType;
                break;
            case "dropTable":
                type = rule as StatementType;
                break;
            case "dropTrigger":
                type = rule as StatementType;
                break;
            case "dropType":
                type = rule as StatementType;
                break;
            case "dropUser":
                type = rule as StatementType;
                break;
            case "grant":
                type = rule as StatementType;
                break;
            case "insert":
                type = rule as StatementType;
                break;
            case "listPermissions":
                type = rule as StatementType;
                break;
            case "listRoles":
                type = rule as StatementType;
                break;
            case "revoke":
                type = rule as StatementType;
                break;
            case "select":
                type = rule as StatementType;
                break;
            case "truncate":
                type = rule as StatementType;
                break;
            case "update":
                type = rule as StatementType;
                break;
            case "use":
                type = rule as StatementType;
                break;

            default:
                type = "empty";
                break;
        }

        this.setCurrentType(type);

    }
    private setCurrentType(type: StatementType) {
        this.analysis[this.statementCurrent].type = type;
    }
    // private hasCurrentType() {
    //     if (this.data[this.statementCurrent]) { }
    // }

}
