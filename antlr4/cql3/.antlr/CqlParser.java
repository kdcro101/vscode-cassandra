// Generated from /exec/vscode-cassandra/antlr4/cql3/CqlParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CqlParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LR_BRACKET=1, RR_BRACKET=2, LC_BRACKET=3, RC_BRACKET=4, LS_BRACKET=5, 
		RS_BRACKET=6, COMMA=7, SEMI=8, COLON=9, DQUOTE=10, SQUOTE=11, SPACE=12, 
		SPEC_MYSQL_COMMENT=13, COMMENT_INPUT=14, LINE_COMMENT=15, DOT=16, STAR=17, 
		DIVIDE=18, MODULE=19, PLUS=20, MINUSMINUS=21, MINUS=22, K_ADD=23, K_AGGREGATE=24, 
		K_ALL=25, K_ALLOW=26, K_ALTER=27, K_AND=28, K_ANY=29, K_APPLY=30, K_AS=31, 
		K_ASC=32, K_AUTHORIZE=33, K_BATCH=34, K_BEGIN=35, K_BY=36, K_CALLED=37, 
		K_CLUSTERING=38, K_COLUMNFAMILY=39, K_COMPACT=40, K_CONSISTENCY=41, K_CONTAINS=42, 
		K_CREATE=43, K_CUSTOM=44, K_DELETE=45, K_DESC=46, K_DESCRIBE=47, K_DISTINCT=48, 
		K_DROP=49, K_DURABLE_WRITES=50, K_EACH_QUORUM=51, K_ENTRIES=52, K_EXECUTE=53, 
		K_EXISTS=54, K_FALSE=55, K_FILTERING=56, K_FINALFUNC=57, K_FROM=58, K_FULL=59, 
		K_FUNCTION=60, K_FUNCTIONS=61, K_GRANT=62, K_IF=63, K_IN=64, K_INDEX=65, 
		K_INFINITY=66, K_INITCOND=67, K_INPUT=68, K_INSERT=69, K_INTO=70, K_IS=71, 
		K_KEY=72, K_KEYS=73, K_KEYSPACE=74, K_KEYSPACES=75, K_LANGUAGE=76, K_LEVEL=77, 
		K_LIMIT=78, K_LOCAL_ONE=79, K_LOCAL_QUORUM=80, K_LOGGED=81, K_LOGIN=82, 
		K_MATERIALIZED=83, K_MODIFY=84, K_NAN=85, K_NORECURSIVE=86, K_NOSUPERUSER=87, 
		K_NOT=88, K_NULL=89, K_OF=90, K_ON=91, K_ONE=92, K_OPTIONS=93, K_OR=94, 
		K_ORDER=95, K_PARTITION=96, K_PASSWORD=97, K_PER=98, K_PERMISSION=99, 
		K_PERMISSIONS=100, K_PRIMARY=101, K_QUORUM=102, K_RENAME=103, K_REPLACE=104, 
		K_REPLICATION=105, K_RETURNS=106, K_REVOKE=107, K_ROLE=108, K_ROLES=109, 
		K_SCHEMA=110, K_SELECT=111, K_SET=112, K_SFUNC=113, K_STATIC=114, K_STORAGE=115, 
		K_STYPE=116, K_SUPERUSER=117, K_TABLE=118, K_THREE=119, K_TIMESTAMP=120, 
		K_TO=121, K_TOKEN=122, K_TRIGGER=123, K_TRUE=124, K_TRUNCATE=125, K_TTL=126, 
		K_TWO=127, K_TYPE=128, K_UNLOGGED=129, K_UPDATE=130, K_USE=131, K_USER=132, 
		K_USING=133, K_UUID=134, K_VALUES=135, K_VIEW=136, K_WHERE=137, K_WITH=138, 
		K_WRITETIME=139, K_ASCII=140, K_BIGINT=141, K_BLOB=142, K_BOOLEAN=143, 
		K_COUNTER=144, K_DATE=145, K_DECIMAL=146, K_DOUBLE=147, K_FLOAT=148, K_FROZEN=149, 
		K_INET=150, K_INT=151, K_LIST=152, K_MAP=153, K_SMALLINT=154, K_TEXT=155, 
		K_TIMEUUID=156, K_TIME=157, K_TINYINT=158, K_TUPLE=159, K_VARCHAR=160, 
		K_VARINT=161, K_USERS=162, CODE_BLOCK=163, STRING_LITERAL=164, DECIMAL_LITERAL=165, 
		FLOAT_LITERAL=166, HEXADECIMAL_LITERAL=167, REAL_LITERAL=168, OBJECT_NAME=169, 
		UUID=170, OPERATOR_EQ=171, OPERATOR_LT=172, OPERATOR_GT=173, OPERATOR_LTE=174, 
		OPERATOR_GTE=175;
	public static final int
		RULE_root = 0, RULE_cqls = 1, RULE_statementSeparator = 2, RULE_empty = 3, 
		RULE_cql = 4, RULE_revoke = 5, RULE_listUsers = 6, RULE_listRoles = 7, 
		RULE_listPermissions = 8, RULE_grant = 9, RULE_priviledge = 10, RULE_resource = 11, 
		RULE_createUser = 12, RULE_createRole = 13, RULE_createType = 14, RULE_typeMemberColumnList = 15, 
		RULE_createTrigger = 16, RULE_createMaterializedView = 17, RULE_materializedViewWhere = 18, 
		RULE_columnNotNullList = 19, RULE_columnNotNull = 20, RULE_materializedViewOptions = 21, 
		RULE_createKeyspace = 22, RULE_createFunction = 23, RULE_codeBlock = 24, 
		RULE_paramList = 25, RULE_returnMode = 26, RULE_createAggregate = 27, 
		RULE_initCondDefinition = 28, RULE_initCondHash = 29, RULE_initCondHashItem = 30, 
		RULE_initCondListNested = 31, RULE_initCondList = 32, RULE_orReplace = 33, 
		RULE_alterUser = 34, RULE_userPassword = 35, RULE_userSuperUser = 36, 
		RULE_alterType = 37, RULE_alterTypeOperation = 38, RULE_alterTypeRename = 39, 
		RULE_alterTypeRenameList = 40, RULE_alterTypeRenameItem = 41, RULE_alterTypeAdd = 42, 
		RULE_alterTypeAlterType = 43, RULE_alterTable = 44, RULE_alterTableOperation = 45, 
		RULE_alterTableWith = 46, RULE_alterTableRename = 47, RULE_alterTableDropCompactStorage = 48, 
		RULE_alterTableDropColumns = 49, RULE_alterTableDropColumnList = 50, RULE_alterTableAdd = 51, 
		RULE_alterTableColumnDefinition = 52, RULE_alterRole = 53, RULE_roleWith = 54, 
		RULE_roleWithOptions = 55, RULE_alterMaterializedView = 56, RULE_dropUser = 57, 
		RULE_dropType = 58, RULE_dropMaterializedView = 59, RULE_dropAggregate = 60, 
		RULE_dropFunction = 61, RULE_dropTrigger = 62, RULE_dropRole = 63, RULE_dropTable = 64, 
		RULE_dropKeyspace = 65, RULE_dropIndex = 66, RULE_createTable = 67, RULE_withElement = 68, 
		RULE_clusteringOrder = 69, RULE_tableOptions = 70, RULE_tableOptionItem = 71, 
		RULE_tableOptionName = 72, RULE_tableOptionValue = 73, RULE_optionHash = 74, 
		RULE_optionHashItem = 75, RULE_optionHashKey = 76, RULE_optionHashValue = 77, 
		RULE_columnDefinitionList = 78, RULE_columnDefinition = 79, RULE_primaryKeyColumn = 80, 
		RULE_primaryKeyElement = 81, RULE_primaryKeyDefinition = 82, RULE_singlePrimaryKey = 83, 
		RULE_compoundKey = 84, RULE_compositeKey = 85, RULE_partitionKeyList = 86, 
		RULE_clusteringKeyList = 87, RULE_partitionKey = 88, RULE_clusteringKey = 89, 
		RULE_applyBatch = 90, RULE_beginBatch = 91, RULE_batchType = 92, RULE_alterKeyspace = 93, 
		RULE_replicationList = 94, RULE_replicationListItem = 95, RULE_durableWrites = 96, 
		RULE_use = 97, RULE_truncate = 98, RULE_createIndex = 99, RULE_indexName = 100, 
		RULE_indexColumnSpec = 101, RULE_indexKeysSpec = 102, RULE_indexEntriesSSpec = 103, 
		RULE_indexFullSpec = 104, RULE_delete = 105, RULE_deleteColumnList = 106, 
		RULE_deleteColumnItem = 107, RULE_update = 108, RULE_ifSpec = 109, RULE_ifConditionList = 110, 
		RULE_ifCondition = 111, RULE_assignments = 112, RULE_assignmentElement = 113, 
		RULE_assignmentSet = 114, RULE_assignmentMap = 115, RULE_assignmentList = 116, 
		RULE_insert = 117, RULE_usingTtlTimestamp = 118, RULE_timestamp = 119, 
		RULE_ttl = 120, RULE_usingTimestampSpec = 121, RULE_ifNotExist = 122, 
		RULE_ifExist = 123, RULE_insertValuesSpec = 124, RULE_insertColumnSpec = 125, 
		RULE_columnList = 126, RULE_expressionList = 127, RULE_select = 128, RULE_limitSpec = 129, 
		RULE_fromSpec = 130, RULE_fromSpecElement = 131, RULE_orderSpec = 132, 
		RULE_orderSpecElement = 133, RULE_whereSpec = 134, RULE_selectElements = 135, 
		RULE_selectElement = 136, RULE_relationElements = 137, RULE_relationElement = 138, 
		RULE_relalationContains = 139, RULE_relalationContainsKey = 140, RULE_functionCall = 141, 
		RULE_functionArgs = 142, RULE_constant = 143, RULE_literalUuid = 144, 
		RULE_literalDecimal = 145, RULE_literalFloat = 146, RULE_literalString = 147, 
		RULE_literalBoolean = 148, RULE_literalHexadecimal = 149, RULE_keyspace = 150, 
		RULE_table = 151, RULE_column = 152, RULE_dataType = 153, RULE_orderDirection = 154, 
		RULE_role = 155, RULE_trigger = 156, RULE_triggerClass = 157, RULE_materializedView = 158, 
		RULE_type = 159, RULE_aggregate = 160, RULE_function = 161, RULE_language = 162, 
		RULE_user = 163, RULE_password = 164, RULE_hashKey = 165, RULE_param = 166, 
		RULE_paramName = 167, RULE_kwAdd = 168, RULE_kwAggregate = 169, RULE_kwAll = 170, 
		RULE_kwAllPermissions = 171, RULE_kwAllow = 172, RULE_kwAllowFiltering = 173, 
		RULE_kwAlter = 174, RULE_kwAnd = 175, RULE_kwApply = 176, RULE_kwAs = 177, 
		RULE_kwAsc = 178, RULE_kwAuthorize = 179, RULE_kwBatch = 180, RULE_kwBegin = 181, 
		RULE_kwBy = 182, RULE_kwCalled = 183, RULE_kwClustering = 184, RULE_kwCompact = 185, 
		RULE_kwContains = 186, RULE_kwContainsKey = 187, RULE_kwCreate = 188, 
		RULE_kwDelete = 189, RULE_kwDesc = 190, RULE_kwDescibe = 191, RULE_kwDistinct = 192, 
		RULE_kwDrop = 193, RULE_kwDurableWrites = 194, RULE_kwEntries = 195, RULE_kwExecute = 196, 
		RULE_kwExists = 197, RULE_kwFiltering = 198, RULE_kwFinalfunc = 199, RULE_kwFrom = 200, 
		RULE_kwFull = 201, RULE_kwFunction = 202, RULE_kwFunctions = 203, RULE_kwGrant = 204, 
		RULE_kwIf = 205, RULE_kwIn = 206, RULE_kwIndex = 207, RULE_kwInitcond = 208, 
		RULE_kwInput = 209, RULE_kwInsert = 210, RULE_kwInto = 211, RULE_kwIs = 212, 
		RULE_kwKey = 213, RULE_kwKeys = 214, RULE_kwKeyspace = 215, RULE_kwKeyspaces = 216, 
		RULE_kwLanguage = 217, RULE_kwLimit = 218, RULE_kwList = 219, RULE_kwLogged = 220, 
		RULE_kwLogin = 221, RULE_kwMaterialized = 222, RULE_kwModify = 223, RULE_kwNosuperuser = 224, 
		RULE_kwNorecursive = 225, RULE_kwNot = 226, RULE_kwNull = 227, RULE_kwOf = 228, 
		RULE_kwOn = 229, RULE_kwOptions = 230, RULE_kwOr = 231, RULE_kwOrder = 232, 
		RULE_kwOrderBy = 233, RULE_kwPassword = 234, RULE_kwPrimary = 235, RULE_kwRename = 236, 
		RULE_kwReplace = 237, RULE_kwReplication = 238, RULE_kwReturns = 239, 
		RULE_kwRole = 240, RULE_kwRoles = 241, RULE_kwSelect = 242, RULE_kwSet = 243, 
		RULE_kwSfunc = 244, RULE_kwStatic = 245, RULE_kwStorage = 246, RULE_kwStype = 247, 
		RULE_kwSuperuser = 248, RULE_kwTable = 249, RULE_kwTimestamp = 250, RULE_kwTo = 251, 
		RULE_kwTrigger = 252, RULE_kwTruncate = 253, RULE_kwTtl = 254, RULE_kwType = 255, 
		RULE_kwUnlogged = 256, RULE_kwUpdate = 257, RULE_kwUse = 258, RULE_kwUser = 259, 
		RULE_kwUsers = 260, RULE_kwUsing = 261, RULE_kwValues = 262, RULE_kwView = 263, 
		RULE_kwWhere = 264, RULE_kwWith = 265, RULE_kwRevoke = 266, RULE_dataTypeAscii = 267, 
		RULE_dataTypeBigint = 268, RULE_dataTypeBlob = 269, RULE_dataTypeBoolean = 270, 
		RULE_dataTypeCounter = 271, RULE_dataTypeDate = 272, RULE_dataTypeDecimal = 273, 
		RULE_dataTypeDouble = 274, RULE_dataTypeFloat = 275, RULE_dataTypeFrozen = 276, 
		RULE_dataTypeInet = 277, RULE_dataTypeInt = 278, RULE_dataTypeList = 279, 
		RULE_dataTypeMap = 280, RULE_dataTypeSmallInt = 281, RULE_dataTypeSet = 282, 
		RULE_dataTypeText = 283, RULE_dataTypeTime = 284, RULE_dataTypeTimeUuid = 285, 
		RULE_dataTypeTimestamp = 286, RULE_dataTypeTinyInt = 287, RULE_dataTypeTuple = 288, 
		RULE_dataTypeUserDefined = 289, RULE_dataTypeUuid = 290, RULE_dataTypeVarChar = 291, 
		RULE_dataTypeVarInt = 292, RULE_dataTypeTupleSpec = 293, RULE_dataTypeMapSpec = 294, 
		RULE_dataTypeListSpec = 295, RULE_dataTypeSetSpec = 296, RULE_dataTypeFrozenSpec = 297, 
		RULE_specialStar = 298, RULE_specialDot = 299, RULE_eof = 300, RULE_syntaxBracketLr = 301, 
		RULE_syntaxBracketRr = 302, RULE_syntaxBracketLc = 303, RULE_syntaxBracketRc = 304, 
		RULE_syntaxBracketLa = 305, RULE_syntaxBracketRa = 306, RULE_syntaxBracketLs = 307, 
		RULE_syntaxBracketRs = 308, RULE_syntaxComma = 309, RULE_syntaxColon = 310, 
		RULE_syntaxSquote = 311, RULE_syntaxDquote = 312, RULE_syntaxOperatorEq = 313, 
		RULE_syntaxOperatorLt = 314, RULE_syntaxOperatorGt = 315, RULE_syntaxOperatorLte = 316, 
		RULE_syntaxOperatorGte = 317;
	public static final String[] ruleNames = {
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
		"dropKeyspace", "dropIndex", "createTable", "withElement", "clusteringOrder", 
		"tableOptions", "tableOptionItem", "tableOptionName", "tableOptionValue", 
		"optionHash", "optionHashItem", "optionHashKey", "optionHashValue", "columnDefinitionList", 
		"columnDefinition", "primaryKeyColumn", "primaryKeyElement", "primaryKeyDefinition", 
		"singlePrimaryKey", "compoundKey", "compositeKey", "partitionKeyList", 
		"clusteringKeyList", "partitionKey", "clusteringKey", "applyBatch", "beginBatch", 
		"batchType", "alterKeyspace", "replicationList", "replicationListItem", 
		"durableWrites", "use", "truncate", "createIndex", "indexName", "indexColumnSpec", 
		"indexKeysSpec", "indexEntriesSSpec", "indexFullSpec", "delete", "deleteColumnList", 
		"deleteColumnItem", "update", "ifSpec", "ifConditionList", "ifCondition", 
		"assignments", "assignmentElement", "assignmentSet", "assignmentMap", 
		"assignmentList", "insert", "usingTtlTimestamp", "timestamp", "ttl", "usingTimestampSpec", 
		"ifNotExist", "ifExist", "insertValuesSpec", "insertColumnSpec", "columnList", 
		"expressionList", "select", "limitSpec", "fromSpec", "fromSpecElement", 
		"orderSpec", "orderSpecElement", "whereSpec", "selectElements", "selectElement", 
		"relationElements", "relationElement", "relalationContains", "relalationContainsKey", 
		"functionCall", "functionArgs", "constant", "literalUuid", "literalDecimal", 
		"literalFloat", "literalString", "literalBoolean", "literalHexadecimal", 
		"keyspace", "table", "column", "dataType", "orderDirection", "role", "trigger", 
		"triggerClass", "materializedView", "type", "aggregate", "function", "language", 
		"user", "password", "hashKey", "param", "paramName", "kwAdd", "kwAggregate", 
		"kwAll", "kwAllPermissions", "kwAllow", "kwAllowFiltering", "kwAlter", 
		"kwAnd", "kwApply", "kwAs", "kwAsc", "kwAuthorize", "kwBatch", "kwBegin", 
		"kwBy", "kwCalled", "kwClustering", "kwCompact", "kwContains", "kwContainsKey", 
		"kwCreate", "kwDelete", "kwDesc", "kwDescibe", "kwDistinct", "kwDrop", 
		"kwDurableWrites", "kwEntries", "kwExecute", "kwExists", "kwFiltering", 
		"kwFinalfunc", "kwFrom", "kwFull", "kwFunction", "kwFunctions", "kwGrant", 
		"kwIf", "kwIn", "kwIndex", "kwInitcond", "kwInput", "kwInsert", "kwInto", 
		"kwIs", "kwKey", "kwKeys", "kwKeyspace", "kwKeyspaces", "kwLanguage", 
		"kwLimit", "kwList", "kwLogged", "kwLogin", "kwMaterialized", "kwModify", 
		"kwNosuperuser", "kwNorecursive", "kwNot", "kwNull", "kwOf", "kwOn", "kwOptions", 
		"kwOr", "kwOrder", "kwOrderBy", "kwPassword", "kwPrimary", "kwRename", 
		"kwReplace", "kwReplication", "kwReturns", "kwRole", "kwRoles", "kwSelect", 
		"kwSet", "kwSfunc", "kwStatic", "kwStorage", "kwStype", "kwSuperuser", 
		"kwTable", "kwTimestamp", "kwTo", "kwTrigger", "kwTruncate", "kwTtl", 
		"kwType", "kwUnlogged", "kwUpdate", "kwUse", "kwUser", "kwUsers", "kwUsing", 
		"kwValues", "kwView", "kwWhere", "kwWith", "kwRevoke", "dataTypeAscii", 
		"dataTypeBigint", "dataTypeBlob", "dataTypeBoolean", "dataTypeCounter", 
		"dataTypeDate", "dataTypeDecimal", "dataTypeDouble", "dataTypeFloat", 
		"dataTypeFrozen", "dataTypeInet", "dataTypeInt", "dataTypeList", "dataTypeMap", 
		"dataTypeSmallInt", "dataTypeSet", "dataTypeText", "dataTypeTime", "dataTypeTimeUuid", 
		"dataTypeTimestamp", "dataTypeTinyInt", "dataTypeTuple", "dataTypeUserDefined", 
		"dataTypeUuid", "dataTypeVarChar", "dataTypeVarInt", "dataTypeTupleSpec", 
		"dataTypeMapSpec", "dataTypeListSpec", "dataTypeSetSpec", "dataTypeFrozenSpec", 
		"specialStar", "specialDot", "eof", "syntaxBracketLr", "syntaxBracketRr", 
		"syntaxBracketLc", "syntaxBracketRc", "syntaxBracketLa", "syntaxBracketRa", 
		"syntaxBracketLs", "syntaxBracketRs", "syntaxComma", "syntaxColon", "syntaxSquote", 
		"syntaxDquote", "syntaxOperatorEq", "syntaxOperatorLt", "syntaxOperatorGt", 
		"syntaxOperatorLte", "syntaxOperatorGte"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "':'", "'\"'", 
		"'''", null, null, null, null, "'.'", "'*'", "'/'", "'%'", "'+'", "'--'", 
		"'-'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "LR_BRACKET", "RR_BRACKET", "LC_BRACKET", "RC_BRACKET", "LS_BRACKET", 
		"RS_BRACKET", "COMMA", "SEMI", "COLON", "DQUOTE", "SQUOTE", "SPACE", "SPEC_MYSQL_COMMENT", 
		"COMMENT_INPUT", "LINE_COMMENT", "DOT", "STAR", "DIVIDE", "MODULE", "PLUS", 
		"MINUSMINUS", "MINUS", "K_ADD", "K_AGGREGATE", "K_ALL", "K_ALLOW", "K_ALTER", 
		"K_AND", "K_ANY", "K_APPLY", "K_AS", "K_ASC", "K_AUTHORIZE", "K_BATCH", 
		"K_BEGIN", "K_BY", "K_CALLED", "K_CLUSTERING", "K_COLUMNFAMILY", "K_COMPACT", 
		"K_CONSISTENCY", "K_CONTAINS", "K_CREATE", "K_CUSTOM", "K_DELETE", "K_DESC", 
		"K_DESCRIBE", "K_DISTINCT", "K_DROP", "K_DURABLE_WRITES", "K_EACH_QUORUM", 
		"K_ENTRIES", "K_EXECUTE", "K_EXISTS", "K_FALSE", "K_FILTERING", "K_FINALFUNC", 
		"K_FROM", "K_FULL", "K_FUNCTION", "K_FUNCTIONS", "K_GRANT", "K_IF", "K_IN", 
		"K_INDEX", "K_INFINITY", "K_INITCOND", "K_INPUT", "K_INSERT", "K_INTO", 
		"K_IS", "K_KEY", "K_KEYS", "K_KEYSPACE", "K_KEYSPACES", "K_LANGUAGE", 
		"K_LEVEL", "K_LIMIT", "K_LOCAL_ONE", "K_LOCAL_QUORUM", "K_LOGGED", "K_LOGIN", 
		"K_MATERIALIZED", "K_MODIFY", "K_NAN", "K_NORECURSIVE", "K_NOSUPERUSER", 
		"K_NOT", "K_NULL", "K_OF", "K_ON", "K_ONE", "K_OPTIONS", "K_OR", "K_ORDER", 
		"K_PARTITION", "K_PASSWORD", "K_PER", "K_PERMISSION", "K_PERMISSIONS", 
		"K_PRIMARY", "K_QUORUM", "K_RENAME", "K_REPLACE", "K_REPLICATION", "K_RETURNS", 
		"K_REVOKE", "K_ROLE", "K_ROLES", "K_SCHEMA", "K_SELECT", "K_SET", "K_SFUNC", 
		"K_STATIC", "K_STORAGE", "K_STYPE", "K_SUPERUSER", "K_TABLE", "K_THREE", 
		"K_TIMESTAMP", "K_TO", "K_TOKEN", "K_TRIGGER", "K_TRUE", "K_TRUNCATE", 
		"K_TTL", "K_TWO", "K_TYPE", "K_UNLOGGED", "K_UPDATE", "K_USE", "K_USER", 
		"K_USING", "K_UUID", "K_VALUES", "K_VIEW", "K_WHERE", "K_WITH", "K_WRITETIME", 
		"K_ASCII", "K_BIGINT", "K_BLOB", "K_BOOLEAN", "K_COUNTER", "K_DATE", "K_DECIMAL", 
		"K_DOUBLE", "K_FLOAT", "K_FROZEN", "K_INET", "K_INT", "K_LIST", "K_MAP", 
		"K_SMALLINT", "K_TEXT", "K_TIMEUUID", "K_TIME", "K_TINYINT", "K_TUPLE", 
		"K_VARCHAR", "K_VARINT", "K_USERS", "CODE_BLOCK", "STRING_LITERAL", "DECIMAL_LITERAL", 
		"FLOAT_LITERAL", "HEXADECIMAL_LITERAL", "REAL_LITERAL", "OBJECT_NAME", 
		"UUID", "OPERATOR_EQ", "OPERATOR_LT", "OPERATOR_GT", "OPERATOR_LTE", "OPERATOR_GTE"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "CqlParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CqlParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class RootContext extends ParserRuleContext {
		public EofContext eof() {
			return getRuleContext(EofContext.class,0);
		}
		public CqlsContext cqls() {
			return getRuleContext(CqlsContext.class,0);
		}
		public TerminalNode MINUSMINUS() { return getToken(CqlParser.MINUSMINUS, 0); }
		public RootContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_root; }
	}

	public final RootContext root() throws RecognitionException {
		RootContext _localctx = new RootContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_root);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(637);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (SEMI - 8)) | (1L << (K_ALTER - 8)) | (1L << (K_APPLY - 8)) | (1L << (K_BEGIN - 8)) | (1L << (K_CREATE - 8)) | (1L << (K_DELETE - 8)) | (1L << (K_DROP - 8)) | (1L << (K_GRANT - 8)) | (1L << (K_INSERT - 8)))) != 0) || ((((_la - 107)) & ~0x3f) == 0 && ((1L << (_la - 107)) & ((1L << (K_REVOKE - 107)) | (1L << (K_SELECT - 107)) | (1L << (K_TRUNCATE - 107)) | (1L << (K_UPDATE - 107)) | (1L << (K_USE - 107)) | (1L << (K_LIST - 107)))) != 0)) {
				{
				setState(636);
				cqls();
				}
			}

			setState(640);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MINUSMINUS) {
				{
				setState(639);
				match(MINUSMINUS);
				}
			}

			setState(642);
			eof();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CqlsContext extends ParserRuleContext {
		public List<CqlContext> cql() {
			return getRuleContexts(CqlContext.class);
		}
		public CqlContext cql(int i) {
			return getRuleContext(CqlContext.class,i);
		}
		public List<EmptyContext> empty() {
			return getRuleContexts(EmptyContext.class);
		}
		public EmptyContext empty(int i) {
			return getRuleContext(EmptyContext.class,i);
		}
		public List<StatementSeparatorContext> statementSeparator() {
			return getRuleContexts(StatementSeparatorContext.class);
		}
		public StatementSeparatorContext statementSeparator(int i) {
			return getRuleContext(StatementSeparatorContext.class,i);
		}
		public List<TerminalNode> MINUSMINUS() { return getTokens(CqlParser.MINUSMINUS); }
		public TerminalNode MINUSMINUS(int i) {
			return getToken(CqlParser.MINUSMINUS, i);
		}
		public CqlsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cqls; }
	}

	public final CqlsContext cqls() throws RecognitionException {
		CqlsContext _localctx = new CqlsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_cqls);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(653);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(651);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case K_ALTER:
					case K_APPLY:
					case K_BEGIN:
					case K_CREATE:
					case K_DELETE:
					case K_DROP:
					case K_GRANT:
					case K_INSERT:
					case K_REVOKE:
					case K_SELECT:
					case K_TRUNCATE:
					case K_UPDATE:
					case K_USE:
					case K_LIST:
						{
						setState(644);
						cql();
						setState(646);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==MINUSMINUS) {
							{
							setState(645);
							match(MINUSMINUS);
							}
						}

						setState(648);
						statementSeparator();
						}
						break;
					case SEMI:
						{
						setState(650);
						empty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(655);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			setState(664);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ALTER:
			case K_APPLY:
			case K_BEGIN:
			case K_CREATE:
			case K_DELETE:
			case K_DROP:
			case K_GRANT:
			case K_INSERT:
			case K_REVOKE:
			case K_SELECT:
			case K_TRUNCATE:
			case K_UPDATE:
			case K_USE:
			case K_LIST:
				{
				setState(656);
				cql();
				setState(661);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(658);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==MINUSMINUS) {
						{
						setState(657);
						match(MINUSMINUS);
						}
					}

					setState(660);
					statementSeparator();
					}
					break;
				}
				}
				break;
			case SEMI:
				{
				setState(663);
				empty();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementSeparatorContext extends ParserRuleContext {
		public TerminalNode SEMI() { return getToken(CqlParser.SEMI, 0); }
		public StatementSeparatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementSeparator; }
	}

	public final StatementSeparatorContext statementSeparator() throws RecognitionException {
		StatementSeparatorContext _localctx = new StatementSeparatorContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statementSeparator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(666);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptyContext extends ParserRuleContext {
		public StatementSeparatorContext statementSeparator() {
			return getRuleContext(StatementSeparatorContext.class,0);
		}
		public EmptyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_empty; }
	}

	public final EmptyContext empty() throws RecognitionException {
		EmptyContext _localctx = new EmptyContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_empty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(668);
			statementSeparator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CqlContext extends ParserRuleContext {
		public AlterKeyspaceContext alterKeyspace() {
			return getRuleContext(AlterKeyspaceContext.class,0);
		}
		public AlterMaterializedViewContext alterMaterializedView() {
			return getRuleContext(AlterMaterializedViewContext.class,0);
		}
		public AlterRoleContext alterRole() {
			return getRuleContext(AlterRoleContext.class,0);
		}
		public AlterTableContext alterTable() {
			return getRuleContext(AlterTableContext.class,0);
		}
		public AlterTypeContext alterType() {
			return getRuleContext(AlterTypeContext.class,0);
		}
		public AlterUserContext alterUser() {
			return getRuleContext(AlterUserContext.class,0);
		}
		public ApplyBatchContext applyBatch() {
			return getRuleContext(ApplyBatchContext.class,0);
		}
		public CreateAggregateContext createAggregate() {
			return getRuleContext(CreateAggregateContext.class,0);
		}
		public CreateFunctionContext createFunction() {
			return getRuleContext(CreateFunctionContext.class,0);
		}
		public CreateIndexContext createIndex() {
			return getRuleContext(CreateIndexContext.class,0);
		}
		public CreateKeyspaceContext createKeyspace() {
			return getRuleContext(CreateKeyspaceContext.class,0);
		}
		public CreateMaterializedViewContext createMaterializedView() {
			return getRuleContext(CreateMaterializedViewContext.class,0);
		}
		public CreateRoleContext createRole() {
			return getRuleContext(CreateRoleContext.class,0);
		}
		public CreateTableContext createTable() {
			return getRuleContext(CreateTableContext.class,0);
		}
		public CreateTriggerContext createTrigger() {
			return getRuleContext(CreateTriggerContext.class,0);
		}
		public CreateTypeContext createType() {
			return getRuleContext(CreateTypeContext.class,0);
		}
		public CreateUserContext createUser() {
			return getRuleContext(CreateUserContext.class,0);
		}
		public DeleteContext delete() {
			return getRuleContext(DeleteContext.class,0);
		}
		public DropAggregateContext dropAggregate() {
			return getRuleContext(DropAggregateContext.class,0);
		}
		public DropFunctionContext dropFunction() {
			return getRuleContext(DropFunctionContext.class,0);
		}
		public DropIndexContext dropIndex() {
			return getRuleContext(DropIndexContext.class,0);
		}
		public DropKeyspaceContext dropKeyspace() {
			return getRuleContext(DropKeyspaceContext.class,0);
		}
		public DropMaterializedViewContext dropMaterializedView() {
			return getRuleContext(DropMaterializedViewContext.class,0);
		}
		public DropRoleContext dropRole() {
			return getRuleContext(DropRoleContext.class,0);
		}
		public DropTableContext dropTable() {
			return getRuleContext(DropTableContext.class,0);
		}
		public DropTriggerContext dropTrigger() {
			return getRuleContext(DropTriggerContext.class,0);
		}
		public DropTypeContext dropType() {
			return getRuleContext(DropTypeContext.class,0);
		}
		public DropUserContext dropUser() {
			return getRuleContext(DropUserContext.class,0);
		}
		public GrantContext grant() {
			return getRuleContext(GrantContext.class,0);
		}
		public InsertContext insert() {
			return getRuleContext(InsertContext.class,0);
		}
		public ListPermissionsContext listPermissions() {
			return getRuleContext(ListPermissionsContext.class,0);
		}
		public ListRolesContext listRoles() {
			return getRuleContext(ListRolesContext.class,0);
		}
		public RevokeContext revoke() {
			return getRuleContext(RevokeContext.class,0);
		}
		public SelectContext select() {
			return getRuleContext(SelectContext.class,0);
		}
		public TruncateContext truncate() {
			return getRuleContext(TruncateContext.class,0);
		}
		public UpdateContext update() {
			return getRuleContext(UpdateContext.class,0);
		}
		public UseContext use() {
			return getRuleContext(UseContext.class,0);
		}
		public CqlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cql; }
	}

	public final CqlContext cql() throws RecognitionException {
		CqlContext _localctx = new CqlContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_cql);
		try {
			setState(707);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(670);
				alterKeyspace();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(671);
				alterMaterializedView();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(672);
				alterRole();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(673);
				alterTable();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(674);
				alterType();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(675);
				alterUser();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(676);
				applyBatch();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(677);
				createAggregate();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(678);
				createFunction();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(679);
				createIndex();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(680);
				createKeyspace();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(681);
				createMaterializedView();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(682);
				createRole();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(683);
				createTable();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(684);
				createTrigger();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(685);
				createType();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(686);
				createUser();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(687);
				delete();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(688);
				dropAggregate();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(689);
				dropFunction();
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(690);
				dropIndex();
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(691);
				dropKeyspace();
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(692);
				dropMaterializedView();
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(693);
				dropRole();
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(694);
				dropTable();
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(695);
				dropTrigger();
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(696);
				dropType();
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(697);
				dropUser();
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(698);
				grant();
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(699);
				insert();
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(700);
				listPermissions();
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(701);
				listRoles();
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(702);
				revoke();
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(703);
				select();
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(704);
				truncate();
				}
				break;
			case 36:
				enterOuterAlt(_localctx, 36);
				{
				setState(705);
				update();
				}
				break;
			case 37:
				enterOuterAlt(_localctx, 37);
				{
				setState(706);
				use();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RevokeContext extends ParserRuleContext {
		public KwRevokeContext kwRevoke() {
			return getRuleContext(KwRevokeContext.class,0);
		}
		public PriviledgeContext priviledge() {
			return getRuleContext(PriviledgeContext.class,0);
		}
		public KwOnContext kwOn() {
			return getRuleContext(KwOnContext.class,0);
		}
		public ResourceContext resource() {
			return getRuleContext(ResourceContext.class,0);
		}
		public KwFromContext kwFrom() {
			return getRuleContext(KwFromContext.class,0);
		}
		public RoleContext role() {
			return getRuleContext(RoleContext.class,0);
		}
		public RevokeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_revoke; }
	}

	public final RevokeContext revoke() throws RecognitionException {
		RevokeContext _localctx = new RevokeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_revoke);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(709);
			kwRevoke();
			setState(710);
			priviledge();
			setState(711);
			kwOn();
			setState(712);
			resource();
			setState(713);
			kwFrom();
			setState(714);
			role();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ListUsersContext extends ParserRuleContext {
		public KwListContext kwList() {
			return getRuleContext(KwListContext.class,0);
		}
		public KwUsersContext kwUsers() {
			return getRuleContext(KwUsersContext.class,0);
		}
		public ListUsersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listUsers; }
	}

	public final ListUsersContext listUsers() throws RecognitionException {
		ListUsersContext _localctx = new ListUsersContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_listUsers);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(716);
			kwList();
			setState(717);
			kwUsers();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ListRolesContext extends ParserRuleContext {
		public KwListContext kwList() {
			return getRuleContext(KwListContext.class,0);
		}
		public KwRolesContext kwRoles() {
			return getRuleContext(KwRolesContext.class,0);
		}
		public KwOfContext kwOf() {
			return getRuleContext(KwOfContext.class,0);
		}
		public RoleContext role() {
			return getRuleContext(RoleContext.class,0);
		}
		public KwNorecursiveContext kwNorecursive() {
			return getRuleContext(KwNorecursiveContext.class,0);
		}
		public ListRolesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listRoles; }
	}

	public final ListRolesContext listRoles() throws RecognitionException {
		ListRolesContext _localctx = new ListRolesContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_listRoles);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(719);
			kwList();
			setState(720);
			kwRoles();
			setState(724);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OF) {
				{
				setState(721);
				kwOf();
				setState(722);
				role();
				}
			}

			setState(727);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_NORECURSIVE) {
				{
				setState(726);
				kwNorecursive();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ListPermissionsContext extends ParserRuleContext {
		public KwListContext kwList() {
			return getRuleContext(KwListContext.class,0);
		}
		public PriviledgeContext priviledge() {
			return getRuleContext(PriviledgeContext.class,0);
		}
		public KwOnContext kwOn() {
			return getRuleContext(KwOnContext.class,0);
		}
		public ResourceContext resource() {
			return getRuleContext(ResourceContext.class,0);
		}
		public KwOfContext kwOf() {
			return getRuleContext(KwOfContext.class,0);
		}
		public RoleContext role() {
			return getRuleContext(RoleContext.class,0);
		}
		public ListPermissionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listPermissions; }
	}

	public final ListPermissionsContext listPermissions() throws RecognitionException {
		ListPermissionsContext _localctx = new ListPermissionsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_listPermissions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(729);
			kwList();
			setState(730);
			priviledge();
			setState(734);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ON) {
				{
				setState(731);
				kwOn();
				setState(732);
				resource();
				}
			}

			setState(739);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OF) {
				{
				setState(736);
				kwOf();
				setState(737);
				role();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GrantContext extends ParserRuleContext {
		public KwGrantContext kwGrant() {
			return getRuleContext(KwGrantContext.class,0);
		}
		public PriviledgeContext priviledge() {
			return getRuleContext(PriviledgeContext.class,0);
		}
		public KwOnContext kwOn() {
			return getRuleContext(KwOnContext.class,0);
		}
		public ResourceContext resource() {
			return getRuleContext(ResourceContext.class,0);
		}
		public KwToContext kwTo() {
			return getRuleContext(KwToContext.class,0);
		}
		public RoleContext role() {
			return getRuleContext(RoleContext.class,0);
		}
		public GrantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_grant; }
	}

	public final GrantContext grant() throws RecognitionException {
		GrantContext _localctx = new GrantContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_grant);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(741);
			kwGrant();
			setState(742);
			priviledge();
			setState(743);
			kwOn();
			setState(744);
			resource();
			setState(745);
			kwTo();
			setState(746);
			role();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PriviledgeContext extends ParserRuleContext {
		public KwAllContext kwAll() {
			return getRuleContext(KwAllContext.class,0);
		}
		public KwAllPermissionsContext kwAllPermissions() {
			return getRuleContext(KwAllPermissionsContext.class,0);
		}
		public KwAlterContext kwAlter() {
			return getRuleContext(KwAlterContext.class,0);
		}
		public KwAuthorizeContext kwAuthorize() {
			return getRuleContext(KwAuthorizeContext.class,0);
		}
		public KwDescibeContext kwDescibe() {
			return getRuleContext(KwDescibeContext.class,0);
		}
		public KwExecuteContext kwExecute() {
			return getRuleContext(KwExecuteContext.class,0);
		}
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwModifyContext kwModify() {
			return getRuleContext(KwModifyContext.class,0);
		}
		public KwSelectContext kwSelect() {
			return getRuleContext(KwSelectContext.class,0);
		}
		public PriviledgeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_priviledge; }
	}

	public final PriviledgeContext priviledge() throws RecognitionException {
		PriviledgeContext _localctx = new PriviledgeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_priviledge);
		try {
			setState(760);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ALL:
				enterOuterAlt(_localctx, 1);
				{
				setState(750);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
				case 1:
					{
					setState(748);
					kwAll();
					}
					break;
				case 2:
					{
					setState(749);
					kwAllPermissions();
					}
					break;
				}
				}
				break;
			case K_ALTER:
				enterOuterAlt(_localctx, 2);
				{
				setState(752);
				kwAlter();
				}
				break;
			case K_AUTHORIZE:
				enterOuterAlt(_localctx, 3);
				{
				setState(753);
				kwAuthorize();
				}
				break;
			case K_DESCRIBE:
				enterOuterAlt(_localctx, 4);
				{
				setState(754);
				kwDescibe();
				}
				break;
			case K_EXECUTE:
				enterOuterAlt(_localctx, 5);
				{
				setState(755);
				kwExecute();
				}
				break;
			case K_CREATE:
				enterOuterAlt(_localctx, 6);
				{
				setState(756);
				kwCreate();
				}
				break;
			case K_DROP:
				enterOuterAlt(_localctx, 7);
				{
				setState(757);
				kwDrop();
				}
				break;
			case K_MODIFY:
				enterOuterAlt(_localctx, 8);
				{
				setState(758);
				kwModify();
				}
				break;
			case K_SELECT:
				enterOuterAlt(_localctx, 9);
				{
				setState(759);
				kwSelect();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ResourceContext extends ParserRuleContext {
		public KwAllContext kwAll() {
			return getRuleContext(KwAllContext.class,0);
		}
		public KwFunctionsContext kwFunctions() {
			return getRuleContext(KwFunctionsContext.class,0);
		}
		public KwInContext kwIn() {
			return getRuleContext(KwInContext.class,0);
		}
		public KwKeyspaceContext kwKeyspace() {
			return getRuleContext(KwKeyspaceContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public KwFunctionContext kwFunction() {
			return getRuleContext(KwFunctionContext.class,0);
		}
		public FunctionContext function() {
			return getRuleContext(FunctionContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public KwKeyspacesContext kwKeyspaces() {
			return getRuleContext(KwKeyspacesContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public KwTableContext kwTable() {
			return getRuleContext(KwTableContext.class,0);
		}
		public KwRolesContext kwRoles() {
			return getRuleContext(KwRolesContext.class,0);
		}
		public KwRoleContext kwRole() {
			return getRuleContext(KwRoleContext.class,0);
		}
		public RoleContext role() {
			return getRuleContext(RoleContext.class,0);
		}
		public ResourceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resource; }
	}

	public final ResourceContext resource() throws RecognitionException {
		ResourceContext _localctx = new ResourceContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_resource);
		int _la;
		try {
			setState(800);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(762);
				kwAll();
				setState(763);
				kwFunctions();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(765);
				kwAll();
				setState(766);
				kwFunctions();
				setState(767);
				kwIn();
				setState(768);
				kwKeyspace();
				setState(769);
				keyspace();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(771);
				kwFunction();
				setState(775);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
				case 1:
					{
					setState(772);
					keyspace();
					setState(773);
					match(DOT);
					}
					break;
				}
				setState(777);
				function();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(779);
				kwAll();
				setState(780);
				kwKeyspaces();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(782);
				kwKeyspace();
				setState(783);
				keyspace();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(786);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_TABLE) {
					{
					setState(785);
					kwTable();
					}
				}

				setState(791);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
				case 1:
					{
					setState(788);
					keyspace();
					setState(789);
					match(DOT);
					}
					break;
				}
				setState(793);
				table();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(794);
				kwAll();
				setState(795);
				kwRoles();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(797);
				kwRole();
				setState(798);
				role();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateUserContext extends ParserRuleContext {
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwUserContext kwUser() {
			return getRuleContext(KwUserContext.class,0);
		}
		public UserContext user() {
			return getRuleContext(UserContext.class,0);
		}
		public KwWithContext kwWith() {
			return getRuleContext(KwWithContext.class,0);
		}
		public KwPasswordContext kwPassword() {
			return getRuleContext(KwPasswordContext.class,0);
		}
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public KwSuperuserContext kwSuperuser() {
			return getRuleContext(KwSuperuserContext.class,0);
		}
		public KwNosuperuserContext kwNosuperuser() {
			return getRuleContext(KwNosuperuserContext.class,0);
		}
		public CreateUserContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createUser; }
	}

	public final CreateUserContext createUser() throws RecognitionException {
		CreateUserContext _localctx = new CreateUserContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_createUser);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(802);
			kwCreate();
			setState(803);
			kwUser();
			setState(805);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(804);
				ifNotExist();
				}
			}

			setState(807);
			user();
			setState(808);
			kwWith();
			setState(809);
			kwPassword();
			setState(810);
			literalString();
			setState(813);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_SUPERUSER:
				{
				setState(811);
				kwSuperuser();
				}
				break;
			case K_NOSUPERUSER:
				{
				setState(812);
				kwNosuperuser();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
				break;
			default:
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateRoleContext extends ParserRuleContext {
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwRoleContext kwRole() {
			return getRuleContext(KwRoleContext.class,0);
		}
		public RoleContext role() {
			return getRuleContext(RoleContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public RoleWithContext roleWith() {
			return getRuleContext(RoleWithContext.class,0);
		}
		public CreateRoleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createRole; }
	}

	public final CreateRoleContext createRole() throws RecognitionException {
		CreateRoleContext _localctx = new CreateRoleContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_createRole);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(815);
			kwCreate();
			setState(816);
			kwRole();
			setState(818);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(817);
				ifNotExist();
				}
			}

			setState(820);
			role();
			setState(822);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(821);
				roleWith();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateTypeContext extends ParserRuleContext {
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwTypeContext kwType() {
			return getRuleContext(KwTypeContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public TypeMemberColumnListContext typeMemberColumnList() {
			return getRuleContext(TypeMemberColumnListContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public CreateTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createType; }
	}

	public final CreateTypeContext createType() throws RecognitionException {
		CreateTypeContext _localctx = new CreateTypeContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_createType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(824);
			kwCreate();
			setState(825);
			kwType();
			setState(827);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(826);
				ifNotExist();
				}
			}

			setState(832);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				setState(829);
				keyspace();
				setState(830);
				match(DOT);
				}
				break;
			}
			setState(834);
			type();
			setState(835);
			syntaxBracketLr();
			setState(836);
			typeMemberColumnList();
			setState(837);
			syntaxBracketRr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeMemberColumnListContext extends ParserRuleContext {
		public List<ColumnContext> column() {
			return getRuleContexts(ColumnContext.class);
		}
		public ColumnContext column(int i) {
			return getRuleContext(ColumnContext.class,i);
		}
		public List<DataTypeContext> dataType() {
			return getRuleContexts(DataTypeContext.class);
		}
		public DataTypeContext dataType(int i) {
			return getRuleContext(DataTypeContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public TypeMemberColumnListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeMemberColumnList; }
	}

	public final TypeMemberColumnListContext typeMemberColumnList() throws RecognitionException {
		TypeMemberColumnListContext _localctx = new TypeMemberColumnListContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_typeMemberColumnList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(839);
			column();
			setState(840);
			dataType();
			setState(847);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(841);
				syntaxComma();
				setState(842);
				column();
				setState(843);
				dataType();
				}
				}
				setState(849);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateTriggerContext extends ParserRuleContext {
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwTriggerContext kwTrigger() {
			return getRuleContext(KwTriggerContext.class,0);
		}
		public TriggerContext trigger() {
			return getRuleContext(TriggerContext.class,0);
		}
		public KwUsingContext kwUsing() {
			return getRuleContext(KwUsingContext.class,0);
		}
		public TriggerClassContext triggerClass() {
			return getRuleContext(TriggerClassContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public CreateTriggerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createTrigger; }
	}

	public final CreateTriggerContext createTrigger() throws RecognitionException {
		CreateTriggerContext _localctx = new CreateTriggerContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_createTrigger);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(850);
			kwCreate();
			setState(851);
			kwTrigger();
			setState(853);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(852);
				ifNotExist();
				}
			}

			setState(858);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				{
				setState(855);
				keyspace();
				setState(856);
				match(DOT);
				}
				break;
			}
			setState(860);
			trigger();
			setState(861);
			kwUsing();
			setState(862);
			triggerClass();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateMaterializedViewContext extends ParserRuleContext {
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwMaterializedContext kwMaterialized() {
			return getRuleContext(KwMaterializedContext.class,0);
		}
		public KwViewContext kwView() {
			return getRuleContext(KwViewContext.class,0);
		}
		public MaterializedViewContext materializedView() {
			return getRuleContext(MaterializedViewContext.class,0);
		}
		public KwAsContext kwAs() {
			return getRuleContext(KwAsContext.class,0);
		}
		public KwSelectContext kwSelect() {
			return getRuleContext(KwSelectContext.class,0);
		}
		public List<ColumnListContext> columnList() {
			return getRuleContexts(ColumnListContext.class);
		}
		public ColumnListContext columnList(int i) {
			return getRuleContext(ColumnListContext.class,i);
		}
		public KwFromContext kwFrom() {
			return getRuleContext(KwFromContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public MaterializedViewWhereContext materializedViewWhere() {
			return getRuleContext(MaterializedViewWhereContext.class,0);
		}
		public KwPrimaryContext kwPrimary() {
			return getRuleContext(KwPrimaryContext.class,0);
		}
		public KwKeyContext kwKey() {
			return getRuleContext(KwKeyContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public List<KeyspaceContext> keyspace() {
			return getRuleContexts(KeyspaceContext.class);
		}
		public KeyspaceContext keyspace(int i) {
			return getRuleContext(KeyspaceContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(CqlParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(CqlParser.DOT, i);
		}
		public KwWithContext kwWith() {
			return getRuleContext(KwWithContext.class,0);
		}
		public MaterializedViewOptionsContext materializedViewOptions() {
			return getRuleContext(MaterializedViewOptionsContext.class,0);
		}
		public CreateMaterializedViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createMaterializedView; }
	}

	public final CreateMaterializedViewContext createMaterializedView() throws RecognitionException {
		CreateMaterializedViewContext _localctx = new CreateMaterializedViewContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_createMaterializedView);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(864);
			kwCreate();
			setState(865);
			kwMaterialized();
			setState(866);
			kwView();
			setState(868);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(867);
				ifNotExist();
				}
			}

			setState(873);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				{
				setState(870);
				keyspace();
				setState(871);
				match(DOT);
				}
				break;
			}
			setState(875);
			materializedView();
			setState(876);
			kwAs();
			setState(877);
			kwSelect();
			setState(878);
			columnList();
			setState(879);
			kwFrom();
			setState(883);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				{
				setState(880);
				keyspace();
				setState(881);
				match(DOT);
				}
				break;
			}
			setState(885);
			table();
			setState(886);
			materializedViewWhere();
			setState(887);
			kwPrimary();
			setState(888);
			kwKey();
			setState(889);
			syntaxBracketLr();
			setState(890);
			columnList();
			setState(891);
			syntaxBracketRr();
			setState(895);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(892);
				kwWith();
				setState(893);
				materializedViewOptions();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MaterializedViewWhereContext extends ParserRuleContext {
		public KwWhereContext kwWhere() {
			return getRuleContext(KwWhereContext.class,0);
		}
		public ColumnNotNullListContext columnNotNullList() {
			return getRuleContext(ColumnNotNullListContext.class,0);
		}
		public KwAndContext kwAnd() {
			return getRuleContext(KwAndContext.class,0);
		}
		public RelationElementsContext relationElements() {
			return getRuleContext(RelationElementsContext.class,0);
		}
		public MaterializedViewWhereContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_materializedViewWhere; }
	}

	public final MaterializedViewWhereContext materializedViewWhere() throws RecognitionException {
		MaterializedViewWhereContext _localctx = new MaterializedViewWhereContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_materializedViewWhere);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(897);
			kwWhere();
			setState(898);
			columnNotNullList();
			setState(902);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_AND) {
				{
				setState(899);
				kwAnd();
				setState(900);
				relationElements();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnNotNullListContext extends ParserRuleContext {
		public List<ColumnNotNullContext> columnNotNull() {
			return getRuleContexts(ColumnNotNullContext.class);
		}
		public ColumnNotNullContext columnNotNull(int i) {
			return getRuleContext(ColumnNotNullContext.class,i);
		}
		public List<KwAndContext> kwAnd() {
			return getRuleContexts(KwAndContext.class);
		}
		public KwAndContext kwAnd(int i) {
			return getRuleContext(KwAndContext.class,i);
		}
		public ColumnNotNullListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnNotNullList; }
	}

	public final ColumnNotNullListContext columnNotNullList() throws RecognitionException {
		ColumnNotNullListContext _localctx = new ColumnNotNullListContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_columnNotNullList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(904);
			columnNotNull();
			setState(910);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(905);
					kwAnd();
					setState(906);
					columnNotNull();
					}
					} 
				}
				setState(912);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnNotNullContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public KwIsContext kwIs() {
			return getRuleContext(KwIsContext.class,0);
		}
		public KwNotContext kwNot() {
			return getRuleContext(KwNotContext.class,0);
		}
		public KwNullContext kwNull() {
			return getRuleContext(KwNullContext.class,0);
		}
		public ColumnNotNullContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnNotNull; }
	}

	public final ColumnNotNullContext columnNotNull() throws RecognitionException {
		ColumnNotNullContext _localctx = new ColumnNotNullContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_columnNotNull);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(913);
			column();
			setState(914);
			kwIs();
			setState(915);
			kwNot();
			setState(916);
			kwNull();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MaterializedViewOptionsContext extends ParserRuleContext {
		public TableOptionsContext tableOptions() {
			return getRuleContext(TableOptionsContext.class,0);
		}
		public KwAndContext kwAnd() {
			return getRuleContext(KwAndContext.class,0);
		}
		public ClusteringOrderContext clusteringOrder() {
			return getRuleContext(ClusteringOrderContext.class,0);
		}
		public MaterializedViewOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_materializedViewOptions; }
	}

	public final MaterializedViewOptionsContext materializedViewOptions() throws RecognitionException {
		MaterializedViewOptionsContext _localctx = new MaterializedViewOptionsContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_materializedViewOptions);
		try {
			setState(924);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(918);
				tableOptions();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(919);
				tableOptions();
				setState(920);
				kwAnd();
				setState(921);
				clusteringOrder();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(923);
				clusteringOrder();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateKeyspaceContext extends ParserRuleContext {
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwKeyspaceContext kwKeyspace() {
			return getRuleContext(KwKeyspaceContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public KwWithContext kwWith() {
			return getRuleContext(KwWithContext.class,0);
		}
		public KwReplicationContext kwReplication() {
			return getRuleContext(KwReplicationContext.class,0);
		}
		public TerminalNode OPERATOR_EQ() { return getToken(CqlParser.OPERATOR_EQ, 0); }
		public SyntaxBracketLcContext syntaxBracketLc() {
			return getRuleContext(SyntaxBracketLcContext.class,0);
		}
		public ReplicationListContext replicationList() {
			return getRuleContext(ReplicationListContext.class,0);
		}
		public SyntaxBracketRcContext syntaxBracketRc() {
			return getRuleContext(SyntaxBracketRcContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public KwAndContext kwAnd() {
			return getRuleContext(KwAndContext.class,0);
		}
		public DurableWritesContext durableWrites() {
			return getRuleContext(DurableWritesContext.class,0);
		}
		public CreateKeyspaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createKeyspace; }
	}

	public final CreateKeyspaceContext createKeyspace() throws RecognitionException {
		CreateKeyspaceContext _localctx = new CreateKeyspaceContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_createKeyspace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(926);
			kwCreate();
			setState(927);
			kwKeyspace();
			setState(929);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(928);
				ifNotExist();
				}
			}

			setState(931);
			keyspace();
			setState(932);
			kwWith();
			setState(933);
			kwReplication();
			setState(934);
			match(OPERATOR_EQ);
			setState(935);
			syntaxBracketLc();
			setState(936);
			replicationList();
			setState(937);
			syntaxBracketRc();
			setState(941);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_AND) {
				{
				setState(938);
				kwAnd();
				setState(939);
				durableWrites();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateFunctionContext extends ParserRuleContext {
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwFunctionContext kwFunction() {
			return getRuleContext(KwFunctionContext.class,0);
		}
		public FunctionContext function() {
			return getRuleContext(FunctionContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public ReturnModeContext returnMode() {
			return getRuleContext(ReturnModeContext.class,0);
		}
		public KwReturnsContext kwReturns() {
			return getRuleContext(KwReturnsContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public KwLanguageContext kwLanguage() {
			return getRuleContext(KwLanguageContext.class,0);
		}
		public LanguageContext language() {
			return getRuleContext(LanguageContext.class,0);
		}
		public KwAsContext kwAs() {
			return getRuleContext(KwAsContext.class,0);
		}
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public OrReplaceContext orReplace() {
			return getRuleContext(OrReplaceContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public CreateFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createFunction; }
	}

	public final CreateFunctionContext createFunction() throws RecognitionException {
		CreateFunctionContext _localctx = new CreateFunctionContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_createFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(943);
			kwCreate();
			setState(945);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OR) {
				{
				setState(944);
				orReplace();
				}
			}

			setState(947);
			kwFunction();
			setState(949);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(948);
				ifNotExist();
				}
			}

			setState(954);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				{
				setState(951);
				keyspace();
				setState(952);
				match(DOT);
				}
				break;
			}
			setState(956);
			function();
			setState(957);
			syntaxBracketLr();
			setState(959);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OBJECT_NAME) {
				{
				setState(958);
				paramList();
				}
			}

			setState(961);
			syntaxBracketRr();
			setState(962);
			returnMode();
			setState(963);
			kwReturns();
			setState(964);
			dataType();
			setState(965);
			kwLanguage();
			setState(966);
			language();
			setState(967);
			kwAs();
			setState(968);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CodeBlockContext extends ParserRuleContext {
		public TerminalNode CODE_BLOCK() { return getToken(CqlParser.CODE_BLOCK, 0); }
		public CodeBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_codeBlock; }
	}

	public final CodeBlockContext codeBlock() throws RecognitionException {
		CodeBlockContext _localctx = new CodeBlockContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_codeBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(970);
			match(CODE_BLOCK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamListContext extends ParserRuleContext {
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public ParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramList; }
	}

	public final ParamListContext paramList() throws RecognitionException {
		ParamListContext _localctx = new ParamListContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(972);
			param();
			setState(978);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(973);
				syntaxComma();
				setState(974);
				param();
				}
				}
				setState(980);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnModeContext extends ParserRuleContext {
		public KwOnContext kwOn() {
			return getRuleContext(KwOnContext.class,0);
		}
		public List<KwNullContext> kwNull() {
			return getRuleContexts(KwNullContext.class);
		}
		public KwNullContext kwNull(int i) {
			return getRuleContext(KwNullContext.class,i);
		}
		public KwInputContext kwInput() {
			return getRuleContext(KwInputContext.class,0);
		}
		public KwCalledContext kwCalled() {
			return getRuleContext(KwCalledContext.class,0);
		}
		public KwReturnsContext kwReturns() {
			return getRuleContext(KwReturnsContext.class,0);
		}
		public ReturnModeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnMode; }
	}

	public final ReturnModeContext returnMode() throws RecognitionException {
		ReturnModeContext _localctx = new ReturnModeContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_returnMode);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(985);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_CALLED:
				{
				setState(981);
				kwCalled();
				}
				break;
			case K_RETURNS:
				{
				setState(982);
				kwReturns();
				setState(983);
				kwNull();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(987);
			kwOn();
			setState(988);
			kwNull();
			setState(989);
			kwInput();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateAggregateContext extends ParserRuleContext {
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwAggregateContext kwAggregate() {
			return getRuleContext(KwAggregateContext.class,0);
		}
		public AggregateContext aggregate() {
			return getRuleContext(AggregateContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public List<DataTypeContext> dataType() {
			return getRuleContexts(DataTypeContext.class);
		}
		public DataTypeContext dataType(int i) {
			return getRuleContext(DataTypeContext.class,i);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public KwSfuncContext kwSfunc() {
			return getRuleContext(KwSfuncContext.class,0);
		}
		public List<FunctionContext> function() {
			return getRuleContexts(FunctionContext.class);
		}
		public FunctionContext function(int i) {
			return getRuleContext(FunctionContext.class,i);
		}
		public KwStypeContext kwStype() {
			return getRuleContext(KwStypeContext.class,0);
		}
		public KwFinalfuncContext kwFinalfunc() {
			return getRuleContext(KwFinalfuncContext.class,0);
		}
		public KwInitcondContext kwInitcond() {
			return getRuleContext(KwInitcondContext.class,0);
		}
		public InitCondDefinitionContext initCondDefinition() {
			return getRuleContext(InitCondDefinitionContext.class,0);
		}
		public OrReplaceContext orReplace() {
			return getRuleContext(OrReplaceContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public CreateAggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createAggregate; }
	}

	public final CreateAggregateContext createAggregate() throws RecognitionException {
		CreateAggregateContext _localctx = new CreateAggregateContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_createAggregate);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(991);
			kwCreate();
			setState(993);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OR) {
				{
				setState(992);
				orReplace();
				}
			}

			setState(995);
			kwAggregate();
			setState(997);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(996);
				ifNotExist();
				}
			}

			setState(1002);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				{
				setState(999);
				keyspace();
				setState(1000);
				match(DOT);
				}
				break;
			}
			setState(1004);
			aggregate();
			setState(1005);
			syntaxBracketLr();
			setState(1006);
			dataType();
			setState(1007);
			syntaxBracketRr();
			setState(1008);
			kwSfunc();
			setState(1009);
			function();
			setState(1010);
			kwStype();
			setState(1011);
			dataType();
			setState(1012);
			kwFinalfunc();
			setState(1013);
			function();
			setState(1014);
			kwInitcond();
			setState(1015);
			initCondDefinition();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitCondDefinitionContext extends ParserRuleContext {
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public InitCondListContext initCondList() {
			return getRuleContext(InitCondListContext.class,0);
		}
		public InitCondListNestedContext initCondListNested() {
			return getRuleContext(InitCondListNestedContext.class,0);
		}
		public InitCondHashContext initCondHash() {
			return getRuleContext(InitCondHashContext.class,0);
		}
		public InitCondDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initCondDefinition; }
	}

	public final InitCondDefinitionContext initCondDefinition() throws RecognitionException {
		InitCondDefinitionContext _localctx = new InitCondDefinitionContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_initCondDefinition);
		try {
			setState(1021);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1017);
				constant();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1018);
				initCondList();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1019);
				initCondListNested();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1020);
				initCondHash();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitCondHashContext extends ParserRuleContext {
		public SyntaxBracketLcContext syntaxBracketLc() {
			return getRuleContext(SyntaxBracketLcContext.class,0);
		}
		public List<InitCondHashItemContext> initCondHashItem() {
			return getRuleContexts(InitCondHashItemContext.class);
		}
		public InitCondHashItemContext initCondHashItem(int i) {
			return getRuleContext(InitCondHashItemContext.class,i);
		}
		public SyntaxBracketRcContext syntaxBracketRc() {
			return getRuleContext(SyntaxBracketRcContext.class,0);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public InitCondHashContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initCondHash; }
	}

	public final InitCondHashContext initCondHash() throws RecognitionException {
		InitCondHashContext _localctx = new InitCondHashContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_initCondHash);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1023);
			syntaxBracketLc();
			setState(1024);
			initCondHashItem();
			setState(1030);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1025);
				syntaxComma();
				setState(1026);
				initCondHashItem();
				}
				}
				setState(1032);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1033);
			syntaxBracketRc();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitCondHashItemContext extends ParserRuleContext {
		public HashKeyContext hashKey() {
			return getRuleContext(HashKeyContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CqlParser.COLON, 0); }
		public InitCondDefinitionContext initCondDefinition() {
			return getRuleContext(InitCondDefinitionContext.class,0);
		}
		public InitCondHashItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initCondHashItem; }
	}

	public final InitCondHashItemContext initCondHashItem() throws RecognitionException {
		InitCondHashItemContext _localctx = new InitCondHashItemContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_initCondHashItem);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1035);
			hashKey();
			setState(1036);
			match(COLON);
			setState(1037);
			initCondDefinition();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitCondListNestedContext extends ParserRuleContext {
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public List<InitCondListContext> initCondList() {
			return getRuleContexts(InitCondListContext.class);
		}
		public InitCondListContext initCondList(int i) {
			return getRuleContext(InitCondListContext.class,i);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public InitCondListNestedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initCondListNested; }
	}

	public final InitCondListNestedContext initCondListNested() throws RecognitionException {
		InitCondListNestedContext _localctx = new InitCondListNestedContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_initCondListNested);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1039);
			syntaxBracketLr();
			setState(1040);
			initCondList();
			setState(1047);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LR_BRACKET || _la==COMMA) {
				{
				setState(1045);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case COMMA:
					{
					setState(1041);
					syntaxComma();
					setState(1042);
					constant();
					}
					break;
				case LR_BRACKET:
					{
					setState(1044);
					initCondList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(1049);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1050);
			syntaxBracketRr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitCondListContext extends ParserRuleContext {
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public InitCondListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initCondList; }
	}

	public final InitCondListContext initCondList() throws RecognitionException {
		InitCondListContext _localctx = new InitCondListContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_initCondList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1052);
			syntaxBracketLr();
			setState(1053);
			constant();
			setState(1059);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1054);
				syntaxComma();
				setState(1055);
				constant();
				}
				}
				setState(1061);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1062);
			syntaxBracketRr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrReplaceContext extends ParserRuleContext {
		public KwOrContext kwOr() {
			return getRuleContext(KwOrContext.class,0);
		}
		public KwReplaceContext kwReplace() {
			return getRuleContext(KwReplaceContext.class,0);
		}
		public OrReplaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orReplace; }
	}

	public final OrReplaceContext orReplace() throws RecognitionException {
		OrReplaceContext _localctx = new OrReplaceContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_orReplace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1064);
			kwOr();
			setState(1065);
			kwReplace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterUserContext extends ParserRuleContext {
		public KwAlterContext kwAlter() {
			return getRuleContext(KwAlterContext.class,0);
		}
		public KwUserContext kwUser() {
			return getRuleContext(KwUserContext.class,0);
		}
		public UserContext user() {
			return getRuleContext(UserContext.class,0);
		}
		public KwWithContext kwWith() {
			return getRuleContext(KwWithContext.class,0);
		}
		public UserPasswordContext userPassword() {
			return getRuleContext(UserPasswordContext.class,0);
		}
		public UserSuperUserContext userSuperUser() {
			return getRuleContext(UserSuperUserContext.class,0);
		}
		public AlterUserContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterUser; }
	}

	public final AlterUserContext alterUser() throws RecognitionException {
		AlterUserContext _localctx = new AlterUserContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_alterUser);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1067);
			kwAlter();
			setState(1068);
			kwUser();
			setState(1069);
			user();
			setState(1070);
			kwWith();
			setState(1071);
			userPassword();
			setState(1073);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_NOSUPERUSER || _la==K_SUPERUSER) {
				{
				setState(1072);
				userSuperUser();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UserPasswordContext extends ParserRuleContext {
		public KwPasswordContext kwPassword() {
			return getRuleContext(KwPasswordContext.class,0);
		}
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public UserPasswordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_userPassword; }
	}

	public final UserPasswordContext userPassword() throws RecognitionException {
		UserPasswordContext _localctx = new UserPasswordContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_userPassword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1075);
			kwPassword();
			setState(1076);
			literalString();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UserSuperUserContext extends ParserRuleContext {
		public KwSuperuserContext kwSuperuser() {
			return getRuleContext(KwSuperuserContext.class,0);
		}
		public KwNosuperuserContext kwNosuperuser() {
			return getRuleContext(KwNosuperuserContext.class,0);
		}
		public UserSuperUserContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_userSuperUser; }
	}

	public final UserSuperUserContext userSuperUser() throws RecognitionException {
		UserSuperUserContext _localctx = new UserSuperUserContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_userSuperUser);
		try {
			setState(1080);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_SUPERUSER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1078);
				kwSuperuser();
				}
				break;
			case K_NOSUPERUSER:
				enterOuterAlt(_localctx, 2);
				{
				setState(1079);
				kwNosuperuser();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTypeContext extends ParserRuleContext {
		public KwAlterContext kwAlter() {
			return getRuleContext(KwAlterContext.class,0);
		}
		public KwTypeContext kwType() {
			return getRuleContext(KwTypeContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public AlterTypeOperationContext alterTypeOperation() {
			return getRuleContext(AlterTypeOperationContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public AlterTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterType; }
	}

	public final AlterTypeContext alterType() throws RecognitionException {
		AlterTypeContext _localctx = new AlterTypeContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_alterType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1082);
			kwAlter();
			setState(1083);
			kwType();
			setState(1087);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				{
				setState(1084);
				keyspace();
				setState(1085);
				match(DOT);
				}
				break;
			}
			setState(1089);
			type();
			setState(1090);
			alterTypeOperation();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTypeOperationContext extends ParserRuleContext {
		public AlterTypeAlterTypeContext alterTypeAlterType() {
			return getRuleContext(AlterTypeAlterTypeContext.class,0);
		}
		public AlterTypeAddContext alterTypeAdd() {
			return getRuleContext(AlterTypeAddContext.class,0);
		}
		public AlterTypeRenameContext alterTypeRename() {
			return getRuleContext(AlterTypeRenameContext.class,0);
		}
		public AlterTypeOperationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTypeOperation; }
	}

	public final AlterTypeOperationContext alterTypeOperation() throws RecognitionException {
		AlterTypeOperationContext _localctx = new AlterTypeOperationContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_alterTypeOperation);
		try {
			setState(1095);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ALTER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1092);
				alterTypeAlterType();
				}
				break;
			case K_ADD:
				enterOuterAlt(_localctx, 2);
				{
				setState(1093);
				alterTypeAdd();
				}
				break;
			case K_RENAME:
				enterOuterAlt(_localctx, 3);
				{
				setState(1094);
				alterTypeRename();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTypeRenameContext extends ParserRuleContext {
		public KwRenameContext kwRename() {
			return getRuleContext(KwRenameContext.class,0);
		}
		public AlterTypeRenameListContext alterTypeRenameList() {
			return getRuleContext(AlterTypeRenameListContext.class,0);
		}
		public AlterTypeRenameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTypeRename; }
	}

	public final AlterTypeRenameContext alterTypeRename() throws RecognitionException {
		AlterTypeRenameContext _localctx = new AlterTypeRenameContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_alterTypeRename);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1097);
			kwRename();
			setState(1098);
			alterTypeRenameList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTypeRenameListContext extends ParserRuleContext {
		public List<AlterTypeRenameItemContext> alterTypeRenameItem() {
			return getRuleContexts(AlterTypeRenameItemContext.class);
		}
		public AlterTypeRenameItemContext alterTypeRenameItem(int i) {
			return getRuleContext(AlterTypeRenameItemContext.class,i);
		}
		public List<KwAndContext> kwAnd() {
			return getRuleContexts(KwAndContext.class);
		}
		public KwAndContext kwAnd(int i) {
			return getRuleContext(KwAndContext.class,i);
		}
		public AlterTypeRenameListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTypeRenameList; }
	}

	public final AlterTypeRenameListContext alterTypeRenameList() throws RecognitionException {
		AlterTypeRenameListContext _localctx = new AlterTypeRenameListContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_alterTypeRenameList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1100);
			alterTypeRenameItem();
			setState(1106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(1101);
				kwAnd();
				setState(1102);
				alterTypeRenameItem();
				}
				}
				setState(1108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTypeRenameItemContext extends ParserRuleContext {
		public List<ColumnContext> column() {
			return getRuleContexts(ColumnContext.class);
		}
		public ColumnContext column(int i) {
			return getRuleContext(ColumnContext.class,i);
		}
		public KwToContext kwTo() {
			return getRuleContext(KwToContext.class,0);
		}
		public AlterTypeRenameItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTypeRenameItem; }
	}

	public final AlterTypeRenameItemContext alterTypeRenameItem() throws RecognitionException {
		AlterTypeRenameItemContext _localctx = new AlterTypeRenameItemContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_alterTypeRenameItem);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1109);
			column();
			setState(1110);
			kwTo();
			setState(1111);
			column();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTypeAddContext extends ParserRuleContext {
		public KwAddContext kwAdd() {
			return getRuleContext(KwAddContext.class,0);
		}
		public List<ColumnContext> column() {
			return getRuleContexts(ColumnContext.class);
		}
		public ColumnContext column(int i) {
			return getRuleContext(ColumnContext.class,i);
		}
		public List<DataTypeContext> dataType() {
			return getRuleContexts(DataTypeContext.class);
		}
		public DataTypeContext dataType(int i) {
			return getRuleContext(DataTypeContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public AlterTypeAddContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTypeAdd; }
	}

	public final AlterTypeAddContext alterTypeAdd() throws RecognitionException {
		AlterTypeAddContext _localctx = new AlterTypeAddContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_alterTypeAdd);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1113);
			kwAdd();
			setState(1114);
			column();
			setState(1115);
			dataType();
			setState(1122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1116);
				syntaxComma();
				setState(1117);
				column();
				setState(1118);
				dataType();
				}
				}
				setState(1124);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTypeAlterTypeContext extends ParserRuleContext {
		public KwAlterContext kwAlter() {
			return getRuleContext(KwAlterContext.class,0);
		}
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public KwTypeContext kwType() {
			return getRuleContext(KwTypeContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public AlterTypeAlterTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTypeAlterType; }
	}

	public final AlterTypeAlterTypeContext alterTypeAlterType() throws RecognitionException {
		AlterTypeAlterTypeContext _localctx = new AlterTypeAlterTypeContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_alterTypeAlterType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1125);
			kwAlter();
			setState(1126);
			column();
			setState(1127);
			kwType();
			setState(1128);
			dataType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableContext extends ParserRuleContext {
		public KwAlterContext kwAlter() {
			return getRuleContext(KwAlterContext.class,0);
		}
		public KwTableContext kwTable() {
			return getRuleContext(KwTableContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public AlterTableOperationContext alterTableOperation() {
			return getRuleContext(AlterTableOperationContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public AlterTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTable; }
	}

	public final AlterTableContext alterTable() throws RecognitionException {
		AlterTableContext _localctx = new AlterTableContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_alterTable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1130);
			kwAlter();
			setState(1131);
			kwTable();
			setState(1135);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				{
				setState(1132);
				keyspace();
				setState(1133);
				match(DOT);
				}
				break;
			}
			setState(1137);
			table();
			setState(1138);
			alterTableOperation();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableOperationContext extends ParserRuleContext {
		public AlterTableAddContext alterTableAdd() {
			return getRuleContext(AlterTableAddContext.class,0);
		}
		public AlterTableDropColumnsContext alterTableDropColumns() {
			return getRuleContext(AlterTableDropColumnsContext.class,0);
		}
		public AlterTableDropCompactStorageContext alterTableDropCompactStorage() {
			return getRuleContext(AlterTableDropCompactStorageContext.class,0);
		}
		public AlterTableRenameContext alterTableRename() {
			return getRuleContext(AlterTableRenameContext.class,0);
		}
		public AlterTableWithContext alterTableWith() {
			return getRuleContext(AlterTableWithContext.class,0);
		}
		public AlterTableOperationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTableOperation; }
	}

	public final AlterTableOperationContext alterTableOperation() throws RecognitionException {
		AlterTableOperationContext _localctx = new AlterTableOperationContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_alterTableOperation);
		try {
			setState(1146);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1140);
				alterTableAdd();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1141);
				alterTableDropColumns();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1142);
				alterTableDropColumns();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1143);
				alterTableDropCompactStorage();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1144);
				alterTableRename();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1145);
				alterTableWith();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableWithContext extends ParserRuleContext {
		public KwWithContext kwWith() {
			return getRuleContext(KwWithContext.class,0);
		}
		public TableOptionsContext tableOptions() {
			return getRuleContext(TableOptionsContext.class,0);
		}
		public AlterTableWithContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTableWith; }
	}

	public final AlterTableWithContext alterTableWith() throws RecognitionException {
		AlterTableWithContext _localctx = new AlterTableWithContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_alterTableWith);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1148);
			kwWith();
			setState(1149);
			tableOptions();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableRenameContext extends ParserRuleContext {
		public KwRenameContext kwRename() {
			return getRuleContext(KwRenameContext.class,0);
		}
		public List<ColumnContext> column() {
			return getRuleContexts(ColumnContext.class);
		}
		public ColumnContext column(int i) {
			return getRuleContext(ColumnContext.class,i);
		}
		public KwToContext kwTo() {
			return getRuleContext(KwToContext.class,0);
		}
		public AlterTableRenameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTableRename; }
	}

	public final AlterTableRenameContext alterTableRename() throws RecognitionException {
		AlterTableRenameContext _localctx = new AlterTableRenameContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_alterTableRename);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1151);
			kwRename();
			setState(1152);
			column();
			setState(1153);
			kwTo();
			setState(1154);
			column();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableDropCompactStorageContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwCompactContext kwCompact() {
			return getRuleContext(KwCompactContext.class,0);
		}
		public KwStorageContext kwStorage() {
			return getRuleContext(KwStorageContext.class,0);
		}
		public AlterTableDropCompactStorageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTableDropCompactStorage; }
	}

	public final AlterTableDropCompactStorageContext alterTableDropCompactStorage() throws RecognitionException {
		AlterTableDropCompactStorageContext _localctx = new AlterTableDropCompactStorageContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_alterTableDropCompactStorage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1156);
			kwDrop();
			setState(1157);
			kwCompact();
			setState(1158);
			kwStorage();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableDropColumnsContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public AlterTableDropColumnListContext alterTableDropColumnList() {
			return getRuleContext(AlterTableDropColumnListContext.class,0);
		}
		public AlterTableDropColumnsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTableDropColumns; }
	}

	public final AlterTableDropColumnsContext alterTableDropColumns() throws RecognitionException {
		AlterTableDropColumnsContext _localctx = new AlterTableDropColumnsContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_alterTableDropColumns);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1160);
			kwDrop();
			setState(1161);
			alterTableDropColumnList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableDropColumnListContext extends ParserRuleContext {
		public List<ColumnContext> column() {
			return getRuleContexts(ColumnContext.class);
		}
		public ColumnContext column(int i) {
			return getRuleContext(ColumnContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public AlterTableDropColumnListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTableDropColumnList; }
	}

	public final AlterTableDropColumnListContext alterTableDropColumnList() throws RecognitionException {
		AlterTableDropColumnListContext _localctx = new AlterTableDropColumnListContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_alterTableDropColumnList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1163);
			column();
			setState(1169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1164);
				syntaxComma();
				setState(1165);
				column();
				}
				}
				setState(1171);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableAddContext extends ParserRuleContext {
		public KwAddContext kwAdd() {
			return getRuleContext(KwAddContext.class,0);
		}
		public AlterTableColumnDefinitionContext alterTableColumnDefinition() {
			return getRuleContext(AlterTableColumnDefinitionContext.class,0);
		}
		public AlterTableAddContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTableAdd; }
	}

	public final AlterTableAddContext alterTableAdd() throws RecognitionException {
		AlterTableAddContext _localctx = new AlterTableAddContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_alterTableAdd);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1172);
			kwAdd();
			setState(1173);
			alterTableColumnDefinition();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableColumnDefinitionContext extends ParserRuleContext {
		public List<ColumnContext> column() {
			return getRuleContexts(ColumnContext.class);
		}
		public ColumnContext column(int i) {
			return getRuleContext(ColumnContext.class,i);
		}
		public List<DataTypeContext> dataType() {
			return getRuleContexts(DataTypeContext.class);
		}
		public DataTypeContext dataType(int i) {
			return getRuleContext(DataTypeContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public AlterTableColumnDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTableColumnDefinition; }
	}

	public final AlterTableColumnDefinitionContext alterTableColumnDefinition() throws RecognitionException {
		AlterTableColumnDefinitionContext _localctx = new AlterTableColumnDefinitionContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_alterTableColumnDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1175);
			column();
			setState(1176);
			dataType();
			setState(1183);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1177);
				syntaxComma();
				setState(1178);
				column();
				setState(1179);
				dataType();
				}
				}
				setState(1185);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterRoleContext extends ParserRuleContext {
		public KwAlterContext kwAlter() {
			return getRuleContext(KwAlterContext.class,0);
		}
		public KwRoleContext kwRole() {
			return getRuleContext(KwRoleContext.class,0);
		}
		public RoleContext role() {
			return getRuleContext(RoleContext.class,0);
		}
		public RoleWithContext roleWith() {
			return getRuleContext(RoleWithContext.class,0);
		}
		public AlterRoleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterRole; }
	}

	public final AlterRoleContext alterRole() throws RecognitionException {
		AlterRoleContext _localctx = new AlterRoleContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_alterRole);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1186);
			kwAlter();
			setState(1187);
			kwRole();
			setState(1188);
			role();
			setState(1190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(1189);
				roleWith();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleWithContext extends ParserRuleContext {
		public KwWithContext kwWith() {
			return getRuleContext(KwWithContext.class,0);
		}
		public List<RoleWithOptionsContext> roleWithOptions() {
			return getRuleContexts(RoleWithOptionsContext.class);
		}
		public RoleWithOptionsContext roleWithOptions(int i) {
			return getRuleContext(RoleWithOptionsContext.class,i);
		}
		public List<KwAndContext> kwAnd() {
			return getRuleContexts(KwAndContext.class);
		}
		public KwAndContext kwAnd(int i) {
			return getRuleContext(KwAndContext.class,i);
		}
		public RoleWithContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleWith; }
	}

	public final RoleWithContext roleWith() throws RecognitionException {
		RoleWithContext _localctx = new RoleWithContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_roleWith);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1192);
			kwWith();
			{
			setState(1193);
			roleWithOptions();
			setState(1199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(1194);
				kwAnd();
				setState(1195);
				roleWithOptions();
				}
				}
				setState(1201);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleWithOptionsContext extends ParserRuleContext {
		public KwPasswordContext kwPassword() {
			return getRuleContext(KwPasswordContext.class,0);
		}
		public TerminalNode OPERATOR_EQ() { return getToken(CqlParser.OPERATOR_EQ, 0); }
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public KwLoginContext kwLogin() {
			return getRuleContext(KwLoginContext.class,0);
		}
		public LiteralBooleanContext literalBoolean() {
			return getRuleContext(LiteralBooleanContext.class,0);
		}
		public KwSuperuserContext kwSuperuser() {
			return getRuleContext(KwSuperuserContext.class,0);
		}
		public KwOptionsContext kwOptions() {
			return getRuleContext(KwOptionsContext.class,0);
		}
		public OptionHashContext optionHash() {
			return getRuleContext(OptionHashContext.class,0);
		}
		public RoleWithOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleWithOptions; }
	}

	public final RoleWithOptionsContext roleWithOptions() throws RecognitionException {
		RoleWithOptionsContext _localctx = new RoleWithOptionsContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_roleWithOptions);
		try {
			setState(1218);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_PASSWORD:
				enterOuterAlt(_localctx, 1);
				{
				setState(1202);
				kwPassword();
				setState(1203);
				match(OPERATOR_EQ);
				setState(1204);
				literalString();
				}
				break;
			case K_LOGIN:
				enterOuterAlt(_localctx, 2);
				{
				setState(1206);
				kwLogin();
				setState(1207);
				match(OPERATOR_EQ);
				setState(1208);
				literalBoolean();
				}
				break;
			case K_SUPERUSER:
				enterOuterAlt(_localctx, 3);
				{
				setState(1210);
				kwSuperuser();
				setState(1211);
				match(OPERATOR_EQ);
				setState(1212);
				literalBoolean();
				}
				break;
			case K_OPTIONS:
				enterOuterAlt(_localctx, 4);
				{
				setState(1214);
				kwOptions();
				setState(1215);
				match(OPERATOR_EQ);
				setState(1216);
				optionHash();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterMaterializedViewContext extends ParserRuleContext {
		public KwAlterContext kwAlter() {
			return getRuleContext(KwAlterContext.class,0);
		}
		public KwMaterializedContext kwMaterialized() {
			return getRuleContext(KwMaterializedContext.class,0);
		}
		public KwViewContext kwView() {
			return getRuleContext(KwViewContext.class,0);
		}
		public MaterializedViewContext materializedView() {
			return getRuleContext(MaterializedViewContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public KwWithContext kwWith() {
			return getRuleContext(KwWithContext.class,0);
		}
		public TableOptionsContext tableOptions() {
			return getRuleContext(TableOptionsContext.class,0);
		}
		public AlterMaterializedViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterMaterializedView; }
	}

	public final AlterMaterializedViewContext alterMaterializedView() throws RecognitionException {
		AlterMaterializedViewContext _localctx = new AlterMaterializedViewContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_alterMaterializedView);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1220);
			kwAlter();
			setState(1221);
			kwMaterialized();
			setState(1222);
			kwView();
			setState(1226);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
			case 1:
				{
				setState(1223);
				keyspace();
				setState(1224);
				match(DOT);
				}
				break;
			}
			setState(1228);
			materializedView();
			setState(1232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(1229);
				kwWith();
				setState(1230);
				tableOptions();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropUserContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwUserContext kwUser() {
			return getRuleContext(KwUserContext.class,0);
		}
		public UserContext user() {
			return getRuleContext(UserContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public DropUserContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropUser; }
	}

	public final DropUserContext dropUser() throws RecognitionException {
		DropUserContext _localctx = new DropUserContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_dropUser);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1234);
			kwDrop();
			setState(1235);
			kwUser();
			setState(1237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1236);
				ifExist();
				}
			}

			setState(1239);
			user();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropTypeContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwTypeContext kwType() {
			return getRuleContext(KwTypeContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public DropTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropType; }
	}

	public final DropTypeContext dropType() throws RecognitionException {
		DropTypeContext _localctx = new DropTypeContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_dropType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1241);
			kwDrop();
			setState(1242);
			kwType();
			setState(1244);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1243);
				ifExist();
				}
			}

			setState(1249);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,68,_ctx) ) {
			case 1:
				{
				setState(1246);
				keyspace();
				setState(1247);
				match(DOT);
				}
				break;
			}
			setState(1251);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropMaterializedViewContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwMaterializedContext kwMaterialized() {
			return getRuleContext(KwMaterializedContext.class,0);
		}
		public KwViewContext kwView() {
			return getRuleContext(KwViewContext.class,0);
		}
		public MaterializedViewContext materializedView() {
			return getRuleContext(MaterializedViewContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public DropMaterializedViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropMaterializedView; }
	}

	public final DropMaterializedViewContext dropMaterializedView() throws RecognitionException {
		DropMaterializedViewContext _localctx = new DropMaterializedViewContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_dropMaterializedView);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1253);
			kwDrop();
			setState(1254);
			kwMaterialized();
			setState(1255);
			kwView();
			setState(1257);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1256);
				ifExist();
				}
			}

			setState(1262);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
			case 1:
				{
				setState(1259);
				keyspace();
				setState(1260);
				match(DOT);
				}
				break;
			}
			setState(1264);
			materializedView();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropAggregateContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwAggregateContext kwAggregate() {
			return getRuleContext(KwAggregateContext.class,0);
		}
		public AggregateContext aggregate() {
			return getRuleContext(AggregateContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public DropAggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropAggregate; }
	}

	public final DropAggregateContext dropAggregate() throws RecognitionException {
		DropAggregateContext _localctx = new DropAggregateContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_dropAggregate);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1266);
			kwDrop();
			setState(1267);
			kwAggregate();
			setState(1269);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1268);
				ifExist();
				}
			}

			setState(1274);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,72,_ctx) ) {
			case 1:
				{
				setState(1271);
				keyspace();
				setState(1272);
				match(DOT);
				}
				break;
			}
			setState(1276);
			aggregate();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropFunctionContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwFunctionContext kwFunction() {
			return getRuleContext(KwFunctionContext.class,0);
		}
		public FunctionContext function() {
			return getRuleContext(FunctionContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public DropFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropFunction; }
	}

	public final DropFunctionContext dropFunction() throws RecognitionException {
		DropFunctionContext _localctx = new DropFunctionContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_dropFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1278);
			kwDrop();
			setState(1279);
			kwFunction();
			setState(1281);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1280);
				ifExist();
				}
			}

			setState(1286);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				{
				setState(1283);
				keyspace();
				setState(1284);
				match(DOT);
				}
				break;
			}
			setState(1288);
			function();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropTriggerContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwTriggerContext kwTrigger() {
			return getRuleContext(KwTriggerContext.class,0);
		}
		public TriggerContext trigger() {
			return getRuleContext(TriggerContext.class,0);
		}
		public KwOnContext kwOn() {
			return getRuleContext(KwOnContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public DropTriggerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropTrigger; }
	}

	public final DropTriggerContext dropTrigger() throws RecognitionException {
		DropTriggerContext _localctx = new DropTriggerContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_dropTrigger);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1290);
			kwDrop();
			setState(1291);
			kwTrigger();
			setState(1293);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1292);
				ifExist();
				}
			}

			setState(1295);
			trigger();
			setState(1296);
			kwOn();
			setState(1300);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,76,_ctx) ) {
			case 1:
				{
				setState(1297);
				keyspace();
				setState(1298);
				match(DOT);
				}
				break;
			}
			setState(1302);
			table();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropRoleContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwRoleContext kwRole() {
			return getRuleContext(KwRoleContext.class,0);
		}
		public RoleContext role() {
			return getRuleContext(RoleContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public DropRoleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropRole; }
	}

	public final DropRoleContext dropRole() throws RecognitionException {
		DropRoleContext _localctx = new DropRoleContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_dropRole);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1304);
			kwDrop();
			setState(1305);
			kwRole();
			setState(1307);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1306);
				ifExist();
				}
			}

			setState(1309);
			role();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropTableContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwTableContext kwTable() {
			return getRuleContext(KwTableContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public DropTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropTable; }
	}

	public final DropTableContext dropTable() throws RecognitionException {
		DropTableContext _localctx = new DropTableContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_dropTable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1311);
			kwDrop();
			setState(1312);
			kwTable();
			setState(1314);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1313);
				ifExist();
				}
			}

			setState(1319);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,79,_ctx) ) {
			case 1:
				{
				setState(1316);
				keyspace();
				setState(1317);
				match(DOT);
				}
				break;
			}
			setState(1321);
			table();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropKeyspaceContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwKeyspaceContext kwKeyspace() {
			return getRuleContext(KwKeyspaceContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public DropKeyspaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropKeyspace; }
	}

	public final DropKeyspaceContext dropKeyspace() throws RecognitionException {
		DropKeyspaceContext _localctx = new DropKeyspaceContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_dropKeyspace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1323);
			kwDrop();
			setState(1324);
			kwKeyspace();
			setState(1326);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1325);
				ifExist();
				}
			}

			setState(1328);
			keyspace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropIndexContext extends ParserRuleContext {
		public KwDropContext kwDrop() {
			return getRuleContext(KwDropContext.class,0);
		}
		public KwIndexContext kwIndex() {
			return getRuleContext(KwIndexContext.class,0);
		}
		public IndexNameContext indexName() {
			return getRuleContext(IndexNameContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public DropIndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropIndex; }
	}

	public final DropIndexContext dropIndex() throws RecognitionException {
		DropIndexContext _localctx = new DropIndexContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_dropIndex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1330);
			kwDrop();
			setState(1331);
			kwIndex();
			setState(1333);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1332);
				ifExist();
				}
			}

			setState(1338);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,82,_ctx) ) {
			case 1:
				{
				setState(1335);
				keyspace();
				setState(1336);
				match(DOT);
				}
				break;
			}
			setState(1340);
			indexName();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateTableContext extends ParserRuleContext {
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwTableContext kwTable() {
			return getRuleContext(KwTableContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public ColumnDefinitionListContext columnDefinitionList() {
			return getRuleContext(ColumnDefinitionListContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public WithElementContext withElement() {
			return getRuleContext(WithElementContext.class,0);
		}
		public CreateTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createTable; }
	}

	public final CreateTableContext createTable() throws RecognitionException {
		CreateTableContext _localctx = new CreateTableContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_createTable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1342);
			kwCreate();
			setState(1343);
			kwTable();
			setState(1345);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1344);
				ifNotExist();
				}
			}

			setState(1350);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				{
				setState(1347);
				keyspace();
				setState(1348);
				match(DOT);
				}
				break;
			}
			setState(1352);
			table();
			setState(1353);
			syntaxBracketLr();
			setState(1354);
			columnDefinitionList();
			setState(1355);
			syntaxBracketRr();
			setState(1357);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(1356);
				withElement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WithElementContext extends ParserRuleContext {
		public KwWithContext kwWith() {
			return getRuleContext(KwWithContext.class,0);
		}
		public TableOptionsContext tableOptions() {
			return getRuleContext(TableOptionsContext.class,0);
		}
		public ClusteringOrderContext clusteringOrder() {
			return getRuleContext(ClusteringOrderContext.class,0);
		}
		public WithElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withElement; }
	}

	public final WithElementContext withElement() throws RecognitionException {
		WithElementContext _localctx = new WithElementContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_withElement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1359);
			kwWith();
			setState(1361);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OBJECT_NAME) {
				{
				setState(1360);
				tableOptions();
				}
			}

			setState(1364);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_CLUSTERING) {
				{
				setState(1363);
				clusteringOrder();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClusteringOrderContext extends ParserRuleContext {
		public KwClusteringContext kwClustering() {
			return getRuleContext(KwClusteringContext.class,0);
		}
		public KwOrderContext kwOrder() {
			return getRuleContext(KwOrderContext.class,0);
		}
		public KwByContext kwBy() {
			return getRuleContext(KwByContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public OrderDirectionContext orderDirection() {
			return getRuleContext(OrderDirectionContext.class,0);
		}
		public ClusteringOrderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clusteringOrder; }
	}

	public final ClusteringOrderContext clusteringOrder() throws RecognitionException {
		ClusteringOrderContext _localctx = new ClusteringOrderContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_clusteringOrder);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1366);
			kwClustering();
			setState(1367);
			kwOrder();
			setState(1368);
			kwBy();
			setState(1369);
			syntaxBracketLr();
			setState(1370);
			column();
			setState(1372);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ASC || _la==K_DESC) {
				{
				setState(1371);
				orderDirection();
				}
			}

			setState(1374);
			syntaxBracketRr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableOptionsContext extends ParserRuleContext {
		public List<TableOptionItemContext> tableOptionItem() {
			return getRuleContexts(TableOptionItemContext.class);
		}
		public TableOptionItemContext tableOptionItem(int i) {
			return getRuleContext(TableOptionItemContext.class,i);
		}
		public List<KwAndContext> kwAnd() {
			return getRuleContexts(KwAndContext.class);
		}
		public KwAndContext kwAnd(int i) {
			return getRuleContext(KwAndContext.class,i);
		}
		public TableOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableOptions; }
	}

	public final TableOptionsContext tableOptions() throws RecognitionException {
		TableOptionsContext _localctx = new TableOptionsContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_tableOptions);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1376);
			tableOptionItem();
			setState(1382);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1377);
					kwAnd();
					setState(1378);
					tableOptionItem();
					}
					} 
				}
				setState(1384);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableOptionItemContext extends ParserRuleContext {
		public TableOptionNameContext tableOptionName() {
			return getRuleContext(TableOptionNameContext.class,0);
		}
		public TerminalNode OPERATOR_EQ() { return getToken(CqlParser.OPERATOR_EQ, 0); }
		public TableOptionValueContext tableOptionValue() {
			return getRuleContext(TableOptionValueContext.class,0);
		}
		public OptionHashContext optionHash() {
			return getRuleContext(OptionHashContext.class,0);
		}
		public TableOptionItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableOptionItem; }
	}

	public final TableOptionItemContext tableOptionItem() throws RecognitionException {
		TableOptionItemContext _localctx = new TableOptionItemContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_tableOptionItem);
		try {
			setState(1393);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1385);
				tableOptionName();
				setState(1386);
				match(OPERATOR_EQ);
				setState(1387);
				tableOptionValue();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1389);
				tableOptionName();
				setState(1390);
				match(OPERATOR_EQ);
				setState(1391);
				optionHash();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableOptionNameContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public TableOptionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableOptionName; }
	}

	public final TableOptionNameContext tableOptionName() throws RecognitionException {
		TableOptionNameContext _localctx = new TableOptionNameContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_tableOptionName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1395);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableOptionValueContext extends ParserRuleContext {
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public LiteralFloatContext literalFloat() {
			return getRuleContext(LiteralFloatContext.class,0);
		}
		public TableOptionValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableOptionValue; }
	}

	public final TableOptionValueContext tableOptionValue() throws RecognitionException {
		TableOptionValueContext _localctx = new TableOptionValueContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_tableOptionValue);
		try {
			setState(1399);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1397);
				literalString();
				}
				break;
			case DECIMAL_LITERAL:
			case FLOAT_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1398);
				literalFloat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionHashContext extends ParserRuleContext {
		public SyntaxBracketLcContext syntaxBracketLc() {
			return getRuleContext(SyntaxBracketLcContext.class,0);
		}
		public List<OptionHashItemContext> optionHashItem() {
			return getRuleContexts(OptionHashItemContext.class);
		}
		public OptionHashItemContext optionHashItem(int i) {
			return getRuleContext(OptionHashItemContext.class,i);
		}
		public SyntaxBracketRcContext syntaxBracketRc() {
			return getRuleContext(SyntaxBracketRcContext.class,0);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public OptionHashContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionHash; }
	}

	public final OptionHashContext optionHash() throws RecognitionException {
		OptionHashContext _localctx = new OptionHashContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_optionHash);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1401);
			syntaxBracketLc();
			setState(1402);
			optionHashItem();
			setState(1408);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1403);
				syntaxComma();
				setState(1404);
				optionHashItem();
				}
				}
				setState(1410);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1411);
			syntaxBracketRc();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionHashItemContext extends ParserRuleContext {
		public OptionHashKeyContext optionHashKey() {
			return getRuleContext(OptionHashKeyContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CqlParser.COLON, 0); }
		public OptionHashValueContext optionHashValue() {
			return getRuleContext(OptionHashValueContext.class,0);
		}
		public OptionHashItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionHashItem; }
	}

	public final OptionHashItemContext optionHashItem() throws RecognitionException {
		OptionHashItemContext _localctx = new OptionHashItemContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_optionHashItem);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1413);
			optionHashKey();
			setState(1414);
			match(COLON);
			setState(1415);
			optionHashValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionHashKeyContext extends ParserRuleContext {
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public OptionHashKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionHashKey; }
	}

	public final OptionHashKeyContext optionHashKey() throws RecognitionException {
		OptionHashKeyContext _localctx = new OptionHashKeyContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_optionHashKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1417);
			literalString();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionHashValueContext extends ParserRuleContext {
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public LiteralFloatContext literalFloat() {
			return getRuleContext(LiteralFloatContext.class,0);
		}
		public OptionHashValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionHashValue; }
	}

	public final OptionHashValueContext optionHashValue() throws RecognitionException {
		OptionHashValueContext _localctx = new OptionHashValueContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_optionHashValue);
		try {
			setState(1421);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1419);
				literalString();
				}
				break;
			case DECIMAL_LITERAL:
			case FLOAT_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1420);
				literalFloat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnDefinitionListContext extends ParserRuleContext {
		public List<ColumnDefinitionContext> columnDefinition() {
			return getRuleContexts(ColumnDefinitionContext.class);
		}
		public ColumnDefinitionContext columnDefinition(int i) {
			return getRuleContext(ColumnDefinitionContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public PrimaryKeyElementContext primaryKeyElement() {
			return getRuleContext(PrimaryKeyElementContext.class,0);
		}
		public ColumnDefinitionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnDefinitionList; }
	}

	public final ColumnDefinitionListContext columnDefinitionList() throws RecognitionException {
		ColumnDefinitionListContext _localctx = new ColumnDefinitionListContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_columnDefinitionList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1423);
			columnDefinition();
			}
			setState(1429);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,94,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1424);
					syntaxComma();
					setState(1425);
					columnDefinition();
					}
					} 
				}
				setState(1431);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,94,_ctx);
			}
			setState(1435);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(1432);
				syntaxComma();
				setState(1433);
				primaryKeyElement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnDefinitionContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public PrimaryKeyColumnContext primaryKeyColumn() {
			return getRuleContext(PrimaryKeyColumnContext.class,0);
		}
		public KwStaticContext kwStatic() {
			return getRuleContext(KwStaticContext.class,0);
		}
		public ColumnDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnDefinition; }
	}

	public final ColumnDefinitionContext columnDefinition() throws RecognitionException {
		ColumnDefinitionContext _localctx = new ColumnDefinitionContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_columnDefinition);
		try {
			setState(1448);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,96,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1437);
				column();
				setState(1438);
				dataType();
				setState(1439);
				primaryKeyColumn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1441);
				column();
				setState(1442);
				dataType();
				setState(1443);
				kwStatic();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1445);
				column();
				setState(1446);
				dataType();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryKeyColumnContext extends ParserRuleContext {
		public KwPrimaryContext kwPrimary() {
			return getRuleContext(KwPrimaryContext.class,0);
		}
		public KwKeyContext kwKey() {
			return getRuleContext(KwKeyContext.class,0);
		}
		public PrimaryKeyColumnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryKeyColumn; }
	}

	public final PrimaryKeyColumnContext primaryKeyColumn() throws RecognitionException {
		PrimaryKeyColumnContext _localctx = new PrimaryKeyColumnContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_primaryKeyColumn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1450);
			kwPrimary();
			setState(1451);
			kwKey();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryKeyElementContext extends ParserRuleContext {
		public KwPrimaryContext kwPrimary() {
			return getRuleContext(KwPrimaryContext.class,0);
		}
		public KwKeyContext kwKey() {
			return getRuleContext(KwKeyContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public PrimaryKeyDefinitionContext primaryKeyDefinition() {
			return getRuleContext(PrimaryKeyDefinitionContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public PrimaryKeyElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryKeyElement; }
	}

	public final PrimaryKeyElementContext primaryKeyElement() throws RecognitionException {
		PrimaryKeyElementContext _localctx = new PrimaryKeyElementContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_primaryKeyElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1453);
			kwPrimary();
			setState(1454);
			kwKey();
			setState(1455);
			syntaxBracketLr();
			setState(1456);
			primaryKeyDefinition();
			setState(1457);
			syntaxBracketRr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryKeyDefinitionContext extends ParserRuleContext {
		public SinglePrimaryKeyContext singlePrimaryKey() {
			return getRuleContext(SinglePrimaryKeyContext.class,0);
		}
		public CompoundKeyContext compoundKey() {
			return getRuleContext(CompoundKeyContext.class,0);
		}
		public CompositeKeyContext compositeKey() {
			return getRuleContext(CompositeKeyContext.class,0);
		}
		public PrimaryKeyDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryKeyDefinition; }
	}

	public final PrimaryKeyDefinitionContext primaryKeyDefinition() throws RecognitionException {
		PrimaryKeyDefinitionContext _localctx = new PrimaryKeyDefinitionContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_primaryKeyDefinition);
		try {
			setState(1462);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1459);
				singlePrimaryKey();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1460);
				compoundKey();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1461);
				compositeKey();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SinglePrimaryKeyContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public SinglePrimaryKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singlePrimaryKey; }
	}

	public final SinglePrimaryKeyContext singlePrimaryKey() throws RecognitionException {
		SinglePrimaryKeyContext _localctx = new SinglePrimaryKeyContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_singlePrimaryKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1464);
			column();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompoundKeyContext extends ParserRuleContext {
		public PartitionKeyContext partitionKey() {
			return getRuleContext(PartitionKeyContext.class,0);
		}
		public SyntaxCommaContext syntaxComma() {
			return getRuleContext(SyntaxCommaContext.class,0);
		}
		public ClusteringKeyListContext clusteringKeyList() {
			return getRuleContext(ClusteringKeyListContext.class,0);
		}
		public CompoundKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundKey; }
	}

	public final CompoundKeyContext compoundKey() throws RecognitionException {
		CompoundKeyContext _localctx = new CompoundKeyContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_compoundKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1466);
			partitionKey();
			{
			setState(1467);
			syntaxComma();
			setState(1468);
			clusteringKeyList();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompositeKeyContext extends ParserRuleContext {
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public PartitionKeyListContext partitionKeyList() {
			return getRuleContext(PartitionKeyListContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public SyntaxCommaContext syntaxComma() {
			return getRuleContext(SyntaxCommaContext.class,0);
		}
		public ClusteringKeyListContext clusteringKeyList() {
			return getRuleContext(ClusteringKeyListContext.class,0);
		}
		public CompositeKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compositeKey; }
	}

	public final CompositeKeyContext compositeKey() throws RecognitionException {
		CompositeKeyContext _localctx = new CompositeKeyContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_compositeKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1470);
			syntaxBracketLr();
			setState(1471);
			partitionKeyList();
			setState(1472);
			syntaxBracketRr();
			{
			setState(1473);
			syntaxComma();
			setState(1474);
			clusteringKeyList();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PartitionKeyListContext extends ParserRuleContext {
		public List<PartitionKeyContext> partitionKey() {
			return getRuleContexts(PartitionKeyContext.class);
		}
		public PartitionKeyContext partitionKey(int i) {
			return getRuleContext(PartitionKeyContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public PartitionKeyListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_partitionKeyList; }
	}

	public final PartitionKeyListContext partitionKeyList() throws RecognitionException {
		PartitionKeyListContext _localctx = new PartitionKeyListContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_partitionKeyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1476);
			partitionKey();
			}
			setState(1482);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1477);
				syntaxComma();
				setState(1478);
				partitionKey();
				}
				}
				setState(1484);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClusteringKeyListContext extends ParserRuleContext {
		public List<ClusteringKeyContext> clusteringKey() {
			return getRuleContexts(ClusteringKeyContext.class);
		}
		public ClusteringKeyContext clusteringKey(int i) {
			return getRuleContext(ClusteringKeyContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public ClusteringKeyListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clusteringKeyList; }
	}

	public final ClusteringKeyListContext clusteringKeyList() throws RecognitionException {
		ClusteringKeyListContext _localctx = new ClusteringKeyListContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_clusteringKeyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1485);
			clusteringKey();
			}
			setState(1491);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1486);
				syntaxComma();
				setState(1487);
				clusteringKey();
				}
				}
				setState(1493);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PartitionKeyContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public PartitionKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_partitionKey; }
	}

	public final PartitionKeyContext partitionKey() throws RecognitionException {
		PartitionKeyContext _localctx = new PartitionKeyContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_partitionKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1494);
			column();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClusteringKeyContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public ClusteringKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clusteringKey; }
	}

	public final ClusteringKeyContext clusteringKey() throws RecognitionException {
		ClusteringKeyContext _localctx = new ClusteringKeyContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_clusteringKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1496);
			column();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ApplyBatchContext extends ParserRuleContext {
		public KwApplyContext kwApply() {
			return getRuleContext(KwApplyContext.class,0);
		}
		public KwBatchContext kwBatch() {
			return getRuleContext(KwBatchContext.class,0);
		}
		public ApplyBatchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_applyBatch; }
	}

	public final ApplyBatchContext applyBatch() throws RecognitionException {
		ApplyBatchContext _localctx = new ApplyBatchContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_applyBatch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1498);
			kwApply();
			setState(1499);
			kwBatch();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BeginBatchContext extends ParserRuleContext {
		public KwBeginContext kwBegin() {
			return getRuleContext(KwBeginContext.class,0);
		}
		public KwBatchContext kwBatch() {
			return getRuleContext(KwBatchContext.class,0);
		}
		public BatchTypeContext batchType() {
			return getRuleContext(BatchTypeContext.class,0);
		}
		public UsingTimestampSpecContext usingTimestampSpec() {
			return getRuleContext(UsingTimestampSpecContext.class,0);
		}
		public BeginBatchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_beginBatch; }
	}

	public final BeginBatchContext beginBatch() throws RecognitionException {
		BeginBatchContext _localctx = new BeginBatchContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_beginBatch);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1501);
			kwBegin();
			setState(1503);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_LOGGED || _la==K_UNLOGGED) {
				{
				setState(1502);
				batchType();
				}
			}

			setState(1505);
			kwBatch();
			setState(1507);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1506);
				usingTimestampSpec();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BatchTypeContext extends ParserRuleContext {
		public KwLoggedContext kwLogged() {
			return getRuleContext(KwLoggedContext.class,0);
		}
		public KwUnloggedContext kwUnlogged() {
			return getRuleContext(KwUnloggedContext.class,0);
		}
		public BatchTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_batchType; }
	}

	public final BatchTypeContext batchType() throws RecognitionException {
		BatchTypeContext _localctx = new BatchTypeContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_batchType);
		try {
			setState(1511);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_LOGGED:
				enterOuterAlt(_localctx, 1);
				{
				setState(1509);
				kwLogged();
				}
				break;
			case K_UNLOGGED:
				enterOuterAlt(_localctx, 2);
				{
				setState(1510);
				kwUnlogged();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterKeyspaceContext extends ParserRuleContext {
		public KwAlterContext kwAlter() {
			return getRuleContext(KwAlterContext.class,0);
		}
		public KwKeyspaceContext kwKeyspace() {
			return getRuleContext(KwKeyspaceContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public KwWithContext kwWith() {
			return getRuleContext(KwWithContext.class,0);
		}
		public KwReplicationContext kwReplication() {
			return getRuleContext(KwReplicationContext.class,0);
		}
		public TerminalNode OPERATOR_EQ() { return getToken(CqlParser.OPERATOR_EQ, 0); }
		public SyntaxBracketLcContext syntaxBracketLc() {
			return getRuleContext(SyntaxBracketLcContext.class,0);
		}
		public ReplicationListContext replicationList() {
			return getRuleContext(ReplicationListContext.class,0);
		}
		public SyntaxBracketRcContext syntaxBracketRc() {
			return getRuleContext(SyntaxBracketRcContext.class,0);
		}
		public KwAndContext kwAnd() {
			return getRuleContext(KwAndContext.class,0);
		}
		public DurableWritesContext durableWrites() {
			return getRuleContext(DurableWritesContext.class,0);
		}
		public AlterKeyspaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterKeyspace; }
	}

	public final AlterKeyspaceContext alterKeyspace() throws RecognitionException {
		AlterKeyspaceContext _localctx = new AlterKeyspaceContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_alterKeyspace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1513);
			kwAlter();
			setState(1514);
			kwKeyspace();
			setState(1515);
			keyspace();
			setState(1516);
			kwWith();
			setState(1517);
			kwReplication();
			setState(1518);
			match(OPERATOR_EQ);
			setState(1519);
			syntaxBracketLc();
			setState(1520);
			replicationList();
			setState(1521);
			syntaxBracketRc();
			setState(1525);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_AND) {
				{
				setState(1522);
				kwAnd();
				setState(1523);
				durableWrites();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReplicationListContext extends ParserRuleContext {
		public List<ReplicationListItemContext> replicationListItem() {
			return getRuleContexts(ReplicationListItemContext.class);
		}
		public ReplicationListItemContext replicationListItem(int i) {
			return getRuleContext(ReplicationListItemContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public ReplicationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_replicationList; }
	}

	public final ReplicationListContext replicationList() throws RecognitionException {
		ReplicationListContext _localctx = new ReplicationListContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_replicationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1527);
			replicationListItem();
			}
			setState(1533);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1528);
				syntaxComma();
				setState(1529);
				replicationListItem();
				}
				}
				setState(1535);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReplicationListItemContext extends ParserRuleContext {
		public List<TerminalNode> STRING_LITERAL() { return getTokens(CqlParser.STRING_LITERAL); }
		public TerminalNode STRING_LITERAL(int i) {
			return getToken(CqlParser.STRING_LITERAL, i);
		}
		public TerminalNode COLON() { return getToken(CqlParser.COLON, 0); }
		public TerminalNode DECIMAL_LITERAL() { return getToken(CqlParser.DECIMAL_LITERAL, 0); }
		public ReplicationListItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_replicationListItem; }
	}

	public final ReplicationListItemContext replicationListItem() throws RecognitionException {
		ReplicationListItemContext _localctx = new ReplicationListItemContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_replicationListItem);
		try {
			setState(1542);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,105,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1536);
				match(STRING_LITERAL);
				setState(1537);
				match(COLON);
				setState(1538);
				match(STRING_LITERAL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1539);
				match(STRING_LITERAL);
				setState(1540);
				match(COLON);
				setState(1541);
				match(DECIMAL_LITERAL);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DurableWritesContext extends ParserRuleContext {
		public KwDurableWritesContext kwDurableWrites() {
			return getRuleContext(KwDurableWritesContext.class,0);
		}
		public TerminalNode OPERATOR_EQ() { return getToken(CqlParser.OPERATOR_EQ, 0); }
		public LiteralBooleanContext literalBoolean() {
			return getRuleContext(LiteralBooleanContext.class,0);
		}
		public DurableWritesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_durableWrites; }
	}

	public final DurableWritesContext durableWrites() throws RecognitionException {
		DurableWritesContext _localctx = new DurableWritesContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_durableWrites);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1544);
			kwDurableWrites();
			setState(1545);
			match(OPERATOR_EQ);
			setState(1546);
			literalBoolean();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UseContext extends ParserRuleContext {
		public KwUseContext kwUse() {
			return getRuleContext(KwUseContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public UseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_use; }
	}

	public final UseContext use() throws RecognitionException {
		UseContext _localctx = new UseContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_use);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1548);
			kwUse();
			setState(1549);
			keyspace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TruncateContext extends ParserRuleContext {
		public KwTruncateContext kwTruncate() {
			return getRuleContext(KwTruncateContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public KwTableContext kwTable() {
			return getRuleContext(KwTableContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public TruncateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_truncate; }
	}

	public final TruncateContext truncate() throws RecognitionException {
		TruncateContext _localctx = new TruncateContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_truncate);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1551);
			kwTruncate();
			setState(1553);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_TABLE) {
				{
				setState(1552);
				kwTable();
				}
			}

			setState(1558);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
			case 1:
				{
				setState(1555);
				keyspace();
				setState(1556);
				match(DOT);
				}
				break;
			}
			setState(1560);
			table();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateIndexContext extends ParserRuleContext {
		public KwCreateContext kwCreate() {
			return getRuleContext(KwCreateContext.class,0);
		}
		public KwIndexContext kwIndex() {
			return getRuleContext(KwIndexContext.class,0);
		}
		public KwOnContext kwOn() {
			return getRuleContext(KwOnContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public IndexColumnSpecContext indexColumnSpec() {
			return getRuleContext(IndexColumnSpecContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public IndexNameContext indexName() {
			return getRuleContext(IndexNameContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public CreateIndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createIndex; }
	}

	public final CreateIndexContext createIndex() throws RecognitionException {
		CreateIndexContext _localctx = new CreateIndexContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_createIndex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1562);
			kwCreate();
			setState(1563);
			kwIndex();
			setState(1565);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1564);
				ifNotExist();
				}
			}

			setState(1568);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STRING_LITERAL || _la==OBJECT_NAME) {
				{
				setState(1567);
				indexName();
				}
			}

			setState(1570);
			kwOn();
			setState(1574);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,110,_ctx) ) {
			case 1:
				{
				setState(1571);
				keyspace();
				setState(1572);
				match(DOT);
				}
				break;
			}
			setState(1576);
			table();
			setState(1577);
			syntaxBracketLr();
			setState(1578);
			indexColumnSpec();
			setState(1579);
			syntaxBracketRr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndexNameContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public IndexNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexName; }
	}

	public final IndexNameContext indexName() throws RecognitionException {
		IndexNameContext _localctx = new IndexNameContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_indexName);
		try {
			setState(1583);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(1581);
				match(OBJECT_NAME);
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1582);
				literalString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndexColumnSpecContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public IndexKeysSpecContext indexKeysSpec() {
			return getRuleContext(IndexKeysSpecContext.class,0);
		}
		public IndexEntriesSSpecContext indexEntriesSSpec() {
			return getRuleContext(IndexEntriesSSpecContext.class,0);
		}
		public IndexFullSpecContext indexFullSpec() {
			return getRuleContext(IndexFullSpecContext.class,0);
		}
		public IndexColumnSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexColumnSpec; }
	}

	public final IndexColumnSpecContext indexColumnSpec() throws RecognitionException {
		IndexColumnSpecContext _localctx = new IndexColumnSpecContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_indexColumnSpec);
		try {
			setState(1589);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DQUOTE:
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(1585);
				column();
				}
				break;
			case K_KEYS:
				enterOuterAlt(_localctx, 2);
				{
				setState(1586);
				indexKeysSpec();
				}
				break;
			case K_ENTRIES:
				enterOuterAlt(_localctx, 3);
				{
				setState(1587);
				indexEntriesSSpec();
				}
				break;
			case K_FULL:
				enterOuterAlt(_localctx, 4);
				{
				setState(1588);
				indexFullSpec();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndexKeysSpecContext extends ParserRuleContext {
		public KwKeysContext kwKeys() {
			return getRuleContext(KwKeysContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public IndexKeysSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexKeysSpec; }
	}

	public final IndexKeysSpecContext indexKeysSpec() throws RecognitionException {
		IndexKeysSpecContext _localctx = new IndexKeysSpecContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_indexKeysSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1591);
			kwKeys();
			setState(1592);
			syntaxBracketLr();
			setState(1593);
			match(OBJECT_NAME);
			setState(1594);
			syntaxBracketRr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndexEntriesSSpecContext extends ParserRuleContext {
		public KwEntriesContext kwEntries() {
			return getRuleContext(KwEntriesContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public IndexEntriesSSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexEntriesSSpec; }
	}

	public final IndexEntriesSSpecContext indexEntriesSSpec() throws RecognitionException {
		IndexEntriesSSpecContext _localctx = new IndexEntriesSSpecContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_indexEntriesSSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1596);
			kwEntries();
			setState(1597);
			syntaxBracketLr();
			setState(1598);
			match(OBJECT_NAME);
			setState(1599);
			syntaxBracketRr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndexFullSpecContext extends ParserRuleContext {
		public KwFullContext kwFull() {
			return getRuleContext(KwFullContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public IndexFullSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexFullSpec; }
	}

	public final IndexFullSpecContext indexFullSpec() throws RecognitionException {
		IndexFullSpecContext _localctx = new IndexFullSpecContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_indexFullSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1601);
			kwFull();
			setState(1602);
			syntaxBracketLr();
			setState(1603);
			match(OBJECT_NAME);
			setState(1604);
			syntaxBracketRr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeleteContext extends ParserRuleContext {
		public KwDeleteContext kwDelete() {
			return getRuleContext(KwDeleteContext.class,0);
		}
		public FromSpecContext fromSpec() {
			return getRuleContext(FromSpecContext.class,0);
		}
		public WhereSpecContext whereSpec() {
			return getRuleContext(WhereSpecContext.class,0);
		}
		public BeginBatchContext beginBatch() {
			return getRuleContext(BeginBatchContext.class,0);
		}
		public DeleteColumnListContext deleteColumnList() {
			return getRuleContext(DeleteColumnListContext.class,0);
		}
		public UsingTimestampSpecContext usingTimestampSpec() {
			return getRuleContext(UsingTimestampSpecContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public IfSpecContext ifSpec() {
			return getRuleContext(IfSpecContext.class,0);
		}
		public DeleteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_delete; }
	}

	public final DeleteContext delete() throws RecognitionException {
		DeleteContext _localctx = new DeleteContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_delete);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1607);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_BEGIN) {
				{
				setState(1606);
				beginBatch();
				}
			}

			setState(1609);
			kwDelete();
			setState(1611);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OBJECT_NAME) {
				{
				setState(1610);
				deleteColumnList();
				}
			}

			setState(1613);
			fromSpec();
			setState(1615);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1614);
				usingTimestampSpec();
				}
			}

			setState(1617);
			whereSpec();
			setState(1620);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,116,_ctx) ) {
			case 1:
				{
				setState(1618);
				ifExist();
				}
				break;
			case 2:
				{
				setState(1619);
				ifSpec();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeleteColumnListContext extends ParserRuleContext {
		public List<DeleteColumnItemContext> deleteColumnItem() {
			return getRuleContexts(DeleteColumnItemContext.class);
		}
		public DeleteColumnItemContext deleteColumnItem(int i) {
			return getRuleContext(DeleteColumnItemContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public DeleteColumnListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deleteColumnList; }
	}

	public final DeleteColumnListContext deleteColumnList() throws RecognitionException {
		DeleteColumnListContext _localctx = new DeleteColumnListContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_deleteColumnList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1622);
			deleteColumnItem();
			}
			setState(1628);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1623);
				syntaxComma();
				setState(1624);
				deleteColumnItem();
				}
				}
				setState(1630);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeleteColumnItemContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public TerminalNode LS_BRACKET() { return getToken(CqlParser.LS_BRACKET, 0); }
		public TerminalNode RS_BRACKET() { return getToken(CqlParser.RS_BRACKET, 0); }
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public LiteralDecimalContext literalDecimal() {
			return getRuleContext(LiteralDecimalContext.class,0);
		}
		public DeleteColumnItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deleteColumnItem; }
	}

	public final DeleteColumnItemContext deleteColumnItem() throws RecognitionException {
		DeleteColumnItemContext _localctx = new DeleteColumnItemContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_deleteColumnItem);
		try {
			setState(1640);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1631);
				match(OBJECT_NAME);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1632);
				match(OBJECT_NAME);
				setState(1633);
				match(LS_BRACKET);
				setState(1636);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case STRING_LITERAL:
					{
					setState(1634);
					literalString();
					}
					break;
				case DECIMAL_LITERAL:
					{
					setState(1635);
					literalDecimal();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1638);
				match(RS_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UpdateContext extends ParserRuleContext {
		public KwUpdateContext kwUpdate() {
			return getRuleContext(KwUpdateContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public KwSetContext kwSet() {
			return getRuleContext(KwSetContext.class,0);
		}
		public AssignmentsContext assignments() {
			return getRuleContext(AssignmentsContext.class,0);
		}
		public WhereSpecContext whereSpec() {
			return getRuleContext(WhereSpecContext.class,0);
		}
		public BeginBatchContext beginBatch() {
			return getRuleContext(BeginBatchContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public UsingTtlTimestampContext usingTtlTimestamp() {
			return getRuleContext(UsingTtlTimestampContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
		public IfSpecContext ifSpec() {
			return getRuleContext(IfSpecContext.class,0);
		}
		public UpdateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_update; }
	}

	public final UpdateContext update() throws RecognitionException {
		UpdateContext _localctx = new UpdateContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_update);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1643);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_BEGIN) {
				{
				setState(1642);
				beginBatch();
				}
			}

			setState(1645);
			kwUpdate();
			setState(1649);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,121,_ctx) ) {
			case 1:
				{
				setState(1646);
				keyspace();
				setState(1647);
				match(DOT);
				}
				break;
			}
			setState(1651);
			table();
			setState(1653);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1652);
				usingTtlTimestamp();
				}
			}

			setState(1655);
			kwSet();
			setState(1656);
			assignments();
			setState(1657);
			whereSpec();
			setState(1660);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,123,_ctx) ) {
			case 1:
				{
				setState(1658);
				ifExist();
				}
				break;
			case 2:
				{
				setState(1659);
				ifSpec();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfSpecContext extends ParserRuleContext {
		public KwIfContext kwIf() {
			return getRuleContext(KwIfContext.class,0);
		}
		public IfConditionListContext ifConditionList() {
			return getRuleContext(IfConditionListContext.class,0);
		}
		public IfSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifSpec; }
	}

	public final IfSpecContext ifSpec() throws RecognitionException {
		IfSpecContext _localctx = new IfSpecContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_ifSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1662);
			kwIf();
			setState(1663);
			ifConditionList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfConditionListContext extends ParserRuleContext {
		public List<IfConditionContext> ifCondition() {
			return getRuleContexts(IfConditionContext.class);
		}
		public IfConditionContext ifCondition(int i) {
			return getRuleContext(IfConditionContext.class,i);
		}
		public List<KwAndContext> kwAnd() {
			return getRuleContexts(KwAndContext.class);
		}
		public KwAndContext kwAnd(int i) {
			return getRuleContext(KwAndContext.class,i);
		}
		public IfConditionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifConditionList; }
	}

	public final IfConditionListContext ifConditionList() throws RecognitionException {
		IfConditionListContext _localctx = new IfConditionListContext(_ctx, getState());
		enterRule(_localctx, 220, RULE_ifConditionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1665);
			ifCondition();
			}
			setState(1671);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(1666);
				kwAnd();
				setState(1667);
				ifCondition();
				}
				}
				setState(1673);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfConditionContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public TerminalNode OPERATOR_EQ() { return getToken(CqlParser.OPERATOR_EQ, 0); }
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public IfConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifCondition; }
	}

	public final IfConditionContext ifCondition() throws RecognitionException {
		IfConditionContext _localctx = new IfConditionContext(_ctx, getState());
		enterRule(_localctx, 222, RULE_ifCondition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1674);
			match(OBJECT_NAME);
			setState(1675);
			match(OPERATOR_EQ);
			setState(1676);
			constant();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentsContext extends ParserRuleContext {
		public List<AssignmentElementContext> assignmentElement() {
			return getRuleContexts(AssignmentElementContext.class);
		}
		public AssignmentElementContext assignmentElement(int i) {
			return getRuleContext(AssignmentElementContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public AssignmentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignments; }
	}

	public final AssignmentsContext assignments() throws RecognitionException {
		AssignmentsContext _localctx = new AssignmentsContext(_ctx, getState());
		enterRule(_localctx, 224, RULE_assignments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1678);
			assignmentElement();
			}
			setState(1684);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1679);
				syntaxComma();
				setState(1680);
				assignmentElement();
				}
				}
				setState(1686);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentElementContext extends ParserRuleContext {
		public List<TerminalNode> OBJECT_NAME() { return getTokens(CqlParser.OBJECT_NAME); }
		public TerminalNode OBJECT_NAME(int i) {
			return getToken(CqlParser.OBJECT_NAME, i);
		}
		public TerminalNode OPERATOR_EQ() { return getToken(CqlParser.OPERATOR_EQ, 0); }
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public AssignmentMapContext assignmentMap() {
			return getRuleContext(AssignmentMapContext.class,0);
		}
		public AssignmentSetContext assignmentSet() {
			return getRuleContext(AssignmentSetContext.class,0);
		}
		public AssignmentListContext assignmentList() {
			return getRuleContext(AssignmentListContext.class,0);
		}
		public LiteralDecimalContext literalDecimal() {
			return getRuleContext(LiteralDecimalContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(CqlParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CqlParser.MINUS, 0); }
		public SyntaxBracketLsContext syntaxBracketLs() {
			return getRuleContext(SyntaxBracketLsContext.class,0);
		}
		public SyntaxBracketRsContext syntaxBracketRs() {
			return getRuleContext(SyntaxBracketRsContext.class,0);
		}
		public AssignmentElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentElement; }
	}

	public final AssignmentElementContext assignmentElement() throws RecognitionException {
		AssignmentElementContext _localctx = new AssignmentElementContext(_ctx, getState());
		enterRule(_localctx, 226, RULE_assignmentElement);
		int _la;
		try {
			setState(1740);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,127,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1687);
				match(OBJECT_NAME);
				setState(1688);
				match(OPERATOR_EQ);
				setState(1693);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,126,_ctx) ) {
				case 1:
					{
					setState(1689);
					constant();
					}
					break;
				case 2:
					{
					setState(1690);
					assignmentMap();
					}
					break;
				case 3:
					{
					setState(1691);
					assignmentSet();
					}
					break;
				case 4:
					{
					setState(1692);
					assignmentList();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1695);
				match(OBJECT_NAME);
				setState(1696);
				match(OPERATOR_EQ);
				setState(1697);
				match(OBJECT_NAME);
				setState(1698);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1699);
				literalDecimal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1700);
				match(OBJECT_NAME);
				setState(1701);
				match(OPERATOR_EQ);
				setState(1702);
				match(OBJECT_NAME);
				setState(1703);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1704);
				assignmentSet();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1705);
				match(OBJECT_NAME);
				setState(1706);
				match(OPERATOR_EQ);
				setState(1707);
				assignmentSet();
				setState(1708);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1709);
				match(OBJECT_NAME);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1711);
				match(OBJECT_NAME);
				setState(1712);
				match(OPERATOR_EQ);
				setState(1713);
				match(OBJECT_NAME);
				setState(1714);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1715);
				assignmentMap();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1716);
				match(OBJECT_NAME);
				setState(1717);
				match(OPERATOR_EQ);
				setState(1718);
				assignmentMap();
				setState(1719);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1720);
				match(OBJECT_NAME);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1722);
				match(OBJECT_NAME);
				setState(1723);
				match(OPERATOR_EQ);
				setState(1724);
				match(OBJECT_NAME);
				setState(1725);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1726);
				assignmentList();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1727);
				match(OBJECT_NAME);
				setState(1728);
				match(OPERATOR_EQ);
				setState(1729);
				assignmentList();
				setState(1730);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1731);
				match(OBJECT_NAME);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1733);
				match(OBJECT_NAME);
				setState(1734);
				syntaxBracketLs();
				setState(1735);
				literalDecimal();
				setState(1736);
				syntaxBracketRs();
				setState(1737);
				match(OPERATOR_EQ);
				setState(1738);
				constant();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentSetContext extends ParserRuleContext {
		public SyntaxBracketLcContext syntaxBracketLc() {
			return getRuleContext(SyntaxBracketLcContext.class,0);
		}
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public SyntaxBracketRcContext syntaxBracketRc() {
			return getRuleContext(SyntaxBracketRcContext.class,0);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public AssignmentSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentSet; }
	}

	public final AssignmentSetContext assignmentSet() throws RecognitionException {
		AssignmentSetContext _localctx = new AssignmentSetContext(_ctx, getState());
		enterRule(_localctx, 228, RULE_assignmentSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1742);
			syntaxBracketLc();
			setState(1743);
			constant();
			setState(1749);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1744);
				syntaxComma();
				setState(1745);
				constant();
				}
				}
				setState(1751);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1752);
			syntaxBracketRc();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentMapContext extends ParserRuleContext {
		public SyntaxBracketLcContext syntaxBracketLc() {
			return getRuleContext(SyntaxBracketLcContext.class,0);
		}
		public SyntaxBracketRcContext syntaxBracketRc() {
			return getRuleContext(SyntaxBracketRcContext.class,0);
		}
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public List<SyntaxColonContext> syntaxColon() {
			return getRuleContexts(SyntaxColonContext.class);
		}
		public SyntaxColonContext syntaxColon(int i) {
			return getRuleContext(SyntaxColonContext.class,i);
		}
		public AssignmentMapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentMap; }
	}

	public final AssignmentMapContext assignmentMap() throws RecognitionException {
		AssignmentMapContext _localctx = new AssignmentMapContext(_ctx, getState());
		enterRule(_localctx, 230, RULE_assignmentMap);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1754);
			syntaxBracketLc();
			{
			setState(1755);
			constant();
			setState(1756);
			syntaxColon();
			setState(1757);
			constant();
			}
			setState(1765);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_FALSE || _la==K_NULL || ((((_la - 124)) & ~0x3f) == 0 && ((1L << (_la - 124)) & ((1L << (K_TRUE - 124)) | (1L << (STRING_LITERAL - 124)) | (1L << (DECIMAL_LITERAL - 124)) | (1L << (HEXADECIMAL_LITERAL - 124)) | (1L << (UUID - 124)))) != 0)) {
				{
				{
				setState(1759);
				constant();
				setState(1760);
				syntaxColon();
				setState(1761);
				constant();
				}
				}
				setState(1767);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1768);
			syntaxBracketRc();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentListContext extends ParserRuleContext {
		public SyntaxBracketLsContext syntaxBracketLs() {
			return getRuleContext(SyntaxBracketLsContext.class,0);
		}
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public SyntaxBracketRsContext syntaxBracketRs() {
			return getRuleContext(SyntaxBracketRsContext.class,0);
		}
		public List<SyntaxColonContext> syntaxColon() {
			return getRuleContexts(SyntaxColonContext.class);
		}
		public SyntaxColonContext syntaxColon(int i) {
			return getRuleContext(SyntaxColonContext.class,i);
		}
		public AssignmentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentList; }
	}

	public final AssignmentListContext assignmentList() throws RecognitionException {
		AssignmentListContext _localctx = new AssignmentListContext(_ctx, getState());
		enterRule(_localctx, 232, RULE_assignmentList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1770);
			syntaxBracketLs();
			setState(1771);
			constant();
			setState(1777);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COLON) {
				{
				{
				setState(1772);
				syntaxColon();
				setState(1773);
				constant();
				}
				}
				setState(1779);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1780);
			syntaxBracketRs();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertContext extends ParserRuleContext {
		public KwInsertContext kwInsert() {
			return getRuleContext(KwInsertContext.class,0);
		}
		public KwIntoContext kwInto() {
			return getRuleContext(KwIntoContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public InsertColumnSpecContext insertColumnSpec() {
			return getRuleContext(InsertColumnSpecContext.class,0);
		}
		public InsertValuesSpecContext insertValuesSpec() {
			return getRuleContext(InsertValuesSpecContext.class,0);
		}
		public BeginBatchContext beginBatch() {
			return getRuleContext(BeginBatchContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public UsingTtlTimestampContext usingTtlTimestamp() {
			return getRuleContext(UsingTtlTimestampContext.class,0);
		}
		public InsertContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insert; }
	}

	public final InsertContext insert() throws RecognitionException {
		InsertContext _localctx = new InsertContext(_ctx, getState());
		enterRule(_localctx, 234, RULE_insert);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1784);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_BEGIN:
				{
				setState(1782);
				beginBatch();
				}
				break;
			case K_INSERT:
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1786);
			kwInsert();
			setState(1787);
			kwInto();
			setState(1792);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,132,_ctx) ) {
			case 1:
				{
				setState(1788);
				keyspace();
				setState(1789);
				match(DOT);
				}
				break;
			case 2:
				{
				}
				break;
			}
			setState(1794);
			table();
			setState(1795);
			insertColumnSpec();
			setState(1796);
			insertValuesSpec();
			setState(1799);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_IF:
				{
				setState(1797);
				ifNotExist();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_USING:
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1802);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1801);
				usingTtlTimestamp();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsingTtlTimestampContext extends ParserRuleContext {
		public KwUsingContext kwUsing() {
			return getRuleContext(KwUsingContext.class,0);
		}
		public TtlContext ttl() {
			return getRuleContext(TtlContext.class,0);
		}
		public KwAndContext kwAnd() {
			return getRuleContext(KwAndContext.class,0);
		}
		public TimestampContext timestamp() {
			return getRuleContext(TimestampContext.class,0);
		}
		public UsingTtlTimestampContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingTtlTimestamp; }
	}

	public final UsingTtlTimestampContext usingTtlTimestamp() throws RecognitionException {
		UsingTtlTimestampContext _localctx = new UsingTtlTimestampContext(_ctx, getState());
		enterRule(_localctx, 236, RULE_usingTtlTimestamp);
		try {
			setState(1820);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,135,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1804);
				kwUsing();
				setState(1805);
				ttl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1807);
				kwUsing();
				setState(1808);
				ttl();
				setState(1809);
				kwAnd();
				setState(1810);
				timestamp();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1812);
				kwUsing();
				setState(1813);
				timestamp();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1815);
				kwUsing();
				setState(1816);
				timestamp();
				setState(1817);
				kwAnd();
				setState(1818);
				ttl();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TimestampContext extends ParserRuleContext {
		public KwTimestampContext kwTimestamp() {
			return getRuleContext(KwTimestampContext.class,0);
		}
		public LiteralDecimalContext literalDecimal() {
			return getRuleContext(LiteralDecimalContext.class,0);
		}
		public TimestampContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timestamp; }
	}

	public final TimestampContext timestamp() throws RecognitionException {
		TimestampContext _localctx = new TimestampContext(_ctx, getState());
		enterRule(_localctx, 238, RULE_timestamp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1822);
			kwTimestamp();
			setState(1823);
			literalDecimal();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TtlContext extends ParserRuleContext {
		public KwTtlContext kwTtl() {
			return getRuleContext(KwTtlContext.class,0);
		}
		public LiteralDecimalContext literalDecimal() {
			return getRuleContext(LiteralDecimalContext.class,0);
		}
		public TtlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ttl; }
	}

	public final TtlContext ttl() throws RecognitionException {
		TtlContext _localctx = new TtlContext(_ctx, getState());
		enterRule(_localctx, 240, RULE_ttl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1825);
			kwTtl();
			setState(1826);
			literalDecimal();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsingTimestampSpecContext extends ParserRuleContext {
		public KwUsingContext kwUsing() {
			return getRuleContext(KwUsingContext.class,0);
		}
		public TimestampContext timestamp() {
			return getRuleContext(TimestampContext.class,0);
		}
		public UsingTimestampSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingTimestampSpec; }
	}

	public final UsingTimestampSpecContext usingTimestampSpec() throws RecognitionException {
		UsingTimestampSpecContext _localctx = new UsingTimestampSpecContext(_ctx, getState());
		enterRule(_localctx, 242, RULE_usingTimestampSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1828);
			kwUsing();
			setState(1829);
			timestamp();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfNotExistContext extends ParserRuleContext {
		public KwIfContext kwIf() {
			return getRuleContext(KwIfContext.class,0);
		}
		public KwNotContext kwNot() {
			return getRuleContext(KwNotContext.class,0);
		}
		public KwExistsContext kwExists() {
			return getRuleContext(KwExistsContext.class,0);
		}
		public IfNotExistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifNotExist; }
	}

	public final IfNotExistContext ifNotExist() throws RecognitionException {
		IfNotExistContext _localctx = new IfNotExistContext(_ctx, getState());
		enterRule(_localctx, 244, RULE_ifNotExist);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1831);
			kwIf();
			setState(1832);
			kwNot();
			setState(1833);
			kwExists();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfExistContext extends ParserRuleContext {
		public KwIfContext kwIf() {
			return getRuleContext(KwIfContext.class,0);
		}
		public KwExistsContext kwExists() {
			return getRuleContext(KwExistsContext.class,0);
		}
		public IfExistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifExist; }
	}

	public final IfExistContext ifExist() throws RecognitionException {
		IfExistContext _localctx = new IfExistContext(_ctx, getState());
		enterRule(_localctx, 246, RULE_ifExist);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1835);
			kwIf();
			setState(1836);
			kwExists();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertValuesSpecContext extends ParserRuleContext {
		public KwValuesContext kwValues() {
			return getRuleContext(KwValuesContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public InsertValuesSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertValuesSpec; }
	}

	public final InsertValuesSpecContext insertValuesSpec() throws RecognitionException {
		InsertValuesSpecContext _localctx = new InsertValuesSpecContext(_ctx, getState());
		enterRule(_localctx, 248, RULE_insertValuesSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1838);
			kwValues();
			setState(1839);
			match(LR_BRACKET);
			setState(1840);
			expressionList();
			setState(1841);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertColumnSpecContext extends ParserRuleContext {
		public ColumnListContext columnList() {
			return getRuleContext(ColumnListContext.class,0);
		}
		public InsertColumnSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertColumnSpec; }
	}

	public final InsertColumnSpecContext insertColumnSpec() throws RecognitionException {
		InsertColumnSpecContext _localctx = new InsertColumnSpecContext(_ctx, getState());
		enterRule(_localctx, 250, RULE_insertColumnSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1843);
			match(LR_BRACKET);
			setState(1844);
			columnList();
			setState(1845);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnListContext extends ParserRuleContext {
		public List<ColumnContext> column() {
			return getRuleContexts(ColumnContext.class);
		}
		public ColumnContext column(int i) {
			return getRuleContext(ColumnContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public ColumnListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnList; }
	}

	public final ColumnListContext columnList() throws RecognitionException {
		ColumnListContext _localctx = new ColumnListContext(_ctx, getState());
		enterRule(_localctx, 252, RULE_columnList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1847);
			column();
			setState(1853);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1848);
				syntaxComma();
				setState(1849);
				column();
				}
				}
				setState(1855);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionListContext extends ParserRuleContext {
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public List<AssignmentMapContext> assignmentMap() {
			return getRuleContexts(AssignmentMapContext.class);
		}
		public AssignmentMapContext assignmentMap(int i) {
			return getRuleContext(AssignmentMapContext.class,i);
		}
		public List<AssignmentSetContext> assignmentSet() {
			return getRuleContexts(AssignmentSetContext.class);
		}
		public AssignmentSetContext assignmentSet(int i) {
			return getRuleContext(AssignmentSetContext.class,i);
		}
		public List<AssignmentListContext> assignmentList() {
			return getRuleContexts(AssignmentListContext.class);
		}
		public AssignmentListContext assignmentList(int i) {
			return getRuleContext(AssignmentListContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 254, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1860);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,137,_ctx) ) {
			case 1:
				{
				setState(1856);
				constant();
				}
				break;
			case 2:
				{
				setState(1857);
				assignmentMap();
				}
				break;
			case 3:
				{
				setState(1858);
				assignmentSet();
				}
				break;
			case 4:
				{
				setState(1859);
				assignmentList();
				}
				break;
			}
			setState(1871);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1862);
				syntaxComma();
				setState(1867);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,138,_ctx) ) {
				case 1:
					{
					setState(1863);
					constant();
					}
					break;
				case 2:
					{
					setState(1864);
					assignmentMap();
					}
					break;
				case 3:
					{
					setState(1865);
					assignmentSet();
					}
					break;
				case 4:
					{
					setState(1866);
					assignmentList();
					}
					break;
				}
				}
				}
				setState(1873);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectContext extends ParserRuleContext {
		public KwSelectContext kwSelect() {
			return getRuleContext(KwSelectContext.class,0);
		}
		public SelectElementsContext selectElements() {
			return getRuleContext(SelectElementsContext.class,0);
		}
		public FromSpecContext fromSpec() {
			return getRuleContext(FromSpecContext.class,0);
		}
		public KwDistinctContext kwDistinct() {
			return getRuleContext(KwDistinctContext.class,0);
		}
		public WhereSpecContext whereSpec() {
			return getRuleContext(WhereSpecContext.class,0);
		}
		public OrderSpecContext orderSpec() {
			return getRuleContext(OrderSpecContext.class,0);
		}
		public LimitSpecContext limitSpec() {
			return getRuleContext(LimitSpecContext.class,0);
		}
		public KwAllowFilteringContext kwAllowFiltering() {
			return getRuleContext(KwAllowFilteringContext.class,0);
		}
		public SelectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_select; }
	}

	public final SelectContext select() throws RecognitionException {
		SelectContext _localctx = new SelectContext(_ctx, getState());
		enterRule(_localctx, 256, RULE_select);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1874);
			kwSelect();
			setState(1876);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_DISTINCT) {
				{
				setState(1875);
				kwDistinct();
				}
			}

			setState(1878);
			selectElements();
			setState(1879);
			fromSpec();
			setState(1881);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WHERE) {
				{
				setState(1880);
				whereSpec();
				}
			}

			setState(1884);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ORDER) {
				{
				setState(1883);
				orderSpec();
				}
			}

			setState(1887);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_LIMIT) {
				{
				setState(1886);
				limitSpec();
				}
			}

			setState(1890);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ALLOW) {
				{
				setState(1889);
				kwAllowFiltering();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LimitSpecContext extends ParserRuleContext {
		public KwLimitContext kwLimit() {
			return getRuleContext(KwLimitContext.class,0);
		}
		public LiteralDecimalContext literalDecimal() {
			return getRuleContext(LiteralDecimalContext.class,0);
		}
		public LimitSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_limitSpec; }
	}

	public final LimitSpecContext limitSpec() throws RecognitionException {
		LimitSpecContext _localctx = new LimitSpecContext(_ctx, getState());
		enterRule(_localctx, 258, RULE_limitSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1892);
			kwLimit();
			setState(1893);
			literalDecimal();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FromSpecContext extends ParserRuleContext {
		public KwFromContext kwFrom() {
			return getRuleContext(KwFromContext.class,0);
		}
		public FromSpecElementContext fromSpecElement() {
			return getRuleContext(FromSpecElementContext.class,0);
		}
		public FromSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fromSpec; }
	}

	public final FromSpecContext fromSpec() throws RecognitionException {
		FromSpecContext _localctx = new FromSpecContext(_ctx, getState());
		enterRule(_localctx, 260, RULE_fromSpec);
		try {
			setState(1899);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_FROM:
				enterOuterAlt(_localctx, 1);
				{
				setState(1895);
				kwFrom();
				setState(1896);
				fromSpecElement();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_ALLOW:
			case K_LIMIT:
			case K_ORDER:
			case K_USING:
			case K_WHERE:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("select.fromSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FromSpecElementContext extends ParserRuleContext {
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public SpecialDotContext specialDot() {
			return getRuleContext(SpecialDotContext.class,0);
		}
		public FromSpecElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fromSpecElement; }
	}

	public final FromSpecElementContext fromSpecElement() throws RecognitionException {
		FromSpecElementContext _localctx = new FromSpecElementContext(_ctx, getState());
		enterRule(_localctx, 262, RULE_fromSpecElement);
		try {
			setState(1907);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,146,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1901);
				table();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1902);
				keyspace();
				setState(1903);
				specialDot();
				setState(1904);
				table();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("select.fromSpecElement"); 
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrderSpecContext extends ParserRuleContext {
		public KwOrderByContext kwOrderBy() {
			return getRuleContext(KwOrderByContext.class,0);
		}
		public OrderSpecElementContext orderSpecElement() {
			return getRuleContext(OrderSpecElementContext.class,0);
		}
		public OrderSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderSpec; }
	}

	public final OrderSpecContext orderSpec() throws RecognitionException {
		OrderSpecContext _localctx = new OrderSpecContext(_ctx, getState());
		enterRule(_localctx, 264, RULE_orderSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1909);
			kwOrderBy();
			setState(1910);
			orderSpecElement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrderSpecElementContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public KwAscContext kwAsc() {
			return getRuleContext(KwAscContext.class,0);
		}
		public KwDescContext kwDesc() {
			return getRuleContext(KwDescContext.class,0);
		}
		public OrderSpecElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderSpecElement; }
	}

	public final OrderSpecElementContext orderSpecElement() throws RecognitionException {
		OrderSpecElementContext _localctx = new OrderSpecElementContext(_ctx, getState());
		enterRule(_localctx, 266, RULE_orderSpecElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1912);
			column();
			setState(1915);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ASC:
				{
				setState(1913);
				kwAsc();
				}
				break;
			case K_DESC:
				{
				setState(1914);
				kwDesc();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_ALLOW:
			case K_LIMIT:
				break;
			default:
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhereSpecContext extends ParserRuleContext {
		public KwWhereContext kwWhere() {
			return getRuleContext(KwWhereContext.class,0);
		}
		public RelationElementsContext relationElements() {
			return getRuleContext(RelationElementsContext.class,0);
		}
		public WhereSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whereSpec; }
	}

	public final WhereSpecContext whereSpec() throws RecognitionException {
		WhereSpecContext _localctx = new WhereSpecContext(_ctx, getState());
		enterRule(_localctx, 268, RULE_whereSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1917);
			kwWhere();
			setState(1918);
			relationElements();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectElementsContext extends ParserRuleContext {
		public SpecialStarContext specialStar() {
			return getRuleContext(SpecialStarContext.class,0);
		}
		public List<SelectElementContext> selectElement() {
			return getRuleContexts(SelectElementContext.class);
		}
		public SelectElementContext selectElement(int i) {
			return getRuleContext(SelectElementContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public SelectElementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectElements; }
	}

	public final SelectElementsContext selectElements() throws RecognitionException {
		SelectElementsContext _localctx = new SelectElementsContext(_ctx, getState());
		enterRule(_localctx, 270, RULE_selectElements);
		int _la;
		try {
			setState(1931);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(1920);
				specialStar();
				}
				break;
			case DQUOTE:
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 2);
				{
				setState(1921);
				selectElement();
				setState(1927);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1922);
					syntaxComma();
					setState(1923);
					selectElement();
					}
					}
					setState(1929);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_ALLOW:
			case K_FROM:
			case K_LIMIT:
			case K_ORDER:
			case K_WHERE:
				enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("select.selectElements"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectElementContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public KwAsContext kwAs() {
			return getRuleContext(KwAsContext.class,0);
		}
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public SelectElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectElement; }
	}

	public final SelectElementContext selectElement() throws RecognitionException {
		SelectElementContext _localctx = new SelectElementContext(_ctx, getState());
		enterRule(_localctx, 272, RULE_selectElement);
		int _la;
		try {
			setState(1946);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,152,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1933);
				column();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1934);
				column();
				setState(1938);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AS) {
					{
					setState(1935);
					kwAs();
					setState(1936);
					match(OBJECT_NAME);
					}
				}

				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1940);
				functionCall();
				setState(1944);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AS) {
					{
					setState(1941);
					kwAs();
					setState(1942);
					match(OBJECT_NAME);
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelationElementsContext extends ParserRuleContext {
		public List<RelationElementContext> relationElement() {
			return getRuleContexts(RelationElementContext.class);
		}
		public RelationElementContext relationElement(int i) {
			return getRuleContext(RelationElementContext.class,i);
		}
		public List<KwAndContext> kwAnd() {
			return getRuleContexts(KwAndContext.class);
		}
		public KwAndContext kwAnd(int i) {
			return getRuleContext(KwAndContext.class,i);
		}
		public RelationElementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationElements; }
	}

	public final RelationElementsContext relationElements() throws RecognitionException {
		RelationElementsContext _localctx = new RelationElementsContext(_ctx, getState());
		enterRule(_localctx, 274, RULE_relationElements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1948);
			relationElement();
			}
			setState(1954);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(1949);
				kwAnd();
				setState(1950);
				relationElement();
				}
				}
				setState(1956);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelationElementContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public SyntaxOperatorEqContext syntaxOperatorEq() {
			return getRuleContext(SyntaxOperatorEqContext.class,0);
		}
		public SyntaxOperatorLtContext syntaxOperatorLt() {
			return getRuleContext(SyntaxOperatorLtContext.class,0);
		}
		public SyntaxOperatorGtContext syntaxOperatorGt() {
			return getRuleContext(SyntaxOperatorGtContext.class,0);
		}
		public SyntaxOperatorLteContext syntaxOperatorLte() {
			return getRuleContext(SyntaxOperatorLteContext.class,0);
		}
		public SyntaxOperatorGteContext syntaxOperatorGte() {
			return getRuleContext(SyntaxOperatorGteContext.class,0);
		}
		public List<FunctionCallContext> functionCall() {
			return getRuleContexts(FunctionCallContext.class);
		}
		public FunctionCallContext functionCall(int i) {
			return getRuleContext(FunctionCallContext.class,i);
		}
		public KwInContext kwIn() {
			return getRuleContext(KwInContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public FunctionArgsContext functionArgs() {
			return getRuleContext(FunctionArgsContext.class,0);
		}
		public RelalationContainsKeyContext relalationContainsKey() {
			return getRuleContext(RelalationContainsKeyContext.class,0);
		}
		public RelalationContainsContext relalationContains() {
			return getRuleContext(RelalationContainsContext.class,0);
		}
		public RelationElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationElement; }
	}

	public final RelationElementContext relationElement() throws RecognitionException {
		RelationElementContext _localctx = new RelationElementContext(_ctx, getState());
		enterRule(_localctx, 276, RULE_relationElement);
		int _la;
		try {
			setState(1997);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,158,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1957);
				column();
				setState(1963);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_EQ:
					{
					setState(1958);
					syntaxOperatorEq();
					}
					break;
				case OPERATOR_LT:
					{
					setState(1959);
					syntaxOperatorLt();
					}
					break;
				case OPERATOR_GT:
					{
					setState(1960);
					syntaxOperatorGt();
					}
					break;
				case OPERATOR_LTE:
					{
					setState(1961);
					syntaxOperatorLte();
					}
					break;
				case OPERATOR_GTE:
					{
					setState(1962);
					syntaxOperatorGte();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1965);
				constant();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1967);
				functionCall();
				setState(1973);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_EQ:
					{
					setState(1968);
					syntaxOperatorEq();
					}
					break;
				case OPERATOR_LT:
					{
					setState(1969);
					syntaxOperatorLt();
					}
					break;
				case OPERATOR_GT:
					{
					setState(1970);
					syntaxOperatorGt();
					}
					break;
				case OPERATOR_LTE:
					{
					setState(1971);
					syntaxOperatorLte();
					}
					break;
				case OPERATOR_GTE:
					{
					setState(1972);
					syntaxOperatorGte();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1975);
				constant();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1977);
				functionCall();
				setState(1983);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_EQ:
					{
					setState(1978);
					syntaxOperatorEq();
					}
					break;
				case OPERATOR_LT:
					{
					setState(1979);
					syntaxOperatorLt();
					}
					break;
				case OPERATOR_GT:
					{
					setState(1980);
					syntaxOperatorGt();
					}
					break;
				case OPERATOR_LTE:
					{
					setState(1981);
					syntaxOperatorLte();
					}
					break;
				case OPERATOR_GTE:
					{
					setState(1982);
					syntaxOperatorGte();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1985);
				functionCall();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1987);
				column();
				setState(1988);
				kwIn();
				setState(1989);
				syntaxBracketLr();
				setState(1991);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_FALSE || _la==K_NULL || ((((_la - 124)) & ~0x3f) == 0 && ((1L << (_la - 124)) & ((1L << (K_TRUE - 124)) | (1L << (STRING_LITERAL - 124)) | (1L << (DECIMAL_LITERAL - 124)) | (1L << (HEXADECIMAL_LITERAL - 124)) | (1L << (OBJECT_NAME - 124)) | (1L << (UUID - 124)))) != 0)) {
					{
					setState(1990);
					functionArgs();
					}
				}

				setState(1993);
				syntaxBracketRr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1995);
				relalationContainsKey();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1996);
				relalationContains();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelalationContainsContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public KwContainsContext kwContains() {
			return getRuleContext(KwContainsContext.class,0);
		}
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public RelalationContainsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relalationContains; }
	}

	public final RelalationContainsContext relalationContains() throws RecognitionException {
		RelalationContainsContext _localctx = new RelalationContainsContext(_ctx, getState());
		enterRule(_localctx, 278, RULE_relalationContains);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1999);
			column();
			setState(2000);
			kwContains();
			setState(2001);
			constant();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelalationContainsKeyContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public KwContainsKeyContext kwContainsKey() {
			return getRuleContext(KwContainsKeyContext.class,0);
		}
		public RelalationContainsKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relalationContainsKey; }
	}

	public final RelalationContainsKeyContext relalationContainsKey() throws RecognitionException {
		RelalationContainsKeyContext _localctx = new RelalationContainsKeyContext(_ctx, getState());
		enterRule(_localctx, 280, RULE_relalationContainsKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2003);
			column();
			{
			setState(2004);
			kwContainsKey();
			}
			setState(2005);
			constant();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public TerminalNode STAR() { return getToken(CqlParser.STAR, 0); }
		public FunctionArgsContext functionArgs() {
			return getRuleContext(FunctionArgsContext.class,0);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 282, RULE_functionCall);
		int _la;
		try {
			setState(2017);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,160,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2007);
				match(OBJECT_NAME);
				setState(2008);
				match(LR_BRACKET);
				setState(2009);
				match(STAR);
				setState(2010);
				match(RR_BRACKET);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2011);
				match(OBJECT_NAME);
				setState(2012);
				match(LR_BRACKET);
				setState(2014);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_FALSE || _la==K_NULL || ((((_la - 124)) & ~0x3f) == 0 && ((1L << (_la - 124)) & ((1L << (K_TRUE - 124)) | (1L << (STRING_LITERAL - 124)) | (1L << (DECIMAL_LITERAL - 124)) | (1L << (HEXADECIMAL_LITERAL - 124)) | (1L << (OBJECT_NAME - 124)) | (1L << (UUID - 124)))) != 0)) {
					{
					setState(2013);
					functionArgs();
					}
				}

				setState(2016);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionArgsContext extends ParserRuleContext {
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public List<TerminalNode> OBJECT_NAME() { return getTokens(CqlParser.OBJECT_NAME); }
		public TerminalNode OBJECT_NAME(int i) {
			return getToken(CqlParser.OBJECT_NAME, i);
		}
		public List<FunctionCallContext> functionCall() {
			return getRuleContexts(FunctionCallContext.class);
		}
		public FunctionCallContext functionCall(int i) {
			return getRuleContext(FunctionCallContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public FunctionArgsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionArgs; }
	}

	public final FunctionArgsContext functionArgs() throws RecognitionException {
		FunctionArgsContext _localctx = new FunctionArgsContext(_ctx, getState());
		enterRule(_localctx, 284, RULE_functionArgs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2022);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,161,_ctx) ) {
			case 1:
				{
				setState(2019);
				constant();
				}
				break;
			case 2:
				{
				setState(2020);
				match(OBJECT_NAME);
				}
				break;
			case 3:
				{
				setState(2021);
				functionCall();
				}
				break;
			}
			setState(2032);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2024);
				syntaxComma();
				setState(2028);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,162,_ctx) ) {
				case 1:
					{
					setState(2025);
					constant();
					}
					break;
				case 2:
					{
					setState(2026);
					match(OBJECT_NAME);
					}
					break;
				case 3:
					{
					setState(2027);
					functionCall();
					}
					break;
				}
				}
				}
				setState(2034);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantContext extends ParserRuleContext {
		public LiteralUuidContext literalUuid() {
			return getRuleContext(LiteralUuidContext.class,0);
		}
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public LiteralDecimalContext literalDecimal() {
			return getRuleContext(LiteralDecimalContext.class,0);
		}
		public LiteralHexadecimalContext literalHexadecimal() {
			return getRuleContext(LiteralHexadecimalContext.class,0);
		}
		public LiteralBooleanContext literalBoolean() {
			return getRuleContext(LiteralBooleanContext.class,0);
		}
		public KwNullContext kwNull() {
			return getRuleContext(KwNullContext.class,0);
		}
		public ConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant; }
	}

	public final ConstantContext constant() throws RecognitionException {
		ConstantContext _localctx = new ConstantContext(_ctx, getState());
		enterRule(_localctx, 286, RULE_constant);
		try {
			setState(2041);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UUID:
				enterOuterAlt(_localctx, 1);
				{
				setState(2035);
				literalUuid();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(2036);
				literalString();
				}
				break;
			case DECIMAL_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(2037);
				literalDecimal();
				}
				break;
			case HEXADECIMAL_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(2038);
				literalHexadecimal();
				}
				break;
			case K_FALSE:
			case K_TRUE:
				enterOuterAlt(_localctx, 5);
				{
				setState(2039);
				literalBoolean();
				}
				break;
			case K_NULL:
				enterOuterAlt(_localctx, 6);
				{
				setState(2040);
				kwNull();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralUuidContext extends ParserRuleContext {
		public TerminalNode UUID() { return getToken(CqlParser.UUID, 0); }
		public LiteralUuidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literalUuid; }
	}

	public final LiteralUuidContext literalUuid() throws RecognitionException {
		LiteralUuidContext _localctx = new LiteralUuidContext(_ctx, getState());
		enterRule(_localctx, 288, RULE_literalUuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2043);
			match(UUID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralDecimalContext extends ParserRuleContext {
		public TerminalNode DECIMAL_LITERAL() { return getToken(CqlParser.DECIMAL_LITERAL, 0); }
		public LiteralDecimalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literalDecimal; }
	}

	public final LiteralDecimalContext literalDecimal() throws RecognitionException {
		LiteralDecimalContext _localctx = new LiteralDecimalContext(_ctx, getState());
		enterRule(_localctx, 290, RULE_literalDecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2045);
			match(DECIMAL_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralFloatContext extends ParserRuleContext {
		public TerminalNode DECIMAL_LITERAL() { return getToken(CqlParser.DECIMAL_LITERAL, 0); }
		public TerminalNode FLOAT_LITERAL() { return getToken(CqlParser.FLOAT_LITERAL, 0); }
		public LiteralFloatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literalFloat; }
	}

	public final LiteralFloatContext literalFloat() throws RecognitionException {
		LiteralFloatContext _localctx = new LiteralFloatContext(_ctx, getState());
		enterRule(_localctx, 292, RULE_literalFloat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2047);
			_la = _input.LA(1);
			if ( !(_la==DECIMAL_LITERAL || _la==FLOAT_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralStringContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(CqlParser.STRING_LITERAL, 0); }
		public LiteralStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literalString; }
	}

	public final LiteralStringContext literalString() throws RecognitionException {
		LiteralStringContext _localctx = new LiteralStringContext(_ctx, getState());
		enterRule(_localctx, 294, RULE_literalString);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2049);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralBooleanContext extends ParserRuleContext {
		public TerminalNode K_TRUE() { return getToken(CqlParser.K_TRUE, 0); }
		public TerminalNode K_FALSE() { return getToken(CqlParser.K_FALSE, 0); }
		public LiteralBooleanContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literalBoolean; }
	}

	public final LiteralBooleanContext literalBoolean() throws RecognitionException {
		LiteralBooleanContext _localctx = new LiteralBooleanContext(_ctx, getState());
		enterRule(_localctx, 296, RULE_literalBoolean);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2051);
			_la = _input.LA(1);
			if ( !(_la==K_FALSE || _la==K_TRUE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralHexadecimalContext extends ParserRuleContext {
		public TerminalNode HEXADECIMAL_LITERAL() { return getToken(CqlParser.HEXADECIMAL_LITERAL, 0); }
		public LiteralHexadecimalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literalHexadecimal; }
	}

	public final LiteralHexadecimalContext literalHexadecimal() throws RecognitionException {
		LiteralHexadecimalContext _localctx = new LiteralHexadecimalContext(_ctx, getState());
		enterRule(_localctx, 298, RULE_literalHexadecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2053);
			match(HEXADECIMAL_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeyspaceContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public List<TerminalNode> DQUOTE() { return getTokens(CqlParser.DQUOTE); }
		public TerminalNode DQUOTE(int i) {
			return getToken(CqlParser.DQUOTE, i);
		}
		public KeyspaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyspace; }
	}

	public final KeyspaceContext keyspace() throws RecognitionException {
		KeyspaceContext _localctx = new KeyspaceContext(_ctx, getState());
		enterRule(_localctx, 300, RULE_keyspace);
		try {
			setState(2059);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(2055);
				match(OBJECT_NAME);
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2056);
				match(DQUOTE);
				setState(2057);
				match(OBJECT_NAME);
				setState(2058);
				match(DQUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public List<TerminalNode> DQUOTE() { return getTokens(CqlParser.DQUOTE); }
		public TerminalNode DQUOTE(int i) {
			return getToken(CqlParser.DQUOTE, i);
		}
		public TableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table; }
	}

	public final TableContext table() throws RecognitionException {
		TableContext _localctx = new TableContext(_ctx, getState());
		enterRule(_localctx, 302, RULE_table);
		try {
			setState(2065);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(2061);
				match(OBJECT_NAME);
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2062);
				match(DQUOTE);
				setState(2063);
				match(OBJECT_NAME);
				setState(2064);
				match(DQUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public List<TerminalNode> DQUOTE() { return getTokens(CqlParser.DQUOTE); }
		public TerminalNode DQUOTE(int i) {
			return getToken(CqlParser.DQUOTE, i);
		}
		public ColumnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_column; }
	}

	public final ColumnContext column() throws RecognitionException {
		ColumnContext _localctx = new ColumnContext(_ctx, getState());
		enterRule(_localctx, 304, RULE_column);
		try {
			setState(2071);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(2067);
				match(OBJECT_NAME);
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2068);
				match(DQUOTE);
				setState(2069);
				match(OBJECT_NAME);
				setState(2070);
				match(DQUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeContext extends ParserRuleContext {
		public DataTypeAsciiContext dataTypeAscii() {
			return getRuleContext(DataTypeAsciiContext.class,0);
		}
		public DataTypeBigintContext dataTypeBigint() {
			return getRuleContext(DataTypeBigintContext.class,0);
		}
		public DataTypeBlobContext dataTypeBlob() {
			return getRuleContext(DataTypeBlobContext.class,0);
		}
		public DataTypeBooleanContext dataTypeBoolean() {
			return getRuleContext(DataTypeBooleanContext.class,0);
		}
		public DataTypeCounterContext dataTypeCounter() {
			return getRuleContext(DataTypeCounterContext.class,0);
		}
		public DataTypeDateContext dataTypeDate() {
			return getRuleContext(DataTypeDateContext.class,0);
		}
		public DataTypeDecimalContext dataTypeDecimal() {
			return getRuleContext(DataTypeDecimalContext.class,0);
		}
		public DataTypeDoubleContext dataTypeDouble() {
			return getRuleContext(DataTypeDoubleContext.class,0);
		}
		public DataTypeFloatContext dataTypeFloat() {
			return getRuleContext(DataTypeFloatContext.class,0);
		}
		public DataTypeFrozenContext dataTypeFrozen() {
			return getRuleContext(DataTypeFrozenContext.class,0);
		}
		public DataTypeInetContext dataTypeInet() {
			return getRuleContext(DataTypeInetContext.class,0);
		}
		public DataTypeIntContext dataTypeInt() {
			return getRuleContext(DataTypeIntContext.class,0);
		}
		public DataTypeListContext dataTypeList() {
			return getRuleContext(DataTypeListContext.class,0);
		}
		public DataTypeMapContext dataTypeMap() {
			return getRuleContext(DataTypeMapContext.class,0);
		}
		public DataTypeSetContext dataTypeSet() {
			return getRuleContext(DataTypeSetContext.class,0);
		}
		public DataTypeSmallIntContext dataTypeSmallInt() {
			return getRuleContext(DataTypeSmallIntContext.class,0);
		}
		public DataTypeTextContext dataTypeText() {
			return getRuleContext(DataTypeTextContext.class,0);
		}
		public DataTypeTimeContext dataTypeTime() {
			return getRuleContext(DataTypeTimeContext.class,0);
		}
		public DataTypeTimeUuidContext dataTypeTimeUuid() {
			return getRuleContext(DataTypeTimeUuidContext.class,0);
		}
		public DataTypeTimestampContext dataTypeTimestamp() {
			return getRuleContext(DataTypeTimestampContext.class,0);
		}
		public DataTypeTinyIntContext dataTypeTinyInt() {
			return getRuleContext(DataTypeTinyIntContext.class,0);
		}
		public DataTypeTupleContext dataTypeTuple() {
			return getRuleContext(DataTypeTupleContext.class,0);
		}
		public DataTypeUserDefinedContext dataTypeUserDefined() {
			return getRuleContext(DataTypeUserDefinedContext.class,0);
		}
		public DataTypeUuidContext dataTypeUuid() {
			return getRuleContext(DataTypeUuidContext.class,0);
		}
		public DataTypeVarCharContext dataTypeVarChar() {
			return getRuleContext(DataTypeVarCharContext.class,0);
		}
		public DataTypeVarIntContext dataTypeVarInt() {
			return getRuleContext(DataTypeVarIntContext.class,0);
		}
		public DataTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataType; }
	}

	public final DataTypeContext dataType() throws RecognitionException {
		DataTypeContext _localctx = new DataTypeContext(_ctx, getState());
		enterRule(_localctx, 306, RULE_dataType);
		try {
			setState(2099);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ASCII:
				enterOuterAlt(_localctx, 1);
				{
				setState(2073);
				dataTypeAscii();
				}
				break;
			case K_BIGINT:
				enterOuterAlt(_localctx, 2);
				{
				setState(2074);
				dataTypeBigint();
				}
				break;
			case K_BLOB:
				enterOuterAlt(_localctx, 3);
				{
				setState(2075);
				dataTypeBlob();
				}
				break;
			case K_BOOLEAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(2076);
				dataTypeBoolean();
				}
				break;
			case K_COUNTER:
				enterOuterAlt(_localctx, 5);
				{
				setState(2077);
				dataTypeCounter();
				}
				break;
			case K_DATE:
				enterOuterAlt(_localctx, 6);
				{
				setState(2078);
				dataTypeDate();
				}
				break;
			case K_DECIMAL:
				enterOuterAlt(_localctx, 7);
				{
				setState(2079);
				dataTypeDecimal();
				}
				break;
			case K_DOUBLE:
				enterOuterAlt(_localctx, 8);
				{
				setState(2080);
				dataTypeDouble();
				}
				break;
			case K_FLOAT:
				enterOuterAlt(_localctx, 9);
				{
				setState(2081);
				dataTypeFloat();
				}
				break;
			case K_FROZEN:
				enterOuterAlt(_localctx, 10);
				{
				setState(2082);
				dataTypeFrozen();
				}
				break;
			case K_INET:
				enterOuterAlt(_localctx, 11);
				{
				setState(2083);
				dataTypeInet();
				}
				break;
			case K_INT:
				enterOuterAlt(_localctx, 12);
				{
				setState(2084);
				dataTypeInt();
				}
				break;
			case K_LIST:
				enterOuterAlt(_localctx, 13);
				{
				setState(2085);
				dataTypeList();
				}
				break;
			case K_MAP:
				enterOuterAlt(_localctx, 14);
				{
				setState(2086);
				dataTypeMap();
				}
				break;
			case K_SET:
				enterOuterAlt(_localctx, 15);
				{
				setState(2087);
				dataTypeSet();
				}
				break;
			case K_SMALLINT:
				enterOuterAlt(_localctx, 16);
				{
				setState(2088);
				dataTypeSmallInt();
				}
				break;
			case K_TEXT:
				enterOuterAlt(_localctx, 17);
				{
				setState(2089);
				dataTypeText();
				}
				break;
			case K_TIME:
				enterOuterAlt(_localctx, 18);
				{
				setState(2090);
				dataTypeTime();
				}
				break;
			case K_TIMEUUID:
				enterOuterAlt(_localctx, 19);
				{
				setState(2091);
				dataTypeTimeUuid();
				}
				break;
			case K_TIMESTAMP:
				enterOuterAlt(_localctx, 20);
				{
				setState(2092);
				dataTypeTimestamp();
				}
				break;
			case K_TINYINT:
				enterOuterAlt(_localctx, 21);
				{
				setState(2093);
				dataTypeTinyInt();
				}
				break;
			case K_TUPLE:
				enterOuterAlt(_localctx, 22);
				{
				setState(2094);
				dataTypeTuple();
				}
				break;
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 23);
				{
				setState(2095);
				dataTypeUserDefined();
				}
				break;
			case K_UUID:
				enterOuterAlt(_localctx, 24);
				{
				setState(2096);
				dataTypeUuid();
				}
				break;
			case K_VARCHAR:
				enterOuterAlt(_localctx, 25);
				{
				setState(2097);
				dataTypeVarChar();
				}
				break;
			case K_VARINT:
				enterOuterAlt(_localctx, 26);
				{
				setState(2098);
				dataTypeVarInt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrderDirectionContext extends ParserRuleContext {
		public KwAscContext kwAsc() {
			return getRuleContext(KwAscContext.class,0);
		}
		public KwDescContext kwDesc() {
			return getRuleContext(KwDescContext.class,0);
		}
		public OrderDirectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderDirection; }
	}

	public final OrderDirectionContext orderDirection() throws RecognitionException {
		OrderDirectionContext _localctx = new OrderDirectionContext(_ctx, getState());
		enterRule(_localctx, 308, RULE_orderDirection);
		try {
			setState(2103);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ASC:
				enterOuterAlt(_localctx, 1);
				{
				setState(2101);
				kwAsc();
				}
				break;
			case K_DESC:
				enterOuterAlt(_localctx, 2);
				{
				setState(2102);
				kwDesc();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public RoleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_role; }
	}

	public final RoleContext role() throws RecognitionException {
		RoleContext _localctx = new RoleContext(_ctx, getState());
		enterRule(_localctx, 310, RULE_role);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2105);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TriggerContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public TriggerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trigger; }
	}

	public final TriggerContext trigger() throws RecognitionException {
		TriggerContext _localctx = new TriggerContext(_ctx, getState());
		enterRule(_localctx, 312, RULE_trigger);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2107);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TriggerClassContext extends ParserRuleContext {
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public TriggerClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_triggerClass; }
	}

	public final TriggerClassContext triggerClass() throws RecognitionException {
		TriggerClassContext _localctx = new TriggerClassContext(_ctx, getState());
		enterRule(_localctx, 314, RULE_triggerClass);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2109);
			literalString();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MaterializedViewContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public MaterializedViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_materializedView; }
	}

	public final MaterializedViewContext materializedView() throws RecognitionException {
		MaterializedViewContext _localctx = new MaterializedViewContext(_ctx, getState());
		enterRule(_localctx, 316, RULE_materializedView);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2111);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 318, RULE_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2113);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AggregateContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public AggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregate; }
	}

	public final AggregateContext aggregate() throws RecognitionException {
		AggregateContext _localctx = new AggregateContext(_ctx, getState());
		enterRule(_localctx, 320, RULE_aggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2115);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 322, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2117);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LanguageContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public LanguageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_language; }
	}

	public final LanguageContext language() throws RecognitionException {
		LanguageContext _localctx = new LanguageContext(_ctx, getState());
		enterRule(_localctx, 324, RULE_language);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2119);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UserContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public UserContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_user; }
	}

	public final UserContext user() throws RecognitionException {
		UserContext _localctx = new UserContext(_ctx, getState());
		enterRule(_localctx, 326, RULE_user);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2121);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PasswordContext extends ParserRuleContext {
		public LiteralStringContext literalString() {
			return getRuleContext(LiteralStringContext.class,0);
		}
		public PasswordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_password; }
	}

	public final PasswordContext password() throws RecognitionException {
		PasswordContext _localctx = new PasswordContext(_ctx, getState());
		enterRule(_localctx, 328, RULE_password);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2123);
			literalString();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HashKeyContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public HashKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hashKey; }
	}

	public final HashKeyContext hashKey() throws RecognitionException {
		HashKeyContext _localctx = new HashKeyContext(_ctx, getState());
		enterRule(_localctx, 330, RULE_hashKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2125);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamContext extends ParserRuleContext {
		public ParamNameContext paramName() {
			return getRuleContext(ParamNameContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 332, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2127);
			paramName();
			setState(2128);
			dataType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamNameContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public ParamNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramName; }
	}

	public final ParamNameContext paramName() throws RecognitionException {
		ParamNameContext _localctx = new ParamNameContext(_ctx, getState());
		enterRule(_localctx, 334, RULE_paramName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2130);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAddContext extends ParserRuleContext {
		public TerminalNode K_ADD() { return getToken(CqlParser.K_ADD, 0); }
		public KwAddContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAdd; }
	}

	public final KwAddContext kwAdd() throws RecognitionException {
		KwAddContext _localctx = new KwAddContext(_ctx, getState());
		enterRule(_localctx, 336, RULE_kwAdd);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2132);
			match(K_ADD);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAggregateContext extends ParserRuleContext {
		public TerminalNode K_AGGREGATE() { return getToken(CqlParser.K_AGGREGATE, 0); }
		public KwAggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAggregate; }
	}

	public final KwAggregateContext kwAggregate() throws RecognitionException {
		KwAggregateContext _localctx = new KwAggregateContext(_ctx, getState());
		enterRule(_localctx, 338, RULE_kwAggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2134);
			match(K_AGGREGATE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAllContext extends ParserRuleContext {
		public TerminalNode K_ALL() { return getToken(CqlParser.K_ALL, 0); }
		public KwAllContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAll; }
	}

	public final KwAllContext kwAll() throws RecognitionException {
		KwAllContext _localctx = new KwAllContext(_ctx, getState());
		enterRule(_localctx, 340, RULE_kwAll);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2136);
			match(K_ALL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAllPermissionsContext extends ParserRuleContext {
		public TerminalNode K_ALL() { return getToken(CqlParser.K_ALL, 0); }
		public TerminalNode K_PERMISSIONS() { return getToken(CqlParser.K_PERMISSIONS, 0); }
		public KwAllPermissionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAllPermissions; }
	}

	public final KwAllPermissionsContext kwAllPermissions() throws RecognitionException {
		KwAllPermissionsContext _localctx = new KwAllPermissionsContext(_ctx, getState());
		enterRule(_localctx, 342, RULE_kwAllPermissions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2138);
			match(K_ALL);
			setState(2139);
			match(K_PERMISSIONS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAllowContext extends ParserRuleContext {
		public TerminalNode K_ALLOW() { return getToken(CqlParser.K_ALLOW, 0); }
		public KwAllowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAllow; }
	}

	public final KwAllowContext kwAllow() throws RecognitionException {
		KwAllowContext _localctx = new KwAllowContext(_ctx, getState());
		enterRule(_localctx, 344, RULE_kwAllow);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2141);
			match(K_ALLOW);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAllowFilteringContext extends ParserRuleContext {
		public TerminalNode K_ALLOW() { return getToken(CqlParser.K_ALLOW, 0); }
		public TerminalNode K_FILTERING() { return getToken(CqlParser.K_FILTERING, 0); }
		public KwAllowFilteringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAllowFiltering; }
	}

	public final KwAllowFilteringContext kwAllowFiltering() throws RecognitionException {
		KwAllowFilteringContext _localctx = new KwAllowFilteringContext(_ctx, getState());
		enterRule(_localctx, 346, RULE_kwAllowFiltering);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2143);
			match(K_ALLOW);
			setState(2144);
			match(K_FILTERING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAlterContext extends ParserRuleContext {
		public TerminalNode K_ALTER() { return getToken(CqlParser.K_ALTER, 0); }
		public KwAlterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAlter; }
	}

	public final KwAlterContext kwAlter() throws RecognitionException {
		KwAlterContext _localctx = new KwAlterContext(_ctx, getState());
		enterRule(_localctx, 348, RULE_kwAlter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2146);
			match(K_ALTER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAndContext extends ParserRuleContext {
		public TerminalNode K_AND() { return getToken(CqlParser.K_AND, 0); }
		public KwAndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAnd; }
	}

	public final KwAndContext kwAnd() throws RecognitionException {
		KwAndContext _localctx = new KwAndContext(_ctx, getState());
		enterRule(_localctx, 350, RULE_kwAnd);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2148);
			match(K_AND);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwApplyContext extends ParserRuleContext {
		public TerminalNode K_APPLY() { return getToken(CqlParser.K_APPLY, 0); }
		public KwApplyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwApply; }
	}

	public final KwApplyContext kwApply() throws RecognitionException {
		KwApplyContext _localctx = new KwApplyContext(_ctx, getState());
		enterRule(_localctx, 352, RULE_kwApply);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2150);
			match(K_APPLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAsContext extends ParserRuleContext {
		public TerminalNode K_AS() { return getToken(CqlParser.K_AS, 0); }
		public KwAsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAs; }
	}

	public final KwAsContext kwAs() throws RecognitionException {
		KwAsContext _localctx = new KwAsContext(_ctx, getState());
		enterRule(_localctx, 354, RULE_kwAs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2152);
			match(K_AS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAscContext extends ParserRuleContext {
		public TerminalNode K_ASC() { return getToken(CqlParser.K_ASC, 0); }
		public KwAscContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAsc; }
	}

	public final KwAscContext kwAsc() throws RecognitionException {
		KwAscContext _localctx = new KwAscContext(_ctx, getState());
		enterRule(_localctx, 356, RULE_kwAsc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2154);
			match(K_ASC);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAuthorizeContext extends ParserRuleContext {
		public TerminalNode K_AUTHORIZE() { return getToken(CqlParser.K_AUTHORIZE, 0); }
		public KwAuthorizeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAuthorize; }
	}

	public final KwAuthorizeContext kwAuthorize() throws RecognitionException {
		KwAuthorizeContext _localctx = new KwAuthorizeContext(_ctx, getState());
		enterRule(_localctx, 358, RULE_kwAuthorize);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2156);
			match(K_AUTHORIZE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwBatchContext extends ParserRuleContext {
		public TerminalNode K_BATCH() { return getToken(CqlParser.K_BATCH, 0); }
		public KwBatchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwBatch; }
	}

	public final KwBatchContext kwBatch() throws RecognitionException {
		KwBatchContext _localctx = new KwBatchContext(_ctx, getState());
		enterRule(_localctx, 360, RULE_kwBatch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2158);
			match(K_BATCH);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwBeginContext extends ParserRuleContext {
		public TerminalNode K_BEGIN() { return getToken(CqlParser.K_BEGIN, 0); }
		public KwBeginContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwBegin; }
	}

	public final KwBeginContext kwBegin() throws RecognitionException {
		KwBeginContext _localctx = new KwBeginContext(_ctx, getState());
		enterRule(_localctx, 362, RULE_kwBegin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2160);
			match(K_BEGIN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwByContext extends ParserRuleContext {
		public TerminalNode K_BY() { return getToken(CqlParser.K_BY, 0); }
		public KwByContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwBy; }
	}

	public final KwByContext kwBy() throws RecognitionException {
		KwByContext _localctx = new KwByContext(_ctx, getState());
		enterRule(_localctx, 364, RULE_kwBy);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2162);
			match(K_BY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwCalledContext extends ParserRuleContext {
		public TerminalNode K_CALLED() { return getToken(CqlParser.K_CALLED, 0); }
		public KwCalledContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwCalled; }
	}

	public final KwCalledContext kwCalled() throws RecognitionException {
		KwCalledContext _localctx = new KwCalledContext(_ctx, getState());
		enterRule(_localctx, 366, RULE_kwCalled);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2164);
			match(K_CALLED);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwClusteringContext extends ParserRuleContext {
		public TerminalNode K_CLUSTERING() { return getToken(CqlParser.K_CLUSTERING, 0); }
		public KwClusteringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwClustering; }
	}

	public final KwClusteringContext kwClustering() throws RecognitionException {
		KwClusteringContext _localctx = new KwClusteringContext(_ctx, getState());
		enterRule(_localctx, 368, RULE_kwClustering);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2166);
			match(K_CLUSTERING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwCompactContext extends ParserRuleContext {
		public TerminalNode K_COMPACT() { return getToken(CqlParser.K_COMPACT, 0); }
		public KwCompactContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwCompact; }
	}

	public final KwCompactContext kwCompact() throws RecognitionException {
		KwCompactContext _localctx = new KwCompactContext(_ctx, getState());
		enterRule(_localctx, 370, RULE_kwCompact);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2168);
			match(K_COMPACT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwContainsContext extends ParserRuleContext {
		public TerminalNode K_CONTAINS() { return getToken(CqlParser.K_CONTAINS, 0); }
		public KwContainsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwContains; }
	}

	public final KwContainsContext kwContains() throws RecognitionException {
		KwContainsContext _localctx = new KwContainsContext(_ctx, getState());
		enterRule(_localctx, 372, RULE_kwContains);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2170);
			match(K_CONTAINS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwContainsKeyContext extends ParserRuleContext {
		public TerminalNode K_CONTAINS() { return getToken(CqlParser.K_CONTAINS, 0); }
		public TerminalNode K_KEY() { return getToken(CqlParser.K_KEY, 0); }
		public KwContainsKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwContainsKey; }
	}

	public final KwContainsKeyContext kwContainsKey() throws RecognitionException {
		KwContainsKeyContext _localctx = new KwContainsKeyContext(_ctx, getState());
		enterRule(_localctx, 374, RULE_kwContainsKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2172);
			match(K_CONTAINS);
			setState(2173);
			match(K_KEY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwCreateContext extends ParserRuleContext {
		public TerminalNode K_CREATE() { return getToken(CqlParser.K_CREATE, 0); }
		public KwCreateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwCreate; }
	}

	public final KwCreateContext kwCreate() throws RecognitionException {
		KwCreateContext _localctx = new KwCreateContext(_ctx, getState());
		enterRule(_localctx, 376, RULE_kwCreate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2175);
			match(K_CREATE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwDeleteContext extends ParserRuleContext {
		public TerminalNode K_DELETE() { return getToken(CqlParser.K_DELETE, 0); }
		public KwDeleteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwDelete; }
	}

	public final KwDeleteContext kwDelete() throws RecognitionException {
		KwDeleteContext _localctx = new KwDeleteContext(_ctx, getState());
		enterRule(_localctx, 378, RULE_kwDelete);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2177);
			match(K_DELETE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwDescContext extends ParserRuleContext {
		public TerminalNode K_DESC() { return getToken(CqlParser.K_DESC, 0); }
		public KwDescContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwDesc; }
	}

	public final KwDescContext kwDesc() throws RecognitionException {
		KwDescContext _localctx = new KwDescContext(_ctx, getState());
		enterRule(_localctx, 380, RULE_kwDesc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2179);
			match(K_DESC);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwDescibeContext extends ParserRuleContext {
		public TerminalNode K_DESCRIBE() { return getToken(CqlParser.K_DESCRIBE, 0); }
		public KwDescibeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwDescibe; }
	}

	public final KwDescibeContext kwDescibe() throws RecognitionException {
		KwDescibeContext _localctx = new KwDescibeContext(_ctx, getState());
		enterRule(_localctx, 382, RULE_kwDescibe);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2181);
			match(K_DESCRIBE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwDistinctContext extends ParserRuleContext {
		public TerminalNode K_DISTINCT() { return getToken(CqlParser.K_DISTINCT, 0); }
		public KwDistinctContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwDistinct; }
	}

	public final KwDistinctContext kwDistinct() throws RecognitionException {
		KwDistinctContext _localctx = new KwDistinctContext(_ctx, getState());
		enterRule(_localctx, 384, RULE_kwDistinct);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2183);
			match(K_DISTINCT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwDropContext extends ParserRuleContext {
		public TerminalNode K_DROP() { return getToken(CqlParser.K_DROP, 0); }
		public KwDropContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwDrop; }
	}

	public final KwDropContext kwDrop() throws RecognitionException {
		KwDropContext _localctx = new KwDropContext(_ctx, getState());
		enterRule(_localctx, 386, RULE_kwDrop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2185);
			match(K_DROP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwDurableWritesContext extends ParserRuleContext {
		public TerminalNode K_DURABLE_WRITES() { return getToken(CqlParser.K_DURABLE_WRITES, 0); }
		public KwDurableWritesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwDurableWrites; }
	}

	public final KwDurableWritesContext kwDurableWrites() throws RecognitionException {
		KwDurableWritesContext _localctx = new KwDurableWritesContext(_ctx, getState());
		enterRule(_localctx, 388, RULE_kwDurableWrites);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2187);
			match(K_DURABLE_WRITES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwEntriesContext extends ParserRuleContext {
		public TerminalNode K_ENTRIES() { return getToken(CqlParser.K_ENTRIES, 0); }
		public KwEntriesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwEntries; }
	}

	public final KwEntriesContext kwEntries() throws RecognitionException {
		KwEntriesContext _localctx = new KwEntriesContext(_ctx, getState());
		enterRule(_localctx, 390, RULE_kwEntries);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2189);
			match(K_ENTRIES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwExecuteContext extends ParserRuleContext {
		public TerminalNode K_EXECUTE() { return getToken(CqlParser.K_EXECUTE, 0); }
		public KwExecuteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwExecute; }
	}

	public final KwExecuteContext kwExecute() throws RecognitionException {
		KwExecuteContext _localctx = new KwExecuteContext(_ctx, getState());
		enterRule(_localctx, 392, RULE_kwExecute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2191);
			match(K_EXECUTE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwExistsContext extends ParserRuleContext {
		public TerminalNode K_EXISTS() { return getToken(CqlParser.K_EXISTS, 0); }
		public KwExistsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwExists; }
	}

	public final KwExistsContext kwExists() throws RecognitionException {
		KwExistsContext _localctx = new KwExistsContext(_ctx, getState());
		enterRule(_localctx, 394, RULE_kwExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2193);
			match(K_EXISTS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwFilteringContext extends ParserRuleContext {
		public TerminalNode K_FILTERING() { return getToken(CqlParser.K_FILTERING, 0); }
		public KwFilteringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwFiltering; }
	}

	public final KwFilteringContext kwFiltering() throws RecognitionException {
		KwFilteringContext _localctx = new KwFilteringContext(_ctx, getState());
		enterRule(_localctx, 396, RULE_kwFiltering);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2195);
			match(K_FILTERING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwFinalfuncContext extends ParserRuleContext {
		public TerminalNode K_FINALFUNC() { return getToken(CqlParser.K_FINALFUNC, 0); }
		public KwFinalfuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwFinalfunc; }
	}

	public final KwFinalfuncContext kwFinalfunc() throws RecognitionException {
		KwFinalfuncContext _localctx = new KwFinalfuncContext(_ctx, getState());
		enterRule(_localctx, 398, RULE_kwFinalfunc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2197);
			match(K_FINALFUNC);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwFromContext extends ParserRuleContext {
		public TerminalNode K_FROM() { return getToken(CqlParser.K_FROM, 0); }
		public KwFromContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwFrom; }
	}

	public final KwFromContext kwFrom() throws RecognitionException {
		KwFromContext _localctx = new KwFromContext(_ctx, getState());
		enterRule(_localctx, 400, RULE_kwFrom);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2199);
			match(K_FROM);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwFullContext extends ParserRuleContext {
		public TerminalNode K_FULL() { return getToken(CqlParser.K_FULL, 0); }
		public KwFullContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwFull; }
	}

	public final KwFullContext kwFull() throws RecognitionException {
		KwFullContext _localctx = new KwFullContext(_ctx, getState());
		enterRule(_localctx, 402, RULE_kwFull);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2201);
			match(K_FULL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwFunctionContext extends ParserRuleContext {
		public TerminalNode K_FUNCTION() { return getToken(CqlParser.K_FUNCTION, 0); }
		public KwFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwFunction; }
	}

	public final KwFunctionContext kwFunction() throws RecognitionException {
		KwFunctionContext _localctx = new KwFunctionContext(_ctx, getState());
		enterRule(_localctx, 404, RULE_kwFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2203);
			match(K_FUNCTION);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwFunctionsContext extends ParserRuleContext {
		public TerminalNode K_FUNCTIONS() { return getToken(CqlParser.K_FUNCTIONS, 0); }
		public KwFunctionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwFunctions; }
	}

	public final KwFunctionsContext kwFunctions() throws RecognitionException {
		KwFunctionsContext _localctx = new KwFunctionsContext(_ctx, getState());
		enterRule(_localctx, 406, RULE_kwFunctions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2205);
			match(K_FUNCTIONS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwGrantContext extends ParserRuleContext {
		public TerminalNode K_GRANT() { return getToken(CqlParser.K_GRANT, 0); }
		public KwGrantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwGrant; }
	}

	public final KwGrantContext kwGrant() throws RecognitionException {
		KwGrantContext _localctx = new KwGrantContext(_ctx, getState());
		enterRule(_localctx, 408, RULE_kwGrant);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2207);
			match(K_GRANT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwIfContext extends ParserRuleContext {
		public TerminalNode K_IF() { return getToken(CqlParser.K_IF, 0); }
		public KwIfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwIf; }
	}

	public final KwIfContext kwIf() throws RecognitionException {
		KwIfContext _localctx = new KwIfContext(_ctx, getState());
		enterRule(_localctx, 410, RULE_kwIf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2209);
			match(K_IF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwInContext extends ParserRuleContext {
		public TerminalNode K_IN() { return getToken(CqlParser.K_IN, 0); }
		public KwInContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwIn; }
	}

	public final KwInContext kwIn() throws RecognitionException {
		KwInContext _localctx = new KwInContext(_ctx, getState());
		enterRule(_localctx, 412, RULE_kwIn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2211);
			match(K_IN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwIndexContext extends ParserRuleContext {
		public TerminalNode K_INDEX() { return getToken(CqlParser.K_INDEX, 0); }
		public KwIndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwIndex; }
	}

	public final KwIndexContext kwIndex() throws RecognitionException {
		KwIndexContext _localctx = new KwIndexContext(_ctx, getState());
		enterRule(_localctx, 414, RULE_kwIndex);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2213);
			match(K_INDEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwInitcondContext extends ParserRuleContext {
		public TerminalNode K_INITCOND() { return getToken(CqlParser.K_INITCOND, 0); }
		public KwInitcondContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwInitcond; }
	}

	public final KwInitcondContext kwInitcond() throws RecognitionException {
		KwInitcondContext _localctx = new KwInitcondContext(_ctx, getState());
		enterRule(_localctx, 416, RULE_kwInitcond);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2215);
			match(K_INITCOND);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwInputContext extends ParserRuleContext {
		public TerminalNode K_INPUT() { return getToken(CqlParser.K_INPUT, 0); }
		public KwInputContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwInput; }
	}

	public final KwInputContext kwInput() throws RecognitionException {
		KwInputContext _localctx = new KwInputContext(_ctx, getState());
		enterRule(_localctx, 418, RULE_kwInput);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2217);
			match(K_INPUT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwInsertContext extends ParserRuleContext {
		public TerminalNode K_INSERT() { return getToken(CqlParser.K_INSERT, 0); }
		public KwInsertContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwInsert; }
	}

	public final KwInsertContext kwInsert() throws RecognitionException {
		KwInsertContext _localctx = new KwInsertContext(_ctx, getState());
		enterRule(_localctx, 420, RULE_kwInsert);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2219);
			match(K_INSERT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwIntoContext extends ParserRuleContext {
		public TerminalNode K_INTO() { return getToken(CqlParser.K_INTO, 0); }
		public KwIntoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwInto; }
	}

	public final KwIntoContext kwInto() throws RecognitionException {
		KwIntoContext _localctx = new KwIntoContext(_ctx, getState());
		enterRule(_localctx, 422, RULE_kwInto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2221);
			match(K_INTO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwIsContext extends ParserRuleContext {
		public TerminalNode K_IS() { return getToken(CqlParser.K_IS, 0); }
		public KwIsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwIs; }
	}

	public final KwIsContext kwIs() throws RecognitionException {
		KwIsContext _localctx = new KwIsContext(_ctx, getState());
		enterRule(_localctx, 424, RULE_kwIs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2223);
			match(K_IS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwKeyContext extends ParserRuleContext {
		public TerminalNode K_KEY() { return getToken(CqlParser.K_KEY, 0); }
		public KwKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwKey; }
	}

	public final KwKeyContext kwKey() throws RecognitionException {
		KwKeyContext _localctx = new KwKeyContext(_ctx, getState());
		enterRule(_localctx, 426, RULE_kwKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2225);
			match(K_KEY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwKeysContext extends ParserRuleContext {
		public TerminalNode K_KEYS() { return getToken(CqlParser.K_KEYS, 0); }
		public KwKeysContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwKeys; }
	}

	public final KwKeysContext kwKeys() throws RecognitionException {
		KwKeysContext _localctx = new KwKeysContext(_ctx, getState());
		enterRule(_localctx, 428, RULE_kwKeys);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2227);
			match(K_KEYS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwKeyspaceContext extends ParserRuleContext {
		public TerminalNode K_KEYSPACE() { return getToken(CqlParser.K_KEYSPACE, 0); }
		public KwKeyspaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwKeyspace; }
	}

	public final KwKeyspaceContext kwKeyspace() throws RecognitionException {
		KwKeyspaceContext _localctx = new KwKeyspaceContext(_ctx, getState());
		enterRule(_localctx, 430, RULE_kwKeyspace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2229);
			match(K_KEYSPACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwKeyspacesContext extends ParserRuleContext {
		public TerminalNode K_KEYSPACES() { return getToken(CqlParser.K_KEYSPACES, 0); }
		public KwKeyspacesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwKeyspaces; }
	}

	public final KwKeyspacesContext kwKeyspaces() throws RecognitionException {
		KwKeyspacesContext _localctx = new KwKeyspacesContext(_ctx, getState());
		enterRule(_localctx, 432, RULE_kwKeyspaces);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2231);
			match(K_KEYSPACES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwLanguageContext extends ParserRuleContext {
		public TerminalNode K_LANGUAGE() { return getToken(CqlParser.K_LANGUAGE, 0); }
		public KwLanguageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwLanguage; }
	}

	public final KwLanguageContext kwLanguage() throws RecognitionException {
		KwLanguageContext _localctx = new KwLanguageContext(_ctx, getState());
		enterRule(_localctx, 434, RULE_kwLanguage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2233);
			match(K_LANGUAGE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwLimitContext extends ParserRuleContext {
		public TerminalNode K_LIMIT() { return getToken(CqlParser.K_LIMIT, 0); }
		public KwLimitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwLimit; }
	}

	public final KwLimitContext kwLimit() throws RecognitionException {
		KwLimitContext _localctx = new KwLimitContext(_ctx, getState());
		enterRule(_localctx, 436, RULE_kwLimit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2235);
			match(K_LIMIT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwListContext extends ParserRuleContext {
		public TerminalNode K_LIST() { return getToken(CqlParser.K_LIST, 0); }
		public KwListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwList; }
	}

	public final KwListContext kwList() throws RecognitionException {
		KwListContext _localctx = new KwListContext(_ctx, getState());
		enterRule(_localctx, 438, RULE_kwList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2237);
			match(K_LIST);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwLoggedContext extends ParserRuleContext {
		public TerminalNode K_LOGGED() { return getToken(CqlParser.K_LOGGED, 0); }
		public KwLoggedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwLogged; }
	}

	public final KwLoggedContext kwLogged() throws RecognitionException {
		KwLoggedContext _localctx = new KwLoggedContext(_ctx, getState());
		enterRule(_localctx, 440, RULE_kwLogged);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2239);
			match(K_LOGGED);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwLoginContext extends ParserRuleContext {
		public TerminalNode K_LOGIN() { return getToken(CqlParser.K_LOGIN, 0); }
		public KwLoginContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwLogin; }
	}

	public final KwLoginContext kwLogin() throws RecognitionException {
		KwLoginContext _localctx = new KwLoginContext(_ctx, getState());
		enterRule(_localctx, 442, RULE_kwLogin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2241);
			match(K_LOGIN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwMaterializedContext extends ParserRuleContext {
		public TerminalNode K_MATERIALIZED() { return getToken(CqlParser.K_MATERIALIZED, 0); }
		public KwMaterializedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwMaterialized; }
	}

	public final KwMaterializedContext kwMaterialized() throws RecognitionException {
		KwMaterializedContext _localctx = new KwMaterializedContext(_ctx, getState());
		enterRule(_localctx, 444, RULE_kwMaterialized);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2243);
			match(K_MATERIALIZED);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwModifyContext extends ParserRuleContext {
		public TerminalNode K_MODIFY() { return getToken(CqlParser.K_MODIFY, 0); }
		public KwModifyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwModify; }
	}

	public final KwModifyContext kwModify() throws RecognitionException {
		KwModifyContext _localctx = new KwModifyContext(_ctx, getState());
		enterRule(_localctx, 446, RULE_kwModify);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2245);
			match(K_MODIFY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwNosuperuserContext extends ParserRuleContext {
		public TerminalNode K_NOSUPERUSER() { return getToken(CqlParser.K_NOSUPERUSER, 0); }
		public KwNosuperuserContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwNosuperuser; }
	}

	public final KwNosuperuserContext kwNosuperuser() throws RecognitionException {
		KwNosuperuserContext _localctx = new KwNosuperuserContext(_ctx, getState());
		enterRule(_localctx, 448, RULE_kwNosuperuser);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2247);
			match(K_NOSUPERUSER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwNorecursiveContext extends ParserRuleContext {
		public TerminalNode K_NORECURSIVE() { return getToken(CqlParser.K_NORECURSIVE, 0); }
		public KwNorecursiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwNorecursive; }
	}

	public final KwNorecursiveContext kwNorecursive() throws RecognitionException {
		KwNorecursiveContext _localctx = new KwNorecursiveContext(_ctx, getState());
		enterRule(_localctx, 450, RULE_kwNorecursive);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2249);
			match(K_NORECURSIVE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwNotContext extends ParserRuleContext {
		public TerminalNode K_NOT() { return getToken(CqlParser.K_NOT, 0); }
		public KwNotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwNot; }
	}

	public final KwNotContext kwNot() throws RecognitionException {
		KwNotContext _localctx = new KwNotContext(_ctx, getState());
		enterRule(_localctx, 452, RULE_kwNot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2251);
			match(K_NOT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwNullContext extends ParserRuleContext {
		public TerminalNode K_NULL() { return getToken(CqlParser.K_NULL, 0); }
		public KwNullContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwNull; }
	}

	public final KwNullContext kwNull() throws RecognitionException {
		KwNullContext _localctx = new KwNullContext(_ctx, getState());
		enterRule(_localctx, 454, RULE_kwNull);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2253);
			match(K_NULL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwOfContext extends ParserRuleContext {
		public TerminalNode K_OF() { return getToken(CqlParser.K_OF, 0); }
		public KwOfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwOf; }
	}

	public final KwOfContext kwOf() throws RecognitionException {
		KwOfContext _localctx = new KwOfContext(_ctx, getState());
		enterRule(_localctx, 456, RULE_kwOf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2255);
			match(K_OF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwOnContext extends ParserRuleContext {
		public TerminalNode K_ON() { return getToken(CqlParser.K_ON, 0); }
		public KwOnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwOn; }
	}

	public final KwOnContext kwOn() throws RecognitionException {
		KwOnContext _localctx = new KwOnContext(_ctx, getState());
		enterRule(_localctx, 458, RULE_kwOn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2257);
			match(K_ON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwOptionsContext extends ParserRuleContext {
		public TerminalNode K_OPTIONS() { return getToken(CqlParser.K_OPTIONS, 0); }
		public KwOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwOptions; }
	}

	public final KwOptionsContext kwOptions() throws RecognitionException {
		KwOptionsContext _localctx = new KwOptionsContext(_ctx, getState());
		enterRule(_localctx, 460, RULE_kwOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2259);
			match(K_OPTIONS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwOrContext extends ParserRuleContext {
		public TerminalNode K_OR() { return getToken(CqlParser.K_OR, 0); }
		public KwOrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwOr; }
	}

	public final KwOrContext kwOr() throws RecognitionException {
		KwOrContext _localctx = new KwOrContext(_ctx, getState());
		enterRule(_localctx, 462, RULE_kwOr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2261);
			match(K_OR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwOrderContext extends ParserRuleContext {
		public TerminalNode K_ORDER() { return getToken(CqlParser.K_ORDER, 0); }
		public KwOrderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwOrder; }
	}

	public final KwOrderContext kwOrder() throws RecognitionException {
		KwOrderContext _localctx = new KwOrderContext(_ctx, getState());
		enterRule(_localctx, 464, RULE_kwOrder);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2263);
			match(K_ORDER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwOrderByContext extends ParserRuleContext {
		public TerminalNode K_ORDER() { return getToken(CqlParser.K_ORDER, 0); }
		public TerminalNode K_BY() { return getToken(CqlParser.K_BY, 0); }
		public KwOrderByContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwOrderBy; }
	}

	public final KwOrderByContext kwOrderBy() throws RecognitionException {
		KwOrderByContext _localctx = new KwOrderByContext(_ctx, getState());
		enterRule(_localctx, 466, RULE_kwOrderBy);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2265);
			match(K_ORDER);
			setState(2266);
			match(K_BY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwPasswordContext extends ParserRuleContext {
		public TerminalNode K_PASSWORD() { return getToken(CqlParser.K_PASSWORD, 0); }
		public KwPasswordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwPassword; }
	}

	public final KwPasswordContext kwPassword() throws RecognitionException {
		KwPasswordContext _localctx = new KwPasswordContext(_ctx, getState());
		enterRule(_localctx, 468, RULE_kwPassword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2268);
			match(K_PASSWORD);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwPrimaryContext extends ParserRuleContext {
		public TerminalNode K_PRIMARY() { return getToken(CqlParser.K_PRIMARY, 0); }
		public KwPrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwPrimary; }
	}

	public final KwPrimaryContext kwPrimary() throws RecognitionException {
		KwPrimaryContext _localctx = new KwPrimaryContext(_ctx, getState());
		enterRule(_localctx, 470, RULE_kwPrimary);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2270);
			match(K_PRIMARY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwRenameContext extends ParserRuleContext {
		public TerminalNode K_RENAME() { return getToken(CqlParser.K_RENAME, 0); }
		public KwRenameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwRename; }
	}

	public final KwRenameContext kwRename() throws RecognitionException {
		KwRenameContext _localctx = new KwRenameContext(_ctx, getState());
		enterRule(_localctx, 472, RULE_kwRename);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2272);
			match(K_RENAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwReplaceContext extends ParserRuleContext {
		public TerminalNode K_REPLACE() { return getToken(CqlParser.K_REPLACE, 0); }
		public KwReplaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwReplace; }
	}

	public final KwReplaceContext kwReplace() throws RecognitionException {
		KwReplaceContext _localctx = new KwReplaceContext(_ctx, getState());
		enterRule(_localctx, 474, RULE_kwReplace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2274);
			match(K_REPLACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwReplicationContext extends ParserRuleContext {
		public TerminalNode K_REPLICATION() { return getToken(CqlParser.K_REPLICATION, 0); }
		public KwReplicationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwReplication; }
	}

	public final KwReplicationContext kwReplication() throws RecognitionException {
		KwReplicationContext _localctx = new KwReplicationContext(_ctx, getState());
		enterRule(_localctx, 476, RULE_kwReplication);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2276);
			match(K_REPLICATION);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwReturnsContext extends ParserRuleContext {
		public TerminalNode K_RETURNS() { return getToken(CqlParser.K_RETURNS, 0); }
		public KwReturnsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwReturns; }
	}

	public final KwReturnsContext kwReturns() throws RecognitionException {
		KwReturnsContext _localctx = new KwReturnsContext(_ctx, getState());
		enterRule(_localctx, 478, RULE_kwReturns);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2278);
			match(K_RETURNS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwRoleContext extends ParserRuleContext {
		public TerminalNode K_ROLE() { return getToken(CqlParser.K_ROLE, 0); }
		public KwRoleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwRole; }
	}

	public final KwRoleContext kwRole() throws RecognitionException {
		KwRoleContext _localctx = new KwRoleContext(_ctx, getState());
		enterRule(_localctx, 480, RULE_kwRole);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2280);
			match(K_ROLE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwRolesContext extends ParserRuleContext {
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public KwRolesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwRoles; }
	}

	public final KwRolesContext kwRoles() throws RecognitionException {
		KwRolesContext _localctx = new KwRolesContext(_ctx, getState());
		enterRule(_localctx, 482, RULE_kwRoles);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2282);
			match(K_ROLES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwSelectContext extends ParserRuleContext {
		public TerminalNode K_SELECT() { return getToken(CqlParser.K_SELECT, 0); }
		public KwSelectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwSelect; }
	}

	public final KwSelectContext kwSelect() throws RecognitionException {
		KwSelectContext _localctx = new KwSelectContext(_ctx, getState());
		enterRule(_localctx, 484, RULE_kwSelect);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2284);
			match(K_SELECT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwSetContext extends ParserRuleContext {
		public TerminalNode K_SET() { return getToken(CqlParser.K_SET, 0); }
		public KwSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwSet; }
	}

	public final KwSetContext kwSet() throws RecognitionException {
		KwSetContext _localctx = new KwSetContext(_ctx, getState());
		enterRule(_localctx, 486, RULE_kwSet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2286);
			match(K_SET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwSfuncContext extends ParserRuleContext {
		public TerminalNode K_SFUNC() { return getToken(CqlParser.K_SFUNC, 0); }
		public KwSfuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwSfunc; }
	}

	public final KwSfuncContext kwSfunc() throws RecognitionException {
		KwSfuncContext _localctx = new KwSfuncContext(_ctx, getState());
		enterRule(_localctx, 488, RULE_kwSfunc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2288);
			match(K_SFUNC);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwStaticContext extends ParserRuleContext {
		public TerminalNode K_STATIC() { return getToken(CqlParser.K_STATIC, 0); }
		public KwStaticContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwStatic; }
	}

	public final KwStaticContext kwStatic() throws RecognitionException {
		KwStaticContext _localctx = new KwStaticContext(_ctx, getState());
		enterRule(_localctx, 490, RULE_kwStatic);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2290);
			match(K_STATIC);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwStorageContext extends ParserRuleContext {
		public TerminalNode K_STORAGE() { return getToken(CqlParser.K_STORAGE, 0); }
		public KwStorageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwStorage; }
	}

	public final KwStorageContext kwStorage() throws RecognitionException {
		KwStorageContext _localctx = new KwStorageContext(_ctx, getState());
		enterRule(_localctx, 492, RULE_kwStorage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2292);
			match(K_STORAGE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwStypeContext extends ParserRuleContext {
		public TerminalNode K_STYPE() { return getToken(CqlParser.K_STYPE, 0); }
		public KwStypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwStype; }
	}

	public final KwStypeContext kwStype() throws RecognitionException {
		KwStypeContext _localctx = new KwStypeContext(_ctx, getState());
		enterRule(_localctx, 494, RULE_kwStype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2294);
			match(K_STYPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwSuperuserContext extends ParserRuleContext {
		public TerminalNode K_SUPERUSER() { return getToken(CqlParser.K_SUPERUSER, 0); }
		public KwSuperuserContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwSuperuser; }
	}

	public final KwSuperuserContext kwSuperuser() throws RecognitionException {
		KwSuperuserContext _localctx = new KwSuperuserContext(_ctx, getState());
		enterRule(_localctx, 496, RULE_kwSuperuser);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2296);
			match(K_SUPERUSER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwTableContext extends ParserRuleContext {
		public TerminalNode K_TABLE() { return getToken(CqlParser.K_TABLE, 0); }
		public KwTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwTable; }
	}

	public final KwTableContext kwTable() throws RecognitionException {
		KwTableContext _localctx = new KwTableContext(_ctx, getState());
		enterRule(_localctx, 498, RULE_kwTable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2298);
			match(K_TABLE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwTimestampContext extends ParserRuleContext {
		public TerminalNode K_TIMESTAMP() { return getToken(CqlParser.K_TIMESTAMP, 0); }
		public KwTimestampContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwTimestamp; }
	}

	public final KwTimestampContext kwTimestamp() throws RecognitionException {
		KwTimestampContext _localctx = new KwTimestampContext(_ctx, getState());
		enterRule(_localctx, 500, RULE_kwTimestamp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2300);
			match(K_TIMESTAMP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwToContext extends ParserRuleContext {
		public TerminalNode K_TO() { return getToken(CqlParser.K_TO, 0); }
		public KwToContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwTo; }
	}

	public final KwToContext kwTo() throws RecognitionException {
		KwToContext _localctx = new KwToContext(_ctx, getState());
		enterRule(_localctx, 502, RULE_kwTo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2302);
			match(K_TO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwTriggerContext extends ParserRuleContext {
		public TerminalNode K_TRIGGER() { return getToken(CqlParser.K_TRIGGER, 0); }
		public KwTriggerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwTrigger; }
	}

	public final KwTriggerContext kwTrigger() throws RecognitionException {
		KwTriggerContext _localctx = new KwTriggerContext(_ctx, getState());
		enterRule(_localctx, 504, RULE_kwTrigger);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2304);
			match(K_TRIGGER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwTruncateContext extends ParserRuleContext {
		public TerminalNode K_TRUNCATE() { return getToken(CqlParser.K_TRUNCATE, 0); }
		public KwTruncateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwTruncate; }
	}

	public final KwTruncateContext kwTruncate() throws RecognitionException {
		KwTruncateContext _localctx = new KwTruncateContext(_ctx, getState());
		enterRule(_localctx, 506, RULE_kwTruncate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2306);
			match(K_TRUNCATE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwTtlContext extends ParserRuleContext {
		public TerminalNode K_TTL() { return getToken(CqlParser.K_TTL, 0); }
		public KwTtlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwTtl; }
	}

	public final KwTtlContext kwTtl() throws RecognitionException {
		KwTtlContext _localctx = new KwTtlContext(_ctx, getState());
		enterRule(_localctx, 508, RULE_kwTtl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2308);
			match(K_TTL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwTypeContext extends ParserRuleContext {
		public TerminalNode K_TYPE() { return getToken(CqlParser.K_TYPE, 0); }
		public KwTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwType; }
	}

	public final KwTypeContext kwType() throws RecognitionException {
		KwTypeContext _localctx = new KwTypeContext(_ctx, getState());
		enterRule(_localctx, 510, RULE_kwType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2310);
			match(K_TYPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwUnloggedContext extends ParserRuleContext {
		public TerminalNode K_UNLOGGED() { return getToken(CqlParser.K_UNLOGGED, 0); }
		public KwUnloggedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwUnlogged; }
	}

	public final KwUnloggedContext kwUnlogged() throws RecognitionException {
		KwUnloggedContext _localctx = new KwUnloggedContext(_ctx, getState());
		enterRule(_localctx, 512, RULE_kwUnlogged);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2312);
			match(K_UNLOGGED);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwUpdateContext extends ParserRuleContext {
		public TerminalNode K_UPDATE() { return getToken(CqlParser.K_UPDATE, 0); }
		public KwUpdateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwUpdate; }
	}

	public final KwUpdateContext kwUpdate() throws RecognitionException {
		KwUpdateContext _localctx = new KwUpdateContext(_ctx, getState());
		enterRule(_localctx, 514, RULE_kwUpdate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2314);
			match(K_UPDATE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwUseContext extends ParserRuleContext {
		public TerminalNode K_USE() { return getToken(CqlParser.K_USE, 0); }
		public KwUseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwUse; }
	}

	public final KwUseContext kwUse() throws RecognitionException {
		KwUseContext _localctx = new KwUseContext(_ctx, getState());
		enterRule(_localctx, 516, RULE_kwUse);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2316);
			match(K_USE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwUserContext extends ParserRuleContext {
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public KwUserContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwUser; }
	}

	public final KwUserContext kwUser() throws RecognitionException {
		KwUserContext _localctx = new KwUserContext(_ctx, getState());
		enterRule(_localctx, 518, RULE_kwUser);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2318);
			match(K_USER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwUsersContext extends ParserRuleContext {
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public KwUsersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwUsers; }
	}

	public final KwUsersContext kwUsers() throws RecognitionException {
		KwUsersContext _localctx = new KwUsersContext(_ctx, getState());
		enterRule(_localctx, 520, RULE_kwUsers);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2320);
			match(K_USERS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwUsingContext extends ParserRuleContext {
		public TerminalNode K_USING() { return getToken(CqlParser.K_USING, 0); }
		public KwUsingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwUsing; }
	}

	public final KwUsingContext kwUsing() throws RecognitionException {
		KwUsingContext _localctx = new KwUsingContext(_ctx, getState());
		enterRule(_localctx, 522, RULE_kwUsing);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2322);
			match(K_USING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwValuesContext extends ParserRuleContext {
		public TerminalNode K_VALUES() { return getToken(CqlParser.K_VALUES, 0); }
		public KwValuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwValues; }
	}

	public final KwValuesContext kwValues() throws RecognitionException {
		KwValuesContext _localctx = new KwValuesContext(_ctx, getState());
		enterRule(_localctx, 524, RULE_kwValues);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2324);
			match(K_VALUES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwViewContext extends ParserRuleContext {
		public TerminalNode K_VIEW() { return getToken(CqlParser.K_VIEW, 0); }
		public KwViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwView; }
	}

	public final KwViewContext kwView() throws RecognitionException {
		KwViewContext _localctx = new KwViewContext(_ctx, getState());
		enterRule(_localctx, 526, RULE_kwView);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2326);
			match(K_VIEW);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwWhereContext extends ParserRuleContext {
		public TerminalNode K_WHERE() { return getToken(CqlParser.K_WHERE, 0); }
		public KwWhereContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwWhere; }
	}

	public final KwWhereContext kwWhere() throws RecognitionException {
		KwWhereContext _localctx = new KwWhereContext(_ctx, getState());
		enterRule(_localctx, 528, RULE_kwWhere);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2328);
			match(K_WHERE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwWithContext extends ParserRuleContext {
		public TerminalNode K_WITH() { return getToken(CqlParser.K_WITH, 0); }
		public KwWithContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwWith; }
	}

	public final KwWithContext kwWith() throws RecognitionException {
		KwWithContext _localctx = new KwWithContext(_ctx, getState());
		enterRule(_localctx, 530, RULE_kwWith);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2330);
			match(K_WITH);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwRevokeContext extends ParserRuleContext {
		public TerminalNode K_REVOKE() { return getToken(CqlParser.K_REVOKE, 0); }
		public KwRevokeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwRevoke; }
	}

	public final KwRevokeContext kwRevoke() throws RecognitionException {
		KwRevokeContext _localctx = new KwRevokeContext(_ctx, getState());
		enterRule(_localctx, 532, RULE_kwRevoke);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2332);
			match(K_REVOKE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeAsciiContext extends ParserRuleContext {
		public TerminalNode K_ASCII() { return getToken(CqlParser.K_ASCII, 0); }
		public DataTypeAsciiContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeAscii; }
	}

	public final DataTypeAsciiContext dataTypeAscii() throws RecognitionException {
		DataTypeAsciiContext _localctx = new DataTypeAsciiContext(_ctx, getState());
		enterRule(_localctx, 534, RULE_dataTypeAscii);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2334);
			match(K_ASCII);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeBigintContext extends ParserRuleContext {
		public TerminalNode K_BIGINT() { return getToken(CqlParser.K_BIGINT, 0); }
		public DataTypeBigintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeBigint; }
	}

	public final DataTypeBigintContext dataTypeBigint() throws RecognitionException {
		DataTypeBigintContext _localctx = new DataTypeBigintContext(_ctx, getState());
		enterRule(_localctx, 536, RULE_dataTypeBigint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2336);
			match(K_BIGINT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeBlobContext extends ParserRuleContext {
		public TerminalNode K_BLOB() { return getToken(CqlParser.K_BLOB, 0); }
		public DataTypeBlobContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeBlob; }
	}

	public final DataTypeBlobContext dataTypeBlob() throws RecognitionException {
		DataTypeBlobContext _localctx = new DataTypeBlobContext(_ctx, getState());
		enterRule(_localctx, 538, RULE_dataTypeBlob);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2338);
			match(K_BLOB);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeBooleanContext extends ParserRuleContext {
		public TerminalNode K_BOOLEAN() { return getToken(CqlParser.K_BOOLEAN, 0); }
		public DataTypeBooleanContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeBoolean; }
	}

	public final DataTypeBooleanContext dataTypeBoolean() throws RecognitionException {
		DataTypeBooleanContext _localctx = new DataTypeBooleanContext(_ctx, getState());
		enterRule(_localctx, 540, RULE_dataTypeBoolean);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2340);
			match(K_BOOLEAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeCounterContext extends ParserRuleContext {
		public TerminalNode K_COUNTER() { return getToken(CqlParser.K_COUNTER, 0); }
		public DataTypeCounterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeCounter; }
	}

	public final DataTypeCounterContext dataTypeCounter() throws RecognitionException {
		DataTypeCounterContext _localctx = new DataTypeCounterContext(_ctx, getState());
		enterRule(_localctx, 542, RULE_dataTypeCounter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2342);
			match(K_COUNTER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeDateContext extends ParserRuleContext {
		public TerminalNode K_DATE() { return getToken(CqlParser.K_DATE, 0); }
		public DataTypeDateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeDate; }
	}

	public final DataTypeDateContext dataTypeDate() throws RecognitionException {
		DataTypeDateContext _localctx = new DataTypeDateContext(_ctx, getState());
		enterRule(_localctx, 544, RULE_dataTypeDate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2344);
			match(K_DATE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeDecimalContext extends ParserRuleContext {
		public TerminalNode K_DECIMAL() { return getToken(CqlParser.K_DECIMAL, 0); }
		public DataTypeDecimalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeDecimal; }
	}

	public final DataTypeDecimalContext dataTypeDecimal() throws RecognitionException {
		DataTypeDecimalContext _localctx = new DataTypeDecimalContext(_ctx, getState());
		enterRule(_localctx, 546, RULE_dataTypeDecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2346);
			match(K_DECIMAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeDoubleContext extends ParserRuleContext {
		public TerminalNode K_DOUBLE() { return getToken(CqlParser.K_DOUBLE, 0); }
		public DataTypeDoubleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeDouble; }
	}

	public final DataTypeDoubleContext dataTypeDouble() throws RecognitionException {
		DataTypeDoubleContext _localctx = new DataTypeDoubleContext(_ctx, getState());
		enterRule(_localctx, 548, RULE_dataTypeDouble);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2348);
			match(K_DOUBLE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeFloatContext extends ParserRuleContext {
		public TerminalNode K_FLOAT() { return getToken(CqlParser.K_FLOAT, 0); }
		public DataTypeFloatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeFloat; }
	}

	public final DataTypeFloatContext dataTypeFloat() throws RecognitionException {
		DataTypeFloatContext _localctx = new DataTypeFloatContext(_ctx, getState());
		enterRule(_localctx, 550, RULE_dataTypeFloat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2350);
			match(K_FLOAT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeFrozenContext extends ParserRuleContext {
		public TerminalNode K_FROZEN() { return getToken(CqlParser.K_FROZEN, 0); }
		public DataTypeFrozenSpecContext dataTypeFrozenSpec() {
			return getRuleContext(DataTypeFrozenSpecContext.class,0);
		}
		public DataTypeFrozenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeFrozen; }
	}

	public final DataTypeFrozenContext dataTypeFrozen() throws RecognitionException {
		DataTypeFrozenContext _localctx = new DataTypeFrozenContext(_ctx, getState());
		enterRule(_localctx, 552, RULE_dataTypeFrozen);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2352);
			match(K_FROZEN);
			setState(2353);
			dataTypeFrozenSpec();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeInetContext extends ParserRuleContext {
		public TerminalNode K_INET() { return getToken(CqlParser.K_INET, 0); }
		public DataTypeInetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeInet; }
	}

	public final DataTypeInetContext dataTypeInet() throws RecognitionException {
		DataTypeInetContext _localctx = new DataTypeInetContext(_ctx, getState());
		enterRule(_localctx, 554, RULE_dataTypeInet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2355);
			match(K_INET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeIntContext extends ParserRuleContext {
		public TerminalNode K_INT() { return getToken(CqlParser.K_INT, 0); }
		public DataTypeIntContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeInt; }
	}

	public final DataTypeIntContext dataTypeInt() throws RecognitionException {
		DataTypeIntContext _localctx = new DataTypeIntContext(_ctx, getState());
		enterRule(_localctx, 556, RULE_dataTypeInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2357);
			match(K_INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeListContext extends ParserRuleContext {
		public TerminalNode K_LIST() { return getToken(CqlParser.K_LIST, 0); }
		public DataTypeListSpecContext dataTypeListSpec() {
			return getRuleContext(DataTypeListSpecContext.class,0);
		}
		public DataTypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeList; }
	}

	public final DataTypeListContext dataTypeList() throws RecognitionException {
		DataTypeListContext _localctx = new DataTypeListContext(_ctx, getState());
		enterRule(_localctx, 558, RULE_dataTypeList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2359);
			match(K_LIST);
			setState(2360);
			dataTypeListSpec();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeMapContext extends ParserRuleContext {
		public TerminalNode K_MAP() { return getToken(CqlParser.K_MAP, 0); }
		public DataTypeMapSpecContext dataTypeMapSpec() {
			return getRuleContext(DataTypeMapSpecContext.class,0);
		}
		public DataTypeMapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeMap; }
	}

	public final DataTypeMapContext dataTypeMap() throws RecognitionException {
		DataTypeMapContext _localctx = new DataTypeMapContext(_ctx, getState());
		enterRule(_localctx, 560, RULE_dataTypeMap);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2362);
			match(K_MAP);
			setState(2363);
			dataTypeMapSpec();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeSmallIntContext extends ParserRuleContext {
		public TerminalNode K_SMALLINT() { return getToken(CqlParser.K_SMALLINT, 0); }
		public DataTypeSmallIntContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeSmallInt; }
	}

	public final DataTypeSmallIntContext dataTypeSmallInt() throws RecognitionException {
		DataTypeSmallIntContext _localctx = new DataTypeSmallIntContext(_ctx, getState());
		enterRule(_localctx, 562, RULE_dataTypeSmallInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2365);
			match(K_SMALLINT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeSetContext extends ParserRuleContext {
		public TerminalNode K_SET() { return getToken(CqlParser.K_SET, 0); }
		public DataTypeSetSpecContext dataTypeSetSpec() {
			return getRuleContext(DataTypeSetSpecContext.class,0);
		}
		public DataTypeSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeSet; }
	}

	public final DataTypeSetContext dataTypeSet() throws RecognitionException {
		DataTypeSetContext _localctx = new DataTypeSetContext(_ctx, getState());
		enterRule(_localctx, 564, RULE_dataTypeSet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2367);
			match(K_SET);
			setState(2368);
			dataTypeSetSpec();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeTextContext extends ParserRuleContext {
		public TerminalNode K_TEXT() { return getToken(CqlParser.K_TEXT, 0); }
		public DataTypeTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeText; }
	}

	public final DataTypeTextContext dataTypeText() throws RecognitionException {
		DataTypeTextContext _localctx = new DataTypeTextContext(_ctx, getState());
		enterRule(_localctx, 566, RULE_dataTypeText);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2370);
			match(K_TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeTimeContext extends ParserRuleContext {
		public TerminalNode K_TIME() { return getToken(CqlParser.K_TIME, 0); }
		public DataTypeTimeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeTime; }
	}

	public final DataTypeTimeContext dataTypeTime() throws RecognitionException {
		DataTypeTimeContext _localctx = new DataTypeTimeContext(_ctx, getState());
		enterRule(_localctx, 568, RULE_dataTypeTime);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2372);
			match(K_TIME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeTimeUuidContext extends ParserRuleContext {
		public TerminalNode K_TIMEUUID() { return getToken(CqlParser.K_TIMEUUID, 0); }
		public DataTypeTimeUuidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeTimeUuid; }
	}

	public final DataTypeTimeUuidContext dataTypeTimeUuid() throws RecognitionException {
		DataTypeTimeUuidContext _localctx = new DataTypeTimeUuidContext(_ctx, getState());
		enterRule(_localctx, 570, RULE_dataTypeTimeUuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2374);
			match(K_TIMEUUID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeTimestampContext extends ParserRuleContext {
		public TerminalNode K_TIMESTAMP() { return getToken(CqlParser.K_TIMESTAMP, 0); }
		public DataTypeTimestampContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeTimestamp; }
	}

	public final DataTypeTimestampContext dataTypeTimestamp() throws RecognitionException {
		DataTypeTimestampContext _localctx = new DataTypeTimestampContext(_ctx, getState());
		enterRule(_localctx, 572, RULE_dataTypeTimestamp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2376);
			match(K_TIMESTAMP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeTinyIntContext extends ParserRuleContext {
		public TerminalNode K_TINYINT() { return getToken(CqlParser.K_TINYINT, 0); }
		public DataTypeTinyIntContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeTinyInt; }
	}

	public final DataTypeTinyIntContext dataTypeTinyInt() throws RecognitionException {
		DataTypeTinyIntContext _localctx = new DataTypeTinyIntContext(_ctx, getState());
		enterRule(_localctx, 574, RULE_dataTypeTinyInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2378);
			match(K_TINYINT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeTupleContext extends ParserRuleContext {
		public TerminalNode K_TUPLE() { return getToken(CqlParser.K_TUPLE, 0); }
		public DataTypeTupleSpecContext dataTypeTupleSpec() {
			return getRuleContext(DataTypeTupleSpecContext.class,0);
		}
		public DataTypeTupleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeTuple; }
	}

	public final DataTypeTupleContext dataTypeTuple() throws RecognitionException {
		DataTypeTupleContext _localctx = new DataTypeTupleContext(_ctx, getState());
		enterRule(_localctx, 576, RULE_dataTypeTuple);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2380);
			match(K_TUPLE);
			setState(2381);
			dataTypeTupleSpec();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeUserDefinedContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public DataTypeUserDefinedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeUserDefined; }
	}

	public final DataTypeUserDefinedContext dataTypeUserDefined() throws RecognitionException {
		DataTypeUserDefinedContext _localctx = new DataTypeUserDefinedContext(_ctx, getState());
		enterRule(_localctx, 578, RULE_dataTypeUserDefined);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2383);
			match(OBJECT_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeUuidContext extends ParserRuleContext {
		public TerminalNode K_UUID() { return getToken(CqlParser.K_UUID, 0); }
		public DataTypeUuidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeUuid; }
	}

	public final DataTypeUuidContext dataTypeUuid() throws RecognitionException {
		DataTypeUuidContext _localctx = new DataTypeUuidContext(_ctx, getState());
		enterRule(_localctx, 580, RULE_dataTypeUuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2385);
			match(K_UUID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeVarCharContext extends ParserRuleContext {
		public TerminalNode K_VARCHAR() { return getToken(CqlParser.K_VARCHAR, 0); }
		public DataTypeVarCharContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeVarChar; }
	}

	public final DataTypeVarCharContext dataTypeVarChar() throws RecognitionException {
		DataTypeVarCharContext _localctx = new DataTypeVarCharContext(_ctx, getState());
		enterRule(_localctx, 582, RULE_dataTypeVarChar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2387);
			match(K_VARCHAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeVarIntContext extends ParserRuleContext {
		public TerminalNode K_VARINT() { return getToken(CqlParser.K_VARINT, 0); }
		public DataTypeVarIntContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeVarInt; }
	}

	public final DataTypeVarIntContext dataTypeVarInt() throws RecognitionException {
		DataTypeVarIntContext _localctx = new DataTypeVarIntContext(_ctx, getState());
		enterRule(_localctx, 584, RULE_dataTypeVarInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2389);
			match(K_VARINT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeTupleSpecContext extends ParserRuleContext {
		public SyntaxBracketLaContext syntaxBracketLa() {
			return getRuleContext(SyntaxBracketLaContext.class,0);
		}
		public List<DataTypeContext> dataType() {
			return getRuleContexts(DataTypeContext.class);
		}
		public DataTypeContext dataType(int i) {
			return getRuleContext(DataTypeContext.class,i);
		}
		public SyntaxBracketRaContext syntaxBracketRa() {
			return getRuleContext(SyntaxBracketRaContext.class,0);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public DataTypeTupleSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeTupleSpec; }
	}

	public final DataTypeTupleSpecContext dataTypeTupleSpec() throws RecognitionException {
		DataTypeTupleSpecContext _localctx = new DataTypeTupleSpecContext(_ctx, getState());
		enterRule(_localctx, 586, RULE_dataTypeTupleSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2391);
			syntaxBracketLa();
			setState(2392);
			dataType();
			setState(2398);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2393);
				syntaxComma();
				setState(2394);
				dataType();
				}
				}
				setState(2400);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2401);
			syntaxBracketRa();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeMapSpecContext extends ParserRuleContext {
		public SyntaxBracketLaContext syntaxBracketLa() {
			return getRuleContext(SyntaxBracketLaContext.class,0);
		}
		public List<DataTypeContext> dataType() {
			return getRuleContexts(DataTypeContext.class);
		}
		public DataTypeContext dataType(int i) {
			return getRuleContext(DataTypeContext.class,i);
		}
		public SyntaxCommaContext syntaxComma() {
			return getRuleContext(SyntaxCommaContext.class,0);
		}
		public SyntaxBracketRaContext syntaxBracketRa() {
			return getRuleContext(SyntaxBracketRaContext.class,0);
		}
		public DataTypeMapSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeMapSpec; }
	}

	public final DataTypeMapSpecContext dataTypeMapSpec() throws RecognitionException {
		DataTypeMapSpecContext _localctx = new DataTypeMapSpecContext(_ctx, getState());
		enterRule(_localctx, 588, RULE_dataTypeMapSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2403);
			syntaxBracketLa();
			setState(2404);
			dataType();
			setState(2405);
			syntaxComma();
			setState(2406);
			dataType();
			setState(2407);
			syntaxBracketRa();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeListSpecContext extends ParserRuleContext {
		public SyntaxBracketLaContext syntaxBracketLa() {
			return getRuleContext(SyntaxBracketLaContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public SyntaxBracketRaContext syntaxBracketRa() {
			return getRuleContext(SyntaxBracketRaContext.class,0);
		}
		public DataTypeListSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeListSpec; }
	}

	public final DataTypeListSpecContext dataTypeListSpec() throws RecognitionException {
		DataTypeListSpecContext _localctx = new DataTypeListSpecContext(_ctx, getState());
		enterRule(_localctx, 590, RULE_dataTypeListSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2409);
			syntaxBracketLa();
			setState(2410);
			dataType();
			setState(2411);
			syntaxBracketRa();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeSetSpecContext extends ParserRuleContext {
		public SyntaxBracketLaContext syntaxBracketLa() {
			return getRuleContext(SyntaxBracketLaContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public SyntaxBracketRaContext syntaxBracketRa() {
			return getRuleContext(SyntaxBracketRaContext.class,0);
		}
		public DataTypeSetSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeSetSpec; }
	}

	public final DataTypeSetSpecContext dataTypeSetSpec() throws RecognitionException {
		DataTypeSetSpecContext _localctx = new DataTypeSetSpecContext(_ctx, getState());
		enterRule(_localctx, 592, RULE_dataTypeSetSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2413);
			syntaxBracketLa();
			setState(2414);
			dataType();
			setState(2415);
			syntaxBracketRa();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeFrozenSpecContext extends ParserRuleContext {
		public SyntaxBracketLaContext syntaxBracketLa() {
			return getRuleContext(SyntaxBracketLaContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public SyntaxBracketRaContext syntaxBracketRa() {
			return getRuleContext(SyntaxBracketRaContext.class,0);
		}
		public DataTypeFrozenSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeFrozenSpec; }
	}

	public final DataTypeFrozenSpecContext dataTypeFrozenSpec() throws RecognitionException {
		DataTypeFrozenSpecContext _localctx = new DataTypeFrozenSpecContext(_ctx, getState());
		enterRule(_localctx, 594, RULE_dataTypeFrozenSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2417);
			syntaxBracketLa();
			setState(2418);
			dataType();
			setState(2419);
			syntaxBracketRa();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SpecialStarContext extends ParserRuleContext {
		public TerminalNode STAR() { return getToken(CqlParser.STAR, 0); }
		public SpecialStarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_specialStar; }
	}

	public final SpecialStarContext specialStar() throws RecognitionException {
		SpecialStarContext _localctx = new SpecialStarContext(_ctx, getState());
		enterRule(_localctx, 596, RULE_specialStar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2421);
			match(STAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SpecialDotContext extends ParserRuleContext {
		public TerminalNode DOT() { return getToken(CqlParser.DOT, 0); }
		public SpecialDotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_specialDot; }
	}

	public final SpecialDotContext specialDot() throws RecognitionException {
		SpecialDotContext _localctx = new SpecialDotContext(_ctx, getState());
		enterRule(_localctx, 598, RULE_specialDot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2423);
			match(DOT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EofContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CqlParser.EOF, 0); }
		public EofContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eof; }
	}

	public final EofContext eof() throws RecognitionException {
		EofContext _localctx = new EofContext(_ctx, getState());
		enterRule(_localctx, 600, RULE_eof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2425);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxBracketLrContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(CqlParser.LR_BRACKET, 0); }
		public SyntaxBracketLrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxBracketLr; }
	}

	public final SyntaxBracketLrContext syntaxBracketLr() throws RecognitionException {
		SyntaxBracketLrContext _localctx = new SyntaxBracketLrContext(_ctx, getState());
		enterRule(_localctx, 602, RULE_syntaxBracketLr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2427);
			match(LR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxBracketRrContext extends ParserRuleContext {
		public TerminalNode RR_BRACKET() { return getToken(CqlParser.RR_BRACKET, 0); }
		public SyntaxBracketRrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxBracketRr; }
	}

	public final SyntaxBracketRrContext syntaxBracketRr() throws RecognitionException {
		SyntaxBracketRrContext _localctx = new SyntaxBracketRrContext(_ctx, getState());
		enterRule(_localctx, 604, RULE_syntaxBracketRr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2429);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxBracketLcContext extends ParserRuleContext {
		public TerminalNode LC_BRACKET() { return getToken(CqlParser.LC_BRACKET, 0); }
		public SyntaxBracketLcContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxBracketLc; }
	}

	public final SyntaxBracketLcContext syntaxBracketLc() throws RecognitionException {
		SyntaxBracketLcContext _localctx = new SyntaxBracketLcContext(_ctx, getState());
		enterRule(_localctx, 606, RULE_syntaxBracketLc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2431);
			match(LC_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxBracketRcContext extends ParserRuleContext {
		public TerminalNode RC_BRACKET() { return getToken(CqlParser.RC_BRACKET, 0); }
		public SyntaxBracketRcContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxBracketRc; }
	}

	public final SyntaxBracketRcContext syntaxBracketRc() throws RecognitionException {
		SyntaxBracketRcContext _localctx = new SyntaxBracketRcContext(_ctx, getState());
		enterRule(_localctx, 608, RULE_syntaxBracketRc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2433);
			match(RC_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxBracketLaContext extends ParserRuleContext {
		public TerminalNode OPERATOR_LT() { return getToken(CqlParser.OPERATOR_LT, 0); }
		public SyntaxBracketLaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxBracketLa; }
	}

	public final SyntaxBracketLaContext syntaxBracketLa() throws RecognitionException {
		SyntaxBracketLaContext _localctx = new SyntaxBracketLaContext(_ctx, getState());
		enterRule(_localctx, 610, RULE_syntaxBracketLa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2435);
			match(OPERATOR_LT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxBracketRaContext extends ParserRuleContext {
		public TerminalNode OPERATOR_GT() { return getToken(CqlParser.OPERATOR_GT, 0); }
		public SyntaxBracketRaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxBracketRa; }
	}

	public final SyntaxBracketRaContext syntaxBracketRa() throws RecognitionException {
		SyntaxBracketRaContext _localctx = new SyntaxBracketRaContext(_ctx, getState());
		enterRule(_localctx, 612, RULE_syntaxBracketRa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2437);
			match(OPERATOR_GT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxBracketLsContext extends ParserRuleContext {
		public TerminalNode LS_BRACKET() { return getToken(CqlParser.LS_BRACKET, 0); }
		public SyntaxBracketLsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxBracketLs; }
	}

	public final SyntaxBracketLsContext syntaxBracketLs() throws RecognitionException {
		SyntaxBracketLsContext _localctx = new SyntaxBracketLsContext(_ctx, getState());
		enterRule(_localctx, 614, RULE_syntaxBracketLs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2439);
			match(LS_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxBracketRsContext extends ParserRuleContext {
		public TerminalNode RS_BRACKET() { return getToken(CqlParser.RS_BRACKET, 0); }
		public SyntaxBracketRsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxBracketRs; }
	}

	public final SyntaxBracketRsContext syntaxBracketRs() throws RecognitionException {
		SyntaxBracketRsContext _localctx = new SyntaxBracketRsContext(_ctx, getState());
		enterRule(_localctx, 616, RULE_syntaxBracketRs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2441);
			match(RS_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxCommaContext extends ParserRuleContext {
		public TerminalNode COMMA() { return getToken(CqlParser.COMMA, 0); }
		public SyntaxCommaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxComma; }
	}

	public final SyntaxCommaContext syntaxComma() throws RecognitionException {
		SyntaxCommaContext _localctx = new SyntaxCommaContext(_ctx, getState());
		enterRule(_localctx, 618, RULE_syntaxComma);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2443);
			match(COMMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxColonContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(CqlParser.COLON, 0); }
		public SyntaxColonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxColon; }
	}

	public final SyntaxColonContext syntaxColon() throws RecognitionException {
		SyntaxColonContext _localctx = new SyntaxColonContext(_ctx, getState());
		enterRule(_localctx, 620, RULE_syntaxColon);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2445);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxSquoteContext extends ParserRuleContext {
		public TerminalNode SQUOTE() { return getToken(CqlParser.SQUOTE, 0); }
		public SyntaxSquoteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxSquote; }
	}

	public final SyntaxSquoteContext syntaxSquote() throws RecognitionException {
		SyntaxSquoteContext _localctx = new SyntaxSquoteContext(_ctx, getState());
		enterRule(_localctx, 622, RULE_syntaxSquote);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2447);
			match(SQUOTE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxDquoteContext extends ParserRuleContext {
		public TerminalNode DQUOTE() { return getToken(CqlParser.DQUOTE, 0); }
		public SyntaxDquoteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxDquote; }
	}

	public final SyntaxDquoteContext syntaxDquote() throws RecognitionException {
		SyntaxDquoteContext _localctx = new SyntaxDquoteContext(_ctx, getState());
		enterRule(_localctx, 624, RULE_syntaxDquote);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2449);
			match(DQUOTE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxOperatorEqContext extends ParserRuleContext {
		public TerminalNode OPERATOR_EQ() { return getToken(CqlParser.OPERATOR_EQ, 0); }
		public SyntaxOperatorEqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxOperatorEq; }
	}

	public final SyntaxOperatorEqContext syntaxOperatorEq() throws RecognitionException {
		SyntaxOperatorEqContext _localctx = new SyntaxOperatorEqContext(_ctx, getState());
		enterRule(_localctx, 626, RULE_syntaxOperatorEq);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2451);
			match(OPERATOR_EQ);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxOperatorLtContext extends ParserRuleContext {
		public TerminalNode OPERATOR_LT() { return getToken(CqlParser.OPERATOR_LT, 0); }
		public SyntaxOperatorLtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxOperatorLt; }
	}

	public final SyntaxOperatorLtContext syntaxOperatorLt() throws RecognitionException {
		SyntaxOperatorLtContext _localctx = new SyntaxOperatorLtContext(_ctx, getState());
		enterRule(_localctx, 628, RULE_syntaxOperatorLt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2453);
			match(OPERATOR_LT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxOperatorGtContext extends ParserRuleContext {
		public TerminalNode OPERATOR_GT() { return getToken(CqlParser.OPERATOR_GT, 0); }
		public SyntaxOperatorGtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxOperatorGt; }
	}

	public final SyntaxOperatorGtContext syntaxOperatorGt() throws RecognitionException {
		SyntaxOperatorGtContext _localctx = new SyntaxOperatorGtContext(_ctx, getState());
		enterRule(_localctx, 630, RULE_syntaxOperatorGt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2455);
			match(OPERATOR_GT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxOperatorLteContext extends ParserRuleContext {
		public TerminalNode OPERATOR_LTE() { return getToken(CqlParser.OPERATOR_LTE, 0); }
		public SyntaxOperatorLteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxOperatorLte; }
	}

	public final SyntaxOperatorLteContext syntaxOperatorLte() throws RecognitionException {
		SyntaxOperatorLteContext _localctx = new SyntaxOperatorLteContext(_ctx, getState());
		enterRule(_localctx, 632, RULE_syntaxOperatorLte);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2457);
			match(OPERATOR_LTE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxOperatorGteContext extends ParserRuleContext {
		public TerminalNode OPERATOR_GTE() { return getToken(CqlParser.OPERATOR_GTE, 0); }
		public SyntaxOperatorGteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxOperatorGte; }
	}

	public final SyntaxOperatorGteContext syntaxOperatorGte() throws RecognitionException {
		SyntaxOperatorGteContext _localctx = new SyntaxOperatorGteContext(_ctx, getState());
		enterRule(_localctx, 634, RULE_syntaxOperatorGte);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2459);
			match(OPERATOR_GTE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u00b1\u09a0\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\4l\tl\4m\tm\4n\tn\4o\to\4p\tp\4q\tq\4r\tr\4s\ts\4t\tt\4u\tu\4v\tv\4"+
		"w\tw\4x\tx\4y\ty\4z\tz\4{\t{\4|\t|\4}\t}\4~\t~\4\177\t\177\4\u0080\t\u0080"+
		"\4\u0081\t\u0081\4\u0082\t\u0082\4\u0083\t\u0083\4\u0084\t\u0084\4\u0085"+
		"\t\u0085\4\u0086\t\u0086\4\u0087\t\u0087\4\u0088\t\u0088\4\u0089\t\u0089"+
		"\4\u008a\t\u008a\4\u008b\t\u008b\4\u008c\t\u008c\4\u008d\t\u008d\4\u008e"+
		"\t\u008e\4\u008f\t\u008f\4\u0090\t\u0090\4\u0091\t\u0091\4\u0092\t\u0092"+
		"\4\u0093\t\u0093\4\u0094\t\u0094\4\u0095\t\u0095\4\u0096\t\u0096\4\u0097"+
		"\t\u0097\4\u0098\t\u0098\4\u0099\t\u0099\4\u009a\t\u009a\4\u009b\t\u009b"+
		"\4\u009c\t\u009c\4\u009d\t\u009d\4\u009e\t\u009e\4\u009f\t\u009f\4\u00a0"+
		"\t\u00a0\4\u00a1\t\u00a1\4\u00a2\t\u00a2\4\u00a3\t\u00a3\4\u00a4\t\u00a4"+
		"\4\u00a5\t\u00a5\4\u00a6\t\u00a6\4\u00a7\t\u00a7\4\u00a8\t\u00a8\4\u00a9"+
		"\t\u00a9\4\u00aa\t\u00aa\4\u00ab\t\u00ab\4\u00ac\t\u00ac\4\u00ad\t\u00ad"+
		"\4\u00ae\t\u00ae\4\u00af\t\u00af\4\u00b0\t\u00b0\4\u00b1\t\u00b1\4\u00b2"+
		"\t\u00b2\4\u00b3\t\u00b3\4\u00b4\t\u00b4\4\u00b5\t\u00b5\4\u00b6\t\u00b6"+
		"\4\u00b7\t\u00b7\4\u00b8\t\u00b8\4\u00b9\t\u00b9\4\u00ba\t\u00ba\4\u00bb"+
		"\t\u00bb\4\u00bc\t\u00bc\4\u00bd\t\u00bd\4\u00be\t\u00be\4\u00bf\t\u00bf"+
		"\4\u00c0\t\u00c0\4\u00c1\t\u00c1\4\u00c2\t\u00c2\4\u00c3\t\u00c3\4\u00c4"+
		"\t\u00c4\4\u00c5\t\u00c5\4\u00c6\t\u00c6\4\u00c7\t\u00c7\4\u00c8\t\u00c8"+
		"\4\u00c9\t\u00c9\4\u00ca\t\u00ca\4\u00cb\t\u00cb\4\u00cc\t\u00cc\4\u00cd"+
		"\t\u00cd\4\u00ce\t\u00ce\4\u00cf\t\u00cf\4\u00d0\t\u00d0\4\u00d1\t\u00d1"+
		"\4\u00d2\t\u00d2\4\u00d3\t\u00d3\4\u00d4\t\u00d4\4\u00d5\t\u00d5\4\u00d6"+
		"\t\u00d6\4\u00d7\t\u00d7\4\u00d8\t\u00d8\4\u00d9\t\u00d9\4\u00da\t\u00da"+
		"\4\u00db\t\u00db\4\u00dc\t\u00dc\4\u00dd\t\u00dd\4\u00de\t\u00de\4\u00df"+
		"\t\u00df\4\u00e0\t\u00e0\4\u00e1\t\u00e1\4\u00e2\t\u00e2\4\u00e3\t\u00e3"+
		"\4\u00e4\t\u00e4\4\u00e5\t\u00e5\4\u00e6\t\u00e6\4\u00e7\t\u00e7\4\u00e8"+
		"\t\u00e8\4\u00e9\t\u00e9\4\u00ea\t\u00ea\4\u00eb\t\u00eb\4\u00ec\t\u00ec"+
		"\4\u00ed\t\u00ed\4\u00ee\t\u00ee\4\u00ef\t\u00ef\4\u00f0\t\u00f0\4\u00f1"+
		"\t\u00f1\4\u00f2\t\u00f2\4\u00f3\t\u00f3\4\u00f4\t\u00f4\4\u00f5\t\u00f5"+
		"\4\u00f6\t\u00f6\4\u00f7\t\u00f7\4\u00f8\t\u00f8\4\u00f9\t\u00f9\4\u00fa"+
		"\t\u00fa\4\u00fb\t\u00fb\4\u00fc\t\u00fc\4\u00fd\t\u00fd\4\u00fe\t\u00fe"+
		"\4\u00ff\t\u00ff\4\u0100\t\u0100\4\u0101\t\u0101\4\u0102\t\u0102\4\u0103"+
		"\t\u0103\4\u0104\t\u0104\4\u0105\t\u0105\4\u0106\t\u0106\4\u0107\t\u0107"+
		"\4\u0108\t\u0108\4\u0109\t\u0109\4\u010a\t\u010a\4\u010b\t\u010b\4\u010c"+
		"\t\u010c\4\u010d\t\u010d\4\u010e\t\u010e\4\u010f\t\u010f\4\u0110\t\u0110"+
		"\4\u0111\t\u0111\4\u0112\t\u0112\4\u0113\t\u0113\4\u0114\t\u0114\4\u0115"+
		"\t\u0115\4\u0116\t\u0116\4\u0117\t\u0117\4\u0118\t\u0118\4\u0119\t\u0119"+
		"\4\u011a\t\u011a\4\u011b\t\u011b\4\u011c\t\u011c\4\u011d\t\u011d\4\u011e"+
		"\t\u011e\4\u011f\t\u011f\4\u0120\t\u0120\4\u0121\t\u0121\4\u0122\t\u0122"+
		"\4\u0123\t\u0123\4\u0124\t\u0124\4\u0125\t\u0125\4\u0126\t\u0126\4\u0127"+
		"\t\u0127\4\u0128\t\u0128\4\u0129\t\u0129\4\u012a\t\u012a\4\u012b\t\u012b"+
		"\4\u012c\t\u012c\4\u012d\t\u012d\4\u012e\t\u012e\4\u012f\t\u012f\4\u0130"+
		"\t\u0130\4\u0131\t\u0131\4\u0132\t\u0132\4\u0133\t\u0133\4\u0134\t\u0134"+
		"\4\u0135\t\u0135\4\u0136\t\u0136\4\u0137\t\u0137\4\u0138\t\u0138\4\u0139"+
		"\t\u0139\4\u013a\t\u013a\4\u013b\t\u013b\4\u013c\t\u013c\4\u013d\t\u013d"+
		"\4\u013e\t\u013e\4\u013f\t\u013f\3\2\5\2\u0280\n\2\3\2\5\2\u0283\n\2\3"+
		"\2\3\2\3\3\3\3\5\3\u0289\n\3\3\3\3\3\3\3\7\3\u028e\n\3\f\3\16\3\u0291"+
		"\13\3\3\3\3\3\5\3\u0295\n\3\3\3\5\3\u0298\n\3\3\3\5\3\u029b\n\3\3\4\3"+
		"\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\5\6\u02c6\n\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3"+
		"\b\3\t\3\t\3\t\3\t\3\t\5\t\u02d7\n\t\3\t\5\t\u02da\n\t\3\n\3\n\3\n\3\n"+
		"\3\n\5\n\u02e1\n\n\3\n\3\n\3\n\5\n\u02e6\n\n\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\f\3\f\5\f\u02f1\n\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\5\f\u02fb"+
		"\n\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u030a\n\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u0315\n\r\3\r\3\r\3\r\5\r\u031a"+
		"\n\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u0323\n\r\3\16\3\16\3\16\5\16\u0328"+
		"\n\16\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u0330\n\16\3\17\3\17\3\17\5\17"+
		"\u0335\n\17\3\17\3\17\5\17\u0339\n\17\3\20\3\20\3\20\5\20\u033e\n\20\3"+
		"\20\3\20\3\20\5\20\u0343\n\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\7\21\u0350\n\21\f\21\16\21\u0353\13\21\3\22\3\22\3\22"+
		"\5\22\u0358\n\22\3\22\3\22\3\22\5\22\u035d\n\22\3\22\3\22\3\22\3\22\3"+
		"\23\3\23\3\23\3\23\5\23\u0367\n\23\3\23\3\23\3\23\5\23\u036c\n\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u0376\n\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u0382\n\23\3\24\3\24\3\24\3\24\3\24"+
		"\5\24\u0389\n\24\3\25\3\25\3\25\3\25\7\25\u038f\n\25\f\25\16\25\u0392"+
		"\13\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u039f"+
		"\n\27\3\30\3\30\3\30\5\30\u03a4\n\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\5\30\u03b0\n\30\3\31\3\31\5\31\u03b4\n\31\3\31\3\31\5"+
		"\31\u03b8\n\31\3\31\3\31\3\31\5\31\u03bd\n\31\3\31\3\31\3\31\5\31\u03c2"+
		"\n\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\33\3\33"+
		"\3\33\3\33\7\33\u03d3\n\33\f\33\16\33\u03d6\13\33\3\34\3\34\3\34\3\34"+
		"\5\34\u03dc\n\34\3\34\3\34\3\34\3\34\3\35\3\35\5\35\u03e4\n\35\3\35\3"+
		"\35\5\35\u03e8\n\35\3\35\3\35\3\35\5\35\u03ed\n\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\5\36"+
		"\u0400\n\36\3\37\3\37\3\37\3\37\3\37\7\37\u0407\n\37\f\37\16\37\u040a"+
		"\13\37\3\37\3\37\3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\7!\u0418\n!\f!\16!\u041b"+
		"\13!\3!\3!\3\"\3\"\3\"\3\"\3\"\7\"\u0424\n\"\f\"\16\"\u0427\13\"\3\"\3"+
		"\"\3#\3#\3#\3$\3$\3$\3$\3$\3$\5$\u0434\n$\3%\3%\3%\3&\3&\5&\u043b\n&\3"+
		"\'\3\'\3\'\3\'\3\'\5\'\u0442\n\'\3\'\3\'\3\'\3(\3(\3(\5(\u044a\n(\3)\3"+
		")\3)\3*\3*\3*\3*\7*\u0453\n*\f*\16*\u0456\13*\3+\3+\3+\3+\3,\3,\3,\3,"+
		"\3,\3,\3,\7,\u0463\n,\f,\16,\u0466\13,\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\5"+
		".\u0472\n.\3.\3.\3.\3/\3/\3/\3/\3/\3/\5/\u047d\n/\3\60\3\60\3\60\3\61"+
		"\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\64\3\64\3\64"+
		"\3\64\7\64\u0492\n\64\f\64\16\64\u0495\13\64\3\65\3\65\3\65\3\66\3\66"+
		"\3\66\3\66\3\66\3\66\7\66\u04a0\n\66\f\66\16\66\u04a3\13\66\3\67\3\67"+
		"\3\67\3\67\5\67\u04a9\n\67\38\38\38\38\38\78\u04b0\n8\f8\168\u04b3\13"+
		"8\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\59\u04c5\n9\3:\3:\3"+
		":\3:\3:\3:\5:\u04cd\n:\3:\3:\3:\3:\5:\u04d3\n:\3;\3;\3;\5;\u04d8\n;\3"+
		";\3;\3<\3<\3<\5<\u04df\n<\3<\3<\3<\5<\u04e4\n<\3<\3<\3=\3=\3=\3=\5=\u04ec"+
		"\n=\3=\3=\3=\5=\u04f1\n=\3=\3=\3>\3>\3>\5>\u04f8\n>\3>\3>\3>\5>\u04fd"+
		"\n>\3>\3>\3?\3?\3?\5?\u0504\n?\3?\3?\3?\5?\u0509\n?\3?\3?\3@\3@\3@\5@"+
		"\u0510\n@\3@\3@\3@\3@\3@\5@\u0517\n@\3@\3@\3A\3A\3A\5A\u051e\nA\3A\3A"+
		"\3B\3B\3B\5B\u0525\nB\3B\3B\3B\5B\u052a\nB\3B\3B\3C\3C\3C\5C\u0531\nC"+
		"\3C\3C\3D\3D\3D\5D\u0538\nD\3D\3D\3D\5D\u053d\nD\3D\3D\3E\3E\3E\5E\u0544"+
		"\nE\3E\3E\3E\5E\u0549\nE\3E\3E\3E\3E\3E\5E\u0550\nE\3F\3F\5F\u0554\nF"+
		"\3F\5F\u0557\nF\3G\3G\3G\3G\3G\3G\5G\u055f\nG\3G\3G\3H\3H\3H\3H\7H\u0567"+
		"\nH\fH\16H\u056a\13H\3I\3I\3I\3I\3I\3I\3I\3I\5I\u0574\nI\3J\3J\3K\3K\5"+
		"K\u057a\nK\3L\3L\3L\3L\3L\7L\u0581\nL\fL\16L\u0584\13L\3L\3L\3M\3M\3M"+
		"\3M\3N\3N\3O\3O\5O\u0590\nO\3P\3P\3P\3P\7P\u0596\nP\fP\16P\u0599\13P\3"+
		"P\3P\3P\5P\u059e\nP\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\5Q\u05ab\nQ\3R\3"+
		"R\3R\3S\3S\3S\3S\3S\3S\3T\3T\3T\5T\u05b9\nT\3U\3U\3V\3V\3V\3V\3W\3W\3"+
		"W\3W\3W\3W\3X\3X\3X\3X\7X\u05cb\nX\fX\16X\u05ce\13X\3Y\3Y\3Y\3Y\7Y\u05d4"+
		"\nY\fY\16Y\u05d7\13Y\3Z\3Z\3[\3[\3\\\3\\\3\\\3]\3]\5]\u05e2\n]\3]\3]\5"+
		"]\u05e6\n]\3^\3^\5^\u05ea\n^\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\5_\u05f8"+
		"\n_\3`\3`\3`\3`\7`\u05fe\n`\f`\16`\u0601\13`\3a\3a\3a\3a\3a\3a\5a\u0609"+
		"\na\3b\3b\3b\3b\3c\3c\3c\3d\3d\5d\u0614\nd\3d\3d\3d\5d\u0619\nd\3d\3d"+
		"\3e\3e\3e\5e\u0620\ne\3e\5e\u0623\ne\3e\3e\3e\3e\5e\u0629\ne\3e\3e\3e"+
		"\3e\3e\3f\3f\5f\u0632\nf\3g\3g\3g\3g\5g\u0638\ng\3h\3h\3h\3h\3h\3i\3i"+
		"\3i\3i\3i\3j\3j\3j\3j\3j\3k\5k\u064a\nk\3k\3k\5k\u064e\nk\3k\3k\5k\u0652"+
		"\nk\3k\3k\3k\5k\u0657\nk\3l\3l\3l\3l\7l\u065d\nl\fl\16l\u0660\13l\3m\3"+
		"m\3m\3m\3m\5m\u0667\nm\3m\3m\5m\u066b\nm\3n\5n\u066e\nn\3n\3n\3n\3n\5"+
		"n\u0674\nn\3n\3n\5n\u0678\nn\3n\3n\3n\3n\3n\5n\u067f\nn\3o\3o\3o\3p\3"+
		"p\3p\3p\7p\u0688\np\fp\16p\u068b\13p\3q\3q\3q\3q\3r\3r\3r\3r\7r\u0695"+
		"\nr\fr\16r\u0698\13r\3s\3s\3s\3s\3s\3s\5s\u06a0\ns\3s\3s\3s\3s\3s\3s\3"+
		"s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3"+
		"s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\3s\5s\u06cf\ns\3t\3t\3t\3"+
		"t\3t\7t\u06d6\nt\ft\16t\u06d9\13t\3t\3t\3u\3u\3u\3u\3u\3u\3u\3u\3u\7u"+
		"\u06e6\nu\fu\16u\u06e9\13u\3u\3u\3v\3v\3v\3v\3v\7v\u06f2\nv\fv\16v\u06f5"+
		"\13v\3v\3v\3w\3w\5w\u06fb\nw\3w\3w\3w\3w\3w\3w\5w\u0703\nw\3w\3w\3w\3"+
		"w\3w\5w\u070a\nw\3w\5w\u070d\nw\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\3"+
		"x\3x\3x\3x\5x\u071f\nx\3y\3y\3y\3z\3z\3z\3{\3{\3{\3|\3|\3|\3|\3}\3}\3"+
		"}\3~\3~\3~\3~\3~\3\177\3\177\3\177\3\177\3\u0080\3\u0080\3\u0080\3\u0080"+
		"\7\u0080\u073e\n\u0080\f\u0080\16\u0080\u0741\13\u0080\3\u0081\3\u0081"+
		"\3\u0081\3\u0081\5\u0081\u0747\n\u0081\3\u0081\3\u0081\3\u0081\3\u0081"+
		"\3\u0081\5\u0081\u074e\n\u0081\7\u0081\u0750\n\u0081\f\u0081\16\u0081"+
		"\u0753\13\u0081\3\u0082\3\u0082\5\u0082\u0757\n\u0082\3\u0082\3\u0082"+
		"\3\u0082\5\u0082\u075c\n\u0082\3\u0082\5\u0082\u075f\n\u0082\3\u0082\5"+
		"\u0082\u0762\n\u0082\3\u0082\5\u0082\u0765\n\u0082\3\u0083\3\u0083\3\u0083"+
		"\3\u0084\3\u0084\3\u0084\3\u0084\5\u0084\u076e\n\u0084\3\u0085\3\u0085"+
		"\3\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u0776\n\u0085\3\u0086\3\u0086"+
		"\3\u0086\3\u0087\3\u0087\3\u0087\5\u0087\u077e\n\u0087\3\u0088\3\u0088"+
		"\3\u0088\3\u0089\3\u0089\3\u0089\3\u0089\3\u0089\7\u0089\u0788\n\u0089"+
		"\f\u0089\16\u0089\u078b\13\u0089\3\u0089\5\u0089\u078e\n\u0089\3\u008a"+
		"\3\u008a\3\u008a\3\u008a\3\u008a\5\u008a\u0795\n\u008a\3\u008a\3\u008a"+
		"\3\u008a\3\u008a\5\u008a\u079b\n\u008a\5\u008a\u079d\n\u008a\3\u008b\3"+
		"\u008b\3\u008b\3\u008b\7\u008b\u07a3\n\u008b\f\u008b\16\u008b\u07a6\13"+
		"\u008b\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c\5\u008c\u07ae\n"+
		"\u008c\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c"+
		"\5\u008c\u07b8\n\u008c\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c"+
		"\3\u008c\3\u008c\5\u008c\u07c2\n\u008c\3\u008c\3\u008c\3\u008c\3\u008c"+
		"\3\u008c\3\u008c\5\u008c\u07ca\n\u008c\3\u008c\3\u008c\3\u008c\3\u008c"+
		"\5\u008c\u07d0\n\u008c\3\u008d\3\u008d\3\u008d\3\u008d\3\u008e\3\u008e"+
		"\3\u008e\3\u008e\3\u008f\3\u008f\3\u008f\3\u008f\3\u008f\3\u008f\3\u008f"+
		"\5\u008f\u07e1\n\u008f\3\u008f\5\u008f\u07e4\n\u008f\3\u0090\3\u0090\3"+
		"\u0090\5\u0090\u07e9\n\u0090\3\u0090\3\u0090\3\u0090\3\u0090\5\u0090\u07ef"+
		"\n\u0090\7\u0090\u07f1\n\u0090\f\u0090\16\u0090\u07f4\13\u0090\3\u0091"+
		"\3\u0091\3\u0091\3\u0091\3\u0091\3\u0091\5\u0091\u07fc\n\u0091\3\u0092"+
		"\3\u0092\3\u0093\3\u0093\3\u0094\3\u0094\3\u0095\3\u0095\3\u0096\3\u0096"+
		"\3\u0097\3\u0097\3\u0098\3\u0098\3\u0098\3\u0098\5\u0098\u080e\n\u0098"+
		"\3\u0099\3\u0099\3\u0099\3\u0099\5\u0099\u0814\n\u0099\3\u009a\3\u009a"+
		"\3\u009a\3\u009a\5\u009a\u081a\n\u009a\3\u009b\3\u009b\3\u009b\3\u009b"+
		"\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b"+
		"\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b"+
		"\3\u009b\3\u009b\3\u009b\3\u009b\5\u009b\u0836\n\u009b\3\u009c\3\u009c"+
		"\5\u009c\u083a\n\u009c\3\u009d\3\u009d\3\u009e\3\u009e\3\u009f\3\u009f"+
		"\3\u00a0\3\u00a0\3\u00a1\3\u00a1\3\u00a2\3\u00a2\3\u00a3\3\u00a3\3\u00a4"+
		"\3\u00a4\3\u00a5\3\u00a5\3\u00a6\3\u00a6\3\u00a7\3\u00a7\3\u00a8\3\u00a8"+
		"\3\u00a8\3\u00a9\3\u00a9\3\u00aa\3\u00aa\3\u00ab\3\u00ab\3\u00ac\3\u00ac"+
		"\3\u00ad\3\u00ad\3\u00ad\3\u00ae\3\u00ae\3\u00af\3\u00af\3\u00af\3\u00b0"+
		"\3\u00b0\3\u00b1\3\u00b1\3\u00b2\3\u00b2\3\u00b3\3\u00b3\3\u00b4\3\u00b4"+
		"\3\u00b5\3\u00b5\3\u00b6\3\u00b6\3\u00b7\3\u00b7\3\u00b8\3\u00b8\3\u00b9"+
		"\3\u00b9\3\u00ba\3\u00ba\3\u00bb\3\u00bb\3\u00bc\3\u00bc\3\u00bd\3\u00bd"+
		"\3\u00bd\3\u00be\3\u00be\3\u00bf\3\u00bf\3\u00c0\3\u00c0\3\u00c1\3\u00c1"+
		"\3\u00c2\3\u00c2\3\u00c3\3\u00c3\3\u00c4\3\u00c4\3\u00c5\3\u00c5\3\u00c6"+
		"\3\u00c6\3\u00c7\3\u00c7\3\u00c8\3\u00c8\3\u00c9\3\u00c9\3\u00ca\3\u00ca"+
		"\3\u00cb\3\u00cb\3\u00cc\3\u00cc\3\u00cd\3\u00cd\3\u00ce\3\u00ce\3\u00cf"+
		"\3\u00cf\3\u00d0\3\u00d0\3\u00d1\3\u00d1\3\u00d2\3\u00d2\3\u00d3\3\u00d3"+
		"\3\u00d4\3\u00d4\3\u00d5\3\u00d5\3\u00d6\3\u00d6\3\u00d7\3\u00d7\3\u00d8"+
		"\3\u00d8\3\u00d9\3\u00d9\3\u00da\3\u00da\3\u00db\3\u00db\3\u00dc\3\u00dc"+
		"\3\u00dd\3\u00dd\3\u00de\3\u00de\3\u00df\3\u00df\3\u00e0\3\u00e0\3\u00e1"+
		"\3\u00e1\3\u00e2\3\u00e2\3\u00e3\3\u00e3\3\u00e4\3\u00e4\3\u00e5\3\u00e5"+
		"\3\u00e6\3\u00e6\3\u00e7\3\u00e7\3\u00e8\3\u00e8\3\u00e9\3\u00e9\3\u00ea"+
		"\3\u00ea\3\u00eb\3\u00eb\3\u00eb\3\u00ec\3\u00ec\3\u00ed\3\u00ed\3\u00ee"+
		"\3\u00ee\3\u00ef\3\u00ef\3\u00f0\3\u00f0\3\u00f1\3\u00f1\3\u00f2\3\u00f2"+
		"\3\u00f3\3\u00f3\3\u00f4\3\u00f4\3\u00f5\3\u00f5\3\u00f6\3\u00f6\3\u00f7"+
		"\3\u00f7\3\u00f8\3\u00f8\3\u00f9\3\u00f9\3\u00fa\3\u00fa\3\u00fb\3\u00fb"+
		"\3\u00fc\3\u00fc\3\u00fd\3\u00fd\3\u00fe\3\u00fe\3\u00ff\3\u00ff\3\u0100"+
		"\3\u0100\3\u0101\3\u0101\3\u0102\3\u0102\3\u0103\3\u0103\3\u0104\3\u0104"+
		"\3\u0105\3\u0105\3\u0106\3\u0106\3\u0107\3\u0107\3\u0108\3\u0108\3\u0109"+
		"\3\u0109\3\u010a\3\u010a\3\u010b\3\u010b\3\u010c\3\u010c\3\u010d\3\u010d"+
		"\3\u010e\3\u010e\3\u010f\3\u010f\3\u0110\3\u0110\3\u0111\3\u0111\3\u0112"+
		"\3\u0112\3\u0113\3\u0113\3\u0114\3\u0114\3\u0115\3\u0115\3\u0116\3\u0116"+
		"\3\u0116\3\u0117\3\u0117\3\u0118\3\u0118\3\u0119\3\u0119\3\u0119\3\u011a"+
		"\3\u011a\3\u011a\3\u011b\3\u011b\3\u011c\3\u011c\3\u011c\3\u011d\3\u011d"+
		"\3\u011e\3\u011e\3\u011f\3\u011f\3\u0120\3\u0120\3\u0121\3\u0121\3\u0122"+
		"\3\u0122\3\u0122\3\u0123\3\u0123\3\u0124\3\u0124\3\u0125\3\u0125\3\u0126"+
		"\3\u0126\3\u0127\3\u0127\3\u0127\3\u0127\3\u0127\7\u0127\u095f\n\u0127"+
		"\f\u0127\16\u0127\u0962\13\u0127\3\u0127\3\u0127\3\u0128\3\u0128\3\u0128"+
		"\3\u0128\3\u0128\3\u0128\3\u0129\3\u0129\3\u0129\3\u0129\3\u012a\3\u012a"+
		"\3\u012a\3\u012a\3\u012b\3\u012b\3\u012b\3\u012b\3\u012c\3\u012c\3\u012d"+
		"\3\u012d\3\u012e\3\u012e\3\u012f\3\u012f\3\u0130\3\u0130\3\u0131\3\u0131"+
		"\3\u0132\3\u0132\3\u0133\3\u0133\3\u0134\3\u0134\3\u0135\3\u0135\3\u0136"+
		"\3\u0136\3\u0137\3\u0137\3\u0138\3\u0138\3\u0139\3\u0139\3\u013a\3\u013a"+
		"\3\u013b\3\u013b\3\u013c\3\u013c\3\u013d\3\u013d\3\u013e\3\u013e\3\u013f"+
		"\3\u013f\3\u013f\2\2\u0140\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$"+
		"&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084"+
		"\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c"+
		"\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4"+
		"\u00b6\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc"+
		"\u00ce\u00d0\u00d2\u00d4\u00d6\u00d8\u00da\u00dc\u00de\u00e0\u00e2\u00e4"+
		"\u00e6\u00e8\u00ea\u00ec\u00ee\u00f0\u00f2\u00f4\u00f6\u00f8\u00fa\u00fc"+
		"\u00fe\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114"+
		"\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c"+
		"\u012e\u0130\u0132\u0134\u0136\u0138\u013a\u013c\u013e\u0140\u0142\u0144"+
		"\u0146\u0148\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a\u015c"+
		"\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172\u0174"+
		"\u0176\u0178\u017a\u017c\u017e\u0180\u0182\u0184\u0186\u0188\u018a\u018c"+
		"\u018e\u0190\u0192\u0194\u0196\u0198\u019a\u019c\u019e\u01a0\u01a2\u01a4"+
		"\u01a6\u01a8\u01aa\u01ac\u01ae\u01b0\u01b2\u01b4\u01b6\u01b8\u01ba\u01bc"+
		"\u01be\u01c0\u01c2\u01c4\u01c6\u01c8\u01ca\u01cc\u01ce\u01d0\u01d2\u01d4"+
		"\u01d6\u01d8\u01da\u01dc\u01de\u01e0\u01e2\u01e4\u01e6\u01e8\u01ea\u01ec"+
		"\u01ee\u01f0\u01f2\u01f4\u01f6\u01f8\u01fa\u01fc\u01fe\u0200\u0202\u0204"+
		"\u0206\u0208\u020a\u020c\u020e\u0210\u0212\u0214\u0216\u0218\u021a\u021c"+
		"\u021e\u0220\u0222\u0224\u0226\u0228\u022a\u022c\u022e\u0230\u0232\u0234"+
		"\u0236\u0238\u023a\u023c\u023e\u0240\u0242\u0244\u0246\u0248\u024a\u024c"+
		"\u024e\u0250\u0252\u0254\u0256\u0258\u025a\u025c\u025e\u0260\u0262\u0264"+
		"\u0266\u0268\u026a\u026c\u026e\u0270\u0272\u0274\u0276\u0278\u027a\u027c"+
		"\2\5\4\2\26\26\30\30\3\2\u00a7\u00a8\4\299~~\2\u098b\2\u027f\3\2\2\2\4"+
		"\u028f\3\2\2\2\6\u029c\3\2\2\2\b\u029e\3\2\2\2\n\u02c5\3\2\2\2\f\u02c7"+
		"\3\2\2\2\16\u02ce\3\2\2\2\20\u02d1\3\2\2\2\22\u02db\3\2\2\2\24\u02e7\3"+
		"\2\2\2\26\u02fa\3\2\2\2\30\u0322\3\2\2\2\32\u0324\3\2\2\2\34\u0331\3\2"+
		"\2\2\36\u033a\3\2\2\2 \u0349\3\2\2\2\"\u0354\3\2\2\2$\u0362\3\2\2\2&\u0383"+
		"\3\2\2\2(\u038a\3\2\2\2*\u0393\3\2\2\2,\u039e\3\2\2\2.\u03a0\3\2\2\2\60"+
		"\u03b1\3\2\2\2\62\u03cc\3\2\2\2\64\u03ce\3\2\2\2\66\u03db\3\2\2\28\u03e1"+
		"\3\2\2\2:\u03ff\3\2\2\2<\u0401\3\2\2\2>\u040d\3\2\2\2@\u0411\3\2\2\2B"+
		"\u041e\3\2\2\2D\u042a\3\2\2\2F\u042d\3\2\2\2H\u0435\3\2\2\2J\u043a\3\2"+
		"\2\2L\u043c\3\2\2\2N\u0449\3\2\2\2P\u044b\3\2\2\2R\u044e\3\2\2\2T\u0457"+
		"\3\2\2\2V\u045b\3\2\2\2X\u0467\3\2\2\2Z\u046c\3\2\2\2\\\u047c\3\2\2\2"+
		"^\u047e\3\2\2\2`\u0481\3\2\2\2b\u0486\3\2\2\2d\u048a\3\2\2\2f\u048d\3"+
		"\2\2\2h\u0496\3\2\2\2j\u0499\3\2\2\2l\u04a4\3\2\2\2n\u04aa\3\2\2\2p\u04c4"+
		"\3\2\2\2r\u04c6\3\2\2\2t\u04d4\3\2\2\2v\u04db\3\2\2\2x\u04e7\3\2\2\2z"+
		"\u04f4\3\2\2\2|\u0500\3\2\2\2~\u050c\3\2\2\2\u0080\u051a\3\2\2\2\u0082"+
		"\u0521\3\2\2\2\u0084\u052d\3\2\2\2\u0086\u0534\3\2\2\2\u0088\u0540\3\2"+
		"\2\2\u008a\u0551\3\2\2\2\u008c\u0558\3\2\2\2\u008e\u0562\3\2\2\2\u0090"+
		"\u0573\3\2\2\2\u0092\u0575\3\2\2\2\u0094\u0579\3\2\2\2\u0096\u057b\3\2"+
		"\2\2\u0098\u0587\3\2\2\2\u009a\u058b\3\2\2\2\u009c\u058f\3\2\2\2\u009e"+
		"\u0591\3\2\2\2\u00a0\u05aa\3\2\2\2\u00a2\u05ac\3\2\2\2\u00a4\u05af\3\2"+
		"\2\2\u00a6\u05b8\3\2\2\2\u00a8\u05ba\3\2\2\2\u00aa\u05bc\3\2\2\2\u00ac"+
		"\u05c0\3\2\2\2\u00ae\u05c6\3\2\2\2\u00b0\u05cf\3\2\2\2\u00b2\u05d8\3\2"+
		"\2\2\u00b4\u05da\3\2\2\2\u00b6\u05dc\3\2\2\2\u00b8\u05df\3\2\2\2\u00ba"+
		"\u05e9\3\2\2\2\u00bc\u05eb\3\2\2\2\u00be\u05f9\3\2\2\2\u00c0\u0608\3\2"+
		"\2\2\u00c2\u060a\3\2\2\2\u00c4\u060e\3\2\2\2\u00c6\u0611\3\2\2\2\u00c8"+
		"\u061c\3\2\2\2\u00ca\u0631\3\2\2\2\u00cc\u0637\3\2\2\2\u00ce\u0639\3\2"+
		"\2\2\u00d0\u063e\3\2\2\2\u00d2\u0643\3\2\2\2\u00d4\u0649\3\2\2\2\u00d6"+
		"\u0658\3\2\2\2\u00d8\u066a\3\2\2\2\u00da\u066d\3\2\2\2\u00dc\u0680\3\2"+
		"\2\2\u00de\u0683\3\2\2\2\u00e0\u068c\3\2\2\2\u00e2\u0690\3\2\2\2\u00e4"+
		"\u06ce\3\2\2\2\u00e6\u06d0\3\2\2\2\u00e8\u06dc\3\2\2\2\u00ea\u06ec\3\2"+
		"\2\2\u00ec\u06fa\3\2\2\2\u00ee\u071e\3\2\2\2\u00f0\u0720\3\2\2\2\u00f2"+
		"\u0723\3\2\2\2\u00f4\u0726\3\2\2\2\u00f6\u0729\3\2\2\2\u00f8\u072d\3\2"+
		"\2\2\u00fa\u0730\3\2\2\2\u00fc\u0735\3\2\2\2\u00fe\u0739\3\2\2\2\u0100"+
		"\u0746\3\2\2\2\u0102\u0754\3\2\2\2\u0104\u0766\3\2\2\2\u0106\u076d\3\2"+
		"\2\2\u0108\u0775\3\2\2\2\u010a\u0777\3\2\2\2\u010c\u077a\3\2\2\2\u010e"+
		"\u077f\3\2\2\2\u0110\u078d\3\2\2\2\u0112\u079c\3\2\2\2\u0114\u079e\3\2"+
		"\2\2\u0116\u07cf\3\2\2\2\u0118\u07d1\3\2\2\2\u011a\u07d5\3\2\2\2\u011c"+
		"\u07e3\3\2\2\2\u011e\u07e8\3\2\2\2\u0120\u07fb\3\2\2\2\u0122\u07fd\3\2"+
		"\2\2\u0124\u07ff\3\2\2\2\u0126\u0801\3\2\2\2\u0128\u0803\3\2\2\2\u012a"+
		"\u0805\3\2\2\2\u012c\u0807\3\2\2\2\u012e\u080d\3\2\2\2\u0130\u0813\3\2"+
		"\2\2\u0132\u0819\3\2\2\2\u0134\u0835\3\2\2\2\u0136\u0839\3\2\2\2\u0138"+
		"\u083b\3\2\2\2\u013a\u083d\3\2\2\2\u013c\u083f\3\2\2\2\u013e\u0841\3\2"+
		"\2\2\u0140\u0843\3\2\2\2\u0142\u0845\3\2\2\2\u0144\u0847\3\2\2\2\u0146"+
		"\u0849\3\2\2\2\u0148\u084b\3\2\2\2\u014a\u084d\3\2\2\2\u014c\u084f\3\2"+
		"\2\2\u014e\u0851\3\2\2\2\u0150\u0854\3\2\2\2\u0152\u0856\3\2\2\2\u0154"+
		"\u0858\3\2\2\2\u0156\u085a\3\2\2\2\u0158\u085c\3\2\2\2\u015a\u085f\3\2"+
		"\2\2\u015c\u0861\3\2\2\2\u015e\u0864\3\2\2\2\u0160\u0866\3\2\2\2\u0162"+
		"\u0868\3\2\2\2\u0164\u086a\3\2\2\2\u0166\u086c\3\2\2\2\u0168\u086e\3\2"+
		"\2\2\u016a\u0870\3\2\2\2\u016c\u0872\3\2\2\2\u016e\u0874\3\2\2\2\u0170"+
		"\u0876\3\2\2\2\u0172\u0878\3\2\2\2\u0174\u087a\3\2\2\2\u0176\u087c\3\2"+
		"\2\2\u0178\u087e\3\2\2\2\u017a\u0881\3\2\2\2\u017c\u0883\3\2\2\2\u017e"+
		"\u0885\3\2\2\2\u0180\u0887\3\2\2\2\u0182\u0889\3\2\2\2\u0184\u088b\3\2"+
		"\2\2\u0186\u088d\3\2\2\2\u0188\u088f\3\2\2\2\u018a\u0891\3\2\2\2\u018c"+
		"\u0893\3\2\2\2\u018e\u0895\3\2\2\2\u0190\u0897\3\2\2\2\u0192\u0899\3\2"+
		"\2\2\u0194\u089b\3\2\2\2\u0196\u089d\3\2\2\2\u0198\u089f\3\2\2\2\u019a"+
		"\u08a1\3\2\2\2\u019c\u08a3\3\2\2\2\u019e\u08a5\3\2\2\2\u01a0\u08a7\3\2"+
		"\2\2\u01a2\u08a9\3\2\2\2\u01a4\u08ab\3\2\2\2\u01a6\u08ad\3\2\2\2\u01a8"+
		"\u08af\3\2\2\2\u01aa\u08b1\3\2\2\2\u01ac\u08b3\3\2\2\2\u01ae\u08b5\3\2"+
		"\2\2\u01b0\u08b7\3\2\2\2\u01b2\u08b9\3\2\2\2\u01b4\u08bb\3\2\2\2\u01b6"+
		"\u08bd\3\2\2\2\u01b8\u08bf\3\2\2\2\u01ba\u08c1\3\2\2\2\u01bc\u08c3\3\2"+
		"\2\2\u01be\u08c5\3\2\2\2\u01c0\u08c7\3\2\2\2\u01c2\u08c9\3\2\2\2\u01c4"+
		"\u08cb\3\2\2\2\u01c6\u08cd\3\2\2\2\u01c8\u08cf\3\2\2\2\u01ca\u08d1\3\2"+
		"\2\2\u01cc\u08d3\3\2\2\2\u01ce\u08d5\3\2\2\2\u01d0\u08d7\3\2\2\2\u01d2"+
		"\u08d9\3\2\2\2\u01d4\u08db\3\2\2\2\u01d6\u08de\3\2\2\2\u01d8\u08e0\3\2"+
		"\2\2\u01da\u08e2\3\2\2\2\u01dc\u08e4\3\2\2\2\u01de\u08e6\3\2\2\2\u01e0"+
		"\u08e8\3\2\2\2\u01e2\u08ea\3\2\2\2\u01e4\u08ec\3\2\2\2\u01e6\u08ee\3\2"+
		"\2\2\u01e8\u08f0\3\2\2\2\u01ea\u08f2\3\2\2\2\u01ec\u08f4\3\2\2\2\u01ee"+
		"\u08f6\3\2\2\2\u01f0\u08f8\3\2\2\2\u01f2\u08fa\3\2\2\2\u01f4\u08fc\3\2"+
		"\2\2\u01f6\u08fe\3\2\2\2\u01f8\u0900\3\2\2\2\u01fa\u0902\3\2\2\2\u01fc"+
		"\u0904\3\2\2\2\u01fe\u0906\3\2\2\2\u0200\u0908\3\2\2\2\u0202\u090a\3\2"+
		"\2\2\u0204\u090c\3\2\2\2\u0206\u090e\3\2\2\2\u0208\u0910\3\2\2\2\u020a"+
		"\u0912\3\2\2\2\u020c\u0914\3\2\2\2\u020e\u0916\3\2\2\2\u0210\u0918\3\2"+
		"\2\2\u0212\u091a\3\2\2\2\u0214\u091c\3\2\2\2\u0216\u091e\3\2\2\2\u0218"+
		"\u0920\3\2\2\2\u021a\u0922\3\2\2\2\u021c\u0924\3\2\2\2\u021e\u0926\3\2"+
		"\2\2\u0220\u0928\3\2\2\2\u0222\u092a\3\2\2\2\u0224\u092c\3\2\2\2\u0226"+
		"\u092e\3\2\2\2\u0228\u0930\3\2\2\2\u022a\u0932\3\2\2\2\u022c\u0935\3\2"+
		"\2\2\u022e\u0937\3\2\2\2\u0230\u0939\3\2\2\2\u0232\u093c\3\2\2\2\u0234"+
		"\u093f\3\2\2\2\u0236\u0941\3\2\2\2\u0238\u0944\3\2\2\2\u023a\u0946\3\2"+
		"\2\2\u023c\u0948\3\2\2\2\u023e\u094a\3\2\2\2\u0240\u094c\3\2\2\2\u0242"+
		"\u094e\3\2\2\2\u0244\u0951\3\2\2\2\u0246\u0953\3\2\2\2\u0248\u0955\3\2"+
		"\2\2\u024a\u0957\3\2\2\2\u024c\u0959\3\2\2\2\u024e\u0965\3\2\2\2\u0250"+
		"\u096b\3\2\2\2\u0252\u096f\3\2\2\2\u0254\u0973\3\2\2\2\u0256\u0977\3\2"+
		"\2\2\u0258\u0979\3\2\2\2\u025a\u097b\3\2\2\2\u025c\u097d\3\2\2\2\u025e"+
		"\u097f\3\2\2\2\u0260\u0981\3\2\2\2\u0262\u0983\3\2\2\2\u0264\u0985\3\2"+
		"\2\2\u0266\u0987\3\2\2\2\u0268\u0989\3\2\2\2\u026a\u098b\3\2\2\2\u026c"+
		"\u098d\3\2\2\2\u026e\u098f\3\2\2\2\u0270\u0991\3\2\2\2\u0272\u0993\3\2"+
		"\2\2\u0274\u0995\3\2\2\2\u0276\u0997\3\2\2\2\u0278\u0999\3\2\2\2\u027a"+
		"\u099b\3\2\2\2\u027c\u099d\3\2\2\2\u027e\u0280\5\4\3\2\u027f\u027e\3\2"+
		"\2\2\u027f\u0280\3\2\2\2\u0280\u0282\3\2\2\2\u0281\u0283\7\27\2\2\u0282"+
		"\u0281\3\2\2\2\u0282\u0283\3\2\2\2\u0283\u0284\3\2\2\2\u0284\u0285\5\u025a"+
		"\u012e\2\u0285\3\3\2\2\2\u0286\u0288\5\n\6\2\u0287\u0289\7\27\2\2\u0288"+
		"\u0287\3\2\2\2\u0288\u0289\3\2\2\2\u0289\u028a\3\2\2\2\u028a\u028b\5\6"+
		"\4\2\u028b\u028e\3\2\2\2\u028c\u028e\5\b\5\2\u028d\u0286\3\2\2\2\u028d"+
		"\u028c\3\2\2\2\u028e\u0291\3\2\2\2\u028f\u028d\3\2\2\2\u028f\u0290\3\2"+
		"\2\2\u0290\u029a\3\2\2\2\u0291\u028f\3\2\2\2\u0292\u0297\5\n\6\2\u0293"+
		"\u0295\7\27\2\2\u0294\u0293\3\2\2\2\u0294\u0295\3\2\2\2\u0295\u0296\3"+
		"\2\2\2\u0296\u0298\5\6\4\2\u0297\u0294\3\2\2\2\u0297\u0298\3\2\2\2\u0298"+
		"\u029b\3\2\2\2\u0299\u029b\5\b\5\2\u029a\u0292\3\2\2\2\u029a\u0299\3\2"+
		"\2\2\u029b\5\3\2\2\2\u029c\u029d\7\n\2\2\u029d\7\3\2\2\2\u029e\u029f\5"+
		"\6\4\2\u029f\t\3\2\2\2\u02a0\u02c6\5\u00bc_\2\u02a1\u02c6\5r:\2\u02a2"+
		"\u02c6\5l\67\2\u02a3\u02c6\5Z.\2\u02a4\u02c6\5L\'\2\u02a5\u02c6\5F$\2"+
		"\u02a6\u02c6\5\u00b6\\\2\u02a7\u02c6\58\35\2\u02a8\u02c6\5\60\31\2\u02a9"+
		"\u02c6\5\u00c8e\2\u02aa\u02c6\5.\30\2\u02ab\u02c6\5$\23\2\u02ac\u02c6"+
		"\5\34\17\2\u02ad\u02c6\5\u0088E\2\u02ae\u02c6\5\"\22\2\u02af\u02c6\5\36"+
		"\20\2\u02b0\u02c6\5\32\16\2\u02b1\u02c6\5\u00d4k\2\u02b2\u02c6\5z>\2\u02b3"+
		"\u02c6\5|?\2\u02b4\u02c6\5\u0086D\2\u02b5\u02c6\5\u0084C\2\u02b6\u02c6"+
		"\5x=\2\u02b7\u02c6\5\u0080A\2\u02b8\u02c6\5\u0082B\2\u02b9\u02c6\5~@\2"+
		"\u02ba\u02c6\5v<\2\u02bb\u02c6\5t;\2\u02bc\u02c6\5\24\13\2\u02bd\u02c6"+
		"\5\u00ecw\2\u02be\u02c6\5\22\n\2\u02bf\u02c6\5\20\t\2\u02c0\u02c6\5\f"+
		"\7\2\u02c1\u02c6\5\u0102\u0082\2\u02c2\u02c6\5\u00c6d\2\u02c3\u02c6\5"+
		"\u00dan\2\u02c4\u02c6\5\u00c4c\2\u02c5\u02a0\3\2\2\2\u02c5\u02a1\3\2\2"+
		"\2\u02c5\u02a2\3\2\2\2\u02c5\u02a3\3\2\2\2\u02c5\u02a4\3\2\2\2\u02c5\u02a5"+
		"\3\2\2\2\u02c5\u02a6\3\2\2\2\u02c5\u02a7\3\2\2\2\u02c5\u02a8\3\2\2\2\u02c5"+
		"\u02a9\3\2\2\2\u02c5\u02aa\3\2\2\2\u02c5\u02ab\3\2\2\2\u02c5\u02ac\3\2"+
		"\2\2\u02c5\u02ad\3\2\2\2\u02c5\u02ae\3\2\2\2\u02c5\u02af\3\2\2\2\u02c5"+
		"\u02b0\3\2\2\2\u02c5\u02b1\3\2\2\2\u02c5\u02b2\3\2\2\2\u02c5\u02b3\3\2"+
		"\2\2\u02c5\u02b4\3\2\2\2\u02c5\u02b5\3\2\2\2\u02c5\u02b6\3\2\2\2\u02c5"+
		"\u02b7\3\2\2\2\u02c5\u02b8\3\2\2\2\u02c5\u02b9\3\2\2\2\u02c5\u02ba\3\2"+
		"\2\2\u02c5\u02bb\3\2\2\2\u02c5\u02bc\3\2\2\2\u02c5\u02bd\3\2\2\2\u02c5"+
		"\u02be\3\2\2\2\u02c5\u02bf\3\2\2\2\u02c5\u02c0\3\2\2\2\u02c5\u02c1\3\2"+
		"\2\2\u02c5\u02c2\3\2\2\2\u02c5\u02c3\3\2\2\2\u02c5\u02c4\3\2\2\2\u02c6"+
		"\13\3\2\2\2\u02c7\u02c8\5\u0216\u010c\2\u02c8\u02c9\5\26\f\2\u02c9\u02ca"+
		"\5\u01cc\u00e7\2\u02ca\u02cb\5\30\r\2\u02cb\u02cc\5\u0192\u00ca\2\u02cc"+
		"\u02cd\5\u0138\u009d\2\u02cd\r\3\2\2\2\u02ce\u02cf\5\u01b8\u00dd\2\u02cf"+
		"\u02d0\5\u020a\u0106\2\u02d0\17\3\2\2\2\u02d1\u02d2\5\u01b8\u00dd\2\u02d2"+
		"\u02d6\5\u01e4\u00f3\2\u02d3\u02d4\5\u01ca\u00e6\2\u02d4\u02d5\5\u0138"+
		"\u009d\2\u02d5\u02d7\3\2\2\2\u02d6\u02d3\3\2\2\2\u02d6\u02d7\3\2\2\2\u02d7"+
		"\u02d9\3\2\2\2\u02d8\u02da\5\u01c4\u00e3\2\u02d9\u02d8\3\2\2\2\u02d9\u02da"+
		"\3\2\2\2\u02da\21\3\2\2\2\u02db\u02dc\5\u01b8\u00dd\2\u02dc\u02e0\5\26"+
		"\f\2\u02dd\u02de\5\u01cc\u00e7\2\u02de\u02df\5\30\r\2\u02df\u02e1\3\2"+
		"\2\2\u02e0\u02dd\3\2\2\2\u02e0\u02e1\3\2\2\2\u02e1\u02e5\3\2\2\2\u02e2"+
		"\u02e3\5\u01ca\u00e6\2\u02e3\u02e4\5\u0138\u009d\2\u02e4\u02e6\3\2\2\2"+
		"\u02e5\u02e2\3\2\2\2\u02e5\u02e6\3\2\2\2\u02e6\23\3\2\2\2\u02e7\u02e8"+
		"\5\u019a\u00ce\2\u02e8\u02e9\5\26\f\2\u02e9\u02ea\5\u01cc\u00e7\2\u02ea"+
		"\u02eb\5\30\r\2\u02eb\u02ec\5\u01f8\u00fd\2\u02ec\u02ed\5\u0138\u009d"+
		"\2\u02ed\25\3\2\2\2\u02ee\u02f1\5\u0156\u00ac\2\u02ef\u02f1\5\u0158\u00ad"+
		"\2\u02f0\u02ee\3\2\2\2\u02f0\u02ef\3\2\2\2\u02f1\u02fb\3\2\2\2\u02f2\u02fb"+
		"\5\u015e\u00b0\2\u02f3\u02fb\5\u0168\u00b5\2\u02f4\u02fb\5\u0180\u00c1"+
		"\2\u02f5\u02fb\5\u018a\u00c6\2\u02f6\u02fb\5\u017a\u00be\2\u02f7\u02fb"+
		"\5\u0184\u00c3\2\u02f8\u02fb\5\u01c0\u00e1\2\u02f9\u02fb\5\u01e6\u00f4"+
		"\2\u02fa\u02f0\3\2\2\2\u02fa\u02f2\3\2\2\2\u02fa\u02f3\3\2\2\2\u02fa\u02f4"+
		"\3\2\2\2\u02fa\u02f5\3\2\2\2\u02fa\u02f6\3\2\2\2\u02fa\u02f7\3\2\2\2\u02fa"+
		"\u02f8\3\2\2\2\u02fa\u02f9\3\2\2\2\u02fb\27\3\2\2\2\u02fc\u02fd\5\u0156"+
		"\u00ac\2\u02fd\u02fe\5\u0198\u00cd\2\u02fe\u0323\3\2\2\2\u02ff\u0300\5"+
		"\u0156\u00ac\2\u0300\u0301\5\u0198\u00cd\2\u0301\u0302\5\u019e\u00d0\2"+
		"\u0302\u0303\5\u01b0\u00d9\2\u0303\u0304\5\u012e\u0098\2\u0304\u0323\3"+
		"\2\2\2\u0305\u0309\5\u0196\u00cc\2\u0306\u0307\5\u012e\u0098\2\u0307\u0308"+
		"\7\22\2\2\u0308\u030a\3\2\2\2\u0309\u0306\3\2\2\2\u0309\u030a\3\2\2\2"+
		"\u030a\u030b\3\2\2\2\u030b\u030c\5\u0144\u00a3\2\u030c\u0323\3\2\2\2\u030d"+
		"\u030e\5\u0156\u00ac\2\u030e\u030f\5\u01b2\u00da\2\u030f\u0323\3\2\2\2"+
		"\u0310\u0311\5\u01b0\u00d9\2\u0311\u0312\5\u012e\u0098\2\u0312\u0323\3"+
		"\2\2\2\u0313\u0315\5\u01f4\u00fb\2\u0314\u0313\3\2\2\2\u0314\u0315\3\2"+
		"\2\2\u0315\u0319\3\2\2\2\u0316\u0317\5\u012e\u0098\2\u0317\u0318\7\22"+
		"\2\2\u0318\u031a\3\2\2\2\u0319\u0316\3\2\2\2\u0319\u031a\3\2\2\2\u031a"+
		"\u031b\3\2\2\2\u031b\u0323\5\u0130\u0099\2\u031c\u031d\5\u0156\u00ac\2"+
		"\u031d\u031e\5\u01e4\u00f3\2\u031e\u0323\3\2\2\2\u031f\u0320\5\u01e2\u00f2"+
		"\2\u0320\u0321\5\u0138\u009d\2\u0321\u0323\3\2\2\2\u0322\u02fc\3\2\2\2"+
		"\u0322\u02ff\3\2\2\2\u0322\u0305\3\2\2\2\u0322\u030d\3\2\2\2\u0322\u0310"+
		"\3\2\2\2\u0322\u0314\3\2\2\2\u0322\u031c\3\2\2\2\u0322\u031f\3\2\2\2\u0323"+
		"\31\3\2\2\2\u0324\u0325\5\u017a\u00be\2\u0325\u0327\5\u0208\u0105\2\u0326"+
		"\u0328\5\u00f6|\2\u0327\u0326\3\2\2\2\u0327\u0328\3\2\2\2\u0328\u0329"+
		"\3\2\2\2\u0329\u032a\5\u0148\u00a5\2\u032a\u032b\5\u0214\u010b\2\u032b"+
		"\u032c\5\u01d6\u00ec\2\u032c\u032f\5\u0128\u0095\2\u032d\u0330\5\u01f2"+
		"\u00fa\2\u032e\u0330\5\u01c2\u00e2\2\u032f\u032d\3\2\2\2\u032f\u032e\3"+
		"\2\2\2\u032f\u0330\3\2\2\2\u0330\33\3\2\2\2\u0331\u0332\5\u017a\u00be"+
		"\2\u0332\u0334\5\u01e2\u00f2\2\u0333\u0335\5\u00f6|\2\u0334\u0333\3\2"+
		"\2\2\u0334\u0335\3\2\2\2\u0335\u0336\3\2\2\2\u0336\u0338\5\u0138\u009d"+
		"\2\u0337\u0339\5n8\2\u0338\u0337\3\2\2\2\u0338\u0339\3\2\2\2\u0339\35"+
		"\3\2\2\2\u033a\u033b\5\u017a\u00be\2\u033b\u033d\5\u0200\u0101\2\u033c"+
		"\u033e\5\u00f6|\2\u033d\u033c\3\2\2\2\u033d\u033e\3\2\2\2\u033e\u0342"+
		"\3\2\2\2\u033f\u0340\5\u012e\u0098\2\u0340\u0341\7\22\2\2\u0341\u0343"+
		"\3\2\2\2\u0342\u033f\3\2\2\2\u0342\u0343\3\2\2\2\u0343\u0344\3\2\2\2\u0344"+
		"\u0345\5\u0140\u00a1\2\u0345\u0346\5\u025c\u012f\2\u0346\u0347\5 \21\2"+
		"\u0347\u0348\5\u025e\u0130\2\u0348\37\3\2\2\2\u0349\u034a\5\u0132\u009a"+
		"\2\u034a\u0351\5\u0134\u009b\2\u034b\u034c\5\u026c\u0137\2\u034c\u034d"+
		"\5\u0132\u009a\2\u034d\u034e\5\u0134\u009b\2\u034e\u0350\3\2\2\2\u034f"+
		"\u034b\3\2\2\2\u0350\u0353\3\2\2\2\u0351\u034f\3\2\2\2\u0351\u0352\3\2"+
		"\2\2\u0352!\3\2\2\2\u0353\u0351\3\2\2\2\u0354\u0355\5\u017a\u00be\2\u0355"+
		"\u0357\5\u01fa\u00fe\2\u0356\u0358\5\u00f6|\2\u0357\u0356\3\2\2\2\u0357"+
		"\u0358\3\2\2\2\u0358\u035c\3\2\2\2\u0359\u035a\5\u012e\u0098\2\u035a\u035b"+
		"\7\22\2\2\u035b\u035d\3\2\2\2\u035c\u0359\3\2\2\2\u035c\u035d\3\2\2\2"+
		"\u035d\u035e\3\2\2\2\u035e\u035f\5\u013a\u009e\2\u035f\u0360\5\u020c\u0107"+
		"\2\u0360\u0361\5\u013c\u009f\2\u0361#\3\2\2\2\u0362\u0363\5\u017a\u00be"+
		"\2\u0363\u0364\5\u01be\u00e0\2\u0364\u0366\5\u0210\u0109\2\u0365\u0367"+
		"\5\u00f6|\2\u0366\u0365\3\2\2\2\u0366\u0367\3\2\2\2\u0367\u036b\3\2\2"+
		"\2\u0368\u0369\5\u012e\u0098\2\u0369\u036a\7\22\2\2\u036a\u036c\3\2\2"+
		"\2\u036b\u0368\3\2\2\2\u036b\u036c\3\2\2\2\u036c\u036d\3\2\2\2\u036d\u036e"+
		"\5\u013e\u00a0\2\u036e\u036f\5\u0164\u00b3\2\u036f\u0370\5\u01e6\u00f4"+
		"\2\u0370\u0371\5\u00fe\u0080\2\u0371\u0375\5\u0192\u00ca\2\u0372\u0373"+
		"\5\u012e\u0098\2\u0373\u0374\7\22\2\2\u0374\u0376\3\2\2\2\u0375\u0372"+
		"\3\2\2\2\u0375\u0376\3\2\2\2\u0376\u0377\3\2\2\2\u0377\u0378\5\u0130\u0099"+
		"\2\u0378\u0379\5&\24\2\u0379\u037a\5\u01d8\u00ed\2\u037a\u037b\5\u01ac"+
		"\u00d7\2\u037b\u037c\5\u025c\u012f\2\u037c\u037d\5\u00fe\u0080\2\u037d"+
		"\u0381\5\u025e\u0130\2\u037e\u037f\5\u0214\u010b\2\u037f\u0380\5,\27\2"+
		"\u0380\u0382\3\2\2\2\u0381\u037e\3\2\2\2\u0381\u0382\3\2\2\2\u0382%\3"+
		"\2\2\2\u0383\u0384\5\u0212\u010a\2\u0384\u0388\5(\25\2\u0385\u0386\5\u0160"+
		"\u00b1\2\u0386\u0387\5\u0114\u008b\2\u0387\u0389\3\2\2\2\u0388\u0385\3"+
		"\2\2\2\u0388\u0389\3\2\2\2\u0389\'\3\2\2\2\u038a\u0390\5*\26\2\u038b\u038c"+
		"\5\u0160\u00b1\2\u038c\u038d\5*\26\2\u038d\u038f\3\2\2\2\u038e\u038b\3"+
		"\2\2\2\u038f\u0392\3\2\2\2\u0390\u038e\3\2\2\2\u0390\u0391\3\2\2\2\u0391"+
		")\3\2\2\2\u0392\u0390\3\2\2\2\u0393\u0394\5\u0132\u009a\2\u0394\u0395"+
		"\5\u01aa\u00d6\2\u0395\u0396\5\u01c6\u00e4\2\u0396\u0397\5\u01c8\u00e5"+
		"\2\u0397+\3\2\2\2\u0398\u039f\5\u008eH\2\u0399\u039a\5\u008eH\2\u039a"+
		"\u039b\5\u0160\u00b1\2\u039b\u039c\5\u008cG\2\u039c\u039f\3\2\2\2\u039d"+
		"\u039f\5\u008cG\2\u039e\u0398\3\2\2\2\u039e\u0399\3\2\2\2\u039e\u039d"+
		"\3\2\2\2\u039f-\3\2\2\2\u03a0\u03a1\5\u017a\u00be\2\u03a1\u03a3\5\u01b0"+
		"\u00d9\2\u03a2\u03a4\5\u00f6|\2\u03a3\u03a2\3\2\2\2\u03a3\u03a4\3\2\2"+
		"\2\u03a4\u03a5\3\2\2\2\u03a5\u03a6\5\u012e\u0098\2\u03a6\u03a7\5\u0214"+
		"\u010b\2\u03a7\u03a8\5\u01de\u00f0\2\u03a8\u03a9\7\u00ad\2\2\u03a9\u03aa"+
		"\5\u0260\u0131\2\u03aa\u03ab\5\u00be`\2\u03ab\u03af\5\u0262\u0132\2\u03ac"+
		"\u03ad\5\u0160\u00b1\2\u03ad\u03ae\5\u00c2b\2\u03ae\u03b0\3\2\2\2\u03af"+
		"\u03ac\3\2\2\2\u03af\u03b0\3\2\2\2\u03b0/\3\2\2\2\u03b1\u03b3\5\u017a"+
		"\u00be\2\u03b2\u03b4\5D#\2\u03b3\u03b2\3\2\2\2\u03b3\u03b4\3\2\2\2\u03b4"+
		"\u03b5\3\2\2\2\u03b5\u03b7\5\u0196\u00cc\2\u03b6\u03b8\5\u00f6|\2\u03b7"+
		"\u03b6\3\2\2\2\u03b7\u03b8\3\2\2\2\u03b8\u03bc\3\2\2\2\u03b9\u03ba\5\u012e"+
		"\u0098\2\u03ba\u03bb\7\22\2\2\u03bb\u03bd\3\2\2\2\u03bc\u03b9\3\2\2\2"+
		"\u03bc\u03bd\3\2\2\2\u03bd\u03be\3\2\2\2\u03be\u03bf\5\u0144\u00a3\2\u03bf"+
		"\u03c1\5\u025c\u012f\2\u03c0\u03c2\5\64\33\2\u03c1\u03c0\3\2\2\2\u03c1"+
		"\u03c2\3\2\2\2\u03c2\u03c3\3\2\2\2\u03c3\u03c4\5\u025e\u0130\2\u03c4\u03c5"+
		"\5\66\34\2\u03c5\u03c6\5\u01e0\u00f1\2\u03c6\u03c7\5\u0134\u009b\2\u03c7"+
		"\u03c8\5\u01b4\u00db\2\u03c8\u03c9\5\u0146\u00a4\2\u03c9\u03ca\5\u0164"+
		"\u00b3\2\u03ca\u03cb\5\62\32\2\u03cb\61\3\2\2\2\u03cc\u03cd\7\u00a5\2"+
		"\2\u03cd\63\3\2\2\2\u03ce\u03d4\5\u014e\u00a8\2\u03cf\u03d0\5\u026c\u0137"+
		"\2\u03d0\u03d1\5\u014e\u00a8\2\u03d1\u03d3\3\2\2\2\u03d2\u03cf\3\2\2\2"+
		"\u03d3\u03d6\3\2\2\2\u03d4\u03d2\3\2\2\2\u03d4\u03d5\3\2\2\2\u03d5\65"+
		"\3\2\2\2\u03d6\u03d4\3\2\2\2\u03d7\u03dc\5\u0170\u00b9\2\u03d8\u03d9\5"+
		"\u01e0\u00f1\2\u03d9\u03da\5\u01c8\u00e5\2\u03da\u03dc\3\2\2\2\u03db\u03d7"+
		"\3\2\2\2\u03db\u03d8\3\2\2\2\u03dc\u03dd\3\2\2\2\u03dd\u03de\5\u01cc\u00e7"+
		"\2\u03de\u03df\5\u01c8\u00e5\2\u03df\u03e0\5\u01a4\u00d3\2\u03e0\67\3"+
		"\2\2\2\u03e1\u03e3\5\u017a\u00be\2\u03e2\u03e4\5D#\2\u03e3\u03e2\3\2\2"+
		"\2\u03e3\u03e4\3\2\2\2\u03e4\u03e5\3\2\2\2\u03e5\u03e7\5\u0154\u00ab\2"+
		"\u03e6\u03e8\5\u00f6|\2\u03e7\u03e6\3\2\2\2\u03e7\u03e8\3\2\2\2\u03e8"+
		"\u03ec\3\2\2\2\u03e9\u03ea\5\u012e\u0098\2\u03ea\u03eb\7\22\2\2\u03eb"+
		"\u03ed\3\2\2\2\u03ec\u03e9\3\2\2\2\u03ec\u03ed\3\2\2\2\u03ed\u03ee\3\2"+
		"\2\2\u03ee\u03ef\5\u0142\u00a2\2\u03ef\u03f0\5\u025c\u012f\2\u03f0\u03f1"+
		"\5\u0134\u009b\2\u03f1\u03f2\5\u025e\u0130\2\u03f2\u03f3\5\u01ea\u00f6"+
		"\2\u03f3\u03f4\5\u0144\u00a3\2\u03f4\u03f5\5\u01f0\u00f9\2\u03f5\u03f6"+
		"\5\u0134\u009b\2\u03f6\u03f7\5\u0190\u00c9\2\u03f7\u03f8\5\u0144\u00a3"+
		"\2\u03f8\u03f9\5\u01a2\u00d2\2\u03f9\u03fa\5:\36\2\u03fa9\3\2\2\2\u03fb"+
		"\u0400\5\u0120\u0091\2\u03fc\u0400\5B\"\2\u03fd\u0400\5@!\2\u03fe\u0400"+
		"\5<\37\2\u03ff\u03fb\3\2\2\2\u03ff\u03fc\3\2\2\2\u03ff\u03fd\3\2\2\2\u03ff"+
		"\u03fe\3\2\2\2\u0400;\3\2\2\2\u0401\u0402\5\u0260\u0131\2\u0402\u0408"+
		"\5> \2\u0403\u0404\5\u026c\u0137\2\u0404\u0405\5> \2\u0405\u0407\3\2\2"+
		"\2\u0406\u0403\3\2\2\2\u0407\u040a\3\2\2\2\u0408\u0406\3\2\2\2\u0408\u0409"+
		"\3\2\2\2\u0409\u040b\3\2\2\2\u040a\u0408\3\2\2\2\u040b\u040c\5\u0262\u0132"+
		"\2\u040c=\3\2\2\2\u040d\u040e\5\u014c\u00a7\2\u040e\u040f\7\13\2\2\u040f"+
		"\u0410\5:\36\2\u0410?\3\2\2\2\u0411\u0412\5\u025c\u012f\2\u0412\u0419"+
		"\5B\"\2\u0413\u0414\5\u026c\u0137\2\u0414\u0415\5\u0120\u0091\2\u0415"+
		"\u0418\3\2\2\2\u0416\u0418\5B\"\2\u0417\u0413\3\2\2\2\u0417\u0416\3\2"+
		"\2\2\u0418\u041b\3\2\2\2\u0419\u0417\3\2\2\2\u0419\u041a\3\2\2\2\u041a"+
		"\u041c\3\2\2\2\u041b\u0419\3\2\2\2\u041c\u041d\5\u025e\u0130\2\u041dA"+
		"\3\2\2\2\u041e\u041f\5\u025c\u012f\2\u041f\u0425\5\u0120\u0091\2\u0420"+
		"\u0421\5\u026c\u0137\2\u0421\u0422\5\u0120\u0091\2\u0422\u0424\3\2\2\2"+
		"\u0423\u0420\3\2\2\2\u0424\u0427\3\2\2\2\u0425\u0423\3\2\2\2\u0425\u0426"+
		"\3\2\2\2\u0426\u0428\3\2\2\2\u0427\u0425\3\2\2\2\u0428\u0429\5\u025e\u0130"+
		"\2\u0429C\3\2\2\2\u042a\u042b\5\u01d0\u00e9\2\u042b\u042c\5\u01dc\u00ef"+
		"\2\u042cE\3\2\2\2\u042d\u042e\5\u015e\u00b0\2\u042e\u042f\5\u0208\u0105"+
		"\2\u042f\u0430\5\u0148\u00a5\2\u0430\u0431\5\u0214\u010b\2\u0431\u0433"+
		"\5H%\2\u0432\u0434\5J&\2\u0433\u0432\3\2\2\2\u0433\u0434\3\2\2\2\u0434"+
		"G\3\2\2\2\u0435\u0436\5\u01d6\u00ec\2\u0436\u0437\5\u0128\u0095\2\u0437"+
		"I\3\2\2\2\u0438\u043b\5\u01f2\u00fa\2\u0439\u043b\5\u01c2\u00e2\2\u043a"+
		"\u0438\3\2\2\2\u043a\u0439\3\2\2\2\u043bK\3\2\2\2\u043c\u043d\5\u015e"+
		"\u00b0\2\u043d\u0441\5\u0200\u0101\2\u043e\u043f\5\u012e\u0098\2\u043f"+
		"\u0440\7\22\2\2\u0440\u0442\3\2\2\2\u0441\u043e\3\2\2\2\u0441\u0442\3"+
		"\2\2\2\u0442\u0443\3\2\2\2\u0443\u0444\5\u0140\u00a1\2\u0444\u0445\5N"+
		"(\2\u0445M\3\2\2\2\u0446\u044a\5X-\2\u0447\u044a\5V,\2\u0448\u044a\5P"+
		")\2\u0449\u0446\3\2\2\2\u0449\u0447\3\2\2\2\u0449\u0448\3\2\2\2\u044a"+
		"O\3\2\2\2\u044b\u044c\5\u01da\u00ee\2\u044c\u044d\5R*\2\u044dQ\3\2\2\2"+
		"\u044e\u0454\5T+\2\u044f\u0450\5\u0160\u00b1\2\u0450\u0451\5T+\2\u0451"+
		"\u0453\3\2\2\2\u0452\u044f\3\2\2\2\u0453\u0456\3\2\2\2\u0454\u0452\3\2"+
		"\2\2\u0454\u0455\3\2\2\2\u0455S\3\2\2\2\u0456\u0454\3\2\2\2\u0457\u0458"+
		"\5\u0132\u009a\2\u0458\u0459\5\u01f8\u00fd\2\u0459\u045a\5\u0132\u009a"+
		"\2\u045aU\3\2\2\2\u045b\u045c\5\u0152\u00aa\2\u045c\u045d\5\u0132\u009a"+
		"\2\u045d\u0464\5\u0134\u009b\2\u045e\u045f\5\u026c\u0137\2\u045f\u0460"+
		"\5\u0132\u009a\2\u0460\u0461\5\u0134\u009b\2\u0461\u0463\3\2\2\2\u0462"+
		"\u045e\3\2\2\2\u0463\u0466\3\2\2\2\u0464\u0462\3\2\2\2\u0464\u0465\3\2"+
		"\2\2\u0465W\3\2\2\2\u0466\u0464\3\2\2\2\u0467\u0468\5\u015e\u00b0\2\u0468"+
		"\u0469\5\u0132\u009a\2\u0469\u046a\5\u0200\u0101\2\u046a\u046b\5\u0134"+
		"\u009b\2\u046bY\3\2\2\2\u046c\u046d\5\u015e\u00b0\2\u046d\u0471\5\u01f4"+
		"\u00fb\2\u046e\u046f\5\u012e\u0098\2\u046f\u0470\7\22\2\2\u0470\u0472"+
		"\3\2\2\2\u0471\u046e\3\2\2\2\u0471\u0472\3\2\2\2\u0472\u0473\3\2\2\2\u0473"+
		"\u0474\5\u0130\u0099\2\u0474\u0475\5\\/\2\u0475[\3\2\2\2\u0476\u047d\5"+
		"h\65\2\u0477\u047d\5d\63\2\u0478\u047d\5d\63\2\u0479\u047d\5b\62\2\u047a"+
		"\u047d\5`\61\2\u047b\u047d\5^\60\2\u047c\u0476\3\2\2\2\u047c\u0477\3\2"+
		"\2\2\u047c\u0478\3\2\2\2\u047c\u0479\3\2\2\2\u047c\u047a\3\2\2\2\u047c"+
		"\u047b\3\2\2\2\u047d]\3\2\2\2\u047e\u047f\5\u0214\u010b\2\u047f\u0480"+
		"\5\u008eH\2\u0480_\3\2\2\2\u0481\u0482\5\u01da\u00ee\2\u0482\u0483\5\u0132"+
		"\u009a\2\u0483\u0484\5\u01f8\u00fd\2\u0484\u0485\5\u0132\u009a\2\u0485"+
		"a\3\2\2\2\u0486\u0487\5\u0184\u00c3\2\u0487\u0488\5\u0174\u00bb\2\u0488"+
		"\u0489\5\u01ee\u00f8\2\u0489c\3\2\2\2\u048a\u048b\5\u0184\u00c3\2\u048b"+
		"\u048c\5f\64\2\u048ce\3\2\2\2\u048d\u0493\5\u0132\u009a\2\u048e\u048f"+
		"\5\u026c\u0137\2\u048f\u0490\5\u0132\u009a\2\u0490\u0492\3\2\2\2\u0491"+
		"\u048e\3\2\2\2\u0492\u0495\3\2\2\2\u0493\u0491\3\2\2\2\u0493\u0494\3\2"+
		"\2\2\u0494g\3\2\2\2\u0495\u0493\3\2\2\2\u0496\u0497\5\u0152\u00aa\2\u0497"+
		"\u0498\5j\66\2\u0498i\3\2\2\2\u0499\u049a\5\u0132\u009a\2\u049a\u04a1"+
		"\5\u0134\u009b\2\u049b\u049c\5\u026c\u0137\2\u049c\u049d\5\u0132\u009a"+
		"\2\u049d\u049e\5\u0134\u009b\2\u049e\u04a0\3\2\2\2\u049f\u049b\3\2\2\2"+
		"\u04a0\u04a3\3\2\2\2\u04a1\u049f\3\2\2\2\u04a1\u04a2\3\2\2\2\u04a2k\3"+
		"\2\2\2\u04a3\u04a1\3\2\2\2\u04a4\u04a5\5\u015e\u00b0\2\u04a5\u04a6\5\u01e2"+
		"\u00f2\2\u04a6\u04a8\5\u0138\u009d\2\u04a7\u04a9\5n8\2\u04a8\u04a7\3\2"+
		"\2\2\u04a8\u04a9\3\2\2\2\u04a9m\3\2\2\2\u04aa\u04ab\5\u0214\u010b\2\u04ab"+
		"\u04b1\5p9\2\u04ac\u04ad\5\u0160\u00b1\2\u04ad\u04ae\5p9\2\u04ae\u04b0"+
		"\3\2\2\2\u04af\u04ac\3\2\2\2\u04b0\u04b3\3\2\2\2\u04b1\u04af\3\2\2\2\u04b1"+
		"\u04b2\3\2\2\2\u04b2o\3\2\2\2\u04b3\u04b1\3\2\2\2\u04b4\u04b5\5\u01d6"+
		"\u00ec\2\u04b5\u04b6\7\u00ad\2\2\u04b6\u04b7\5\u0128\u0095\2\u04b7\u04c5"+
		"\3\2\2\2\u04b8\u04b9\5\u01bc\u00df\2\u04b9\u04ba\7\u00ad\2\2\u04ba\u04bb"+
		"\5\u012a\u0096\2\u04bb\u04c5\3\2\2\2\u04bc\u04bd\5\u01f2\u00fa\2\u04bd"+
		"\u04be\7\u00ad\2\2\u04be\u04bf\5\u012a\u0096\2\u04bf\u04c5\3\2\2\2\u04c0"+
		"\u04c1\5\u01ce\u00e8\2\u04c1\u04c2\7\u00ad\2\2\u04c2\u04c3\5\u0096L\2"+
		"\u04c3\u04c5\3\2\2\2\u04c4\u04b4\3\2\2\2\u04c4\u04b8\3\2\2\2\u04c4\u04bc"+
		"\3\2\2\2\u04c4\u04c0\3\2\2\2\u04c5q\3\2\2\2\u04c6\u04c7\5\u015e\u00b0"+
		"\2\u04c7\u04c8\5\u01be\u00e0\2\u04c8\u04cc\5\u0210\u0109\2\u04c9\u04ca"+
		"\5\u012e\u0098\2\u04ca\u04cb\7\22\2\2\u04cb\u04cd\3\2\2\2\u04cc\u04c9"+
		"\3\2\2\2\u04cc\u04cd\3\2\2\2\u04cd\u04ce\3\2\2\2\u04ce\u04d2\5\u013e\u00a0"+
		"\2\u04cf\u04d0\5\u0214\u010b\2\u04d0\u04d1\5\u008eH\2\u04d1\u04d3\3\2"+
		"\2\2\u04d2\u04cf\3\2\2\2\u04d2\u04d3\3\2\2\2\u04d3s\3\2\2\2\u04d4\u04d5"+
		"\5\u0184\u00c3\2\u04d5\u04d7\5\u0208\u0105\2\u04d6\u04d8\5\u00f8}\2\u04d7"+
		"\u04d6\3\2\2\2\u04d7\u04d8\3\2\2\2\u04d8\u04d9\3\2\2\2\u04d9\u04da\5\u0148"+
		"\u00a5\2\u04dau\3\2\2\2\u04db\u04dc\5\u0184\u00c3\2\u04dc\u04de\5\u0200"+
		"\u0101\2\u04dd\u04df\5\u00f8}\2\u04de\u04dd\3\2\2\2\u04de\u04df\3\2\2"+
		"\2\u04df\u04e3\3\2\2\2\u04e0\u04e1\5\u012e\u0098\2\u04e1\u04e2\7\22\2"+
		"\2\u04e2\u04e4\3\2\2\2\u04e3\u04e0\3\2\2\2\u04e3\u04e4\3\2\2\2\u04e4\u04e5"+
		"\3\2\2\2\u04e5\u04e6\5\u0140\u00a1\2\u04e6w\3\2\2\2\u04e7\u04e8\5\u0184"+
		"\u00c3\2\u04e8\u04e9\5\u01be\u00e0\2\u04e9\u04eb\5\u0210\u0109\2\u04ea"+
		"\u04ec\5\u00f8}\2\u04eb\u04ea\3\2\2\2\u04eb\u04ec\3\2\2\2\u04ec\u04f0"+
		"\3\2\2\2\u04ed\u04ee\5\u012e\u0098\2\u04ee\u04ef\7\22\2\2\u04ef\u04f1"+
		"\3\2\2\2\u04f0\u04ed\3\2\2\2\u04f0\u04f1\3\2\2\2\u04f1\u04f2\3\2\2\2\u04f2"+
		"\u04f3\5\u013e\u00a0\2\u04f3y\3\2\2\2\u04f4\u04f5\5\u0184\u00c3\2\u04f5"+
		"\u04f7\5\u0154\u00ab\2\u04f6\u04f8\5\u00f8}\2\u04f7\u04f6\3\2\2\2\u04f7"+
		"\u04f8\3\2\2\2\u04f8\u04fc\3\2\2\2\u04f9\u04fa\5\u012e\u0098\2\u04fa\u04fb"+
		"\7\22\2\2\u04fb\u04fd\3\2\2\2\u04fc\u04f9\3\2\2\2\u04fc\u04fd\3\2\2\2"+
		"\u04fd\u04fe\3\2\2\2\u04fe\u04ff\5\u0142\u00a2\2\u04ff{\3\2\2\2\u0500"+
		"\u0501\5\u0184\u00c3\2\u0501\u0503\5\u0196\u00cc\2\u0502\u0504\5\u00f8"+
		"}\2\u0503\u0502\3\2\2\2\u0503\u0504\3\2\2\2\u0504\u0508\3\2\2\2\u0505"+
		"\u0506\5\u012e\u0098\2\u0506\u0507\7\22\2\2\u0507\u0509\3\2\2\2\u0508"+
		"\u0505\3\2\2\2\u0508\u0509\3\2\2\2\u0509\u050a\3\2\2\2\u050a\u050b\5\u0144"+
		"\u00a3\2\u050b}\3\2\2\2\u050c\u050d\5\u0184\u00c3\2\u050d\u050f\5\u01fa"+
		"\u00fe\2\u050e\u0510\5\u00f8}\2\u050f\u050e\3\2\2\2\u050f\u0510\3\2\2"+
		"\2\u0510\u0511\3\2\2\2\u0511\u0512\5\u013a\u009e\2\u0512\u0516\5\u01cc"+
		"\u00e7\2\u0513\u0514\5\u012e\u0098\2\u0514\u0515\7\22\2\2\u0515\u0517"+
		"\3\2\2\2\u0516\u0513\3\2\2\2\u0516\u0517\3\2\2\2\u0517\u0518\3\2\2\2\u0518"+
		"\u0519\5\u0130\u0099\2\u0519\177\3\2\2\2\u051a\u051b\5\u0184\u00c3\2\u051b"+
		"\u051d\5\u01e2\u00f2\2\u051c\u051e\5\u00f8}\2\u051d\u051c\3\2\2\2\u051d"+
		"\u051e\3\2\2\2\u051e\u051f\3\2\2\2\u051f\u0520\5\u0138\u009d\2\u0520\u0081"+
		"\3\2\2\2\u0521\u0522\5\u0184\u00c3\2\u0522\u0524\5\u01f4\u00fb\2\u0523"+
		"\u0525\5\u00f8}\2\u0524\u0523\3\2\2\2\u0524\u0525\3\2\2\2\u0525\u0529"+
		"\3\2\2\2\u0526\u0527\5\u012e\u0098\2\u0527\u0528\7\22\2\2\u0528\u052a"+
		"\3\2\2\2\u0529\u0526\3\2\2\2\u0529\u052a\3\2\2\2\u052a\u052b\3\2\2\2\u052b"+
		"\u052c\5\u0130\u0099\2\u052c\u0083\3\2\2\2\u052d\u052e\5\u0184\u00c3\2"+
		"\u052e\u0530\5\u01b0\u00d9\2\u052f\u0531\5\u00f8}\2\u0530\u052f\3\2\2"+
		"\2\u0530\u0531\3\2\2\2\u0531\u0532\3\2\2\2\u0532\u0533\5\u012e\u0098\2"+
		"\u0533\u0085\3\2\2\2\u0534\u0535\5\u0184\u00c3\2\u0535\u0537\5\u01a0\u00d1"+
		"\2\u0536\u0538\5\u00f8}\2\u0537\u0536\3\2\2\2\u0537\u0538\3\2\2\2\u0538"+
		"\u053c\3\2\2\2\u0539\u053a\5\u012e\u0098\2\u053a\u053b\7\22\2\2\u053b"+
		"\u053d\3\2\2\2\u053c\u0539\3\2\2\2\u053c\u053d\3\2\2\2\u053d\u053e\3\2"+
		"\2\2\u053e\u053f\5\u00caf\2\u053f\u0087\3\2\2\2\u0540\u0541\5\u017a\u00be"+
		"\2\u0541\u0543\5\u01f4\u00fb\2\u0542\u0544\5\u00f6|\2\u0543\u0542\3\2"+
		"\2\2\u0543\u0544\3\2\2\2\u0544\u0548\3\2\2\2\u0545\u0546\5\u012e\u0098"+
		"\2\u0546\u0547\7\22\2\2\u0547\u0549\3\2\2\2\u0548\u0545\3\2\2\2\u0548"+
		"\u0549\3\2\2\2\u0549\u054a\3\2\2\2\u054a\u054b\5\u0130\u0099\2\u054b\u054c"+
		"\5\u025c\u012f\2\u054c\u054d\5\u009eP\2\u054d\u054f\5\u025e\u0130\2\u054e"+
		"\u0550\5\u008aF\2\u054f\u054e\3\2\2\2\u054f\u0550\3\2\2\2\u0550\u0089"+
		"\3\2\2\2\u0551\u0553\5\u0214\u010b\2\u0552\u0554\5\u008eH\2\u0553\u0552"+
		"\3\2\2\2\u0553\u0554\3\2\2\2\u0554\u0556\3\2\2\2\u0555\u0557\5\u008cG"+
		"\2\u0556\u0555\3\2\2\2\u0556\u0557\3\2\2\2\u0557\u008b\3\2\2\2\u0558\u0559"+
		"\5\u0172\u00ba\2\u0559\u055a\5\u01d2\u00ea\2\u055a\u055b\5\u016e\u00b8"+
		"\2\u055b\u055c\5\u025c\u012f\2\u055c\u055e\5\u0132\u009a\2\u055d\u055f"+
		"\5\u0136\u009c\2\u055e\u055d\3\2\2\2\u055e\u055f\3\2\2\2\u055f\u0560\3"+
		"\2\2\2\u0560\u0561\5\u025e\u0130\2\u0561\u008d\3\2\2\2\u0562\u0568\5\u0090"+
		"I\2\u0563\u0564\5\u0160\u00b1\2\u0564\u0565\5\u0090I\2\u0565\u0567\3\2"+
		"\2\2\u0566\u0563\3\2\2\2\u0567\u056a\3\2\2\2\u0568\u0566\3\2\2\2\u0568"+
		"\u0569\3\2\2\2\u0569\u008f\3\2\2\2\u056a\u0568\3\2\2\2\u056b\u056c\5\u0092"+
		"J\2\u056c\u056d\7\u00ad\2\2\u056d\u056e\5\u0094K\2\u056e\u0574\3\2\2\2"+
		"\u056f\u0570\5\u0092J\2\u0570\u0571\7\u00ad\2\2\u0571\u0572\5\u0096L\2"+
		"\u0572\u0574\3\2\2\2\u0573\u056b\3\2\2\2\u0573\u056f\3\2\2\2\u0574\u0091"+
		"\3\2\2\2\u0575\u0576\7\u00ab\2\2\u0576\u0093\3\2\2\2\u0577\u057a\5\u0128"+
		"\u0095\2\u0578\u057a\5\u0126\u0094\2\u0579\u0577\3\2\2\2\u0579\u0578\3"+
		"\2\2\2\u057a\u0095\3\2\2\2\u057b\u057c\5\u0260\u0131\2\u057c\u0582\5\u0098"+
		"M\2\u057d\u057e\5\u026c\u0137\2\u057e\u057f\5\u0098M\2\u057f\u0581\3\2"+
		"\2\2\u0580\u057d\3\2\2\2\u0581\u0584\3\2\2\2\u0582\u0580\3\2\2\2\u0582"+
		"\u0583\3\2\2\2\u0583\u0585\3\2\2\2\u0584\u0582\3\2\2\2\u0585\u0586\5\u0262"+
		"\u0132\2\u0586\u0097\3\2\2\2\u0587\u0588\5\u009aN\2\u0588\u0589\7\13\2"+
		"\2\u0589\u058a\5\u009cO\2\u058a\u0099\3\2\2\2\u058b\u058c\5\u0128\u0095"+
		"\2\u058c\u009b\3\2\2\2\u058d\u0590\5\u0128\u0095\2\u058e\u0590\5\u0126"+
		"\u0094\2\u058f\u058d\3\2\2\2\u058f\u058e\3\2\2\2\u0590\u009d\3\2\2\2\u0591"+
		"\u0597\5\u00a0Q\2\u0592\u0593\5\u026c\u0137\2\u0593\u0594\5\u00a0Q\2\u0594"+
		"\u0596\3\2\2\2\u0595\u0592\3\2\2\2\u0596\u0599\3\2\2\2\u0597\u0595\3\2"+
		"\2\2\u0597\u0598\3\2\2\2\u0598\u059d\3\2\2\2\u0599\u0597\3\2\2\2\u059a"+
		"\u059b\5\u026c\u0137\2\u059b\u059c\5\u00a4S\2\u059c\u059e\3\2\2\2\u059d"+
		"\u059a\3\2\2\2\u059d\u059e\3\2\2\2\u059e\u009f\3\2\2\2\u059f\u05a0\5\u0132"+
		"\u009a\2\u05a0\u05a1\5\u0134\u009b\2\u05a1\u05a2\5\u00a2R\2\u05a2\u05ab"+
		"\3\2\2\2\u05a3\u05a4\5\u0132\u009a\2\u05a4\u05a5\5\u0134\u009b\2\u05a5"+
		"\u05a6\5\u01ec\u00f7\2\u05a6\u05ab\3\2\2\2\u05a7\u05a8\5\u0132\u009a\2"+
		"\u05a8\u05a9\5\u0134\u009b\2\u05a9\u05ab\3\2\2\2\u05aa\u059f\3\2\2\2\u05aa"+
		"\u05a3\3\2\2\2\u05aa\u05a7\3\2\2\2\u05ab\u00a1\3\2\2\2\u05ac\u05ad\5\u01d8"+
		"\u00ed\2\u05ad\u05ae\5\u01ac\u00d7\2\u05ae\u00a3\3\2\2\2\u05af\u05b0\5"+
		"\u01d8\u00ed\2\u05b0\u05b1\5\u01ac\u00d7\2\u05b1\u05b2\5\u025c\u012f\2"+
		"\u05b2\u05b3\5\u00a6T\2\u05b3\u05b4\5\u025e\u0130\2\u05b4\u00a5\3\2\2"+
		"\2\u05b5\u05b9\5\u00a8U\2\u05b6\u05b9\5\u00aaV\2\u05b7\u05b9\5\u00acW"+
		"\2\u05b8\u05b5\3\2\2\2\u05b8\u05b6\3\2\2\2\u05b8\u05b7\3\2\2\2\u05b9\u00a7"+
		"\3\2\2\2\u05ba\u05bb\5\u0132\u009a\2\u05bb\u00a9\3\2\2\2\u05bc\u05bd\5"+
		"\u00b2Z\2\u05bd\u05be\5\u026c\u0137\2\u05be\u05bf\5\u00b0Y\2\u05bf\u00ab"+
		"\3\2\2\2\u05c0\u05c1\5\u025c\u012f\2\u05c1\u05c2\5\u00aeX\2\u05c2\u05c3"+
		"\5\u025e\u0130\2\u05c3\u05c4\5\u026c\u0137\2\u05c4\u05c5\5\u00b0Y\2\u05c5"+
		"\u00ad\3\2\2\2\u05c6\u05cc\5\u00b2Z\2\u05c7\u05c8\5\u026c\u0137\2\u05c8"+
		"\u05c9\5\u00b2Z\2\u05c9\u05cb\3\2\2\2\u05ca\u05c7\3\2\2\2\u05cb\u05ce"+
		"\3\2\2\2\u05cc\u05ca\3\2\2\2\u05cc\u05cd\3\2\2\2\u05cd\u00af\3\2\2\2\u05ce"+
		"\u05cc\3\2\2\2\u05cf\u05d5\5\u00b4[\2\u05d0\u05d1\5\u026c\u0137\2\u05d1"+
		"\u05d2\5\u00b4[\2\u05d2\u05d4\3\2\2\2\u05d3\u05d0\3\2\2\2\u05d4\u05d7"+
		"\3\2\2\2\u05d5\u05d3\3\2\2\2\u05d5\u05d6\3\2\2\2\u05d6\u00b1\3\2\2\2\u05d7"+
		"\u05d5\3\2\2\2\u05d8\u05d9\5\u0132\u009a\2\u05d9\u00b3\3\2\2\2\u05da\u05db"+
		"\5\u0132\u009a\2\u05db\u00b5\3\2\2\2\u05dc\u05dd\5\u0162\u00b2\2\u05dd"+
		"\u05de\5\u016a\u00b6\2\u05de\u00b7\3\2\2\2\u05df\u05e1\5\u016c\u00b7\2"+
		"\u05e0\u05e2\5\u00ba^\2\u05e1\u05e0\3\2\2\2\u05e1\u05e2\3\2\2\2\u05e2"+
		"\u05e3\3\2\2\2\u05e3\u05e5\5\u016a\u00b6\2\u05e4\u05e6\5\u00f4{\2\u05e5"+
		"\u05e4\3\2\2\2\u05e5\u05e6\3\2\2\2\u05e6\u00b9\3\2\2\2\u05e7\u05ea\5\u01ba"+
		"\u00de\2\u05e8\u05ea\5\u0202\u0102\2\u05e9\u05e7\3\2\2\2\u05e9\u05e8\3"+
		"\2\2\2\u05ea\u00bb\3\2\2\2\u05eb\u05ec\5\u015e\u00b0\2\u05ec\u05ed\5\u01b0"+
		"\u00d9\2\u05ed\u05ee\5\u012e\u0098\2\u05ee\u05ef\5\u0214\u010b\2\u05ef"+
		"\u05f0\5\u01de\u00f0\2\u05f0\u05f1\7\u00ad\2\2\u05f1\u05f2\5\u0260\u0131"+
		"\2\u05f2\u05f3\5\u00be`\2\u05f3\u05f7\5\u0262\u0132\2\u05f4\u05f5\5\u0160"+
		"\u00b1\2\u05f5\u05f6\5\u00c2b\2\u05f6\u05f8\3\2\2\2\u05f7\u05f4\3\2\2"+
		"\2\u05f7\u05f8\3\2\2\2\u05f8\u00bd\3\2\2\2\u05f9\u05ff\5\u00c0a\2\u05fa"+
		"\u05fb\5\u026c\u0137\2\u05fb\u05fc\5\u00c0a\2\u05fc\u05fe\3\2\2\2\u05fd"+
		"\u05fa\3\2\2\2\u05fe\u0601\3\2\2\2\u05ff\u05fd\3\2\2\2\u05ff\u0600\3\2"+
		"\2\2\u0600\u00bf\3\2\2\2\u0601\u05ff\3\2\2\2\u0602\u0603\7\u00a6\2\2\u0603"+
		"\u0604\7\13\2\2\u0604\u0609\7\u00a6\2\2\u0605\u0606\7\u00a6\2\2\u0606"+
		"\u0607\7\13\2\2\u0607\u0609\7\u00a7\2\2\u0608\u0602\3\2\2\2\u0608\u0605"+
		"\3\2\2\2\u0609\u00c1\3\2\2\2\u060a\u060b\5\u0186\u00c4\2\u060b\u060c\7"+
		"\u00ad\2\2\u060c\u060d\5\u012a\u0096\2\u060d\u00c3\3\2\2\2\u060e\u060f"+
		"\5\u0206\u0104\2\u060f\u0610\5\u012e\u0098\2\u0610\u00c5\3\2\2\2\u0611"+
		"\u0613\5\u01fc\u00ff\2\u0612\u0614\5\u01f4\u00fb\2\u0613\u0612\3\2\2\2"+
		"\u0613\u0614\3\2\2\2\u0614\u0618\3\2\2\2\u0615\u0616\5\u012e\u0098\2\u0616"+
		"\u0617\7\22\2\2\u0617\u0619\3\2\2\2\u0618\u0615\3\2\2\2\u0618\u0619\3"+
		"\2\2\2\u0619\u061a\3\2\2\2\u061a\u061b\5\u0130\u0099\2\u061b\u00c7\3\2"+
		"\2\2\u061c\u061d\5\u017a\u00be\2\u061d\u061f\5\u01a0\u00d1\2\u061e\u0620"+
		"\5\u00f6|\2\u061f\u061e\3\2\2\2\u061f\u0620\3\2\2\2\u0620\u0622\3\2\2"+
		"\2\u0621\u0623\5\u00caf\2\u0622\u0621\3\2\2\2\u0622\u0623\3\2\2\2\u0623"+
		"\u0624\3\2\2\2\u0624\u0628\5\u01cc\u00e7\2\u0625\u0626\5\u012e\u0098\2"+
		"\u0626\u0627\7\22\2\2\u0627\u0629\3\2\2\2\u0628\u0625\3\2\2\2\u0628\u0629"+
		"\3\2\2\2\u0629\u062a\3\2\2\2\u062a\u062b\5\u0130\u0099\2\u062b\u062c\5"+
		"\u025c\u012f\2\u062c\u062d\5\u00ccg\2\u062d\u062e\5\u025e\u0130\2\u062e"+
		"\u00c9\3\2\2\2\u062f\u0632\7\u00ab\2\2\u0630\u0632\5\u0128\u0095\2\u0631"+
		"\u062f\3\2\2\2\u0631\u0630\3\2\2\2\u0632\u00cb\3\2\2\2\u0633\u0638\5\u0132"+
		"\u009a\2\u0634\u0638\5\u00ceh\2\u0635\u0638\5\u00d0i\2\u0636\u0638\5\u00d2"+
		"j\2\u0637\u0633\3\2\2\2\u0637\u0634\3\2\2\2\u0637\u0635\3\2\2\2\u0637"+
		"\u0636\3\2\2\2\u0638\u00cd\3\2\2\2\u0639\u063a\5\u01ae\u00d8\2\u063a\u063b"+
		"\5\u025c\u012f\2\u063b\u063c\7\u00ab\2\2\u063c\u063d\5\u025e\u0130\2\u063d"+
		"\u00cf\3\2\2\2\u063e\u063f\5\u0188\u00c5\2\u063f\u0640\5\u025c\u012f\2"+
		"\u0640\u0641\7\u00ab\2\2\u0641\u0642\5\u025e\u0130\2\u0642\u00d1\3\2\2"+
		"\2\u0643\u0644\5\u0194\u00cb\2\u0644\u0645\5\u025c\u012f\2\u0645\u0646"+
		"\7\u00ab\2\2\u0646\u0647\5\u025e\u0130\2\u0647\u00d3\3\2\2\2\u0648\u064a"+
		"\5\u00b8]\2\u0649\u0648\3\2\2\2\u0649\u064a\3\2\2\2\u064a\u064b\3\2\2"+
		"\2\u064b\u064d\5\u017c\u00bf\2\u064c\u064e\5\u00d6l\2\u064d\u064c\3\2"+
		"\2\2\u064d\u064e\3\2\2\2\u064e\u064f\3\2\2\2\u064f\u0651\5\u0106\u0084"+
		"\2\u0650\u0652\5\u00f4{\2\u0651\u0650\3\2\2\2\u0651\u0652\3\2\2\2\u0652"+
		"\u0653\3\2\2\2\u0653\u0656\5\u010e\u0088\2\u0654\u0657\5\u00f8}\2\u0655"+
		"\u0657\5\u00dco\2\u0656\u0654\3\2\2\2\u0656\u0655\3\2\2\2\u0656\u0657"+
		"\3\2\2\2\u0657\u00d5\3\2\2\2\u0658\u065e\5\u00d8m\2\u0659\u065a\5\u026c"+
		"\u0137\2\u065a\u065b\5\u00d8m\2\u065b\u065d\3\2\2\2\u065c\u0659\3\2\2"+
		"\2\u065d\u0660\3\2\2\2\u065e\u065c\3\2\2\2\u065e\u065f\3\2\2\2\u065f\u00d7"+
		"\3\2\2\2\u0660\u065e\3\2\2\2\u0661\u066b\7\u00ab\2\2\u0662\u0663\7\u00ab"+
		"\2\2\u0663\u0666\7\7\2\2\u0664\u0667\5\u0128\u0095\2\u0665\u0667\5\u0124"+
		"\u0093\2\u0666\u0664\3\2\2\2\u0666\u0665\3\2\2\2\u0667\u0668\3\2\2\2\u0668"+
		"\u0669\7\b\2\2\u0669\u066b\3\2\2\2\u066a\u0661\3\2\2\2\u066a\u0662\3\2"+
		"\2\2\u066b\u00d9\3\2\2\2\u066c\u066e\5\u00b8]\2\u066d\u066c\3\2\2\2\u066d"+
		"\u066e\3\2\2\2\u066e\u066f\3\2\2\2\u066f\u0673\5\u0204\u0103\2\u0670\u0671"+
		"\5\u012e\u0098\2\u0671\u0672\7\22\2\2\u0672\u0674\3\2\2\2\u0673\u0670"+
		"\3\2\2\2\u0673\u0674\3\2\2\2\u0674\u0675\3\2\2\2\u0675\u0677\5\u0130\u0099"+
		"\2\u0676\u0678\5\u00eex\2\u0677\u0676\3\2\2\2\u0677\u0678\3\2\2\2\u0678"+
		"\u0679\3\2\2\2\u0679\u067a\5\u01e8\u00f5\2\u067a\u067b\5\u00e2r\2\u067b"+
		"\u067e\5\u010e\u0088\2\u067c\u067f\5\u00f8}\2\u067d\u067f\5\u00dco\2\u067e"+
		"\u067c\3\2\2\2\u067e\u067d\3\2\2\2\u067e\u067f\3\2\2\2\u067f\u00db\3\2"+
		"\2\2\u0680\u0681\5\u019c\u00cf\2\u0681\u0682\5\u00dep\2\u0682\u00dd\3"+
		"\2\2\2\u0683\u0689\5\u00e0q\2\u0684\u0685\5\u0160\u00b1\2\u0685\u0686"+
		"\5\u00e0q\2\u0686\u0688\3\2\2\2\u0687\u0684\3\2\2\2\u0688\u068b\3\2\2"+
		"\2\u0689\u0687\3\2\2\2\u0689\u068a\3\2\2\2\u068a\u00df\3\2\2\2\u068b\u0689"+
		"\3\2\2\2\u068c\u068d\7\u00ab\2\2\u068d\u068e\7\u00ad\2\2\u068e\u068f\5"+
		"\u0120\u0091\2\u068f\u00e1\3\2\2\2\u0690\u0696\5\u00e4s\2\u0691\u0692"+
		"\5\u026c\u0137\2\u0692\u0693\5\u00e4s\2\u0693\u0695\3\2\2\2\u0694\u0691"+
		"\3\2\2\2\u0695\u0698\3\2\2\2\u0696\u0694\3\2\2\2\u0696\u0697\3\2\2\2\u0697"+
		"\u00e3\3\2\2\2\u0698\u0696\3\2\2\2\u0699\u069a\7\u00ab\2\2\u069a\u069f"+
		"\7\u00ad\2\2\u069b\u06a0\5\u0120\u0091\2\u069c\u06a0\5\u00e8u\2\u069d"+
		"\u06a0\5\u00e6t\2\u069e\u06a0\5\u00eav\2\u069f\u069b\3\2\2\2\u069f\u069c"+
		"\3\2\2\2\u069f\u069d\3\2\2\2\u069f\u069e\3\2\2\2\u06a0\u06cf\3\2\2\2\u06a1"+
		"\u06a2\7\u00ab\2\2\u06a2\u06a3\7\u00ad\2\2\u06a3\u06a4\7\u00ab\2\2\u06a4"+
		"\u06a5\t\2\2\2\u06a5\u06cf\5\u0124\u0093\2\u06a6\u06a7\7\u00ab\2\2\u06a7"+
		"\u06a8\7\u00ad\2\2\u06a8\u06a9\7\u00ab\2\2\u06a9\u06aa\t\2\2\2\u06aa\u06cf"+
		"\5\u00e6t\2\u06ab\u06ac\7\u00ab\2\2\u06ac\u06ad\7\u00ad\2\2\u06ad\u06ae"+
		"\5\u00e6t\2\u06ae\u06af\t\2\2\2\u06af\u06b0\7\u00ab\2\2\u06b0\u06cf\3"+
		"\2\2\2\u06b1\u06b2\7\u00ab\2\2\u06b2\u06b3\7\u00ad\2\2\u06b3\u06b4\7\u00ab"+
		"\2\2\u06b4\u06b5\t\2\2\2\u06b5\u06cf\5\u00e8u\2\u06b6\u06b7\7\u00ab\2"+
		"\2\u06b7\u06b8\7\u00ad\2\2\u06b8\u06b9\5\u00e8u\2\u06b9\u06ba\t\2\2\2"+
		"\u06ba\u06bb\7\u00ab\2\2\u06bb\u06cf\3\2\2\2\u06bc\u06bd\7\u00ab\2\2\u06bd"+
		"\u06be\7\u00ad\2\2\u06be\u06bf\7\u00ab\2\2\u06bf\u06c0\t\2\2\2\u06c0\u06cf"+
		"\5\u00eav\2\u06c1\u06c2\7\u00ab\2\2\u06c2\u06c3\7\u00ad\2\2\u06c3\u06c4"+
		"\5\u00eav\2\u06c4\u06c5\t\2\2\2\u06c5\u06c6\7\u00ab\2\2\u06c6\u06cf\3"+
		"\2\2\2\u06c7\u06c8\7\u00ab\2\2\u06c8\u06c9\5\u0268\u0135\2\u06c9\u06ca"+
		"\5\u0124\u0093\2\u06ca\u06cb\5\u026a\u0136\2\u06cb\u06cc\7\u00ad\2\2\u06cc"+
		"\u06cd\5\u0120\u0091\2\u06cd\u06cf\3\2\2\2\u06ce\u0699\3\2\2\2\u06ce\u06a1"+
		"\3\2\2\2\u06ce\u06a6\3\2\2\2\u06ce\u06ab\3\2\2\2\u06ce\u06b1\3\2\2\2\u06ce"+
		"\u06b6\3\2\2\2\u06ce\u06bc\3\2\2\2\u06ce\u06c1\3\2\2\2\u06ce\u06c7\3\2"+
		"\2\2\u06cf\u00e5\3\2\2\2\u06d0\u06d1\5\u0260\u0131\2\u06d1\u06d7\5\u0120"+
		"\u0091\2\u06d2\u06d3\5\u026c\u0137\2\u06d3\u06d4\5\u0120\u0091\2\u06d4"+
		"\u06d6\3\2\2\2\u06d5\u06d2\3\2\2\2\u06d6\u06d9\3\2\2\2\u06d7\u06d5\3\2"+
		"\2\2\u06d7\u06d8\3\2\2\2\u06d8\u06da\3\2\2\2\u06d9\u06d7\3\2\2\2\u06da"+
		"\u06db\5\u0262\u0132\2\u06db\u00e7\3\2\2\2\u06dc\u06dd\5\u0260\u0131\2"+
		"\u06dd\u06de\5\u0120\u0091\2\u06de\u06df\5\u026e\u0138\2\u06df\u06e0\5"+
		"\u0120\u0091\2\u06e0\u06e7\3\2\2\2\u06e1\u06e2\5\u0120\u0091\2\u06e2\u06e3"+
		"\5\u026e\u0138\2\u06e3\u06e4\5\u0120\u0091\2\u06e4\u06e6\3\2\2\2\u06e5"+
		"\u06e1\3\2\2\2\u06e6\u06e9\3\2\2\2\u06e7\u06e5\3\2\2\2\u06e7\u06e8\3\2"+
		"\2\2\u06e8\u06ea\3\2\2\2\u06e9\u06e7\3\2\2\2\u06ea\u06eb\5\u0262\u0132"+
		"\2\u06eb\u00e9\3\2\2\2\u06ec\u06ed\5\u0268\u0135\2\u06ed\u06f3\5\u0120"+
		"\u0091\2\u06ee\u06ef\5\u026e\u0138\2\u06ef\u06f0\5\u0120\u0091\2\u06f0"+
		"\u06f2\3\2\2\2\u06f1\u06ee\3\2\2\2\u06f2\u06f5\3\2\2\2\u06f3\u06f1\3\2"+
		"\2\2\u06f3\u06f4\3\2\2\2\u06f4\u06f6\3\2\2\2\u06f5\u06f3\3\2\2\2\u06f6"+
		"\u06f7\5\u026a\u0136\2\u06f7\u00eb\3\2\2\2\u06f8\u06fb\5\u00b8]\2\u06f9"+
		"\u06fb\3\2\2\2\u06fa\u06f8\3\2\2\2\u06fa\u06f9\3\2\2\2\u06fb\u06fc\3\2"+
		"\2\2\u06fc\u06fd\5\u01a6\u00d4\2\u06fd\u0702\5\u01a8\u00d5\2\u06fe\u06ff"+
		"\5\u012e\u0098\2\u06ff\u0700\7\22\2\2\u0700\u0703\3\2\2\2\u0701\u0703"+
		"\3\2\2\2\u0702\u06fe\3\2\2\2\u0702\u0701\3\2\2\2\u0703\u0704\3\2\2\2\u0704"+
		"\u0705\5\u0130\u0099\2\u0705\u0706\5\u00fc\177\2\u0706\u0709\5\u00fa~"+
		"\2\u0707\u070a\5\u00f6|\2\u0708\u070a\3\2\2\2\u0709\u0707\3\2\2\2\u0709"+
		"\u0708\3\2\2\2\u070a\u070c\3\2\2\2\u070b\u070d\5\u00eex\2\u070c\u070b"+
		"\3\2\2\2\u070c\u070d\3\2\2\2\u070d\u00ed\3\2\2\2\u070e\u070f\5\u020c\u0107"+
		"\2\u070f\u0710\5\u00f2z\2\u0710\u071f\3\2\2\2\u0711\u0712\5\u020c\u0107"+
		"\2\u0712\u0713\5\u00f2z\2\u0713\u0714\5\u0160\u00b1\2\u0714\u0715\5\u00f0"+
		"y\2\u0715\u071f\3\2\2\2\u0716\u0717\5\u020c\u0107\2\u0717\u0718\5\u00f0"+
		"y\2\u0718\u071f\3\2\2\2\u0719\u071a\5\u020c\u0107\2\u071a\u071b\5\u00f0"+
		"y\2\u071b\u071c\5\u0160\u00b1\2\u071c\u071d\5\u00f2z\2\u071d\u071f\3\2"+
		"\2\2\u071e\u070e\3\2\2\2\u071e\u0711\3\2\2\2\u071e\u0716\3\2\2\2\u071e"+
		"\u0719\3\2\2\2\u071f\u00ef\3\2\2\2\u0720\u0721\5\u01f6\u00fc\2\u0721\u0722"+
		"\5\u0124\u0093\2\u0722\u00f1\3\2\2\2\u0723\u0724\5\u01fe\u0100\2\u0724"+
		"\u0725\5\u0124\u0093\2\u0725\u00f3\3\2\2\2\u0726\u0727\5\u020c\u0107\2"+
		"\u0727\u0728\5\u00f0y\2\u0728\u00f5\3\2\2\2\u0729\u072a\5\u019c\u00cf"+
		"\2\u072a\u072b\5\u01c6\u00e4\2\u072b\u072c\5\u018c\u00c7\2\u072c\u00f7"+
		"\3\2\2\2\u072d\u072e\5\u019c\u00cf\2\u072e\u072f\5\u018c\u00c7\2\u072f"+
		"\u00f9\3\2\2\2\u0730\u0731\5\u020e\u0108\2\u0731\u0732\7\3\2\2\u0732\u0733"+
		"\5\u0100\u0081\2\u0733\u0734\7\4\2\2\u0734\u00fb\3\2\2\2\u0735\u0736\7"+
		"\3\2\2\u0736\u0737\5\u00fe\u0080\2\u0737\u0738\7\4\2\2\u0738\u00fd\3\2"+
		"\2\2\u0739\u073f\5\u0132\u009a\2\u073a\u073b\5\u026c\u0137\2\u073b\u073c"+
		"\5\u0132\u009a\2\u073c\u073e\3\2\2\2\u073d\u073a\3\2\2\2\u073e\u0741\3"+
		"\2\2\2\u073f\u073d\3\2\2\2\u073f\u0740\3\2\2\2\u0740\u00ff\3\2\2\2\u0741"+
		"\u073f\3\2\2\2\u0742\u0747\5\u0120\u0091\2\u0743\u0747\5\u00e8u\2\u0744"+
		"\u0747\5\u00e6t\2\u0745\u0747\5\u00eav\2\u0746\u0742\3\2\2\2\u0746\u0743"+
		"\3\2\2\2\u0746\u0744\3\2\2\2\u0746\u0745\3\2\2\2\u0747\u0751\3\2\2\2\u0748"+
		"\u074d\5\u026c\u0137\2\u0749\u074e\5\u0120\u0091\2\u074a\u074e\5\u00e8"+
		"u\2\u074b\u074e\5\u00e6t\2\u074c\u074e\5\u00eav\2\u074d\u0749\3\2\2\2"+
		"\u074d\u074a\3\2\2\2\u074d\u074b\3\2\2\2\u074d\u074c\3\2\2\2\u074e\u0750"+
		"\3\2\2\2\u074f\u0748\3\2\2\2\u0750\u0753\3\2\2\2\u0751\u074f\3\2\2\2\u0751"+
		"\u0752\3\2\2\2\u0752\u0101\3\2\2\2\u0753\u0751\3\2\2\2\u0754\u0756\5\u01e6"+
		"\u00f4\2\u0755\u0757\5\u0182\u00c2\2\u0756\u0755\3\2\2\2\u0756\u0757\3"+
		"\2\2\2\u0757\u0758\3\2\2\2\u0758\u0759\5\u0110\u0089\2\u0759\u075b\5\u0106"+
		"\u0084\2\u075a\u075c\5\u010e\u0088\2\u075b\u075a\3\2\2\2\u075b\u075c\3"+
		"\2\2\2\u075c\u075e\3\2\2\2\u075d\u075f\5\u010a\u0086\2\u075e\u075d\3\2"+
		"\2\2\u075e\u075f\3\2\2\2\u075f\u0761\3\2\2\2\u0760\u0762\5\u0104\u0083"+
		"\2\u0761\u0760\3\2\2\2\u0761\u0762\3\2\2\2\u0762\u0764\3\2\2\2\u0763\u0765"+
		"\5\u015c\u00af\2\u0764\u0763\3\2\2\2\u0764\u0765\3\2\2\2\u0765\u0103\3"+
		"\2\2\2\u0766\u0767\5\u01b6\u00dc\2\u0767\u0768\5\u0124\u0093\2\u0768\u0105"+
		"\3\2\2\2\u0769\u076a\5\u0192\u00ca\2\u076a\u076b\5\u0108\u0085\2\u076b"+
		"\u076e\3\2\2\2\u076c\u076e\b\u0084\1\2\u076d\u0769\3\2\2\2\u076d\u076c"+
		"\3\2\2\2\u076e\u0107\3\2\2\2\u076f\u0776\5\u0130\u0099\2\u0770\u0771\5"+
		"\u012e\u0098\2\u0771\u0772\5\u0258\u012d\2\u0772\u0773\5\u0130\u0099\2"+
		"\u0773\u0776\3\2\2\2\u0774\u0776\b\u0085\1\2\u0775\u076f\3\2\2\2\u0775"+
		"\u0770\3\2\2\2\u0775\u0774\3\2\2\2\u0776\u0109\3\2\2\2\u0777\u0778\5\u01d4"+
		"\u00eb\2\u0778\u0779\5\u010c\u0087\2\u0779\u010b\3\2\2\2\u077a\u077d\5"+
		"\u0132\u009a\2\u077b\u077e\5\u0166\u00b4\2\u077c\u077e\5\u017e\u00c0\2"+
		"\u077d\u077b\3\2\2\2\u077d\u077c\3\2\2\2\u077d\u077e\3\2\2\2\u077e\u010d"+
		"\3\2\2\2\u077f\u0780\5\u0212\u010a\2\u0780\u0781\5\u0114\u008b\2\u0781"+
		"\u010f\3\2\2\2\u0782\u078e\5\u0256\u012c\2\u0783\u0789\5\u0112\u008a\2"+
		"\u0784\u0785\5\u026c\u0137\2\u0785\u0786\5\u0112\u008a\2\u0786\u0788\3"+
		"\2\2\2\u0787\u0784\3\2\2\2\u0788\u078b\3\2\2\2\u0789\u0787\3\2\2\2\u0789"+
		"\u078a\3\2\2\2\u078a\u078e\3\2\2\2\u078b\u0789\3\2\2\2\u078c\u078e\b\u0089"+
		"\1\2\u078d\u0782\3\2\2\2\u078d\u0783\3\2\2\2\u078d\u078c\3\2\2\2\u078e"+
		"\u0111\3\2\2\2\u078f\u079d\5\u0132\u009a\2\u0790\u0794\5\u0132\u009a\2"+
		"\u0791\u0792\5\u0164\u00b3\2\u0792\u0793\7\u00ab\2\2\u0793\u0795\3\2\2"+
		"\2\u0794\u0791\3\2\2\2\u0794\u0795\3\2\2\2\u0795\u079d\3\2\2\2\u0796\u079a"+
		"\5\u011c\u008f\2\u0797\u0798\5\u0164\u00b3\2\u0798\u0799\7\u00ab\2\2\u0799"+
		"\u079b\3\2\2\2\u079a\u0797\3\2\2\2\u079a\u079b\3\2\2\2\u079b\u079d\3\2"+
		"\2\2\u079c\u078f\3\2\2\2\u079c\u0790\3\2\2\2\u079c\u0796\3\2\2\2\u079d"+
		"\u0113\3\2\2\2\u079e\u07a4\5\u0116\u008c\2\u079f\u07a0\5\u0160\u00b1\2"+
		"\u07a0\u07a1\5\u0116\u008c\2\u07a1\u07a3\3\2\2\2\u07a2\u079f\3\2\2\2\u07a3"+
		"\u07a6\3\2\2\2\u07a4\u07a2\3\2\2\2\u07a4\u07a5\3\2\2\2\u07a5\u0115\3\2"+
		"\2\2\u07a6\u07a4\3\2\2\2\u07a7\u07ad\5\u0132\u009a\2\u07a8\u07ae\5\u0274"+
		"\u013b\2\u07a9\u07ae\5\u0276\u013c\2\u07aa\u07ae\5\u0278\u013d\2\u07ab"+
		"\u07ae\5\u027a\u013e\2\u07ac\u07ae\5\u027c\u013f\2\u07ad\u07a8\3\2\2\2"+
		"\u07ad\u07a9\3\2\2\2\u07ad\u07aa\3\2\2\2\u07ad\u07ab\3\2\2\2\u07ad\u07ac"+
		"\3\2\2\2\u07ae\u07af\3\2\2\2\u07af\u07b0\5\u0120\u0091\2\u07b0\u07d0\3"+
		"\2\2\2\u07b1\u07b7\5\u011c\u008f\2\u07b2\u07b8\5\u0274\u013b\2\u07b3\u07b8"+
		"\5\u0276\u013c\2\u07b4\u07b8\5\u0278\u013d\2\u07b5\u07b8\5\u027a\u013e"+
		"\2\u07b6\u07b8\5\u027c\u013f\2\u07b7\u07b2\3\2\2\2\u07b7\u07b3\3\2\2\2"+
		"\u07b7\u07b4\3\2\2\2\u07b7\u07b5\3\2\2\2\u07b7\u07b6\3\2\2\2\u07b8\u07b9"+
		"\3\2\2\2\u07b9\u07ba\5\u0120\u0091\2\u07ba\u07d0\3\2\2\2\u07bb\u07c1\5"+
		"\u011c\u008f\2\u07bc\u07c2\5\u0274\u013b\2\u07bd\u07c2\5\u0276\u013c\2"+
		"\u07be\u07c2\5\u0278\u013d\2\u07bf\u07c2\5\u027a\u013e\2\u07c0\u07c2\5"+
		"\u027c\u013f\2\u07c1\u07bc\3\2\2\2\u07c1\u07bd\3\2\2\2\u07c1\u07be\3\2"+
		"\2\2\u07c1\u07bf\3\2\2\2\u07c1\u07c0\3\2\2\2\u07c2\u07c3\3\2\2\2\u07c3"+
		"\u07c4\5\u011c\u008f\2\u07c4\u07d0\3\2\2\2\u07c5\u07c6\5\u0132\u009a\2"+
		"\u07c6\u07c7\5\u019e\u00d0\2\u07c7\u07c9\5\u025c\u012f\2\u07c8\u07ca\5"+
		"\u011e\u0090\2\u07c9\u07c8\3\2\2\2\u07c9\u07ca\3\2\2\2\u07ca\u07cb\3\2"+
		"\2\2\u07cb\u07cc\5\u025e\u0130\2\u07cc\u07d0\3\2\2\2\u07cd\u07d0\5\u011a"+
		"\u008e\2\u07ce\u07d0\5\u0118\u008d\2\u07cf\u07a7\3\2\2\2\u07cf\u07b1\3"+
		"\2\2\2\u07cf\u07bb\3\2\2\2\u07cf\u07c5\3\2\2\2\u07cf\u07cd\3\2\2\2\u07cf"+
		"\u07ce\3\2\2\2\u07d0\u0117\3\2\2\2\u07d1\u07d2\5\u0132\u009a\2\u07d2\u07d3"+
		"\5\u0176\u00bc\2\u07d3\u07d4\5\u0120\u0091\2\u07d4\u0119\3\2\2\2\u07d5"+
		"\u07d6\5\u0132\u009a\2\u07d6\u07d7\5\u0178\u00bd\2\u07d7\u07d8\5\u0120"+
		"\u0091\2\u07d8\u011b\3\2\2\2\u07d9\u07da\7\u00ab\2\2\u07da\u07db\7\3\2"+
		"\2\u07db\u07dc\7\23\2\2\u07dc\u07e4\7\4\2\2\u07dd\u07de\7\u00ab\2\2\u07de"+
		"\u07e0\7\3\2\2\u07df\u07e1\5\u011e\u0090\2\u07e0\u07df\3\2\2\2\u07e0\u07e1"+
		"\3\2\2\2\u07e1\u07e2\3\2\2\2\u07e2\u07e4\7\4\2\2\u07e3\u07d9\3\2\2\2\u07e3"+
		"\u07dd\3\2\2\2\u07e4\u011d\3\2\2\2\u07e5\u07e9\5\u0120\u0091\2\u07e6\u07e9"+
		"\7\u00ab\2\2\u07e7\u07e9\5\u011c\u008f\2\u07e8\u07e5\3\2\2\2\u07e8\u07e6"+
		"\3\2\2\2\u07e8\u07e7\3\2\2\2\u07e9\u07f2\3\2\2\2\u07ea\u07ee\5\u026c\u0137"+
		"\2\u07eb\u07ef\5\u0120\u0091\2\u07ec\u07ef\7\u00ab\2\2\u07ed\u07ef\5\u011c"+
		"\u008f\2\u07ee\u07eb\3\2\2\2\u07ee\u07ec\3\2\2\2\u07ee\u07ed\3\2\2\2\u07ef"+
		"\u07f1\3\2\2\2\u07f0\u07ea\3\2\2\2\u07f1\u07f4\3\2\2\2\u07f2\u07f0\3\2"+
		"\2\2\u07f2\u07f3\3\2\2\2\u07f3\u011f\3\2\2\2\u07f4\u07f2\3\2\2\2\u07f5"+
		"\u07fc\5\u0122\u0092\2\u07f6\u07fc\5\u0128\u0095\2\u07f7\u07fc\5\u0124"+
		"\u0093\2\u07f8\u07fc\5\u012c\u0097\2\u07f9\u07fc\5\u012a\u0096\2\u07fa"+
		"\u07fc\5\u01c8\u00e5\2\u07fb\u07f5\3\2\2\2\u07fb\u07f6\3\2\2\2\u07fb\u07f7"+
		"\3\2\2\2\u07fb\u07f8\3\2\2\2\u07fb\u07f9\3\2\2\2\u07fb\u07fa\3\2\2\2\u07fc"+
		"\u0121\3\2\2\2\u07fd\u07fe\7\u00ac\2\2\u07fe\u0123\3\2\2\2\u07ff\u0800"+
		"\7\u00a7\2\2\u0800\u0125\3\2\2\2\u0801\u0802\t\3\2\2\u0802\u0127\3\2\2"+
		"\2\u0803\u0804\7\u00a6\2\2\u0804\u0129\3\2\2\2\u0805\u0806\t\4\2\2\u0806"+
		"\u012b\3\2\2\2\u0807\u0808\7\u00a9\2\2\u0808\u012d\3\2\2\2\u0809\u080e"+
		"\7\u00ab\2\2\u080a\u080b\7\f\2\2\u080b\u080c\7\u00ab\2\2\u080c\u080e\7"+
		"\f\2\2\u080d\u0809\3\2\2\2\u080d\u080a\3\2\2\2\u080e\u012f\3\2\2\2\u080f"+
		"\u0814\7\u00ab\2\2\u0810\u0811\7\f\2\2\u0811\u0812\7\u00ab\2\2\u0812\u0814"+
		"\7\f\2\2\u0813\u080f\3\2\2\2\u0813\u0810\3\2\2\2\u0814\u0131\3\2\2\2\u0815"+
		"\u081a\7\u00ab\2\2\u0816\u0817\7\f\2\2\u0817\u0818\7\u00ab\2\2\u0818\u081a"+
		"\7\f\2\2\u0819\u0815\3\2\2\2\u0819\u0816\3\2\2\2\u081a\u0133\3\2\2\2\u081b"+
		"\u0836\5\u0218\u010d\2\u081c\u0836\5\u021a\u010e\2\u081d\u0836\5\u021c"+
		"\u010f\2\u081e\u0836\5\u021e\u0110\2\u081f\u0836\5\u0220\u0111\2\u0820"+
		"\u0836\5\u0222\u0112\2\u0821\u0836\5\u0224\u0113\2\u0822\u0836\5\u0226"+
		"\u0114\2\u0823\u0836\5\u0228\u0115\2\u0824\u0836\5\u022a\u0116\2\u0825"+
		"\u0836\5\u022c\u0117\2\u0826\u0836\5\u022e\u0118\2\u0827\u0836\5\u0230"+
		"\u0119\2\u0828\u0836\5\u0232\u011a\2\u0829\u0836\5\u0236\u011c\2\u082a"+
		"\u0836\5\u0234\u011b\2\u082b\u0836\5\u0238\u011d\2\u082c\u0836\5\u023a"+
		"\u011e\2\u082d\u0836\5\u023c\u011f\2\u082e\u0836\5\u023e\u0120\2\u082f"+
		"\u0836\5\u0240\u0121\2\u0830\u0836\5\u0242\u0122\2\u0831\u0836\5\u0244"+
		"\u0123\2\u0832\u0836\5\u0246\u0124\2\u0833\u0836\5\u0248\u0125\2\u0834"+
		"\u0836\5\u024a\u0126\2\u0835\u081b\3\2\2\2\u0835\u081c\3\2\2\2\u0835\u081d"+
		"\3\2\2\2\u0835\u081e\3\2\2\2\u0835\u081f\3\2\2\2\u0835\u0820\3\2\2\2\u0835"+
		"\u0821\3\2\2\2\u0835\u0822\3\2\2\2\u0835\u0823\3\2\2\2\u0835\u0824\3\2"+
		"\2\2\u0835\u0825\3\2\2\2\u0835\u0826\3\2\2\2\u0835\u0827\3\2\2\2\u0835"+
		"\u0828\3\2\2\2\u0835\u0829\3\2\2\2\u0835\u082a\3\2\2\2\u0835\u082b\3\2"+
		"\2\2\u0835\u082c\3\2\2\2\u0835\u082d\3\2\2\2\u0835\u082e\3\2\2\2\u0835"+
		"\u082f\3\2\2\2\u0835\u0830\3\2\2\2\u0835\u0831\3\2\2\2\u0835\u0832\3\2"+
		"\2\2\u0835\u0833\3\2\2\2\u0835\u0834\3\2\2\2\u0836\u0135\3\2\2\2\u0837"+
		"\u083a\5\u0166\u00b4\2\u0838\u083a\5\u017e\u00c0\2\u0839\u0837\3\2\2\2"+
		"\u0839\u0838\3\2\2\2\u083a\u0137\3\2\2\2\u083b\u083c\7\u00ab\2\2\u083c"+
		"\u0139\3\2\2\2\u083d\u083e\7\u00ab\2\2\u083e\u013b\3\2\2\2\u083f\u0840"+
		"\5\u0128\u0095\2\u0840\u013d\3\2\2\2\u0841\u0842\7\u00ab\2\2\u0842\u013f"+
		"\3\2\2\2\u0843\u0844\7\u00ab\2\2\u0844\u0141\3\2\2\2\u0845\u0846\7\u00ab"+
		"\2\2\u0846\u0143\3\2\2\2\u0847\u0848\7\u00ab\2\2\u0848\u0145\3\2\2\2\u0849"+
		"\u084a\7\u00ab\2\2\u084a\u0147\3\2\2\2\u084b\u084c\7\u00ab\2\2\u084c\u0149"+
		"\3\2\2\2\u084d\u084e\5\u0128\u0095\2\u084e\u014b\3\2\2\2\u084f\u0850\7"+
		"\u00ab\2\2\u0850\u014d\3\2\2\2\u0851\u0852\5\u0150\u00a9\2\u0852\u0853"+
		"\5\u0134\u009b\2\u0853\u014f\3\2\2\2\u0854\u0855\7\u00ab\2\2\u0855\u0151"+
		"\3\2\2\2\u0856\u0857\7\31\2\2\u0857\u0153\3\2\2\2\u0858\u0859\7\32\2\2"+
		"\u0859\u0155\3\2\2\2\u085a\u085b\7\33\2\2\u085b\u0157\3\2\2\2\u085c\u085d"+
		"\7\33\2\2\u085d\u085e\7f\2\2\u085e\u0159\3\2\2\2\u085f\u0860\7\34\2\2"+
		"\u0860\u015b\3\2\2\2\u0861\u0862\7\34\2\2\u0862\u0863\7:\2\2\u0863\u015d"+
		"\3\2\2\2\u0864\u0865\7\35\2\2\u0865\u015f\3\2\2\2\u0866\u0867\7\36\2\2"+
		"\u0867\u0161\3\2\2\2\u0868\u0869\7 \2\2\u0869\u0163\3\2\2\2\u086a\u086b"+
		"\7!\2\2\u086b\u0165\3\2\2\2\u086c\u086d\7\"\2\2\u086d\u0167\3\2\2\2\u086e"+
		"\u086f\7#\2\2\u086f\u0169\3\2\2\2\u0870\u0871\7$\2\2\u0871\u016b\3\2\2"+
		"\2\u0872\u0873\7%\2\2\u0873\u016d\3\2\2\2\u0874\u0875\7&\2\2\u0875\u016f"+
		"\3\2\2\2\u0876\u0877\7\'\2\2\u0877\u0171\3\2\2\2\u0878\u0879\7(\2\2\u0879"+
		"\u0173\3\2\2\2\u087a\u087b\7*\2\2\u087b\u0175\3\2\2\2\u087c\u087d\7,\2"+
		"\2\u087d\u0177\3\2\2\2\u087e\u087f\7,\2\2\u087f\u0880\7J\2\2\u0880\u0179"+
		"\3\2\2\2\u0881\u0882\7-\2\2\u0882\u017b\3\2\2\2\u0883\u0884\7/\2\2\u0884"+
		"\u017d\3\2\2\2\u0885\u0886\7\60\2\2\u0886\u017f\3\2\2\2\u0887\u0888\7"+
		"\61\2\2\u0888\u0181\3\2\2\2\u0889\u088a\7\62\2\2\u088a\u0183\3\2\2\2\u088b"+
		"\u088c\7\63\2\2\u088c\u0185\3\2\2\2\u088d\u088e\7\64\2\2\u088e\u0187\3"+
		"\2\2\2\u088f\u0890\7\66\2\2\u0890\u0189\3\2\2\2\u0891\u0892\7\67\2\2\u0892"+
		"\u018b\3\2\2\2\u0893\u0894\78\2\2\u0894\u018d\3\2\2\2\u0895\u0896\7:\2"+
		"\2\u0896\u018f\3\2\2\2\u0897\u0898\7;\2\2\u0898\u0191\3\2\2\2\u0899\u089a"+
		"\7<\2\2\u089a\u0193\3\2\2\2\u089b\u089c\7=\2\2\u089c\u0195\3\2\2\2\u089d"+
		"\u089e\7>\2\2\u089e\u0197\3\2\2\2\u089f\u08a0\7?\2\2\u08a0\u0199\3\2\2"+
		"\2\u08a1\u08a2\7@\2\2\u08a2\u019b\3\2\2\2\u08a3\u08a4\7A\2\2\u08a4\u019d"+
		"\3\2\2\2\u08a5\u08a6\7B\2\2\u08a6\u019f\3\2\2\2\u08a7\u08a8\7C\2\2\u08a8"+
		"\u01a1\3\2\2\2\u08a9\u08aa\7E\2\2\u08aa\u01a3\3\2\2\2\u08ab\u08ac\7F\2"+
		"\2\u08ac\u01a5\3\2\2\2\u08ad\u08ae\7G\2\2\u08ae\u01a7\3\2\2\2\u08af\u08b0"+
		"\7H\2\2\u08b0\u01a9\3\2\2\2\u08b1\u08b2\7I\2\2\u08b2\u01ab\3\2\2\2\u08b3"+
		"\u08b4\7J\2\2\u08b4\u01ad\3\2\2\2\u08b5\u08b6\7K\2\2\u08b6\u01af\3\2\2"+
		"\2\u08b7\u08b8\7L\2\2\u08b8\u01b1\3\2\2\2\u08b9\u08ba\7M\2\2\u08ba\u01b3"+
		"\3\2\2\2\u08bb\u08bc\7N\2\2\u08bc\u01b5\3\2\2\2\u08bd\u08be\7P\2\2\u08be"+
		"\u01b7\3\2\2\2\u08bf\u08c0\7\u009a\2\2\u08c0\u01b9\3\2\2\2\u08c1\u08c2"+
		"\7S\2\2\u08c2\u01bb\3\2\2\2\u08c3\u08c4\7T\2\2\u08c4\u01bd\3\2\2\2\u08c5"+
		"\u08c6\7U\2\2\u08c6\u01bf\3\2\2\2\u08c7\u08c8\7V\2\2\u08c8\u01c1\3\2\2"+
		"\2\u08c9\u08ca\7Y\2\2\u08ca\u01c3\3\2\2\2\u08cb\u08cc\7X\2\2\u08cc\u01c5"+
		"\3\2\2\2\u08cd\u08ce\7Z\2\2\u08ce\u01c7\3\2\2\2\u08cf\u08d0\7[\2\2\u08d0"+
		"\u01c9\3\2\2\2\u08d1\u08d2\7\\\2\2\u08d2\u01cb\3\2\2\2\u08d3\u08d4\7]"+
		"\2\2\u08d4\u01cd\3\2\2\2\u08d5\u08d6\7_\2\2\u08d6\u01cf\3\2\2\2\u08d7"+
		"\u08d8\7`\2\2\u08d8\u01d1\3\2\2\2\u08d9\u08da\7a\2\2\u08da\u01d3\3\2\2"+
		"\2\u08db\u08dc\7a\2\2\u08dc\u08dd\7&\2\2\u08dd\u01d5\3\2\2\2\u08de\u08df"+
		"\7c\2\2\u08df\u01d7\3\2\2\2\u08e0\u08e1\7g\2\2\u08e1\u01d9\3\2\2\2\u08e2"+
		"\u08e3\7i\2\2\u08e3\u01db\3\2\2\2\u08e4\u08e5\7j\2\2\u08e5\u01dd\3\2\2"+
		"\2\u08e6\u08e7\7k\2\2\u08e7\u01df\3\2\2\2\u08e8\u08e9\7l\2\2\u08e9\u01e1"+
		"\3\2\2\2\u08ea\u08eb\7n\2\2\u08eb\u01e3\3\2\2\2\u08ec\u08ed\7o\2\2\u08ed"+
		"\u01e5\3\2\2\2\u08ee\u08ef\7q\2\2\u08ef\u01e7\3\2\2\2\u08f0\u08f1\7r\2"+
		"\2\u08f1\u01e9\3\2\2\2\u08f2\u08f3\7s\2\2\u08f3\u01eb\3\2\2\2\u08f4\u08f5"+
		"\7t\2\2\u08f5\u01ed\3\2\2\2\u08f6\u08f7\7u\2\2\u08f7\u01ef\3\2\2\2\u08f8"+
		"\u08f9\7v\2\2\u08f9\u01f1\3\2\2\2\u08fa\u08fb\7w\2\2\u08fb\u01f3\3\2\2"+
		"\2\u08fc\u08fd\7x\2\2\u08fd\u01f5\3\2\2\2\u08fe\u08ff\7z\2\2\u08ff\u01f7"+
		"\3\2\2\2\u0900\u0901\7{\2\2\u0901\u01f9\3\2\2\2\u0902\u0903\7}\2\2\u0903"+
		"\u01fb\3\2\2\2\u0904\u0905\7\177\2\2\u0905\u01fd\3\2\2\2\u0906\u0907\7"+
		"\u0080\2\2\u0907\u01ff\3\2\2\2\u0908\u0909\7\u0082\2\2\u0909\u0201\3\2"+
		"\2\2\u090a\u090b\7\u0083\2\2\u090b\u0203\3\2\2\2\u090c\u090d\7\u0084\2"+
		"\2\u090d\u0205\3\2\2\2\u090e\u090f\7\u0085\2\2\u090f\u0207\3\2\2\2\u0910"+
		"\u0911\7\u0086\2\2\u0911\u0209\3\2\2\2\u0912\u0913\7\u00a4\2\2\u0913\u020b"+
		"\3\2\2\2\u0914\u0915\7\u0087\2\2\u0915\u020d\3\2\2\2\u0916\u0917\7\u0089"+
		"\2\2\u0917\u020f\3\2\2\2\u0918\u0919\7\u008a\2\2\u0919\u0211\3\2\2\2\u091a"+
		"\u091b\7\u008b\2\2\u091b\u0213\3\2\2\2\u091c\u091d\7\u008c\2\2\u091d\u0215"+
		"\3\2\2\2\u091e\u091f\7m\2\2\u091f\u0217\3\2\2\2\u0920\u0921\7\u008e\2"+
		"\2\u0921\u0219\3\2\2\2\u0922\u0923\7\u008f\2\2\u0923\u021b\3\2\2\2\u0924"+
		"\u0925\7\u0090\2\2\u0925\u021d\3\2\2\2\u0926\u0927\7\u0091\2\2\u0927\u021f"+
		"\3\2\2\2\u0928\u0929\7\u0092\2\2\u0929\u0221\3\2\2\2\u092a\u092b\7\u0093"+
		"\2\2\u092b\u0223\3\2\2\2\u092c\u092d\7\u0094\2\2\u092d\u0225\3\2\2\2\u092e"+
		"\u092f\7\u0095\2\2\u092f\u0227\3\2\2\2\u0930\u0931\7\u0096\2\2\u0931\u0229"+
		"\3\2\2\2\u0932\u0933\7\u0097\2\2\u0933\u0934\5\u0254\u012b\2\u0934\u022b"+
		"\3\2\2\2\u0935\u0936\7\u0098\2\2\u0936\u022d\3\2\2\2\u0937\u0938\7\u0099"+
		"\2\2\u0938\u022f\3\2\2\2\u0939\u093a\7\u009a\2\2\u093a\u093b\5\u0250\u0129"+
		"\2\u093b\u0231\3\2\2\2\u093c\u093d\7\u009b\2\2\u093d\u093e\5\u024e\u0128"+
		"\2\u093e\u0233\3\2\2\2\u093f\u0940\7\u009c\2\2\u0940\u0235\3\2\2\2\u0941"+
		"\u0942\7r\2\2\u0942\u0943\5\u0252\u012a\2\u0943\u0237\3\2\2\2\u0944\u0945"+
		"\7\u009d\2\2\u0945\u0239\3\2\2\2\u0946\u0947\7\u009f\2\2\u0947\u023b\3"+
		"\2\2\2\u0948\u0949\7\u009e\2\2\u0949\u023d\3\2\2\2\u094a\u094b\7z\2\2"+
		"\u094b\u023f\3\2\2\2\u094c\u094d\7\u00a0\2\2\u094d\u0241\3\2\2\2\u094e"+
		"\u094f\7\u00a1\2\2\u094f\u0950\5\u024c\u0127\2\u0950\u0243\3\2\2\2\u0951"+
		"\u0952\7\u00ab\2\2\u0952\u0245\3\2\2\2\u0953\u0954\7\u0088\2\2\u0954\u0247"+
		"\3\2\2\2\u0955\u0956\7\u00a2\2\2\u0956\u0249\3\2\2\2\u0957\u0958\7\u00a3"+
		"\2\2\u0958\u024b\3\2\2\2\u0959\u095a\5\u0264\u0133\2\u095a\u0960\5\u0134"+
		"\u009b\2\u095b\u095c\5\u026c\u0137\2\u095c\u095d\5\u0134\u009b\2\u095d"+
		"\u095f\3\2\2\2\u095e\u095b\3\2\2\2\u095f\u0962\3\2\2\2\u0960\u095e\3\2"+
		"\2\2\u0960\u0961\3\2\2\2\u0961\u0963\3\2\2\2\u0962\u0960\3\2\2\2\u0963"+
		"\u0964\5\u0266\u0134\2\u0964\u024d\3\2\2\2\u0965\u0966\5\u0264\u0133\2"+
		"\u0966\u0967\5\u0134\u009b\2\u0967\u0968\5\u026c\u0137\2\u0968\u0969\5"+
		"\u0134\u009b\2\u0969\u096a\5\u0266\u0134\2\u096a\u024f\3\2\2\2\u096b\u096c"+
		"\5\u0264\u0133\2\u096c\u096d\5\u0134\u009b\2\u096d\u096e\5\u0266\u0134"+
		"\2\u096e\u0251\3\2\2\2\u096f\u0970\5\u0264\u0133\2\u0970\u0971\5\u0134"+
		"\u009b\2\u0971\u0972\5\u0266\u0134\2\u0972\u0253\3\2\2\2\u0973\u0974\5"+
		"\u0264\u0133\2\u0974\u0975\5\u0134\u009b\2\u0975\u0976\5\u0266\u0134\2"+
		"\u0976\u0255\3\2\2\2\u0977\u0978\7\23\2\2\u0978\u0257\3\2\2\2\u0979\u097a"+
		"\7\22\2\2\u097a\u0259\3\2\2\2\u097b\u097c\7\2\2\3\u097c\u025b\3\2\2\2"+
		"\u097d\u097e\7\3\2\2\u097e\u025d\3\2\2\2\u097f\u0980\7\4\2\2\u0980\u025f"+
		"\3\2\2\2\u0981\u0982\7\5\2\2\u0982\u0261\3\2\2\2\u0983\u0984\7\6\2\2\u0984"+
		"\u0263\3\2\2\2\u0985\u0986\7\u00ae\2\2\u0986\u0265\3\2\2\2\u0987\u0988"+
		"\7\u00af\2\2\u0988\u0267\3\2\2\2\u0989\u098a\7\7\2\2\u098a\u0269\3\2\2"+
		"\2\u098b\u098c\7\b\2\2\u098c\u026b\3\2\2\2\u098d\u098e\7\t\2\2\u098e\u026d"+
		"\3\2\2\2\u098f\u0990\7\13\2\2\u0990\u026f\3\2\2\2\u0991\u0992\7\r\2\2"+
		"\u0992\u0271\3\2\2\2\u0993\u0994\7\f\2\2\u0994\u0273\3\2\2\2\u0995\u0996"+
		"\7\u00ad\2\2\u0996\u0275\3\2\2\2\u0997\u0998\7\u00ae\2\2\u0998\u0277\3"+
		"\2\2\2\u0999\u099a\7\u00af\2\2\u099a\u0279\3\2\2\2\u099b\u099c\7\u00b0"+
		"\2\2\u099c\u027b\3\2\2\2\u099d\u099e\7\u00b1\2\2\u099e\u027d\3\2\2\2\u00ad"+
		"\u027f\u0282\u0288\u028d\u028f\u0294\u0297\u029a\u02c5\u02d6\u02d9\u02e0"+
		"\u02e5\u02f0\u02fa\u0309\u0314\u0319\u0322\u0327\u032f\u0334\u0338\u033d"+
		"\u0342\u0351\u0357\u035c\u0366\u036b\u0375\u0381\u0388\u0390\u039e\u03a3"+
		"\u03af\u03b3\u03b7\u03bc\u03c1\u03d4\u03db\u03e3\u03e7\u03ec\u03ff\u0408"+
		"\u0417\u0419\u0425\u0433\u043a\u0441\u0449\u0454\u0464\u0471\u047c\u0493"+
		"\u04a1\u04a8\u04b1\u04c4\u04cc\u04d2\u04d7\u04de\u04e3\u04eb\u04f0\u04f7"+
		"\u04fc\u0503\u0508\u050f\u0516\u051d\u0524\u0529\u0530\u0537\u053c\u0543"+
		"\u0548\u054f\u0553\u0556\u055e\u0568\u0573\u0579\u0582\u058f\u0597\u059d"+
		"\u05aa\u05b8\u05cc\u05d5\u05e1\u05e5\u05e9\u05f7\u05ff\u0608\u0613\u0618"+
		"\u061f\u0622\u0628\u0631\u0637\u0649\u064d\u0651\u0656\u065e\u0666\u066a"+
		"\u066d\u0673\u0677\u067e\u0689\u0696\u069f\u06ce\u06d7\u06e7\u06f3\u06fa"+
		"\u0702\u0709\u070c\u071e\u073f\u0746\u074d\u0751\u0756\u075b\u075e\u0761"+
		"\u0764\u076d\u0775\u077d\u0789\u078d\u0794\u079a\u079c\u07a4\u07ad\u07b7"+
		"\u07c1\u07c9\u07cf\u07e0\u07e3\u07e8\u07ee\u07f2\u07fb\u080d\u0813\u0819"+
		"\u0835\u0839\u0960";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}