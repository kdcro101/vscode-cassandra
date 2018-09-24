import { ParserRuleContext } from "antlr4ts";
import { ColumnContext, CqlContext, KeyspaceContext, RootContext, TableSpecContext, UseContext } from "../../antlr/CqlParser";
import { CqlParserListener } from "../../antlr/CqlParserListener";
import { CassandraClusterData } from "../../types";
import { AnalyzedStatement, CqlAnalysis, CqlAnalysisError, CqlStatementType } from "../../types/parser";

const KEYSPACE_RULE = "keyspace";
const TABLE_RULE = "table";
const STATEMENT_ROOT_RULE = "cql";

export class CqlAnalyzerListener implements CqlParserListener {
    private statementCurrent: number = -1;
    private result: CqlAnalysis = {
        statements: [],
        alterData: false,
        alterStructure: false,
        selectData: false,
        cluserName: null,

    };

    private rulePrevious: string;
    private keyspaceAmbiental: string;

    constructor(
        private ruleNames: string[],
        private cql: string,
        private structure: CassandraClusterData,
        private keyspaceInitial: string,
    ) {

        this.keyspaceAmbiental = this.keyspaceInitial;
        this.result.cluserName = structure.name;

    }
    public getResult() {
        return this.result;
    }
    exitRoot = (ctx: RootContext) => {

        const modData = this.result.statements.filter((i) =>
            i.type === "update" ||
            i.type === "insert" ||
            i.type === "delete" ||
            i.type === "truncate");

        const modStruct = this.result.statements.filter((i) =>
            i.type === "alterKeyspace" ||
            i.type === "alterMaterializedView" ||
            i.type === "alterRole" ||
            i.type === "alterTable" ||
            i.type === "alterUser" ||
            i.type === "alterType" ||
            i.type === "createAggregate" ||
            i.type === "createFunction" ||
            i.type === "createIndex" ||
            i.type === "createKeyspace" ||
            i.type === "createMaterializedView" ||
            i.type === "createRole" ||
            i.type === "createTable" ||
            i.type === "createTrigger" ||
            i.type === "createType" ||
            i.type === "createUser" ||
            i.type === "dropAggregate" ||
            i.type === "dropFunction" ||
            i.type === "dropIndex" ||
            i.type === "dropKeyspace" ||
            i.type === "dropMaterializedView" ||
            i.type === "dropRole" ||
            i.type === "dropTable" ||
            i.type === "dropTrigger" ||
            i.type === "dropType" ||
            i.type === "dropUser" ||
            i.type === "grant",
        );

        const selectData = this.result.statements.filter((i) => i.type === "select");

        this.result.alterData = modData.length > 0 ? true : false;
        this.result.alterStructure = modStruct.length > 0 ? true : false;
        this.result.selectData = selectData.length > 0 ? true : false;

        // collect statements
        this.result.statements.forEach((s, i) => {
            this.result.statements[i].text = this.cql.substring(s.charStart, s.charStop + 1);
        });

        if ((this.result.alterData || this.result.alterStructure) && this.result.selectData) {
            this.result.error = CqlAnalysisError.SELECT_AND_ALTER;
        }
        if (selectData.length > 1) {
            this.result.error = CqlAnalysisError.MULTIPLE_SELECT;
        }

        this.result.statements.forEach((s, i) => {
            if (s.type === "select" && s.keyspace && s.table) {
                const ksi = this.structure.keyspaces.findIndex((k) => k.name === s.keyspace);
                if (ksi > -1) {
                    const ks = this.structure.keyspaces[ksi];
                    const tbi = ks.tables.findIndex((t) => t.name === s.table);
                    if (tbi > -1) {
                        this.result.statements[i].tableStruct = ks.tables[tbi];
                    }
                }
            }
        });
    }
    enterEveryRule = (ctx: ParserRuleContext): void => {
        const rule: string = this.ruleNames[ctx.ruleIndex];
        console.log(`rule: ${rule}`);

        if (this.rulePrevious === STATEMENT_ROOT_RULE) {
            this.collectType(ctx);
        }

        // ----
        this.rulePrevious = rule;
    }
    exitEveryRule = (ctx: ParserRuleContext): void => {

    }
    enterCql = (ctx: ParserRuleContext): void => {
        this.statementCurrent += 1;
        this.result.statements[this.statementCurrent] = {
            type: null,
            columns: [],
        };

    }
    exitCql = (ctx: CqlContext) => {
        const k = this.getResultValue("keyspace");
        if (k == null) {
            this.setCurrentStatementValue("keyspace", this.keyspaceAmbiental);
        }
        this.setCurrentStatementValue("charStart", ctx.start.startIndex);
        this.setCurrentStatementValue("charStop", ctx.stop.stopIndex);
        console.log("abc");
    }
    exitColumn = (ctx: ColumnContext): void => {
        // this.result.statements[this.statementCurrent][k] = v;
    }
    exitUse = (ctx: UseContext): void => {
        if (ctx.children.length < 2) {
            return;
        }

        const k = ctx.getChild(1) as KeyspaceContext;
        const rule = this.ruleNames[k.ruleIndex];

        if (rule === KEYSPACE_RULE) {
            this.keyspaceAmbiental = k.text;
        }

    }
    exitTableSpec = (ctx: TableSpecContext) => {
        const ksc = ctx.children.find((c: ParserRuleContext) => this.ruleNames[c.ruleIndex] === KEYSPACE_RULE);
        const tbc = ctx.children.find((c: ParserRuleContext) => this.ruleNames[c.ruleIndex] === TABLE_RULE);

        if (ksc) {
            this.setCurrentStatementValue("keyspace", ksc.text);
        }
        if (tbc) {
            this.setCurrentStatementValue("table", tbc.text);
        }

        console.log("abc");

    }

    // ------------------------------------------------------------------------------------
    private collectType(ctx: ParserRuleContext): void {
        const rule: string = this.ruleNames[ctx.ruleIndex];
        let type: CqlStatementType = null;

        switch (rule) {
            case "alterKeyspace":
                type = rule as CqlStatementType;
                break;
            case "alterMaterializedView":
                type = rule as CqlStatementType;
                break;
            case "alterRole":
                type = rule as CqlStatementType;
                break;
            case "alterTable":
                type = rule as CqlStatementType;
                break;
            case "alterType":
                type = rule as CqlStatementType;
                break;
            case "alterUser":
                type = rule as CqlStatementType;
                break;
            case "applyBatch":
                type = rule as CqlStatementType;
                break;
            case "createAggregate":
                type = rule as CqlStatementType;
                break;
            case "createFunction":
                type = rule as CqlStatementType;
                break;
            case "createIndex":
                type = rule as CqlStatementType;
                break;
            case "createKeyspace":
                type = rule as CqlStatementType;
                break;
            case "createMaterializedView":
                type = rule as CqlStatementType;
                break;
            case "createRole":
                type = rule as CqlStatementType;
                break;
            case "createTable":
                type = rule as CqlStatementType;
                break;
            case "createTrigger":
                type = rule as CqlStatementType;
                break;
            case "createType":
                type = rule as CqlStatementType;
                break;
            case "createUser":
                type = rule as CqlStatementType;
                break;
            case "delete":
                type = rule as CqlStatementType;
                break;
            case "dropAggregate":
                type = rule as CqlStatementType;
                break;
            case "dropFunction":
                type = rule as CqlStatementType;
                break;
            case "dropIndex":
                type = rule as CqlStatementType;
                break;
            case "dropKeyspace":
                type = rule as CqlStatementType;
                break;
            case "dropMaterializedView":
                type = rule as CqlStatementType;
                break;
            case "dropRole":
                type = rule as CqlStatementType;
                break;
            case "dropTable":
                type = rule as CqlStatementType;
                break;
            case "dropTrigger":
                type = rule as CqlStatementType;
                break;
            case "dropType":
                type = rule as CqlStatementType;
                break;
            case "dropUser":
                type = rule as CqlStatementType;
                break;
            case "grant":
                type = rule as CqlStatementType;
                break;
            case "insert":
                type = rule as CqlStatementType;
                break;
            case "listPermissions":
                type = rule as CqlStatementType;
                break;
            case "listRoles":
                type = rule as CqlStatementType;
                break;
            case "revoke":
                type = rule as CqlStatementType;
                break;
            case "select":
                type = rule as CqlStatementType;
                break;
            case "truncate":
                type = rule as CqlStatementType;
                break;
            case "update":
                type = rule as CqlStatementType;
                break;
            case "use":
                type = rule as CqlStatementType;
                break;

            default:
                type = "empty";
                break;
        }

        this.setCurrentStatementValue("type", type);

    }
    private setCurrentStatementValue<K extends keyof AnalyzedStatement>(k: K, v: AnalyzedStatement[K]) {
        this.result.statements[this.statementCurrent][k] = v;
    }
    private getResultValue<K extends keyof AnalyzedStatement>(k: K): AnalyzedStatement[K] {
        return this.result.statements[this.statementCurrent][k];
    }

}
