import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { CqlLexer } from "../../antlr/CqlLexer";
import { CqlParser } from "../../antlr/CqlParser";
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
