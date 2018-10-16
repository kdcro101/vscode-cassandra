cat antlr4/cql3/CqlParser.g4  | grep -o  -P 'rule.[a-zA-Z\.]+'  | sort | uniq
