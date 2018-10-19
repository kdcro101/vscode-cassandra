import {
    ANTLRErrorListener, ANTLRInputStream, CommonTokenStream, ConsoleErrorListener,
    RecognitionException, Recognizer, Token,
} from "antlr4ts";
import { CqlLexer } from "../antlr/CqlLexer";
import { CqlParser } from "../antlr/CqlParser";
import { CassandraClusterData } from "../types/index";
import { CqlAnalysis, CqlParserError, InputParseResult, TokenData } from "../types/parser";
import { CqlAnalyzerListener } from "./listeners/cql-analyzer";

export class InputParser {
    public analyze(input: string, structure: CassandraClusterData, keyspaceInitial: string): CqlAnalysis {
        const inputStream = new ANTLRInputStream(input);
        const cqlLexer = new CqlLexer(inputStream);
        const tokenStream = new CommonTokenStream(cqlLexer);
        const cqlParser = new CqlParser(tokenStream);

        cqlParser.removeErrorListener(ConsoleErrorListener.INSTANCE);
        const errors: CqlParserError[] = [];

        const errorHandler: ANTLRErrorListener<Token> = {
            syntaxError: (
                recognizer: Recognizer<any, any>,
                offendingSymbol: any | undefined,
                line: number, charPositionInLine: number, msg: string, e?: RecognitionException) => {
                const error: CqlParserError = {
                    name: msg,
                    token: this.extractTokenData(offendingSymbol),
                    line,
                    linePos: charPositionInLine,

                };
                errors.push(error);
            },
        };
        cqlParser.addErrorListener(errorHandler);

        const analyzerListener = new CqlAnalyzerListener(cqlParser.ruleNames, input, structure, keyspaceInitial);
        cqlParser.addParseListener(analyzerListener);

        const root = cqlParser.root();
        const analysis = analyzerListener.getResult();

        return analysis;
    }
    public parse(input: string, structure: CassandraClusterData, keyspaceInitial: string): InputParseResult {

        const inputStream = new ANTLRInputStream(input);
        const cqlLexer = new CqlLexer(inputStream);
        const tokenStream = new CommonTokenStream(cqlLexer);
        const cqlParser = new CqlParser(tokenStream);

        try {

            cqlParser.removeErrorListener(ConsoleErrorListener.INSTANCE);
            const errors: CqlParserError[] = [];

            const errorHandler: ANTLRErrorListener<Token> = {
                syntaxError: (
                    recognizer: Recognizer<any, any>,
                    offendingSymbol: any | undefined,
                    line: number, charPositionInLine: number, msg: string, e?: RecognitionException) => {
                    const error: CqlParserError = {
                        name: msg,
                        token: this.extractTokenData(offendingSymbol),
                        line,
                        linePos: charPositionInLine,

                    };
                    errors.push(error);
                },
            };
            cqlParser.addErrorListener(errorHandler);

            const analyzerListener = new CqlAnalyzerListener(cqlParser.ruleNames, input, structure, keyspaceInitial);
            cqlParser.addParseListener(analyzerListener);

            const root = cqlParser.root();
            const analysis = analyzerListener.getResult();

            const out: InputParseResult = {
                errors,
                analysis,
            };
            return out;

        } catch (e) {
            console.log(e);
        }
    }
    private extractTokenData(token: Token): TokenData {
        if (token == null) {
            return null;
        }
        const o: TokenData = {
            text: token.text,
            type: token.type,
            line: token.line,
            charPositionInLine: token.charPositionInLine,
            channel: token.channel,
            tokenIndex: token.tokenIndex,
            startIndex: token.startIndex,
            stopIndex: token.stopIndex,

        };

        return o;
    }
}
