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
	public static readonly SPEC_CQL_COMMENT=13;
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
	public static readonly K_SCHEMA=109;
	public static readonly K_SELECT=110;
	public static readonly K_SET=111;
	public static readonly K_SFUNC=112;
	public static readonly K_STATIC=113;
	public static readonly K_STORAGE=114;
	public static readonly K_STYPE=115;
	public static readonly K_SUPERUSER=116;
	public static readonly K_TABLE=117;
	public static readonly K_THREE=118;
	public static readonly K_TIMESTAMP=119;
	public static readonly K_TO=120;
	public static readonly K_TOKEN=121;
	public static readonly K_TRIGGER=122;
	public static readonly K_TRUE=123;
	public static readonly K_TRUNCATE=124;
	public static readonly K_TTL=125;
	public static readonly K_TWO=126;
	public static readonly K_TYPE=127;
	public static readonly K_UNLOGGED=128;
	public static readonly K_UPDATE=129;
	public static readonly K_USE=130;
	public static readonly K_USING=131;
	public static readonly K_VALUES=132;
	public static readonly K_VIEW=133;
	public static readonly K_WHERE=134;
	public static readonly K_WITH=135;
	public static readonly K_WRITETIME=136;
	public static readonly K_ASCII=137;
	public static readonly K_BIGINT=138;
	public static readonly K_BLOB=139;
	public static readonly K_BOOLEAN=140;
	public static readonly K_COUNTER=141;
	public static readonly K_DATE=142;
	public static readonly K_DECIMAL=143;
	public static readonly K_DOUBLE=144;
	public static readonly K_FLOAT=145;
	public static readonly K_FROZEN=146;
	public static readonly K_INET=147;
	public static readonly K_INT=148;
	public static readonly K_LIST=149;
	public static readonly K_ROLES=150;
	public static readonly K_ROLE=151;
	public static readonly K_MAP=152;
	public static readonly K_SMALLINT=153;
	public static readonly K_TEXT=154;
	public static readonly K_TIMEUUID=155;
	public static readonly K_TIME=156;
	public static readonly K_TINYINT=157;
	public static readonly K_TUPLE=158;
	public static readonly K_UUID=159;
	public static readonly K_VARCHAR=160;
	public static readonly K_VARINT=161;
	public static readonly K_USERS=162;
	public static readonly K_USER=163;
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
	public static readonly RULE_clusteringOrderItem = 71;
	public static readonly RULE_tableOptions = 72;
	public static readonly RULE_tableOptionItem = 73;
	public static readonly RULE_tableOptionName = 74;
	public static readonly RULE_tableOptionValue = 75;
	public static readonly RULE_optionHash = 76;
	public static readonly RULE_optionHashItem = 77;
	public static readonly RULE_optionHashKey = 78;
	public static readonly RULE_optionHashValue = 79;
	public static readonly RULE_columnDefinitionList = 80;
	public static readonly RULE_columnDefinition = 81;
	public static readonly RULE_primaryKeyModifier = 82;
	public static readonly RULE_primaryKeyElement = 83;
	public static readonly RULE_primaryKeyDefinition = 84;
	public static readonly RULE_primaryKeySimple = 85;
	public static readonly RULE_primaryKeyComposite = 86;
	public static readonly RULE_compoundKey = 87;
	public static readonly RULE_partitionKeyList = 88;
	public static readonly RULE_clusteringKeyList = 89;
	public static readonly RULE_applyBatch = 90;
	public static readonly RULE_beginBatch = 91;
	public static readonly RULE_beginBatchSpec = 92;
	public static readonly RULE_batchType = 93;
	public static readonly RULE_alterKeyspace = 94;
	public static readonly RULE_replicationList = 95;
	public static readonly RULE_replicationListItem = 96;
	public static readonly RULE_durableWrites = 97;
	public static readonly RULE_use = 98;
	public static readonly RULE_truncate = 99;
	public static readonly RULE_createIndex = 100;
	public static readonly RULE_createIndexSubject = 101;
	public static readonly RULE_index = 102;
	public static readonly RULE_createIndexDef = 103;
	public static readonly RULE_createIndexTarget = 104;
	public static readonly RULE_indexKeysSpec = 105;
	public static readonly RULE_indexEntriesSSpec = 106;
	public static readonly RULE_indexFullSpec = 107;
	public static readonly RULE_delete = 108;
	public static readonly RULE_deleteColumnList = 109;
	public static readonly RULE_deleteColumnItem = 110;
	public static readonly RULE_update = 111;
	public static readonly RULE_ifSpec = 112;
	public static readonly RULE_ifConditionList = 113;
	public static readonly RULE_ifCondition = 114;
	public static readonly RULE_updateAssignments = 115;
	public static readonly RULE_updateAssignmentElement = 116;
	public static readonly RULE_assignmentSet = 117;
	public static readonly RULE_assignmentMap = 118;
	public static readonly RULE_assignmentList = 119;
	public static readonly RULE_insert = 120;
	public static readonly RULE_usingTtlTimestamp = 121;
	public static readonly RULE_timestamp = 122;
	public static readonly RULE_ttl = 123;
	public static readonly RULE_usingTimestampSpec = 124;
	public static readonly RULE_ifNotExist = 125;
	public static readonly RULE_ifExist = 126;
	public static readonly RULE_insertValuesSpec = 127;
	public static readonly RULE_insertColumnSpec = 128;
	public static readonly RULE_columnList = 129;
	public static readonly RULE_baseColumnList = 130;
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
	public static readonly RULE_relationElementConstant = 143;
	public static readonly RULE_relationElementIn = 144;
	public static readonly RULE_relationElementToken = 145;
	public static readonly RULE_relationElementTokenSpec = 146;
	public static readonly RULE_relationOperator = 147;
	public static readonly RULE_functionCall = 148;
	public static readonly RULE_functionArgs = 149;
	public static readonly RULE_constant = 150;
	public static readonly RULE_collectionElement = 151;
	public static readonly RULE_collectionMapElement = 152;
	public static readonly RULE_constantCollection = 153;
	public static readonly RULE_constantMap = 154;
	public static readonly RULE_constantSet = 155;
	public static readonly RULE_constantList = 156;
	public static readonly RULE_constantTuple = 157;
	public static readonly RULE_constantUuid = 158;
	public static readonly RULE_constantDecimal = 159;
	public static readonly RULE_constantFloat = 160;
	public static readonly RULE_constantString = 161;
	public static readonly RULE_constantBoolean = 162;
	public static readonly RULE_constantHexadecimal = 163;
	public static readonly RULE_keyspace = 164;
	public static readonly RULE_baseKeyspace = 165;
	public static readonly RULE_table = 166;
	public static readonly RULE_baseTable = 167;
	public static readonly RULE_materializedView = 168;
	public static readonly RULE_keyspaceObject = 169;
	public static readonly RULE_objectUnknown = 170;
	public static readonly RULE_aggregateSpec = 171;
	public static readonly RULE_typeSpec = 172;
	public static readonly RULE_functionSpec = 173;
	public static readonly RULE_tableSpec = 174;
	public static readonly RULE_baseTableSpec = 175;
	public static readonly RULE_indexSpec = 176;
	public static readonly RULE_materializedViewSpec = 177;
	public static readonly RULE_tableOrMaterializedViewSpec = 178;
	public static readonly RULE_objectUnknownSpec = 179;
	public static readonly RULE_columnSpec = 180;
	public static readonly RULE_column = 181;
	public static readonly RULE_columnUnknownSpec = 182;
	public static readonly RULE_columnUnknown = 183;
	public static readonly RULE_dataType = 184;
	public static readonly RULE_dataTypeCollection = 185;
	public static readonly RULE_dataTypeFundamental = 186;
	public static readonly RULE_orderDirection = 187;
	public static readonly RULE_role = 188;
	public static readonly RULE_trigger = 189;
	public static readonly RULE_triggerClass = 190;
	public static readonly RULE_type = 191;
	public static readonly RULE_aggregate = 192;
	public static readonly RULE_function = 193;
	public static readonly RULE_language = 194;
	public static readonly RULE_user = 195;
	public static readonly RULE_password = 196;
	public static readonly RULE_hashKey = 197;
	public static readonly RULE_param = 198;
	public static readonly RULE_paramName = 199;
	public static readonly RULE_kwAdd = 200;
	public static readonly RULE_kwAggregate = 201;
	public static readonly RULE_kwAll = 202;
	public static readonly RULE_kwAllFunctions = 203;
	public static readonly RULE_kwAllKeyspaces = 204;
	public static readonly RULE_kwAllRoles = 205;
	public static readonly RULE_kwAllPermissions = 206;
	public static readonly RULE_kwAllow = 207;
	public static readonly RULE_kwAllowFiltering = 208;
	public static readonly RULE_kwAlter = 209;
	public static readonly RULE_kwAnd = 210;
	public static readonly RULE_kwApply = 211;
	public static readonly RULE_kwAs = 212;
	public static readonly RULE_kwAsc = 213;
	public static readonly RULE_kwAuthorize = 214;
	public static readonly RULE_kwBatch = 215;
	public static readonly RULE_kwBegin = 216;
	public static readonly RULE_kwBy = 217;
	public static readonly RULE_kwCalled = 218;
	public static readonly RULE_kwClustering = 219;
	public static readonly RULE_kwCompact = 220;
	public static readonly RULE_kwContains = 221;
	public static readonly RULE_kwContainsKey = 222;
	public static readonly RULE_kwCreate = 223;
	public static readonly RULE_kwDelete = 224;
	public static readonly RULE_kwDesc = 225;
	public static readonly RULE_kwDescibe = 226;
	public static readonly RULE_kwDistinct = 227;
	public static readonly RULE_kwDrop = 228;
	public static readonly RULE_kwDurableWrites = 229;
	public static readonly RULE_kwEntries = 230;
	public static readonly RULE_kwExecute = 231;
	public static readonly RULE_kwExists = 232;
	public static readonly RULE_kwFiltering = 233;
	public static readonly RULE_kwFinalfunc = 234;
	public static readonly RULE_kwFrom = 235;
	public static readonly RULE_kwFull = 236;
	public static readonly RULE_kwFunction = 237;
	public static readonly RULE_kwGrant = 238;
	public static readonly RULE_kwIf = 239;
	public static readonly RULE_kwIn = 240;
	public static readonly RULE_kwIndex = 241;
	public static readonly RULE_kwInitcond = 242;
	public static readonly RULE_kwInput = 243;
	public static readonly RULE_kwInsertInto = 244;
	public static readonly RULE_kwIs = 245;
	public static readonly RULE_kwKey = 246;
	public static readonly RULE_kwKeys = 247;
	public static readonly RULE_kwKeyspace = 248;
	public static readonly RULE_kwLanguage = 249;
	public static readonly RULE_kwLimit = 250;
	public static readonly RULE_kwList = 251;
	public static readonly RULE_kwListRoles = 252;
	public static readonly RULE_kwListUsers = 253;
	public static readonly RULE_kwLogged = 254;
	public static readonly RULE_kwLogin = 255;
	public static readonly RULE_kwMaterializedView = 256;
	public static readonly RULE_kwModify = 257;
	public static readonly RULE_kwNosuperuser = 258;
	public static readonly RULE_kwNorecursive = 259;
	public static readonly RULE_kwNot = 260;
	public static readonly RULE_kwNull = 261;
	public static readonly RULE_kwOf = 262;
	public static readonly RULE_kwOn = 263;
	public static readonly RULE_kwOptions = 264;
	public static readonly RULE_kwOr = 265;
	public static readonly RULE_kwOrder = 266;
	public static readonly RULE_kwOrderBy = 267;
	public static readonly RULE_kwPartition = 268;
	public static readonly RULE_kwPassword = 269;
	public static readonly RULE_kwPermissions = 270;
	public static readonly RULE_kwPrimary = 271;
	public static readonly RULE_kwRename = 272;
	public static readonly RULE_kwReplace = 273;
	public static readonly RULE_kwReplication = 274;
	public static readonly RULE_kwReturns = 275;
	public static readonly RULE_kwRole = 276;
	public static readonly RULE_kwSelect = 277;
	public static readonly RULE_kwSet = 278;
	public static readonly RULE_kwSfunc = 279;
	public static readonly RULE_kwStatic = 280;
	public static readonly RULE_kwStorage = 281;
	public static readonly RULE_kwStype = 282;
	public static readonly RULE_kwSuperuser = 283;
	public static readonly RULE_kwTable = 284;
	public static readonly RULE_kwTimestamp = 285;
	public static readonly RULE_kwTo = 286;
	public static readonly RULE_kwToken = 287;
	public static readonly RULE_kwTrigger = 288;
	public static readonly RULE_kwTruncate = 289;
	public static readonly RULE_kwTtl = 290;
	public static readonly RULE_kwType = 291;
	public static readonly RULE_kwUnlogged = 292;
	public static readonly RULE_kwUpdate = 293;
	public static readonly RULE_kwUse = 294;
	public static readonly RULE_kwUser = 295;
	public static readonly RULE_kwUsers = 296;
	public static readonly RULE_kwUsing = 297;
	public static readonly RULE_kwValues = 298;
	public static readonly RULE_kwWhere = 299;
	public static readonly RULE_kwWith = 300;
	public static readonly RULE_kwRevoke = 301;
	public static readonly RULE_dataTypeAscii = 302;
	public static readonly RULE_dataTypeBigint = 303;
	public static readonly RULE_dataTypeBlob = 304;
	public static readonly RULE_dataTypeBoolean = 305;
	public static readonly RULE_dataTypeCounter = 306;
	public static readonly RULE_dataTypeDate = 307;
	public static readonly RULE_dataTypeDecimal = 308;
	public static readonly RULE_dataTypeDouble = 309;
	public static readonly RULE_dataTypeFloat = 310;
	public static readonly RULE_dataTypeFrozen = 311;
	public static readonly RULE_dataTypeInet = 312;
	public static readonly RULE_dataTypeInt = 313;
	public static readonly RULE_dataTypeList = 314;
	public static readonly RULE_dataTypeMap = 315;
	public static readonly RULE_dataTypeSmallInt = 316;
	public static readonly RULE_dataTypeSet = 317;
	public static readonly RULE_dataTypeText = 318;
	public static readonly RULE_dataTypeTime = 319;
	public static readonly RULE_dataTypeTimeUuid = 320;
	public static readonly RULE_dataTypeTimestamp = 321;
	public static readonly RULE_dataTypeTinyInt = 322;
	public static readonly RULE_dataTypeTuple = 323;
	public static readonly RULE_dataTypeUserDefined = 324;
	public static readonly RULE_dataTypeUuid = 325;
	public static readonly RULE_dataTypeVarChar = 326;
	public static readonly RULE_dataTypeVarInt = 327;
	public static readonly RULE_dataTypeStructure = 328;
	public static readonly RULE_specialStar = 329;
	public static readonly RULE_specialDot = 330;
	public static readonly RULE_eof = 331;
	public static readonly RULE_syntaxBracketLr = 332;
	public static readonly RULE_syntaxBracketRr = 333;
	public static readonly RULE_syntaxBracketLc = 334;
	public static readonly RULE_syntaxBracketRc = 335;
	public static readonly RULE_syntaxBracketLa = 336;
	public static readonly RULE_syntaxBracketRa = 337;
	public static readonly RULE_syntaxBracketLs = 338;
	public static readonly RULE_syntaxBracketRs = 339;
	public static readonly RULE_syntaxComma = 340;
	public static readonly RULE_syntaxColon = 341;
	public static readonly RULE_syntaxPlus = 342;
	public static readonly RULE_syntaxMinus = 343;
	public static readonly RULE_syntaxSquote = 344;
	public static readonly RULE_syntaxDquote = 345;
	public static readonly RULE_syntaxOperatorEq = 346;
	public static readonly RULE_syntaxOperatorLt = 347;
	public static readonly RULE_syntaxOperatorGt = 348;
	public static readonly RULE_syntaxOperatorLte = 349;
	public static readonly RULE_syntaxOperatorGte = 350;
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
		"clusteringOrder", "clusteringOrderItem", "tableOptions", "tableOptionItem", 
		"tableOptionName", "tableOptionValue", "optionHash", "optionHashItem", 
		"optionHashKey", "optionHashValue", "columnDefinitionList", "columnDefinition", 
		"primaryKeyModifier", "primaryKeyElement", "primaryKeyDefinition", "primaryKeySimple", 
		"primaryKeyComposite", "compoundKey", "partitionKeyList", "clusteringKeyList", 
		"applyBatch", "beginBatch", "beginBatchSpec", "batchType", "alterKeyspace", 
		"replicationList", "replicationListItem", "durableWrites", "use", "truncate", 
		"createIndex", "createIndexSubject", "index", "createIndexDef", "createIndexTarget", 
		"indexKeysSpec", "indexEntriesSSpec", "indexFullSpec", "delete", "deleteColumnList", 
		"deleteColumnItem", "update", "ifSpec", "ifConditionList", "ifCondition", 
		"updateAssignments", "updateAssignmentElement", "assignmentSet", "assignmentMap", 
		"assignmentList", "insert", "usingTtlTimestamp", "timestamp", "ttl", "usingTimestampSpec", 
		"ifNotExist", "ifExist", "insertValuesSpec", "insertColumnSpec", "columnList", 
		"baseColumnList", "expressionList", "expression", "select", "limitSpec", 
		"fromSpec", "orderSpec", "orderSpecElement", "whereSpec", "selectElements", 
		"selectElement", "relationElements", "relationElement", "relationElementConstant", 
		"relationElementIn", "relationElementToken", "relationElementTokenSpec", 
		"relationOperator", "functionCall", "functionArgs", "constant", "collectionElement", 
		"collectionMapElement", "constantCollection", "constantMap", "constantSet", 
		"constantList", "constantTuple", "constantUuid", "constantDecimal", "constantFloat", 
		"constantString", "constantBoolean", "constantHexadecimal", "keyspace", 
		"baseKeyspace", "table", "baseTable", "materializedView", "keyspaceObject", 
		"objectUnknown", "aggregateSpec", "typeSpec", "functionSpec", "tableSpec", 
		"baseTableSpec", "indexSpec", "materializedViewSpec", "tableOrMaterializedViewSpec", 
		"objectUnknownSpec", "columnSpec", "column", "columnUnknownSpec", "columnUnknown", 
		"dataType", "dataTypeCollection", "dataTypeFundamental", "orderDirection", 
		"role", "trigger", "triggerClass", "type", "aggregate", "function", "language", 
		"user", "password", "hashKey", "param", "paramName", "kwAdd", "kwAggregate", 
		"kwAll", "kwAllFunctions", "kwAllKeyspaces", "kwAllRoles", "kwAllPermissions", 
		"kwAllow", "kwAllowFiltering", "kwAlter", "kwAnd", "kwApply", "kwAs", 
		"kwAsc", "kwAuthorize", "kwBatch", "kwBegin", "kwBy", "kwCalled", "kwClustering", 
		"kwCompact", "kwContains", "kwContainsKey", "kwCreate", "kwDelete", "kwDesc", 
		"kwDescibe", "kwDistinct", "kwDrop", "kwDurableWrites", "kwEntries", "kwExecute", 
		"kwExists", "kwFiltering", "kwFinalfunc", "kwFrom", "kwFull", "kwFunction", 
		"kwGrant", "kwIf", "kwIn", "kwIndex", "kwInitcond", "kwInput", "kwInsertInto", 
		"kwIs", "kwKey", "kwKeys", "kwKeyspace", "kwLanguage", "kwLimit", "kwList", 
		"kwListRoles", "kwListUsers", "kwLogged", "kwLogin", "kwMaterializedView", 
		"kwModify", "kwNosuperuser", "kwNorecursive", "kwNot", "kwNull", "kwOf", 
		"kwOn", "kwOptions", "kwOr", "kwOrder", "kwOrderBy", "kwPartition", "kwPassword", 
		"kwPermissions", "kwPrimary", "kwRename", "kwReplace", "kwReplication", 
		"kwReturns", "kwRole", "kwSelect", "kwSet", "kwSfunc", "kwStatic", "kwStorage", 
		"kwStype", "kwSuperuser", "kwTable", "kwTimestamp", "kwTo", "kwToken", 
		"kwTrigger", "kwTruncate", "kwTtl", "kwType", "kwUnlogged", "kwUpdate", 
		"kwUse", "kwUser", "kwUsers", "kwUsing", "kwValues", "kwWhere", "kwWith", 
		"kwRevoke", "dataTypeAscii", "dataTypeBigint", "dataTypeBlob", "dataTypeBoolean", 
		"dataTypeCounter", "dataTypeDate", "dataTypeDecimal", "dataTypeDouble", 
		"dataTypeFloat", "dataTypeFrozen", "dataTypeInet", "dataTypeInt", "dataTypeList", 
		"dataTypeMap", "dataTypeSmallInt", "dataTypeSet", "dataTypeText", "dataTypeTime", 
		"dataTypeTimeUuid", "dataTypeTimestamp", "dataTypeTinyInt", "dataTypeTuple", 
		"dataTypeUserDefined", "dataTypeUuid", "dataTypeVarChar", "dataTypeVarInt", 
		"dataTypeStructure", "specialStar", "specialDot", "eof", "syntaxBracketLr", 
		"syntaxBracketRr", "syntaxBracketLc", "syntaxBracketRc", "syntaxBracketLa", 
		"syntaxBracketRa", "syntaxBracketLs", "syntaxBracketRs", "syntaxComma", 
		"syntaxColon", "syntaxPlus", "syntaxMinus", "syntaxSquote", "syntaxDquote", 
		"syntaxOperatorEq", "syntaxOperatorLt", "syntaxOperatorGt", "syntaxOperatorLte", 
		"syntaxOperatorGte"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "':'", 
		"'\"'", "'''", undefined, undefined, undefined, undefined, "'.'", "'*'", 
		"'/'", "'%'", "'+'", "'--'", "'-'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "LR_BRACKET", "RR_BRACKET", "LC_BRACKET", "RC_BRACKET", "LS_BRACKET", 
		"RS_BRACKET", "COMMA", "SEMI", "COLON", "DQUOTE", "SQUOTE", "SPACE", "SPEC_CQL_COMMENT", 
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
		"K_RETURNS", "K_REVOKE", "K_SCHEMA", "K_SELECT", "K_SET", "K_SFUNC", "K_STATIC", 
		"K_STORAGE", "K_STYPE", "K_SUPERUSER", "K_TABLE", "K_THREE", "K_TIMESTAMP", 
		"K_TO", "K_TOKEN", "K_TRIGGER", "K_TRUE", "K_TRUNCATE", "K_TTL", "K_TWO", 
		"K_TYPE", "K_UNLOGGED", "K_UPDATE", "K_USE", "K_USING", "K_VALUES", "K_VIEW", 
		"K_WHERE", "K_WITH", "K_WRITETIME", "K_ASCII", "K_BIGINT", "K_BLOB", "K_BOOLEAN", 
		"K_COUNTER", "K_DATE", "K_DECIMAL", "K_DOUBLE", "K_FLOAT", "K_FROZEN", 
		"K_INET", "K_INT", "K_LIST", "K_ROLES", "K_ROLE", "K_MAP", "K_SMALLINT", 
		"K_TEXT", "K_TIMEUUID", "K_TIME", "K_TINYINT", "K_TUPLE", "K_UUID", "K_VARCHAR", 
		"K_VARINT", "K_USERS", "K_USER", "CODE_BLOCK", "STRING_LITERAL", "DECIMAL_LITERAL", 
		"FLOAT_LITERAL", "HEXADECIMAL_LITERAL", "REAL_LITERAL", "OBJECT_NAME", 
		"UUID", "OPERATOR_EQ", "OPERATOR_LT", "OPERATOR_GT", "OPERATOR_LTE", "OPERATOR_GTE"
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
			this.state = 703;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CqlParser.SEMI - 8)) | (1 << (CqlParser.K_ALTER - 8)) | (1 << (CqlParser.K_APPLY - 8)) | (1 << (CqlParser.K_BEGIN - 8)))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (CqlParser.K_CREATE - 46)) | (1 << (CqlParser.K_DELETE - 46)) | (1 << (CqlParser.K_DROP - 46)) | (1 << (CqlParser.K_GRANT - 46)) | (1 << (CqlParser.K_INSERT - 46)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (CqlParser.K_REVOKE - 108)) | (1 << (CqlParser.K_SELECT - 108)) | (1 << (CqlParser.K_TRUNCATE - 108)) | (1 << (CqlParser.K_UPDATE - 108)) | (1 << (CqlParser.K_USE - 108)))) !== 0) || _la===CqlParser.K_LIST) {
				{
				this.state = 702;
				this.cqls();
				}
			}

			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.MINUSMINUS) {
				{
				this.state = 705;
				this.match(CqlParser.MINUSMINUS);
				}
			}

			this.state = 708;
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
			this.state = 719;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 717;
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
						{
						this.state = 710;
						this.cql();
						this.state = 712;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===CqlParser.MINUSMINUS) {
							{
							this.state = 711;
							this.match(CqlParser.MINUSMINUS);
							}
						}

						this.state = 714;
						this.statementSeparator();
						}
						break;
					case CqlParser.SEMI:
						{
						this.state = 716;
						this.empty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 721;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			}
			this.state = 730;
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
				{
				this.state = 722;
				this.cql();
				this.state = 727;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
				case 1:
					{
					this.state = 724;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===CqlParser.MINUSMINUS) {
						{
						this.state = 723;
						this.match(CqlParser.MINUSMINUS);
						}
					}

					this.state = 726;
					this.statementSeparator();
					}
					break;
				}
				}
				break;
			case CqlParser.SEMI:
				{
				this.state = 729;
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
			this.state = 732;
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
			this.state = 734;
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
			this.state = 774;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 736;
				this.beginBatch();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 737;
				this.alterKeyspace();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 738;
				this.alterMaterializedView();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 739;
				this.alterRole();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 740;
				this.alterTable();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 741;
				this.alterType();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 742;
				this.alterUser();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 743;
				this.applyBatch();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 744;
				this.createAggregate();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 745;
				this.createFunction();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 746;
				this.createIndex();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 747;
				this.createKeyspace();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 748;
				this.createMaterializedView();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 749;
				this.createRole();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 750;
				this.createTable();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 751;
				this.createTrigger();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 752;
				this.createType();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 753;
				this.createUser();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 754;
				this.delete();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 755;
				this.dropAggregate();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 756;
				this.dropFunction();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 757;
				this.dropIndex();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 758;
				this.dropKeyspace();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 759;
				this.dropMaterializedView();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 760;
				this.dropRole();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 761;
				this.dropTable();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 762;
				this.dropTrigger();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 763;
				this.dropType();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 764;
				this.dropUser();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 765;
				this.grant();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 766;
				this.insert();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 767;
				this.listPermissions();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 768;
				this.listRoles();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 769;
				this.revoke();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 770;
				this.select();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 771;
				this.truncate();
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 772;
				this.update();
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 773;
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
			this.state = 776;
			this.kwRevoke();
			this.state = 777;
			this.priviledge();
			this.state = 778;
			this.kwOn();
			this.state = 779;
			this.resource();
			this.state = 780;
			this.kwFrom();
			this.state = 781;
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
			this.state = 783;
			this.kwListUsers();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 785;
			this.kwListRoles();
			this.state = 789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OF) {
				{
				this.state = 786;
				this.kwOf();
				this.state = 787;
				this.role();
				}
			}

			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_NORECURSIVE) {
				{
				this.state = 791;
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
			this.state = 794;
			this.kwList();
			this.state = 795;
			this.priviledge();
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ON) {
				{
				this.state = 796;
				this.kwOn();
				this.state = 797;
				this.resource();
				}
			}

			this.state = 804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OF) {
				{
				this.state = 801;
				this.kwOf();
				this.state = 802;
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
			this.state = 806;
			this.kwGrant();
			this.state = 807;
			this.priviledge();
			this.state = 808;
			this.kwOn();
			this.state = 809;
			this.resource();
			this.state = 810;
			this.kwTo();
			this.state = 811;
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
			this.state = 825;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 815;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
				case 1:
					{
					this.state = 813;
					this.kwAll();
					}
					break;

				case 2:
					{
					this.state = 814;
					this.kwAllPermissions();
					}
					break;
				}
				}
				break;
			case CqlParser.K_ALTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 817;
				this.kwAlter();
				}
				break;
			case CqlParser.K_AUTHORIZE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 818;
				this.kwAuthorize();
				}
				break;
			case CqlParser.K_DESCRIBE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 819;
				this.kwDescibe();
				}
				break;
			case CqlParser.K_EXECUTE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 820;
				this.kwExecute();
				}
				break;
			case CqlParser.K_CREATE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 821;
				this.kwCreate();
				}
				break;
			case CqlParser.K_DROP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 822;
				this.kwDrop();
				}
				break;
			case CqlParser.K_MODIFY:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 823;
				this.kwModify();
				}
				break;
			case CqlParser.K_SELECT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 824;
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
			this.state = 853;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 827;
				this.kwAllFunctions();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 828;
				this.kwAllFunctions();
				this.state = 829;
				this.kwIn();
				this.state = 830;
				this.kwKeyspace();
				this.state = 831;
				this.keyspace();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 833;
				this.kwFunction();
				this.state = 837;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,15,this._ctx) ) {
				case 1:
					{
					this.state = 834;
					this.keyspace();
					this.state = 835;
					this.match(CqlParser.DOT);
					}
					break;
				}
				this.state = 839;
				this.function();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 841;
				this.kwAllKeyspaces();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 842;
				this.kwKeyspace();
				this.state = 843;
				this.keyspace();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 846;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_TABLE) {
					{
					this.state = 845;
					this.kwTable();
					}
				}

				this.state = 848;
				this.tableSpec();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 849;
				this.kwAllRoles();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 850;
				this.kwRole();
				this.state = 851;
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
			this.state = 855;
			this.kwCreate();
			this.state = 856;
			this.kwUser();
			this.state = 858;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 857;
				this.ifNotExist();
				}
			}

			this.state = 860;
			this.user();
			this.state = 861;
			this.kwWith();
			this.state = 862;
			this.kwPassword();
			this.state = 863;
			this.constantString();
			this.state = 866;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_SUPERUSER:
				{
				this.state = 864;
				this.kwSuperuser();
				}
				break;
			case CqlParser.K_NOSUPERUSER:
				{
				this.state = 865;
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
			this.state = 868;
			this.kwCreate();
			this.state = 869;
			this.kwRole();
			this.state = 871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 870;
				this.ifNotExist();
				}
			}

			this.state = 873;
			this.role();
			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 874;
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
			this.state = 877;
			this.kwCreate();
			this.state = 878;
			this.kwType();
			this.state = 880;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 879;
				this.ifNotExist();
				}
			}

			this.state = 882;
			this.objectUnknownSpec();
			this.state = 883;
			this.syntaxBracketLr();
			this.state = 884;
			this.typeMemberColumnList();
			this.state = 885;
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
			this.state = 887;
			this.columnSpec();
			this.state = 888;
			this.dataType();
			this.state = 895;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 889;
				this.syntaxComma();
				this.state = 890;
				this.columnSpec();
				this.state = 891;
				this.dataType();
				}
				}
				this.state = 897;
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
			this.state = 898;
			this.kwCreate();
			this.state = 899;
			this.kwTrigger();
			this.state = 901;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 900;
				this.ifNotExist();
				}
			}

			this.state = 903;
			this.objectUnknownSpec();
			this.state = 904;
			this.kwUsing();
			this.state = 905;
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
			this.state = 907;
			this.kwCreate();
			this.state = 908;
			this.kwMaterializedView();
			this.state = 910;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 909;
				this.ifNotExist();
				}
			}

			this.state = 912;
			this.objectUnknownSpec();
			this.state = 913;
			this.kwAs();
			this.state = 914;
			this.kwSelect();
			this.state = 915;
			this.baseColumnList();
			this.state = 916;
			this.kwFrom();
			this.state = 917;
			this.baseTableSpec();
			this.state = 918;
			this.materializedViewWhere();
			this.state = 919;
			this.primaryKeyElement();
			this.state = 923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 920;
				this.kwWith();
				this.state = 921;
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
			this.state = 925;
			this.kwWhere();
			this.state = 926;
			this.columnNotNullList();
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_AND) {
				{
				this.state = 927;
				this.kwAnd();
				this.state = 928;
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
			this.state = 932;
			this.columnNotNull();
			this.state = 938;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,28,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 933;
					this.kwAnd();
					this.state = 934;
					this.columnNotNull();
					}
					} 
				}
				this.state = 940;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,28,this._ctx);
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
			this.state = 941;
			this.columnSpec();
			this.state = 942;
			this.kwIs();
			this.state = 943;
			this.kwNot();
			this.state = 944;
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
			this.state = 956;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,29,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 946;
				this.tableOptions();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 947;
				this.tableOptions();
				this.state = 948;
				this.kwAnd();
				this.state = 949;
				this.clusteringOrder();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 951;
				this.clusteringOrder();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 952;
				this.clusteringOrder();
				this.state = 953;
				this.kwAnd();
				this.state = 954;
				this.tableOptions();
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
			this.state = 958;
			this.kwCreate();
			this.state = 959;
			this.kwKeyspace();
			this.state = 961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 960;
				this.ifNotExist();
				}
			}

			this.state = 963;
			this.objectUnknown();
			this.state = 964;
			this.kwWith();
			this.state = 965;
			this.kwReplication();
			this.state = 966;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 967;
			this.syntaxBracketLc();
			this.state = 968;
			this.replicationList();
			this.state = 969;
			this.syntaxBracketRc();
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_AND) {
				{
				this.state = 970;
				this.kwAnd();
				this.state = 971;
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
			this.state = 975;
			this.kwCreate();
			this.state = 977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OR) {
				{
				this.state = 976;
				this.orReplace();
				}
			}

			this.state = 979;
			this.kwFunction();
			this.state = 981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 980;
				this.ifNotExist();
				}
			}

			this.state = 983;
			this.objectUnknownSpec();
			this.state = 984;
			this.syntaxBracketLr();
			this.state = 986;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CqlParser.K_DURABLE_WRITES - 53)) | (1 << (CqlParser.K_INITCOND - 53)) | (1 << (CqlParser.K_INPUT - 53)) | (1 << (CqlParser.K_KEY - 53)) | (1 << (CqlParser.K_LANGUAGE - 53)) | (1 << (CqlParser.K_LEVEL - 53)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (CqlParser.K_OPTIONS - 94)) | (1 << (CqlParser.K_PARTITION - 94)) | (1 << (CqlParser.K_PERMISSIONS - 94)) | (1 << (CqlParser.K_REPLICATION - 94)) | (1 << (CqlParser.K_TTL - 94)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (CqlParser.K_TYPE - 127)) | (1 << (CqlParser.K_ROLES - 127)) | (1 << (CqlParser.K_ROLE - 127)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (CqlParser.K_USERS - 162)) | (1 << (CqlParser.K_USER - 162)) | (1 << (CqlParser.OBJECT_NAME - 162)))) !== 0)) {
				{
				this.state = 985;
				this.paramList();
				}
			}

			this.state = 988;
			this.syntaxBracketRr();
			this.state = 989;
			this.returnMode();
			this.state = 990;
			this.kwReturns();
			this.state = 991;
			this.dataType();
			this.state = 992;
			this.kwLanguage();
			this.state = 993;
			this.language();
			this.state = 994;
			this.kwAs();
			this.state = 995;
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
			this.state = 997;
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
			this.state = 999;
			this.param();
			this.state = 1005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1000;
				this.syntaxComma();
				this.state = 1001;
				this.param();
				}
				}
				this.state = 1007;
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
			this.state = 1012;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_CALLED:
				{
				this.state = 1008;
				this.kwCalled();
				}
				break;
			case CqlParser.K_RETURNS:
				{
				this.state = 1009;
				this.kwReturns();
				this.state = 1010;
				this.kwNull();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1014;
			this.kwOn();
			this.state = 1015;
			this.kwNull();
			this.state = 1016;
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
			this.state = 1018;
			this.kwCreate();
			this.state = 1020;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OR) {
				{
				this.state = 1019;
				this.orReplace();
				}
			}

			this.state = 1022;
			this.kwAggregate();
			this.state = 1024;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1023;
				this.ifNotExist();
				}
			}

			this.state = 1026;
			this.objectUnknownSpec();
			this.state = 1027;
			this.syntaxBracketLr();
			this.state = 1028;
			this.dataType();
			this.state = 1029;
			this.syntaxBracketRr();
			this.state = 1030;
			this.kwSfunc();
			this.state = 1031;
			this.function();
			this.state = 1032;
			this.kwStype();
			this.state = 1033;
			this.dataType();
			this.state = 1034;
			this.kwFinalfunc();
			this.state = 1035;
			this.function();
			this.state = 1036;
			this.kwInitcond();
			this.state = 1037;
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
			this.state = 1043;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,39,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1039;
				this.constant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1040;
				this.initCondList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1041;
				this.initCondListNested();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1042;
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
			this.state = 1045;
			this.syntaxBracketLc();
			this.state = 1046;
			this.initCondHashItem();
			this.state = 1052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1047;
				this.syntaxComma();
				this.state = 1048;
				this.initCondHashItem();
				}
				}
				this.state = 1054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1055;
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
			this.state = 1057;
			this.hashKey();
			this.state = 1058;
			this.match(CqlParser.COLON);
			this.state = 1059;
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
			this.state = 1061;
			this.syntaxBracketLr();
			this.state = 1062;
			this.initCondList();
			this.state = 1069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.LR_BRACKET || _la===CqlParser.COMMA) {
				{
				this.state = 1067;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.COMMA:
					{
					this.state = 1063;
					this.syntaxComma();
					this.state = 1064;
					this.constant();
					}
					break;
				case CqlParser.LR_BRACKET:
					{
					this.state = 1066;
					this.initCondList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1072;
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
			this.state = 1074;
			this.syntaxBracketLr();
			this.state = 1075;
			this.constant();
			this.state = 1081;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1076;
				this.syntaxComma();
				this.state = 1077;
				this.constant();
				}
				}
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1084;
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
			this.state = 1086;
			this.kwOr();
			this.state = 1087;
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
			this.state = 1089;
			this.kwAlter();
			this.state = 1090;
			this.kwUser();
			this.state = 1091;
			this.user();
			this.state = 1092;
			this.kwWith();
			this.state = 1093;
			this.userPassword();
			this.state = 1095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_NOSUPERUSER || _la===CqlParser.K_SUPERUSER) {
				{
				this.state = 1094;
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
			this.state = 1097;
			this.kwPassword();
			this.state = 1098;
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
			this.state = 1102;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_SUPERUSER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1100;
				this.kwSuperuser();
				}
				break;
			case CqlParser.K_NOSUPERUSER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1101;
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
			this.state = 1104;
			this.kwAlter();
			this.state = 1105;
			this.kwType();
			this.state = 1106;
			this.typeSpec();
			this.state = 1107;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ALTER) {
				{
				this.state = 1109;
				this.alterTypeAlterType();
				}
			}

			this.state = 1113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ADD) {
				{
				this.state = 1112;
				this.alterTypeAdd();
				}
			}

			this.state = 1116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_RENAME) {
				{
				this.state = 1115;
				this.alterTypeRename();
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
	public alterTypeRename(): AlterTypeRenameContext {
		let _localctx: AlterTypeRenameContext = new AlterTypeRenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CqlParser.RULE_alterTypeRename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1118;
			this.kwRename();
			this.state = 1119;
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
			this.state = 1121;
			this.alterTypeRenameItem();
			this.state = 1127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1122;
				this.kwAnd();
				this.state = 1123;
				this.alterTypeRenameItem();
				}
				}
				this.state = 1129;
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
			this.state = 1130;
			this.columnSpec();
			this.state = 1131;
			this.kwTo();
			this.state = 1132;
			this.columnUnknownSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1134;
			this.kwAdd();
			this.state = 1135;
			this.columnUnknownSpec();
			this.state = 1136;
			this.dataType();
			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1137;
				this.syntaxComma();
				this.state = 1138;
				this.columnUnknownSpec();
				this.state = 1139;
				this.dataType();
				}
				}
				this.state = 1145;
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
			this.state = 1146;
			this.kwAlter();
			this.state = 1147;
			this.columnSpec();
			this.state = 1148;
			this.kwType();
			this.state = 1149;
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
			this.state = 1151;
			this.kwAlter();
			this.state = 1152;
			this.kwTable();
			this.state = 1153;
			this.tableSpec();
			this.state = 1154;
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
			this.state = 1163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,51,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1156;
				this.alterTableAdd();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1157;
				this.alterTableDropColumns();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1158;
				this.alterTableDropColumns();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1159;
				this.alterTableDropCompactStorage();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1160;
				this.alterTableRename();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1161;
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
			this.state = 1165;
			this.kwWith();
			this.state = 1166;
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
			this.state = 1168;
			this.kwRename();
			this.state = 1169;
			this.columnSpec();
			this.state = 1170;
			this.kwTo();
			this.state = 1171;
			this.columnUnknownSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1173;
			this.kwDrop();
			this.state = 1174;
			this.kwCompact();
			this.state = 1175;
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
			this.state = 1177;
			this.kwDrop();
			this.state = 1178;
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
			this.state = 1180;
			this.columnSpec();
			this.state = 1186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1181;
				this.syntaxComma();
				this.state = 1182;
				this.columnSpec();
				}
				}
				this.state = 1188;
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
			this.state = 1189;
			this.kwAdd();
			this.state = 1190;
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
			this.state = 1192;
			this.columnUnknownSpec();
			this.state = 1193;
			this.dataType();
			this.state = 1200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1194;
				this.syntaxComma();
				this.state = 1195;
				this.columnUnknownSpec();
				this.state = 1196;
				this.dataType();
				}
				}
				this.state = 1202;
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
			this.state = 1203;
			this.kwAlter();
			this.state = 1204;
			this.kwRole();
			this.state = 1205;
			this.role();
			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 1206;
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
			this.state = 1209;
			this.kwWith();
			{
			this.state = 1210;
			this.roleWithOptions();
			this.state = 1216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1211;
				this.kwAnd();
				this.state = 1212;
				this.roleWithOptions();
				}
				}
				this.state = 1218;
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
			this.state = 1235;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_PASSWORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1219;
				this.kwPassword();
				this.state = 1220;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1221;
				this.constantString();
				}
				break;
			case CqlParser.K_LOGIN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1223;
				this.kwLogin();
				this.state = 1224;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1225;
				this.constantBoolean();
				}
				break;
			case CqlParser.K_SUPERUSER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1227;
				this.kwSuperuser();
				this.state = 1228;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1229;
				this.constantBoolean();
				}
				break;
			case CqlParser.K_OPTIONS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1231;
				this.kwOptions();
				this.state = 1232;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1233;
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
			this.state = 1237;
			this.kwAlter();
			this.state = 1238;
			this.kwMaterializedView();
			this.state = 1239;
			this.materializedViewSpec();
			this.state = 1243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 1240;
				this.kwWith();
				this.state = 1241;
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
			this.state = 1245;
			this.kwDrop();
			this.state = 1246;
			this.kwUser();
			this.state = 1248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1247;
				this.ifExist();
				}
			}

			this.state = 1250;
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
			this.state = 1252;
			this.kwDrop();
			this.state = 1253;
			this.kwType();
			this.state = 1255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1254;
				this.ifExist();
				}
			}

			this.state = 1257;
			this.typeSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1259;
			this.kwDrop();
			this.state = 1260;
			this.kwMaterializedView();
			this.state = 1262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,60,this._ctx) ) {
			case 1:
				{
				this.state = 1261;
				this.ifExist();
				}
				break;
			}
			this.state = 1264;
			this.materializedViewSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1266;
			this.kwDrop();
			this.state = 1267;
			this.kwAggregate();
			this.state = 1269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1268;
				this.ifExist();
				}
			}

			this.state = 1271;
			this.aggregateSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1273;
			this.kwDrop();
			this.state = 1274;
			this.kwFunction();
			this.state = 1276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1275;
				this.ifExist();
				}
			}

			this.state = 1278;
			this.functionSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1280;
			this.kwDrop();
			this.state = 1281;
			this.kwTrigger();
			this.state = 1283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1282;
				this.ifExist();
				}
			}

			this.state = 1285;
			this.trigger();
			this.state = 1286;
			this.kwOn();
			this.state = 1287;
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
			this.state = 1289;
			this.kwDrop();
			this.state = 1290;
			this.kwRole();
			this.state = 1292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1291;
				this.ifExist();
				}
			}

			this.state = 1294;
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
			this.state = 1296;
			this.kwDrop();
			this.state = 1297;
			this.kwTable();
			this.state = 1299;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,65,this._ctx) ) {
			case 1:
				{
				this.state = 1298;
				this.ifExist();
				}
				break;
			}
			this.state = 1301;
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
			this.state = 1303;
			this.kwDrop();
			this.state = 1304;
			this.kwKeyspace();
			this.state = 1306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1305;
				this.ifExist();
				}
			}

			this.state = 1308;
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
			this.state = 1310;
			this.kwDrop();
			this.state = 1311;
			this.kwIndex();
			this.state = 1313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1312;
				this.ifExist();
				}
			}

			this.state = 1315;
			this.indexSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1317;
			this.kwCreate();
			this.state = 1318;
			this.kwTable();
			this.state = 1320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1319;
				this.ifNotExist();
				}
			}

			this.state = 1322;
			this.objectUnknownSpec();
			this.state = 1323;
			this.createTableDef();
			this.state = 1325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 1324;
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
			this.state = 1332;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1327;
				this.syntaxBracketLr();
				this.state = 1328;
				this.columnDefinitionList();
				this.state = 1329;
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
			this.state = 1350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,74,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1334;
				this.kwWith();
				this.state = 1335;
				this.tableOptions();
				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_AND) {
					{
					this.state = 1336;
					this.kwAnd();
					this.state = 1337;
					this.clusteringOrder();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1341;
				this.kwWith();
				this.state = 1343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_CLUSTERING) {
					{
					this.state = 1342;
					this.clusteringOrder();
					}
				}

				this.state = 1348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_AND) {
					{
					this.state = 1345;
					this.kwAnd();
					this.state = 1346;
					this.tableOptions();
					}
				}

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
	public clusteringOrder(): ClusteringOrderContext {
		let _localctx: ClusteringOrderContext = new ClusteringOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CqlParser.RULE_clusteringOrder);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1352;
			this.kwClustering();
			this.state = 1353;
			this.kwOrder();
			this.state = 1354;
			this.kwBy();
			this.state = 1355;
			this.syntaxBracketLr();
			this.state = 1356;
			this.clusteringOrderItem();
			this.state = 1362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1357;
				this.syntaxComma();
				this.state = 1358;
				this.clusteringOrderItem();
				}
				}
				this.state = 1364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1365;
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
	public clusteringOrderItem(): ClusteringOrderItemContext {
		let _localctx: ClusteringOrderItemContext = new ClusteringOrderItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CqlParser.RULE_clusteringOrderItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1367;
			this.columnSpec();
			this.state = 1369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ASC || _la===CqlParser.K_DESC) {
				{
				this.state = 1368;
				this.orderDirection();
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
	public tableOptions(): TableOptionsContext {
		let _localctx: TableOptionsContext = new TableOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CqlParser.RULE_tableOptions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1371;
			this.tableOptionItem();
			this.state = 1377;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,77,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1372;
					this.kwAnd();
					this.state = 1373;
					this.tableOptionItem();
					}
					} 
				}
				this.state = 1379;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,77,this._ctx);
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
		this.enterRule(_localctx, 146, CqlParser.RULE_tableOptionItem);
		try {
			this.state = 1388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1380;
				this.tableOptionName();
				this.state = 1381;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1382;
				this.tableOptionValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1384;
				this.tableOptionName();
				this.state = 1385;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1386;
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
		this.enterRule(_localctx, 148, CqlParser.RULE_tableOptionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1390;
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
		this.enterRule(_localctx, 150, CqlParser.RULE_tableOptionValue);
		try {
			this.state = 1394;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1392;
				this.constantString();
				}
				break;
			case CqlParser.DECIMAL_LITERAL:
			case CqlParser.FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1393;
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
		this.enterRule(_localctx, 152, CqlParser.RULE_optionHash);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1396;
			this.syntaxBracketLc();
			this.state = 1397;
			this.optionHashItem();
			this.state = 1403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1398;
				this.syntaxComma();
				this.state = 1399;
				this.optionHashItem();
				}
				}
				this.state = 1405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1406;
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
		this.enterRule(_localctx, 154, CqlParser.RULE_optionHashItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1408;
			this.optionHashKey();
			this.state = 1409;
			this.match(CqlParser.COLON);
			this.state = 1410;
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
		this.enterRule(_localctx, 156, CqlParser.RULE_optionHashKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
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
		this.enterRule(_localctx, 158, CqlParser.RULE_optionHashValue);
		try {
			this.state = 1416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1414;
				this.constantString();
				}
				break;
			case CqlParser.DECIMAL_LITERAL:
			case CqlParser.FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1415;
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
		this.enterRule(_localctx, 160, CqlParser.RULE_columnDefinitionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1418;
			this.columnDefinition();
			this.state = 1424;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,82,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1419;
					this.syntaxComma();
					this.state = 1420;
					this.columnDefinition();
					}
					} 
				}
				this.state = 1426;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,82,this._ctx);
			}
			this.state = 1430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.COMMA) {
				{
				this.state = 1427;
				this.syntaxComma();
				this.state = 1428;
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
		this.enterRule(_localctx, 162, CqlParser.RULE_columnDefinition);
		try {
			this.state = 1444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,84,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1432;
				this.columnUnknown();
				this.state = 1433;
				this.dataType();
				this.state = 1434;
				this.primaryKeyModifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1436;
				this.columnUnknown();
				this.state = 1437;
				this.dataType();
				this.state = 1438;
				this.kwStatic();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1440;
				this.columnUnknown();
				this.state = 1441;
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
		this.enterRule(_localctx, 164, CqlParser.RULE_primaryKeyModifier);
		try {
			this.state = 1452;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,85,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1446;
				this.kwPrimary();
				this.state = 1447;
				this.kwKey();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1449;
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
		this.enterRule(_localctx, 166, CqlParser.RULE_primaryKeyElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1454;
			this.kwPrimary();
			this.state = 1455;
			this.kwKey();
			this.state = 1456;
			this.syntaxBracketLr();
			this.state = 1457;
			this.primaryKeyDefinition();
			this.state = 1458;
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
		this.enterRule(_localctx, 168, CqlParser.RULE_primaryKeyDefinition);
		try {
			this.state = 1463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,86,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1460;
				this.primaryKeySimple();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1461;
				this.primaryKeyComposite();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1462;
				this.compoundKey();
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
	public primaryKeySimple(): PrimaryKeySimpleContext {
		let _localctx: PrimaryKeySimpleContext = new PrimaryKeySimpleContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CqlParser.RULE_primaryKeySimple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1465;
			this.columnSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryKeyComposite(): PrimaryKeyCompositeContext {
		let _localctx: PrimaryKeyCompositeContext = new PrimaryKeyCompositeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CqlParser.RULE_primaryKeyComposite);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1467;
			this.syntaxBracketLr();
			this.state = 1468;
			this.partitionKeyList();
			this.state = 1469;
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
	public compoundKey(): CompoundKeyContext {
		let _localctx: CompoundKeyContext = new CompoundKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CqlParser.RULE_compoundKey);
		try {
			this.state = 1481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_INPUT:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_LEVEL:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.K_ROLES:
			case CqlParser.K_ROLE:
			case CqlParser.K_USERS:
			case CqlParser.K_USER:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1471;
				this.columnSpec();
				{
				this.state = 1472;
				this.syntaxComma();
				this.state = 1473;
				this.clusteringKeyList();
				}
				}
				break;
			case CqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1475;
				this.syntaxBracketLr();
				this.state = 1476;
				this.partitionKeyList();
				this.state = 1477;
				this.syntaxBracketRr();
				{
				this.state = 1478;
				this.syntaxComma();
				this.state = 1479;
				this.clusteringKeyList();
				}
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
	public partitionKeyList(): PartitionKeyListContext {
		let _localctx: PartitionKeyListContext = new PartitionKeyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CqlParser.RULE_partitionKeyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1483;
			this.columnSpec();
			}
			this.state = 1489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1484;
				this.syntaxComma();
				this.state = 1485;
				this.columnSpec();
				}
				}
				this.state = 1491;
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
		this.enterRule(_localctx, 178, CqlParser.RULE_clusteringKeyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1492;
			this.columnSpec();
			}
			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1493;
				this.syntaxComma();
				this.state = 1494;
				this.columnSpec();
				}
				}
				this.state = 1500;
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
	public applyBatch(): ApplyBatchContext {
		let _localctx: ApplyBatchContext = new ApplyBatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CqlParser.RULE_applyBatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1501;
			this.kwApply();
			this.state = 1502;
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
		this.enterRule(_localctx, 182, CqlParser.RULE_beginBatch);
		try {
			this.state = 1513;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,90,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1504;
				this.beginBatchSpec();
				this.state = 1505;
				this.delete();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1507;
				this.beginBatchSpec();
				this.state = 1508;
				this.insert();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1510;
				this.beginBatchSpec();
				this.state = 1511;
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
		this.enterRule(_localctx, 184, CqlParser.RULE_beginBatchSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1515;
			this.kwBegin();
			this.state = 1517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_LOGGED || _la===CqlParser.K_UNLOGGED) {
				{
				this.state = 1516;
				this.batchType();
				}
			}

			this.state = 1519;
			this.kwBatch();
			this.state = 1521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1520;
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
		this.enterRule(_localctx, 186, CqlParser.RULE_batchType);
		try {
			this.state = 1525;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_LOGGED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1523;
				this.kwLogged();
				}
				break;
			case CqlParser.K_UNLOGGED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1524;
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
		this.enterRule(_localctx, 188, CqlParser.RULE_alterKeyspace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1527;
			this.kwAlter();
			this.state = 1528;
			this.kwKeyspace();
			this.state = 1529;
			this.keyspace();
			this.state = 1530;
			this.kwWith();
			this.state = 1531;
			this.kwReplication();
			this.state = 1532;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 1533;
			this.syntaxBracketLc();
			this.state = 1534;
			this.replicationList();
			this.state = 1535;
			this.syntaxBracketRc();
			this.state = 1539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_AND) {
				{
				this.state = 1536;
				this.kwAnd();
				this.state = 1537;
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
		this.enterRule(_localctx, 190, CqlParser.RULE_replicationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1541;
			this.replicationListItem();
			this.state = 1547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1542;
				this.syntaxComma();
				this.state = 1543;
				this.replicationListItem();
				}
				}
				this.state = 1549;
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
		this.enterRule(_localctx, 192, CqlParser.RULE_replicationListItem);
		try {
			this.state = 1556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,96,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1550;
				this.match(CqlParser.STRING_LITERAL);
				this.state = 1551;
				this.match(CqlParser.COLON);
				this.state = 1552;
				this.match(CqlParser.STRING_LITERAL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1553;
				this.match(CqlParser.STRING_LITERAL);
				this.state = 1554;
				this.match(CqlParser.COLON);
				this.state = 1555;
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
		this.enterRule(_localctx, 194, CqlParser.RULE_durableWrites);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1558;
			this.kwDurableWrites();
			this.state = 1559;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 1560;
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
		this.enterRule(_localctx, 196, CqlParser.RULE_use);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1562;
			this.kwUse();
			this.state = 1563;
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
		this.enterRule(_localctx, 198, CqlParser.RULE_truncate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1565;
			this.kwTruncate();
			this.state = 1567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_TABLE) {
				{
				this.state = 1566;
				this.kwTable();
				}
			}

			this.state = 1569;
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
		this.enterRule(_localctx, 200, CqlParser.RULE_createIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1571;
			this.kwCreate();
			this.state = 1572;
			this.kwIndex();
			this.state = 1574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1573;
				this.ifNotExist();
				}
			}

			this.state = 1577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.DQUOTE || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CqlParser.K_DURABLE_WRITES - 53)) | (1 << (CqlParser.K_INITCOND - 53)) | (1 << (CqlParser.K_INPUT - 53)) | (1 << (CqlParser.K_KEY - 53)) | (1 << (CqlParser.K_LANGUAGE - 53)) | (1 << (CqlParser.K_LEVEL - 53)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (CqlParser.K_OPTIONS - 94)) | (1 << (CqlParser.K_PARTITION - 94)) | (1 << (CqlParser.K_PERMISSIONS - 94)) | (1 << (CqlParser.K_REPLICATION - 94)) | (1 << (CqlParser.K_TTL - 94)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (CqlParser.K_TYPE - 127)) | (1 << (CqlParser.K_ROLES - 127)) | (1 << (CqlParser.K_ROLE - 127)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (CqlParser.K_USERS - 162)) | (1 << (CqlParser.K_USER - 162)) | (1 << (CqlParser.OBJECT_NAME - 162)))) !== 0)) {
				{
				this.state = 1576;
				this.objectUnknown();
				}
			}

			this.state = 1579;
			this.createIndexSubject();
			this.state = 1580;
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
		this.enterRule(_localctx, 202, CqlParser.RULE_createIndexSubject);
		try {
			this.state = 1586;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1582;
				this.kwOn();
				this.state = 1583;
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
	public index(): IndexContext {
		let _localctx: IndexContext = new IndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, CqlParser.RULE_index);
		try {
			this.state = 1590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1588;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1589;
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
		this.enterRule(_localctx, 206, CqlParser.RULE_createIndexDef);
		try {
			this.state = 1597;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1592;
				this.syntaxBracketLr();
				this.state = 1593;
				this.createIndexTarget();
				this.state = 1594;
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
		this.enterRule(_localctx, 208, CqlParser.RULE_createIndexTarget);
		try {
			this.state = 1604;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_INPUT:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_LEVEL:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.K_ROLES:
			case CqlParser.K_ROLE:
			case CqlParser.K_USERS:
			case CqlParser.K_USER:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1599;
				this.columnSpec();
				}
				break;
			case CqlParser.K_KEYS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1600;
				this.indexKeysSpec();
				}
				break;
			case CqlParser.K_ENTRIES:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1601;
				this.indexEntriesSSpec();
				}
				break;
			case CqlParser.K_FULL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1602;
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
		this.enterRule(_localctx, 210, CqlParser.RULE_indexKeysSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1606;
			this.kwKeys();
			this.state = 1607;
			this.syntaxBracketLr();
			this.state = 1610;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_INPUT:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_LEVEL:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.K_ROLES:
			case CqlParser.K_ROLE:
			case CqlParser.K_USERS:
			case CqlParser.K_USER:
			case CqlParser.OBJECT_NAME:
				{
				this.state = 1608;
				this.columnSpec();
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
			this.state = 1612;
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
		this.enterRule(_localctx, 212, CqlParser.RULE_indexEntriesSSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1614;
			this.kwEntries();
			this.state = 1615;
			this.syntaxBracketLr();
			this.state = 1618;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_INPUT:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_LEVEL:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.K_ROLES:
			case CqlParser.K_ROLE:
			case CqlParser.K_USERS:
			case CqlParser.K_USER:
			case CqlParser.OBJECT_NAME:
				{
				this.state = 1616;
				this.columnSpec();
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
			this.state = 1620;
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
		this.enterRule(_localctx, 214, CqlParser.RULE_indexFullSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1622;
			this.kwFull();
			this.state = 1623;
			this.syntaxBracketLr();
			this.state = 1626;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_INPUT:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_LEVEL:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.K_ROLES:
			case CqlParser.K_ROLE:
			case CqlParser.K_USERS:
			case CqlParser.K_USER:
			case CqlParser.OBJECT_NAME:
				{
				this.state = 1624;
				this.columnSpec();
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
			this.state = 1628;
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
		this.enterRule(_localctx, 216, CqlParser.RULE_delete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1630;
			this.kwDelete();
			this.state = 1632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.DQUOTE || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CqlParser.K_DURABLE_WRITES - 53)) | (1 << (CqlParser.K_INITCOND - 53)) | (1 << (CqlParser.K_INPUT - 53)) | (1 << (CqlParser.K_KEY - 53)) | (1 << (CqlParser.K_LANGUAGE - 53)) | (1 << (CqlParser.K_LEVEL - 53)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (CqlParser.K_OPTIONS - 94)) | (1 << (CqlParser.K_PARTITION - 94)) | (1 << (CqlParser.K_PERMISSIONS - 94)) | (1 << (CqlParser.K_REPLICATION - 94)) | (1 << (CqlParser.K_TTL - 94)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (CqlParser.K_TYPE - 127)) | (1 << (CqlParser.K_ROLES - 127)) | (1 << (CqlParser.K_ROLE - 127)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (CqlParser.K_USERS - 162)) | (1 << (CqlParser.K_USER - 162)) | (1 << (CqlParser.OBJECT_NAME - 162)))) !== 0)) {
				{
				this.state = 1631;
				this.deleteColumnList();
				}
			}

			this.state = 1634;
			this.fromSpec();
			this.state = 1636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1635;
				this.usingTimestampSpec();
				}
			}

			this.state = 1640;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_WHERE:
				{
				this.state = 1638;
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
			this.state = 1644;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,110,this._ctx) ) {
			case 1:
				{
				this.state = 1642;
				this.ifExist();
				}
				break;

			case 2:
				{
				this.state = 1643;
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
		this.enterRule(_localctx, 218, CqlParser.RULE_deleteColumnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1646;
			this.deleteColumnItem();
			}
			this.state = 1652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1647;
				this.syntaxComma();
				this.state = 1648;
				this.deleteColumnItem();
				}
				}
				this.state = 1654;
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
		this.enterRule(_localctx, 220, CqlParser.RULE_deleteColumnItem);
		try {
			this.state = 1664;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,113,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1655;
				this.columnSpec();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1656;
				this.columnSpec();
				this.state = 1657;
				this.syntaxBracketLs();
				this.state = 1660;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.STRING_LITERAL:
					{
					this.state = 1658;
					this.constantString();
					}
					break;
				case CqlParser.DECIMAL_LITERAL:
					{
					this.state = 1659;
					this.constantDecimal();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1662;
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
		this.enterRule(_localctx, 222, CqlParser.RULE_update);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1666;
			this.kwUpdate();
			this.state = 1667;
			this.tableOrMaterializedViewSpec();
			this.state = 1669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1668;
				this.usingTtlTimestamp();
				}
			}

			this.state = 1671;
			this.updateAssignments();
			this.state = 1674;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_WHERE:
				{
				this.state = 1672;
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
			this.state = 1678;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,116,this._ctx) ) {
			case 1:
				{
				this.state = 1676;
				this.ifExist();
				}
				break;

			case 2:
				{
				this.state = 1677;
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
		this.enterRule(_localctx, 224, CqlParser.RULE_ifSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1680;
			this.kwIf();
			this.state = 1681;
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
		this.enterRule(_localctx, 226, CqlParser.RULE_ifConditionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1683;
			this.ifCondition();
			}
			this.state = 1689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1684;
				this.kwAnd();
				this.state = 1685;
				this.ifCondition();
				}
				}
				this.state = 1691;
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
		this.enterRule(_localctx, 228, CqlParser.RULE_ifCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1692;
			this.match(CqlParser.OBJECT_NAME);
			this.state = 1693;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 1694;
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
		this.enterRule(_localctx, 230, CqlParser.RULE_updateAssignments);
		let _la: number;
		try {
			this.state = 1707;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_SET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1696;
				this.kwSet();
				{
				this.state = 1697;
				this.updateAssignmentElement();
				}
				this.state = 1703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===CqlParser.COMMA) {
					{
					{
					this.state = 1698;
					this.syntaxComma();
					this.state = 1699;
					this.updateAssignmentElement();
					}
					}
					this.state = 1705;
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
		this.enterRule(_localctx, 232, CqlParser.RULE_updateAssignmentElement);
		try {
			this.state = 1786;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,128,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1709;
				this.columnSpec();
				this.state = 1710;
				this.syntaxOperatorEq();
				this.state = 1713;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.K_FALSE:
				case CqlParser.K_NULL:
				case CqlParser.K_TRUE:
				case CqlParser.STRING_LITERAL:
				case CqlParser.DECIMAL_LITERAL:
				case CqlParser.FLOAT_LITERAL:
				case CqlParser.HEXADECIMAL_LITERAL:
				case CqlParser.UUID:
					{
					this.state = 1711;
					this.constant();
					}
					break;
				case CqlParser.LR_BRACKET:
				case CqlParser.LC_BRACKET:
				case CqlParser.LS_BRACKET:
					{
					this.state = 1712;
					this.constantCollection();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1715;
				this.columnSpec();
				this.state = 1716;
				this.syntaxOperatorEq();
				this.state = 1717;
				this.columnSpec();
				this.state = 1720;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1718;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1719;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1722;
				this.constantDecimal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1724;
				this.columnSpec();
				this.state = 1725;
				this.syntaxOperatorEq();
				this.state = 1726;
				this.columnSpec();
				this.state = 1729;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1727;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1728;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1731;
				this.assignmentMap();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1733;
				this.columnSpec();
				this.state = 1734;
				this.syntaxOperatorEq();
				this.state = 1735;
				this.columnSpec();
				this.state = 1738;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1736;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1737;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1740;
				this.assignmentSet();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1742;
				this.columnSpec();
				this.state = 1743;
				this.syntaxOperatorEq();
				this.state = 1744;
				this.columnSpec();
				this.state = 1747;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1745;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1746;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1749;
				this.assignmentList();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1751;
				this.columnSpec();
				this.state = 1752;
				this.syntaxOperatorEq();
				this.state = 1753;
				this.assignmentSet();
				this.state = 1756;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1754;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1755;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1758;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1760;
				this.columnSpec();
				this.state = 1761;
				this.syntaxOperatorEq();
				this.state = 1762;
				this.assignmentMap();
				this.state = 1765;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1763;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1764;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1767;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1769;
				this.columnSpec();
				this.state = 1770;
				this.syntaxOperatorEq();
				this.state = 1771;
				this.assignmentList();
				this.state = 1774;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.PLUS:
					{
					this.state = 1772;
					this.syntaxPlus();
					}
					break;
				case CqlParser.MINUS:
					{
					this.state = 1773;
					this.syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1776;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1778;
				this.columnSpec();
				this.state = 1779;
				this.syntaxBracketLs();
				this.state = 1780;
				this.constantDecimal();
				this.state = 1781;
				this.syntaxBracketRs();
				this.state = 1782;
				this.syntaxOperatorEq();
				this.state = 1783;
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
		this.enterRule(_localctx, 234, CqlParser.RULE_assignmentSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1788;
			this.syntaxBracketLc();
			this.state = 1789;
			this.constant();
			this.state = 1795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1790;
				this.syntaxComma();
				this.state = 1791;
				this.constant();
				}
				}
				this.state = 1797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1798;
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
		this.enterRule(_localctx, 236, CqlParser.RULE_assignmentMap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1800;
			this.syntaxBracketLc();
			{
			this.state = 1801;
			this.constant();
			this.state = 1802;
			this.syntaxColon();
			this.state = 1803;
			this.constant();
			}
			this.state = 1811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_FALSE || _la===CqlParser.K_NULL || _la===CqlParser.K_TRUE || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (CqlParser.STRING_LITERAL - 165)) | (1 << (CqlParser.DECIMAL_LITERAL - 165)) | (1 << (CqlParser.FLOAT_LITERAL - 165)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 165)) | (1 << (CqlParser.UUID - 165)))) !== 0)) {
				{
				{
				this.state = 1805;
				this.constant();
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
		this.enterRule(_localctx, 238, CqlParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1816;
			this.syntaxBracketLs();
			this.state = 1817;
			this.constant();
			this.state = 1823;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COLON) {
				{
				{
				this.state = 1818;
				this.syntaxColon();
				this.state = 1819;
				this.constant();
				}
				}
				this.state = 1825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1826;
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
		this.enterRule(_localctx, 240, CqlParser.RULE_insert);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1828;
			this.kwInsertInto();
			this.state = 1829;
			this.tableOrMaterializedViewSpec();
			this.state = 1830;
			this.insertColumnSpec();
			this.state = 1831;
			this.insertValuesSpec();
			this.state = 1834;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_IF:
				{
				this.state = 1832;
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
			this.state = 1837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1836;
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
		this.enterRule(_localctx, 242, CqlParser.RULE_usingTtlTimestamp);
		try {
			this.state = 1855;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,134,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1839;
				this.kwUsing();
				this.state = 1840;
				this.ttl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1842;
				this.kwUsing();
				this.state = 1843;
				this.ttl();
				this.state = 1844;
				this.kwAnd();
				this.state = 1845;
				this.timestamp();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1847;
				this.kwUsing();
				this.state = 1848;
				this.timestamp();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1850;
				this.kwUsing();
				this.state = 1851;
				this.timestamp();
				this.state = 1852;
				this.kwAnd();
				this.state = 1853;
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
		this.enterRule(_localctx, 244, CqlParser.RULE_timestamp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1857;
			this.kwTimestamp();
			this.state = 1858;
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
		this.enterRule(_localctx, 246, CqlParser.RULE_ttl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1860;
			this.kwTtl();
			this.state = 1861;
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
		this.enterRule(_localctx, 248, CqlParser.RULE_usingTimestampSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1863;
			this.kwUsing();
			this.state = 1864;
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
		this.enterRule(_localctx, 250, CqlParser.RULE_ifNotExist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1866;
			this.kwIf();
			this.state = 1867;
			this.kwNot();
			this.state = 1868;
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
		this.enterRule(_localctx, 252, CqlParser.RULE_ifExist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1870;
			this.kwIf();
			this.state = 1871;
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
		this.enterRule(_localctx, 254, CqlParser.RULE_insertValuesSpec);
		try {
			this.state = 1881;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_VALUES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1873;
				this.kwValues();
				this.state = 1874;
				this.syntaxBracketLr();
				this.state = 1875;
				this.expressionList();
				this.state = 1878;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.RR_BRACKET:
					{
					this.state = 1876;
					this.syntaxBracketRr();
					}
					break;
				case CqlParser.EOF:
				case CqlParser.SEMI:
				case CqlParser.MINUSMINUS:
				case CqlParser.K_IF:
				case CqlParser.K_USING:
					{
					 this.notifyErrorListeners("rule.syntaxBracketRr"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
		this.enterRule(_localctx, 256, CqlParser.RULE_insertColumnSpec);
		try {
			this.state = 1888;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1883;
				this.syntaxBracketLr();
				this.state = 1884;
				this.columnList();
				this.state = 1885;
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
		this.enterRule(_localctx, 258, CqlParser.RULE_columnList);
		let _la: number;
		try {
			this.state = 1902;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_INPUT:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_LEVEL:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.K_ROLES:
			case CqlParser.K_ROLE:
			case CqlParser.K_USERS:
			case CqlParser.K_USER:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1890;
				this.columnSpec();
				this.state = 1898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===CqlParser.COMMA) {
					{
					{
					this.state = 1891;
					this.syntaxComma();
					this.state = 1894;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CqlParser.DQUOTE:
					case CqlParser.K_DURABLE_WRITES:
					case CqlParser.K_INITCOND:
					case CqlParser.K_INPUT:
					case CqlParser.K_KEY:
					case CqlParser.K_LANGUAGE:
					case CqlParser.K_LEVEL:
					case CqlParser.K_OPTIONS:
					case CqlParser.K_PARTITION:
					case CqlParser.K_PERMISSIONS:
					case CqlParser.K_REPLICATION:
					case CqlParser.K_TTL:
					case CqlParser.K_TYPE:
					case CqlParser.K_ROLES:
					case CqlParser.K_ROLE:
					case CqlParser.K_USERS:
					case CqlParser.K_USER:
					case CqlParser.OBJECT_NAME:
						{
						this.state = 1892;
						this.columnSpec();
						}
						break;
					case CqlParser.RR_BRACKET:
					case CqlParser.COMMA:
						{
						 this.notifyErrorListeners("rule.column"); 
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 1900;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CqlParser.RR_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.columnList"); 
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
	public baseColumnList(): BaseColumnListContext {
		let _localctx: BaseColumnListContext = new BaseColumnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, CqlParser.RULE_baseColumnList);
		let _la: number;
		try {
			this.state = 1916;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_INPUT:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_LEVEL:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.K_ROLES:
			case CqlParser.K_ROLE:
			case CqlParser.K_USERS:
			case CqlParser.K_USER:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1904;
				this.columnSpec();
				this.state = 1912;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===CqlParser.COMMA) {
					{
					{
					this.state = 1905;
					this.syntaxComma();
					this.state = 1908;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CqlParser.DQUOTE:
					case CqlParser.K_DURABLE_WRITES:
					case CqlParser.K_INITCOND:
					case CqlParser.K_INPUT:
					case CqlParser.K_KEY:
					case CqlParser.K_LANGUAGE:
					case CqlParser.K_LEVEL:
					case CqlParser.K_OPTIONS:
					case CqlParser.K_PARTITION:
					case CqlParser.K_PERMISSIONS:
					case CqlParser.K_REPLICATION:
					case CqlParser.K_TTL:
					case CqlParser.K_TYPE:
					case CqlParser.K_ROLES:
					case CqlParser.K_ROLE:
					case CqlParser.K_USERS:
					case CqlParser.K_USER:
					case CqlParser.OBJECT_NAME:
						{
						this.state = 1906;
						this.columnSpec();
						}
						break;
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
					this.state = 1914;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CqlParser.K_FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.baseColumnList"); 
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
			this.state = 1918;
			this.expression();
			this.state = 1924;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1919;
				this.syntaxComma();
				this.state = 1920;
				this.expression();
				}
				}
				this.state = 1926;
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
			this.state = 1932;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.LR_BRACKET:
			case CqlParser.LC_BRACKET:
			case CqlParser.LS_BRACKET:
			case CqlParser.K_FALSE:
			case CqlParser.K_NULL:
			case CqlParser.K_TRUE:
			case CqlParser.STRING_LITERAL:
			case CqlParser.DECIMAL_LITERAL:
			case CqlParser.FLOAT_LITERAL:
			case CqlParser.HEXADECIMAL_LITERAL:
			case CqlParser.UUID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1929;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.K_FALSE:
				case CqlParser.K_NULL:
				case CqlParser.K_TRUE:
				case CqlParser.STRING_LITERAL:
				case CqlParser.DECIMAL_LITERAL:
				case CqlParser.FLOAT_LITERAL:
				case CqlParser.HEXADECIMAL_LITERAL:
				case CqlParser.UUID:
					{
					this.state = 1927;
					this.constant();
					}
					break;
				case CqlParser.LR_BRACKET:
				case CqlParser.LC_BRACKET:
				case CqlParser.LS_BRACKET:
					{
					this.state = 1928;
					this.constantCollection();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case CqlParser.EOF:
			case CqlParser.RR_BRACKET:
			case CqlParser.COMMA:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_IF:
			case CqlParser.K_USING:
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
			this.state = 1934;
			this.kwSelect();
			this.state = 1936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_DISTINCT) {
				{
				this.state = 1935;
				this.kwDistinct();
				}
			}

			this.state = 1938;
			this.selectElements();
			this.state = 1939;
			this.fromSpec();
			this.state = 1941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WHERE) {
				{
				this.state = 1940;
				this.whereSpec();
				}
			}

			this.state = 1944;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ORDER) {
				{
				this.state = 1943;
				this.orderSpec();
				}
			}

			this.state = 1947;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_LIMIT) {
				{
				this.state = 1946;
				this.limitSpec();
				}
			}

			this.state = 1950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ALLOW) {
				{
				this.state = 1949;
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
			this.state = 1952;
			this.kwLimit();
			this.state = 1955;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DECIMAL_LITERAL:
				{
				this.state = 1953;
				this.constantDecimal();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_ALLOW:
				{
				 this.notifyErrorListeners("rule.constantDecimal"); 
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
	public fromSpec(): FromSpecContext {
		let _localctx: FromSpecContext = new FromSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, CqlParser.RULE_fromSpec);
		try {
			this.state = 1961;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1957;
				this.kwFrom();
				this.state = 1958;
				this.tableOrMaterializedViewSpec();
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
				 this.notifyErrorListeners("rule.fromSpec"); 
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
			this.state = 1963;
			this.kwOrderBy();
			this.state = 1964;
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
			this.state = 1972;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_INPUT:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_LEVEL:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.K_ROLES:
			case CqlParser.K_ROLE:
			case CqlParser.K_USERS:
			case CqlParser.K_USER:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1966;
				this.columnSpec();
				this.state = 1969;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.K_ASC:
					{
					this.state = 1967;
					this.kwAsc();
					}
					break;
				case CqlParser.K_DESC:
					{
					this.state = 1968;
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
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_ALLOW:
			case CqlParser.K_LIMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.orderSpecElement"); 
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
	public whereSpec(): WhereSpecContext {
		let _localctx: WhereSpecContext = new WhereSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, CqlParser.RULE_whereSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1974;
			this.kwWhere();
			this.state = 1975;
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
			this.state = 1988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,157,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1977;
				this.specialStar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1978;
				this.selectElement();
				this.state = 1984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===CqlParser.COMMA) {
					{
					{
					this.state = 1979;
					this.syntaxComma();
					this.state = 1980;
					this.selectElement();
					}
					}
					this.state = 1986;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.selectElements"); 
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
			this.state = 2004;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,160,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1990;
				this.columnSpec();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1991;
				this.columnSpec();
				this.state = 1995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_AS) {
					{
					this.state = 1992;
					this.kwAs();
					this.state = 1993;
					this.match(CqlParser.OBJECT_NAME);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1997;
				this.functionCall();
				this.state = 2001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_AS) {
					{
					this.state = 1998;
					this.kwAs();
					this.state = 1999;
					this.match(CqlParser.OBJECT_NAME);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.selectElement"); 
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
			this.state = 2006;
			this.relationElement();
			}
			this.state = 2012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 2007;
				this.kwAnd();
				this.state = 2008;
				this.relationElement();
				}
				}
				this.state = 2014;
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
		try {
			this.state = 2021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,162,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2015;
				this.relationElementConstant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2016;
				this.relationElementIn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2017;
				this.relationElementToken();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2018;
				this.match(CqlParser.OBJECT_NAME);
				 this.notifyErrorListeners("rule.relationElement"); 
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
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
	public relationElementConstant(): RelationElementConstantContext {
		let _localctx: RelationElementConstantContext = new RelationElementConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, CqlParser.RULE_relationElementConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2023;
			this.columnSpec();
			this.state = 2024;
			this.relationOperator();
			this.state = 2027;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_FALSE:
			case CqlParser.K_NULL:
			case CqlParser.K_TRUE:
			case CqlParser.STRING_LITERAL:
			case CqlParser.DECIMAL_LITERAL:
			case CqlParser.FLOAT_LITERAL:
			case CqlParser.HEXADECIMAL_LITERAL:
			case CqlParser.UUID:
				{
				this.state = 2025;
				this.constant();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_ALLOW:
			case CqlParser.K_AND:
			case CqlParser.K_IF:
			case CqlParser.K_LIMIT:
			case CqlParser.K_ORDER:
			case CqlParser.K_PRIMARY:
				{
				 this.notifyErrorListeners("rule.constant"); 
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
	public relationElementIn(): RelationElementInContext {
		let _localctx: RelationElementInContext = new RelationElementInContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, CqlParser.RULE_relationElementIn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2029;
			this.columnSpec();
			this.state = 2030;
			this.kwIn();
			this.state = 2031;
			this.syntaxBracketLr();
			this.state = 2033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_FALSE || _la===CqlParser.K_NULL || _la===CqlParser.K_TRUE || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (CqlParser.STRING_LITERAL - 165)) | (1 << (CqlParser.DECIMAL_LITERAL - 165)) | (1 << (CqlParser.FLOAT_LITERAL - 165)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 165)) | (1 << (CqlParser.OBJECT_NAME - 165)) | (1 << (CqlParser.UUID - 165)))) !== 0)) {
				{
				this.state = 2032;
				this.functionArgs();
				}
			}

			this.state = 2035;
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
	public relationElementToken(): RelationElementTokenContext {
		let _localctx: RelationElementTokenContext = new RelationElementTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, CqlParser.RULE_relationElementToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2037;
			this.relationElementTokenSpec();
			this.state = 2040;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,165,this._ctx) ) {
			case 1:
				{
				this.state = 2038;
				this.relationOperator();
				}
				break;

			case 2:
				{
				 this.notifyErrorListeners("rule.relationOperator"); 
				}
				break;
			}
			this.state = 2042;
			this.relationElementTokenSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public relationElementTokenSpec(): RelationElementTokenSpecContext {
		let _localctx: RelationElementTokenSpecContext = new RelationElementTokenSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, CqlParser.RULE_relationElementTokenSpec);
		try {
			this.state = 2058;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,169,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2044;
				this.kwToken();
				this.state = 2047;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.LR_BRACKET:
					{
					this.state = 2045;
					this.syntaxBracketLr();
					}
					break;
				case CqlParser.EOF:
				case CqlParser.RR_BRACKET:
				case CqlParser.SEMI:
				case CqlParser.DQUOTE:
				case CqlParser.MINUSMINUS:
				case CqlParser.K_ALLOW:
				case CqlParser.K_AND:
				case CqlParser.K_CONTAINS:
				case CqlParser.K_DURABLE_WRITES:
				case CqlParser.K_FALSE:
				case CqlParser.K_IF:
				case CqlParser.K_INITCOND:
				case CqlParser.K_INPUT:
				case CqlParser.K_KEY:
				case CqlParser.K_LANGUAGE:
				case CqlParser.K_LEVEL:
				case CqlParser.K_LIMIT:
				case CqlParser.K_NULL:
				case CqlParser.K_OPTIONS:
				case CqlParser.K_ORDER:
				case CqlParser.K_PARTITION:
				case CqlParser.K_PERMISSIONS:
				case CqlParser.K_PRIMARY:
				case CqlParser.K_REPLICATION:
				case CqlParser.K_TOKEN:
				case CqlParser.K_TRUE:
				case CqlParser.K_TTL:
				case CqlParser.K_TYPE:
				case CqlParser.K_ROLES:
				case CqlParser.K_ROLE:
				case CqlParser.K_USERS:
				case CqlParser.K_USER:
				case CqlParser.STRING_LITERAL:
				case CqlParser.DECIMAL_LITERAL:
				case CqlParser.FLOAT_LITERAL:
				case CqlParser.HEXADECIMAL_LITERAL:
				case CqlParser.OBJECT_NAME:
				case CqlParser.UUID:
				case CqlParser.OPERATOR_EQ:
				case CqlParser.OPERATOR_LT:
				case CqlParser.OPERATOR_GT:
				case CqlParser.OPERATOR_LTE:
				case CqlParser.OPERATOR_GTE:
					{
					 this.notifyErrorListeners("rule.syntaxBracketLr"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2051;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.DQUOTE:
				case CqlParser.K_DURABLE_WRITES:
				case CqlParser.K_INITCOND:
				case CqlParser.K_INPUT:
				case CqlParser.K_KEY:
				case CqlParser.K_LANGUAGE:
				case CqlParser.K_LEVEL:
				case CqlParser.K_OPTIONS:
				case CqlParser.K_PARTITION:
				case CqlParser.K_PERMISSIONS:
				case CqlParser.K_REPLICATION:
				case CqlParser.K_TTL:
				case CqlParser.K_TYPE:
				case CqlParser.K_ROLES:
				case CqlParser.K_ROLE:
				case CqlParser.K_USERS:
				case CqlParser.K_USER:
				case CqlParser.OBJECT_NAME:
					{
					this.state = 2049;
					this.columnSpec();
					}
					break;
				case CqlParser.EOF:
				case CqlParser.RR_BRACKET:
				case CqlParser.SEMI:
				case CqlParser.MINUSMINUS:
				case CqlParser.K_ALLOW:
				case CqlParser.K_AND:
				case CqlParser.K_CONTAINS:
				case CqlParser.K_FALSE:
				case CqlParser.K_IF:
				case CqlParser.K_LIMIT:
				case CqlParser.K_NULL:
				case CqlParser.K_ORDER:
				case CqlParser.K_PRIMARY:
				case CqlParser.K_TOKEN:
				case CqlParser.K_TRUE:
				case CqlParser.STRING_LITERAL:
				case CqlParser.DECIMAL_LITERAL:
				case CqlParser.FLOAT_LITERAL:
				case CqlParser.HEXADECIMAL_LITERAL:
				case CqlParser.UUID:
				case CqlParser.OPERATOR_EQ:
				case CqlParser.OPERATOR_LT:
				case CqlParser.OPERATOR_GT:
				case CqlParser.OPERATOR_LTE:
				case CqlParser.OPERATOR_GTE:
					{
					 this.notifyErrorListeners("rule.column"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2055;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.RR_BRACKET:
					{
					this.state = 2053;
					this.syntaxBracketRr();
					}
					break;
				case CqlParser.EOF:
				case CqlParser.SEMI:
				case CqlParser.MINUSMINUS:
				case CqlParser.K_ALLOW:
				case CqlParser.K_AND:
				case CqlParser.K_CONTAINS:
				case CqlParser.K_FALSE:
				case CqlParser.K_IF:
				case CqlParser.K_LIMIT:
				case CqlParser.K_NULL:
				case CqlParser.K_ORDER:
				case CqlParser.K_PRIMARY:
				case CqlParser.K_TOKEN:
				case CqlParser.K_TRUE:
				case CqlParser.STRING_LITERAL:
				case CqlParser.DECIMAL_LITERAL:
				case CqlParser.FLOAT_LITERAL:
				case CqlParser.HEXADECIMAL_LITERAL:
				case CqlParser.UUID:
				case CqlParser.OPERATOR_EQ:
				case CqlParser.OPERATOR_LT:
				case CqlParser.OPERATOR_GT:
				case CqlParser.OPERATOR_LTE:
				case CqlParser.OPERATOR_GTE:
					{
					 this.notifyErrorListeners("rule.syntaxBracketRr"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.relationElementTokenSpec"); 
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
		this.enterRule(_localctx, 294, CqlParser.RULE_relationOperator);
		try {
			this.state = 2068;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,170,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2060;
				this.syntaxOperatorEq();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2061;
				this.syntaxOperatorLt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2062;
				this.syntaxOperatorGt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2063;
				this.syntaxOperatorLte();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2064;
				this.syntaxOperatorGte();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2065;
				this.kwContains();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2066;
				this.kwContainsKey();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				 this.notifyErrorListeners("rule.relationOperator"); 
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, CqlParser.RULE_functionCall);
		let _la: number;
		try {
			this.state = 2080;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,172,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2070;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2071;
				this.match(CqlParser.LR_BRACKET);
				this.state = 2072;
				this.match(CqlParser.STAR);
				this.state = 2073;
				this.match(CqlParser.RR_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2074;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2075;
				this.match(CqlParser.LR_BRACKET);
				this.state = 2077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_FALSE || _la===CqlParser.K_NULL || _la===CqlParser.K_TRUE || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (CqlParser.STRING_LITERAL - 165)) | (1 << (CqlParser.DECIMAL_LITERAL - 165)) | (1 << (CqlParser.FLOAT_LITERAL - 165)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 165)) | (1 << (CqlParser.OBJECT_NAME - 165)) | (1 << (CqlParser.UUID - 165)))) !== 0)) {
					{
					this.state = 2076;
					this.functionArgs();
					}
				}

				this.state = 2079;
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
		this.enterRule(_localctx, 298, CqlParser.RULE_functionArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2085;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,173,this._ctx) ) {
			case 1:
				{
				this.state = 2082;
				this.constant();
				}
				break;

			case 2:
				{
				this.state = 2083;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 3:
				{
				this.state = 2084;
				this.functionCall();
				}
				break;
			}
			this.state = 2095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 2087;
				this.syntaxComma();
				this.state = 2091;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,174,this._ctx) ) {
				case 1:
					{
					this.state = 2088;
					this.constant();
					}
					break;

				case 2:
					{
					this.state = 2089;
					this.match(CqlParser.OBJECT_NAME);
					}
					break;

				case 3:
					{
					this.state = 2090;
					this.functionCall();
					}
					break;
				}
				}
				}
				this.state = 2097;
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
		this.enterRule(_localctx, 300, CqlParser.RULE_constant);
		try {
			this.state = 2105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,176,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2098;
				this.constantUuid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2099;
				this.constantString();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2100;
				this.constantDecimal();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2101;
				this.constantFloat();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2102;
				this.constantHexadecimal();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2103;
				this.constantBoolean();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2104;
				this.kwNull();
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
	public collectionElement(): CollectionElementContext {
		let _localctx: CollectionElementContext = new CollectionElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, CqlParser.RULE_collectionElement);
		try {
			this.state = 2112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,177,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2107;
				this.constant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2108;
				this.constantMap();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2109;
				this.constantSet();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2110;
				this.constantList();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2111;
				this.constantTuple();
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
	public collectionMapElement(): CollectionMapElementContext {
		let _localctx: CollectionMapElementContext = new CollectionMapElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, CqlParser.RULE_collectionMapElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2114;
			this.collectionElement();
			this.state = 2115;
			this.syntaxColon();
			this.state = 2116;
			this.collectionElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constantCollection(): ConstantCollectionContext {
		let _localctx: ConstantCollectionContext = new ConstantCollectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, CqlParser.RULE_constantCollection);
		try {
			this.state = 2122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,178,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2118;
				this.constantMap();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2119;
				this.constantTuple();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2120;
				this.constantList();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2121;
				this.constantSet();
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
	public constantMap(): ConstantMapContext {
		let _localctx: ConstantMapContext = new ConstantMapContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, CqlParser.RULE_constantMap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2124;
			this.syntaxBracketLc();
			this.state = 2125;
			this.collectionMapElement();
			this.state = 2131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 2126;
				this.syntaxComma();
				this.state = 2127;
				this.collectionMapElement();
				}
				}
				this.state = 2133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2134;
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
	public constantSet(): ConstantSetContext {
		let _localctx: ConstantSetContext = new ConstantSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, CqlParser.RULE_constantSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2136;
			this.syntaxBracketLc();
			this.state = 2137;
			this.collectionElement();
			this.state = 2143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 2138;
				this.syntaxComma();
				this.state = 2139;
				this.collectionElement();
				}
				}
				this.state = 2145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2146;
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
	public constantList(): ConstantListContext {
		let _localctx: ConstantListContext = new ConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, CqlParser.RULE_constantList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2148;
			this.syntaxBracketLs();
			this.state = 2149;
			this.collectionElement();
			this.state = 2155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 2150;
				this.syntaxComma();
				this.state = 2151;
				this.collectionElement();
				}
				}
				this.state = 2157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2158;
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
	public constantTuple(): ConstantTupleContext {
		let _localctx: ConstantTupleContext = new ConstantTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, CqlParser.RULE_constantTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2160;
			this.syntaxBracketLr();
			this.state = 2161;
			this.collectionElement();
			this.state = 2167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 2162;
				this.syntaxComma();
				this.state = 2163;
				this.collectionElement();
				}
				}
				this.state = 2169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2170;
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
	public constantUuid(): ConstantUuidContext {
		let _localctx: ConstantUuidContext = new ConstantUuidContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, CqlParser.RULE_constantUuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2172;
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
		this.enterRule(_localctx, 318, CqlParser.RULE_constantDecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2174;
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
		this.enterRule(_localctx, 320, CqlParser.RULE_constantFloat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2176;
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
		this.enterRule(_localctx, 322, CqlParser.RULE_constantString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2178;
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
		this.enterRule(_localctx, 324, CqlParser.RULE_constantBoolean);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2180;
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
		this.enterRule(_localctx, 326, CqlParser.RULE_constantHexadecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2182;
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
		this.enterRule(_localctx, 328, CqlParser.RULE_keyspace);
		try {
			this.state = 2204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,183,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2184;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2185;
				this.match(CqlParser.DQUOTE);
				this.state = 2186;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2187;
				this.match(CqlParser.DQUOTE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2188;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2189;
				this.match(CqlParser.K_PERMISSIONS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2190;
				this.match(CqlParser.K_OPTIONS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2191;
				this.match(CqlParser.K_DURABLE_WRITES);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2192;
				this.match(CqlParser.K_LANGUAGE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2193;
				this.match(CqlParser.K_TYPE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2194;
				this.match(CqlParser.K_INITCOND);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2195;
				this.match(CqlParser.K_REPLICATION);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2196;
				this.match(CqlParser.K_TTL);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2197;
				this.match(CqlParser.K_PARTITION);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2198;
				this.match(CqlParser.K_KEY);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2199;
				this.match(CqlParser.K_LEVEL);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2200;
				this.match(CqlParser.K_USERS);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2201;
				this.match(CqlParser.K_USER);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2202;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2203;
				this.match(CqlParser.K_ROLES);
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
	public baseKeyspace(): BaseKeyspaceContext {
		let _localctx: BaseKeyspaceContext = new BaseKeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, CqlParser.RULE_baseKeyspace);
		try {
			this.state = 2226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,184,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2206;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2207;
				this.match(CqlParser.DQUOTE);
				this.state = 2208;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2209;
				this.match(CqlParser.DQUOTE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2210;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2211;
				this.match(CqlParser.K_PERMISSIONS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2212;
				this.match(CqlParser.K_OPTIONS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2213;
				this.match(CqlParser.K_DURABLE_WRITES);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2214;
				this.match(CqlParser.K_LANGUAGE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2215;
				this.match(CqlParser.K_TYPE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2216;
				this.match(CqlParser.K_INITCOND);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2217;
				this.match(CqlParser.K_REPLICATION);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2218;
				this.match(CqlParser.K_TTL);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2219;
				this.match(CqlParser.K_PARTITION);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2220;
				this.match(CqlParser.K_KEY);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2221;
				this.match(CqlParser.K_LEVEL);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2222;
				this.match(CqlParser.K_USERS);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2223;
				this.match(CqlParser.K_USER);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2224;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2225;
				this.match(CqlParser.K_ROLES);
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
	public table(): TableContext {
		let _localctx: TableContext = new TableContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, CqlParser.RULE_table);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2228;
			_la = this._input.LA(1);
			if ( !(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CqlParser.K_DURABLE_WRITES - 53)) | (1 << (CqlParser.K_INITCOND - 53)) | (1 << (CqlParser.K_KEY - 53)) | (1 << (CqlParser.K_LANGUAGE - 53)) | (1 << (CqlParser.K_LEVEL - 53)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (CqlParser.K_OPTIONS - 94)) | (1 << (CqlParser.K_PARTITION - 94)) | (1 << (CqlParser.K_PERMISSIONS - 94)) | (1 << (CqlParser.K_REPLICATION - 94)) | (1 << (CqlParser.K_TTL - 94)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (CqlParser.K_TYPE - 127)) | (1 << (CqlParser.K_ROLES - 127)) | (1 << (CqlParser.K_ROLE - 127)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (CqlParser.K_USERS - 162)) | (1 << (CqlParser.K_USER - 162)) | (1 << (CqlParser.OBJECT_NAME - 162)))) !== 0)) ) {
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
	public baseTable(): BaseTableContext {
		let _localctx: BaseTableContext = new BaseTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, CqlParser.RULE_baseTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2230;
			_la = this._input.LA(1);
			if ( !(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CqlParser.K_DURABLE_WRITES - 53)) | (1 << (CqlParser.K_INITCOND - 53)) | (1 << (CqlParser.K_KEY - 53)) | (1 << (CqlParser.K_LANGUAGE - 53)) | (1 << (CqlParser.K_LEVEL - 53)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (CqlParser.K_OPTIONS - 94)) | (1 << (CqlParser.K_PARTITION - 94)) | (1 << (CqlParser.K_PERMISSIONS - 94)) | (1 << (CqlParser.K_REPLICATION - 94)) | (1 << (CqlParser.K_TTL - 94)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (CqlParser.K_TYPE - 127)) | (1 << (CqlParser.K_ROLES - 127)) | (1 << (CqlParser.K_ROLE - 127)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (CqlParser.K_USERS - 162)) | (1 << (CqlParser.K_USER - 162)) | (1 << (CqlParser.OBJECT_NAME - 162)))) !== 0)) ) {
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
	public materializedView(): MaterializedViewContext {
		let _localctx: MaterializedViewContext = new MaterializedViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, CqlParser.RULE_materializedView);
		try {
			this.state = 2252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,185,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2232;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2233;
				this.match(CqlParser.DQUOTE);
				this.state = 2234;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2235;
				this.match(CqlParser.DQUOTE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2236;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2237;
				this.match(CqlParser.K_PERMISSIONS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2238;
				this.match(CqlParser.K_OPTIONS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2239;
				this.match(CqlParser.K_DURABLE_WRITES);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2240;
				this.match(CqlParser.K_LANGUAGE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2241;
				this.match(CqlParser.K_TYPE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2242;
				this.match(CqlParser.K_INITCOND);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2243;
				this.match(CqlParser.K_REPLICATION);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2244;
				this.match(CqlParser.K_TTL);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2245;
				this.match(CqlParser.K_PARTITION);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2246;
				this.match(CqlParser.K_KEY);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2247;
				this.match(CqlParser.K_LEVEL);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2248;
				this.match(CqlParser.K_USERS);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2249;
				this.match(CqlParser.K_USER);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2250;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2251;
				this.match(CqlParser.K_ROLES);
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
	public keyspaceObject(): KeyspaceObjectContext {
		let _localctx: KeyspaceObjectContext = new KeyspaceObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, CqlParser.RULE_keyspaceObject);
		try {
			this.state = 2274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,186,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2254;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2255;
				this.match(CqlParser.DQUOTE);
				this.state = 2256;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2257;
				this.match(CqlParser.DQUOTE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2258;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2259;
				this.match(CqlParser.K_PERMISSIONS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2260;
				this.match(CqlParser.K_OPTIONS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2261;
				this.match(CqlParser.K_DURABLE_WRITES);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2262;
				this.match(CqlParser.K_LANGUAGE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2263;
				this.match(CqlParser.K_TYPE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2264;
				this.match(CqlParser.K_INITCOND);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2265;
				this.match(CqlParser.K_REPLICATION);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2266;
				this.match(CqlParser.K_TTL);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2267;
				this.match(CqlParser.K_PARTITION);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2268;
				this.match(CqlParser.K_KEY);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2269;
				this.match(CqlParser.K_LEVEL);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2270;
				this.match(CqlParser.K_USERS);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2271;
				this.match(CqlParser.K_USER);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2272;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2273;
				this.match(CqlParser.K_ROLES);
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
	public objectUnknown(): ObjectUnknownContext {
		let _localctx: ObjectUnknownContext = new ObjectUnknownContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, CqlParser.RULE_objectUnknown);
		try {
			this.state = 2297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,187,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2276;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2277;
				this.match(CqlParser.DQUOTE);
				this.state = 2278;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2279;
				this.match(CqlParser.DQUOTE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2280;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2281;
				this.match(CqlParser.K_PERMISSIONS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2282;
				this.match(CqlParser.K_OPTIONS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2283;
				this.match(CqlParser.K_DURABLE_WRITES);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2284;
				this.match(CqlParser.K_LANGUAGE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2285;
				this.match(CqlParser.K_TYPE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2286;
				this.match(CqlParser.K_INITCOND);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2287;
				this.match(CqlParser.K_REPLICATION);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2288;
				this.match(CqlParser.K_TTL);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2289;
				this.match(CqlParser.K_PARTITION);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2290;
				this.match(CqlParser.K_KEY);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2291;
				this.match(CqlParser.K_LEVEL);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2292;
				this.match(CqlParser.K_USERS);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2293;
				this.match(CqlParser.K_USER);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2294;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2295;
				this.match(CqlParser.K_ROLES);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2296;
				this.match(CqlParser.K_INPUT);
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
	public aggregateSpec(): AggregateSpecContext {
		let _localctx: AggregateSpecContext = new AggregateSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, CqlParser.RULE_aggregateSpec);
		try {
			this.state = 2309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,188,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2299;
				this.aggregate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2300;
				this.keyspace();
				this.state = 2301;
				this.specialDot();
				this.state = 2302;
				this.aggregate();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2304;
				this.keyspace();
				this.state = 2305;
				this.specialDot();
				 this.notifyErrorListeners("rule.aggregate"); 
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.aggregateSpec"); 
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
	public typeSpec(): TypeSpecContext {
		let _localctx: TypeSpecContext = new TypeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, CqlParser.RULE_typeSpec);
		try {
			this.state = 2321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,189,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2311;
				this.type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2312;
				this.keyspace();
				this.state = 2313;
				this.specialDot();
				this.state = 2314;
				this.type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2316;
				this.keyspace();
				this.state = 2317;
				this.specialDot();
				 this.notifyErrorListeners("rule.type"); 
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.typeSpec"); 
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
	public functionSpec(): FunctionSpecContext {
		let _localctx: FunctionSpecContext = new FunctionSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, CqlParser.RULE_functionSpec);
		try {
			this.state = 2333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,190,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2323;
				this.function();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2324;
				this.keyspace();
				this.state = 2325;
				this.specialDot();
				this.state = 2326;
				this.function();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2328;
				this.keyspace();
				this.state = 2329;
				this.specialDot();
				 this.notifyErrorListeners("rule.function"); 
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.functionSpec"); 
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
	public tableSpec(): TableSpecContext {
		let _localctx: TableSpecContext = new TableSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, CqlParser.RULE_tableSpec);
		try {
			this.state = 2355;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,191,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2335;
				this.table();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2336;
				this.syntaxDquote();
				this.state = 2337;
				this.table();
				this.state = 2338;
				this.syntaxDquote();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2340;
				this.keyspace();
				this.state = 2341;
				this.specialDot();
				this.state = 2342;
				this.table();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2344;
				this.keyspace();
				this.state = 2345;
				this.specialDot();
				this.state = 2346;
				this.syntaxDquote();
				this.state = 2347;
				this.table();
				this.state = 2348;
				this.syntaxDquote();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2350;
				this.keyspace();
				this.state = 2351;
				this.specialDot();
				 this.notifyErrorListeners("rule.table"); 
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
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
	public baseTableSpec(): BaseTableSpecContext {
		let _localctx: BaseTableSpecContext = new BaseTableSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, CqlParser.RULE_baseTableSpec);
		try {
			this.state = 2377;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,192,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2357;
				this.baseTable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2358;
				this.syntaxDquote();
				this.state = 2359;
				this.baseTable();
				this.state = 2360;
				this.syntaxDquote();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2362;
				this.baseKeyspace();
				this.state = 2363;
				this.specialDot();
				this.state = 2364;
				this.baseTable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2366;
				this.baseKeyspace();
				this.state = 2367;
				this.specialDot();
				this.state = 2368;
				this.syntaxDquote();
				this.state = 2369;
				this.baseTable();
				this.state = 2370;
				this.syntaxDquote();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2372;
				this.baseKeyspace();
				this.state = 2373;
				this.specialDot();
				 this.notifyErrorListeners("rule.baseTable"); 
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				 this.notifyErrorListeners("rule.baseTableSpec"); 
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
	public indexSpec(): IndexSpecContext {
		let _localctx: IndexSpecContext = new IndexSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, CqlParser.RULE_indexSpec);
		try {
			this.state = 2389;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,193,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2379;
				this.index();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2380;
				this.keyspace();
				this.state = 2381;
				this.specialDot();
				this.state = 2382;
				this.index();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2384;
				this.keyspace();
				this.state = 2385;
				this.specialDot();
				 this.notifyErrorListeners("rule.index"); 
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.indexSpec"); 
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
	public materializedViewSpec(): MaterializedViewSpecContext {
		let _localctx: MaterializedViewSpecContext = new MaterializedViewSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, CqlParser.RULE_materializedViewSpec);
		try {
			this.state = 2401;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,194,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2391;
				this.materializedView();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2392;
				this.keyspace();
				this.state = 2393;
				this.specialDot();
				this.state = 2394;
				this.materializedView();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2396;
				this.keyspace();
				this.state = 2397;
				this.specialDot();
				 this.notifyErrorListeners("rule.materializedView"); 
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.materializedViewSpec"); 
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
	public tableOrMaterializedViewSpec(): TableOrMaterializedViewSpecContext {
		let _localctx: TableOrMaterializedViewSpecContext = new TableOrMaterializedViewSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, CqlParser.RULE_tableOrMaterializedViewSpec);
		try {
			this.state = 2406;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,195,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2403;
				this.tableSpec();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2404;
				this.materializedViewSpec();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.tableOrMaterializedViewSpec"); 
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
	public objectUnknownSpec(): ObjectUnknownSpecContext {
		let _localctx: ObjectUnknownSpecContext = new ObjectUnknownSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, CqlParser.RULE_objectUnknownSpec);
		try {
			this.state = 2414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,196,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2408;
				this.objectUnknown();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2409;
				this.keyspace();
				this.state = 2410;
				this.specialDot();
				this.state = 2411;
				this.objectUnknown();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.objectUnknownSpec"); 
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
	public columnSpec(): ColumnSpecContext {
		let _localctx: ColumnSpecContext = new ColumnSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, CqlParser.RULE_columnSpec);
		try {
			this.state = 2421;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_DURABLE_WRITES:
			case CqlParser.K_INITCOND:
			case CqlParser.K_INPUT:
			case CqlParser.K_KEY:
			case CqlParser.K_LANGUAGE:
			case CqlParser.K_LEVEL:
			case CqlParser.K_OPTIONS:
			case CqlParser.K_PARTITION:
			case CqlParser.K_PERMISSIONS:
			case CqlParser.K_REPLICATION:
			case CqlParser.K_TTL:
			case CqlParser.K_TYPE:
			case CqlParser.K_ROLES:
			case CqlParser.K_ROLE:
			case CqlParser.K_USERS:
			case CqlParser.K_USER:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2416;
				this.column();
				}
				break;
			case CqlParser.DQUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2417;
				this.syntaxDquote();
				this.state = 2418;
				this.column();
				this.state = 2419;
				this.syntaxDquote();
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
	public column(): ColumnContext {
		let _localctx: ColumnContext = new ColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, CqlParser.RULE_column);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2423;
			_la = this._input.LA(1);
			if ( !(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CqlParser.K_DURABLE_WRITES - 53)) | (1 << (CqlParser.K_INITCOND - 53)) | (1 << (CqlParser.K_INPUT - 53)) | (1 << (CqlParser.K_KEY - 53)) | (1 << (CqlParser.K_LANGUAGE - 53)) | (1 << (CqlParser.K_LEVEL - 53)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (CqlParser.K_OPTIONS - 94)) | (1 << (CqlParser.K_PARTITION - 94)) | (1 << (CqlParser.K_PERMISSIONS - 94)) | (1 << (CqlParser.K_REPLICATION - 94)) | (1 << (CqlParser.K_TTL - 94)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (CqlParser.K_TYPE - 127)) | (1 << (CqlParser.K_ROLES - 127)) | (1 << (CqlParser.K_ROLE - 127)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (CqlParser.K_USERS - 162)) | (1 << (CqlParser.K_USER - 162)) | (1 << (CqlParser.OBJECT_NAME - 162)))) !== 0)) ) {
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
	public columnUnknownSpec(): ColumnUnknownSpecContext {
		let _localctx: ColumnUnknownSpecContext = new ColumnUnknownSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, CqlParser.RULE_columnUnknownSpec);
		try {
			this.state = 2430;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,198,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2425;
				this.columnUnknown();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2426;
				this.syntaxDquote();
				this.state = 2427;
				this.columnUnknown();
				this.state = 2428;
				this.syntaxDquote();
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
	public columnUnknown(): ColumnUnknownContext {
		let _localctx: ColumnUnknownContext = new ColumnUnknownContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, CqlParser.RULE_columnUnknown);
		let _la: number;
		try {
			this.state = 2454;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,199,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2432;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2433;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2434;
				this.match(CqlParser.K_PERMISSIONS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2435;
				this.match(CqlParser.K_OPTIONS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2436;
				this.match(CqlParser.K_DURABLE_WRITES);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2437;
				this.match(CqlParser.K_LANGUAGE);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2438;
				this.match(CqlParser.K_TYPE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2439;
				this.match(CqlParser.K_INITCOND);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2440;
				this.match(CqlParser.K_REPLICATION);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2441;
				this.match(CqlParser.K_TTL);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2442;
				this.match(CqlParser.K_PARTITION);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2443;
				this.match(CqlParser.K_KEY);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2444;
				this.match(CqlParser.K_LEVEL);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2445;
				this.match(CqlParser.K_USERS);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2446;
				this.match(CqlParser.K_USER);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2447;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2448;
				this.match(CqlParser.K_ROLES);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2449;
				this.match(CqlParser.K_INPUT);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2450;
				this.syntaxDquote();
				this.state = 2451;
				_la = this._input.LA(1);
				if ( !(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CqlParser.K_DURABLE_WRITES - 53)) | (1 << (CqlParser.K_INITCOND - 53)) | (1 << (CqlParser.K_INPUT - 53)) | (1 << (CqlParser.K_KEY - 53)) | (1 << (CqlParser.K_LANGUAGE - 53)) | (1 << (CqlParser.K_LEVEL - 53)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (CqlParser.K_OPTIONS - 94)) | (1 << (CqlParser.K_PARTITION - 94)) | (1 << (CqlParser.K_PERMISSIONS - 94)) | (1 << (CqlParser.K_REPLICATION - 94)) | (1 << (CqlParser.K_TTL - 94)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (CqlParser.K_TYPE - 127)) | (1 << (CqlParser.K_ROLES - 127)) | (1 << (CqlParser.K_ROLE - 127)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (CqlParser.K_USERS - 162)) | (1 << (CqlParser.K_USER - 162)) | (1 << (CqlParser.OBJECT_NAME - 162)))) !== 0)) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2452;
				this.syntaxDquote();
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
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, CqlParser.RULE_dataType);
		try {
			this.state = 2458;
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
				this.state = 2456;
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
				this.state = 2457;
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
		this.enterRule(_localctx, 370, CqlParser.RULE_dataTypeCollection);
		try {
			this.state = 2485;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_FROZEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2460;
				this.dataTypeFrozen();
				this.state = 2463;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.OPERATOR_LT:
					{
					this.state = 2461;
					this.dataTypeStructure();
					}
					break;
				case CqlParser.EOF:
				case CqlParser.RR_BRACKET:
				case CqlParser.COMMA:
				case CqlParser.SEMI:
				case CqlParser.MINUSMINUS:
				case CqlParser.K_ADD:
				case CqlParser.K_FINALFUNC:
				case CqlParser.K_LANGUAGE:
				case CqlParser.K_PRIMARY:
				case CqlParser.K_RENAME:
				case CqlParser.K_STATIC:
				case CqlParser.OPERATOR_GT:
					{
					 this.notifyErrorListeners("rule.dataTypeStructure"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case CqlParser.K_SET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2465;
				this.dataTypeSet();
				this.state = 2468;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.OPERATOR_LT:
					{
					this.state = 2466;
					this.dataTypeStructure();
					}
					break;
				case CqlParser.EOF:
				case CqlParser.RR_BRACKET:
				case CqlParser.COMMA:
				case CqlParser.SEMI:
				case CqlParser.MINUSMINUS:
				case CqlParser.K_ADD:
				case CqlParser.K_FINALFUNC:
				case CqlParser.K_LANGUAGE:
				case CqlParser.K_PRIMARY:
				case CqlParser.K_RENAME:
				case CqlParser.K_STATIC:
				case CqlParser.OPERATOR_GT:
					{
					 this.notifyErrorListeners("rule.dataTypeStructure"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case CqlParser.K_LIST:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2470;
				this.dataTypeList();
				this.state = 2473;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.OPERATOR_LT:
					{
					this.state = 2471;
					this.dataTypeStructure();
					}
					break;
				case CqlParser.EOF:
				case CqlParser.RR_BRACKET:
				case CqlParser.COMMA:
				case CqlParser.SEMI:
				case CqlParser.MINUSMINUS:
				case CqlParser.K_ADD:
				case CqlParser.K_FINALFUNC:
				case CqlParser.K_LANGUAGE:
				case CqlParser.K_PRIMARY:
				case CqlParser.K_RENAME:
				case CqlParser.K_STATIC:
				case CqlParser.OPERATOR_GT:
					{
					 this.notifyErrorListeners("rule.dataTypeStructure"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case CqlParser.K_MAP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2475;
				this.dataTypeMap();
				this.state = 2478;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.OPERATOR_LT:
					{
					this.state = 2476;
					this.dataTypeStructure();
					}
					break;
				case CqlParser.EOF:
				case CqlParser.RR_BRACKET:
				case CqlParser.COMMA:
				case CqlParser.SEMI:
				case CqlParser.MINUSMINUS:
				case CqlParser.K_ADD:
				case CqlParser.K_FINALFUNC:
				case CqlParser.K_LANGUAGE:
				case CqlParser.K_PRIMARY:
				case CqlParser.K_RENAME:
				case CqlParser.K_STATIC:
				case CqlParser.OPERATOR_GT:
					{
					 this.notifyErrorListeners("rule.dataTypeStructure"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case CqlParser.K_TUPLE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2480;
				this.dataTypeTuple();
				this.state = 2483;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.OPERATOR_LT:
					{
					this.state = 2481;
					this.dataTypeStructure();
					}
					break;
				case CqlParser.EOF:
				case CqlParser.RR_BRACKET:
				case CqlParser.COMMA:
				case CqlParser.SEMI:
				case CqlParser.MINUSMINUS:
				case CqlParser.K_ADD:
				case CqlParser.K_FINALFUNC:
				case CqlParser.K_LANGUAGE:
				case CqlParser.K_PRIMARY:
				case CqlParser.K_RENAME:
				case CqlParser.K_STATIC:
				case CqlParser.OPERATOR_GT:
					{
					 this.notifyErrorListeners("rule.dataTypeStructure"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
		this.enterRule(_localctx, 372, CqlParser.RULE_dataTypeFundamental);
		try {
			this.state = 2508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ASCII:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2487;
				this.dataTypeAscii();
				}
				break;
			case CqlParser.K_BIGINT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2488;
				this.dataTypeBigint();
				}
				break;
			case CqlParser.K_BLOB:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2489;
				this.dataTypeBlob();
				}
				break;
			case CqlParser.K_BOOLEAN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2490;
				this.dataTypeBoolean();
				}
				break;
			case CqlParser.K_COUNTER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2491;
				this.dataTypeCounter();
				}
				break;
			case CqlParser.K_DATE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2492;
				this.dataTypeDate();
				}
				break;
			case CqlParser.K_DECIMAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2493;
				this.dataTypeDecimal();
				}
				break;
			case CqlParser.K_DOUBLE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2494;
				this.dataTypeDouble();
				}
				break;
			case CqlParser.K_FLOAT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2495;
				this.dataTypeFloat();
				}
				break;
			case CqlParser.K_INET:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2496;
				this.dataTypeInet();
				}
				break;
			case CqlParser.K_INT:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2497;
				this.dataTypeInt();
				}
				break;
			case CqlParser.K_SMALLINT:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2498;
				this.dataTypeSmallInt();
				}
				break;
			case CqlParser.K_TEXT:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2499;
				this.dataTypeText();
				}
				break;
			case CqlParser.K_TIME:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2500;
				this.dataTypeTime();
				}
				break;
			case CqlParser.K_TIMEUUID:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2501;
				this.dataTypeTimeUuid();
				}
				break;
			case CqlParser.K_TIMESTAMP:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2502;
				this.dataTypeTimestamp();
				}
				break;
			case CqlParser.K_TINYINT:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2503;
				this.dataTypeTinyInt();
				}
				break;
			case CqlParser.K_UUID:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2504;
				this.dataTypeUuid();
				}
				break;
			case CqlParser.K_VARCHAR:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2505;
				this.dataTypeVarChar();
				}
				break;
			case CqlParser.K_VARINT:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 2506;
				this.dataTypeVarInt();
				}
				break;
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 2507;
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
		this.enterRule(_localctx, 374, CqlParser.RULE_orderDirection);
		try {
			this.state = 2512;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ASC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2510;
				this.kwAsc();
				}
				break;
			case CqlParser.K_DESC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2511;
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
		this.enterRule(_localctx, 376, CqlParser.RULE_role);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2514;
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
		this.enterRule(_localctx, 378, CqlParser.RULE_trigger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2516;
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
		this.enterRule(_localctx, 380, CqlParser.RULE_triggerClass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2518;
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, CqlParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2520;
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
		this.enterRule(_localctx, 384, CqlParser.RULE_aggregate);
		try {
			this.state = 2543;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,209,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2522;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2523;
				this.match(CqlParser.DQUOTE);
				this.state = 2524;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2525;
				this.match(CqlParser.DQUOTE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2526;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2527;
				this.match(CqlParser.K_PERMISSIONS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2528;
				this.match(CqlParser.K_OPTIONS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2529;
				this.match(CqlParser.K_DURABLE_WRITES);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2530;
				this.match(CqlParser.K_LANGUAGE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2531;
				this.match(CqlParser.K_TYPE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2532;
				this.match(CqlParser.K_INITCOND);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2533;
				this.match(CqlParser.K_REPLICATION);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2534;
				this.match(CqlParser.K_TTL);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2535;
				this.match(CqlParser.K_PARTITION);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2536;
				this.match(CqlParser.K_KEY);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2537;
				this.match(CqlParser.K_LEVEL);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2538;
				this.match(CqlParser.K_USERS);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2539;
				this.match(CqlParser.K_USER);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2540;
				this.match(CqlParser.K_ROLE);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2541;
				this.match(CqlParser.K_ROLES);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2542;
				this.match(CqlParser.K_INPUT);
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, CqlParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2545;
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
		this.enterRule(_localctx, 388, CqlParser.RULE_language);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2547;
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
		this.enterRule(_localctx, 390, CqlParser.RULE_user);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2549;
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
		this.enterRule(_localctx, 392, CqlParser.RULE_password);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2551;
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
		this.enterRule(_localctx, 394, CqlParser.RULE_hashKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2553;
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
		this.enterRule(_localctx, 396, CqlParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2555;
			this.paramName();
			this.state = 2556;
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
		this.enterRule(_localctx, 398, CqlParser.RULE_paramName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2558;
			_la = this._input.LA(1);
			if ( !(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CqlParser.K_DURABLE_WRITES - 53)) | (1 << (CqlParser.K_INITCOND - 53)) | (1 << (CqlParser.K_INPUT - 53)) | (1 << (CqlParser.K_KEY - 53)) | (1 << (CqlParser.K_LANGUAGE - 53)) | (1 << (CqlParser.K_LEVEL - 53)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (CqlParser.K_OPTIONS - 94)) | (1 << (CqlParser.K_PARTITION - 94)) | (1 << (CqlParser.K_PERMISSIONS - 94)) | (1 << (CqlParser.K_REPLICATION - 94)) | (1 << (CqlParser.K_TTL - 94)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (CqlParser.K_TYPE - 127)) | (1 << (CqlParser.K_ROLES - 127)) | (1 << (CqlParser.K_ROLE - 127)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (CqlParser.K_USERS - 162)) | (1 << (CqlParser.K_USER - 162)) | (1 << (CqlParser.OBJECT_NAME - 162)))) !== 0)) ) {
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
	public kwAdd(): KwAddContext {
		let _localctx: KwAddContext = new KwAddContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, CqlParser.RULE_kwAdd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2560;
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
		this.enterRule(_localctx, 402, CqlParser.RULE_kwAggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2562;
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
		this.enterRule(_localctx, 404, CqlParser.RULE_kwAll);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2564;
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
		this.enterRule(_localctx, 406, CqlParser.RULE_kwAllFunctions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2566;
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
		this.enterRule(_localctx, 408, CqlParser.RULE_kwAllKeyspaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2568;
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
		this.enterRule(_localctx, 410, CqlParser.RULE_kwAllRoles);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2570;
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
		this.enterRule(_localctx, 412, CqlParser.RULE_kwAllPermissions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2572;
			this.match(CqlParser.K_ALL);
			this.state = 2573;
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
		this.enterRule(_localctx, 414, CqlParser.RULE_kwAllow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2575;
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
		this.enterRule(_localctx, 416, CqlParser.RULE_kwAllowFiltering);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2577;
			this.match(CqlParser.K_ALLOW);
			this.state = 2578;
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
		this.enterRule(_localctx, 418, CqlParser.RULE_kwAlter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2580;
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
		this.enterRule(_localctx, 420, CqlParser.RULE_kwAnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2582;
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
		this.enterRule(_localctx, 422, CqlParser.RULE_kwApply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2584;
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
		this.enterRule(_localctx, 424, CqlParser.RULE_kwAs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2586;
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
		this.enterRule(_localctx, 426, CqlParser.RULE_kwAsc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2588;
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
		this.enterRule(_localctx, 428, CqlParser.RULE_kwAuthorize);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2590;
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
		this.enterRule(_localctx, 430, CqlParser.RULE_kwBatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2592;
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
		this.enterRule(_localctx, 432, CqlParser.RULE_kwBegin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2594;
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
		this.enterRule(_localctx, 434, CqlParser.RULE_kwBy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2596;
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
		this.enterRule(_localctx, 436, CqlParser.RULE_kwCalled);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2598;
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
		this.enterRule(_localctx, 438, CqlParser.RULE_kwClustering);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2600;
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
		this.enterRule(_localctx, 440, CqlParser.RULE_kwCompact);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2602;
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
		this.enterRule(_localctx, 442, CqlParser.RULE_kwContains);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2604;
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
		this.enterRule(_localctx, 444, CqlParser.RULE_kwContainsKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2606;
			this.match(CqlParser.K_CONTAINS);
			this.state = 2607;
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
		this.enterRule(_localctx, 446, CqlParser.RULE_kwCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2609;
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
		this.enterRule(_localctx, 448, CqlParser.RULE_kwDelete);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2611;
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
		this.enterRule(_localctx, 450, CqlParser.RULE_kwDesc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2613;
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
		this.enterRule(_localctx, 452, CqlParser.RULE_kwDescibe);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2615;
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
		this.enterRule(_localctx, 454, CqlParser.RULE_kwDistinct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2617;
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
		this.enterRule(_localctx, 456, CqlParser.RULE_kwDrop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2619;
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
		this.enterRule(_localctx, 458, CqlParser.RULE_kwDurableWrites);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2621;
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
		this.enterRule(_localctx, 460, CqlParser.RULE_kwEntries);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2623;
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
		this.enterRule(_localctx, 462, CqlParser.RULE_kwExecute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2625;
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
		this.enterRule(_localctx, 464, CqlParser.RULE_kwExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2627;
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
		this.enterRule(_localctx, 466, CqlParser.RULE_kwFiltering);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2629;
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
		this.enterRule(_localctx, 468, CqlParser.RULE_kwFinalfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2631;
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
		this.enterRule(_localctx, 470, CqlParser.RULE_kwFrom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2633;
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
		this.enterRule(_localctx, 472, CqlParser.RULE_kwFull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2635;
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
		this.enterRule(_localctx, 474, CqlParser.RULE_kwFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2637;
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
		this.enterRule(_localctx, 476, CqlParser.RULE_kwGrant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2639;
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
		this.enterRule(_localctx, 478, CqlParser.RULE_kwIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2641;
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
		this.enterRule(_localctx, 480, CqlParser.RULE_kwIn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2643;
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
		this.enterRule(_localctx, 482, CqlParser.RULE_kwIndex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2645;
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
		this.enterRule(_localctx, 484, CqlParser.RULE_kwInitcond);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2647;
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
		this.enterRule(_localctx, 486, CqlParser.RULE_kwInput);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2649;
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
	public kwInsertInto(): KwInsertIntoContext {
		let _localctx: KwInsertIntoContext = new KwInsertIntoContext(this._ctx, this.state);
		this.enterRule(_localctx, 488, CqlParser.RULE_kwInsertInto);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2651;
			this.match(CqlParser.K_INSERT);
			this.state = 2652;
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
		this.enterRule(_localctx, 490, CqlParser.RULE_kwIs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2654;
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
		this.enterRule(_localctx, 492, CqlParser.RULE_kwKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2656;
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
		this.enterRule(_localctx, 494, CqlParser.RULE_kwKeys);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2658;
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
		this.enterRule(_localctx, 496, CqlParser.RULE_kwKeyspace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2660;
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
		this.enterRule(_localctx, 498, CqlParser.RULE_kwLanguage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2662;
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
		this.enterRule(_localctx, 500, CqlParser.RULE_kwLimit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2664;
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
		this.enterRule(_localctx, 502, CqlParser.RULE_kwList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2666;
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
		this.enterRule(_localctx, 504, CqlParser.RULE_kwListRoles);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2668;
			this.match(CqlParser.K_LIST);
			this.state = 2669;
			this.match(CqlParser.K_ROLES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwListUsers(): KwListUsersContext {
		let _localctx: KwListUsersContext = new KwListUsersContext(this._ctx, this.state);
		this.enterRule(_localctx, 506, CqlParser.RULE_kwListUsers);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2671;
			this.match(CqlParser.K_LIST);
			this.state = 2672;
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
	public kwLogged(): KwLoggedContext {
		let _localctx: KwLoggedContext = new KwLoggedContext(this._ctx, this.state);
		this.enterRule(_localctx, 508, CqlParser.RULE_kwLogged);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2674;
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
		this.enterRule(_localctx, 510, CqlParser.RULE_kwLogin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2676;
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
	public kwMaterializedView(): KwMaterializedViewContext {
		let _localctx: KwMaterializedViewContext = new KwMaterializedViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 512, CqlParser.RULE_kwMaterializedView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2678;
			this.match(CqlParser.K_MATERIALIZED);
			this.state = 2679;
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
	public kwModify(): KwModifyContext {
		let _localctx: KwModifyContext = new KwModifyContext(this._ctx, this.state);
		this.enterRule(_localctx, 514, CqlParser.RULE_kwModify);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2681;
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
		this.enterRule(_localctx, 516, CqlParser.RULE_kwNosuperuser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2683;
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
		this.enterRule(_localctx, 518, CqlParser.RULE_kwNorecursive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2685;
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
		this.enterRule(_localctx, 520, CqlParser.RULE_kwNot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2687;
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
		this.enterRule(_localctx, 522, CqlParser.RULE_kwNull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2689;
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
		this.enterRule(_localctx, 524, CqlParser.RULE_kwOf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2691;
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
		this.enterRule(_localctx, 526, CqlParser.RULE_kwOn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2693;
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
		this.enterRule(_localctx, 528, CqlParser.RULE_kwOptions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2695;
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
		this.enterRule(_localctx, 530, CqlParser.RULE_kwOr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2697;
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
		this.enterRule(_localctx, 532, CqlParser.RULE_kwOrder);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2699;
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
		this.enterRule(_localctx, 534, CqlParser.RULE_kwOrderBy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2701;
			this.match(CqlParser.K_ORDER);
			this.state = 2702;
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
		this.enterRule(_localctx, 536, CqlParser.RULE_kwPartition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2704;
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
		this.enterRule(_localctx, 538, CqlParser.RULE_kwPassword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2706;
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
		this.enterRule(_localctx, 540, CqlParser.RULE_kwPermissions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2708;
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
		this.enterRule(_localctx, 542, CqlParser.RULE_kwPrimary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2710;
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
		this.enterRule(_localctx, 544, CqlParser.RULE_kwRename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2712;
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
		this.enterRule(_localctx, 546, CqlParser.RULE_kwReplace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2714;
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
		this.enterRule(_localctx, 548, CqlParser.RULE_kwReplication);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2716;
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
		this.enterRule(_localctx, 550, CqlParser.RULE_kwReturns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2718;
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
		this.enterRule(_localctx, 552, CqlParser.RULE_kwRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2720;
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
		this.enterRule(_localctx, 554, CqlParser.RULE_kwSelect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2722;
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
		this.enterRule(_localctx, 556, CqlParser.RULE_kwSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2724;
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
		this.enterRule(_localctx, 558, CqlParser.RULE_kwSfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2726;
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
		this.enterRule(_localctx, 560, CqlParser.RULE_kwStatic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2728;
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
		this.enterRule(_localctx, 562, CqlParser.RULE_kwStorage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2730;
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
		this.enterRule(_localctx, 564, CqlParser.RULE_kwStype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2732;
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
		this.enterRule(_localctx, 566, CqlParser.RULE_kwSuperuser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2734;
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
		this.enterRule(_localctx, 568, CqlParser.RULE_kwTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2736;
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
		this.enterRule(_localctx, 570, CqlParser.RULE_kwTimestamp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2738;
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
		this.enterRule(_localctx, 572, CqlParser.RULE_kwTo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2740;
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
	public kwToken(): KwTokenContext {
		let _localctx: KwTokenContext = new KwTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 574, CqlParser.RULE_kwToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2742;
			this.match(CqlParser.K_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 576, CqlParser.RULE_kwTrigger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2744;
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
		this.enterRule(_localctx, 578, CqlParser.RULE_kwTruncate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2746;
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
		this.enterRule(_localctx, 580, CqlParser.RULE_kwTtl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2748;
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
		this.enterRule(_localctx, 582, CqlParser.RULE_kwType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2750;
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
		this.enterRule(_localctx, 584, CqlParser.RULE_kwUnlogged);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2752;
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
		this.enterRule(_localctx, 586, CqlParser.RULE_kwUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2754;
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
		this.enterRule(_localctx, 588, CqlParser.RULE_kwUse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2756;
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
		this.enterRule(_localctx, 590, CqlParser.RULE_kwUser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2758;
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
		this.enterRule(_localctx, 592, CqlParser.RULE_kwUsers);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2760;
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
		this.enterRule(_localctx, 594, CqlParser.RULE_kwUsing);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2762;
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
		this.enterRule(_localctx, 596, CqlParser.RULE_kwValues);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2764;
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
	public kwWhere(): KwWhereContext {
		let _localctx: KwWhereContext = new KwWhereContext(this._ctx, this.state);
		this.enterRule(_localctx, 598, CqlParser.RULE_kwWhere);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2766;
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
		this.enterRule(_localctx, 600, CqlParser.RULE_kwWith);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2768;
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
		this.enterRule(_localctx, 602, CqlParser.RULE_kwRevoke);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2770;
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
		this.enterRule(_localctx, 604, CqlParser.RULE_dataTypeAscii);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2772;
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
		this.enterRule(_localctx, 606, CqlParser.RULE_dataTypeBigint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2774;
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
		this.enterRule(_localctx, 608, CqlParser.RULE_dataTypeBlob);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2776;
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
		this.enterRule(_localctx, 610, CqlParser.RULE_dataTypeBoolean);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2778;
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
		this.enterRule(_localctx, 612, CqlParser.RULE_dataTypeCounter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2780;
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
		this.enterRule(_localctx, 614, CqlParser.RULE_dataTypeDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2782;
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
		this.enterRule(_localctx, 616, CqlParser.RULE_dataTypeDecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2784;
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
		this.enterRule(_localctx, 618, CqlParser.RULE_dataTypeDouble);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2786;
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
		this.enterRule(_localctx, 620, CqlParser.RULE_dataTypeFloat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2788;
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
		this.enterRule(_localctx, 622, CqlParser.RULE_dataTypeFrozen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2790;
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
		this.enterRule(_localctx, 624, CqlParser.RULE_dataTypeInet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2792;
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
		this.enterRule(_localctx, 626, CqlParser.RULE_dataTypeInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2794;
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
		this.enterRule(_localctx, 628, CqlParser.RULE_dataTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2796;
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
		this.enterRule(_localctx, 630, CqlParser.RULE_dataTypeMap);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2798;
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
		this.enterRule(_localctx, 632, CqlParser.RULE_dataTypeSmallInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2800;
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
		this.enterRule(_localctx, 634, CqlParser.RULE_dataTypeSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2802;
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
		this.enterRule(_localctx, 636, CqlParser.RULE_dataTypeText);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2804;
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
		this.enterRule(_localctx, 638, CqlParser.RULE_dataTypeTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2806;
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
		this.enterRule(_localctx, 640, CqlParser.RULE_dataTypeTimeUuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2808;
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
		this.enterRule(_localctx, 642, CqlParser.RULE_dataTypeTimestamp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2810;
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
		this.enterRule(_localctx, 644, CqlParser.RULE_dataTypeTinyInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2812;
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
		this.enterRule(_localctx, 646, CqlParser.RULE_dataTypeTuple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2814;
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
		this.enterRule(_localctx, 648, CqlParser.RULE_dataTypeUserDefined);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2816;
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
		this.enterRule(_localctx, 650, CqlParser.RULE_dataTypeUuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2818;
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
		this.enterRule(_localctx, 652, CqlParser.RULE_dataTypeVarChar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2820;
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
		this.enterRule(_localctx, 654, CqlParser.RULE_dataTypeVarInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2822;
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
		this.enterRule(_localctx, 656, CqlParser.RULE_dataTypeStructure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2824;
			this.syntaxBracketLa();
			this.state = 2825;
			this.dataType();
			this.state = 2831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 2826;
				this.syntaxComma();
				this.state = 2827;
				this.dataType();
				}
				}
				this.state = 2833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2834;
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
		this.enterRule(_localctx, 658, CqlParser.RULE_specialStar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2836;
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
		this.enterRule(_localctx, 660, CqlParser.RULE_specialDot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2838;
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
		this.enterRule(_localctx, 662, CqlParser.RULE_eof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2840;
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
		this.enterRule(_localctx, 664, CqlParser.RULE_syntaxBracketLr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2842;
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
		this.enterRule(_localctx, 666, CqlParser.RULE_syntaxBracketRr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2844;
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
		this.enterRule(_localctx, 668, CqlParser.RULE_syntaxBracketLc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2846;
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
		this.enterRule(_localctx, 670, CqlParser.RULE_syntaxBracketRc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2848;
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
		this.enterRule(_localctx, 672, CqlParser.RULE_syntaxBracketLa);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2850;
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
		this.enterRule(_localctx, 674, CqlParser.RULE_syntaxBracketRa);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2852;
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
		this.enterRule(_localctx, 676, CqlParser.RULE_syntaxBracketLs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2854;
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
		this.enterRule(_localctx, 678, CqlParser.RULE_syntaxBracketRs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2856;
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
		this.enterRule(_localctx, 680, CqlParser.RULE_syntaxComma);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2858;
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
		this.enterRule(_localctx, 682, CqlParser.RULE_syntaxColon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2860;
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
		this.enterRule(_localctx, 684, CqlParser.RULE_syntaxPlus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2862;
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
		this.enterRule(_localctx, 686, CqlParser.RULE_syntaxMinus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2864;
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
		this.enterRule(_localctx, 688, CqlParser.RULE_syntaxSquote);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2866;
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
		this.enterRule(_localctx, 690, CqlParser.RULE_syntaxDquote);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2868;
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
		this.enterRule(_localctx, 692, CqlParser.RULE_syntaxOperatorEq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2870;
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
		this.enterRule(_localctx, 694, CqlParser.RULE_syntaxOperatorLt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2872;
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
		this.enterRule(_localctx, 696, CqlParser.RULE_syntaxOperatorGt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2874;
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
		this.enterRule(_localctx, 698, CqlParser.RULE_syntaxOperatorLte);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2876;
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
		this.enterRule(_localctx, 700, CqlParser.RULE_syntaxOperatorGte);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2878;
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

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\xB2\u0B43\x04"+
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
		"\u0143\t\u0143\x04\u0144\t\u0144\x04\u0145\t\u0145\x04\u0146\t\u0146\x04"+
		"\u0147\t\u0147\x04\u0148\t\u0148\x04\u0149\t\u0149\x04\u014A\t\u014A\x04"+
		"\u014B\t\u014B\x04\u014C\t\u014C\x04\u014D\t\u014D\x04\u014E\t\u014E\x04"+
		"\u014F\t\u014F\x04\u0150\t\u0150\x04\u0151\t\u0151\x04\u0152\t\u0152\x04"+
		"\u0153\t\u0153\x04\u0154\t\u0154\x04\u0155\t\u0155\x04\u0156\t\u0156\x04"+
		"\u0157\t\u0157\x04\u0158\t\u0158\x04\u0159\t\u0159\x04\u015A\t\u015A\x04"+
		"\u015B\t\u015B\x04\u015C\t\u015C\x04\u015D\t\u015D\x04\u015E\t\u015E\x04"+
		"\u015F\t\u015F\x04\u0160\t\u0160\x03\x02\x05\x02\u02C2\n\x02\x03\x02\x05"+
		"\x02\u02C5\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u02CB\n\x03\x03"+
		"\x03\x03\x03\x03\x03\x07\x03\u02D0\n\x03\f\x03\x0E\x03\u02D3\v\x03\x03"+
		"\x03\x03\x03\x05\x03\u02D7\n\x03\x03\x03\x05\x03\u02DA\n\x03\x03\x03\x05"+
		"\x03\u02DD\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06"+
		"\u0309\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03"+
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\t\u0318\n\t\x03\t\x05\t\u031B\n\t"+
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0322\n\n\x03\n\x03\n\x03\n\x05\n"+
		"\u0327\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x05\f"+
		"\u0332\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u033C"+
		"\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r"+
		"\u0348\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0351\n\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0358\n\r\x03\x0E\x03\x0E\x03\x0E\x05"+
		"\x0E\u035D\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E"+
		"\u0365\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u036A\n\x0F\x03\x0F\x03\x0F"+
		"\x05\x0F\u036E\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0373\n\x10\x03\x10"+
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11"+
		"\x03\x11\x07\x11\u0380\n\x11\f\x11\x0E\x11\u0383\v\x11\x03\x12\x03\x12"+
		"\x03\x12\x05\x12\u0388\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03"+
		"\x13\x03\x13\x05\x13\u0391\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13"+
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u039E\n\x13\x03"+
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u03A5\n\x14\x03\x15\x03\x15"+
		"\x03\x15\x03\x15\x07\x15\u03AB\n\x15\f\x15\x0E\x15\u03AE\v\x15\x03\x16"+
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17"+
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u03BF\n\x17\x03\x18\x03"+
		"\x18\x03\x18\x05\x18\u03C4\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18"+
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u03D0\n\x18\x03\x19\x03"+
		"\x19\x05\x19\u03D4\n\x19\x03\x19\x03\x19\x05\x19\u03D8\n\x19\x03\x19\x03"+
		"\x19\x03\x19\x05\x19\u03DD\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19"+
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B"+
		"\x03\x1B\x07\x1B\u03EE\n\x1B\f\x1B\x0E\x1B\u03F1\v\x1B\x03\x1C\x03\x1C"+
		"\x03\x1C\x03\x1C\x05\x1C\u03F7\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1D\x03\x1D\x05\x1D\u03FF\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0403\n\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0416"+
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u041D\n\x1F\f\x1F"+
		"\x0E\x1F\u0420\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03"+
		"!\x03!\x03!\x03!\x07!\u042E\n!\f!\x0E!\u0431\v!\x03!\x03!\x03\"\x03\""+
		"\x03\"\x03\"\x03\"\x07\"\u043A\n\"\f\"\x0E\"\u043D\v\"\x03\"\x03\"\x03"+
		"#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u044A\n$\x03%\x03%\x03"+
		"%\x03&\x03&\x05&\u0451\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x05(\u0459"+
		"\n(\x03(\x05(\u045C\n(\x03(\x05(\u045F\n(\x03)\x03)\x03)\x03*\x03*\x03"+
		"*\x03*\x07*\u0468\n*\f*\x0E*\u046B\v*\x03+\x03+\x03+\x03+\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x07,\u0478\n,\f,\x0E,\u047B\v,\x03-\x03-\x03-\x03"+
		"-\x03-\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05"+
		"/\u048E\n/\x030\x030\x030\x031\x031\x031\x031\x031\x032\x032\x032\x03"+
		"2\x033\x033\x033\x034\x034\x034\x034\x074\u04A3\n4\f4\x0E4\u04A6\v4\x03"+
		"5\x035\x035\x036\x036\x036\x036\x036\x036\x076\u04B1\n6\f6\x0E6\u04B4"+
		"\v6\x037\x037\x037\x037\x057\u04BA\n7\x038\x038\x038\x038\x038\x078\u04C1"+
		"\n8\f8\x0E8\u04C4\v8\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03"+
		"9\x039\x039\x039\x039\x039\x039\x059\u04D6\n9\x03:\x03:\x03:\x03:\x03"+
		":\x03:\x05:\u04DE\n:\x03;\x03;\x03;\x05;\u04E3\n;\x03;\x03;\x03<\x03<"+
		"\x03<\x05<\u04EA\n<\x03<\x03<\x03=\x03=\x03=\x05=\u04F1\n=\x03=\x03=\x03"+
		">\x03>\x03>\x05>\u04F8\n>\x03>\x03>\x03?\x03?\x03?\x05?\u04FF\n?\x03?"+
		"\x03?\x03@\x03@\x03@\x05@\u0506\n@\x03@\x03@\x03@\x03@\x03A\x03A\x03A"+
		"\x05A\u050F\nA\x03A\x03A\x03B\x03B\x03B\x05B\u0516\nB\x03B\x03B\x03C\x03"+
		"C\x03C\x05C\u051D\nC\x03C\x03C\x03D\x03D\x03D\x05D\u0524\nD\x03D\x03D"+
		"\x03E\x03E\x03E\x05E\u052B\nE\x03E\x03E\x03E\x05E\u0530\nE\x03F\x03F\x03"+
		"F\x03F\x03F\x05F\u0537\nF\x03G\x03G\x03G\x03G\x03G\x05G\u053E\nG\x03G"+
		"\x03G\x05G\u0542\nG\x03G\x03G\x03G\x05G\u0547\nG\x05G\u0549\nG\x03H\x03"+
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x07H\u0553\nH\fH\x0EH\u0556\vH\x03H\x03"+
		"H\x03I\x03I\x05I\u055C\nI\x03J\x03J\x03J\x03J\x07J\u0562\nJ\fJ\x0EJ\u0565"+
		"\vJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u056F\nK\x03L\x03L\x03"+
		"M\x03M\x05M\u0575\nM\x03N\x03N\x03N\x03N\x03N\x07N\u057C\nN\fN\x0EN\u057F"+
		"\vN\x03N\x03N\x03O\x03O\x03O\x03O\x03P\x03P\x03Q\x03Q\x05Q\u058B\nQ\x03"+
		"R\x03R\x03R\x03R\x07R\u0591\nR\fR\x0ER\u0594\vR\x03R\x03R\x03R\x05R\u0599"+
		"\nR\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u05A7"+
		"\nS\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u05AF\nT\x03U\x03U\x03U\x03U\x03"+
		"U\x03U\x03V\x03V\x03V\x05V\u05BA\nV\x03W\x03W\x03X\x03X\x03X\x03X\x03"+
		"Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u05CC\nY\x03Z\x03"+
		"Z\x03Z\x03Z\x07Z\u05D2\nZ\fZ\x0EZ\u05D5\vZ\x03[\x03[\x03[\x03[\x07[\u05DB"+
		"\n[\f[\x0E[\u05DE\v[\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x03]\x03]\x03"+
		"]\x03]\x03]\x05]\u05EC\n]\x03^\x03^\x05^\u05F0\n^\x03^\x03^\x05^\u05F4"+
		"\n^\x03_\x03_\x05_\u05F8\n_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03"+
		"`\x03`\x03`\x03`\x05`\u0606\n`\x03a\x03a\x03a\x03a\x07a\u060C\na\fa\x0E"+
		"a\u060F\va\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u0617\nb\x03c\x03c\x03c"+
		"\x03c\x03d\x03d\x03d\x03e\x03e\x05e\u0622\ne\x03e\x03e\x03f\x03f\x03f"+
		"\x05f\u0629\nf\x03f\x05f\u062C\nf\x03f\x03f\x03f\x03g\x03g\x03g\x03g\x05"+
		"g\u0635\ng\x03h\x03h\x05h\u0639\nh\x03i\x03i\x03i\x03i\x03i\x05i\u0640"+
		"\ni\x03j\x03j\x03j\x03j\x03j\x05j\u0647\nj\x03k\x03k\x03k\x03k\x05k\u064D"+
		"\nk\x03k\x03k\x03l\x03l\x03l\x03l\x05l\u0655\nl\x03l\x03l\x03m\x03m\x03"+
		"m\x03m\x05m\u065D\nm\x03m\x03m\x03n\x03n\x05n\u0663\nn\x03n\x03n\x05n"+
		"\u0667\nn\x03n\x03n\x05n\u066B\nn\x03n\x03n\x05n\u066F\nn\x03o\x03o\x03"+
		"o\x03o\x07o\u0675\no\fo\x0Eo\u0678\vo\x03p\x03p\x03p\x03p\x03p\x05p\u067F"+
		"\np\x03p\x03p\x05p\u0683\np\x03q\x03q\x03q\x05q\u0688\nq\x03q\x03q\x03"+
		"q\x05q\u068D\nq\x03q\x03q\x05q\u0691\nq\x03r\x03r\x03r\x03s\x03s\x03s"+
		"\x03s\x07s\u069A\ns\fs\x0Es\u069D\vs\x03t\x03t\x03t\x03t\x03u\x03u\x03"+
		"u\x03u\x03u\x07u\u06A8\nu\fu\x0Eu\u06AB\vu\x03u\x05u\u06AE\nu\x03v\x03"+
		"v\x03v\x03v\x05v\u06B4\nv\x03v\x03v\x03v\x03v\x03v\x05v\u06BB\nv\x03v"+
		"\x03v\x03v\x03v\x03v\x03v\x03v\x05v\u06C4\nv\x03v\x03v\x03v\x03v\x03v"+
		"\x03v\x03v\x05v\u06CD\nv\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x05v\u06D6"+
		"\nv\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x05v\u06DF\nv\x03v\x03v\x03v\x03"+
		"v\x03v\x03v\x03v\x05v\u06E8\nv\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x05"+
		"v\u06F1\nv\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x05v\u06FD"+
		"\nv\x03w\x03w\x03w\x03w\x03w\x07w\u0704\nw\fw\x0Ew\u0707\vw\x03w\x03w"+
		"\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x07x\u0714\nx\fx\x0Ex\u0717"+
		"\vx\x03x\x03x\x03y\x03y\x03y\x03y\x03y\x07y\u0720\ny\fy\x0Ey\u0723\vy"+
		"\x03y\x03y\x03z\x03z\x03z\x03z\x03z\x03z\x05z\u072D\nz\x03z\x05z\u0730"+
		"\nz\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03"+
		"{\x03{\x03{\x05{\u0742\n{\x03|\x03|\x03|\x03}\x03}\x03}\x03~\x03~\x03"+
		"~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x03\x81\x03"+
		"\x81\x03\x81\x03\x81\x03\x81\x05\x81\u0759\n\x81\x03\x81\x05\x81\u075C"+
		"\n\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u0763\n\x82\x03"+
		"\x83\x03\x83\x03\x83\x03\x83\x05\x83\u0769\n\x83\x07\x83\u076B\n\x83\f"+
		"\x83\x0E\x83\u076E\v\x83\x03\x83\x05\x83\u0771\n\x83\x03\x84\x03\x84\x03"+
		"\x84\x03\x84\x05\x84\u0777\n\x84\x07\x84\u0779\n\x84\f\x84\x0E\x84\u077C"+
		"\v\x84\x03\x84\x05\x84\u077F\n\x84\x03\x85\x03\x85\x03\x85\x03\x85\x07"+
		"\x85\u0785\n\x85\f\x85\x0E\x85\u0788\v\x85\x03\x86\x03\x86\x05\x86\u078C"+
		"\n\x86\x03\x86\x05\x86\u078F\n\x86\x03\x87\x03\x87\x05\x87\u0793\n\x87"+
		"\x03\x87\x03\x87\x03\x87\x05\x87\u0798\n\x87\x03\x87\x05\x87\u079B\n\x87"+
		"\x03\x87\x05\x87\u079E\n\x87\x03\x87\x05\x87\u07A1\n\x87\x03\x88\x03\x88"+
		"\x03\x88\x05\x88\u07A6\n\x88\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89\u07AC"+
		"\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u07B4\n"+
		"\x8B\x03\x8B\x05\x8B\u07B7\n\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D"+
		"\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u07C1\n\x8D\f\x8D\x0E\x8D\u07C4\v\x8D"+
		"\x03\x8D\x05\x8D\u07C7\n\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05"+
		"\x8E\u07CE\n\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u07D4\n\x8E\x03"+
		"\x8E\x05\x8E\u07D7\n\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x07\x8F\u07DD"+
		"\n\x8F\f\x8F\x0E\x8F\u07E0\v\x8F\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90"+
		"\x03\x90\x05\x90\u07E8\n\x90\x03\x91\x03\x91\x03\x91\x03\x91\x05\x91\u07EE"+
		"\n\x91\x03\x92\x03\x92\x03\x92\x03\x92\x05\x92\u07F4\n\x92\x03\x92\x03"+
		"\x92\x03\x93\x03\x93\x03\x93\x05\x93\u07FB\n\x93\x03\x93\x03\x93\x03\x94"+
		"\x03\x94\x03\x94\x05\x94\u0802\n\x94\x03\x94\x03\x94\x05\x94\u0806\n\x94"+
		"\x03\x94\x03\x94\x05\x94\u080A\n\x94\x03\x94\x05\x94\u080D\n\x94\x03\x95"+
		"\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x05\x95\u0817"+
		"\n\x95\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x05\x96"+
		"\u0820\n\x96\x03\x96\x05\x96\u0823\n\x96\x03\x97\x03\x97\x03\x97\x05\x97"+
		"\u0828\n\x97\x03\x97\x03\x97\x03\x97\x03\x97\x05\x97\u082E\n\x97\x07\x97"+
		"\u0830\n\x97\f\x97\x0E\x97\u0833\v\x97\x03\x98\x03\x98\x03\x98\x03\x98"+
		"\x03\x98\x03\x98\x03\x98\x05\x98\u083C\n\x98\x03\x99\x03\x99\x03\x99\x03"+
		"\x99\x03\x99\x05\x99\u0843\n\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9B"+
		"\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u084D\n\x9B\x03\x9C\x03\x9C\x03\x9C\x03"+
		"\x9C\x03\x9C\x07\x9C\u0854\n\x9C\f\x9C\x0E\x9C\u0857\v\x9C\x03\x9C\x03"+
		"\x9C\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x07\x9D\u0860\n\x9D\f\x9D"+
		"\x0E\x9D\u0863\v\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03"+
		"\x9E\x07\x9E\u086C\n\x9E\f\x9E\x0E\x9E\u086F\v\x9E\x03\x9E\x03\x9E\x03"+
		"\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x07\x9F\u0878\n\x9F\f\x9F\x0E\x9F"+
		"\u087B\v\x9F\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA2\x03"+
		"\xA2\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03"+
		"\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03"+
		"\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x05"+
		"\xA6\u089F\n\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7"+
		"\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7"+
		"\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x05\xA7\u08B5\n\xA7\x03\xA8\x03\xA8\x03"+
		"\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03"+
		"\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03"+
		"\xAA\x03\xAA\x03\xAA\x03\xAA\x05\xAA\u08CF\n\xAA\x03\xAB\x03\xAB\x03\xAB"+
		"\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB"+
		"\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x05\xAB"+
		"\u08E5\n\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03"+
		"\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03"+
		"\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x05\xAC\u08FC\n\xAC\x03\xAD\x03\xAD"+
		"\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x05\xAD"+
		"\u0908\n\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03"+
		"\xAE\x03\xAE\x03\xAE\x05\xAE\u0914\n\xAE\x03\xAF\x03\xAF\x03\xAF\x03\xAF"+
		"\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x05\xAF\u0920\n\xAF\x03"+
		"\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03"+
		"\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03"+
		"\xB0\x03\xB0\x05\xB0\u0936\n\xB0\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1"+
		"\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1"+
		"\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x05\xB1\u094C\n\xB1\x03"+
		"\xB2\x03\xB2";
	private static readonly _serializedATNSegment1: string =
		"\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x05\xB2"+
		"\u0958\n\xB2\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03"+
		"\xB3\x03\xB3\x03\xB3\x05\xB3\u0964\n\xB3\x03\xB4\x03\xB4\x03\xB4\x05\xB4"+
		"\u0969\n\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x05\xB5\u0971"+
		"\n\xB5\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x05\xB6\u0978\n\xB6\x03"+
		"\xB7\x03\xB7\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x05\xB8\u0981\n\xB8"+
		"\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9"+
		"\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9"+
		"\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x05\xB9\u0999\n\xB9\x03\xBA\x03\xBA\x05"+
		"\xBA\u099D\n\xBA\x03\xBB\x03\xBB\x03\xBB\x05\xBB\u09A2\n\xBB\x03\xBB\x03"+
		"\xBB\x03\xBB\x05\xBB\u09A7\n\xBB\x03\xBB\x03\xBB\x03\xBB\x05\xBB\u09AC"+
		"\n\xBB\x03\xBB\x03\xBB\x03\xBB\x05\xBB\u09B1\n\xBB\x03\xBB\x03\xBB\x03"+
		"\xBB\x05\xBB\u09B6\n\xBB\x05\xBB\u09B8\n\xBB\x03\xBC\x03\xBC\x03\xBC\x03"+
		"\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03"+
		"\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x05"+
		"\xBC\u09CF\n\xBC\x03\xBD\x03\xBD\x05\xBD\u09D3\n\xBD\x03\xBE\x03\xBE\x03"+
		"\xBF\x03\xBF\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC2\x03\xC2\x03\xC2\x03"+
		"\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03"+
		"\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x05"+
		"\xC2\u09F2\n\xC2\x03\xC3\x03\xC3\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x03\xC6"+
		"\x03\xC6\x03\xC7\x03\xC7\x03\xC8\x03\xC8\x03\xC8\x03\xC9\x03\xC9\x03\xCA"+
		"\x03\xCA\x03\xCB\x03\xCB\x03\xCC\x03\xCC\x03\xCD\x03\xCD\x03\xCE\x03\xCE"+
		"\x03\xCF\x03\xCF\x03\xD0\x03\xD0\x03\xD0\x03\xD1\x03\xD1\x03\xD2\x03\xD2"+
		"\x03\xD2\x03\xD3\x03\xD3\x03\xD4\x03\xD4\x03\xD5\x03\xD5\x03\xD6\x03\xD6"+
		"\x03\xD7\x03\xD7\x03\xD8\x03\xD8\x03\xD9\x03\xD9\x03\xDA\x03\xDA\x03\xDB"+
		"\x03\xDB\x03\xDC\x03\xDC\x03\xDD\x03\xDD\x03\xDE\x03\xDE\x03\xDF\x03\xDF"+
		"\x03\xE0\x03\xE0\x03\xE0\x03\xE1\x03\xE1\x03\xE2\x03\xE2\x03\xE3\x03\xE3"+
		"\x03\xE4\x03\xE4\x03\xE5\x03\xE5\x03\xE6\x03\xE6\x03\xE7\x03\xE7\x03\xE8"+
		"\x03\xE8\x03\xE9\x03\xE9\x03\xEA\x03\xEA\x03\xEB\x03\xEB\x03\xEC\x03\xEC"+
		"\x03\xED\x03\xED\x03\xEE\x03\xEE\x03\xEF\x03\xEF\x03\xF0\x03\xF0\x03\xF1"+
		"\x03\xF1\x03\xF2\x03\xF2\x03\xF3\x03\xF3\x03\xF4\x03\xF4\x03\xF5\x03\xF5"+
		"\x03\xF6\x03\xF6\x03\xF6\x03\xF7\x03\xF7\x03\xF8\x03\xF8\x03\xF9\x03\xF9"+
		"\x03\xFA\x03\xFA\x03\xFB\x03\xFB\x03\xFC\x03\xFC\x03\xFD\x03\xFD\x03\xFE"+
		"\x03\xFE\x03\xFE\x03\xFF\x03\xFF\x03\xFF\x03\u0100\x03\u0100\x03\u0101"+
		"\x03\u0101\x03\u0102\x03\u0102\x03\u0102\x03\u0103\x03\u0103\x03\u0104"+
		"\x03\u0104\x03\u0105\x03\u0105\x03\u0106\x03\u0106\x03\u0107\x03\u0107"+
		"\x03\u0108\x03\u0108\x03\u0109\x03\u0109\x03\u010A\x03\u010A\x03\u010B"+
		"\x03\u010B\x03\u010C\x03\u010C\x03\u010D\x03\u010D\x03\u010D\x03\u010E"+
		"\x03\u010E\x03\u010F\x03\u010F\x03\u0110\x03\u0110\x03\u0111\x03\u0111"+
		"\x03\u0112\x03\u0112\x03\u0113\x03\u0113\x03\u0114\x03\u0114\x03\u0115"+
		"\x03\u0115\x03\u0116\x03\u0116\x03\u0117\x03\u0117\x03\u0118\x03\u0118"+
		"\x03\u0119\x03\u0119\x03\u011A\x03\u011A\x03\u011B\x03\u011B\x03\u011C"+
		"\x03\u011C\x03\u011D\x03\u011D\x03\u011E\x03\u011E\x03\u011F\x03\u011F"+
		"\x03\u0120\x03\u0120\x03\u0121\x03\u0121\x03\u0122\x03\u0122\x03\u0123"+
		"\x03\u0123\x03\u0124\x03\u0124\x03\u0125\x03\u0125\x03\u0126\x03\u0126"+
		"\x03\u0127\x03\u0127\x03\u0128\x03\u0128\x03\u0129\x03\u0129\x03\u012A"+
		"\x03\u012A\x03\u012B\x03\u012B\x03\u012C\x03\u012C\x03\u012D\x03\u012D"+
		"\x03\u012E\x03\u012E\x03\u012F\x03\u012F\x03\u0130\x03\u0130\x03\u0131"+
		"\x03\u0131\x03\u0132\x03\u0132\x03\u0133\x03\u0133\x03\u0134\x03\u0134"+
		"\x03\u0135\x03\u0135\x03\u0136\x03\u0136\x03\u0137\x03\u0137\x03\u0138"+
		"\x03\u0138\x03\u0139\x03\u0139\x03\u013A\x03\u013A\x03\u013B\x03\u013B"+
		"\x03\u013C\x03\u013C\x03\u013D\x03\u013D\x03\u013E\x03\u013E\x03\u013F"+
		"\x03\u013F\x03\u0140\x03\u0140\x03\u0141\x03\u0141\x03\u0142\x03\u0142"+
		"\x03\u0143\x03\u0143\x03\u0144\x03\u0144\x03\u0145\x03\u0145\x03\u0146"+
		"\x03\u0146\x03\u0147\x03\u0147\x03\u0148\x03\u0148\x03\u0149\x03\u0149"+
		"\x03\u014A\x03\u014A\x03\u014A\x03\u014A\x03\u014A\x07\u014A\u0B10\n\u014A"+
		"\f\u014A\x0E\u014A\u0B13\v\u014A\x03\u014A\x03\u014A\x03\u014B\x03\u014B"+
		"\x03\u014C\x03\u014C\x03\u014D\x03\u014D\x03\u014E\x03\u014E\x03\u014F"+
		"\x03\u014F\x03\u0150\x03\u0150\x03\u0151\x03\u0151\x03\u0152\x03\u0152"+
		"\x03\u0153\x03\u0153\x03\u0154\x03\u0154\x03\u0155\x03\u0155\x03\u0156"+
		"\x03\u0156\x03\u0157\x03\u0157\x03\u0158\x03\u0158\x03\u0159\x03\u0159"+
		"\x03\u015A\x03\u015A\x03\u015B\x03\u015B\x03\u015C\x03\u015C\x03\u015D"+
		"\x03\u015D\x03\u015E\x03\u015E\x03\u015F\x03\u015F\x03\u0160\x03\u0160"+
		"\x03\u0160\x02\x02\x02\u0161\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02"+
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02"+
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02"+
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02"+
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02"+
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02"+
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02"+
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02"+
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02"+
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02"+
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02"+
		"\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02"+
		"\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02"+
		"\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02"+
		"\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02"+
		"\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02"+
		"\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02"+
		"\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02"+
		"\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02"+
		"\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02"+
		"\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02"+
		"\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02"+
		"\u0184\x02\u0186\x02\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02"+
		"\u0192\x02\u0194\x02\u0196\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02"+
		"\u01A0\x02\u01A2\x02\u01A4\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02"+
		"\u01AE\x02\u01B0\x02\u01B2\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA\x02"+
		"\u01BC\x02\u01BE\x02\u01C0\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8\x02"+
		"\u01CA\x02\u01CC\x02\u01CE\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6\x02"+
		"\u01D8\x02\u01DA\x02\u01DC\x02\u01DE\x02\u01E0\x02\u01E2\x02\u01E4\x02"+
		"\u01E6\x02\u01E8\x02\u01EA\x02\u01EC\x02\u01EE\x02\u01F0\x02\u01F2\x02"+
		"\u01F4\x02\u01F6\x02\u01F8\x02\u01FA\x02\u01FC\x02\u01FE\x02\u0200\x02"+
		"\u0202\x02\u0204\x02\u0206\x02\u0208\x02\u020A\x02\u020C\x02\u020E\x02"+
		"\u0210\x02\u0212\x02\u0214\x02\u0216\x02\u0218\x02\u021A\x02\u021C\x02"+
		"\u021E\x02\u0220\x02\u0222\x02\u0224\x02\u0226\x02\u0228\x02\u022A\x02"+
		"\u022C\x02\u022E\x02\u0230\x02\u0232\x02\u0234\x02\u0236\x02\u0238\x02"+
		"\u023A\x02\u023C\x02\u023E\x02\u0240\x02\u0242\x02\u0244\x02\u0246\x02"+
		"\u0248\x02\u024A\x02\u024C\x02\u024E\x02\u0250\x02\u0252\x02\u0254\x02"+
		"\u0256\x02\u0258\x02\u025A\x02\u025C\x02\u025E\x02\u0260\x02\u0262\x02"+
		"\u0264\x02\u0266\x02\u0268\x02\u026A\x02\u026C\x02\u026E\x02\u0270\x02"+
		"\u0272\x02\u0274\x02\u0276\x02\u0278\x02\u027A\x02\u027C\x02\u027E\x02"+
		"\u0280\x02\u0282\x02\u0284\x02\u0286\x02\u0288\x02\u028A\x02\u028C\x02"+
		"\u028E\x02\u0290\x02\u0292\x02\u0294\x02\u0296\x02\u0298\x02\u029A\x02"+
		"\u029C\x02\u029E\x02\u02A0\x02\u02A2\x02\u02A4\x02\u02A6\x02\u02A8\x02"+
		"\u02AA\x02\u02AC\x02\u02AE\x02\u02B0\x02\u02B2\x02\u02B4\x02\u02B6\x02"+
		"\u02B8\x02\u02BA\x02\u02BC\x02\u02BE\x02\x02\x06\x03\x02\xA8\xA9\x04\x02"+
		"<<}}\x0F\x0277GGLLOP``ccggll\x7F\x7F\x81\x81\x98\x99\xA4\xA5\xAC\xAC\x0F"+
		"\x0277GHLLOP``ccggll\x7F\x7F\x81\x81\x98\x99\xA4\xA5\xAC\xAC\u0BBC\x02"+
		"\u02C1\x03\x02\x02\x02\x04\u02D1\x03\x02\x02\x02\x06\u02DE\x03\x02\x02"+
		"\x02\b\u02E0\x03\x02\x02\x02\n\u0308\x03\x02\x02\x02\f\u030A\x03\x02\x02"+
		"\x02\x0E\u0311\x03\x02\x02\x02\x10\u0313\x03\x02\x02\x02\x12\u031C\x03"+
		"\x02\x02\x02\x14\u0328\x03\x02\x02\x02\x16\u033B\x03\x02\x02\x02\x18\u0357"+
		"\x03\x02\x02\x02\x1A\u0359\x03\x02\x02\x02\x1C\u0366\x03\x02\x02\x02\x1E"+
		"\u036F\x03\x02\x02\x02 \u0379\x03\x02\x02\x02\"\u0384\x03\x02\x02\x02"+
		"$\u038D\x03\x02\x02\x02&\u039F\x03\x02\x02\x02(\u03A6\x03\x02\x02\x02"+
		"*\u03AF\x03\x02\x02\x02,\u03BE\x03\x02\x02\x02.\u03C0\x03\x02\x02\x02"+
		"0\u03D1\x03\x02\x02\x022\u03E7\x03\x02\x02\x024\u03E9\x03\x02\x02\x02"+
		"6\u03F6\x03\x02\x02\x028\u03FC\x03\x02\x02\x02:\u0415\x03\x02\x02\x02"+
		"<\u0417\x03\x02\x02\x02>\u0423\x03\x02\x02\x02@\u0427\x03\x02\x02\x02"+
		"B\u0434\x03\x02\x02\x02D\u0440\x03\x02\x02\x02F\u0443\x03\x02\x02\x02"+
		"H\u044B\x03\x02\x02\x02J\u0450\x03\x02\x02\x02L\u0452\x03\x02\x02\x02"+
		"N\u0458\x03\x02\x02\x02P\u0460\x03\x02\x02\x02R\u0463\x03\x02\x02\x02"+
		"T\u046C\x03\x02\x02\x02V\u0470\x03\x02\x02\x02X\u047C\x03\x02\x02\x02"+
		"Z\u0481\x03\x02\x02\x02\\\u048D\x03\x02\x02\x02^\u048F\x03\x02\x02\x02"+
		"`\u0492\x03\x02\x02\x02b\u0497\x03\x02\x02\x02d\u049B\x03\x02\x02\x02"+
		"f\u049E\x03\x02\x02\x02h\u04A7\x03\x02\x02\x02j\u04AA\x03\x02\x02\x02"+
		"l\u04B5\x03\x02\x02\x02n\u04BB\x03\x02\x02\x02p\u04D5\x03\x02\x02\x02"+
		"r\u04D7\x03\x02\x02\x02t\u04DF\x03\x02\x02\x02v\u04E6\x03\x02\x02\x02"+
		"x\u04ED\x03\x02\x02\x02z\u04F4\x03\x02\x02\x02|\u04FB\x03\x02\x02\x02"+
		"~\u0502\x03\x02\x02\x02\x80\u050B\x03\x02\x02\x02\x82\u0512\x03\x02\x02"+
		"\x02\x84\u0519\x03\x02\x02\x02\x86\u0520\x03\x02\x02\x02\x88\u0527\x03"+
		"\x02\x02\x02\x8A\u0536\x03\x02\x02\x02\x8C\u0548\x03\x02\x02\x02\x8E\u054A"+
		"\x03\x02\x02\x02\x90\u0559\x03\x02\x02\x02\x92\u055D\x03\x02\x02\x02\x94"+
		"\u056E\x03\x02\x02\x02\x96\u0570\x03\x02\x02\x02\x98\u0574\x03\x02\x02"+
		"\x02\x9A\u0576\x03\x02\x02\x02\x9C\u0582\x03\x02\x02\x02\x9E\u0586\x03"+
		"\x02\x02\x02\xA0\u058A\x03\x02\x02\x02\xA2\u058C\x03\x02\x02\x02\xA4\u05A6"+
		"\x03\x02\x02\x02\xA6\u05AE\x03\x02\x02\x02\xA8\u05B0\x03\x02\x02\x02\xAA"+
		"\u05B9\x03\x02\x02\x02\xAC\u05BB\x03\x02\x02\x02\xAE\u05BD\x03\x02\x02"+
		"\x02\xB0\u05CB\x03\x02\x02\x02\xB2\u05CD\x03\x02\x02\x02\xB4\u05D6\x03"+
		"\x02\x02\x02\xB6\u05DF\x03\x02\x02\x02\xB8\u05EB\x03\x02\x02\x02\xBA\u05ED"+
		"\x03\x02\x02\x02\xBC\u05F7\x03\x02\x02\x02\xBE\u05F9\x03\x02\x02\x02\xC0"+
		"\u0607\x03\x02\x02\x02\xC2\u0616\x03\x02\x02\x02\xC4\u0618\x03\x02\x02"+
		"\x02\xC6\u061C\x03\x02\x02\x02\xC8\u061F\x03\x02\x02\x02\xCA\u0625\x03"+
		"\x02\x02\x02\xCC\u0634\x03\x02\x02\x02\xCE\u0638\x03\x02\x02\x02\xD0\u063F"+
		"\x03\x02\x02\x02\xD2\u0646\x03\x02\x02\x02\xD4\u0648\x03\x02\x02\x02\xD6"+
		"\u0650\x03\x02\x02\x02\xD8\u0658\x03\x02\x02\x02\xDA\u0660\x03\x02\x02"+
		"\x02\xDC\u0670\x03\x02\x02\x02\xDE\u0682\x03\x02\x02\x02\xE0\u0684\x03"+
		"\x02\x02\x02\xE2\u0692\x03\x02\x02\x02\xE4\u0695\x03\x02\x02\x02\xE6\u069E"+
		"\x03\x02\x02\x02\xE8\u06AD\x03\x02\x02\x02\xEA\u06FC\x03\x02\x02\x02\xEC"+
		"\u06FE\x03\x02\x02\x02\xEE\u070A\x03\x02\x02\x02\xF0\u071A\x03\x02\x02"+
		"\x02\xF2\u0726\x03\x02\x02\x02\xF4\u0741\x03\x02\x02\x02\xF6\u0743\x03"+
		"\x02\x02\x02\xF8\u0746\x03\x02\x02\x02\xFA\u0749\x03\x02\x02\x02\xFC\u074C"+
		"\x03\x02\x02\x02\xFE\u0750\x03\x02\x02\x02\u0100\u075B\x03\x02\x02\x02"+
		"\u0102\u0762\x03\x02\x02\x02\u0104\u0770\x03\x02\x02\x02\u0106\u077E\x03"+
		"\x02\x02\x02\u0108\u0780\x03\x02\x02\x02\u010A\u078E\x03\x02\x02\x02\u010C"+
		"\u0790\x03\x02\x02\x02\u010E\u07A2\x03\x02\x02\x02\u0110\u07AB\x03\x02"+
		"\x02\x02\u0112\u07AD\x03\x02\x02\x02\u0114\u07B6\x03\x02\x02\x02\u0116"+
		"\u07B8\x03\x02\x02\x02\u0118\u07C6\x03\x02\x02\x02\u011A\u07D6\x03\x02"+
		"\x02\x02\u011C\u07D8\x03\x02\x02\x02\u011E\u07E7\x03\x02\x02\x02\u0120"+
		"\u07E9\x03\x02\x02\x02\u0122\u07EF\x03\x02\x02\x02\u0124\u07F7\x03\x02"+
		"\x02\x02\u0126\u080C\x03\x02\x02\x02\u0128\u0816\x03\x02\x02\x02\u012A"+
		"\u0822\x03\x02\x02\x02\u012C\u0827\x03\x02\x02\x02\u012E\u083B\x03\x02"+
		"\x02\x02\u0130\u0842\x03\x02\x02\x02\u0132\u0844\x03\x02\x02\x02\u0134"+
		"\u084C\x03\x02\x02\x02\u0136\u084E\x03\x02\x02\x02\u0138\u085A\x03\x02"+
		"\x02\x02\u013A\u0866\x03\x02\x02\x02\u013C\u0872\x03\x02\x02\x02\u013E"+
		"\u087E\x03\x02\x02\x02\u0140\u0880\x03\x02\x02\x02\u0142\u0882\x03\x02"+
		"\x02\x02\u0144\u0884\x03\x02\x02\x02\u0146\u0886\x03\x02\x02\x02\u0148"+
		"\u0888\x03\x02\x02\x02\u014A\u089E\x03\x02\x02\x02\u014C\u08B4\x03\x02"+
		"\x02\x02\u014E\u08B6\x03\x02\x02\x02\u0150\u08B8\x03\x02\x02\x02\u0152"+
		"\u08CE\x03\x02\x02\x02\u0154\u08E4\x03\x02\x02\x02\u0156\u08FB\x03\x02"+
		"\x02\x02\u0158\u0907\x03\x02\x02\x02\u015A\u0913\x03\x02\x02\x02\u015C"+
		"\u091F\x03\x02\x02\x02\u015E\u0935\x03\x02\x02\x02\u0160\u094B\x03\x02"+
		"\x02\x02\u0162\u0957\x03\x02\x02\x02\u0164\u0963\x03\x02\x02\x02\u0166"+
		"\u0968\x03\x02\x02\x02\u0168\u0970\x03\x02\x02\x02\u016A\u0977\x03\x02"+
		"\x02\x02\u016C\u0979\x03\x02\x02\x02\u016E\u0980\x03\x02\x02\x02\u0170"+
		"\u0998\x03\x02\x02\x02\u0172\u099C\x03\x02\x02\x02\u0174\u09B7\x03\x02"+
		"\x02\x02\u0176\u09CE\x03\x02\x02\x02\u0178\u09D2\x03\x02\x02\x02\u017A"+
		"\u09D4\x03\x02\x02\x02\u017C\u09D6\x03\x02\x02\x02\u017E\u09D8\x03\x02"+
		"\x02\x02\u0180\u09DA\x03\x02\x02\x02\u0182\u09F1\x03\x02\x02\x02\u0184"+
		"\u09F3\x03\x02\x02\x02\u0186\u09F5\x03\x02\x02\x02\u0188\u09F7\x03\x02"+
		"\x02\x02\u018A\u09F9\x03\x02\x02\x02\u018C\u09FB\x03\x02\x02\x02\u018E"+
		"\u09FD\x03\x02\x02\x02\u0190\u0A00\x03\x02\x02\x02\u0192\u0A02\x03\x02"+
		"\x02\x02\u0194\u0A04\x03\x02\x02\x02\u0196\u0A06\x03\x02\x02\x02\u0198"+
		"\u0A08\x03\x02\x02\x02\u019A\u0A0A\x03\x02\x02\x02\u019C\u0A0C\x03\x02"+
		"\x02\x02\u019E\u0A0E\x03\x02\x02\x02\u01A0\u0A11\x03\x02\x02\x02\u01A2"+
		"\u0A13\x03\x02\x02\x02\u01A4\u0A16\x03\x02\x02\x02\u01A6\u0A18\x03\x02"+
		"\x02\x02\u01A8\u0A1A\x03\x02\x02\x02\u01AA\u0A1C\x03\x02\x02\x02\u01AC"+
		"\u0A1E\x03\x02\x02\x02\u01AE\u0A20\x03\x02\x02\x02\u01B0\u0A22\x03\x02"+
		"\x02\x02\u01B2\u0A24\x03\x02\x02\x02\u01B4\u0A26\x03\x02\x02\x02\u01B6"+
		"\u0A28\x03\x02\x02\x02\u01B8\u0A2A\x03\x02\x02\x02\u01BA\u0A2C\x03\x02"+
		"\x02\x02\u01BC\u0A2E\x03\x02\x02\x02\u01BE\u0A30\x03\x02\x02\x02\u01C0"+
		"\u0A33\x03\x02\x02\x02\u01C2\u0A35\x03\x02\x02\x02\u01C4\u0A37\x03\x02"+
		"\x02\x02\u01C6\u0A39\x03\x02\x02\x02\u01C8\u0A3B\x03\x02\x02\x02\u01CA"+
		"\u0A3D\x03\x02\x02\x02\u01CC\u0A3F\x03\x02\x02\x02\u01CE\u0A41\x03\x02"+
		"\x02\x02\u01D0\u0A43\x03\x02\x02\x02\u01D2\u0A45\x03\x02\x02\x02\u01D4"+
		"\u0A47\x03\x02\x02\x02\u01D6\u0A49\x03\x02\x02\x02\u01D8\u0A4B\x03\x02"+
		"\x02\x02\u01DA\u0A4D\x03\x02\x02\x02\u01DC\u0A4F\x03\x02\x02\x02\u01DE"+
		"\u0A51\x03\x02\x02\x02\u01E0\u0A53\x03\x02\x02\x02\u01E2\u0A55\x03\x02"+
		"\x02\x02\u01E4\u0A57\x03\x02\x02\x02\u01E6\u0A59\x03\x02\x02\x02\u01E8"+
		"\u0A5B\x03\x02\x02\x02\u01EA\u0A5D\x03\x02\x02\x02\u01EC\u0A60\x03\x02"+
		"\x02\x02\u01EE\u0A62\x03\x02\x02\x02\u01F0\u0A64\x03\x02\x02\x02\u01F2"+
		"\u0A66\x03\x02\x02\x02\u01F4\u0A68\x03\x02\x02\x02\u01F6\u0A6A\x03\x02"+
		"\x02\x02\u01F8\u0A6C\x03\x02\x02\x02\u01FA\u0A6E\x03\x02\x02\x02\u01FC"+
		"\u0A71\x03\x02\x02\x02\u01FE\u0A74\x03\x02\x02\x02\u0200\u0A76\x03\x02"+
		"\x02\x02\u0202\u0A78\x03\x02\x02\x02\u0204\u0A7B\x03\x02\x02\x02\u0206"+
		"\u0A7D\x03\x02\x02\x02\u0208\u0A7F\x03\x02\x02\x02\u020A\u0A81\x03\x02"+
		"\x02\x02\u020C\u0A83\x03\x02\x02\x02\u020E\u0A85\x03\x02\x02\x02\u0210"+
		"\u0A87\x03\x02\x02\x02\u0212\u0A89\x03\x02\x02\x02\u0214\u0A8B\x03\x02"+
		"\x02\x02\u0216\u0A8D\x03\x02\x02\x02\u0218\u0A8F\x03\x02\x02\x02\u021A"+
		"\u0A92\x03\x02\x02\x02\u021C\u0A94\x03\x02\x02\x02\u021E\u0A96\x03\x02"+
		"\x02\x02\u0220\u0A98\x03\x02\x02\x02\u0222\u0A9A\x03\x02\x02\x02\u0224"+
		"\u0A9C\x03\x02\x02\x02\u0226\u0A9E\x03\x02\x02\x02\u0228\u0AA0\x03\x02"+
		"\x02\x02\u022A\u0AA2\x03\x02\x02\x02\u022C\u0AA4\x03\x02\x02\x02\u022E"+
		"\u0AA6\x03\x02\x02\x02\u0230\u0AA8\x03\x02\x02\x02\u0232\u0AAA\x03\x02"+
		"\x02\x02\u0234\u0AAC\x03\x02\x02\x02\u0236\u0AAE\x03\x02\x02\x02\u0238"+
		"\u0AB0\x03\x02\x02\x02\u023A\u0AB2\x03\x02\x02\x02\u023C\u0AB4\x03\x02"+
		"\x02\x02\u023E\u0AB6\x03\x02\x02\x02\u0240\u0AB8\x03\x02\x02\x02\u0242"+
		"\u0ABA\x03\x02\x02\x02\u0244\u0ABC\x03\x02\x02\x02\u0246\u0ABE\x03\x02"+
		"\x02\x02\u0248\u0AC0\x03\x02\x02\x02\u024A\u0AC2\x03\x02\x02\x02\u024C"+
		"\u0AC4\x03\x02\x02\x02\u024E\u0AC6\x03\x02\x02\x02\u0250\u0AC8\x03\x02"+
		"\x02\x02\u0252\u0ACA\x03\x02\x02\x02\u0254\u0ACC\x03\x02\x02\x02\u0256"+
		"\u0ACE\x03\x02\x02\x02\u0258\u0AD0\x03\x02\x02\x02\u025A\u0AD2\x03\x02"+
		"\x02\x02\u025C\u0AD4\x03\x02\x02\x02\u025E\u0AD6\x03\x02\x02\x02\u0260"+
		"\u0AD8\x03\x02\x02\x02\u0262\u0ADA\x03\x02\x02\x02\u0264\u0ADC\x03\x02"+
		"\x02\x02\u0266\u0ADE\x03\x02\x02\x02\u0268\u0AE0\x03\x02\x02\x02\u026A"+
		"\u0AE2\x03\x02\x02\x02\u026C\u0AE4\x03\x02\x02\x02\u026E\u0AE6\x03\x02"+
		"\x02\x02\u0270\u0AE8\x03\x02\x02\x02\u0272\u0AEA\x03\x02\x02\x02\u0274"+
		"\u0AEC\x03\x02\x02\x02\u0276\u0AEE\x03\x02\x02\x02\u0278\u0AF0\x03\x02"+
		"\x02\x02\u027A\u0AF2\x03\x02\x02\x02\u027C\u0AF4\x03\x02\x02\x02\u027E"+
		"\u0AF6\x03\x02\x02\x02\u0280\u0AF8\x03\x02\x02\x02\u0282\u0AFA\x03\x02"+
		"\x02\x02\u0284\u0AFC\x03\x02\x02\x02\u0286\u0AFE\x03\x02\x02\x02\u0288"+
		"\u0B00\x03\x02\x02\x02\u028A\u0B02\x03\x02\x02\x02\u028C\u0B04\x03\x02"+
		"\x02\x02\u028E\u0B06\x03\x02\x02\x02\u0290\u0B08\x03\x02\x02\x02\u0292"+
		"\u0B0A\x03\x02\x02\x02\u0294\u0B16\x03\x02\x02\x02\u0296\u0B18\x03\x02"+
		"\x02\x02\u0298\u0B1A\x03\x02\x02\x02\u029A\u0B1C\x03\x02\x02\x02\u029C"+
		"\u0B1E\x03\x02\x02\x02\u029E\u0B20\x03\x02\x02\x02\u02A0\u0B22\x03\x02"+
		"\x02\x02\u02A2\u0B24\x03\x02\x02\x02\u02A4\u0B26\x03\x02\x02\x02\u02A6"+
		"\u0B28\x03\x02\x02\x02\u02A8\u0B2A\x03\x02\x02\x02\u02AA\u0B2C\x03\x02"+
		"\x02\x02\u02AC\u0B2E\x03\x02\x02\x02\u02AE\u0B30\x03\x02\x02\x02\u02B0"+
		"\u0B32\x03\x02\x02\x02\u02B2\u0B34\x03\x02\x02\x02\u02B4\u0B36\x03\x02"+
		"\x02\x02\u02B6\u0B38\x03\x02\x02\x02\u02B8\u0B3A\x03\x02\x02\x02\u02BA"+
		"\u0B3C\x03\x02\x02\x02\u02BC\u0B3E\x03\x02\x02\x02\u02BE\u0B40\x03\x02"+
		"\x02\x02\u02C0\u02C2\x05\x04\x03\x02\u02C1\u02C0\x03\x02\x02\x02\u02C1"+
		"\u02C2\x03\x02\x02\x02\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02C5\x07\x17"+
		"\x02\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5"+
		"\u02C6\x03\x02\x02\x02\u02C6\u02C7\x05\u0298\u014D\x02\u02C7\x03\x03\x02"+
		"\x02\x02\u02C8\u02CA\x05\n\x06\x02\u02C9\u02CB\x07\x17\x02\x02\u02CA\u02C9"+
		"\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02"+
		"\u02CC\u02CD\x05\x06\x04\x02\u02CD\u02D0\x03\x02\x02\x02\u02CE\u02D0\x05"+
		"\b\x05\x02\u02CF\u02C8\x03\x02\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0"+
		"\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03\x02"+
		"\x02\x02\u02D2\u02DC\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4"+
		"\u02D9\x05\n\x06\x02\u02D5\u02D7\x07\x17\x02\x02\u02D6\u02D5\x03\x02\x02"+
		"\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02DA"+
		"\x05\x06\x04\x02\u02D9\u02D6\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02"+
		"\u02DA\u02DD\x03\x02\x02\x02\u02DB\u02DD\x05\b\x05\x02\u02DC\u02D4\x03"+
		"\x02\x02\x02\u02DC\u02DB\x03\x02\x02\x02\u02DD\x05\x03\x02\x02\x02\u02DE"+
		"\u02DF\x07\n\x02\x02\u02DF\x07\x03\x02\x02\x02\u02E0\u02E1\x05\x06\x04"+
		"\x02\u02E1\t\x03\x02\x02\x02\u02E2\u0309\x05\xB8]\x02\u02E3\u0309\x05"+
		"\xBE`\x02\u02E4\u0309\x05r:\x02\u02E5\u0309\x05l7\x02\u02E6\u0309\x05"+
		"Z.\x02\u02E7\u0309\x05L\'\x02\u02E8\u0309\x05F$\x02\u02E9\u0309\x05\xB6"+
		"\\\x02\u02EA\u0309\x058\x1D\x02\u02EB\u0309\x050\x19\x02\u02EC\u0309\x05"+
		"\xCAf\x02\u02ED\u0309\x05.\x18\x02\u02EE\u0309\x05$\x13\x02\u02EF\u0309"+
		"\x05\x1C\x0F\x02\u02F0\u0309\x05\x88E\x02\u02F1\u0309\x05\"\x12\x02\u02F2"+
		"\u0309\x05\x1E\x10\x02\u02F3\u0309\x05\x1A\x0E\x02\u02F4\u0309\x05\xDA"+
		"n\x02\u02F5\u0309\x05z>\x02\u02F6\u0309\x05|?\x02\u02F7\u0309\x05\x86"+
		"D\x02\u02F8\u0309\x05\x84C\x02\u02F9\u0309\x05x=\x02\u02FA\u0309\x05\x80"+
		"A\x02\u02FB\u0309\x05\x82B\x02\u02FC\u0309\x05~@\x02\u02FD\u0309\x05v"+
		"<\x02\u02FE\u0309\x05t;\x02\u02FF\u0309\x05\x14\v\x02\u0300\u0309\x05"+
		"\xF2z\x02\u0301\u0309\x05\x12\n\x02\u0302\u0309\x05\x10\t\x02\u0303\u0309"+
		"\x05\f\x07\x02\u0304\u0309\x05\u010C\x87\x02\u0305\u0309\x05\xC8e\x02"+
		"\u0306\u0309\x05\xE0q\x02\u0307\u0309\x05\xC6d\x02\u0308\u02E2\x03\x02"+
		"\x02\x02\u0308\u02E3\x03\x02\x02\x02\u0308\u02E4\x03\x02\x02\x02\u0308"+
		"\u02E5\x03\x02\x02\x02\u0308\u02E6\x03\x02\x02\x02\u0308\u02E7\x03\x02"+
		"\x02\x02\u0308\u02E8\x03\x02\x02\x02\u0308\u02E9\x03\x02\x02\x02\u0308"+
		"\u02EA\x03\x02\x02\x02\u0308\u02EB\x03\x02\x02\x02\u0308\u02EC\x03\x02"+
		"\x02\x02\u0308\u02ED\x03\x02\x02\x02\u0308\u02EE\x03\x02\x02\x02\u0308"+
		"\u02EF\x03\x02\x02\x02\u0308\u02F0\x03\x02\x02\x02\u0308\u02F1\x03\x02"+
		"\x02\x02\u0308\u02F2\x03\x02\x02\x02\u0308\u02F3\x03\x02\x02\x02\u0308"+
		"\u02F4\x03\x02\x02\x02\u0308\u02F5\x03\x02\x02\x02\u0308\u02F6\x03\x02"+
		"\x02\x02\u0308\u02F7\x03\x02\x02\x02\u0308\u02F8\x03\x02\x02\x02\u0308"+
		"\u02F9\x03\x02\x02\x02\u0308\u02FA\x03\x02\x02\x02\u0308\u02FB\x03\x02"+
		"\x02\x02\u0308\u02FC\x03\x02\x02\x02\u0308\u02FD\x03\x02\x02\x02\u0308"+
		"\u02FE\x03\x02\x02\x02\u0308\u02FF\x03\x02\x02\x02\u0308\u0300\x03\x02"+
		"\x02\x02\u0308\u0301\x03\x02\x02\x02\u0308\u0302\x03\x02\x02\x02\u0308"+
		"\u0303\x03\x02\x02\x02\u0308\u0304\x03\x02\x02\x02\u0308\u0305\x03\x02"+
		"\x02\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0307\x03\x02\x02\x02\u0309"+
		"\v\x03\x02\x02\x02\u030A\u030B\x05\u025C\u012F\x02\u030B\u030C\x05\x16"+
		"\f\x02\u030C\u030D\x05\u0210\u0109\x02\u030D\u030E\x05\x18\r\x02\u030E"+
		"\u030F\x05\u01D8\xED\x02\u030F\u0310\x05\u017A\xBE\x02\u0310\r\x03\x02"+
		"\x02\x02\u0311\u0312\x05\u01FC\xFF\x02\u0312\x0F\x03\x02\x02\x02\u0313"+
		"\u0317\x05\u01FA\xFE\x02\u0314\u0315\x05\u020E\u0108\x02\u0315\u0316\x05"+
		"\u017A\xBE\x02\u0316\u0318\x03\x02\x02\x02\u0317\u0314\x03\x02\x02\x02"+
		"\u0317\u0318\x03\x02\x02\x02\u0318\u031A\x03\x02\x02\x02\u0319\u031B\x05"+
		"\u0208\u0105\x02\u031A\u0319\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02"+
		"\u031B\x11\x03\x02\x02\x02\u031C\u031D\x05\u01F8\xFD\x02\u031D\u0321\x05"+
		"\x16\f\x02\u031E\u031F\x05\u0210\u0109\x02\u031F\u0320\x05\x18\r\x02\u0320"+
		"\u0322\x03\x02\x02\x02\u0321\u031E\x03\x02\x02\x02\u0321\u0322\x03\x02"+
		"\x02\x02\u0322\u0326\x03\x02\x02\x02\u0323\u0324\x05\u020E\u0108\x02\u0324"+
		"\u0325\x05\u017A\xBE\x02\u0325\u0327\x03\x02\x02\x02\u0326\u0323\x03\x02"+
		"\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327\x13\x03\x02\x02\x02\u0328\u0329"+
		"\x05\u01DE\xF0\x02\u0329\u032A\x05\x16\f\x02\u032A\u032B\x05\u0210\u0109"+
		"\x02\u032B\u032C\x05\x18\r\x02\u032C\u032D\x05\u023E\u0120\x02\u032D\u032E"+
		"\x05\u017A\xBE\x02\u032E\x15\x03\x02\x02\x02\u032F\u0332\x05\u0196\xCC"+
		"\x02\u0330\u0332\x05\u019E\xD0\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0330"+
		"\x03\x02\x02\x02\u0332\u033C\x03\x02\x02\x02\u0333\u033C\x05\u01A4\xD3"+
		"\x02\u0334\u033C\x05\u01AE\xD8\x02\u0335\u033C\x05\u01C6\xE4\x02\u0336"+
		"\u033C\x05\u01D0\xE9\x02\u0337\u033C\x05\u01C0\xE1\x02\u0338\u033C\x05"+
		"\u01CA\xE6\x02\u0339\u033C\x05\u0204\u0103\x02\u033A\u033C\x05\u022C\u0117"+
		"\x02\u033B\u0331\x03\x02\x02\x02\u033B\u0333\x03\x02\x02\x02\u033B\u0334"+
		"\x03\x02\x02\x02\u033B\u0335\x03\x02\x02\x02\u033B\u0336\x03\x02\x02\x02"+
		"\u033B\u0337\x03\x02\x02\x02\u033B\u0338\x03\x02\x02\x02\u033B\u0339\x03"+
		"\x02\x02\x02\u033B\u033A\x03\x02\x02\x02\u033C\x17\x03\x02\x02\x02\u033D"+
		"\u0358";
	private static readonly _serializedATNSegment2: string =
		"\x05\u0198\xCD\x02\u033E\u033F\x05\u0198\xCD\x02\u033F\u0340\x05\u01E2"+
		"\xF2\x02\u0340\u0341\x05\u01F2\xFA\x02\u0341\u0342\x05\u014A\xA6\x02\u0342"+
		"\u0358\x03\x02\x02\x02\u0343\u0347\x05\u01DC\xEF\x02\u0344\u0345\x05\u014A"+
		"\xA6\x02\u0345\u0346\x07\x12\x02\x02\u0346\u0348\x03\x02\x02\x02\u0347"+
		"\u0344\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u0349\x03\x02"+
		"\x02\x02\u0349\u034A\x05\u0184\xC3\x02\u034A\u0358\x03\x02\x02\x02\u034B"+
		"\u0358\x05\u019A\xCE\x02\u034C\u034D\x05\u01F2\xFA\x02\u034D\u034E\x05"+
		"\u014A\xA6\x02\u034E\u0358\x03\x02\x02\x02\u034F\u0351\x05\u023A\u011E"+
		"\x02\u0350\u034F\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u0352"+
		"\x03\x02\x02\x02\u0352\u0358\x05\u015E\xB0\x02\u0353\u0358\x05\u019C\xCF"+
		"\x02\u0354\u0355\x05\u022A\u0116\x02\u0355\u0356\x05\u017A\xBE\x02\u0356"+
		"\u0358\x03\x02\x02\x02\u0357\u033D\x03\x02\x02\x02\u0357\u033E\x03\x02"+
		"\x02\x02\u0357\u0343\x03\x02\x02\x02\u0357\u034B\x03\x02\x02\x02\u0357"+
		"\u034C\x03\x02\x02\x02\u0357\u0350\x03\x02\x02\x02\u0357\u0353\x03\x02"+
		"\x02\x02\u0357\u0354\x03\x02\x02\x02\u0358\x19\x03\x02\x02\x02\u0359\u035A"+
		"\x05\u01C0\xE1\x02\u035A\u035C\x05\u0250\u0129\x02\u035B\u035D\x05\xFC"+
		"\x7F\x02\u035C\u035B\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D"+
		"\u035E\x03\x02\x02\x02\u035E\u035F\x05\u0188\xC5\x02\u035F\u0360\x05\u025A"+
		"\u012E\x02\u0360\u0361\x05\u021C\u010F\x02\u0361\u0364\x05\u0144\xA3\x02"+
		"\u0362\u0365\x05\u0238\u011D\x02\u0363\u0365\x05\u0206\u0104\x02\u0364"+
		"\u0362\x03\x02\x02\x02\u0364\u0363\x03\x02\x02\x02\u0364\u0365\x03\x02"+
		"\x02\x02\u0365\x1B\x03\x02\x02\x02\u0366\u0367\x05\u01C0\xE1\x02\u0367"+
		"\u0369\x05\u022A\u0116\x02\u0368\u036A\x05\xFC\x7F\x02\u0369\u0368\x03"+
		"\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B"+
		"\u036D\x05\u017A\xBE\x02\u036C\u036E\x05n8\x02\u036D\u036C\x03\x02\x02"+
		"\x02\u036D\u036E\x03\x02\x02\x02\u036E\x1D\x03\x02\x02\x02\u036F\u0370"+
		"\x05\u01C0\xE1\x02\u0370\u0372\x05\u0248\u0125\x02\u0371\u0373\x05\xFC"+
		"\x7F\x02\u0372\u0371\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373"+
		"\u0374\x03\x02\x02\x02\u0374\u0375\x05\u0168\xB5\x02\u0375\u0376\x05\u029A"+
		"\u014E\x02\u0376\u0377\x05 \x11\x02\u0377\u0378\x05\u029C\u014F\x02\u0378"+
		"\x1F\x03\x02\x02\x02\u0379\u037A\x05\u016A\xB6\x02\u037A\u0381\x05\u0172"+
		"\xBA\x02\u037B\u037C\x05\u02AA\u0156\x02\u037C\u037D\x05\u016A\xB6\x02"+
		"\u037D\u037E\x05\u0172\xBA\x02\u037E\u0380\x03\x02\x02\x02\u037F\u037B"+
		"\x03\x02\x02\x02\u0380\u0383\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02"+
		"\u0381\u0382\x03\x02\x02\x02\u0382!\x03\x02\x02\x02\u0383\u0381\x03\x02"+
		"\x02\x02\u0384\u0385\x05\u01C0\xE1\x02\u0385\u0387\x05\u0242\u0122\x02"+
		"\u0386\u0388\x05\xFC\x7F\x02\u0387\u0386\x03\x02\x02\x02\u0387\u0388\x03"+
		"\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\u038A\x05\u0168\xB5\x02"+
		"\u038A\u038B\x05\u0254\u012B\x02\u038B\u038C\x05\u017E\xC0\x02\u038C#"+
		"\x03\x02\x02\x02\u038D\u038E\x05\u01C0\xE1\x02\u038E\u0390\x05\u0202\u0102"+
		"\x02\u038F\u0391\x05\xFC\x7F\x02\u0390\u038F\x03\x02\x02\x02\u0390\u0391"+
		"\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0393\x05\u0168\xB5"+
		"\x02\u0393\u0394\x05\u01AA\xD6\x02\u0394\u0395\x05\u022C\u0117\x02\u0395"+
		"\u0396\x05\u0106\x84\x02\u0396\u0397\x05\u01D8\xED\x02\u0397\u0398\x05"+
		"\u0160\xB1\x02\u0398\u0399\x05&\x14\x02\u0399\u039D\x05\xA8U\x02\u039A"+
		"\u039B\x05\u025A\u012E\x02\u039B\u039C\x05,\x17\x02\u039C\u039E\x03\x02"+
		"\x02\x02\u039D\u039A\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E"+
		"%\x03\x02\x02\x02\u039F\u03A0\x05\u0258\u012D\x02\u03A0\u03A4\x05(\x15"+
		"\x02\u03A1\u03A2\x05\u01A6\xD4\x02\u03A2\u03A3\x05\u011C\x8F\x02\u03A3"+
		"\u03A5\x03\x02\x02\x02\u03A4\u03A1\x03\x02\x02\x02\u03A4\u03A5\x03\x02"+
		"\x02\x02\u03A5\'\x03\x02\x02\x02\u03A6\u03AC\x05*\x16\x02\u03A7\u03A8"+
		"\x05\u01A6\xD4\x02\u03A8\u03A9\x05*\x16\x02\u03A9\u03AB\x03\x02\x02\x02"+
		"\u03AA\u03A7\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02\x02\u03AC\u03AA\x03"+
		"\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD)\x03\x02\x02\x02\u03AE"+
		"\u03AC\x03\x02\x02\x02\u03AF\u03B0\x05\u016A\xB6\x02\u03B0\u03B1\x05\u01EC"+
		"\xF7\x02\u03B1\u03B2\x05\u020A\u0106\x02\u03B2\u03B3\x05\u020C\u0107\x02"+
		"\u03B3+\x03\x02\x02\x02\u03B4\u03BF\x05\x92J\x02\u03B5\u03B6\x05\x92J"+
		"\x02\u03B6\u03B7\x05\u01A6\xD4\x02\u03B7\u03B8\x05\x8EH\x02\u03B8\u03BF"+
		"\x03\x02\x02\x02\u03B9\u03BF\x05\x8EH\x02\u03BA\u03BB\x05\x8EH\x02\u03BB"+
		"\u03BC\x05\u01A6\xD4\x02\u03BC\u03BD\x05\x92J\x02\u03BD\u03BF\x03\x02"+
		"\x02\x02\u03BE\u03B4\x03\x02\x02\x02\u03BE\u03B5\x03\x02\x02\x02\u03BE"+
		"\u03B9\x03\x02\x02\x02\u03BE\u03BA\x03\x02\x02\x02\u03BF-\x03\x02\x02"+
		"\x02\u03C0\u03C1\x05\u01C0\xE1\x02\u03C1\u03C3\x05\u01F2\xFA\x02\u03C2"+
		"\u03C4\x05\xFC\x7F\x02\u03C3\u03C2\x03\x02\x02\x02\u03C3\u03C4\x03\x02"+
		"\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C6\x05\u0156\xAC\x02\u03C6"+
		"\u03C7\x05\u025A\u012E\x02\u03C7\u03C8\x05\u0226\u0114\x02\u03C8\u03C9"+
		"\x07\xAE\x02\x02\u03C9\u03CA\x05\u029E\u0150\x02\u03CA\u03CB\x05\xC0a"+
		"\x02\u03CB\u03CF\x05\u02A0\u0151\x02\u03CC\u03CD\x05\u01A6\xD4\x02\u03CD"+
		"\u03CE\x05\xC4c\x02\u03CE\u03D0\x03\x02\x02\x02\u03CF\u03CC\x03\x02\x02"+
		"\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0/\x03\x02\x02\x02\u03D1\u03D3\x05"+
		"\u01C0\xE1\x02\u03D2\u03D4\x05D#\x02\u03D3\u03D2\x03\x02\x02\x02\u03D3"+
		"\u03D4\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D7\x05\u01DC"+
		"\xEF\x02\u03D6\u03D8\x05\xFC\x7F\x02\u03D7\u03D6\x03\x02\x02\x02\u03D7"+
		"\u03D8\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DA\x05\u0168"+
		"\xB5\x02\u03DA\u03DC\x05\u029A\u014E\x02\u03DB\u03DD\x054\x1B\x02\u03DC"+
		"\u03DB\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DE\x03\x02"+
		"\x02\x02\u03DE\u03DF\x05\u029C\u014F\x02\u03DF\u03E0\x056\x1C\x02\u03E0"+
		"\u03E1\x05\u0228\u0115\x02\u03E1\u03E2\x05\u0172\xBA\x02\u03E2\u03E3\x05"+
		"\u01F4\xFB\x02\u03E3\u03E4\x05\u0186\xC4\x02\u03E4\u03E5\x05\u01AA\xD6"+
		"\x02\u03E5\u03E6\x052\x1A\x02\u03E61\x03\x02\x02\x02\u03E7\u03E8\x07\xA6"+
		"\x02\x02\u03E83\x03\x02\x02\x02\u03E9\u03EF\x05\u018E\xC8\x02\u03EA\u03EB"+
		"\x05\u02AA\u0156\x02\u03EB\u03EC\x05\u018E\xC8\x02\u03EC\u03EE\x03\x02"+
		"\x02\x02\u03ED\u03EA\x03\x02\x02\x02\u03EE\u03F1\x03\x02\x02\x02\u03EF"+
		"\u03ED\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F05\x03\x02\x02"+
		"\x02\u03F1\u03EF\x03\x02\x02\x02\u03F2\u03F7\x05\u01B6\xDC\x02\u03F3\u03F4"+
		"\x05\u0228\u0115\x02\u03F4\u03F5\x05\u020C\u0107\x02\u03F5\u03F7\x03\x02"+
		"\x02\x02\u03F6\u03F2\x03\x02\x02\x02\u03F6\u03F3\x03\x02\x02\x02\u03F7"+
		"\u03F8\x03\x02\x02\x02\u03F8\u03F9\x05\u0210\u0109\x02\u03F9\u03FA\x05"+
		"\u020C\u0107\x02\u03FA\u03FB\x05\u01E8\xF5\x02\u03FB7\x03\x02\x02\x02"+
		"\u03FC\u03FE\x05\u01C0\xE1\x02\u03FD\u03FF\x05D#\x02\u03FE\u03FD\x03\x02"+
		"\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400"+
		"\u0402\x05\u0194\xCB\x02\u0401\u0403\x05\xFC\x7F\x02\u0402\u0401\x03\x02"+
		"\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404"+
		"\u0405\x05\u0168\xB5\x02\u0405\u0406\x05\u029A\u014E\x02\u0406\u0407\x05"+
		"\u0172\xBA\x02\u0407\u0408\x05\u029C\u014F\x02\u0408\u0409\x05\u0230\u0119"+
		"\x02\u0409\u040A\x05\u0184\xC3\x02\u040A\u040B\x05\u0236\u011C\x02\u040B"+
		"\u040C\x05\u0172\xBA\x02\u040C\u040D\x05\u01D6\xEC\x02\u040D\u040E\x05"+
		"\u0184\xC3\x02\u040E\u040F\x05\u01E6\xF4\x02\u040F\u0410\x05:\x1E\x02"+
		"\u04109\x03\x02\x02\x02\u0411\u0416\x05\u012E\x98\x02\u0412\u0416\x05"+
		"B\"\x02\u0413\u0416\x05@!\x02\u0414\u0416\x05<\x1F\x02\u0415\u0411\x03"+
		"\x02\x02\x02\u0415\u0412\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0415"+
		"\u0414\x03\x02\x02\x02\u0416;\x03\x02\x02\x02\u0417\u0418\x05\u029E\u0150"+
		"\x02\u0418\u041E\x05> \x02\u0419\u041A\x05\u02AA\u0156\x02\u041A\u041B"+
		"\x05> \x02\u041B\u041D\x03\x02\x02\x02\u041C\u0419\x03\x02\x02\x02\u041D"+
		"\u0420\x03\x02\x02\x02\u041E\u041C\x03\x02\x02\x02\u041E\u041F\x03\x02"+
		"\x02\x02\u041F\u0421\x03\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0421"+
		"\u0422\x05\u02A0\u0151\x02\u0422=\x03\x02\x02\x02\u0423\u0424\x05\u018C"+
		"\xC7\x02\u0424\u0425\x07\v\x02\x02\u0425\u0426\x05:\x1E\x02\u0426?\x03"+
		"\x02\x02\x02\u0427\u0428\x05\u029A\u014E\x02\u0428\u042F\x05B\"\x02\u0429"+
		"\u042A\x05\u02AA\u0156\x02\u042A\u042B\x05\u012E\x98\x02\u042B\u042E\x03"+
		"\x02\x02\x02\u042C\u042E\x05B\"\x02\u042D\u0429\x03\x02\x02\x02\u042D"+
		"\u042C\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F\u042D\x03\x02"+
		"\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0432\x03\x02\x02\x02\u0431"+
		"\u042F\x03\x02\x02\x02\u0432\u0433\x05\u029C\u014F\x02\u0433A\x03\x02"+
		"\x02\x02\u0434\u0435\x05\u029A\u014E\x02\u0435\u043B\x05\u012E\x98\x02"+
		"\u0436\u0437\x05\u02AA\u0156\x02\u0437\u0438\x05\u012E\x98\x02\u0438\u043A"+
		"\x03\x02\x02\x02\u0439\u0436\x03\x02\x02\x02\u043A\u043D\x03\x02\x02\x02"+
		"\u043B\u0439\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043E\x03"+
		"\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043E\u043F\x05\u029C\u014F\x02"+
		"\u043FC\x03\x02\x02\x02\u0440\u0441\x05\u0214\u010B\x02\u0441\u0442\x05"+
		"\u0224\u0113\x02\u0442E\x03\x02\x02\x02\u0443\u0444\x05\u01A4\xD3\x02"+
		"\u0444\u0445\x05\u0250\u0129\x02\u0445\u0446\x05\u0188\xC5\x02\u0446\u0447"+
		"\x05\u025A\u012E\x02\u0447\u0449\x05H%\x02\u0448\u044A\x05J&\x02\u0449"+
		"\u0448\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044AG\x03\x02\x02"+
		"\x02\u044B\u044C\x05\u021C\u010F\x02\u044C\u044D\x05\u0144\xA3\x02\u044D"+
		"I\x03\x02\x02\x02\u044E\u0451\x05\u0238\u011D\x02\u044F\u0451\x05\u0206"+
		"\u0104\x02\u0450\u044E\x03\x02\x02\x02\u0450\u044F\x03\x02\x02\x02\u0451"+
		"K\x03\x02\x02\x02\u0452\u0453\x05\u01A4\xD3\x02\u0453\u0454\x05\u0248"+
		"\u0125\x02\u0454\u0455\x05\u015A\xAE\x02\u0455\u0456\x05N(\x02\u0456M"+
		"\x03\x02\x02\x02\u0457\u0459\x05X-\x02\u0458\u0457\x03\x02\x02\x02\u0458"+
		"\u0459\x03\x02\x02\x02\u0459\u045B\x03\x02\x02\x02\u045A\u045C\x05V,\x02"+
		"\u045B\u045A\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\u045E\x03"+
		"\x02\x02\x02\u045D\u045F\x05P)\x02\u045E\u045D\x03\x02\x02\x02\u045E\u045F"+
		"\x03\x02\x02\x02\u045FO\x03\x02\x02\x02\u0460\u0461\x05\u0222\u0112\x02"+
		"\u0461\u0462\x05R*\x02\u0462Q\x03\x02\x02\x02\u0463\u0469\x05T+\x02\u0464"+
		"\u0465\x05\u01A6\xD4\x02\u0465\u0466\x05T+\x02\u0466\u0468\x03\x02\x02"+
		"\x02\u0467\u0464\x03\x02\x02\x02\u0468\u046B\x03\x02\x02\x02\u0469\u0467"+
		"\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046AS\x03\x02\x02\x02\u046B"+
		"\u0469\x03\x02\x02\x02\u046C\u046D\x05\u016A\xB6\x02\u046D\u046E\x05\u023E"+
		"\u0120\x02\u046E\u046F\x05\u016E\xB8\x02\u046FU\x03\x02\x02\x02\u0470"+
		"\u0471\x05\u0192\xCA\x02\u0471\u0472\x05\u016E\xB8\x02\u0472\u0479\x05"+
		"\u0172\xBA\x02\u0473\u0474\x05\u02AA\u0156\x02\u0474\u0475\x05\u016E\xB8"+
		"\x02\u0475\u0476\x05\u0172\xBA\x02\u0476\u0478\x03\x02\x02\x02\u0477\u0473"+
		"\x03\x02\x02\x02\u0478\u047B\x03\x02\x02\x02\u0479\u0477\x03\x02\x02\x02"+
		"\u0479\u047A\x03\x02\x02\x02\u047AW\x03\x02\x02\x02\u047B\u0479\x03\x02"+
		"\x02\x02\u047C\u047D\x05\u01A4\xD3\x02\u047D\u047E\x05\u016A\xB6\x02\u047E"+
		"\u047F\x05\u0248\u0125\x02\u047F\u0480\x05\u0172\xBA\x02\u0480Y\x03\x02"+
		"\x02\x02\u0481\u0482\x05\u01A4\xD3\x02\u0482\u0483\x05\u023A\u011E\x02"+
		"\u0483\u0484\x05\u015E\xB0\x02\u0484\u0485\x05\\/\x02\u0485[\x03\x02\x02"+
		"\x02\u0486\u048E\x05h5\x02\u0487\u048E\x05d3\x02\u0488\u048E\x05d3\x02"+
		"\u0489\u048E\x05b2\x02\u048A\u048E\x05`1\x02\u048B\u048E\x05^0\x02\u048C"+
		"\u048E\b/\x01\x02\u048D\u0486\x03\x02\x02\x02\u048D\u0487\x03\x02\x02"+
		"\x02\u048D\u0488\x03\x02\x02\x02\u048D\u0489\x03\x02\x02\x02\u048D\u048A"+
		"\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048D\u048C\x03\x02\x02\x02"+
		"\u048E]\x03\x02\x02\x02\u048F\u0490\x05\u025A\u012E\x02\u0490\u0491\x05"+
		"\x92J\x02\u0491_\x03\x02\x02\x02\u0492\u0493\x05\u0222\u0112\x02\u0493"+
		"\u0494\x05\u016A\xB6\x02\u0494\u0495\x05\u023E\u0120\x02\u0495\u0496\x05"+
		"\u016E\xB8\x02\u0496a\x03\x02\x02\x02\u0497\u0498\x05\u01CA\xE6\x02\u0498"+
		"\u0499\x05\u01BA\xDE\x02\u0499\u049A\x05\u0234\u011B\x02\u049Ac\x03\x02"+
		"\x02\x02\u049B\u049C\x05\u01CA\xE6\x02\u049C\u049D\x05f4\x02\u049De\x03"+
		"\x02\x02\x02\u049E\u04A4\x05\u016A\xB6\x02\u049F\u04A0\x05\u02AA\u0156"+
		"\x02\u04A0\u04A1\x05\u016A\xB6\x02\u04A1\u04A3\x03\x02\x02\x02\u04A2\u049F"+
		"\x03\x02\x02\x02\u04A3\u04A6\x03\x02\x02\x02\u04A4\u04A2\x03\x02\x02\x02"+
		"\u04A4\u04A5\x03\x02\x02\x02\u04A5g\x03\x02\x02\x02\u04A6\u04A4\x03\x02"+
		"\x02\x02\u04A7\u04A8\x05\u0192\xCA\x02\u04A8\u04A9\x05j6\x02\u04A9i\x03"+
		"\x02\x02\x02\u04AA\u04AB\x05\u016E\xB8\x02\u04AB\u04B2\x05\u0172\xBA\x02"+
		"\u04AC\u04AD\x05\u02AA\u0156\x02\u04AD\u04AE\x05\u016E\xB8\x02\u04AE\u04AF"+
		"\x05\u0172\xBA\x02\u04AF\u04B1\x03\x02\x02\x02\u04B0\u04AC\x03\x02\x02"+
		"\x02\u04B1\u04B4\x03\x02\x02\x02\u04B2\u04B0\x03\x02\x02\x02\u04B2\u04B3"+
		"\x03\x02\x02\x02\u04B3k\x03\x02\x02\x02\u04B4\u04B2\x03\x02\x02\x02\u04B5"+
		"\u04B6\x05\u01A4\xD3\x02\u04B6\u04B7\x05\u022A\u0116\x02\u04B7\u04B9\x05"+
		"\u017A\xBE\x02\u04B8\u04BA\x05n8\x02\u04B9\u04B8\x03\x02\x02\x02\u04B9"+
		"\u04BA\x03\x02\x02\x02\u04BAm\x03\x02\x02\x02\u04BB\u04BC\x05\u025A\u012E"+
		"\x02\u04BC\u04C2\x05p9\x02\u04BD\u04BE\x05\u01A6\xD4\x02\u04BE\u04BF\x05"+
		"p9\x02\u04BF\u04C1\x03\x02\x02\x02\u04C0\u04BD\x03\x02\x02\x02\u04C1\u04C4"+
		"\x03\x02\x02\x02\u04C2\u04C0\x03\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02"+
		"\u04C3o\x03\x02\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C5\u04C6\x05\u021C"+
		"\u010F\x02\u04C6\u04C7\x07\xAE\x02\x02\u04C7\u04C8\x05\u0144\xA3\x02\u04C8"+
		"\u04D6\x03\x02\x02\x02\u04C9\u04CA\x05\u0200\u0101\x02\u04CA\u04CB\x07"+
		"\xAE\x02\x02\u04CB\u04CC\x05\u0146\xA4\x02\u04CC\u04D6\x03\x02\x02\x02"+
		"\u04CD\u04CE\x05\u0238\u011D\x02\u04CE\u04CF\x07\xAE\x02\x02\u04CF\u04D0"+
		"\x05\u0146\xA4\x02\u04D0\u04D6\x03\x02\x02\x02\u04D1\u04D2\x05\u0212\u010A"+
		"\x02\u04D2\u04D3\x07\xAE\x02\x02\u04D3\u04D4\x05\x9AN\x02\u04D4\u04D6"+
		"\x03\x02\x02\x02\u04D5\u04C5\x03\x02\x02\x02\u04D5\u04C9\x03\x02\x02\x02"+
		"\u04D5\u04CD\x03\x02\x02\x02\u04D5\u04D1\x03\x02\x02\x02\u04D6q\x03\x02"+
		"\x02\x02\u04D7\u04D8\x05\u01A4\xD3\x02\u04D8\u04D9\x05\u0202\u0102\x02"+
		"\u04D9\u04DD\x05\u0164\xB3\x02\u04DA\u04DB\x05\u025A\u012E\x02\u04DB\u04DC"+
		"\x05\x92J\x02\u04DC\u04DE\x03\x02\x02\x02\u04DD\u04DA\x03\x02\x02\x02"+
		"\u04DD\u04DE\x03\x02\x02\x02\u04DEs\x03\x02\x02\x02\u04DF\u04E0\x05\u01CA"+
		"\xE6\x02\u04E0\u04E2\x05\u0250\u0129\x02\u04E1\u04E3\x05\xFE\x80\x02\u04E2"+
		"\u04E1\x03\x02\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3\u04E4\x03\x02"+
		"\x02\x02\u04E4\u04E5\x05\u0188\xC5\x02\u04E5u\x03\x02\x02\x02\u04E6\u04E7"+
		"\x05\u01CA\xE6\x02\u04E7\u04E9\x05\u0248\u0125\x02\u04E8\u04EA\x05\xFE"+
		"\x80\x02\u04E9\u04E8\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA"+
		"\u04EB\x03\x02\x02\x02\u04EB\u04EC\x05\u015A\xAE\x02\u04ECw\x03\x02\x02"+
		"\x02\u04ED\u04EE\x05\u01CA\xE6\x02\u04EE\u04F0\x05\u0202\u0102\x02\u04EF"+
		"\u04F1\x05\xFE\x80\x02\u04F0\u04EF\x03\x02\x02\x02\u04F0\u04F1\x03\x02"+
		"\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F3\x05\u0164\xB3\x02\u04F3"+
		"y\x03\x02\x02\x02\u04F4\u04F5\x05\u01CA\xE6\x02\u04F5\u04F7\x05\u0194"+
		"\xCB\x02\u04F6\u04F8\x05\xFE\x80\x02\u04F7\u04F6\x03\x02\x02\x02\u04F7"+
		"\u04F8\x03\x02\x02\x02\u04F8\u04F9\x03\x02\x02\x02\u04F9\u04FA\x05\u0158"+
		"\xAD\x02\u04FA{\x03\x02\x02\x02\u04FB\u04FC\x05\u01CA\xE6\x02\u04FC\u04FE"+
		"\x05\u01DC\xEF\x02\u04FD\u04FF\x05\xFE\x80\x02\u04FE\u04FD\x03\x02\x02"+
		"\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500\u0501"+
		"\x05\u015C\xAF\x02\u0501}\x03\x02\x02\x02\u0502\u0503\x05\u01CA\xE6\x02"+
		"\u0503\u0505\x05\u0242\u0122\x02\u0504\u0506\x05\xFE\x80\x02\u0505\u0504"+
		"\x03\x02\x02\x02\u0505\u0506\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02"+
		"\u0507\u0508\x05\u017C\xBF\x02\u0508\u0509\x05\u0210\u0109\x02\u0509\u050A"+
		"\x05\u015E\xB0\x02\u050A\x7F\x03\x02\x02\x02\u050B\u050C\x05\u01CA\xE6"+
		"\x02\u050C\u050E\x05\u022A\u0116\x02\u050D\u050F\x05\xFE\x80\x02\u050E"+
		"\u050D\x03\x02\x02\x02\u050E\u050F\x03\x02\x02\x02\u050F\u0510\x03\x02"+
		"\x02\x02\u0510\u0511\x05\u017A\xBE\x02\u0511\x81\x03\x02\x02\x02\u0512"+
		"\u0513\x05\u01CA\xE6\x02\u0513\u0515\x05\u023A\u011E\x02\u0514\u0516\x05"+
		"\xFE\x80\x02\u0515\u0514\x03\x02\x02\x02\u0515\u0516\x03\x02\x02\x02\u0516"+
		"\u0517\x03\x02\x02\x02\u0517\u0518\x05\u015E\xB0\x02\u0518\x83\x03\x02"+
		"\x02\x02\u0519\u051A\x05\u01CA\xE6\x02\u051A\u051C\x05\u01F2\xFA\x02\u051B"+
		"\u051D\x05\xFE\x80\x02\u051C\u051B\x03\x02\x02\x02\u051C\u051D\x03\x02"+
		"\x02\x02\u051D\u051E\x03\x02\x02\x02\u051E\u051F\x05\u014A\xA6\x02\u051F"+
		"\x85\x03\x02\x02\x02\u0520\u0521\x05\u01CA\xE6\x02\u0521\u0523\x05\u01E4"+
		"\xF3\x02\u0522\u0524\x05\xFE\x80\x02\u0523\u0522\x03\x02\x02\x02\u0523"+
		"\u0524\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0526\x05\u0162"+
		"\xB2\x02\u0526\x87\x03\x02\x02\x02\u0527\u0528\x05\u01C0\xE1\x02\u0528"+
		"\u052A\x05\u023A\u011E\x02\u0529\u052B\x05\xFC\x7F\x02\u052A\u0529\x03"+
		"\x02\x02\x02\u052A\u052B\x03\x02\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C"+
		"\u052D\x05\u0168\xB5\x02\u052D\u052F\x05\x8AF\x02\u052E\u0530\x05\x8C"+
		"G\x02\u052F\u052E\x03\x02\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530\x89"+
		"\x03\x02\x02\x02\u0531\u0532\x05\u029A\u014E\x02\u0532\u0533\x05\xA2R"+
		"\x02\u0533\u0534\x05\u029C\u014F\x02\u0534\u0537\x03\x02\x02\x02\u0535"+
		"\u0537\bF\x01\x02\u0536\u0531\x03\x02\x02\x02\u0536\u0535\x03\x02\x02"+
		"\x02\u0537\x8B\x03\x02\x02\x02\u0538\u0539\x05\u025A\u012E\x02\u0539\u053D"+
		"\x05\x92J\x02\u053A\u053B\x05\u01A6\xD4\x02\u053B\u053C\x05\x8EH\x02\u053C"+
		"\u053E\x03\x02\x02\x02\u053D\u053A\x03\x02\x02\x02\u053D\u053E\x03\x02"+
		"\x02\x02\u053E\u0549\x03\x02\x02\x02\u053F\u0541\x05\u025A\u012E\x02\u0540"+
		"\u0542\x05\x8EH\x02\u0541\u0540\x03\x02\x02\x02\u0541\u0542\x03\x02\x02"+
		"\x02\u0542\u0546\x03\x02\x02\x02\u0543\u0544\x05\u01A6\xD4\x02\u0544\u0545"+
		"\x05\x92J\x02\u0545\u0547\x03\x02\x02\x02\u0546\u0543\x03\x02\x02\x02"+
		"\u0546\u0547\x03\x02\x02\x02\u0547\u0549\x03\x02\x02\x02\u0548\u0538\x03"+
		"\x02\x02\x02\u0548\u053F\x03\x02\x02\x02\u0549\x8D\x03\x02\x02\x02\u054A"+
		"\u054B\x05\u01B8\xDD\x02\u054B\u054C\x05\u0216\u010C\x02\u054C\u054D\x05"+
		"\u01B4\xDB\x02\u054D\u054E\x05\u029A\u014E\x02\u054E\u0554\x05\x90I\x02"+
		"\u054F\u0550\x05\u02AA\u0156\x02\u0550\u0551\x05\x90I\x02\u0551\u0553"+
		"\x03\x02\x02\x02\u0552\u054F\x03\x02\x02\x02\u0553\u0556\x03\x02\x02\x02"+
		"\u0554\u0552\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0557\x03"+
		"\x02\x02\x02\u0556\u0554\x03\x02\x02\x02\u0557\u0558\x05\u029C\u014F\x02"+
		"\u0558\x8F\x03\x02\x02\x02\u0559\u055B\x05\u016A\xB6\x02\u055A\u055C\x05"+
		"\u0178\xBD\x02\u055B\u055A\x03\x02\x02\x02\u055B\u055C\x03\x02\x02\x02"+
		"\u055C\x91\x03\x02\x02\x02\u055D\u0563\x05\x94K\x02\u055E\u055F\x05\u01A6"+
		"\xD4\x02\u055F\u0560\x05\x94K\x02\u0560\u0562\x03\x02\x02\x02\u0561\u055E"+
		"\x03\x02\x02\x02\u0562\u0565\x03\x02\x02\x02\u0563\u0561\x03\x02\x02\x02"+
		"\u0563\u0564\x03\x02\x02\x02\u0564\x93\x03\x02\x02\x02\u0565\u0563\x03"+
		"\x02\x02\x02\u0566\u0567\x05\x96L\x02\u0567\u0568\x07\xAE\x02\x02\u0568"+
		"\u0569\x05\x98M\x02\u0569\u056F\x03\x02\x02\x02\u056A\u056B\x05\x96L\x02"+
		"\u056B\u056C\x07\xAE\x02\x02\u056C\u056D\x05\x9AN\x02\u056D\u056F\x03"+
		"\x02\x02\x02\u056E\u0566\x03\x02\x02\x02\u056E\u056A\x03\x02\x02\x02\u056F"+
		"\x95\x03\x02\x02\x02\u0570\u0571\x07\xAC\x02\x02\u0571\x97\x03\x02\x02"+
		"\x02\u0572\u0575\x05\u0144\xA3\x02\u0573\u0575\x05\u0142\xA2\x02\u0574"+
		"\u0572\x03\x02\x02\x02\u0574\u0573\x03\x02\x02\x02\u0575\x99\x03\x02\x02"+
		"\x02\u0576\u0577\x05\u029E\u0150\x02\u0577\u057D\x05\x9CO\x02\u0578\u0579"+
		"\x05\u02AA\u0156\x02\u0579\u057A\x05\x9CO\x02\u057A\u057C\x03\x02\x02"+
		"\x02\u057B\u0578\x03\x02\x02\x02\u057C\u057F\x03\x02\x02\x02\u057D\u057B"+
		"\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E\u0580\x03\x02\x02\x02"+
		"\u057F\u057D\x03\x02\x02\x02\u0580\u0581\x05\u02A0\u0151\x02\u0581\x9B"+
		"\x03\x02\x02\x02\u0582\u0583\x05\x9EP\x02\u0583\u0584\x07\v\x02\x02\u0584"+
		"\u0585\x05\xA0Q\x02\u0585\x9D\x03\x02\x02\x02\u0586\u0587\x05\u0144\xA3"+
		"\x02\u0587\x9F\x03\x02\x02\x02\u0588\u058B\x05\u0144\xA3\x02\u0589\u058B"+
		"\x05\u0142\xA2\x02\u058A\u0588\x03\x02\x02\x02\u058A\u0589\x03\x02\x02"+
		"\x02\u058B\xA1\x03\x02\x02\x02\u058C\u0592\x05\xA4S\x02\u058D\u058E\x05"+
		"\u02AA\u0156\x02\u058E\u058F\x05\xA4S\x02\u058F\u0591\x03\x02\x02\x02"+
		"\u0590\u058D\x03\x02\x02\x02\u0591\u0594\x03\x02\x02\x02\u0592\u0590\x03"+
		"\x02\x02\x02\u0592\u0593\x03\x02\x02\x02\u0593\u0598\x03\x02\x02\x02\u0594"+
		"\u0592\x03\x02\x02\x02\u0595\u0596\x05\u02AA\u0156\x02\u0596\u0597\x05"+
		"\xA8U\x02\u0597\u0599\x03\x02\x02\x02\u0598\u0595\x03\x02\x02\x02\u0598"+
		"\u0599\x03\x02\x02\x02\u0599\xA3\x03\x02\x02\x02\u059A\u059B\x05\u0170"+
		"\xB9\x02\u059B\u059C\x05\u0172\xBA\x02\u059C\u059D\x05\xA6T\x02\u059D"+
		"\u05A7\x03\x02\x02\x02\u059E\u059F\x05\u0170\xB9\x02\u059F\u05A0\x05\u0172"+
		"\xBA\x02\u05A0\u05A1\x05\u0232\u011A\x02\u05A1\u05A7\x03\x02\x02\x02\u05A2"+
		"\u05A3\x05\u0170\xB9\x02\u05A3\u05A4\x05\u0172\xBA\x02\u05A4\u05A7\x03"+
		"\x02\x02\x02\u05A5\u05A7\bS\x01\x02\u05A6\u059A\x03\x02\x02\x02\u05A6"+
		"\u059E\x03\x02\x02\x02\u05A6\u05A2\x03\x02\x02\x02\u05A6\u05A5\x03\x02"+
		"\x02\x02\u05A7\xA5\x03\x02\x02\x02\u05A8\u05A9\x05\u0220\u0111\x02\u05A9"+
		"\u05AA\x05\u01EE\xF8\x02\u05AA\u05AF\x03\x02\x02\x02\u05AB\u05AC\x05\u0220"+
		"\u0111\x02\u05AC\u05AD\bT\x01\x02\u05AD\u05AF\x03\x02\x02\x02\u05AE\u05A8"+
		"\x03\x02\x02\x02\u05AE\u05AB\x03\x02\x02\x02\u05AF\xA7\x03\x02\x02\x02"+
		"\u05B0\u05B1\x05\u0220\u0111\x02\u05B1\u05B2\x05\u01EE\xF8\x02\u05B2\u05B3"+
		"\x05\u029A\u014E\x02\u05B3\u05B4\x05\xAAV\x02\u05B4\u05B5\x05\u029C\u014F"+
		"\x02\u05B5\xA9\x03\x02\x02\x02\u05B6\u05BA\x05\xACW\x02\u05B7\u05BA\x05"+
		"\xAEX\x02\u05B8\u05BA\x05\xB0Y\x02\u05B9\u05B6\x03\x02\x02\x02\u05B9\u05B7"+
		"\x03\x02\x02\x02\u05B9\u05B8\x03\x02\x02\x02\u05BA\xAB\x03\x02\x02\x02"+
		"\u05BB\u05BC\x05\u016A\xB6\x02\u05BC\xAD\x03\x02\x02\x02\u05BD\u05BE\x05"+
		"\u029A\u014E\x02\u05BE\u05BF\x05\xB2Z\x02\u05BF\u05C0\x05\u029C\u014F"+
		"\x02\u05C0\xAF\x03\x02\x02\x02\u05C1\u05C2\x05\u016A\xB6\x02\u05C2\u05C3"+
		"\x05\u02AA\u0156\x02\u05C3\u05C4\x05\xB4[\x02\u05C4\u05CC\x03\x02\x02"+
		"\x02\u05C5\u05C6\x05\u029A\u014E\x02\u05C6\u05C7\x05\xB2Z\x02\u05C7\u05C8"+
		"\x05\u029C\u014F\x02\u05C8\u05C9\x05\u02AA\u0156\x02\u05C9\u05CA\x05\xB4"+
		"[\x02\u05CA\u05CC\x03\x02\x02\x02\u05CB\u05C1\x03\x02\x02\x02\u05CB\u05C5"+
		"\x03\x02\x02\x02\u05CC\xB1\x03\x02\x02\x02\u05CD\u05D3\x05\u016A\xB6\x02"+
		"\u05CE\u05CF\x05\u02AA\u0156\x02\u05CF\u05D0\x05\u016A\xB6\x02\u05D0\u05D2"+
		"\x03\x02\x02\x02\u05D1\u05CE\x03\x02\x02\x02\u05D2\u05D5\x03\x02\x02\x02"+
		"\u05D3\u05D1\x03\x02\x02\x02\u05D3\u05D4\x03\x02\x02\x02\u05D4\xB3\x03"+
		"\x02\x02\x02\u05D5\u05D3\x03\x02\x02\x02\u05D6\u05DC\x05\u016A\xB6\x02"+
		"\u05D7\u05D8\x05\u02AA\u0156\x02\u05D8\u05D9\x05\u016A\xB6\x02\u05D9\u05DB"+
		"\x03\x02\x02\x02\u05DA\u05D7\x03\x02\x02\x02\u05DB\u05DE\x03\x02\x02\x02"+
		"\u05DC\u05DA\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD\xB5\x03"+
		"\x02\x02\x02\u05DE\u05DC\x03\x02\x02\x02\u05DF\u05E0\x05\u01A8\xD5\x02"+
		"\u05E0\u05E1\x05\u01B0\xD9\x02\u05E1\xB7\x03\x02\x02\x02\u05E2\u05E3\x05"+
		"\xBA^\x02\u05E3\u05E4\x05\xDAn\x02\u05E4\u05EC\x03\x02\x02\x02\u05E5\u05E6"+
		"\x05\xBA^\x02\u05E6\u05E7\x05\xF2z\x02\u05E7\u05EC\x03\x02\x02\x02\u05E8"+
		"\u05E9\x05\xBA^\x02\u05E9\u05EA\x05\xE0q\x02\u05EA\u05EC\x03\x02\x02\x02"+
		"\u05EB\u05E2\x03\x02\x02\x02\u05EB\u05E5\x03\x02\x02\x02\u05EB\u05E8\x03"+
		"\x02\x02\x02\u05EC\xB9\x03\x02\x02\x02\u05ED\u05EF\x05\u01B2\xDA\x02\u05EE"+
		"\u05F0\x05\xBC_\x02\u05EF\u05EE\x03\x02\x02\x02\u05EF\u05F0\x03\x02\x02"+
		"\x02\u05F0\u05F1\x03\x02\x02\x02\u05F1\u05F3\x05\u01B0\xD9\x02\u05F2\u05F4"+
		"\x05\xFA~\x02\u05F3\u05F2\x03\x02\x02\x02\u05F3\u05F4\x03\x02\x02\x02"+
		"\u05F4\xBB\x03\x02\x02\x02\u05F5\u05F8\x05\u01FE\u0100\x02\u05F6\u05F8"+
		"\x05\u024A\u0126\x02\u05F7\u05F5\x03\x02\x02\x02\u05F7\u05F6\x03\x02\x02"+
		"\x02\u05F8\xBD\x03\x02\x02\x02\u05F9\u05FA\x05\u01A4\xD3\x02\u05FA\u05FB"+
		"\x05\u01F2\xFA\x02\u05FB\u05FC\x05\u014A\xA6\x02\u05FC\u05FD\x05\u025A"+
		"\u012E\x02\u05FD\u05FE\x05\u0226\u0114\x02\u05FE\u05FF\x07\xAE\x02\x02"+
		"\u05FF\u0600\x05\u029E\u0150\x02\u0600\u0601\x05\xC0a\x02\u0601\u0605"+
		"\x05\u02A0\u0151\x02\u0602\u0603\x05\u01A6\xD4\x02\u0603\u0604\x05\xC4"+
		"c\x02\u0604\u0606\x03\x02\x02\x02\u0605\u0602\x03\x02\x02\x02\u0605\u0606"+
		"\x03\x02\x02\x02\u0606\xBF\x03\x02\x02\x02\u0607\u060D\x05\xC2b\x02\u0608"+
		"\u0609\x05\u02AA\u0156\x02\u0609\u060A\x05\xC2b\x02\u060A\u060C\x03\x02"+
		"\x02\x02\u060B\u0608\x03\x02\x02\x02\u060C\u060F\x03\x02\x02\x02\u060D"+
		"\u060B\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E\xC1\x03\x02\x02"+
		"\x02\u060F\u060D\x03\x02\x02\x02\u0610\u0611\x07\xA7\x02\x02\u0611\u0612"+
		"\x07\v\x02\x02\u0612\u0617\x07\xA7\x02\x02\u0613\u0614\x07\xA7\x02\x02"+
		"\u0614\u0615\x07\v\x02\x02\u0615\u0617\x07\xA8\x02\x02\u0616\u0610\x03"+
		"\x02\x02\x02\u0616\u0613\x03\x02";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\u0617\xC3\x03\x02\x02\x02\u0618\u0619\x05\u01CC\xE7\x02\u0619"+
		"\u061A\x07\xAE\x02\x02\u061A\u061B\x05\u0146\xA4\x02\u061B\xC5\x03\x02"+
		"\x02\x02\u061C\u061D\x05\u024E\u0128\x02\u061D\u061E\x05\u014A\xA6\x02"+
		"\u061E\xC7\x03\x02\x02\x02\u061F\u0621\x05\u0244\u0123\x02\u0620\u0622"+
		"\x05\u023A\u011E\x02\u0621\u0620\x03\x02\x02\x02\u0621\u0622\x03\x02\x02"+
		"\x02\u0622\u0623\x03\x02\x02\x02\u0623\u0624\x05\u015E\xB0\x02\u0624\xC9"+
		"\x03\x02\x02\x02\u0625\u0626\x05\u01C0\xE1\x02\u0626\u0628\x05\u01E4\xF3"+
		"\x02\u0627\u0629\x05\xFC\x7F\x02\u0628\u0627\x03\x02\x02\x02\u0628\u0629"+
		"\x03\x02\x02\x02\u0629\u062B\x03\x02\x02\x02\u062A\u062C\x05\u0156\xAC"+
		"\x02\u062B\u062A\x03\x02\x02\x02\u062B\u062C\x03\x02\x02\x02\u062C\u062D"+
		"\x03\x02\x02\x02\u062D\u062E\x05\xCCg\x02\u062E\u062F\x05\xD0i\x02\u062F"+
		"\xCB\x03\x02\x02\x02\u0630\u0631\x05\u0210\u0109\x02\u0631\u0632\x05\u015E"+
		"\xB0\x02\u0632\u0635\x03\x02\x02\x02\u0633\u0635\bg\x01\x02\u0634\u0630"+
		"\x03\x02\x02\x02\u0634\u0633\x03\x02\x02\x02\u0635\xCD\x03\x02\x02\x02"+
		"\u0636\u0639\x07\xAC\x02\x02\u0637\u0639\x05\u0144\xA3\x02\u0638\u0636"+
		"\x03\x02\x02\x02\u0638\u0637\x03\x02\x02\x02\u0639\xCF\x03\x02\x02\x02"+
		"\u063A\u063B\x05\u029A\u014E\x02\u063B\u063C\x05\xD2j\x02\u063C\u063D"+
		"\x05\u029C\u014F\x02\u063D\u0640\x03\x02\x02\x02\u063E\u0640\bi\x01\x02"+
		"\u063F\u063A\x03\x02\x02\x02\u063F\u063E\x03\x02\x02\x02\u0640\xD1\x03"+
		"\x02\x02\x02\u0641\u0647\x05\u016A\xB6\x02\u0642\u0647\x05\xD4k\x02\u0643"+
		"\u0647\x05\xD6l\x02\u0644\u0647\x05\xD8m\x02\u0645\u0647\bj\x01\x02\u0646"+
		"\u0641\x03\x02\x02\x02\u0646\u0642\x03\x02\x02\x02\u0646\u0643\x03\x02"+
		"\x02\x02\u0646\u0644\x03\x02\x02\x02\u0646\u0645\x03\x02\x02\x02\u0647"+
		"\xD3\x03\x02\x02\x02\u0648\u0649\x05\u01F0\xF9\x02\u0649\u064C\x05\u029A"+
		"\u014E\x02\u064A\u064D\x05\u016A\xB6\x02\u064B\u064D\bk\x01\x02\u064C"+
		"\u064A\x03\x02\x02\x02\u064C\u064B\x03\x02\x02\x02\u064D\u064E\x03\x02"+
		"\x02\x02\u064E\u064F\x05\u029C\u014F\x02\u064F\xD5\x03\x02\x02\x02\u0650"+
		"\u0651\x05\u01CE\xE8\x02\u0651\u0654\x05\u029A\u014E\x02\u0652\u0655\x05"+
		"\u016A\xB6\x02\u0653\u0655\bl\x01\x02\u0654\u0652\x03\x02\x02\x02\u0654"+
		"\u0653\x03\x02\x02\x02\u0655\u0656\x03\x02\x02\x02\u0656\u0657\x05\u029C"+
		"\u014F\x02\u0657\xD7\x03\x02\x02\x02\u0658\u0659\x05\u01DA\xEE\x02\u0659"+
		"\u065C\x05\u029A\u014E\x02\u065A\u065D\x05\u016A\xB6\x02\u065B\u065D\b"+
		"m\x01\x02\u065C\u065A\x03\x02\x02\x02\u065C\u065B\x03\x02\x02\x02\u065D"+
		"\u065E\x03\x02\x02\x02\u065E\u065F\x05\u029C\u014F\x02\u065F\xD9\x03\x02"+
		"\x02\x02\u0660\u0662\x05\u01C2\xE2\x02\u0661\u0663\x05\xDCo\x02\u0662"+
		"\u0661\x03\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663\u0664\x03\x02"+
		"\x02\x02\u0664\u0666\x05\u0110\x89\x02\u0665\u0667\x05\xFA~\x02\u0666"+
		"\u0665\x03\x02\x02\x02\u0666\u0667\x03\x02\x02\x02\u0667\u066A\x03\x02"+
		"\x02\x02\u0668\u066B\x05\u0116\x8C\x02\u0669\u066B\bn\x01\x02\u066A\u0668"+
		"\x03\x02\x02\x02\u066A\u0669\x03\x02\x02\x02\u066B\u066E\x03\x02\x02\x02"+
		"\u066C\u066F\x05\xFE\x80\x02\u066D\u066F\x05\xE2r\x02\u066E\u066C\x03"+
		"\x02\x02\x02\u066E\u066D\x03\x02\x02\x02\u066E\u066F\x03\x02\x02\x02\u066F"+
		"\xDB\x03\x02\x02\x02\u0670\u0676\x05\xDEp\x02\u0671\u0672\x05\u02AA\u0156"+
		"\x02\u0672\u0673\x05\xDEp\x02\u0673\u0675\x03\x02\x02\x02\u0674\u0671"+
		"\x03\x02\x02\x02\u0675\u0678\x03\x02\x02\x02\u0676\u0674\x03\x02\x02\x02"+
		"\u0676\u0677\x03\x02\x02\x02\u0677\xDD\x03\x02\x02\x02\u0678\u0676\x03"+
		"\x02\x02\x02\u0679\u0683\x05\u016A\xB6\x02\u067A\u067B\x05\u016A\xB6\x02"+
		"\u067B\u067E\x05\u02A6\u0154\x02\u067C\u067F\x05\u0144\xA3\x02\u067D\u067F"+
		"\x05\u0140\xA1\x02\u067E\u067C\x03\x02\x02\x02\u067E\u067D\x03\x02\x02"+
		"\x02\u067F\u0680\x03\x02\x02\x02\u0680\u0681\x05\u02A8\u0155\x02\u0681"+
		"\u0683\x03\x02\x02\x02\u0682\u0679\x03\x02\x02\x02\u0682\u067A\x03\x02"+
		"\x02\x02\u0683\xDF\x03\x02\x02\x02\u0684\u0685\x05\u024C\u0127\x02\u0685"+
		"\u0687\x05\u0166\xB4\x02\u0686\u0688\x05\xF4{\x02\u0687\u0686\x03\x02"+
		"\x02\x02\u0687\u0688\x03\x02\x02\x02\u0688\u0689\x03\x02\x02\x02\u0689"+
		"\u068C\x05\xE8u\x02\u068A\u068D\x05\u0116\x8C\x02\u068B\u068D\bq\x01\x02"+
		"\u068C\u068A\x03\x02\x02\x02\u068C\u068B\x03\x02\x02\x02\u068D\u0690\x03"+
		"\x02\x02\x02\u068E\u0691\x05\xFE\x80\x02\u068F\u0691\x05\xE2r\x02\u0690"+
		"\u068E\x03\x02\x02\x02\u0690\u068F\x03\x02\x02\x02\u0690\u0691\x03\x02"+
		"\x02\x02\u0691\xE1\x03\x02\x02\x02\u0692\u0693\x05\u01E0\xF1\x02\u0693"+
		"\u0694\x05\xE4s\x02\u0694\xE3\x03\x02\x02\x02\u0695\u069B\x05\xE6t\x02"+
		"\u0696\u0697\x05\u01A6\xD4\x02\u0697\u0698\x05\xE6t\x02\u0698\u069A\x03"+
		"\x02\x02\x02\u0699\u0696\x03\x02\x02\x02\u069A\u069D\x03\x02\x02\x02\u069B"+
		"\u0699\x03\x02\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C\xE5\x03\x02\x02"+
		"\x02\u069D\u069B\x03\x02\x02\x02\u069E\u069F\x07\xAC\x02\x02\u069F\u06A0"+
		"\x07\xAE\x02\x02\u06A0\u06A1\x05\u012E\x98\x02\u06A1\xE7\x03\x02\x02\x02"+
		"\u06A2\u06A3\x05\u022E\u0118\x02\u06A3\u06A9\x05\xEAv\x02\u06A4\u06A5"+
		"\x05\u02AA\u0156\x02\u06A5\u06A6\x05\xEAv\x02\u06A6\u06A8\x03\x02\x02"+
		"\x02\u06A7\u06A4\x03\x02\x02\x02\u06A8\u06AB\x03\x02\x02\x02\u06A9\u06A7"+
		"\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AE\x03\x02\x02\x02"+
		"\u06AB\u06A9\x03\x02\x02\x02\u06AC\u06AE\bu\x01\x02\u06AD\u06A2\x03\x02"+
		"\x02\x02\u06AD\u06AC\x03\x02\x02\x02\u06AE\xE9\x03\x02\x02\x02\u06AF\u06B0"+
		"\x05\u016A\xB6\x02\u06B0\u06B3\x05\u02B6\u015C\x02\u06B1\u06B4\x05\u012E"+
		"\x98\x02\u06B2\u06B4\x05\u0134\x9B\x02\u06B3\u06B1\x03\x02\x02\x02\u06B3"+
		"\u06B2\x03\x02\x02\x02\u06B4\u06FD\x03\x02\x02\x02\u06B5\u06B6\x05\u016A"+
		"\xB6\x02\u06B6\u06B7\x05\u02B6\u015C\x02\u06B7\u06BA\x05\u016A\xB6\x02"+
		"\u06B8\u06BB\x05\u02AE\u0158\x02\u06B9\u06BB\x05\u02B0\u0159\x02\u06BA"+
		"\u06B8\x03\x02\x02\x02\u06BA\u06B9\x03\x02\x02\x02\u06BB\u06BC\x03\x02"+
		"\x02\x02\u06BC\u06BD\x05\u0140\xA1\x02\u06BD\u06FD\x03\x02\x02\x02\u06BE"+
		"\u06BF\x05\u016A\xB6\x02\u06BF\u06C0\x05\u02B6\u015C\x02\u06C0\u06C3\x05"+
		"\u016A\xB6\x02\u06C1\u06C4\x05\u02AE\u0158\x02\u06C2\u06C4\x05\u02B0\u0159"+
		"\x02\u06C3\u06C1\x03\x02\x02\x02\u06C3\u06C2\x03\x02\x02\x02\u06C4\u06C5"+
		"\x03\x02\x02\x02\u06C5\u06C6\x05\xEEx\x02\u06C6\u06FD\x03\x02\x02\x02"+
		"\u06C7\u06C8\x05\u016A\xB6\x02\u06C8\u06C9\x05\u02B6\u015C\x02\u06C9\u06CC"+
		"\x05\u016A\xB6\x02\u06CA\u06CD\x05\u02AE\u0158\x02\u06CB\u06CD\x05\u02B0"+
		"\u0159\x02\u06CC\u06CA\x03\x02\x02\x02\u06CC\u06CB\x03\x02\x02\x02\u06CD"+
		"\u06CE\x03\x02\x02\x02\u06CE\u06CF\x05\xECw\x02\u06CF\u06FD\x03\x02\x02"+
		"\x02\u06D0\u06D1\x05\u016A\xB6\x02\u06D1\u06D2\x05\u02B6\u015C\x02\u06D2"+
		"\u06D5\x05\u016A\xB6\x02\u06D3\u06D6\x05\u02AE\u0158\x02\u06D4\u06D6\x05"+
		"\u02B0\u0159\x02\u06D5\u06D3\x03\x02\x02\x02\u06D5\u06D4\x03\x02\x02\x02"+
		"\u06D6\u06D7\x03\x02\x02\x02\u06D7\u06D8\x05\xF0y\x02\u06D8\u06FD\x03"+
		"\x02\x02\x02\u06D9\u06DA\x05\u016A\xB6\x02\u06DA\u06DB\x05\u02B6\u015C"+
		"\x02\u06DB\u06DE\x05\xECw\x02\u06DC\u06DF\x05\u02AE\u0158\x02\u06DD\u06DF"+
		"\x05\u02B0\u0159\x02\u06DE\u06DC\x03\x02\x02\x02\u06DE\u06DD\x03\x02\x02"+
		"\x02\u06DF\u06E0\x03\x02\x02\x02\u06E0\u06E1\x07\xAC\x02\x02\u06E1\u06FD"+
		"\x03\x02\x02\x02\u06E2\u06E3\x05\u016A\xB6\x02\u06E3\u06E4\x05\u02B6\u015C"+
		"\x02\u06E4\u06E7\x05\xEEx\x02\u06E5\u06E8\x05\u02AE\u0158\x02\u06E6\u06E8"+
		"\x05\u02B0\u0159\x02\u06E7\u06E5\x03\x02\x02\x02\u06E7\u06E6\x03\x02\x02"+
		"\x02\u06E8\u06E9\x03\x02\x02\x02\u06E9\u06EA\x07\xAC\x02\x02\u06EA\u06FD"+
		"\x03\x02\x02\x02\u06EB\u06EC\x05\u016A\xB6\x02\u06EC\u06ED\x05\u02B6\u015C"+
		"\x02\u06ED\u06F0\x05\xF0y\x02\u06EE\u06F1\x05\u02AE\u0158\x02\u06EF\u06F1"+
		"\x05\u02B0\u0159\x02\u06F0\u06EE\x03\x02\x02\x02\u06F0\u06EF\x03\x02\x02"+
		"\x02\u06F1\u06F2\x03\x02\x02\x02\u06F2\u06F3\x07\xAC\x02\x02\u06F3\u06FD"+
		"\x03\x02\x02\x02\u06F4\u06F5\x05\u016A\xB6\x02\u06F5\u06F6\x05\u02A6\u0154"+
		"\x02\u06F6\u06F7\x05\u0140\xA1\x02\u06F7\u06F8\x05\u02A8\u0155\x02\u06F8"+
		"\u06F9\x05\u02B6\u015C\x02\u06F9\u06FA\x05\u012E\x98\x02\u06FA\u06FD\x03"+
		"\x02\x02\x02\u06FB\u06FD\bv\x01\x02\u06FC\u06AF\x03\x02\x02\x02\u06FC"+
		"\u06B5\x03\x02\x02\x02\u06FC\u06BE\x03\x02\x02\x02\u06FC\u06C7\x03\x02"+
		"\x02\x02\u06FC\u06D0\x03\x02\x02\x02\u06FC\u06D9\x03\x02\x02\x02\u06FC"+
		"\u06E2\x03\x02\x02\x02\u06FC\u06EB\x03\x02\x02\x02\u06FC\u06F4\x03\x02"+
		"\x02\x02\u06FC\u06FB\x03\x02\x02\x02\u06FD\xEB\x03\x02\x02\x02\u06FE\u06FF"+
		"\x05\u029E\u0150\x02\u06FF\u0705\x05\u012E\x98\x02\u0700\u0701\x05\u02AA"+
		"\u0156\x02\u0701\u0702\x05\u012E\x98\x02\u0702\u0704\x03\x02\x02\x02\u0703"+
		"\u0700\x03\x02\x02\x02\u0704\u0707\x03\x02\x02\x02\u0705\u0703\x03\x02"+
		"\x02\x02\u0705\u0706\x03\x02\x02\x02\u0706\u0708\x03\x02\x02\x02\u0707"+
		"\u0705\x03\x02\x02\x02\u0708\u0709\x05\u02A0\u0151\x02\u0709\xED\x03\x02"+
		"\x02\x02\u070A\u070B\x05\u029E\u0150\x02\u070B\u070C\x05\u012E\x98\x02"+
		"\u070C\u070D\x05\u02AC\u0157\x02\u070D\u070E\x05\u012E\x98\x02\u070E\u0715"+
		"\x03\x02\x02\x02\u070F\u0710\x05\u012E\x98\x02\u0710\u0711\x05\u02AC\u0157"+
		"\x02\u0711\u0712\x05\u012E\x98\x02\u0712\u0714\x03\x02\x02\x02\u0713\u070F"+
		"\x03\x02\x02\x02\u0714\u0717\x03\x02\x02\x02\u0715\u0713\x03\x02\x02\x02"+
		"\u0715\u0716\x03\x02\x02\x02\u0716\u0718\x03\x02\x02\x02\u0717\u0715\x03"+
		"\x02\x02\x02\u0718\u0719\x05\u02A0\u0151\x02\u0719\xEF\x03\x02\x02\x02"+
		"\u071A\u071B\x05\u02A6\u0154\x02\u071B\u0721\x05\u012E\x98\x02\u071C\u071D"+
		"\x05\u02AC\u0157\x02\u071D\u071E\x05\u012E\x98\x02\u071E\u0720\x03\x02"+
		"\x02\x02\u071F\u071C\x03\x02\x02\x02\u0720\u0723\x03\x02\x02\x02\u0721"+
		"\u071F\x03\x02\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0724\x03\x02"+
		"\x02\x02\u0723\u0721\x03\x02\x02\x02\u0724\u0725\x05\u02A8\u0155\x02\u0725"+
		"\xF1\x03\x02\x02\x02\u0726\u0727\x05\u01EA\xF6\x02\u0727\u0728\x05\u0166"+
		"\xB4\x02\u0728\u0729\x05\u0102\x82\x02\u0729\u072C\x05\u0100\x81\x02\u072A"+
		"\u072D\x05\xFC\x7F\x02\u072B\u072D\x03\x02\x02\x02\u072C\u072A\x03\x02"+
		"\x02\x02\u072C\u072B\x03\x02\x02\x02\u072D\u072F\x03\x02\x02\x02\u072E"+
		"\u0730\x05\xF4{\x02\u072F\u072E\x03\x02\x02\x02\u072F\u0730\x03\x02\x02"+
		"\x02\u0730\xF3\x03\x02\x02\x02\u0731\u0732\x05\u0254\u012B\x02\u0732\u0733"+
		"\x05\xF8}\x02\u0733\u0742\x03\x02\x02\x02\u0734\u0735\x05\u0254\u012B"+
		"\x02\u0735\u0736\x05\xF8}\x02\u0736\u0737\x05\u01A6\xD4\x02\u0737\u0738"+
		"\x05\xF6|\x02\u0738\u0742\x03\x02\x02\x02\u0739\u073A\x05\u0254\u012B"+
		"\x02\u073A\u073B\x05\xF6|\x02\u073B\u0742\x03\x02\x02\x02\u073C\u073D"+
		"\x05\u0254\u012B\x02\u073D\u073E\x05\xF6|\x02\u073E\u073F\x05\u01A6\xD4"+
		"\x02\u073F\u0740\x05\xF8}\x02\u0740\u0742\x03\x02\x02\x02\u0741\u0731"+
		"\x03\x02\x02\x02\u0741\u0734\x03\x02\x02\x02\u0741\u0739\x03\x02\x02\x02"+
		"\u0741\u073C\x03\x02\x02\x02\u0742\xF5\x03\x02\x02\x02\u0743\u0744\x05"+
		"\u023C\u011F\x02\u0744\u0745\x05\u0140\xA1\x02\u0745\xF7\x03\x02\x02\x02"+
		"\u0746\u0747\x05\u0246\u0124\x02\u0747\u0748\x05\u0140\xA1\x02\u0748\xF9"+
		"\x03\x02\x02\x02\u0749\u074A\x05\u0254\u012B\x02\u074A\u074B\x05\xF6|"+
		"\x02\u074B\xFB\x03\x02\x02\x02\u074C\u074D\x05\u01E0\xF1\x02\u074D\u074E"+
		"\x05\u020A\u0106\x02\u074E\u074F\x05\u01D2\xEA\x02\u074F\xFD\x03\x02\x02"+
		"\x02\u0750\u0751\x05\u01E0\xF1\x02\u0751\u0752\x05\u01D2\xEA\x02\u0752"+
		"\xFF\x03\x02\x02\x02\u0753\u0754\x05\u0256\u012C\x02\u0754\u0755\x05\u029A"+
		"\u014E\x02\u0755\u0758\x05\u0108\x85\x02\u0756\u0759\x05\u029C\u014F\x02"+
		"\u0757\u0759\b\x81\x01\x02\u0758\u0756\x03\x02\x02\x02\u0758\u0757\x03"+
		"\x02\x02\x02\u0759\u075C\x03\x02\x02\x02\u075A\u075C\b\x81\x01\x02\u075B"+
		"\u0753\x03\x02\x02\x02\u075B\u075A\x03\x02\x02\x02\u075C\u0101\x03\x02"+
		"\x02\x02\u075D\u075E\x05\u029A\u014E\x02\u075E\u075F\x05\u0104\x83\x02"+
		"\u075F\u0760\x05\u029C\u014F\x02\u0760\u0763\x03\x02\x02\x02\u0761\u0763"+
		"\b\x82\x01\x02\u0762\u075D\x03\x02\x02\x02\u0762\u0761\x03\x02\x02\x02"+
		"\u0763\u0103\x03\x02\x02\x02\u0764\u076C\x05\u016A\xB6\x02\u0765\u0768"+
		"\x05\u02AA\u0156\x02\u0766\u0769\x05\u016A\xB6\x02\u0767\u0769\b\x83\x01"+
		"\x02\u0768\u0766\x03\x02\x02\x02\u0768\u0767\x03\x02\x02\x02\u0769\u076B"+
		"\x03\x02\x02\x02\u076A\u0765\x03\x02\x02\x02\u076B\u076E\x03\x02\x02\x02"+
		"\u076C\u076A\x03\x02\x02\x02\u076C\u076D\x03\x02\x02\x02\u076D\u0771\x03"+
		"\x02\x02\x02\u076E\u076C\x03\x02\x02\x02\u076F\u0771\b\x83\x01\x02\u0770"+
		"\u0764\x03\x02\x02\x02\u0770\u076F\x03\x02\x02\x02\u0771\u0105\x03\x02"+
		"\x02\x02\u0772\u077A\x05\u016A\xB6\x02\u0773\u0776\x05\u02AA\u0156\x02"+
		"\u0774\u0777\x05\u016A\xB6\x02\u0775\u0777\b\x84\x01\x02\u0776\u0774\x03"+
		"\x02\x02\x02\u0776\u0775\x03\x02\x02\x02\u0777\u0779\x03\x02\x02\x02\u0778"+
		"\u0773\x03\x02\x02\x02\u0779\u077C\x03\x02\x02\x02\u077A\u0778\x03\x02"+
		"\x02\x02\u077A\u077B\x03\x02\x02\x02\u077B\u077F\x03\x02\x02\x02\u077C"+
		"\u077A\x03\x02\x02\x02\u077D\u077F\b\x84\x01\x02\u077E\u0772\x03\x02\x02"+
		"\x02\u077E\u077D\x03\x02\x02\x02\u077F\u0107\x03\x02\x02\x02\u0780\u0786"+
		"\x05\u010A\x86\x02\u0781\u0782\x05\u02AA\u0156\x02\u0782\u0783\x05\u010A"+
		"\x86\x02\u0783\u0785\x03\x02\x02\x02\u0784\u0781\x03\x02\x02\x02\u0785"+
		"\u0788\x03\x02\x02\x02\u0786\u0784\x03\x02\x02\x02\u0786\u0787\x03\x02"+
		"\x02\x02\u0787\u0109\x03\x02\x02\x02\u0788\u0786\x03\x02\x02\x02\u0789"+
		"\u078C\x05\u012E\x98\x02\u078A\u078C\x05\u0134\x9B\x02\u078B\u0789\x03"+
		"\x02\x02\x02\u078B\u078A\x03\x02\x02\x02\u078C\u078F\x03\x02\x02\x02\u078D"+
		"\u078F\b\x86\x01\x02\u078E\u078B\x03\x02\x02\x02\u078E\u078D\x03\x02\x02"+
		"\x02\u078F\u010B\x03\x02\x02\x02\u0790\u0792\x05\u022C\u0117\x02\u0791"+
		"\u0793\x05\u01C8\xE5\x02\u0792\u0791\x03\x02\x02\x02\u0792\u0793\x03\x02"+
		"\x02\x02\u0793\u0794\x03\x02\x02\x02\u0794\u0795\x05\u0118\x8D\x02\u0795"+
		"\u0797\x05\u0110\x89\x02\u0796\u0798\x05\u0116\x8C\x02\u0797\u0796\x03"+
		"\x02\x02\x02\u0797\u0798\x03\x02\x02\x02\u0798\u079A\x03\x02\x02\x02\u0799"+
		"\u079B\x05\u0112\x8A\x02\u079A\u0799\x03\x02\x02\x02\u079A\u079B\x03\x02"+
		"\x02\x02\u079B\u079D\x03\x02\x02\x02\u079C\u079E\x05\u010E\x88\x02\u079D"+
		"\u079C\x03\x02\x02\x02\u079D\u079E\x03\x02\x02\x02\u079E\u07A0\x03\x02"+
		"\x02\x02\u079F\u07A1\x05\u01A2\xD2\x02\u07A0\u079F\x03\x02\x02\x02\u07A0"+
		"\u07A1\x03\x02\x02\x02\u07A1\u010D\x03\x02\x02\x02\u07A2\u07A5\x05\u01F6"+
		"\xFC\x02\u07A3\u07A6\x05\u0140\xA1\x02\u07A4\u07A6\b\x88\x01\x02\u07A5"+
		"\u07A3\x03\x02\x02\x02\u07A5\u07A4\x03\x02\x02\x02\u07A6\u010F\x03\x02"+
		"\x02\x02\u07A7\u07A8\x05\u01D8\xED\x02\u07A8\u07A9\x05\u0166\xB4\x02\u07A9"+
		"\u07AC\x03\x02\x02\x02\u07AA\u07AC\b\x89\x01\x02\u07AB\u07A7\x03\x02\x02"+
		"\x02\u07AB\u07AA\x03\x02\x02\x02\u07AC\u0111\x03\x02\x02\x02\u07AD\u07AE"+
		"\x05\u0218\u010D\x02\u07AE\u07AF\x05\u0114\x8B\x02\u07AF\u0113\x03\x02"+
		"\x02\x02\u07B0\u07B3\x05\u016A\xB6\x02\u07B1\u07B4\x05\u01AC\xD7\x02\u07B2"+
		"\u07B4\x05\u01C4\xE3\x02\u07B3\u07B1\x03\x02\x02\x02\u07B3\u07B2\x03\x02"+
		"\x02\x02\u07B3\u07B4\x03\x02\x02\x02\u07B4\u07B7\x03\x02\x02\x02\u07B5"+
		"\u07B7\b\x8B\x01\x02\u07B6\u07B0\x03\x02\x02\x02\u07B6\u07B5\x03\x02\x02"+
		"\x02\u07B7\u0115\x03\x02\x02\x02\u07B8\u07B9\x05\u0258\u012D\x02\u07B9"+
		"\u07BA\x05\u011C\x8F\x02\u07BA\u0117\x03\x02\x02\x02\u07BB\u07C7\x05\u0294"+
		"\u014B\x02\u07BC\u07C2\x05\u011A\x8E\x02\u07BD\u07BE\x05\u02AA\u0156\x02"+
		"\u07BE\u07BF\x05\u011A\x8E\x02\u07BF\u07C1\x03\x02\x02\x02\u07C0\u07BD"+
		"\x03\x02\x02\x02\u07C1\u07C4\x03\x02\x02\x02\u07C2\u07C0\x03\x02\x02\x02"+
		"\u07C2\u07C3\x03\x02\x02\x02\u07C3\u07C7\x03\x02\x02\x02\u07C4\u07C2\x03"+
		"\x02\x02\x02\u07C5\u07C7\b\x8D\x01\x02\u07C6\u07BB\x03\x02\x02\x02\u07C6"+
		"\u07BC\x03\x02\x02\x02\u07C6\u07C5\x03\x02\x02\x02\u07C7\u0119\x03\x02"+
		"\x02\x02\u07C8\u07D7\x05\u016A\xB6\x02\u07C9\u07CD\x05\u016A\xB6\x02\u07CA"+
		"\u07CB\x05\u01AA\xD6\x02\u07CB\u07CC\x07\xAC\x02\x02\u07CC\u07CE\x03\x02"+
		"\x02\x02\u07CD\u07CA\x03\x02\x02\x02\u07CD\u07CE\x03\x02\x02\x02\u07CE"+
		"\u07D7\x03\x02\x02\x02\u07CF\u07D3\x05\u012A\x96\x02\u07D0\u07D1\x05\u01AA"+
		"\xD6\x02\u07D1\u07D2\x07\xAC\x02\x02\u07D2\u07D4\x03\x02\x02\x02\u07D3"+
		"\u07D0\x03\x02\x02\x02\u07D3\u07D4\x03\x02\x02\x02\u07D4\u07D7\x03\x02"+
		"\x02\x02\u07D5\u07D7\b\x8E\x01\x02\u07D6\u07C8\x03\x02\x02\x02\u07D6\u07C9"+
		"\x03\x02\x02\x02\u07D6\u07CF\x03\x02\x02\x02\u07D6\u07D5\x03\x02\x02\x02"+
		"\u07D7\u011B\x03\x02\x02\x02\u07D8\u07DE\x05\u011E\x90\x02\u07D9\u07DA"+
		"\x05\u01A6\xD4\x02\u07DA\u07DB\x05\u011E\x90\x02\u07DB\u07DD\x03\x02\x02"+
		"\x02\u07DC\u07D9\x03\x02\x02\x02\u07DD\u07E0\x03\x02\x02\x02\u07DE\u07DC"+
		"\x03\x02\x02\x02\u07DE\u07DF\x03\x02\x02\x02\u07DF\u011D\x03\x02\x02\x02"+
		"\u07E0\u07DE\x03\x02\x02\x02\u07E1\u07E8\x05\u0120\x91\x02\u07E2\u07E8"+
		"\x05\u0122\x92\x02\u07E3\u07E8\x05\u0124\x93\x02\u07E4\u07E5\x07\xAC\x02"+
		"\x02\u07E5\u07E8\b\x90\x01\x02\u07E6\u07E8\b\x90\x01\x02\u07E7\u07E1\x03"+
		"\x02\x02\x02\u07E7\u07E2\x03\x02\x02\x02\u07E7\u07E3\x03\x02\x02\x02\u07E7"+
		"\u07E4\x03\x02\x02\x02\u07E7\u07E6\x03\x02\x02\x02\u07E8\u011F\x03\x02"+
		"\x02\x02\u07E9\u07EA\x05\u016A\xB6\x02\u07EA\u07ED\x05\u0128\x95\x02\u07EB"+
		"\u07EE\x05\u012E\x98\x02\u07EC\u07EE\b\x91\x01\x02\u07ED\u07EB\x03\x02"+
		"\x02\x02\u07ED\u07EC\x03\x02\x02\x02\u07EE\u0121\x03\x02\x02\x02\u07EF"+
		"\u07F0\x05\u016A\xB6\x02\u07F0\u07F1\x05\u01E2\xF2\x02\u07F1\u07F3\x05"+
		"\u029A\u014E\x02\u07F2\u07F4\x05\u012C\x97\x02\u07F3\u07F2\x03\x02\x02"+
		"\x02\u07F3\u07F4\x03\x02\x02\x02\u07F4\u07F5\x03\x02\x02\x02\u07F5\u07F6"+
		"\x05\u029C\u014F\x02\u07F6\u0123\x03\x02\x02\x02\u07F7\u07FA\x05\u0126"+
		"\x94\x02\u07F8\u07FB\x05\u0128\x95\x02\u07F9\u07FB\b\x93\x01\x02\u07FA"+
		"\u07F8\x03\x02\x02\x02\u07FA\u07F9\x03\x02\x02\x02\u07FB\u07FC\x03\x02"+
		"\x02\x02\u07FC\u07FD\x05\u0126\x94\x02\u07FD\u0125\x03\x02\x02\x02\u07FE"+
		"\u0801\x05\u0240\u0121\x02\u07FF\u0802\x05\u029A\u014E\x02\u0800\u0802"+
		"\b\x94\x01\x02\u0801\u07FF\x03\x02\x02\x02\u0801\u0800\x03\x02\x02\x02"+
		"\u0802\u0805\x03\x02\x02\x02\u0803\u0806\x05\u016A\xB6\x02\u0804\u0806"+
		"\b\x94\x01\x02\u0805\u0803\x03\x02\x02\x02\u0805\u0804\x03\x02\x02\x02"+
		"\u0806\u0809\x03\x02\x02\x02\u0807\u080A\x05\u029C\u014F\x02\u0808\u080A"+
		"\b\x94\x01\x02\u0809\u0807\x03\x02\x02\x02\u0809\u0808\x03\x02\x02\x02"+
		"\u080A\u080D\x03\x02\x02\x02\u080B\u080D\b\x94\x01\x02\u080C\u07FE\x03"+
		"\x02\x02\x02\u080C\u080B\x03\x02\x02\x02\u080D\u0127\x03\x02\x02\x02\u080E"+
		"\u0817\x05\u02B6\u015C\x02\u080F\u0817\x05\u02B8\u015D\x02\u0810\u0817"+
		"\x05\u02BA\u015E\x02\u0811\u0817\x05\u02BC\u015F\x02\u0812\u0817\x05\u02BE"+
		"\u0160\x02\u0813\u0817\x05\u01BC\xDF\x02\u0814\u0817\x05\u01BE\xE0\x02"+
		"\u0815\u0817\b\x95\x01\x02\u0816\u080E\x03\x02\x02\x02\u0816\u080F\x03"+
		"\x02\x02\x02\u0816\u0810\x03\x02\x02\x02\u0816\u0811\x03\x02\x02\x02\u0816"+
		"\u0812\x03\x02\x02\x02\u0816\u0813\x03\x02\x02\x02\u0816\u0814\x03\x02"+
		"\x02\x02\u0816\u0815\x03\x02\x02\x02\u0817\u0129\x03\x02\x02\x02\u0818"+
		"\u0819\x07\xAC\x02\x02\u0819\u081A\x07\x03\x02\x02\u081A\u081B\x07\x13"+
		"\x02\x02\u081B\u0823\x07\x04\x02\x02\u081C\u081D\x07\xAC\x02\x02\u081D"+
		"\u081F\x07\x03\x02\x02\u081E\u0820\x05\u012C\x97\x02\u081F\u081E\x03\x02"+
		"\x02\x02\u081F\u0820\x03\x02\x02\x02\u0820\u0821\x03\x02\x02\x02\u0821"+
		"\u0823\x07\x04\x02\x02\u0822\u0818\x03\x02\x02\x02\u0822\u081C\x03\x02"+
		"\x02\x02\u0823\u012B\x03\x02\x02\x02\u0824\u0828\x05\u012E\x98\x02\u0825"+
		"\u0828\x07\xAC\x02\x02\u0826\u0828\x05\u012A\x96\x02\u0827\u0824\x03\x02"+
		"\x02\x02\u0827\u0825\x03\x02\x02\x02\u0827\u0826\x03\x02\x02\x02\u0828"+
		"\u0831\x03\x02\x02\x02\u0829\u082D\x05\u02AA\u0156\x02\u082A\u082E\x05"+
		"\u012E\x98\x02\u082B\u082E\x07\xAC\x02\x02\u082C\u082E\x05\u012A\x96\x02"+
		"\u082D\u082A\x03\x02\x02\x02\u082D\u082B\x03\x02\x02\x02\u082D\u082C\x03"+
		"\x02\x02\x02\u082E\u0830\x03\x02\x02\x02\u082F\u0829\x03\x02\x02\x02\u0830"+
		"\u0833\x03\x02\x02\x02\u0831\u082F\x03\x02\x02\x02\u0831\u0832\x03\x02"+
		"\x02\x02\u0832\u012D\x03\x02\x02\x02\u0833\u0831\x03\x02\x02\x02\u0834"+
		"\u083C\x05\u013E\xA0\x02\u0835\u083C\x05\u0144\xA3\x02\u0836\u083C\x05"+
		"\u0140\xA1\x02\u0837\u083C\x05\u0142\xA2\x02\u0838\u083C\x05\u0148\xA5"+
		"\x02\u0839\u083C\x05\u0146\xA4\x02\u083A\u083C\x05\u020C\u0107\x02\u083B"+
		"\u0834\x03\x02\x02\x02\u083B\u0835\x03\x02\x02\x02\u083B\u0836\x03\x02"+
		"\x02\x02\u083B\u0837\x03\x02\x02\x02\u083B\u0838\x03\x02\x02\x02\u083B"+
		"\u0839\x03\x02\x02\x02\u083B\u083A\x03\x02\x02\x02\u083C\u012F\x03\x02"+
		"\x02\x02\u083D\u0843\x05\u012E\x98\x02\u083E\u0843\x05\u0136\x9C\x02\u083F"+
		"\u0843\x05\u0138\x9D\x02\u0840\u0843\x05\u013A\x9E\x02\u0841\u0843\x05"+
		"\u013C\x9F\x02\u0842\u083D\x03\x02\x02\x02\u0842\u083E\x03\x02\x02\x02"+
		"\u0842\u083F\x03\x02\x02\x02\u0842\u0840\x03\x02\x02\x02\u0842\u0841\x03"+
		"\x02\x02\x02\u0843\u0131\x03\x02\x02\x02\u0844\u0845\x05\u0130\x99\x02"+
		"\u0845\u0846\x05\u02AC\u0157\x02\u0846\u0847\x05\u0130\x99\x02\u0847\u0133"+
		"\x03\x02\x02\x02\u0848\u084D\x05\u0136\x9C\x02\u0849\u084D\x05\u013C\x9F"+
		"\x02\u084A\u084D\x05\u013A\x9E\x02\u084B\u084D\x05\u0138\x9D\x02\u084C"+
		"\u0848\x03\x02\x02\x02\u084C\u0849\x03\x02\x02\x02\u084C\u084A\x03\x02"+
		"\x02\x02\u084C\u084B\x03\x02\x02\x02\u084D\u0135\x03\x02\x02\x02\u084E"+
		"\u084F\x05\u029E\u0150\x02\u084F\u0855\x05\u0132\x9A\x02\u0850\u0851\x05"+
		"\u02AA\u0156\x02\u0851\u0852\x05\u0132\x9A\x02\u0852\u0854\x03\x02\x02"+
		"\x02\u0853\u0850\x03\x02\x02\x02\u0854\u0857\x03\x02\x02\x02\u0855\u0853"+
		"\x03\x02\x02\x02\u0855\u0856\x03\x02\x02\x02\u0856\u0858\x03\x02\x02\x02"+
		"\u0857\u0855\x03\x02\x02\x02\u0858\u0859\x05\u02A0\u0151\x02\u0859\u0137"+
		"\x03\x02\x02\x02\u085A\u085B\x05\u029E\u0150\x02\u085B\u0861\x05\u0130"+
		"\x99\x02\u085C\u085D\x05\u02AA\u0156\x02\u085D\u085E\x05\u0130\x99\x02"+
		"\u085E\u0860\x03\x02\x02\x02\u085F\u085C\x03\x02\x02\x02\u0860\u0863\x03"+
		"\x02\x02\x02\u0861\u085F\x03\x02\x02\x02\u0861\u0862\x03\x02\x02\x02\u0862"+
		"\u0864\x03\x02\x02\x02\u0863\u0861\x03\x02\x02\x02\u0864\u0865\x05\u02A0"+
		"\u0151\x02\u0865\u0139\x03\x02\x02\x02\u0866\u0867\x05\u02A6\u0154\x02"+
		"\u0867\u086D\x05\u0130\x99\x02\u0868\u0869\x05\u02AA\u0156\x02\u0869\u086A"+
		"\x05\u0130\x99\x02\u086A\u086C\x03\x02\x02\x02\u086B\u0868\x03\x02\x02"+
		"\x02\u086C\u086F\x03\x02\x02\x02\u086D\u086B\x03\x02\x02\x02\u086D\u086E"+
		"\x03\x02\x02\x02\u086E\u0870\x03\x02\x02\x02\u086F\u086D\x03\x02\x02\x02"+
		"\u0870\u0871\x05\u02A8\u0155\x02\u0871\u013B\x03\x02\x02\x02\u0872\u0873"+
		"\x05\u029A\u014E\x02\u0873\u0879\x05\u0130\x99\x02\u0874\u0875\x05\u02AA"+
		"\u0156\x02\u0875\u0876\x05\u0130\x99\x02\u0876\u0878\x03\x02\x02\x02\u0877"+
		"\u0874\x03\x02\x02\x02\u0878\u087B\x03\x02\x02\x02\u0879\u0877\x03\x02"+
		"\x02\x02\u0879\u087A\x03\x02\x02\x02\u087A\u087C\x03\x02\x02\x02\u087B"+
		"\u0879\x03\x02\x02\x02\u087C\u087D\x05\u029C\u014F\x02\u087D\u013D\x03"+
		"\x02\x02\x02\u087E\u087F\x07\xAD\x02\x02\u087F\u013F\x03\x02\x02\x02\u0880"+
		"\u0881\x07\xA8\x02\x02\u0881\u0141\x03\x02\x02\x02\u0882\u0883\t\x02\x02"+
		"\x02\u0883\u0143\x03\x02\x02\x02\u0884\u0885\x07\xA7\x02\x02\u0885\u0145"+
		"\x03\x02\x02\x02\u0886\u0887\t\x03\x02\x02\u0887\u0147\x03\x02\x02\x02"+
		"\u0888\u0889\x07\xAA\x02\x02\u0889\u0149\x03\x02\x02\x02\u088A\u089F\x07"+
		"\xAC\x02\x02\u088B\u088C\x07\f\x02\x02\u088C\u088D\x07\xAC\x02\x02\u088D"+
		"\u089F\x07\f\x02\x02\u088E\u089F\x07\x99\x02\x02\u088F\u089F\x07g\x02"+
		"\x02\u0890\u089F\x07`\x02\x02\u0891\u089F\x077\x02\x02\u0892\u089F\x07"+
		"O\x02\x02\u0893\u089F\x07\x81\x02\x02\u0894\u089F\x07G\x02\x02\u0895\u089F"+
		"\x07l\x02\x02\u0896\u089F\x07\x7F\x02\x02\u0897\u089F\x07c\x02\x02\u0898"+
		"\u089F\x07L\x02\x02\u0899\u089F\x07P\x02\x02\u089A\u089F\x07\xA4\x02\x02"+
		"\u089B\u089F\x07\xA5\x02\x02\u089C\u089F\x07\x99\x02\x02\u089D\u089F\x07"+
		"\x98\x02\x02\u089E\u088A\x03\x02\x02\x02\u089E\u088B\x03\x02\x02\x02\u089E"+
		"\u088E\x03\x02\x02\x02\u089E\u088F\x03\x02\x02\x02\u089E\u0890\x03\x02"+
		"\x02\x02\u089E\u0891\x03\x02\x02\x02\u089E\u0892\x03\x02\x02\x02\u089E"+
		"\u0893\x03\x02\x02\x02\u089E\u0894\x03\x02\x02\x02\u089E\u0895\x03\x02"+
		"\x02\x02\u089E\u0896\x03\x02\x02\x02\u089E\u0897\x03\x02\x02\x02\u089E"+
		"\u0898\x03\x02\x02\x02\u089E\u0899\x03\x02\x02\x02\u089E\u089A\x03\x02"+
		"\x02\x02\u089E\u089B\x03\x02\x02\x02\u089E\u089C\x03\x02\x02\x02\u089E"+
		"\u089D\x03\x02\x02\x02\u089F\u014B\x03\x02\x02\x02\u08A0\u08B5\x07\xAC"+
		"\x02\x02\u08A1\u08A2\x07\f\x02\x02\u08A2\u08A3\x07\xAC\x02\x02\u08A3\u08B5"+
		"\x07\f\x02\x02\u08A4\u08B5\x07\x99\x02\x02\u08A5\u08B5\x07g\x02\x02\u08A6"+
		"\u08B5\x07`\x02\x02\u08A7\u08B5\x077\x02\x02\u08A8\u08B5\x07O\x02\x02"+
		"\u08A9\u08B5\x07\x81\x02\x02\u08AA\u08B5\x07G\x02\x02\u08AB\u08B5\x07"+
		"l\x02\x02\u08AC\u08B5\x07\x7F\x02\x02\u08AD\u08B5\x07c\x02\x02\u08AE\u08B5"+
		"\x07L\x02\x02\u08AF\u08B5\x07P\x02\x02\u08B0\u08B5\x07\xA4\x02\x02\u08B1"+
		"\u08B5\x07\xA5\x02\x02\u08B2\u08B5\x07\x99\x02\x02\u08B3\u08B5\x07\x98"+
		"\x02\x02\u08B4\u08A0\x03\x02\x02\x02\u08B4\u08A1\x03\x02\x02\x02\u08B4"+
		"\u08A4\x03\x02\x02\x02\u08B4\u08A5\x03\x02\x02\x02\u08B4\u08A6\x03\x02"+
		"\x02\x02\u08B4\u08A7\x03\x02\x02\x02\u08B4\u08A8\x03\x02\x02\x02\u08B4"+
		"\u08A9\x03\x02\x02\x02\u08B4\u08AA\x03\x02\x02\x02\u08B4\u08AB\x03\x02"+
		"\x02\x02\u08B4\u08AC\x03\x02\x02\x02\u08B4\u08AD\x03\x02\x02\x02\u08B4"+
		"\u08AE\x03\x02\x02\x02\u08B4\u08AF\x03\x02\x02\x02\u08B4\u08B0\x03\x02"+
		"\x02\x02\u08B4\u08B1\x03\x02\x02\x02\u08B4\u08B2\x03\x02\x02\x02\u08B4"+
		"\u08B3\x03\x02\x02\x02\u08B5\u014D\x03\x02\x02\x02\u08B6\u08B7\t\x04\x02"+
		"\x02\u08B7\u014F\x03\x02\x02\x02";
	private static readonly _serializedATNSegment4: string =
		"\u08B8\u08B9\t\x04\x02\x02\u08B9\u0151\x03\x02\x02\x02\u08BA\u08CF\x07"+
		"\xAC\x02\x02\u08BB\u08BC\x07\f\x02\x02\u08BC\u08BD\x07\xAC\x02\x02\u08BD"+
		"\u08CF\x07\f\x02\x02\u08BE\u08CF\x07\x99\x02\x02\u08BF\u08CF\x07g\x02"+
		"\x02\u08C0\u08CF\x07`\x02\x02\u08C1\u08CF\x077\x02\x02\u08C2\u08CF\x07"+
		"O\x02\x02\u08C3\u08CF\x07\x81\x02\x02\u08C4\u08CF\x07G\x02\x02\u08C5\u08CF"+
		"\x07l\x02\x02\u08C6\u08CF\x07\x7F\x02\x02\u08C7\u08CF\x07c\x02\x02\u08C8"+
		"\u08CF\x07L\x02\x02\u08C9\u08CF\x07P\x02\x02\u08CA\u08CF\x07\xA4\x02\x02"+
		"\u08CB\u08CF\x07\xA5\x02\x02\u08CC\u08CF\x07\x99\x02\x02\u08CD\u08CF\x07"+
		"\x98\x02\x02\u08CE\u08BA\x03\x02\x02\x02\u08CE\u08BB\x03\x02\x02\x02\u08CE"+
		"\u08BE\x03\x02\x02\x02\u08CE\u08BF\x03\x02\x02\x02\u08CE\u08C0\x03\x02"+
		"\x02\x02\u08CE\u08C1\x03\x02\x02\x02\u08CE\u08C2\x03\x02\x02\x02\u08CE"+
		"\u08C3\x03\x02\x02\x02\u08CE\u08C4\x03\x02\x02\x02\u08CE\u08C5\x03\x02"+
		"\x02\x02\u08CE\u08C6\x03\x02\x02\x02\u08CE\u08C7\x03\x02\x02\x02\u08CE"+
		"\u08C8\x03\x02\x02\x02\u08CE\u08C9\x03\x02\x02\x02\u08CE\u08CA\x03\x02"+
		"\x02\x02\u08CE\u08CB\x03\x02\x02\x02\u08CE\u08CC\x03\x02\x02\x02\u08CE"+
		"\u08CD\x03\x02\x02\x02\u08CF\u0153\x03\x02\x02\x02\u08D0\u08E5\x07\xAC"+
		"\x02\x02\u08D1\u08D2\x07\f\x02\x02\u08D2\u08D3\x07\xAC\x02\x02\u08D3\u08E5"+
		"\x07\f\x02\x02\u08D4\u08E5\x07\x99\x02\x02\u08D5\u08E5\x07g\x02\x02\u08D6"+
		"\u08E5\x07`\x02\x02\u08D7\u08E5\x077\x02\x02\u08D8\u08E5\x07O\x02\x02"+
		"\u08D9\u08E5\x07\x81\x02\x02\u08DA\u08E5\x07G\x02\x02\u08DB\u08E5\x07"+
		"l\x02\x02\u08DC\u08E5\x07\x7F\x02\x02\u08DD\u08E5\x07c\x02\x02\u08DE\u08E5"+
		"\x07L\x02\x02\u08DF\u08E5\x07P\x02\x02\u08E0\u08E5\x07\xA4\x02\x02\u08E1"+
		"\u08E5\x07\xA5\x02\x02\u08E2\u08E5\x07\x99\x02\x02\u08E3\u08E5\x07\x98"+
		"\x02\x02\u08E4\u08D0\x03\x02\x02\x02\u08E4\u08D1\x03\x02\x02\x02\u08E4"+
		"\u08D4\x03\x02\x02\x02\u08E4\u08D5\x03\x02\x02\x02\u08E4\u08D6\x03\x02"+
		"\x02\x02\u08E4\u08D7\x03\x02\x02\x02\u08E4\u08D8\x03\x02\x02\x02\u08E4"+
		"\u08D9\x03\x02\x02\x02\u08E4\u08DA\x03\x02\x02\x02\u08E4\u08DB\x03\x02"+
		"\x02\x02\u08E4\u08DC\x03\x02\x02\x02\u08E4\u08DD\x03\x02\x02\x02\u08E4"+
		"\u08DE\x03\x02\x02\x02\u08E4\u08DF\x03\x02\x02\x02\u08E4\u08E0\x03\x02"+
		"\x02\x02\u08E4\u08E1\x03\x02\x02\x02\u08E4\u08E2\x03\x02\x02\x02\u08E4"+
		"\u08E3\x03\x02\x02\x02\u08E5\u0155\x03\x02\x02\x02\u08E6\u08FC\x07\xAC"+
		"\x02\x02\u08E7\u08E8\x07\f\x02\x02\u08E8\u08E9\x07\xAC\x02\x02\u08E9\u08FC"+
		"\x07\f\x02\x02\u08EA\u08FC\x07\x99\x02\x02\u08EB\u08FC\x07g\x02\x02\u08EC"+
		"\u08FC\x07`\x02\x02\u08ED\u08FC\x077\x02\x02\u08EE\u08FC\x07O\x02\x02"+
		"\u08EF\u08FC\x07\x81\x02\x02\u08F0\u08FC\x07G\x02\x02\u08F1\u08FC\x07"+
		"l\x02\x02\u08F2\u08FC\x07\x7F\x02\x02\u08F3\u08FC\x07c\x02\x02\u08F4\u08FC"+
		"\x07L\x02\x02\u08F5\u08FC\x07P\x02\x02\u08F6\u08FC\x07\xA4\x02\x02\u08F7"+
		"\u08FC\x07\xA5\x02\x02\u08F8\u08FC\x07\x99\x02\x02\u08F9\u08FC\x07\x98"+
		"\x02\x02\u08FA\u08FC\x07H\x02\x02\u08FB\u08E6\x03\x02\x02\x02\u08FB\u08E7"+
		"\x03\x02\x02\x02\u08FB\u08EA\x03\x02\x02\x02\u08FB\u08EB\x03\x02\x02\x02"+
		"\u08FB\u08EC\x03\x02\x02\x02\u08FB\u08ED\x03\x02\x02\x02\u08FB\u08EE\x03"+
		"\x02\x02\x02\u08FB\u08EF\x03\x02\x02\x02\u08FB\u08F0\x03\x02\x02\x02\u08FB"+
		"\u08F1\x03\x02\x02\x02\u08FB\u08F2\x03\x02\x02\x02\u08FB\u08F3\x03\x02"+
		"\x02\x02\u08FB\u08F4\x03\x02\x02\x02\u08FB\u08F5\x03\x02\x02\x02\u08FB"+
		"\u08F6\x03\x02\x02\x02\u08FB\u08F7\x03\x02\x02\x02\u08FB\u08F8\x03\x02"+
		"\x02\x02\u08FB\u08F9\x03\x02\x02\x02\u08FB\u08FA\x03\x02\x02\x02\u08FC"+
		"\u0157\x03\x02\x02\x02\u08FD\u0908\x05\u0182\xC2\x02\u08FE\u08FF\x05\u014A"+
		"\xA6\x02\u08FF\u0900\x05\u0296\u014C\x02\u0900\u0901\x05\u0182\xC2\x02"+
		"\u0901\u0908\x03\x02\x02\x02\u0902\u0903\x05\u014A\xA6\x02\u0903\u0904"+
		"\x05\u0296\u014C\x02\u0904\u0905\b\xAD\x01\x02\u0905\u0908\x03\x02\x02"+
		"\x02\u0906\u0908\b\xAD\x01\x02\u0907\u08FD\x03\x02\x02\x02\u0907\u08FE"+
		"\x03\x02\x02\x02\u0907\u0902\x03\x02\x02\x02\u0907\u0906\x03\x02\x02\x02"+
		"\u0908\u0159\x03\x02\x02\x02\u0909\u0914\x05\u0180\xC1\x02\u090A\u090B"+
		"\x05\u014A\xA6\x02\u090B\u090C\x05\u0296\u014C\x02\u090C\u090D\x05\u0180"+
		"\xC1\x02\u090D\u0914\x03\x02\x02\x02\u090E\u090F\x05\u014A\xA6\x02\u090F"+
		"\u0910\x05\u0296\u014C\x02\u0910\u0911\b\xAE\x01\x02\u0911\u0914\x03\x02"+
		"\x02\x02\u0912\u0914\b\xAE\x01\x02\u0913\u0909\x03\x02\x02\x02\u0913\u090A"+
		"\x03\x02\x02\x02\u0913\u090E\x03\x02\x02\x02\u0913\u0912\x03\x02\x02\x02"+
		"\u0914\u015B\x03\x02\x02\x02\u0915\u0920\x05\u0184\xC3\x02\u0916\u0917"+
		"\x05\u014A\xA6\x02\u0917\u0918\x05\u0296\u014C\x02\u0918\u0919\x05\u0184"+
		"\xC3\x02\u0919\u0920\x03\x02\x02\x02\u091A\u091B\x05\u014A\xA6\x02\u091B"+
		"\u091C\x05\u0296\u014C\x02\u091C\u091D\b\xAF\x01\x02\u091D\u0920\x03\x02"+
		"\x02\x02\u091E\u0920\b\xAF\x01\x02\u091F\u0915\x03\x02\x02\x02\u091F\u0916"+
		"\x03\x02\x02\x02\u091F\u091A\x03\x02\x02\x02\u091F\u091E\x03\x02\x02\x02"+
		"\u0920\u015D\x03\x02\x02\x02\u0921\u0936\x05\u014E\xA8\x02\u0922\u0923"+
		"\x05\u02B4\u015B\x02\u0923\u0924\x05\u014E\xA8\x02\u0924\u0925\x05\u02B4"+
		"\u015B\x02\u0925\u0936\x03\x02\x02\x02\u0926\u0927\x05\u014A\xA6\x02\u0927"+
		"\u0928\x05\u0296\u014C\x02\u0928\u0929\x05\u014E\xA8\x02\u0929\u0936\x03"+
		"\x02\x02\x02\u092A\u092B\x05\u014A\xA6\x02\u092B\u092C\x05\u0296\u014C"+
		"\x02\u092C\u092D\x05\u02B4\u015B\x02\u092D\u092E\x05\u014E\xA8\x02\u092E"+
		"\u092F\x05\u02B4\u015B\x02\u092F\u0936\x03\x02\x02\x02\u0930\u0931\x05"+
		"\u014A\xA6\x02\u0931\u0932\x05\u0296\u014C\x02\u0932\u0933\b\xB0\x01\x02"+
		"\u0933\u0936\x03\x02\x02\x02\u0934\u0936\b\xB0\x01\x02\u0935\u0921\x03"+
		"\x02\x02\x02\u0935\u0922\x03\x02\x02\x02\u0935\u0926\x03\x02\x02\x02\u0935"+
		"\u092A\x03\x02\x02\x02\u0935\u0930\x03\x02\x02\x02\u0935\u0934\x03\x02"+
		"\x02\x02\u0936\u015F\x03\x02\x02\x02\u0937\u094C\x05\u0150\xA9\x02\u0938"+
		"\u0939\x05\u02B4\u015B\x02\u0939\u093A\x05\u0150\xA9\x02\u093A\u093B\x05"+
		"\u02B4\u015B\x02\u093B\u094C\x03\x02\x02\x02\u093C\u093D\x05\u014C\xA7"+
		"\x02\u093D\u093E\x05\u0296\u014C\x02\u093E\u093F\x05\u0150\xA9\x02\u093F"+
		"\u094C\x03\x02\x02\x02\u0940\u0941\x05\u014C\xA7\x02\u0941\u0942\x05\u0296"+
		"\u014C\x02\u0942\u0943\x05\u02B4\u015B\x02\u0943\u0944\x05\u0150\xA9\x02"+
		"\u0944\u0945\x05\u02B4\u015B\x02\u0945\u094C\x03\x02\x02\x02\u0946\u0947"+
		"\x05\u014C\xA7\x02\u0947\u0948\x05\u0296\u014C\x02\u0948\u0949\b\xB1\x01"+
		"\x02\u0949\u094C\x03\x02\x02\x02\u094A\u094C\b\xB1\x01\x02\u094B\u0937"+
		"\x03\x02\x02\x02\u094B\u0938\x03\x02\x02\x02\u094B\u093C\x03\x02\x02\x02"+
		"\u094B\u0940\x03\x02\x02\x02\u094B\u0946\x03\x02\x02\x02\u094B\u094A\x03"+
		"\x02\x02\x02\u094C\u0161\x03\x02\x02\x02\u094D\u0958\x05\xCEh\x02\u094E"+
		"\u094F\x05\u014A\xA6\x02\u094F\u0950\x05\u0296\u014C\x02\u0950\u0951\x05"+
		"\xCEh\x02\u0951\u0958\x03\x02\x02\x02\u0952\u0953\x05\u014A\xA6\x02\u0953"+
		"\u0954\x05\u0296\u014C\x02\u0954\u0955\b\xB2\x01\x02\u0955\u0958\x03\x02"+
		"\x02\x02\u0956\u0958\b\xB2\x01\x02\u0957\u094D\x03\x02\x02\x02\u0957\u094E"+
		"\x03\x02\x02\x02\u0957\u0952\x03\x02\x02\x02\u0957\u0956\x03\x02\x02\x02"+
		"\u0958\u0163\x03\x02\x02\x02\u0959\u0964\x05\u0152\xAA\x02\u095A\u095B"+
		"\x05\u014A\xA6\x02\u095B\u095C\x05\u0296\u014C\x02\u095C\u095D\x05\u0152"+
		"\xAA\x02\u095D\u0964\x03\x02\x02\x02\u095E\u095F\x05\u014A\xA6\x02\u095F"+
		"\u0960\x05\u0296\u014C\x02\u0960\u0961\b\xB3\x01\x02\u0961\u0964\x03\x02"+
		"\x02\x02\u0962\u0964\b\xB3\x01\x02\u0963\u0959\x03\x02\x02\x02\u0963\u095A"+
		"\x03\x02\x02\x02\u0963\u095E\x03\x02\x02\x02\u0963\u0962\x03\x02\x02\x02"+
		"\u0964\u0165\x03\x02\x02\x02\u0965\u0969\x05\u015E\xB0\x02\u0966\u0969"+
		"\x05\u0164\xB3\x02\u0967\u0969\b\xB4\x01\x02\u0968\u0965\x03\x02\x02\x02"+
		"\u0968\u0966\x03\x02\x02\x02\u0968\u0967\x03\x02\x02\x02\u0969\u0167\x03"+
		"\x02\x02\x02\u096A\u0971\x05\u0156\xAC\x02\u096B\u096C\x05\u014A\xA6\x02"+
		"\u096C\u096D\x05\u0296\u014C\x02\u096D\u096E\x05\u0156\xAC\x02\u096E\u0971"+
		"\x03\x02\x02\x02\u096F\u0971\b\xB5\x01\x02\u0970\u096A\x03\x02\x02\x02"+
		"\u0970\u096B\x03\x02\x02\x02\u0970\u096F\x03\x02\x02\x02\u0971\u0169\x03"+
		"\x02\x02\x02\u0972\u0978\x05\u016C\xB7\x02\u0973\u0974\x05\u02B4\u015B"+
		"\x02\u0974\u0975\x05\u016C\xB7\x02\u0975\u0976\x05\u02B4\u015B\x02\u0976"+
		"\u0978\x03\x02\x02\x02\u0977\u0972\x03\x02\x02\x02\u0977\u0973\x03\x02"+
		"\x02\x02\u0978\u016B\x03\x02\x02\x02\u0979\u097A\t\x05\x02\x02\u097A\u016D"+
		"\x03\x02\x02\x02\u097B\u0981\x05\u0170\xB9\x02\u097C\u097D\x05\u02B4\u015B"+
		"\x02\u097D\u097E\x05\u0170\xB9\x02\u097E\u097F\x05\u02B4\u015B\x02\u097F"+
		"\u0981\x03\x02\x02\x02\u0980\u097B\x03\x02\x02\x02\u0980\u097C\x03\x02"+
		"\x02\x02\u0981\u016F\x03\x02\x02\x02\u0982\u0999\x07\xAC\x02\x02\u0983"+
		"\u0999\x07\x99\x02\x02\u0984\u0999\x07g\x02\x02\u0985\u0999\x07`\x02\x02"+
		"\u0986\u0999\x077\x02\x02\u0987\u0999\x07O\x02\x02\u0988\u0999\x07\x81"+
		"\x02\x02\u0989\u0999\x07G\x02\x02\u098A\u0999\x07l\x02\x02\u098B\u0999"+
		"\x07\x7F\x02\x02\u098C\u0999\x07c\x02\x02\u098D\u0999\x07L\x02\x02\u098E"+
		"\u0999\x07P\x02\x02\u098F\u0999\x07\xA4\x02\x02\u0990\u0999\x07\xA5\x02"+
		"\x02\u0991\u0999\x07\x99\x02\x02\u0992\u0999\x07\x98\x02\x02\u0993\u0999"+
		"\x07H\x02\x02\u0994\u0995\x05\u02B4\u015B\x02\u0995\u0996\t\x05\x02\x02"+
		"\u0996\u0997\x05\u02B4\u015B\x02\u0997\u0999\x03\x02\x02\x02\u0998\u0982"+
		"\x03\x02\x02\x02\u0998\u0983\x03\x02\x02\x02\u0998\u0984\x03\x02\x02\x02"+
		"\u0998\u0985\x03\x02\x02\x02\u0998\u0986\x03\x02\x02\x02\u0998\u0987\x03"+
		"\x02\x02\x02\u0998\u0988\x03\x02\x02\x02\u0998\u0989\x03\x02\x02\x02\u0998"+
		"\u098A\x03\x02\x02\x02\u0998\u098B\x03\x02\x02\x02\u0998\u098C\x03\x02"+
		"\x02\x02\u0998\u098D\x03\x02\x02\x02\u0998\u098E\x03\x02\x02\x02\u0998"+
		"\u098F\x03\x02\x02\x02\u0998\u0990\x03\x02\x02\x02\u0998\u0991\x03\x02"+
		"\x02\x02\u0998\u0992\x03\x02\x02\x02\u0998\u0993\x03\x02\x02\x02\u0998"+
		"\u0994\x03\x02\x02\x02\u0999\u0171\x03\x02\x02\x02\u099A\u099D\x05\u0176"+
		"\xBC\x02\u099B\u099D\x05\u0174\xBB\x02\u099C\u099A\x03\x02\x02\x02\u099C"+
		"\u099B\x03\x02\x02\x02\u099D\u0173\x03\x02\x02\x02\u099E\u09A1\x05\u0270"+
		"\u0139\x02\u099F\u09A2\x05\u0292\u014A\x02\u09A0\u09A2\b\xBB\x01\x02\u09A1"+
		"\u099F\x03\x02\x02\x02\u09A1\u09A0\x03\x02\x02\x02\u09A2\u09B8\x03\x02"+
		"\x02\x02\u09A3\u09A6\x05\u027C\u013F\x02\u09A4\u09A7\x05\u0292\u014A\x02"+
		"\u09A5\u09A7\b\xBB\x01\x02\u09A6\u09A4\x03\x02\x02\x02\u09A6\u09A5\x03"+
		"\x02\x02\x02\u09A7\u09B8\x03\x02\x02\x02\u09A8\u09AB\x05\u0276\u013C\x02"+
		"\u09A9\u09AC\x05\u0292\u014A\x02\u09AA\u09AC\b\xBB\x01\x02\u09AB\u09A9"+
		"\x03\x02\x02\x02\u09AB\u09AA\x03\x02\x02\x02\u09AC\u09B8\x03\x02\x02\x02"+
		"\u09AD\u09B0\x05\u0278\u013D\x02\u09AE\u09B1\x05\u0292\u014A\x02\u09AF"+
		"\u09B1\b\xBB\x01\x02\u09B0\u09AE\x03\x02\x02\x02\u09B0\u09AF\x03\x02\x02"+
		"\x02\u09B1\u09B8\x03\x02\x02\x02\u09B2\u09B5\x05\u0288\u0145\x02\u09B3"+
		"\u09B6\x05\u0292\u014A\x02\u09B4\u09B6\b\xBB\x01\x02\u09B5\u09B3\x03\x02"+
		"\x02\x02\u09B5\u09B4\x03\x02\x02\x02\u09B6\u09B8\x03\x02\x02\x02\u09B7"+
		"\u099E\x03\x02\x02\x02\u09B7\u09A3\x03\x02\x02\x02\u09B7\u09A8\x03\x02"+
		"\x02\x02\u09B7\u09AD\x03\x02\x02\x02\u09B7\u09B2\x03\x02\x02\x02\u09B8"+
		"\u0175\x03\x02\x02\x02\u09B9\u09CF\x05\u025E\u0130\x02\u09BA\u09CF\x05"+
		"\u0260\u0131\x02\u09BB\u09CF\x05\u0262\u0132\x02\u09BC\u09CF\x05\u0264"+
		"\u0133\x02\u09BD\u09CF\x05\u0266\u0134\x02\u09BE\u09CF\x05\u0268\u0135"+
		"\x02\u09BF\u09CF\x05\u026A\u0136\x02\u09C0\u09CF\x05\u026C\u0137\x02\u09C1"+
		"\u09CF\x05\u026E\u0138\x02\u09C2\u09CF\x05\u0272\u013A\x02\u09C3\u09CF"+
		"\x05\u0274\u013B\x02\u09C4\u09CF\x05\u027A\u013E\x02\u09C5\u09CF\x05\u027E"+
		"\u0140\x02\u09C6\u09CF\x05\u0280\u0141\x02\u09C7\u09CF\x05\u0282\u0142"+
		"\x02\u09C8\u09CF\x05\u0284\u0143\x02\u09C9\u09CF\x05\u0286\u0144\x02\u09CA"+
		"\u09CF\x05\u028C\u0147\x02\u09CB\u09CF\x05\u028E\u0148\x02\u09CC\u09CF"+
		"\x05\u0290\u0149\x02\u09CD\u09CF\x05\u028A\u0146\x02\u09CE\u09B9\x03\x02"+
		"\x02\x02\u09CE\u09BA\x03\x02\x02\x02\u09CE\u09BB\x03\x02\x02\x02\u09CE"+
		"\u09BC\x03\x02\x02\x02\u09CE\u09BD\x03\x02\x02\x02\u09CE\u09BE\x03\x02"+
		"\x02\x02\u09CE\u09BF\x03\x02\x02\x02\u09CE\u09C0\x03\x02\x02\x02\u09CE"+
		"\u09C1\x03\x02\x02\x02\u09CE\u09C2\x03\x02\x02\x02\u09CE\u09C3\x03\x02"+
		"\x02\x02\u09CE\u09C4\x03\x02\x02\x02\u09CE\u09C5\x03\x02\x02\x02\u09CE"+
		"\u09C6\x03\x02\x02\x02\u09CE\u09C7\x03\x02\x02\x02\u09CE\u09C8\x03\x02"+
		"\x02\x02\u09CE\u09C9\x03\x02\x02\x02\u09CE\u09CA\x03\x02\x02\x02\u09CE"+
		"\u09CB\x03\x02\x02\x02\u09CE\u09CC\x03\x02\x02\x02\u09CE\u09CD\x03\x02"+
		"\x02\x02\u09CF\u0177\x03\x02\x02\x02\u09D0\u09D3\x05\u01AC\xD7\x02\u09D1"+
		"\u09D3\x05\u01C4\xE3\x02\u09D2\u09D0\x03\x02\x02\x02\u09D2\u09D1\x03\x02"+
		"\x02\x02\u09D3\u0179\x03\x02\x02\x02\u09D4\u09D5\x07\xAC\x02\x02\u09D5"+
		"\u017B\x03\x02\x02\x02\u09D6\u09D7\x07\xAC\x02\x02\u09D7\u017D\x03\x02"+
		"\x02\x02\u09D8\u09D9\x05\u0144\xA3\x02\u09D9\u017F\x03\x02\x02\x02\u09DA"+
		"\u09DB\x07\xAC\x02\x02\u09DB\u0181\x03\x02\x02\x02\u09DC\u09F2\x07\xAC"+
		"\x02\x02\u09DD\u09DE\x07\f\x02\x02\u09DE\u09DF\x07\xAC\x02\x02\u09DF\u09F2"+
		"\x07\f\x02\x02\u09E0\u09F2\x07\x99\x02\x02\u09E1\u09F2\x07g\x02\x02\u09E2"+
		"\u09F2\x07`\x02\x02\u09E3\u09F2\x077\x02\x02\u09E4\u09F2\x07O\x02\x02"+
		"\u09E5\u09F2\x07\x81\x02\x02\u09E6\u09F2\x07G\x02\x02\u09E7\u09F2\x07"+
		"l\x02\x02\u09E8\u09F2\x07\x7F\x02\x02\u09E9\u09F2\x07c\x02\x02\u09EA\u09F2"+
		"\x07L\x02\x02\u09EB\u09F2\x07P\x02\x02\u09EC\u09F2\x07\xA4\x02\x02\u09ED"+
		"\u09F2\x07\xA5\x02\x02\u09EE\u09F2\x07\x99\x02\x02\u09EF\u09F2\x07\x98"+
		"\x02\x02\u09F0\u09F2\x07H\x02\x02\u09F1\u09DC\x03\x02\x02\x02\u09F1\u09DD"+
		"\x03\x02\x02\x02\u09F1\u09E0\x03\x02\x02\x02\u09F1\u09E1\x03\x02\x02\x02"+
		"\u09F1\u09E2\x03\x02\x02\x02\u09F1\u09E3\x03\x02\x02\x02\u09F1\u09E4\x03"+
		"\x02\x02\x02\u09F1\u09E5\x03\x02\x02\x02\u09F1\u09E6\x03\x02\x02\x02\u09F1"+
		"\u09E7\x03\x02\x02\x02\u09F1\u09E8\x03\x02\x02\x02\u09F1\u09E9\x03\x02"+
		"\x02\x02\u09F1\u09EA\x03\x02\x02\x02\u09F1\u09EB\x03\x02\x02\x02\u09F1"+
		"\u09EC\x03\x02\x02\x02\u09F1\u09ED\x03\x02\x02\x02\u09F1\u09EE\x03\x02"+
		"\x02\x02\u09F1\u09EF\x03\x02\x02\x02\u09F1\u09F0\x03\x02\x02\x02\u09F2"+
		"\u0183\x03\x02\x02\x02\u09F3\u09F4\x07\xAC\x02\x02\u09F4\u0185\x03\x02"+
		"\x02\x02\u09F5\u09F6\x07\xAC\x02\x02\u09F6\u0187\x03\x02\x02\x02\u09F7"+
		"\u09F8\x07\xAC\x02\x02\u09F8\u0189\x03\x02\x02\x02\u09F9\u09FA\x05\u0144"+
		"\xA3\x02\u09FA\u018B\x03\x02\x02\x02\u09FB\u09FC\x07\xAC\x02\x02\u09FC"+
		"\u018D\x03\x02\x02\x02\u09FD\u09FE\x05\u0190\xC9\x02\u09FE\u09FF\x05\u0172"+
		"\xBA\x02\u09FF\u018F\x03\x02\x02\x02\u0A00\u0A01\t\x05\x02\x02\u0A01\u0191"+
		"\x03\x02\x02\x02\u0A02\u0A03\x07\x19\x02\x02\u0A03\u0193\x03\x02\x02\x02"+
		"\u0A04\u0A05\x07\x1A\x02\x02\u0A05\u0195\x03\x02\x02\x02\u0A06\u0A07\x07"+
		"\x1B\x02\x02\u0A07\u0197\x03\x02\x02\x02\u0A08\u0A09\x07\x1E\x02\x02\u0A09"+
		"\u0199\x03\x02\x02\x02\u0A0A\u0A0B\x07\x1D\x02\x02\u0A0B\u019B\x03\x02"+
		"\x02\x02\u0A0C\u0A0D\x07\x1C\x02\x02\u0A0D\u019D\x03\x02\x02\x02\u0A0E"+
		"\u0A0F\x07\x1B\x02\x02\u0A0F\u0A10\x07g\x02\x02\u0A10\u019F\x03\x02\x02"+
		"\x02\u0A11\u0A12\x07\x1F\x02\x02\u0A12\u01A1\x03\x02\x02\x02\u0A13\u0A14"+
		"\x07\x1F\x02\x02\u0A14\u0A15\x07=\x02\x02\u0A15\u01A3\x03\x02\x02\x02"+
		"\u0A16\u0A17\x07 \x02\x02\u0A17\u01A5\x03\x02\x02\x02\u0A18\u0A19\x07"+
		"!\x02\x02\u0A19\u01A7\x03\x02\x02\x02\u0A1A\u0A1B\x07#\x02\x02\u0A1B\u01A9"+
		"\x03\x02\x02\x02\u0A1C\u0A1D\x07$\x02\x02\u0A1D\u01AB\x03\x02\x02\x02"+
		"\u0A1E\u0A1F\x07%\x02\x02\u0A1F\u01AD\x03\x02\x02\x02\u0A20\u0A21\x07"+
		"&\x02\x02\u0A21\u01AF\x03\x02\x02\x02\u0A22\u0A23\x07\'\x02\x02\u0A23"+
		"\u01B1\x03\x02\x02\x02\u0A24\u0A25\x07(\x02\x02\u0A25\u01B3\x03\x02\x02"+
		"\x02\u0A26\u0A27\x07)\x02\x02\u0A27\u01B5\x03\x02\x02\x02\u0A28\u0A29"+
		"\x07*\x02\x02\u0A29\u01B7\x03\x02\x02\x02\u0A2A\u0A2B\x07+\x02\x02\u0A2B"+
		"\u01B9\x03\x02\x02\x02\u0A2C\u0A2D\x07-\x02\x02\u0A2D\u01BB\x03\x02\x02"+
		"\x02\u0A2E\u0A2F\x07/\x02\x02\u0A2F\u01BD\x03\x02\x02\x02\u0A30\u0A31"+
		"\x07/\x02\x02\u0A31\u0A32\x07L\x02\x02\u0A32\u01BF\x03\x02\x02\x02\u0A33"+
		"\u0A34\x070\x02\x02\u0A34\u01C1\x03\x02\x02\x02\u0A35\u0A36\x072\x02\x02"+
		"\u0A36\u01C3\x03\x02\x02\x02\u0A37\u0A38\x073\x02\x02\u0A38\u01C5\x03"+
		"\x02\x02\x02\u0A39\u0A3A\x074\x02\x02\u0A3A\u01C7\x03\x02\x02\x02\u0A3B"+
		"\u0A3C\x075\x02\x02\u0A3C\u01C9\x03\x02\x02\x02\u0A3D\u0A3E\x076\x02\x02"+
		"\u0A3E\u01CB\x03\x02\x02\x02\u0A3F\u0A40\x077\x02\x02\u0A40\u01CD\x03"+
		"\x02\x02\x02\u0A41\u0A42\x079\x02\x02\u0A42\u01CF\x03\x02\x02\x02\u0A43"+
		"\u0A44\x07:\x02\x02\u0A44\u01D1\x03\x02\x02\x02\u0A45\u0A46\x07;\x02\x02"+
		"\u0A46\u01D3\x03\x02\x02\x02\u0A47\u0A48\x07=\x02\x02\u0A48\u01D5\x03"+
		"\x02\x02\x02\u0A49\u0A4A\x07>\x02\x02\u0A4A\u01D7\x03\x02\x02\x02\u0A4B"+
		"\u0A4C\x07?\x02\x02\u0A4C\u01D9\x03\x02\x02\x02\u0A4D\u0A4E\x07@\x02\x02"+
		"\u0A4E\u01DB\x03\x02\x02\x02\u0A4F\u0A50\x07A\x02\x02\u0A50\u01DD\x03"+
		"\x02\x02\x02\u0A51\u0A52\x07B\x02\x02\u0A52\u01DF\x03\x02\x02\x02\u0A53"+
		"\u0A54\x07C\x02\x02\u0A54\u01E1\x03\x02\x02\x02\u0A55\u0A56\x07D\x02\x02"+
		"\u0A56\u01E3\x03\x02\x02\x02\u0A57\u0A58\x07E\x02\x02\u0A58\u01E5\x03"+
		"\x02\x02\x02\u0A59\u0A5A\x07G\x02\x02\u0A5A\u01E7\x03\x02\x02\x02\u0A5B"+
		"\u0A5C\x07H\x02\x02\u0A5C\u01E9\x03\x02\x02\x02\u0A5D\u0A5E\x07I\x02\x02"+
		"\u0A5E\u0A5F\x07J\x02\x02\u0A5F\u01EB\x03\x02\x02\x02\u0A60\u0A61\x07"+
		"K\x02\x02\u0A61\u01ED\x03\x02\x02\x02\u0A62\u0A63\x07L\x02\x02\u0A63\u01EF"+
		"\x03\x02\x02\x02\u0A64\u0A65\x07M\x02\x02\u0A65\u01F1\x03\x02\x02\x02"+
		"\u0A66\u0A67\x07N\x02\x02\u0A67\u01F3\x03\x02\x02\x02\u0A68\u0A69\x07"+
		"O\x02\x02\u0A69\u01F5\x03\x02\x02\x02\u0A6A\u0A6B\x07Q\x02\x02\u0A6B\u01F7"+
		"\x03\x02\x02\x02\u0A6C\u0A6D\x07\x97\x02\x02\u0A6D\u01F9\x03\x02\x02\x02"+
		"\u0A6E\u0A6F\x07\x97\x02\x02\u0A6F\u0A70\x07\x98\x02\x02\u0A70\u01FB\x03"+
		"\x02\x02\x02\u0A71\u0A72\x07\x97\x02\x02\u0A72\u0A73\x07\xA4\x02\x02\u0A73"+
		"\u01FD\x03\x02\x02\x02\u0A74\u0A75\x07T\x02\x02\u0A75\u01FF\x03\x02\x02"+
		"\x02\u0A76\u0A77\x07U\x02\x02\u0A77\u0201\x03\x02\x02\x02\u0A78\u0A79"+
		"\x07V\x02\x02\u0A79\u0A7A\x07\x87\x02\x02\u0A7A\u0203\x03\x02\x02\x02"+
		"\u0A7B\u0A7C\x07W\x02\x02\u0A7C\u0205\x03\x02\x02\x02\u0A7D\u0A7E\x07"+
		"Z\x02\x02\u0A7E\u0207\x03\x02\x02\x02\u0A7F\u0A80\x07Y\x02\x02\u0A80\u0209"+
		"\x03\x02\x02\x02\u0A81\u0A82\x07[\x02\x02\u0A82\u020B\x03\x02\x02\x02"+
		"\u0A83\u0A84\x07\\\x02\x02\u0A84\u020D\x03\x02\x02\x02\u0A85\u0A86\x07"+
		"]\x02\x02\u0A86\u020F\x03\x02\x02\x02\u0A87\u0A88\x07^\x02\x02\u0A88\u0211"+
		"\x03\x02\x02\x02\u0A89\u0A8A\x07`\x02\x02\u0A8A\u0213\x03\x02\x02\x02"+
		"\u0A8B\u0A8C\x07a\x02\x02\u0A8C\u0215\x03\x02\x02\x02\u0A8D\u0A8E\x07"+
		"b\x02\x02\u0A8E\u0217\x03\x02\x02\x02\u0A8F\u0A90\x07b\x02\x02\u0A90\u0A91"+
		"\x07)\x02\x02\u0A91\u0219\x03\x02\x02\x02\u0A92\u0A93\x07c\x02\x02\u0A93"+
		"\u021B\x03\x02\x02\x02\u0A94\u0A95\x07d\x02\x02\u0A95\u021D\x03\x02\x02"+
		"\x02\u0A96\u0A97\x07g\x02\x02\u0A97\u021F\x03\x02\x02\x02\u0A98\u0A99"+
		"\x07h\x02\x02\u0A99\u0221\x03\x02\x02\x02\u0A9A\u0A9B\x07j\x02\x02\u0A9B"+
		"\u0223\x03\x02\x02\x02\u0A9C\u0A9D\x07k\x02\x02\u0A9D\u0225\x03\x02\x02"+
		"\x02\u0A9E\u0A9F\x07l\x02\x02\u0A9F\u0227\x03\x02\x02\x02\u0AA0\u0AA1"+
		"\x07m\x02\x02\u0AA1\u0229\x03\x02\x02\x02\u0AA2\u0AA3\x07\x99\x02\x02"+
		"\u0AA3\u022B\x03\x02\x02\x02\u0AA4\u0AA5\x07p\x02\x02\u0AA5\u022D\x03"+
		"\x02\x02\x02\u0AA6\u0AA7\x07q\x02\x02\u0AA7\u022F\x03\x02\x02\x02\u0AA8"+
		"\u0AA9\x07r\x02\x02\u0AA9\u0231\x03\x02\x02\x02\u0AAA\u0AAB\x07s\x02\x02"+
		"\u0AAB\u0233\x03\x02\x02\x02\u0AAC\u0AAD\x07t\x02\x02\u0AAD\u0235\x03"+
		"\x02\x02\x02\u0AAE\u0AAF\x07u\x02\x02\u0AAF\u0237\x03\x02\x02\x02\u0AB0"+
		"\u0AB1\x07v\x02\x02\u0AB1\u0239\x03\x02\x02\x02\u0AB2\u0AB3\x07w\x02\x02"+
		"\u0AB3\u023B\x03\x02\x02\x02\u0AB4\u0AB5\x07y\x02\x02\u0AB5\u023D\x03"+
		"\x02\x02\x02\u0AB6\u0AB7\x07z\x02\x02\u0AB7\u023F\x03\x02\x02\x02\u0AB8"+
		"\u0AB9\x07{\x02\x02\u0AB9\u0241\x03\x02\x02\x02\u0ABA\u0ABB\x07|\x02\x02"+
		"\u0ABB\u0243\x03\x02\x02\x02\u0ABC\u0ABD\x07~\x02\x02\u0ABD\u0245\x03"+
		"\x02\x02\x02\u0ABE\u0ABF\x07\x7F\x02\x02\u0ABF\u0247\x03\x02\x02\x02\u0AC0"+
		"\u0AC1\x07\x81\x02\x02\u0AC1\u0249\x03\x02\x02\x02\u0AC2\u0AC3\x07\x82"+
		"\x02\x02\u0AC3\u024B\x03\x02\x02\x02\u0AC4\u0AC5\x07\x83\x02\x02\u0AC5"+
		"\u024D\x03\x02\x02\x02\u0AC6\u0AC7\x07\x84\x02\x02\u0AC7\u024F\x03\x02"+
		"\x02\x02\u0AC8\u0AC9\x07\xA5\x02\x02\u0AC9\u0251\x03\x02\x02\x02\u0ACA"+
		"\u0ACB\x07\xA4\x02\x02\u0ACB\u0253\x03\x02\x02\x02\u0ACC\u0ACD\x07\x85"+
		"\x02\x02\u0ACD\u0255\x03\x02\x02\x02\u0ACE\u0ACF\x07\x86\x02\x02\u0ACF"+
		"\u0257\x03\x02\x02\x02\u0AD0\u0AD1\x07\x88\x02\x02\u0AD1\u0259\x03\x02"+
		"\x02\x02\u0AD2\u0AD3\x07\x89\x02\x02\u0AD3\u025B\x03\x02\x02\x02\u0AD4"+
		"\u0AD5\x07n\x02\x02\u0AD5\u025D\x03\x02\x02\x02\u0AD6\u0AD7\x07\x8B\x02"+
		"\x02\u0AD7\u025F\x03\x02\x02\x02\u0AD8\u0AD9\x07\x8C\x02\x02\u0AD9\u0261"+
		"\x03\x02\x02\x02\u0ADA\u0ADB\x07\x8D\x02\x02\u0ADB\u0263\x03\x02\x02\x02"+
		"\u0ADC\u0ADD\x07\x8E\x02\x02\u0ADD\u0265\x03\x02\x02\x02\u0ADE\u0ADF\x07"+
		"\x8F\x02\x02\u0ADF\u0267\x03\x02\x02\x02\u0AE0\u0AE1\x07\x90\x02\x02\u0AE1"+
		"\u0269\x03\x02\x02\x02\u0AE2\u0AE3\x07\x91\x02\x02\u0AE3\u026B\x03\x02"+
		"\x02\x02\u0AE4\u0AE5\x07\x92\x02\x02\u0AE5\u026D\x03\x02\x02\x02\u0AE6"+
		"\u0AE7\x07\x93\x02\x02\u0AE7\u026F\x03\x02\x02\x02\u0AE8\u0AE9\x07\x94"+
		"\x02\x02\u0AE9\u0271\x03\x02\x02\x02\u0AEA\u0AEB\x07\x95\x02\x02\u0AEB"+
		"\u0273\x03\x02\x02\x02\u0AEC\u0AED\x07\x96\x02\x02\u0AED\u0275\x03\x02"+
		"\x02\x02\u0AEE\u0AEF\x07\x97\x02\x02\u0AEF\u0277\x03\x02\x02\x02\u0AF0"+
		"\u0AF1\x07\x9A\x02\x02\u0AF1\u0279\x03\x02\x02\x02\u0AF2\u0AF3\x07\x9B"+
		"\x02\x02\u0AF3\u027B\x03\x02\x02\x02\u0AF4\u0AF5\x07q\x02\x02\u0AF5\u027D"+
		"\x03\x02\x02\x02\u0AF6\u0AF7\x07\x9C\x02\x02\u0AF7\u027F\x03\x02\x02\x02"+
		"\u0AF8\u0AF9\x07\x9E\x02\x02\u0AF9\u0281\x03\x02\x02\x02\u0AFA\u0AFB\x07"+
		"\x9D\x02\x02\u0AFB\u0283\x03\x02\x02\x02\u0AFC\u0AFD\x07y\x02\x02\u0AFD"+
		"\u0285\x03\x02\x02\x02\u0AFE\u0AFF\x07\x9F\x02\x02\u0AFF\u0287\x03\x02"+
		"\x02\x02\u0B00\u0B01\x07\xA0\x02\x02\u0B01\u0289\x03\x02\x02\x02\u0B02"+
		"\u0B03\x07\xAC\x02\x02\u0B03\u028B\x03\x02\x02\x02\u0B04\u0B05\x07\xA1"+
		"\x02\x02\u0B05\u028D\x03\x02\x02\x02\u0B06\u0B07\x07\xA2\x02\x02\u0B07"+
		"\u028F\x03\x02\x02\x02\u0B08\u0B09\x07\xA3\x02\x02\u0B09\u0291\x03\x02"+
		"\x02\x02\u0B0A\u0B0B\x05\u02A2\u0152\x02\u0B0B\u0B11\x05\u0172\xBA\x02"+
		"\u0B0C\u0B0D\x05\u02AA\u0156\x02\u0B0D\u0B0E\x05\u0172\xBA\x02\u0B0E\u0B10"+
		"\x03\x02\x02\x02\u0B0F\u0B0C\x03\x02\x02\x02\u0B10\u0B13\x03\x02\x02\x02"+
		"\u0B11\u0B0F\x03\x02\x02\x02\u0B11\u0B12\x03\x02\x02\x02\u0B12\u0B14\x03"+
		"\x02\x02\x02\u0B13\u0B11\x03\x02\x02\x02\u0B14\u0B15\x05\u02A4\u0153\x02"+
		"\u0B15\u0293\x03\x02\x02\x02\u0B16\u0B17\x07\x13\x02\x02\u0B17\u0295\x03"+
		"\x02\x02\x02\u0B18\u0B19\x07\x12\x02\x02\u0B19\u0297\x03\x02\x02\x02\u0B1A"+
		"\u0B1B\x07\x02\x02\x03\u0B1B\u0299\x03\x02\x02\x02\u0B1C\u0B1D\x07\x03"+
		"\x02\x02\u0B1D\u029B\x03\x02\x02\x02\u0B1E\u0B1F\x07\x04\x02\x02\u0B1F"+
		"\u029D\x03\x02\x02\x02\u0B20\u0B21\x07\x05\x02\x02\u0B21\u029F\x03\x02"+
		"\x02\x02\u0B22\u0B23\x07\x06\x02\x02\u0B23\u02A1\x03\x02\x02\x02\u0B24"+
		"\u0B25\x07\xAF\x02\x02\u0B25\u02A3\x03\x02\x02\x02\u0B26\u0B27\x07\xB0"+
		"\x02\x02\u0B27\u02A5\x03\x02\x02\x02\u0B28\u0B29\x07\x07\x02\x02\u0B29"+
		"\u02A7\x03\x02\x02\x02\u0B2A\u0B2B\x07\b\x02\x02\u0B2B\u02A9\x03\x02\x02"+
		"\x02\u0B2C\u0B2D\x07\t\x02\x02\u0B2D\u02AB\x03\x02\x02\x02\u0B2E\u0B2F"+
		"\x07\v\x02\x02\u0B2F\u02AD\x03\x02\x02\x02\u0B30\u0B31\x07\x16\x02\x02"+
		"\u0B31\u02AF\x03\x02\x02\x02\u0B32\u0B33\x07\x18\x02\x02\u0B33\u02B1\x03"+
		"\x02\x02\x02\u0B34\u0B35\x07\r\x02\x02\u0B35\u02B3\x03\x02\x02\x02\u0B36"+
		"\u0B37\x07\f\x02\x02\u0B37\u02B5\x03\x02\x02\x02\u0B38\u0B39\x07\xAE\x02"+
		"\x02\u0B39\u02B7\x03\x02\x02\x02\u0B3A\u0B3B\x07\xAF\x02\x02\u0B3B\u02B9"+
		"\x03\x02\x02\x02\u0B3C\u0B3D\x07\xB0\x02\x02\u0B3D\u02BB\x03\x02\x02\x02"+
		"\u0B3E\u0B3F\x07\xB1\x02\x02\u0B3F\u02BD\x03\x02\x02\x02\u0B40\u0B41\x07"+
		"\xB2\x02\x02\u0B41\u02BF\x03\x02\x02\x02\xD5\u02C1\u02C4\u02CA\u02CF\u02D1"+
		"\u02D6\u02D9\u02DC\u0308\u0317\u031A\u0321\u0326\u0331\u033B\u0347\u0350"+
		"\u0357\u035C\u0364\u0369\u036D\u0372\u0381\u0387\u0390\u039D\u03A4\u03AC"+
		"\u03BE\u03C3\u03CF\u03D3\u03D7\u03DC\u03EF\u03F6\u03FE\u0402\u0415\u041E"+
		"\u042D\u042F\u043B\u0449\u0450\u0458\u045B\u045E\u0469\u0479\u048D\u04A4"+
		"\u04B2\u04B9\u04C2\u04D5\u04DD\u04E2\u04E9\u04F0\u04F7\u04FE\u0505\u050E"+
		"\u0515\u051C\u0523\u052A\u052F\u0536\u053D\u0541\u0546\u0548\u0554\u055B"+
		"\u0563\u056E\u0574\u057D\u058A\u0592\u0598\u05A6\u05AE\u05B9\u05CB\u05D3"+
		"\u05DC\u05EB\u05EF\u05F3\u05F7\u0605\u060D\u0616\u0621\u0628\u062B\u0634"+
		"\u0638\u063F\u0646\u064C\u0654\u065C\u0662\u0666\u066A\u066E\u0676\u067E"+
		"\u0682\u0687\u068C\u0690\u069B\u06A9\u06AD\u06B3\u06BA\u06C3\u06CC\u06D5"+
		"\u06DE\u06E7\u06F0\u06FC\u0705\u0715\u0721\u072C\u072F\u0741\u0758\u075B"+
		"\u0762\u0768\u076C\u0770\u0776\u077A\u077E\u0786\u078B\u078E\u0792\u0797"+
		"\u079A\u079D\u07A0\u07A5\u07AB\u07B3\u07B6\u07C2\u07C6\u07CD\u07D3\u07D6"+
		"\u07DE\u07E7\u07ED\u07F3\u07FA\u0801\u0805\u0809\u080C\u0816\u081F\u0822"+
		"\u0827\u082D\u0831\u083B\u0842\u084C\u0855\u0861\u086D\u0879\u089E\u08B4"+
		"\u08CE\u08E4\u08FB\u0907\u0913\u091F\u0935\u094B";
	private static readonly _serializedATNSegment5: string =
		"\u0957\u0963\u0968\u0970\u0977\u0980\u0998\u099C\u09A1\u09A6\u09AB\u09B0"+
		"\u09B5\u09B7\u09CE\u09D2\u09F1\u0B11";
	public static readonly _serializedATN: string = Utils.join(
		[
			CqlParser._serializedATNSegment0,
			CqlParser._serializedATNSegment1,
			CqlParser._serializedATNSegment2,
			CqlParser._serializedATNSegment3,
			CqlParser._serializedATNSegment4,
			CqlParser._serializedATNSegment5
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
	public kwListUsers(): KwListUsersContext {
		return this.getRuleContext(0, KwListUsersContext);
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
	public objectUnknownSpec(): ObjectUnknownSpecContext {
		return this.getRuleContext(0, ObjectUnknownSpecContext);
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
	public columnSpec(): ColumnSpecContext[];
	public columnSpec(i: number): ColumnSpecContext;
	public columnSpec(i?: number): ColumnSpecContext | ColumnSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnSpecContext);
		} else {
			return this.getRuleContext(i, ColumnSpecContext);
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
	public objectUnknownSpec(): ObjectUnknownSpecContext {
		return this.getRuleContext(0, ObjectUnknownSpecContext);
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
	public kwMaterializedView(): KwMaterializedViewContext {
		return this.getRuleContext(0, KwMaterializedViewContext);
	}
	public objectUnknownSpec(): ObjectUnknownSpecContext {
		return this.getRuleContext(0, ObjectUnknownSpecContext);
	}
	public kwAs(): KwAsContext {
		return this.getRuleContext(0, KwAsContext);
	}
	public kwSelect(): KwSelectContext {
		return this.getRuleContext(0, KwSelectContext);
	}
	public baseColumnList(): BaseColumnListContext {
		return this.getRuleContext(0, BaseColumnListContext);
	}
	public kwFrom(): KwFromContext {
		return this.getRuleContext(0, KwFromContext);
	}
	public baseTableSpec(): BaseTableSpecContext {
		return this.getRuleContext(0, BaseTableSpecContext);
	}
	public materializedViewWhere(): MaterializedViewWhereContext {
		return this.getRuleContext(0, MaterializedViewWhereContext);
	}
	public primaryKeyElement(): PrimaryKeyElementContext {
		return this.getRuleContext(0, PrimaryKeyElementContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
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
	public columnSpec(): ColumnSpecContext {
		return this.getRuleContext(0, ColumnSpecContext);
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
	public objectUnknown(): ObjectUnknownContext {
		return this.getRuleContext(0, ObjectUnknownContext);
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
	public objectUnknownSpec(): ObjectUnknownSpecContext {
		return this.getRuleContext(0, ObjectUnknownSpecContext);
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
	public objectUnknownSpec(): ObjectUnknownSpecContext {
		return this.getRuleContext(0, ObjectUnknownSpecContext);
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
	public typeSpec(): TypeSpecContext {
		return this.getRuleContext(0, TypeSpecContext);
	}
	public alterTypeOperation(): AlterTypeOperationContext {
		return this.getRuleContext(0, AlterTypeOperationContext);
	}
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
	public columnSpec(): ColumnSpecContext {
		return this.getRuleContext(0, ColumnSpecContext);
	}
	public kwTo(): KwToContext {
		return this.getRuleContext(0, KwToContext);
	}
	public columnUnknownSpec(): ColumnUnknownSpecContext {
		return this.getRuleContext(0, ColumnUnknownSpecContext);
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
	public columnUnknownSpec(): ColumnUnknownSpecContext[];
	public columnUnknownSpec(i: number): ColumnUnknownSpecContext;
	public columnUnknownSpec(i?: number): ColumnUnknownSpecContext | ColumnUnknownSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnUnknownSpecContext);
		} else {
			return this.getRuleContext(i, ColumnUnknownSpecContext);
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
	public columnSpec(): ColumnSpecContext {
		return this.getRuleContext(0, ColumnSpecContext);
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
	public columnSpec(): ColumnSpecContext {
		return this.getRuleContext(0, ColumnSpecContext);
	}
	public kwTo(): KwToContext {
		return this.getRuleContext(0, KwToContext);
	}
	public columnUnknownSpec(): ColumnUnknownSpecContext {
		return this.getRuleContext(0, ColumnUnknownSpecContext);
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
	public columnSpec(): ColumnSpecContext[];
	public columnSpec(i: number): ColumnSpecContext;
	public columnSpec(i?: number): ColumnSpecContext | ColumnSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnSpecContext);
		} else {
			return this.getRuleContext(i, ColumnSpecContext);
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
	public columnUnknownSpec(): ColumnUnknownSpecContext[];
	public columnUnknownSpec(i: number): ColumnUnknownSpecContext;
	public columnUnknownSpec(i?: number): ColumnUnknownSpecContext | ColumnUnknownSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnUnknownSpecContext);
		} else {
			return this.getRuleContext(i, ColumnUnknownSpecContext);
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
	public kwMaterializedView(): KwMaterializedViewContext {
		return this.getRuleContext(0, KwMaterializedViewContext);
	}
	public materializedViewSpec(): MaterializedViewSpecContext {
		return this.getRuleContext(0, MaterializedViewSpecContext);
	}
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
	public typeSpec(): TypeSpecContext {
		return this.getRuleContext(0, TypeSpecContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
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
	public kwMaterializedView(): KwMaterializedViewContext {
		return this.getRuleContext(0, KwMaterializedViewContext);
	}
	public materializedViewSpec(): MaterializedViewSpecContext {
		return this.getRuleContext(0, MaterializedViewSpecContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
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
	public aggregateSpec(): AggregateSpecContext {
		return this.getRuleContext(0, AggregateSpecContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
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
	public functionSpec(): FunctionSpecContext {
		return this.getRuleContext(0, FunctionSpecContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
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
	public indexSpec(): IndexSpecContext {
		return this.getRuleContext(0, IndexSpecContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
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
	public objectUnknownSpec(): ObjectUnknownSpecContext {
		return this.getRuleContext(0, ObjectUnknownSpecContext);
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
	public clusteringOrderItem(): ClusteringOrderItemContext[];
	public clusteringOrderItem(i: number): ClusteringOrderItemContext;
	public clusteringOrderItem(i?: number): ClusteringOrderItemContext | ClusteringOrderItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClusteringOrderItemContext);
		} else {
			return this.getRuleContext(i, ClusteringOrderItemContext);
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


export class ClusteringOrderItemContext extends ParserRuleContext {
	public columnSpec(): ColumnSpecContext {
		return this.getRuleContext(0, ColumnSpecContext);
	}
	public orderDirection(): OrderDirectionContext | undefined {
		return this.tryGetRuleContext(0, OrderDirectionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_clusteringOrderItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterClusteringOrderItem) listener.enterClusteringOrderItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitClusteringOrderItem) listener.exitClusteringOrderItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitClusteringOrderItem) return visitor.visitClusteringOrderItem(this);
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
	public columnUnknown(): ColumnUnknownContext | undefined {
		return this.tryGetRuleContext(0, ColumnUnknownContext);
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
	public primaryKeySimple(): PrimaryKeySimpleContext | undefined {
		return this.tryGetRuleContext(0, PrimaryKeySimpleContext);
	}
	public primaryKeyComposite(): PrimaryKeyCompositeContext | undefined {
		return this.tryGetRuleContext(0, PrimaryKeyCompositeContext);
	}
	public compoundKey(): CompoundKeyContext | undefined {
		return this.tryGetRuleContext(0, CompoundKeyContext);
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


export class PrimaryKeySimpleContext extends ParserRuleContext {
	public columnSpec(): ColumnSpecContext {
		return this.getRuleContext(0, ColumnSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_primaryKeySimple; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPrimaryKeySimple) listener.enterPrimaryKeySimple(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPrimaryKeySimple) listener.exitPrimaryKeySimple(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPrimaryKeySimple) return visitor.visitPrimaryKeySimple(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryKeyCompositeContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public partitionKeyList(): PartitionKeyListContext {
		return this.getRuleContext(0, PartitionKeyListContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_primaryKeyComposite; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPrimaryKeyComposite) listener.enterPrimaryKeyComposite(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPrimaryKeyComposite) listener.exitPrimaryKeyComposite(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPrimaryKeyComposite) return visitor.visitPrimaryKeyComposite(this);
		else return visitor.visitChildren(this);
	}
}


export class CompoundKeyContext extends ParserRuleContext {
	public columnSpec(): ColumnSpecContext | undefined {
		return this.tryGetRuleContext(0, ColumnSpecContext);
	}
	public syntaxComma(): SyntaxCommaContext | undefined {
		return this.tryGetRuleContext(0, SyntaxCommaContext);
	}
	public clusteringKeyList(): ClusteringKeyListContext | undefined {
		return this.tryGetRuleContext(0, ClusteringKeyListContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLrContext);
	}
	public partitionKeyList(): PartitionKeyListContext | undefined {
		return this.tryGetRuleContext(0, PartitionKeyListContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRrContext);
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


export class PartitionKeyListContext extends ParserRuleContext {
	public columnSpec(): ColumnSpecContext[];
	public columnSpec(i: number): ColumnSpecContext;
	public columnSpec(i?: number): ColumnSpecContext | ColumnSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnSpecContext);
		} else {
			return this.getRuleContext(i, ColumnSpecContext);
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
	public columnSpec(): ColumnSpecContext[];
	public columnSpec(i: number): ColumnSpecContext;
	public columnSpec(i?: number): ColumnSpecContext | ColumnSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnSpecContext);
		} else {
			return this.getRuleContext(i, ColumnSpecContext);
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
	public objectUnknown(): ObjectUnknownContext | undefined {
		return this.tryGetRuleContext(0, ObjectUnknownContext);
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


export class IndexContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
	public constantString(): ConstantStringContext | undefined {
		return this.tryGetRuleContext(0, ConstantStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_index; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndex) listener.enterIndex(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndex) listener.exitIndex(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndex) return visitor.visitIndex(this);
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
	public columnSpec(): ColumnSpecContext | undefined {
		return this.tryGetRuleContext(0, ColumnSpecContext);
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
	public columnSpec(): ColumnSpecContext | undefined {
		return this.tryGetRuleContext(0, ColumnSpecContext);
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
	public columnSpec(): ColumnSpecContext | undefined {
		return this.tryGetRuleContext(0, ColumnSpecContext);
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
	public columnSpec(): ColumnSpecContext | undefined {
		return this.tryGetRuleContext(0, ColumnSpecContext);
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
	public columnSpec(): ColumnSpecContext {
		return this.getRuleContext(0, ColumnSpecContext);
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
	public tableOrMaterializedViewSpec(): TableOrMaterializedViewSpecContext {
		return this.getRuleContext(0, TableOrMaterializedViewSpecContext);
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
	public columnSpec(): ColumnSpecContext[];
	public columnSpec(i: number): ColumnSpecContext;
	public columnSpec(i?: number): ColumnSpecContext | ColumnSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnSpecContext);
		} else {
			return this.getRuleContext(i, ColumnSpecContext);
		}
	}
	public syntaxOperatorEq(): SyntaxOperatorEqContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorEqContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public constantCollection(): ConstantCollectionContext | undefined {
		return this.tryGetRuleContext(0, ConstantCollectionContext);
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
	public assignmentMap(): AssignmentMapContext | undefined {
		return this.tryGetRuleContext(0, AssignmentMapContext);
	}
	public assignmentSet(): AssignmentSetContext | undefined {
		return this.tryGetRuleContext(0, AssignmentSetContext);
	}
	public assignmentList(): AssignmentListContext | undefined {
		return this.tryGetRuleContext(0, AssignmentListContext);
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
	public kwInsertInto(): KwInsertIntoContext {
		return this.getRuleContext(0, KwInsertIntoContext);
	}
	public tableOrMaterializedViewSpec(): TableOrMaterializedViewSpecContext {
		return this.getRuleContext(0, TableOrMaterializedViewSpecContext);
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
	public columnSpec(): ColumnSpecContext[];
	public columnSpec(i: number): ColumnSpecContext;
	public columnSpec(i?: number): ColumnSpecContext | ColumnSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnSpecContext);
		} else {
			return this.getRuleContext(i, ColumnSpecContext);
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


export class BaseColumnListContext extends ParserRuleContext {
	public columnSpec(): ColumnSpecContext[];
	public columnSpec(i: number): ColumnSpecContext;
	public columnSpec(i?: number): ColumnSpecContext | ColumnSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnSpecContext);
		} else {
			return this.getRuleContext(i, ColumnSpecContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_baseColumnList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterBaseColumnList) listener.enterBaseColumnList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitBaseColumnList) listener.exitBaseColumnList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitBaseColumnList) return visitor.visitBaseColumnList(this);
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
	public constantCollection(): ConstantCollectionContext | undefined {
		return this.tryGetRuleContext(0, ConstantCollectionContext);
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
	public constantDecimal(): ConstantDecimalContext | undefined {
		return this.tryGetRuleContext(0, ConstantDecimalContext);
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
	public tableOrMaterializedViewSpec(): TableOrMaterializedViewSpecContext | undefined {
		return this.tryGetRuleContext(0, TableOrMaterializedViewSpecContext);
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
	public columnSpec(): ColumnSpecContext | undefined {
		return this.tryGetRuleContext(0, ColumnSpecContext);
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
	public columnSpec(): ColumnSpecContext | undefined {
		return this.tryGetRuleContext(0, ColumnSpecContext);
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
	public relationElementConstant(): RelationElementConstantContext | undefined {
		return this.tryGetRuleContext(0, RelationElementConstantContext);
	}
	public relationElementIn(): RelationElementInContext | undefined {
		return this.tryGetRuleContext(0, RelationElementInContext);
	}
	public relationElementToken(): RelationElementTokenContext | undefined {
		return this.tryGetRuleContext(0, RelationElementTokenContext);
	}
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
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


export class RelationElementConstantContext extends ParserRuleContext {
	public columnSpec(): ColumnSpecContext {
		return this.getRuleContext(0, ColumnSpecContext);
	}
	public relationOperator(): RelationOperatorContext {
		return this.getRuleContext(0, RelationOperatorContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relationElementConstant; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelationElementConstant) listener.enterRelationElementConstant(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelationElementConstant) listener.exitRelationElementConstant(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelationElementConstant) return visitor.visitRelationElementConstant(this);
		else return visitor.visitChildren(this);
	}
}


export class RelationElementInContext extends ParserRuleContext {
	public columnSpec(): ColumnSpecContext {
		return this.getRuleContext(0, ColumnSpecContext);
	}
	public kwIn(): KwInContext {
		return this.getRuleContext(0, KwInContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public functionArgs(): FunctionArgsContext | undefined {
		return this.tryGetRuleContext(0, FunctionArgsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relationElementIn; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelationElementIn) listener.enterRelationElementIn(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelationElementIn) listener.exitRelationElementIn(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelationElementIn) return visitor.visitRelationElementIn(this);
		else return visitor.visitChildren(this);
	}
}


export class RelationElementTokenContext extends ParserRuleContext {
	public relationElementTokenSpec(): RelationElementTokenSpecContext[];
	public relationElementTokenSpec(i: number): RelationElementTokenSpecContext;
	public relationElementTokenSpec(i?: number): RelationElementTokenSpecContext | RelationElementTokenSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationElementTokenSpecContext);
		} else {
			return this.getRuleContext(i, RelationElementTokenSpecContext);
		}
	}
	public relationOperator(): RelationOperatorContext | undefined {
		return this.tryGetRuleContext(0, RelationOperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relationElementToken; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelationElementToken) listener.enterRelationElementToken(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelationElementToken) listener.exitRelationElementToken(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelationElementToken) return visitor.visitRelationElementToken(this);
		else return visitor.visitChildren(this);
	}
}


export class RelationElementTokenSpecContext extends ParserRuleContext {
	public kwToken(): KwTokenContext | undefined {
		return this.tryGetRuleContext(0, KwTokenContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLrContext);
	}
	public columnSpec(): ColumnSpecContext | undefined {
		return this.tryGetRuleContext(0, ColumnSpecContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relationElementTokenSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelationElementTokenSpec) listener.enterRelationElementTokenSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelationElementTokenSpec) listener.exitRelationElementTokenSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelationElementTokenSpec) return visitor.visitRelationElementTokenSpec(this);
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
	public kwContains(): KwContainsContext | undefined {
		return this.tryGetRuleContext(0, KwContainsContext);
	}
	public kwContainsKey(): KwContainsKeyContext | undefined {
		return this.tryGetRuleContext(0, KwContainsKeyContext);
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
	public constantFloat(): ConstantFloatContext | undefined {
		return this.tryGetRuleContext(0, ConstantFloatContext);
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


export class CollectionElementContext extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public constantMap(): ConstantMapContext | undefined {
		return this.tryGetRuleContext(0, ConstantMapContext);
	}
	public constantSet(): ConstantSetContext | undefined {
		return this.tryGetRuleContext(0, ConstantSetContext);
	}
	public constantList(): ConstantListContext | undefined {
		return this.tryGetRuleContext(0, ConstantListContext);
	}
	public constantTuple(): ConstantTupleContext | undefined {
		return this.tryGetRuleContext(0, ConstantTupleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_collectionElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCollectionElement) listener.enterCollectionElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCollectionElement) listener.exitCollectionElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCollectionElement) return visitor.visitCollectionElement(this);
		else return visitor.visitChildren(this);
	}
}


export class CollectionMapElementContext extends ParserRuleContext {
	public collectionElement(): CollectionElementContext[];
	public collectionElement(i: number): CollectionElementContext;
	public collectionElement(i?: number): CollectionElementContext | CollectionElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CollectionElementContext);
		} else {
			return this.getRuleContext(i, CollectionElementContext);
		}
	}
	public syntaxColon(): SyntaxColonContext {
		return this.getRuleContext(0, SyntaxColonContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_collectionMapElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCollectionMapElement) listener.enterCollectionMapElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCollectionMapElement) listener.exitCollectionMapElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCollectionMapElement) return visitor.visitCollectionMapElement(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantCollectionContext extends ParserRuleContext {
	public constantMap(): ConstantMapContext | undefined {
		return this.tryGetRuleContext(0, ConstantMapContext);
	}
	public constantTuple(): ConstantTupleContext | undefined {
		return this.tryGetRuleContext(0, ConstantTupleContext);
	}
	public constantList(): ConstantListContext | undefined {
		return this.tryGetRuleContext(0, ConstantListContext);
	}
	public constantSet(): ConstantSetContext | undefined {
		return this.tryGetRuleContext(0, ConstantSetContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantCollection; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantCollection) listener.enterConstantCollection(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantCollection) listener.exitConstantCollection(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantCollection) return visitor.visitConstantCollection(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantMapContext extends ParserRuleContext {
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public collectionMapElement(): CollectionMapElementContext[];
	public collectionMapElement(i: number): CollectionMapElementContext;
	public collectionMapElement(i?: number): CollectionMapElementContext | CollectionMapElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CollectionMapElementContext);
		} else {
			return this.getRuleContext(i, CollectionMapElementContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantMap; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantMap) listener.enterConstantMap(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantMap) listener.exitConstantMap(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantMap) return visitor.visitConstantMap(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantSetContext extends ParserRuleContext {
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public collectionElement(): CollectionElementContext[];
	public collectionElement(i: number): CollectionElementContext;
	public collectionElement(i?: number): CollectionElementContext | CollectionElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CollectionElementContext);
		} else {
			return this.getRuleContext(i, CollectionElementContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantSet; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantSet) listener.enterConstantSet(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantSet) listener.exitConstantSet(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantSet) return visitor.visitConstantSet(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantListContext extends ParserRuleContext {
	public syntaxBracketLs(): SyntaxBracketLsContext {
		return this.getRuleContext(0, SyntaxBracketLsContext);
	}
	public collectionElement(): CollectionElementContext[];
	public collectionElement(i: number): CollectionElementContext;
	public collectionElement(i?: number): CollectionElementContext | CollectionElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CollectionElementContext);
		} else {
			return this.getRuleContext(i, CollectionElementContext);
		}
	}
	public syntaxBracketRs(): SyntaxBracketRsContext {
		return this.getRuleContext(0, SyntaxBracketRsContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantList) listener.enterConstantList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantList) listener.exitConstantList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantList) return visitor.visitConstantList(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantTupleContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public collectionElement(): CollectionElementContext[];
	public collectionElement(i: number): CollectionElementContext;
	public collectionElement(i?: number): CollectionElementContext | CollectionElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CollectionElementContext);
		} else {
			return this.getRuleContext(i, CollectionElementContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_constantTuple; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstantTuple) listener.enterConstantTuple(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstantTuple) listener.exitConstantTuple(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstantTuple) return visitor.visitConstantTuple(this);
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
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


export class BaseKeyspaceContext extends ParserRuleContext {
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_baseKeyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterBaseKeyspace) listener.enterBaseKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitBaseKeyspace) listener.exitBaseKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitBaseKeyspace) return visitor.visitBaseKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class TableContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
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


export class BaseTableContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_baseTable; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterBaseTable) listener.enterBaseTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitBaseTable) listener.exitBaseTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitBaseTable) return visitor.visitBaseTable(this);
		else return visitor.visitChildren(this);
	}
}


export class MaterializedViewContext extends ParserRuleContext {
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
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


export class KeyspaceObjectContext extends ParserRuleContext {
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_keyspaceObject; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKeyspaceObject) listener.enterKeyspaceObject(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKeyspaceObject) listener.exitKeyspaceObject(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKeyspaceObject) return visitor.visitKeyspaceObject(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectUnknownContext extends ParserRuleContext {
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
	public K_INPUT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_INPUT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_objectUnknown; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterObjectUnknown) listener.enterObjectUnknown(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitObjectUnknown) listener.exitObjectUnknown(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitObjectUnknown) return visitor.visitObjectUnknown(this);
		else return visitor.visitChildren(this);
	}
}


export class AggregateSpecContext extends ParserRuleContext {
	public aggregate(): AggregateContext | undefined {
		return this.tryGetRuleContext(0, AggregateContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_aggregateSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAggregateSpec) listener.enterAggregateSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAggregateSpec) listener.exitAggregateSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAggregateSpec) return visitor.visitAggregateSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeSpecContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_typeSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTypeSpec) listener.enterTypeSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTypeSpec) listener.exitTypeSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTypeSpec) return visitor.visitTypeSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionSpecContext extends ParserRuleContext {
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_functionSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterFunctionSpec) listener.enterFunctionSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitFunctionSpec) listener.exitFunctionSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionSpec) return visitor.visitFunctionSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class TableSpecContext extends ParserRuleContext {
	public table(): TableContext | undefined {
		return this.tryGetRuleContext(0, TableContext);
	}
	public syntaxDquote(): SyntaxDquoteContext[];
	public syntaxDquote(i: number): SyntaxDquoteContext;
	public syntaxDquote(i?: number): SyntaxDquoteContext | SyntaxDquoteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxDquoteContext);
		} else {
			return this.getRuleContext(i, SyntaxDquoteContext);
		}
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


export class BaseTableSpecContext extends ParserRuleContext {
	public baseTable(): BaseTableContext | undefined {
		return this.tryGetRuleContext(0, BaseTableContext);
	}
	public syntaxDquote(): SyntaxDquoteContext[];
	public syntaxDquote(i: number): SyntaxDquoteContext;
	public syntaxDquote(i?: number): SyntaxDquoteContext | SyntaxDquoteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxDquoteContext);
		} else {
			return this.getRuleContext(i, SyntaxDquoteContext);
		}
	}
	public baseKeyspace(): BaseKeyspaceContext | undefined {
		return this.tryGetRuleContext(0, BaseKeyspaceContext);
	}
	public specialDot(): SpecialDotContext | undefined {
		return this.tryGetRuleContext(0, SpecialDotContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_baseTableSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterBaseTableSpec) listener.enterBaseTableSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitBaseTableSpec) listener.exitBaseTableSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitBaseTableSpec) return visitor.visitBaseTableSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexSpecContext extends ParserRuleContext {
	public index(): IndexContext | undefined {
		return this.tryGetRuleContext(0, IndexContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_indexSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndexSpec) listener.enterIndexSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndexSpec) listener.exitIndexSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndexSpec) return visitor.visitIndexSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class MaterializedViewSpecContext extends ParserRuleContext {
	public materializedView(): MaterializedViewContext | undefined {
		return this.tryGetRuleContext(0, MaterializedViewContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_materializedViewSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterMaterializedViewSpec) listener.enterMaterializedViewSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitMaterializedViewSpec) listener.exitMaterializedViewSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitMaterializedViewSpec) return visitor.visitMaterializedViewSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class TableOrMaterializedViewSpecContext extends ParserRuleContext {
	public tableSpec(): TableSpecContext | undefined {
		return this.tryGetRuleContext(0, TableSpecContext);
	}
	public materializedViewSpec(): MaterializedViewSpecContext | undefined {
		return this.tryGetRuleContext(0, MaterializedViewSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_tableOrMaterializedViewSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTableOrMaterializedViewSpec) listener.enterTableOrMaterializedViewSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTableOrMaterializedViewSpec) listener.exitTableOrMaterializedViewSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTableOrMaterializedViewSpec) return visitor.visitTableOrMaterializedViewSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectUnknownSpecContext extends ParserRuleContext {
	public objectUnknown(): ObjectUnknownContext | undefined {
		return this.tryGetRuleContext(0, ObjectUnknownContext);
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
	@Override public get ruleIndex(): number { return CqlParser.RULE_objectUnknownSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterObjectUnknownSpec) listener.enterObjectUnknownSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitObjectUnknownSpec) listener.exitObjectUnknownSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitObjectUnknownSpec) return visitor.visitObjectUnknownSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnSpecContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public syntaxDquote(): SyntaxDquoteContext[];
	public syntaxDquote(i: number): SyntaxDquoteContext;
	public syntaxDquote(i?: number): SyntaxDquoteContext | SyntaxDquoteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxDquoteContext);
		} else {
			return this.getRuleContext(i, SyntaxDquoteContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnSpec) listener.enterColumnSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnSpec) listener.exitColumnSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnSpec) return visitor.visitColumnSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
	public K_INPUT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_INPUT, 0); }
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


export class ColumnUnknownSpecContext extends ParserRuleContext {
	public columnUnknown(): ColumnUnknownContext {
		return this.getRuleContext(0, ColumnUnknownContext);
	}
	public syntaxDquote(): SyntaxDquoteContext[];
	public syntaxDquote(i: number): SyntaxDquoteContext;
	public syntaxDquote(i?: number): SyntaxDquoteContext | SyntaxDquoteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxDquoteContext);
		} else {
			return this.getRuleContext(i, SyntaxDquoteContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnUnknownSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnUnknownSpec) listener.enterColumnUnknownSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnUnknownSpec) listener.exitColumnUnknownSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnUnknownSpec) return visitor.visitColumnUnknownSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnUnknownContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
	public K_INPUT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_INPUT, 0); }
	public syntaxDquote(): SyntaxDquoteContext[];
	public syntaxDquote(i: number): SyntaxDquoteContext;
	public syntaxDquote(i?: number): SyntaxDquoteContext | SyntaxDquoteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxDquoteContext);
		} else {
			return this.getRuleContext(i, SyntaxDquoteContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnUnknown; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnUnknown) listener.enterColumnUnknown(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnUnknown) listener.exitColumnUnknown(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnUnknown) return visitor.visitColumnUnknown(this);
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
	public dataTypeStructure(): DataTypeStructureContext | undefined {
		return this.tryGetRuleContext(0, DataTypeStructureContext);
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
	public K_INPUT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_INPUT, 0); }
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
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
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
	public K_LEVEL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_LEVEL, 0); }
	public K_USERS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USERS, 0); }
	public K_USER(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_USER, 0); }
	public K_ROLES(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_ROLES, 0); }
	public K_INPUT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_INPUT, 0); }
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


export class KwInsertIntoContext extends ParserRuleContext {
	public K_INSERT(): TerminalNode { return this.getToken(CqlParser.K_INSERT, 0); }
	public K_INTO(): TerminalNode { return this.getToken(CqlParser.K_INTO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwInsertInto; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwInsertInto) listener.enterKwInsertInto(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwInsertInto) listener.exitKwInsertInto(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwInsertInto) return visitor.visitKwInsertInto(this);
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
	public K_LIST(): TerminalNode { return this.getToken(CqlParser.K_LIST, 0); }
	public K_ROLES(): TerminalNode { return this.getToken(CqlParser.K_ROLES, 0); }
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


export class KwListUsersContext extends ParserRuleContext {
	public K_LIST(): TerminalNode { return this.getToken(CqlParser.K_LIST, 0); }
	public K_USERS(): TerminalNode { return this.getToken(CqlParser.K_USERS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwListUsers; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwListUsers) listener.enterKwListUsers(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwListUsers) listener.exitKwListUsers(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwListUsers) return visitor.visitKwListUsers(this);
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


export class KwMaterializedViewContext extends ParserRuleContext {
	public K_MATERIALIZED(): TerminalNode { return this.getToken(CqlParser.K_MATERIALIZED, 0); }
	public K_VIEW(): TerminalNode { return this.getToken(CqlParser.K_VIEW, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwMaterializedView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwMaterializedView) listener.enterKwMaterializedView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwMaterializedView) listener.exitKwMaterializedView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwMaterializedView) return visitor.visitKwMaterializedView(this);
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


export class KwTokenContext extends ParserRuleContext {
	public K_TOKEN(): TerminalNode { return this.getToken(CqlParser.K_TOKEN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwToken; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwToken) listener.enterKwToken(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwToken) listener.exitKwToken(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwToken) return visitor.visitKwToken(this);
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


