export interface ParserErrors {
    [key: string]: ParserErrorItem;
}
export interface ParserErrorItem {
    desc: string;
}

export const parserErrors: ParserErrors = {
    "rule.alterTableOperation": { desc: "ALTER operation missing" },
    "rule.column": { desc: "Missing column" },
    "rule.columnDefinition": { desc: "Column definition missing" },
    "rule.constant": { desc: "invalid constant" },
    "rule.constantDecimal": { desc: "Number expected" },
    "rule.createIndexDef": { desc: "invalid Index definition" },
    "rule.createIndexSubject": { desc: "invalid Table definition" },
    "rule.createIndexTarget": { desc: "invalid Target column" },
    "rule.createTableDef": { desc: "invalid Table definition" },
    "rule.dataTypeStructure": { desc: "invalid Type structure" },
    "rule.expression": { desc: "expression expected" },
    "rule.fromSpec": { desc: "FROM clause missing" },
    "rule.indexEntriesSSpec": { desc: "ENTRIES specification invalid" },
    "rule.indexFullSpec": { desc: "FULL specification invalid" },
    "rule.indexKeysSpec": { desc: "KEYS specification invalid" },
    "rule.insertColumnSpec": { desc: "invalid column list" },
    "rule.insertValuesSpec": { desc: "invalid values list" },
    "rule.objectUnknownSpec": { desc: "invalid object name " },
    "rule.orderSpecElement": { desc: "invalid ORDER clause" },
    "rule.primaryKeyModifier": { desc: " invalid PRIMARY KEY modifier" },
    "rule.relationElement": { desc: "invalid relation element" },
    "rule.relationElementTokenSpec": { desc: "invalid TOKEN expression" },
    "rule.relationOperator": { desc: "invalid operator" },
    "rule.selectElement": { desc: "invalid SELECT element" },
    "rule.selectElements": { desc: "missing column list" },
    "rule.syntaxBracketLr": { desc: "missing (" },
    "rule.syntaxBracketRr": { desc: "missing )" },
    "rule.table": { desc: "invalid table name" },
    "rule.tableSpec": { desc: "invalid table specification" },
    "rule.updateAssignmentElement": { desc: "invalid assignment" },
    "rule.updateAssignments": { desc: "invalid UPDATE assignments" },
    "rule.whereSpec": { desc: "invalid WHERE clause" },

};
