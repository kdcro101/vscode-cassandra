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

    brackets: [
        { open: "[", close: "]", token: "delimiter.square" },
        { open: "(", close: ")", token: "delimiter.parenthesis" },
        { open: "<", close: ">", token: "delimiter.angle" },
        { open: "{", close: "}", token: "delimiter.curly" },
    ],
    keywords: [
        "ADD", "AGGREGATE",
        "ALL", "ALLOW", "ALTER", "AND", "ANY", "APPLY", "AS", "ASC", "ASCII", "AUTHORIZE", "BATCH", "BEGIN",
        "BIGINT", "BLOB", "BOOLEAN", "BY", "CLUSTERING", "COLUMNFAMILY", "COMPACT", "CONTAINS", "CONSISTENCY",
        "COUNT", "COUNTER", "CREATE", "CUSTOM", "DECIMAL", "DELETE", "DESC", "DISTINCT", "DOUBLE", "DROP",
        "EACH_QUORUM", "ENTRIES", "EXISTS", "FILTERING", "FLOAT", "FROM", "FROZEN", "FULL", "FUNCTION", "FUNCTIONS",
        "GRANT", "IF", "IN", "INDEX", "INET", "INFINITY", "INSERT", "INT", "INTO", "KEY", "KEYS", "KEYSPACE",
        "KEYSPACES", "LEVEL", "LIMIT", "LIST", "LOCAL_ONE", "LOCAL_QUORUM", "MAP", "MATERIALIZED", "MODIFY", "NAN",
        "NORECURSIVE", "NOSUPERUSER", "NOT", "OF", "ON", "ONE", "ORDER", "PARTITION", "PASSWORD", "PER", "PERMISSION",
        "PERMISSIONS", "PRIMARY", "QUORUM", "RENAME", "REVOKE", "ROLES", "SCHEMA", "SELECT", "SET", "STATIC", "STORAGE",
        "SUPERUSER", "TABLE", "TEXT", "TIME", "TIMESTAMP", "TIMEUUID", "THREE", "TO", "TOKEN", "TRUNCATE", "TTL", "TUPLE",
        "TWO", "TYPE", "UNLOGGED", "UPDATE", "USE", "USER", "USERS", "USING", "UUID", "VALUES", "VARCHAR",
        "VARINT", "VIEW", "WHERE", "WITH", "WRITETIME",
    ],
    typeKeywords: [
        "ascii",
        "bigint",
        "blob",
        "boolean",
        "counter",
        "date",
        "decimal",
        "double",
        "float",
        "frozen",
        "inet",
        "int",
        "list",
        "map",
        "set",
        "smallint",
        "text",
        "time",
        "timestamp",
        "timeuuid",
        "tinyint",
        "tuple",
        "uuid",
        "varchar",
        "varint",
    ],
    builtinFunctions: [

        "GET_TRANSMISSION_STATUS",
    ],
    operators: [
        "=", "<", ">", ">=", "<=",
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            { include: "@comments" },
            { include: "@whitespace" },
            { include: "@numbers" },

            [/[;,.]/, "delimiter"],
            [/[()<>\[\]]/, "@brackets"],
            [/[\w@#$]+/, {
                cases: {
                    "@typeKeywords": "type",
                    "@keywords": "keyword",
                    "@builtinFunctions": "predefined",
                    "@default": "identifier",
                },
            }],
            [/@symbols/, {
                cases: {
                    "@operators": "keyword",
                    "@default": "",
                },
            }],
            [/"/, "string", "@doubleQuotedString"],
            [/'/, "string", "@singleQuotedString"],

        ],
        whitespace: [
            [/\s+/, "white"],
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
        complexIdentifiers: [
            [/\[/, { token: "identifier.quote", next: "@bracketedIdentifier" }],
            [/"/, { token: "identifier.quote", next: "@quotedIdentifier" }],
        ],
        bracketedIdentifier: [
            [/[^\]]+/, "identifier"],
            [/]]/, "identifier"],
            [/]/, { token: "identifier.quote", next: "@pop" }],
        ],
        quotedIdentifier: [
            [/[^"]+/, "identifier"],
            [/""/, "identifier"],
            [/"/, { token: "identifier.quote", next: "@pop" }],
        ],

    },
};
