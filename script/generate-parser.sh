rm -rf antlr4-cql3
echo Z2l0QGdpdGxhYi5jb206a2Rjcm8xMDEvYW50bHI0LWNxbDMuZ2l0Cg== | base64 -d | xargs git clone --quiet
cd antlr4-cql3
../node_modules/antlr4ts-cli/antlr4ts -Werror -visitor -listener CqlLexer.g4
../node_modules/antlr4ts-cli/antlr4ts -Werror -visitor -listener CqlParser.g4
cd ..
mkdir -p src/antlr
mv antlr4-cql3/*.ts src/antlr
rm -rf antlr4-cql3
