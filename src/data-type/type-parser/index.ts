import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { CqlLexer } from "../../antlr/CqlLexer";
import { CqlParser } from "../../antlr/CqlParser";
import { CassandraDataType } from "../../types/index";
import { DataTypeManager } from "../index";
import { DataTypeAnalysis } from "./types";
import { DataTypeParserVisitor } from "./visitor/data-type-visitor";

export const typeParser = (input: string): DataTypeAnalysis => {
    console.log(`PARSE: ${input}`);
    const inputStream = new ANTLRInputStream(input);
    const cqlLexer = new CqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(cqlLexer);
    const cqlParser = new CqlParser(tokenStream);

    // const listener = new DataTypeParserListener(cqlParser.ruleNames);
    // cqlParser.addParseListener(listener);

    const visitor = new DataTypeParserVisitor(cqlParser.ruleNames);
    const result = visitor.visitDataType(cqlParser.dataType());

    return result;
};
export const rootColumnType = (input: string, ignoreRootFrozen: boolean = true): CassandraDataType => {

    const res = typeParser(input);

    if (res == null) {
        return null;
    }
    if (res.isFrozen && !ignoreRootFrozen) {
        return "frozen";
    }
    if (res.isFrozen && ignoreRootFrozen) {
        return res.frozenAs as CassandraDataType;
    }

    return res.name as CassandraDataType;

};

export const typeRender = (input: DataTypeAnalysis) => {
    const hasChildren = input.contains && input.contains.length > 0;
    if (!hasChildren) {
        return `${input.name}`;
    }

    const children = input.contains.map((c) => typeRender(c));

    return `${input.name}<${children.join(", ")}>`;

};

export const typeValueExampleRender = (input: DataTypeAnalysis) => {
    const hasChildren = input.contains && input.contains.length > 0;
    const dtm = new DataTypeManager();

    if (input.isFrozen) {
        return input.contains && input.contains.length === 1 ? typeValueExampleRender(input.contains[0]) : "'null'";
    }

    if (!hasChildren) {
        const dt = dtm.get(input.name as CassandraDataType, null);
        return `${dt.stringPlaceholder}`;
    }

    const children = input.contains.map((c) => typeValueExampleRender(c));

    if (input.name === "map") {
        return `{${children.join(", ")}}`;
    }
    if (input.name === "list") {
        return `[${children.join(", ")}]`;
    }
    if (input.name === "set") {
        return `{${children.join(", ")}}`;
    }
    if (input.name === "tuple") {
        return `(${children.join(", ")})`;
    }

    return `null`;

};
