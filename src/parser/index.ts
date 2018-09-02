import {
    ANTLRErrorListener, ANTLRInputStream, CommonTokenStream,
    ConsoleErrorListener, RecognitionException, Recognizer, Token,
} from "antlr4ts";
import { CqlLexer } from "../antlr/CqlLexer";
import { CqlParser } from "../antlr/CqlParser";

export interface CqlParseError {
    name: string;
}

export class InputParser {

    public parse(input: string) {
        const inputStream = new ANTLRInputStream(input);
        const cqlLexer = new CqlLexer(inputStream);
        const tokenStream = new CommonTokenStream(cqlLexer);
        const cqlParser = new CqlParser(tokenStream);

        // cqlLexer.addErrorListener(errorLexer);
        // cqlParser.addErrorListener(errorParser);

        cqlParser.removeErrorListener(ConsoleErrorListener.INSTANCE);

        const errorHandler: ANTLRErrorListener<Token> = {
            syntaxError: (
                recognizer: Recognizer<any, any>,
                offendingSymbol: any | undefined,
                line: number, charPositionInLine: number, msg: string, e?: RecognitionException) => {

                console.log(arguments);
            },
        };
        cqlParser.addErrorListener(errorHandler);

        // const listener = new AntlrListener(tokenStream, cqlParser.ruleNames);
        // cqlParser.addParseListener(listener);
        const root = cqlParser.root();

        // const out = listener.rewriter.getText();
        return root;
    }

}
