import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { CqlLexer } from "../../antlr/CqlLexer";
import { CqlParser } from "../../antlr/CqlParser";
import { DataTypeParserListener } from "./listener/data-type-listener";
import { DataTypeParserVisitor } from "./visitor/data-type-visitor";

export const typeParser = (input: string) => {
    console.log(`PARSE: ${input}`);
    const inputStream = new ANTLRInputStream(input);
    const cqlLexer = new CqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(cqlLexer);
    const cqlParser = new CqlParser(tokenStream);

    const lis3tener = new DataTypeParserListener(cqlParser.ruleNames);
    // cqlParser.addParseListener(listener);

    const visitor = new DataTypeParserVisitor(cqlParser.ruleNames);
    visitor.visitDataType(cqlParser.dataType());

    const root = cqlParser.dataType();

    return null;
};
