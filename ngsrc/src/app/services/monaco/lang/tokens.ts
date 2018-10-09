/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

"use strict";

export const cqlLanguageConfig: monaco.languages.LanguageConfiguration = {
    comments: {
        lineComment: "--",
        blockComment: ["/*", "*/"],
    },
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: "\"", close: "\"" },
        { open: "'", close: "'" },
        { open: "/*", close: "*/" },
    ],
    surroundingPairs: [
        { open: "<", close: ">" },
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: "\"", close: "\"" },
        { open: "'", close: "'" },
    ],
};

export const cqlTokenProvider = <monaco.languages.IMonarchLanguage>{
    defaultToken: "",
    tokenPostfix: ".cql",
    ignoreCase: true,
    keywords: [
        "ADD", "AGGREGATE",
        "ALL", "ALLOW", "ALTER", "AND", "ANY", "APPLY", "AS", "ASC",
        "AUTHORIZE", "BATCH", "BEGIN", "BY", "CLUSTERING",
        "COLUMNFAMILY", "COMPACT", "CONTAINS", "CONSISTENCY",
        "COUNT", "CREATE", "CUSTOM", "DELETE", "DESC", "DISTINCT", "DROP",
        "EACH_QUORUM", "ENTRIES", "EXISTS", "FILTERING", "FROM", "FULL",
        "FUNCTION", "FUNCTIONS", "GRANT", "IF", "IN", "INDEX", "INFINITY",
        "INSERT", "INTO", "KEY", "KEYS", "KEYSPACE", "KEYSPACES", "LEVEL", "LIMIT",
        "LOCAL_ONE", "LOCAL_QUORUM", "MATERIALIZED", "MODIFY", "NAN",
        "NORECURSIVE", "NOSUPERUSER", "NOT", "OF", "ON", "ONE", "ORDER",
        "PARTITION", "PASSWORD", "PER", "PERMISSION", "PERMISSIONS",
        "PRIMARY", "QUORUM", "RENAME", "REVOKE", "ROLES", "SCHEMA", "SELECT",
        "SET", "STATIC",
        "STORAGE", "SUPERUSER", "TABLE", "THREE", "TO", "TOKEN", "TRUNCATE", "TTL",
        "TWO", "TYPE", "UNLOGGED", "UPDATE", "USE", "USER", "USERS", "USING", "VALUES",
        "VIEW", "WHERE", "WITH", "WRITETIME",
    ],
    typeKeywords: [
        "ascii", "bigint", "blob", "boolean", "counter", "date", "decimal",
        "double", "float", "frozen", "inet", "int", "list", "map", "set",
        "smallint", "text", "time", "timestamp", "timeuuid", "tinyint",
        "tuple", "uuid", "varchar", "varint",
    ],
    operators: [
        "=", "<", ">", ">=", "<=",
    ],
    brackets: [
        { open: "[", close: "]", token: "delimiter.square" },
        { open: "(", close: ")", token: "delimiter.parenthesis" },
        { open: "<", close: ">", token: "delimiter.angle" },
        { open: "{", close: "}", token: "delimiter.curly" },
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            { include: "@comments" },
            { include: "@whitespace" },
            { include: "@numbers" },

            [/(PRIMARY)(\s*)(KEY)/, "keyword.primary-key"],
            [/(list|map|set|frozen)(\s*<)(?![^>]+>\s*(?:\(|$))/,
                ["type.identifier", { token: "delimiter.type.definition", next: "@type" }],
            ],

            [/[{}()\[\]]/, "@brackets"],
            [/@symbols/, {
                cases: {
                    "@operators": "operator",

                },
            }],
            [/[a-z0-9A-z]+(?=\.)/, "type.keyspace"],
            // identifiers and keywords
            [/[a-zA-Z0-9_]\w*/, {
                cases: {
                    "@keywords": { token: "keyword", next: "@qualified" },
                    "@typeKeywords": { token: "type", next: "@qualified" },
                    "@default": { token: "identifier", next: "@qualified" },
                },
            }],
            [/"/, "string", "@doubleQuotedString"],
            [/'/, "string", "@singleQuotedString"],
            [/[,]/, "delimiter.comma"],
            [/[;]/, "delimiter.statement"],
            [/[\.]/, "delimiter.dot"],

        ],
        whitespace: [
            [/[ \t\r\n]+/, "white"],
        ],
        qualified: [
            [/[a-zA-Z_][\w]*/, {
                cases: {
                    // '@typeFollows': { token: 'keyword', next: '@type' },
                    // '@typeKeywords': 'type.identifier',
                    // '@keywords': 'keyword',
                    "@default": "identifier",
                },
            }],
            ["", "", "@pop"],
        ],
        type: [
            { include: "@whitespace" },
            [/[A-Z]\w*/, "type.identifier"],
            // identifiers and keywords
            [/[a-zA-Z_]\w*/, {
                cases: {
                    "@typeKeywords": "type.identifier",
                    //   '@keywordInType': 'keyword',
                    "@keywords": { token: "@rematch", next: "@popall" },
                    "@default": "type.identifier",
                },
            }],
            [/[<]/, "delimiter.type.definition", "@type_nested"],
            [/[>]/, "delimiter.type.definition", "@pop"],
            [/[\.,:]/, {
                cases: {
                    "@keywords": "keyword",
                    "@default": "delimiter",
                },
            }],
            ["", "", "@popall"], // catch all
        ],

        type_nested: [
            [/[<]/, "delimiter.type.definition", "@type_nested"],
            { include: "type" },
        ],
        comments: [
            [/--+.*/, "comment"],
            [/\/\*/, { token: "comment.quote", next: "@comment" }],
        ],
        comment: [
            [/[^*/]+/, "comment"],
            // Not supporting nested comments, as nested comments seem to not be standard?
            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic
            // [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
            [/\*\//, { token: "comment.quote", next: "@pop" }],
            [/./, "comment"],
        ],
        numbers: [
            [/0[xX][0-9a-fA-F]*/, "number"],
            [/[$][+-]*\d*(\.\d*)?/, "number"],
            [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"],
        ],
        doubleQuotedString: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, "string", "@pop"],
        ],
        singleQuotedString: [
            [/[^\\']+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/'/, "string", "@pop"],
        ],
    },
};
