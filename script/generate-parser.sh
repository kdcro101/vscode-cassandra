cd res/g/cql
../../../node_modules/antlr4ts-cli/antlr4ts -Werror -visitor -listener CqlLexer.g4
../../../node_modules/antlr4ts-cli/antlr4ts -Werror -visitor -listener CqlParser.g4
cd ../../..
mkdir -p src/antlr
mv res/g/cql/*.ts src/antlr
rm -rvf res/g/cql/*.tokens
rm -rvf res/g/cql/.antlr
echo "done"
