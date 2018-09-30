// Generated from CqlParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { CqlParserListener } from './CqlParserListener';
import { CqlParserVisitor } from './CqlParserVisitor';


export class CqlParser extends Parser {
	public static readonly LR_BRACKET=1;
	public static readonly RR_BRACKET=2;
	public static readonly LC_BRACKET=3;
	public static readonly RC_BRACKET=4;
	public static readonly LS_BRACKET=5;
	public static readonly RS_BRACKET=6;
	public static readonly COMMA=7;
	public static readonly SEMI=8;
	public static readonly COLON=9;
	public static readonly DQUOTE=10;
	public static readonly SQUOTE=11;
	public static readonly SPACE=12;
	public static readonly SPEC_MYSQL_COMMENT=13;
	public static readonly COMMENT_INPUT=14;
	public static readonly LINE_COMMENT=15;
	public static readonly DOT=16;
	public static readonly STAR=17;
	public static readonly DIVIDE=18;
	public static readonly MODULE=19;
	public static readonly PLUS=20;
	public static readonly MINUSMINUS=21;
	public static readonly MINUS=22;
	public static readonly K_ADD=23;
	public static readonly K_AGGREGATE=24;
	public static readonly K_ALL=25;
	public static readonly K_ALL_ROLES=26;
	public static readonly K_ALL_KEYSPACES=27;
	public static readonly K_ALL_FUNCTIONS=28;
	public static readonly K_ALLOW=29;
	public static readonly K_ALTER=30;
	public static readonly K_AND=31;
	public static readonly K_ANY=32;
	public static readonly K_APPLY=33;
	public static readonly K_AS=34;
	public static readonly K_ASC=35;
	public static readonly K_AUTHORIZE=36;
	public static readonly K_BATCH=37;
	public static readonly K_BEGIN=38;
	public static readonly K_BY=39;
	public static readonly K_CALLED=40;
	public static readonly K_CLUSTERING=41;
	public static readonly K_COLUMNFAMILY=42;
	public static readonly K_COMPACT=43;
	public static readonly K_CONSISTENCY=44;
	public static readonly K_CONTAINS=45;
	public static readonly K_CREATE=46;
	public static readonly K_CUSTOM=47;
	public static readonly K_DELETE=48;
	public static readonly K_DESC=49;
	public static readonly K_DESCRIBE=50;
	public static readonly K_DISTINCT=51;
	public static readonly K_DROP=52;
	public static readonly K_DURABLE_WRITES=53;
	public static readonly K_EACH_QUORUM=54;
	public static readonly K_ENTRIES=55;
	public static readonly K_EXECUTE=56;
	public static readonly K_EXISTS=57;
	public static readonly K_FALSE=58;
	public static readonly K_FILTERING=59;
	public static readonly K_FINALFUNC=60;
	public static readonly K_FROM=61;
	public static readonly K_FULL=62;
	public static readonly K_FUNCTION=63;
	public static readonly K_GRANT=64;
	public static readonly K_IF=65;
	public static readonly K_IN=66;
	public static readonly K_INDEX=67;
	public static readonly K_INFINITY=68;
	public static readonly K_INITCOND=69;
	public static readonly K_INPUT=70;
	public static readonly K_INSERT=71;
	public static readonly K_INTO=72;
	public static readonly K_IS=73;
	public static readonly K_KEY=74;
	public static readonly K_KEYS=75;
	public static readonly K_KEYSPACE=76;
	public static readonly K_LANGUAGE=77;
	public static readonly K_LEVEL=78;
	public static readonly K_LIMIT=79;
	public static readonly K_LOCAL_ONE=80;
	public static readonly K_LOCAL_QUORUM=81;
	public static readonly K_LOGGED=82;
	public static readonly K_LOGIN=83;
	public static readonly K_MATERIALIZED=84;
	public static readonly K_MODIFY=85;
	public static readonly K_NAN=86;
	public static readonly K_NORECURSIVE=87;
	public static readonly K_NOSUPERUSER=88;
	public static readonly K_NOT=89;
	public static readonly K_NULL=90;
	public static readonly K_OF=91;
	public static readonly K_ON=92;
	public static readonly K_ONE=93;
	public static readonly K_OPTIONS=94;
	public static readonly K_OR=95;
	public static readonly K_ORDER=96;
	public static readonly K_PARTITION=97;
	public static readonly K_PASSWORD=98;
	public static readonly K_PER=99;
	public static readonly K_PERMISSION=100;
	public static readonly K_PERMISSIONS=101;
	public static readonly K_PRIMARY=102;
	public static readonly K_QUORUM=103;
	public static readonly K_RENAME=104;
	public static readonly K_REPLACE=105;
	public static readonly K_REPLICATION=106;
	public static readonly K_RETURNS=107;
	public static readonly K_REVOKE=108;
	public static readonly K_ROLE=109;
	public static readonly K_SCHEMA=110;
	public static readonly K_SELECT=111;
	public static readonly K_SET=112;
	public static readonly K_SFUNC=113;
	public static readonly K_STATIC=114;
	public static readonly K_STORAGE=115;
	public static readonly K_STYPE=116;
	public static readonly K_SUPERUSER=117;
	public static readonly K_TABLE=118;
	public static readonly K_THREE=119;
	public static readonly K_TIMESTAMP=120;
	public static readonly K_TO=121;
	public static readonly K_TOKEN=122;
	public static readonly K_TRIGGER=123;
	public static readonly K_TRUE=124;
	public static readonly K_TRUNCATE=125;
	public static readonly K_TTL=126;
	public static readonly K_TWO=127;
	public static readonly K_TYPE=128;
	public static readonly K_UNLOGGED=129;
	public static readonly K_UPDATE=130;
	public static readonly K_USE=131;
	public static readonly K_USER=132;
	public static readonly K_USING=133;
	public static readonly K_VALUES=134;
	public static readonly K_VIEW=135;
	public static readonly K_WHERE=136;
	public static readonly K_WITH=137;
	public static readonly K_WRITETIME=138;
	public static readonly K_ASCII=139;
	public static readonly K_BIGINT=140;
	public static readonly K_BLOB=141;
	public static readonly K_BOOLEAN=142;
	public static readonly K_COUNTER=143;
	public static readonly K_DATE=144;
	public static readonly K_DECIMAL=145;
	public static readonly K_DOUBLE=146;
	public static readonly K_FLOAT=147;
	public static readonly K_FROZEN=148;
	public static readonly K_INET=149;
	public static readonly K_INT=150;
	public static readonly K_LIST=151;
	public static readonly K_LIST_ROLES=152;
	public static readonly K_MAP=153;
	public static readonly K_SMALLINT=154;
	public static readonly K_TEXT=155;
	public static readonly K_TIMEUUID=156;
	public static readonly K_TIME=157;
	public static readonly K_TINYINT=158;
	public static readonly K_TUPLE=159;
	public static readonly K_UUID=160;
	public static readonly K_VARCHAR=161;
	public static readonly K_VARINT=162;
	public static readonly K_USERS=163;
	public static readonly CODE_BLOCK=164;
	public static readonly STRING_LITERAL=165;
	public static readonly DECIMAL_LITERAL=166;
	public static readonly FLOAT_LITERAL=167;
	public static readonly HEXADECIMAL_LITERAL=168;
	public static readonly REAL_LITERAL=169;
	public static readonly OBJECT_NAME=170;
	public static readonly UUID=171;
	public static readonly OPERATOR_EQ=172;
	public static readonly OPERATOR_LT=173;
	public static readonly OPERATOR_GT=174;
	public static readonly OPERATOR_LTE=175;
	public static readonly OPERATOR_GTE=176;
	public static readonly RULE_root = 0;
	public static readonly RULE_cqls = 1;
	public static readonly RULE_statementSeparator = 2;
	public static readonly RULE_empty = 3;
	public static readonly RULE_cql = 4;
	public static readonly RULE_revoke = 5;
	public static readonly RULE_listUsers = 6;
	public static readonly RULE_listRoles = 7;
	public static readonly RULE_listPermissions = 8;
	public static readonly RULE_grant = 9;
	public static readonly RULE_priviledge = 10;
	public static readonly RULE_resource = 11;
	public static readonly RULE_createUser = 12;
	public static readonly RULE_createRole = 13;
	public static readonly RULE_createType = 14;
	public static readonly RULE_typeMemberColumnList = 15;
	public static readonly RULE_createTrigger = 16;
	public static readonly RULE_createMaterializedView = 17;
	public static readonly RULE_materializedViewWhere = 18;
	public static readonly RULE_columnNotNullList = 19;
	public static readonly RULE_columnNotNull = 20;
	public static readonly RULE_materializedViewOptions = 21;
	public static readonly RULE_createKeyspace = 22;
	public static readonly RULE_createFunction = 23;
	public static readonly RULE_codeBlock = 24;
	public static readonly RULE_paramList = 25;
	public static readonly RULE_returnMode = 26;
	public static readonly RULE_createAggregate = 27;
	public static readonly RULE_initCondDefinition = 28;
	public static readonly RULE_initCondHash = 29;
	public static readonly RULE_initCondHashItem = 30;
	public static readonly RULE_initCondListNested = 31;
	public static readonly RULE_initCondList = 32;
	public static readonly RULE_orReplace = 33;
	public static readonly RULE_alterUser = 34;
	public static readonly RULE_userPassword = 35;
	public static readonly RULE_userSuperUser = 36;
	public static readonly RULE_alterType = 37;
	public static readonly RULE_alterTypeOperation = 38;
	public static readonly RULE_alterTypeRename = 39;
	public static readonly RULE_alterTypeRenameList = 40;
	public static readonly RULE_alterTypeRenameItem = 41;
	public static readonly RULE_alterTypeAdd = 42;
	public static readonly RULE_alterTypeAlterType = 43;
	public static readonly RULE_alterTable = 44;
	public static readonly RULE_alterTableOperation = 45;
	public static readonly RULE_alterTableWith = 46;
	public static readonly RULE_alterTableRename = 47;
	public static readonly RULE_alterTableDropCompactStorage = 48;
	public static readonly RULE_alterTableDropColumns = 49;
	public static readonly RULE_alterTableDropColumnList = 50;
	public static readonly RULE_alterTableAdd = 51;
	public static readonly RULE_alterTableColumnDefinition = 52;
	public static readonly RULE_alterRole = 53;
	public static readonly RULE_roleWith = 54;
	public static readonly RULE_roleWithOptions = 55;
	public static readonly RULE_alterMaterializedView = 56;
	public static readonly RULE_dropUser = 57;
	public static readonly RULE_dropType = 58;
	public static readonly RULE_dropMaterializedView = 59;
	public static readonly RULE_dropAggregate = 60;
	public static readonly RULE_dropFunction = 61;
	public static readonly RULE_dropTrigger = 62;
	public static readonly RULE_dropRole = 63;
	public static readonly RULE_dropTable = 64;
	public static readonly RULE_dropKeyspace = 65;
	public static readonly RULE_dropIndex = 66;
	public static readonly RULE_createTable = 67;
	public static readonly RULE_createTableDef = 68;
	public static readonly RULE_withElement = 69;
	public static readonly RULE_clusteringOrder = 70;
	public static readonly RULE_tableOptions = 71;
	public static readonly RULE_tableOptionItem = 72;
	public static readonly RULE_tableOptionName = 73;
	public static readonly RULE_tableOptionValue = 74;
	public static readonly RULE_optionHash = 75;
	public static readonly RULE_optionHashItem = 76;
	public static readonly RULE_optionHashKey = 77;
	public static readonly RULE_optionHashValue = 78;
	public static readonly RULE_columnDefinitionList = 79;
	public static readonly RULE_columnDefinition = 80;
	public static readonly RULE_primaryKeyModifier = 81;
	public static readonly RULE_primaryKeyElement = 82;
	public static readonly RULE_primaryKeyDefinition = 83;
	public static readonly RULE_singlePrimaryKey = 84;
	public static readonly RULE_compoundKey = 85;
	public static readonly RULE_compositeKey = 86;
	public static readonly RULE_partitionKeyList = 87;
	public static readonly RULE_clusteringKeyList = 88;
	public static readonly RULE_partitionKey = 89;
	public static readonly RULE_clusteringKey = 90;
	public static readonly RULE_applyBatch = 91;
	public static readonly RULE_beginBatch = 92;
	public static readonly RULE_beginBatchSpec = 93;
	public static readonly RULE_batchType = 94;
	public static readonly RULE_alterKeyspace = 95;
	public static readonly RULE_replicationList = 96;
	public static readonly RULE_replicationListItem = 97;
	public static readonly RULE_durableWrites = 98;
	public static readonly RULE_use = 99;
	public static readonly RULE_truncate = 100;
	public static readonly RULE_createIndex = 101;
	public static readonly RULE_createIndexSubject = 102;
	public static readonly RULE_indexName = 103;
	public static readonly RULE_createIndexDef = 104;
	public static readonly RULE_createIndexTarget = 105;
	public static readonly RULE_indexKeysSpec = 106;
	public static readonly RULE_indexEntriesSSpec = 107;
	public static readonly RULE_indexFullSpec = 108;
	public static readonly RULE_delete = 109;
	public static readonly RULE_deleteColumnList = 110;
	public static readonly RULE_deleteColumnItem = 111;
	public static readonly RULE_update = 112;
	public static readonly RULE_ifSpec = 113;
	public static readonly RULE_ifConditionList = 114;
	public static readonly RULE_ifCondition = 115;
	public static readonly RULE_updateAssignments = 116;
	public static readonly RULE_updateAssignmentElement = 117;
	public static readonly RULE_assignmentSet = 118;
	public static readonly RULE_assignmentMap = 119;
	public static readonly RULE_assignmentList = 120;
	public static readonly RULE_insert = 121;
	public static readonly RULE_usingTtlTimestamp = 122;
	public static readonly RULE_timestamp = 123;
	public static readonly RULE_ttl = 124;
	public static readonly RULE_usingTimestampSpec = 125;
	public static readonly RULE_ifNotExist = 126;
	public static readonly RULE_ifExist = 127;
	public static readonly RULE_insertValuesSpec = 128;
	public static readonly RULE_insertColumnSpec = 129;
	public static readonly RULE_columnList = 130;
	public static readonly RULE_expressionList = 131;
	public static readonly RULE_expression = 132;
	public static readonly RULE_select = 133;
	public static readonly RULE_limitSpec = 134;
	public static readonly RULE_fromSpec = 135;
	public static readonly RULE_orderSpec = 136;
	public static readonly RULE_orderSpecElement = 137;
	public static readonly RULE_whereSpec = 138;
	public static readonly RULE_selectElements = 139;
	public static readonly RULE_selectElement = 140;
	public static readonly RULE_relationElements = 141;
	public static readonly RULE_relationElement = 142;
	public static readonly RULE_relationOperator = 143;
	public static readonly RULE_functionCall = 144;
	public static readonly RULE_functionArgs = 145;
	public static readonly RULE_constant = 146;
	public static readonly RULE_constantUuid = 147;
	public static readonly RULE_constantDecimal = 148;
	public static readonly RULE_constantFloat = 149;
	public static readonly RULE_constantString = 150;
	public static readonly RULE_constantBoolean = 151;
	public static readonly RULE_constantHexadecimal = 152;
	public static readonly RULE_keyspace = 153;
	public static readonly RULE_table = 154;
	public static readonly RULE_tableSpec = 155;
	public static readonly RULE_column = 156;
	public static readonly RULE_dataType = 157;
	public static readonly RULE_dataTypeCollection = 158;
	public static readonly RULE_dataTypeFundamental = 159;
	public static readonly RULE_orderDirection = 160;
	public static readonly RULE_role = 161;
	public static readonly RULE_trigger = 162;
	public static readonly RULE_triggerClass = 163;
	public static readonly RULE_materializedView = 164;
	public static readonly RULE_type = 165;
	public static readonly RULE_aggregate = 166;
	public static readonly RULE_function = 167;
	public static readonly RULE_language = 168;
	public static readonly RULE_user = 169;
	public static readonly RULE_password = 170;
	public static readonly RULE_hashKey = 171;
	public static readonly RULE_param = 172;
	public static readonly RULE_paramName = 173;
	public static readonly RULE_kwAdd = 174;
	public static readonly RULE_kwAggregate = 175;
	public static readonly RULE_kwAll = 176;
	public static readonly RULE_kwAllFunctions = 177;
	public static readonly RULE_kwAllKeyspaces = 178;
	public static readonly RULE_kwAllRoles = 179;
	public static readonly RULE_kwAllPermissions = 180;
	public static readonly RULE_kwAllow = 181;
	public static readonly RULE_kwAllowFiltering = 182;
	public static readonly RULE_kwAlter = 183;
	public static readonly RULE_kwAnd = 184;
	public static readonly RULE_kwApply = 185;
	public static readonly RULE_kwAs = 186;
	public static readonly RULE_kwAsc = 187;
	public static readonly RULE_kwAuthorize = 188;
	public static readonly RULE_kwBatch = 189;
	public static readonly RULE_kwBegin = 190;
	public static readonly RULE_kwBy = 191;
	public static readonly RULE_kwCalled = 192;
	public static readonly RULE_kwClustering = 193;
	public static readonly RULE_kwCompact = 194;
	public static readonly RULE_kwContains = 195;
	public static readonly RULE_kwContainsKey = 196;
	public static readonly RULE_kwCreate = 197;
	public static readonly RULE_kwDelete = 198;
	public static readonly RULE_kwDesc = 199;
	public static readonly RULE_kwDescibe = 200;
	public static readonly RULE_kwDistinct = 201;
	public static readonly RULE_kwDrop = 202;
	public static readonly RULE_kwDurableWrites = 203;
	public static readonly RULE_kwEntries = 204;
	public static readonly RULE_kwExecute = 205;
	public static readonly RULE_kwExists = 206;
	public static readonly RULE_kwFiltering = 207;
	public static readonly RULE_kwFinalfunc = 208;
	public static readonly RULE_kwFrom = 209;
	public static readonly RULE_kwFull = 210;
	public static readonly RULE_kwFunction = 211;
	public static readonly RULE_kwGrant = 212;
	public static readonly RULE_kwIf = 213;
	public static readonly RULE_kwIn = 214;
	public static readonly RULE_kwIndex = 215;
	public static readonly RULE_kwInitcond = 216;
	public static readonly RULE_kwInput = 217;
	public static readonly RULE_kwInsert = 218;
	public static readonly RULE_kwInto = 219;
	public static readonly RULE_kwIs = 220;
	public static readonly RULE_kwKey = 221;
	public static readonly RULE_kwKeys = 222;
	public static readonly RULE_kwKeyspace = 223;
	public static readonly RULE_kwLanguage = 224;
	public static readonly RULE_kwLimit = 225;
	public static readonly RULE_kwList = 226;
	public static readonly RULE_kwListRoles = 227;
	public static readonly RULE_kwLogged = 228;
	public static readonly RULE_kwLogin = 229;
	public static readonly RULE_kwMaterialized = 230;
	public static readonly RULE_kwModify = 231;
	public static readonly RULE_kwNosuperuser = 232;
	public static readonly RULE_kwNorecursive = 233;
	public static readonly RULE_kwNot = 234;
	public static readonly RULE_kwNull = 235;
	public static readonly RULE_kwOf = 236;
	public static readonly RULE_kwOn = 237;
	public static readonly RULE_kwOptions = 238;
	public static readonly RULE_kwOr = 239;
	public static readonly RULE_kwOrder = 240;
	public static readonly RULE_kwOrderBy = 241;
	public static readonly RULE_kwPartition = 242;
	public static readonly RULE_kwPassword = 243;
	public static readonly RULE_kwPermissions = 244;
	public static readonly RULE_kwPrimary = 245;
	public static readonly RULE_kwRename = 246;
	public static readonly RULE_kwReplace = 247;
	public static readonly RULE_kwReplication = 248;
	public static readonly RULE_kwReturns = 249;
	public static readonly RULE_kwRole = 250;
	public static readonly RULE_kwSelect = 251;
	public static readonly RULE_kwSet = 252;
	public static readonly RULE_kwSfunc = 253;
	public static readonly RULE_kwStatic = 254;
	public static readonly RULE_kwStorage = 255;
	public static readonly RULE_kwStype = 256;
	public static readonly RULE_kwSuperuser = 257;
	public static readonly RULE_kwTable = 258;
	public static readonly RULE_kwTimestamp = 259;
	public static readonly RULE_kwTo = 260;
	public static readonly RULE_kwTrigger = 261;
	public static readonly RULE_kwTruncate = 262;
	public static readonly RULE_kwTtl = 263;
	public static readonly RULE_kwType = 264;
	public static readonly RULE_kwUnlogged = 265;
	public static readonly RULE_kwUpdate = 266;
	public static readonly RULE_kwUse = 267;
	public static readonly RULE_kwUser = 268;
	public static readonly RULE_kwUsers = 269;
	public static readonly RULE_kwUsing = 270;
	public static readonly RULE_kwValues = 271;
	public static readonly RULE_kwView = 272;
	public static readonly RULE_kwWhere = 273;
	public static readonly RULE_kwWith = 274;
	public static readonly RULE_kwRevoke = 275;
	public static readonly RULE_dataTypeAscii = 276;
	public static readonly RULE_dataTypeBigint = 277;
	public static readonly RULE_dataTypeBlob = 278;
	public static readonly RULE_dataTypeBoolean = 279;
	public static readonly RULE_dataTypeCounter = 280;
	public static readonly RULE_dataTypeDate = 281;
	public static readonly RULE_dataTypeDecimal = 282;
	public static readonly RULE_dataTypeDouble = 283;
	public static readonly RULE_dataTypeFloat = 284;
	public static readonly RULE_dataTypeFrozen = 285;
	public static readonly RULE_dataTypeInet = 286;
	public static readonly RULE_dataTypeInt = 287;
	public static readonly RULE_dataTypeList = 288;
	public static readonly RULE_dataTypeMap = 289;
	public static readonly RULE_dataTypeSmallInt = 290;
	public static readonly RULE_dataTypeSet = 291;
	public static readonly RULE_dataTypeText = 292;
	public static readonly RULE_dataTypeTime = 293;
	public static readonly RULE_dataTypeTimeUuid = 294;
	public static readonly RULE_dataTypeTimestamp = 295;
	public static readonly RULE_dataTypeTinyInt = 296;
	public static readonly RULE_dataTypeTuple = 297;
	public static readonly RULE_dataTypeUserDefined = 298;
	public static readonly RULE_dataTypeUuid = 299;
	public static readonly RULE_dataTypeVarChar = 300;
	public static readonly RULE_dataTypeVarInt = 301;
	public static readonly RULE_dataTypeStructure = 302;
	public static readonly RULE_specialStar = 303;
	public static readonly RULE_specialDot = 304;
	public static readonly RULE_eof = 305;
	public static readonly RULE_syntaxBracketLr = 306;
	public static readonly RULE_syntaxBracketRr = 307;
	public static readonly RULE_syntaxBracketLc = 308;
	public static readonly RULE_syntaxBracketRc = 309;
	public static readonly RULE_syntaxBracketLa = 310;
	public static readonly RULE_syntaxBracketRa = 311;
	public static readonly RULE_syntaxBracketLs = 312;
	public static readonly RULE_syntaxBracketRs = 313;
	public static readonly RULE_syntaxComma = 314;
	public static readonly RULE_syntaxColon = 315;
	public static readonly RULE_syntaxPlus = 316;
	public static readonly RULE_syntaxMinus = 317;
	public static readonly RULE_syntaxSquote = 318;
	public static readonly RULE_syntaxDquote = 319;
	public static readonly RULE_syntaxOperatorEq = 320;
	public static readonly RULE_syntaxOperatorLt = 321;
	public static readonly RULE_syntaxOperatorGt = 322;
	public static readonly RULE_syntaxOperatorLte = 323;
	public static readonly RULE_syntaxOperatorGte = 324;
	public static readonly ruleNames: string[] = [
		"root", "cqls", "statementSeparator", "empty", "cql", "revoke", "listUsers", 
		"listRoles", "listPermissions", "grant", "priviledge", "resource", "createUser", 
		"createRole", "createType", "typeMemberColumnList", "createTrigger", "createMaterializedView", 
		"materializedViewWhere", "columnNotNullList", "columnNotNull", "materializedViewOptions", 
		"createKeyspace", "createFunction", "codeBlock", "paramList", "returnMode", 
		"createAggregate", "initCondDefinition", "initCondHash", "initCondHashItem", 
		"initCondListNested", "initCondList", "orReplace", "alterUser", "userPassword", 
		"userSuperUser", "alterType", "alterTypeOperation", "alterTypeRename", 
		"alterTypeRenameList", "alterTypeRenameItem", "alterTypeAdd", "alterTypeAlterType", 
		"alterTable", "alterTableOperation", "alterTableWith", "alterTableRename", 
		"alterTableDropCompactStorage", "alterTableDropColumns", "alterTableDropColumnList", 
		"alterTableAdd", "alterTableColumnDefinition", "alterRole", "roleWith", 
		"roleWithOptions", "alterMaterializedView", "dropUser", "dropType", "dropMaterializedView", 
		"dropAggregate", "dropFunction", "dropTrigger", "dropRole", "dropTable", 
		"dropKeyspace", "dropIndex", "createTable", "createTableDef", "withElement", 
		"clusteringOrder", "tableOptions", "tableOptionItem", "tableOptionName", 
		"tableOptionValue", "optionHash", "optionHashItem", "optionHashKey", "optionHashValue", 
		"columnDefinitionList", "columnDefinition", "primaryKeyModifier", "primaryKeyElement", 
		"primaryKeyDefinition", "singlePrimaryKey", "compoundKey", "compositeKey", 
		"partitionKeyList", "clusteringKeyList", "partitionKey", "clusteringKey", 
		"applyBatch", "beginBatch", "beginBatchSpec", "batchType", "alterKeyspace", 
		"replicationList", "replicationListItem", "durableWrites", "use", "truncate", 
		"createIndex", "createIndexSubject", "indexName", "createIndexDef", "createIndexTarget", 
		"indexKeysSpec", "indexEntriesSSpec", "indexFullSpec", "delete", "deleteColumnList", 
		"deleteColumnItem", "update", "ifSpec", "ifConditionList", "ifCondition", 
		"updateAssignments", "updateAssignmentElement", "assignmentSet", "assignmentMap", 
		"assignmentList", "insert", "usingTtlTimestamp", "timestamp", "ttl", "usingTimestampSpec", 
		"ifNotExist", "ifExist", "insertValuesSpec", "insertColumnSpec", "columnList", 
		"expressionList", "expression", "select", "limitSpec", "fromSpec", "orderSpec", 
		"orderSpecElement", "whereSpec", "selectElements", "selectElement", "relationElements", 
		"relationElement", "relationOperator", "functionCall", "functionArgs", 
		"constant", "constantUuid", "constantDecimal", "constantFloat", "constantString", 
		"constantBoolean", "constantHexadecimal", "keyspace", "table", "tableSpec", 
		"column", "dataType", "dataTypeCollection", "dataTypeFundamental", "orderDirection", 
		"role", "trigger", "triggerClass", "materializedView", "type", "aggregate", 
		"function", "language", "user", "password", "hashKey", "param", "paramName", 
		"kwAdd", "kwAggregate", "kwAll", "kwAllFunctions", "kwAllKeyspaces", "kwAllRoles", 
		"kwAllPermissions", "kwAllow", "kwAllowFiltering", "kwAlter", "kwAnd", 
		"kwApply", "kwAs", "kwAsc", "kwAuthorize", "kwBatch", "kwBegin", "kwBy", 
		"kwCalled", "kwClustering", "kwCompact", "kwContains", "kwContainsKey", 
		"kwCreate", "kwDelete", "kwDesc", "kwDescibe", "kwDistinct", "kwDrop", 
		"kwDurableWrites", "kwEntries", "kwExecute", "kwExists", "kwFiltering", 
		"kwFinalfunc", "kwFrom", "kwFull", "kwFunction", "kwGrant", "kwIf", "kwIn", 
		"kwIndex", "kwInitcond", "kwInput", "kwInsert", "kwInto", "kwIs", "kwKey", 
		"kwKeys", "kwKeyspace", "kwLanguage", "kwLimit", "kwList", "kwListRoles", 
		"kwLogged", "kwLogin", "kwMaterialized", "kwModify", "kwNosuperuser", 
		"kwNorecursive", "kwNot", "kwNull", "kwOf", "kwOn", "kwOptions", "kwOr", 
		"kwOrder", "kwOrderBy", "kwPartition", "kwPassword", "kwPermissions", 
		"kwPrimary", "kwRename", "kwReplace", "kwReplication", "kwReturns", "kwRole", 
		"kwSelect", "kwSet", "kwSfunc", "kwStatic", "kwStorage", "kwStype", "kwSuperuser", 
		"kwTable", "kwTimestamp", "kwTo", "kwTrigger", "kwTruncate", "kwTtl", 
		"kwType", "kwUnlogged", "kwUpdate", "kwUse", "kwUser", "kwUsers", "kwUsing", 
		"kwValues", "kwView", "kwWhere", "kwWith", "kwRevoke", "dataTypeAscii", 
		"dataTypeBigint", "dataTypeBlob", "dataTypeBoolean", "dataTypeCounter", 
		"dataTypeDate", "dataTypeDecimal", "dataTypeDouble", "dataTypeFloat", 
		"dataTypeFrozen", "dataTypeInet", "dataTypeInt", "dataTypeList", "dataTypeMap", 
		"dataTypeSmallInt", "dataTypeSet", "dataTypeText", "dataTypeTime", "dataTypeTimeUuid", 
		"dataTypeTimestamp", "dataTypeTinyInt", "dataTypeTuple", "dataTypeUserDefined", 
		"dataTypeUuid", "dataTypeVarChar", "dataTypeVarInt", "dataTypeStructure", 
		"specialStar", "specialDot", "eof", "syntaxBracketLr", "syntaxBracketRr", 
		"syntaxBracketLc", "syntaxBracketRc", "syntaxBracketLa", "syntaxBracketRa", 
		"syntaxBracketLs", "syntaxBracketRs", "syntaxComma", "syntaxColon", "syntaxPlus", 
		"syntaxMinus", "syntaxSquote", "syntaxDquote", "syntaxOperatorEq", "syntaxOperatorLt", 
		"syntaxOperatorGt", "syntaxOperatorLte", "syntaxOperatorGte"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "':'", 
		"'\"'", "'''", undefined, undefined, undefined, undefined, "'.'", "'*'", 
		"'/'", "'%'", "'+'", "'--'", "'-'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "LR_BRACKET", "RR_BRACKET", "LC_BRACKET", "RC_BRACKET", "LS_BRACKET", 
		"RS_BRACKET", "COMMA", "SEMI", "COLON", "DQUOTE", "SQUOTE", "SPACE", "SPEC_MYSQL_COMMENT", 
		"COMMENT_INPUT", "LINE_COMMENT", "DOT", "STAR", "DIVIDE", "MODULE", "PLUS", 
		"MINUSMINUS", "MINUS", "K_ADD", "K_AGGREGATE", "K_ALL", "K_ALL_ROLES", 
		"K_ALL_KEYSPACES", "K_ALL_FUNCTIONS", "K_ALLOW", "K_ALTER", "K_AND", "K_ANY", 
		"K_APPLY", "K_AS", "K_ASC", "K_AUTHORIZE", "K_BATCH", "K_BEGIN", "K_BY", 
		"K_CALLED", "K_CLUSTERING", "K_COLUMNFAMILY", "K_COMPACT", "K_CONSISTENCY", 
		"K_CONTAINS", "K_CREATE", "K_CUSTOM", "K_DELETE", "K_DESC", "K_DESCRIBE", 
		"K_DISTINCT", "K_DROP", "K_DURABLE_WRITES", "K_EACH_QUORUM", "K_ENTRIES", 
		"K_EXECUTE", "K_EXISTS", "K_FALSE", "K_FILTERING", "K_FINALFUNC", "K_FROM", 
		"K_FULL", "K_FUNCTION", "K_GRANT", "K_IF", "K_IN", "K_INDEX", "K_INFINITY", 
		"K_INITCOND", "K_INPUT", "K_INSERT", "K_INTO", "K_IS", "K_KEY", "K_KEYS", 
		"K_KEYSPACE", "K_LANGUAGE", "K_LEVEL", "K_LIMIT", "K_LOCAL_ONE", "K_LOCAL_QUORUM", 
		"K_LOGGED", "K_LOGIN", "K_MATERIALIZED", "K_MODIFY", "K_NAN", "K_NORECURSIVE", 
		"K_NOSUPERUSER", "K_NOT", "K_NULL", "K_OF", "K_ON", "K_ONE", "K_OPTIONS", 
		"K_OR", "K_ORDER", "K_PARTITION", "K_PASSWORD", "K_PER", "K_PERMISSION", 
		"K_PERMISSIONS", "K_PRIMARY", "K_QUORUM", "K_RENAME", "K_REPLACE", "K_REPLICATION", 
		"K_RETURNS", "K_REVOKE", "K_ROLE", "K_SCHEMA", "K_SELECT", "K_SET", "K_SFUNC", 
		"K_STATIC", "K_STORAGE", "K_STYPE", "K_SUPERUSER", "K_TABLE", "K_THREE", 
		"K_TIMESTAMP", "K_TO", "K_TOKEN", "K_TRIGGER", "K_TRUE", "K_TRUNCATE", 
		"K_TTL", "K_TWO", "K_TYPE", "K_UNLOGGED", "K_UPDATE", "K_USE", "K_USER", 
		"K_USING", "K_VALUES", "K_VIEW", "K_WHERE", "K_WITH", "K_WRITETIME", "K_ASCII", 
		"K_BIGINT", "K_BLOB", "K_BOOLEAN", "K_COUNTER", "K_DATE", "K_DECIMAL", 
		"K_DOUBLE", "K_FLOAT", "K_FROZEN", "K_INET", "K_INT", "K_LIST", "K_LIST_ROLES", 
		"K_MAP", "K_SMALLINT", "K_TEXT", "K_TIMEUUID", "K_TIME", "K_TINYINT", 
		"K_TUPLE", "K_UUID", "K_VARCHAR", "K_VARINT", "K_USERS", "CODE_BLOCK", 
		"STRING_LITERAL", "DECIMAL_LITERAL", "FLOAT_LITERAL", "HEXADECIMAL_LITERAL", 
		"REAL_LITERAL", "OBJECT_NAME", "UUID", "OPERATOR_EQ", "OPERATOR_LT", "OPERATOR_GT", 
		"OPERATOR_LTE", "OPERATOR_GTE"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CqlParser._LITERAL_NAMES, CqlParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return CqlParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "CqlParser.g4"; }

	@Override
	public get ruleNames(): string[] { return CqlParser.ruleNames; }

	@Override
	public get serializedATN(): string { return CqlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CqlParser._ATN, this);
	}
	@RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CqlParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CqlParser.SEMI - 8)) | (1 << (CqlParser.K_ALTER - 8)) | (1 << (CqlParser.K_APPLY - 8)) | (1 << (CqlParser.K_BEGIN - 8)))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (CqlParser.K_CREATE - 46)) | (1 << (CqlParser.K_DELETE - 46)) | (1 << (CqlParser.K_DROP - 46)) | (1 << (CqlParser.K_GRANT - 46)) | (1 << (CqlParser.K_INSERT - 46)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (CqlParser.K_REVOKE - 108)) | (1 << (CqlParser.K_SELECT - 108)) | (1 << (CqlParser.K_TRUNCATE - 108)) | (1 << (CqlParser.K_UPDATE - 108)) | (1 << (CqlParser.K_USE - 108)))) !== 0) || _la===CqlParser.K_LIST || _la===CqlParser.K_LIST_ROLES) {
				{
				this.state = 650;
				this.cqls();
				}
			}

			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.MINUSMINUS) {
				{
				this.state = 653;
				this.match(CqlParser.MINUSMINUS);
				}
			}

			this.state = 656;
			this.eof();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cqls(): CqlsContext {
		let _localctx: CqlsContext = new CqlsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CqlParser.RULE_cqls);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 665;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CqlParser.K_ALTER:
					case CqlParser.K_APPLY:
					case CqlParser.K_BEGIN:
					case CqlParser.K_CREATE:
					case CqlParser.K_DELETE:
					case CqlParser.K_DROP:
					case CqlParser.K_GRANT:
					case CqlParser.K_INSERT:
					case CqlParser.K_REVOKE:
					case CqlParser.K_SELECT:
					case CqlParser.K_TRUNCATE:
					case CqlParser.K_UPDATE:
					case CqlParser.K_USE:
					case CqlParser.K_LIST:
					case CqlParser.K_LIST_ROLES:
						{
						this.state = 658;
						this.cql();
						this.state = 660;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===CqlParser.MINUSMINUS) {
							{
							this.state = 659;
							this.match(CqlParser.MINUSMINUS);
							}
						}

						this.state = 662;
						this.statementSeparator();
						}
						break;
					case CqlParser.SEMI:
						{
						this.state = 664;
						this.empty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 669;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			}
			this.state = 678;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ALTER:
			case CqlParser.K_APPLY:
			case CqlParser.K_BEGIN:
			case CqlParser.K_CREATE:
			case CqlParser.K_DELETE:
			case CqlParser.K_DROP:
			case CqlParser.K_GRANT:
			case CqlParser.K_INSERT:
			case CqlParser.K_REVOKE:
			case CqlParser.K_SELECT:
			case CqlParser.K_TRUNCATE:
			case CqlParser.K_UPDATE:
			case CqlParser.K_USE:
			case CqlParser.K_LIST:
			case CqlParser.K_LIST_ROLES:
				{
				this.state = 670;
				this.cql();
				this.state = 675;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
				case 1:
					{
					this.state = 672;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===CqlParser.MINUSMINUS) {
						{
						this.state = 671;
						this.match(CqlParser.MINUSMINUS);
						}
					}

					this.state = 674;
					this.statementSeparator();
					}
					break;
				}
				}
				break;
			case CqlParser.SEMI:
				{
				this.state = 677;
				this.empty();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statementSeparator(): StatementSeparatorContext {
		let _localctx: StatementSeparatorContext = new StatementSeparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CqlParser.RULE_statementSeparator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(CqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public empty(): EmptyContext {
		let _localctx: EmptyContext = new EmptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CqlParser.RULE_empty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
			this.statementSeparator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cql(): CqlContext {
		let _localctx: CqlContext = new CqlContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CqlParser.RULE_cql);
		try {
			this.state = 722;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 684;
				this.beginBatch();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 685;
				this.alterKeyspace();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 686;
				this.alterMaterializedView();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 687;
				this.alterRole();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 688;
				this.alterTable();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 689;
				this.alterType();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 690;
				this.alterUser();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 691;
				this.applyBatch();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 692;
				this.createAggregate();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 693;
				this.createFunction();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 694;
				this.createIndex();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 695;
				this.createKeyspace();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 696;
				this.createMaterializedView();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 697;
				this.createRole();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 698;
				this.createTable();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 699;
				this.createTrigger();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 700;
				this.createType();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 701;
				this.createUser();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 702;
				this.delete();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 703;
				this.dropAggregate();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 704;
				this.dropFunction();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 705;
				this.dropIndex();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 706;
				this.dropKeyspace();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 707;
				this.dropMaterializedView();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 708;
				this.dropRole();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 709;
				this.dropTable();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 710;
				this.dropTrigger();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 711;
				this.dropType();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 712;
				this.dropUser();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 713;
				this.grant();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 714;
				this.insert();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 715;
				this.listPermissions();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 716;
				this.listRoles();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 717;
				this.revoke();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 718;
				this.select();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 719;
				this.truncate();
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 720;
				this.update();
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 721;
				this.use();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public revoke(): RevokeContext {
		let _localctx: RevokeContext = new RevokeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CqlParser.RULE_revoke);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.kwRevoke();
			this.state = 725;
			this.priviledge();
			this.state = 726;
			this.kwOn();
			this.state = 727;
			this.resource();
			this.state = 728;
			this.kwFrom();
			this.state = 729;
			this.role();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public listUsers(): ListUsersContext {
		let _localctx: ListUsersContext = new ListUsersContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CqlParser.RULE_listUsers);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.kwList();
			this.state = 732;
			this.kwUsers();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public listRoles(): ListRolesContext {
		let _localctx: ListRolesContext = new ListRolesContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CqlParser.RULE_listRoles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.kwListRoles();
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OF) {
				{
				this.state = 735;
				this.kwOf();
				this.state = 736;
				this.role();
				}
			}

			this.state = 741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_NORECURSIVE) {
				{
				this.state = 740;
				this.kwNorecursive();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public listPermissions(): ListPermissionsContext {
		let _localctx: ListPermissionsContext = new ListPermissionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CqlParser.RULE_listPermissions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this.kwList();
			this.state = 744;
			this.priviledge();
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ON) {
				{
				this.state = 745;
				this.kwOn();
				this.state = 746;
				this.resource();
				}
			}

			this.state = 753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OF) {
				{
				this.state = 750;
				this.kwOf();
				this.state = 751;
				this.role();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public grant(): GrantContext {
		let _localctx: GrantContext = new GrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CqlParser.RULE_grant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this.kwGrant();
			this.state = 756;
			this.priviledge();
			this.state = 757;
			this.kwOn();
			this.state = 758;
			this.resource();
			this.state = 759;
			this.kwTo();
			this.state = 760;
			this.role();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public priviledge(): PriviledgeContext {
		let _localctx: PriviledgeContext = new PriviledgeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CqlParser.RULE_priviledge);
		try {
			this.state = 774;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 764;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
				case 1:
					{
					this.state = 762;
					this.kwAll();
					}
					break;

				case 2:
					{
					this.state = 763;
					this.kwAllPermissions();
					}
					break;
				}
				}
				break;
			case CqlParser.K_ALTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 766;
				this.kwAlter();
				}
				break;
			case CqlParser.K_AUTHORIZE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 767;
				this.kwAuthorize();
				}
				break;
			case CqlParser.K_DESCRIBE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 768;
				this.kwDescibe();
				}
				break;
			case CqlParser.K_EXECUTE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 769;
				this.kwExecute();
				}
				break;
			case CqlParser.K_CREATE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 770;
				this.kwCreate();
				}
				break;
			case CqlParser.K_DROP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 771;
				this.kwDrop();
				}
				break;
			case CqlParser.K_MODIFY:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 772;
				this.kwModify();
				}
				break;
			case CqlParser.K_SELECT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 773;
				this.kwSelect();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CqlParser.RULE_resource);
		let _la: number;
		try {
			this.state = 802;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 776;
				this.kwAllFunctions();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 777;
				this.kwAllFunctions();
				this.state = 778;
				this.kwIn();
				this.state = 779;
				this.kwKeyspace();
				this.state = 780;
				this.keyspace();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 782;
				this.kwFunction();
				this.state = 786;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,15,this._ctx) ) {
				case 1:
					{
					this.state = 783;
					this.keyspace();
					this.state = 784;
					this.match(CqlParser.DOT);
					}
					break;
				}
				this.state = 788;
				this.function();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 790;
				this.kwAllKeyspaces();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 791;
				this.kwKeyspace();
				this.state = 792;
				this.keyspace();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_TABLE) {
					{
					this.state = 794;
					this.kwTable();
					}
				}

				this.state = 797;
				this.tableSpec();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 798;
				this.kwAllRoles();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 799;
				this.kwRole();
				this.state = 800;
				this.role();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createUser(): CreateUserContext {
		let _localctx: CreateUserContext = new CreateUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CqlParser.RULE_createUser);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
			this.kwCreate();
			this.state = 805;
			this.kwUser();
			this.state = 807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 806;
				this.ifNotExist();
				}
			}

			this.state = 809;
			this.user();
			this.state = 810;
			this.kwWith();
			this.state = 811;
			this.kwPassword();
			this.state = 812;
			this.constantString();
			this.state = 815;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_SUPERUSER:
				{
				this.state = 813;
				this.kwSuperuser();
				}
				break;
			case CqlParser.K_NOSUPERUSER:
				{
				this.state = 814;
				this.kwNosuperuser();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createRole(): CreateRoleContext {
		let _localctx: CreateRoleContext = new CreateRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CqlParser.RULE_createRole);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this.kwCreate();
			this.state = 818;
			this.kwRole();
			this.state = 820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 819;
				this.ifNotExist();
				}
			}

			this.state = 822;
			this.role();
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 823;
				this.roleWith();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createType(): CreateTypeContext {
		let _localctx: CreateTypeContext = new CreateTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CqlParser.RULE_createType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			this.kwCreate();
			this.state = 827;
			this.kwType();
			this.state = 829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 828;
				this.ifNotExist();
				}
			}

			this.state = 834;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,23,this._ctx) ) {
			case 1:
				{
				this.state = 831;
				this.keyspace();
				this.state = 832;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 836;
			this.type();
			this.state = 837;
			this.syntaxBracketLr();
			this.state = 838;
			this.typeMemberColumnList();
			this.state = 839;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeMemberColumnList(): TypeMemberColumnListContext {
		let _localctx: TypeMemberColumnListContext = new TypeMemberColumnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CqlParser.RULE_typeMemberColumnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			this.column();
			this.state = 842;
			this.dataType();
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 843;
				this.syntaxComma();
				this.state = 844;
				this.column();
				this.state = 845;
				this.dataType();
				}
				}
				this.state = 851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createTrigger(): CreateTriggerContext {
		let _localctx: CreateTriggerContext = new CreateTriggerContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CqlParser.RULE_createTrigger);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 852;
			this.kwCreate();
			this.state = 853;
			this.kwTrigger();
			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 854;
				this.ifNotExist();
				}
			}

			this.state = 860;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,26,this._ctx) ) {
			case 1:
				{
				this.state = 857;
				this.keyspace();
				this.state = 858;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 862;
			this.trigger();
			this.state = 863;
			this.kwUsing();
			this.state = 864;
			this.triggerClass();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createMaterializedView(): CreateMaterializedViewContext {
		let _localctx: CreateMaterializedViewContext = new CreateMaterializedViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CqlParser.RULE_createMaterializedView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			this.kwCreate();
			this.state = 867;
			this.kwMaterialized();
			this.state = 868;
			this.kwView();
			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 869;
				this.ifNotExist();
				}
			}

			this.state = 875;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,28,this._ctx) ) {
			case 1:
				{
				this.state = 872;
				this.keyspace();
				this.state = 873;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 877;
			this.materializedView();
			this.state = 878;
			this.kwAs();
			this.state = 879;
			this.kwSelect();
			this.state = 880;
			this.columnList();
			this.state = 881;
			this.kwFrom();
			this.state = 882;
			this.tableSpec();
			this.state = 883;
			this.materializedViewWhere();
			this.state = 884;
			this.kwPrimary();
			this.state = 885;
			this.kwKey();
			this.state = 886;
			this.syntaxBracketLr();
			this.state = 887;
			this.columnList();
			this.state = 888;
			this.syntaxBracketRr();
			this.state = 892;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 889;
				this.kwWith();
				this.state = 890;
				this.materializedViewOptions();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public materializedViewWhere(): MaterializedViewWhereContext {
		let _localctx: MaterializedViewWhereContext = new MaterializedViewWhereContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CqlParser.RULE_materializedViewWhere);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this.kwWhere();
			this.state = 895;
			this.columnNotNullList();
			this.state = 899;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_AND) {
				{
				this.state = 896;
				this.kwAnd();
				this.state = 897;
				this.relationElements();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public columnNotNullList(): ColumnNotNullListContext {
		let _localctx: ColumnNotNullListContext = new ColumnNotNullListContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CqlParser.RULE_columnNotNullList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 901;
			this.columnNotNull();
			this.state = 907;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,31,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 902;
					this.kwAnd();
					this.state = 903;
					this.columnNotNull();
					}
					} 
				}
				this.state = 909;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,31,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public columnNotNull(): ColumnNotNullContext {
		let _localctx: ColumnNotNullContext = new ColumnNotNullContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CqlParser.RULE_columnNotNull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			this.column();
			this.state = 911;
			this.kwIs();
			this.state = 912;
			this.kwNot();
			this.state = 913;
			this.kwNull();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public materializedViewOptions(): MaterializedViewOptionsContext {
		let _localctx: MaterializedViewOptionsContext = new MaterializedViewOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CqlParser.RULE_materializedViewOptions);
		try {
			this.state = 921;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,32,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 915;
				this.tableOptions();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 916;
				this.tableOptions();
				this.state = 917;
				this.kwAnd();
				this.state = 918;
				this.clusteringOrder();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 920;
				this.clusteringOrder();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createKeyspace(): CreateKeyspaceContext {
		let _localctx: CreateKeyspaceContext = new CreateKeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CqlParser.RULE_createKeyspace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
			this.kwCreate();
			this.state = 924;
			this.kwKeyspace();
			this.state = 926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 925;
				this.ifNotExist();
				}
			}

			this.state = 928;
			this.keyspace();
			this.state = 929;
			this.kwWith();
			this.state = 930;
			this.kwReplication();
			this.state = 931;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 932;
			this.syntaxBracketLc();
			this.state = 933;
			this.replicationList();
			this.state = 934;
			this.syntaxBracketRc();
			this.state = 938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_AND) {
				{
				this.state = 935;
				this.kwAnd();
				this.state = 936;
				this.durableWrites();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createFunction(): CreateFunctionContext {
		let _localctx: CreateFunctionContext = new CreateFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CqlParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
			this.kwCreate();
			this.state = 942;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OR) {
				{
				this.state = 941;
				this.orReplace();
				}
			}

			this.state = 944;
			this.kwFunction();
			this.state = 946;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 945;
				this.ifNotExist();
				}
			}

			this.state = 951;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,37,this._ctx) ) {
			case 1:
				{
				this.state = 948;
				this.keyspace();
				this.state = 949;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 953;
			this.function();
			this.state = 954;
			this.syntaxBracketLr();
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.OBJECT_NAME) {
				{
				this.state = 955;
				this.paramList();
				}
			}

			this.state = 958;
			this.syntaxBracketRr();
			this.state = 959;
			this.returnMode();
			this.state = 960;
			this.kwReturns();
			this.state = 961;
			this.dataType();
			this.state = 962;
			this.kwLanguage();
			this.state = 963;
			this.language();
			this.state = 964;
			this.kwAs();
			this.state = 965;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public codeBlock(): CodeBlockContext {
		let _localctx: CodeBlockContext = new CodeBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CqlParser.RULE_codeBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.match(CqlParser.CODE_BLOCK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CqlParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this.param();
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 970;
				this.syntaxComma();
				this.state = 971;
				this.param();
				}
				}
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public returnMode(): ReturnModeContext {
		let _localctx: ReturnModeContext = new ReturnModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CqlParser.RULE_returnMode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_CALLED:
				{
				this.state = 978;
				this.kwCalled();
				}
				break;
			case CqlParser.K_RETURNS:
				{
				this.state = 979;
				this.kwReturns();
				this.state = 980;
				this.kwNull();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 984;
			this.kwOn();
			this.state = 985;
			this.kwNull();
			this.state = 986;
			this.kwInput();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createAggregate(): CreateAggregateContext {
		let _localctx: CreateAggregateContext = new CreateAggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CqlParser.RULE_createAggregate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this.kwCreate();
			this.state = 990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OR) {
				{
				this.state = 989;
				this.orReplace();
				}
			}

			this.state = 992;
			this.kwAggregate();
			this.state = 994;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 993;
				this.ifNotExist();
				}
			}

			this.state = 999;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,43,this._ctx) ) {
			case 1:
				{
				this.state = 996;
				this.keyspace();
				this.state = 997;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1001;
			this.aggregate();
			this.state = 1002;
			this.syntaxBracketLr();
			this.state = 1003;
			this.dataType();
			this.state = 1004;
			this.syntaxBracketRr();
			this.state = 1005;
			this.kwSfunc();
			this.state = 1006;
			this.function();
			this.state = 1007;
			this.kwStype();
			this.state = 1008;
			this.dataType();
			this.state = 1009;
			this.kwFinalfunc();
			this.state = 1010;
			this.function();
			this.state = 1011;
			this.kwInitcond();
			this.state = 1012;
			this.initCondDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initCondDefinition(): InitCondDefinitionContext {
		let _localctx: InitCondDefinitionContext = new InitCondDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CqlParser.RULE_initCondDefinition);
		try {
			this.state = 1018;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,44,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1014;
				this.constant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1015;
				this.initCondList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1016;
				this.initCondListNested();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1017;
				this.initCondHash();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initCondHash(): InitCondHashContext {
		let _localctx: InitCondHashContext = new InitCondHashContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CqlParser.RULE_initCondHash);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1020;
			this.syntaxBracketLc();
			this.state = 1021;
			this.initCondHashItem();
			this.state = 1027;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1022;
				this.syntaxComma();
				this.state = 1023;
				this.initCondHashItem();
				}
				}
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1030;
			this.syntaxBracketRc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initCondHashItem(): InitCondHashItemContext {
		let _localctx: InitCondHashItemContext = new InitCondHashItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CqlParser.RULE_initCondHashItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this.hashKey();
			this.state = 1033;
			this.match(CqlParser.COLON);
			this.state = 1034;
			this.initCondDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initCondListNested(): InitCondListNestedContext {
		let _localctx: InitCondListNestedContext = new InitCondListNestedContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CqlParser.RULE_initCondListNested);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this.syntaxBracketLr();
			this.state = 1037;
			this.initCondList();
			this.state = 1044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.LR_BRACKET || _la===CqlParser.COMMA) {
				{
				this.state = 1042;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.COMMA:
					{
					this.state = 1038;
					this.syntaxComma();
					this.state = 1039;
					this.constant();
					}
					break;
				case CqlParser.LR_BRACKET:
					{
					this.state = 1041;
					this.initCondList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1047;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initCondList(): InitCondListContext {
		let _localctx: InitCondListContext = new InitCondListContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CqlParser.RULE_initCondList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1049;
			this.syntaxBracketLr();
			this.state = 1050;
			this.constant();
			this.state = 1056;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1051;
				this.syntaxComma();
				this.state = 1052;
				this.constant();
				}
				}
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1059;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public orReplace(): OrReplaceContext {
		let _localctx: OrReplaceContext = new OrReplaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CqlParser.RULE_orReplace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1061;
			this.kwOr();
			this.state = 1062;
			this.kwReplace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterUser(): AlterUserContext {
		let _localctx: AlterUserContext = new AlterUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CqlParser.RULE_alterUser);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1064;
			this.kwAlter();
			this.state = 1065;
			this.kwUser();
			this.state = 1066;
			this.user();
			this.state = 1067;
			this.kwWith();
			this.state = 1068;
			this.userPassword();
			this.state = 1070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_NOSUPERUSER || _la===CqlParser.K_SUPERUSER) {
				{
				this.state = 1069;
				this.userSuperUser();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public userPassword(): UserPasswordContext {
		let _localctx: UserPasswordContext = new UserPasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CqlParser.RULE_userPassword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this.kwPassword();
			this.state = 1073;
			this.constantString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public userSuperUser(): UserSuperUserContext {
		let _localctx: UserSuperUserContext = new UserSuperUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CqlParser.RULE_userSuperUser);
		try {
			this.state = 1077;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_SUPERUSER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1075;
				this.kwSuperuser();
				}
				break;
			case CqlParser.K_NOSUPERUSER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1076;
				this.kwNosuperuser();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterType(): AlterTypeContext {
		let _localctx: AlterTypeContext = new AlterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CqlParser.RULE_alterType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1079;
			this.kwAlter();
			this.state = 1080;
			this.kwType();
			this.state = 1084;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,51,this._ctx) ) {
			case 1:
				{
				this.state = 1081;
				this.keyspace();
				this.state = 1082;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1086;
			this.type();
			this.state = 1087;
			this.alterTypeOperation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeOperation(): AlterTypeOperationContext {
		let _localctx: AlterTypeOperationContext = new AlterTypeOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CqlParser.RULE_alterTypeOperation);
		try {
			this.state = 1092;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ALTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1089;
				this.alterTypeAlterType();
				}
				break;
			case CqlParser.K_ADD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1090;
				this.alterTypeAdd();
				}
				break;
			case CqlParser.K_RENAME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1091;
				this.alterTypeRename();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeRename(): AlterTypeRenameContext {
		let _localctx: AlterTypeRenameContext = new AlterTypeRenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CqlParser.RULE_alterTypeRename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1094;
			this.kwRename();
			this.state = 1095;
			this.alterTypeRenameList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeRenameList(): AlterTypeRenameListContext {
		let _localctx: AlterTypeRenameListContext = new AlterTypeRenameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CqlParser.RULE_alterTypeRenameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1097;
			this.alterTypeRenameItem();
			this.state = 1103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1098;
				this.kwAnd();
				this.state = 1099;
				this.alterTypeRenameItem();
				}
				}
				this.state = 1105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeRenameItem(): AlterTypeRenameItemContext {
		let _localctx: AlterTypeRenameItemContext = new AlterTypeRenameItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CqlParser.RULE_alterTypeRenameItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1106;
			this.column();
			this.state = 1107;
			this.kwTo();
			this.state = 1108;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeAdd(): AlterTypeAddContext {
		let _localctx: AlterTypeAddContext = new AlterTypeAddContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CqlParser.RULE_alterTypeAdd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1110;
			this.kwAdd();
			this.state = 1111;
			this.column();
			this.state = 1112;
			this.dataType();
			this.state = 1119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1113;
				this.syntaxComma();
				this.state = 1114;
				this.column();
				this.state = 1115;
				this.dataType();
				}
				}
				this.state = 1121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeAlterType(): AlterTypeAlterTypeContext {
		let _localctx: AlterTypeAlterTypeContext = new AlterTypeAlterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CqlParser.RULE_alterTypeAlterType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this.kwAlter();
			this.state = 1123;
			this.column();
			this.state = 1124;
			this.kwType();
			this.state = 1125;
			this.dataType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTable(): AlterTableContext {
		let _localctx: AlterTableContext = new AlterTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CqlParser.RULE_alterTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1127;
			this.kwAlter();
			this.state = 1128;
			this.kwTable();
			this.state = 1129;
			this.tableSpec();
			this.state = 1130;
			this.alterTableOperation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableOperation(): AlterTableOperationContext {
		let _localctx: AlterTableOperationContext = new AlterTableOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CqlParser.RULE_alterTableOperation);
		try {
			this.state = 1139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,55,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1132;
				this.alterTableAdd();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1133;
				this.alterTableDropColumns();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1134;
				this.alterTableDropColumns();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1135;
				this.alterTableDropCompactStorage();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1136;
				this.alterTableRename();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1137;
				this.alterTableWith();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				 this.notifyErrorListeners("rule.alterTableOperation"); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableWith(): AlterTableWithContext {
		let _localctx: AlterTableWithContext = new AlterTableWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CqlParser.RULE_alterTableWith);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this.kwWith();
			this.state = 1142;
			this.tableOptions();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableRename(): AlterTableRenameContext {
		let _localctx: AlterTableRenameContext = new AlterTableRenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CqlParser.RULE_alterTableRename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1144;
			this.kwRename();
			this.state = 1145;
			this.column();
			this.state = 1146;
			this.kwTo();
			this.state = 1147;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableDropCompactStorage(): AlterTableDropCompactStorageContext {
		let _localctx: AlterTableDropCompactStorageContext = new AlterTableDropCompactStorageContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CqlParser.RULE_alterTableDropCompactStorage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1149;
			this.kwDrop();
			this.state = 1150;
			this.kwCompact();
			this.state = 1151;
			this.kwStorage();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableDropColumns(): AlterTableDropColumnsContext {
		let _localctx: AlterTableDropColumnsContext = new AlterTableDropColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CqlParser.RULE_alterTableDropColumns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1153;
			this.kwDrop();
			this.state = 1154;
			this.alterTableDropColumnList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableDropColumnList(): AlterTableDropColumnListContext {
		let _localctx: AlterTableDropColumnListContext = new AlterTableDropColumnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CqlParser.RULE_alterTableDropColumnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1156;
			this.column();
			this.state = 1162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1157;
				this.syntaxComma();
				this.state = 1158;
				this.column();
				}
				}
				this.state = 1164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableAdd(): AlterTableAddContext {
		let _localctx: AlterTableAddContext = new AlterTableAddContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CqlParser.RULE_alterTableAdd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this.kwAdd();
			this.state = 1166;
			this.alterTableColumnDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableColumnDefinition(): AlterTableColumnDefinitionContext {
		let _localctx: AlterTableColumnDefinitionContext = new AlterTableColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CqlParser.RULE_alterTableColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1168;
			this.column();
			this.state = 1169;
			this.dataType();
			this.state = 1176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1170;
				this.syntaxComma();
				this.state = 1171;
				this.column();
				this.state = 1172;
				this.dataType();
				}
				}
				this.state = 1178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterRole(): AlterRoleContext {
		let _localctx: AlterRoleContext = new AlterRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CqlParser.RULE_alterRole);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1179;
			this.kwAlter();
			this.state = 1180;
			this.kwRole();
			this.state = 1181;
			this.role();
			this.state = 1183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 1182;
				this.roleWith();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public roleWith(): RoleWithContext {
		let _localctx: RoleWithContext = new RoleWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CqlParser.RULE_roleWith);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1185;
			this.kwWith();
			{
			this.state = 1186;
			this.roleWithOptions();
			this.state = 1192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1187;
				this.kwAnd();
				this.state = 1188;
				this.roleWithOptions();
				}
				}
				this.state = 1194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public roleWithOptions(): RoleWithOptionsContext {
		let _localctx: RoleWithOptionsContext = new RoleWithOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CqlParser.RULE_roleWithOptions);
		try {
			this.state = 1211;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_PASSWORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1195;
				this.kwPassword();
				this.state = 1196;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1197;
				this.constantString();
				}
				break;
			case CqlParser.K_LOGIN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1199;
				this.kwLogin();
				this.state = 1200;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1201;
				this.constantBoolean();
				}
				break;
			case CqlParser.K_SUPERUSER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1203;
				this.kwSuperuser();
				this.state = 1204;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1205;
				this.constantBoolean();
				}
				break;
			case CqlParser.K_OPTIONS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1207;
				this.kwOptions();
				this.state = 1208;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1209;
				this.optionHash();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterMaterializedView(): AlterMaterializedViewContext {
		let _localctx: AlterMaterializedViewContext = new AlterMaterializedViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CqlParser.RULE_alterMaterializedView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1213;
			this.kwAlter();
			this.state = 1214;
			this.kwMaterialized();
			this.state = 1215;
			this.kwView();
			this.state = 1219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,61,this._ctx) ) {
			case 1:
				{
				this.state = 1216;
				this.keyspace();
				this.state = 1217;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1221;
			this.materializedView();
			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 1222;
				this.kwWith();
				this.state = 1223;
				this.tableOptions();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropUser(): DropUserContext {
		let _localctx: DropUserContext = new DropUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CqlParser.RULE_dropUser);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1227;
			this.kwDrop();
			this.state = 1228;
			this.kwUser();
			this.state = 1230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1229;
				this.ifExist();
				}
			}

			this.state = 1232;
			this.user();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropType(): DropTypeContext {
		let _localctx: DropTypeContext = new DropTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CqlParser.RULE_dropType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
			this.kwDrop();
			this.state = 1235;
			this.kwType();
			this.state = 1237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1236;
				this.ifExist();
				}
			}

			this.state = 1242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,65,this._ctx) ) {
			case 1:
				{
				this.state = 1239;
				this.keyspace();
				this.state = 1240;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1244;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropMaterializedView(): DropMaterializedViewContext {
		let _localctx: DropMaterializedViewContext = new DropMaterializedViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CqlParser.RULE_dropMaterializedView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1246;
			this.kwDrop();
			this.state = 1247;
			this.kwMaterialized();
			this.state = 1248;
			this.kwView();
			this.state = 1250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1249;
				this.ifExist();
				}
			}

			this.state = 1255;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,67,this._ctx) ) {
			case 1:
				{
				this.state = 1252;
				this.keyspace();
				this.state = 1253;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1257;
			this.materializedView();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropAggregate(): DropAggregateContext {
		let _localctx: DropAggregateContext = new DropAggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CqlParser.RULE_dropAggregate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1259;
			this.kwDrop();
			this.state = 1260;
			this.kwAggregate();
			this.state = 1262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1261;
				this.ifExist();
				}
			}

			this.state = 1267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,69,this._ctx) ) {
			case 1:
				{
				this.state = 1264;
				this.keyspace();
				this.state = 1265;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1269;
			this.aggregate();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropFunction(): DropFunctionContext {
		let _localctx: DropFunctionContext = new DropFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CqlParser.RULE_dropFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1271;
			this.kwDrop();
			this.state = 1272;
			this.kwFunction();
			this.state = 1274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1273;
				this.ifExist();
				}
			}

			this.state = 1279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,71,this._ctx) ) {
			case 1:
				{
				this.state = 1276;
				this.keyspace();
				this.state = 1277;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1281;
			this.function();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropTrigger(): DropTriggerContext {
		let _localctx: DropTriggerContext = new DropTriggerContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CqlParser.RULE_dropTrigger);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1283;
			this.kwDrop();
			this.state = 1284;
			this.kwTrigger();
			this.state = 1286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1285;
				this.ifExist();
				}
			}

			this.state = 1288;
			this.trigger();
			this.state = 1289;
			this.kwOn();
			this.state = 1290;
			this.tableSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropRole(): DropRoleContext {
		let _localctx: DropRoleContext = new DropRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CqlParser.RULE_dropRole);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1292;
			this.kwDrop();
			this.state = 1293;
			this.kwRole();
			this.state = 1295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1294;
				this.ifExist();
				}
			}

			this.state = 1297;
			this.role();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropTable(): DropTableContext {
		let _localctx: DropTableContext = new DropTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CqlParser.RULE_dropTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1299;
			this.kwDrop();
			this.state = 1300;
			this.kwTable();
			this.state = 1302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,74,this._ctx) ) {
			case 1:
				{
				this.state = 1301;
				this.ifExist();
				}
				break;
			}
			this.state = 1304;
			this.tableSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropKeyspace(): DropKeyspaceContext {
		let _localctx: DropKeyspaceContext = new DropKeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CqlParser.RULE_dropKeyspace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1306;
			this.kwDrop();
			this.state = 1307;
			this.kwKeyspace();
			this.state = 1309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1308;
				this.ifExist();
				}
			}

			this.state = 1311;
			this.keyspace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropIndex(): DropIndexContext {
		let _localctx: DropIndexContext = new DropIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CqlParser.RULE_dropIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1313;
			this.kwDrop();
			this.state = 1314;
			this.kwIndex();
			this.state = 1316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1315;
				this.ifExist();
				}
			}

			this.state = 1321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,77,this._ctx) ) {
			case 1:
				{
				this.state = 1318;
				this.keyspace();
				this.state = 1319;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1323;
			this.indexName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CqlParser.RULE_createTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1325;
			this.kwCreate();
			this.state = 1326;
			this.kwTable();
			this.state = 1328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
			case 1:
				{
				this.state = 1327;
				this.ifNotExist();
				}
				break;
			}
			this.state = 1330;
			this.tableSpec();
			this.state = 1331;
			this.createTableDef();
			this.state = 1333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 1332;
				this.withElement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createTableDef(): CreateTableDefContext {
		let _localctx: CreateTableDefContext = new CreateTableDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CqlParser.RULE_createTableDef);
		try {
			this.state = 1340;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1335;
				this.syntaxBracketLr();
				this.state = 1336;
				this.columnDefinitionList();
				this.state = 1337;
				this.syntaxBracketRr();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_WITH:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.createTableDef"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public withElement(): WithElementContext {
		let _localctx: WithElementContext = new WithElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CqlParser.RULE_withElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1342;
			this.kwWith();
			this.state = 1344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.OBJECT_NAME) {
				{
				this.state = 1343;
				this.tableOptions();
				}
			}

			this.state = 1347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_CLUSTERING) {
				{
				this.state = 1346;
				this.clusteringOrder();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public clusteringOrder(): ClusteringOrderContext {
		let _localctx: ClusteringOrderContext = new ClusteringOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CqlParser.RULE_clusteringOrder);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1349;
			this.kwClustering();
			this.state = 1350;
			this.kwOrder();
			this.state = 1351;
			this.kwBy();
			this.state = 1352;
			this.syntaxBracketLr();
			this.state = 1353;
			this.column();
			this.state = 1355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ASC || _la===CqlParser.K_DESC) {
				{
				this.state = 1354;
				this.orderDirection();
				}
			}

			this.state = 1357;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tableOptions(): TableOptionsContext {
		let _localctx: TableOptionsContext = new TableOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CqlParser.RULE_tableOptions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1359;
			this.tableOptionItem();
			this.state = 1365;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,84,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1360;
					this.kwAnd();
					this.state = 1361;
					this.tableOptionItem();
					}
					} 
				}
				this.state = 1367;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,84,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tableOptionItem(): TableOptionItemContext {
		let _localctx: TableOptionItemContext = new TableOptionItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CqlParser.RULE_tableOptionItem);
		try {
			this.state = 1376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,85,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1368;
				this.tableOptionName();
				this.state = 1369;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1370;
				this.tableOptionValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1372;
				this.tableOptionName();
				this.state = 1373;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1374;
				this.optionHash();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tableOptionName(): TableOptionNameContext {
		let _localctx: TableOptionNameContext = new TableOptionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CqlParser.RULE_tableOptionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1378;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tableOptionValue(): TableOptionValueContext {
		let _localctx: TableOptionValueContext = new TableOptionValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CqlParser.RULE_tableOptionValue);
		try {
			this.state = 1382;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1380;
				this.constantString();
				}
				break;
			case CqlParser.DECIMAL_LITERAL:
			case CqlParser.FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1381;
				this.constantFloat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public optionHash(): OptionHashContext {
		let _localctx: OptionHashContext = new OptionHashContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CqlParser.RULE_optionHash);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1384;
			this.syntaxBracketLc();
			this.state = 1385;
			this.optionHashItem();
			this.state = 1391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1386;
				this.syntaxComma();
				this.state = 1387;
				this.optionHashItem();
				}
				}
				this.state = 1393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1394;
			this.syntaxBracketRc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public optionHashItem(): OptionHashItemContext {
		let _localctx: OptionHashItemContext = new OptionHashItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CqlParser.RULE_optionHashItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1396;
			this.optionHashKey();
			this.state = 1397;
			this.match(CqlParser.COLON);
			this.state = 1398;
			this.optionHashValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public optionHashKey(): OptionHashKeyContext {
		let _localctx: OptionHashKeyContext = new OptionHashKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CqlParser.RULE_optionHashKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1400;
			this.constantString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public optionHashValue(): OptionHashValueContext {
		let _localctx: OptionHashValueContext = new OptionHashValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CqlParser.RULE_optionHashValue);
		try {
			this.state = 1404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1402;
				this.constantString();
				}
				break;
			case CqlParser.DECIMAL_LITERAL:
			case CqlParser.FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1403;
				this.constantFloat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public columnDefinitionList(): ColumnDefinitionListContext {
		let _localctx: ColumnDefinitionListContext = new ColumnDefinitionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CqlParser.RULE_columnDefinitionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1406;
			this.columnDefinition();
			this.state = 1412;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,89,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1407;
					this.syntaxComma();
					this.state = 1408;
					this.columnDefinition();
					}
					} 
				}
				this.state = 1414;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,89,this._ctx);
			}
			this.state = 1418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.COMMA) {
				{
				this.state = 1415;
				this.syntaxComma();
				this.state = 1416;
				this.primaryKeyElement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public columnDefinition(): ColumnDefinitionContext {
		let _localctx: ColumnDefinitionContext = new ColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CqlParser.RULE_columnDefinition);
		try {
			this.state = 1432;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,91,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1420;
				this.column();
				this.state = 1421;
				this.dataType();
				this.state = 1422;
				this.primaryKeyModifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1424;
				this.column();
				this.state = 1425;
				this.dataType();
				this.state = 1426;
				this.kwStatic();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1428;
				this.column();
				this.state = 1429;
				this.dataType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.columnDefinition"); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryKeyModifier(): PrimaryKeyModifierContext {
		let _localctx: PrimaryKeyModifierContext = new PrimaryKeyModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CqlParser.RULE_primaryKeyModifier);
		try {
			this.state = 1440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,92,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1434;
				this.kwPrimary();
				this.state = 1435;
				this.kwKey();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1437;
				this.kwPrimary();
				 this.notifyErrorListeners("rule.primaryKeyModifier"); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryKeyElement(): PrimaryKeyElementContext {
		let _localctx: PrimaryKeyElementContext = new PrimaryKeyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CqlParser.RULE_primaryKeyElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1442;
			this.kwPrimary();
			this.state = 1443;
			this.kwKey();
			this.state = 1444;
			this.syntaxBracketLr();
			this.state = 1445;
			this.primaryKeyDefinition();
			this.state = 1446;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryKeyDefinition(): PrimaryKeyDefinitionContext {
		let _localctx: PrimaryKeyDefinitionContext = new PrimaryKeyDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CqlParser.RULE_primaryKeyDefinition);
		try {
			this.state = 1451;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,93,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1448;
				this.singlePrimaryKey();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1449;
				this.compoundKey();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1450;
				this.compositeKey();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public singlePrimaryKey(): SinglePrimaryKeyContext {
		let _localctx: SinglePrimaryKeyContext = new SinglePrimaryKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CqlParser.RULE_singlePrimaryKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1453;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public compoundKey(): CompoundKeyContext {
		let _localctx: CompoundKeyContext = new CompoundKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CqlParser.RULE_compoundKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1455;
			this.partitionKey();
			{
			this.state = 1456;
			this.syntaxComma();
			this.state = 1457;
			this.clusteringKeyList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public compositeKey(): CompositeKeyContext {
		let _localctx: CompositeKeyContext = new CompositeKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CqlParser.RULE_compositeKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1459;
			this.syntaxBracketLr();
			this.state = 1460;
			this.partitionKeyList();
			this.state = 1461;
			this.syntaxBracketRr();
			{
			this.state = 1462;
			this.syntaxComma();
			this.state = 1463;
			this.clusteringKeyList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public partitionKeyList(): PartitionKeyListContext {
		let _localctx: PartitionKeyListContext = new PartitionKeyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CqlParser.RULE_partitionKeyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1465;
			this.partitionKey();
			}
			this.state = 1471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1466;
				this.syntaxComma();
				this.state = 1467;
				this.partitionKey();
				}
				}
				this.state = 1473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public clusteringKeyList(): ClusteringKeyListContext {
		let _localctx: ClusteringKeyListContext = new ClusteringKeyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CqlParser.RULE_clusteringKeyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1474;
			this.clusteringKey();
			}
			this.state = 1480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1475;
				this.syntaxComma();
				this.state = 1476;
				this.clusteringKey();
				}
				}
				this.state = 1482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public partitionKey(): PartitionKeyContext {
		let _localctx: PartitionKeyContext = new PartitionKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CqlParser.RULE_partitionKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1483;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public clusteringKey(): ClusteringKeyContext {
		let _localctx: ClusteringKeyContext = new ClusteringKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CqlParser.RULE_clusteringKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1485;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public applyBatch(): ApplyBatchContext {
		let _localctx: ApplyBatchContext = new ApplyBatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CqlParser.RULE_applyBatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1487;
			this.kwApply();
			this.state = 1488;
			this.kwBatch();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public beginBatch(): BeginBatchContext {
		let _localctx: BeginBatchContext = new BeginBatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CqlParser.RULE_beginBatch);
		try {
			this.state = 1499;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,96,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1490;
				this.beginBatchSpec();
				this.state = 1491;
				this.delete();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1493;
				this.beginBatchSpec();
				this.state = 1494;
				this.insert();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1496;
				this.beginBatchSpec();
				this.state = 1497;
				this.update();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public beginBatchSpec(): BeginBatchSpecContext {
		let _localctx: BeginBatchSpecContext = new BeginBatchSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CqlParser.RULE_beginBatchSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1501;
			this.kwBegin();
			this.state = 1503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_LOGGED || _la===CqlParser.K_UNLOGGED) {
				{
				this.state = 1502;
				this.batchType();
				}
			}

			this.state = 1505;
			this.kwBatch();
			this.state = 1507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1506;
				this.usingTimestampSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public batchType(): BatchTypeContext {
		let _localctx: BatchTypeContext = new BatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CqlParser.RULE_batchType);
		try {
			this.state = 1511;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_LOGGED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1509;
				this.kwLogged();
				}
				break;
			case CqlParser.K_UNLOGGED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1510;
				this.kwUnlogged();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterKeyspace(): AlterKeyspaceContext {
		let _localctx: AlterKeyspaceContext = new AlterKeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CqlParser.RULE_alterKeyspace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1513;
			this.kwAlter();
			this.state = 1514;
			this.kwKeyspace();
			this.state = 1515;
			this.keyspace();
			this.state = 1516;
			this.kwWith();
			this.state = 1517;
			this.kwReplication();
			this.state = 1518;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 1519;
			this.syntaxBracketLc();
			this.state = 1520;
			this.replicationList();
			this.state = 1521;
			this.syntaxBracketRc();
			this.state = 1525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_AND) {
				{
				this.state = 1522;
				this.kwAnd();
				this.state = 1523;
				this.durableWrites();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public replicationList(): ReplicationListContext {
		let _localctx: ReplicationListContext = new ReplicationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CqlParser.RULE_replicationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1527;
			this.replicationListItem();
			}
			this.state = 1533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1528;
				this.syntaxComma();
				this.state = 1529;
				this.replicationListItem();
				}
				}
				this.state = 1535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public replicationListItem(): ReplicationListItemContext {
		let _localctx: ReplicationListItemContext = new ReplicationListItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CqlParser.RULE_replicationListItem);
		try {
			this.state = 1542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,102,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1536;
				this.match(CqlParser.STRING_LITERAL);
				this.state = 1537;
				this.match(CqlParser.COLON);
				this.state = 1538;
				this.match(CqlParser.STRING_LITERAL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1539;
				this.match(CqlParser.STRING_LITERAL);
				this.state = 1540;
				this.match(CqlParser.COLON);
				this.state = 1541;
				this.match(CqlParser.DECIMAL_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public durableWrites(): DurableWritesContext {
		let _localctx: DurableWritesContext = new DurableWritesContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, CqlParser.RULE_durableWrites);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1544;
			this.kwDurableWrites();
			this.state = 1545;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 1546;
			this.constantBoolean();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public use(): UseContext {
		let _localctx: UseContext = new UseContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, CqlParser.RULE_use);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1548;
			this.kwUse();
			this.state = 1549;
			this.keyspace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public truncate(): TruncateContext {
		let _localctx: TruncateContext = new TruncateContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, CqlParser.RULE_truncate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1551;
			this.kwTruncate();
			this.state = 1553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_TABLE) {
				{
				this.state = 1552;
				this.kwTable();
				}
			}

			this.state = 1555;
			this.tableSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createIndex(): CreateIndexContext {
		let _localctx: CreateIndexContext = new CreateIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, CqlParser.RULE_createIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1557;
			this.kwCreate();
			this.state = 1558;
			this.kwIndex();
			this.state = 1560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1559;
				this.ifNotExist();
				}
			}

			this.state = 1563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.STRING_LITERAL || _la===CqlParser.OBJECT_NAME) {
				{
				this.state = 1562;
				this.indexName();
				}
			}

			this.state = 1565;
			this.createIndexSubject();
			this.state = 1566;
			this.createIndexDef();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createIndexSubject(): CreateIndexSubjectContext {
		let _localctx: CreateIndexSubjectContext = new CreateIndexSubjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, CqlParser.RULE_createIndexSubject);
		try {
			this.state = 1572;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1568;
				this.kwOn();
				this.state = 1569;
				this.tableSpec();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.LR_BRACKET:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.createIndexSubject"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexName(): IndexNameContext {
		let _localctx: IndexNameContext = new IndexNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, CqlParser.RULE_indexName);
		try {
			this.state = 1576;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1574;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1575;
				this.constantString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createIndexDef(): CreateIndexDefContext {
		let _localctx: CreateIndexDefContext = new CreateIndexDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, CqlParser.RULE_createIndexDef);
		try {
			this.state = 1583;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1578;
				this.syntaxBracketLr();
				this.state = 1579;
				this.createIndexTarget();
				this.state = 1580;
				this.syntaxBracketRr();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.createIndexDef"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createIndexTarget(): CreateIndexTargetContext {
		let _localctx: CreateIndexTargetContext = new CreateIndexTargetContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, CqlParser.RULE_createIndexTarget);
		try {
			this.state = 1590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_ROLE:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1585;
				this.column();
				}
				break;
			case CqlParser.K_KEYS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1586;
				this.indexKeysSpec();
				}
				break;
			case CqlParser.K_ENTRIES:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1587;
				this.indexEntriesSSpec();
				}
				break;
			case CqlParser.K_FULL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1588;
				this.indexFullSpec();
				}
				break;
			case CqlParser.RR_BRACKET:
				this.enterOuterAlt(_localctx, 5);
				{
				 this.notifyErrorListeners("rule.createIndexTarget"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexKeysSpec(): IndexKeysSpecContext {
		let _localctx: IndexKeysSpecContext = new IndexKeysSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, CqlParser.RULE_indexKeysSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1592;
			this.kwKeys();
			this.state = 1593;
			this.syntaxBracketLr();
			this.state = 1596;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_ROLE:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.OBJECT_NAME:
				{
				this.state = 1594;
				this.column();
				}
				break;
			case CqlParser.RR_BRACKET:
				{
				 this.notifyErrorListeners("rule.indexKeysSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1598;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexEntriesSSpec(): IndexEntriesSSpecContext {
		let _localctx: IndexEntriesSSpecContext = new IndexEntriesSSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, CqlParser.RULE_indexEntriesSSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1600;
			this.kwEntries();
			this.state = 1601;
			this.syntaxBracketLr();
			this.state = 1604;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_ROLE:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.OBJECT_NAME:
				{
				this.state = 1602;
				this.column();
				}
				break;
			case CqlParser.RR_BRACKET:
				{
				 this.notifyErrorListeners("rule.indexEntriesSSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1606;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexFullSpec(): IndexFullSpecContext {
		let _localctx: IndexFullSpecContext = new IndexFullSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, CqlParser.RULE_indexFullSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1608;
			this.kwFull();
			this.state = 1609;
			this.syntaxBracketLr();
			this.state = 1612;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_ROLE:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.OBJECT_NAME:
				{
				this.state = 1610;
				this.column();
				}
				break;
			case CqlParser.RR_BRACKET:
				{
				 this.notifyErrorListeners("rule.indexFullSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1614;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public delete(): DeleteContext {
		let _localctx: DeleteContext = new DeleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, CqlParser.RULE_delete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1616;
			this.kwDelete();
			this.state = 1618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.DQUOTE || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CqlParser.K_DURABLE_WRITES - 53)) | (1 << (CqlParser.K_INITCOND - 53)) | (1 << (CqlParser.K_KEY - 53)) | (1 << (CqlParser.K_LANGUAGE - 53)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (CqlParser.K_OPTIONS - 94)) | (1 << (CqlParser.K_PARTITION - 94)) | (1 << (CqlParser.K_PERMISSIONS - 94)) | (1 << (CqlParser.K_REPLICATION - 94)) | (1 << (CqlParser.K_ROLE - 94)))) !== 0) || _la===CqlParser.K_TTL || _la===CqlParser.K_TYPE || _la===CqlParser.OBJECT_NAME) {
				{
				this.state = 1617;
				this.deleteColumnList();
				}
			}

			this.state = 1620;
			this.fromSpec();
			this.state = 1622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1621;
				this.usingTimestampSpec();
				}
			}

			this.state = 1626;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_WHERE:
				{
				this.state = 1624;
				this.whereSpec();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_IF:
				{
				 this.notifyErrorListeners("rule.whereSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,116,this._ctx) ) {
			case 1:
				{
				this.state = 1628;
				this.ifExist();
				}
				break;

			case 2:
				{
				this.state = 1629;
				this.ifSpec();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public deleteColumnList(): DeleteColumnListContext {
		let _localctx: DeleteColumnListContext = new DeleteColumnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, CqlParser.RULE_deleteColumnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1632;
			this.deleteColumnItem();
			}
			this.state = 1638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1633;
				this.syntaxComma();
				this.state = 1634;
				this.deleteColumnItem();
				}
				}
				this.state = 1640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public deleteColumnItem(): DeleteColumnItemContext {
		let _localctx: DeleteColumnItemContext = new DeleteColumnItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, CqlParser.RULE_deleteColumnItem);
		try {
			this.state = 1650;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,119,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1641;
				this.column();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1642;
				this.column();
				this.state = 1643;
				this.syntaxBracketLs();
				this.state = 1646;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.STRING_LITERAL:
					{
					this.state = 1644;
					this.constantString();
					}
					break;
				case CqlParser.DECIMAL_LITERAL:
					{
					this.state = 1645;
					this.constantDecimal();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1648;
				this.syntaxBracketRs();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public update(): UpdateContext {
		let _localctx: UpdateContext = new UpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, CqlParser.RULE_update);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1652;
			this.kwUpdate();
			this.state = 1653;
			this.tableSpec();
			this.state = 1655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1654;
				this.usingTtlTimestamp();
				}
			}

			this.state = 1657;
			this.updateAssignments();
			this.state = 1660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_WHERE:
				{
				this.state = 1658;
				this.whereSpec();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_IF:
				{
				 this.notifyErrorListeners("rule.whereSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1664;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,122,this._ctx) ) {
			case 1:
				{
				this.state = 1662;
				this.ifExist();
				}
				break;

			case 2:
				{
				this.state = 1663;
				this.ifSpec();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifSpec(): IfSpecContext {
		let _localctx: IfSpecContext = new IfSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, CqlParser.RULE_ifSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1666;
			this.kwIf();
			this.state = 1667;
			this.ifConditionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifConditionList(): IfConditionListContext {
		let _localctx: IfConditionListContext = new IfConditionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, CqlParser.RULE_ifConditionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1669;
			this.ifCondition();
			}
			this.state = 1675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1670;
				this.kwAnd();
				this.state = 1671;
				this.ifCondition();
				}
				}
				this.state = 1677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifCondition(): IfConditionContext {
		let _localctx: IfConditionContext = new IfConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, CqlParser.RULE_ifCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1678;
			this.match(CqlParser.OBJECT_NAME);
			this.state = 1679;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 1680;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public updateAssignments(): UpdateAssignmentsContext {
		let _localctx: UpdateAssignmentsContext = new UpdateAssignmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, CqlParser.RULE_updateAssignments);
		let _la: number;
		try {
			this.state = 1693;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_SET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1682;
				this.kwSet();
				{
				this.state = 1683;
				this.updateAssignmentElement();
				}
				this.state = 1689;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===CqlParser.COMMA) {
					{
					{
					this.state = 1684;
					this.syntaxComma();
					this.state = 1685;
					this.updateAssignmentElement();
					}
					}
					this.state = 1691;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_IF:
			case CqlParser.K_WHERE:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.updateAssignments"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public updateAssignmentElement(): UpdateAssignmentElementContext {
		let _localctx: UpdateAssignmentElementContext = new UpdateAssignmentElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, CqlParser.RULE_updateAssignmentElement);
		try {
			this.state = 1774;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,134,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1695;
				this.column();
				this.state = 1696;
				this.syntaxOperatorEq();
				this.state = 1701;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,126,this._ctx) ) {
				case 1:
					{
					this.state = 1697;
					this.constant();
					}
					break;

				case 2:
					{
					this.state = 1698;
					this.assignmentMap();
					}
					break;

				case 3:
					{
					this.state = 1699;
					this.assignmentSet();
					}
					break;

				case 4:
					{
					this.state = 1700;
					this.assignmentList();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1703;
				this.column();
				this.state = 1704;
				this.syntaxOperatorEq();
				this.state = 1705;
				this.column();
				this.state = 1708;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1706;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1707;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1710;
				this.constantDecimal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1712;
				this.column();
				this.state = 1713;
				this.syntaxOperatorEq();
				this.state = 1714;
				this.column();
				this.state = 1717;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1715;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1716;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1719;
				this.assignmentMap();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1721;
				this.column();
				this.state = 1722;
				this.syntaxOperatorEq();
				this.state = 1723;
				this.column();
				this.state = 1726;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1724;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1725;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1728;
				this.assignmentSet();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1730;
				this.column();
				this.state = 1731;
				this.syntaxOperatorEq();
				this.state = 1732;
				this.column();
				this.state = 1735;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1733;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1734;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1737;
				this.assignmentList();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1739;
				this.column();
				this.state = 1740;
				this.syntaxOperatorEq();
				this.state = 1741;
				this.assignmentSet();
				this.state = 1744;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1742;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1743;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1746;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1748;
				this.column();
				this.state = 1749;
				this.syntaxOperatorEq();
				this.state = 1750;
				this.assignmentMap();
				this.state = 1753;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1751;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1752;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1755;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1757;
				this.column();
				this.state = 1758;
				this.syntaxOperatorEq();
				this.state = 1759;
				this.assignmentList();
				this.state = 1762;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1760;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1761;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1764;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1766;
				this.column();
				this.state = 1767;
				this.syntaxBracketLs();
				this.state = 1768;
				this.constantDecimal();
				this.state = 1769;
				this.syntaxBracketRs();
				this.state = 1770;
				this.syntaxOperatorEq();
				this.state = 1771;
				this.constant();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				 this.notifyErrorListeners("rule.updateAssignmentElement"); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentSet(): AssignmentSetContext {
		let _localctx: AssignmentSetContext = new AssignmentSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, CqlParser.RULE_assignmentSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1776;
			this.syntaxBracketLc();
			this.state = 1777;
			this.constant();
			this.state = 1783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1778;
				this.syntaxComma();
				this.state = 1779;
				this.constant();
				}
				}
				this.state = 1785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1786;
			this.syntaxBracketRc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentMap(): AssignmentMapContext {
		let _localctx: AssignmentMapContext = new AssignmentMapContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, CqlParser.RULE_assignmentMap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1788;
			this.syntaxBracketLc();
			{
			this.state = 1789;
			this.constant();
			this.state = 1790;
			this.syntaxColon();
			this.state = 1791;
			this.constant();
			}
			this.state = 1799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_FALSE || _la===CqlParser.K_NULL || _la===CqlParser.K_TRUE || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (CqlParser.STRING_LITERAL - 165)) | (1 << (CqlParser.DECIMAL_LITERAL - 165)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 165)) | (1 << (CqlParser.UUID - 165)))) !== 0)) {
				{
				{
				this.state = 1793;
				this.constant();
				this.state = 1794;
				this.syntaxColon();
				this.state = 1795;
				this.constant();
				}
				}
				this.state = 1801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1802;
			this.syntaxBracketRc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentList(): AssignmentListContext {
		let _localctx: AssignmentListContext = new AssignmentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, CqlParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1804;
			this.syntaxBracketLs();
			this.state = 1805;
			this.constant();
			this.state = 1811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COLON) {
				{
				{
				this.state = 1806;
				this.syntaxColon();
				this.state = 1807;
				this.constant();
				}
				}
				this.state = 1813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1814;
			this.syntaxBracketRs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public insert(): InsertContext {
		let _localctx: InsertContext = new InsertContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, CqlParser.RULE_insert);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1816;
			this.kwInsert();
			this.state = 1817;
			this.kwInto();
			this.state = 1818;
			this.tableSpec();
			this.state = 1819;
			this.insertColumnSpec();
			this.state = 1820;
			this.insertValuesSpec();
			this.state = 1823;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_IF:
				{
				this.state = 1821;
				this.ifNotExist();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_USING:
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1825;
				this.usingTtlTimestamp();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public usingTtlTimestamp(): UsingTtlTimestampContext {
		let _localctx: UsingTtlTimestampContext = new UsingTtlTimestampContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, CqlParser.RULE_usingTtlTimestamp);
		try {
			this.state = 1844;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,140,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1828;
				this.kwUsing();
				this.state = 1829;
				this.ttl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1831;
				this.kwUsing();
				this.state = 1832;
				this.ttl();
				this.state = 1833;
				this.kwAnd();
				this.state = 1834;
				this.timestamp();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1836;
				this.kwUsing();
				this.state = 1837;
				this.timestamp();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1839;
				this.kwUsing();
				this.state = 1840;
				this.timestamp();
				this.state = 1841;
				this.kwAnd();
				this.state = 1842;
				this.ttl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public timestamp(): TimestampContext {
		let _localctx: TimestampContext = new TimestampContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, CqlParser.RULE_timestamp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1846;
			this.kwTimestamp();
			this.state = 1847;
			this.constantDecimal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ttl(): TtlContext {
		let _localctx: TtlContext = new TtlContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, CqlParser.RULE_ttl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1849;
			this.kwTtl();
			this.state = 1850;
			this.constantDecimal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public usingTimestampSpec(): UsingTimestampSpecContext {
		let _localctx: UsingTimestampSpecContext = new UsingTimestampSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, CqlParser.RULE_usingTimestampSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1852;
			this.kwUsing();
			this.state = 1853;
			this.timestamp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifNotExist(): IfNotExistContext {
		let _localctx: IfNotExistContext = new IfNotExistContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, CqlParser.RULE_ifNotExist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1855;
			this.kwIf();
			this.state = 1856;
			this.kwNot();
			this.state = 1857;
			this.kwExists();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifExist(): IfExistContext {
		let _localctx: IfExistContext = new IfExistContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, CqlParser.RULE_ifExist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1859;
			this.kwIf();
			this.state = 1860;
			this.kwExists();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public insertValuesSpec(): InsertValuesSpecContext {
		let _localctx: InsertValuesSpecContext = new InsertValuesSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, CqlParser.RULE_insertValuesSpec);
		try {
			this.state = 1868;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_VALUES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1862;
				this.kwValues();
				this.state = 1863;
				this.syntaxBracketLr();
				this.state = 1864;
				this.expressionList();
				this.state = 1865;
				this.syntaxBracketRr();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_IF:
			case CqlParser.K_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.insertValuesSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public insertColumnSpec(): InsertColumnSpecContext {
		let _localctx: InsertColumnSpecContext = new InsertColumnSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, CqlParser.RULE_insertColumnSpec);
		try {
			this.state = 1875;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1870;
				this.syntaxBracketLr();
				this.state = 1871;
				this.columnList();
				this.state = 1872;
				this.syntaxBracketRr();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_IF:
			case CqlParser.K_USING:
			case CqlParser.K_VALUES:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.insertColumnSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public columnList(): ColumnListContext {
		let _localctx: ColumnListContext = new ColumnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, CqlParser.RULE_columnList);
		let _la: number;
		try {
			this.state = 1889;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_ROLE:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1877;
				this.column();
				this.state = 1885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===CqlParser.COMMA) {
					{
					{
					this.state = 1878;
					this.syntaxComma();
					this.state = 1881;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CqlParser.DQUOTE:
					case CqlParser.K_DURABLE_WRITES:
					case CqlParser.K_INITCOND:
					case CqlParser.K_KEY:
					case CqlParser.K_LANGUAGE:
					case CqlParser.K_OPTIONS:
					case CqlParser.K_PARTITION:
					case CqlParser.K_PERMISSIONS:
					case CqlParser.K_REPLICATION:
					case CqlParser.K_ROLE:
					case CqlParser.K_TTL:
					case CqlParser.K_TYPE:
					case CqlParser.OBJECT_NAME:
						{
						this.state = 1879;
						this.column();
						}
						break;
					case CqlParser.RR_BRACKET:
					case CqlParser.COMMA:
					case CqlParser.K_FROM:
						{
						 this.notifyErrorListeners("rule.column"); 
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 1887;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CqlParser.RR_BRACKET:
			case CqlParser.K_FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.column_list"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, CqlParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1891;
			this.expression();
			this.state = 1897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1892;
				this.syntaxComma();
				this.state = 1893;
				this.expression();
				}
				}
				this.state = 1899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, CqlParser.RULE_expression);
		try {
			this.state = 1907;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.LC_BRACKET:
			case CqlParser.LS_BRACKET:
			case CqlParser.K_FALSE:
			case CqlParser.K_NULL:
			case CqlParser.K_TRUE:
			case CqlParser.STRING_LITERAL:
			case CqlParser.DECIMAL_LITERAL:
			case CqlParser.HEXADECIMAL_LITERAL:
			case CqlParser.UUID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1904;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,147,this._ctx) ) {
				case 1:
					{
					this.state = 1900;
					this.constant();
					}
					break;

				case 2:
					{
					this.state = 1901;
					this.assignmentMap();
					}
					break;

				case 3:
					{
					this.state = 1902;
					this.assignmentSet();
					}
					break;

				case 4:
					{
					this.state = 1903;
					this.assignmentList();
					}
					break;
				}
				}
				break;
			case CqlParser.RR_BRACKET:
			case CqlParser.COMMA:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.expression"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public select(): SelectContext {
		let _localctx: SelectContext = new SelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, CqlParser.RULE_select);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1909;
			this.kwSelect();
			this.state = 1911;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_DISTINCT) {
				{
				this.state = 1910;
				this.kwDistinct();
				}
			}

			this.state = 1913;
			this.selectElements();
			this.state = 1914;
			this.fromSpec();
			this.state = 1916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WHERE) {
				{
				this.state = 1915;
				this.whereSpec();
				}
			}

			this.state = 1919;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ORDER) {
				{
				this.state = 1918;
				this.orderSpec();
				}
			}

			this.state = 1922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_LIMIT) {
				{
				this.state = 1921;
				this.limitSpec();
				}
			}

			this.state = 1925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ALLOW) {
				{
				this.state = 1924;
				this.kwAllowFiltering();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public limitSpec(): LimitSpecContext {
		let _localctx: LimitSpecContext = new LimitSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, CqlParser.RULE_limitSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1927;
			this.kwLimit();
			this.state = 1928;
			this.constantDecimal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fromSpec(): FromSpecContext {
		let _localctx: FromSpecContext = new FromSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, CqlParser.RULE_fromSpec);
		try {
			this.state = 1934;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1930;
				this.kwFrom();
				this.state = 1931;
				this.tableSpec();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_ALLOW:
			case CqlParser.K_IF:
			case CqlParser.K_LIMIT:
			case CqlParser.K_ORDER:
			case CqlParser.K_USING:
			case CqlParser.K_WHERE:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.select.fromSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public orderSpec(): OrderSpecContext {
		let _localctx: OrderSpecContext = new OrderSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, CqlParser.RULE_orderSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1936;
			this.kwOrderBy();
			this.state = 1937;
			this.orderSpecElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public orderSpecElement(): OrderSpecElementContext {
		let _localctx: OrderSpecElementContext = new OrderSpecElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, CqlParser.RULE_orderSpecElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1939;
			this.column();
			this.state = 1942;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ASC:
				{
				this.state = 1940;
				this.kwAsc();
				}
				break;
			case CqlParser.K_DESC:
				{
				this.state = 1941;
				this.kwDesc();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_ALLOW:
			case CqlParser.K_LIMIT:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whereSpec(): WhereSpecContext {
		let _localctx: WhereSpecContext = new WhereSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, CqlParser.RULE_whereSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1944;
			this.kwWhere();
			this.state = 1945;
			this.relationElements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public selectElements(): SelectElementsContext {
		let _localctx: SelectElementsContext = new SelectElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, CqlParser.RULE_selectElements);
		let _la: number;
		try {
			this.state = 1958;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,157,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1947;
				this.specialStar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1948;
				this.selectElement();
				this.state = 1954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===CqlParser.COMMA) {
					{
					{
					this.state = 1949;
					this.syntaxComma();
					this.state = 1950;
					this.selectElement();
					}
					}
					this.state = 1956;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.select.selectElements"); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public selectElement(): SelectElementContext {
		let _localctx: SelectElementContext = new SelectElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, CqlParser.RULE_selectElement);
		let _la: number;
		try {
			this.state = 1974;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,160,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1960;
				this.column();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1961;
				this.column();
				this.state = 1965;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_AS) {
					{
					this.state = 1962;
					this.kwAs();
					this.state = 1963;
					this.match(CqlParser.OBJECT_NAME);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1967;
				this.functionCall();
				this.state = 1971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_AS) {
					{
					this.state = 1968;
					this.kwAs();
					this.state = 1969;
					this.match(CqlParser.OBJECT_NAME);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.select.selectElement"); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public relationElements(): RelationElementsContext {
		let _localctx: RelationElementsContext = new RelationElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, CqlParser.RULE_relationElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1976;
			this.relationElement();
			}
			this.state = 1982;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1977;
				this.kwAnd();
				this.state = 1978;
				this.relationElement();
				}
				}
				this.state = 1984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public relationElement(): RelationElementContext {
		let _localctx: RelationElementContext = new RelationElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, CqlParser.RULE_relationElement);
		let _la: number;
		try {
			this.state = 2014;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,163,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1985;
				this.column();
				this.state = 1986;
				this.relationOperator();
				this.state = 1987;
				this.constant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1989;
				this.column();
				this.state = 1990;
				this.kwIn();
				this.state = 1991;
				this.syntaxBracketLr();
				this.state = 1993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_FALSE || _la===CqlParser.K_NULL || _la===CqlParser.K_TRUE || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (CqlParser.STRING_LITERAL - 165)) | (1 << (CqlParser.DECIMAL_LITERAL - 165)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 165)) | (1 << (CqlParser.OBJECT_NAME - 165)) | (1 << (CqlParser.UUID - 165)))) !== 0)) {
					{
					this.state = 1992;
					this.functionArgs();
					}
				}

				this.state = 1995;
				this.syntaxBracketRr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1997;
				this.column();
				this.state = 1998;
				this.kwContains();
				this.state = 1999;
				this.constant();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2001;
				this.column();
				this.state = 2002;
				this.kwContainsKey();
				this.state = 2003;
				this.constant();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2005;
				this.functionCall();
				this.state = 2006;
				this.relationOperator();
				this.state = 2007;
				this.constant();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2009;
				this.functionCall();
				this.state = 2010;
				this.relationOperator();
				this.state = 2011;
				this.functionCall();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				 this.notifyErrorListeners("rule.relationElement"); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public relationOperator(): RelationOperatorContext {
		let _localctx: RelationOperatorContext = new RelationOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, CqlParser.RULE_relationOperator);
		try {
			this.state = 2021;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.OPERATOR_EQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2016;
				this.syntaxOperatorEq();
				}
				break;
			case CqlParser.OPERATOR_LT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2017;
				this.syntaxOperatorLt();
				}
				break;
			case CqlParser.OPERATOR_GT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2018;
				this.syntaxOperatorGt();
				}
				break;
			case CqlParser.OPERATOR_LTE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2019;
				this.syntaxOperatorLte();
				}
				break;
			case CqlParser.OPERATOR_GTE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2020;
				this.syntaxOperatorGte();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, CqlParser.RULE_functionCall);
		let _la: number;
		try {
			this.state = 2033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,166,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2023;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2024;
				this.match(CqlParser.LR_BRACKET);
				this.state = 2025;
				this.match(CqlParser.STAR);
				this.state = 2026;
				this.match(CqlParser.RR_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2027;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2028;
				this.match(CqlParser.LR_BRACKET);
				this.state = 2030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_FALSE || _la===CqlParser.K_NULL || _la===CqlParser.K_TRUE || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (CqlParser.STRING_LITERAL - 165)) | (1 << (CqlParser.DECIMAL_LITERAL - 165)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 165)) | (1 << (CqlParser.OBJECT_NAME - 165)) | (1 << (CqlParser.UUID - 165)))) !== 0)) {
					{
					this.state = 2029;
					this.functionArgs();
					}
				}

				this.state = 2032;
				this.match(CqlParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionArgs(): FunctionArgsContext {
		let _localctx: FunctionArgsContext = new FunctionArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, CqlParser.RULE_functionArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2038;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,167,this._ctx) ) {
			case 1:
				{
				this.state = 2035;
				this.constant();
				}
				break;

			case 2:
				{
				this.state = 2036;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 3:
				{
				this.state = 2037;
				this.functionCall();
				}
				break;
			}
			this.state = 2048;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 2040;
				this.syntaxComma();
				this.state = 2044;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,168,this._ctx) ) {
				case 1:
					{
					this.state = 2041;
					this.constant();
					}
					break;

				case 2:
					{
					this.state = 2042;
					this.match(CqlParser.OBJECT_NAME);
					}
					break;

				case 3:
					{
					this.state = 2043;
					this.functionCall();
					}
					break;
				}
				}
				}
				this.state = 2050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, CqlParser.RULE_constant);
		try {
			this.state = 2057;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.UUID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2051;
				this.constantUuid();
				}
				break;
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2052;
				this.constantString();
				}
				break;
			case CqlParser.DECIMAL_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2053;
				this.constantDecimal();
				}
				break;
			case CqlParser.HEXADECIMAL_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2054;
				this.constantHexadecimal();
				}
				break;
			case CqlParser.K_FALSE:
			case CqlParser.K_TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2055;
				this.constantBoolean();
				}
				break;
			case CqlParser.K_NULL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2056;
				this.kwNull();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constantUuid(): ConstantUuidContext {
		let _localctx: ConstantUuidContext = new ConstantUuidContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, CqlParser.RULE_constantUuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2059;
			this.match(CqlParser.UUID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constantDecimal(): ConstantDecimalContext {
		let _localctx: ConstantDecimalContext = new ConstantDecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, CqlParser.RULE_constantDecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2061;
			this.match(CqlParser.DECIMAL_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constantFloat(): ConstantFloatContext {
		let _localctx: ConstantFloatContext = new ConstantFloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, CqlParser.RULE_constantFloat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2063;
			_la = this._input.LA(1);
			if ( !(_la===CqlParser.DECIMAL_LITERAL || _la===CqlParser.FLOAT_LITERAL) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constantString(): ConstantStringContext {
		let _localctx: ConstantStringContext = new ConstantStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, CqlParser.RULE_constantString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2065;
			this.match(CqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constantBoolean(): ConstantBooleanContext {
		let _localctx: ConstantBooleanContext = new ConstantBooleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, CqlParser.RULE_constantBoolean);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2067;
			_la = this._input.LA(1);
			if ( !(_la===CqlParser.K_FALSE || _la===CqlParser.K_TRUE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constantHexadecimal(): ConstantHexadecimalContext {
		let _localctx: ConstantHexadecimalContext = new ConstantHexadecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, CqlParser.RULE_constantHexadecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2069;
			this.match(CqlParser.HEXADECIMAL_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keyspace(): KeyspaceContext {
		let _localctx: KeyspaceContext = new KeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, CqlParser.RULE_keyspace);
		try {
			this.state = 2075;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2071;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;
			case CqlParser.DQUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2072;
				this.match(CqlParser.DQUOTE);
				this.state = 2073;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2074;
				this.match(CqlParser.DQUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public table(): TableContext {
		let _localctx: TableContext = new TableContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, CqlParser.RULE_table);
		try {
			this.state = 2082;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2077;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;
			case CqlParser.DQUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2078;
				this.match(CqlParser.DQUOTE);
				this.state = 2079;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2080;
				this.match(CqlParser.DQUOTE);
				}
				break;
			case CqlParser.EOF:
			case CqlParser.LR_BRACKET:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_ADD:
			case CqlParser.K_ALLOW:
			case CqlParser.K_DROP:
			case CqlParser.K_FROM:
			case CqlParser.K_IF:
			case CqlParser.K_LIMIT:
			case CqlParser.K_OF:
			case CqlParser.K_ORDER:
			case CqlParser.K_RENAME:
			case CqlParser.K_SET:
			case CqlParser.K_TO:
			case CqlParser.K_USING:
			case CqlParser.K_VALUES:
			case CqlParser.K_WHERE:
			case CqlParser.K_WITH:
				this.enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.table"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tableSpec(): TableSpecContext {
		let _localctx: TableSpecContext = new TableSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, CqlParser.RULE_tableSpec);
		try {
			this.state = 2090;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,173,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2084;
				this.table();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2085;
				this.keyspace();
				this.state = 2086;
				this.specialDot();
				this.state = 2087;
				this.table();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.tableSpec"); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public column(): ColumnContext {
		let _localctx: ColumnContext = new ColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, CqlParser.RULE_column);
		try {
			this.state = 2107;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2092;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;
			case CqlParser.DQUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2093;
				this.match(CqlParser.DQUOTE);
				this.state = 2094;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2095;
				this.match(CqlParser.DQUOTE);
				}
				break;
			case CqlParser.K_ROLE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2096;
				this.match(CqlParser.K_ROLE);
				}
				break;
			case CqlParser.K_PERMISSIONS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2097;
				this.match(CqlParser.K_PERMISSIONS);
				}
				break;
			case CqlParser.K_OPTIONS:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2098;
				this.match(CqlParser.K_OPTIONS);
				}
				break;
			case CqlParser.K_DURABLE_WRITES:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2099;
				this.match(CqlParser.K_DURABLE_WRITES);
				}
				break;
			case CqlParser.K_LANGUAGE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2100;
				this.match(CqlParser.K_LANGUAGE);
				}
				break;
			case CqlParser.K_TYPE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2101;
				this.match(CqlParser.K_TYPE);
				}
				break;
			case CqlParser.K_INITCOND:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2102;
				this.match(CqlParser.K_INITCOND);
				}
				break;
			case CqlParser.K_REPLICATION:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2103;
				this.match(CqlParser.K_REPLICATION);
				}
				break;
			case CqlParser.K_TTL:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2104;
				this.match(CqlParser.K_TTL);
				}
				break;
			case CqlParser.K_PARTITION:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2105;
				this.match(CqlParser.K_PARTITION);
				}
				break;
			case CqlParser.K_KEY:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2106;
				this.match(CqlParser.K_KEY);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, CqlParser.RULE_dataType);
		try {
			this.state = 2111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_TIMESTAMP:
			case CqlParser.K_ASCII:
			case CqlParser.K_BIGINT:
			case CqlParser.K_BLOB:
			case CqlParser.K_BOOLEAN:
			case CqlParser.K_COUNTER:
			case CqlParser.K_DATE:
			case CqlParser.K_DECIMAL:
			case CqlParser.K_DOUBLE:
			case CqlParser.K_FLOAT:
			case CqlParser.K_INET:
			case CqlParser.K_INT:
			case CqlParser.K_SMALLINT:
			case CqlParser.K_TEXT:
			case CqlParser.K_TIMEUUID:
			case CqlParser.K_TIME:
			case CqlParser.K_TINYINT:
			case CqlParser.K_UUID:
			case CqlParser.K_VARCHAR:
			case CqlParser.K_VARINT:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2109;
				this.dataTypeFundamental();
				}
				break;
			case CqlParser.K_SET:
			case CqlParser.K_FROZEN:
			case CqlParser.K_LIST:
			case CqlParser.K_MAP:
			case CqlParser.K_TUPLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2110;
				this.dataTypeCollection();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeCollection(): DataTypeCollectionContext {
		let _localctx: DataTypeCollectionContext = new DataTypeCollectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, CqlParser.RULE_dataTypeCollection);
		try {
			this.state = 2128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_FROZEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2113;
				this.dataTypeFrozen();
				this.state = 2114;
				this.dataTypeStructure();
				}
				break;
			case CqlParser.K_SET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2116;
				this.dataTypeSet();
				this.state = 2117;
				this.dataTypeStructure();
				}
				break;
			case CqlParser.K_LIST:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2119;
				this.dataTypeList();
				this.state = 2120;
				this.dataTypeStructure();
				}
				break;
			case CqlParser.K_MAP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2122;
				this.dataTypeMap();
				this.state = 2123;
				this.dataTypeStructure();
				}
				break;
			case CqlParser.K_TUPLE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2125;
				this.dataTypeTuple();
				this.state = 2126;
				this.dataTypeStructure();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeFundamental(): DataTypeFundamentalContext {
		let _localctx: DataTypeFundamentalContext = new DataTypeFundamentalContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, CqlParser.RULE_dataTypeFundamental);
		try {
			this.state = 2151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ASCII:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2130;
				this.dataTypeAscii();
				}
				break;
			case CqlParser.K_BIGINT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2131;
				this.dataTypeBigint();
				}
				break;
			case CqlParser.K_BLOB:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2132;
				this.dataTypeBlob();
				}
				break;
			case CqlParser.K_BOOLEAN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2133;
				this.dataTypeBoolean();
				}
				break;
			case CqlParser.K_COUNTER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2134;
				this.dataTypeCounter();
				}
				break;
			case CqlParser.K_DATE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2135;
				this.dataTypeDate();
				}
				break;
			case CqlParser.K_DECIMAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2136;
				this.dataTypeDecimal();
				}
				break;
			case CqlParser.K_DOUBLE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2137;
				this.dataTypeDouble();
				}
				break;
			case CqlParser.K_FLOAT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2138;
				this.dataTypeFloat();
				}
				break;
			case CqlParser.K_INET:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2139;
				this.dataTypeInet();
				}
				break;
			case CqlParser.K_INT:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2140;
				this.dataTypeInt();
				}
				break;
			case CqlParser.K_SMALLINT:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2141;
				this.dataTypeSmallInt();
				}
				break;
			case CqlParser.K_TEXT:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2142;
				this.dataTypeText();
				}
				break;
			case CqlParser.K_TIME:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2143;
				this.dataTypeTime();
				}
				break;
			case CqlParser.K_TIMEUUID:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2144;
				this.dataTypeTimeUuid();
				}
				break;
			case CqlParser.K_TIMESTAMP:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2145;
				this.dataTypeTimestamp();
				}
				break;
			case CqlParser.K_TINYINT:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2146;
				this.dataTypeTinyInt();
				}
				break;
			case CqlParser.K_UUID:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2147;
				this.dataTypeUuid();
				}
				break;
			case CqlParser.K_VARCHAR:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2148;
				this.dataTypeVarChar();
				}
				break;
			case CqlParser.K_VARINT:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 2149;
				this.dataTypeVarInt();
				}
				break;
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 2150;
				this.dataTypeUserDefined();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public orderDirection(): OrderDirectionContext {
		let _localctx: OrderDirectionContext = new OrderDirectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, CqlParser.RULE_orderDirection);
		try {
			this.state = 2155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ASC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2153;
				this.kwAsc();
				}
				break;
			case CqlParser.K_DESC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2154;
				this.kwDesc();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public role(): RoleContext {
		let _localctx: RoleContext = new RoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, CqlParser.RULE_role);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2157;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public trigger(): TriggerContext {
		let _localctx: TriggerContext = new TriggerContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, CqlParser.RULE_trigger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2159;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public triggerClass(): TriggerClassContext {
		let _localctx: TriggerClassContext = new TriggerClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, CqlParser.RULE_triggerClass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2161;
			this.constantString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public materializedView(): MaterializedViewContext {
		let _localctx: MaterializedViewContext = new MaterializedViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, CqlParser.RULE_materializedView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2163;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, CqlParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2165;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public aggregate(): AggregateContext {
		let _localctx: AggregateContext = new AggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, CqlParser.RULE_aggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2167;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, CqlParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2169;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public language(): LanguageContext {
		let _localctx: LanguageContext = new LanguageContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, CqlParser.RULE_language);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2171;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public user(): UserContext {
		let _localctx: UserContext = new UserContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, CqlParser.RULE_user);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2173;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public password(): PasswordContext {
		let _localctx: PasswordContext = new PasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, CqlParser.RULE_password);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2175;
			this.constantString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public hashKey(): HashKeyContext {
		let _localctx: HashKeyContext = new HashKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, CqlParser.RULE_hashKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2177;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, CqlParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2179;
			this.paramName();
			this.state = 2180;
			this.dataType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public paramName(): ParamNameContext {
		let _localctx: ParamNameContext = new ParamNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, CqlParser.RULE_paramName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2182;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAdd(): KwAddContext {
		let _localctx: KwAddContext = new KwAddContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, CqlParser.RULE_kwAdd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2184;
			this.match(CqlParser.K_ADD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAggregate(): KwAggregateContext {
		let _localctx: KwAggregateContext = new KwAggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, CqlParser.RULE_kwAggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2186;
			this.match(CqlParser.K_AGGREGATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAll(): KwAllContext {
		let _localctx: KwAllContext = new KwAllContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, CqlParser.RULE_kwAll);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2188;
			this.match(CqlParser.K_ALL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAllFunctions(): KwAllFunctionsContext {
		let _localctx: KwAllFunctionsContext = new KwAllFunctionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, CqlParser.RULE_kwAllFunctions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2190;
			this.match(CqlParser.K_ALL_FUNCTIONS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAllKeyspaces(): KwAllKeyspacesContext {
		let _localctx: KwAllKeyspacesContext = new KwAllKeyspacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, CqlParser.RULE_kwAllKeyspaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2192;
			this.match(CqlParser.K_ALL_KEYSPACES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAllRoles(): KwAllRolesContext {
		let _localctx: KwAllRolesContext = new KwAllRolesContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, CqlParser.RULE_kwAllRoles);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2194;
			this.match(CqlParser.K_ALL_ROLES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAllPermissions(): KwAllPermissionsContext {
		let _localctx: KwAllPermissionsContext = new KwAllPermissionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, CqlParser.RULE_kwAllPermissions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2196;
			this.match(CqlParser.K_ALL);
			this.state = 2197;
			this.match(CqlParser.K_PERMISSIONS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAllow(): KwAllowContext {
		let _localctx: KwAllowContext = new KwAllowContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, CqlParser.RULE_kwAllow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2199;
			this.match(CqlParser.K_ALLOW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAllowFiltering(): KwAllowFilteringContext {
		let _localctx: KwAllowFilteringContext = new KwAllowFilteringContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, CqlParser.RULE_kwAllowFiltering);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2201;
			this.match(CqlParser.K_ALLOW);
			this.state = 2202;
			this.match(CqlParser.K_FILTERING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAlter(): KwAlterContext {
		let _localctx: KwAlterContext = new KwAlterContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, CqlParser.RULE_kwAlter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2204;
			this.match(CqlParser.K_ALTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAnd(): KwAndContext {
		let _localctx: KwAndContext = new KwAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, CqlParser.RULE_kwAnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2206;
			this.match(CqlParser.K_AND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwApply(): KwApplyContext {
		let _localctx: KwApplyContext = new KwApplyContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, CqlParser.RULE_kwApply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2208;
			this.match(CqlParser.K_APPLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAs(): KwAsContext {
		let _localctx: KwAsContext = new KwAsContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, CqlParser.RULE_kwAs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2210;
			this.match(CqlParser.K_AS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAsc(): KwAscContext {
		let _localctx: KwAscContext = new KwAscContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, CqlParser.RULE_kwAsc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2212;
			this.match(CqlParser.K_ASC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAuthorize(): KwAuthorizeContext {
		let _localctx: KwAuthorizeContext = new KwAuthorizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, CqlParser.RULE_kwAuthorize);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2214;
			this.match(CqlParser.K_AUTHORIZE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwBatch(): KwBatchContext {
		let _localctx: KwBatchContext = new KwBatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, CqlParser.RULE_kwBatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2216;
			this.match(CqlParser.K_BATCH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwBegin(): KwBeginContext {
		let _localctx: KwBeginContext = new KwBeginContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, CqlParser.RULE_kwBegin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2218;
			this.match(CqlParser.K_BEGIN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwBy(): KwByContext {
		let _localctx: KwByContext = new KwByContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, CqlParser.RULE_kwBy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2220;
			this.match(CqlParser.K_BY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwCalled(): KwCalledContext {
		let _localctx: KwCalledContext = new KwCalledContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, CqlParser.RULE_kwCalled);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2222;
			this.match(CqlParser.K_CALLED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwClustering(): KwClusteringContext {
		let _localctx: KwClusteringContext = new KwClusteringContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, CqlParser.RULE_kwClustering);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2224;
			this.match(CqlParser.K_CLUSTERING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwCompact(): KwCompactContext {
		let _localctx: KwCompactContext = new KwCompactContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, CqlParser.RULE_kwCompact);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2226;
			this.match(CqlParser.K_COMPACT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwContains(): KwContainsContext {
		let _localctx: KwContainsContext = new KwContainsContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, CqlParser.RULE_kwContains);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2228;
			this.match(CqlParser.K_CONTAINS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwContainsKey(): KwContainsKeyContext {
		let _localctx: KwContainsKeyContext = new KwContainsKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, CqlParser.RULE_kwContainsKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2230;
			this.match(CqlParser.K_CONTAINS);
			this.state = 2231;
			this.match(CqlParser.K_KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwCreate(): KwCreateContext {
		let _localctx: KwCreateContext = new KwCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, CqlParser.RULE_kwCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2233;
			this.match(CqlParser.K_CREATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDelete(): KwDeleteContext {
		let _localctx: KwDeleteContext = new KwDeleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, CqlParser.RULE_kwDelete);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2235;
			this.match(CqlParser.K_DELETE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDesc(): KwDescContext {
		let _localctx: KwDescContext = new KwDescContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, CqlParser.RULE_kwDesc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2237;
			this.match(CqlParser.K_DESC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDescibe(): KwDescibeContext {
		let _localctx: KwDescibeContext = new KwDescibeContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, CqlParser.RULE_kwDescibe);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2239;
			this.match(CqlParser.K_DESCRIBE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDistinct(): KwDistinctContext {
		let _localctx: KwDistinctContext = new KwDistinctContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, CqlParser.RULE_kwDistinct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2241;
			this.match(CqlParser.K_DISTINCT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDrop(): KwDropContext {
		let _localctx: KwDropContext = new KwDropContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, CqlParser.RULE_kwDrop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2243;
			this.match(CqlParser.K_DROP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDurableWrites(): KwDurableWritesContext {
		let _localctx: KwDurableWritesContext = new KwDurableWritesContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, CqlParser.RULE_kwDurableWrites);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2245;
			this.match(CqlParser.K_DURABLE_WRITES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwEntries(): KwEntriesContext {
		let _localctx: KwEntriesContext = new KwEntriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, CqlParser.RULE_kwEntries);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2247;
			this.match(CqlParser.K_ENTRIES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwExecute(): KwExecuteContext {
		let _localctx: KwExecuteContext = new KwExecuteContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, CqlParser.RULE_kwExecute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2249;
			this.match(CqlParser.K_EXECUTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwExists(): KwExistsContext {
		let _localctx: KwExistsContext = new KwExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, CqlParser.RULE_kwExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2251;
			this.match(CqlParser.K_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFiltering(): KwFilteringContext {
		let _localctx: KwFilteringContext = new KwFilteringContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, CqlParser.RULE_kwFiltering);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2253;
			this.match(CqlParser.K_FILTERING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFinalfunc(): KwFinalfuncContext {
		let _localctx: KwFinalfuncContext = new KwFinalfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, CqlParser.RULE_kwFinalfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2255;
			this.match(CqlParser.K_FINALFUNC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFrom(): KwFromContext {
		let _localctx: KwFromContext = new KwFromContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, CqlParser.RULE_kwFrom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2257;
			this.match(CqlParser.K_FROM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFull(): KwFullContext {
		let _localctx: KwFullContext = new KwFullContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, CqlParser.RULE_kwFull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2259;
			this.match(CqlParser.K_FULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFunction(): KwFunctionContext {
		let _localctx: KwFunctionContext = new KwFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, CqlParser.RULE_kwFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2261;
			this.match(CqlParser.K_FUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwGrant(): KwGrantContext {
		let _localctx: KwGrantContext = new KwGrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, CqlParser.RULE_kwGrant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2263;
			this.match(CqlParser.K_GRANT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwIf(): KwIfContext {
		let _localctx: KwIfContext = new KwIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, CqlParser.RULE_kwIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2265;
			this.match(CqlParser.K_IF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwIn(): KwInContext {
		let _localctx: KwInContext = new KwInContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, CqlParser.RULE_kwIn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2267;
			this.match(CqlParser.K_IN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwIndex(): KwIndexContext {
		let _localctx: KwIndexContext = new KwIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, CqlParser.RULE_kwIndex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2269;
			this.match(CqlParser.K_INDEX);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwInitcond(): KwInitcondContext {
		let _localctx: KwInitcondContext = new KwInitcondContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, CqlParser.RULE_kwInitcond);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2271;
			this.match(CqlParser.K_INITCOND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwInput(): KwInputContext {
		let _localctx: KwInputContext = new KwInputContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, CqlParser.RULE_kwInput);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2273;
			this.match(CqlParser.K_INPUT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwInsert(): KwInsertContext {
		let _localctx: KwInsertContext = new KwInsertContext(this._ctx, this.state);
		this.enterRule(_localctx, 436, CqlParser.RULE_kwInsert);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2275;
			this.match(CqlParser.K_INSERT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwInto(): KwIntoContext {
		let _localctx: KwIntoContext = new KwIntoContext(this._ctx, this.state);
		this.enterRule(_localctx, 438, CqlParser.RULE_kwInto);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2277;
			this.match(CqlParser.K_INTO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwIs(): KwIsContext {
		let _localctx: KwIsContext = new KwIsContext(this._ctx, this.state);
		this.enterRule(_localctx, 440, CqlParser.RULE_kwIs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2279;
			this.match(CqlParser.K_IS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwKey(): KwKeyContext {
		let _localctx: KwKeyContext = new KwKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 442, CqlParser.RULE_kwKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2281;
			this.match(CqlParser.K_KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwKeys(): KwKeysContext {
		let _localctx: KwKeysContext = new KwKeysContext(this._ctx, this.state);
		this.enterRule(_localctx, 444, CqlParser.RULE_kwKeys);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2283;
			this.match(CqlParser.K_KEYS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwKeyspace(): KwKeyspaceContext {
		let _localctx: KwKeyspaceContext = new KwKeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 446, CqlParser.RULE_kwKeyspace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2285;
			this.match(CqlParser.K_KEYSPACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwLanguage(): KwLanguageContext {
		let _localctx: KwLanguageContext = new KwLanguageContext(this._ctx, this.state);
		this.enterRule(_localctx, 448, CqlParser.RULE_kwLanguage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2287;
			this.match(CqlParser.K_LANGUAGE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwLimit(): KwLimitContext {
		let _localctx: KwLimitContext = new KwLimitContext(this._ctx, this.state);
		this.enterRule(_localctx, 450, CqlParser.RULE_kwLimit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2289;
			this.match(CqlParser.K_LIMIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwList(): KwListContext {
		let _localctx: KwListContext = new KwListContext(this._ctx, this.state);
		this.enterRule(_localctx, 452, CqlParser.RULE_kwList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2291;
			this.match(CqlParser.K_LIST);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwListRoles(): KwListRolesContext {
		let _localctx: KwListRolesContext = new KwListRolesContext(this._ctx, this.state);
		this.enterRule(_localctx, 454, CqlParser.RULE_kwListRoles);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2293;
			this.match(CqlParser.K_LIST_ROLES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwLogged(): KwLoggedContext {
		let _localctx: KwLoggedContext = new KwLoggedContext(this._ctx, this.state);
		this.enterRule(_localctx, 456, CqlParser.RULE_kwLogged);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2295;
			this.match(CqlParser.K_LOGGED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwLogin(): KwLoginContext {
		let _localctx: KwLoginContext = new KwLoginContext(this._ctx, this.state);
		this.enterRule(_localctx, 458, CqlParser.RULE_kwLogin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2297;
			this.match(CqlParser.K_LOGIN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwMaterialized(): KwMaterializedContext {
		let _localctx: KwMaterializedContext = new KwMaterializedContext(this._ctx, this.state);
		this.enterRule(_localctx, 460, CqlParser.RULE_kwMaterialized);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2299;
			this.match(CqlParser.K_MATERIALIZED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwModify(): KwModifyContext {
		let _localctx: KwModifyContext = new KwModifyContext(this._ctx, this.state);
		this.enterRule(_localctx, 462, CqlParser.RULE_kwModify);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2301;
			this.match(CqlParser.K_MODIFY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwNosuperuser(): KwNosuperuserContext {
		let _localctx: KwNosuperuserContext = new KwNosuperuserContext(this._ctx, this.state);
		this.enterRule(_localctx, 464, CqlParser.RULE_kwNosuperuser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2303;
			this.match(CqlParser.K_NOSUPERUSER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwNorecursive(): KwNorecursiveContext {
		let _localctx: KwNorecursiveContext = new KwNorecursiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 466, CqlParser.RULE_kwNorecursive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2305;
			this.match(CqlParser.K_NORECURSIVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwNot(): KwNotContext {
		let _localctx: KwNotContext = new KwNotContext(this._ctx, this.state);
		this.enterRule(_localctx, 468, CqlParser.RULE_kwNot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2307;
			this.match(CqlParser.K_NOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwNull(): KwNullContext {
		let _localctx: KwNullContext = new KwNullContext(this._ctx, this.state);
		this.enterRule(_localctx, 470, CqlParser.RULE_kwNull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2309;
			this.match(CqlParser.K_NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOf(): KwOfContext {
		let _localctx: KwOfContext = new KwOfContext(this._ctx, this.state);
		this.enterRule(_localctx, 472, CqlParser.RULE_kwOf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2311;
			this.match(CqlParser.K_OF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOn(): KwOnContext {
		let _localctx: KwOnContext = new KwOnContext(this._ctx, this.state);
		this.enterRule(_localctx, 474, CqlParser.RULE_kwOn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2313;
			this.match(CqlParser.K_ON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOptions(): KwOptionsContext {
		let _localctx: KwOptionsContext = new KwOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 476, CqlParser.RULE_kwOptions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2315;
			this.match(CqlParser.K_OPTIONS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOr(): KwOrContext {
		let _localctx: KwOrContext = new KwOrContext(this._ctx, this.state);
		this.enterRule(_localctx, 478, CqlParser.RULE_kwOr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2317;
			this.match(CqlParser.K_OR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOrder(): KwOrderContext {
		let _localctx: KwOrderContext = new KwOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 480, CqlParser.RULE_kwOrder);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2319;
			this.match(CqlParser.K_ORDER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOrderBy(): KwOrderByContext {
		let _localctx: KwOrderByContext = new KwOrderByContext(this._ctx, this.state);
		this.enterRule(_localctx, 482, CqlParser.RULE_kwOrderBy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2321;
			this.match(CqlParser.K_ORDER);
			this.state = 2322;
			this.match(CqlParser.K_BY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwPartition(): KwPartitionContext {
		let _localctx: KwPartitionContext = new KwPartitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 484, CqlParser.RULE_kwPartition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2324;
			this.match(CqlParser.K_PARTITION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwPassword(): KwPasswordContext {
		let _localctx: KwPasswordContext = new KwPasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 486, CqlParser.RULE_kwPassword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2326;
			this.match(CqlParser.K_PASSWORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwPermissions(): KwPermissionsContext {
		let _localctx: KwPermissionsContext = new KwPermissionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 488, CqlParser.RULE_kwPermissions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2328;
			this.match(CqlParser.K_PERMISSIONS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwPrimary(): KwPrimaryContext {
		let _localctx: KwPrimaryContext = new KwPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 490, CqlParser.RULE_kwPrimary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2330;
			this.match(CqlParser.K_PRIMARY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwRename(): KwRenameContext {
		let _localctx: KwRenameContext = new KwRenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 492, CqlParser.RULE_kwRename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2332;
			this.match(CqlParser.K_RENAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwReplace(): KwReplaceContext {
		let _localctx: KwReplaceContext = new KwReplaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 494, CqlParser.RULE_kwReplace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2334;
			this.match(CqlParser.K_REPLACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwReplication(): KwReplicationContext {
		let _localctx: KwReplicationContext = new KwReplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 496, CqlParser.RULE_kwReplication);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2336;
			this.match(CqlParser.K_REPLICATION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwReturns(): KwReturnsContext {
		let _localctx: KwReturnsContext = new KwReturnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 498, CqlParser.RULE_kwReturns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2338;
			this.match(CqlParser.K_RETURNS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwRole(): KwRoleContext {
		let _localctx: KwRoleContext = new KwRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 500, CqlParser.RULE_kwRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2340;
			this.match(CqlParser.K_ROLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwSelect(): KwSelectContext {
		let _localctx: KwSelectContext = new KwSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 502, CqlParser.RULE_kwSelect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2342;
			this.match(CqlParser.K_SELECT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwSet(): KwSetContext {
		let _localctx: KwSetContext = new KwSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 504, CqlParser.RULE_kwSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2344;
			this.match(CqlParser.K_SET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwSfunc(): KwSfuncContext {
		let _localctx: KwSfuncContext = new KwSfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 506, CqlParser.RULE_kwSfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2346;
			this.match(CqlParser.K_SFUNC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwStatic(): KwStaticContext {
		let _localctx: KwStaticContext = new KwStaticContext(this._ctx, this.state);
		this.enterRule(_localctx, 508, CqlParser.RULE_kwStatic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2348;
			this.match(CqlParser.K_STATIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwStorage(): KwStorageContext {
		let _localctx: KwStorageContext = new KwStorageContext(this._ctx, this.state);
		this.enterRule(_localctx, 510, CqlParser.RULE_kwStorage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2350;
			this.match(CqlParser.K_STORAGE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwStype(): KwStypeContext {
		let _localctx: KwStypeContext = new KwStypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 512, CqlParser.RULE_kwStype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2352;
			this.match(CqlParser.K_STYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwSuperuser(): KwSuperuserContext {
		let _localctx: KwSuperuserContext = new KwSuperuserContext(this._ctx, this.state);
		this.enterRule(_localctx, 514, CqlParser.RULE_kwSuperuser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2354;
			this.match(CqlParser.K_SUPERUSER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTable(): KwTableContext {
		let _localctx: KwTableContext = new KwTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 516, CqlParser.RULE_kwTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2356;
			this.match(CqlParser.K_TABLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTimestamp(): KwTimestampContext {
		let _localctx: KwTimestampContext = new KwTimestampContext(this._ctx, this.state);
		this.enterRule(_localctx, 518, CqlParser.RULE_kwTimestamp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2358;
			this.match(CqlParser.K_TIMESTAMP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTo(): KwToContext {
		let _localctx: KwToContext = new KwToContext(this._ctx, this.state);
		this.enterRule(_localctx, 520, CqlParser.RULE_kwTo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2360;
			this.match(CqlParser.K_TO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTrigger(): KwTriggerContext {
		let _localctx: KwTriggerContext = new KwTriggerContext(this._ctx, this.state);
		this.enterRule(_localctx, 522, CqlParser.RULE_kwTrigger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2362;
			this.match(CqlParser.K_TRIGGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTruncate(): KwTruncateContext {
		let _localctx: KwTruncateContext = new KwTruncateContext(this._ctx, this.state);
		this.enterRule(_localctx, 524, CqlParser.RULE_kwTruncate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2364;
			this.match(CqlParser.K_TRUNCATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTtl(): KwTtlContext {
		let _localctx: KwTtlContext = new KwTtlContext(this._ctx, this.state);
		this.enterRule(_localctx, 526, CqlParser.RULE_kwTtl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2366;
			this.match(CqlParser.K_TTL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwType(): KwTypeContext {
		let _localctx: KwTypeContext = new KwTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 528, CqlParser.RULE_kwType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2368;
			this.match(CqlParser.K_TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUnlogged(): KwUnloggedContext {
		let _localctx: KwUnloggedContext = new KwUnloggedContext(this._ctx, this.state);
		this.enterRule(_localctx, 530, CqlParser.RULE_kwUnlogged);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2370;
			this.match(CqlParser.K_UNLOGGED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUpdate(): KwUpdateContext {
		let _localctx: KwUpdateContext = new KwUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 532, CqlParser.RULE_kwUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2372;
			this.match(CqlParser.K_UPDATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUse(): KwUseContext {
		let _localctx: KwUseContext = new KwUseContext(this._ctx, this.state);
		this.enterRule(_localctx, 534, CqlParser.RULE_kwUse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2374;
			this.match(CqlParser.K_USE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUser(): KwUserContext {
		let _localctx: KwUserContext = new KwUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 536, CqlParser.RULE_kwUser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2376;
			this.match(CqlParser.K_USER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUsers(): KwUsersContext {
		let _localctx: KwUsersContext = new KwUsersContext(this._ctx, this.state);
		this.enterRule(_localctx, 538, CqlParser.RULE_kwUsers);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2378;
			this.match(CqlParser.K_USERS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUsing(): KwUsingContext {
		let _localctx: KwUsingContext = new KwUsingContext(this._ctx, this.state);
		this.enterRule(_localctx, 540, CqlParser.RULE_kwUsing);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2380;
			this.match(CqlParser.K_USING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwValues(): KwValuesContext {
		let _localctx: KwValuesContext = new KwValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 542, CqlParser.RULE_kwValues);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2382;
			this.match(CqlParser.K_VALUES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwView(): KwViewContext {
		let _localctx: KwViewContext = new KwViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 544, CqlParser.RULE_kwView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2384;
			this.match(CqlParser.K_VIEW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwWhere(): KwWhereContext {
		let _localctx: KwWhereContext = new KwWhereContext(this._ctx, this.state);
		this.enterRule(_localctx, 546, CqlParser.RULE_kwWhere);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2386;
			this.match(CqlParser.K_WHERE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwWith(): KwWithContext {
		let _localctx: KwWithContext = new KwWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 548, CqlParser.RULE_kwWith);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2388;
			this.match(CqlParser.K_WITH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwRevoke(): KwRevokeContext {
		let _localctx: KwRevokeContext = new KwRevokeContext(this._ctx, this.state);
		this.enterRule(_localctx, 550, CqlParser.RULE_kwRevoke);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2390;
			this.match(CqlParser.K_REVOKE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeAscii(): DataTypeAsciiContext {
		let _localctx: DataTypeAsciiContext = new DataTypeAsciiContext(this._ctx, this.state);
		this.enterRule(_localctx, 552, CqlParser.RULE_dataTypeAscii);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2392;
			this.match(CqlParser.K_ASCII);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeBigint(): DataTypeBigintContext {
		let _localctx: DataTypeBigintContext = new DataTypeBigintContext(this._ctx, this.state);
		this.enterRule(_localctx, 554, CqlParser.RULE_dataTypeBigint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2394;
			this.match(CqlParser.K_BIGINT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeBlob(): DataTypeBlobContext {
		let _localctx: DataTypeBlobContext = new DataTypeBlobContext(this._ctx, this.state);
		this.enterRule(_localctx, 556, CqlParser.RULE_dataTypeBlob);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2396;
			this.match(CqlParser.K_BLOB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeBoolean(): DataTypeBooleanContext {
		let _localctx: DataTypeBooleanContext = new DataTypeBooleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 558, CqlParser.RULE_dataTypeBoolean);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2398;
			this.match(CqlParser.K_BOOLEAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeCounter(): DataTypeCounterContext {
		let _localctx: DataTypeCounterContext = new DataTypeCounterContext(this._ctx, this.state);
		this.enterRule(_localctx, 560, CqlParser.RULE_dataTypeCounter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2400;
			this.match(CqlParser.K_COUNTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeDate(): DataTypeDateContext {
		let _localctx: DataTypeDateContext = new DataTypeDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 562, CqlParser.RULE_dataTypeDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2402;
			this.match(CqlParser.K_DATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeDecimal(): DataTypeDecimalContext {
		let _localctx: DataTypeDecimalContext = new DataTypeDecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 564, CqlParser.RULE_dataTypeDecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2404;
			this.match(CqlParser.K_DECIMAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeDouble(): DataTypeDoubleContext {
		let _localctx: DataTypeDoubleContext = new DataTypeDoubleContext(this._ctx, this.state);
		this.enterRule(_localctx, 566, CqlParser.RULE_dataTypeDouble);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2406;
			this.match(CqlParser.K_DOUBLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeFloat(): DataTypeFloatContext {
		let _localctx: DataTypeFloatContext = new DataTypeFloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 568, CqlParser.RULE_dataTypeFloat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2408;
			this.match(CqlParser.K_FLOAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeFrozen(): DataTypeFrozenContext {
		let _localctx: DataTypeFrozenContext = new DataTypeFrozenContext(this._ctx, this.state);
		this.enterRule(_localctx, 570, CqlParser.RULE_dataTypeFrozen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2410;
			this.match(CqlParser.K_FROZEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeInet(): DataTypeInetContext {
		let _localctx: DataTypeInetContext = new DataTypeInetContext(this._ctx, this.state);
		this.enterRule(_localctx, 572, CqlParser.RULE_dataTypeInet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2412;
			this.match(CqlParser.K_INET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeInt(): DataTypeIntContext {
		let _localctx: DataTypeIntContext = new DataTypeIntContext(this._ctx, this.state);
		this.enterRule(_localctx, 574, CqlParser.RULE_dataTypeInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2414;
			this.match(CqlParser.K_INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeList(): DataTypeListContext {
		let _localctx: DataTypeListContext = new DataTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 576, CqlParser.RULE_dataTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2416;
			this.match(CqlParser.K_LIST);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeMap(): DataTypeMapContext {
		let _localctx: DataTypeMapContext = new DataTypeMapContext(this._ctx, this.state);
		this.enterRule(_localctx, 578, CqlParser.RULE_dataTypeMap);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2418;
			this.match(CqlParser.K_MAP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeSmallInt(): DataTypeSmallIntContext {
		let _localctx: DataTypeSmallIntContext = new DataTypeSmallIntContext(this._ctx, this.state);
		this.enterRule(_localctx, 580, CqlParser.RULE_dataTypeSmallInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2420;
			this.match(CqlParser.K_SMALLINT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeSet(): DataTypeSetContext {
		let _localctx: DataTypeSetContext = new DataTypeSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 582, CqlParser.RULE_dataTypeSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2422;
			this.match(CqlParser.K_SET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeText(): DataTypeTextContext {
		let _localctx: DataTypeTextContext = new DataTypeTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 584, CqlParser.RULE_dataTypeText);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2424;
			this.match(CqlParser.K_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTime(): DataTypeTimeContext {
		let _localctx: DataTypeTimeContext = new DataTypeTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 586, CqlParser.RULE_dataTypeTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2426;
			this.match(CqlParser.K_TIME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTimeUuid(): DataTypeTimeUuidContext {
		let _localctx: DataTypeTimeUuidContext = new DataTypeTimeUuidContext(this._ctx, this.state);
		this.enterRule(_localctx, 588, CqlParser.RULE_dataTypeTimeUuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2428;
			this.match(CqlParser.K_TIMEUUID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTimestamp(): DataTypeTimestampContext {
		let _localctx: DataTypeTimestampContext = new DataTypeTimestampContext(this._ctx, this.state);
		this.enterRule(_localctx, 590, CqlParser.RULE_dataTypeTimestamp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2430;
			this.match(CqlParser.K_TIMESTAMP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTinyInt(): DataTypeTinyIntContext {
		let _localctx: DataTypeTinyIntContext = new DataTypeTinyIntContext(this._ctx, this.state);
		this.enterRule(_localctx, 592, CqlParser.RULE_dataTypeTinyInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2432;
			this.match(CqlParser.K_TINYINT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTuple(): DataTypeTupleContext {
		let _localctx: DataTypeTupleContext = new DataTypeTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 594, CqlParser.RULE_dataTypeTuple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2434;
			this.match(CqlParser.K_TUPLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeUserDefined(): DataTypeUserDefinedContext {
		let _localctx: DataTypeUserDefinedContext = new DataTypeUserDefinedContext(this._ctx, this.state);
		this.enterRule(_localctx, 596, CqlParser.RULE_dataTypeUserDefined);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2436;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeUuid(): DataTypeUuidContext {
		let _localctx: DataTypeUuidContext = new DataTypeUuidContext(this._ctx, this.state);
		this.enterRule(_localctx, 598, CqlParser.RULE_dataTypeUuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2438;
			this.match(CqlParser.K_UUID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeVarChar(): DataTypeVarCharContext {
		let _localctx: DataTypeVarCharContext = new DataTypeVarCharContext(this._ctx, this.state);
		this.enterRule(_localctx, 600, CqlParser.RULE_dataTypeVarChar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2440;
			this.match(CqlParser.K_VARCHAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeVarInt(): DataTypeVarIntContext {
		let _localctx: DataTypeVarIntContext = new DataTypeVarIntContext(this._ctx, this.state);
		this.enterRule(_localctx, 602, CqlParser.RULE_dataTypeVarInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2442;
			this.match(CqlParser.K_VARINT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeStructure(): DataTypeStructureContext {
		let _localctx: DataTypeStructureContext = new DataTypeStructureContext(this._ctx, this.state);
		this.enterRule(_localctx, 604, CqlParser.RULE_dataTypeStructure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2444;
			this.syntaxBracketLa();
			this.state = 2445;
			this.dataType();
			this.state = 2451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 2446;
				this.syntaxComma();
				this.state = 2447;
				this.dataType();
				}
				}
				this.state = 2453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2454;
			this.syntaxBracketRa();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public specialStar(): SpecialStarContext {
		let _localctx: SpecialStarContext = new SpecialStarContext(this._ctx, this.state);
		this.enterRule(_localctx, 606, CqlParser.RULE_specialStar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2456;
			this.match(CqlParser.STAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public specialDot(): SpecialDotContext {
		let _localctx: SpecialDotContext = new SpecialDotContext(this._ctx, this.state);
		this.enterRule(_localctx, 608, CqlParser.RULE_specialDot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2458;
			this.match(CqlParser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public eof(): EofContext {
		let _localctx: EofContext = new EofContext(this._ctx, this.state);
		this.enterRule(_localctx, 610, CqlParser.RULE_eof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2460;
			this.match(CqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketLr(): SyntaxBracketLrContext {
		let _localctx: SyntaxBracketLrContext = new SyntaxBracketLrContext(this._ctx, this.state);
		this.enterRule(_localctx, 612, CqlParser.RULE_syntaxBracketLr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2462;
			this.match(CqlParser.LR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketRr(): SyntaxBracketRrContext {
		let _localctx: SyntaxBracketRrContext = new SyntaxBracketRrContext(this._ctx, this.state);
		this.enterRule(_localctx, 614, CqlParser.RULE_syntaxBracketRr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2464;
			this.match(CqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketLc(): SyntaxBracketLcContext {
		let _localctx: SyntaxBracketLcContext = new SyntaxBracketLcContext(this._ctx, this.state);
		this.enterRule(_localctx, 616, CqlParser.RULE_syntaxBracketLc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2466;
			this.match(CqlParser.LC_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketRc(): SyntaxBracketRcContext {
		let _localctx: SyntaxBracketRcContext = new SyntaxBracketRcContext(this._ctx, this.state);
		this.enterRule(_localctx, 618, CqlParser.RULE_syntaxBracketRc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2468;
			this.match(CqlParser.RC_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketLa(): SyntaxBracketLaContext {
		let _localctx: SyntaxBracketLaContext = new SyntaxBracketLaContext(this._ctx, this.state);
		this.enterRule(_localctx, 620, CqlParser.RULE_syntaxBracketLa);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2470;
			this.match(CqlParser.OPERATOR_LT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketRa(): SyntaxBracketRaContext {
		let _localctx: SyntaxBracketRaContext = new SyntaxBracketRaContext(this._ctx, this.state);
		this.enterRule(_localctx, 622, CqlParser.RULE_syntaxBracketRa);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2472;
			this.match(CqlParser.OPERATOR_GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketLs(): SyntaxBracketLsContext {
		let _localctx: SyntaxBracketLsContext = new SyntaxBracketLsContext(this._ctx, this.state);
		this.enterRule(_localctx, 624, CqlParser.RULE_syntaxBracketLs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2474;
			this.match(CqlParser.LS_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketRs(): SyntaxBracketRsContext {
		let _localctx: SyntaxBracketRsContext = new SyntaxBracketRsContext(this._ctx, this.state);
		this.enterRule(_localctx, 626, CqlParser.RULE_syntaxBracketRs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2476;
			this.match(CqlParser.RS_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxComma(): SyntaxCommaContext {
		let _localctx: SyntaxCommaContext = new SyntaxCommaContext(this._ctx, this.state);
		this.enterRule(_localctx, 628, CqlParser.RULE_syntaxComma);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2478;
			this.match(CqlParser.COMMA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxColon(): SyntaxColonContext {
		let _localctx: SyntaxColonContext = new SyntaxColonContext(this._ctx, this.state);
		this.enterRule(_localctx, 630, CqlParser.RULE_syntaxColon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2480;
			this.match(CqlParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxPlus(): SyntaxPlusContext {
		let _localctx: SyntaxPlusContext = new SyntaxPlusContext(this._ctx, this.state);
		this.enterRule(_localctx, 632, CqlParser.RULE_syntaxPlus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2482;
			this.match(CqlParser.PLUS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxMinus(): SyntaxMinusContext {
		let _localctx: SyntaxMinusContext = new SyntaxMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 634, CqlParser.RULE_syntaxMinus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2484;
			this.match(CqlParser.MINUS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxSquote(): SyntaxSquoteContext {
		let _localctx: SyntaxSquoteContext = new SyntaxSquoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 636, CqlParser.RULE_syntaxSquote);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2486;
			this.match(CqlParser.SQUOTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxDquote(): SyntaxDquoteContext {
		let _localctx: SyntaxDquoteContext = new SyntaxDquoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 638, CqlParser.RULE_syntaxDquote);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2488;
			this.match(CqlParser.DQUOTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxOperatorEq(): SyntaxOperatorEqContext {
		let _localctx: SyntaxOperatorEqContext = new SyntaxOperatorEqContext(this._ctx, this.state);
		this.enterRule(_localctx, 640, CqlParser.RULE_syntaxOperatorEq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2490;
			this.match(CqlParser.OPERATOR_EQ);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxOperatorLt(): SyntaxOperatorLtContext {
		let _localctx: SyntaxOperatorLtContext = new SyntaxOperatorLtContext(this._ctx, this.state);
		this.enterRule(_localctx, 642, CqlParser.RULE_syntaxOperatorLt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2492;
			this.match(CqlParser.OPERATOR_LT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxOperatorGt(): SyntaxOperatorGtContext {
		let _localctx: SyntaxOperatorGtContext = new SyntaxOperatorGtContext(this._ctx, this.state);
		this.enterRule(_localctx, 644, CqlParser.RULE_syntaxOperatorGt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2494;
			this.match(CqlParser.OPERATOR_GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxOperatorLte(): SyntaxOperatorLteContext {
		let _localctx: SyntaxOperatorLteContext = new SyntaxOperatorLteContext(this._ctx, this.state);
		this.enterRule(_localctx, 646, CqlParser.RULE_syntaxOperatorLte);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2496;
			this.match(CqlParser.OPERATOR_LTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxOperatorGte(): SyntaxOperatorGteContext {
		let _localctx: SyntaxOperatorGteContext = new SyntaxOperatorGteContext(this._ctx, this.state);
		this.enterRule(_localctx, 648, CqlParser.RULE_syntaxOperatorGte);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2498;
			this.match(CqlParser.OPERATOR_GTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\xB2\u09C7\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12"+
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17"+
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C"+
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04"+
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t"+
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04"+
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t"+
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04"+
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04"+
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04"+
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81"+
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86"+
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B"+
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90"+
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95"+
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A"+
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F"+
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4"+
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9"+
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE"+
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3"+
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8"+
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD"+
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2"+
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7"+
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC"+
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1"+
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6"+
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB"+
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0"+
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5"+
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA"+
		"\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x04\xEF\t\xEF"+
		"\x04\xF0\t\xF0\x04\xF1\t\xF1\x04\xF2\t\xF2\x04\xF3\t\xF3\x04\xF4\t\xF4"+
		"\x04\xF5\t\xF5\x04\xF6\t\xF6\x04\xF7\t\xF7\x04\xF8\t\xF8\x04\xF9\t\xF9"+
		"\x04\xFA\t\xFA\x04\xFB\t\xFB\x04\xFC\t\xFC\x04\xFD\t\xFD\x04\xFE\t\xFE"+
		"\x04\xFF\t\xFF\x04\u0100\t\u0100\x04\u0101\t\u0101\x04\u0102\t\u0102\x04"+
		"\u0103\t\u0103\x04\u0104\t\u0104\x04\u0105\t\u0105\x04\u0106\t\u0106\x04"+
		"\u0107\t\u0107\x04\u0108\t\u0108\x04\u0109\t\u0109\x04\u010A\t\u010A\x04"+
		"\u010B\t\u010B\x04\u010C\t\u010C\x04\u010D\t\u010D\x04\u010E\t\u010E\x04"+
		"\u010F\t\u010F\x04\u0110\t\u0110\x04\u0111\t\u0111\x04\u0112\t\u0112\x04"+
		"\u0113\t\u0113\x04\u0114\t\u0114\x04\u0115\t\u0115\x04\u0116\t\u0116\x04"+
		"\u0117\t\u0117\x04\u0118\t\u0118\x04\u0119\t\u0119\x04\u011A\t\u011A\x04"+
		"\u011B\t\u011B\x04\u011C\t\u011C\x04\u011D\t\u011D\x04\u011E\t\u011E\x04"+
		"\u011F\t\u011F\x04\u0120\t\u0120\x04\u0121\t\u0121\x04\u0122\t\u0122\x04"+
		"\u0123\t\u0123\x04\u0124\t\u0124\x04\u0125\t\u0125\x04\u0126\t\u0126\x04"+
		"\u0127\t\u0127\x04\u0128\t\u0128\x04\u0129\t\u0129\x04\u012A\t\u012A\x04"+
		"\u012B\t\u012B\x04\u012C\t\u012C\x04\u012D\t\u012D\x04\u012E\t\u012E\x04"+
		"\u012F\t\u012F\x04\u0130\t\u0130\x04\u0131\t\u0131\x04\u0132\t\u0132\x04"+
		"\u0133\t\u0133\x04\u0134\t\u0134\x04\u0135\t\u0135\x04\u0136\t\u0136\x04"+
		"\u0137\t\u0137\x04\u0138\t\u0138\x04\u0139\t\u0139\x04\u013A\t\u013A\x04"+
		"\u013B\t\u013B\x04\u013C\t\u013C\x04\u013D\t\u013D\x04\u013E\t\u013E\x04"+
		"\u013F\t\u013F\x04\u0140\t\u0140\x04\u0141\t\u0141\x04\u0142\t\u0142\x04"+
		"\u0143\t\u0143\x04\u0144\t\u0144\x04\u0145\t\u0145\x04\u0146\t\u0146\x03"+
		"\x02\x05\x02\u028E\n\x02\x03\x02\x05\x02\u0291\n\x02\x03\x02\x03\x02\x03"+
		"\x03\x03\x03\x05\x03\u0297\n\x03\x03\x03\x03\x03\x03\x03\x07\x03\u029C"+
		"\n\x03\f\x03\x0E\x03\u029F\v\x03\x03\x03\x03\x03\x05\x03\u02A3\n\x03\x03"+
		"\x03\x05\x03\u02A6\n\x03\x03\x03\x05\x03\u02A9\n\x03\x03\x04\x03\x04\x03"+
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06\u02D5\n\x06\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03"+
		"\t\x05\t\u02E5\n\t\x03\t\x05\t\u02E8\n\t\x03\n\x03\n\x03\n\x03\n\x03\n"+
		"\x05\n\u02EF\n\n\x03\n\x03\n\x03\n\x05\n\u02F4\n\n\x03\v\x03\v\x03\v\x03"+
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x05\f\u02FF\n\f\x03\f\x03\f\x03\f\x03"+
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0309\n\f\x03\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0315\n\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x05\r\u031E\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05"+
		"\r\u0325\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u032A\n\x0E\x03\x0E\x03\x0E"+
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0332\n\x0E\x03\x0F\x03\x0F\x03"+
		"\x0F\x05\x0F\u0337\n\x0F\x03\x0F\x03\x0F\x05\x0F\u033B\n\x0F\x03\x10\x03"+
		"\x10\x03\x10\x05\x10\u0340\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0345"+
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11"+
		"\x03\x11\x03\x11\x03\x11\x07\x11\u0352\n\x11\f\x11\x0E\x11\u0355\v\x11"+
		"\x03\x12\x03\x12\x03\x12\x05\x12\u035A\n\x12\x03\x12\x03\x12\x03\x12\x05"+
		"\x12\u035F\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13"+
		"\x03\x13\x05\x13\u0369\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u036E\n\x13"+
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13"+
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u037F\n\x13\x03"+
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0386\n\x14\x03\x15\x03\x15"+
		"\x03\x15\x03\x15\x07\x15\u038C\n\x15\f\x15\x0E\x15\u038F\v\x15\x03\x16"+
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17"+
		"\x03\x17\x05\x17\u039C\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u03A1\n\x18"+
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18"+
		"\x03\x18\x05\x18\u03AD\n\x18\x03\x19\x03\x19\x05\x19\u03B1\n\x19\x03\x19"+
		"\x03\x19\x05\x19\u03B5\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u03BA\n\x19"+
		"\x03\x19\x03\x19\x03\x19\x05\x19\u03BF\n\x19\x03\x19\x03\x19\x03\x19\x03"+
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03"+
		"\x1B\x03\x1B\x03\x1B\x07\x1B\u03D0\n\x1B\f\x1B\x0E\x1B\u03D3\v\x1B\x03"+
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u03D9\n\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x03\x1C\x03\x1D\x03\x1D\x05\x1D\u03E1\n\x1D\x03\x1D\x03\x1D\x05\x1D\u03E5"+
		"\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u03EA\n\x1D\x03\x1D\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u03FD\n\x1E\x03\x1F"+
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0404\n\x1F\f\x1F\x0E\x1F\u0407"+
		"\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03"+
		"!\x07!\u0415\n!\f!\x0E!\u0418\v!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03"+
		"\"\x07\"\u0421\n\"\f\"\x0E\"\u0424\v\"\x03\"\x03\"\x03#\x03#\x03#\x03"+
		"$\x03$\x03$\x03$\x03$\x03$\x05$\u0431\n$\x03%\x03%\x03%\x03&\x03&\x05"+
		"&\u0438\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u043F\n\'\x03\'\x03\'\x03"+
		"\'\x03(\x03(\x03(\x05(\u0447\n(\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x07"+
		"*\u0450\n*\f*\x0E*\u0453\v*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03"+
		",\x03,\x03,\x07,\u0460\n,\f,\x0E,\u0463\v,\x03-\x03-\x03-\x03-\x03-\x03"+
		".\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0476\n"+
		"/\x030\x030\x030\x031\x031\x031\x031\x031\x032\x032\x032\x032\x033\x03"+
		"3\x033\x034\x034\x034\x034\x074\u048B\n4\f4\x0E4\u048E\v4\x035\x035\x03"+
		"5\x036\x036\x036\x036\x036\x036\x076\u0499\n6\f6\x0E6\u049C\v6\x037\x03"+
		"7\x037\x037\x057\u04A2\n7\x038\x038\x038\x038\x038\x078\u04A9\n8\f8\x0E"+
		"8\u04AC\v8\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03"+
		"9\x039\x039\x039\x039\x059\u04BE\n9\x03:\x03:\x03:\x03:\x03:\x03:\x05"+
		":\u04C6\n:\x03:\x03:\x03:\x03:\x05:\u04CC\n:\x03;\x03;\x03;\x05;\u04D1"+
		"\n;\x03;\x03;\x03<\x03<\x03<\x05<\u04D8\n<\x03<\x03<\x03<\x05<\u04DD\n"+
		"<\x03<\x03<\x03=\x03=\x03=\x03=\x05=\u04E5\n=\x03=\x03=\x03=\x05=\u04EA"+
		"\n=\x03=\x03=\x03>\x03>\x03>\x05>\u04F1\n>\x03>\x03>\x03>\x05>\u04F6\n"+
		">\x03>\x03>\x03?\x03?\x03?\x05?\u04FD\n?\x03?\x03?\x03?\x05?\u0502\n?"+
		"\x03?\x03?\x03@\x03@\x03@\x05@\u0509\n@\x03@\x03@\x03@\x03@\x03A\x03A"+
		"\x03A\x05A\u0512\nA\x03A\x03A\x03B\x03B\x03B\x05B\u0519\nB\x03B\x03B\x03"+
		"C\x03C\x03C\x05C\u0520\nC\x03C\x03C\x03D\x03D\x03D\x05D\u0527\nD\x03D"+
		"\x03D\x03D\x05D\u052C\nD\x03D\x03D\x03E\x03E\x03E\x05E\u0533\nE\x03E\x03"+
		"E\x03E\x05E\u0538\nE\x03F\x03F\x03F\x03F\x03F\x05F\u053F\nF\x03G\x03G"+
		"\x05G\u0543\nG\x03G\x05G\u0546\nG\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u054E"+
		"\nH\x03H\x03H\x03I\x03I\x03I\x03I\x07I\u0556\nI\fI\x0EI\u0559\vI\x03J"+
		"\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0563\nJ\x03K\x03K\x03L\x03L"+
		"\x05L\u0569\nL\x03M\x03M\x03M\x03M\x03M\x07M\u0570\nM\fM\x0EM\u0573\v"+
		"M\x03M\x03M\x03N\x03N\x03N\x03N\x03O\x03O\x03P\x03P\x05P\u057F\nP\x03"+
		"Q\x03Q\x03Q\x03Q\x07Q\u0585\nQ\fQ\x0EQ\u0588\vQ\x03Q\x03Q\x03Q\x05Q\u058D"+
		"\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u059B"+
		"\nR\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u05A3\nS\x03T\x03T\x03T\x03T\x03"+
		"T\x03T\x03U\x03U\x03U\x05U\u05AE\nU\x03V\x03V\x03W\x03W\x03W\x03W\x03"+
		"X\x03X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x07Y\u05C0\nY\fY\x0EY\u05C3"+
		"\vY\x03Z\x03Z\x03Z\x03Z\x07Z\u05C9\nZ\fZ\x0EZ\u05CC\vZ\x03[\x03[\x03\\"+
		"\x03\\\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05"+
		"^\u05DE\n^\x03_\x03_\x05_\u05E2\n_\x03_\x03_\x05_\u05E6\n_\x03`\x03`\x05"+
		"`\u05EA\n`\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03"+
		"a\x05a\u05F8\na\x03b\x03b\x03b\x03b\x07b\u05FE\nb\fb\x0Eb\u0601\vb\x03"+
		"c\x03c\x03c\x03c\x03c\x03c\x05c\u0609\nc\x03d\x03d\x03d\x03d\x03e\x03"+
		"e\x03e\x03f\x03f\x05f\u0614\nf\x03f\x03f\x03g\x03g\x03g\x05g\u061B\ng"+
		"\x03g\x05g\u061E\ng\x03g\x03g\x03g\x03h\x03h\x03h\x03h\x05h\u0627\nh\x03"+
		"i\x03i\x05i\u062B\ni\x03j\x03j\x03j\x03j\x03j\x05j\u0632\nj\x03k\x03k"+
		"\x03k\x03k\x03k\x05k\u0639\nk\x03l\x03l\x03l\x03l\x05l\u063F\nl\x03l\x03"+
		"l\x03m\x03m\x03m\x03m\x05m\u0647\nm\x03m\x03m\x03n\x03n\x03n\x03n\x05"+
		"n\u064F\nn\x03n\x03n\x03o\x03o\x05o\u0655\no\x03o\x03o\x05o\u0659\no\x03"+
		"o\x03o\x05o\u065D\no\x03o\x03o\x05o\u0661\no\x03p\x03p\x03p\x03p\x07p"+
		"\u0667\np\fp\x0Ep\u066A\vp\x03q\x03q\x03q\x03q\x03q\x05q\u0671\nq\x03"+
		"q\x03q\x05q\u0675\nq\x03r\x03r\x03r\x05r\u067A\nr\x03r\x03r\x03r\x05r"+
		"\u067F\nr\x03r\x03r\x05r\u0683\nr\x03s\x03s\x03s\x03t\x03t\x03t\x03t\x07"+
		"t\u068C\nt\ft\x0Et\u068F\vt\x03u\x03u\x03u\x03u\x03v\x03v\x03v\x03v\x03"+
		"v\x07v\u069A\nv\fv\x0Ev\u069D\vv\x03v\x05v\u06A0\nv\x03w\x03w\x03w\x03"+
		"w\x03w\x03w\x05w\u06A8\nw\x03w\x03w\x03w\x03w\x03w\x05w\u06AF\nw\x03w"+
		"\x03w\x03w\x03w\x03w\x03w\x03w\x05w\u06B8\nw\x03w\x03w\x03w\x03w\x03w"+
		"\x03w\x03w\x05w\u06C1\nw\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x05w\u06CA"+
		"\nw\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x05w\u06D3\nw\x03w\x03w\x03w\x03"+
		"w\x03w\x03w\x03w\x05w\u06DC\nw\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x05"+
		"w\u06E5\nw\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x05w\u06F1"+
		"\nw\x03x\x03x\x03x\x03x\x03x\x07x\u06F8\nx\fx\x0Ex\u06FB\vx\x03x\x03x"+
		"\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x07y\u0708\ny\fy\x0Ey\u070B"+
		"\vy\x03y\x03y\x03z\x03z\x03z\x03z\x03z\x07z\u0714\nz\fz\x0Ez\u0717\vz"+
		"\x03z\x03z\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x05{\u0722\n{\x03{\x05{"+
		"\u0725\n{\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|"+
		"\x03|\x03|\x03|\x03|\x05|\u0737\n|\x03}\x03}\x03}\x03~\x03~\x03~\x03\x7F"+
		"\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81"+
		"\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u074F\n\x82\x03"+
		"\x83\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u0756\n\x83\x03\x84\x03\x84"+
		"\x03\x84\x03\x84\x05\x84\u075C\n\x84\x07\x84\u075E\n\x84\f\x84\x0E\x84"+
		"\u0761\v\x84\x03\x84\x05\x84\u0764\n\x84\x03\x85\x03\x85\x03\x85\x03\x85"+
		"\x07\x85\u076A\n\x85\f\x85\x0E\x85\u076D\v\x85\x03\x86\x03\x86\x03\x86"+
		"\x03\x86\x05\x86\u0773\n\x86\x03\x86\x05\x86\u0776\n\x86\x03\x87\x03\x87"+
		"\x05\x87\u077A\n\x87\x03\x87\x03\x87\x03\x87\x05\x87\u077F\n\x87\x03\x87"+
		"\x05\x87\u0782\n\x87\x03\x87\x05\x87\u0785\n\x87\x03\x87\x05\x87\u0788"+
		"\n\x87\x03\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89"+
		"\u0791\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0799"+
		"\n\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D"+
		"\x07\x8D\u07A3\n\x8D\f\x8D\x0E\x8D\u07A6\v\x8D\x03\x8D\x05\x8D\u07A9\n"+
		"\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u07B0\n\x8E\x03\x8E"+
		"\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u07B6\n\x8E\x03\x8E\x05\x8E\u07B9\n\x8E"+
		"\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x07\x8F\u07BF\n\x8F\f\x8F\x0E\x8F\u07C2"+
		"\v\x8F\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90"+
		"\x05\x90\u07CC\n\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03"+
		"\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03"+
		"\x90\x03\x90\x03\x90\x03\x90\x05\x90\u07E1\n\x90\x03\x91\x03\x91\x03\x91"+
		"\x03\x91\x03\x91\x05\x91\u07E8\n\x91\x03\x92\x03\x92\x03\x92\x03\x92\x03"+
		"\x92\x03\x92\x03\x92\x05\x92\u07F1\n\x92\x03\x92\x05\x92\u07F4\n\x92\x03"+
		"\x93\x03\x93\x03\x93\x05\x93\u07F9\n\x93\x03\x93\x03\x93\x03\x93\x03\x93"+
		"\x05\x93\u07FF\n\x93\x07\x93\u0801\n\x93\f\x93\x0E\x93\u0804\v\x93\x03"+
		"\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u080C\n\x94\x03\x95"+
		"\x03\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03\x98\x03\x98\x03\x99\x03\x99"+
		"\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u081E\n\x9B\x03"+
		"\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x05\x9C\u0825\n\x9C\x03\x9D\x03\x9D"+
		"\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x05\x9D\u082D\n\x9D\x03\x9E\x03\x9E\x03"+
		"\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03"+
		"\x9E\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u083E\n\x9E\x03\x9F\x03\x9F\x05\x9F"+
		"\u0842\n\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03"+
		"\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x05\xA0\u0853"+
		"\n\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1"+
		"\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1"+
		"\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x05\xA1\u086A\n\xA1\x03\xA2\x03\xA2\x05"+
		"\xA2\u086E\n\xA2\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA6"+
		"\x03\xA6\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x03\xAA\x03\xAA"+
		"\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAE"+
		"\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x03\xB3"+
		"\x03\xB3\x03\xB4\x03\xB4\x03\xB5\x03\xB5\x03\xB6\x03\xB6\x03\xB6\x03\xB7"+
		"\x03\xB7\x03\xB8\x03\xB8\x03\xB8\x03\xB9\x03\xB9\x03\xBA\x03\xBA\x03\xBB"+
		"\x03\xBB\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x03\xBE\x03\xBE\x03\xBF\x03\xBF"+
		"\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC2\x03\xC2\x03\xC3\x03\xC3\x03\xC4"+
		"\x03\xC4\x03\xC5\x03\xC5\x03\xC6\x03\xC6\x03\xC6\x03\xC7\x03\xC7\x03\xC8"+
		"\x03\xC8\x03\xC9\x03\xC9\x03\xCA\x03\xCA\x03\xCB\x03\xCB\x03\xCC\x03\xCC"+
		"\x03\xCD\x03\xCD\x03\xCE\x03\xCE\x03\xCF\x03\xCF\x03\xD0\x03\xD0\x03\xD1"+
		"\x03\xD1\x03\xD2\x03\xD2\x03\xD3\x03\xD3\x03\xD4\x03\xD4\x03\xD5\x03\xD5"+
		"\x03\xD6\x03\xD6\x03\xD7\x03\xD7\x03\xD8\x03\xD8\x03\xD9\x03\xD9\x03\xDA"+
		"\x03\xDA\x03\xDB\x03\xDB\x03\xDC\x03\xDC\x03\xDD\x03\xDD\x03\xDE\x03\xDE"+
		"\x03\xDF\x03\xDF\x03\xE0\x03\xE0\x03\xE1\x03\xE1\x03\xE2\x03\xE2\x03\xE3"+
		"\x03\xE3\x03\xE4\x03\xE4\x03\xE5\x03\xE5\x03\xE6\x03\xE6\x03\xE7\x03\xE7"+
		"\x03\xE8\x03\xE8\x03\xE9\x03\xE9\x03\xEA\x03\xEA\x03\xEB\x03\xEB\x03\xEC"+
		"\x03\xEC\x03\xED\x03\xED\x03\xEE\x03\xEE\x03\xEF\x03\xEF\x03\xF0\x03\xF0"+
		"\x03\xF1\x03\xF1\x03\xF2\x03\xF2\x03\xF3\x03\xF3\x03\xF3\x03\xF4\x03\xF4"+
		"\x03\xF5\x03\xF5\x03\xF6\x03\xF6\x03\xF7\x03\xF7\x03\xF8\x03\xF8\x03\xF9"+
		"\x03\xF9\x03\xFA\x03\xFA\x03\xFB\x03\xFB\x03\xFC\x03\xFC\x03\xFD\x03\xFD"+
		"\x03\xFE\x03\xFE\x03\xFF\x03\xFF\x03\u0100\x03\u0100\x03\u0101\x03\u0101"+
		"\x03\u0102\x03\u0102\x03\u0103\x03\u0103\x03\u0104\x03\u0104\x03\u0105"+
		"\x03\u0105\x03\u0106\x03\u0106\x03\u0107\x03\u0107\x03\u0108\x03\u0108"+
		"\x03\u0109\x03\u0109\x03\u010A\x03\u010A\x03\u010B\x03\u010B\x03\u010C"+
		"\x03\u010C\x03\u010D\x03\u010D\x03\u010E\x03\u010E\x03\u010F\x03\u010F"+
		"\x03\u0110\x03\u0110\x03\u0111\x03\u0111\x03\u0112\x03\u0112\x03\u0113"+
		"\x03\u0113\x03\u0114\x03\u0114\x03\u0115";
	private static readonly _serializedATNSegment1: string =
		"\x03\u0115\x03\u0116\x03\u0116\x03\u0117\x03\u0117\x03\u0118\x03\u0118"+
		"\x03\u0119\x03\u0119\x03\u011A\x03\u011A\x03\u011B\x03\u011B\x03\u011C"+
		"\x03\u011C\x03\u011D\x03\u011D\x03\u011E\x03\u011E\x03\u011F\x03\u011F"+
		"\x03\u0120\x03\u0120\x03\u0121\x03\u0121\x03\u0122\x03\u0122\x03\u0123"+
		"\x03\u0123\x03\u0124\x03\u0124\x03\u0125\x03\u0125\x03\u0126\x03\u0126"+
		"\x03\u0127\x03\u0127\x03\u0128\x03\u0128\x03\u0129\x03\u0129\x03\u012A"+
		"\x03\u012A\x03\u012B\x03\u012B\x03\u012C\x03\u012C\x03\u012D\x03\u012D"+
		"\x03\u012E\x03\u012E\x03\u012F\x03\u012F\x03\u0130\x03\u0130\x03\u0130"+
		"\x03\u0130\x03\u0130\x07\u0130\u0994\n\u0130\f\u0130\x0E\u0130\u0997\v"+
		"\u0130\x03\u0130\x03\u0130\x03\u0131\x03\u0131\x03\u0132\x03\u0132\x03"+
		"\u0133\x03\u0133\x03\u0134\x03\u0134\x03\u0135\x03\u0135\x03\u0136\x03"+
		"\u0136\x03\u0137\x03\u0137\x03\u0138\x03\u0138\x03\u0139\x03\u0139\x03"+
		"\u013A\x03\u013A\x03\u013B\x03\u013B\x03\u013C\x03\u013C\x03\u013D\x03"+
		"\u013D\x03\u013E\x03\u013E\x03\u013F\x03\u013F\x03\u0140\x03\u0140\x03"+
		"\u0141\x03\u0141\x03\u0142\x03\u0142\x03\u0143\x03\u0143\x03\u0144\x03"+
		"\u0144\x03\u0145\x03\u0145\x03\u0146\x03\u0146\x03\u0146\x02\x02\x02\u0147"+
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14"+
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02"+
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02"+
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02"+
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02"+
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02"+
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02"+
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02"+
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02"+
		"\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02"+
		"\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02"+
		"\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02"+
		"\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A"+
		"\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118"+
		"\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126"+
		"\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134"+
		"\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142"+
		"\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02\u0150"+
		"\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02\u015E"+
		"\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02\u016C"+
		"\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02\u017A"+
		"\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02\u0188"+
		"\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194\x02\u0196"+
		"\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2\x02\u01A4"+
		"\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0\x02\u01B2"+
		"\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA\x02\u01BC\x02\u01BE\x02\u01C0"+
		"\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8\x02\u01CA\x02\u01CC\x02\u01CE"+
		"\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6\x02\u01D8\x02\u01DA\x02\u01DC"+
		"\x02\u01DE\x02\u01E0\x02\u01E2\x02\u01E4\x02\u01E6\x02\u01E8\x02\u01EA"+
		"\x02\u01EC\x02\u01EE\x02\u01F0\x02\u01F2\x02\u01F4\x02\u01F6\x02\u01F8"+
		"\x02\u01FA\x02\u01FC\x02\u01FE\x02\u0200\x02\u0202\x02\u0204\x02\u0206"+
		"\x02\u0208\x02\u020A\x02\u020C\x02\u020E\x02\u0210\x02\u0212\x02\u0214"+
		"\x02\u0216\x02\u0218\x02\u021A\x02\u021C\x02\u021E\x02\u0220\x02\u0222"+
		"\x02\u0224\x02\u0226\x02\u0228\x02\u022A\x02\u022C\x02\u022E\x02\u0230"+
		"\x02\u0232\x02\u0234\x02\u0236\x02\u0238\x02\u023A\x02\u023C\x02\u023E"+
		"\x02\u0240\x02\u0242\x02\u0244\x02\u0246\x02\u0248\x02\u024A\x02\u024C"+
		"\x02\u024E\x02\u0250\x02\u0252\x02\u0254\x02\u0256\x02\u0258\x02\u025A"+
		"\x02\u025C\x02\u025E\x02\u0260\x02\u0262\x02\u0264\x02\u0266\x02\u0268"+
		"\x02\u026A\x02\u026C\x02\u026E\x02\u0270\x02\u0272\x02\u0274\x02\u0276"+
		"\x02\u0278\x02\u027A\x02\u027C\x02\u027E\x02\u0280\x02\u0282\x02\u0284"+
		"\x02\u0286\x02\u0288\x02\u028A\x02\x02\x04\x03\x02\xA8\xA9\x04\x02<<~"+
		"~\u09BE\x02\u028D\x03\x02\x02\x02\x04\u029D\x03\x02\x02\x02\x06\u02AA"+
		"\x03\x02\x02\x02\b\u02AC\x03\x02\x02\x02\n\u02D4\x03\x02\x02\x02\f\u02D6"+
		"\x03\x02\x02\x02\x0E\u02DD\x03\x02\x02\x02\x10\u02E0\x03\x02\x02\x02\x12"+
		"\u02E9\x03\x02\x02\x02\x14\u02F5\x03\x02\x02\x02\x16\u0308\x03\x02\x02"+
		"\x02\x18\u0324\x03\x02\x02\x02\x1A\u0326\x03\x02\x02\x02\x1C\u0333\x03"+
		"\x02\x02\x02\x1E\u033C\x03\x02\x02\x02 \u034B\x03\x02\x02\x02\"\u0356"+
		"\x03\x02\x02\x02$\u0364\x03\x02\x02\x02&\u0380\x03\x02\x02\x02(\u0387"+
		"\x03\x02\x02\x02*\u0390\x03\x02\x02\x02,\u039B\x03\x02\x02\x02.\u039D"+
		"\x03\x02\x02\x020\u03AE\x03\x02\x02\x022\u03C9\x03\x02\x02\x024\u03CB"+
		"\x03\x02\x02\x026\u03D8\x03\x02\x02\x028\u03DE\x03\x02\x02\x02:\u03FC"+
		"\x03\x02\x02\x02<\u03FE\x03\x02\x02\x02>\u040A\x03\x02\x02\x02@\u040E"+
		"\x03\x02\x02\x02B\u041B\x03\x02\x02\x02D\u0427\x03\x02\x02\x02F\u042A"+
		"\x03\x02\x02\x02H\u0432\x03\x02\x02\x02J\u0437\x03\x02\x02\x02L\u0439"+
		"\x03\x02\x02\x02N\u0446\x03\x02\x02\x02P\u0448\x03\x02\x02\x02R\u044B"+
		"\x03\x02\x02\x02T\u0454\x03\x02\x02\x02V\u0458\x03\x02\x02\x02X\u0464"+
		"\x03\x02\x02\x02Z\u0469\x03\x02\x02\x02\\\u0475\x03\x02\x02\x02^\u0477"+
		"\x03\x02\x02\x02`\u047A\x03\x02\x02\x02b\u047F\x03\x02\x02\x02d\u0483"+
		"\x03\x02\x02\x02f\u0486\x03\x02\x02\x02h\u048F\x03\x02\x02\x02j\u0492"+
		"\x03\x02\x02\x02l\u049D\x03\x02\x02\x02n\u04A3\x03\x02\x02\x02p\u04BD"+
		"\x03\x02\x02\x02r\u04BF\x03\x02\x02\x02t\u04CD\x03\x02\x02\x02v\u04D4"+
		"\x03\x02\x02\x02x\u04E0\x03\x02\x02\x02z\u04ED\x03\x02\x02\x02|\u04F9"+
		"\x03\x02\x02\x02~\u0505\x03\x02\x02\x02\x80\u050E\x03\x02\x02\x02\x82"+
		"\u0515\x03\x02\x02\x02\x84\u051C\x03\x02\x02\x02\x86\u0523\x03\x02\x02"+
		"\x02\x88\u052F\x03\x02\x02\x02\x8A\u053E\x03\x02\x02\x02\x8C\u0540\x03"+
		"\x02\x02\x02\x8E\u0547\x03\x02\x02\x02\x90\u0551\x03\x02\x02\x02\x92\u0562"+
		"\x03\x02\x02\x02\x94\u0564\x03\x02\x02\x02\x96\u0568\x03\x02\x02\x02\x98"+
		"\u056A\x03\x02\x02\x02\x9A\u0576\x03\x02\x02\x02\x9C\u057A\x03\x02\x02"+
		"\x02\x9E\u057E\x03\x02\x02\x02\xA0\u0580\x03\x02\x02\x02\xA2\u059A\x03"+
		"\x02\x02\x02\xA4\u05A2\x03\x02\x02\x02\xA6\u05A4\x03\x02\x02\x02\xA8\u05AD"+
		"\x03\x02\x02\x02\xAA\u05AF\x03\x02\x02\x02\xAC\u05B1\x03\x02\x02\x02\xAE"+
		"\u05B5\x03\x02\x02\x02\xB0\u05BB\x03\x02\x02\x02\xB2\u05C4\x03\x02\x02"+
		"\x02\xB4\u05CD\x03\x02\x02\x02\xB6\u05CF\x03\x02\x02\x02\xB8\u05D1\x03"+
		"\x02\x02\x02\xBA\u05DD\x03\x02\x02\x02\xBC\u05DF\x03\x02\x02\x02\xBE\u05E9"+
		"\x03\x02\x02\x02\xC0\u05EB\x03\x02\x02\x02\xC2\u05F9\x03\x02\x02\x02\xC4"+
		"\u0608\x03\x02\x02\x02\xC6\u060A\x03\x02\x02\x02\xC8\u060E\x03\x02\x02"+
		"\x02\xCA\u0611\x03\x02\x02\x02\xCC\u0617\x03\x02\x02\x02\xCE\u0626\x03"+
		"\x02\x02\x02\xD0\u062A\x03\x02\x02\x02\xD2\u0631\x03\x02\x02\x02\xD4\u0638"+
		"\x03\x02\x02\x02\xD6\u063A\x03\x02\x02\x02\xD8\u0642\x03\x02\x02\x02\xDA"+
		"\u064A\x03\x02\x02\x02\xDC\u0652\x03\x02\x02\x02\xDE\u0662\x03\x02\x02"+
		"\x02\xE0\u0674\x03\x02\x02\x02\xE2\u0676\x03\x02\x02\x02\xE4\u0684\x03"+
		"\x02\x02\x02\xE6\u0687\x03\x02\x02\x02\xE8\u0690\x03\x02\x02\x02\xEA\u069F"+
		"\x03\x02\x02\x02\xEC\u06F0\x03\x02\x02\x02\xEE\u06F2\x03\x02\x02\x02\xF0"+
		"\u06FE\x03\x02\x02\x02\xF2\u070E\x03\x02\x02\x02\xF4\u071A\x03\x02\x02"+
		"\x02\xF6\u0736\x03\x02\x02\x02\xF8\u0738\x03\x02\x02\x02\xFA\u073B\x03"+
		"\x02\x02\x02\xFC\u073E\x03\x02\x02\x02\xFE\u0741\x03\x02\x02\x02\u0100"+
		"\u0745\x03\x02\x02\x02\u0102\u074E\x03\x02\x02\x02\u0104\u0755\x03\x02"+
		"\x02\x02\u0106\u0763\x03\x02\x02\x02\u0108\u0765\x03\x02\x02\x02\u010A"+
		"\u0775\x03\x02\x02\x02\u010C\u0777\x03\x02\x02\x02\u010E\u0789\x03\x02"+
		"\x02\x02\u0110\u0790\x03\x02\x02\x02\u0112\u0792\x03\x02\x02\x02\u0114"+
		"\u0795\x03\x02\x02\x02\u0116\u079A\x03\x02\x02\x02\u0118\u07A8\x03\x02"+
		"\x02\x02\u011A\u07B8\x03\x02\x02\x02\u011C\u07BA\x03\x02\x02\x02\u011E"+
		"\u07E0\x03\x02\x02\x02\u0120\u07E7\x03\x02\x02\x02\u0122\u07F3\x03\x02"+
		"\x02\x02\u0124\u07F8\x03\x02\x02\x02\u0126\u080B\x03\x02\x02\x02\u0128"+
		"\u080D\x03\x02\x02\x02\u012A\u080F\x03\x02\x02\x02\u012C\u0811\x03\x02"+
		"\x02\x02\u012E\u0813\x03\x02\x02\x02\u0130\u0815\x03\x02\x02\x02\u0132"+
		"\u0817\x03\x02\x02\x02\u0134\u081D\x03\x02\x02\x02\u0136\u0824\x03\x02"+
		"\x02\x02\u0138\u082C\x03\x02\x02\x02\u013A\u083D\x03\x02\x02\x02\u013C"+
		"\u0841\x03\x02\x02\x02\u013E\u0852\x03\x02\x02\x02\u0140\u0869\x03\x02"+
		"\x02\x02\u0142\u086D\x03\x02\x02\x02\u0144\u086F\x03\x02\x02\x02\u0146"+
		"\u0871\x03\x02\x02\x02\u0148\u0873\x03\x02\x02\x02\u014A\u0875\x03\x02"+
		"\x02\x02\u014C\u0877\x03\x02\x02\x02\u014E\u0879\x03\x02\x02\x02\u0150"+
		"\u087B\x03\x02\x02\x02\u0152\u087D\x03\x02\x02\x02\u0154\u087F\x03\x02"+
		"\x02\x02\u0156\u0881\x03\x02\x02\x02\u0158\u0883\x03\x02\x02\x02\u015A"+
		"\u0885\x03\x02\x02\x02\u015C\u0888\x03\x02\x02\x02\u015E\u088A\x03\x02"+
		"\x02\x02\u0160\u088C\x03\x02\x02\x02\u0162\u088E\x03\x02\x02\x02\u0164"+
		"\u0890\x03\x02\x02\x02\u0166\u0892\x03\x02\x02\x02\u0168\u0894\x03\x02"+
		"\x02\x02\u016A\u0896\x03\x02\x02\x02\u016C\u0899\x03\x02\x02\x02\u016E"+
		"\u089B\x03\x02\x02\x02\u0170\u089E\x03\x02\x02\x02\u0172\u08A0\x03\x02"+
		"\x02\x02\u0174\u08A2\x03\x02\x02\x02\u0176\u08A4\x03\x02\x02\x02\u0178"+
		"\u08A6\x03\x02\x02\x02\u017A\u08A8\x03\x02\x02\x02\u017C\u08AA\x03\x02"+
		"\x02\x02\u017E\u08AC\x03\x02\x02\x02\u0180\u08AE\x03\x02\x02\x02\u0182"+
		"\u08B0\x03\x02\x02\x02\u0184\u08B2\x03\x02\x02\x02\u0186\u08B4\x03\x02"+
		"\x02\x02\u0188\u08B6\x03\x02\x02\x02\u018A\u08B8\x03\x02\x02\x02\u018C"+
		"\u08BB\x03\x02\x02\x02\u018E\u08BD\x03\x02\x02\x02\u0190\u08BF\x03\x02"+
		"\x02\x02\u0192\u08C1\x03\x02\x02\x02\u0194\u08C3\x03\x02\x02\x02\u0196"+
		"\u08C5\x03\x02\x02\x02\u0198\u08C7\x03\x02\x02\x02\u019A\u08C9\x03\x02"+
		"\x02\x02\u019C\u08CB\x03\x02\x02\x02\u019E\u08CD\x03\x02\x02\x02\u01A0"+
		"\u08CF\x03\x02\x02\x02\u01A2\u08D1\x03\x02\x02\x02\u01A4\u08D3\x03\x02"+
		"\x02\x02\u01A6\u08D5\x03\x02\x02\x02\u01A8\u08D7\x03\x02\x02\x02\u01AA"+
		"\u08D9\x03\x02\x02\x02\u01AC\u08DB\x03\x02\x02\x02\u01AE\u08DD\x03\x02"+
		"\x02\x02\u01B0\u08DF\x03\x02\x02\x02\u01B2\u08E1\x03\x02\x02\x02\u01B4"+
		"\u08E3\x03\x02\x02\x02\u01B6\u08E5\x03\x02\x02\x02\u01B8\u08E7\x03\x02"+
		"\x02\x02\u01BA\u08E9\x03\x02\x02\x02\u01BC\u08EB\x03\x02\x02\x02\u01BE"+
		"\u08ED\x03\x02\x02\x02\u01C0\u08EF\x03\x02\x02\x02\u01C2\u08F1\x03\x02"+
		"\x02\x02\u01C4\u08F3\x03\x02\x02\x02\u01C6\u08F5\x03\x02\x02\x02\u01C8"+
		"\u08F7\x03\x02\x02\x02\u01CA\u08F9\x03\x02\x02\x02\u01CC\u08FB\x03\x02"+
		"\x02\x02\u01CE\u08FD\x03\x02\x02\x02\u01D0\u08FF\x03\x02\x02\x02\u01D2"+
		"\u0901\x03\x02\x02\x02\u01D4\u0903\x03\x02\x02\x02\u01D6\u0905\x03\x02"+
		"\x02\x02\u01D8\u0907\x03\x02\x02\x02\u01DA\u0909\x03\x02\x02\x02\u01DC"+
		"\u090B\x03\x02\x02\x02\u01DE\u090D\x03\x02\x02\x02\u01E0\u090F\x03\x02"+
		"\x02\x02\u01E2\u0911\x03\x02\x02\x02\u01E4\u0913\x03\x02\x02\x02\u01E6"+
		"\u0916\x03\x02\x02\x02\u01E8\u0918\x03\x02\x02\x02\u01EA\u091A\x03\x02"+
		"\x02\x02\u01EC\u091C\x03\x02\x02\x02\u01EE\u091E\x03\x02\x02\x02\u01F0"+
		"\u0920\x03\x02\x02\x02\u01F2\u0922\x03\x02\x02\x02\u01F4\u0924\x03\x02"+
		"\x02\x02\u01F6\u0926\x03\x02\x02\x02\u01F8\u0928\x03\x02\x02\x02\u01FA"+
		"\u092A\x03\x02\x02\x02\u01FC\u092C\x03\x02\x02\x02\u01FE\u092E\x03\x02"+
		"\x02\x02\u0200\u0930\x03\x02\x02\x02\u0202\u0932\x03\x02\x02\x02\u0204"+
		"\u0934\x03\x02\x02\x02\u0206\u0936\x03\x02\x02\x02\u0208\u0938\x03\x02"+
		"\x02\x02\u020A\u093A\x03\x02\x02\x02\u020C\u093C\x03\x02\x02\x02\u020E"+
		"\u093E\x03\x02\x02\x02\u0210\u0940\x03\x02\x02\x02\u0212\u0942\x03\x02"+
		"\x02\x02\u0214\u0944\x03\x02\x02\x02\u0216\u0946\x03\x02\x02\x02\u0218"+
		"\u0948\x03\x02\x02\x02\u021A\u094A\x03\x02\x02\x02\u021C\u094C\x03\x02"+
		"\x02\x02\u021E\u094E\x03\x02\x02\x02\u0220\u0950\x03\x02\x02\x02\u0222"+
		"\u0952\x03\x02\x02\x02\u0224\u0954\x03\x02\x02\x02\u0226\u0956\x03\x02"+
		"\x02\x02\u0228\u0958\x03\x02\x02\x02\u022A\u095A\x03\x02\x02\x02\u022C"+
		"\u095C\x03\x02\x02\x02\u022E\u095E\x03\x02\x02\x02\u0230\u0960\x03\x02"+
		"\x02\x02\u0232\u0962\x03\x02\x02\x02\u0234\u0964\x03\x02\x02\x02\u0236"+
		"\u0966\x03\x02\x02\x02\u0238\u0968\x03\x02\x02\x02\u023A\u096A\x03\x02"+
		"\x02\x02\u023C\u096C\x03\x02\x02\x02\u023E\u096E\x03\x02\x02\x02\u0240"+
		"\u0970\x03\x02\x02\x02\u0242\u0972\x03\x02\x02\x02\u0244\u0974\x03\x02"+
		"\x02\x02\u0246\u0976\x03\x02\x02\x02\u0248\u0978\x03\x02\x02\x02\u024A"+
		"\u097A\x03\x02\x02\x02\u024C\u097C\x03\x02\x02\x02\u024E\u097E\x03\x02"+
		"\x02\x02\u0250\u0980\x03\x02\x02\x02\u0252\u0982\x03\x02\x02\x02\u0254"+
		"\u0984\x03\x02\x02\x02\u0256\u0986\x03\x02\x02\x02\u0258\u0988\x03\x02"+
		"\x02\x02\u025A\u098A\x03\x02\x02\x02\u025C\u098C\x03\x02\x02\x02\u025E"+
		"\u098E\x03\x02\x02\x02\u0260\u099A\x03\x02\x02\x02\u0262\u099C\x03\x02"+
		"\x02\x02\u0264\u099E\x03\x02\x02\x02\u0266\u09A0\x03\x02\x02\x02\u0268"+
		"\u09A2\x03\x02\x02\x02\u026A\u09A4\x03\x02\x02\x02\u026C\u09A6\x03\x02"+
		"\x02\x02\u026E\u09A8\x03\x02\x02\x02\u0270\u09AA\x03\x02\x02\x02\u0272"+
		"\u09AC\x03\x02\x02\x02\u0274\u09AE\x03\x02\x02\x02\u0276\u09B0\x03\x02"+
		"\x02\x02\u0278\u09B2\x03\x02\x02\x02\u027A\u09B4\x03\x02\x02\x02\u027C"+
		"\u09B6\x03\x02\x02\x02\u027E\u09B8\x03\x02\x02\x02\u0280\u09BA\x03\x02"+
		"\x02\x02\u0282\u09BC\x03\x02\x02\x02\u0284\u09BE\x03\x02\x02\x02\u0286"+
		"\u09C0\x03\x02\x02\x02\u0288\u09C2\x03\x02\x02\x02\u028A\u09C4\x03\x02"+
		"\x02\x02\u028C\u028E\x05\x04\x03\x02\u028D\u028C\x03\x02\x02\x02\u028D"+
		"\u028E\x03\x02\x02\x02\u028E\u0290\x03\x02\x02\x02\u028F\u0291\x07\x17"+
		"\x02\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291"+
		"\u0292\x03\x02\x02\x02\u0292\u0293\x05\u0264\u0133\x02\u0293\x03\x03\x02"+
		"\x02\x02\u0294\u0296\x05\n\x06\x02\u0295\u0297\x07\x17\x02\x02\u0296\u0295"+
		"\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02"+
		"\u0298\u0299\x05\x06\x04\x02\u0299\u029C\x03\x02\x02\x02\u029A\u029C\x05"+
		"\b\x05\x02\u029B\u0294\x03\x02\x02\x02\u029B\u029A\x03\x02\x02\x02\u029C"+
		"\u029F\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029E\x03\x02"+
		"\x02\x02\u029E\u02A8\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u02A0"+
		"\u02A5\x05\n\x06\x02\u02A1\u02A3\x07\x17\x02\x02\u02A2\u02A1\x03\x02\x02"+
		"\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A6"+
		"\x05\x06\x04\x02\u02A5\u02A2\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02"+
		"\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A9\x05\b\x05\x02\u02A8\u02A0\x03"+
		"\x02\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\x05\x03\x02\x02\x02\u02AA"+
		"\u02AB\x07\n\x02\x02\u02AB\x07\x03\x02\x02\x02\u02AC\u02AD\x05\x06\x04"+
		"\x02\u02AD\t\x03\x02\x02\x02\u02AE\u02D5\x05\xBA^\x02\u02AF\u02D5\x05"+
		"\xC0a\x02\u02B0\u02D5\x05r:\x02\u02B1\u02D5\x05l7\x02\u02B2\u02D5\x05"+
		"Z.\x02\u02B3\u02D5\x05L\'\x02\u02B4\u02D5\x05F$\x02\u02B5\u02D5\x05\xB8"+
		"]\x02\u02B6\u02D5\x058\x1D\x02\u02B7\u02D5\x050\x19\x02\u02B8\u02D5\x05"+
		"\xCCg\x02\u02B9\u02D5\x05.\x18\x02\u02BA\u02D5\x05$\x13\x02\u02BB\u02D5"+
		"\x05\x1C\x0F\x02\u02BC\u02D5\x05\x88E\x02\u02BD\u02D5\x05\"\x12\x02\u02BE"+
		"\u02D5\x05\x1E\x10\x02\u02BF\u02D5\x05\x1A\x0E\x02\u02C0\u02D5\x05\xDC"+
		"o\x02\u02C1\u02D5\x05z>\x02\u02C2\u02D5\x05|?\x02\u02C3\u02D5\x05\x86"+
		"D\x02\u02C4\u02D5\x05\x84C\x02\u02C5\u02D5\x05x=\x02\u02C6\u02D5\x05\x80"+
		"A\x02\u02C7\u02D5\x05\x82B\x02\u02C8\u02D5\x05~@\x02\u02C9\u02D5\x05v"+
		"<\x02\u02CA\u02D5\x05t;\x02\u02CB\u02D5\x05\x14\v\x02\u02CC\u02D5\x05"+
		"\xF4{\x02\u02CD\u02D5\x05\x12\n\x02\u02CE\u02D5\x05\x10\t\x02\u02CF\u02D5"+
		"\x05\f\x07\x02\u02D0\u02D5\x05\u010C\x87\x02\u02D1\u02D5\x05\xCAf\x02"+
		"\u02D2\u02D5\x05\xE2r\x02\u02D3\u02D5\x05\xC8e\x02\u02D4\u02AE\x03\x02"+
		"\x02\x02\u02D4\u02AF\x03\x02\x02\x02\u02D4\u02B0\x03\x02\x02\x02\u02D4"+
		"\u02B1\x03\x02\x02\x02\u02D4\u02B2\x03\x02\x02\x02\u02D4\u02B3\x03\x02"+
		"\x02\x02\u02D4\u02B4\x03\x02\x02\x02\u02D4\u02B5\x03\x02\x02\x02\u02D4"+
		"\u02B6\x03\x02\x02\x02\u02D4\u02B7\x03\x02\x02\x02\u02D4\u02B8\x03\x02"+
		"\x02\x02\u02D4\u02B9\x03\x02\x02\x02\u02D4\u02BA\x03\x02\x02\x02\u02D4"+
		"\u02BB\x03\x02\x02\x02\u02D4\u02BC\x03\x02\x02\x02\u02D4\u02BD\x03\x02"+
		"\x02\x02\u02D4\u02BE\x03\x02\x02\x02\u02D4\u02BF\x03\x02\x02\x02\u02D4"+
		"\u02C0\x03\x02\x02\x02\u02D4\u02C1\x03\x02\x02\x02\u02D4\u02C2\x03\x02"+
		"\x02\x02\u02D4\u02C3\x03\x02\x02\x02\u02D4\u02C4\x03\x02\x02\x02\u02D4"+
		"\u02C5\x03\x02\x02\x02\u02D4\u02C6\x03\x02\x02\x02\u02D4\u02C7\x03\x02"+
		"\x02\x02\u02D4\u02C8\x03\x02\x02\x02\u02D4\u02C9\x03\x02\x02\x02\u02D4"+
		"\u02CA\x03\x02\x02\x02\u02D4\u02CB\x03\x02\x02\x02\u02D4\u02CC\x03\x02"+
		"\x02\x02\u02D4\u02CD\x03\x02\x02\x02\u02D4\u02CE\x03\x02\x02\x02\u02D4"+
		"\u02CF\x03\x02\x02\x02\u02D4\u02D0\x03\x02\x02\x02\u02D4\u02D1\x03\x02"+
		"\x02\x02\u02D4\u02D2\x03\x02\x02\x02\u02D4\u02D3\x03\x02\x02\x02\u02D5"+
		"\v\x03\x02\x02\x02\u02D6\u02D7\x05\u0228\u0115\x02\u02D7\u02D8\x05\x16"+
		"\f\x02\u02D8\u02D9\x05\u01DC\xEF\x02\u02D9\u02DA\x05\x18\r\x02\u02DA\u02DB"+
		"\x05\u01A4\xD3\x02\u02DB\u02DC\x05\u0144\xA3\x02\u02DC\r\x03\x02\x02\x02"+
		"\u02DD\u02DE\x05\u01C6\xE4\x02\u02DE\u02DF\x05\u021C\u010F\x02\u02DF\x0F"+
		"\x03\x02\x02\x02\u02E0\u02E4\x05\u01C8\xE5\x02\u02E1\u02E2\x05\u01DA\xEE"+
		"\x02\u02E2\u02E3\x05\u0144\xA3\x02\u02E3\u02E5\x03\x02\x02\x02\u02E4\u02E1"+
		"\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E7\x03\x02\x02\x02"+
		"\u02E6\u02E8\x05\u01D4\xEB\x02\u02E7\u02E6\x03\x02\x02\x02\u02E7\u02E8"+
		"\x03\x02\x02\x02\u02E8\x11\x03\x02\x02\x02\u02E9\u02EA\x05\u01C6\xE4\x02"+
		"\u02EA\u02EE\x05\x16\f\x02\u02EB\u02EC\x05\u01DC\xEF\x02\u02EC\u02ED\x05"+
		"\x18\r\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE\u02EB\x03\x02\x02\x02\u02EE"+
		"\u02EF\x03\x02\x02\x02\u02EF\u02F3\x03\x02\x02\x02\u02F0\u02F1\x05\u01DA"+
		"\xEE\x02\u02F1\u02F2\x05\u0144\xA3\x02\u02F2\u02F4\x03\x02\x02\x02\u02F3"+
		"\u02F0\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\x13\x03\x02\x02"+
		"\x02\u02F5\u02F6\x05\u01AA\xD6\x02\u02F6\u02F7\x05\x16\f\x02\u02F7\u02F8"+
		"\x05\u01DC\xEF\x02\u02F8\u02F9\x05\x18\r\x02\u02F9\u02FA\x05\u020A\u0106"+
		"\x02\u02FA\u02FB\x05\u0144\xA3\x02\u02FB\x15\x03\x02\x02\x02\u02FC\u02FF"+
		"\x05\u0162\xB2\x02\u02FD\u02FF\x05\u016A\xB6\x02\u02FE\u02FC\x03\x02\x02"+
		"\x02\u02FE\u02FD\x03\x02\x02\x02\u02FF\u0309\x03\x02\x02\x02\u0300\u0309"+
		"\x05\u0170\xB9\x02\u0301\u0309\x05\u017A\xBE\x02\u0302\u0309\x05\u0192"+
		"\xCA\x02\u0303\u0309\x05\u019C\xCF\x02\u0304\u0309\x05\u018C\xC7\x02\u0305"+
		"\u0309\x05\u0196\xCC\x02\u0306\u0309\x05\u01D0\xE9\x02\u0307\u0309\x05"+
		"\u01F8\xFD\x02\u0308\u02FE\x03\x02\x02\x02\u0308\u0300\x03\x02\x02\x02"+
		"\u0308\u0301\x03\x02\x02\x02\u0308\u0302\x03\x02\x02\x02\u0308\u0303\x03"+
		"\x02\x02\x02\u0308\u0304\x03\x02\x02\x02\u0308\u0305\x03\x02\x02\x02\u0308"+
		"\u0306\x03\x02\x02\x02\u0308\u0307\x03\x02\x02\x02\u0309\x17\x03\x02\x02"+
		"\x02\u030A\u0325\x05\u0164\xB3\x02\u030B\u030C\x05\u0164\xB3\x02\u030C"+
		"\u030D\x05\u01AE\xD8\x02\u030D\u030E\x05\u01C0\xE1\x02\u030E\u030F\x05"+
		"\u0134\x9B\x02\u030F\u0325\x03\x02\x02\x02\u0310\u0314\x05\u01A8\xD5\x02"+
		"\u0311\u0312\x05\u0134\x9B\x02\u0312\u0313\x07\x12\x02\x02\u0313\u0315"+
		"\x03\x02\x02\x02\u0314\u0311\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02"+
		"\u0315\u0316\x03\x02\x02\x02\u0316\u0317\x05\u0150\xA9\x02\u0317\u0325"+
		"\x03\x02\x02\x02\u0318\u0325\x05\u0166\xB4\x02\u0319\u031A\x05\u01C0\xE1"+
		"\x02\u031A\u031B\x05\u0134\x9B\x02\u031B\u0325\x03\x02\x02\x02\u031C\u031E"+
		"\x05\u0206\u0104\x02\u031D\u031C\x03\x02\x02\x02\u031D\u031E\x03\x02\x02"+
		"\x02\u031E\u031F\x03\x02\x02\x02\u031F\u0325\x05\u0138\x9D\x02\u0320\u0325"+
		"\x05\u0168\xB5\x02\u0321\u0322\x05\u01F6\xFC\x02\u0322\u0323\x05\u0144"+
		"\xA3\x02\u0323\u0325\x03\x02\x02\x02\u0324\u030A\x03\x02\x02\x02\u0324"+
		"\u030B\x03\x02\x02\x02\u0324\u0310\x03\x02\x02\x02\u0324\u0318\x03\x02"+
		"\x02\x02\u0324\u0319\x03\x02\x02\x02\u0324\u031D\x03\x02\x02\x02\u0324"+
		"\u0320\x03\x02\x02\x02\u0324\u0321\x03\x02\x02\x02\u0325\x19\x03\x02\x02"+
		"\x02\u0326\u0327\x05\u018C\xC7\x02\u0327\u0329\x05\u021A\u010E\x02\u0328"+
		"\u032A\x05\xFE\x80\x02\u0329\u0328\x03\x02\x02\x02\u0329\u032A\x03\x02"+
		"\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032C\x05\u0154\xAB\x02\u032C"+
		"\u032D\x05\u0226\u0114\x02\u032D\u032E\x05\u01E8\xF5\x02\u032E\u0331\x05"+
		"\u012E\x98\x02\u032F\u0332\x05\u0204\u0103\x02\u0330\u0332\x05\u01D2\xEA"+
		"\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0330\x03\x02\x02\x02\u0331\u0332"+
		"\x03\x02\x02\x02\u0332\x1B\x03\x02\x02\x02\u0333\u0334\x05\u018C\xC7\x02"+
		"\u0334\u0336\x05\u01F6\xFC\x02\u0335\u0337\x05\xFE\x80\x02\u0336\u0335"+
		"\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02"+
		"\u0338\u033A\x05\u0144\xA3\x02\u0339\u033B\x05n8\x02\u033A\u0339\x03\x02"+
		"\x02\x02\u033A\u033B\x03\x02\x02\x02\u033B\x1D\x03\x02\x02\x02\u033C\u033D"+
		"\x05\u018C\xC7\x02\u033D\u033F\x05\u0212\u010A\x02\u033E\u0340\x05\xFE"+
		"\x80\x02\u033F\u033E\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340"+
		"\u0344\x03\x02\x02\x02\u0341\u0342\x05\u0134\x9B\x02\u0342\u0343\x07\x12"+
		"\x02\x02\u0343\u0345\x03\x02\x02\x02\u0344\u0341\x03\x02\x02\x02\u0344"+
		"\u0345\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0347\x05\u014C"+
		"\xA7\x02\u0347\u0348\x05\u0266\u0134\x02\u0348\u0349\x05 \x11\x02\u0349"+
		"\u034A\x05\u0268\u0135\x02\u034A\x1F\x03\x02\x02\x02\u034B\u034C\x05\u013A"+
		"\x9E\x02\u034C\u0353\x05\u013C\x9F\x02\u034D\u034E\x05\u0276\u013C\x02"+
		"\u034E\u034F\x05\u013A\x9E\x02\u034F\u0350\x05\u013C\x9F\x02\u0350\u0352"+
		"\x03\x02\x02\x02\u0351\u034D\x03\x02\x02\x02\u0352\u0355\x03\x02\x02\x02"+
		"\u0353\u0351\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354!\x03\x02"+
		"\x02\x02\u0355\u0353\x03\x02\x02\x02\u0356\u0357\x05\u018C\xC7\x02\u0357"+
		"\u0359\x05\u020C\u0107\x02\u0358\u035A\x05\xFE\x80\x02\u0359\u0358\x03"+
		"\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035E\x03\x02\x02\x02\u035B"+
		"\u035C\x05\u0134\x9B\x02\u035C\u035D\x07\x12\x02\x02\u035D\u035F\x03\x02"+
		"\x02\x02\u035E\u035B\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F"+
		"\u0360\x03\x02\x02\x02\u0360\u0361\x05\u0146\xA4\x02\u0361\u0362\x05\u021E"+
		"\u0110\x02\u0362\u0363\x05\u0148\xA5\x02\u0363#\x03\x02\x02\x02\u0364"+
		"\u0365\x05\u018C\xC7\x02\u0365\u0366\x05\u01CE\xE8\x02\u0366\u0368\x05"+
		"\u0222\u0112\x02\u0367\u0369\x05\xFE\x80\x02\u0368\u0367\x03\x02\x02\x02"+
		"\u0368\u0369\x03\x02\x02\x02\u0369\u036D\x03\x02\x02\x02\u036A\u036B\x05"+
		"\u0134\x9B\x02\u036B\u036C\x07\x12\x02\x02\u036C\u036E\x03\x02\x02\x02"+
		"\u036D\u036A\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u036F\x03"+
		"\x02\x02\x02\u036F\u0370\x05\u014A\xA6\x02\u0370\u0371\x05\u0176\xBC\x02"+
		"\u0371\u0372\x05\u01F8\xFD\x02\u0372\u0373\x05\u0106\x84\x02\u0373\u0374"+
		"\x05\u01A4\xD3\x02\u0374\u0375\x05\u0138\x9D\x02\u0375\u0376\x05&\x14"+
		"\x02\u0376\u0377\x05\u01EC\xF7\x02\u0377\u0378\x05\u01BC\xDF\x02\u0378"+
		"\u0379\x05\u0266\u0134\x02\u0379\u037A\x05\u0106\x84\x02\u037A\u037E\x05"+
		"\u0268\u0135\x02\u037B\u037C\x05\u0226\u0114\x02\u037C\u037D\x05,\x17"+
		"\x02\u037D\u037F\x03\x02\x02\x02\u037E\u037B\x03\x02\x02\x02\u037E\u037F"+
		"\x03\x02\x02\x02\u037F%\x03\x02\x02\x02\u0380\u0381\x05\u0224\u0113\x02"+
		"\u0381\u0385\x05(\x15\x02\u0382\u0383\x05\u0172\xBA\x02\u0383\u0384\x05"+
		"\u011C\x8F\x02\u0384\u0386\x03\x02\x02\x02\u0385\u0382\x03\x02\x02\x02"+
		"\u0385\u0386\x03\x02\x02\x02\u0386\'\x03\x02\x02\x02\u0387\u038D\x05*"+
		"\x16\x02\u0388\u0389\x05\u0172\xBA\x02\u0389\u038A\x05*\x16\x02\u038A"+
		"\u038C\x03\x02\x02\x02\u038B\u0388\x03\x02\x02\x02\u038C\u038F\x03\x02"+
		"\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E"+
		")\x03\x02\x02\x02\u038F\u038D\x03\x02\x02\x02\u0390\u0391\x05\u013A\x9E"+
		"\x02\u0391\u0392\x05\u01BA\xDE\x02\u0392\u0393\x05\u01D6\xEC\x02\u0393"+
		"\u0394\x05\u01D8\xED\x02\u0394+\x03\x02\x02\x02\u0395\u039C\x05\x90I\x02"+
		"\u0396\u0397\x05\x90I\x02\u0397\u0398\x05\u0172\xBA\x02\u0398\u0399\x05"+
		"\x8EH\x02\u0399\u039C\x03\x02\x02\x02\u039A\u039C\x05\x8EH\x02\u039B\u0395"+
		"\x03\x02\x02\x02\u039B\u0396\x03\x02\x02\x02\u039B\u039A\x03\x02\x02\x02"+
		"\u039C-\x03\x02\x02\x02\u039D\u039E\x05\u018C\xC7\x02\u039E\u03A0\x05"+
		"\u01C0\xE1\x02\u039F\u03A1\x05\xFE\x80\x02\u03A0";
	private static readonly _serializedATNSegment2: string =
		"\u039F\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A2\x03\x02"+
		"\x02\x02\u03A2\u03A3\x05\u0134\x9B\x02\u03A3\u03A4\x05\u0226\u0114\x02"+
		"\u03A4\u03A5\x05\u01F2\xFA\x02\u03A5\u03A6\x07\xAE\x02\x02\u03A6\u03A7"+
		"\x05\u026A\u0136\x02\u03A7\u03A8\x05\xC2b\x02\u03A8\u03AC\x05\u026C\u0137"+
		"\x02\u03A9\u03AA\x05\u0172\xBA\x02\u03AA\u03AB\x05\xC6d\x02\u03AB\u03AD"+
		"\x03\x02\x02\x02\u03AC\u03A9\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02"+
		"\u03AD/\x03\x02\x02\x02\u03AE\u03B0\x05\u018C\xC7\x02\u03AF\u03B1\x05"+
		"D#\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B2"+
		"\x03\x02\x02\x02\u03B2\u03B4\x05\u01A8\xD5\x02\u03B3\u03B5\x05\xFE\x80"+
		"\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B9"+
		"\x03\x02\x02\x02\u03B6\u03B7\x05\u0134\x9B\x02\u03B7\u03B8\x07\x12\x02"+
		"\x02\u03B8\u03BA\x03\x02\x02\x02\u03B9\u03B6\x03\x02\x02\x02\u03B9\u03BA"+
		"\x03\x02\x02\x02\u03BA\u03BB\x03\x02\x02\x02\u03BB\u03BC\x05\u0150\xA9"+
		"\x02\u03BC\u03BE\x05\u0266\u0134\x02\u03BD\u03BF\x054\x1B\x02\u03BE\u03BD"+
		"\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02"+
		"\u03C0\u03C1\x05\u0268\u0135\x02\u03C1\u03C2\x056\x1C\x02\u03C2\u03C3"+
		"\x05\u01F4\xFB\x02\u03C3\u03C4\x05\u013C\x9F\x02\u03C4\u03C5\x05\u01C2"+
		"\xE2\x02\u03C5\u03C6\x05\u0152\xAA\x02\u03C6\u03C7\x05\u0176\xBC\x02\u03C7"+
		"\u03C8\x052\x1A\x02\u03C81\x03\x02\x02\x02\u03C9\u03CA\x07\xA6\x02\x02"+
		"\u03CA3\x03\x02\x02\x02\u03CB\u03D1\x05\u015A\xAE\x02\u03CC\u03CD\x05"+
		"\u0276\u013C\x02\u03CD\u03CE\x05\u015A\xAE\x02\u03CE\u03D0\x03\x02\x02"+
		"\x02\u03CF\u03CC\x03\x02\x02\x02\u03D0\u03D3\x03\x02\x02\x02\u03D1\u03CF"+
		"\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D25\x03\x02\x02\x02\u03D3"+
		"\u03D1\x03\x02\x02\x02\u03D4\u03D9\x05\u0182\xC2\x02\u03D5\u03D6\x05\u01F4"+
		"\xFB\x02\u03D6\u03D7\x05\u01D8\xED\x02\u03D7\u03D9\x03\x02\x02\x02\u03D8"+
		"\u03D4\x03\x02\x02\x02\u03D8\u03D5\x03\x02\x02\x02\u03D9\u03DA\x03\x02"+
		"\x02\x02\u03DA\u03DB\x05\u01DC\xEF\x02\u03DB\u03DC\x05\u01D8\xED\x02\u03DC"+
		"\u03DD\x05\u01B4\xDB\x02\u03DD7\x03\x02\x02\x02\u03DE\u03E0\x05\u018C"+
		"\xC7\x02\u03DF\u03E1\x05D#\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1"+
		"\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E4\x05\u0160\xB1"+
		"\x02\u03E3\u03E5\x05\xFE\x80\x02\u03E4\u03E3\x03\x02\x02\x02\u03E4\u03E5"+
		"\x03\x02\x02\x02\u03E5\u03E9\x03\x02\x02\x02\u03E6\u03E7\x05\u0134\x9B"+
		"\x02\u03E7\u03E8\x07\x12\x02\x02\u03E8\u03EA\x03\x02\x02\x02\u03E9\u03E6"+
		"\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02"+
		"\u03EB\u03EC\x05\u014E\xA8\x02\u03EC\u03ED\x05\u0266\u0134\x02\u03ED\u03EE"+
		"\x05\u013C\x9F\x02\u03EE\u03EF\x05\u0268\u0135\x02\u03EF\u03F0\x05\u01FC"+
		"\xFF\x02\u03F0\u03F1\x05\u0150\xA9\x02\u03F1\u03F2\x05\u0202\u0102\x02"+
		"\u03F2\u03F3\x05\u013C\x9F\x02\u03F3\u03F4\x05\u01A2\xD2\x02\u03F4\u03F5"+
		"\x05\u0150\xA9\x02\u03F5\u03F6\x05\u01B2\xDA\x02\u03F6\u03F7\x05:\x1E"+
		"\x02\u03F79\x03\x02\x02\x02\u03F8\u03FD\x05\u0126\x94\x02\u03F9\u03FD"+
		"\x05B\"\x02\u03FA\u03FD\x05@!\x02\u03FB\u03FD\x05<\x1F\x02\u03FC\u03F8"+
		"\x03\x02\x02\x02\u03FC\u03F9\x03\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02"+
		"\u03FC\u03FB\x03\x02\x02\x02\u03FD;\x03\x02\x02\x02\u03FE\u03FF\x05\u026A"+
		"\u0136\x02\u03FF\u0405\x05> \x02\u0400\u0401\x05\u0276\u013C\x02\u0401"+
		"\u0402\x05> \x02\u0402\u0404\x03\x02\x02\x02\u0403\u0400\x03\x02\x02\x02"+
		"\u0404\u0407\x03\x02\x02\x02\u0405\u0403\x03\x02\x02\x02\u0405\u0406\x03"+
		"\x02\x02\x02\u0406\u0408\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0408"+
		"\u0409\x05\u026C\u0137\x02\u0409=\x03\x02\x02\x02\u040A\u040B\x05\u0158"+
		"\xAD\x02\u040B\u040C\x07\v\x02\x02\u040C\u040D\x05:\x1E\x02\u040D?\x03"+
		"\x02\x02\x02\u040E\u040F\x05\u0266\u0134\x02\u040F\u0416\x05B\"\x02\u0410"+
		"\u0411\x05\u0276\u013C\x02\u0411\u0412\x05\u0126\x94\x02\u0412\u0415\x03"+
		"\x02\x02\x02\u0413\u0415\x05B\"\x02\u0414\u0410\x03\x02\x02\x02\u0414"+
		"\u0413\x03\x02\x02\x02\u0415\u0418\x03\x02\x02\x02\u0416\u0414\x03\x02"+
		"\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0419\x03\x02\x02\x02\u0418"+
		"\u0416\x03\x02\x02\x02\u0419\u041A\x05\u0268\u0135\x02\u041AA\x03\x02"+
		"\x02\x02\u041B\u041C\x05\u0266\u0134\x02\u041C\u0422\x05\u0126\x94\x02"+
		"\u041D\u041E\x05\u0276\u013C\x02\u041E\u041F\x05\u0126\x94\x02\u041F\u0421"+
		"\x03\x02\x02\x02\u0420\u041D\x03\x02\x02\x02\u0421\u0424\x03\x02\x02\x02"+
		"\u0422\u0420\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0425\x03"+
		"\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0425\u0426\x05\u0268\u0135\x02"+
		"\u0426C\x03\x02\x02\x02\u0427\u0428\x05\u01E0\xF1\x02\u0428\u0429\x05"+
		"\u01F0\xF9\x02\u0429E\x03\x02\x02\x02\u042A\u042B\x05\u0170\xB9\x02\u042B"+
		"\u042C\x05\u021A\u010E\x02\u042C\u042D\x05\u0154\xAB\x02\u042D\u042E\x05"+
		"\u0226\u0114\x02\u042E\u0430\x05H%\x02\u042F\u0431\x05J&\x02\u0430\u042F"+
		"\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431G\x03\x02\x02\x02\u0432"+
		"\u0433\x05\u01E8\xF5\x02\u0433\u0434\x05\u012E\x98\x02\u0434I\x03\x02"+
		"\x02\x02\u0435\u0438\x05\u0204\u0103\x02\u0436\u0438\x05\u01D2\xEA\x02"+
		"\u0437\u0435\x03\x02\x02\x02\u0437\u0436\x03\x02\x02\x02\u0438K\x03\x02"+
		"\x02\x02\u0439\u043A\x05\u0170\xB9\x02\u043A\u043E\x05\u0212\u010A\x02"+
		"\u043B\u043C\x05\u0134\x9B\x02\u043C\u043D\x07\x12\x02\x02\u043D\u043F"+
		"\x03\x02\x02\x02\u043E\u043B\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02"+
		"\u043F\u0440\x03\x02\x02\x02\u0440\u0441\x05\u014C\xA7\x02\u0441\u0442"+
		"\x05N(\x02\u0442M\x03\x02\x02\x02\u0443\u0447\x05X-\x02\u0444\u0447\x05"+
		"V,\x02\u0445\u0447\x05P)\x02\u0446\u0443\x03\x02\x02\x02\u0446\u0444\x03"+
		"\x02\x02\x02\u0446\u0445\x03\x02\x02\x02\u0447O\x03\x02\x02\x02\u0448"+
		"\u0449\x05\u01EE\xF8\x02\u0449\u044A\x05R*\x02\u044AQ\x03\x02\x02\x02"+
		"\u044B\u0451\x05T+\x02\u044C\u044D\x05\u0172\xBA\x02\u044D\u044E\x05T"+
		"+\x02\u044E\u0450\x03\x02\x02\x02\u044F\u044C\x03\x02\x02\x02\u0450\u0453"+
		"\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02"+
		"\u0452S\x03\x02\x02\x02\u0453\u0451\x03\x02\x02\x02\u0454\u0455\x05\u013A"+
		"\x9E\x02\u0455\u0456\x05\u020A\u0106\x02\u0456\u0457\x05\u013A\x9E\x02"+
		"\u0457U\x03\x02\x02\x02\u0458\u0459\x05\u015E\xB0\x02\u0459\u045A\x05"+
		"\u013A\x9E\x02\u045A\u0461\x05\u013C\x9F\x02\u045B\u045C\x05\u0276\u013C"+
		"\x02\u045C\u045D\x05\u013A\x9E\x02\u045D\u045E\x05\u013C\x9F\x02\u045E"+
		"\u0460\x03\x02\x02\x02\u045F\u045B\x03\x02\x02\x02\u0460\u0463\x03\x02"+
		"\x02\x02\u0461\u045F\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462"+
		"W\x03\x02\x02\x02\u0463\u0461\x03\x02\x02\x02\u0464\u0465\x05\u0170\xB9"+
		"\x02\u0465\u0466\x05\u013A\x9E\x02\u0466\u0467\x05\u0212\u010A\x02\u0467"+
		"\u0468\x05\u013C\x9F\x02\u0468Y\x03\x02\x02\x02\u0469\u046A\x05\u0170"+
		"\xB9\x02\u046A\u046B\x05\u0206\u0104\x02\u046B\u046C\x05\u0138\x9D\x02"+
		"\u046C\u046D\x05\\/\x02\u046D[\x03\x02\x02\x02\u046E\u0476\x05h5\x02\u046F"+
		"\u0476\x05d3\x02\u0470\u0476\x05d3\x02\u0471\u0476\x05b2\x02\u0472\u0476"+
		"\x05`1\x02\u0473\u0476\x05^0\x02\u0474\u0476\b/\x01\x02\u0475\u046E\x03"+
		"\x02\x02\x02\u0475\u046F\x03\x02\x02\x02\u0475\u0470\x03\x02\x02\x02\u0475"+
		"\u0471\x03\x02\x02\x02\u0475\u0472\x03\x02\x02\x02\u0475\u0473\x03\x02"+
		"\x02\x02\u0475\u0474\x03\x02\x02\x02\u0476]\x03\x02\x02\x02\u0477\u0478"+
		"\x05\u0226\u0114\x02\u0478\u0479\x05\x90I\x02\u0479_\x03\x02\x02\x02\u047A"+
		"\u047B\x05\u01EE\xF8\x02\u047B\u047C\x05\u013A\x9E\x02\u047C\u047D\x05"+
		"\u020A\u0106\x02\u047D\u047E\x05\u013A\x9E\x02\u047Ea\x03\x02\x02\x02"+
		"\u047F\u0480\x05\u0196\xCC\x02\u0480\u0481\x05\u0186\xC4\x02\u0481\u0482"+
		"\x05\u0200\u0101\x02\u0482c\x03\x02\x02\x02\u0483\u0484\x05\u0196\xCC"+
		"\x02\u0484\u0485\x05f4\x02\u0485e\x03\x02\x02\x02\u0486\u048C\x05\u013A"+
		"\x9E\x02\u0487\u0488\x05\u0276\u013C\x02\u0488\u0489\x05\u013A\x9E\x02"+
		"\u0489\u048B\x03\x02\x02\x02\u048A\u0487\x03\x02\x02\x02\u048B\u048E\x03"+
		"\x02\x02\x02\u048C\u048A\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D"+
		"g\x03\x02\x02\x02\u048E\u048C\x03\x02\x02\x02\u048F\u0490\x05\u015E\xB0"+
		"\x02\u0490\u0491\x05j6\x02\u0491i\x03\x02\x02\x02\u0492\u0493\x05\u013A"+
		"\x9E\x02\u0493\u049A\x05\u013C\x9F\x02\u0494\u0495\x05\u0276\u013C\x02"+
		"\u0495\u0496\x05\u013A\x9E\x02\u0496\u0497\x05\u013C\x9F\x02\u0497\u0499"+
		"\x03\x02\x02\x02\u0498\u0494\x03\x02\x02\x02\u0499\u049C\x03\x02\x02\x02"+
		"\u049A\u0498\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049Bk\x03\x02"+
		"\x02\x02\u049C\u049A\x03\x02\x02\x02\u049D\u049E\x05\u0170\xB9\x02\u049E"+
		"\u049F\x05\u01F6\xFC\x02\u049F\u04A1\x05\u0144\xA3\x02\u04A0\u04A2\x05"+
		"n8\x02\u04A1\u04A0\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2m"+
		"\x03\x02\x02\x02\u04A3\u04A4\x05\u0226\u0114\x02\u04A4\u04AA\x05p9\x02"+
		"\u04A5\u04A6\x05\u0172\xBA\x02\u04A6\u04A7\x05p9\x02\u04A7\u04A9\x03\x02"+
		"\x02\x02\u04A8\u04A5\x03\x02\x02\x02\u04A9\u04AC\x03\x02\x02\x02\u04AA"+
		"\u04A8\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04ABo\x03\x02\x02"+
		"\x02\u04AC\u04AA\x03\x02\x02\x02\u04AD\u04AE\x05\u01E8\xF5\x02\u04AE\u04AF"+
		"\x07\xAE\x02\x02\u04AF\u04B0\x05\u012E\x98\x02\u04B0\u04BE\x03\x02\x02"+
		"\x02\u04B1\u04B2\x05\u01CC\xE7\x02\u04B2\u04B3\x07\xAE\x02\x02\u04B3\u04B4"+
		"\x05\u0130\x99\x02\u04B4\u04BE\x03\x02\x02\x02\u04B5\u04B6\x05\u0204\u0103"+
		"\x02\u04B6\u04B7\x07\xAE\x02\x02\u04B7\u04B8\x05\u0130\x99\x02\u04B8\u04BE"+
		"\x03\x02\x02\x02\u04B9\u04BA\x05\u01DE\xF0\x02\u04BA\u04BB\x07\xAE\x02"+
		"\x02\u04BB\u04BC\x05\x98M\x02\u04BC\u04BE\x03\x02\x02\x02\u04BD\u04AD"+
		"\x03\x02\x02\x02\u04BD\u04B1\x03\x02\x02\x02\u04BD\u04B5\x03\x02\x02\x02"+
		"\u04BD\u04B9\x03\x02\x02\x02\u04BEq\x03\x02\x02\x02\u04BF\u04C0\x05\u0170"+
		"\xB9\x02\u04C0\u04C1\x05\u01CE\xE8\x02\u04C1\u04C5\x05\u0222\u0112\x02"+
		"\u04C2\u04C3\x05\u0134\x9B\x02\u04C3\u04C4\x07\x12\x02\x02\u04C4\u04C6"+
		"\x03\x02\x02\x02\u04C5\u04C2\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02"+
		"\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04CB\x05\u014A\xA6\x02\u04C8\u04C9"+
		"\x05\u0226\u0114\x02\u04C9\u04CA\x05\x90I\x02\u04CA\u04CC\x03\x02\x02"+
		"\x02\u04CB\u04C8\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CCs\x03"+
		"\x02\x02\x02\u04CD\u04CE\x05\u0196\xCC\x02\u04CE\u04D0\x05\u021A\u010E"+
		"\x02\u04CF\u04D1\x05\u0100\x81\x02\u04D0\u04CF\x03\x02\x02\x02\u04D0\u04D1"+
		"\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04D3\x05\u0154\xAB"+
		"\x02\u04D3u\x03\x02\x02\x02\u04D4\u04D5\x05\u0196\xCC\x02\u04D5\u04D7"+
		"\x05\u0212\u010A\x02\u04D6\u04D8\x05\u0100\x81\x02\u04D7\u04D6\x03\x02"+
		"\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04DC\x03\x02\x02\x02\u04D9"+
		"\u04DA\x05\u0134\x9B\x02\u04DA\u04DB\x07\x12\x02\x02\u04DB\u04DD\x03\x02"+
		"\x02\x02\u04DC\u04D9\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD"+
		"\u04DE\x03\x02\x02\x02\u04DE\u04DF\x05\u014C\xA7\x02\u04DFw\x03\x02\x02"+
		"\x02\u04E0\u04E1\x05\u0196\xCC\x02\u04E1\u04E2\x05\u01CE\xE8\x02\u04E2"+
		"\u04E4\x05\u0222\u0112\x02\u04E3\u04E5\x05\u0100\x81\x02\u04E4\u04E3\x03"+
		"\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u04E9\x03\x02\x02\x02\u04E6"+
		"\u04E7\x05\u0134\x9B\x02\u04E7\u04E8\x07\x12\x02\x02\u04E8\u04EA\x03\x02"+
		"\x02\x02\u04E9\u04E6\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA"+
		"\u04EB\x03\x02\x02\x02\u04EB\u04EC\x05\u014A\xA6\x02\u04ECy\x03\x02\x02"+
		"\x02\u04ED\u04EE\x05\u0196\xCC\x02\u04EE\u04F0\x05\u0160\xB1\x02\u04EF"+
		"\u04F1\x05\u0100\x81\x02\u04F0\u04EF\x03\x02\x02\x02\u04F0\u04F1\x03\x02"+
		"\x02\x02\u04F1\u04F5\x03\x02\x02\x02\u04F2\u04F3\x05\u0134\x9B\x02\u04F3"+
		"\u04F4\x07\x12\x02\x02\u04F4\u04F6\x03\x02\x02\x02\u04F5\u04F2\x03\x02"+
		"\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7"+
		"\u04F8\x05\u014E\xA8\x02\u04F8{\x03\x02\x02\x02\u04F9\u04FA\x05\u0196"+
		"\xCC\x02\u04FA\u04FC\x05\u01A8\xD5\x02\u04FB\u04FD\x05\u0100\x81\x02\u04FC"+
		"\u04FB\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD\u0501\x03\x02"+
		"\x02\x02\u04FE\u04FF\x05\u0134\x9B\x02\u04FF\u0500\x07\x12\x02\x02\u0500"+
		"\u0502\x03\x02\x02\x02\u0501\u04FE\x03\x02\x02\x02\u0501\u0502\x03\x02"+
		"\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503\u0504\x05\u0150\xA9\x02\u0504"+
		"}\x03\x02\x02\x02\u0505\u0506\x05\u0196\xCC\x02\u0506\u0508\x05\u020C"+
		"\u0107\x02\u0507\u0509\x05\u0100\x81\x02\u0508\u0507\x03\x02\x02\x02\u0508"+
		"\u0509\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u050B\x05\u0146"+
		"\xA4\x02\u050B\u050C\x05\u01DC\xEF\x02\u050C\u050D\x05\u0138\x9D\x02\u050D"+
		"\x7F\x03\x02\x02\x02\u050E\u050F\x05\u0196\xCC\x02\u050F\u0511\x05\u01F6"+
		"\xFC\x02\u0510\u0512\x05\u0100\x81\x02\u0511\u0510\x03\x02\x02\x02\u0511"+
		"\u0512\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0514\x05\u0144"+
		"\xA3\x02\u0514\x81\x03\x02\x02\x02\u0515\u0516\x05\u0196\xCC\x02\u0516"+
		"\u0518\x05\u0206\u0104\x02\u0517\u0519\x05\u0100\x81\x02\u0518\u0517\x03"+
		"\x02\x02\x02\u0518\u0519\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02\u051A"+
		"\u051B\x05\u0138\x9D\x02\u051B\x83\x03\x02\x02\x02\u051C\u051D\x05\u0196"+
		"\xCC\x02\u051D\u051F\x05\u01C0\xE1\x02\u051E\u0520\x05\u0100\x81\x02\u051F"+
		"\u051E\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\u0521\x03\x02"+
		"\x02\x02\u0521\u0522\x05\u0134\x9B\x02\u0522\x85\x03\x02\x02\x02\u0523"+
		"\u0524\x05\u0196\xCC\x02\u0524\u0526\x05\u01B0\xD9\x02\u0525\u0527\x05"+
		"\u0100\x81\x02\u0526\u0525\x03\x02\x02\x02\u0526\u0527\x03\x02\x02\x02"+
		"\u0527\u052B\x03\x02\x02\x02\u0528\u0529\x05\u0134\x9B\x02\u0529\u052A"+
		"\x07\x12\x02\x02\u052A\u052C\x03\x02\x02\x02\u052B\u0528\x03\x02\x02\x02"+
		"\u052B\u052C\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u052E\x05"+
		"\xD0i\x02\u052E\x87\x03\x02\x02\x02\u052F\u0530\x05\u018C\xC7\x02\u0530"+
		"\u0532\x05\u0206\u0104\x02\u0531\u0533\x05\xFE\x80\x02\u0532\u0531\x03"+
		"\x02\x02\x02\u0532\u0533\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534"+
		"\u0535\x05\u0138\x9D\x02\u0535\u0537\x05\x8AF\x02\u0536\u0538\x05\x8C"+
		"G\x02\u0537\u0536\x03\x02\x02\x02\u0537\u0538\x03\x02\x02\x02\u0538\x89"+
		"\x03\x02\x02\x02\u0539\u053A\x05\u0266\u0134\x02\u053A\u053B\x05\xA0Q"+
		"\x02\u053B\u053C\x05\u0268\u0135\x02\u053C\u053F\x03\x02\x02\x02\u053D"+
		"\u053F\bF\x01\x02\u053E\u0539\x03\x02\x02\x02\u053E\u053D\x03\x02\x02"+
		"\x02\u053F\x8B\x03\x02\x02\x02\u0540\u0542\x05\u0226\u0114\x02\u0541\u0543"+
		"\x05\x90I\x02\u0542\u0541\x03\x02\x02\x02\u0542\u0543\x03\x02\x02\x02"+
		"\u0543\u0545\x03\x02\x02\x02\u0544\u0546\x05\x8EH\x02\u0545\u0544\x03"+
		"\x02\x02\x02\u0545\u0546\x03\x02\x02\x02\u0546\x8D\x03\x02\x02\x02\u0547"+
		"\u0548\x05\u0184\xC3\x02\u0548\u0549\x05\u01E2\xF2\x02\u0549\u054A\x05"+
		"\u0180\xC1\x02\u054A\u054B\x05\u0266\u0134\x02\u054B\u054D\x05\u013A\x9E"+
		"\x02\u054C\u054E\x05\u0142\xA2\x02\u054D\u054C\x03\x02\x02\x02\u054D\u054E"+
		"\x03\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F\u0550\x05\u0268\u0135"+
		"\x02\u0550\x8F\x03\x02\x02\x02\u0551\u0557\x05\x92J\x02\u0552\u0553\x05"+
		"\u0172\xBA\x02\u0553\u0554\x05\x92J\x02\u0554\u0556\x03\x02\x02\x02\u0555"+
		"\u0552\x03\x02\x02\x02\u0556\u0559\x03\x02\x02\x02\u0557\u0555\x03\x02"+
		"\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558\x91\x03\x02\x02\x02\u0559\u0557"+
		"\x03\x02\x02\x02\u055A\u055B\x05\x94K\x02\u055B\u055C\x07\xAE\x02\x02"+
		"\u055C\u055D\x05\x96L\x02\u055D\u0563\x03\x02\x02\x02\u055E\u055F\x05"+
		"\x94K\x02\u055F\u0560\x07\xAE\x02\x02\u0560\u0561\x05\x98M\x02\u0561\u0563"+
		"\x03\x02\x02\x02\u0562\u055A\x03\x02\x02\x02\u0562\u055E\x03\x02\x02\x02"+
		"\u0563\x93\x03\x02\x02\x02\u0564\u0565\x07\xAC\x02\x02\u0565\x95\x03\x02"+
		"\x02\x02\u0566\u0569\x05\u012E\x98\x02\u0567\u0569\x05\u012C\x97\x02\u0568"+
		"\u0566\x03\x02\x02\x02\u0568\u0567\x03\x02\x02\x02\u0569\x97\x03\x02\x02"+
		"\x02\u056A\u056B\x05\u026A\u0136\x02\u056B\u0571\x05\x9AN\x02\u056C\u056D"+
		"\x05\u0276\u013C\x02\u056D\u056E\x05\x9AN\x02\u056E\u0570\x03\x02\x02"+
		"\x02\u056F\u056C\x03\x02\x02\x02\u0570\u0573\x03\x02\x02\x02\u0571\u056F"+
		"\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572\u0574\x03\x02\x02\x02"+
		"\u0573\u0571\x03\x02\x02\x02\u0574\u0575\x05\u026C\u0137\x02\u0575\x99"+
		"\x03\x02\x02\x02\u0576\u0577\x05\x9CO\x02\u0577\u0578\x07\v\x02\x02\u0578"+
		"\u0579\x05\x9EP\x02\u0579\x9B\x03\x02\x02\x02\u057A\u057B\x05\u012E\x98"+
		"\x02\u057B\x9D\x03\x02\x02\x02\u057C\u057F\x05\u012E\x98\x02\u057D\u057F"+
		"\x05\u012C\x97\x02\u057E\u057C\x03\x02\x02\x02\u057E\u057D\x03\x02\x02"+
		"\x02\u057F\x9F\x03\x02\x02\x02\u0580\u0586\x05\xA2R\x02\u0581\u0582\x05"+
		"\u0276\u013C\x02\u0582\u0583\x05\xA2R\x02\u0583\u0585\x03\x02\x02\x02"+
		"\u0584\u0581\x03\x02\x02\x02\u0585\u0588\x03\x02\x02\x02\u0586\u0584\x03"+
		"\x02\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587\u058C\x03\x02\x02\x02\u0588"+
		"\u0586\x03\x02\x02\x02\u0589\u058A\x05\u0276\u013C\x02\u058A\u058B\x05"+
		"\xA6T\x02\u058B\u058D\x03\x02\x02\x02\u058C\u0589\x03\x02\x02\x02\u058C"+
		"\u058D\x03\x02\x02\x02\u058D\xA1\x03\x02\x02\x02\u058E\u058F\x05\u013A"+
		"\x9E\x02\u058F\u0590\x05\u013C\x9F\x02\u0590\u0591\x05\xA4S\x02\u0591"+
		"\u059B\x03\x02\x02\x02\u0592\u0593\x05\u013A\x9E\x02\u0593\u0594\x05\u013C"+
		"\x9F\x02\u0594\u0595\x05\u01FE\u0100\x02\u0595\u059B\x03\x02\x02\x02\u0596"+
		"\u0597\x05\u013A\x9E\x02\u0597\u0598\x05\u013C\x9F\x02\u0598\u059B\x03"+
		"\x02\x02\x02\u0599\u059B\bR\x01\x02\u059A\u058E\x03\x02\x02\x02\u059A"+
		"\u0592\x03\x02\x02\x02\u059A\u0596\x03\x02\x02\x02\u059A\u0599\x03\x02"+
		"\x02\x02\u059B\xA3\x03\x02\x02\x02\u059C\u059D\x05\u01EC\xF7\x02\u059D"+
		"\u059E\x05\u01BC\xDF\x02\u059E\u05A3\x03\x02\x02\x02\u059F\u05A0\x05\u01EC"+
		"\xF7\x02\u05A0\u05A1\bS\x01\x02\u05A1\u05A3\x03\x02\x02\x02\u05A2\u059C"+
		"\x03\x02\x02\x02\u05A2\u059F\x03\x02\x02\x02\u05A3\xA5\x03\x02\x02\x02"+
		"\u05A4\u05A5\x05\u01EC\xF7\x02\u05A5\u05A6\x05\u01BC\xDF\x02\u05A6\u05A7"+
		"\x05\u0266\u0134\x02\u05A7\u05A8\x05\xA8U\x02\u05A8\u05A9\x05\u0268\u0135"+
		"\x02\u05A9\xA7\x03\x02\x02\x02\u05AA\u05AE\x05\xAAV\x02\u05AB\u05AE\x05"+
		"\xACW\x02\u05AC\u05AE\x05\xAEX\x02\u05AD\u05AA\x03\x02\x02\x02\u05AD\u05AB"+
		"\x03\x02\x02\x02\u05AD\u05AC\x03\x02\x02\x02\u05AE\xA9\x03\x02\x02\x02"+
		"\u05AF\u05B0\x05\u013A\x9E\x02\u05B0\xAB\x03\x02\x02\x02\u05B1\u05B2\x05"+
		"\xB4[\x02\u05B2\u05B3\x05\u0276\u013C\x02\u05B3\u05B4\x05\xB2Z\x02\u05B4"+
		"\xAD\x03\x02\x02\x02\u05B5\u05B6\x05\u0266\u0134\x02\u05B6\u05B7\x05\xB0"+
		"Y\x02\u05B7\u05B8\x05\u0268\u0135\x02\u05B8\u05B9\x05\u0276\u013C\x02"+
		"\u05B9\u05BA\x05\xB2Z\x02\u05BA\xAF\x03\x02\x02\x02\u05BB\u05C1\x05\xB4"+
		"[\x02\u05BC\u05BD\x05\u0276\u013C\x02\u05BD\u05BE\x05\xB4[\x02\u05BE\u05C0"+
		"\x03\x02\x02\x02\u05BF\u05BC\x03\x02\x02\x02\u05C0\u05C3\x03\x02\x02\x02"+
		"\u05C1\u05BF\x03\x02\x02\x02\u05C1\u05C2\x03\x02\x02\x02\u05C2\xB1\x03"+
		"\x02\x02\x02\u05C3\u05C1\x03\x02\x02\x02\u05C4\u05CA\x05\xB6\\\x02\u05C5"+
		"\u05C6\x05\u0276\u013C\x02\u05C6\u05C7\x05\xB6\\\x02\u05C7\u05C9\x03\x02"+
		"\x02\x02\u05C8\u05C5\x03\x02\x02\x02\u05C9\u05CC\x03\x02\x02\x02\u05CA"+
		"\u05C8\x03\x02\x02\x02\u05CA\u05CB\x03\x02\x02\x02\u05CB\xB3\x03\x02\x02"+
		"\x02\u05CC\u05CA\x03\x02\x02\x02\u05CD\u05CE\x05\u013A\x9E\x02\u05CE\xB5"+
		"\x03\x02\x02\x02\u05CF\u05D0\x05\u013A\x9E\x02\u05D0\xB7\x03\x02\x02\x02"+
		"\u05D1\u05D2\x05\u0174\xBB\x02\u05D2\u05D3\x05\u017C\xBF\x02\u05D3\xB9"+
		"\x03\x02\x02\x02\u05D4\u05D5\x05\xBC_\x02\u05D5\u05D6\x05\xDCo\x02\u05D6"+
		"\u05DE\x03\x02\x02\x02\u05D7\u05D8\x05\xBC_\x02\u05D8\u05D9\x05\xF4{\x02"+
		"\u05D9\u05DE\x03\x02\x02\x02\u05DA\u05DB\x05\xBC_\x02\u05DB\u05DC\x05"+
		"\xE2r\x02\u05DC\u05DE\x03\x02\x02\x02\u05DD\u05D4\x03\x02\x02\x02\u05DD"+
		"\u05D7\x03\x02\x02\x02\u05DD\u05DA\x03\x02\x02\x02\u05DE\xBB\x03\x02\x02"+
		"\x02\u05DF\u05E1\x05\u017E\xC0\x02\u05E0\u05E2\x05\xBE`\x02\u05E1\u05E0"+
		"\x03\x02\x02\x02\u05E1\u05E2\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02"+
		"\u05E3\u05E5\x05\u017C\xBF\x02\u05E4\u05E6\x05\xFC\x7F\x02\u05E5\u05E4"+
		"\x03\x02\x02\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6\xBD\x03\x02\x02\x02"+
		"\u05E7\u05EA\x05\u01CA\xE6\x02\u05E8\u05EA\x05\u0214\u010B\x02\u05E9\u05E7"+
		"\x03\x02\x02\x02\u05E9\u05E8\x03\x02\x02\x02\u05EA\xBF\x03\x02\x02\x02"+
		"\u05EB\u05EC\x05\u0170\xB9\x02\u05EC\u05ED\x05\u01C0\xE1\x02\u05ED\u05EE"+
		"\x05\u0134\x9B\x02\u05EE\u05EF\x05\u0226\u0114\x02\u05EF\u05F0\x05\u01F2"+
		"\xFA\x02\u05F0\u05F1\x07\xAE\x02\x02\u05F1\u05F2\x05\u026A\u0136\x02\u05F2"+
		"\u05F3\x05\xC2b\x02\u05F3\u05F7\x05\u026C\u0137\x02\u05F4\u05F5\x05\u0172"+
		"\xBA\x02\u05F5\u05F6\x05\xC6d\x02\u05F6\u05F8\x03\x02\x02\x02\u05F7\u05F4"+
		"\x03\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\xC1\x03\x02\x02\x02"+
		"\u05F9\u05FF\x05\xC4c\x02\u05FA\u05FB\x05\u0276\u013C\x02\u05FB\u05FC"+
		"\x05\xC4c\x02\u05FC\u05FE\x03\x02\x02\x02\u05FD\u05FA\x03\x02\x02\x02"+
		"\u05FE\u0601\x03\x02\x02\x02\u05FF\u05FD\x03\x02\x02\x02\u05FF\u0600\x03"+
		"\x02\x02\x02\u0600\xC3\x03\x02\x02\x02\u0601\u05FF\x03\x02\x02\x02\u0602"+
		"\u0603\x07\xA7\x02\x02\u0603\u0604\x07\v\x02\x02\u0604\u0609\x07\xA7\x02"+
		"\x02\u0605\u0606\x07\xA7\x02\x02\u0606\u0607\x07\v\x02\x02\u0607\u0609"+
		"\x07\xA8\x02\x02\u0608\u0602\x03\x02\x02\x02\u0608\u0605\x03\x02\x02\x02"+
		"\u0609\xC5\x03\x02\x02\x02\u060A\u060B\x05\u0198\xCD\x02\u060B\u060C\x07"+
		"\xAE\x02\x02\u060C\u060D\x05\u0130\x99\x02\u060D\xC7\x03\x02\x02\x02\u060E"+
		"\u060F\x05\u0218\u010D\x02\u060F\u0610\x05\u0134\x9B\x02\u0610\xC9\x03"+
		"\x02\x02\x02\u0611\u0613\x05\u020E\u0108\x02\u0612\u0614\x05\u0206\u0104"+
		"\x02\u0613\u0612\x03\x02\x02\x02\u0613\u0614\x03\x02\x02\x02\u0614\u0615"+
		"\x03\x02\x02\x02\u0615\u0616\x05\u0138\x9D\x02\u0616\xCB\x03\x02\x02\x02"+
		"\u0617\u0618\x05\u018C\xC7\x02\u0618\u061A\x05\u01B0\xD9\x02\u0619\u061B"+
		"\x05\xFE\x80\x02\u061A\u0619\x03\x02\x02\x02\u061A\u061B\x03\x02\x02\x02"+
		"\u061B\u061D\x03\x02\x02\x02\u061C\u061E\x05\xD0i\x02\u061D\u061C\x03"+
		"\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E\u061F\x03\x02\x02\x02\u061F"+
		"\u0620\x05\xCEh\x02\u0620\u0621\x05\xD2j\x02\u0621\xCD\x03\x02\x02\x02"+
		"\u0622\u0623\x05\u01DC\xEF\x02\u0623\u0624\x05\u0138\x9D\x02\u0624\u0627"+
		"\x03\x02\x02\x02\u0625\u0627\bh\x01\x02\u0626\u0622\x03\x02\x02\x02\u0626"+
		"\u0625\x03\x02\x02\x02\u0627\xCF\x03\x02\x02\x02\u0628\u062B\x07\xAC\x02"+
		"\x02\u0629\u062B\x05\u012E\x98\x02\u062A\u0628\x03\x02\x02\x02\u062A\u0629"+
		"\x03\x02\x02\x02\u062B\xD1\x03\x02\x02\x02\u062C\u062D\x05\u0266\u0134"+
		"\x02\u062D\u062E\x05\xD4k\x02\u062E\u062F\x05\u0268\u0135\x02\u062F\u0632"+
		"\x03\x02\x02\x02\u0630\u0632\bj\x01\x02\u0631\u062C\x03\x02\x02\x02\u0631"+
		"\u0630\x03\x02\x02\x02\u0632\xD3\x03\x02\x02\x02\u0633\u0639\x05\u013A"+
		"\x9E\x02\u0634\u0639\x05\xD6l\x02\u0635\u0639\x05\xD8m\x02\u0636\u0639"+
		"\x05\xDAn\x02\u0637\u0639\bk\x01\x02\u0638\u0633\x03\x02\x02\x02\u0638"+
		"\u0634\x03\x02\x02\x02\u0638\u0635\x03\x02\x02\x02\u0638\u0636\x03\x02"+
		"\x02\x02\u0638\u0637\x03\x02\x02\x02\u0639\xD5\x03\x02\x02\x02\u063A\u063B"+
		"\x05\u01BE\xE0\x02\u063B\u063E\x05\u0266\u0134\x02\u063C\u063F\x05\u013A"+
		"\x9E\x02\u063D\u063F\bl\x01\x02\u063E\u063C\x03\x02\x02\x02\u063E\u063D"+
		"\x03\x02\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640\u0641\x05\u0268\u0135"+
		"\x02\u0641\xD7\x03\x02\x02\x02\u0642\u0643\x05\u019A\xCE\x02\u0643\u0646"+
		"\x05\u0266\u0134\x02\u0644\u0647\x05\u013A\x9E\x02\u0645\u0647\bm\x01"+
		"\x02\u0646\u0644\x03\x02\x02\x02\u0646\u0645\x03\x02\x02\x02\u0647\u0648"+
		"\x03\x02\x02\x02\u0648\u0649\x05\u0268\u0135\x02\u0649\xD9\x03\x02\x02"+
		"\x02\u064A\u064B\x05\u01A6\xD4\x02\u064B\u064E\x05\u0266\u0134\x02\u064C"+
		"\u064F\x05\u013A\x9E\x02\u064D\u064F\bn\x01\x02\u064E\u064C\x03\x02\x02"+
		"\x02\u064E\u064D\x03\x02\x02\x02\u064F\u0650\x03\x02\x02\x02\u0650\u0651"+
		"\x05\u0268\u0135\x02\u0651\xDB\x03\x02\x02\x02\u0652\u0654\x05\u018E\xC8"+
		"\x02\u0653\u0655\x05\xDEp\x02\u0654\u0653\x03\x02\x02\x02\u0654\u0655"+
		"\x03\x02\x02\x02\u0655\u0656\x03\x02\x02\x02\u0656\u0658\x05\u0110\x89"+
		"\x02\u0657\u0659\x05\xFC\x7F\x02\u0658\u0657\x03\x02\x02\x02\u0658\u0659"+
		"\x03\x02\x02\x02\u0659\u065C\x03\x02\x02\x02\u065A\u065D\x05\u0116\x8C"+
		"\x02\u065B\u065D\bo\x01\x02\u065C\u065A\x03\x02\x02\x02\u065C\u065B\x03"+
		"\x02\x02\x02\u065D\u0660\x03\x02\x02\x02\u065E\u0661\x05\u0100\x81\x02"+
		"\u065F\u0661\x05\xE4s\x02\u0660\u065E\x03\x02\x02\x02\u0660\u065F\x03"+
		"\x02\x02\x02\u0660\u0661\x03\x02\x02\x02\u0661\xDD\x03\x02\x02\x02\u0662"+
		"\u0668\x05\xE0q\x02\u0663\u0664\x05\u0276\u013C\x02\u0664\u0665\x05\xE0"+
		"q\x02\u0665\u0667\x03\x02\x02\x02\u0666\u0663\x03\x02\x02\x02\u0667\u066A"+
		"\x03\x02\x02\x02\u0668\u0666\x03\x02\x02\x02\u0668\u0669\x03\x02\x02\x02"+
		"\u0669\xDF\x03\x02\x02\x02\u066A\u0668\x03\x02\x02\x02\u066B\u0675\x05"+
		"\u013A\x9E\x02\u066C\u066D\x05\u013A\x9E\x02\u066D\u0670\x05\u0272\u013A"+
		"\x02\u066E\u0671\x05\u012E\x98\x02\u066F\u0671\x05\u012A\x96\x02\u0670"+
		"\u066E\x03\x02\x02\x02\u0670\u066F\x03\x02\x02\x02\u0671\u0672\x03\x02"+
		"\x02\x02\u0672\u0673\x05\u0274\u013B\x02\u0673\u0675\x03\x02\x02\x02\u0674"+
		"\u066B\x03\x02\x02\x02\u0674\u066C\x03\x02\x02\x02\u0675\xE1\x03\x02\x02"+
		"\x02\u0676\u0677\x05\u0216\u010C\x02\u0677\u0679\x05\u0138\x9D\x02\u0678"+
		"\u067A\x05";
	private static readonly _serializedATNSegment3: string =
		"\xF6|\x02\u0679\u0678\x03\x02\x02\x02\u0679\u067A\x03\x02\x02\x02\u067A"+
		"\u067B\x03\x02\x02\x02\u067B\u067E\x05\xEAv\x02\u067C\u067F\x05\u0116"+
		"\x8C\x02\u067D\u067F\br\x01\x02\u067E\u067C\x03\x02\x02\x02\u067E\u067D"+
		"\x03\x02\x02\x02\u067F\u0682\x03\x02\x02\x02\u0680\u0683\x05\u0100\x81"+
		"\x02\u0681\u0683\x05\xE4s\x02\u0682\u0680\x03\x02\x02\x02\u0682\u0681"+
		"\x03\x02\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683\xE3\x03\x02\x02\x02"+
		"\u0684\u0685\x05\u01AC\xD7\x02\u0685\u0686\x05\xE6t\x02\u0686\xE5\x03"+
		"\x02\x02\x02\u0687\u068D\x05\xE8u\x02\u0688\u0689\x05\u0172\xBA\x02\u0689"+
		"\u068A\x05\xE8u\x02\u068A\u068C\x03\x02\x02\x02\u068B\u0688\x03\x02\x02"+
		"\x02\u068C\u068F\x03\x02\x02\x02\u068D\u068B\x03\x02\x02\x02\u068D\u068E"+
		"\x03\x02\x02\x02\u068E\xE7\x03\x02\x02\x02\u068F\u068D\x03\x02\x02\x02"+
		"\u0690\u0691\x07\xAC\x02\x02\u0691\u0692\x07\xAE\x02\x02\u0692\u0693\x05"+
		"\u0126\x94\x02\u0693\xE9\x03\x02\x02\x02\u0694\u0695\x05\u01FA\xFE\x02"+
		"\u0695\u069B\x05\xECw\x02\u0696\u0697\x05\u0276\u013C\x02\u0697\u0698"+
		"\x05\xECw\x02\u0698\u069A\x03\x02\x02\x02\u0699\u0696\x03\x02\x02\x02"+
		"\u069A\u069D\x03\x02\x02\x02\u069B\u0699\x03\x02\x02\x02\u069B\u069C\x03"+
		"\x02\x02\x02\u069C\u06A0\x03\x02\x02\x02\u069D\u069B\x03\x02\x02\x02\u069E"+
		"\u06A0\bv\x01\x02\u069F\u0694\x03\x02\x02\x02\u069F\u069E\x03\x02\x02"+
		"\x02\u06A0\xEB\x03\x02\x02\x02\u06A1\u06A2\x05\u013A\x9E\x02\u06A2\u06A7"+
		"\x05\u0282\u0142\x02\u06A3\u06A8\x05\u0126\x94\x02\u06A4\u06A8\x05\xF0"+
		"y\x02\u06A5\u06A8\x05\xEEx\x02\u06A6\u06A8\x05\xF2z\x02\u06A7\u06A3\x03"+
		"\x02\x02\x02\u06A7\u06A4\x03\x02\x02\x02\u06A7\u06A5\x03\x02\x02\x02\u06A7"+
		"\u06A6\x03\x02\x02\x02\u06A8\u06F1\x03\x02\x02\x02\u06A9\u06AA\x05\u013A"+
		"\x9E\x02\u06AA\u06AB\x05\u0282\u0142\x02\u06AB\u06AE\x05\u013A\x9E\x02"+
		"\u06AC\u06AF\x05\u027A\u013E\x02\u06AD\u06AF\x05\u027C\u013F\x02\u06AE"+
		"\u06AC\x03\x02\x02\x02\u06AE\u06AD\x03\x02\x02\x02\u06AF\u06B0\x03\x02"+
		"\x02\x02\u06B0\u06B1\x05\u012A\x96\x02\u06B1\u06F1\x03\x02\x02\x02\u06B2"+
		"\u06B3\x05\u013A\x9E\x02\u06B3\u06B4\x05\u0282\u0142\x02\u06B4\u06B7\x05"+
		"\u013A\x9E\x02\u06B5\u06B8\x05\u027A\u013E\x02\u06B6\u06B8\x05\u027C\u013F"+
		"\x02\u06B7\u06B5\x03\x02\x02\x02\u06B7\u06B6\x03\x02\x02\x02\u06B8\u06B9"+
		"\x03\x02\x02\x02\u06B9\u06BA\x05\xF0y\x02\u06BA\u06F1\x03\x02\x02\x02"+
		"\u06BB\u06BC\x05\u013A\x9E\x02\u06BC\u06BD\x05\u0282\u0142\x02\u06BD\u06C0"+
		"\x05\u013A\x9E\x02\u06BE\u06C1\x05\u027A\u013E\x02\u06BF\u06C1\x05\u027C"+
		"\u013F\x02\u06C0\u06BE\x03\x02\x02\x02\u06C0\u06BF\x03\x02\x02\x02\u06C1"+
		"\u06C2\x03\x02\x02\x02\u06C2\u06C3\x05\xEEx\x02\u06C3\u06F1\x03\x02\x02"+
		"\x02\u06C4\u06C5\x05\u013A\x9E\x02\u06C5\u06C6\x05\u0282\u0142\x02\u06C6"+
		"\u06C9\x05\u013A\x9E\x02\u06C7\u06CA\x05\u027A\u013E\x02\u06C8\u06CA\x05"+
		"\u027C\u013F\x02\u06C9\u06C7\x03\x02\x02\x02\u06C9\u06C8\x03\x02\x02\x02"+
		"\u06CA\u06CB\x03\x02\x02\x02\u06CB\u06CC\x05\xF2z\x02\u06CC\u06F1\x03"+
		"\x02\x02\x02\u06CD\u06CE\x05\u013A\x9E\x02\u06CE\u06CF\x05\u0282\u0142"+
		"\x02\u06CF\u06D2\x05\xEEx\x02\u06D0\u06D3\x05\u027A\u013E\x02\u06D1\u06D3"+
		"\x05\u027C\u013F\x02\u06D2\u06D0\x03\x02\x02\x02\u06D2\u06D1\x03\x02\x02"+
		"\x02\u06D3\u06D4\x03\x02\x02\x02\u06D4\u06D5\x07\xAC\x02\x02\u06D5\u06F1"+
		"\x03\x02\x02\x02\u06D6\u06D7\x05\u013A\x9E\x02\u06D7\u06D8\x05\u0282\u0142"+
		"\x02\u06D8\u06DB\x05\xF0y\x02\u06D9\u06DC\x05\u027A\u013E\x02\u06DA\u06DC"+
		"\x05\u027C\u013F\x02\u06DB\u06D9\x03\x02\x02\x02\u06DB\u06DA\x03\x02\x02"+
		"\x02\u06DC\u06DD\x03\x02\x02\x02\u06DD\u06DE\x07\xAC\x02\x02\u06DE\u06F1"+
		"\x03\x02\x02\x02\u06DF\u06E0\x05\u013A\x9E\x02\u06E0\u06E1\x05\u0282\u0142"+
		"\x02\u06E1\u06E4\x05\xF2z\x02\u06E2\u06E5\x05\u027A\u013E\x02\u06E3\u06E5"+
		"\x05\u027C\u013F\x02\u06E4\u06E2\x03\x02\x02\x02\u06E4\u06E3\x03\x02\x02"+
		"\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E7\x07\xAC\x02\x02\u06E7\u06F1"+
		"\x03\x02\x02\x02\u06E8\u06E9\x05\u013A\x9E\x02\u06E9\u06EA\x05\u0272\u013A"+
		"\x02\u06EA\u06EB\x05\u012A\x96\x02\u06EB\u06EC\x05\u0274\u013B\x02\u06EC"+
		"\u06ED\x05\u0282\u0142\x02\u06ED\u06EE\x05\u0126\x94\x02\u06EE\u06F1\x03"+
		"\x02\x02\x02\u06EF\u06F1\bw\x01\x02\u06F0\u06A1\x03\x02\x02\x02\u06F0"+
		"\u06A9\x03\x02\x02\x02\u06F0\u06B2\x03\x02\x02\x02\u06F0\u06BB\x03\x02"+
		"\x02\x02\u06F0\u06C4\x03\x02\x02\x02\u06F0\u06CD\x03\x02\x02\x02\u06F0"+
		"\u06D6\x03\x02\x02\x02\u06F0\u06DF\x03\x02\x02\x02\u06F0\u06E8\x03\x02"+
		"\x02\x02\u06F0\u06EF\x03\x02\x02\x02\u06F1\xED\x03\x02\x02\x02\u06F2\u06F3"+
		"\x05\u026A\u0136\x02\u06F3\u06F9\x05\u0126\x94\x02\u06F4\u06F5\x05\u0276"+
		"\u013C\x02\u06F5\u06F6\x05\u0126\x94\x02\u06F6\u06F8\x03\x02\x02\x02\u06F7"+
		"\u06F4\x03\x02\x02\x02\u06F8\u06FB\x03\x02\x02\x02\u06F9\u06F7\x03\x02"+
		"\x02\x02\u06F9\u06FA\x03\x02\x02\x02\u06FA\u06FC\x03\x02\x02\x02\u06FB"+
		"\u06F9\x03\x02\x02\x02\u06FC\u06FD\x05\u026C\u0137\x02\u06FD\xEF\x03\x02"+
		"\x02\x02\u06FE\u06FF\x05\u026A\u0136\x02\u06FF\u0700\x05\u0126\x94\x02"+
		"\u0700\u0701\x05\u0278\u013D\x02\u0701\u0702\x05\u0126\x94\x02\u0702\u0709"+
		"\x03\x02\x02\x02\u0703\u0704\x05\u0126\x94\x02\u0704\u0705\x05\u0278\u013D"+
		"\x02\u0705\u0706\x05\u0126\x94\x02\u0706\u0708\x03\x02\x02\x02\u0707\u0703"+
		"\x03\x02\x02\x02\u0708\u070B\x03\x02\x02\x02\u0709\u0707\x03\x02\x02\x02"+
		"\u0709\u070A\x03\x02\x02\x02\u070A\u070C\x03\x02\x02\x02\u070B\u0709\x03"+
		"\x02\x02\x02\u070C\u070D\x05\u026C\u0137\x02\u070D\xF1\x03\x02\x02\x02"+
		"\u070E\u070F\x05\u0272\u013A\x02\u070F\u0715\x05\u0126\x94\x02\u0710\u0711"+
		"\x05\u0278\u013D\x02\u0711\u0712\x05\u0126\x94\x02\u0712\u0714\x03\x02"+
		"\x02\x02\u0713\u0710\x03\x02\x02\x02\u0714\u0717\x03\x02\x02\x02\u0715"+
		"\u0713\x03\x02\x02\x02\u0715\u0716\x03\x02\x02\x02\u0716\u0718\x03\x02"+
		"\x02\x02\u0717\u0715\x03\x02\x02\x02\u0718\u0719\x05\u0274\u013B\x02\u0719"+
		"\xF3\x03\x02\x02\x02\u071A\u071B\x05\u01B6\xDC\x02\u071B\u071C\x05\u01B8"+
		"\xDD\x02\u071C\u071D\x05\u0138\x9D\x02\u071D\u071E\x05\u0104\x83\x02\u071E"+
		"\u0721\x05\u0102\x82\x02\u071F\u0722\x05\xFE\x80\x02\u0720\u0722\x03\x02"+
		"\x02\x02\u0721\u071F\x03\x02\x02\x02\u0721\u0720\x03\x02\x02\x02\u0722"+
		"\u0724\x03\x02\x02\x02\u0723\u0725\x05\xF6|\x02\u0724\u0723\x03\x02\x02"+
		"\x02\u0724\u0725\x03\x02\x02\x02\u0725\xF5\x03\x02\x02\x02\u0726\u0727"+
		"\x05\u021E\u0110\x02\u0727\u0728\x05\xFA~\x02\u0728\u0737\x03\x02\x02"+
		"\x02\u0729\u072A\x05\u021E\u0110\x02\u072A\u072B\x05\xFA~\x02\u072B\u072C"+
		"\x05\u0172\xBA\x02\u072C\u072D\x05\xF8}\x02\u072D\u0737\x03\x02\x02\x02"+
		"\u072E\u072F\x05\u021E\u0110\x02\u072F\u0730\x05\xF8}\x02\u0730\u0737"+
		"\x03\x02\x02\x02\u0731\u0732\x05\u021E\u0110\x02\u0732\u0733\x05\xF8}"+
		"\x02\u0733\u0734\x05\u0172\xBA\x02\u0734\u0735\x05\xFA~\x02\u0735\u0737"+
		"\x03\x02\x02\x02\u0736\u0726\x03\x02\x02\x02\u0736\u0729\x03\x02\x02\x02"+
		"\u0736\u072E\x03\x02\x02\x02\u0736\u0731\x03\x02\x02\x02\u0737\xF7\x03"+
		"\x02\x02\x02\u0738\u0739\x05\u0208\u0105\x02\u0739\u073A\x05\u012A\x96"+
		"\x02\u073A\xF9\x03\x02\x02\x02\u073B\u073C\x05\u0210\u0109\x02\u073C\u073D"+
		"\x05\u012A\x96\x02\u073D\xFB\x03\x02\x02\x02\u073E\u073F\x05\u021E\u0110"+
		"\x02\u073F\u0740\x05\xF8}\x02\u0740\xFD\x03\x02\x02\x02\u0741\u0742\x05"+
		"\u01AC\xD7\x02\u0742\u0743\x05\u01D6\xEC\x02\u0743\u0744\x05\u019E\xD0"+
		"\x02\u0744\xFF\x03\x02\x02\x02\u0745\u0746\x05\u01AC\xD7\x02\u0746\u0747"+
		"\x05\u019E\xD0\x02\u0747\u0101\x03\x02\x02\x02\u0748\u0749\x05\u0220\u0111"+
		"\x02\u0749\u074A\x05\u0266\u0134\x02\u074A\u074B\x05\u0108\x85\x02\u074B"+
		"\u074C\x05\u0268\u0135\x02\u074C\u074F\x03\x02\x02\x02\u074D\u074F\b\x82"+
		"\x01\x02\u074E\u0748\x03\x02\x02\x02\u074E\u074D\x03\x02\x02\x02\u074F"+
		"\u0103\x03\x02\x02\x02\u0750\u0751\x05\u0266\u0134\x02\u0751\u0752\x05"+
		"\u0106\x84\x02\u0752\u0753\x05\u0268\u0135\x02\u0753\u0756\x03\x02\x02"+
		"\x02\u0754\u0756\b\x83\x01\x02\u0755\u0750\x03\x02\x02\x02\u0755\u0754"+
		"\x03\x02\x02\x02\u0756\u0105\x03\x02\x02\x02\u0757\u075F\x05\u013A\x9E"+
		"\x02\u0758\u075B\x05\u0276\u013C\x02\u0759\u075C\x05\u013A\x9E\x02\u075A"+
		"\u075C\b\x84\x01\x02\u075B\u0759\x03\x02\x02\x02\u075B\u075A\x03\x02\x02"+
		"\x02\u075C\u075E\x03\x02\x02\x02\u075D\u0758\x03\x02\x02\x02\u075E\u0761"+
		"\x03\x02\x02\x02\u075F\u075D\x03\x02\x02\x02\u075F\u0760\x03\x02\x02\x02"+
		"\u0760\u0764\x03\x02\x02\x02\u0761\u075F\x03\x02\x02\x02\u0762\u0764\b"+
		"\x84\x01\x02\u0763\u0757\x03\x02\x02\x02\u0763\u0762\x03\x02\x02\x02\u0764"+
		"\u0107\x03\x02\x02\x02\u0765\u076B\x05\u010A\x86\x02\u0766\u0767\x05\u0276"+
		"\u013C\x02\u0767\u0768\x05\u010A\x86\x02\u0768\u076A\x03\x02\x02\x02\u0769"+
		"\u0766\x03\x02\x02\x02\u076A\u076D\x03\x02\x02\x02\u076B\u0769\x03\x02"+
		"\x02\x02\u076B\u076C\x03\x02\x02\x02\u076C\u0109\x03\x02\x02\x02\u076D"+
		"\u076B\x03\x02\x02\x02\u076E\u0773\x05\u0126\x94\x02\u076F\u0773\x05\xF0"+
		"y\x02\u0770\u0773\x05\xEEx\x02\u0771\u0773\x05\xF2z\x02\u0772\u076E\x03"+
		"\x02\x02\x02\u0772\u076F\x03\x02\x02\x02\u0772\u0770\x03\x02\x02\x02\u0772"+
		"\u0771\x03\x02\x02\x02\u0773\u0776\x03\x02\x02\x02\u0774\u0776\b\x86\x01"+
		"\x02\u0775\u0772\x03\x02\x02\x02\u0775\u0774\x03\x02\x02\x02\u0776\u010B"+
		"\x03\x02\x02\x02\u0777\u0779\x05\u01F8\xFD\x02\u0778\u077A\x05\u0194\xCB"+
		"\x02\u0779\u0778\x03\x02\x02\x02\u0779\u077A\x03\x02\x02\x02\u077A\u077B"+
		"\x03\x02\x02\x02\u077B\u077C\x05\u0118\x8D\x02\u077C\u077E\x05\u0110\x89"+
		"\x02\u077D\u077F\x05\u0116\x8C\x02\u077E\u077D\x03\x02\x02\x02\u077E\u077F"+
		"\x03\x02\x02\x02\u077F\u0781\x03\x02\x02\x02\u0780\u0782\x05\u0112\x8A"+
		"\x02\u0781\u0780\x03\x02\x02\x02\u0781\u0782\x03\x02\x02\x02\u0782\u0784"+
		"\x03\x02\x02\x02\u0783\u0785\x05\u010E\x88\x02\u0784\u0783\x03\x02\x02"+
		"\x02\u0784\u0785\x03\x02\x02\x02\u0785\u0787\x03\x02\x02\x02\u0786\u0788"+
		"\x05\u016E\xB8\x02\u0787\u0786\x03\x02\x02\x02\u0787\u0788\x03\x02\x02"+
		"\x02\u0788\u010D\x03\x02\x02\x02\u0789\u078A\x05\u01C4\xE3\x02\u078A\u078B"+
		"\x05\u012A\x96\x02\u078B\u010F\x03\x02\x02\x02\u078C\u078D\x05\u01A4\xD3"+
		"\x02\u078D\u078E\x05\u0138\x9D\x02\u078E\u0791\x03\x02\x02\x02\u078F\u0791"+
		"\b\x89\x01\x02\u0790\u078C\x03\x02\x02\x02\u0790\u078F\x03\x02\x02\x02"+
		"\u0791\u0111\x03\x02\x02\x02\u0792\u0793\x05\u01E4\xF3\x02\u0793\u0794"+
		"\x05\u0114\x8B\x02\u0794\u0113\x03\x02\x02\x02\u0795\u0798\x05\u013A\x9E"+
		"\x02\u0796\u0799\x05\u0178\xBD\x02\u0797\u0799\x05\u0190\xC9\x02\u0798"+
		"\u0796\x03\x02\x02\x02\u0798\u0797\x03\x02\x02\x02\u0798\u0799\x03\x02"+
		"\x02\x02\u0799\u0115\x03\x02\x02\x02\u079A\u079B\x05\u0224\u0113\x02\u079B"+
		"\u079C\x05\u011C\x8F\x02\u079C\u0117\x03\x02\x02\x02\u079D\u07A9\x05\u0260"+
		"\u0131\x02\u079E\u07A4\x05\u011A\x8E\x02\u079F\u07A0\x05\u0276\u013C\x02"+
		"\u07A0\u07A1\x05\u011A\x8E\x02\u07A1\u07A3\x03\x02\x02\x02\u07A2\u079F"+
		"\x03\x02\x02\x02\u07A3\u07A6\x03\x02\x02\x02\u07A4\u07A2\x03\x02\x02\x02"+
		"\u07A4\u07A5\x03\x02\x02\x02\u07A5\u07A9\x03\x02\x02\x02\u07A6\u07A4\x03"+
		"\x02\x02\x02\u07A7\u07A9\b\x8D\x01\x02\u07A8\u079D\x03\x02\x02\x02\u07A8"+
		"\u079E\x03\x02\x02\x02\u07A8\u07A7\x03\x02\x02\x02\u07A9\u0119\x03\x02"+
		"\x02\x02\u07AA\u07B9\x05\u013A\x9E\x02\u07AB\u07AF\x05\u013A\x9E\x02\u07AC"+
		"\u07AD\x05\u0176\xBC\x02\u07AD\u07AE\x07\xAC\x02\x02\u07AE\u07B0\x03\x02"+
		"\x02\x02\u07AF\u07AC\x03\x02\x02\x02\u07AF\u07B0\x03\x02\x02\x02\u07B0"+
		"\u07B9\x03\x02\x02\x02\u07B1\u07B5\x05\u0122\x92\x02\u07B2\u07B3\x05\u0176"+
		"\xBC\x02\u07B3\u07B4\x07\xAC\x02\x02\u07B4\u07B6\x03\x02\x02\x02\u07B5"+
		"\u07B2\x03\x02\x02\x02\u07B5\u07B6\x03\x02\x02\x02\u07B6\u07B9\x03\x02"+
		"\x02\x02\u07B7\u07B9\b\x8E\x01\x02\u07B8\u07AA\x03\x02\x02\x02\u07B8\u07AB"+
		"\x03\x02\x02\x02\u07B8\u07B1\x03\x02\x02\x02\u07B8\u07B7\x03\x02\x02\x02"+
		"\u07B9\u011B\x03\x02\x02\x02\u07BA\u07C0\x05\u011E\x90\x02\u07BB\u07BC"+
		"\x05\u0172\xBA\x02\u07BC\u07BD\x05\u011E\x90\x02\u07BD\u07BF\x03\x02\x02"+
		"\x02\u07BE\u07BB\x03\x02\x02\x02\u07BF\u07C2\x03\x02\x02\x02\u07C0\u07BE"+
		"\x03\x02\x02\x02\u07C0\u07C1\x03\x02\x02\x02\u07C1\u011D\x03\x02\x02\x02"+
		"\u07C2\u07C0\x03\x02\x02\x02\u07C3\u07C4\x05\u013A\x9E\x02\u07C4\u07C5"+
		"\x05\u0120\x91\x02\u07C5\u07C6\x05\u0126\x94\x02\u07C6\u07E1\x03\x02\x02"+
		"\x02\u07C7\u07C8\x05\u013A\x9E\x02\u07C8\u07C9\x05\u01AE\xD8\x02\u07C9"+
		"\u07CB\x05\u0266\u0134\x02\u07CA\u07CC\x05\u0124\x93\x02\u07CB\u07CA\x03"+
		"\x02\x02\x02\u07CB\u07CC\x03\x02\x02\x02\u07CC\u07CD\x03\x02\x02\x02\u07CD"+
		"\u07CE\x05\u0268\u0135\x02\u07CE\u07E1\x03\x02\x02\x02\u07CF\u07D0\x05"+
		"\u013A\x9E\x02\u07D0\u07D1\x05\u0188\xC5\x02\u07D1\u07D2\x05\u0126\x94"+
		"\x02\u07D2\u07E1\x03\x02\x02\x02\u07D3\u07D4\x05\u013A\x9E\x02\u07D4\u07D5"+
		"\x05\u018A\xC6\x02\u07D5\u07D6\x05\u0126\x94\x02\u07D6\u07E1\x03\x02\x02"+
		"\x02\u07D7\u07D8\x05\u0122\x92\x02\u07D8\u07D9\x05\u0120\x91\x02\u07D9"+
		"\u07DA\x05\u0126\x94\x02\u07DA\u07E1\x03\x02\x02\x02\u07DB\u07DC\x05\u0122"+
		"\x92\x02\u07DC\u07DD\x05\u0120\x91\x02\u07DD\u07DE\x05\u0122\x92\x02\u07DE"+
		"\u07E1\x03\x02\x02\x02\u07DF\u07E1\b\x90\x01\x02\u07E0\u07C3\x03\x02\x02"+
		"\x02\u07E0\u07C7\x03\x02\x02\x02\u07E0\u07CF\x03\x02\x02\x02\u07E0\u07D3"+
		"\x03\x02\x02\x02\u07E0\u07D7\x03\x02\x02\x02\u07E0\u07DB\x03\x02\x02\x02"+
		"\u07E0\u07DF\x03\x02\x02\x02\u07E1\u011F\x03\x02\x02\x02\u07E2\u07E8\x05"+
		"\u0282\u0142\x02\u07E3\u07E8\x05\u0284\u0143\x02\u07E4\u07E8\x05\u0286"+
		"\u0144\x02\u07E5\u07E8\x05\u0288\u0145\x02\u07E6\u07E8\x05\u028A\u0146"+
		"\x02\u07E7\u07E2\x03\x02\x02\x02\u07E7\u07E3\x03\x02\x02\x02\u07E7\u07E4"+
		"\x03\x02\x02\x02\u07E7\u07E5\x03\x02\x02\x02\u07E7\u07E6\x03\x02\x02\x02"+
		"\u07E8\u0121\x03\x02\x02\x02\u07E9\u07EA\x07\xAC\x02\x02\u07EA\u07EB\x07"+
		"\x03\x02\x02\u07EB\u07EC\x07\x13\x02\x02\u07EC\u07F4\x07\x04\x02\x02\u07ED"+
		"\u07EE\x07\xAC\x02\x02\u07EE\u07F0\x07\x03\x02\x02\u07EF\u07F1\x05\u0124"+
		"\x93\x02\u07F0\u07EF\x03\x02\x02\x02\u07F0\u07F1\x03\x02\x02\x02\u07F1"+
		"\u07F2\x03\x02\x02\x02\u07F2\u07F4\x07\x04\x02\x02\u07F3\u07E9\x03\x02"+
		"\x02\x02\u07F3\u07ED\x03\x02\x02\x02\u07F4\u0123\x03\x02\x02\x02\u07F5"+
		"\u07F9\x05\u0126\x94\x02\u07F6\u07F9\x07\xAC\x02\x02\u07F7\u07F9\x05\u0122"+
		"\x92\x02\u07F8\u07F5\x03\x02\x02\x02\u07F8\u07F6\x03\x02\x02\x02\u07F8"+
		"\u07F7\x03\x02\x02\x02\u07F9\u0802\x03\x02\x02\x02\u07FA\u07FE\x05\u0276"+
		"\u013C\x02\u07FB\u07FF\x05\u0126\x94\x02\u07FC\u07FF\x07\xAC\x02\x02\u07FD"+
		"\u07FF\x05\u0122\x92\x02\u07FE\u07FB\x03\x02\x02\x02\u07FE\u07FC\x03\x02"+
		"\x02\x02\u07FE\u07FD\x03\x02\x02\x02\u07FF\u0801\x03\x02\x02\x02\u0800"+
		"\u07FA\x03\x02\x02\x02\u0801\u0804\x03\x02\x02\x02\u0802\u0800\x03\x02"+
		"\x02\x02\u0802\u0803\x03\x02\x02\x02\u0803\u0125\x03\x02\x02\x02\u0804"+
		"\u0802\x03\x02\x02\x02\u0805\u080C\x05\u0128\x95\x02\u0806\u080C\x05\u012E"+
		"\x98\x02\u0807\u080C\x05\u012A\x96\x02\u0808\u080C\x05\u0132\x9A\x02\u0809"+
		"\u080C\x05\u0130\x99\x02\u080A\u080C\x05\u01D8\xED\x02\u080B\u0805\x03"+
		"\x02\x02\x02\u080B\u0806\x03\x02\x02\x02\u080B\u0807\x03\x02\x02\x02\u080B"+
		"\u0808\x03\x02\x02\x02\u080B\u0809\x03\x02\x02\x02\u080B\u080A\x03\x02"+
		"\x02\x02\u080C\u0127\x03\x02\x02\x02\u080D\u080E\x07\xAD\x02\x02\u080E"+
		"\u0129\x03\x02\x02\x02\u080F\u0810\x07\xA8\x02\x02\u0810\u012B\x03\x02"+
		"\x02\x02\u0811\u0812\t\x02\x02\x02\u0812\u012D\x03\x02\x02\x02\u0813\u0814"+
		"\x07\xA7\x02\x02\u0814\u012F\x03\x02\x02\x02\u0815\u0816\t\x03\x02\x02"+
		"\u0816\u0131\x03\x02\x02\x02\u0817\u0818\x07\xAA\x02\x02\u0818\u0133\x03"+
		"\x02\x02\x02\u0819\u081E\x07\xAC\x02\x02\u081A\u081B\x07\f\x02\x02\u081B"+
		"\u081C\x07\xAC\x02\x02\u081C\u081E\x07\f\x02\x02\u081D\u0819\x03\x02\x02"+
		"\x02\u081D\u081A\x03\x02\x02\x02\u081E\u0135\x03\x02\x02\x02\u081F\u0825"+
		"\x07\xAC\x02\x02\u0820\u0821\x07\f\x02\x02\u0821\u0822\x07\xAC\x02\x02"+
		"\u0822\u0825\x07\f\x02\x02\u0823\u0825\b\x9C\x01\x02\u0824\u081F\x03\x02"+
		"\x02\x02\u0824\u0820\x03\x02\x02\x02\u0824\u0823\x03\x02\x02\x02\u0825"+
		"\u0137\x03\x02\x02\x02\u0826\u082D\x05\u0136\x9C\x02\u0827\u0828\x05\u0134"+
		"\x9B\x02\u0828\u0829\x05\u0262\u0132\x02\u0829\u082A\x05\u0136\x9C\x02"+
		"\u082A\u082D\x03\x02\x02\x02\u082B\u082D\b\x9D\x01\x02\u082C\u0826\x03"+
		"\x02\x02\x02\u082C\u0827\x03\x02\x02\x02\u082C\u082B\x03\x02\x02\x02\u082D"+
		"\u0139\x03\x02\x02\x02\u082E\u083E\x07\xAC\x02\x02\u082F\u0830\x07\f\x02"+
		"\x02\u0830\u0831\x07\xAC\x02\x02\u0831\u083E\x07\f\x02\x02\u0832\u083E"+
		"\x07o\x02\x02\u0833\u083E\x07g\x02\x02\u0834\u083E\x07`\x02\x02\u0835"+
		"\u083E\x077\x02\x02\u0836\u083E\x07O\x02\x02\u0837\u083E\x07\x82\x02\x02"+
		"\u0838\u083E\x07G\x02\x02\u0839\u083E\x07l\x02\x02\u083A\u083E\x07\x80"+
		"\x02\x02\u083B\u083E\x07c\x02\x02\u083C\u083E\x07L\x02\x02\u083D\u082E"+
		"\x03\x02\x02\x02\u083D\u082F\x03\x02\x02\x02\u083D\u0832\x03\x02\x02\x02"+
		"\u083D\u0833\x03\x02\x02\x02\u083D\u0834\x03\x02\x02\x02\u083D\u0835\x03"+
		"\x02\x02\x02\u083D\u0836\x03\x02\x02\x02\u083D\u0837\x03\x02\x02\x02\u083D"+
		"\u0838\x03\x02\x02\x02\u083D\u0839\x03\x02\x02\x02\u083D\u083A\x03\x02"+
		"\x02\x02\u083D\u083B\x03\x02\x02\x02\u083D\u083C\x03\x02\x02\x02\u083E"+
		"\u013B\x03\x02\x02\x02\u083F\u0842\x05\u0140\xA1\x02\u0840\u0842\x05\u013E"+
		"\xA0\x02\u0841\u083F\x03\x02\x02\x02\u0841\u0840\x03\x02\x02\x02\u0842"+
		"\u013D\x03\x02\x02\x02\u0843\u0844\x05\u023C\u011F\x02\u0844\u0845\x05"+
		"\u025E\u0130\x02\u0845\u0853\x03\x02\x02\x02\u0846\u0847\x05\u0248\u0125"+
		"\x02\u0847\u0848\x05\u025E\u0130\x02\u0848\u0853\x03\x02\x02\x02\u0849"+
		"\u084A\x05\u0242\u0122\x02\u084A\u084B\x05\u025E\u0130\x02\u084B\u0853"+
		"\x03\x02\x02\x02\u084C\u084D\x05\u0244\u0123\x02\u084D\u084E\x05\u025E"+
		"\u0130\x02\u084E\u0853\x03\x02\x02\x02\u084F\u0850\x05\u0254\u012B\x02"+
		"\u0850\u0851\x05\u025E\u0130\x02\u0851\u0853\x03\x02\x02\x02\u0852\u0843"+
		"\x03\x02\x02\x02\u0852\u0846\x03\x02\x02\x02\u0852\u0849\x03\x02\x02\x02"+
		"\u0852\u084C\x03\x02\x02\x02\u0852\u084F\x03\x02\x02\x02\u0853\u013F\x03"+
		"\x02\x02\x02\u0854\u086A\x05\u022A\u0116\x02\u0855\u086A\x05\u022C\u0117"+
		"\x02\u0856\u086A\x05\u022E\u0118\x02\u0857\u086A\x05\u0230\u0119\x02\u0858"+
		"\u086A\x05\u0232\u011A\x02\u0859\u086A\x05\u0234\u011B\x02\u085A\u086A"+
		"\x05\u0236\u011C\x02\u085B\u086A\x05\u0238\u011D\x02\u085C\u086A\x05\u023A"+
		"\u011E\x02\u085D\u086A\x05\u023E\u0120\x02\u085E\u086A\x05\u0240\u0121"+
		"\x02\u085F\u086A\x05\u0246\u0124\x02\u0860\u086A\x05\u024A\u0126\x02\u0861"+
		"\u086A\x05\u024C\u0127\x02\u0862\u086A\x05\u024E\u0128\x02\u0863\u086A"+
		"\x05\u0250\u0129\x02\u0864\u086A\x05\u0252\u012A\x02\u0865\u086A\x05\u0258"+
		"\u012D\x02\u0866\u086A\x05\u025A\u012E\x02\u0867\u086A\x05\u025C\u012F"+
		"\x02\u0868\u086A\x05\u0256\u012C\x02\u0869\u0854\x03\x02\x02\x02\u0869"+
		"\u0855\x03\x02\x02\x02\u0869\u0856\x03\x02\x02\x02\u0869\u0857\x03\x02"+
		"\x02\x02\u0869\u0858\x03\x02\x02\x02\u0869\u0859\x03\x02\x02\x02\u0869"+
		"\u085A\x03\x02\x02\x02\u0869\u085B\x03\x02\x02\x02\u0869\u085C\x03\x02"+
		"\x02\x02\u0869\u085D\x03\x02\x02\x02\u0869\u085E\x03\x02\x02\x02\u0869"+
		"\u085F\x03\x02\x02\x02\u0869\u0860\x03\x02\x02\x02\u0869\u0861\x03\x02"+
		"\x02\x02\u0869\u0862\x03\x02\x02\x02\u0869\u0863\x03\x02\x02\x02\u0869"+
		"\u0864\x03\x02\x02\x02\u0869\u0865\x03\x02\x02\x02\u0869\u0866\x03\x02"+
		"\x02\x02\u0869\u0867\x03\x02\x02\x02\u0869\u0868\x03\x02\x02\x02\u086A"+
		"\u0141\x03\x02\x02\x02\u086B\u086E\x05\u0178\xBD\x02\u086C\u086E\x05\u0190"+
		"\xC9\x02\u086D\u086B\x03\x02\x02\x02\u086D\u086C\x03\x02\x02\x02\u086E"+
		"\u0143\x03\x02\x02\x02\u086F\u0870\x07\xAC\x02\x02\u0870\u0145\x03\x02"+
		"\x02\x02\u0871\u0872\x07\xAC\x02\x02\u0872\u0147\x03\x02\x02\x02\u0873"+
		"\u0874\x05\u012E\x98\x02\u0874\u0149\x03\x02\x02\x02\u0875\u0876\x07\xAC"+
		"\x02\x02\u0876\u014B\x03\x02\x02\x02\u0877\u0878\x07\xAC\x02\x02\u0878"+
		"\u014D\x03\x02\x02\x02\u0879\u087A\x07\xAC\x02\x02\u087A\u014F\x03\x02"+
		"\x02\x02\u087B\u087C\x07\xAC\x02\x02\u087C\u0151\x03\x02\x02\x02\u087D"+
		"\u087E\x07\xAC\x02\x02\u087E\u0153\x03\x02\x02\x02\u087F\u0880\x07\xAC"+
		"\x02\x02\u0880\u0155\x03\x02\x02\x02\u0881\u0882\x05\u012E\x98\x02\u0882"+
		"\u0157\x03\x02\x02\x02\u0883\u0884\x07\xAC\x02\x02\u0884\u0159\x03\x02"+
		"\x02\x02\u0885\u0886\x05\u015C\xAF\x02\u0886\u0887\x05\u013C\x9F\x02\u0887"+
		"\u015B\x03\x02\x02\x02\u0888\u0889\x07\xAC\x02\x02\u0889\u015D\x03\x02"+
		"\x02\x02\u088A\u088B\x07\x19\x02\x02\u088B\u015F\x03\x02\x02\x02\u088C"+
		"\u088D\x07\x1A\x02\x02\u088D\u0161\x03\x02\x02\x02\u088E\u088F\x07\x1B"+
		"\x02\x02\u088F\u0163\x03\x02\x02\x02\u0890\u0891\x07\x1E\x02\x02\u0891"+
		"\u0165\x03\x02\x02\x02\u0892\u0893\x07\x1D\x02\x02\u0893\u0167\x03\x02"+
		"\x02\x02\u0894\u0895\x07\x1C\x02\x02\u0895\u0169\x03\x02\x02\x02\u0896"+
		"\u0897\x07\x1B\x02\x02\u0897\u0898\x07g\x02\x02\u0898\u016B\x03\x02\x02"+
		"\x02\u0899\u089A\x07\x1F\x02\x02\u089A\u016D\x03\x02\x02\x02\u089B\u089C"+
		"\x07\x1F\x02\x02\u089C\u089D\x07=\x02\x02\u089D\u016F\x03\x02\x02\x02"+
		"\u089E\u089F\x07 \x02\x02\u089F\u0171\x03\x02\x02\x02\u08A0\u08A1\x07"+
		"!\x02\x02\u08A1\u0173\x03\x02\x02\x02\u08A2\u08A3\x07#\x02\x02\u08A3\u0175"+
		"\x03\x02\x02\x02\u08A4\u08A5\x07$\x02\x02\u08A5\u0177\x03\x02\x02\x02"+
		"\u08A6\u08A7\x07%\x02\x02\u08A7\u0179\x03\x02\x02\x02\u08A8\u08A9\x07"+
		"&\x02\x02\u08A9\u017B\x03\x02\x02\x02\u08AA\u08AB\x07\'\x02\x02\u08AB"+
		"\u017D\x03\x02\x02\x02\u08AC\u08AD\x07(\x02\x02\u08AD\u017F\x03\x02\x02"+
		"\x02\u08AE\u08AF\x07)\x02\x02\u08AF\u0181\x03\x02\x02\x02\u08B0\u08B1"+
		"\x07*\x02\x02\u08B1\u0183\x03\x02\x02\x02\u08B2\u08B3\x07+\x02\x02\u08B3"+
		"\u0185\x03\x02\x02\x02\u08B4\u08B5\x07-\x02\x02\u08B5\u0187\x03\x02\x02"+
		"\x02\u08B6\u08B7\x07/\x02\x02\u08B7\u0189\x03\x02\x02\x02\u08B8\u08B9"+
		"\x07/\x02\x02\u08B9\u08BA\x07L\x02\x02\u08BA\u018B\x03\x02\x02\x02\u08BB"+
		"\u08BC\x070\x02\x02\u08BC\u018D\x03\x02\x02\x02\u08BD\u08BE\x072\x02\x02"+
		"\u08BE\u018F\x03\x02\x02\x02\u08BF\u08C0\x073\x02\x02\u08C0\u0191\x03"+
		"\x02\x02\x02\u08C1\u08C2\x074\x02\x02\u08C2\u0193\x03\x02\x02\x02\u08C3"+
		"\u08C4\x075\x02\x02\u08C4\u0195\x03\x02\x02\x02\u08C5\u08C6\x076\x02\x02"+
		"\u08C6\u0197\x03\x02\x02\x02\u08C7\u08C8\x077\x02\x02\u08C8\u0199\x03"+
		"\x02\x02\x02\u08C9\u08CA\x079\x02\x02\u08CA\u019B\x03\x02\x02\x02\u08CB"+
		"\u08CC\x07:\x02\x02\u08CC\u019D\x03\x02\x02\x02\u08CD\u08CE\x07;\x02\x02"+
		"\u08CE\u019F\x03\x02\x02\x02\u08CF\u08D0\x07=\x02\x02\u08D0\u01A1\x03"+
		"\x02\x02\x02\u08D1\u08D2\x07>\x02\x02\u08D2\u01A3\x03\x02\x02\x02\u08D3"+
		"\u08D4\x07?\x02\x02\u08D4\u01A5\x03\x02\x02\x02\u08D5\u08D6\x07@\x02\x02"+
		"\u08D6\u01A7\x03\x02\x02\x02\u08D7\u08D8\x07A\x02\x02\u08D8\u01A9\x03"+
		"\x02\x02\x02\u08D9\u08DA\x07B\x02\x02\u08DA\u01AB\x03\x02\x02\x02\u08DB"+
		"\u08DC\x07C\x02\x02\u08DC\u01AD\x03\x02\x02\x02\u08DD\u08DE\x07D\x02\x02"+
		"\u08DE\u01AF\x03\x02\x02\x02\u08DF\u08E0\x07E\x02\x02\u08E0\u01B1\x03"+
		"\x02\x02\x02\u08E1\u08E2\x07G\x02\x02\u08E2\u01B3\x03\x02\x02\x02\u08E3"+
		"\u08E4\x07H\x02\x02\u08E4\u01B5\x03\x02\x02\x02\u08E5\u08E6\x07I\x02\x02"+
		"\u08E6\u01B7\x03\x02\x02\x02\u08E7\u08E8\x07J\x02\x02\u08E8\u01B9\x03"+
		"\x02\x02\x02\u08E9\u08EA\x07K\x02\x02\u08EA\u01BB\x03\x02\x02\x02\u08EB"+
		"\u08EC\x07L\x02\x02\u08EC\u01BD\x03\x02\x02\x02\u08ED\u08EE\x07M\x02\x02"+
		"\u08EE\u01BF\x03\x02\x02\x02\u08EF\u08F0\x07N\x02\x02\u08F0\u01C1\x03"+
		"\x02\x02\x02\u08F1\u08F2\x07O\x02\x02\u08F2\u01C3\x03\x02\x02\x02\u08F3"+
		"\u08F4\x07Q\x02\x02\u08F4\u01C5\x03\x02\x02\x02\u08F5\u08F6\x07\x99\x02"+
		"\x02\u08F6\u01C7\x03\x02\x02\x02\u08F7\u08F8\x07\x9A\x02\x02\u08F8\u01C9"+
		"\x03\x02\x02\x02\u08F9\u08FA\x07T\x02\x02\u08FA\u01CB\x03\x02\x02\x02"+
		"\u08FB\u08FC\x07U\x02\x02\u08FC\u01CD\x03\x02\x02\x02\u08FD\u08FE\x07"+
		"V\x02\x02\u08FE\u01CF\x03\x02\x02\x02\u08FF\u0900\x07W\x02\x02\u0900\u01D1"+
		"\x03\x02\x02\x02\u0901\u0902\x07Z\x02\x02\u0902\u01D3\x03\x02\x02\x02"+
		"\u0903\u0904\x07Y\x02\x02\u0904\u01D5\x03\x02\x02\x02\u0905\u0906\x07"+
		"[\x02\x02\u0906\u01D7\x03\x02\x02\x02\u0907\u0908\x07\\\x02\x02\u0908"+
		"\u01D9\x03\x02\x02\x02\u0909\u090A\x07]\x02\x02\u090A\u01DB\x03\x02\x02"+
		"\x02\u090B\u090C\x07^\x02\x02\u090C\u01DD\x03\x02\x02\x02\u090D\u090E"+
		"\x07`\x02\x02\u090E\u01DF\x03\x02\x02\x02\u090F\u0910\x07a\x02\x02\u0910"+
		"\u01E1\x03\x02\x02\x02\u0911\u0912\x07b\x02\x02\u0912\u01E3\x03\x02\x02"+
		"\x02\u0913\u0914\x07b\x02\x02\u0914\u0915\x07)\x02\x02\u0915\u01E5\x03"+
		"\x02\x02\x02\u0916\u0917\x07c\x02\x02\u0917\u01E7\x03\x02\x02\x02\u0918"+
		"\u0919\x07d\x02\x02\u0919\u01E9\x03\x02\x02\x02\u091A\u091B\x07g\x02\x02"+
		"\u091B\u01EB\x03\x02\x02\x02\u091C\u091D\x07h\x02\x02\u091D\u01ED\x03"+
		"\x02\x02\x02\u091E\u091F\x07j\x02\x02\u091F\u01EF\x03\x02\x02\x02\u0920"+
		"\u0921\x07k\x02\x02\u0921\u01F1\x03\x02\x02\x02\u0922\u0923\x07l\x02\x02"+
		"\u0923\u01F3\x03\x02\x02\x02\u0924\u0925\x07m\x02\x02\u0925\u01F5\x03"+
		"\x02\x02\x02\u0926\u0927\x07o\x02\x02\u0927\u01F7\x03\x02\x02\x02\u0928"+
		"\u0929\x07q\x02\x02\u0929\u01F9\x03\x02\x02\x02\u092A\u092B\x07r\x02\x02"+
		"\u092B\u01FB\x03\x02\x02\x02\u092C\u092D\x07s\x02\x02\u092D\u01FD\x03"+
		"\x02\x02\x02\u092E\u092F\x07t\x02\x02\u092F\u01FF\x03\x02\x02\x02\u0930"+
		"\u0931\x07u\x02\x02\u0931\u0201\x03\x02\x02\x02\u0932\u0933\x07v\x02\x02"+
		"\u0933\u0203\x03\x02\x02\x02\u0934\u0935\x07w\x02\x02\u0935\u0205\x03"+
		"\x02\x02\x02\u0936\u0937\x07x\x02\x02\u0937\u0207\x03\x02\x02\x02\u0938"+
		"\u0939\x07z\x02\x02\u0939\u0209\x03\x02\x02\x02\u093A\u093B\x07{\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\u093B\u020B\x03\x02\x02\x02\u093C\u093D\x07}\x02\x02\u093D\u020D"+
		"\x03\x02\x02\x02\u093E\u093F\x07\x7F\x02\x02\u093F\u020F\x03\x02\x02\x02"+
		"\u0940\u0941\x07\x80\x02\x02\u0941\u0211\x03\x02\x02\x02\u0942\u0943\x07"+
		"\x82\x02\x02\u0943\u0213\x03\x02\x02\x02\u0944\u0945\x07\x83\x02\x02\u0945"+
		"\u0215\x03\x02\x02\x02\u0946\u0947\x07\x84\x02\x02\u0947\u0217\x03\x02"+
		"\x02\x02\u0948\u0949\x07\x85\x02\x02\u0949\u0219\x03\x02\x02\x02\u094A"+
		"\u094B\x07\x86\x02\x02\u094B\u021B\x03\x02\x02\x02\u094C\u094D\x07\xA5"+
		"\x02\x02\u094D\u021D\x03\x02\x02\x02\u094E\u094F\x07\x87\x02\x02\u094F"+
		"\u021F\x03\x02\x02\x02\u0950\u0951\x07\x88\x02\x02\u0951\u0221\x03\x02"+
		"\x02\x02\u0952\u0953\x07\x89\x02\x02\u0953\u0223\x03\x02\x02\x02\u0954"+
		"\u0955\x07\x8A\x02\x02\u0955\u0225\x03\x02\x02\x02\u0956\u0957\x07\x8B"+
		"\x02\x02\u0957\u0227\x03\x02\x02\x02\u0958\u0959\x07n\x02\x02\u0959\u0229"+
		"\x03\x02\x02\x02\u095A\u095B\x07\x8D\x02\x02\u095B\u022B\x03\x02\x02\x02"+
		"\u095C\u095D\x07\x8E\x02\x02\u095D\u022D\x03\x02\x02\x02\u095E\u095F\x07"+
		"\x8F\x02\x02\u095F\u022F\x03\x02\x02\x02\u0960\u0961\x07\x90\x02\x02\u0961"+
		"\u0231\x03\x02\x02\x02\u0962\u0963\x07\x91\x02\x02\u0963\u0233\x03\x02"+
		"\x02\x02\u0964\u0965\x07\x92\x02\x02\u0965\u0235\x03\x02\x02\x02\u0966"+
		"\u0967\x07\x93\x02\x02\u0967\u0237\x03\x02\x02\x02\u0968\u0969\x07\x94"+
		"\x02\x02\u0969\u0239\x03\x02\x02\x02\u096A\u096B\x07\x95\x02\x02\u096B"+
		"\u023B\x03\x02\x02\x02\u096C\u096D\x07\x96\x02\x02\u096D\u023D\x03\x02"+
		"\x02\x02\u096E\u096F\x07\x97\x02\x02\u096F\u023F\x03\x02\x02\x02\u0970"+
		"\u0971\x07\x98\x02\x02\u0971\u0241\x03\x02\x02\x02\u0972\u0973\x07\x99"+
		"\x02\x02\u0973\u0243\x03\x02\x02\x02\u0974\u0975\x07\x9B\x02\x02\u0975"+
		"\u0245\x03\x02\x02\x02\u0976\u0977\x07\x9C\x02\x02\u0977\u0247\x03\x02"+
		"\x02\x02\u0978\u0979\x07r\x02\x02\u0979\u0249\x03\x02\x02\x02\u097A\u097B"+
		"\x07\x9D\x02\x02\u097B\u024B\x03\x02\x02\x02\u097C\u097D\x07\x9F\x02\x02"+
		"\u097D\u024D\x03\x02\x02\x02\u097E\u097F\x07\x9E\x02\x02\u097F\u024F\x03"+
		"\x02\x02\x02\u0980\u0981\x07z\x02\x02\u0981\u0251\x03\x02\x02\x02\u0982"+
		"\u0983\x07\xA0\x02\x02\u0983\u0253\x03\x02\x02\x02\u0984\u0985\x07\xA1"+
		"\x02\x02\u0985\u0255\x03\x02\x02\x02\u0986\u0987\x07\xAC\x02\x02\u0987"+
		"\u0257\x03\x02\x02\x02\u0988\u0989\x07\xA2\x02\x02\u0989\u0259\x03\x02"+
		"\x02\x02\u098A\u098B\x07\xA3\x02\x02\u098B\u025B\x03\x02\x02\x02\u098C"+
		"\u098D\x07\xA4\x02\x02\u098D\u025D\x03\x02\x02\x02\u098E\u098F\x05\u026E"+
		"\u0138\x02\u098F\u0995\x05\u013C\x9F\x02\u0990\u0991\x05\u0276\u013C\x02"+
		"\u0991\u0992\x05\u013C\x9F\x02\u0992\u0994\x03\x02\x02\x02\u0993\u0990"+
		"\x03\x02\x02\x02\u0994\u0997\x03\x02\x02\x02\u0995\u0993\x03\x02\x02\x02"+
		"\u0995\u0996\x03\x02\x02\x02\u0996\u0998\x03\x02\x02\x02\u0997\u0995\x03"+
		"\x02\x02\x02\u0998\u0999\x05\u0270\u0139\x02\u0999\u025F\x03\x02\x02\x02"+
		"\u099A\u099B\x07\x13\x02\x02\u099B\u0261\x03\x02\x02\x02\u099C\u099D\x07"+
		"\x12\x02\x02\u099D\u0263\x03\x02\x02\x02\u099E\u099F\x07\x02\x02\x03\u099F"+
		"\u0265\x03\x02\x02\x02\u09A0\u09A1\x07\x03\x02\x02\u09A1\u0267\x03\x02"+
		"\x02\x02\u09A2\u09A3\x07\x04\x02\x02\u09A3\u0269\x03\x02\x02\x02\u09A4"+
		"\u09A5\x07\x05\x02\x02\u09A5\u026B\x03\x02\x02\x02\u09A6\u09A7\x07\x06"+
		"\x02\x02\u09A7\u026D\x03\x02\x02\x02\u09A8\u09A9\x07\xAF\x02\x02\u09A9"+
		"\u026F\x03\x02\x02\x02\u09AA\u09AB\x07\xB0\x02\x02\u09AB\u0271\x03\x02"+
		"\x02\x02\u09AC\u09AD\x07\x07\x02\x02\u09AD\u0273\x03\x02\x02\x02\u09AE"+
		"\u09AF\x07\b\x02\x02\u09AF\u0275\x03\x02\x02\x02\u09B0\u09B1\x07\t\x02"+
		"\x02\u09B1\u0277\x03\x02\x02\x02\u09B2\u09B3\x07\v\x02\x02\u09B3\u0279"+
		"\x03\x02\x02\x02\u09B4\u09B5\x07\x16\x02\x02\u09B5\u027B\x03\x02\x02\x02"+
		"\u09B6\u09B7\x07\x18\x02\x02\u09B7\u027D\x03\x02\x02\x02\u09B8\u09B9\x07"+
		"\r\x02\x02\u09B9\u027F\x03\x02\x02\x02\u09BA\u09BB\x07\f\x02\x02\u09BB"+
		"\u0281\x03\x02\x02\x02\u09BC\u09BD\x07\xAE\x02\x02\u09BD\u0283\x03\x02"+
		"\x02\x02\u09BE\u09BF\x07\xAF\x02\x02\u09BF\u0285\x03\x02\x02\x02\u09C0"+
		"\u09C1\x07\xB0\x02\x02\u09C1\u0287\x03\x02\x02\x02\u09C2\u09C3\x07\xB1"+
		"\x02\x02\u09C3\u0289\x03\x02\x02\x02\u09C4\u09C5\x07\xB2\x02\x02\u09C5"+
		"\u028B\x03\x02\x02\x02\xB6\u028D\u0290\u0296\u029B\u029D\u02A2\u02A5\u02A8"+
		"\u02D4\u02E4\u02E7\u02EE\u02F3\u02FE\u0308\u0314\u031D\u0324\u0329\u0331"+
		"\u0336\u033A\u033F\u0344\u0353\u0359\u035E\u0368\u036D\u037E\u0385\u038D"+
		"\u039B\u03A0\u03AC\u03B0\u03B4\u03B9\u03BE\u03D1\u03D8\u03E0\u03E4\u03E9"+
		"\u03FC\u0405\u0414\u0416\u0422\u0430\u0437\u043E\u0446\u0451\u0461\u0475"+
		"\u048C\u049A\u04A1\u04AA\u04BD\u04C5\u04CB\u04D0\u04D7\u04DC\u04E4\u04E9"+
		"\u04F0\u04F5\u04FC\u0501\u0508\u0511\u0518\u051F\u0526\u052B\u0532\u0537"+
		"\u053E\u0542\u0545\u054D\u0557\u0562\u0568\u0571\u057E\u0586\u058C\u059A"+
		"\u05A2\u05AD\u05C1\u05CA\u05DD\u05E1\u05E5\u05E9\u05F7\u05FF\u0608\u0613"+
		"\u061A\u061D\u0626\u062A\u0631\u0638\u063E\u0646\u064E\u0654\u0658\u065C"+
		"\u0660\u0668\u0670\u0674\u0679\u067E\u0682\u068D\u069B\u069F\u06A7\u06AE"+
		"\u06B7\u06C0\u06C9\u06D2\u06DB\u06E4\u06F0\u06F9\u0709\u0715\u0721\u0724"+
		"\u0736\u074E\u0755\u075B\u075F\u0763\u076B\u0772\u0775\u0779\u077E\u0781"+
		"\u0784\u0787\u0790\u0798\u07A4\u07A8\u07AF\u07B5\u07B8\u07C0\u07CB\u07E0"+
		"\u07E7\u07F0\u07F3\u07F8\u07FE\u0802\u080B\u081D\u0824\u082C\u083D\u0841"+
		"\u0852\u0869\u086D\u0995";
	public static readonly _serializedATN: string = Utils.join(
		[
			CqlParser._serializedATNSegment0,
			CqlParser._serializedATNSegment1,
			CqlParser._serializedATNSegment2,
			CqlParser._serializedATNSegment3,
			CqlParser._serializedATNSegment4
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CqlParser.__ATN) {
			CqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CqlParser._serializedATN));
		}

		return CqlParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public eof(): EofContext {
		return this.getRuleContext(0, EofContext);
	}
	public cqls(): CqlsContext | undefined {
		return this.tryGetRuleContext(0, CqlsContext);
	}
	public MINUSMINUS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.MINUSMINUS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_root; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRoot) listener.enterRoot(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRoot) listener.exitRoot(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRoot) return visitor.visitRoot(this);
		else return visitor.visitChildren(this);
	}
}


export class CqlsContext extends ParserRuleContext {
	public cql(): CqlContext[];
	public cql(i: number): CqlContext;
	public cql(i?: number): CqlContext | CqlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CqlContext);
		} else {
			return this.getRuleContext(i, CqlContext);
		}
	}
	public empty(): EmptyContext[];
	public empty(i: number): EmptyContext;
	public empty(i?: number): EmptyContext | EmptyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyContext);
		} else {
			return this.getRuleContext(i, EmptyContext);
		}
	}
	public statementSeparator(): StatementSeparatorContext[];
	public statementSeparator(i: number): StatementSeparatorContext;
	public statementSeparator(i?: number): StatementSeparatorContext | StatementSeparatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementSeparatorContext);
		} else {
			return this.getRuleContext(i, StatementSeparatorContext);
		}
	}
	public MINUSMINUS(): TerminalNode[];
	public MINUSMINUS(i: number): TerminalNode;
	public MINUSMINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.MINUSMINUS);
		} else {
			return this.getToken(CqlParser.MINUSMINUS, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_cqls; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCqls) listener.enterCqls(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCqls) listener.exitCqls(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCqls) return visitor.visitCqls(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementSeparatorContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(CqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_statementSeparator; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterStatementSeparator) listener.enterStatementSeparator(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitStatementSeparator) listener.exitStatementSeparator(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitStatementSeparator) return visitor.visitStatementSeparator(this);
		else return visitor.visitChildren(this);
	}
}


export class EmptyContext extends ParserRuleContext {
	public statementSeparator(): StatementSeparatorContext {
		return this.getRuleContext(0, StatementSeparatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_empty; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterEmpty) listener.enterEmpty(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitEmpty) listener.exitEmpty(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitEmpty) return visitor.visitEmpty(this);
		else return visitor.visitChildren(this);
	}
}


export class CqlContext extends ParserRuleContext {
	public beginBatch(): BeginBatchContext | undefined {
		return this.tryGetRuleContext(0, BeginBatchContext);
	}
	public alterKeyspace(): AlterKeyspaceContext | undefined {
		return this.tryGetRuleContext(0, AlterKeyspaceContext);
	}
	public alterMaterializedView(): AlterMaterializedViewContext | undefined {
		return this.tryGetRuleContext(0, AlterMaterializedViewContext);
	}
	public alterRole(): AlterRoleContext | undefined {
		return this.tryGetRuleContext(0, AlterRoleContext);
	}
	public alterTable(): AlterTableContext | undefined {
		return this.tryGetRuleContext(0, AlterTableContext);
	}
	public alterType(): AlterTypeContext | undefined {
		return this.tryGetRuleContext(0, AlterTypeContext);
	}
	public alterUser(): AlterUserContext | undefined {
		return this.tryGetRuleContext(0, AlterUserContext);
	}
	public applyBatch(): ApplyBatchContext | undefined {
		return this.tryGetRuleContext(0, ApplyBatchContext);
	}
	public createAggregate(): CreateAggregateContext | undefined {
		return this.tryGetRuleContext(0, CreateAggregateContext);
	}
	public createFunction(): CreateFunctionContext | undefined {
		return this.tryGetRuleContext(0, CreateFunctionContext);
	}
	public createIndex(): CreateIndexContext | undefined {
		return this.tryGetRuleContext(0, CreateIndexContext);
	}
	public createKeyspace(): CreateKeyspaceContext | undefined {
		return this.tryGetRuleContext(0, CreateKeyspaceContext);
	}
	public createMaterializedView(): CreateMaterializedViewContext | undefined {
		return this.tryGetRuleContext(0, CreateMaterializedViewContext);
	}
	public createRole(): CreateRoleContext | undefined {
		return this.tryGetRuleContext(0, CreateRoleContext);
	}
	public createTable(): CreateTableContext | undefined {
		return this.tryGetRuleContext(0, CreateTableContext);
	}
	public createTrigger(): CreateTriggerContext | undefined {
		return this.tryGetRuleContext(0, CreateTriggerContext);
	}
	public createType(): CreateTypeContext | undefined {
		return this.tryGetRuleContext(0, CreateTypeContext);
	}
	public createUser(): CreateUserContext | undefined {
		return this.tryGetRuleContext(0, CreateUserContext);
	}
	public delete(): DeleteContext | undefined {
		return this.tryGetRuleContext(0, DeleteContext);
	}
	public dropAggregate(): DropAggregateContext | undefined {
		return this.tryGetRuleContext(0, DropAggregateContext);
	}
	public dropFunction(): DropFunctionContext | undefined {
		return this.tryGetRuleContext(0, DropFunctionContext);
	}
	public dropIndex(): DropIndexContext | undefined {
		return this.tryGetRuleContext(0, DropIndexContext);
	}
	public dropKeyspace(): DropKeyspaceContext | undefined {
		return this.tryGetRuleContext(0, DropKeyspaceContext);
	}
	public dropMaterializedView(): DropMaterializedViewContext | undefined {
		return this.tryGetRuleContext(0, DropMaterializedViewContext);
	}
	public dropRole(): DropRoleContext | undefined {
		return this.tryGetRuleContext(0, DropRoleContext);
	}
	public dropTable(): DropTableContext | undefined {
		return this.tryGetRuleContext(0, DropTableContext);
	}
	public dropTrigger(): DropTriggerContext | undefined {
		return this.tryGetRuleContext(0, DropTriggerContext);
	}
	public dropType(): DropTypeContext | undefined {
		return this.tryGetRuleContext(0, DropTypeContext);
	}
	public dropUser(): DropUserContext | undefined {
		return this.tryGetRuleContext(0, DropUserContext);
	}
	public grant(): GrantContext | undefined {
		return this.tryGetRuleContext(0, GrantContext);
	}
	public insert(): InsertContext | undefined {
		return this.tryGetRuleContext(0, InsertContext);
	}
	public listPermissions(): ListPermissionsContext | undefined {
		return this.tryGetRuleContext(0, ListPermissionsContext);
	}
	public listRoles(): ListRolesContext | undefined {
		return this.tryGetRuleContext(0, ListRolesContext);
	}
	public revoke(): RevokeContext | undefined {
		return this.tryGetRuleContext(0, RevokeContext);
	}
	public select(): SelectContext | undefined {
		return this.tryGetRuleContext(0, SelectContext);
	}
	public truncate(): TruncateContext | undefined {
		return this.tryGetRuleContext(0, TruncateContext);
	}
	public update(): UpdateContext | undefined {
		return this.tryGetRuleContext(0, UpdateContext);
	}
	public use(): UseContext | undefined {
		return this.tryGetRuleContext(0, UseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_cql; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCql) listener.enterCql(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCql) listener.exitCql(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCql) return visitor.visitCql(this);
		else return visitor.visitChildren(this);
	}
}


export class RevokeContext extends ParserRuleContext {
	public kwRevoke(): KwRevokeContext {
		return this.getRuleContext(0, KwRevokeContext);
	}
	public priviledge(): PriviledgeContext {
		return this.getRuleContext(0, PriviledgeContext);
	}
	public kwOn(): KwOnContext {
		return this.getRuleContext(0, KwOnContext);
	}
	public resource(): ResourceContext {
		return this.getRuleContext(0, ResourceContext);
	}
	public kwFrom(): KwFromContext {
		return this.getRuleContext(0, KwFromContext);
	}
	public role(): RoleContext {
		return this.getRuleContext(0, RoleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_revoke; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRevoke) listener.enterRevoke(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRevoke) listener.exitRevoke(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRevoke) return visitor.visitRevoke(this);
		else return visitor.visitChildren(this);
	}
}


export class ListUsersContext extends ParserRuleContext {
	public kwList(): KwListContext {
		return this.getRuleContext(0, KwListContext);
	}
	public kwUsers(): KwUsersContext {
		return this.getRuleContext(0, KwUsersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_listUsers; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterListUsers) listener.enterListUsers(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitListUsers) listener.exitListUsers(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitListUsers) return visitor.visitListUsers(this);
		else return visitor.visitChildren(this);
	}
}


export class ListRolesContext extends ParserRuleContext {
	public kwListRoles(): KwListRolesContext {
		return this.getRuleContext(0, KwListRolesContext);
	}
	public kwOf(): KwOfContext | undefined {
		return this.tryGetRuleContext(0, KwOfContext);
	}
	public role(): RoleContext | undefined {
		return this.tryGetRuleContext(0, RoleContext);
	}
	public kwNorecursive(): KwNorecursiveContext | undefined {
		return this.tryGetRuleContext(0, KwNorecursiveContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_listRoles; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterListRoles) listener.enterListRoles(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitListRoles) listener.exitListRoles(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitListRoles) return visitor.visitListRoles(this);
		else return visitor.visitChildren(this);
	}
}


export class ListPermissionsContext extends ParserRuleContext {
	public kwList(): KwListContext {
		return this.getRuleContext(0, KwListContext);
	}
	public priviledge(): PriviledgeContext {
		return this.getRuleContext(0, PriviledgeContext);
	}
	public kwOn(): KwOnContext | undefined {
		return this.tryGetRuleContext(0, KwOnContext);
	}
	public resource(): ResourceContext | undefined {
		return this.tryGetRuleContext(0, ResourceContext);
	}
	public kwOf(): KwOfContext | undefined {
		return this.tryGetRuleContext(0, KwOfContext);
	}
	public role(): RoleContext | undefined {
		return this.tryGetRuleContext(0, RoleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_listPermissions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterListPermissions) listener.enterListPermissions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitListPermissions) listener.exitListPermissions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitListPermissions) return visitor.visitListPermissions(this);
		else return visitor.visitChildren(this);
	}
}


export class GrantContext extends ParserRuleContext {
	public kwGrant(): KwGrantContext {
		return this.getRuleContext(0, KwGrantContext);
	}
	public priviledge(): PriviledgeContext {
		return this.getRuleContext(0, PriviledgeContext);
	}
	public kwOn(): KwOnContext {
		return this.getRuleContext(0, KwOnContext);
	}
	public resource(): ResourceContext {
		return this.getRuleContext(0, ResourceContext);
	}
	public kwTo(): KwToContext {
		return this.getRuleContext(0, KwToContext);
	}
	public role(): RoleContext {
		return this.getRuleContext(0, RoleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_grant; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterGrant) listener.enterGrant(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitGrant) listener.exitGrant(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitGrant) return visitor.visitGrant(this);
		else return visitor.visitChildren(this);
	}
}


export class PriviledgeContext extends ParserRuleContext {
	public kwAll(): KwAllContext | undefined {
		return this.tryGetRuleContext(0, KwAllContext);
	}
	public kwAllPermissions(): KwAllPermissionsContext | undefined {
		return this.tryGetRuleContext(0, KwAllPermissionsContext);
	}
	public kwAlter(): KwAlterContext | undefined {
		return this.tryGetRuleContext(0, KwAlterContext);
	}
	public kwAuthorize(): KwAuthorizeContext | undefined {
		return this.tryGetRuleContext(0, KwAuthorizeContext);
	}
	public kwDescibe(): KwDescibeContext | undefined {
		return this.tryGetRuleContext(0, KwDescibeContext);
	}
	public kwExecute(): KwExecuteContext | undefined {
		return this.tryGetRuleContext(0, KwExecuteContext);
	}
	public kwCreate(): KwCreateContext | undefined {
		return this.tryGetRuleContext(0, KwCreateContext);
	}
	public kwDrop(): KwDropContext | undefined {
		return this.tryGetRuleContext(0, KwDropContext);
	}
	public kwModify(): KwModifyContext | undefined {
		return this.tryGetRuleContext(0, KwModifyContext);
	}
	public kwSelect(): KwSelectContext | undefined {
		return this.tryGetRuleContext(0, KwSelectContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_priviledge; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPriviledge) listener.enterPriviledge(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPriviledge) listener.exitPriviledge(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPriviledge) return visitor.visitPriviledge(this);
		else return visitor.visitChildren(this);
	}
}


export class ResourceContext extends ParserRuleContext {
	public kwAllFunctions(): KwAllFunctionsContext | undefined {
		return this.tryGetRuleContext(0, KwAllFunctionsContext);
	}
	public kwIn(): KwInContext | undefined {
		return this.tryGetRuleContext(0, KwInContext);
	}
	public kwKeyspace(): KwKeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KwKeyspaceContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public kwFunction(): KwFunctionContext | undefined {
		return this.tryGetRuleContext(0, KwFunctionContext);
	}
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	public kwAllKeyspaces(): KwAllKeyspacesContext | undefined {
		return this.tryGetRuleContext(0, KwAllKeyspacesContext);
	}
	public tableSpec(): TableSpecContext | undefined {
		return this.tryGetRuleContext(0, TableSpecContext);
	}
	public kwTable(): KwTableContext | undefined {
		return this.tryGetRuleContext(0, KwTableContext);
	}
	public kwAllRoles(): KwAllRolesContext | undefined {
		return this.tryGetRuleContext(0, KwAllRolesContext);
	}
	public kwRole(): KwRoleContext | undefined {
		return this.tryGetRuleContext(0, KwRoleContext);
	}
	public role(): RoleContext | undefined {
		return this.tryGetRuleContext(0, RoleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_resource; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterResource) listener.enterResource(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitResource) listener.exitResource(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitResource) return visitor.visitResource(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateUserContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwUser(): KwUserContext {
		return this.getRuleContext(0, KwUserContext);
	}
	public user(): UserContext {
		return this.getRuleContext(0, UserContext);
	}
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public kwPassword(): KwPasswordContext {
		return this.getRuleContext(0, KwPasswordContext);
	}
	public constantString(): ConstantStringContext {
		return this.getRuleContext(0, ConstantStringContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public kwSuperuser(): KwSuperuserContext | undefined {
		return this.tryGetRuleContext(0, KwSuperuserContext);
	}
	public kwNosuperuser(): KwNosuperuserContext | undefined {
		return this.tryGetRuleContext(0, KwNosuperuserContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createUser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateUser) listener.enterCreateUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateUser) listener.exitCreateUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateUser) return visitor.visitCreateUser(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateRoleContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwRole(): KwRoleContext {
		return this.getRuleContext(0, KwRoleContext);
	}
	public role(): RoleContext {
		return this.getRuleContext(0, RoleContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public roleWith(): RoleWithContext | undefined {
		return this.tryGetRuleContext(0, RoleWithContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createRole; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateRole) listener.enterCreateRole(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateRole) listener.exitCreateRole(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateRole) return visitor.visitCreateRole(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateTypeContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwType(): KwTypeContext {
		return this.getRuleContext(0, KwTypeContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public typeMemberColumnList(): TypeMemberColumnListContext {
		return this.getRuleContext(0, TypeMemberColumnListContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateType) listener.enterCreateType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateType) listener.exitCreateType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateType) return visitor.visitCreateType(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeMemberColumnListContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_typeMemberColumnList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTypeMemberColumnList) listener.enterTypeMemberColumnList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTypeMemberColumnList) listener.exitTypeMemberColumnList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTypeMemberColumnList) return visitor.visitTypeMemberColumnList(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateTriggerContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwTrigger(): KwTriggerContext {
		return this.getRuleContext(0, KwTriggerContext);
	}
	public trigger(): TriggerContext {
		return this.getRuleContext(0, TriggerContext);
	}
	public kwUsing(): KwUsingContext {
		return this.getRuleContext(0, KwUsingContext);
	}
	public triggerClass(): TriggerClassContext {
		return this.getRuleContext(0, TriggerClassContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createTrigger; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateTrigger) listener.enterCreateTrigger(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateTrigger) listener.exitCreateTrigger(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTrigger) return visitor.visitCreateTrigger(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateMaterializedViewContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwMaterialized(): KwMaterializedContext {
		return this.getRuleContext(0, KwMaterializedContext);
	}
	public kwView(): KwViewContext {
		return this.getRuleContext(0, KwViewContext);
	}
	public materializedView(): MaterializedViewContext {
		return this.getRuleContext(0, MaterializedViewContext);
	}
	public kwAs(): KwAsContext {
		return this.getRuleContext(0, KwAsContext);
	}
	public kwSelect(): KwSelectContext {
		return this.getRuleContext(0, KwSelectContext);
	}
	public columnList(): ColumnListContext[];
	public columnList(i: number): ColumnListContext;
	public columnList(i?: number): ColumnListContext | ColumnListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnListContext);
		} else {
			return this.getRuleContext(i, ColumnListContext);
		}
	}
	public kwFrom(): KwFromContext {
		return this.getRuleContext(0, KwFromContext);
	}
	public tableSpec(): TableSpecContext {
		return this.getRuleContext(0, TableSpecContext);
	}
	public materializedViewWhere(): MaterializedViewWhereContext {
		return this.getRuleContext(0, MaterializedViewWhereContext);
	}
	public kwPrimary(): KwPrimaryContext {
		return this.getRuleContext(0, KwPrimaryContext);
	}
	public kwKey(): KwKeyContext {
		return this.getRuleContext(0, KwKeyContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	public kwWith(): KwWithContext | undefined {
		return this.tryGetRuleContext(0, KwWithContext);
	}
	public materializedViewOptions(): MaterializedViewOptionsContext | undefined {
		return this.tryGetRuleContext(0, MaterializedViewOptionsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createMaterializedView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateMaterializedView) listener.enterCreateMaterializedView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateMaterializedView) listener.exitCreateMaterializedView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateMaterializedView) return visitor.visitCreateMaterializedView(this);
		else return visitor.visitChildren(this);
	}
}


export class MaterializedViewWhereContext extends ParserRuleContext {
	public kwWhere(): KwWhereContext {
		return this.getRuleContext(0, KwWhereContext);
	}
	public columnNotNullList(): ColumnNotNullListContext {
		return this.getRuleContext(0, ColumnNotNullListContext);
	}
	public kwAnd(): KwAndContext | undefined {
		return this.tryGetRuleContext(0, KwAndContext);
	}
	public relationElements(): RelationElementsContext | undefined {
		return this.tryGetRuleContext(0, RelationElementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_materializedViewWhere; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterMaterializedViewWhere) listener.enterMaterializedViewWhere(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitMaterializedViewWhere) listener.exitMaterializedViewWhere(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitMaterializedViewWhere) return visitor.visitMaterializedViewWhere(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnNotNullListContext extends ParserRuleContext {
	public columnNotNull(): ColumnNotNullContext[];
	public columnNotNull(i: number): ColumnNotNullContext;
	public columnNotNull(i?: number): ColumnNotNullContext | ColumnNotNullContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNotNullContext);
		} else {
			return this.getRuleContext(i, ColumnNotNullContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnNotNullList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnNotNullList) listener.enterColumnNotNullList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnNotNullList) listener.exitColumnNotNullList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnNotNullList) return visitor.visitColumnNotNullList(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnNotNullContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public kwIs(): KwIsContext {
		return this.getRuleContext(0, KwIsContext);
	}
	public kwNot(): KwNotContext {
		return this.getRuleContext(0, KwNotContext);
	}
	public kwNull(): KwNullContext {
		return this.getRuleContext(0, KwNullContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnNotNull; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnNotNull) listener.enterColumnNotNull(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnNotNull) listener.exitColumnNotNull(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnNotNull) return visitor.visitColumnNotNull(this);
		else return visitor.visitChildren(this);
	}
}


export class MaterializedViewOptionsContext extends ParserRuleContext {
	public tableOptions(): TableOptionsContext | undefined {
		return this.tryGetRuleContext(0, TableOptionsContext);
	}
	public kwAnd(): KwAndContext | undefined {
		return this.tryGetRuleContext(0, KwAndContext);
	}
	public clusteringOrder(): ClusteringOrderContext | undefined {
		return this.tryGetRuleContext(0, ClusteringOrderContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_materializedViewOptions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterMaterializedViewOptions) listener.enterMaterializedViewOptions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitMaterializedViewOptions) listener.exitMaterializedViewOptions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitMaterializedViewOptions) return visitor.visitMaterializedViewOptions(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateKeyspaceContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwKeyspace(): KwKeyspaceContext {
		return this.getRuleContext(0, KwKeyspaceContext);
	}
	public keyspace(): KeyspaceContext {
		return this.getRuleContext(0, KeyspaceContext);
	}
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public kwReplication(): KwReplicationContext {
		return this.getRuleContext(0, KwReplicationContext);
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public replicationList(): ReplicationListContext {
		return this.getRuleContext(0, ReplicationListContext);
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public kwAnd(): KwAndContext | undefined {
		return this.tryGetRuleContext(0, KwAndContext);
	}
	public durableWrites(): DurableWritesContext | undefined {
		return this.tryGetRuleContext(0, DurableWritesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createKeyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateKeyspace) listener.enterCreateKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateKeyspace) listener.exitCreateKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateKeyspace) return visitor.visitCreateKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateFunctionContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwFunction(): KwFunctionContext {
		return this.getRuleContext(0, KwFunctionContext);
	}
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public returnMode(): ReturnModeContext {
		return this.getRuleContext(0, ReturnModeContext);
	}
	public kwReturns(): KwReturnsContext {
		return this.getRuleContext(0, KwReturnsContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public kwLanguage(): KwLanguageContext {
		return this.getRuleContext(0, KwLanguageContext);
	}
	public language(): LanguageContext {
		return this.getRuleContext(0, LanguageContext);
	}
	public kwAs(): KwAsContext {
		return this.getRuleContext(0, KwAsContext);
	}
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public orReplace(): OrReplaceContext | undefined {
		return this.tryGetRuleContext(0, OrReplaceContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createFunction; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateFunction) listener.enterCreateFunction(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateFunction) listener.exitCreateFunction(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateFunction) return visitor.visitCreateFunction(this);
		else return visitor.visitChildren(this);
	}
}


export class CodeBlockContext extends ParserRuleContext {
	public CODE_BLOCK(): TerminalNode { return this.getToken(CqlParser.CODE_BLOCK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_codeBlock; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCodeBlock) listener.enterCodeBlock(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCodeBlock) listener.exitCodeBlock(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCodeBlock) return visitor.visitCodeBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamListContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_paramList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterParamList) listener.enterParamList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitParamList) listener.exitParamList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitParamList) return visitor.visitParamList(this);
		else return visitor.visitChildren(this);
	}
}


export class ReturnModeContext extends ParserRuleContext {
	public kwOn(): KwOnContext {
		return this.getRuleContext(0, KwOnContext);
	}
	public kwNull(): KwNullContext[];
	public kwNull(i: number): KwNullContext;
	public kwNull(i?: number): KwNullContext | KwNullContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwNullContext);
		} else {
			return this.getRuleContext(i, KwNullContext);
		}
	}
	public kwInput(): KwInputContext {
		return this.getRuleContext(0, KwInputContext);
	}
	public kwCalled(): KwCalledContext | undefined {
		return this.tryGetRuleContext(0, KwCalledContext);
	}
	public kwReturns(): KwReturnsContext | undefined {
		return this.tryGetRuleContext(0, KwReturnsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_returnMode; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterReturnMode) listener.enterReturnMode(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitReturnMode) listener.exitReturnMode(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitReturnMode) return visitor.visitReturnMode(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateAggregateContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwAggregate(): KwAggregateContext {
		return this.getRuleContext(0, KwAggregateContext);
	}
	public aggregate(): AggregateContext {
		return this.getRuleContext(0, AggregateContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public kwSfunc(): KwSfuncContext {
		return this.getRuleContext(0, KwSfuncContext);
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	public kwStype(): KwStypeContext {
		return this.getRuleContext(0, KwStypeContext);
	}
	public kwFinalfunc(): KwFinalfuncContext {
		return this.getRuleContext(0, KwFinalfuncContext);
	}
	public kwInitcond(): KwInitcondContext {
		return this.getRuleContext(0, KwInitcondContext);
	}
	public initCondDefinition(): InitCondDefinitionContext {
		return this.getRuleContext(0, InitCondDefinitionContext);
	}
	public orReplace(): OrReplaceContext | undefined {
		return this.tryGetRuleContext(0, OrReplaceContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createAggregate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateAggregate) listener.enterCreateAggregate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateAggregate) listener.exitCreateAggregate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateAggregate) return visitor.visitCreateAggregate(this);
		else return visitor.visitChildren(this);
	}
}


export class InitCondDefinitionContext extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public initCondList(): InitCondListContext | undefined {
		return this.tryGetRuleContext(0, InitCondListContext);
	}
	public initCondListNested(): InitCondListNestedContext | undefined {
		return this.tryGetRuleContext(0, InitCondListNestedContext);
	}
	public initCondHash(): InitCondHashContext | undefined {
		return this.tryGetRuleContext(0, InitCondHashContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_initCondDefinition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInitCondDefinition) listener.enterInitCondDefinition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInitCondDefinition) listener.exitInitCondDefinition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInitCondDefinition) return visitor.visitInitCondDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class InitCondHashContext extends ParserRuleContext {
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public initCondHashItem(): InitCondHashItemContext[];
	public initCondHashItem(i: number): InitCondHashItemContext;
	public initCondHashItem(i?: number): InitCondHashItemContext | InitCondHashItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitCondHashItemContext);
		} else {
			return this.getRuleContext(i, InitCondHashItemContext);
		}
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_initCondHash; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInitCondHash) listener.enterInitCondHash(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInitCondHash) listener.exitInitCondHash(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInitCondHash) return visitor.visitInitCondHash(this);
		else return visitor.visitChildren(this);
	}
}


export class InitCondHashItemContext extends ParserRuleContext {
	public hashKey(): HashKeyContext {
		return this.getRuleContext(0, HashKeyContext);
	}
	public COLON(): TerminalNode { return this.getToken(CqlParser.COLON, 0); }
	public initCondDefinition(): InitCondDefinitionContext {
		return this.getRuleContext(0, InitCondDefinitionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_initCondHashItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInitCondHashItem) listener.enterInitCondHashItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInitCondHashItem) listener.exitInitCondHashItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInitCondHashItem) return visitor.visitInitCondHashItem(this);
		else return visitor.visitChildren(this);
	}
}


export class InitCondListNestedContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public initCondList(): InitCondListContext[];
	public initCondList(i: number): InitCondListContext;
	public initCondList(i?: number): InitCondListContext | InitCondListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitCondListContext);
		} else {
			return this.getRuleContext(i, InitCondListContext);
		}
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_initCondListNested; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInitCondListNested) listener.enterInitCondListNested(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInitCondListNested) listener.exitInitCondListNested(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInitCondListNested) return visitor.visitInitCondListNested(this);
		else return visitor.visitChildren(this);
	}
}


export class InitCondListContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_initCondList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInitCondList) listener.enterInitCondList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInitCondList) listener.exitInitCondList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInitCondList) return visitor.visitInitCondList(this);
		else return visitor.visitChildren(this);
	}
}


export class OrReplaceContext extends ParserRuleContext {
	public kwOr(): KwOrContext {
		return this.getRuleContext(0, KwOrContext);
	}
	public kwReplace(): KwReplaceContext {
		return this.getRuleContext(0, KwReplaceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_orReplace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOrReplace) listener.enterOrReplace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOrReplace) listener.exitOrReplace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOrReplace) return visitor.visitOrReplace(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterUserContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwUser(): KwUserContext {
		return this.getRuleContext(0, KwUserContext);
	}
	public user(): UserContext {
		return this.getRuleContext(0, UserContext);
	}
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public userPassword(): UserPasswordContext {
		return this.getRuleContext(0, UserPasswordContext);
	}
	public userSuperUser(): UserSuperUserContext | undefined {
		return this.tryGetRuleContext(0, UserSuperUserContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterUser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterUser) listener.enterAlterUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterUser) listener.exitAlterUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterUser) return visitor.visitAlterUser(this);
		else return visitor.visitChildren(this);
	}
}


export class UserPasswordContext extends ParserRuleContext {
	public kwPassword(): KwPasswordContext {
		return this.getRuleContext(0, KwPasswordContext);
	}
	public constantString(): ConstantStringContext {
		return this.getRuleContext(0, ConstantStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_userPassword; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUserPassword) listener.enterUserPassword(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUserPassword) listener.exitUserPassword(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUserPassword) return visitor.visitUserPassword(this);
		else return visitor.visitChildren(this);
	}
}


export class UserSuperUserContext extends ParserRuleContext {
	public kwSuperuser(): KwSuperuserContext | undefined {
		return this.tryGetRuleContext(0, KwSuperuserContext);
	}
	public kwNosuperuser(): KwNosuperuserContext | undefined {
		return this.tryGetRuleContext(0, KwNosuperuserContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_userSuperUser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUserSuperUser) listener.enterUserSuperUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUserSuperUser) listener.exitUserSuperUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUserSuperUser) return visitor.visitUserSuperUser(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwType(): KwTypeContext {
		return this.getRuleContext(0, KwTypeContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public alterTypeOperation(): AlterTypeOperationContext {
		return this.getRuleContext(0, AlterTypeOperationContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterType) listener.enterAlterType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterType) listener.exitAlterType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterType) return visitor.visitAlterType(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeOperationContext extends ParserRuleContext {
	public alterTypeAlterType(): AlterTypeAlterTypeContext | undefined {
		return this.tryGetRuleContext(0, AlterTypeAlterTypeContext);
	}
	public alterTypeAdd(): AlterTypeAddContext | undefined {
		return this.tryGetRuleContext(0, AlterTypeAddContext);
	}
	public alterTypeRename(): AlterTypeRenameContext | undefined {
		return this.tryGetRuleContext(0, AlterTypeRenameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeOperation; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeOperation) listener.enterAlterTypeOperation(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeOperation) listener.exitAlterTypeOperation(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeOperation) return visitor.visitAlterTypeOperation(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeRenameContext extends ParserRuleContext {
	public kwRename(): KwRenameContext {
		return this.getRuleContext(0, KwRenameContext);
	}
	public alterTypeRenameList(): AlterTypeRenameListContext {
		return this.getRuleContext(0, AlterTypeRenameListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeRename; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeRename) listener.enterAlterTypeRename(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeRename) listener.exitAlterTypeRename(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeRename) return visitor.visitAlterTypeRename(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeRenameListContext extends ParserRuleContext {
	public alterTypeRenameItem(): AlterTypeRenameItemContext[];
	public alterTypeRenameItem(i: number): AlterTypeRenameItemContext;
	public alterTypeRenameItem(i?: number): AlterTypeRenameItemContext | AlterTypeRenameItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AlterTypeRenameItemContext);
		} else {
			return this.getRuleContext(i, AlterTypeRenameItemContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeRenameList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeRenameList) listener.enterAlterTypeRenameList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeRenameList) listener.exitAlterTypeRenameList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeRenameList) return visitor.visitAlterTypeRenameList(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeRenameItemContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public kwTo(): KwToContext {
		return this.getRuleContext(0, KwToContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeRenameItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeRenameItem) listener.enterAlterTypeRenameItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeRenameItem) listener.exitAlterTypeRenameItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeRenameItem) return visitor.visitAlterTypeRenameItem(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeAddContext extends ParserRuleContext {
	public kwAdd(): KwAddContext {
		return this.getRuleContext(0, KwAddContext);
	}
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeAdd; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeAdd) listener.enterAlterTypeAdd(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeAdd) listener.exitAlterTypeAdd(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeAdd) return visitor.visitAlterTypeAdd(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeAlterTypeContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public kwType(): KwTypeContext {
		return this.getRuleContext(0, KwTypeContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeAlterType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeAlterType) listener.enterAlterTypeAlterType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeAlterType) listener.exitAlterTypeAlterType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeAlterType) return visitor.visitAlterTypeAlterType(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwTable(): KwTableContext {
		return this.getRuleContext(0, KwTableContext);
	}
	public tableSpec(): TableSpecContext {
		return this.getRuleContext(0, TableSpecContext);
	}
	public alterTableOperation(): AlterTableOperationContext {
		return this.getRuleContext(0, AlterTableOperationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTable; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTable) listener.enterAlterTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTable) listener.exitAlterTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTable) return visitor.visitAlterTable(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableOperationContext extends ParserRuleContext {
	public alterTableAdd(): AlterTableAddContext | undefined {
		return this.tryGetRuleContext(0, AlterTableAddContext);
	}
	public alterTableDropColumns(): AlterTableDropColumnsContext | undefined {
		return this.tryGetRuleContext(0, AlterTableDropColumnsContext);
	}
	public alterTableDropCompactStorage(): AlterTableDropCompactStorageContext | undefined {
		return this.tryGetRuleContext(0, AlterTableDropCompactStorageContext);
	}
	public alterTableRename(): AlterTableRenameContext | undefined {
		return this.tryGetRuleContext(0, AlterTableRenameContext);
	}
	public alterTableWith(): AlterTableWithContext | undefined {
		return this.tryGetRuleContext(0, AlterTableWithContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableOperation; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableOperation) listener.enterAlterTableOperation(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableOperation) listener.exitAlterTableOperation(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableOperation) return visitor.visitAlterTableOperation(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableWithContext extends ParserRuleContext {
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public tableOptions(): TableOptionsContext {
		return this.getRuleContext(0, TableOptionsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableWith; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableWith) listener.enterAlterTableWith(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableWith) listener.exitAlterTableWith(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableWith) return visitor.visitAlterTableWith(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableRenameContext extends ParserRuleContext {
	public kwRename(): KwRenameContext {
		return this.getRuleContext(0, KwRenameContext);
	}
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public kwTo(): KwToContext {
		return this.getRuleContext(0, KwToContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableRename; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableRename) listener.enterAlterTableRename(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableRename) listener.exitAlterTableRename(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableRename) return visitor.visitAlterTableRename(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableDropCompactStorageContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwCompact(): KwCompactContext {
		return this.getRuleContext(0, KwCompactContext);
	}
	public kwStorage(): KwStorageContext {
		return this.getRuleContext(0, KwStorageContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableDropCompactStorage; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableDropCompactStorage) listener.enterAlterTableDropCompactStorage(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableDropCompactStorage) listener.exitAlterTableDropCompactStorage(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableDropCompactStorage) return visitor.visitAlterTableDropCompactStorage(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableDropColumnsContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public alterTableDropColumnList(): AlterTableDropColumnListContext {
		return this.getRuleContext(0, AlterTableDropColumnListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableDropColumns; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableDropColumns) listener.enterAlterTableDropColumns(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableDropColumns) listener.exitAlterTableDropColumns(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableDropColumns) return visitor.visitAlterTableDropColumns(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableDropColumnListContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableDropColumnList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableDropColumnList) listener.enterAlterTableDropColumnList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableDropColumnList) listener.exitAlterTableDropColumnList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableDropColumnList) return visitor.visitAlterTableDropColumnList(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableAddContext extends ParserRuleContext {
	public kwAdd(): KwAddContext {
		return this.getRuleContext(0, KwAddContext);
	}
	public alterTableColumnDefinition(): AlterTableColumnDefinitionContext {
		return this.getRuleContext(0, AlterTableColumnDefinitionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableAdd; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableAdd) listener.enterAlterTableAdd(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableAdd) listener.exitAlterTableAdd(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableAdd) return visitor.visitAlterTableAdd(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableColumnDefinitionContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableColumnDefinition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableColumnDefinition) listener.enterAlterTableColumnDefinition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableColumnDefinition) listener.exitAlterTableColumnDefinition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableColumnDefinition) return visitor.visitAlterTableColumnDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterRoleContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwRole(): KwRoleContext {
		return this.getRuleContext(0, KwRoleContext);
	}
	public role(): RoleContext {
		return this.getRuleContext(0, RoleContext);
	}
	public roleWith(): RoleWithContext | undefined {
		return this.tryGetRuleContext(0, RoleWithContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterRole; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterRole) listener.enterAlterRole(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterRole) listener.exitAlterRole(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterRole) return visitor.visitAlterRole(this);
		else return visitor.visitChildren(this);
	}
}


export class RoleWithContext extends ParserRuleContext {
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public roleWithOptions(): RoleWithOptionsContext[];
	public roleWithOptions(i: number): RoleWithOptionsContext;
	public roleWithOptions(i?: number): RoleWithOptionsContext | RoleWithOptionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RoleWithOptionsContext);
		} else {
			return this.getRuleContext(i, RoleWithOptionsContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_roleWith; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRoleWith) listener.enterRoleWith(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRoleWith) listener.exitRoleWith(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRoleWith) return visitor.visitRoleWith(this);
		else return visitor.visitChildren(this);
	}
}


export class RoleWithOptionsContext extends ParserRuleContext {
	public kwPassword(): KwPasswordContext | undefined {
		return this.tryGetRuleContext(0, KwPasswordContext);
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public constantString(): ConstantStringContext | undefined {
		return this.tryGetRuleContext(0, ConstantStringContext);
	}
	public kwLogin(): KwLoginContext | undefined {
		return this.tryGetRuleContext(0, KwLoginContext);
	}
	public constantBoolean(): ConstantBooleanContext | undefined {
		return this.tryGetRuleContext(0, ConstantBooleanContext);
	}
	public kwSuperuser(): KwSuperuserContext | undefined {
		return this.tryGetRuleContext(0, KwSuperuserContext);
	}
	public kwOptions(): KwOptionsContext | undefined {
		return this.tryGetRuleContext(0, KwOptionsContext);
	}
	public optionHash(): OptionHashContext | undefined {
		return this.tryGetRuleContext(0, OptionHashContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_roleWithOptions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRoleWithOptions) listener.enterRoleWithOptions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRoleWithOptions) listener.exitRoleWithOptions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRoleWithOptions) return visitor.visitRoleWithOptions(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterMaterializedViewContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwMaterialized(): KwMaterializedContext {
		return this.getRuleContext(0, KwMaterializedContext);
	}
	public kwView(): KwViewContext {
		return this.getRuleContext(0, KwViewContext);
	}
	public materializedView(): MaterializedViewContext {
		return this.getRuleContext(0, MaterializedViewContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	public kwWith(): KwWithContext | undefined {
		return this.tryGetRuleContext(0, KwWithContext);
	}
	public tableOptions(): TableOptionsContext | undefined {
		return this.tryGetRuleContext(0, TableOptionsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterMaterializedView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterMaterializedView) listener.enterAlterMaterializedView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterMaterializedView) listener.exitAlterMaterializedView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterMaterializedView) return visitor.visitAlterMaterializedView(this);
		else return visitor.visitChildren(this);
	}
}


export class DropUserContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwUser(): KwUserContext {
		return this.getRuleContext(0, KwUserContext);
	}
	public user(): UserContext {
		return this.getRuleContext(0, UserContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropUser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropUser) listener.enterDropUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropUser) listener.exitDropUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropUser) return visitor.visitDropUser(this);
		else return visitor.visitChildren(this);
	}
}


export class DropTypeContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwType(): KwTypeContext {
		return this.getRuleContext(0, KwTypeContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropType) listener.enterDropType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropType) listener.exitDropType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropType) return visitor.visitDropType(this);
		else return visitor.visitChildren(this);
	}
}


export class DropMaterializedViewContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwMaterialized(): KwMaterializedContext {
		return this.getRuleContext(0, KwMaterializedContext);
	}
	public kwView(): KwViewContext {
		return this.getRuleContext(0, KwViewContext);
	}
	public materializedView(): MaterializedViewContext {
		return this.getRuleContext(0, MaterializedViewContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropMaterializedView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropMaterializedView) listener.enterDropMaterializedView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropMaterializedView) listener.exitDropMaterializedView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropMaterializedView) return visitor.visitDropMaterializedView(this);
		else return visitor.visitChildren(this);
	}
}


export class DropAggregateContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwAggregate(): KwAggregateContext {
		return this.getRuleContext(0, KwAggregateContext);
	}
	public aggregate(): AggregateContext {
		return this.getRuleContext(0, AggregateContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropAggregate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropAggregate) listener.enterDropAggregate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropAggregate) listener.exitDropAggregate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropAggregate) return visitor.visitDropAggregate(this);
		else return visitor.visitChildren(this);
	}
}


export class DropFunctionContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwFunction(): KwFunctionContext {
		return this.getRuleContext(0, KwFunctionContext);
	}
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropFunction; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropFunction) listener.enterDropFunction(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropFunction) listener.exitDropFunction(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropFunction) return visitor.visitDropFunction(this);
		else return visitor.visitChildren(this);
	}
}


export class DropTriggerContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwTrigger(): KwTriggerContext {
		return this.getRuleContext(0, KwTriggerContext);
	}
	public trigger(): TriggerContext {
		return this.getRuleContext(0, TriggerContext);
	}
	public kwOn(): KwOnContext {
		return this.getRuleContext(0, KwOnContext);
	}
	public tableSpec(): TableSpecContext {
		return this.getRuleContext(0, TableSpecContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropTrigger; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropTrigger) listener.enterDropTrigger(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropTrigger) listener.exitDropTrigger(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropTrigger) return visitor.visitDropTrigger(this);
		else return visitor.visitChildren(this);
	}
}


export class DropRoleContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwRole(): KwRoleContext {
		return this.getRuleContext(0, KwRoleContext);
	}
	public role(): RoleContext {
		return this.getRuleContext(0, RoleContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropRole; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropRole) listener.enterDropRole(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropRole) listener.exitDropRole(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropRole) return visitor.visitDropRole(this);
		else return visitor.visitChildren(this);
	}
}


export class DropTableContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwTable(): KwTableContext {
		return this.getRuleContext(0, KwTableContext);
	}
	public tableSpec(): TableSpecContext {
		return this.getRuleContext(0, TableSpecContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropTable; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropTable) listener.enterDropTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropTable) listener.exitDropTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropTable) return visitor.visitDropTable(this);
		else return visitor.visitChildren(this);
	}
}


export class DropKeyspaceContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwKeyspace(): KwKeyspaceContext {
		return this.getRuleContext(0, KwKeyspaceContext);
	}
	public keyspace(): KeyspaceContext {
		return this.getRuleContext(0, KeyspaceContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropKeyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropKeyspace) listener.enterDropKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropKeyspace) listener.exitDropKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropKeyspace) return visitor.visitDropKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class DropIndexContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwIndex(): KwIndexContext {
		return this.getRuleContext(0, KwIndexContext);
	}
	public indexName(): IndexNameContext {
		return this.getRuleContext(0, IndexNameContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropIndex; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropIndex) listener.enterDropIndex(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropIndex) listener.exitDropIndex(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropIndex) return visitor.visitDropIndex(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateTableContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwTable(): KwTableContext {
		return this.getRuleContext(0, KwTableContext);
	}
	public tableSpec(): TableSpecContext {
		return this.getRuleContext(0, TableSpecContext);
	}
	public createTableDef(): CreateTableDefContext {
		return this.getRuleContext(0, CreateTableDefContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public withElement(): WithElementContext | undefined {
		return this.tryGetRuleContext(0, WithElementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createTable; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateTable) listener.enterCreateTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateTable) listener.exitCreateTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTable) return visitor.visitCreateTable(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateTableDefContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLrContext);
	}
	public columnDefinitionList(): ColumnDefinitionListContext | undefined {
		return this.tryGetRuleContext(0, ColumnDefinitionListContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createTableDef; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateTableDef) listener.enterCreateTableDef(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateTableDef) listener.exitCreateTableDef(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTableDef) return visitor.visitCreateTableDef(this);
		else return visitor.visitChildren(this);
	}
}


export class WithElementContext extends ParserRuleContext {
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public tableOptions(): TableOptionsContext | undefined {
		return this.tryGetRuleContext(0, TableOptionsContext);
	}
	public clusteringOrder(): ClusteringOrderContext | undefined {
		return this.tryGetRuleContext(0, ClusteringOrderContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_withElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterWithElement) listener.enterWithElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitWithElement) listener.exitWithElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitWithElement) return visitor.visitWithElement(this);
		else return visitor.visitChildren(this);
	}
}


export class ClusteringOrderContext extends ParserRuleContext {
	public kwClustering(): KwClusteringContext {
		return this.getRuleContext(0, KwClusteringContext);
	}
	public kwOrder(): KwOrderContext {
		return this.getRuleContext(0, KwOrderContext);
	}
	public kwBy(): KwByContext {
		return this.getRuleContext(0, KwByContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public orderDirection(): OrderDirectionContext | undefined {
		return this.tryGetRuleContext(0, OrderDirectionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_clusteringOrder; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterClusteringOrder) listener.enterClusteringOrder(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitClusteringOrder) listener.exitClusteringOrder(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitClusteringOrder) return visitor.visitClusteringOrder(this);
		else return visitor.visitChildren(this);
	}
}


export class TableOptionsContext extends ParserRuleContext {
	public tableOptionItem(): TableOptionItemContext[];
	public tableOptionItem(i: number): TableOptionItemContext;
	public tableOptionItem(i?: number): TableOptionItemContext | TableOptionItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableOptionItemContext);
		} else {
			return this.getRuleContext(i, TableOptionItemContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_tableOptions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTableOptions) listener.enterTableOptions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTableOptions) listener.exitTableOptions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTableOptions) return visitor.visitTableOptions(this);
		else return visitor.visitChildren(this);
	}
}


export class TableOptionItemContext extends ParserRuleContext {
	public tableOptionName(): TableOptionNameContext {
		return this.getRuleContext(0, TableOptionNameContext);
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public tableOptionValue(): TableOptionValueContext | undefined {
		return this.tryGetRuleContext(0, TableOptionValueContext);
	}
	public optionHash(): OptionHashContext | undefined {
		return this.tryGetRuleContext(0, OptionHashContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_tableOptionItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTableOptionItem) listener.enterTableOptionItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTableOptionItem) listener.exitTableOptionItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTableOptionItem) return visitor.visitTableOptionItem(this);
		else return visitor.visitChildren(this);
	}
}


export class TableOptionNameContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_tableOptionName; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTableOptionName) listener.enterTableOptionName(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTableOptionName) listener.exitTableOptionName(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTableOptionName) return visitor.visitTableOptionName(this);
		else return visitor.visitChildren(this);
	}
}


export class TableOptionValueContext extends ParserRuleContext {
	public constantString(): ConstantStringContext | undefined {
		return this.tryGetRuleContext(0, ConstantStringContext);
	}
	public constantFloat(): ConstantFloatContext | undefined {
		return this.tryGetRuleContext(0, ConstantFloatContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_tableOptionValue; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTableOptionValue) listener.enterTableOptionValue(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTableOptionValue) listener.exitTableOptionValue(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTableOptionValue) return visitor.visitTableOptionValue(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionHashContext extends ParserRuleContext {
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public optionHashItem(): OptionHashItemContext[];
	public optionHashItem(i: number): OptionHashItemContext;
	public optionHashItem(i?: number): OptionHashItemContext | OptionHashItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionHashItemContext);
		} else {
			return this.getRuleContext(i, OptionHashItemContext);
		}
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_optionHash; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOptionHash) listener.enterOptionHash(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOptionHash) listener.exitOptionHash(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOptionHash) return visitor.visitOptionHash(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionHashItemContext extends ParserRuleContext {
	public optionHashKey(): OptionHashKeyContext {
		return this.getRuleContext(0, OptionHashKeyContext);
	}
	public COLON(): TerminalNode { return this.getToken(CqlParser.COLON, 0); }
	public optionHashValue(): OptionHashValueContext {
		return this.getRuleContext(0, OptionHashValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_optionHashItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOptionHashItem) listener.enterOptionHashItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOptionHashItem) listener.exitOptionHashItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOptionHashItem) return visitor.visitOptionHashItem(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionHashKeyContext extends ParserRuleContext {
	public constantString(): ConstantStringContext {
		return this.getRuleContext(0, ConstantStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_optionHashKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOptionHashKey) listener.enterOptionHashKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOptionHashKey) listener.exitOptionHashKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOptionHashKey) return visitor.visitOptionHashKey(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionHashValueContext extends ParserRuleContext {
	public constantString(): ConstantStringContext | undefined {
		return this.tryGetRuleContext(0, ConstantStringContext);
	}
	public constantFloat(): ConstantFloatContext | undefined {
		return this.tryGetRuleContext(0, ConstantFloatContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_optionHashValue; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOptionHashValue) listener.enterOptionHashValue(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOptionHashValue) listener.exitOptionHashValue(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOptionHashValue) return visitor.visitOptionHashValue(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnDefinitionListContext extends ParserRuleContext {
	public columnDefinition(): ColumnDefinitionContext[];
	public columnDefinition(i: number): ColumnDefinitionContext;
	public columnDefinition(i?: number): ColumnDefinitionContext | ColumnDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnDefinitionContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	public primaryKeyElement(): PrimaryKeyElementContext | undefined {
		return this.tryGetRuleContext(0, PrimaryKeyElementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnDefinitionList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnDefinitionList) listener.enterColumnDefinitionList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnDefinitionList) listener.exitColumnDefinitionList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnDefinitionList) return visitor.visitColumnDefinitionList(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnDefinitionContext extends ParserRuleContext {
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public dataType(): DataTypeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeContext);
	}
	public primaryKeyModifier(): PrimaryKeyModifierContext | undefined {
		return this.tryGetRuleContext(0, PrimaryKeyModifierContext);
	}
	public kwStatic(): KwStaticContext | undefined {
		return this.tryGetRuleContext(0, KwStaticContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnDefinition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnDefinition) listener.enterColumnDefinition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnDefinition) listener.exitColumnDefinition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnDefinition) return visitor.visitColumnDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryKeyModifierContext extends ParserRuleContext {
	public kwPrimary(): KwPrimaryContext {
		return this.getRuleContext(0, KwPrimaryContext);
	}
	public kwKey(): KwKeyContext | undefined {
		return this.tryGetRuleContext(0, KwKeyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_primaryKeyModifier; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPrimaryKeyModifier) listener.enterPrimaryKeyModifier(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPrimaryKeyModifier) listener.exitPrimaryKeyModifier(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPrimaryKeyModifier) return visitor.visitPrimaryKeyModifier(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryKeyElementContext extends ParserRuleContext {
	public kwPrimary(): KwPrimaryContext {
		return this.getRuleContext(0, KwPrimaryContext);
	}
	public kwKey(): KwKeyContext {
		return this.getRuleContext(0, KwKeyContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public primaryKeyDefinition(): PrimaryKeyDefinitionContext {
		return this.getRuleContext(0, PrimaryKeyDefinitionContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_primaryKeyElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPrimaryKeyElement) listener.enterPrimaryKeyElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPrimaryKeyElement) listener.exitPrimaryKeyElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPrimaryKeyElement) return visitor.visitPrimaryKeyElement(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryKeyDefinitionContext extends ParserRuleContext {
	public singlePrimaryKey(): SinglePrimaryKeyContext | undefined {
		return this.tryGetRuleContext(0, SinglePrimaryKeyContext);
	}
	public compoundKey(): CompoundKeyContext | undefined {
		return this.tryGetRuleContext(0, CompoundKeyContext);
	}
	public compositeKey(): CompositeKeyContext | undefined {
		return this.tryGetRuleContext(0, CompositeKeyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_primaryKeyDefinition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPrimaryKeyDefinition) listener.enterPrimaryKeyDefinition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPrimaryKeyDefinition) listener.exitPrimaryKeyDefinition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPrimaryKeyDefinition) return visitor.visitPrimaryKeyDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class SinglePrimaryKeyContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_singlePrimaryKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSinglePrimaryKey) listener.enterSinglePrimaryKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSinglePrimaryKey) listener.exitSinglePrimaryKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSinglePrimaryKey) return visitor.visitSinglePrimaryKey(this);
		else return visitor.visitChildren(this);
	}
}


export class CompoundKeyContext extends ParserRuleContext {
	public partitionKey(): PartitionKeyContext {
		return this.getRuleContext(0, PartitionKeyContext);
	}
	public syntaxComma(): SyntaxCommaContext | undefined {
		return this.tryGetRuleContext(0, SyntaxCommaContext);
	}
	public clusteringKeyList(): ClusteringKeyListContext | undefined {
		return this.tryGetRuleContext(0, ClusteringKeyListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_compoundKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCompoundKey) listener.enterCompoundKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCompoundKey) listener.exitCompoundKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCompoundKey) return visitor.visitCompoundKey(this);
		else return visitor.visitChildren(this);
	}
}


export class CompositeKeyContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public partitionKeyList(): PartitionKeyListContext {
		return this.getRuleContext(0, PartitionKeyListContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public syntaxComma(): SyntaxCommaContext | undefined {
		return this.tryGetRuleContext(0, SyntaxCommaContext);
	}
	public clusteringKeyList(): ClusteringKeyListContext | undefined {
		return this.tryGetRuleContext(0, ClusteringKeyListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_compositeKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCompositeKey) listener.enterCompositeKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCompositeKey) listener.exitCompositeKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCompositeKey) return visitor.visitCompositeKey(this);
		else return visitor.visitChildren(this);
	}
}


export class PartitionKeyListContext extends ParserRuleContext {
	public partitionKey(): PartitionKeyContext[];
	public partitionKey(i: number): PartitionKeyContext;
	public partitionKey(i?: number): PartitionKeyContext | PartitionKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionKeyContext);
		} else {
			return this.getRuleContext(i, PartitionKeyContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_partitionKeyList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPartitionKeyList) listener.enterPartitionKeyList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPartitionKeyList) listener.exitPartitionKeyList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionKeyList) return visitor.visitPartitionKeyList(this);
		else return visitor.visitChildren(this);
	}
}


export class ClusteringKeyListContext extends ParserRuleContext {
	public clusteringKey(): ClusteringKeyContext[];
	public clusteringKey(i: number): ClusteringKeyContext;
	public clusteringKey(i?: number): ClusteringKeyContext | ClusteringKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClusteringKeyContext);
		} else {
			return this.getRuleContext(i, ClusteringKeyContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_clusteringKeyList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterClusteringKeyList) listener.enterClusteringKeyList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitClusteringKeyList) listener.exitClusteringKeyList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitClusteringKeyList) return visitor.visitClusteringKeyList(this);
		else return visitor.visitChildren(this);
	}
}


export class PartitionKeyContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_partitionKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPartitionKey) listener.enterPartitionKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPartitionKey) listener.exitPartitionKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionKey) return visitor.visitPartitionKey(this);
		else return visitor.visitChildren(this);
	}
}


export class ClusteringKeyContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_clusteringKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterClusteringKey) listener.enterClusteringKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitClusteringKey) listener.exitClusteringKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitClusteringKey) return visitor.visitClusteringKey(this);
		else return visitor.visitChildren(this);
	}
}


export class ApplyBatchContext extends ParserRuleContext {
	public kwApply(): KwApplyContext {
		return this.getRuleContext(0, KwApplyContext);
	}
	public kwBatch(): KwBatchContext {
		return this.getRuleContext(0, KwBatchContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_applyBatch; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterApplyBatch) listener.enterApplyBatch(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitApplyBatch) listener.exitApplyBatch(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitApplyBatch) return visitor.visitApplyBatch(this);
		else return visitor.visitChildren(this);
	}
}


export class BeginBatchContext extends ParserRuleContext {
	public beginBatchSpec(): BeginBatchSpecContext {
		return this.getRuleContext(0, BeginBatchSpecContext);
	}
	public delete(): DeleteContext | undefined {
		return this.tryGetRuleContext(0, DeleteContext);
	}
	public insert(): InsertContext | undefined {
		return this.tryGetRuleContext(0, InsertContext);
	}
	public update(): UpdateContext | undefined {
		return this.tryGetRuleContext(0, UpdateContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_beginBatch; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterBeginBatch) listener.enterBeginBatch(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitBeginBatch) listener.exitBeginBatch(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitBeginBatch) return visitor.visitBeginBatch(this);
		else return visitor.visitChildren(this);
	}
}


export class BeginBatchSpecContext extends ParserRuleContext {
	public kwBegin(): KwBeginContext {
		return this.getRuleContext(0, KwBeginContext);
	}
	public kwBatch(): KwBatchContext {
		return this.getRuleContext(0, KwBatchContext);
	}
	public batchType(): BatchTypeContext | undefined {
		return this.tryGetRuleContext(0, BatchTypeContext);
	}
	public usingTimestampSpec(): UsingTimestampSpecContext | undefined {
		return this.tryGetRuleContext(0, UsingTimestampSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_beginBatchSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterBeginBatchSpec) listener.enterBeginBatchSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitBeginBatchSpec) listener.exitBeginBatchSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitBeginBatchSpec) return visitor.visitBeginBatchSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class BatchTypeContext extends ParserRuleContext {
	public kwLogged(): KwLoggedContext | undefined {
		return this.tryGetRuleContext(0, KwLoggedContext);
	}
	public kwUnlogged(): KwUnloggedContext | undefined {
		return this.tryGetRuleContext(0, KwUnloggedContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_batchType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterBatchType) listener.enterBatchType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitBatchType) listener.exitBatchType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitBatchType) return visitor.visitBatchType(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterKeyspaceContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwKeyspace(): KwKeyspaceContext {
		return this.getRuleContext(0, KwKeyspaceContext);
	}
	public keyspace(): KeyspaceContext {
		return this.getRuleContext(0, KeyspaceContext);
	}
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public kwReplication(): KwReplicationContext {
		return this.getRuleContext(0, KwReplicationContext);
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public replicationList(): ReplicationListContext {
		return this.getRuleContext(0, ReplicationListContext);
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public kwAnd(): KwAndContext | undefined {
		return this.tryGetRuleContext(0, KwAndContext);
	}
	public durableWrites(): DurableWritesContext | undefined {
		return this.tryGetRuleContext(0, DurableWritesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterKeyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterKeyspace) listener.enterAlterKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterKeyspace) listener.exitAlterKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterKeyspace) return visitor.visitAlterKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class ReplicationListContext extends ParserRuleContext {
	public replicationListItem(): ReplicationListItemContext[];
	public replicationListItem(i: number): ReplicationListItemContext;
	public replicationListItem(i?: number): ReplicationListItemContext | ReplicationListItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReplicationListItemContext);
		} else {
			return this.getRuleContext(i, ReplicationListItemContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_replicationList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterReplicationList) listener.enterReplicationList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitReplicationList) listener.exitReplicationList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitReplicationList) return visitor.visitReplicationList(this);
		else return visitor.visitChildren(this);
	}
}


export class ReplicationListItemContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode[];
	public STRING_LITERAL(i: number): TerminalNode;
	public STRING_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.STRING_LITERAL);
		} else {
			return this.getToken(CqlParser.STRING_LITERAL, i);
		}
	}
	public COLON(): TerminalNode { return this.getToken(CqlParser.COLON, 0); }
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DECIMAL_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_replicationListItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterReplicationListItem) listener.enterReplicationListItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitReplicationListItem) listener.exitReplicationListItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitReplicationListItem) return visitor.visitReplicationListItem(this);
		else return visitor.visitChildren(this);
	}
}


export class DurableWritesContext extends ParserRuleContext {
	public kwDurableWrites(): KwDurableWritesContext {
		return this.getRuleContext(0, KwDurableWritesContext);
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public constantBoolean(): ConstantBooleanContext {
		return this.getRuleContext(0, ConstantBooleanContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_durableWrites; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDurableWrites) listener.enterDurableWrites(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDurableWrites) listener.exitDurableWrites(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDurableWrites) return visitor.visitDurableWrites(this);
		else return visitor.visitChildren(this);
	}
}


export class UseContext extends ParserRuleContext {
	public kwUse(): KwUseContext {
		return this.getRuleContext(0, KwUseContext);
	}
	public keyspace(): KeyspaceContext {
		return this.getRuleContext(0, KeyspaceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_use; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUse) listener.enterUse(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUse) listener.exitUse(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUse) return visitor.visitUse(this);
		else return visitor.visitChildren(this);
	}
}


export class TruncateContext extends ParserRuleContext {
	public kwTruncate(): KwTruncateContext {
		return this.getRuleContext(0, KwTruncateContext);
	}
	public tableSpec(): TableSpecContext {
		return this.getRuleContext(0, TableSpecContext);
	}
	public kwTable(): KwTableContext | undefined {
		return this.tryGetRuleContext(0, KwTableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_truncate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTruncate) listener.enterTruncate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTruncate) listener.exitTruncate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTruncate) return visitor.visitTruncate(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateIndexContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwIndex(): KwIndexContext {
		return this.getRuleContext(0, KwIndexContext);
	}
	public createIndexSubject(): CreateIndexSubjectContext {
		return this.getRuleContext(0, CreateIndexSubjectContext);
	}
	public createIndexDef(): CreateIndexDefContext {
		return this.getRuleContext(0, CreateIndexDefContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public indexName(): IndexNameContext | undefined {
		return this.tryGetRuleContext(0, IndexNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createIndex; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateIndex) listener.enterCreateIndex(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateIndex) listener.exitCreateIndex(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateIndex) return visitor.visitCreateIndex(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateIndexSubjectContext extends ParserRuleContext {
	public kwOn(): KwOnContext | undefined {
		return this.tryGetRuleContext(0, KwOnContext);
	}
	public tableSpec(): TableSpecContext | undefined {
		return this.tryGetRuleContext(0, TableSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createIndexSubject; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateIndexSubject) listener.enterCreateIndexSubject(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateIndexSubject) listener.exitCreateIndexSubject(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateIndexSubject) return visitor.visitCreateIndexSubject(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexNameContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
	public constantString(): ConstantStringContext | undefined {
		return this.tryGetRuleContext(0, ConstantStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_indexName; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndexName) listener.enterIndexName(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndexName) listener.exitIndexName(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndexName) return visitor.visitIndexName(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateIndexDefContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLrContext);
	}
	public createIndexTarget(): CreateIndexTargetContext | undefined {
		return this.tryGetRuleContext(0, CreateIndexTargetContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createIndexDef; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateIndexDef) listener.enterCreateIndexDef(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateIndexDef) listener.exitCreateIndexDef(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateIndexDef) return visitor.visitCreateIndexDef(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateIndexTargetContext extends ParserRuleContext {
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public indexKeysSpec(): IndexKeysSpecContext | undefined {
		return this.tryGetRuleContext(0, IndexKeysSpecContext);
	}
	public indexEntriesSSpec(): IndexEntriesSSpecContext | undefined {
		return this.tryGetRuleContext(0, IndexEntriesSSpecContext);
	}
	public indexFullSpec(): IndexFullSpecContext | undefined {
		return this.tryGetRuleContext(0, IndexFullSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createIndexTarget; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateIndexTarget) listener.enterCreateIndexTarget(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateIndexTarget) listener.exitCreateIndexTarget(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateIndexTarget) return visitor.visitCreateIndexTarget(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexKeysSpecContext extends ParserRuleContext {
	public kwKeys(): KwKeysContext {
		return this.getRuleContext(0, KwKeysContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_indexKeysSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndexKeysSpec) listener.enterIndexKeysSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndexKeysSpec) listener.exitIndexKeysSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndexKeysSpec) return visitor.visitIndexKeysSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexEntriesSSpecContext extends ParserRuleContext {
	public kwEntries(): KwEntriesContext {
		return this.getRuleContext(0, KwEntriesContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_indexEntriesSSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndexEntriesSSpec) listener.enterIndexEntriesSSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndexEntriesSSpec) listener.exitIndexEntriesSSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndexEntriesSSpec) return visitor.visitIndexEntriesSSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexFullSpecContext extends ParserRuleContext {
	public kwFull(): KwFullContext {
		return this.getRuleContext(0, KwFullContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_indexFullSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndexFullSpec) listener.enterIndexFullSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndexFullSpec) listener.exitIndexFullSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndexFullSpec) return visitor.visitIndexFullSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class DeleteContext extends ParserRuleContext {
	public kwDelete(): KwDeleteContext {
		return this.getRuleContext(0, KwDeleteContext);
	}
	public fromSpec(): FromSpecContext {
		return this.getRuleContext(0, FromSpecContext);
	}
	public whereSpec(): WhereSpecContext | undefined {
		return this.tryGetRuleContext(0, WhereSpecContext);
	}
	public deleteColumnList(): DeleteColumnListContext | undefined {
		return this.tryGetRuleContext(0, DeleteColumnListContext);
	}
	public usingTimestampSpec(): UsingTimestampSpecContext | undefined {
		return this.tryGetRuleContext(0, UsingTimestampSpecContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public ifSpec(): IfSpecContext | undefined {
		return this.tryGetRuleContext(0, IfSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_delete; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDelete) listener.enterDelete(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDelete) listener.exitDelete(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDelete) return visitor.visitDelete(this);
		else return visitor.visitChildren(this);
	}
}


export class DeleteColumnListContext extends ParserRuleContext {
	public deleteColumnItem(): DeleteColumnItemContext[];
	public deleteColumnItem(i: number): DeleteColumnItemContext;
	public deleteColumnItem(i?: number): DeleteColumnItemContext | DeleteColumnItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeleteColumnItemContext);
		} else {
			return this.getRuleContext(i, DeleteColumnItemContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_deleteColumnList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDeleteColumnList) listener.enterDeleteColumnList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDeleteColumnList) listener.exitDeleteColumnList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDeleteColumnList) return visitor.visitDeleteColumnList(this);
		else return visitor.visitChildren(this);
	}
}


export class DeleteColumnItemContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public syntaxBracketLs(): SyntaxBracketLsContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLsContext);
	}
	public syntaxBracketRs(): SyntaxBracketRsContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRsContext);
	}
	public constantString(): ConstantStringContext | undefined {
		return this.tryGetRuleContext(0, ConstantStringContext);
	}
	public constantDecimal(): ConstantDecimalContext | undefined {
		return this.tryGetRuleContext(0, ConstantDecimalContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_deleteColumnItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDeleteColumnItem) listener.enterDeleteColumnItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDeleteColumnItem) listener.exitDeleteColumnItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDeleteColumnItem) return visitor.visitDeleteColumnItem(this);
		else return visitor.visitChildren(this);
	}
}


export class UpdateContext extends ParserRuleContext {
	public kwUpdate(): KwUpdateContext {
		return this.getRuleContext(0, KwUpdateContext);
	}
	public tableSpec(): TableSpecContext {
		return this.getRuleContext(0, TableSpecContext);
	}
	public updateAssignments(): UpdateAssignmentsContext {
		return this.getRuleContext(0, UpdateAssignmentsContext);
	}
	public whereSpec(): WhereSpecContext | undefined {
		return this.tryGetRuleContext(0, WhereSpecContext);
	}
	public usingTtlTimestamp(): UsingTtlTimestampContext | undefined {
		return this.tryGetRuleContext(0, UsingTtlTimestampContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public ifSpec(): IfSpecContext | undefined {
		return this.tryGetRuleContext(0, IfSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_update; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUpdate) listener.enterUpdate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUpdate) listener.exitUpdate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUpdate) return visitor.visitUpdate(this);
		else return visitor.visitChildren(this);
	}
}


export class IfSpecContext extends ParserRuleContext {
	public kwIf(): KwIfContext {
		return this.getRuleContext(0, KwIfContext);
	}
	public ifConditionList(): IfConditionListContext {
		return this.getRuleContext(0, IfConditionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ifSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIfSpec) listener.enterIfSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIfSpec) listener.exitIfSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIfSpec) return visitor.visitIfSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class IfConditionListContext extends ParserRuleContext {
	public ifCondition(): IfConditionContext[];
	public ifCondition(i: number): IfConditionContext;
	public ifCondition(i?: number): IfConditionContext | IfConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfConditionContext);
		} else {
			return this.getRuleContext(i, IfConditionContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ifConditionList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIfConditionList) listener.enterIfConditionList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIfConditionList) listener.exitIfConditionList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIfConditionList) return visitor.visitIfConditionList(this);
		else return visitor.visitChildren(this);
	}
}


export class IfConditionContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ifCondition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIfCondition) listener.enterIfCondition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIfCondition) listener.exitIfCondition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIfCondition) return visitor.visitIfCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class UpdateAssignmentsContext extends ParserRuleContext {
	public kwSet(): KwSetContext | undefined {
		return this.tryGetRuleContext(0, KwSetContext);
	}
	public updateAssignmentElement(): UpdateAssignmentElementContext[];
	public updateAssignmentElement(i: number): UpdateAssignmentElementContext;
	public updateAssignmentElement(i?: number): UpdateAssignmentElementContext | UpdateAssignmentElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UpdateAssignmentElementContext);
		} else {
			return this.getRuleContext(i, UpdateAssignmentElementContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_updateAssignments; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUpdateAssignments) listener.enterUpdateAssignments(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUpdateAssignments) listener.exitUpdateAssignments(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateAssignments) return visitor.visitUpdateAssignments(this);
		else return visitor.visitChildren(this);
	}
}


export class UpdateAssignmentElementContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public syntaxOperatorEq(): SyntaxOperatorEqContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorEqContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public assignmentMap(): AssignmentMapContext | undefined {
		return this.tryGetRuleContext(0, AssignmentMapContext);
	}
	public assignmentSet(): AssignmentSetContext | undefined {
		return this.tryGetRuleContext(0, AssignmentSetContext);
	}
	public assignmentList(): AssignmentListContext | undefined {
		return this.tryGetRuleContext(0, AssignmentListContext);
	}
	public constantDecimal(): ConstantDecimalContext | undefined {
		return this.tryGetRuleContext(0, ConstantDecimalContext);
	}
	public syntaxPlus(): SyntaxPlusContext | undefined {
		return this.tryGetRuleContext(0, SyntaxPlusContext);
	}
	public syntaxMinus(): SyntaxMinusContext | undefined {
		return this.tryGetRuleContext(0, SyntaxMinusContext);
	}
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
	public syntaxBracketLs(): SyntaxBracketLsContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLsContext);
	}
	public syntaxBracketRs(): SyntaxBracketRsContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_updateAssignmentElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUpdateAssignmentElement) listener.enterUpdateAssignmentElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUpdateAssignmentElement) listener.exitUpdateAssignmentElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateAssignmentElement) return visitor.visitUpdateAssignmentElement(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentSetContext extends ParserRuleContext {
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_assignmentSet; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAssignmentSet) listener.enterAssignmentSet(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAssignmentSet) listener.exitAssignmentSet(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAssignmentSet) return visitor.visitAssignmentSet(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentMapContext extends ParserRuleContext {
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public syntaxColon(): SyntaxColonContext[];
	public syntaxColon(i: number): SyntaxColonContext;
	public syntaxColon(i?: number): SyntaxColonContext | SyntaxColonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxColonContext);
		} else {
			return this.getRuleContext(i, SyntaxColonContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_assignmentMap; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAssignmentMap) listener.enterAssignmentMap(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAssignmentMap) listener.exitAssignmentMap(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAssignmentMap) return visitor.visitAssignmentMap(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentListContext extends ParserRuleContext {
	public syntaxBracketLs(): SyntaxBracketLsContext {
		return this.getRuleContext(0, SyntaxBracketLsContext);
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public syntaxBracketRs(): SyntaxBracketRsContext {
		return this.getRuleContext(0, SyntaxBracketRsContext);
	}
	public syntaxColon(): SyntaxColonContext[];
	public syntaxColon(i: number): SyntaxColonContext;
	public syntaxColon(i?: number): SyntaxColonContext | SyntaxColonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxColonContext);
		} else {
			return this.getRuleContext(i, SyntaxColonContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_assignmentList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAssignmentList) listener.enterAssignmentList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAssignmentList) listener.exitAssignmentList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAssignmentList) return visitor.visitAssignmentList(this);
		else return visitor.visitChildren(this);
	}
}


export class InsertContext extends ParserRuleContext {
	public kwInsert(): KwInsertContext {
		return this.getRuleContext(0, KwInsertContext);
	}
	public kwInto(): KwIntoContext {
		return this.getRuleContext(0, KwIntoContext);
	}
	public tableSpec(): TableSpecContext {
		return this.getRuleContext(0, TableSpecContext);
	}
	public insertColumnSpec(): InsertColumnSpecContext {
		return this.getRuleContext(0, InsertColumnSpecContext);
	}
	public insertValuesSpec(): InsertValuesSpecContext {
		return this.getRuleContext(0, InsertValuesSpecContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public usingTtlTimestamp(): UsingTtlTimestampContext | undefined {
		return this.tryGetRuleContext(0, UsingTtlTimestampContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_insert; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInsert) listener.enterInsert(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInsert) listener.exitInsert(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInsert) return visitor.visitInsert(this);
		else return visitor.visitChildren(this);
	}
}


export class UsingTtlTimestampContext extends ParserRuleContext {
	public kwUsing(): KwUsingContext {
		return this.getRuleContext(0, KwUsingContext);
	}
	public ttl(): TtlContext | undefined {
		return this.tryGetRuleContext(0, TtlContext);
	}
	public kwAnd(): KwAndContext | undefined {
		return this.tryGetRuleContext(0, KwAndContext);
	}
	public timestamp(): TimestampContext | undefined {
		return this.tryGetRuleContext(0, TimestampContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_usingTtlTimestamp; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUsingTtlTimestamp) listener.enterUsingTtlTimestamp(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUsingTtlTimestamp) listener.exitUsingTtlTimestamp(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUsingTtlTimestamp) return visitor.visitUsingTtlTimestamp(this);
		else return visitor.visitChildren(this);
	}
}


export class TimestampContext extends ParserRuleContext {
	public kwTimestamp(): KwTimestampContext {
		return this.getRuleContext(0, KwTimestampContext);
	}
	public constantDecimal(): ConstantDecimalContext {
		return this.getRuleContext(0, ConstantDecimalContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_timestamp; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTimestamp) listener.enterTimestamp(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTimestamp) listener.exitTimestamp(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTimestamp) return visitor.visitTimestamp(this);
		else return visitor.visitChildren(this);
	}
}


export class TtlContext extends ParserRuleContext {
	public kwTtl(): KwTtlContext {
		return this.getRuleContext(0, KwTtlContext);
	}
	public constantDecimal(): ConstantDecimalContext {
		return this.getRuleContext(0, ConstantDecimalContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ttl; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTtl) listener.enterTtl(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTtl) listener.exitTtl(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTtl) return visitor.visitTtl(this);
		else return visitor.visitChildren(this);
	}
}


export class UsingTimestampSpecContext extends ParserRuleContext {
	public kwUsing(): KwUsingContext {
		return this.getRuleContext(0, KwUsingContext);
	}
	public timestamp(): TimestampContext {
		return this.getRuleContext(0, TimestampContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_usingTimestampSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUsingTimestampSpec) listener.enterUsingTimestampSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUsingTimestampSpec) listener.exitUsingTimestampSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUsingTimestampSpec) return visitor.visitUsingTimestampSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class IfNotExistContext extends ParserRuleContext {
	public kwIf(): KwIfContext {
		return this.getRuleContext(0, KwIfContext);
	}
	public kwNot(): KwNotContext {
		return this.getRuleContext(0, KwNotContext);
	}
	public kwExists(): KwExistsContext {
		return this.getRuleContext(0, KwExistsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ifNotExist; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIfNotExist) listener.enterIfNotExist(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIfNotExist) listener.exitIfNotExist(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIfNotExist) return visitor.visitIfNotExist(this);
		else return visitor.visitChildren(this);
	}
}


export class IfExistContext extends ParserRuleContext {
	public kwIf(): KwIfContext {
		return this.getRuleContext(0, KwIfContext);
	}
	public kwExists(): KwExistsContext {
		return this.getRuleContext(0, KwExistsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ifExist; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIfExist) listener.enterIfExist(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIfExist) listener.exitIfExist(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIfExist) return visitor.visitIfExist(this);
		else return visitor.visitChildren(this);
	}
}


export class InsertValuesSpecContext extends ParserRuleContext {
	public kwValues(): KwValuesContext | undefined {
		return this.tryGetRuleContext(0, KwValuesContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLrContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_insertValuesSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInsertValuesSpec) listener.enterInsertValuesSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInsertValuesSpec) listener.exitInsertValuesSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInsertValuesSpec) return visitor.visitInsertValuesSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class InsertColumnSpecContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLrContext);
	}
	public columnList(): ColumnListContext | undefined {
		return this.tryGetRuleContext(0, ColumnListContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_insertColumnSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInsertColumnSpec) listener.enterInsertColumnSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInsertColumnSpec) listener.exitInsertColumnSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInsertColumnSpec) return visitor.visitInsertColumnSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnListContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnList) listener.enterColumnList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnList) listener.exitColumnList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnList) return visitor.visitColumnList(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_expressionList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterExpressionList) listener.enterExpressionList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitExpressionList) listener.exitExpressionList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) return visitor.visitExpressionList(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public assignmentMap(): AssignmentMapContext | undefined {
		return this.tryGetRuleContext(0, AssignmentMapContext);
	}
	public assignmentSet(): AssignmentSetContext | undefined {
		return this.tryGetRuleContext(0, AssignmentSetContext);
	}
	public assignmentList(): AssignmentListContext | undefined {
		return this.tryGetRuleContext(0, AssignmentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_expression; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class SelectContext extends ParserRuleContext {
	public kwSelect(): KwSelectContext {
		return this.getRuleContext(0, KwSelectContext);
	}
	public selectElements(): SelectElementsContext {
		return this.getRuleContext(0, SelectElementsContext);
	}
	public fromSpec(): FromSpecContext {
		return this.getRuleContext(0, FromSpecContext);
	}
	public kwDistinct(): KwDistinctContext | undefined {
		return this.tryGetRuleContext(0, KwDistinctContext);
	}
	public whereSpec(): WhereSpecContext | undefined {
		return this.tryGetRuleContext(0, WhereSpecContext);
	}
	public orderSpec(): OrderSpecContext | undefined {
		return this.tryGetRuleContext(0, OrderSpecContext);
	}
	public limitSpec(): LimitSpecContext | undefined {
		return this.tryGetRuleContext(0, LimitSpecContext);
	}
	public kwAllowFiltering(): KwAllowFilteringContext | undefined {
		return this.tryGetRuleContext(0, KwAllowFilteringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_select; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSelect) listener.enterSelect(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSelect) listener.exitSelect(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSelect) return visitor.visitSelect(this);
		else return visitor.visitChildren(this);
	}
}


export class LimitSpecContext extends ParserRuleContext {
	public kwLimit(): KwLimitContext {
		return this.getRuleContext(0, KwLimitContext);
	}
	public constantDecimal(): ConstantDecimalContext {
		return this.getRuleContext(0, ConstantDecimalContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_limitSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterLimitSpec) listener.enterLimitSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitLimitSpec) listener.exitLimitSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitLimitSpec) return visitor.visitLimitSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class FromSpecContext extends ParserRuleContext {
	public kwFrom(): KwFromContext | undefined {
		return this.tryGetRuleContext(0, KwFromContext);
	}
	public tableSpec(): TableSpecContext | undefined {
		return this.tryGetRuleContext(0, TableSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_fromSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterFromSpec) listener.enterFromSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitFromSpec) listener.exitFromSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitFromSpec) return visitor.visitFromSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class OrderSpecContext extends ParserRuleContext {
	public kwOrderBy(): KwOrderByContext {
		return this.getRuleContext(0, KwOrderByContext);
	}
	public orderSpecElement(): OrderSpecElementContext {
		return this.getRuleContext(0, OrderSpecElementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_orderSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOrderSpec) listener.enterOrderSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOrderSpec) listener.exitOrderSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOrderSpec) return visitor.visitOrderSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class OrderSpecElementContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public kwAsc(): KwAscContext | undefined {
		return this.tryGetRuleContext(0, KwAscContext);
	}
	public kwDesc(): KwDescContext | undefined {
		return this.tryGetRuleContext(0, KwDescContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_orderSpecElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOrderSpecElement) listener.enterOrderSpecElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOrderSpecElement) listener.exitOrderSpecElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOrderSpecElement) return visitor.visitOrderSpecElement(this);
		else return visitor.visitChildren(this);
	}
}


export class WhereSpecContext extends ParserRuleContext {
	public kwWhere(): KwWhereContext {
		return this.getRuleContext(0, KwWhereContext);
	}
	public relationElements(): RelationElementsContext {
		return this.getRuleContext(0, RelationElementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_whereSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterWhereSpec) listener.enterWhereSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitWhereSpec) listener.exitWhereSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitWhereSpec) return visitor.visitWhereSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class SelectElementsContext extends ParserRuleContext {
	public specialStar(): SpecialStarContext | undefined {
		return this.tryGetRuleContext(0, SpecialStarContext);
	}
	public selectElement(): SelectElementContext[];
	public selectElement(i: number): SelectElementContext;
	public selectElement(i?: number): SelectElementContext | SelectElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectElementContext);
		} else {
			return this.getRuleContext(i, SelectElementContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_selectElements; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSelectElements) listener.enterSelectElements(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSelectElements) listener.exitSelectElements(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSelectElements) return visitor.visitSelectElements(this);
		else return visitor.visitChildren(this);
	}
}


export class SelectElementContext extends ParserRuleContext {
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public kwAs(): KwAsContext | undefined {
		return this.tryGetRuleContext(0, KwAsContext);
	}
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_selectElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSelectElement) listener.enterSelectElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSelectElement) listener.exitSelectElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSelectElement) return visitor.visitSelectElement(this);
		else return visitor.visitChildren(this);
	}
}


export class RelationElementsContext extends ParserRuleContext {
	public relationElement(): RelationElementContext[];
	public relationElement(i: number): RelationElementContext;
	public relationElement(i?: number): RelationElementContext | RelationElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationElementContext);
		} else {
			return this.getRuleContext(i, RelationElementContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relationElements; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelationElements) listener.enterRelationElements(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelationElements) listener.exitRelationElements(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelationElements) return visitor.visitRelationElements(this);
		else return visitor.visitChildren(this);
	}
}


export class RelationElementContext extends ParserRuleContext {
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public relationOperator(): RelationOperatorContext | undefined {
		return this.tryGetRuleContext(0, RelationOperatorContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public kwIn(): KwInContext | undefined {
		return this.tryGetRuleContext(0, KwInContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLrContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRrContext);
	}
	public functionArgs(): FunctionArgsContext | undefined {
		return this.tryGetRuleContext(0, FunctionArgsContext);
	}
	public kwContains(): KwContainsContext | undefined {
		return this.tryGetRuleContext(0, KwContainsContext);
	}
	public kwContainsKey(): KwContainsKeyContext | undefined {
		return this.tryGetRuleContext(0, KwContainsKeyContext);
	}
	public functionCall(): FunctionCallContext[];
	public functionCall(i: number): FunctionCallContext;
	public functionCall(i?: number): FunctionCallContext | FunctionCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionCallContext);
		} else {
			return this.getRuleContext(i, FunctionCallContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relationElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelationElement) listener.enterRelationElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelationElement) listener.exitRelationElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelationElement) return visitor.visitRelationElement(this);
		else return visitor.visitChildren(this);
	}
}


export class RelationOperatorContext extends ParserRuleContext {
	public syntaxOperatorEq(): SyntaxOperatorEqContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorEqContext);
	}
	public syntaxOperatorLt(): SyntaxOperatorLtContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorLtContext);
	}
	public syntaxOperatorGt(): SyntaxOperatorGtContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorGtContext);
	}
	public syntaxOperatorLte(): SyntaxOperatorLteContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorLteContext);
	}
	public syntaxOperatorGte(): SyntaxOperatorGteContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorGteContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relationOperator; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelationOperator) listener.enterRelationOperator(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelationOperator) listener.exitRelationOperator(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelationOperator) return visitor.visitRelationOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CqlParser.STAR, 0); }
	public functionArgs(): FunctionArgsContext | undefined {
		return this.tryGetRuleContext(0, FunctionArgsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_functionCall; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterFunctionCall) listener.enterFunctionCall(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitFunctionCall) listener.exitFunctionCall(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) return visitor.visitFunctionCall(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionArgsContext extends ParserRuleContext {
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public OBJECT_NAME(): TerminalNode[];
	public OBJECT_NAME(i: number): TerminalNode;
	public OBJECT_NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.OBJECT_NAME);
		} else {
			return this.getToken(CqlParser.OBJECT_NAME, i);
		}
	}
	public functionCall(): FunctionCallContext[];
	public functionCall(i: number): FunctionCallContext;
	public functionCall(i?: number): FunctionCallContext | FunctionCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionCallContext);
		} else {
			return this.getRuleContext(i, FunctionCallContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_functionArgs; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterFunctionArgs) listener.enterFunctionArgs(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitFunctionArgs) listener.exitFunctionArgs(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionArgs) return visitor.visitFunctionArgs(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantContext extends ParserRuleContext {
	public constantUuid(): ConstantUuidContext | undefined {
		return this.tryGetRuleContext(0, ConstantUuidContext);
	}
	public constantString(): ConstantStringContext | undefined {
		return this.tryGetRuleContext(0, ConstantStringContext);
	}
	public constantDecimal(): ConstantDecimalContext | undefined {
		return this.tryGetRuleContext(0, ConstantDecimalContext);
	}
	public constantHexadecimal(): ConstantHexadecimalContext | undefined {
		return this.tryGetRuleContext(0, ConstantHexadecimalContext);
	}
	public constantBoolean(): ConstantBooleanContext | undefined {
		return this.tryGetRuleContext(0, ConstantBooleanContext);
	}
	public kwNull(): KwNullContext | undefined {
		return this.tryGetRuleContext(0, KwNullContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_constant; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstant) listener.enterConstant(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstant) listener.exitConstant(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstant) return visitor.visitConstant(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantUuidContext extends ParserRuleContext {
	public UUID(): TerminalNode { return this.getToken(CqlParser.UUID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantUuid; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantUuid) listener.enterConstantUuid(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantUuid) listener.exitConstantUuid(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantUuid) return visitor.visitConstantUuid(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantDecimalContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode { return this.getToken(CqlParser.DECIMAL_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantDecimal; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantDecimal) listener.enterConstantDecimal(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantDecimal) listener.exitConstantDecimal(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantDecimal) return visitor.visitConstantDecimal(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantFloatContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DECIMAL_LITERAL, 0); }
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantFloat; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantFloat) listener.enterConstantFloat(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantFloat) listener.exitConstantFloat(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantFloat) return visitor.visitConstantFloat(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantStringContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(CqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantString; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantString) listener.enterConstantString(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantString) listener.exitConstantString(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantString) return visitor.visitConstantString(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantBooleanContext extends ParserRuleContext {
	public K_TRUE(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_TRUE, 0); }
	public K_FALSE(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_FALSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantBoolean; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantBoolean) listener.enterConstantBoolean(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantBoolean) listener.exitConstantBoolean(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantBoolean) return visitor.visitConstantBoolean(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantHexadecimalContext extends ParserRuleContext {
	public HEXADECIMAL_LITERAL(): TerminalNode { return this.getToken(CqlParser.HEXADECIMAL_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantHexadecimal; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantHexadecimal) listener.enterConstantHexadecimal(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantHexadecimal) listener.exitConstantHexadecimal(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantHexadecimal) return visitor.visitConstantHexadecimal(this);
		else return visitor.visitChildren(this);
	}
}


export class KeyspaceContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public DQUOTE(): TerminalNode[];
	public DQUOTE(i: number): TerminalNode;
	public DQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.DQUOTE);
		} else {
			return this.getToken(CqlParser.DQUOTE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_keyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKeyspace) listener.enterKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKeyspace) listener.exitKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKeyspace) return visitor.visitKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class TableContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
	public DQUOTE(): TerminalNode[];
	public DQUOTE(i: number): TerminalNode;
	public DQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.DQUOTE);
		} else {
			return this.getToken(CqlParser.DQUOTE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_table; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTable) listener.enterTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTable) listener.exitTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTable) return visitor.visitTable(this);
		else return visitor.visitChildren(this);
	}
}


export class TableSpecContext extends ParserRuleContext {
	public table(): TableContext | undefined {
		return this.tryGetRuleContext(0, TableContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public specialDot(): SpecialDotContext | undefined {
		return this.tryGetRuleContext(0, SpecialDotContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_tableSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTableSpec) listener.enterTableSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTableSpec) listener.exitTableSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTableSpec) return visitor.visitTableSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
	public DQUOTE(): TerminalNode[];
	public DQUOTE(i: number): TerminalNode;
	public DQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.DQUOTE);
		} else {
			return this.getToken(CqlParser.DQUOTE, i);
		}
	}
	public K_ROLE(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLE, 0); }
	public K_PERMISSIONS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_PERMISSIONS, 0); }
	public K_OPTIONS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_OPTIONS, 0); }
	public K_DURABLE_WRITES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_DURABLE_WRITES, 0); }
	public K_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LANGUAGE, 0); }
	public K_TYPE(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_TYPE, 0); }
	public K_INITCOND(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_INITCOND, 0); }
	public K_REPLICATION(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_REPLICATION, 0); }
	public K_TTL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_TTL, 0); }
	public K_PARTITION(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_PARTITION, 0); }
	public K_KEY(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_KEY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_column; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumn) listener.enterColumn(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumn) listener.exitColumn(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumn) return visitor.visitColumn(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeContext extends ParserRuleContext {
	public dataTypeFundamental(): DataTypeFundamentalContext | undefined {
		return this.tryGetRuleContext(0, DataTypeFundamentalContext);
	}
	public dataTypeCollection(): DataTypeCollectionContext | undefined {
		return this.tryGetRuleContext(0, DataTypeCollectionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataType) listener.enterDataType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataType) listener.exitDataType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataType) return visitor.visitDataType(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeCollectionContext extends ParserRuleContext {
	public dataTypeFrozen(): DataTypeFrozenContext | undefined {
		return this.tryGetRuleContext(0, DataTypeFrozenContext);
	}
	public dataTypeStructure(): DataTypeStructureContext {
		return this.getRuleContext(0, DataTypeStructureContext);
	}
	public dataTypeSet(): DataTypeSetContext | undefined {
		return this.tryGetRuleContext(0, DataTypeSetContext);
	}
	public dataTypeList(): DataTypeListContext | undefined {
		return this.tryGetRuleContext(0, DataTypeListContext);
	}
	public dataTypeMap(): DataTypeMapContext | undefined {
		return this.tryGetRuleContext(0, DataTypeMapContext);
	}
	public dataTypeTuple(): DataTypeTupleContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTupleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeCollection; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeCollection) listener.enterDataTypeCollection(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeCollection) listener.exitDataTypeCollection(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeCollection) return visitor.visitDataTypeCollection(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeFundamentalContext extends ParserRuleContext {
	public dataTypeAscii(): DataTypeAsciiContext | undefined {
		return this.tryGetRuleContext(0, DataTypeAsciiContext);
	}
	public dataTypeBigint(): DataTypeBigintContext | undefined {
		return this.tryGetRuleContext(0, DataTypeBigintContext);
	}
	public dataTypeBlob(): DataTypeBlobContext | undefined {
		return this.tryGetRuleContext(0, DataTypeBlobContext);
	}
	public dataTypeBoolean(): DataTypeBooleanContext | undefined {
		return this.tryGetRuleContext(0, DataTypeBooleanContext);
	}
	public dataTypeCounter(): DataTypeCounterContext | undefined {
		return this.tryGetRuleContext(0, DataTypeCounterContext);
	}
	public dataTypeDate(): DataTypeDateContext | undefined {
		return this.tryGetRuleContext(0, DataTypeDateContext);
	}
	public dataTypeDecimal(): DataTypeDecimalContext | undefined {
		return this.tryGetRuleContext(0, DataTypeDecimalContext);
	}
	public dataTypeDouble(): DataTypeDoubleContext | undefined {
		return this.tryGetRuleContext(0, DataTypeDoubleContext);
	}
	public dataTypeFloat(): DataTypeFloatContext | undefined {
		return this.tryGetRuleContext(0, DataTypeFloatContext);
	}
	public dataTypeInet(): DataTypeInetContext | undefined {
		return this.tryGetRuleContext(0, DataTypeInetContext);
	}
	public dataTypeInt(): DataTypeIntContext | undefined {
		return this.tryGetRuleContext(0, DataTypeIntContext);
	}
	public dataTypeSmallInt(): DataTypeSmallIntContext | undefined {
		return this.tryGetRuleContext(0, DataTypeSmallIntContext);
	}
	public dataTypeText(): DataTypeTextContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTextContext);
	}
	public dataTypeTime(): DataTypeTimeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTimeContext);
	}
	public dataTypeTimeUuid(): DataTypeTimeUuidContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTimeUuidContext);
	}
	public dataTypeTimestamp(): DataTypeTimestampContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTimestampContext);
	}
	public dataTypeTinyInt(): DataTypeTinyIntContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTinyIntContext);
	}
	public dataTypeUuid(): DataTypeUuidContext | undefined {
		return this.tryGetRuleContext(0, DataTypeUuidContext);
	}
	public dataTypeVarChar(): DataTypeVarCharContext | undefined {
		return this.tryGetRuleContext(0, DataTypeVarCharContext);
	}
	public dataTypeVarInt(): DataTypeVarIntContext | undefined {
		return this.tryGetRuleContext(0, DataTypeVarIntContext);
	}
	public dataTypeUserDefined(): DataTypeUserDefinedContext | undefined {
		return this.tryGetRuleContext(0, DataTypeUserDefinedContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeFundamental; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeFundamental) listener.enterDataTypeFundamental(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeFundamental) listener.exitDataTypeFundamental(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeFundamental) return visitor.visitDataTypeFundamental(this);
		else return visitor.visitChildren(this);
	}
}


export class OrderDirectionContext extends ParserRuleContext {
	public kwAsc(): KwAscContext | undefined {
		return this.tryGetRuleContext(0, KwAscContext);
	}
	public kwDesc(): KwDescContext | undefined {
		return this.tryGetRuleContext(0, KwDescContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_orderDirection; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOrderDirection) listener.enterOrderDirection(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOrderDirection) listener.exitOrderDirection(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOrderDirection) return visitor.visitOrderDirection(this);
		else return visitor.visitChildren(this);
	}
}


export class RoleContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_role; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRole) listener.enterRole(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRole) listener.exitRole(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRole) return visitor.visitRole(this);
		else return visitor.visitChildren(this);
	}
}


export class TriggerContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_trigger; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTrigger) listener.enterTrigger(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTrigger) listener.exitTrigger(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTrigger) return visitor.visitTrigger(this);
		else return visitor.visitChildren(this);
	}
}


export class TriggerClassContext extends ParserRuleContext {
	public constantString(): ConstantStringContext {
		return this.getRuleContext(0, ConstantStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_triggerClass; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTriggerClass) listener.enterTriggerClass(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTriggerClass) listener.exitTriggerClass(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTriggerClass) return visitor.visitTriggerClass(this);
		else return visitor.visitChildren(this);
	}
}


export class MaterializedViewContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_materializedView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterMaterializedView) listener.enterMaterializedView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitMaterializedView) listener.exitMaterializedView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitMaterializedView) return visitor.visitMaterializedView(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_type; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterType) listener.enterType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitType) listener.exitType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitType) return visitor.visitType(this);
		else return visitor.visitChildren(this);
	}
}


export class AggregateContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_aggregate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAggregate) listener.enterAggregate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAggregate) listener.exitAggregate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAggregate) return visitor.visitAggregate(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_function; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterFunction) listener.enterFunction(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitFunction) listener.exitFunction(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitFunction) return visitor.visitFunction(this);
		else return visitor.visitChildren(this);
	}
}


export class LanguageContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_language; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterLanguage) listener.enterLanguage(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitLanguage) listener.exitLanguage(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitLanguage) return visitor.visitLanguage(this);
		else return visitor.visitChildren(this);
	}
}


export class UserContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_user; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUser) listener.enterUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUser) listener.exitUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUser) return visitor.visitUser(this);
		else return visitor.visitChildren(this);
	}
}


export class PasswordContext extends ParserRuleContext {
	public constantString(): ConstantStringContext {
		return this.getRuleContext(0, ConstantStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_password; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPassword) listener.enterPassword(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPassword) listener.exitPassword(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPassword) return visitor.visitPassword(this);
		else return visitor.visitChildren(this);
	}
}


export class HashKeyContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_hashKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterHashKey) listener.enterHashKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitHashKey) listener.exitHashKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitHashKey) return visitor.visitHashKey(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamContext extends ParserRuleContext {
	public paramName(): ParamNameContext {
		return this.getRuleContext(0, ParamNameContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_param; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterParam) listener.enterParam(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitParam) listener.exitParam(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitParam) return visitor.visitParam(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamNameContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_paramName; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterParamName) listener.enterParamName(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitParamName) listener.exitParamName(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitParamName) return visitor.visitParamName(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAddContext extends ParserRuleContext {
	public K_ADD(): TerminalNode { return this.getToken(CqlParser.K_ADD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAdd; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAdd) listener.enterKwAdd(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAdd) listener.exitKwAdd(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAdd) return visitor.visitKwAdd(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAggregateContext extends ParserRuleContext {
	public K_AGGREGATE(): TerminalNode { return this.getToken(CqlParser.K_AGGREGATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAggregate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAggregate) listener.enterKwAggregate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAggregate) listener.exitKwAggregate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAggregate) return visitor.visitKwAggregate(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllContext extends ParserRuleContext {
	public K_ALL(): TerminalNode { return this.getToken(CqlParser.K_ALL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAll; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAll) listener.enterKwAll(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAll) listener.exitKwAll(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAll) return visitor.visitKwAll(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllFunctionsContext extends ParserRuleContext {
	public K_ALL_FUNCTIONS(): TerminalNode { return this.getToken(CqlParser.K_ALL_FUNCTIONS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAllFunctions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAllFunctions) listener.enterKwAllFunctions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAllFunctions) listener.exitKwAllFunctions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAllFunctions) return visitor.visitKwAllFunctions(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllKeyspacesContext extends ParserRuleContext {
	public K_ALL_KEYSPACES(): TerminalNode { return this.getToken(CqlParser.K_ALL_KEYSPACES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAllKeyspaces; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAllKeyspaces) listener.enterKwAllKeyspaces(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAllKeyspaces) listener.exitKwAllKeyspaces(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAllKeyspaces) return visitor.visitKwAllKeyspaces(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllRolesContext extends ParserRuleContext {
	public K_ALL_ROLES(): TerminalNode { return this.getToken(CqlParser.K_ALL_ROLES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAllRoles; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAllRoles) listener.enterKwAllRoles(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAllRoles) listener.exitKwAllRoles(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAllRoles) return visitor.visitKwAllRoles(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllPermissionsContext extends ParserRuleContext {
	public K_ALL(): TerminalNode { return this.getToken(CqlParser.K_ALL, 0); }
	public K_PERMISSIONS(): TerminalNode { return this.getToken(CqlParser.K_PERMISSIONS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAllPermissions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAllPermissions) listener.enterKwAllPermissions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAllPermissions) listener.exitKwAllPermissions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAllPermissions) return visitor.visitKwAllPermissions(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllowContext extends ParserRuleContext {
	public K_ALLOW(): TerminalNode { return this.getToken(CqlParser.K_ALLOW, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAllow; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAllow) listener.enterKwAllow(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAllow) listener.exitKwAllow(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAllow) return visitor.visitKwAllow(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllowFilteringContext extends ParserRuleContext {
	public K_ALLOW(): TerminalNode { return this.getToken(CqlParser.K_ALLOW, 0); }
	public K_FILTERING(): TerminalNode { return this.getToken(CqlParser.K_FILTERING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAllowFiltering; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAllowFiltering) listener.enterKwAllowFiltering(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAllowFiltering) listener.exitKwAllowFiltering(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAllowFiltering) return visitor.visitKwAllowFiltering(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAlterContext extends ParserRuleContext {
	public K_ALTER(): TerminalNode { return this.getToken(CqlParser.K_ALTER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAlter; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAlter) listener.enterKwAlter(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAlter) listener.exitKwAlter(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAlter) return visitor.visitKwAlter(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAndContext extends ParserRuleContext {
	public K_AND(): TerminalNode { return this.getToken(CqlParser.K_AND, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAnd; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAnd) listener.enterKwAnd(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAnd) listener.exitKwAnd(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAnd) return visitor.visitKwAnd(this);
		else return visitor.visitChildren(this);
	}
}


export class KwApplyContext extends ParserRuleContext {
	public K_APPLY(): TerminalNode { return this.getToken(CqlParser.K_APPLY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwApply; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwApply) listener.enterKwApply(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwApply) listener.exitKwApply(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwApply) return visitor.visitKwApply(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAsContext extends ParserRuleContext {
	public K_AS(): TerminalNode { return this.getToken(CqlParser.K_AS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAs; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAs) listener.enterKwAs(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAs) listener.exitKwAs(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAs) return visitor.visitKwAs(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAscContext extends ParserRuleContext {
	public K_ASC(): TerminalNode { return this.getToken(CqlParser.K_ASC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAsc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAsc) listener.enterKwAsc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAsc) listener.exitKwAsc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAsc) return visitor.visitKwAsc(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAuthorizeContext extends ParserRuleContext {
	public K_AUTHORIZE(): TerminalNode { return this.getToken(CqlParser.K_AUTHORIZE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAuthorize; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAuthorize) listener.enterKwAuthorize(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAuthorize) listener.exitKwAuthorize(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAuthorize) return visitor.visitKwAuthorize(this);
		else return visitor.visitChildren(this);
	}
}


export class KwBatchContext extends ParserRuleContext {
	public K_BATCH(): TerminalNode { return this.getToken(CqlParser.K_BATCH, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwBatch; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwBatch) listener.enterKwBatch(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwBatch) listener.exitKwBatch(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwBatch) return visitor.visitKwBatch(this);
		else return visitor.visitChildren(this);
	}
}


export class KwBeginContext extends ParserRuleContext {
	public K_BEGIN(): TerminalNode { return this.getToken(CqlParser.K_BEGIN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwBegin; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwBegin) listener.enterKwBegin(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwBegin) listener.exitKwBegin(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwBegin) return visitor.visitKwBegin(this);
		else return visitor.visitChildren(this);
	}
}


export class KwByContext extends ParserRuleContext {
	public K_BY(): TerminalNode { return this.getToken(CqlParser.K_BY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwBy; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwBy) listener.enterKwBy(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwBy) listener.exitKwBy(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwBy) return visitor.visitKwBy(this);
		else return visitor.visitChildren(this);
	}
}


export class KwCalledContext extends ParserRuleContext {
	public K_CALLED(): TerminalNode { return this.getToken(CqlParser.K_CALLED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwCalled; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwCalled) listener.enterKwCalled(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwCalled) listener.exitKwCalled(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwCalled) return visitor.visitKwCalled(this);
		else return visitor.visitChildren(this);
	}
}


export class KwClusteringContext extends ParserRuleContext {
	public K_CLUSTERING(): TerminalNode { return this.getToken(CqlParser.K_CLUSTERING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwClustering; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwClustering) listener.enterKwClustering(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwClustering) listener.exitKwClustering(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwClustering) return visitor.visitKwClustering(this);
		else return visitor.visitChildren(this);
	}
}


export class KwCompactContext extends ParserRuleContext {
	public K_COMPACT(): TerminalNode { return this.getToken(CqlParser.K_COMPACT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwCompact; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwCompact) listener.enterKwCompact(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwCompact) listener.exitKwCompact(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwCompact) return visitor.visitKwCompact(this);
		else return visitor.visitChildren(this);
	}
}


export class KwContainsContext extends ParserRuleContext {
	public K_CONTAINS(): TerminalNode { return this.getToken(CqlParser.K_CONTAINS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwContains; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwContains) listener.enterKwContains(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwContains) listener.exitKwContains(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwContains) return visitor.visitKwContains(this);
		else return visitor.visitChildren(this);
	}
}


export class KwContainsKeyContext extends ParserRuleContext {
	public K_CONTAINS(): TerminalNode { return this.getToken(CqlParser.K_CONTAINS, 0); }
	public K_KEY(): TerminalNode { return this.getToken(CqlParser.K_KEY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwContainsKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwContainsKey) listener.enterKwContainsKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwContainsKey) listener.exitKwContainsKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwContainsKey) return visitor.visitKwContainsKey(this);
		else return visitor.visitChildren(this);
	}
}


export class KwCreateContext extends ParserRuleContext {
	public K_CREATE(): TerminalNode { return this.getToken(CqlParser.K_CREATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwCreate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwCreate) listener.enterKwCreate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwCreate) listener.exitKwCreate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwCreate) return visitor.visitKwCreate(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDeleteContext extends ParserRuleContext {
	public K_DELETE(): TerminalNode { return this.getToken(CqlParser.K_DELETE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDelete; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDelete) listener.enterKwDelete(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDelete) listener.exitKwDelete(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDelete) return visitor.visitKwDelete(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDescContext extends ParserRuleContext {
	public K_DESC(): TerminalNode { return this.getToken(CqlParser.K_DESC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDesc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDesc) listener.enterKwDesc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDesc) listener.exitKwDesc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDesc) return visitor.visitKwDesc(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDescibeContext extends ParserRuleContext {
	public K_DESCRIBE(): TerminalNode { return this.getToken(CqlParser.K_DESCRIBE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDescibe; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDescibe) listener.enterKwDescibe(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDescibe) listener.exitKwDescibe(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDescibe) return visitor.visitKwDescibe(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDistinctContext extends ParserRuleContext {
	public K_DISTINCT(): TerminalNode { return this.getToken(CqlParser.K_DISTINCT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDistinct; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDistinct) listener.enterKwDistinct(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDistinct) listener.exitKwDistinct(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDistinct) return visitor.visitKwDistinct(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDropContext extends ParserRuleContext {
	public K_DROP(): TerminalNode { return this.getToken(CqlParser.K_DROP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDrop; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDrop) listener.enterKwDrop(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDrop) listener.exitKwDrop(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDrop) return visitor.visitKwDrop(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDurableWritesContext extends ParserRuleContext {
	public K_DURABLE_WRITES(): TerminalNode { return this.getToken(CqlParser.K_DURABLE_WRITES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDurableWrites; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDurableWrites) listener.enterKwDurableWrites(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDurableWrites) listener.exitKwDurableWrites(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDurableWrites) return visitor.visitKwDurableWrites(this);
		else return visitor.visitChildren(this);
	}
}


export class KwEntriesContext extends ParserRuleContext {
	public K_ENTRIES(): TerminalNode { return this.getToken(CqlParser.K_ENTRIES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwEntries; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwEntries) listener.enterKwEntries(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwEntries) listener.exitKwEntries(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwEntries) return visitor.visitKwEntries(this);
		else return visitor.visitChildren(this);
	}
}


export class KwExecuteContext extends ParserRuleContext {
	public K_EXECUTE(): TerminalNode { return this.getToken(CqlParser.K_EXECUTE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwExecute; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwExecute) listener.enterKwExecute(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwExecute) listener.exitKwExecute(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwExecute) return visitor.visitKwExecute(this);
		else return visitor.visitChildren(this);
	}
}


export class KwExistsContext extends ParserRuleContext {
	public K_EXISTS(): TerminalNode { return this.getToken(CqlParser.K_EXISTS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwExists; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwExists) listener.enterKwExists(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwExists) listener.exitKwExists(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwExists) return visitor.visitKwExists(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFilteringContext extends ParserRuleContext {
	public K_FILTERING(): TerminalNode { return this.getToken(CqlParser.K_FILTERING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFiltering; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFiltering) listener.enterKwFiltering(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFiltering) listener.exitKwFiltering(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFiltering) return visitor.visitKwFiltering(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFinalfuncContext extends ParserRuleContext {
	public K_FINALFUNC(): TerminalNode { return this.getToken(CqlParser.K_FINALFUNC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFinalfunc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFinalfunc) listener.enterKwFinalfunc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFinalfunc) listener.exitKwFinalfunc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFinalfunc) return visitor.visitKwFinalfunc(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFromContext extends ParserRuleContext {
	public K_FROM(): TerminalNode { return this.getToken(CqlParser.K_FROM, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFrom; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFrom) listener.enterKwFrom(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFrom) listener.exitKwFrom(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFrom) return visitor.visitKwFrom(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFullContext extends ParserRuleContext {
	public K_FULL(): TerminalNode { return this.getToken(CqlParser.K_FULL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFull; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFull) listener.enterKwFull(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFull) listener.exitKwFull(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFull) return visitor.visitKwFull(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFunctionContext extends ParserRuleContext {
	public K_FUNCTION(): TerminalNode { return this.getToken(CqlParser.K_FUNCTION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFunction; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFunction) listener.enterKwFunction(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFunction) listener.exitKwFunction(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFunction) return visitor.visitKwFunction(this);
		else return visitor.visitChildren(this);
	}
}


export class KwGrantContext extends ParserRuleContext {
	public K_GRANT(): TerminalNode { return this.getToken(CqlParser.K_GRANT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwGrant; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwGrant) listener.enterKwGrant(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwGrant) listener.exitKwGrant(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwGrant) return visitor.visitKwGrant(this);
		else return visitor.visitChildren(this);
	}
}


export class KwIfContext extends ParserRuleContext {
	public K_IF(): TerminalNode { return this.getToken(CqlParser.K_IF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwIf; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwIf) listener.enterKwIf(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwIf) listener.exitKwIf(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwIf) return visitor.visitKwIf(this);
		else return visitor.visitChildren(this);
	}
}


export class KwInContext extends ParserRuleContext {
	public K_IN(): TerminalNode { return this.getToken(CqlParser.K_IN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwIn; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwIn) listener.enterKwIn(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwIn) listener.exitKwIn(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwIn) return visitor.visitKwIn(this);
		else return visitor.visitChildren(this);
	}
}


export class KwIndexContext extends ParserRuleContext {
	public K_INDEX(): TerminalNode { return this.getToken(CqlParser.K_INDEX, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwIndex; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwIndex) listener.enterKwIndex(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwIndex) listener.exitKwIndex(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwIndex) return visitor.visitKwIndex(this);
		else return visitor.visitChildren(this);
	}
}


export class KwInitcondContext extends ParserRuleContext {
	public K_INITCOND(): TerminalNode { return this.getToken(CqlParser.K_INITCOND, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwInitcond; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwInitcond) listener.enterKwInitcond(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwInitcond) listener.exitKwInitcond(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwInitcond) return visitor.visitKwInitcond(this);
		else return visitor.visitChildren(this);
	}
}


export class KwInputContext extends ParserRuleContext {
	public K_INPUT(): TerminalNode { return this.getToken(CqlParser.K_INPUT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwInput; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwInput) listener.enterKwInput(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwInput) listener.exitKwInput(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwInput) return visitor.visitKwInput(this);
		else return visitor.visitChildren(this);
	}
}


export class KwInsertContext extends ParserRuleContext {
	public K_INSERT(): TerminalNode { return this.getToken(CqlParser.K_INSERT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwInsert; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwInsert) listener.enterKwInsert(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwInsert) listener.exitKwInsert(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwInsert) return visitor.visitKwInsert(this);
		else return visitor.visitChildren(this);
	}
}


export class KwIntoContext extends ParserRuleContext {
	public K_INTO(): TerminalNode { return this.getToken(CqlParser.K_INTO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwInto; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwInto) listener.enterKwInto(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwInto) listener.exitKwInto(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwInto) return visitor.visitKwInto(this);
		else return visitor.visitChildren(this);
	}
}


export class KwIsContext extends ParserRuleContext {
	public K_IS(): TerminalNode { return this.getToken(CqlParser.K_IS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwIs; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwIs) listener.enterKwIs(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwIs) listener.exitKwIs(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwIs) return visitor.visitKwIs(this);
		else return visitor.visitChildren(this);
	}
}


export class KwKeyContext extends ParserRuleContext {
	public K_KEY(): TerminalNode { return this.getToken(CqlParser.K_KEY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwKey) listener.enterKwKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwKey) listener.exitKwKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwKey) return visitor.visitKwKey(this);
		else return visitor.visitChildren(this);
	}
}


export class KwKeysContext extends ParserRuleContext {
	public K_KEYS(): TerminalNode { return this.getToken(CqlParser.K_KEYS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwKeys; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwKeys) listener.enterKwKeys(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwKeys) listener.exitKwKeys(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwKeys) return visitor.visitKwKeys(this);
		else return visitor.visitChildren(this);
	}
}


export class KwKeyspaceContext extends ParserRuleContext {
	public K_KEYSPACE(): TerminalNode { return this.getToken(CqlParser.K_KEYSPACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwKeyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwKeyspace) listener.enterKwKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwKeyspace) listener.exitKwKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwKeyspace) return visitor.visitKwKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class KwLanguageContext extends ParserRuleContext {
	public K_LANGUAGE(): TerminalNode { return this.getToken(CqlParser.K_LANGUAGE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwLanguage; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwLanguage) listener.enterKwLanguage(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwLanguage) listener.exitKwLanguage(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwLanguage) return visitor.visitKwLanguage(this);
		else return visitor.visitChildren(this);
	}
}


export class KwLimitContext extends ParserRuleContext {
	public K_LIMIT(): TerminalNode { return this.getToken(CqlParser.K_LIMIT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwLimit; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwLimit) listener.enterKwLimit(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwLimit) listener.exitKwLimit(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwLimit) return visitor.visitKwLimit(this);
		else return visitor.visitChildren(this);
	}
}


export class KwListContext extends ParserRuleContext {
	public K_LIST(): TerminalNode { return this.getToken(CqlParser.K_LIST, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwList) listener.enterKwList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwList) listener.exitKwList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwList) return visitor.visitKwList(this);
		else return visitor.visitChildren(this);
	}
}


export class KwListRolesContext extends ParserRuleContext {
	public K_LIST_ROLES(): TerminalNode { return this.getToken(CqlParser.K_LIST_ROLES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwListRoles; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwListRoles) listener.enterKwListRoles(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwListRoles) listener.exitKwListRoles(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwListRoles) return visitor.visitKwListRoles(this);
		else return visitor.visitChildren(this);
	}
}


export class KwLoggedContext extends ParserRuleContext {
	public K_LOGGED(): TerminalNode { return this.getToken(CqlParser.K_LOGGED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwLogged; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwLogged) listener.enterKwLogged(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwLogged) listener.exitKwLogged(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwLogged) return visitor.visitKwLogged(this);
		else return visitor.visitChildren(this);
	}
}


export class KwLoginContext extends ParserRuleContext {
	public K_LOGIN(): TerminalNode { return this.getToken(CqlParser.K_LOGIN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwLogin; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwLogin) listener.enterKwLogin(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwLogin) listener.exitKwLogin(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwLogin) return visitor.visitKwLogin(this);
		else return visitor.visitChildren(this);
	}
}


export class KwMaterializedContext extends ParserRuleContext {
	public K_MATERIALIZED(): TerminalNode { return this.getToken(CqlParser.K_MATERIALIZED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwMaterialized; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwMaterialized) listener.enterKwMaterialized(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwMaterialized) listener.exitKwMaterialized(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwMaterialized) return visitor.visitKwMaterialized(this);
		else return visitor.visitChildren(this);
	}
}


export class KwModifyContext extends ParserRuleContext {
	public K_MODIFY(): TerminalNode { return this.getToken(CqlParser.K_MODIFY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwModify; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwModify) listener.enterKwModify(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwModify) listener.exitKwModify(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwModify) return visitor.visitKwModify(this);
		else return visitor.visitChildren(this);
	}
}


export class KwNosuperuserContext extends ParserRuleContext {
	public K_NOSUPERUSER(): TerminalNode { return this.getToken(CqlParser.K_NOSUPERUSER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwNosuperuser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwNosuperuser) listener.enterKwNosuperuser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwNosuperuser) listener.exitKwNosuperuser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwNosuperuser) return visitor.visitKwNosuperuser(this);
		else return visitor.visitChildren(this);
	}
}


export class KwNorecursiveContext extends ParserRuleContext {
	public K_NORECURSIVE(): TerminalNode { return this.getToken(CqlParser.K_NORECURSIVE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwNorecursive; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwNorecursive) listener.enterKwNorecursive(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwNorecursive) listener.exitKwNorecursive(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwNorecursive) return visitor.visitKwNorecursive(this);
		else return visitor.visitChildren(this);
	}
}


export class KwNotContext extends ParserRuleContext {
	public K_NOT(): TerminalNode { return this.getToken(CqlParser.K_NOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwNot; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwNot) listener.enterKwNot(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwNot) listener.exitKwNot(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwNot) return visitor.visitKwNot(this);
		else return visitor.visitChildren(this);
	}
}


export class KwNullContext extends ParserRuleContext {
	public K_NULL(): TerminalNode { return this.getToken(CqlParser.K_NULL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwNull; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwNull) listener.enterKwNull(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwNull) listener.exitKwNull(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwNull) return visitor.visitKwNull(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOfContext extends ParserRuleContext {
	public K_OF(): TerminalNode { return this.getToken(CqlParser.K_OF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOf; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOf) listener.enterKwOf(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOf) listener.exitKwOf(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOf) return visitor.visitKwOf(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOnContext extends ParserRuleContext {
	public K_ON(): TerminalNode { return this.getToken(CqlParser.K_ON, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOn; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOn) listener.enterKwOn(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOn) listener.exitKwOn(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOn) return visitor.visitKwOn(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOptionsContext extends ParserRuleContext {
	public K_OPTIONS(): TerminalNode { return this.getToken(CqlParser.K_OPTIONS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOptions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOptions) listener.enterKwOptions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOptions) listener.exitKwOptions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOptions) return visitor.visitKwOptions(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOrContext extends ParserRuleContext {
	public K_OR(): TerminalNode { return this.getToken(CqlParser.K_OR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOr; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOr) listener.enterKwOr(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOr) listener.exitKwOr(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOr) return visitor.visitKwOr(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOrderContext extends ParserRuleContext {
	public K_ORDER(): TerminalNode { return this.getToken(CqlParser.K_ORDER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOrder; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOrder) listener.enterKwOrder(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOrder) listener.exitKwOrder(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOrder) return visitor.visitKwOrder(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOrderByContext extends ParserRuleContext {
	public K_ORDER(): TerminalNode { return this.getToken(CqlParser.K_ORDER, 0); }
	public K_BY(): TerminalNode { return this.getToken(CqlParser.K_BY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOrderBy; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOrderBy) listener.enterKwOrderBy(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOrderBy) listener.exitKwOrderBy(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOrderBy) return visitor.visitKwOrderBy(this);
		else return visitor.visitChildren(this);
	}
}


export class KwPartitionContext extends ParserRuleContext {
	public K_PARTITION(): TerminalNode { return this.getToken(CqlParser.K_PARTITION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwPartition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwPartition) listener.enterKwPartition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwPartition) listener.exitKwPartition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwPartition) return visitor.visitKwPartition(this);
		else return visitor.visitChildren(this);
	}
}


export class KwPasswordContext extends ParserRuleContext {
	public K_PASSWORD(): TerminalNode { return this.getToken(CqlParser.K_PASSWORD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwPassword; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwPassword) listener.enterKwPassword(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwPassword) listener.exitKwPassword(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwPassword) return visitor.visitKwPassword(this);
		else return visitor.visitChildren(this);
	}
}


export class KwPermissionsContext extends ParserRuleContext {
	public K_PERMISSIONS(): TerminalNode { return this.getToken(CqlParser.K_PERMISSIONS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwPermissions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwPermissions) listener.enterKwPermissions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwPermissions) listener.exitKwPermissions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwPermissions) return visitor.visitKwPermissions(this);
		else return visitor.visitChildren(this);
	}
}


export class KwPrimaryContext extends ParserRuleContext {
	public K_PRIMARY(): TerminalNode { return this.getToken(CqlParser.K_PRIMARY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwPrimary; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwPrimary) listener.enterKwPrimary(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwPrimary) listener.exitKwPrimary(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwPrimary) return visitor.visitKwPrimary(this);
		else return visitor.visitChildren(this);
	}
}


export class KwRenameContext extends ParserRuleContext {
	public K_RENAME(): TerminalNode { return this.getToken(CqlParser.K_RENAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwRename; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwRename) listener.enterKwRename(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwRename) listener.exitKwRename(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwRename) return visitor.visitKwRename(this);
		else return visitor.visitChildren(this);
	}
}


export class KwReplaceContext extends ParserRuleContext {
	public K_REPLACE(): TerminalNode { return this.getToken(CqlParser.K_REPLACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwReplace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwReplace) listener.enterKwReplace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwReplace) listener.exitKwReplace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwReplace) return visitor.visitKwReplace(this);
		else return visitor.visitChildren(this);
	}
}


export class KwReplicationContext extends ParserRuleContext {
	public K_REPLICATION(): TerminalNode { return this.getToken(CqlParser.K_REPLICATION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwReplication; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwReplication) listener.enterKwReplication(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwReplication) listener.exitKwReplication(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwReplication) return visitor.visitKwReplication(this);
		else return visitor.visitChildren(this);
	}
}


export class KwReturnsContext extends ParserRuleContext {
	public K_RETURNS(): TerminalNode { return this.getToken(CqlParser.K_RETURNS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwReturns; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwReturns) listener.enterKwReturns(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwReturns) listener.exitKwReturns(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwReturns) return visitor.visitKwReturns(this);
		else return visitor.visitChildren(this);
	}
}


export class KwRoleContext extends ParserRuleContext {
	public K_ROLE(): TerminalNode { return this.getToken(CqlParser.K_ROLE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwRole; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwRole) listener.enterKwRole(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwRole) listener.exitKwRole(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwRole) return visitor.visitKwRole(this);
		else return visitor.visitChildren(this);
	}
}


export class KwSelectContext extends ParserRuleContext {
	public K_SELECT(): TerminalNode { return this.getToken(CqlParser.K_SELECT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwSelect; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwSelect) listener.enterKwSelect(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwSelect) listener.exitKwSelect(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwSelect) return visitor.visitKwSelect(this);
		else return visitor.visitChildren(this);
	}
}


export class KwSetContext extends ParserRuleContext {
	public K_SET(): TerminalNode { return this.getToken(CqlParser.K_SET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwSet; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwSet) listener.enterKwSet(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwSet) listener.exitKwSet(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwSet) return visitor.visitKwSet(this);
		else return visitor.visitChildren(this);
	}
}


export class KwSfuncContext extends ParserRuleContext {
	public K_SFUNC(): TerminalNode { return this.getToken(CqlParser.K_SFUNC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwSfunc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwSfunc) listener.enterKwSfunc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwSfunc) listener.exitKwSfunc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwSfunc) return visitor.visitKwSfunc(this);
		else return visitor.visitChildren(this);
	}
}


export class KwStaticContext extends ParserRuleContext {
	public K_STATIC(): TerminalNode { return this.getToken(CqlParser.K_STATIC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwStatic; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwStatic) listener.enterKwStatic(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwStatic) listener.exitKwStatic(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwStatic) return visitor.visitKwStatic(this);
		else return visitor.visitChildren(this);
	}
}


export class KwStorageContext extends ParserRuleContext {
	public K_STORAGE(): TerminalNode { return this.getToken(CqlParser.K_STORAGE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwStorage; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwStorage) listener.enterKwStorage(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwStorage) listener.exitKwStorage(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwStorage) return visitor.visitKwStorage(this);
		else return visitor.visitChildren(this);
	}
}


export class KwStypeContext extends ParserRuleContext {
	public K_STYPE(): TerminalNode { return this.getToken(CqlParser.K_STYPE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwStype; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwStype) listener.enterKwStype(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwStype) listener.exitKwStype(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwStype) return visitor.visitKwStype(this);
		else return visitor.visitChildren(this);
	}
}


export class KwSuperuserContext extends ParserRuleContext {
	public K_SUPERUSER(): TerminalNode { return this.getToken(CqlParser.K_SUPERUSER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwSuperuser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwSuperuser) listener.enterKwSuperuser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwSuperuser) listener.exitKwSuperuser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwSuperuser) return visitor.visitKwSuperuser(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTableContext extends ParserRuleContext {
	public K_TABLE(): TerminalNode { return this.getToken(CqlParser.K_TABLE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTable; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTable) listener.enterKwTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTable) listener.exitKwTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTable) return visitor.visitKwTable(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTimestampContext extends ParserRuleContext {
	public K_TIMESTAMP(): TerminalNode { return this.getToken(CqlParser.K_TIMESTAMP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTimestamp; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTimestamp) listener.enterKwTimestamp(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTimestamp) listener.exitKwTimestamp(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTimestamp) return visitor.visitKwTimestamp(this);
		else return visitor.visitChildren(this);
	}
}


export class KwToContext extends ParserRuleContext {
	public K_TO(): TerminalNode { return this.getToken(CqlParser.K_TO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTo; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTo) listener.enterKwTo(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTo) listener.exitKwTo(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTo) return visitor.visitKwTo(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTriggerContext extends ParserRuleContext {
	public K_TRIGGER(): TerminalNode { return this.getToken(CqlParser.K_TRIGGER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTrigger; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTrigger) listener.enterKwTrigger(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTrigger) listener.exitKwTrigger(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTrigger) return visitor.visitKwTrigger(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTruncateContext extends ParserRuleContext {
	public K_TRUNCATE(): TerminalNode { return this.getToken(CqlParser.K_TRUNCATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTruncate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTruncate) listener.enterKwTruncate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTruncate) listener.exitKwTruncate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTruncate) return visitor.visitKwTruncate(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTtlContext extends ParserRuleContext {
	public K_TTL(): TerminalNode { return this.getToken(CqlParser.K_TTL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTtl; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTtl) listener.enterKwTtl(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTtl) listener.exitKwTtl(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTtl) return visitor.visitKwTtl(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTypeContext extends ParserRuleContext {
	public K_TYPE(): TerminalNode { return this.getToken(CqlParser.K_TYPE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwType) listener.enterKwType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwType) listener.exitKwType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwType) return visitor.visitKwType(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUnloggedContext extends ParserRuleContext {
	public K_UNLOGGED(): TerminalNode { return this.getToken(CqlParser.K_UNLOGGED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUnlogged; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUnlogged) listener.enterKwUnlogged(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUnlogged) listener.exitKwUnlogged(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUnlogged) return visitor.visitKwUnlogged(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUpdateContext extends ParserRuleContext {
	public K_UPDATE(): TerminalNode { return this.getToken(CqlParser.K_UPDATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUpdate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUpdate) listener.enterKwUpdate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUpdate) listener.exitKwUpdate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUpdate) return visitor.visitKwUpdate(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUseContext extends ParserRuleContext {
	public K_USE(): TerminalNode { return this.getToken(CqlParser.K_USE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUse; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUse) listener.enterKwUse(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUse) listener.exitKwUse(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUse) return visitor.visitKwUse(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUserContext extends ParserRuleContext {
	public K_USER(): TerminalNode { return this.getToken(CqlParser.K_USER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUser) listener.enterKwUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUser) listener.exitKwUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUser) return visitor.visitKwUser(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUsersContext extends ParserRuleContext {
	public K_USERS(): TerminalNode { return this.getToken(CqlParser.K_USERS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUsers; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUsers) listener.enterKwUsers(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUsers) listener.exitKwUsers(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUsers) return visitor.visitKwUsers(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUsingContext extends ParserRuleContext {
	public K_USING(): TerminalNode { return this.getToken(CqlParser.K_USING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUsing; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUsing) listener.enterKwUsing(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUsing) listener.exitKwUsing(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUsing) return visitor.visitKwUsing(this);
		else return visitor.visitChildren(this);
	}
}


export class KwValuesContext extends ParserRuleContext {
	public K_VALUES(): TerminalNode { return this.getToken(CqlParser.K_VALUES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwValues; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwValues) listener.enterKwValues(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwValues) listener.exitKwValues(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwValues) return visitor.visitKwValues(this);
		else return visitor.visitChildren(this);
	}
}


export class KwViewContext extends ParserRuleContext {
	public K_VIEW(): TerminalNode { return this.getToken(CqlParser.K_VIEW, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwView) listener.enterKwView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwView) listener.exitKwView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwView) return visitor.visitKwView(this);
		else return visitor.visitChildren(this);
	}
}


export class KwWhereContext extends ParserRuleContext {
	public K_WHERE(): TerminalNode { return this.getToken(CqlParser.K_WHERE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwWhere; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwWhere) listener.enterKwWhere(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwWhere) listener.exitKwWhere(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwWhere) return visitor.visitKwWhere(this);
		else return visitor.visitChildren(this);
	}
}


export class KwWithContext extends ParserRuleContext {
	public K_WITH(): TerminalNode { return this.getToken(CqlParser.K_WITH, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwWith; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwWith) listener.enterKwWith(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwWith) listener.exitKwWith(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwWith) return visitor.visitKwWith(this);
		else return visitor.visitChildren(this);
	}
}


export class KwRevokeContext extends ParserRuleContext {
	public K_REVOKE(): TerminalNode { return this.getToken(CqlParser.K_REVOKE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwRevoke; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwRevoke) listener.enterKwRevoke(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwRevoke) listener.exitKwRevoke(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwRevoke) return visitor.visitKwRevoke(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeAsciiContext extends ParserRuleContext {
	public K_ASCII(): TerminalNode { return this.getToken(CqlParser.K_ASCII, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeAscii; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeAscii) listener.enterDataTypeAscii(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeAscii) listener.exitDataTypeAscii(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeAscii) return visitor.visitDataTypeAscii(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeBigintContext extends ParserRuleContext {
	public K_BIGINT(): TerminalNode { return this.getToken(CqlParser.K_BIGINT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeBigint; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeBigint) listener.enterDataTypeBigint(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeBigint) listener.exitDataTypeBigint(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeBigint) return visitor.visitDataTypeBigint(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeBlobContext extends ParserRuleContext {
	public K_BLOB(): TerminalNode { return this.getToken(CqlParser.K_BLOB, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeBlob; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeBlob) listener.enterDataTypeBlob(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeBlob) listener.exitDataTypeBlob(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeBlob) return visitor.visitDataTypeBlob(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeBooleanContext extends ParserRuleContext {
	public K_BOOLEAN(): TerminalNode { return this.getToken(CqlParser.K_BOOLEAN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeBoolean; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeBoolean) listener.enterDataTypeBoolean(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeBoolean) listener.exitDataTypeBoolean(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeBoolean) return visitor.visitDataTypeBoolean(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeCounterContext extends ParserRuleContext {
	public K_COUNTER(): TerminalNode { return this.getToken(CqlParser.K_COUNTER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeCounter; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeCounter) listener.enterDataTypeCounter(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeCounter) listener.exitDataTypeCounter(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeCounter) return visitor.visitDataTypeCounter(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeDateContext extends ParserRuleContext {
	public K_DATE(): TerminalNode { return this.getToken(CqlParser.K_DATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeDate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeDate) listener.enterDataTypeDate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeDate) listener.exitDataTypeDate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeDate) return visitor.visitDataTypeDate(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeDecimalContext extends ParserRuleContext {
	public K_DECIMAL(): TerminalNode { return this.getToken(CqlParser.K_DECIMAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeDecimal; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeDecimal) listener.enterDataTypeDecimal(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeDecimal) listener.exitDataTypeDecimal(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeDecimal) return visitor.visitDataTypeDecimal(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeDoubleContext extends ParserRuleContext {
	public K_DOUBLE(): TerminalNode { return this.getToken(CqlParser.K_DOUBLE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeDouble; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeDouble) listener.enterDataTypeDouble(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeDouble) listener.exitDataTypeDouble(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeDouble) return visitor.visitDataTypeDouble(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeFloatContext extends ParserRuleContext {
	public K_FLOAT(): TerminalNode { return this.getToken(CqlParser.K_FLOAT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeFloat; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeFloat) listener.enterDataTypeFloat(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeFloat) listener.exitDataTypeFloat(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeFloat) return visitor.visitDataTypeFloat(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeFrozenContext extends ParserRuleContext {
	public K_FROZEN(): TerminalNode { return this.getToken(CqlParser.K_FROZEN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeFrozen; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeFrozen) listener.enterDataTypeFrozen(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeFrozen) listener.exitDataTypeFrozen(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeFrozen) return visitor.visitDataTypeFrozen(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeInetContext extends ParserRuleContext {
	public K_INET(): TerminalNode { return this.getToken(CqlParser.K_INET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeInet; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeInet) listener.enterDataTypeInet(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeInet) listener.exitDataTypeInet(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeInet) return visitor.visitDataTypeInet(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeIntContext extends ParserRuleContext {
	public K_INT(): TerminalNode { return this.getToken(CqlParser.K_INT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeInt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeInt) listener.enterDataTypeInt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeInt) listener.exitDataTypeInt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeInt) return visitor.visitDataTypeInt(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeListContext extends ParserRuleContext {
	public K_LIST(): TerminalNode { return this.getToken(CqlParser.K_LIST, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeList) listener.enterDataTypeList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeList) listener.exitDataTypeList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeList) return visitor.visitDataTypeList(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeMapContext extends ParserRuleContext {
	public K_MAP(): TerminalNode { return this.getToken(CqlParser.K_MAP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeMap; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeMap) listener.enterDataTypeMap(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeMap) listener.exitDataTypeMap(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeMap) return visitor.visitDataTypeMap(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeSmallIntContext extends ParserRuleContext {
	public K_SMALLINT(): TerminalNode { return this.getToken(CqlParser.K_SMALLINT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeSmallInt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeSmallInt) listener.enterDataTypeSmallInt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeSmallInt) listener.exitDataTypeSmallInt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeSmallInt) return visitor.visitDataTypeSmallInt(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeSetContext extends ParserRuleContext {
	public K_SET(): TerminalNode { return this.getToken(CqlParser.K_SET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeSet; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeSet) listener.enterDataTypeSet(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeSet) listener.exitDataTypeSet(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeSet) return visitor.visitDataTypeSet(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTextContext extends ParserRuleContext {
	public K_TEXT(): TerminalNode { return this.getToken(CqlParser.K_TEXT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeText; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeText) listener.enterDataTypeText(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeText) listener.exitDataTypeText(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeText) return visitor.visitDataTypeText(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTimeContext extends ParserRuleContext {
	public K_TIME(): TerminalNode { return this.getToken(CqlParser.K_TIME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTime; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTime) listener.enterDataTypeTime(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTime) listener.exitDataTypeTime(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTime) return visitor.visitDataTypeTime(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTimeUuidContext extends ParserRuleContext {
	public K_TIMEUUID(): TerminalNode { return this.getToken(CqlParser.K_TIMEUUID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTimeUuid; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTimeUuid) listener.enterDataTypeTimeUuid(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTimeUuid) listener.exitDataTypeTimeUuid(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTimeUuid) return visitor.visitDataTypeTimeUuid(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTimestampContext extends ParserRuleContext {
	public K_TIMESTAMP(): TerminalNode { return this.getToken(CqlParser.K_TIMESTAMP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTimestamp; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTimestamp) listener.enterDataTypeTimestamp(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTimestamp) listener.exitDataTypeTimestamp(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTimestamp) return visitor.visitDataTypeTimestamp(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTinyIntContext extends ParserRuleContext {
	public K_TINYINT(): TerminalNode { return this.getToken(CqlParser.K_TINYINT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTinyInt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTinyInt) listener.enterDataTypeTinyInt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTinyInt) listener.exitDataTypeTinyInt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTinyInt) return visitor.visitDataTypeTinyInt(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTupleContext extends ParserRuleContext {
	public K_TUPLE(): TerminalNode { return this.getToken(CqlParser.K_TUPLE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTuple; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTuple) listener.enterDataTypeTuple(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTuple) listener.exitDataTypeTuple(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTuple) return visitor.visitDataTypeTuple(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeUserDefinedContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeUserDefined; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeUserDefined) listener.enterDataTypeUserDefined(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeUserDefined) listener.exitDataTypeUserDefined(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeUserDefined) return visitor.visitDataTypeUserDefined(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeUuidContext extends ParserRuleContext {
	public K_UUID(): TerminalNode { return this.getToken(CqlParser.K_UUID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeUuid; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeUuid) listener.enterDataTypeUuid(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeUuid) listener.exitDataTypeUuid(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeUuid) return visitor.visitDataTypeUuid(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeVarCharContext extends ParserRuleContext {
	public K_VARCHAR(): TerminalNode { return this.getToken(CqlParser.K_VARCHAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeVarChar; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeVarChar) listener.enterDataTypeVarChar(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeVarChar) listener.exitDataTypeVarChar(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeVarChar) return visitor.visitDataTypeVarChar(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeVarIntContext extends ParserRuleContext {
	public K_VARINT(): TerminalNode { return this.getToken(CqlParser.K_VARINT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeVarInt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeVarInt) listener.enterDataTypeVarInt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeVarInt) listener.exitDataTypeVarInt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeVarInt) return visitor.visitDataTypeVarInt(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeStructureContext extends ParserRuleContext {
	public syntaxBracketLa(): SyntaxBracketLaContext {
		return this.getRuleContext(0, SyntaxBracketLaContext);
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxBracketRa(): SyntaxBracketRaContext {
		return this.getRuleContext(0, SyntaxBracketRaContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeStructure; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeStructure) listener.enterDataTypeStructure(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeStructure) listener.exitDataTypeStructure(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeStructure) return visitor.visitDataTypeStructure(this);
		else return visitor.visitChildren(this);
	}
}


export class SpecialStarContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(CqlParser.STAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_specialStar; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSpecialStar) listener.enterSpecialStar(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSpecialStar) listener.exitSpecialStar(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialStar) return visitor.visitSpecialStar(this);
		else return visitor.visitChildren(this);
	}
}


export class SpecialDotContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_specialDot; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSpecialDot) listener.enterSpecialDot(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSpecialDot) listener.exitSpecialDot(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialDot) return visitor.visitSpecialDot(this);
		else return visitor.visitChildren(this);
	}
}


export class EofContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_eof; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterEof) listener.enterEof(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitEof) listener.exitEof(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitEof) return visitor.visitEof(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketLrContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(CqlParser.LR_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketLr; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketLr) listener.enterSyntaxBracketLr(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketLr) listener.exitSyntaxBracketLr(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketLr) return visitor.visitSyntaxBracketLr(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketRrContext extends ParserRuleContext {
	public RR_BRACKET(): TerminalNode { return this.getToken(CqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketRr; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketRr) listener.enterSyntaxBracketRr(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketRr) listener.exitSyntaxBracketRr(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketRr) return visitor.visitSyntaxBracketRr(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketLcContext extends ParserRuleContext {
	public LC_BRACKET(): TerminalNode { return this.getToken(CqlParser.LC_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketLc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketLc) listener.enterSyntaxBracketLc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketLc) listener.exitSyntaxBracketLc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketLc) return visitor.visitSyntaxBracketLc(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketRcContext extends ParserRuleContext {
	public RC_BRACKET(): TerminalNode { return this.getToken(CqlParser.RC_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketRc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketRc) listener.enterSyntaxBracketRc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketRc) listener.exitSyntaxBracketRc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketRc) return visitor.visitSyntaxBracketRc(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketLaContext extends ParserRuleContext {
	public OPERATOR_LT(): TerminalNode { return this.getToken(CqlParser.OPERATOR_LT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketLa; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketLa) listener.enterSyntaxBracketLa(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketLa) listener.exitSyntaxBracketLa(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketLa) return visitor.visitSyntaxBracketLa(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketRaContext extends ParserRuleContext {
	public OPERATOR_GT(): TerminalNode { return this.getToken(CqlParser.OPERATOR_GT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketRa; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketRa) listener.enterSyntaxBracketRa(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketRa) listener.exitSyntaxBracketRa(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketRa) return visitor.visitSyntaxBracketRa(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketLsContext extends ParserRuleContext {
	public LS_BRACKET(): TerminalNode { return this.getToken(CqlParser.LS_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketLs; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketLs) listener.enterSyntaxBracketLs(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketLs) listener.exitSyntaxBracketLs(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketLs) return visitor.visitSyntaxBracketLs(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketRsContext extends ParserRuleContext {
	public RS_BRACKET(): TerminalNode { return this.getToken(CqlParser.RS_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketRs; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketRs) listener.enterSyntaxBracketRs(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketRs) listener.exitSyntaxBracketRs(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketRs) return visitor.visitSyntaxBracketRs(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxCommaContext extends ParserRuleContext {
	public COMMA(): TerminalNode { return this.getToken(CqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxComma; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxComma) listener.enterSyntaxComma(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxComma) listener.exitSyntaxComma(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxComma) return visitor.visitSyntaxComma(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxColonContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CqlParser.COLON, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxColon; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxColon) listener.enterSyntaxColon(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxColon) listener.exitSyntaxColon(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxColon) return visitor.visitSyntaxColon(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxPlusContext extends ParserRuleContext {
	public PLUS(): TerminalNode { return this.getToken(CqlParser.PLUS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxPlus; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxPlus) listener.enterSyntaxPlus(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxPlus) listener.exitSyntaxPlus(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxPlus) return visitor.visitSyntaxPlus(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxMinusContext extends ParserRuleContext {
	public MINUS(): TerminalNode { return this.getToken(CqlParser.MINUS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxMinus; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxMinus) listener.enterSyntaxMinus(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxMinus) listener.exitSyntaxMinus(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxMinus) return visitor.visitSyntaxMinus(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxSquoteContext extends ParserRuleContext {
	public SQUOTE(): TerminalNode { return this.getToken(CqlParser.SQUOTE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxSquote; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxSquote) listener.enterSyntaxSquote(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxSquote) listener.exitSyntaxSquote(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxSquote) return visitor.visitSyntaxSquote(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxDquoteContext extends ParserRuleContext {
	public DQUOTE(): TerminalNode { return this.getToken(CqlParser.DQUOTE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxDquote; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxDquote) listener.enterSyntaxDquote(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxDquote) listener.exitSyntaxDquote(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxDquote) return visitor.visitSyntaxDquote(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxOperatorEqContext extends ParserRuleContext {
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxOperatorEq; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxOperatorEq) listener.enterSyntaxOperatorEq(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxOperatorEq) listener.exitSyntaxOperatorEq(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxOperatorEq) return visitor.visitSyntaxOperatorEq(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxOperatorLtContext extends ParserRuleContext {
	public OPERATOR_LT(): TerminalNode { return this.getToken(CqlParser.OPERATOR_LT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxOperatorLt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxOperatorLt) listener.enterSyntaxOperatorLt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxOperatorLt) listener.exitSyntaxOperatorLt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxOperatorLt) return visitor.visitSyntaxOperatorLt(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxOperatorGtContext extends ParserRuleContext {
	public OPERATOR_GT(): TerminalNode { return this.getToken(CqlParser.OPERATOR_GT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxOperatorGt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxOperatorGt) listener.enterSyntaxOperatorGt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxOperatorGt) listener.exitSyntaxOperatorGt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxOperatorGt) return visitor.visitSyntaxOperatorGt(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxOperatorLteContext extends ParserRuleContext {
	public OPERATOR_LTE(): TerminalNode { return this.getToken(CqlParser.OPERATOR_LTE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxOperatorLte; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxOperatorLte) listener.enterSyntaxOperatorLte(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxOperatorLte) listener.exitSyntaxOperatorLte(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxOperatorLte) return visitor.visitSyntaxOperatorLte(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxOperatorGteContext extends ParserRuleContext {
	public OPERATOR_GTE(): TerminalNode { return this.getToken(CqlParser.OPERATOR_GTE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxOperatorGte; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxOperatorGte) listener.enterSyntaxOperatorGte(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxOperatorGte) listener.exitSyntaxOperatorGte(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxOperatorGte) return visitor.visitSyntaxOperatorGte(this);
		else return visitor.visitChildren(this);
	}
}


