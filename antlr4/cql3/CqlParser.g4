/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 by Domagoj Kovačević
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Project : cql-parser; an ANTLR4 grammar for Apache Cassandra CQL  https://github.com/kdcro101cql-parser
 */

parser grammar CqlParser;

options { tokenVocab=CqlLexer; }

root
    : cqls? MINUSMINUS? eof
    ;

cqls
    : (cql MINUSMINUS? statementSeparator | empty)* (cql (MINUSMINUS? statementSeparator)? | empty)
    ;
statementSeparator
    : SEMI
    ;

empty
    : statementSeparator
    ;

cql
    : beginBatch
    | alterKeyspace
    | alterMaterializedView
    | alterRole
    | alterTable
    | alterType
    | alterUser
    | applyBatch
    | createAggregate
    | createFunction
    | createIndex
    | createKeyspace
    | createMaterializedView
    | createRole
    | createTable
    | createTrigger
    | createType
    | createUser
    | delete
    | dropAggregate
    | dropFunction
    | dropIndex
    | dropKeyspace
    | dropMaterializedView
    | dropRole
    | dropTable
    | dropTrigger
    | dropType
    | dropUser
    | grant
    | insert
    | listPermissions
    | listRoles
    | revoke
    | select
    | truncate
    | update
    | use
    ;

revoke
    : kwRevoke priviledge kwOn resource kwFrom role
    ;

listUsers
    : kwList kwUsers
    ;

listRoles
    : kwListRoles (kwOf role)? kwNorecursive?
    ;

listPermissions
    : kwList priviledge (kwOn resource)? (kwOf role)?
    ;

grant
    : kwGrant priviledge kwOn resource kwTo role
    ;

priviledge
    :(kwAll | kwAllPermissions)
    |kwAlter
    |kwAuthorize
    |kwDescibe
    |kwExecute
    |kwCreate
    |kwDrop
    |kwModify
    |kwSelect
    ;

resource
    : kwAllFunctions
    | kwAllFunctions kwIn kwKeyspace keyspace
    | kwFunction (keyspace DOT)? function
    | kwAllKeyspaces
    | kwKeyspace keyspace
    | (kwTable)? tableSpec
    | kwAllRoles
    | kwRole role
    ;

createUser
    : kwCreate kwUser ifNotExist? user kwWith kwPassword constantString (kwSuperuser|kwNosuperuser)?
    ;

createRole
    : kwCreate kwRole ifNotExist? role roleWith?
    ;

createType
    : kwCreate kwType ifNotExist? (keyspace DOT)? type
      syntaxBracketLr typeMemberColumnList syntaxBracketRr
    ;
typeMemberColumnList
    : column dataType (syntaxComma column dataType)*
    ;

createTrigger
    : kwCreate kwTrigger ifNotExist? (keyspace DOT)? trigger kwUsing triggerClass
    ;

createMaterializedView
    : kwCreate kwMaterialized kwView ifNotExist? (keyspace DOT)? materializedView
      kwAs
      kwSelect columnList kwFrom tableSpec
      materializedViewWhere
      kwPrimary kwKey syntaxBracketLr columnList syntaxBracketRr
      (kwWith materializedViewOptions)?

    ;
materializedViewWhere
    : kwWhere columnNotNullList (kwAnd relationElements)?
    ;
columnNotNullList
    : columnNotNull (kwAnd columnNotNull)*
    ;
columnNotNull
    : column kwIs kwNot kwNull
    ;

materializedViewOptions
    : tableOptions
    | tableOptions kwAnd clusteringOrder
    | clusteringOrder
    ;

// CREATE MATERIALIZED VIEW [IF NOT EXISTS] [keyspace_name.] view_name
// AS SELECT column_list
// FROM [keyspace_name.] base_table_name
// WHERE column_name IS NOT NULL [AND column_name IS NOT NULL ...]
//       [AND relation...]
// PRIMARY KEY ( column_list )
// [WITH [table_properties]
//       [AND CLUSTERING ORDER BY (cluster_column_name order_option )]]



createKeyspace
    : kwCreate kwKeyspace ifNotExist? keyspace
      kwWith kwReplication OPERATOR_EQ syntaxBracketLc replicationList syntaxBracketRc
      (kwAnd durableWrites)?
    ;

createFunction
    : kwCreate orReplace? kwFunction  ifNotExist?
      (keyspace DOT)? function syntaxBracketLr paramList? syntaxBracketRr
      returnMode
      kwReturns dataType
      kwLanguage language kwAs
      codeBlock

    ;
codeBlock
    : CODE_BLOCK
    ;
paramList
    : param (syntaxComma param)*
    ;

returnMode
    : (kwCalled | kwReturns kwNull) kwOn kwNull kwInput
    ;
createAggregate
    : kwCreate orReplace? kwAggregate ifNotExist?
      (keyspace DOT)? aggregate syntaxBracketLr dataType syntaxBracketRr
      kwSfunc function
      kwStype dataType
      kwFinalfunc function
      kwInitcond initCondDefinition
    ;

initCondDefinition
    : constant
    | initCondList
    | initCondListNested
    | initCondHash
    ;
initCondHash
    : syntaxBracketLc initCondHashItem (syntaxComma initCondHashItem )*   syntaxBracketRc
    ;
initCondHashItem
    : hashKey COLON initCondDefinition
    ;
initCondListNested
    : syntaxBracketLr initCondList (syntaxComma constant | initCondList)* syntaxBracketRr
    ;

initCondList
    : syntaxBracketLr constant (syntaxComma constant)* syntaxBracketRr
    ;

orReplace
    : kwOr kwReplace
    ;

alterUser
    : kwAlter kwUser user kwWith userPassword userSuperUser?
    ;

userPassword
    : kwPassword constantString
    ;

userSuperUser
    : kwSuperuser
    | kwNosuperuser
    ;

alterType
    : kwAlter kwType (keyspace DOT)? type alterTypeOperation
    ;
alterTypeOperation
    : alterTypeAlterType? alterTypeAdd? alterTypeRename?
    ;

alterTypeRename
    : kwRename alterTypeRenameList
    ;
alterTypeRenameList
    : alterTypeRenameItem (kwAnd alterTypeRenameItem)*
    ;

alterTypeRenameItem
    : column kwTo column
    ;

alterTypeAdd
    : kwAdd column dataType (syntaxComma column dataType)*
    ;

alterTypeAlterType
    : kwAlter column kwType dataType
    ;

alterTable
    : kwAlter kwTable tableSpec alterTableOperation
    ;
alterTableOperation
    : alterTableAdd
    | alterTableDropColumns
    | alterTableDropColumns
    | alterTableDropCompactStorage
    | alterTableRename
    | alterTableWith
    | { this.notifyErrorListeners("rule.alterTableOperation"); }
    ;
alterTableWith
    : kwWith tableOptions
    ;

alterTableRename
    :kwRename column kwTo column
    ;
alterTableDropCompactStorage
    : kwDrop kwCompact kwStorage
    ;
alterTableDropColumns
    : kwDrop alterTableDropColumnList
    ;

alterTableDropColumnList
    : column (syntaxComma column)*
    ;

alterTableAdd
    : kwAdd alterTableColumnDefinition
    ;

alterTableColumnDefinition
    : column dataType (syntaxComma column dataType)*
    ;

alterRole
    : kwAlter kwRole role roleWith?
    ;
roleWith
    : kwWith (roleWithOptions (kwAnd roleWithOptions)*)
    ;
roleWithOptions
    : kwPassword OPERATOR_EQ constantString
    | kwLogin OPERATOR_EQ constantBoolean
    | kwSuperuser OPERATOR_EQ constantBoolean
    | kwOptions OPERATOR_EQ optionHash
    ;

alterMaterializedView
    : kwAlter kwMaterialized kwView (keyspace DOT)? materializedView
     (kwWith tableOptions)?
    ;

dropUser
    : kwDrop kwUser ifExist? user
    ;

dropType
    : kwDrop kwType ifExist? (keyspace DOT)? type
    ;
dropMaterializedView
    : kwDrop kwMaterialized kwView ifExist? (keyspace DOT)? materializedView

    ;
dropAggregate
    : kwDrop kwAggregate ifExist? (keyspace DOT)? aggregate
    ;
dropFunction
    : kwDrop kwFunction ifExist? (keyspace DOT)? function
    ;
dropTrigger
    : kwDrop kwTrigger ifExist? trigger kwOn tableSpec
    ;
dropRole
    : kwDrop kwRole ifExist? role
    ;

dropTable
    : kwDrop kwTable ifExist? tableSpec
    ;
dropKeyspace
    : kwDrop kwKeyspace ifExist? keyspace
    ;
dropIndex
    : kwDrop kwIndex ifExist? (keyspace DOT)? indexName
    ;
createTable
    : kwCreate kwTable ifNotExist? tableSpec createTableDef withElement?
    ;

createTableDef
    : syntaxBracketLr columnDefinitionList syntaxBracketRr
    | { this.notifyErrorListeners("rule.createTableDef"); }
    ;

withElement
    : kwWith tableOptions (kwAnd clusteringOrder)?
    | kwWith clusteringOrder? (kwAnd tableOptions)?
    ;

clusteringOrder
    : kwClustering kwOrder kwBy syntaxBracketLr clusteringOrderItem (syntaxComma clusteringOrderItem)* syntaxBracketRr
    ;

clusteringOrderItem
    : column orderDirection?
    ;


tableOptions
    :  tableOptionItem (kwAnd tableOptionItem)*
    ;
tableOptionItem
    : tableOptionName OPERATOR_EQ tableOptionValue
    | tableOptionName OPERATOR_EQ optionHash
    ;
tableOptionName
    : OBJECT_NAME
    ;

tableOptionValue
    : constantString
    | constantFloat
    ;
optionHash
    : syntaxBracketLc optionHashItem (syntaxComma optionHashItem)*  syntaxBracketRc
    ;
optionHashItem
    : optionHashKey COLON optionHashValue
    ;
optionHashKey
    : constantString
    ;
optionHashValue
    : constantString
    | constantFloat
    ;

columnDefinitionList
    : columnDefinition (syntaxComma columnDefinition)* (syntaxComma primaryKeyElement)?
    ;

columnDefinition
    : column dataType primaryKeyModifier
    | column dataType kwStatic
    | column dataType
    | { this.notifyErrorListeners("rule.columnDefinition"); }
    ;

primaryKeyModifier
    : kwPrimary kwKey
    | kwPrimary { this.notifyErrorListeners("rule.primaryKeyModifier"); }
    ;
primaryKeyElement
    : kwPrimary kwKey syntaxBracketLr primaryKeyDefinition syntaxBracketRr
    ;

primaryKeyDefinition
    : singlePrimaryKey
    | compoundKey
    | compositeKey
    ;

singlePrimaryKey
    : column
    ;
compoundKey
    : partitionKey (syntaxComma clusteringKeyList)
    ;
compositeKey
    :  syntaxBracketLr partitionKeyList syntaxBracketRr (syntaxComma clusteringKeyList)
    ;

partitionKeyList
    : ( partitionKey ) (syntaxComma partitionKey)*
    ;
clusteringKeyList
    : ( clusteringKey ) (syntaxComma clusteringKey)*
    ;


partitionKey
    : column
    ;
clusteringKey
    : column
    ;

applyBatch
    : kwApply kwBatch
    ;

beginBatch
    : beginBatchSpec delete
    | beginBatchSpec insert
    | beginBatchSpec update
    ;

beginBatchSpec
    : kwBegin batchType? kwBatch usingTimestampSpec?
    ;
batchType
    : kwLogged
    | kwUnlogged
    ;

alterKeyspace
    : kwAlter kwKeyspace keyspace
      kwWith kwReplication OPERATOR_EQ syntaxBracketLc replicationList syntaxBracketRc
      (kwAnd durableWrites)?
    ;

replicationList
    : replicationListItem (syntaxComma replicationListItem)*
    ;
// replicationList
//     : ( replicationListItem ) (syntaxComma replicationListItem)*
//     ;

replicationListItem
    : STRING_LITERAL COLON STRING_LITERAL
    | STRING_LITERAL COLON DECIMAL_LITERAL
    ;
durableWrites
    : kwDurableWrites OPERATOR_EQ constantBoolean
    ;

use
    : kwUse keyspace
    ;

truncate
    : kwTruncate (kwTable)? tableSpec
    ;

createIndex
    : kwCreate kwIndex ifNotExist? indexName? createIndexSubject createIndexDef
    ;

createIndexSubject
    : kwOn tableSpec
    | { this.notifyErrorListeners("rule.createIndexSubject"); }
    ;

indexName
    : OBJECT_NAME
    | constantString
    ;
createIndexDef
    : syntaxBracketLr createIndexTarget syntaxBracketRr
    | { this.notifyErrorListeners("rule.createIndexDef"); }
    ;
createIndexTarget
    : column
    | indexKeysSpec
    | indexEntriesSSpec
    | indexFullSpec
    | { this.notifyErrorListeners("rule.createIndexTarget"); }
    ;

indexKeysSpec
    : kwKeys syntaxBracketLr (column| { this.notifyErrorListeners("rule.indexKeysSpec"); }) syntaxBracketRr
    ;
indexEntriesSSpec
    : kwEntries syntaxBracketLr (column| { this.notifyErrorListeners("rule.indexEntriesSSpec"); }) syntaxBracketRr
    ;
indexFullSpec
    : kwFull syntaxBracketLr (column| { this.notifyErrorListeners("rule.indexFullSpec"); }) syntaxBracketRr
    ;

delete
    : kwDelete deleteColumnList? fromSpec usingTimestampSpec?
      ( whereSpec | { this.notifyErrorListeners("rule.whereSpec"); } ) (ifExist | ifSpec)?
    ;

deleteColumnList
    : ( deleteColumnItem ) (syntaxComma deleteColumnItem)*
    ;

deleteColumnItem
    : column
    | column syntaxBracketLs (constantString|constantDecimal)  syntaxBracketRs
    ;


update
    : kwUpdate tableSpec  usingTtlTimestamp?  updateAssignments
      (whereSpec | { this.notifyErrorListeners("rule.whereSpec"); }) (ifExist | ifSpec)?
    ;

ifSpec
    : kwIf ifConditionList
    ;
ifConditionList
    : ( ifCondition ) (kwAnd ifCondition)*
    ;
ifCondition
    : OBJECT_NAME OPERATOR_EQ constant
    ;

updateAssignments
    : kwSet ( updateAssignmentElement ) (syntaxComma updateAssignmentElement)*
    | { this.notifyErrorListeners("rule.updateAssignments"); }
    ;

updateAssignmentElement
    : column syntaxOperatorEq (constant | assignmentMap | assignmentSet | assignmentList)
    | column syntaxOperatorEq column (syntaxPlus | syntaxMinus) constantDecimal
    | column syntaxOperatorEq column (syntaxPlus | syntaxMinus) assignmentMap
    | column syntaxOperatorEq column (syntaxPlus | syntaxMinus) assignmentSet
    | column syntaxOperatorEq column (syntaxPlus | syntaxMinus) assignmentList
    | column syntaxOperatorEq assignmentSet (syntaxPlus | syntaxMinus) OBJECT_NAME
    | column syntaxOperatorEq assignmentMap (syntaxPlus | syntaxMinus) OBJECT_NAME
    | column syntaxOperatorEq assignmentList (syntaxPlus | syntaxMinus) OBJECT_NAME
    | column syntaxBracketLs constantDecimal syntaxBracketRs syntaxOperatorEq constant
    | { this.notifyErrorListeners("rule.updateAssignmentElement"); }
    ;

assignmentSet
    : syntaxBracketLc constant (syntaxComma constant)* syntaxBracketRc
    ;

assignmentMap
    : syntaxBracketLc (constant syntaxColon constant ) (constant syntaxColon constant )* syntaxBracketRc
    ;

assignmentList
    : syntaxBracketLs constant (syntaxColon constant )* syntaxBracketRs
    ;


insert
    : kwInsert kwInto tableSpec insertColumnSpec insertValuesSpec (ifNotExist|) usingTtlTimestamp?
    ;
usingTtlTimestamp
    : kwUsing ttl
    | kwUsing ttl kwAnd timestamp
    | kwUsing timestamp
    | kwUsing timestamp kwAnd ttl
    ;

timestamp
    : kwTimestamp constantDecimal
    ;

ttl
    : kwTtl constantDecimal
    ;

usingTimestampSpec
    : kwUsing timestamp
    ;

ifNotExist
    : kwIf kwNot kwExists
    ;
ifExist
    : kwIf kwExists
    ;

insertValuesSpec
    : kwValues syntaxBracketLr expressionList (syntaxBracketRr| { this.notifyErrorListeners("rule.syntaxBracketRr"); })
    | { this.notifyErrorListeners("rule.insertValuesSpec"); }
    ;

insertColumnSpec
    : syntaxBracketLr columnList syntaxBracketRr
    | { this.notifyErrorListeners("rule.insertColumnSpec"); }
    ;

columnList
    : column (syntaxComma (column | { this.notifyErrorListeners("rule.column"); }))*
    | { this.notifyErrorListeners("rule.column_list"); }
    ;
expressionList
    : expression (syntaxComma expression)*
    ;

expression
    : (constant| assignmentMap | assignmentSet | assignmentList)
    | { this.notifyErrorListeners("rule.expression"); }
    ;

select
    : kwSelect kwDistinct? selectElements fromSpec whereSpec? orderSpec? limitSpec? kwAllowFiltering?
    ;

limitSpec
    : kwLimit (constantDecimal| { this.notifyErrorListeners("rule.constantDecimal"); })
    ;

fromSpec
    : kwFrom tableSpec
    | { this.notifyErrorListeners("rule.select.fromSpec"); }
    ;

orderSpec
    : kwOrderBy orderSpecElement
    ;
orderSpecElement
    : column (kwAsc|kwDesc)?
    | { this.notifyErrorListeners("rule.orderSpecElement"); }
    ;

whereSpec
    : kwWhere relationElements
    ;

selectElements
    : specialStar
    | selectElement (syntaxComma selectElement)*
    | { this.notifyErrorListeners("rule.select.selectElements"); }
    ;

selectElement
    : column
    | column (kwAs OBJECT_NAME)?
    | functionCall (kwAs OBJECT_NAME)?
    | { this.notifyErrorListeners("rule.select.selectElement"); }
    ;

relationElements
    : (relationElement ) (kwAnd relationElement)*
    ;

relationElement
    : relationElementConstant
    | relationElementIn
    | relationElementToken
    | OBJECT_NAME { this.notifyErrorListeners("rule.relationElement"); }
    | { this.notifyErrorListeners("rule.relationElement"); }
    ;

relationElementConstant
    : column relationOperator (constant | { this.notifyErrorListeners("rule.constant"); } )
    ;

relationElementIn
    : column kwIn syntaxBracketLr functionArgs? syntaxBracketRr
    ;

relationElementToken
    : relationElementTokenSpec
      (relationOperator | { this.notifyErrorListeners("rule.relationOperator"); })
      relationElementTokenSpec
    ;
relationElementTokenSpec
    : kwToken
      (syntaxBracketLr  | { this.notifyErrorListeners("rule.syntaxBracketLr"); })
      (column           | { this.notifyErrorListeners("rule.column"); })
      (syntaxBracketRr  | { this.notifyErrorListeners("rule.syntaxBracketRr"); })
    | { this.notifyErrorListeners("rule.relationElementTokenSpec"); }
    ;

relationOperator
    : syntaxOperatorEq
    | syntaxOperatorLt
    | syntaxOperatorGt
    | syntaxOperatorLte
    | syntaxOperatorGte
    | kwContains
    | kwContainsKey
    | { this.notifyErrorListeners("rule.relationOperator"); }
    ;



functionCall
    : OBJECT_NAME '(' STAR ')'
    | OBJECT_NAME '(' functionArgs? ')'
    ;

functionArgs
    : (constant | OBJECT_NAME | functionCall )
    (
      syntaxComma
      (constant | OBJECT_NAME | functionCall )
    )*
    ;


constant
    : constantUuid
    | constantString
    | constantDecimal
    | constantHexadecimal
    | constantBoolean
    | kwNull
    ;

constantUuid
    : UUID
    ;

constantDecimal
    : DECIMAL_LITERAL
    ;

constantFloat
    : DECIMAL_LITERAL
    | FLOAT_LITERAL
    ;

constantString
    : STRING_LITERAL
    ;

constantBoolean
    : K_TRUE | K_FALSE;

constantHexadecimal
    : HEXADECIMAL_LITERAL
    ;

keyspace
    : OBJECT_NAME
    | DQUOTE OBJECT_NAME DQUOTE
    ;

table
    : OBJECT_NAME
    | DQUOTE OBJECT_NAME DQUOTE
    | { this.notifyErrorListeners("rule.table"); }
    ;

tableSpec
    : table
    | keyspace specialDot table
    | { this.notifyErrorListeners("rule.tableSpec"); }
    ;

column
    : OBJECT_NAME
    | DQUOTE OBJECT_NAME DQUOTE
    | K_ROLE | K_PERMISSIONS | K_OPTIONS | K_DURABLE_WRITES | K_LANGUAGE | K_TYPE | K_INITCOND |
      K_REPLICATION | K_TTL | K_PARTITION | K_KEY | K_LEVEL
    ;

dataType
    : dataTypeFundamental
    | dataTypeCollection
    ;

dataTypeCollection
    : dataTypeFrozen (dataTypeStructure | { this.notifyErrorListeners("rule.dataTypeStructure"); })
    | dataTypeSet (dataTypeStructure | { this.notifyErrorListeners("rule.dataTypeStructure"); })
    | dataTypeList (dataTypeStructure | { this.notifyErrorListeners("rule.dataTypeStructure"); })
    | dataTypeMap (dataTypeStructure | { this.notifyErrorListeners("rule.dataTypeStructure"); })
    | dataTypeTuple (dataTypeStructure | { this.notifyErrorListeners("rule.dataTypeStructure"); })
    ;

dataTypeFundamental
    : dataTypeAscii
    | dataTypeBigint
    | dataTypeBlob
    | dataTypeBoolean
    | dataTypeCounter
    | dataTypeDate
    | dataTypeDecimal
    | dataTypeDouble
    | dataTypeFloat
    | dataTypeInet
    | dataTypeInt
    | dataTypeSmallInt
    | dataTypeText
    | dataTypeTime
    | dataTypeTimeUuid
    | dataTypeTimestamp
    | dataTypeTinyInt
    | dataTypeUuid
    | dataTypeVarChar
    | dataTypeVarInt
    | dataTypeUserDefined
    ;

orderDirection
    : kwAsc
    | kwDesc
    ;

role
    : OBJECT_NAME
    ;

trigger
    : OBJECT_NAME
    ;
triggerClass
    : constantString
    ;

materializedView
    : OBJECT_NAME
    ;
type
    : OBJECT_NAME
    ;
aggregate
    : OBJECT_NAME
    ;
function
    : OBJECT_NAME
    ;
language
    : OBJECT_NAME
    ;
user
    : OBJECT_NAME
    ;
password
    : constantString
    ;
hashKey: OBJECT_NAME;

param
    : paramName dataType
    ;
paramName
    : OBJECT_NAME
    ;

kwAdd: K_ADD;
kwAggregate: K_AGGREGATE;
kwAll: K_ALL;
kwAllFunctions: K_ALL_FUNCTIONS;
kwAllKeyspaces: K_ALL_KEYSPACES;
kwAllRoles: K_ALL_ROLES;
kwAllPermissions: K_ALL K_PERMISSIONS;
kwAllow: K_ALLOW;
kwAllowFiltering: K_ALLOW K_FILTERING;
kwAlter: K_ALTER;
kwAnd: K_AND;
kwApply: K_APPLY;
kwAs: K_AS;
kwAsc: K_ASC;
kwAuthorize: K_AUTHORIZE;
kwBatch: K_BATCH;
kwBegin: K_BEGIN;
kwBy: K_BY;
kwCalled: K_CALLED;
kwClustering: K_CLUSTERING;
kwCompact: K_COMPACT;
kwContains: K_CONTAINS;
kwContainsKey: K_CONTAINS K_KEY;
kwCreate: K_CREATE;
kwDelete: K_DELETE;
kwDesc: K_DESC;
kwDescibe: K_DESCRIBE;
kwDistinct: K_DISTINCT;
kwDrop: K_DROP;
kwDurableWrites: K_DURABLE_WRITES;
kwEntries: K_ENTRIES;
kwExecute: K_EXECUTE;
kwExists: K_EXISTS;
kwFiltering: K_FILTERING;
kwFinalfunc: K_FINALFUNC;
kwFrom: K_FROM;
kwFull: K_FULL;
kwFunction: K_FUNCTION;
kwGrant: K_GRANT;
kwIf: K_IF;
kwIn: K_IN;
kwIndex: K_INDEX;
kwInitcond: K_INITCOND;
kwInput: K_INPUT;
kwInsert: K_INSERT;
kwInto: K_INTO;
kwIs: K_IS;
kwKey: K_KEY;
kwKeys: K_KEYS;
kwKeyspace: K_KEYSPACE;
kwLanguage: K_LANGUAGE;
kwLimit: K_LIMIT;
kwList: K_LIST;
kwListRoles: K_LIST_ROLES;
kwLogged: K_LOGGED;
kwLogin: K_LOGIN;
kwMaterialized: K_MATERIALIZED;
kwModify: K_MODIFY;
kwNosuperuser: K_NOSUPERUSER;
kwNorecursive: K_NORECURSIVE;
kwNot: K_NOT;
kwNull: K_NULL;
kwOf: K_OF;
kwOn: K_ON;
kwOptions: K_OPTIONS;
kwOr: K_OR;
kwOrder: K_ORDER;
kwOrderBy: K_ORDER K_BY;
kwPartition: K_PARTITION;
kwPassword:K_PASSWORD;
kwPermissions: K_PERMISSIONS;
kwPrimary: K_PRIMARY;
kwRename: K_RENAME;
kwReplace: K_REPLACE;
kwReplication: K_REPLICATION;
kwReturns: K_RETURNS;
kwRole: K_ROLE;
kwSelect: K_SELECT;
kwSet: K_SET;
kwSfunc: K_SFUNC;
kwStatic: K_STATIC;
kwStorage: K_STORAGE;
kwStype: K_STYPE;
kwSuperuser : K_SUPERUSER;
kwTable: K_TABLE;
kwTimestamp: K_TIMESTAMP;
kwTo: K_TO;
kwToken: K_TOKEN;
kwTrigger: K_TRIGGER;
kwTruncate: K_TRUNCATE;
kwTtl: K_TTL;
kwType: K_TYPE;
kwUnlogged: K_UNLOGGED;
kwUpdate: K_UPDATE;
kwUse: K_USE;
kwUser: K_USER;
kwUsers: K_USERS;
kwUsing: K_USING;
kwValues: K_VALUES;
kwView: K_VIEW;
kwWhere: K_WHERE;
kwWith: K_WITH;
kwRevoke: K_REVOKE;

dataTypeAscii: K_ASCII;
dataTypeBigint: K_BIGINT;
dataTypeBlob:K_BLOB;
dataTypeBoolean: K_BOOLEAN;
dataTypeCounter:  K_COUNTER;
dataTypeDate: K_DATE;
dataTypeDecimal:K_DECIMAL;
dataTypeDouble: K_DOUBLE;
dataTypeFloat: K_FLOAT;
dataTypeFrozen: K_FROZEN;
dataTypeInet: K_INET;
dataTypeInt: K_INT;
dataTypeList: K_LIST;
dataTypeMap: K_MAP;
dataTypeSmallInt:  K_SMALLINT;
dataTypeSet: K_SET;
dataTypeText: K_TEXT;
dataTypeTime: K_TIME;
dataTypeTimeUuid:K_TIMEUUID;
dataTypeTimestamp: K_TIMESTAMP;
dataTypeTinyInt: K_TINYINT;
dataTypeTuple: K_TUPLE;
dataTypeUserDefined: OBJECT_NAME;
dataTypeUuid:  K_UUID;
dataTypeVarChar: K_VARCHAR;
dataTypeVarInt: K_VARINT;

dataTypeStructure
    : syntaxBracketLa dataType (syntaxComma dataType)* syntaxBracketRa
    ;

specialStar: STAR;
specialDot: DOT;

eof
: EOF
;

// BRACKETS
// L - left
// R - right
// a - angle
// c - curly
// r - rounded

syntaxBracketLr : LR_BRACKET;
syntaxBracketRr : RR_BRACKET;
syntaxBracketLc : LC_BRACKET;
syntaxBracketRc : RC_BRACKET;
syntaxBracketLa : OPERATOR_LT;
syntaxBracketRa : OPERATOR_GT;
syntaxBracketLs : LS_BRACKET;
syntaxBracketRs : RS_BRACKET;

syntaxComma: COMMA;
syntaxColon: COLON;
syntaxPlus: PLUS;
syntaxMinus: MINUS;

syntaxSquote: SQUOTE;
syntaxDquote: DQUOTE;

syntaxOperatorEq: OPERATOR_EQ;
syntaxOperatorLt: OPERATOR_LT;
syntaxOperatorGt: OPERATOR_GT;
syntaxOperatorLte: OPERATOR_LTE;
syntaxOperatorGte: OPERATOR_GTE;

