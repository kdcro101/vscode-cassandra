/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

"use strict";

export const cqlKeysHoverTokenProvider = <monaco.languages.IMonarchLanguage>{
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
        "PRIMARY",
        "PARTITION",
        "KEY",
        "COLUMN",
        "CLUSTERING",
        "AS",
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
    builtinFunctions: [],
    operators: [

    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            { include: "@whitespace" },
            [/PARTITION\s+KEY/, "key.partition"],
            [/COLUMN\s+CLUSTERING\s+KEY/, "key.clustering"],
            [/[;,.]/, "delimiter"],
            [/[()<>\[\]]/, "delimiter.type.definition"],
            [/[\w@#$]+/, {
                cases: {
                    "@typeKeywords": "type",
                    "@keywords": "keyword",
                    "@builtinFunctions": "predefined",
                    "@default": "",
                },
            }],
            [/"/, "string", "@doubleQuotedString"],
            [/'/, "string", "@singleQuotedString"],

        ],
        whitespace: [
            [/\s+/, "white"],
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
