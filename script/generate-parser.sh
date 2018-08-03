cd antlr4/cql3
../../node_modules/antlr4ts-cli/antlr4ts -Werror -visitor -listener CqlLexer.g4
../../node_modules/antlr4ts-cli/antlr4ts -Werror -visitor -listener CqlParser.g4

cd ../..
mkdir -p src/antlr
mv -v antlr4/cql3/*.ts src/antlr
rm -v antlr4/cql3/*.tokens
