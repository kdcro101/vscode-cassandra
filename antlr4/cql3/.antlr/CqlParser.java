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
		K_ALL=25, K_ALL_ROLES=26, K_ALL_KEYSPACES=27, K_ALL_FUNCTIONS=28, K_ALLOW=29, 
		K_ALTER=30, K_AND=31, K_ANY=32, K_APPLY=33, K_AS=34, K_ASC=35, K_AUTHORIZE=36, 
		K_BATCH=37, K_BEGIN=38, K_BY=39, K_CALLED=40, K_CLUSTERING=41, K_COLUMNFAMILY=42, 
		K_COMPACT=43, K_CONSISTENCY=44, K_CONTAINS=45, K_CREATE=46, K_CUSTOM=47, 
		K_DELETE=48, K_DESC=49, K_DESCRIBE=50, K_DISTINCT=51, K_DROP=52, K_DURABLE_WRITES=53, 
		K_EACH_QUORUM=54, K_ENTRIES=55, K_EXECUTE=56, K_EXISTS=57, K_FALSE=58, 
		K_FILTERING=59, K_FINALFUNC=60, K_FROM=61, K_FULL=62, K_FUNCTION=63, K_GRANT=64, 
		K_IF=65, K_IN=66, K_INDEX=67, K_INFINITY=68, K_INITCOND=69, K_INPUT=70, 
		K_INSERT=71, K_INTO=72, K_IS=73, K_KEY=74, K_KEYS=75, K_KEYSPACE=76, K_LANGUAGE=77, 
		K_LEVEL=78, K_LIMIT=79, K_LOCAL_ONE=80, K_LOCAL_QUORUM=81, K_LOGGED=82, 
		K_LOGIN=83, K_MATERIALIZED=84, K_MODIFY=85, K_NAN=86, K_NORECURSIVE=87, 
		K_NOSUPERUSER=88, K_NOT=89, K_NULL=90, K_OF=91, K_ON=92, K_ONE=93, K_OPTIONS=94, 
		K_OR=95, K_ORDER=96, K_PARTITION=97, K_PASSWORD=98, K_PER=99, K_PERMISSION=100, 
		K_PERMISSIONS=101, K_PRIMARY=102, K_QUORUM=103, K_RENAME=104, K_REPLACE=105, 
		K_REPLICATION=106, K_RETURNS=107, K_REVOKE=108, K_ROLE=109, K_SCHEMA=110, 
		K_SELECT=111, K_SET=112, K_SFUNC=113, K_STATIC=114, K_STORAGE=115, K_STYPE=116, 
		K_SUPERUSER=117, K_TABLE=118, K_THREE=119, K_TIMESTAMP=120, K_TO=121, 
		K_TOKEN=122, K_TRIGGER=123, K_TRUE=124, K_TRUNCATE=125, K_TTL=126, K_TWO=127, 
		K_TYPE=128, K_UNLOGGED=129, K_UPDATE=130, K_USE=131, K_USER=132, K_USING=133, 
		K_VALUES=134, K_VIEW=135, K_WHERE=136, K_WITH=137, K_WRITETIME=138, K_ASCII=139, 
		K_BIGINT=140, K_BLOB=141, K_BOOLEAN=142, K_COUNTER=143, K_DATE=144, K_DECIMAL=145, 
		K_DOUBLE=146, K_FLOAT=147, K_FROZEN=148, K_INET=149, K_INT=150, K_LIST=151, 
		K_LIST_ROLES=152, K_MAP=153, K_SMALLINT=154, K_TEXT=155, K_TIMEUUID=156, 
		K_TIME=157, K_TINYINT=158, K_TUPLE=159, K_UUID=160, K_VARCHAR=161, K_VARINT=162, 
		K_USERS=163, CODE_BLOCK=164, STRING_LITERAL=165, DECIMAL_LITERAL=166, 
		FLOAT_LITERAL=167, HEXADECIMAL_LITERAL=168, REAL_LITERAL=169, OBJECT_NAME=170, 
		UUID=171, OPERATOR_EQ=172, OPERATOR_LT=173, OPERATOR_GT=174, OPERATOR_LTE=175, 
		OPERATOR_GTE=176;
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
		RULE_dropKeyspace = 65, RULE_dropIndex = 66, RULE_createTable = 67, RULE_createTableDef = 68, 
		RULE_withElement = 69, RULE_clusteringOrder = 70, RULE_clusteringOrderItem = 71, 
		RULE_tableOptions = 72, RULE_tableOptionItem = 73, RULE_tableOptionName = 74, 
		RULE_tableOptionValue = 75, RULE_optionHash = 76, RULE_optionHashItem = 77, 
		RULE_optionHashKey = 78, RULE_optionHashValue = 79, RULE_columnDefinitionList = 80, 
		RULE_columnDefinition = 81, RULE_primaryKeyModifier = 82, RULE_primaryKeyElement = 83, 
		RULE_primaryKeyDefinition = 84, RULE_singlePrimaryKey = 85, RULE_compoundKey = 86, 
		RULE_compositeKey = 87, RULE_partitionKeyList = 88, RULE_clusteringKeyList = 89, 
		RULE_partitionKey = 90, RULE_clusteringKey = 91, RULE_applyBatch = 92, 
		RULE_beginBatch = 93, RULE_beginBatchSpec = 94, RULE_batchType = 95, RULE_alterKeyspace = 96, 
		RULE_replicationList = 97, RULE_replicationListItem = 98, RULE_durableWrites = 99, 
		RULE_use = 100, RULE_truncate = 101, RULE_createIndex = 102, RULE_createIndexSubject = 103, 
		RULE_indexName = 104, RULE_createIndexDef = 105, RULE_createIndexTarget = 106, 
		RULE_indexKeysSpec = 107, RULE_indexEntriesSSpec = 108, RULE_indexFullSpec = 109, 
		RULE_delete = 110, RULE_deleteColumnList = 111, RULE_deleteColumnItem = 112, 
		RULE_update = 113, RULE_ifSpec = 114, RULE_ifConditionList = 115, RULE_ifCondition = 116, 
		RULE_updateAssignments = 117, RULE_updateAssignmentElement = 118, RULE_assignmentSet = 119, 
		RULE_assignmentMap = 120, RULE_assignmentList = 121, RULE_insert = 122, 
		RULE_usingTtlTimestamp = 123, RULE_timestamp = 124, RULE_ttl = 125, RULE_usingTimestampSpec = 126, 
		RULE_ifNotExist = 127, RULE_ifExist = 128, RULE_insertValuesSpec = 129, 
		RULE_insertColumnSpec = 130, RULE_columnList = 131, RULE_expressionList = 132, 
		RULE_expression = 133, RULE_select = 134, RULE_limitSpec = 135, RULE_fromSpec = 136, 
		RULE_orderSpec = 137, RULE_orderSpecElement = 138, RULE_whereSpec = 139, 
		RULE_selectElements = 140, RULE_selectElement = 141, RULE_relationElements = 142, 
		RULE_relationElement = 143, RULE_relationElementConstant = 144, RULE_relationElementIn = 145, 
		RULE_relationElementToken = 146, RULE_relationElementTokenSpec = 147, 
		RULE_relationOperator = 148, RULE_functionCall = 149, RULE_functionArgs = 150, 
		RULE_constant = 151, RULE_collectionElement = 152, RULE_collectionMapElement = 153, 
		RULE_constantCollection = 154, RULE_constantMap = 155, RULE_constantSet = 156, 
		RULE_constantList = 157, RULE_constantTuple = 158, RULE_constantUuid = 159, 
		RULE_constantDecimal = 160, RULE_constantFloat = 161, RULE_constantString = 162, 
		RULE_constantBoolean = 163, RULE_constantHexadecimal = 164, RULE_keyspace = 165, 
		RULE_table = 166, RULE_keyspaceObject = 167, RULE_objectUnknown = 168, 
		RULE_tableSpec = 169, RULE_objectUnknownSpec = 170, RULE_column = 171, 
		RULE_columnUnknown = 172, RULE_dataType = 173, RULE_dataTypeCollection = 174, 
		RULE_dataTypeFundamental = 175, RULE_orderDirection = 176, RULE_role = 177, 
		RULE_trigger = 178, RULE_triggerClass = 179, RULE_materializedView = 180, 
		RULE_type = 181, RULE_aggregate = 182, RULE_function = 183, RULE_language = 184, 
		RULE_user = 185, RULE_password = 186, RULE_hashKey = 187, RULE_param = 188, 
		RULE_paramName = 189, RULE_kwAdd = 190, RULE_kwAggregate = 191, RULE_kwAll = 192, 
		RULE_kwAllFunctions = 193, RULE_kwAllKeyspaces = 194, RULE_kwAllRoles = 195, 
		RULE_kwAllPermissions = 196, RULE_kwAllow = 197, RULE_kwAllowFiltering = 198, 
		RULE_kwAlter = 199, RULE_kwAnd = 200, RULE_kwApply = 201, RULE_kwAs = 202, 
		RULE_kwAsc = 203, RULE_kwAuthorize = 204, RULE_kwBatch = 205, RULE_kwBegin = 206, 
		RULE_kwBy = 207, RULE_kwCalled = 208, RULE_kwClustering = 209, RULE_kwCompact = 210, 
		RULE_kwContains = 211, RULE_kwContainsKey = 212, RULE_kwCreate = 213, 
		RULE_kwDelete = 214, RULE_kwDesc = 215, RULE_kwDescibe = 216, RULE_kwDistinct = 217, 
		RULE_kwDrop = 218, RULE_kwDurableWrites = 219, RULE_kwEntries = 220, RULE_kwExecute = 221, 
		RULE_kwExists = 222, RULE_kwFiltering = 223, RULE_kwFinalfunc = 224, RULE_kwFrom = 225, 
		RULE_kwFull = 226, RULE_kwFunction = 227, RULE_kwGrant = 228, RULE_kwIf = 229, 
		RULE_kwIn = 230, RULE_kwIndex = 231, RULE_kwInitcond = 232, RULE_kwInput = 233, 
		RULE_kwInsert = 234, RULE_kwInto = 235, RULE_kwIs = 236, RULE_kwKey = 237, 
		RULE_kwKeys = 238, RULE_kwKeyspace = 239, RULE_kwLanguage = 240, RULE_kwLimit = 241, 
		RULE_kwList = 242, RULE_kwListRoles = 243, RULE_kwLogged = 244, RULE_kwLogin = 245, 
		RULE_kwMaterialized = 246, RULE_kwModify = 247, RULE_kwNosuperuser = 248, 
		RULE_kwNorecursive = 249, RULE_kwNot = 250, RULE_kwNull = 251, RULE_kwOf = 252, 
		RULE_kwOn = 253, RULE_kwOptions = 254, RULE_kwOr = 255, RULE_kwOrder = 256, 
		RULE_kwOrderBy = 257, RULE_kwPartition = 258, RULE_kwPassword = 259, RULE_kwPermissions = 260, 
		RULE_kwPrimary = 261, RULE_kwRename = 262, RULE_kwReplace = 263, RULE_kwReplication = 264, 
		RULE_kwReturns = 265, RULE_kwRole = 266, RULE_kwSelect = 267, RULE_kwSet = 268, 
		RULE_kwSfunc = 269, RULE_kwStatic = 270, RULE_kwStorage = 271, RULE_kwStype = 272, 
		RULE_kwSuperuser = 273, RULE_kwTable = 274, RULE_kwTimestamp = 275, RULE_kwTo = 276, 
		RULE_kwToken = 277, RULE_kwTrigger = 278, RULE_kwTruncate = 279, RULE_kwTtl = 280, 
		RULE_kwType = 281, RULE_kwUnlogged = 282, RULE_kwUpdate = 283, RULE_kwUse = 284, 
		RULE_kwUser = 285, RULE_kwUsers = 286, RULE_kwUsing = 287, RULE_kwValues = 288, 
		RULE_kwView = 289, RULE_kwWhere = 290, RULE_kwWith = 291, RULE_kwRevoke = 292, 
		RULE_dataTypeAscii = 293, RULE_dataTypeBigint = 294, RULE_dataTypeBlob = 295, 
		RULE_dataTypeBoolean = 296, RULE_dataTypeCounter = 297, RULE_dataTypeDate = 298, 
		RULE_dataTypeDecimal = 299, RULE_dataTypeDouble = 300, RULE_dataTypeFloat = 301, 
		RULE_dataTypeFrozen = 302, RULE_dataTypeInet = 303, RULE_dataTypeInt = 304, 
		RULE_dataTypeList = 305, RULE_dataTypeMap = 306, RULE_dataTypeSmallInt = 307, 
		RULE_dataTypeSet = 308, RULE_dataTypeText = 309, RULE_dataTypeTime = 310, 
		RULE_dataTypeTimeUuid = 311, RULE_dataTypeTimestamp = 312, RULE_dataTypeTinyInt = 313, 
		RULE_dataTypeTuple = 314, RULE_dataTypeUserDefined = 315, RULE_dataTypeUuid = 316, 
		RULE_dataTypeVarChar = 317, RULE_dataTypeVarInt = 318, RULE_dataTypeStructure = 319, 
		RULE_specialStar = 320, RULE_specialDot = 321, RULE_eof = 322, RULE_syntaxBracketLr = 323, 
		RULE_syntaxBracketRr = 324, RULE_syntaxBracketLc = 325, RULE_syntaxBracketRc = 326, 
		RULE_syntaxBracketLa = 327, RULE_syntaxBracketRa = 328, RULE_syntaxBracketLs = 329, 
		RULE_syntaxBracketRs = 330, RULE_syntaxComma = 331, RULE_syntaxColon = 332, 
		RULE_syntaxPlus = 333, RULE_syntaxMinus = 334, RULE_syntaxSquote = 335, 
		RULE_syntaxDquote = 336, RULE_syntaxOperatorEq = 337, RULE_syntaxOperatorLt = 338, 
		RULE_syntaxOperatorGt = 339, RULE_syntaxOperatorLte = 340, RULE_syntaxOperatorGte = 341;
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
		"dropKeyspace", "dropIndex", "createTable", "createTableDef", "withElement", 
		"clusteringOrder", "clusteringOrderItem", "tableOptions", "tableOptionItem", 
		"tableOptionName", "tableOptionValue", "optionHash", "optionHashItem", 
		"optionHashKey", "optionHashValue", "columnDefinitionList", "columnDefinition", 
		"primaryKeyModifier", "primaryKeyElement", "primaryKeyDefinition", "singlePrimaryKey", 
		"compoundKey", "compositeKey", "partitionKeyList", "clusteringKeyList", 
		"partitionKey", "clusteringKey", "applyBatch", "beginBatch", "beginBatchSpec", 
		"batchType", "alterKeyspace", "replicationList", "replicationListItem", 
		"durableWrites", "use", "truncate", "createIndex", "createIndexSubject", 
		"indexName", "createIndexDef", "createIndexTarget", "indexKeysSpec", "indexEntriesSSpec", 
		"indexFullSpec", "delete", "deleteColumnList", "deleteColumnItem", "update", 
		"ifSpec", "ifConditionList", "ifCondition", "updateAssignments", "updateAssignmentElement", 
		"assignmentSet", "assignmentMap", "assignmentList", "insert", "usingTtlTimestamp", 
		"timestamp", "ttl", "usingTimestampSpec", "ifNotExist", "ifExist", "insertValuesSpec", 
		"insertColumnSpec", "columnList", "expressionList", "expression", "select", 
		"limitSpec", "fromSpec", "orderSpec", "orderSpecElement", "whereSpec", 
		"selectElements", "selectElement", "relationElements", "relationElement", 
		"relationElementConstant", "relationElementIn", "relationElementToken", 
		"relationElementTokenSpec", "relationOperator", "functionCall", "functionArgs", 
		"constant", "collectionElement", "collectionMapElement", "constantCollection", 
		"constantMap", "constantSet", "constantList", "constantTuple", "constantUuid", 
		"constantDecimal", "constantFloat", "constantString", "constantBoolean", 
		"constantHexadecimal", "keyspace", "table", "keyspaceObject", "objectUnknown", 
		"tableSpec", "objectUnknownSpec", "column", "columnUnknown", "dataType", 
		"dataTypeCollection", "dataTypeFundamental", "orderDirection", "role", 
		"trigger", "triggerClass", "materializedView", "type", "aggregate", "function", 
		"language", "user", "password", "hashKey", "param", "paramName", "kwAdd", 
		"kwAggregate", "kwAll", "kwAllFunctions", "kwAllKeyspaces", "kwAllRoles", 
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
		"kwTable", "kwTimestamp", "kwTo", "kwToken", "kwTrigger", "kwTruncate", 
		"kwTtl", "kwType", "kwUnlogged", "kwUpdate", "kwUse", "kwUser", "kwUsers", 
		"kwUsing", "kwValues", "kwView", "kwWhere", "kwWith", "kwRevoke", "dataTypeAscii", 
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
			setState(685);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (SEMI - 8)) | (1L << (K_ALTER - 8)) | (1L << (K_APPLY - 8)) | (1L << (K_BEGIN - 8)) | (1L << (K_CREATE - 8)) | (1L << (K_DELETE - 8)) | (1L << (K_DROP - 8)) | (1L << (K_GRANT - 8)) | (1L << (K_INSERT - 8)))) != 0) || ((((_la - 108)) & ~0x3f) == 0 && ((1L << (_la - 108)) & ((1L << (K_REVOKE - 108)) | (1L << (K_SELECT - 108)) | (1L << (K_TRUNCATE - 108)) | (1L << (K_UPDATE - 108)) | (1L << (K_USE - 108)) | (1L << (K_LIST - 108)) | (1L << (K_LIST_ROLES - 108)))) != 0)) {
				{
				setState(684);
				cqls();
				}
			}

			setState(688);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MINUSMINUS) {
				{
				setState(687);
				match(MINUSMINUS);
				}
			}

			setState(690);
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
			setState(701);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(699);
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
					case K_LIST_ROLES:
						{
						setState(692);
						cql();
						setState(694);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==MINUSMINUS) {
							{
							setState(693);
							match(MINUSMINUS);
							}
						}

						setState(696);
						statementSeparator();
						}
						break;
					case SEMI:
						{
						setState(698);
						empty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(703);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			setState(712);
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
			case K_LIST_ROLES:
				{
				setState(704);
				cql();
				setState(709);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(706);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==MINUSMINUS) {
						{
						setState(705);
						match(MINUSMINUS);
						}
					}

					setState(708);
					statementSeparator();
					}
					break;
				}
				}
				break;
			case SEMI:
				{
				setState(711);
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
			setState(714);
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
			setState(716);
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
		public BeginBatchContext beginBatch() {
			return getRuleContext(BeginBatchContext.class,0);
		}
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
			setState(756);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(718);
				beginBatch();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(719);
				alterKeyspace();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(720);
				alterMaterializedView();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(721);
				alterRole();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(722);
				alterTable();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(723);
				alterType();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(724);
				alterUser();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(725);
				applyBatch();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(726);
				createAggregate();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(727);
				createFunction();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(728);
				createIndex();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(729);
				createKeyspace();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(730);
				createMaterializedView();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(731);
				createRole();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(732);
				createTable();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(733);
				createTrigger();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(734);
				createType();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(735);
				createUser();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(736);
				delete();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(737);
				dropAggregate();
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(738);
				dropFunction();
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(739);
				dropIndex();
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(740);
				dropKeyspace();
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(741);
				dropMaterializedView();
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(742);
				dropRole();
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(743);
				dropTable();
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(744);
				dropTrigger();
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(745);
				dropType();
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(746);
				dropUser();
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(747);
				grant();
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(748);
				insert();
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(749);
				listPermissions();
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(750);
				listRoles();
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(751);
				revoke();
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(752);
				select();
				}
				break;
			case 36:
				enterOuterAlt(_localctx, 36);
				{
				setState(753);
				truncate();
				}
				break;
			case 37:
				enterOuterAlt(_localctx, 37);
				{
				setState(754);
				update();
				}
				break;
			case 38:
				enterOuterAlt(_localctx, 38);
				{
				setState(755);
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
			setState(758);
			kwRevoke();
			setState(759);
			priviledge();
			setState(760);
			kwOn();
			setState(761);
			resource();
			setState(762);
			kwFrom();
			setState(763);
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
			setState(765);
			kwList();
			setState(766);
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
		public KwListRolesContext kwListRoles() {
			return getRuleContext(KwListRolesContext.class,0);
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
			setState(768);
			kwListRoles();
			setState(772);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OF) {
				{
				setState(769);
				kwOf();
				setState(770);
				role();
				}
			}

			setState(775);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_NORECURSIVE) {
				{
				setState(774);
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
			setState(777);
			kwList();
			setState(778);
			priviledge();
			setState(782);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ON) {
				{
				setState(779);
				kwOn();
				setState(780);
				resource();
				}
			}

			setState(787);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OF) {
				{
				setState(784);
				kwOf();
				setState(785);
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
			setState(789);
			kwGrant();
			setState(790);
			priviledge();
			setState(791);
			kwOn();
			setState(792);
			resource();
			setState(793);
			kwTo();
			setState(794);
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
			setState(808);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ALL:
				enterOuterAlt(_localctx, 1);
				{
				setState(798);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
				case 1:
					{
					setState(796);
					kwAll();
					}
					break;
				case 2:
					{
					setState(797);
					kwAllPermissions();
					}
					break;
				}
				}
				break;
			case K_ALTER:
				enterOuterAlt(_localctx, 2);
				{
				setState(800);
				kwAlter();
				}
				break;
			case K_AUTHORIZE:
				enterOuterAlt(_localctx, 3);
				{
				setState(801);
				kwAuthorize();
				}
				break;
			case K_DESCRIBE:
				enterOuterAlt(_localctx, 4);
				{
				setState(802);
				kwDescibe();
				}
				break;
			case K_EXECUTE:
				enterOuterAlt(_localctx, 5);
				{
				setState(803);
				kwExecute();
				}
				break;
			case K_CREATE:
				enterOuterAlt(_localctx, 6);
				{
				setState(804);
				kwCreate();
				}
				break;
			case K_DROP:
				enterOuterAlt(_localctx, 7);
				{
				setState(805);
				kwDrop();
				}
				break;
			case K_MODIFY:
				enterOuterAlt(_localctx, 8);
				{
				setState(806);
				kwModify();
				}
				break;
			case K_SELECT:
				enterOuterAlt(_localctx, 9);
				{
				setState(807);
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
		public KwAllFunctionsContext kwAllFunctions() {
			return getRuleContext(KwAllFunctionsContext.class,0);
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
		public KwAllKeyspacesContext kwAllKeyspaces() {
			return getRuleContext(KwAllKeyspacesContext.class,0);
		}
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public KwTableContext kwTable() {
			return getRuleContext(KwTableContext.class,0);
		}
		public KwAllRolesContext kwAllRoles() {
			return getRuleContext(KwAllRolesContext.class,0);
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
			setState(836);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(810);
				kwAllFunctions();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(811);
				kwAllFunctions();
				setState(812);
				kwIn();
				setState(813);
				kwKeyspace();
				setState(814);
				keyspace();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(816);
				kwFunction();
				setState(820);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
				case 1:
					{
					setState(817);
					keyspace();
					setState(818);
					match(DOT);
					}
					break;
				}
				setState(822);
				function();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(824);
				kwAllKeyspaces();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(825);
				kwKeyspace();
				setState(826);
				keyspace();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(829);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_TABLE) {
					{
					setState(828);
					kwTable();
					}
				}

				setState(831);
				tableSpec();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(832);
				kwAllRoles();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(833);
				kwRole();
				setState(834);
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
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
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
			setState(838);
			kwCreate();
			setState(839);
			kwUser();
			setState(841);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(840);
				ifNotExist();
				}
			}

			setState(843);
			user();
			setState(844);
			kwWith();
			setState(845);
			kwPassword();
			setState(846);
			constantString();
			setState(849);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_SUPERUSER:
				{
				setState(847);
				kwSuperuser();
				}
				break;
			case K_NOSUPERUSER:
				{
				setState(848);
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
			setState(851);
			kwCreate();
			setState(852);
			kwRole();
			setState(854);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(853);
				ifNotExist();
				}
			}

			setState(856);
			role();
			setState(858);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(857);
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
		public ObjectUnknownSpecContext objectUnknownSpec() {
			return getRuleContext(ObjectUnknownSpecContext.class,0);
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
			setState(860);
			kwCreate();
			setState(861);
			kwType();
			setState(863);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(862);
				ifNotExist();
				}
			}

			setState(865);
			objectUnknownSpec();
			setState(866);
			syntaxBracketLr();
			setState(867);
			typeMemberColumnList();
			setState(868);
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
			setState(870);
			column();
			setState(871);
			dataType();
			setState(878);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(872);
				syntaxComma();
				setState(873);
				column();
				setState(874);
				dataType();
				}
				}
				setState(880);
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
		public ObjectUnknownSpecContext objectUnknownSpec() {
			return getRuleContext(ObjectUnknownSpecContext.class,0);
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
			setState(881);
			kwCreate();
			setState(882);
			kwTrigger();
			setState(884);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(883);
				ifNotExist();
				}
			}

			setState(886);
			objectUnknownSpec();
			setState(887);
			kwUsing();
			setState(888);
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
		public ObjectUnknownSpecContext objectUnknownSpec() {
			return getRuleContext(ObjectUnknownSpecContext.class,0);
		}
		public KwAsContext kwAs() {
			return getRuleContext(KwAsContext.class,0);
		}
		public KwSelectContext kwSelect() {
			return getRuleContext(KwSelectContext.class,0);
		}
		public ColumnListContext columnList() {
			return getRuleContext(ColumnListContext.class,0);
		}
		public KwFromContext kwFrom() {
			return getRuleContext(KwFromContext.class,0);
		}
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public MaterializedViewWhereContext materializedViewWhere() {
			return getRuleContext(MaterializedViewWhereContext.class,0);
		}
		public PrimaryKeyElementContext primaryKeyElement() {
			return getRuleContext(PrimaryKeyElementContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
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
			setState(890);
			kwCreate();
			setState(891);
			kwMaterialized();
			setState(892);
			kwView();
			setState(894);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(893);
				ifNotExist();
				}
			}

			setState(896);
			objectUnknownSpec();
			setState(897);
			kwAs();
			setState(898);
			kwSelect();
			setState(899);
			columnList();
			setState(900);
			kwFrom();
			setState(901);
			tableSpec();
			setState(902);
			materializedViewWhere();
			setState(903);
			primaryKeyElement();
			setState(907);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(904);
				kwWith();
				setState(905);
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
			setState(909);
			kwWhere();
			setState(910);
			columnNotNullList();
			setState(914);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_AND) {
				{
				setState(911);
				kwAnd();
				setState(912);
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
			setState(916);
			columnNotNull();
			setState(922);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(917);
					kwAnd();
					setState(918);
					columnNotNull();
					}
					} 
				}
				setState(924);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
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
			setState(925);
			column();
			setState(926);
			kwIs();
			setState(927);
			kwNot();
			setState(928);
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
			setState(940);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(930);
				tableOptions();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(931);
				tableOptions();
				setState(932);
				kwAnd();
				setState(933);
				clusteringOrder();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(935);
				clusteringOrder();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(936);
				clusteringOrder();
				setState(937);
				kwAnd();
				setState(938);
				tableOptions();
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
		public ObjectUnknownContext objectUnknown() {
			return getRuleContext(ObjectUnknownContext.class,0);
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
			setState(942);
			kwCreate();
			setState(943);
			kwKeyspace();
			setState(945);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(944);
				ifNotExist();
				}
			}

			setState(947);
			objectUnknown();
			setState(948);
			kwWith();
			setState(949);
			kwReplication();
			setState(950);
			match(OPERATOR_EQ);
			setState(951);
			syntaxBracketLc();
			setState(952);
			replicationList();
			setState(953);
			syntaxBracketRc();
			setState(957);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_AND) {
				{
				setState(954);
				kwAnd();
				setState(955);
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
		public ObjectUnknownSpecContext objectUnknownSpec() {
			return getRuleContext(ObjectUnknownSpecContext.class,0);
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
			setState(959);
			kwCreate();
			setState(961);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OR) {
				{
				setState(960);
				orReplace();
				}
			}

			setState(963);
			kwFunction();
			setState(965);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(964);
				ifNotExist();
				}
			}

			setState(967);
			objectUnknownSpec();
			setState(968);
			syntaxBracketLr();
			setState(970);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OBJECT_NAME) {
				{
				setState(969);
				paramList();
				}
			}

			setState(972);
			syntaxBracketRr();
			setState(973);
			returnMode();
			setState(974);
			kwReturns();
			setState(975);
			dataType();
			setState(976);
			kwLanguage();
			setState(977);
			language();
			setState(978);
			kwAs();
			setState(979);
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
			setState(981);
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
			setState(983);
			param();
			setState(989);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(984);
				syntaxComma();
				setState(985);
				param();
				}
				}
				setState(991);
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
			setState(996);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_CALLED:
				{
				setState(992);
				kwCalled();
				}
				break;
			case K_RETURNS:
				{
				setState(993);
				kwReturns();
				setState(994);
				kwNull();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(998);
			kwOn();
			setState(999);
			kwNull();
			setState(1000);
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
		public ObjectUnknownSpecContext objectUnknownSpec() {
			return getRuleContext(ObjectUnknownSpecContext.class,0);
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
			setState(1002);
			kwCreate();
			setState(1004);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OR) {
				{
				setState(1003);
				orReplace();
				}
			}

			setState(1006);
			kwAggregate();
			setState(1008);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1007);
				ifNotExist();
				}
			}

			setState(1010);
			objectUnknownSpec();
			setState(1011);
			syntaxBracketLr();
			setState(1012);
			dataType();
			setState(1013);
			syntaxBracketRr();
			setState(1014);
			kwSfunc();
			setState(1015);
			function();
			setState(1016);
			kwStype();
			setState(1017);
			dataType();
			setState(1018);
			kwFinalfunc();
			setState(1019);
			function();
			setState(1020);
			kwInitcond();
			setState(1021);
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
			setState(1027);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1023);
				constant();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1024);
				initCondList();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1025);
				initCondListNested();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1026);
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
			setState(1029);
			syntaxBracketLc();
			setState(1030);
			initCondHashItem();
			setState(1036);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1031);
				syntaxComma();
				setState(1032);
				initCondHashItem();
				}
				}
				setState(1038);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1039);
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
			setState(1041);
			hashKey();
			setState(1042);
			match(COLON);
			setState(1043);
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
			setState(1045);
			syntaxBracketLr();
			setState(1046);
			initCondList();
			setState(1053);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LR_BRACKET || _la==COMMA) {
				{
				setState(1051);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case COMMA:
					{
					setState(1047);
					syntaxComma();
					setState(1048);
					constant();
					}
					break;
				case LR_BRACKET:
					{
					setState(1050);
					initCondList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(1055);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1056);
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
			setState(1058);
			syntaxBracketLr();
			setState(1059);
			constant();
			setState(1065);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1060);
				syntaxComma();
				setState(1061);
				constant();
				}
				}
				setState(1067);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1068);
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
			setState(1070);
			kwOr();
			setState(1071);
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
			setState(1073);
			kwAlter();
			setState(1074);
			kwUser();
			setState(1075);
			user();
			setState(1076);
			kwWith();
			setState(1077);
			userPassword();
			setState(1079);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_NOSUPERUSER || _la==K_SUPERUSER) {
				{
				setState(1078);
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
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
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
			setState(1081);
			kwPassword();
			setState(1082);
			constantString();
			}
		}
		catch (RecognitionException re) {
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
			setState(1086);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_SUPERUSER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1084);
				kwSuperuser();
				}
				break;
			case K_NOSUPERUSER:
				enterOuterAlt(_localctx, 2);
				{
				setState(1085);
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
			setState(1088);
			kwAlter();
			setState(1089);
			kwType();
			setState(1093);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				{
				setState(1090);
				keyspace();
				setState(1091);
				match(DOT);
				}
				break;
			}
			setState(1095);
			type();
			setState(1096);
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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1099);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ALTER) {
				{
				setState(1098);
				alterTypeAlterType();
				}
			}

			setState(1102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ADD) {
				{
				setState(1101);
				alterTypeAdd();
				}
			}

			setState(1105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_RENAME) {
				{
				setState(1104);
				alterTypeRename();
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
			setState(1107);
			kwRename();
			setState(1108);
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
			setState(1110);
			alterTypeRenameItem();
			setState(1116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(1111);
				kwAnd();
				setState(1112);
				alterTypeRenameItem();
				}
				}
				setState(1118);
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
			setState(1119);
			column();
			setState(1120);
			kwTo();
			setState(1121);
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
			setState(1123);
			kwAdd();
			setState(1124);
			column();
			setState(1125);
			dataType();
			setState(1132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1126);
				syntaxComma();
				setState(1127);
				column();
				setState(1128);
				dataType();
				}
				}
				setState(1134);
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
			setState(1135);
			kwAlter();
			setState(1136);
			column();
			setState(1137);
			kwType();
			setState(1138);
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
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public AlterTableOperationContext alterTableOperation() {
			return getRuleContext(AlterTableOperationContext.class,0);
		}
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
			setState(1140);
			kwAlter();
			setState(1141);
			kwTable();
			setState(1142);
			tableSpec();
			setState(1143);
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
			setState(1152);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1145);
				alterTableAdd();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1146);
				alterTableDropColumns();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1147);
				alterTableDropColumns();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1148);
				alterTableDropCompactStorage();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1149);
				alterTableRename();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1150);
				alterTableWith();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				 this.notifyErrorListeners("rule.alterTableOperation"); 
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
			setState(1154);
			kwWith();
			setState(1155);
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
			setState(1157);
			kwRename();
			setState(1158);
			column();
			setState(1159);
			kwTo();
			setState(1160);
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
			setState(1162);
			kwDrop();
			setState(1163);
			kwCompact();
			setState(1164);
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
			setState(1166);
			kwDrop();
			setState(1167);
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
			setState(1169);
			column();
			setState(1175);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1170);
				syntaxComma();
				setState(1171);
				column();
				}
				}
				setState(1177);
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
			setState(1178);
			kwAdd();
			setState(1179);
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
			setState(1181);
			column();
			setState(1182);
			dataType();
			setState(1189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1183);
				syntaxComma();
				setState(1184);
				column();
				setState(1185);
				dataType();
				}
				}
				setState(1191);
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
			setState(1192);
			kwAlter();
			setState(1193);
			kwRole();
			setState(1194);
			role();
			setState(1196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(1195);
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
			setState(1198);
			kwWith();
			{
			setState(1199);
			roleWithOptions();
			setState(1205);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(1200);
				kwAnd();
				setState(1201);
				roleWithOptions();
				}
				}
				setState(1207);
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
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
		}
		public KwLoginContext kwLogin() {
			return getRuleContext(KwLoginContext.class,0);
		}
		public ConstantBooleanContext constantBoolean() {
			return getRuleContext(ConstantBooleanContext.class,0);
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
			setState(1224);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_PASSWORD:
				enterOuterAlt(_localctx, 1);
				{
				setState(1208);
				kwPassword();
				setState(1209);
				match(OPERATOR_EQ);
				setState(1210);
				constantString();
				}
				break;
			case K_LOGIN:
				enterOuterAlt(_localctx, 2);
				{
				setState(1212);
				kwLogin();
				setState(1213);
				match(OPERATOR_EQ);
				setState(1214);
				constantBoolean();
				}
				break;
			case K_SUPERUSER:
				enterOuterAlt(_localctx, 3);
				{
				setState(1216);
				kwSuperuser();
				setState(1217);
				match(OPERATOR_EQ);
				setState(1218);
				constantBoolean();
				}
				break;
			case K_OPTIONS:
				enterOuterAlt(_localctx, 4);
				{
				setState(1220);
				kwOptions();
				setState(1221);
				match(OPERATOR_EQ);
				setState(1222);
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
			setState(1226);
			kwAlter();
			setState(1227);
			kwMaterialized();
			setState(1228);
			kwView();
			setState(1232);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
			case 1:
				{
				setState(1229);
				keyspace();
				setState(1230);
				match(DOT);
				}
				break;
			}
			setState(1234);
			materializedView();
			setState(1238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(1235);
				kwWith();
				setState(1236);
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
			setState(1240);
			kwDrop();
			setState(1241);
			kwUser();
			setState(1243);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1242);
				ifExist();
				}
			}

			setState(1245);
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
			setState(1247);
			kwDrop();
			setState(1248);
			kwType();
			setState(1250);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1249);
				ifExist();
				}
			}

			setState(1255);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				{
				setState(1252);
				keyspace();
				setState(1253);
				match(DOT);
				}
				break;
			}
			setState(1257);
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
			setState(1259);
			kwDrop();
			setState(1260);
			kwMaterialized();
			setState(1261);
			kwView();
			setState(1263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1262);
				ifExist();
				}
			}

			setState(1268);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
			case 1:
				{
				setState(1265);
				keyspace();
				setState(1266);
				match(DOT);
				}
				break;
			}
			setState(1270);
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
			setState(1272);
			kwDrop();
			setState(1273);
			kwAggregate();
			setState(1275);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1274);
				ifExist();
				}
			}

			setState(1280);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				{
				setState(1277);
				keyspace();
				setState(1278);
				match(DOT);
				}
				break;
			}
			setState(1282);
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
			setState(1284);
			kwDrop();
			setState(1285);
			kwFunction();
			setState(1287);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1286);
				ifExist();
				}
			}

			setState(1292);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,68,_ctx) ) {
			case 1:
				{
				setState(1289);
				keyspace();
				setState(1290);
				match(DOT);
				}
				break;
			}
			setState(1294);
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
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
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
			setState(1296);
			kwDrop();
			setState(1297);
			kwTrigger();
			setState(1299);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1298);
				ifExist();
				}
			}

			setState(1301);
			trigger();
			setState(1302);
			kwOn();
			setState(1303);
			tableSpec();
			}
		}
		catch (RecognitionException re) {
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
			setState(1305);
			kwDrop();
			setState(1306);
			kwRole();
			setState(1308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1307);
				ifExist();
				}
			}

			setState(1310);
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
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
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
			setState(1312);
			kwDrop();
			setState(1313);
			kwTable();
			setState(1315);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1314);
				ifExist();
				}
			}

			setState(1317);
			tableSpec();
			}
		}
		catch (RecognitionException re) {
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
			setState(1319);
			kwDrop();
			setState(1320);
			kwKeyspace();
			setState(1322);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1321);
				ifExist();
				}
			}

			setState(1324);
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
			setState(1326);
			kwDrop();
			setState(1327);
			kwIndex();
			setState(1329);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1328);
				ifExist();
				}
			}

			setState(1334);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				{
				setState(1331);
				keyspace();
				setState(1332);
				match(DOT);
				}
				break;
			}
			setState(1336);
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
		public ObjectUnknownSpecContext objectUnknownSpec() {
			return getRuleContext(ObjectUnknownSpecContext.class,0);
		}
		public CreateTableDefContext createTableDef() {
			return getRuleContext(CreateTableDefContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
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
			setState(1338);
			kwCreate();
			setState(1339);
			kwTable();
			setState(1341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1340);
				ifNotExist();
				}
			}

			setState(1343);
			objectUnknownSpec();
			setState(1344);
			createTableDef();
			setState(1346);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(1345);
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

	public static class CreateTableDefContext extends ParserRuleContext {
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public ColumnDefinitionListContext columnDefinitionList() {
			return getRuleContext(ColumnDefinitionListContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public CreateTableDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createTableDef; }
	}

	public final CreateTableDefContext createTableDef() throws RecognitionException {
		CreateTableDefContext _localctx = new CreateTableDefContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_createTableDef);
		try {
			setState(1353);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(1348);
				syntaxBracketLr();
				setState(1349);
				columnDefinitionList();
				setState(1350);
				syntaxBracketRr();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_WITH:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.createTableDef"); 
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

	public static class WithElementContext extends ParserRuleContext {
		public KwWithContext kwWith() {
			return getRuleContext(KwWithContext.class,0);
		}
		public TableOptionsContext tableOptions() {
			return getRuleContext(TableOptionsContext.class,0);
		}
		public KwAndContext kwAnd() {
			return getRuleContext(KwAndContext.class,0);
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
		enterRule(_localctx, 138, RULE_withElement);
		int _la;
		try {
			setState(1371);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,81,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1355);
				kwWith();
				setState(1356);
				tableOptions();
				setState(1360);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AND) {
					{
					setState(1357);
					kwAnd();
					setState(1358);
					clusteringOrder();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1362);
				kwWith();
				setState(1364);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_CLUSTERING) {
					{
					setState(1363);
					clusteringOrder();
					}
				}

				setState(1369);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AND) {
					{
					setState(1366);
					kwAnd();
					setState(1367);
					tableOptions();
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
		public List<ClusteringOrderItemContext> clusteringOrderItem() {
			return getRuleContexts(ClusteringOrderItemContext.class);
		}
		public ClusteringOrderItemContext clusteringOrderItem(int i) {
			return getRuleContext(ClusteringOrderItemContext.class,i);
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
		public ClusteringOrderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clusteringOrder; }
	}

	public final ClusteringOrderContext clusteringOrder() throws RecognitionException {
		ClusteringOrderContext _localctx = new ClusteringOrderContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_clusteringOrder);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1373);
			kwClustering();
			setState(1374);
			kwOrder();
			setState(1375);
			kwBy();
			setState(1376);
			syntaxBracketLr();
			setState(1377);
			clusteringOrderItem();
			setState(1383);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1378);
				syntaxComma();
				setState(1379);
				clusteringOrderItem();
				}
				}
				setState(1385);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1386);
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

	public static class ClusteringOrderItemContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public OrderDirectionContext orderDirection() {
			return getRuleContext(OrderDirectionContext.class,0);
		}
		public ClusteringOrderItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clusteringOrderItem; }
	}

	public final ClusteringOrderItemContext clusteringOrderItem() throws RecognitionException {
		ClusteringOrderItemContext _localctx = new ClusteringOrderItemContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_clusteringOrderItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1388);
			column();
			setState(1390);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ASC || _la==K_DESC) {
				{
				setState(1389);
				orderDirection();
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
		enterRule(_localctx, 144, RULE_tableOptions);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1392);
			tableOptionItem();
			setState(1398);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,84,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1393);
					kwAnd();
					setState(1394);
					tableOptionItem();
					}
					} 
				}
				setState(1400);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,84,_ctx);
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
		enterRule(_localctx, 146, RULE_tableOptionItem);
		try {
			setState(1409);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1401);
				tableOptionName();
				setState(1402);
				match(OPERATOR_EQ);
				setState(1403);
				tableOptionValue();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1405);
				tableOptionName();
				setState(1406);
				match(OPERATOR_EQ);
				setState(1407);
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
		enterRule(_localctx, 148, RULE_tableOptionName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1411);
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
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
		}
		public ConstantFloatContext constantFloat() {
			return getRuleContext(ConstantFloatContext.class,0);
		}
		public TableOptionValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableOptionValue; }
	}

	public final TableOptionValueContext tableOptionValue() throws RecognitionException {
		TableOptionValueContext _localctx = new TableOptionValueContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_tableOptionValue);
		try {
			setState(1415);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1413);
				constantString();
				}
				break;
			case DECIMAL_LITERAL:
			case FLOAT_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1414);
				constantFloat();
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
		enterRule(_localctx, 152, RULE_optionHash);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1417);
			syntaxBracketLc();
			setState(1418);
			optionHashItem();
			setState(1424);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1419);
				syntaxComma();
				setState(1420);
				optionHashItem();
				}
				}
				setState(1426);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1427);
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
		enterRule(_localctx, 154, RULE_optionHashItem);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1429);
			optionHashKey();
			setState(1430);
			match(COLON);
			setState(1431);
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
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
		}
		public OptionHashKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionHashKey; }
	}

	public final OptionHashKeyContext optionHashKey() throws RecognitionException {
		OptionHashKeyContext _localctx = new OptionHashKeyContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_optionHashKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1433);
			constantString();
			}
		}
		catch (RecognitionException re) {
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
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
		}
		public ConstantFloatContext constantFloat() {
			return getRuleContext(ConstantFloatContext.class,0);
		}
		public OptionHashValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionHashValue; }
	}

	public final OptionHashValueContext optionHashValue() throws RecognitionException {
		OptionHashValueContext _localctx = new OptionHashValueContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_optionHashValue);
		try {
			setState(1437);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1435);
				constantString();
				}
				break;
			case DECIMAL_LITERAL:
			case FLOAT_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1436);
				constantFloat();
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
		enterRule(_localctx, 160, RULE_columnDefinitionList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1439);
			columnDefinition();
			setState(1445);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1440);
					syntaxComma();
					setState(1441);
					columnDefinition();
					}
					} 
				}
				setState(1447);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
			}
			setState(1451);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(1448);
				syntaxComma();
				setState(1449);
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
		public ColumnUnknownContext columnUnknown() {
			return getRuleContext(ColumnUnknownContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public PrimaryKeyModifierContext primaryKeyModifier() {
			return getRuleContext(PrimaryKeyModifierContext.class,0);
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
		enterRule(_localctx, 162, RULE_columnDefinition);
		try {
			setState(1465);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1453);
				columnUnknown();
				setState(1454);
				dataType();
				setState(1455);
				primaryKeyModifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1457);
				columnUnknown();
				setState(1458);
				dataType();
				setState(1459);
				kwStatic();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1461);
				columnUnknown();
				setState(1462);
				dataType();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.columnDefinition"); 
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

	public static class PrimaryKeyModifierContext extends ParserRuleContext {
		public KwPrimaryContext kwPrimary() {
			return getRuleContext(KwPrimaryContext.class,0);
		}
		public KwKeyContext kwKey() {
			return getRuleContext(KwKeyContext.class,0);
		}
		public PrimaryKeyModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryKeyModifier; }
	}

	public final PrimaryKeyModifierContext primaryKeyModifier() throws RecognitionException {
		PrimaryKeyModifierContext _localctx = new PrimaryKeyModifierContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_primaryKeyModifier);
		try {
			setState(1473);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1467);
				kwPrimary();
				setState(1468);
				kwKey();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1470);
				kwPrimary();
				 this.notifyErrorListeners("rule.primaryKeyModifier"); 
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
		enterRule(_localctx, 166, RULE_primaryKeyElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1475);
			kwPrimary();
			setState(1476);
			kwKey();
			setState(1477);
			syntaxBracketLr();
			setState(1478);
			primaryKeyDefinition();
			setState(1479);
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
		enterRule(_localctx, 168, RULE_primaryKeyDefinition);
		try {
			setState(1484);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,93,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1481);
				singlePrimaryKey();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1482);
				compoundKey();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1483);
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
		enterRule(_localctx, 170, RULE_singlePrimaryKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1486);
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
		enterRule(_localctx, 172, RULE_compoundKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1488);
			partitionKey();
			{
			setState(1489);
			syntaxComma();
			setState(1490);
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
		enterRule(_localctx, 174, RULE_compositeKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1492);
			syntaxBracketLr();
			setState(1493);
			partitionKeyList();
			setState(1494);
			syntaxBracketRr();
			{
			setState(1495);
			syntaxComma();
			setState(1496);
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
		enterRule(_localctx, 176, RULE_partitionKeyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1498);
			partitionKey();
			}
			setState(1504);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1499);
				syntaxComma();
				setState(1500);
				partitionKey();
				}
				}
				setState(1506);
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
		enterRule(_localctx, 178, RULE_clusteringKeyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1507);
			clusteringKey();
			}
			setState(1513);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1508);
				syntaxComma();
				setState(1509);
				clusteringKey();
				}
				}
				setState(1515);
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
		enterRule(_localctx, 180, RULE_partitionKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1516);
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
		enterRule(_localctx, 182, RULE_clusteringKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1518);
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
		enterRule(_localctx, 184, RULE_applyBatch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1520);
			kwApply();
			setState(1521);
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
		public BeginBatchSpecContext beginBatchSpec() {
			return getRuleContext(BeginBatchSpecContext.class,0);
		}
		public DeleteContext delete() {
			return getRuleContext(DeleteContext.class,0);
		}
		public InsertContext insert() {
			return getRuleContext(InsertContext.class,0);
		}
		public UpdateContext update() {
			return getRuleContext(UpdateContext.class,0);
		}
		public BeginBatchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_beginBatch; }
	}

	public final BeginBatchContext beginBatch() throws RecognitionException {
		BeginBatchContext _localctx = new BeginBatchContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_beginBatch);
		try {
			setState(1532);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,96,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1523);
				beginBatchSpec();
				setState(1524);
				delete();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1526);
				beginBatchSpec();
				setState(1527);
				insert();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1529);
				beginBatchSpec();
				setState(1530);
				update();
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

	public static class BeginBatchSpecContext extends ParserRuleContext {
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
		public BeginBatchSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_beginBatchSpec; }
	}

	public final BeginBatchSpecContext beginBatchSpec() throws RecognitionException {
		BeginBatchSpecContext _localctx = new BeginBatchSpecContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_beginBatchSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1534);
			kwBegin();
			setState(1536);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_LOGGED || _la==K_UNLOGGED) {
				{
				setState(1535);
				batchType();
				}
			}

			setState(1538);
			kwBatch();
			setState(1540);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1539);
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
		enterRule(_localctx, 190, RULE_batchType);
		try {
			setState(1544);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_LOGGED:
				enterOuterAlt(_localctx, 1);
				{
				setState(1542);
				kwLogged();
				}
				break;
			case K_UNLOGGED:
				enterOuterAlt(_localctx, 2);
				{
				setState(1543);
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
		enterRule(_localctx, 192, RULE_alterKeyspace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1546);
			kwAlter();
			setState(1547);
			kwKeyspace();
			setState(1548);
			keyspace();
			setState(1549);
			kwWith();
			setState(1550);
			kwReplication();
			setState(1551);
			match(OPERATOR_EQ);
			setState(1552);
			syntaxBracketLc();
			setState(1553);
			replicationList();
			setState(1554);
			syntaxBracketRc();
			setState(1558);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_AND) {
				{
				setState(1555);
				kwAnd();
				setState(1556);
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
		enterRule(_localctx, 194, RULE_replicationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1560);
			replicationListItem();
			setState(1566);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1561);
				syntaxComma();
				setState(1562);
				replicationListItem();
				}
				}
				setState(1568);
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
		enterRule(_localctx, 196, RULE_replicationListItem);
		try {
			setState(1575);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,102,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1569);
				match(STRING_LITERAL);
				setState(1570);
				match(COLON);
				setState(1571);
				match(STRING_LITERAL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1572);
				match(STRING_LITERAL);
				setState(1573);
				match(COLON);
				setState(1574);
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
		public ConstantBooleanContext constantBoolean() {
			return getRuleContext(ConstantBooleanContext.class,0);
		}
		public DurableWritesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_durableWrites; }
	}

	public final DurableWritesContext durableWrites() throws RecognitionException {
		DurableWritesContext _localctx = new DurableWritesContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_durableWrites);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1577);
			kwDurableWrites();
			setState(1578);
			match(OPERATOR_EQ);
			setState(1579);
			constantBoolean();
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 200, RULE_use);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1581);
			kwUse();
			setState(1582);
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
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public KwTableContext kwTable() {
			return getRuleContext(KwTableContext.class,0);
		}
		public TruncateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_truncate; }
	}

	public final TruncateContext truncate() throws RecognitionException {
		TruncateContext _localctx = new TruncateContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_truncate);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1584);
			kwTruncate();
			setState(1586);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_TABLE) {
				{
				setState(1585);
				kwTable();
				}
			}

			setState(1588);
			tableSpec();
			}
		}
		catch (RecognitionException re) {
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
		public CreateIndexSubjectContext createIndexSubject() {
			return getRuleContext(CreateIndexSubjectContext.class,0);
		}
		public CreateIndexDefContext createIndexDef() {
			return getRuleContext(CreateIndexDefContext.class,0);
		}
		public IfNotExistContext ifNotExist() {
			return getRuleContext(IfNotExistContext.class,0);
		}
		public IndexNameContext indexName() {
			return getRuleContext(IndexNameContext.class,0);
		}
		public CreateIndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createIndex; }
	}

	public final CreateIndexContext createIndex() throws RecognitionException {
		CreateIndexContext _localctx = new CreateIndexContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_createIndex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1590);
			kwCreate();
			setState(1591);
			kwIndex();
			setState(1593);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1592);
				ifNotExist();
				}
			}

			setState(1596);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STRING_LITERAL || _la==OBJECT_NAME) {
				{
				setState(1595);
				indexName();
				}
			}

			setState(1598);
			createIndexSubject();
			setState(1599);
			createIndexDef();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateIndexSubjectContext extends ParserRuleContext {
		public KwOnContext kwOn() {
			return getRuleContext(KwOnContext.class,0);
		}
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public CreateIndexSubjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createIndexSubject; }
	}

	public final CreateIndexSubjectContext createIndexSubject() throws RecognitionException {
		CreateIndexSubjectContext _localctx = new CreateIndexSubjectContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_createIndexSubject);
		try {
			setState(1605);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ON:
				enterOuterAlt(_localctx, 1);
				{
				setState(1601);
				kwOn();
				setState(1602);
				tableSpec();
				}
				break;
			case EOF:
			case LR_BRACKET:
			case SEMI:
			case MINUSMINUS:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.createIndexSubject"); 
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

	public static class IndexNameContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
		}
		public IndexNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexName; }
	}

	public final IndexNameContext indexName() throws RecognitionException {
		IndexNameContext _localctx = new IndexNameContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_indexName);
		try {
			setState(1609);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(1607);
				match(OBJECT_NAME);
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1608);
				constantString();
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

	public static class CreateIndexDefContext extends ParserRuleContext {
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public CreateIndexTargetContext createIndexTarget() {
			return getRuleContext(CreateIndexTargetContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public CreateIndexDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createIndexDef; }
	}

	public final CreateIndexDefContext createIndexDef() throws RecognitionException {
		CreateIndexDefContext _localctx = new CreateIndexDefContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_createIndexDef);
		try {
			setState(1616);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(1611);
				syntaxBracketLr();
				setState(1612);
				createIndexTarget();
				setState(1613);
				syntaxBracketRr();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.createIndexDef"); 
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

	public static class CreateIndexTargetContext extends ParserRuleContext {
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
		public CreateIndexTargetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createIndexTarget; }
	}

	public final CreateIndexTargetContext createIndexTarget() throws RecognitionException {
		CreateIndexTargetContext _localctx = new CreateIndexTargetContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_createIndexTarget);
		try {
			setState(1623);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DQUOTE:
			case K_DURABLE_WRITES:
			case K_INITCOND:
			case K_KEY:
			case K_LANGUAGE:
			case K_LEVEL:
			case K_OPTIONS:
			case K_PARTITION:
			case K_PERMISSIONS:
			case K_REPLICATION:
			case K_ROLE:
			case K_TTL:
			case K_TYPE:
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(1618);
				column();
				}
				break;
			case K_KEYS:
				enterOuterAlt(_localctx, 2);
				{
				setState(1619);
				indexKeysSpec();
				}
				break;
			case K_ENTRIES:
				enterOuterAlt(_localctx, 3);
				{
				setState(1620);
				indexEntriesSSpec();
				}
				break;
			case K_FULL:
				enterOuterAlt(_localctx, 4);
				{
				setState(1621);
				indexFullSpec();
				}
				break;
			case RR_BRACKET:
				enterOuterAlt(_localctx, 5);
				{
				 this.notifyErrorListeners("rule.createIndexTarget"); 
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
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public IndexKeysSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexKeysSpec; }
	}

	public final IndexKeysSpecContext indexKeysSpec() throws RecognitionException {
		IndexKeysSpecContext _localctx = new IndexKeysSpecContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_indexKeysSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1625);
			kwKeys();
			setState(1626);
			syntaxBracketLr();
			setState(1629);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DQUOTE:
			case K_DURABLE_WRITES:
			case K_INITCOND:
			case K_KEY:
			case K_LANGUAGE:
			case K_LEVEL:
			case K_OPTIONS:
			case K_PARTITION:
			case K_PERMISSIONS:
			case K_REPLICATION:
			case K_ROLE:
			case K_TTL:
			case K_TYPE:
			case OBJECT_NAME:
				{
				setState(1627);
				column();
				}
				break;
			case RR_BRACKET:
				{
				 this.notifyErrorListeners("rule.indexKeysSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1631);
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
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public IndexEntriesSSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexEntriesSSpec; }
	}

	public final IndexEntriesSSpecContext indexEntriesSSpec() throws RecognitionException {
		IndexEntriesSSpecContext _localctx = new IndexEntriesSSpecContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_indexEntriesSSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1633);
			kwEntries();
			setState(1634);
			syntaxBracketLr();
			setState(1637);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DQUOTE:
			case K_DURABLE_WRITES:
			case K_INITCOND:
			case K_KEY:
			case K_LANGUAGE:
			case K_LEVEL:
			case K_OPTIONS:
			case K_PARTITION:
			case K_PERMISSIONS:
			case K_REPLICATION:
			case K_ROLE:
			case K_TTL:
			case K_TYPE:
			case OBJECT_NAME:
				{
				setState(1635);
				column();
				}
				break;
			case RR_BRACKET:
				{
				 this.notifyErrorListeners("rule.indexEntriesSSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1639);
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
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public IndexFullSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexFullSpec; }
	}

	public final IndexFullSpecContext indexFullSpec() throws RecognitionException {
		IndexFullSpecContext _localctx = new IndexFullSpecContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_indexFullSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1641);
			kwFull();
			setState(1642);
			syntaxBracketLr();
			setState(1645);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DQUOTE:
			case K_DURABLE_WRITES:
			case K_INITCOND:
			case K_KEY:
			case K_LANGUAGE:
			case K_LEVEL:
			case K_OPTIONS:
			case K_PARTITION:
			case K_PERMISSIONS:
			case K_REPLICATION:
			case K_ROLE:
			case K_TTL:
			case K_TYPE:
			case OBJECT_NAME:
				{
				setState(1643);
				column();
				}
				break;
			case RR_BRACKET:
				{
				 this.notifyErrorListeners("rule.indexFullSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1647);
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
		enterRule(_localctx, 220, RULE_delete);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1649);
			kwDelete();
			setState(1651);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DQUOTE || _la==K_DURABLE_WRITES || ((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & ((1L << (K_INITCOND - 69)) | (1L << (K_KEY - 69)) | (1L << (K_LANGUAGE - 69)) | (1L << (K_LEVEL - 69)) | (1L << (K_OPTIONS - 69)) | (1L << (K_PARTITION - 69)) | (1L << (K_PERMISSIONS - 69)) | (1L << (K_REPLICATION - 69)) | (1L << (K_ROLE - 69)) | (1L << (K_TTL - 69)) | (1L << (K_TYPE - 69)))) != 0) || _la==OBJECT_NAME) {
				{
				setState(1650);
				deleteColumnList();
				}
			}

			setState(1653);
			fromSpec();
			setState(1655);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1654);
				usingTimestampSpec();
				}
			}

			setState(1659);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_WHERE:
				{
				setState(1657);
				whereSpec();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_IF:
				{
				 this.notifyErrorListeners("rule.whereSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1663);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,116,_ctx) ) {
			case 1:
				{
				setState(1661);
				ifExist();
				}
				break;
			case 2:
				{
				setState(1662);
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
		enterRule(_localctx, 222, RULE_deleteColumnList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1665);
			deleteColumnItem();
			}
			setState(1671);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1666);
				syntaxComma();
				setState(1667);
				deleteColumnItem();
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

	public static class DeleteColumnItemContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public SyntaxBracketLsContext syntaxBracketLs() {
			return getRuleContext(SyntaxBracketLsContext.class,0);
		}
		public SyntaxBracketRsContext syntaxBracketRs() {
			return getRuleContext(SyntaxBracketRsContext.class,0);
		}
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
		}
		public ConstantDecimalContext constantDecimal() {
			return getRuleContext(ConstantDecimalContext.class,0);
		}
		public DeleteColumnItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deleteColumnItem; }
	}

	public final DeleteColumnItemContext deleteColumnItem() throws RecognitionException {
		DeleteColumnItemContext _localctx = new DeleteColumnItemContext(_ctx, getState());
		enterRule(_localctx, 224, RULE_deleteColumnItem);
		try {
			setState(1683);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1674);
				column();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1675);
				column();
				setState(1676);
				syntaxBracketLs();
				setState(1679);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case STRING_LITERAL:
					{
					setState(1677);
					constantString();
					}
					break;
				case DECIMAL_LITERAL:
					{
					setState(1678);
					constantDecimal();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1681);
				syntaxBracketRs();
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
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public UpdateAssignmentsContext updateAssignments() {
			return getRuleContext(UpdateAssignmentsContext.class,0);
		}
		public WhereSpecContext whereSpec() {
			return getRuleContext(WhereSpecContext.class,0);
		}
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
		enterRule(_localctx, 226, RULE_update);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1685);
			kwUpdate();
			setState(1686);
			tableSpec();
			setState(1688);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1687);
				usingTtlTimestamp();
				}
			}

			setState(1690);
			updateAssignments();
			setState(1693);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_WHERE:
				{
				setState(1691);
				whereSpec();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_IF:
				{
				 this.notifyErrorListeners("rule.whereSpec"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1697);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,122,_ctx) ) {
			case 1:
				{
				setState(1695);
				ifExist();
				}
				break;
			case 2:
				{
				setState(1696);
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
		enterRule(_localctx, 228, RULE_ifSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1699);
			kwIf();
			setState(1700);
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
		enterRule(_localctx, 230, RULE_ifConditionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1702);
			ifCondition();
			}
			setState(1708);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(1703);
				kwAnd();
				setState(1704);
				ifCondition();
				}
				}
				setState(1710);
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
		enterRule(_localctx, 232, RULE_ifCondition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1711);
			match(OBJECT_NAME);
			setState(1712);
			match(OPERATOR_EQ);
			setState(1713);
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

	public static class UpdateAssignmentsContext extends ParserRuleContext {
		public KwSetContext kwSet() {
			return getRuleContext(KwSetContext.class,0);
		}
		public List<UpdateAssignmentElementContext> updateAssignmentElement() {
			return getRuleContexts(UpdateAssignmentElementContext.class);
		}
		public UpdateAssignmentElementContext updateAssignmentElement(int i) {
			return getRuleContext(UpdateAssignmentElementContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public UpdateAssignmentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_updateAssignments; }
	}

	public final UpdateAssignmentsContext updateAssignments() throws RecognitionException {
		UpdateAssignmentsContext _localctx = new UpdateAssignmentsContext(_ctx, getState());
		enterRule(_localctx, 234, RULE_updateAssignments);
		int _la;
		try {
			setState(1726);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_SET:
				enterOuterAlt(_localctx, 1);
				{
				setState(1715);
				kwSet();
				{
				setState(1716);
				updateAssignmentElement();
				}
				setState(1722);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1717);
					syntaxComma();
					setState(1718);
					updateAssignmentElement();
					}
					}
					setState(1724);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_IF:
			case K_WHERE:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.updateAssignments"); 
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

	public static class UpdateAssignmentElementContext extends ParserRuleContext {
		public List<ColumnContext> column() {
			return getRuleContexts(ColumnContext.class);
		}
		public ColumnContext column(int i) {
			return getRuleContext(ColumnContext.class,i);
		}
		public SyntaxOperatorEqContext syntaxOperatorEq() {
			return getRuleContext(SyntaxOperatorEqContext.class,0);
		}
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public ConstantCollectionContext constantCollection() {
			return getRuleContext(ConstantCollectionContext.class,0);
		}
		public ConstantDecimalContext constantDecimal() {
			return getRuleContext(ConstantDecimalContext.class,0);
		}
		public SyntaxPlusContext syntaxPlus() {
			return getRuleContext(SyntaxPlusContext.class,0);
		}
		public SyntaxMinusContext syntaxMinus() {
			return getRuleContext(SyntaxMinusContext.class,0);
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
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public SyntaxBracketLsContext syntaxBracketLs() {
			return getRuleContext(SyntaxBracketLsContext.class,0);
		}
		public SyntaxBracketRsContext syntaxBracketRs() {
			return getRuleContext(SyntaxBracketRsContext.class,0);
		}
		public UpdateAssignmentElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_updateAssignmentElement; }
	}

	public final UpdateAssignmentElementContext updateAssignmentElement() throws RecognitionException {
		UpdateAssignmentElementContext _localctx = new UpdateAssignmentElementContext(_ctx, getState());
		enterRule(_localctx, 236, RULE_updateAssignmentElement);
		try {
			setState(1805);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,134,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1728);
				column();
				setState(1729);
				syntaxOperatorEq();
				setState(1732);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case K_FALSE:
				case K_NULL:
				case K_TRUE:
				case STRING_LITERAL:
				case DECIMAL_LITERAL:
				case FLOAT_LITERAL:
				case HEXADECIMAL_LITERAL:
				case UUID:
					{
					setState(1730);
					constant();
					}
					break;
				case LR_BRACKET:
				case LC_BRACKET:
				case LS_BRACKET:
					{
					setState(1731);
					constantCollection();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1734);
				column();
				setState(1735);
				syntaxOperatorEq();
				setState(1736);
				column();
				setState(1739);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1737);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1738);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1741);
				constantDecimal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1743);
				column();
				setState(1744);
				syntaxOperatorEq();
				setState(1745);
				column();
				setState(1748);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1746);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1747);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1750);
				assignmentMap();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1752);
				column();
				setState(1753);
				syntaxOperatorEq();
				setState(1754);
				column();
				setState(1757);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1755);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1756);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1759);
				assignmentSet();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1761);
				column();
				setState(1762);
				syntaxOperatorEq();
				setState(1763);
				column();
				setState(1766);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1764);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1765);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1768);
				assignmentList();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1770);
				column();
				setState(1771);
				syntaxOperatorEq();
				setState(1772);
				assignmentSet();
				setState(1775);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1773);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1774);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1777);
				match(OBJECT_NAME);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1779);
				column();
				setState(1780);
				syntaxOperatorEq();
				setState(1781);
				assignmentMap();
				setState(1784);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1782);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1783);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1786);
				match(OBJECT_NAME);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1788);
				column();
				setState(1789);
				syntaxOperatorEq();
				setState(1790);
				assignmentList();
				setState(1793);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1791);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1792);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1795);
				match(OBJECT_NAME);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1797);
				column();
				setState(1798);
				syntaxBracketLs();
				setState(1799);
				constantDecimal();
				setState(1800);
				syntaxBracketRs();
				setState(1801);
				syntaxOperatorEq();
				setState(1802);
				constant();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				 this.notifyErrorListeners("rule.updateAssignmentElement"); 
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
		enterRule(_localctx, 238, RULE_assignmentSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1807);
			syntaxBracketLc();
			setState(1808);
			constant();
			setState(1814);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1809);
				syntaxComma();
				setState(1810);
				constant();
				}
				}
				setState(1816);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1817);
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
		enterRule(_localctx, 240, RULE_assignmentMap);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1819);
			syntaxBracketLc();
			{
			setState(1820);
			constant();
			setState(1821);
			syntaxColon();
			setState(1822);
			constant();
			}
			setState(1830);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_FALSE || _la==K_NULL || ((((_la - 124)) & ~0x3f) == 0 && ((1L << (_la - 124)) & ((1L << (K_TRUE - 124)) | (1L << (STRING_LITERAL - 124)) | (1L << (DECIMAL_LITERAL - 124)) | (1L << (FLOAT_LITERAL - 124)) | (1L << (HEXADECIMAL_LITERAL - 124)) | (1L << (UUID - 124)))) != 0)) {
				{
				{
				setState(1824);
				constant();
				setState(1825);
				syntaxColon();
				setState(1826);
				constant();
				}
				}
				setState(1832);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1833);
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
		enterRule(_localctx, 242, RULE_assignmentList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1835);
			syntaxBracketLs();
			setState(1836);
			constant();
			setState(1842);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COLON) {
				{
				{
				setState(1837);
				syntaxColon();
				setState(1838);
				constant();
				}
				}
				setState(1844);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1845);
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
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public InsertColumnSpecContext insertColumnSpec() {
			return getRuleContext(InsertColumnSpecContext.class,0);
		}
		public InsertValuesSpecContext insertValuesSpec() {
			return getRuleContext(InsertValuesSpecContext.class,0);
		}
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
		enterRule(_localctx, 244, RULE_insert);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1847);
			kwInsert();
			setState(1848);
			kwInto();
			setState(1849);
			tableSpec();
			setState(1850);
			insertColumnSpec();
			setState(1851);
			insertValuesSpec();
			setState(1854);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_IF:
				{
				setState(1852);
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
			setState(1857);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1856);
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
		enterRule(_localctx, 246, RULE_usingTtlTimestamp);
		try {
			setState(1875);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,140,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1859);
				kwUsing();
				setState(1860);
				ttl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1862);
				kwUsing();
				setState(1863);
				ttl();
				setState(1864);
				kwAnd();
				setState(1865);
				timestamp();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1867);
				kwUsing();
				setState(1868);
				timestamp();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1870);
				kwUsing();
				setState(1871);
				timestamp();
				setState(1872);
				kwAnd();
				setState(1873);
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
		public ConstantDecimalContext constantDecimal() {
			return getRuleContext(ConstantDecimalContext.class,0);
		}
		public TimestampContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timestamp; }
	}

	public final TimestampContext timestamp() throws RecognitionException {
		TimestampContext _localctx = new TimestampContext(_ctx, getState());
		enterRule(_localctx, 248, RULE_timestamp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1877);
			kwTimestamp();
			setState(1878);
			constantDecimal();
			}
		}
		catch (RecognitionException re) {
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
		public ConstantDecimalContext constantDecimal() {
			return getRuleContext(ConstantDecimalContext.class,0);
		}
		public TtlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ttl; }
	}

	public final TtlContext ttl() throws RecognitionException {
		TtlContext _localctx = new TtlContext(_ctx, getState());
		enterRule(_localctx, 250, RULE_ttl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1880);
			kwTtl();
			setState(1881);
			constantDecimal();
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 252, RULE_usingTimestampSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1883);
			kwUsing();
			setState(1884);
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
		enterRule(_localctx, 254, RULE_ifNotExist);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1886);
			kwIf();
			setState(1887);
			kwNot();
			setState(1888);
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
		enterRule(_localctx, 256, RULE_ifExist);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1890);
			kwIf();
			setState(1891);
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
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public InsertValuesSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertValuesSpec; }
	}

	public final InsertValuesSpecContext insertValuesSpec() throws RecognitionException {
		InsertValuesSpecContext _localctx = new InsertValuesSpecContext(_ctx, getState());
		enterRule(_localctx, 258, RULE_insertValuesSpec);
		try {
			setState(1901);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_VALUES:
				enterOuterAlt(_localctx, 1);
				{
				setState(1893);
				kwValues();
				setState(1894);
				syntaxBracketLr();
				setState(1895);
				expressionList();
				setState(1898);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case RR_BRACKET:
					{
					setState(1896);
					syntaxBracketRr();
					}
					break;
				case EOF:
				case SEMI:
				case MINUSMINUS:
				case K_IF:
				case K_USING:
					{
					 this.notifyErrorListeners("rule.syntaxBracketRr"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_IF:
			case K_USING:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.insertValuesSpec"); 
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

	public static class InsertColumnSpecContext extends ParserRuleContext {
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public ColumnListContext columnList() {
			return getRuleContext(ColumnListContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public InsertColumnSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertColumnSpec; }
	}

	public final InsertColumnSpecContext insertColumnSpec() throws RecognitionException {
		InsertColumnSpecContext _localctx = new InsertColumnSpecContext(_ctx, getState());
		enterRule(_localctx, 260, RULE_insertColumnSpec);
		try {
			setState(1908);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(1903);
				syntaxBracketLr();
				setState(1904);
				columnList();
				setState(1905);
				syntaxBracketRr();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_IF:
			case K_USING:
			case K_VALUES:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.insertColumnSpec"); 
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
		enterRule(_localctx, 262, RULE_columnList);
		int _la;
		try {
			setState(1922);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DQUOTE:
			case K_DURABLE_WRITES:
			case K_INITCOND:
			case K_KEY:
			case K_LANGUAGE:
			case K_LEVEL:
			case K_OPTIONS:
			case K_PARTITION:
			case K_PERMISSIONS:
			case K_REPLICATION:
			case K_ROLE:
			case K_TTL:
			case K_TYPE:
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(1910);
				column();
				setState(1918);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1911);
					syntaxComma();
					setState(1914);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case DQUOTE:
					case K_DURABLE_WRITES:
					case K_INITCOND:
					case K_KEY:
					case K_LANGUAGE:
					case K_LEVEL:
					case K_OPTIONS:
					case K_PARTITION:
					case K_PERMISSIONS:
					case K_REPLICATION:
					case K_ROLE:
					case K_TTL:
					case K_TYPE:
					case OBJECT_NAME:
						{
						setState(1912);
						column();
						}
						break;
					case RR_BRACKET:
					case COMMA:
					case K_FROM:
						{
						 this.notifyErrorListeners("rule.column"); 
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					setState(1920);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case RR_BRACKET:
			case K_FROM:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.column_list"); 
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

	public static class ExpressionListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
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
		enterRule(_localctx, 264, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1924);
			expression();
			setState(1930);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1925);
				syntaxComma();
				setState(1926);
				expression();
				}
				}
				setState(1932);
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

	public static class ExpressionContext extends ParserRuleContext {
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public ConstantCollectionContext constantCollection() {
			return getRuleContext(ConstantCollectionContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 266, RULE_expression);
		try {
			setState(1938);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LR_BRACKET:
			case LC_BRACKET:
			case LS_BRACKET:
			case K_FALSE:
			case K_NULL:
			case K_TRUE:
			case STRING_LITERAL:
			case DECIMAL_LITERAL:
			case FLOAT_LITERAL:
			case HEXADECIMAL_LITERAL:
			case UUID:
				enterOuterAlt(_localctx, 1);
				{
				setState(1935);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case K_FALSE:
				case K_NULL:
				case K_TRUE:
				case STRING_LITERAL:
				case DECIMAL_LITERAL:
				case FLOAT_LITERAL:
				case HEXADECIMAL_LITERAL:
				case UUID:
					{
					setState(1933);
					constant();
					}
					break;
				case LR_BRACKET:
				case LC_BRACKET:
				case LS_BRACKET:
					{
					setState(1934);
					constantCollection();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case EOF:
			case RR_BRACKET:
			case COMMA:
			case SEMI:
			case MINUSMINUS:
			case K_IF:
			case K_USING:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.expression"); 
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
		enterRule(_localctx, 268, RULE_select);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1940);
			kwSelect();
			setState(1942);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_DISTINCT) {
				{
				setState(1941);
				kwDistinct();
				}
			}

			setState(1944);
			selectElements();
			setState(1945);
			fromSpec();
			setState(1947);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WHERE) {
				{
				setState(1946);
				whereSpec();
				}
			}

			setState(1950);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ORDER) {
				{
				setState(1949);
				orderSpec();
				}
			}

			setState(1953);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_LIMIT) {
				{
				setState(1952);
				limitSpec();
				}
			}

			setState(1956);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ALLOW) {
				{
				setState(1955);
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
		public ConstantDecimalContext constantDecimal() {
			return getRuleContext(ConstantDecimalContext.class,0);
		}
		public LimitSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_limitSpec; }
	}

	public final LimitSpecContext limitSpec() throws RecognitionException {
		LimitSpecContext _localctx = new LimitSpecContext(_ctx, getState());
		enterRule(_localctx, 270, RULE_limitSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1958);
			kwLimit();
			setState(1961);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DECIMAL_LITERAL:
				{
				setState(1959);
				constantDecimal();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_ALLOW:
				{
				 this.notifyErrorListeners("rule.constantDecimal"); 
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

	public static class FromSpecContext extends ParserRuleContext {
		public KwFromContext kwFrom() {
			return getRuleContext(KwFromContext.class,0);
		}
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public FromSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fromSpec; }
	}

	public final FromSpecContext fromSpec() throws RecognitionException {
		FromSpecContext _localctx = new FromSpecContext(_ctx, getState());
		enterRule(_localctx, 272, RULE_fromSpec);
		try {
			setState(1967);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_FROM:
				enterOuterAlt(_localctx, 1);
				{
				setState(1963);
				kwFrom();
				setState(1964);
				tableSpec();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_ALLOW:
			case K_IF:
			case K_LIMIT:
			case K_ORDER:
			case K_USING:
			case K_WHERE:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.fromSpec"); 
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
		enterRule(_localctx, 274, RULE_orderSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1969);
			kwOrderBy();
			setState(1970);
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
		enterRule(_localctx, 276, RULE_orderSpecElement);
		try {
			setState(1978);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DQUOTE:
			case K_DURABLE_WRITES:
			case K_INITCOND:
			case K_KEY:
			case K_LANGUAGE:
			case K_LEVEL:
			case K_OPTIONS:
			case K_PARTITION:
			case K_PERMISSIONS:
			case K_REPLICATION:
			case K_ROLE:
			case K_TTL:
			case K_TYPE:
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(1972);
				column();
				setState(1975);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case K_ASC:
					{
					setState(1973);
					kwAsc();
					}
					break;
				case K_DESC:
					{
					setState(1974);
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
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_ALLOW:
			case K_LIMIT:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.orderSpecElement"); 
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
		enterRule(_localctx, 278, RULE_whereSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1980);
			kwWhere();
			setState(1981);
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
		enterRule(_localctx, 280, RULE_selectElements);
		int _la;
		try {
			setState(1994);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,160,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1983);
				specialStar();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1984);
				selectElement();
				setState(1990);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1985);
					syntaxComma();
					setState(1986);
					selectElement();
					}
					}
					setState(1992);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.selectElements"); 
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
		enterRule(_localctx, 282, RULE_selectElement);
		int _la;
		try {
			setState(2010);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,163,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1996);
				column();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1997);
				column();
				setState(2001);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AS) {
					{
					setState(1998);
					kwAs();
					setState(1999);
					match(OBJECT_NAME);
					}
				}

				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2003);
				functionCall();
				setState(2007);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AS) {
					{
					setState(2004);
					kwAs();
					setState(2005);
					match(OBJECT_NAME);
					}
				}

				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.selectElement"); 
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
		enterRule(_localctx, 284, RULE_relationElements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(2012);
			relationElement();
			}
			setState(2018);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(2013);
				kwAnd();
				setState(2014);
				relationElement();
				}
				}
				setState(2020);
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
		public RelationElementConstantContext relationElementConstant() {
			return getRuleContext(RelationElementConstantContext.class,0);
		}
		public RelationElementInContext relationElementIn() {
			return getRuleContext(RelationElementInContext.class,0);
		}
		public RelationElementTokenContext relationElementToken() {
			return getRuleContext(RelationElementTokenContext.class,0);
		}
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public RelationElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationElement; }
	}

	public final RelationElementContext relationElement() throws RecognitionException {
		RelationElementContext _localctx = new RelationElementContext(_ctx, getState());
		enterRule(_localctx, 286, RULE_relationElement);
		try {
			setState(2027);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,165,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2021);
				relationElementConstant();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2022);
				relationElementIn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2023);
				relationElementToken();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2024);
				match(OBJECT_NAME);
				 this.notifyErrorListeners("rule.relationElement"); 
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				 this.notifyErrorListeners("rule.relationElement"); 
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

	public static class RelationElementConstantContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public RelationOperatorContext relationOperator() {
			return getRuleContext(RelationOperatorContext.class,0);
		}
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public RelationElementConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationElementConstant; }
	}

	public final RelationElementConstantContext relationElementConstant() throws RecognitionException {
		RelationElementConstantContext _localctx = new RelationElementConstantContext(_ctx, getState());
		enterRule(_localctx, 288, RULE_relationElementConstant);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2029);
			column();
			setState(2030);
			relationOperator();
			setState(2033);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_FALSE:
			case K_NULL:
			case K_TRUE:
			case STRING_LITERAL:
			case DECIMAL_LITERAL:
			case FLOAT_LITERAL:
			case HEXADECIMAL_LITERAL:
			case UUID:
				{
				setState(2031);
				constant();
				}
				break;
			case EOF:
			case SEMI:
			case MINUSMINUS:
			case K_ALLOW:
			case K_AND:
			case K_IF:
			case K_LIMIT:
			case K_ORDER:
			case K_PRIMARY:
				{
				 this.notifyErrorListeners("rule.constant"); 
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

	public static class RelationElementInContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
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
		public RelationElementInContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationElementIn; }
	}

	public final RelationElementInContext relationElementIn() throws RecognitionException {
		RelationElementInContext _localctx = new RelationElementInContext(_ctx, getState());
		enterRule(_localctx, 290, RULE_relationElementIn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2035);
			column();
			setState(2036);
			kwIn();
			setState(2037);
			syntaxBracketLr();
			setState(2039);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_FALSE || _la==K_NULL || ((((_la - 124)) & ~0x3f) == 0 && ((1L << (_la - 124)) & ((1L << (K_TRUE - 124)) | (1L << (STRING_LITERAL - 124)) | (1L << (DECIMAL_LITERAL - 124)) | (1L << (FLOAT_LITERAL - 124)) | (1L << (HEXADECIMAL_LITERAL - 124)) | (1L << (OBJECT_NAME - 124)) | (1L << (UUID - 124)))) != 0)) {
				{
				setState(2038);
				functionArgs();
				}
			}

			setState(2041);
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

	public static class RelationElementTokenContext extends ParserRuleContext {
		public List<RelationElementTokenSpecContext> relationElementTokenSpec() {
			return getRuleContexts(RelationElementTokenSpecContext.class);
		}
		public RelationElementTokenSpecContext relationElementTokenSpec(int i) {
			return getRuleContext(RelationElementTokenSpecContext.class,i);
		}
		public RelationOperatorContext relationOperator() {
			return getRuleContext(RelationOperatorContext.class,0);
		}
		public RelationElementTokenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationElementToken; }
	}

	public final RelationElementTokenContext relationElementToken() throws RecognitionException {
		RelationElementTokenContext _localctx = new RelationElementTokenContext(_ctx, getState());
		enterRule(_localctx, 292, RULE_relationElementToken);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2043);
			relationElementTokenSpec();
			setState(2046);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,168,_ctx) ) {
			case 1:
				{
				setState(2044);
				relationOperator();
				}
				break;
			case 2:
				{
				 this.notifyErrorListeners("rule.relationOperator"); 
				}
				break;
			}
			setState(2048);
			relationElementTokenSpec();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelationElementTokenSpecContext extends ParserRuleContext {
		public KwTokenContext kwToken() {
			return getRuleContext(KwTokenContext.class,0);
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
		public RelationElementTokenSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationElementTokenSpec; }
	}

	public final RelationElementTokenSpecContext relationElementTokenSpec() throws RecognitionException {
		RelationElementTokenSpecContext _localctx = new RelationElementTokenSpecContext(_ctx, getState());
		enterRule(_localctx, 294, RULE_relationElementTokenSpec);
		try {
			setState(2064);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,172,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2050);
				kwToken();
				setState(2053);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LR_BRACKET:
					{
					setState(2051);
					syntaxBracketLr();
					}
					break;
				case EOF:
				case RR_BRACKET:
				case SEMI:
				case DQUOTE:
				case MINUSMINUS:
				case K_ALLOW:
				case K_AND:
				case K_CONTAINS:
				case K_DURABLE_WRITES:
				case K_IF:
				case K_INITCOND:
				case K_KEY:
				case K_LANGUAGE:
				case K_LEVEL:
				case K_LIMIT:
				case K_OPTIONS:
				case K_ORDER:
				case K_PARTITION:
				case K_PERMISSIONS:
				case K_PRIMARY:
				case K_REPLICATION:
				case K_ROLE:
				case K_TOKEN:
				case K_TTL:
				case K_TYPE:
				case OBJECT_NAME:
				case OPERATOR_EQ:
				case OPERATOR_LT:
				case OPERATOR_GT:
				case OPERATOR_LTE:
				case OPERATOR_GTE:
					{
					 this.notifyErrorListeners("rule.syntaxBracketLr"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2057);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case DQUOTE:
				case K_DURABLE_WRITES:
				case K_INITCOND:
				case K_KEY:
				case K_LANGUAGE:
				case K_LEVEL:
				case K_OPTIONS:
				case K_PARTITION:
				case K_PERMISSIONS:
				case K_REPLICATION:
				case K_ROLE:
				case K_TTL:
				case K_TYPE:
				case OBJECT_NAME:
					{
					setState(2055);
					column();
					}
					break;
				case EOF:
				case RR_BRACKET:
				case SEMI:
				case MINUSMINUS:
				case K_ALLOW:
				case K_AND:
				case K_CONTAINS:
				case K_IF:
				case K_LIMIT:
				case K_ORDER:
				case K_PRIMARY:
				case K_TOKEN:
				case OPERATOR_EQ:
				case OPERATOR_LT:
				case OPERATOR_GT:
				case OPERATOR_LTE:
				case OPERATOR_GTE:
					{
					 this.notifyErrorListeners("rule.column"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2061);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case RR_BRACKET:
					{
					setState(2059);
					syntaxBracketRr();
					}
					break;
				case EOF:
				case SEMI:
				case MINUSMINUS:
				case K_ALLOW:
				case K_AND:
				case K_CONTAINS:
				case K_IF:
				case K_LIMIT:
				case K_ORDER:
				case K_PRIMARY:
				case K_TOKEN:
				case OPERATOR_EQ:
				case OPERATOR_LT:
				case OPERATOR_GT:
				case OPERATOR_LTE:
				case OPERATOR_GTE:
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
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.relationElementTokenSpec"); 
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

	public static class RelationOperatorContext extends ParserRuleContext {
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
		public KwContainsContext kwContains() {
			return getRuleContext(KwContainsContext.class,0);
		}
		public KwContainsKeyContext kwContainsKey() {
			return getRuleContext(KwContainsKeyContext.class,0);
		}
		public RelationOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationOperator; }
	}

	public final RelationOperatorContext relationOperator() throws RecognitionException {
		RelationOperatorContext _localctx = new RelationOperatorContext(_ctx, getState());
		enterRule(_localctx, 296, RULE_relationOperator);
		try {
			setState(2074);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,173,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2066);
				syntaxOperatorEq();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2067);
				syntaxOperatorLt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2068);
				syntaxOperatorGt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2069);
				syntaxOperatorLte();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2070);
				syntaxOperatorGte();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2071);
				kwContains();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2072);
				kwContainsKey();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				 this.notifyErrorListeners("rule.relationOperator"); 
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
		enterRule(_localctx, 298, RULE_functionCall);
		int _la;
		try {
			setState(2086);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,175,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2076);
				match(OBJECT_NAME);
				setState(2077);
				match(LR_BRACKET);
				setState(2078);
				match(STAR);
				setState(2079);
				match(RR_BRACKET);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2080);
				match(OBJECT_NAME);
				setState(2081);
				match(LR_BRACKET);
				setState(2083);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_FALSE || _la==K_NULL || ((((_la - 124)) & ~0x3f) == 0 && ((1L << (_la - 124)) & ((1L << (K_TRUE - 124)) | (1L << (STRING_LITERAL - 124)) | (1L << (DECIMAL_LITERAL - 124)) | (1L << (FLOAT_LITERAL - 124)) | (1L << (HEXADECIMAL_LITERAL - 124)) | (1L << (OBJECT_NAME - 124)) | (1L << (UUID - 124)))) != 0)) {
					{
					setState(2082);
					functionArgs();
					}
				}

				setState(2085);
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
		enterRule(_localctx, 300, RULE_functionArgs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2091);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,176,_ctx) ) {
			case 1:
				{
				setState(2088);
				constant();
				}
				break;
			case 2:
				{
				setState(2089);
				match(OBJECT_NAME);
				}
				break;
			case 3:
				{
				setState(2090);
				functionCall();
				}
				break;
			}
			setState(2101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2093);
				syntaxComma();
				setState(2097);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,177,_ctx) ) {
				case 1:
					{
					setState(2094);
					constant();
					}
					break;
				case 2:
					{
					setState(2095);
					match(OBJECT_NAME);
					}
					break;
				case 3:
					{
					setState(2096);
					functionCall();
					}
					break;
				}
				}
				}
				setState(2103);
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
		public ConstantUuidContext constantUuid() {
			return getRuleContext(ConstantUuidContext.class,0);
		}
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
		}
		public ConstantDecimalContext constantDecimal() {
			return getRuleContext(ConstantDecimalContext.class,0);
		}
		public ConstantFloatContext constantFloat() {
			return getRuleContext(ConstantFloatContext.class,0);
		}
		public ConstantHexadecimalContext constantHexadecimal() {
			return getRuleContext(ConstantHexadecimalContext.class,0);
		}
		public ConstantBooleanContext constantBoolean() {
			return getRuleContext(ConstantBooleanContext.class,0);
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
		enterRule(_localctx, 302, RULE_constant);
		try {
			setState(2111);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,179,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2104);
				constantUuid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2105);
				constantString();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2106);
				constantDecimal();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2107);
				constantFloat();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2108);
				constantHexadecimal();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2109);
				constantBoolean();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2110);
				kwNull();
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

	public static class CollectionElementContext extends ParserRuleContext {
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public ConstantMapContext constantMap() {
			return getRuleContext(ConstantMapContext.class,0);
		}
		public ConstantSetContext constantSet() {
			return getRuleContext(ConstantSetContext.class,0);
		}
		public ConstantListContext constantList() {
			return getRuleContext(ConstantListContext.class,0);
		}
		public ConstantTupleContext constantTuple() {
			return getRuleContext(ConstantTupleContext.class,0);
		}
		public CollectionElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_collectionElement; }
	}

	public final CollectionElementContext collectionElement() throws RecognitionException {
		CollectionElementContext _localctx = new CollectionElementContext(_ctx, getState());
		enterRule(_localctx, 304, RULE_collectionElement);
		try {
			setState(2118);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,180,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2113);
				constant();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2114);
				constantMap();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2115);
				constantSet();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2116);
				constantList();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2117);
				constantTuple();
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

	public static class CollectionMapElementContext extends ParserRuleContext {
		public List<CollectionElementContext> collectionElement() {
			return getRuleContexts(CollectionElementContext.class);
		}
		public CollectionElementContext collectionElement(int i) {
			return getRuleContext(CollectionElementContext.class,i);
		}
		public SyntaxColonContext syntaxColon() {
			return getRuleContext(SyntaxColonContext.class,0);
		}
		public CollectionMapElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_collectionMapElement; }
	}

	public final CollectionMapElementContext collectionMapElement() throws RecognitionException {
		CollectionMapElementContext _localctx = new CollectionMapElementContext(_ctx, getState());
		enterRule(_localctx, 306, RULE_collectionMapElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2120);
			collectionElement();
			setState(2121);
			syntaxColon();
			setState(2122);
			collectionElement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantCollectionContext extends ParserRuleContext {
		public ConstantMapContext constantMap() {
			return getRuleContext(ConstantMapContext.class,0);
		}
		public ConstantTupleContext constantTuple() {
			return getRuleContext(ConstantTupleContext.class,0);
		}
		public ConstantListContext constantList() {
			return getRuleContext(ConstantListContext.class,0);
		}
		public ConstantSetContext constantSet() {
			return getRuleContext(ConstantSetContext.class,0);
		}
		public ConstantCollectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantCollection; }
	}

	public final ConstantCollectionContext constantCollection() throws RecognitionException {
		ConstantCollectionContext _localctx = new ConstantCollectionContext(_ctx, getState());
		enterRule(_localctx, 308, RULE_constantCollection);
		try {
			setState(2128);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,181,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2124);
				constantMap();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2125);
				constantTuple();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2126);
				constantList();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2127);
				constantSet();
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

	public static class ConstantMapContext extends ParserRuleContext {
		public SyntaxBracketLcContext syntaxBracketLc() {
			return getRuleContext(SyntaxBracketLcContext.class,0);
		}
		public List<CollectionMapElementContext> collectionMapElement() {
			return getRuleContexts(CollectionMapElementContext.class);
		}
		public CollectionMapElementContext collectionMapElement(int i) {
			return getRuleContext(CollectionMapElementContext.class,i);
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
		public ConstantMapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantMap; }
	}

	public final ConstantMapContext constantMap() throws RecognitionException {
		ConstantMapContext _localctx = new ConstantMapContext(_ctx, getState());
		enterRule(_localctx, 310, RULE_constantMap);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2130);
			syntaxBracketLc();
			setState(2131);
			collectionMapElement();
			setState(2137);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2132);
				syntaxComma();
				setState(2133);
				collectionMapElement();
				}
				}
				setState(2139);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2140);
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

	public static class ConstantSetContext extends ParserRuleContext {
		public SyntaxBracketLcContext syntaxBracketLc() {
			return getRuleContext(SyntaxBracketLcContext.class,0);
		}
		public List<CollectionElementContext> collectionElement() {
			return getRuleContexts(CollectionElementContext.class);
		}
		public CollectionElementContext collectionElement(int i) {
			return getRuleContext(CollectionElementContext.class,i);
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
		public ConstantSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantSet; }
	}

	public final ConstantSetContext constantSet() throws RecognitionException {
		ConstantSetContext _localctx = new ConstantSetContext(_ctx, getState());
		enterRule(_localctx, 312, RULE_constantSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2142);
			syntaxBracketLc();
			setState(2143);
			collectionElement();
			setState(2149);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2144);
				syntaxComma();
				setState(2145);
				collectionElement();
				}
				}
				setState(2151);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2152);
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

	public static class ConstantListContext extends ParserRuleContext {
		public SyntaxBracketLsContext syntaxBracketLs() {
			return getRuleContext(SyntaxBracketLsContext.class,0);
		}
		public List<CollectionElementContext> collectionElement() {
			return getRuleContexts(CollectionElementContext.class);
		}
		public CollectionElementContext collectionElement(int i) {
			return getRuleContext(CollectionElementContext.class,i);
		}
		public SyntaxBracketRsContext syntaxBracketRs() {
			return getRuleContext(SyntaxBracketRsContext.class,0);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public ConstantListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantList; }
	}

	public final ConstantListContext constantList() throws RecognitionException {
		ConstantListContext _localctx = new ConstantListContext(_ctx, getState());
		enterRule(_localctx, 314, RULE_constantList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2154);
			syntaxBracketLs();
			setState(2155);
			collectionElement();
			setState(2161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2156);
				syntaxComma();
				setState(2157);
				collectionElement();
				}
				}
				setState(2163);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2164);
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

	public static class ConstantTupleContext extends ParserRuleContext {
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public List<CollectionElementContext> collectionElement() {
			return getRuleContexts(CollectionElementContext.class);
		}
		public CollectionElementContext collectionElement(int i) {
			return getRuleContext(CollectionElementContext.class,i);
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
		public ConstantTupleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantTuple; }
	}

	public final ConstantTupleContext constantTuple() throws RecognitionException {
		ConstantTupleContext _localctx = new ConstantTupleContext(_ctx, getState());
		enterRule(_localctx, 316, RULE_constantTuple);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2166);
			syntaxBracketLr();
			setState(2167);
			collectionElement();
			setState(2173);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2168);
				syntaxComma();
				setState(2169);
				collectionElement();
				}
				}
				setState(2175);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2176);
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

	public static class ConstantUuidContext extends ParserRuleContext {
		public TerminalNode UUID() { return getToken(CqlParser.UUID, 0); }
		public ConstantUuidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantUuid; }
	}

	public final ConstantUuidContext constantUuid() throws RecognitionException {
		ConstantUuidContext _localctx = new ConstantUuidContext(_ctx, getState());
		enterRule(_localctx, 318, RULE_constantUuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2178);
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

	public static class ConstantDecimalContext extends ParserRuleContext {
		public TerminalNode DECIMAL_LITERAL() { return getToken(CqlParser.DECIMAL_LITERAL, 0); }
		public ConstantDecimalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantDecimal; }
	}

	public final ConstantDecimalContext constantDecimal() throws RecognitionException {
		ConstantDecimalContext _localctx = new ConstantDecimalContext(_ctx, getState());
		enterRule(_localctx, 320, RULE_constantDecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2180);
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

	public static class ConstantFloatContext extends ParserRuleContext {
		public TerminalNode DECIMAL_LITERAL() { return getToken(CqlParser.DECIMAL_LITERAL, 0); }
		public TerminalNode FLOAT_LITERAL() { return getToken(CqlParser.FLOAT_LITERAL, 0); }
		public ConstantFloatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantFloat; }
	}

	public final ConstantFloatContext constantFloat() throws RecognitionException {
		ConstantFloatContext _localctx = new ConstantFloatContext(_ctx, getState());
		enterRule(_localctx, 322, RULE_constantFloat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2182);
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

	public static class ConstantStringContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(CqlParser.STRING_LITERAL, 0); }
		public ConstantStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantString; }
	}

	public final ConstantStringContext constantString() throws RecognitionException {
		ConstantStringContext _localctx = new ConstantStringContext(_ctx, getState());
		enterRule(_localctx, 324, RULE_constantString);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2184);
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

	public static class ConstantBooleanContext extends ParserRuleContext {
		public TerminalNode K_TRUE() { return getToken(CqlParser.K_TRUE, 0); }
		public TerminalNode K_FALSE() { return getToken(CqlParser.K_FALSE, 0); }
		public ConstantBooleanContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantBoolean; }
	}

	public final ConstantBooleanContext constantBoolean() throws RecognitionException {
		ConstantBooleanContext _localctx = new ConstantBooleanContext(_ctx, getState());
		enterRule(_localctx, 326, RULE_constantBoolean);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2186);
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

	public static class ConstantHexadecimalContext extends ParserRuleContext {
		public TerminalNode HEXADECIMAL_LITERAL() { return getToken(CqlParser.HEXADECIMAL_LITERAL, 0); }
		public ConstantHexadecimalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantHexadecimal; }
	}

	public final ConstantHexadecimalContext constantHexadecimal() throws RecognitionException {
		ConstantHexadecimalContext _localctx = new ConstantHexadecimalContext(_ctx, getState());
		enterRule(_localctx, 328, RULE_constantHexadecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2188);
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
		enterRule(_localctx, 330, RULE_keyspace);
		try {
			setState(2194);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(2190);
				match(OBJECT_NAME);
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2191);
				match(DQUOTE);
				setState(2192);
				match(OBJECT_NAME);
				setState(2193);
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
		enterRule(_localctx, 332, RULE_table);
		try {
			setState(2201);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(2196);
				match(OBJECT_NAME);
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2197);
				match(DQUOTE);
				setState(2198);
				match(OBJECT_NAME);
				setState(2199);
				match(DQUOTE);
				}
				break;
			case EOF:
			case LR_BRACKET:
			case SEMI:
			case MINUSMINUS:
			case K_ADD:
			case K_ALLOW:
			case K_DROP:
			case K_FROM:
			case K_IF:
			case K_LIMIT:
			case K_OF:
			case K_ORDER:
			case K_RENAME:
			case K_SET:
			case K_TO:
			case K_USING:
			case K_VALUES:
			case K_WHERE:
			case K_WITH:
				enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.table"); 
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

	public static class KeyspaceObjectContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public List<TerminalNode> DQUOTE() { return getTokens(CqlParser.DQUOTE); }
		public TerminalNode DQUOTE(int i) {
			return getToken(CqlParser.DQUOTE, i);
		}
		public TerminalNode K_ROLE() { return getToken(CqlParser.K_ROLE, 0); }
		public TerminalNode K_PERMISSIONS() { return getToken(CqlParser.K_PERMISSIONS, 0); }
		public TerminalNode K_OPTIONS() { return getToken(CqlParser.K_OPTIONS, 0); }
		public TerminalNode K_DURABLE_WRITES() { return getToken(CqlParser.K_DURABLE_WRITES, 0); }
		public TerminalNode K_LANGUAGE() { return getToken(CqlParser.K_LANGUAGE, 0); }
		public TerminalNode K_TYPE() { return getToken(CqlParser.K_TYPE, 0); }
		public TerminalNode K_INITCOND() { return getToken(CqlParser.K_INITCOND, 0); }
		public TerminalNode K_REPLICATION() { return getToken(CqlParser.K_REPLICATION, 0); }
		public TerminalNode K_TTL() { return getToken(CqlParser.K_TTL, 0); }
		public TerminalNode K_PARTITION() { return getToken(CqlParser.K_PARTITION, 0); }
		public TerminalNode K_KEY() { return getToken(CqlParser.K_KEY, 0); }
		public TerminalNode K_LEVEL() { return getToken(CqlParser.K_LEVEL, 0); }
		public KeyspaceObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyspaceObject; }
	}

	public final KeyspaceObjectContext keyspaceObject() throws RecognitionException {
		KeyspaceObjectContext _localctx = new KeyspaceObjectContext(_ctx, getState());
		enterRule(_localctx, 334, RULE_keyspaceObject);
		try {
			setState(2219);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(2203);
				match(OBJECT_NAME);
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2204);
				match(DQUOTE);
				setState(2205);
				match(OBJECT_NAME);
				setState(2206);
				match(DQUOTE);
				}
				break;
			case K_ROLE:
				enterOuterAlt(_localctx, 3);
				{
				setState(2207);
				match(K_ROLE);
				}
				break;
			case K_PERMISSIONS:
				enterOuterAlt(_localctx, 4);
				{
				setState(2208);
				match(K_PERMISSIONS);
				}
				break;
			case K_OPTIONS:
				enterOuterAlt(_localctx, 5);
				{
				setState(2209);
				match(K_OPTIONS);
				}
				break;
			case K_DURABLE_WRITES:
				enterOuterAlt(_localctx, 6);
				{
				setState(2210);
				match(K_DURABLE_WRITES);
				}
				break;
			case K_LANGUAGE:
				enterOuterAlt(_localctx, 7);
				{
				setState(2211);
				match(K_LANGUAGE);
				}
				break;
			case K_TYPE:
				enterOuterAlt(_localctx, 8);
				{
				setState(2212);
				match(K_TYPE);
				}
				break;
			case K_INITCOND:
				enterOuterAlt(_localctx, 9);
				{
				setState(2213);
				match(K_INITCOND);
				}
				break;
			case K_REPLICATION:
				enterOuterAlt(_localctx, 10);
				{
				setState(2214);
				match(K_REPLICATION);
				}
				break;
			case K_TTL:
				enterOuterAlt(_localctx, 11);
				{
				setState(2215);
				match(K_TTL);
				}
				break;
			case K_PARTITION:
				enterOuterAlt(_localctx, 12);
				{
				setState(2216);
				match(K_PARTITION);
				}
				break;
			case K_KEY:
				enterOuterAlt(_localctx, 13);
				{
				setState(2217);
				match(K_KEY);
				}
				break;
			case K_LEVEL:
				enterOuterAlt(_localctx, 14);
				{
				setState(2218);
				match(K_LEVEL);
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

	public static class ObjectUnknownContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public List<TerminalNode> DQUOTE() { return getTokens(CqlParser.DQUOTE); }
		public TerminalNode DQUOTE(int i) {
			return getToken(CqlParser.DQUOTE, i);
		}
		public TerminalNode K_ROLE() { return getToken(CqlParser.K_ROLE, 0); }
		public TerminalNode K_PERMISSIONS() { return getToken(CqlParser.K_PERMISSIONS, 0); }
		public TerminalNode K_OPTIONS() { return getToken(CqlParser.K_OPTIONS, 0); }
		public TerminalNode K_DURABLE_WRITES() { return getToken(CqlParser.K_DURABLE_WRITES, 0); }
		public TerminalNode K_LANGUAGE() { return getToken(CqlParser.K_LANGUAGE, 0); }
		public TerminalNode K_TYPE() { return getToken(CqlParser.K_TYPE, 0); }
		public TerminalNode K_INITCOND() { return getToken(CqlParser.K_INITCOND, 0); }
		public TerminalNode K_REPLICATION() { return getToken(CqlParser.K_REPLICATION, 0); }
		public TerminalNode K_TTL() { return getToken(CqlParser.K_TTL, 0); }
		public TerminalNode K_PARTITION() { return getToken(CqlParser.K_PARTITION, 0); }
		public TerminalNode K_KEY() { return getToken(CqlParser.K_KEY, 0); }
		public TerminalNode K_LEVEL() { return getToken(CqlParser.K_LEVEL, 0); }
		public ObjectUnknownContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnknown; }
	}

	public final ObjectUnknownContext objectUnknown() throws RecognitionException {
		ObjectUnknownContext _localctx = new ObjectUnknownContext(_ctx, getState());
		enterRule(_localctx, 336, RULE_objectUnknown);
		try {
			setState(2237);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(2221);
				match(OBJECT_NAME);
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2222);
				match(DQUOTE);
				setState(2223);
				match(OBJECT_NAME);
				setState(2224);
				match(DQUOTE);
				}
				break;
			case K_ROLE:
				enterOuterAlt(_localctx, 3);
				{
				setState(2225);
				match(K_ROLE);
				}
				break;
			case K_PERMISSIONS:
				enterOuterAlt(_localctx, 4);
				{
				setState(2226);
				match(K_PERMISSIONS);
				}
				break;
			case K_OPTIONS:
				enterOuterAlt(_localctx, 5);
				{
				setState(2227);
				match(K_OPTIONS);
				}
				break;
			case K_DURABLE_WRITES:
				enterOuterAlt(_localctx, 6);
				{
				setState(2228);
				match(K_DURABLE_WRITES);
				}
				break;
			case K_LANGUAGE:
				enterOuterAlt(_localctx, 7);
				{
				setState(2229);
				match(K_LANGUAGE);
				}
				break;
			case K_TYPE:
				enterOuterAlt(_localctx, 8);
				{
				setState(2230);
				match(K_TYPE);
				}
				break;
			case K_INITCOND:
				enterOuterAlt(_localctx, 9);
				{
				setState(2231);
				match(K_INITCOND);
				}
				break;
			case K_REPLICATION:
				enterOuterAlt(_localctx, 10);
				{
				setState(2232);
				match(K_REPLICATION);
				}
				break;
			case K_TTL:
				enterOuterAlt(_localctx, 11);
				{
				setState(2233);
				match(K_TTL);
				}
				break;
			case K_PARTITION:
				enterOuterAlt(_localctx, 12);
				{
				setState(2234);
				match(K_PARTITION);
				}
				break;
			case K_KEY:
				enterOuterAlt(_localctx, 13);
				{
				setState(2235);
				match(K_KEY);
				}
				break;
			case K_LEVEL:
				enterOuterAlt(_localctx, 14);
				{
				setState(2236);
				match(K_LEVEL);
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

	public static class TableSpecContext extends ParserRuleContext {
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public SpecialDotContext specialDot() {
			return getRuleContext(SpecialDotContext.class,0);
		}
		public TableSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableSpec; }
	}

	public final TableSpecContext tableSpec() throws RecognitionException {
		TableSpecContext _localctx = new TableSpecContext(_ctx, getState());
		enterRule(_localctx, 338, RULE_tableSpec);
		try {
			setState(2245);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,190,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2239);
				table();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2240);
				keyspace();
				setState(2241);
				specialDot();
				setState(2242);
				table();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.tableSpec"); 
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

	public static class ObjectUnknownSpecContext extends ParserRuleContext {
		public ObjectUnknownContext objectUnknown() {
			return getRuleContext(ObjectUnknownContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public SpecialDotContext specialDot() {
			return getRuleContext(SpecialDotContext.class,0);
		}
		public ObjectUnknownSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnknownSpec; }
	}

	public final ObjectUnknownSpecContext objectUnknownSpec() throws RecognitionException {
		ObjectUnknownSpecContext _localctx = new ObjectUnknownSpecContext(_ctx, getState());
		enterRule(_localctx, 340, RULE_objectUnknownSpec);
		try {
			setState(2253);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,191,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2247);
				objectUnknown();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2248);
				keyspace();
				setState(2249);
				specialDot();
				setState(2250);
				objectUnknown();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.objectUnknownSpec"); 
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

	public static class ColumnContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public List<TerminalNode> DQUOTE() { return getTokens(CqlParser.DQUOTE); }
		public TerminalNode DQUOTE(int i) {
			return getToken(CqlParser.DQUOTE, i);
		}
		public TerminalNode K_ROLE() { return getToken(CqlParser.K_ROLE, 0); }
		public TerminalNode K_PERMISSIONS() { return getToken(CqlParser.K_PERMISSIONS, 0); }
		public TerminalNode K_OPTIONS() { return getToken(CqlParser.K_OPTIONS, 0); }
		public TerminalNode K_DURABLE_WRITES() { return getToken(CqlParser.K_DURABLE_WRITES, 0); }
		public TerminalNode K_LANGUAGE() { return getToken(CqlParser.K_LANGUAGE, 0); }
		public TerminalNode K_TYPE() { return getToken(CqlParser.K_TYPE, 0); }
		public TerminalNode K_INITCOND() { return getToken(CqlParser.K_INITCOND, 0); }
		public TerminalNode K_REPLICATION() { return getToken(CqlParser.K_REPLICATION, 0); }
		public TerminalNode K_TTL() { return getToken(CqlParser.K_TTL, 0); }
		public TerminalNode K_PARTITION() { return getToken(CqlParser.K_PARTITION, 0); }
		public TerminalNode K_KEY() { return getToken(CqlParser.K_KEY, 0); }
		public TerminalNode K_LEVEL() { return getToken(CqlParser.K_LEVEL, 0); }
		public ColumnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_column; }
	}

	public final ColumnContext column() throws RecognitionException {
		ColumnContext _localctx = new ColumnContext(_ctx, getState());
		enterRule(_localctx, 342, RULE_column);
		try {
			setState(2271);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(2255);
				match(OBJECT_NAME);
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2256);
				match(DQUOTE);
				setState(2257);
				match(OBJECT_NAME);
				setState(2258);
				match(DQUOTE);
				}
				break;
			case K_ROLE:
				enterOuterAlt(_localctx, 3);
				{
				setState(2259);
				match(K_ROLE);
				}
				break;
			case K_PERMISSIONS:
				enterOuterAlt(_localctx, 4);
				{
				setState(2260);
				match(K_PERMISSIONS);
				}
				break;
			case K_OPTIONS:
				enterOuterAlt(_localctx, 5);
				{
				setState(2261);
				match(K_OPTIONS);
				}
				break;
			case K_DURABLE_WRITES:
				enterOuterAlt(_localctx, 6);
				{
				setState(2262);
				match(K_DURABLE_WRITES);
				}
				break;
			case K_LANGUAGE:
				enterOuterAlt(_localctx, 7);
				{
				setState(2263);
				match(K_LANGUAGE);
				}
				break;
			case K_TYPE:
				enterOuterAlt(_localctx, 8);
				{
				setState(2264);
				match(K_TYPE);
				}
				break;
			case K_INITCOND:
				enterOuterAlt(_localctx, 9);
				{
				setState(2265);
				match(K_INITCOND);
				}
				break;
			case K_REPLICATION:
				enterOuterAlt(_localctx, 10);
				{
				setState(2266);
				match(K_REPLICATION);
				}
				break;
			case K_TTL:
				enterOuterAlt(_localctx, 11);
				{
				setState(2267);
				match(K_TTL);
				}
				break;
			case K_PARTITION:
				enterOuterAlt(_localctx, 12);
				{
				setState(2268);
				match(K_PARTITION);
				}
				break;
			case K_KEY:
				enterOuterAlt(_localctx, 13);
				{
				setState(2269);
				match(K_KEY);
				}
				break;
			case K_LEVEL:
				enterOuterAlt(_localctx, 14);
				{
				setState(2270);
				match(K_LEVEL);
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

	public static class ColumnUnknownContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public List<TerminalNode> DQUOTE() { return getTokens(CqlParser.DQUOTE); }
		public TerminalNode DQUOTE(int i) {
			return getToken(CqlParser.DQUOTE, i);
		}
		public TerminalNode K_ROLE() { return getToken(CqlParser.K_ROLE, 0); }
		public TerminalNode K_PERMISSIONS() { return getToken(CqlParser.K_PERMISSIONS, 0); }
		public TerminalNode K_OPTIONS() { return getToken(CqlParser.K_OPTIONS, 0); }
		public TerminalNode K_DURABLE_WRITES() { return getToken(CqlParser.K_DURABLE_WRITES, 0); }
		public TerminalNode K_LANGUAGE() { return getToken(CqlParser.K_LANGUAGE, 0); }
		public TerminalNode K_TYPE() { return getToken(CqlParser.K_TYPE, 0); }
		public TerminalNode K_INITCOND() { return getToken(CqlParser.K_INITCOND, 0); }
		public TerminalNode K_REPLICATION() { return getToken(CqlParser.K_REPLICATION, 0); }
		public TerminalNode K_TTL() { return getToken(CqlParser.K_TTL, 0); }
		public TerminalNode K_PARTITION() { return getToken(CqlParser.K_PARTITION, 0); }
		public TerminalNode K_KEY() { return getToken(CqlParser.K_KEY, 0); }
		public TerminalNode K_LEVEL() { return getToken(CqlParser.K_LEVEL, 0); }
		public ColumnUnknownContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnUnknown; }
	}

	public final ColumnUnknownContext columnUnknown() throws RecognitionException {
		ColumnUnknownContext _localctx = new ColumnUnknownContext(_ctx, getState());
		enterRule(_localctx, 344, RULE_columnUnknown);
		try {
			setState(2289);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(2273);
				match(OBJECT_NAME);
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2274);
				match(DQUOTE);
				setState(2275);
				match(OBJECT_NAME);
				setState(2276);
				match(DQUOTE);
				}
				break;
			case K_ROLE:
				enterOuterAlt(_localctx, 3);
				{
				setState(2277);
				match(K_ROLE);
				}
				break;
			case K_PERMISSIONS:
				enterOuterAlt(_localctx, 4);
				{
				setState(2278);
				match(K_PERMISSIONS);
				}
				break;
			case K_OPTIONS:
				enterOuterAlt(_localctx, 5);
				{
				setState(2279);
				match(K_OPTIONS);
				}
				break;
			case K_DURABLE_WRITES:
				enterOuterAlt(_localctx, 6);
				{
				setState(2280);
				match(K_DURABLE_WRITES);
				}
				break;
			case K_LANGUAGE:
				enterOuterAlt(_localctx, 7);
				{
				setState(2281);
				match(K_LANGUAGE);
				}
				break;
			case K_TYPE:
				enterOuterAlt(_localctx, 8);
				{
				setState(2282);
				match(K_TYPE);
				}
				break;
			case K_INITCOND:
				enterOuterAlt(_localctx, 9);
				{
				setState(2283);
				match(K_INITCOND);
				}
				break;
			case K_REPLICATION:
				enterOuterAlt(_localctx, 10);
				{
				setState(2284);
				match(K_REPLICATION);
				}
				break;
			case K_TTL:
				enterOuterAlt(_localctx, 11);
				{
				setState(2285);
				match(K_TTL);
				}
				break;
			case K_PARTITION:
				enterOuterAlt(_localctx, 12);
				{
				setState(2286);
				match(K_PARTITION);
				}
				break;
			case K_KEY:
				enterOuterAlt(_localctx, 13);
				{
				setState(2287);
				match(K_KEY);
				}
				break;
			case K_LEVEL:
				enterOuterAlt(_localctx, 14);
				{
				setState(2288);
				match(K_LEVEL);
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
		public DataTypeFundamentalContext dataTypeFundamental() {
			return getRuleContext(DataTypeFundamentalContext.class,0);
		}
		public DataTypeCollectionContext dataTypeCollection() {
			return getRuleContext(DataTypeCollectionContext.class,0);
		}
		public DataTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataType; }
	}

	public final DataTypeContext dataType() throws RecognitionException {
		DataTypeContext _localctx = new DataTypeContext(_ctx, getState());
		enterRule(_localctx, 346, RULE_dataType);
		try {
			setState(2293);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_TIMESTAMP:
			case K_ASCII:
			case K_BIGINT:
			case K_BLOB:
			case K_BOOLEAN:
			case K_COUNTER:
			case K_DATE:
			case K_DECIMAL:
			case K_DOUBLE:
			case K_FLOAT:
			case K_INET:
			case K_INT:
			case K_SMALLINT:
			case K_TEXT:
			case K_TIMEUUID:
			case K_TIME:
			case K_TINYINT:
			case K_UUID:
			case K_VARCHAR:
			case K_VARINT:
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(2291);
				dataTypeFundamental();
				}
				break;
			case K_SET:
			case K_FROZEN:
			case K_LIST:
			case K_MAP:
			case K_TUPLE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2292);
				dataTypeCollection();
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

	public static class DataTypeCollectionContext extends ParserRuleContext {
		public DataTypeFrozenContext dataTypeFrozen() {
			return getRuleContext(DataTypeFrozenContext.class,0);
		}
		public DataTypeStructureContext dataTypeStructure() {
			return getRuleContext(DataTypeStructureContext.class,0);
		}
		public DataTypeSetContext dataTypeSet() {
			return getRuleContext(DataTypeSetContext.class,0);
		}
		public DataTypeListContext dataTypeList() {
			return getRuleContext(DataTypeListContext.class,0);
		}
		public DataTypeMapContext dataTypeMap() {
			return getRuleContext(DataTypeMapContext.class,0);
		}
		public DataTypeTupleContext dataTypeTuple() {
			return getRuleContext(DataTypeTupleContext.class,0);
		}
		public DataTypeCollectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeCollection; }
	}

	public final DataTypeCollectionContext dataTypeCollection() throws RecognitionException {
		DataTypeCollectionContext _localctx = new DataTypeCollectionContext(_ctx, getState());
		enterRule(_localctx, 348, RULE_dataTypeCollection);
		try {
			setState(2320);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_FROZEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(2295);
				dataTypeFrozen();
				setState(2298);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_LT:
					{
					setState(2296);
					dataTypeStructure();
					}
					break;
				case EOF:
				case RR_BRACKET:
				case COMMA:
				case SEMI:
				case MINUSMINUS:
				case K_ADD:
				case K_FINALFUNC:
				case K_LANGUAGE:
				case K_PRIMARY:
				case K_RENAME:
				case K_STATIC:
				case OPERATOR_GT:
					{
					 this.notifyErrorListeners("rule.dataTypeStructure"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case K_SET:
				enterOuterAlt(_localctx, 2);
				{
				setState(2300);
				dataTypeSet();
				setState(2303);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_LT:
					{
					setState(2301);
					dataTypeStructure();
					}
					break;
				case EOF:
				case RR_BRACKET:
				case COMMA:
				case SEMI:
				case MINUSMINUS:
				case K_ADD:
				case K_FINALFUNC:
				case K_LANGUAGE:
				case K_PRIMARY:
				case K_RENAME:
				case K_STATIC:
				case OPERATOR_GT:
					{
					 this.notifyErrorListeners("rule.dataTypeStructure"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case K_LIST:
				enterOuterAlt(_localctx, 3);
				{
				setState(2305);
				dataTypeList();
				setState(2308);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_LT:
					{
					setState(2306);
					dataTypeStructure();
					}
					break;
				case EOF:
				case RR_BRACKET:
				case COMMA:
				case SEMI:
				case MINUSMINUS:
				case K_ADD:
				case K_FINALFUNC:
				case K_LANGUAGE:
				case K_PRIMARY:
				case K_RENAME:
				case K_STATIC:
				case OPERATOR_GT:
					{
					 this.notifyErrorListeners("rule.dataTypeStructure"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case K_MAP:
				enterOuterAlt(_localctx, 4);
				{
				setState(2310);
				dataTypeMap();
				setState(2313);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_LT:
					{
					setState(2311);
					dataTypeStructure();
					}
					break;
				case EOF:
				case RR_BRACKET:
				case COMMA:
				case SEMI:
				case MINUSMINUS:
				case K_ADD:
				case K_FINALFUNC:
				case K_LANGUAGE:
				case K_PRIMARY:
				case K_RENAME:
				case K_STATIC:
				case OPERATOR_GT:
					{
					 this.notifyErrorListeners("rule.dataTypeStructure"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case K_TUPLE:
				enterOuterAlt(_localctx, 5);
				{
				setState(2315);
				dataTypeTuple();
				setState(2318);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_LT:
					{
					setState(2316);
					dataTypeStructure();
					}
					break;
				case EOF:
				case RR_BRACKET:
				case COMMA:
				case SEMI:
				case MINUSMINUS:
				case K_ADD:
				case K_FINALFUNC:
				case K_LANGUAGE:
				case K_PRIMARY:
				case K_RENAME:
				case K_STATIC:
				case OPERATOR_GT:
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
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeFundamentalContext extends ParserRuleContext {
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
		public DataTypeInetContext dataTypeInet() {
			return getRuleContext(DataTypeInetContext.class,0);
		}
		public DataTypeIntContext dataTypeInt() {
			return getRuleContext(DataTypeIntContext.class,0);
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
		public DataTypeUuidContext dataTypeUuid() {
			return getRuleContext(DataTypeUuidContext.class,0);
		}
		public DataTypeVarCharContext dataTypeVarChar() {
			return getRuleContext(DataTypeVarCharContext.class,0);
		}
		public DataTypeVarIntContext dataTypeVarInt() {
			return getRuleContext(DataTypeVarIntContext.class,0);
		}
		public DataTypeUserDefinedContext dataTypeUserDefined() {
			return getRuleContext(DataTypeUserDefinedContext.class,0);
		}
		public DataTypeFundamentalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeFundamental; }
	}

	public final DataTypeFundamentalContext dataTypeFundamental() throws RecognitionException {
		DataTypeFundamentalContext _localctx = new DataTypeFundamentalContext(_ctx, getState());
		enterRule(_localctx, 350, RULE_dataTypeFundamental);
		try {
			setState(2343);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ASCII:
				enterOuterAlt(_localctx, 1);
				{
				setState(2322);
				dataTypeAscii();
				}
				break;
			case K_BIGINT:
				enterOuterAlt(_localctx, 2);
				{
				setState(2323);
				dataTypeBigint();
				}
				break;
			case K_BLOB:
				enterOuterAlt(_localctx, 3);
				{
				setState(2324);
				dataTypeBlob();
				}
				break;
			case K_BOOLEAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(2325);
				dataTypeBoolean();
				}
				break;
			case K_COUNTER:
				enterOuterAlt(_localctx, 5);
				{
				setState(2326);
				dataTypeCounter();
				}
				break;
			case K_DATE:
				enterOuterAlt(_localctx, 6);
				{
				setState(2327);
				dataTypeDate();
				}
				break;
			case K_DECIMAL:
				enterOuterAlt(_localctx, 7);
				{
				setState(2328);
				dataTypeDecimal();
				}
				break;
			case K_DOUBLE:
				enterOuterAlt(_localctx, 8);
				{
				setState(2329);
				dataTypeDouble();
				}
				break;
			case K_FLOAT:
				enterOuterAlt(_localctx, 9);
				{
				setState(2330);
				dataTypeFloat();
				}
				break;
			case K_INET:
				enterOuterAlt(_localctx, 10);
				{
				setState(2331);
				dataTypeInet();
				}
				break;
			case K_INT:
				enterOuterAlt(_localctx, 11);
				{
				setState(2332);
				dataTypeInt();
				}
				break;
			case K_SMALLINT:
				enterOuterAlt(_localctx, 12);
				{
				setState(2333);
				dataTypeSmallInt();
				}
				break;
			case K_TEXT:
				enterOuterAlt(_localctx, 13);
				{
				setState(2334);
				dataTypeText();
				}
				break;
			case K_TIME:
				enterOuterAlt(_localctx, 14);
				{
				setState(2335);
				dataTypeTime();
				}
				break;
			case K_TIMEUUID:
				enterOuterAlt(_localctx, 15);
				{
				setState(2336);
				dataTypeTimeUuid();
				}
				break;
			case K_TIMESTAMP:
				enterOuterAlt(_localctx, 16);
				{
				setState(2337);
				dataTypeTimestamp();
				}
				break;
			case K_TINYINT:
				enterOuterAlt(_localctx, 17);
				{
				setState(2338);
				dataTypeTinyInt();
				}
				break;
			case K_UUID:
				enterOuterAlt(_localctx, 18);
				{
				setState(2339);
				dataTypeUuid();
				}
				break;
			case K_VARCHAR:
				enterOuterAlt(_localctx, 19);
				{
				setState(2340);
				dataTypeVarChar();
				}
				break;
			case K_VARINT:
				enterOuterAlt(_localctx, 20);
				{
				setState(2341);
				dataTypeVarInt();
				}
				break;
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 21);
				{
				setState(2342);
				dataTypeUserDefined();
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
		enterRule(_localctx, 352, RULE_orderDirection);
		try {
			setState(2347);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ASC:
				enterOuterAlt(_localctx, 1);
				{
				setState(2345);
				kwAsc();
				}
				break;
			case K_DESC:
				enterOuterAlt(_localctx, 2);
				{
				setState(2346);
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
		enterRule(_localctx, 354, RULE_role);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2349);
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
		enterRule(_localctx, 356, RULE_trigger);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2351);
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
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
		}
		public TriggerClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_triggerClass; }
	}

	public final TriggerClassContext triggerClass() throws RecognitionException {
		TriggerClassContext _localctx = new TriggerClassContext(_ctx, getState());
		enterRule(_localctx, 358, RULE_triggerClass);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2353);
			constantString();
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 360, RULE_materializedView);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2355);
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
		enterRule(_localctx, 362, RULE_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2357);
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
		enterRule(_localctx, 364, RULE_aggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2359);
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
		enterRule(_localctx, 366, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2361);
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
		enterRule(_localctx, 368, RULE_language);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2363);
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
		enterRule(_localctx, 370, RULE_user);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2365);
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
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
		}
		public PasswordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_password; }
	}

	public final PasswordContext password() throws RecognitionException {
		PasswordContext _localctx = new PasswordContext(_ctx, getState());
		enterRule(_localctx, 372, RULE_password);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2367);
			constantString();
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 374, RULE_hashKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2369);
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
		enterRule(_localctx, 376, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2371);
			paramName();
			setState(2372);
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
		enterRule(_localctx, 378, RULE_paramName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2374);
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
		enterRule(_localctx, 380, RULE_kwAdd);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2376);
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
		enterRule(_localctx, 382, RULE_kwAggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2378);
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
		enterRule(_localctx, 384, RULE_kwAll);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2380);
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

	public static class KwAllFunctionsContext extends ParserRuleContext {
		public TerminalNode K_ALL_FUNCTIONS() { return getToken(CqlParser.K_ALL_FUNCTIONS, 0); }
		public KwAllFunctionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAllFunctions; }
	}

	public final KwAllFunctionsContext kwAllFunctions() throws RecognitionException {
		KwAllFunctionsContext _localctx = new KwAllFunctionsContext(_ctx, getState());
		enterRule(_localctx, 386, RULE_kwAllFunctions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2382);
			match(K_ALL_FUNCTIONS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAllKeyspacesContext extends ParserRuleContext {
		public TerminalNode K_ALL_KEYSPACES() { return getToken(CqlParser.K_ALL_KEYSPACES, 0); }
		public KwAllKeyspacesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAllKeyspaces; }
	}

	public final KwAllKeyspacesContext kwAllKeyspaces() throws RecognitionException {
		KwAllKeyspacesContext _localctx = new KwAllKeyspacesContext(_ctx, getState());
		enterRule(_localctx, 388, RULE_kwAllKeyspaces);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2384);
			match(K_ALL_KEYSPACES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KwAllRolesContext extends ParserRuleContext {
		public TerminalNode K_ALL_ROLES() { return getToken(CqlParser.K_ALL_ROLES, 0); }
		public KwAllRolesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwAllRoles; }
	}

	public final KwAllRolesContext kwAllRoles() throws RecognitionException {
		KwAllRolesContext _localctx = new KwAllRolesContext(_ctx, getState());
		enterRule(_localctx, 390, RULE_kwAllRoles);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2386);
			match(K_ALL_ROLES);
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 392, RULE_kwAllPermissions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2388);
			match(K_ALL);
			setState(2389);
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
		enterRule(_localctx, 394, RULE_kwAllow);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2391);
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
		enterRule(_localctx, 396, RULE_kwAllowFiltering);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2393);
			match(K_ALLOW);
			setState(2394);
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
		enterRule(_localctx, 398, RULE_kwAlter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2396);
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
		enterRule(_localctx, 400, RULE_kwAnd);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2398);
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
		enterRule(_localctx, 402, RULE_kwApply);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2400);
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
		enterRule(_localctx, 404, RULE_kwAs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2402);
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
		enterRule(_localctx, 406, RULE_kwAsc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2404);
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
		enterRule(_localctx, 408, RULE_kwAuthorize);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2406);
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
		enterRule(_localctx, 410, RULE_kwBatch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2408);
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
		enterRule(_localctx, 412, RULE_kwBegin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2410);
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
		enterRule(_localctx, 414, RULE_kwBy);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2412);
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
		enterRule(_localctx, 416, RULE_kwCalled);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2414);
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
		enterRule(_localctx, 418, RULE_kwClustering);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2416);
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
		enterRule(_localctx, 420, RULE_kwCompact);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2418);
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
		enterRule(_localctx, 422, RULE_kwContains);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2420);
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
		enterRule(_localctx, 424, RULE_kwContainsKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2422);
			match(K_CONTAINS);
			setState(2423);
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
		enterRule(_localctx, 426, RULE_kwCreate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2425);
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
		enterRule(_localctx, 428, RULE_kwDelete);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2427);
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
		enterRule(_localctx, 430, RULE_kwDesc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2429);
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
		enterRule(_localctx, 432, RULE_kwDescibe);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2431);
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
		enterRule(_localctx, 434, RULE_kwDistinct);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2433);
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
		enterRule(_localctx, 436, RULE_kwDrop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2435);
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
		enterRule(_localctx, 438, RULE_kwDurableWrites);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2437);
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
		enterRule(_localctx, 440, RULE_kwEntries);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2439);
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
		enterRule(_localctx, 442, RULE_kwExecute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2441);
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
		enterRule(_localctx, 444, RULE_kwExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2443);
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
		enterRule(_localctx, 446, RULE_kwFiltering);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2445);
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
		enterRule(_localctx, 448, RULE_kwFinalfunc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2447);
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
		enterRule(_localctx, 450, RULE_kwFrom);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2449);
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
		enterRule(_localctx, 452, RULE_kwFull);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2451);
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
		enterRule(_localctx, 454, RULE_kwFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2453);
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

	public static class KwGrantContext extends ParserRuleContext {
		public TerminalNode K_GRANT() { return getToken(CqlParser.K_GRANT, 0); }
		public KwGrantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwGrant; }
	}

	public final KwGrantContext kwGrant() throws RecognitionException {
		KwGrantContext _localctx = new KwGrantContext(_ctx, getState());
		enterRule(_localctx, 456, RULE_kwGrant);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2455);
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
		enterRule(_localctx, 458, RULE_kwIf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2457);
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
		enterRule(_localctx, 460, RULE_kwIn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2459);
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
		enterRule(_localctx, 462, RULE_kwIndex);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2461);
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
		enterRule(_localctx, 464, RULE_kwInitcond);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2463);
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
		enterRule(_localctx, 466, RULE_kwInput);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2465);
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
		enterRule(_localctx, 468, RULE_kwInsert);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2467);
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
		enterRule(_localctx, 470, RULE_kwInto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2469);
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
		enterRule(_localctx, 472, RULE_kwIs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2471);
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
		enterRule(_localctx, 474, RULE_kwKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2473);
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
		enterRule(_localctx, 476, RULE_kwKeys);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2475);
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
		enterRule(_localctx, 478, RULE_kwKeyspace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2477);
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

	public static class KwLanguageContext extends ParserRuleContext {
		public TerminalNode K_LANGUAGE() { return getToken(CqlParser.K_LANGUAGE, 0); }
		public KwLanguageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwLanguage; }
	}

	public final KwLanguageContext kwLanguage() throws RecognitionException {
		KwLanguageContext _localctx = new KwLanguageContext(_ctx, getState());
		enterRule(_localctx, 480, RULE_kwLanguage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2479);
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
		enterRule(_localctx, 482, RULE_kwLimit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2481);
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
		enterRule(_localctx, 484, RULE_kwList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2483);
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

	public static class KwListRolesContext extends ParserRuleContext {
		public TerminalNode K_LIST_ROLES() { return getToken(CqlParser.K_LIST_ROLES, 0); }
		public KwListRolesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwListRoles; }
	}

	public final KwListRolesContext kwListRoles() throws RecognitionException {
		KwListRolesContext _localctx = new KwListRolesContext(_ctx, getState());
		enterRule(_localctx, 486, RULE_kwListRoles);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2485);
			match(K_LIST_ROLES);
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 488, RULE_kwLogged);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2487);
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
		enterRule(_localctx, 490, RULE_kwLogin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2489);
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
		enterRule(_localctx, 492, RULE_kwMaterialized);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2491);
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
		enterRule(_localctx, 494, RULE_kwModify);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2493);
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
		enterRule(_localctx, 496, RULE_kwNosuperuser);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2495);
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
		enterRule(_localctx, 498, RULE_kwNorecursive);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2497);
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
		enterRule(_localctx, 500, RULE_kwNot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2499);
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
		enterRule(_localctx, 502, RULE_kwNull);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2501);
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
		enterRule(_localctx, 504, RULE_kwOf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2503);
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
		enterRule(_localctx, 506, RULE_kwOn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2505);
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
		enterRule(_localctx, 508, RULE_kwOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2507);
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
		enterRule(_localctx, 510, RULE_kwOr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2509);
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
		enterRule(_localctx, 512, RULE_kwOrder);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2511);
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
		enterRule(_localctx, 514, RULE_kwOrderBy);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2513);
			match(K_ORDER);
			setState(2514);
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

	public static class KwPartitionContext extends ParserRuleContext {
		public TerminalNode K_PARTITION() { return getToken(CqlParser.K_PARTITION, 0); }
		public KwPartitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwPartition; }
	}

	public final KwPartitionContext kwPartition() throws RecognitionException {
		KwPartitionContext _localctx = new KwPartitionContext(_ctx, getState());
		enterRule(_localctx, 516, RULE_kwPartition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2516);
			match(K_PARTITION);
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 518, RULE_kwPassword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2518);
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

	public static class KwPermissionsContext extends ParserRuleContext {
		public TerminalNode K_PERMISSIONS() { return getToken(CqlParser.K_PERMISSIONS, 0); }
		public KwPermissionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwPermissions; }
	}

	public final KwPermissionsContext kwPermissions() throws RecognitionException {
		KwPermissionsContext _localctx = new KwPermissionsContext(_ctx, getState());
		enterRule(_localctx, 520, RULE_kwPermissions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2520);
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

	public static class KwPrimaryContext extends ParserRuleContext {
		public TerminalNode K_PRIMARY() { return getToken(CqlParser.K_PRIMARY, 0); }
		public KwPrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwPrimary; }
	}

	public final KwPrimaryContext kwPrimary() throws RecognitionException {
		KwPrimaryContext _localctx = new KwPrimaryContext(_ctx, getState());
		enterRule(_localctx, 522, RULE_kwPrimary);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2522);
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
		enterRule(_localctx, 524, RULE_kwRename);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2524);
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
		enterRule(_localctx, 526, RULE_kwReplace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2526);
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
		enterRule(_localctx, 528, RULE_kwReplication);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2528);
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
		enterRule(_localctx, 530, RULE_kwReturns);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2530);
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
		enterRule(_localctx, 532, RULE_kwRole);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2532);
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

	public static class KwSelectContext extends ParserRuleContext {
		public TerminalNode K_SELECT() { return getToken(CqlParser.K_SELECT, 0); }
		public KwSelectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwSelect; }
	}

	public final KwSelectContext kwSelect() throws RecognitionException {
		KwSelectContext _localctx = new KwSelectContext(_ctx, getState());
		enterRule(_localctx, 534, RULE_kwSelect);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2534);
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
		enterRule(_localctx, 536, RULE_kwSet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2536);
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
		enterRule(_localctx, 538, RULE_kwSfunc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2538);
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
		enterRule(_localctx, 540, RULE_kwStatic);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2540);
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
		enterRule(_localctx, 542, RULE_kwStorage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2542);
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
		enterRule(_localctx, 544, RULE_kwStype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2544);
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
		enterRule(_localctx, 546, RULE_kwSuperuser);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2546);
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
		enterRule(_localctx, 548, RULE_kwTable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2548);
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
		enterRule(_localctx, 550, RULE_kwTimestamp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2550);
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
		enterRule(_localctx, 552, RULE_kwTo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2552);
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

	public static class KwTokenContext extends ParserRuleContext {
		public TerminalNode K_TOKEN() { return getToken(CqlParser.K_TOKEN, 0); }
		public KwTokenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwToken; }
	}

	public final KwTokenContext kwToken() throws RecognitionException {
		KwTokenContext _localctx = new KwTokenContext(_ctx, getState());
		enterRule(_localctx, 554, RULE_kwToken);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2554);
			match(K_TOKEN);
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 556, RULE_kwTrigger);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2556);
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
		enterRule(_localctx, 558, RULE_kwTruncate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2558);
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
		enterRule(_localctx, 560, RULE_kwTtl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2560);
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
		enterRule(_localctx, 562, RULE_kwType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2562);
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
		enterRule(_localctx, 564, RULE_kwUnlogged);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2564);
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
		enterRule(_localctx, 566, RULE_kwUpdate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2566);
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
		enterRule(_localctx, 568, RULE_kwUse);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2568);
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
		enterRule(_localctx, 570, RULE_kwUser);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2570);
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
		enterRule(_localctx, 572, RULE_kwUsers);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2572);
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
		enterRule(_localctx, 574, RULE_kwUsing);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2574);
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
		enterRule(_localctx, 576, RULE_kwValues);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2576);
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
		enterRule(_localctx, 578, RULE_kwView);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2578);
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
		enterRule(_localctx, 580, RULE_kwWhere);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2580);
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
		enterRule(_localctx, 582, RULE_kwWith);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2582);
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
		enterRule(_localctx, 584, RULE_kwRevoke);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2584);
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
		enterRule(_localctx, 586, RULE_dataTypeAscii);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2586);
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
		enterRule(_localctx, 588, RULE_dataTypeBigint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2588);
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
		enterRule(_localctx, 590, RULE_dataTypeBlob);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2590);
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
		enterRule(_localctx, 592, RULE_dataTypeBoolean);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2592);
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
		enterRule(_localctx, 594, RULE_dataTypeCounter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2594);
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
		enterRule(_localctx, 596, RULE_dataTypeDate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2596);
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
		enterRule(_localctx, 598, RULE_dataTypeDecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2598);
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
		enterRule(_localctx, 600, RULE_dataTypeDouble);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2600);
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
		enterRule(_localctx, 602, RULE_dataTypeFloat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2602);
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
		public DataTypeFrozenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeFrozen; }
	}

	public final DataTypeFrozenContext dataTypeFrozen() throws RecognitionException {
		DataTypeFrozenContext _localctx = new DataTypeFrozenContext(_ctx, getState());
		enterRule(_localctx, 604, RULE_dataTypeFrozen);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2604);
			match(K_FROZEN);
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 606, RULE_dataTypeInet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2606);
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
		enterRule(_localctx, 608, RULE_dataTypeInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2608);
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
		public DataTypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeList; }
	}

	public final DataTypeListContext dataTypeList() throws RecognitionException {
		DataTypeListContext _localctx = new DataTypeListContext(_ctx, getState());
		enterRule(_localctx, 610, RULE_dataTypeList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2610);
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

	public static class DataTypeMapContext extends ParserRuleContext {
		public TerminalNode K_MAP() { return getToken(CqlParser.K_MAP, 0); }
		public DataTypeMapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeMap; }
	}

	public final DataTypeMapContext dataTypeMap() throws RecognitionException {
		DataTypeMapContext _localctx = new DataTypeMapContext(_ctx, getState());
		enterRule(_localctx, 612, RULE_dataTypeMap);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2612);
			match(K_MAP);
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 614, RULE_dataTypeSmallInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2614);
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
		public DataTypeSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeSet; }
	}

	public final DataTypeSetContext dataTypeSet() throws RecognitionException {
		DataTypeSetContext _localctx = new DataTypeSetContext(_ctx, getState());
		enterRule(_localctx, 616, RULE_dataTypeSet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2616);
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

	public static class DataTypeTextContext extends ParserRuleContext {
		public TerminalNode K_TEXT() { return getToken(CqlParser.K_TEXT, 0); }
		public DataTypeTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeText; }
	}

	public final DataTypeTextContext dataTypeText() throws RecognitionException {
		DataTypeTextContext _localctx = new DataTypeTextContext(_ctx, getState());
		enterRule(_localctx, 618, RULE_dataTypeText);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2618);
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
		enterRule(_localctx, 620, RULE_dataTypeTime);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2620);
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
		enterRule(_localctx, 622, RULE_dataTypeTimeUuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2622);
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
		enterRule(_localctx, 624, RULE_dataTypeTimestamp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2624);
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
		enterRule(_localctx, 626, RULE_dataTypeTinyInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2626);
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
		public DataTypeTupleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeTuple; }
	}

	public final DataTypeTupleContext dataTypeTuple() throws RecognitionException {
		DataTypeTupleContext _localctx = new DataTypeTupleContext(_ctx, getState());
		enterRule(_localctx, 628, RULE_dataTypeTuple);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2628);
			match(K_TUPLE);
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 630, RULE_dataTypeUserDefined);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2630);
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
		enterRule(_localctx, 632, RULE_dataTypeUuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2632);
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
		enterRule(_localctx, 634, RULE_dataTypeVarChar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2634);
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
		enterRule(_localctx, 636, RULE_dataTypeVarInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2636);
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

	public static class DataTypeStructureContext extends ParserRuleContext {
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
		public DataTypeStructureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeStructure; }
	}

	public final DataTypeStructureContext dataTypeStructure() throws RecognitionException {
		DataTypeStructureContext _localctx = new DataTypeStructureContext(_ctx, getState());
		enterRule(_localctx, 638, RULE_dataTypeStructure);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2638);
			syntaxBracketLa();
			setState(2639);
			dataType();
			setState(2645);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2640);
				syntaxComma();
				setState(2641);
				dataType();
				}
				}
				setState(2647);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2648);
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
		enterRule(_localctx, 640, RULE_specialStar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2650);
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
		enterRule(_localctx, 642, RULE_specialDot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2652);
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
		enterRule(_localctx, 644, RULE_eof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2654);
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
		enterRule(_localctx, 646, RULE_syntaxBracketLr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2656);
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
		enterRule(_localctx, 648, RULE_syntaxBracketRr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2658);
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
		enterRule(_localctx, 650, RULE_syntaxBracketLc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2660);
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
		enterRule(_localctx, 652, RULE_syntaxBracketRc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2662);
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
		enterRule(_localctx, 654, RULE_syntaxBracketLa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2664);
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
		enterRule(_localctx, 656, RULE_syntaxBracketRa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2666);
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
		enterRule(_localctx, 658, RULE_syntaxBracketLs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2668);
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
		enterRule(_localctx, 660, RULE_syntaxBracketRs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2670);
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
		enterRule(_localctx, 662, RULE_syntaxComma);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2672);
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
		enterRule(_localctx, 664, RULE_syntaxColon);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2674);
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

	public static class SyntaxPlusContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(CqlParser.PLUS, 0); }
		public SyntaxPlusContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxPlus; }
	}

	public final SyntaxPlusContext syntaxPlus() throws RecognitionException {
		SyntaxPlusContext _localctx = new SyntaxPlusContext(_ctx, getState());
		enterRule(_localctx, 666, RULE_syntaxPlus);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2676);
			match(PLUS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxMinusContext extends ParserRuleContext {
		public TerminalNode MINUS() { return getToken(CqlParser.MINUS, 0); }
		public SyntaxMinusContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntaxMinus; }
	}

	public final SyntaxMinusContext syntaxMinus() throws RecognitionException {
		SyntaxMinusContext _localctx = new SyntaxMinusContext(_ctx, getState());
		enterRule(_localctx, 668, RULE_syntaxMinus);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2678);
			match(MINUS);
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 670, RULE_syntaxSquote);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2680);
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
		enterRule(_localctx, 672, RULE_syntaxDquote);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2682);
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
		enterRule(_localctx, 674, RULE_syntaxOperatorEq);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2684);
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
		enterRule(_localctx, 676, RULE_syntaxOperatorLt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2686);
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
		enterRule(_localctx, 678, RULE_syntaxOperatorGt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2688);
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
		enterRule(_localctx, 680, RULE_syntaxOperatorLte);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2690);
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
		enterRule(_localctx, 682, RULE_syntaxOperatorGte);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2692);
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

	private static final int _serializedATNSegments = 2;
	private static final String _serializedATNSegment0 =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u00b2\u0a89\4\2\t"+
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
		"\4\u013e\t\u013e\4\u013f\t\u013f\4\u0140\t\u0140\4\u0141\t\u0141\4\u0142"+
		"\t\u0142\4\u0143\t\u0143\4\u0144\t\u0144\4\u0145\t\u0145\4\u0146\t\u0146"+
		"\4\u0147\t\u0147\4\u0148\t\u0148\4\u0149\t\u0149\4\u014a\t\u014a\4\u014b"+
		"\t\u014b\4\u014c\t\u014c\4\u014d\t\u014d\4\u014e\t\u014e\4\u014f\t\u014f"+
		"\4\u0150\t\u0150\4\u0151\t\u0151\4\u0152\t\u0152\4\u0153\t\u0153\4\u0154"+
		"\t\u0154\4\u0155\t\u0155\4\u0156\t\u0156\4\u0157\t\u0157\3\2\5\2\u02b0"+
		"\n\2\3\2\5\2\u02b3\n\2\3\2\3\2\3\3\3\3\5\3\u02b9\n\3\3\3\3\3\3\3\7\3\u02be"+
		"\n\3\f\3\16\3\u02c1\13\3\3\3\3\3\5\3\u02c5\n\3\3\3\5\3\u02c8\n\3\3\3\5"+
		"\3\u02cb\n\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u02f7\n\6\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\t\3\t\5\t\u0307\n\t\3\t\5\t\u030a\n"+
		"\t\3\n\3\n\3\n\3\n\3\n\5\n\u0311\n\n\3\n\3\n\3\n\5\n\u0316\n\n\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\5\f\u0321\n\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\f\5\f\u032b\n\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r"+
		"\u0337\n\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u0340\n\r\3\r\3\r\3\r\3\r\3"+
		"\r\5\r\u0347\n\r\3\16\3\16\3\16\5\16\u034c\n\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\5\16\u0354\n\16\3\17\3\17\3\17\5\17\u0359\n\17\3\17\3\17\5\17"+
		"\u035d\n\17\3\20\3\20\3\20\5\20\u0362\n\20\3\20\3\20\3\20\3\20\3\20\3"+
		"\21\3\21\3\21\3\21\3\21\3\21\7\21\u036f\n\21\f\21\16\21\u0372\13\21\3"+
		"\22\3\22\3\22\5\22\u0377\n\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23"+
		"\5\23\u0381\n\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\5\23\u038e\n\23\3\24\3\24\3\24\3\24\3\24\5\24\u0395\n\24\3\25\3\25\3"+
		"\25\3\25\7\25\u039b\n\25\f\25\16\25\u039e\13\25\3\26\3\26\3\26\3\26\3"+
		"\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u03af\n\27"+
		"\3\30\3\30\3\30\5\30\u03b4\n\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\5\30\u03c0\n\30\3\31\3\31\5\31\u03c4\n\31\3\31\3\31\5\31\u03c8"+
		"\n\31\3\31\3\31\3\31\5\31\u03cd\n\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\32\3\32\3\33\3\33\3\33\3\33\7\33\u03de\n\33\f\33\16\33\u03e1"+
		"\13\33\3\34\3\34\3\34\3\34\5\34\u03e7\n\34\3\34\3\34\3\34\3\34\3\35\3"+
		"\35\5\35\u03ef\n\35\3\35\3\35\5\35\u03f3\n\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\5\36\u0406"+
		"\n\36\3\37\3\37\3\37\3\37\3\37\7\37\u040d\n\37\f\37\16\37\u0410\13\37"+
		"\3\37\3\37\3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\7!\u041e\n!\f!\16!\u0421\13!"+
		"\3!\3!\3\"\3\"\3\"\3\"\3\"\7\"\u042a\n\"\f\"\16\"\u042d\13\"\3\"\3\"\3"+
		"#\3#\3#\3$\3$\3$\3$\3$\3$\5$\u043a\n$\3%\3%\3%\3&\3&\5&\u0441\n&\3\'\3"+
		"\'\3\'\3\'\3\'\5\'\u0448\n\'\3\'\3\'\3\'\3(\5(\u044e\n(\3(\5(\u0451\n"+
		"(\3(\5(\u0454\n(\3)\3)\3)\3*\3*\3*\3*\7*\u045d\n*\f*\16*\u0460\13*\3+"+
		"\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\7,\u046d\n,\f,\16,\u0470\13,\3-\3-\3-\3"+
		"-\3-\3.\3.\3.\3.\3.\3/\3/\3/\3/\3/\3/\3/\5/\u0483\n/\3\60\3\60\3\60\3"+
		"\61\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\64\3\64\3"+
		"\64\3\64\7\64\u0498\n\64\f\64\16\64\u049b\13\64\3\65\3\65\3\65\3\66\3"+
		"\66\3\66\3\66\3\66\3\66\7\66\u04a6\n\66\f\66\16\66\u04a9\13\66\3\67\3"+
		"\67\3\67\3\67\5\67\u04af\n\67\38\38\38\38\38\78\u04b6\n8\f8\168\u04b9"+
		"\138\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\59\u04cb\n9\3:\3"+
		":\3:\3:\3:\3:\5:\u04d3\n:\3:\3:\3:\3:\5:\u04d9\n:\3;\3;\3;\5;\u04de\n"+
		";\3;\3;\3<\3<\3<\5<\u04e5\n<\3<\3<\3<\5<\u04ea\n<\3<\3<\3=\3=\3=\3=\5"+
		"=\u04f2\n=\3=\3=\3=\5=\u04f7\n=\3=\3=\3>\3>\3>\5>\u04fe\n>\3>\3>\3>\5"+
		">\u0503\n>\3>\3>\3?\3?\3?\5?\u050a\n?\3?\3?\3?\5?\u050f\n?\3?\3?\3@\3"+
		"@\3@\5@\u0516\n@\3@\3@\3@\3@\3A\3A\3A\5A\u051f\nA\3A\3A\3B\3B\3B\5B\u0526"+
		"\nB\3B\3B\3C\3C\3C\5C\u052d\nC\3C\3C\3D\3D\3D\5D\u0534\nD\3D\3D\3D\5D"+
		"\u0539\nD\3D\3D\3E\3E\3E\5E\u0540\nE\3E\3E\3E\5E\u0545\nE\3F\3F\3F\3F"+
		"\3F\5F\u054c\nF\3G\3G\3G\3G\3G\5G\u0553\nG\3G\3G\5G\u0557\nG\3G\3G\3G"+
		"\5G\u055c\nG\5G\u055e\nG\3H\3H\3H\3H\3H\3H\3H\3H\7H\u0568\nH\fH\16H\u056b"+
		"\13H\3H\3H\3I\3I\5I\u0571\nI\3J\3J\3J\3J\7J\u0577\nJ\fJ\16J\u057a\13J"+
		"\3K\3K\3K\3K\3K\3K\3K\3K\5K\u0584\nK\3L\3L\3M\3M\5M\u058a\nM\3N\3N\3N"+
		"\3N\3N\7N\u0591\nN\fN\16N\u0594\13N\3N\3N\3O\3O\3O\3O\3P\3P\3Q\3Q\5Q\u05a0"+
		"\nQ\3R\3R\3R\3R\7R\u05a6\nR\fR\16R\u05a9\13R\3R\3R\3R\5R\u05ae\nR\3S\3"+
		"S\3S\3S\3S\3S\3S\3S\3S\3S\3S\3S\5S\u05bc\nS\3T\3T\3T\3T\3T\3T\5T\u05c4"+
		"\nT\3U\3U\3U\3U\3U\3U\3V\3V\3V\5V\u05cf\nV\3W\3W\3X\3X\3X\3X\3Y\3Y\3Y"+
		"\3Y\3Y\3Y\3Z\3Z\3Z\3Z\7Z\u05e1\nZ\fZ\16Z\u05e4\13Z\3[\3[\3[\3[\7[\u05ea"+
		"\n[\f[\16[\u05ed\13[\3\\\3\\\3]\3]\3^\3^\3^\3_\3_\3_\3_\3_\3_\3_\3_\3"+
		"_\5_\u05ff\n_\3`\3`\5`\u0603\n`\3`\3`\5`\u0607\n`\3a\3a\5a\u060b\na\3"+
		"b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\5b\u0619\nb\3c\3c\3c\3c\7c\u061f\n"+
		"c\fc\16c\u0622\13c\3d\3d\3d\3d\3d\3d\5d\u062a\nd\3e\3e\3e\3e\3f\3f\3f"+
		"\3g\3g\5g\u0635\ng\3g\3g\3h\3h\3h\5h\u063c\nh\3h\5h\u063f\nh\3h\3h\3h"+
		"\3i\3i\3i\3i\5i\u0648\ni\3j\3j\5j\u064c\nj\3k\3k\3k\3k\3k\5k\u0653\nk"+
		"\3l\3l\3l\3l\3l\5l\u065a\nl\3m\3m\3m\3m\5m\u0660\nm\3m\3m\3n\3n\3n\3n"+
		"\5n\u0668\nn\3n\3n\3o\3o\3o\3o\5o\u0670\no\3o\3o\3p\3p\5p\u0676\np\3p"+
		"\3p\5p\u067a\np\3p\3p\5p\u067e\np\3p\3p\5p\u0682\np\3q\3q\3q\3q\7q\u0688"+
		"\nq\fq\16q\u068b\13q\3r\3r\3r\3r\3r\5r\u0692\nr\3r\3r\5r\u0696\nr\3s\3"+
		"s\3s\5s\u069b\ns\3s\3s\3s\5s\u06a0\ns\3s\3s\5s\u06a4\ns\3t\3t\3t\3u\3"+
		"u\3u\3u\7u\u06ad\nu\fu\16u\u06b0\13u\3v\3v\3v\3v\3w\3w\3w\3w\3w\7w\u06bb"+
		"\nw\fw\16w\u06be\13w\3w\5w\u06c1\nw\3x\3x\3x\3x\5x\u06c7\nx\3x\3x\3x\3"+
		"x\3x\5x\u06ce\nx\3x\3x\3x\3x\3x\3x\3x\5x\u06d7\nx\3x\3x\3x\3x\3x\3x\3"+
		"x\5x\u06e0\nx\3x\3x\3x\3x\3x\3x\3x\5x\u06e9\nx\3x\3x\3x\3x\3x\3x\3x\5"+
		"x\u06f2\nx\3x\3x\3x\3x\3x\3x\3x\5x\u06fb\nx\3x\3x\3x\3x\3x\3x\3x\5x\u0704"+
		"\nx\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\5x\u0710\nx\3y\3y\3y\3y\3y\7y\u0717"+
		"\ny\fy\16y\u071a\13y\3y\3y\3z\3z\3z\3z\3z\3z\3z\3z\3z\7z\u0727\nz\fz\16"+
		"z\u072a\13z\3z\3z\3{\3{\3{\3{\3{\7{\u0733\n{\f{\16{\u0736\13{\3{\3{\3"+
		"|\3|\3|\3|\3|\3|\3|\5|\u0741\n|\3|\5|\u0744\n|\3}\3}\3}\3}\3}\3}\3}\3"+
		"}\3}\3}\3}\3}\3}\3}\3}\3}\5}\u0756\n}\3~\3~\3~\3\177\3\177\3\177\3\u0080"+
		"\3\u0080\3\u0080\3\u0081\3\u0081\3\u0081\3\u0081\3\u0082\3\u0082\3\u0082"+
		"\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\5\u0083\u076d\n\u0083\3\u0083"+
		"\5\u0083\u0770\n\u0083\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\5\u0084"+
		"\u0777\n\u0084\3\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u077d\n\u0085\7"+
		"\u0085\u077f\n\u0085\f\u0085\16\u0085\u0782\13\u0085\3\u0085\5\u0085\u0785"+
		"\n\u0085\3\u0086\3\u0086\3\u0086\3\u0086\7\u0086\u078b\n\u0086\f\u0086"+
		"\16\u0086\u078e\13\u0086\3\u0087\3\u0087\5\u0087\u0792\n\u0087\3\u0087"+
		"\5\u0087\u0795\n\u0087\3\u0088\3\u0088\5\u0088\u0799\n\u0088\3\u0088\3"+
		"\u0088\3\u0088\5\u0088\u079e\n\u0088\3\u0088\5\u0088\u07a1\n\u0088\3\u0088"+
		"\5\u0088\u07a4\n\u0088\3\u0088\5\u0088\u07a7\n\u0088\3\u0089\3\u0089\3"+
		"\u0089\5\u0089\u07ac\n\u0089\3\u008a\3\u008a\3\u008a\3\u008a\5\u008a\u07b2"+
		"\n\u008a\3\u008b\3\u008b\3\u008b\3\u008c\3\u008c\3\u008c\5\u008c\u07ba"+
		"\n\u008c\3\u008c\5\u008c\u07bd\n\u008c\3\u008d\3\u008d\3\u008d\3\u008e"+
		"\3\u008e\3\u008e\3\u008e\3\u008e\7\u008e\u07c7\n\u008e\f\u008e\16\u008e"+
		"\u07ca\13\u008e\3\u008e\5\u008e\u07cd\n\u008e\3\u008f\3\u008f\3\u008f"+
		"\3\u008f\3\u008f\5\u008f\u07d4\n\u008f\3\u008f\3\u008f\3\u008f\3\u008f"+
		"\5\u008f\u07da\n\u008f\3\u008f\5\u008f\u07dd\n\u008f\3\u0090\3\u0090\3"+
		"\u0090\3\u0090\7\u0090\u07e3\n\u0090\f\u0090\16\u0090\u07e6\13\u0090\3"+
		"\u0091\3\u0091\3\u0091\3\u0091\3\u0091\3\u0091\5\u0091\u07ee\n\u0091\3"+
		"\u0092\3\u0092\3\u0092\3\u0092\5\u0092\u07f4\n\u0092\3\u0093\3\u0093\3"+
		"\u0093\3\u0093\5\u0093\u07fa\n\u0093\3\u0093\3\u0093\3\u0094\3\u0094\3"+
		"\u0094\5\u0094\u0801\n\u0094\3\u0094\3\u0094\3\u0095\3\u0095\3\u0095\5"+
		"\u0095\u0808\n\u0095\3\u0095\3\u0095\5\u0095\u080c\n\u0095\3\u0095\3\u0095"+
		"\5\u0095\u0810\n\u0095\3\u0095\5\u0095\u0813\n\u0095\3\u0096\3\u0096\3"+
		"\u0096\3\u0096\3\u0096\3\u0096\3\u0096\3\u0096\5\u0096\u081d\n\u0096\3"+
		"\u0097\3\u0097\3\u0097\3\u0097\3\u0097\3\u0097\3\u0097\5\u0097\u0826\n"+
		"\u0097\3\u0097\5\u0097\u0829\n\u0097\3\u0098\3\u0098\3\u0098\5\u0098\u082e"+
		"\n\u0098\3\u0098\3\u0098\3\u0098\3\u0098\5\u0098\u0834\n\u0098\7\u0098"+
		"\u0836\n\u0098\f\u0098\16\u0098\u0839\13\u0098\3\u0099\3\u0099\3\u0099"+
		"\3\u0099\3\u0099\3\u0099\3\u0099\5\u0099\u0842\n\u0099\3\u009a\3\u009a"+
		"\3\u009a\3\u009a\3\u009a\5\u009a\u0849\n\u009a\3\u009b\3\u009b\3\u009b"+
		"\3\u009b\3\u009c\3\u009c\3\u009c\3\u009c\5\u009c\u0853\n\u009c\3\u009d"+
		"\3\u009d\3\u009d\3\u009d\3\u009d\7\u009d\u085a\n\u009d\f\u009d\16\u009d"+
		"\u085d\13\u009d\3\u009d\3\u009d\3\u009e\3\u009e\3\u009e\3\u009e\3\u009e"+
		"\7\u009e\u0866\n\u009e\f\u009e\16\u009e\u0869\13\u009e\3\u009e\3\u009e"+
		"\3\u009f\3\u009f\3\u009f\3\u009f\3\u009f\7\u009f\u0872\n\u009f\f\u009f"+
		"\16\u009f\u0875\13\u009f\3\u009f\3\u009f\3\u00a0\3\u00a0\3\u00a0\3\u00a0"+
		"\3\u00a0\7\u00a0\u087e\n\u00a0\f\u00a0\16\u00a0\u0881\13\u00a0\3\u00a0"+
		"\3\u00a0\3\u00a1\3\u00a1\3\u00a2\3\u00a2\3\u00a3\3\u00a3\3\u00a4\3\u00a4"+
		"\3\u00a5\3\u00a5\3\u00a6\3\u00a6\3\u00a7\3\u00a7\3\u00a7\3\u00a7\5\u00a7"+
		"\u0895\n\u00a7\3\u00a8\3\u00a8\3\u00a8\3\u00a8\3\u00a8\5\u00a8\u089c\n"+
		"\u00a8\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9"+
		"\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\5\u00a9"+
		"\u08ae\n\u00a9\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa"+
		"\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa"+
		"\5\u00aa\u08c0\n\u00aa\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab"+
		"\5\u00ab\u08c8\n\u00ab\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac"+
		"\5\u00ac\u08d0\n\u00ac\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad"+
		"\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad"+
		"\3\u00ad\5\u00ad\u08e2\n\u00ad\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00ae"+
		"\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00ae"+
		"\3\u00ae\3\u00ae\5\u00ae\u08f4\n\u00ae\3\u00af\3\u00af\5\u00af\u08f8\n"+
		"\u00af\3\u00b0\3\u00b0\3\u00b0\5\u00b0\u08fd\n\u00b0\3\u00b0\3\u00b0\3"+
		"\u00b0\5\u00b0\u0902\n\u00b0\3\u00b0\3\u00b0\3\u00b0\5\u00b0\u0907\n\u00b0"+
		"\3\u00b0\3\u00b0\3\u00b0\5\u00b0\u090c\n\u00b0\3\u00b0\3\u00b0\3\u00b0"+
		"\5\u00b0\u0911\n\u00b0\5\u00b0\u0913\n\u00b0\3\u00b1\3\u00b1\3\u00b1\3"+
		"\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1"+
		"\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1"+
		"\5\u00b1\u092a\n\u00b1\3\u00b2\3\u00b2\5\u00b2\u092e\n\u00b2\3\u00b3\3"+
		"\u00b3\3\u00b4\3\u00b4\3\u00b5\3\u00b5\3\u00b6\3\u00b6\3\u00b7\3\u00b7"+
		"\3\u00b8\3\u00b8\3\u00b9\3\u00b9\3\u00ba\3\u00ba\3\u00bb\3\u00bb\3\u00bc"+
		"\3\u00bc\3\u00bd\3\u00bd\3\u00be\3\u00be\3\u00be\3\u00bf\3\u00bf\3\u00c0"+
		"\3\u00c0\3\u00c1\3\u00c1\3\u00c2\3\u00c2\3\u00c3\3\u00c3\3\u00c4\3\u00c4"+
		"\3\u00c5\3\u00c5\3\u00c6\3\u00c6\3\u00c6\3\u00c7\3\u00c7\3\u00c8\3\u00c8"+
		"\3\u00c8\3\u00c9\3\u00c9\3\u00ca\3\u00ca\3\u00cb\3\u00cb\3\u00cc\3\u00cc"+
		"\3\u00cd\3\u00cd\3\u00ce\3\u00ce\3\u00cf\3\u00cf\3\u00d0\3\u00d0\3\u00d1"+
		"\3\u00d1\3\u00d2\3\u00d2\3\u00d3\3\u00d3\3\u00d4\3\u00d4\3\u00d5\3\u00d5"+
		"\3\u00d6\3\u00d6\3\u00d6\3\u00d7\3\u00d7\3\u00d8\3\u00d8\3\u00d9\3\u00d9"+
		"\3\u00da\3\u00da\3\u00db\3\u00db\3\u00dc\3\u00dc\3\u00dd\3\u00dd\3\u00de"+
		"\3\u00de\3\u00df\3\u00df\3\u00e0\3\u00e0\3\u00e1\3\u00e1\3\u00e2\3\u00e2"+
		"\3\u00e3\3\u00e3\3\u00e4\3\u00e4\3\u00e5\3\u00e5\3\u00e6\3\u00e6\3\u00e7"+
		"\3\u00e7\3\u00e8\3\u00e8\3\u00e9\3\u00e9\3\u00ea\3\u00ea\3\u00eb\3\u00eb"+
		"\3\u00ec\3\u00ec\3\u00ed\3\u00ed\3\u00ee\3\u00ee\3\u00ef\3\u00ef\3\u00f0"+
		"\3\u00f0\3\u00f1\3\u00f1\3\u00f2\3\u00f2\3\u00f3\3\u00f3\3\u00f4\3\u00f4"+
		"\3\u00f5\3\u00f5\3\u00f6\3\u00f6\3\u00f7\3\u00f7\3\u00f8\3\u00f8\3\u00f9"+
		"\3\u00f9\3\u00fa\3\u00fa\3\u00fb\3\u00fb\3\u00fc\3\u00fc\3\u00fd\3\u00fd"+
		"\3\u00fe\3\u00fe\3\u00ff\3\u00ff\3\u0100\3\u0100\3\u0101\3\u0101\3\u0102"+
		"\3\u0102\3\u0103\3\u0103\3\u0103\3\u0104\3\u0104\3\u0105\3\u0105\3\u0106"+
		"\3\u0106\3\u0107\3\u0107\3\u0108\3\u0108\3\u0109\3\u0109\3\u010a\3\u010a"+
		"\3\u010b\3\u010b\3\u010c\3\u010c\3\u010d\3\u010d\3\u010e\3\u010e\3\u010f"+
		"\3\u010f\3\u0110\3\u0110\3\u0111\3\u0111\3\u0112\3\u0112\3\u0113\3\u0113"+
		"\3\u0114\3\u0114\3\u0115\3\u0115\3\u0116\3\u0116\3\u0117\3\u0117\3\u0118"+
		"\3\u0118\3\u0119\3\u0119\3\u011a\3\u011a\3\u011b\3\u011b\3\u011c\3\u011c"+
		"\3\u011d\3\u011d\3\u011e\3\u011e\3\u011f\3\u011f\3\u0120\3\u0120\3\u0121"+
		"\3\u0121\3\u0122\3\u0122\3\u0123\3\u0123\3\u0124\3\u0124\3\u0125\3\u0125"+
		"\3\u0126\3\u0126\3\u0127\3\u0127\3\u0128\3\u0128\3\u0129\3\u0129\3\u012a"+
		"\3\u012a\3\u012b\3\u012b\3\u012c\3\u012c\3\u012d\3\u012d\3\u012e\3\u012e"+
		"\3\u012f\3\u012f\3\u0130\3\u0130\3\u0131\3\u0131\3\u0132\3\u0132\3\u0133"+
		"\3\u0133\3\u0134\3\u0134\3\u0135\3\u0135\3\u0136\3\u0136\3\u0137\3\u0137"+
		"\3\u0138\3\u0138\3\u0139\3\u0139\3\u013a\3\u013a\3\u013b\3\u013b\3\u013c"+
		"\3\u013c\3\u013d\3\u013d\3\u013e\3\u013e\3\u013f\3\u013f\3\u0140\3\u0140"+
		"\3\u0141\3\u0141\3\u0141\3\u0141\3\u0141\7\u0141\u0a56\n\u0141\f\u0141"+
		"\16\u0141\u0a59\13\u0141\3\u0141\3\u0141\3\u0142\3\u0142\3\u0143\3\u0143"+
		"\3\u0144\3\u0144\3\u0145\3\u0145\3\u0146\3\u0146\3\u0147\3\u0147\3\u0148"+
		"\3\u0148\3\u0149\3\u0149\3\u014a\3\u014a\3\u014b\3\u014b\3\u014c\3\u014c"+
		"\3\u014d\3\u014d\3\u014e\3\u014e\3\u014f\3\u014f\3\u0150\3\u0150\3\u0151"+
		"\3\u0151\3\u0152\3\u0152\3\u0153\3\u0153\3\u0154\3\u0154\3\u0155\3\u0155"+
		"\3\u0156\3\u0156\3\u0157\3\u0157\3\u0157\2\2\u0158\2\4\6\b\n\f\16\20\22"+
		"\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnp"+
		"rtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094"+
		"\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac"+
		"\u00ae\u00b0\u00b2\u00b4\u00b6\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4"+
		"\u00c6\u00c8\u00ca\u00cc\u00ce\u00d0\u00d2\u00d4\u00d6\u00d8\u00da\u00dc"+
		"\u00de\u00e0\u00e2\u00e4\u00e6\u00e8\u00ea\u00ec\u00ee\u00f0\u00f2\u00f4"+
		"\u00f6\u00f8\u00fa\u00fc\u00fe\u0100\u0102\u0104\u0106\u0108\u010a\u010c"+
		"\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124"+
		"\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0138\u013a\u013c"+
		"\u013e\u0140\u0142\u0144\u0146\u0148\u014a\u014c\u014e\u0150\u0152\u0154"+
		"\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c"+
		"\u016e\u0170\u0172\u0174\u0176\u0178\u017a\u017c\u017e\u0180\u0182\u0184"+
		"\u0186\u0188\u018a\u018c\u018e\u0190\u0192\u0194\u0196\u0198\u019a\u019c"+
		"\u019e\u01a0\u01a2\u01a4\u01a6\u01a8\u01aa\u01ac\u01ae\u01b0\u01b2\u01b4"+
		"\u01b6\u01b8\u01ba\u01bc\u01be\u01c0\u01c2\u01c4\u01c6\u01c8\u01ca\u01cc"+
		"\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01de\u01e0\u01e2\u01e4"+
		"\u01e6\u01e8\u01ea\u01ec\u01ee\u01f0\u01f2\u01f4\u01f6\u01f8\u01fa\u01fc"+
		"\u01fe\u0200\u0202\u0204\u0206\u0208\u020a\u020c\u020e\u0210\u0212\u0214"+
		"\u0216\u0218\u021a\u021c\u021e\u0220\u0222\u0224\u0226\u0228\u022a\u022c"+
		"\u022e\u0230\u0232\u0234\u0236\u0238\u023a\u023c\u023e\u0240\u0242\u0244"+
		"\u0246\u0248\u024a\u024c\u024e\u0250\u0252\u0254\u0256\u0258\u025a\u025c"+
		"\u025e\u0260\u0262\u0264\u0266\u0268\u026a\u026c\u026e\u0270\u0272\u0274"+
		"\u0276\u0278\u027a\u027c\u027e\u0280\u0282\u0284\u0286\u0288\u028a\u028c"+
		"\u028e\u0290\u0292\u0294\u0296\u0298\u029a\u029c\u029e\u02a0\u02a2\u02a4"+
		"\u02a6\u02a8\u02aa\u02ac\2\4\3\2\u00a8\u00a9\4\2<<~~\2\u0ab0\2\u02af\3"+
		"\2\2\2\4\u02bf\3\2\2\2\6\u02cc\3\2\2\2\b\u02ce\3\2\2\2\n\u02f6\3\2\2\2"+
		"\f\u02f8\3\2\2\2\16\u02ff\3\2\2\2\20\u0302\3\2\2\2\22\u030b\3\2\2\2\24"+
		"\u0317\3\2\2\2\26\u032a\3\2\2\2\30\u0346\3\2\2\2\32\u0348\3\2\2\2\34\u0355"+
		"\3\2\2\2\36\u035e\3\2\2\2 \u0368\3\2\2\2\"\u0373\3\2\2\2$\u037c\3\2\2"+
		"\2&\u038f\3\2\2\2(\u0396\3\2\2\2*\u039f\3\2\2\2,\u03ae\3\2\2\2.\u03b0"+
		"\3\2\2\2\60\u03c1\3\2\2\2\62\u03d7\3\2\2\2\64\u03d9\3\2\2\2\66\u03e6\3"+
		"\2\2\28\u03ec\3\2\2\2:\u0405\3\2\2\2<\u0407\3\2\2\2>\u0413\3\2\2\2@\u0417"+
		"\3\2\2\2B\u0424\3\2\2\2D\u0430\3\2\2\2F\u0433\3\2\2\2H\u043b\3\2\2\2J"+
		"\u0440\3\2\2\2L\u0442\3\2\2\2N\u044d\3\2\2\2P\u0455\3\2\2\2R\u0458\3\2"+
		"\2\2T\u0461\3\2\2\2V\u0465\3\2\2\2X\u0471\3\2\2\2Z\u0476\3\2\2\2\\\u0482"+
		"\3\2\2\2^\u0484\3\2\2\2`\u0487\3\2\2\2b\u048c\3\2\2\2d\u0490\3\2\2\2f"+
		"\u0493\3\2\2\2h\u049c\3\2\2\2j\u049f\3\2\2\2l\u04aa\3\2\2\2n\u04b0\3\2"+
		"\2\2p\u04ca\3\2\2\2r\u04cc\3\2\2\2t\u04da\3\2\2\2v\u04e1\3\2\2\2x\u04ed"+
		"\3\2\2\2z\u04fa\3\2\2\2|\u0506\3\2\2\2~\u0512\3\2\2\2\u0080\u051b\3\2"+
		"\2\2\u0082\u0522\3\2\2\2\u0084\u0529\3\2\2\2\u0086\u0530\3\2\2\2\u0088"+
		"\u053c\3\2\2\2\u008a\u054b\3\2\2\2\u008c\u055d\3\2\2\2\u008e\u055f\3\2"+
		"\2\2\u0090\u056e\3\2\2\2\u0092\u0572\3\2\2\2\u0094\u0583\3\2\2\2\u0096"+
		"\u0585\3\2\2\2\u0098\u0589\3\2\2\2\u009a\u058b\3\2\2\2\u009c\u0597\3\2"+
		"\2\2\u009e\u059b\3\2\2\2\u00a0\u059f\3\2\2\2\u00a2\u05a1\3\2\2\2\u00a4"+
		"\u05bb\3\2\2\2\u00a6\u05c3\3\2\2\2\u00a8\u05c5\3\2\2\2\u00aa\u05ce\3\2"+
		"\2\2\u00ac\u05d0\3\2\2\2\u00ae\u05d2\3\2\2\2\u00b0\u05d6\3\2\2\2\u00b2"+
		"\u05dc\3\2\2\2\u00b4\u05e5\3\2\2\2\u00b6\u05ee\3\2\2\2\u00b8\u05f0\3\2"+
		"\2\2\u00ba\u05f2\3\2\2\2\u00bc\u05fe\3\2\2\2\u00be\u0600\3\2\2\2\u00c0"+
		"\u060a\3\2\2\2\u00c2\u060c\3\2\2\2\u00c4\u061a\3\2\2\2\u00c6\u0629\3\2"+
		"\2\2\u00c8\u062b\3\2\2\2\u00ca\u062f\3\2\2\2\u00cc\u0632\3\2\2\2\u00ce"+
		"\u0638\3\2\2\2\u00d0\u0647\3\2\2\2\u00d2\u064b\3\2\2\2\u00d4\u0652\3\2"+
		"\2\2\u00d6\u0659\3\2\2\2\u00d8\u065b\3\2\2\2\u00da\u0663\3\2\2\2\u00dc"+
		"\u066b\3\2\2\2\u00de\u0673\3\2\2\2\u00e0\u0683\3\2\2\2\u00e2\u0695\3\2"+
		"\2\2\u00e4\u0697\3\2\2\2\u00e6\u06a5\3\2\2\2\u00e8\u06a8\3\2\2\2\u00ea"+
		"\u06b1\3\2\2\2\u00ec\u06c0\3\2\2\2\u00ee\u070f\3\2\2\2\u00f0\u0711\3\2"+
		"\2\2\u00f2\u071d\3\2\2\2\u00f4\u072d\3\2\2\2\u00f6\u0739\3\2\2\2\u00f8"+
		"\u0755\3\2\2\2\u00fa\u0757\3\2\2\2\u00fc\u075a\3\2\2\2\u00fe\u075d\3\2"+
		"\2\2\u0100\u0760\3\2\2\2\u0102\u0764\3\2\2\2\u0104\u076f\3\2\2\2\u0106"+
		"\u0776\3\2\2\2\u0108\u0784\3\2\2\2\u010a\u0786\3\2\2\2\u010c\u0794\3\2"+
		"\2\2\u010e\u0796\3\2\2\2\u0110\u07a8\3\2\2\2\u0112\u07b1\3\2\2\2\u0114"+
		"\u07b3\3\2\2\2\u0116\u07bc\3\2\2\2\u0118\u07be\3\2\2\2\u011a\u07cc\3\2"+
		"\2\2\u011c\u07dc\3\2\2\2\u011e\u07de\3\2\2\2\u0120\u07ed\3\2\2\2\u0122"+
		"\u07ef\3\2\2\2\u0124\u07f5\3\2\2\2\u0126\u07fd\3\2\2\2\u0128\u0812\3\2"+
		"\2\2\u012a\u081c\3\2\2\2\u012c\u0828\3\2\2\2\u012e\u082d\3\2\2\2\u0130"+
		"\u0841\3\2\2\2\u0132\u0848\3\2\2\2\u0134\u084a\3\2\2\2\u0136\u0852\3\2"+
		"\2\2\u0138\u0854\3\2\2\2\u013a\u0860\3\2\2\2\u013c\u086c\3\2\2\2\u013e"+
		"\u0878\3\2\2\2\u0140\u0884\3\2\2\2\u0142\u0886\3\2\2\2\u0144\u0888\3\2"+
		"\2\2\u0146\u088a\3\2\2\2\u0148\u088c\3\2\2\2\u014a\u088e\3\2\2\2\u014c"+
		"\u0894\3\2\2\2\u014e\u089b\3\2\2\2\u0150\u08ad\3\2\2\2\u0152\u08bf\3\2"+
		"\2\2\u0154\u08c7\3\2\2\2\u0156\u08cf\3\2\2\2\u0158\u08e1\3\2\2\2\u015a"+
		"\u08f3\3\2\2\2\u015c\u08f7\3\2\2\2\u015e\u0912\3\2\2\2\u0160\u0929\3\2"+
		"\2\2\u0162\u092d\3\2\2\2\u0164\u092f\3\2\2\2\u0166\u0931\3\2\2\2\u0168"+
		"\u0933\3\2\2\2\u016a\u0935\3\2\2\2\u016c\u0937\3\2\2\2\u016e\u0939\3\2"+
		"\2\2\u0170\u093b\3\2\2\2\u0172\u093d\3\2\2\2\u0174\u093f\3\2\2\2\u0176"+
		"\u0941\3\2\2\2\u0178\u0943\3\2\2\2\u017a\u0945\3\2\2\2\u017c\u0948\3\2"+
		"\2\2\u017e\u094a\3\2\2\2\u0180\u094c\3\2\2\2\u0182\u094e\3\2\2\2\u0184"+
		"\u0950\3\2\2\2\u0186\u0952\3\2\2\2\u0188\u0954\3\2\2\2\u018a\u0956\3\2"+
		"\2\2\u018c\u0959\3\2\2\2\u018e\u095b\3\2\2\2\u0190\u095e\3\2\2\2\u0192"+
		"\u0960\3\2\2\2\u0194\u0962\3\2\2\2\u0196\u0964\3\2\2\2\u0198\u0966\3\2"+
		"\2\2\u019a\u0968\3\2\2\2\u019c\u096a\3\2\2\2\u019e\u096c\3\2\2\2\u01a0"+
		"\u096e\3\2\2\2\u01a2\u0970\3\2\2\2\u01a4\u0972\3\2\2\2\u01a6\u0974\3\2"+
		"\2\2\u01a8\u0976\3\2\2\2\u01aa\u0978\3\2\2\2\u01ac\u097b\3\2\2\2\u01ae"+
		"\u097d\3\2\2\2\u01b0\u097f\3\2\2\2\u01b2\u0981\3\2\2\2\u01b4\u0983\3\2"+
		"\2\2\u01b6\u0985\3\2\2\2\u01b8\u0987\3\2\2\2\u01ba\u0989\3\2\2\2\u01bc"+
		"\u098b\3\2\2\2\u01be\u098d\3\2\2\2\u01c0\u098f\3\2\2\2\u01c2\u0991\3\2"+
		"\2\2\u01c4\u0993\3\2\2\2\u01c6\u0995\3\2\2\2\u01c8\u0997\3\2\2\2\u01ca"+
		"\u0999\3\2\2\2\u01cc\u099b\3\2\2\2\u01ce\u099d\3\2\2\2\u01d0\u099f\3\2"+
		"\2\2\u01d2\u09a1\3\2\2\2\u01d4\u09a3\3\2\2\2\u01d6\u09a5\3\2\2\2\u01d8"+
		"\u09a7\3\2\2\2\u01da\u09a9\3\2\2\2\u01dc\u09ab\3\2\2\2\u01de\u09ad\3\2"+
		"\2\2\u01e0\u09af\3\2\2\2\u01e2\u09b1\3\2\2\2\u01e4\u09b3\3\2\2\2\u01e6"+
		"\u09b5\3\2\2\2\u01e8\u09b7\3\2\2\2\u01ea\u09b9\3\2\2\2\u01ec\u09bb\3\2"+
		"\2\2\u01ee\u09bd\3\2\2\2\u01f0\u09bf\3\2\2\2\u01f2\u09c1\3\2\2\2\u01f4"+
		"\u09c3\3\2\2\2\u01f6\u09c5\3\2\2\2\u01f8\u09c7\3\2\2\2\u01fa\u09c9\3\2"+
		"\2\2\u01fc\u09cb\3\2\2\2\u01fe\u09cd\3\2\2\2\u0200\u09cf\3\2\2\2\u0202"+
		"\u09d1\3\2\2\2\u0204\u09d3\3\2\2\2\u0206\u09d6\3\2\2\2\u0208\u09d8\3\2"+
		"\2\2\u020a\u09da\3\2\2\2\u020c\u09dc\3\2\2\2\u020e\u09de\3\2\2\2\u0210"+
		"\u09e0\3\2\2\2\u0212\u09e2\3\2\2\2\u0214\u09e4\3\2\2\2\u0216\u09e6\3\2"+
		"\2\2\u0218\u09e8\3\2\2\2\u021a\u09ea\3\2\2\2\u021c\u09ec\3\2\2\2\u021e"+
		"\u09ee\3\2\2\2\u0220\u09f0\3\2\2\2\u0222\u09f2\3\2\2\2\u0224\u09f4\3\2"+
		"\2\2\u0226\u09f6\3\2\2\2\u0228\u09f8\3\2\2\2\u022a\u09fa\3\2\2\2\u022c"+
		"\u09fc\3\2\2\2\u022e\u09fe\3\2\2\2\u0230\u0a00\3\2\2\2\u0232\u0a02\3\2"+
		"\2\2\u0234\u0a04\3\2\2\2\u0236\u0a06\3\2\2\2\u0238\u0a08\3\2\2\2\u023a"+
		"\u0a0a\3\2\2\2\u023c\u0a0c\3\2\2\2\u023e\u0a0e\3\2\2\2\u0240\u0a10\3\2"+
		"\2\2\u0242\u0a12\3\2\2\2\u0244\u0a14\3\2\2\2\u0246\u0a16\3\2\2\2\u0248"+
		"\u0a18\3\2\2\2\u024a\u0a1a\3\2\2\2\u024c\u0a1c\3\2\2\2\u024e\u0a1e\3\2"+
		"\2\2\u0250\u0a20\3\2\2\2\u0252\u0a22\3\2\2\2\u0254\u0a24\3\2\2\2\u0256"+
		"\u0a26\3\2\2\2\u0258\u0a28\3\2\2\2\u025a\u0a2a\3\2\2\2\u025c\u0a2c\3\2"+
		"\2\2\u025e\u0a2e\3\2\2\2\u0260\u0a30\3\2\2\2\u0262\u0a32\3\2\2\2\u0264"+
		"\u0a34\3\2\2\2\u0266\u0a36\3\2\2\2\u0268\u0a38\3\2\2\2\u026a\u0a3a\3\2"+
		"\2\2\u026c\u0a3c\3\2\2\2\u026e\u0a3e\3\2\2\2\u0270\u0a40\3\2\2\2\u0272"+
		"\u0a42\3\2\2\2\u0274\u0a44\3\2\2\2\u0276\u0a46\3\2\2\2\u0278\u0a48\3\2"+
		"\2\2\u027a\u0a4a\3\2\2\2\u027c\u0a4c\3\2\2\2\u027e\u0a4e\3\2\2\2\u0280"+
		"\u0a50\3\2\2\2\u0282\u0a5c\3\2\2\2\u0284\u0a5e\3\2\2\2\u0286\u0a60\3\2"+
		"\2\2\u0288\u0a62\3\2\2\2\u028a\u0a64\3\2\2\2\u028c\u0a66\3\2\2\2\u028e"+
		"\u0a68\3\2\2\2\u0290\u0a6a\3\2\2\2\u0292\u0a6c\3\2\2\2\u0294\u0a6e\3\2"+
		"\2\2\u0296\u0a70\3\2\2\2\u0298\u0a72\3\2\2\2\u029a\u0a74\3\2\2\2\u029c"+
		"\u0a76\3\2\2\2\u029e\u0a78\3\2\2\2\u02a0\u0a7a\3\2\2\2\u02a2\u0a7c\3\2"+
		"\2\2\u02a4\u0a7e\3\2\2\2\u02a6\u0a80\3\2\2\2\u02a8\u0a82\3\2\2\2\u02aa"+
		"\u0a84\3\2\2\2\u02ac\u0a86\3\2\2\2\u02ae\u02b0\5\4\3\2\u02af\u02ae\3\2"+
		"\2\2\u02af\u02b0\3\2\2\2\u02b0\u02b2\3\2\2\2\u02b1\u02b3\7\27\2\2\u02b2"+
		"\u02b1\3\2\2\2\u02b2\u02b3\3\2\2\2\u02b3\u02b4\3\2\2\2\u02b4\u02b5\5\u0286"+
		"\u0144\2\u02b5\3\3\2\2\2\u02b6\u02b8\5\n\6\2\u02b7\u02b9\7\27\2\2\u02b8"+
		"\u02b7\3\2\2\2\u02b8\u02b9\3\2\2\2\u02b9\u02ba\3\2\2\2\u02ba\u02bb\5\6"+
		"\4\2\u02bb\u02be\3\2\2\2\u02bc\u02be\5\b\5\2\u02bd\u02b6\3\2\2\2\u02bd"+
		"\u02bc\3\2\2\2\u02be\u02c1\3\2\2\2\u02bf\u02bd\3\2\2\2\u02bf\u02c0\3\2"+
		"\2\2\u02c0\u02ca\3\2\2\2\u02c1\u02bf\3\2\2\2\u02c2\u02c7\5\n\6\2\u02c3"+
		"\u02c5\7\27\2\2\u02c4\u02c3\3\2\2\2\u02c4\u02c5\3\2\2\2\u02c5\u02c6\3"+
		"\2\2\2\u02c6\u02c8\5\6\4\2\u02c7\u02c4\3\2\2\2\u02c7\u02c8\3\2\2\2\u02c8"+
		"\u02cb\3\2\2\2\u02c9\u02cb\5\b\5\2\u02ca\u02c2\3\2\2\2\u02ca\u02c9\3\2"+
		"\2\2\u02cb\5\3\2\2\2\u02cc\u02cd\7\n\2\2\u02cd\7\3\2\2\2\u02ce\u02cf\5"+
		"\6\4\2\u02cf\t\3\2\2\2\u02d0\u02f7\5\u00bc_\2\u02d1\u02f7\5\u00c2b\2\u02d2"+
		"\u02f7\5r:\2\u02d3\u02f7\5l\67\2\u02d4\u02f7\5Z.\2\u02d5\u02f7\5L\'\2"+
		"\u02d6\u02f7\5F$\2\u02d7\u02f7\5\u00ba^\2\u02d8\u02f7\58\35\2\u02d9\u02f7"+
		"\5\60\31\2\u02da\u02f7\5\u00ceh\2\u02db\u02f7\5.\30\2\u02dc\u02f7\5$\23"+
		"\2\u02dd\u02f7\5\34\17\2\u02de\u02f7\5\u0088E\2\u02df\u02f7\5\"\22\2\u02e0"+
		"\u02f7\5\36\20\2\u02e1\u02f7\5\32\16\2\u02e2\u02f7\5\u00dep\2\u02e3\u02f7"+
		"\5z>\2\u02e4\u02f7\5|?\2\u02e5\u02f7\5\u0086D\2\u02e6\u02f7\5\u0084C\2"+
		"\u02e7\u02f7\5x=\2\u02e8\u02f7\5\u0080A\2\u02e9\u02f7\5\u0082B\2\u02ea"+
		"\u02f7\5~@\2\u02eb\u02f7\5v<\2\u02ec\u02f7\5t;\2\u02ed\u02f7\5\24\13\2"+
		"\u02ee\u02f7\5\u00f6|\2\u02ef\u02f7\5\22\n\2\u02f0\u02f7\5\20\t\2\u02f1"+
		"\u02f7\5\f\7\2\u02f2\u02f7\5\u010e\u0088\2\u02f3\u02f7\5\u00ccg\2\u02f4"+
		"\u02f7\5\u00e4s\2\u02f5\u02f7\5\u00caf\2\u02f6\u02d0\3\2\2\2\u02f6\u02d1"+
		"\3\2\2\2\u02f6\u02d2\3\2\2\2\u02f6\u02d3\3\2\2\2\u02f6\u02d4\3\2\2\2\u02f6"+
		"\u02d5\3\2\2\2\u02f6\u02d6\3\2\2\2\u02f6\u02d7\3\2\2\2\u02f6\u02d8\3\2"+
		"\2\2\u02f6\u02d9\3\2\2\2\u02f6\u02da\3\2\2\2\u02f6\u02db\3\2\2\2\u02f6"+
		"\u02dc\3\2\2\2\u02f6\u02dd\3\2\2\2\u02f6\u02de\3\2\2\2\u02f6\u02df\3\2"+
		"\2\2\u02f6\u02e0\3\2\2\2\u02f6\u02e1\3\2\2\2\u02f6\u02e2\3\2\2\2\u02f6"+
		"\u02e3\3\2\2\2\u02f6\u02e4\3\2\2\2\u02f6\u02e5\3\2\2\2\u02f6\u02e6\3\2"+
		"\2\2\u02f6\u02e7\3\2\2\2\u02f6\u02e8\3\2\2\2\u02f6\u02e9\3\2\2\2\u02f6"+
		"\u02ea\3\2\2\2\u02f6\u02eb\3\2\2\2\u02f6\u02ec\3\2\2\2\u02f6\u02ed\3\2"+
		"\2\2\u02f6\u02ee\3\2\2\2\u02f6\u02ef\3\2\2\2\u02f6\u02f0\3\2\2\2\u02f6"+
		"\u02f1\3\2\2\2\u02f6\u02f2\3\2\2\2\u02f6\u02f3\3\2\2\2\u02f6\u02f4\3\2"+
		"\2\2\u02f6\u02f5\3\2\2\2\u02f7\13\3\2\2\2\u02f8\u02f9\5\u024a\u0126\2"+
		"\u02f9\u02fa\5\26\f\2\u02fa\u02fb\5\u01fc\u00ff\2\u02fb\u02fc\5\30\r\2"+
		"\u02fc\u02fd\5\u01c4\u00e3\2\u02fd\u02fe\5\u0164\u00b3\2\u02fe\r\3\2\2"+
		"\2\u02ff\u0300\5\u01e6\u00f4\2\u0300\u0301\5\u023e\u0120\2\u0301\17\3"+
		"\2\2\2\u0302\u0306\5\u01e8\u00f5\2\u0303\u0304\5\u01fa\u00fe\2\u0304\u0305"+
		"\5\u0164\u00b3\2\u0305\u0307\3\2\2\2\u0306\u0303\3\2\2\2\u0306\u0307\3"+
		"\2\2\2\u0307\u0309\3\2\2\2\u0308\u030a\5\u01f4\u00fb\2\u0309\u0308\3\2"+
		"\2\2\u0309\u030a\3\2\2\2\u030a\21\3\2\2\2\u030b\u030c\5\u01e6\u00f4\2"+
		"\u030c\u0310\5\26\f\2\u030d\u030e\5\u01fc\u00ff\2\u030e\u030f\5\30\r\2"+
		"\u030f\u0311\3\2\2\2\u0310\u030d\3\2\2\2\u0310\u0311\3\2\2\2\u0311\u0315"+
		"\3\2\2\2\u0312\u0313\5\u01fa\u00fe\2\u0313\u0314\5\u0164\u00b3\2\u0314"+
		"\u0316\3\2\2\2\u0315\u0312\3\2\2\2\u0315\u0316\3\2\2\2\u0316\23\3\2\2"+
		"\2\u0317\u0318\5\u01ca\u00e6\2\u0318\u0319\5\26\f\2\u0319\u031a\5\u01fc"+
		"\u00ff\2\u031a\u031b\5\30\r\2\u031b\u031c\5\u022a\u0116\2\u031c\u031d"+
		"\5\u0164\u00b3\2\u031d\25\3\2\2\2\u031e\u0321\5\u0182\u00c2\2\u031f\u0321"+
		"\5\u018a\u00c6\2\u0320\u031e\3\2\2\2\u0320\u031f\3\2\2\2\u0321\u032b\3"+
		"\2\2\2\u0322\u032b\5\u0190\u00c9\2\u0323\u032b\5\u019a\u00ce\2\u0324\u032b"+
		"\5\u01b2\u00da\2\u0325\u032b\5\u01bc\u00df\2\u0326\u032b\5\u01ac\u00d7"+
		"\2\u0327\u032b\5\u01b6\u00dc\2\u0328\u032b\5\u01f0\u00f9\2\u0329\u032b"+
		"\5\u0218\u010d\2\u032a\u0320\3\2\2\2\u032a\u0322\3\2\2\2\u032a\u0323\3"+
		"\2\2\2\u032a\u0324\3\2\2\2\u032a\u0325\3\2\2\2\u032a\u0326\3\2\2\2\u032a"+
		"\u0327\3\2\2\2\u032a\u0328\3\2\2\2\u032a\u0329\3\2\2\2\u032b\27\3\2\2"+
		"\2\u032c\u0347\5\u0184\u00c3\2\u032d\u032e\5\u0184\u00c3\2\u032e\u032f"+
		"\5\u01ce\u00e8\2\u032f\u0330\5\u01e0\u00f1\2\u0330\u0331\5\u014c\u00a7"+
		"\2\u0331\u0347\3\2\2\2\u0332\u0336\5\u01c8\u00e5\2\u0333\u0334\5\u014c"+
		"\u00a7\2\u0334\u0335\7\22\2\2\u0335\u0337\3\2\2\2\u0336\u0333\3\2\2\2"+
		"\u0336\u0337\3\2\2\2\u0337\u0338\3\2\2\2\u0338\u0339\5\u0170\u00b9\2\u0339"+
		"\u0347\3\2\2\2\u033a\u0347\5\u0186\u00c4\2\u033b\u033c\5\u01e0\u00f1\2"+
		"\u033c\u033d\5\u014c\u00a7\2\u033d\u0347\3\2\2\2\u033e\u0340\5\u0226\u0114"+
		"\2\u033f\u033e\3\2\2\2\u033f\u0340\3\2\2\2\u0340\u0341\3\2\2\2\u0341\u0347"+
		"\5\u0154\u00ab\2\u0342\u0347\5\u0188\u00c5\2\u0343\u0344\5\u0216\u010c"+
		"\2\u0344\u0345\5\u0164\u00b3\2\u0345\u0347\3\2\2\2\u0346\u032c\3\2\2\2"+
		"\u0346\u032d\3\2\2\2\u0346\u0332\3\2\2\2\u0346\u033a\3\2\2\2\u0346\u033b"+
		"\3\2\2\2\u0346\u033f\3\2\2\2\u0346\u0342\3\2\2\2\u0346\u0343\3\2\2\2\u0347"+
		"\31\3\2\2\2\u0348\u0349\5\u01ac\u00d7\2\u0349\u034b\5\u023c\u011f\2\u034a"+
		"\u034c\5\u0100\u0081\2\u034b\u034a\3\2\2\2\u034b\u034c\3\2\2\2\u034c\u034d"+
		"\3\2\2\2\u034d\u034e\5\u0174\u00bb\2\u034e\u034f\5\u0248\u0125\2\u034f"+
		"\u0350\5\u0208\u0105\2\u0350\u0353\5\u0146\u00a4\2\u0351\u0354\5\u0224"+
		"\u0113\2\u0352\u0354\5\u01f2\u00fa\2\u0353\u0351\3\2\2\2\u0353\u0352\3"+
		"\2\2\2\u0353\u0354\3\2\2\2\u0354\33\3\2\2\2\u0355\u0356\5\u01ac\u00d7"+
		"\2\u0356\u0358\5\u0216\u010c\2\u0357\u0359\5\u0100\u0081\2\u0358\u0357"+
		"\3\2\2\2\u0358\u0359\3\2\2\2\u0359\u035a\3\2\2\2\u035a\u035c\5\u0164\u00b3"+
		"\2\u035b\u035d\5n8\2\u035c\u035b\3\2\2\2\u035c\u035d\3\2\2\2\u035d\35"+
		"\3\2\2\2\u035e\u035f\5\u01ac\u00d7\2\u035f\u0361\5\u0234\u011b\2\u0360"+
		"\u0362\5\u0100\u0081\2\u0361\u0360\3\2\2\2\u0361\u0362\3\2\2\2\u0362\u0363"+
		"\3\2\2\2\u0363\u0364\5\u0156\u00ac\2\u0364\u0365\5\u0288\u0145\2\u0365"+
		"\u0366\5 \21\2\u0366\u0367\5\u028a\u0146\2\u0367\37\3\2\2\2\u0368\u0369"+
		"\5\u0158\u00ad\2\u0369\u0370\5\u015c\u00af\2\u036a\u036b\5\u0298\u014d"+
		"\2\u036b\u036c\5\u0158\u00ad\2\u036c\u036d\5\u015c\u00af\2\u036d\u036f"+
		"\3\2\2\2\u036e\u036a\3\2\2\2\u036f\u0372\3\2\2\2\u0370\u036e\3\2\2\2\u0370"+
		"\u0371\3\2\2\2\u0371!\3\2\2\2\u0372\u0370\3\2\2\2\u0373\u0374\5\u01ac"+
		"\u00d7\2\u0374\u0376\5\u022e\u0118\2\u0375\u0377\5\u0100\u0081\2\u0376"+
		"\u0375\3\2\2\2\u0376\u0377\3\2\2\2\u0377\u0378\3\2\2\2\u0378\u0379\5\u0156"+
		"\u00ac\2\u0379\u037a\5\u0240\u0121\2\u037a\u037b\5\u0168\u00b5\2\u037b"+
		"#\3\2\2\2\u037c\u037d\5\u01ac\u00d7\2\u037d\u037e\5\u01ee\u00f8\2\u037e"+
		"\u0380\5\u0244\u0123\2\u037f\u0381\5\u0100\u0081\2\u0380\u037f\3\2\2\2"+
		"\u0380\u0381\3\2\2\2\u0381\u0382\3\2\2\2\u0382\u0383\5\u0156\u00ac\2\u0383"+
		"\u0384\5\u0196\u00cc\2\u0384\u0385\5\u0218\u010d\2\u0385\u0386\5\u0108"+
		"\u0085\2\u0386\u0387\5\u01c4\u00e3\2\u0387\u0388\5\u0154\u00ab\2\u0388"+
		"\u0389\5&\24\2\u0389\u038d\5\u00a8U\2\u038a\u038b\5\u0248\u0125\2\u038b"+
		"\u038c\5,\27\2\u038c\u038e\3\2\2\2\u038d\u038a\3\2\2\2\u038d\u038e\3\2"+
		"\2\2\u038e%\3\2\2\2\u038f\u0390\5\u0246\u0124\2\u0390\u0394\5(\25\2\u0391"+
		"\u0392\5\u0192\u00ca\2\u0392\u0393\5\u011e\u0090\2\u0393\u0395\3\2\2\2"+
		"\u0394\u0391\3\2\2\2\u0394\u0395\3\2\2\2\u0395\'\3\2\2\2\u0396\u039c\5"+
		"*\26\2\u0397\u0398\5\u0192\u00ca\2\u0398\u0399\5*\26\2\u0399\u039b\3\2"+
		"\2\2\u039a\u0397\3\2\2\2\u039b\u039e\3\2\2\2\u039c\u039a\3\2\2\2\u039c"+
		"\u039d\3\2\2\2\u039d)\3\2\2\2\u039e\u039c\3\2\2\2\u039f\u03a0\5\u0158"+
		"\u00ad\2\u03a0\u03a1\5\u01da\u00ee\2\u03a1\u03a2\5\u01f6\u00fc\2\u03a2"+
		"\u03a3\5\u01f8\u00fd\2\u03a3+\3\2\2\2\u03a4\u03af\5\u0092J\2\u03a5\u03a6"+
		"\5\u0092J\2\u03a6\u03a7\5\u0192\u00ca\2\u03a7\u03a8\5\u008eH\2\u03a8\u03af"+
		"\3\2\2\2\u03a9\u03af\5\u008eH\2\u03aa\u03ab\5\u008eH\2\u03ab\u03ac\5\u0192"+
		"\u00ca\2\u03ac\u03ad\5\u0092J\2\u03ad\u03af\3\2\2\2\u03ae\u03a4\3\2\2"+
		"\2\u03ae\u03a5\3\2\2\2\u03ae\u03a9\3\2\2\2\u03ae\u03aa\3\2\2\2\u03af-"+
		"\3\2\2\2\u03b0\u03b1\5\u01ac\u00d7\2\u03b1\u03b3\5\u01e0\u00f1\2\u03b2"+
		"\u03b4\5\u0100\u0081\2\u03b3\u03b2\3\2\2\2\u03b3\u03b4\3\2\2\2\u03b4\u03b5"+
		"\3\2\2\2\u03b5\u03b6\5\u0152\u00aa\2\u03b6\u03b7\5\u0248\u0125\2\u03b7"+
		"\u03b8\5\u0212\u010a\2\u03b8\u03b9\7\u00ae\2\2\u03b9\u03ba\5\u028c\u0147"+
		"\2\u03ba\u03bb\5\u00c4c\2\u03bb\u03bf\5\u028e\u0148\2\u03bc\u03bd\5\u0192"+
		"\u00ca\2\u03bd\u03be\5\u00c8e\2\u03be\u03c0\3\2\2\2\u03bf\u03bc\3\2\2"+
		"\2\u03bf\u03c0\3\2\2\2\u03c0/\3\2\2\2\u03c1\u03c3\5\u01ac\u00d7\2\u03c2"+
		"\u03c4\5D#\2\u03c3\u03c2\3\2\2\2\u03c3\u03c4\3\2\2\2\u03c4\u03c5\3\2\2"+
		"\2\u03c5\u03c7\5\u01c8\u00e5\2\u03c6\u03c8\5\u0100\u0081\2\u03c7\u03c6"+
		"\3\2\2\2\u03c7\u03c8\3\2\2\2\u03c8\u03c9\3\2\2\2\u03c9\u03ca\5\u0156\u00ac"+
		"\2\u03ca\u03cc\5\u0288\u0145\2\u03cb\u03cd\5\64\33\2\u03cc\u03cb\3\2\2"+
		"\2\u03cc\u03cd\3\2\2\2\u03cd\u03ce\3\2\2\2\u03ce\u03cf\5\u028a\u0146\2"+
		"\u03cf\u03d0\5\66\34\2\u03d0\u03d1\5\u0214\u010b\2\u03d1\u03d2\5\u015c"+
		"\u00af\2\u03d2\u03d3\5\u01e2\u00f2\2\u03d3\u03d4\5\u0172\u00ba\2\u03d4"+
		"\u03d5\5\u0196\u00cc\2\u03d5\u03d6\5\62\32\2\u03d6\61\3\2\2\2\u03d7\u03d8"+
		"\7\u00a6\2\2\u03d8\63\3\2\2\2\u03d9\u03df\5\u017a\u00be\2\u03da\u03db"+
		"\5\u0298\u014d\2\u03db\u03dc\5\u017a\u00be\2\u03dc\u03de\3\2\2\2\u03dd"+
		"\u03da\3\2\2\2\u03de\u03e1\3\2\2\2\u03df\u03dd\3\2\2\2\u03df\u03e0\3\2"+
		"\2\2\u03e0\65\3\2\2\2\u03e1\u03df\3\2\2\2\u03e2\u03e7\5\u01a2\u00d2\2"+
		"\u03e3\u03e4\5\u0214\u010b\2\u03e4\u03e5\5\u01f8\u00fd\2\u03e5\u03e7\3"+
		"\2\2\2\u03e6\u03e2\3\2\2\2\u03e6\u03e3\3\2\2\2\u03e7\u03e8\3\2\2\2\u03e8"+
		"\u03e9\5\u01fc\u00ff\2\u03e9\u03ea\5\u01f8\u00fd\2\u03ea\u03eb\5\u01d4"+
		"\u00eb\2\u03eb\67\3\2\2\2\u03ec\u03ee\5\u01ac\u00d7\2\u03ed\u03ef\5D#"+
		"\2\u03ee\u03ed\3\2\2\2\u03ee\u03ef\3\2\2\2\u03ef\u03f0\3\2\2\2\u03f0\u03f2"+
		"\5\u0180\u00c1\2\u03f1\u03f3\5\u0100\u0081\2\u03f2\u03f1\3\2\2\2\u03f2"+
		"\u03f3\3\2\2\2\u03f3\u03f4\3\2\2\2\u03f4\u03f5\5\u0156\u00ac\2\u03f5\u03f6"+
		"\5\u0288\u0145\2\u03f6\u03f7\5\u015c\u00af\2\u03f7\u03f8\5\u028a\u0146"+
		"\2\u03f8\u03f9\5\u021c\u010f\2\u03f9\u03fa\5\u0170\u00b9\2\u03fa\u03fb"+
		"\5\u0222\u0112\2\u03fb\u03fc\5\u015c\u00af\2\u03fc\u03fd\5\u01c2\u00e2"+
		"\2\u03fd\u03fe\5\u0170\u00b9\2\u03fe\u03ff\5\u01d2\u00ea\2\u03ff\u0400"+
		"\5:\36\2\u04009\3\2\2\2\u0401\u0406\5\u0130\u0099\2\u0402\u0406\5B\"\2"+
		"\u0403\u0406\5@!\2\u0404\u0406\5<\37\2\u0405\u0401\3\2\2\2\u0405\u0402"+
		"\3\2\2\2\u0405\u0403\3\2\2\2\u0405\u0404\3\2\2\2\u0406;\3\2\2\2\u0407"+
		"\u0408\5\u028c\u0147\2\u0408\u040e\5> \2\u0409\u040a\5\u0298\u014d\2\u040a"+
		"\u040b\5> \2\u040b\u040d\3\2\2\2\u040c\u0409\3\2\2\2\u040d\u0410\3\2\2"+
		"\2\u040e\u040c\3\2\2\2\u040e\u040f\3\2\2\2\u040f\u0411\3\2\2\2\u0410\u040e"+
		"\3\2\2\2\u0411\u0412\5\u028e\u0148\2\u0412=\3\2\2\2\u0413\u0414\5\u0178"+
		"\u00bd\2\u0414\u0415\7\13\2\2\u0415\u0416\5:\36\2\u0416?\3\2\2\2\u0417"+
		"\u0418\5\u0288\u0145\2\u0418\u041f\5B\"\2\u0419\u041a\5\u0298\u014d\2"+
		"\u041a\u041b\5\u0130\u0099\2\u041b\u041e\3\2\2\2\u041c\u041e\5B\"\2\u041d"+
		"\u0419\3\2\2\2\u041d\u041c\3\2\2\2\u041e\u0421\3\2\2\2\u041f\u041d\3\2"+
		"\2\2\u041f\u0420\3\2\2\2\u0420\u0422\3\2\2\2\u0421\u041f\3\2\2\2\u0422"+
		"\u0423\5\u028a\u0146\2\u0423A\3\2\2\2\u0424\u0425\5\u0288\u0145\2\u0425"+
		"\u042b\5\u0130\u0099\2\u0426\u0427\5\u0298\u014d\2\u0427\u0428\5\u0130"+
		"\u0099\2\u0428\u042a\3\2\2\2\u0429\u0426\3\2\2\2\u042a\u042d\3\2\2\2\u042b"+
		"\u0429\3\2\2\2\u042b\u042c\3\2\2\2\u042c\u042e\3\2\2\2\u042d\u042b\3\2"+
		"\2\2\u042e\u042f\5\u028a\u0146\2\u042fC\3\2\2\2\u0430\u0431\5\u0200\u0101"+
		"\2\u0431\u0432\5\u0210\u0109\2\u0432E\3\2\2\2\u0433\u0434\5\u0190\u00c9"+
		"\2\u0434\u0435\5\u023c\u011f\2\u0435\u0436\5\u0174\u00bb\2\u0436\u0437"+
		"\5\u0248\u0125\2\u0437\u0439\5H%\2\u0438\u043a\5J&\2\u0439\u0438\3\2\2"+
		"\2\u0439\u043a\3\2\2\2\u043aG\3\2\2\2\u043b\u043c\5\u0208\u0105\2\u043c"+
		"\u043d\5\u0146\u00a4\2\u043dI\3\2\2\2\u043e\u0441\5\u0224\u0113\2\u043f"+
		"\u0441\5\u01f2\u00fa\2\u0440\u043e\3\2\2\2\u0440\u043f\3\2\2\2\u0441K"+
		"\3\2\2\2\u0442\u0443\5\u0190\u00c9\2\u0443\u0447\5\u0234\u011b\2\u0444"+
		"\u0445\5\u014c\u00a7\2\u0445\u0446\7\22\2\2\u0446\u0448\3\2\2\2\u0447"+
		"\u0444\3\2\2\2\u0447\u0448\3\2\2\2\u0448\u0449\3\2\2\2\u0449\u044a\5\u016c"+
		"\u00b7\2\u044a\u044b\5N(\2\u044bM\3\2\2\2\u044c\u044e\5X-\2\u044d\u044c"+
		"\3\2\2\2\u044d\u044e\3\2\2\2\u044e\u0450\3\2\2\2\u044f\u0451\5V,\2\u0450"+
		"\u044f\3\2\2\2\u0450\u0451\3\2\2\2\u0451\u0453\3\2\2\2\u0452\u0454\5P"+
		")\2\u0453\u0452\3\2\2\2\u0453\u0454\3\2\2\2\u0454O\3\2\2\2\u0455\u0456"+
		"\5\u020e\u0108\2\u0456\u0457\5R*\2\u0457Q\3\2\2\2\u0458\u045e\5T+\2\u0459"+
		"\u045a\5\u0192\u00ca\2\u045a\u045b\5T+\2\u045b\u045d\3\2\2\2\u045c\u0459"+
		"\3\2\2\2\u045d\u0460\3\2\2\2\u045e\u045c\3\2\2\2\u045e\u045f\3\2\2\2\u045f"+
		"S\3\2\2\2\u0460\u045e\3\2\2\2\u0461\u0462\5\u0158\u00ad\2\u0462\u0463"+
		"\5\u022a\u0116\2\u0463\u0464\5\u0158\u00ad\2\u0464U\3\2\2\2\u0465\u0466"+
		"\5\u017e\u00c0\2\u0466\u0467\5\u0158\u00ad\2\u0467\u046e\5\u015c\u00af"+
		"\2\u0468\u0469\5\u0298\u014d\2\u0469\u046a\5\u0158\u00ad\2\u046a\u046b"+
		"\5\u015c\u00af\2\u046b\u046d\3\2\2\2\u046c\u0468\3\2\2\2\u046d\u0470\3"+
		"\2\2\2\u046e\u046c\3\2\2\2\u046e\u046f\3\2\2\2\u046fW\3\2\2\2\u0470\u046e"+
		"\3\2\2\2\u0471\u0472\5\u0190\u00c9\2\u0472\u0473\5\u0158\u00ad\2\u0473"+
		"\u0474\5\u0234\u011b\2\u0474\u0475\5\u015c\u00af\2\u0475Y\3\2\2\2\u0476"+
		"\u0477\5\u0190\u00c9\2\u0477\u0478\5\u0226\u0114\2\u0478\u0479\5\u0154"+
		"\u00ab\2\u0479\u047a\5\\/\2\u047a[\3\2\2\2\u047b\u0483\5h\65\2\u047c\u0483"+
		"\5d\63\2\u047d\u0483\5d\63\2\u047e\u0483\5b\62\2\u047f\u0483\5`\61\2\u0480"+
		"\u0483\5^\60\2\u0481\u0483\b/\1\2\u0482\u047b\3\2\2\2\u0482\u047c\3\2"+
		"\2\2\u0482\u047d\3\2\2\2\u0482\u047e\3\2\2\2\u0482\u047f\3\2\2\2\u0482"+
		"\u0480\3\2\2\2\u0482\u0481\3\2\2\2\u0483]\3\2\2\2\u0484\u0485\5\u0248"+
		"\u0125\2\u0485\u0486\5\u0092J\2\u0486_\3\2\2\2\u0487\u0488\5\u020e\u0108"+
		"\2\u0488\u0489\5\u0158\u00ad\2\u0489\u048a\5\u022a\u0116\2\u048a\u048b"+
		"\5\u0158\u00ad\2\u048ba\3\2\2\2\u048c\u048d\5\u01b6\u00dc\2\u048d\u048e"+
		"\5\u01a6\u00d4\2\u048e\u048f\5\u0220\u0111\2\u048fc\3\2\2\2\u0490\u0491"+
		"\5\u01b6\u00dc\2\u0491\u0492\5f\64\2\u0492e\3\2\2\2\u0493\u0499\5\u0158"+
		"\u00ad\2\u0494\u0495\5\u0298\u014d\2\u0495\u0496\5\u0158\u00ad\2\u0496"+
		"\u0498\3\2\2\2\u0497\u0494\3\2\2\2\u0498\u049b\3\2\2\2\u0499\u0497\3\2"+
		"\2\2\u0499\u049a\3\2\2\2\u049ag\3\2\2\2\u049b\u0499\3\2\2\2\u049c\u049d"+
		"\5\u017e\u00c0\2\u049d\u049e\5j\66\2\u049ei\3\2\2\2\u049f\u04a0\5\u0158"+
		"\u00ad\2\u04a0\u04a7\5\u015c\u00af\2\u04a1\u04a2\5\u0298\u014d\2\u04a2"+
		"\u04a3\5\u0158\u00ad\2\u04a3\u04a4\5\u015c\u00af\2\u04a4\u04a6\3\2\2\2"+
		"\u04a5\u04a1\3\2\2\2\u04a6\u04a9\3\2\2\2\u04a7\u04a5\3\2\2\2\u04a7\u04a8"+
		"\3\2\2\2\u04a8k\3\2\2\2\u04a9\u04a7\3\2\2\2\u04aa\u04ab\5\u0190\u00c9"+
		"\2\u04ab\u04ac\5\u0216\u010c\2\u04ac\u04ae\5\u0164\u00b3\2\u04ad\u04af"+
		"\5n8\2\u04ae\u04ad\3\2\2\2\u04ae\u04af\3\2\2\2\u04afm\3\2\2\2\u04b0\u04b1"+
		"\5\u0248\u0125\2\u04b1\u04b7\5p9\2\u04b2\u04b3\5\u0192\u00ca\2\u04b3\u04b4"+
		"\5p9\2\u04b4\u04b6\3\2\2\2\u04b5\u04b2\3\2\2\2\u04b6\u04b9\3\2\2\2\u04b7"+
		"\u04b5\3\2\2\2\u04b7\u04b8\3\2\2\2\u04b8o\3\2\2\2\u04b9\u04b7\3\2\2\2"+
		"\u04ba\u04bb\5\u0208\u0105\2\u04bb\u04bc\7\u00ae\2\2\u04bc\u04bd\5\u0146"+
		"\u00a4\2\u04bd\u04cb\3\2\2\2\u04be\u04bf\5\u01ec\u00f7\2\u04bf\u04c0\7"+
		"\u00ae\2\2\u04c0\u04c1\5\u0148\u00a5\2\u04c1\u04cb\3\2\2\2\u04c2\u04c3"+
		"\5\u0224\u0113\2\u04c3\u04c4\7\u00ae\2\2\u04c4\u04c5\5\u0148\u00a5\2\u04c5"+
		"\u04cb\3\2\2\2\u04c6\u04c7\5\u01fe\u0100\2\u04c7\u04c8\7\u00ae\2\2\u04c8"+
		"\u04c9\5\u009aN\2\u04c9\u04cb\3\2\2\2\u04ca\u04ba\3\2\2\2\u04ca\u04be"+
		"\3\2\2\2\u04ca\u04c2\3\2\2\2\u04ca\u04c6\3\2\2\2\u04cbq\3\2\2\2\u04cc"+
		"\u04cd\5\u0190\u00c9\2\u04cd\u04ce\5\u01ee\u00f8\2\u04ce\u04d2\5\u0244"+
		"\u0123\2\u04cf\u04d0\5\u014c\u00a7\2\u04d0\u04d1\7\22\2\2\u04d1\u04d3"+
		"\3\2\2\2\u04d2\u04cf\3\2\2\2\u04d2\u04d3\3\2\2\2\u04d3\u04d4\3\2\2\2\u04d4"+
		"\u04d8\5\u016a\u00b6\2\u04d5\u04d6\5\u0248\u0125\2\u04d6\u04d7\5\u0092"+
		"J\2\u04d7\u04d9\3\2\2\2\u04d8\u04d5\3\2\2\2\u04d8\u04d9\3\2\2\2\u04d9"+
		"s\3\2\2\2\u04da\u04db\5\u01b6\u00dc\2\u04db\u04dd\5\u023c\u011f\2\u04dc"+
		"\u04de\5\u0102\u0082\2\u04dd\u04dc\3\2\2\2\u04dd\u04de\3\2\2\2\u04de\u04df"+
		"\3\2\2\2\u04df\u04e0\5\u0174\u00bb\2\u04e0u\3\2\2\2\u04e1\u04e2\5\u01b6"+
		"\u00dc\2\u04e2\u04e4\5\u0234\u011b\2\u04e3\u04e5\5\u0102\u0082\2\u04e4"+
		"\u04e3\3\2\2\2\u04e4\u04e5\3\2\2\2\u04e5\u04e9\3\2\2\2\u04e6\u04e7\5\u014c"+
		"\u00a7\2\u04e7\u04e8\7\22\2\2\u04e8\u04ea\3\2\2\2\u04e9\u04e6\3\2\2\2"+
		"\u04e9\u04ea\3\2\2\2\u04ea\u04eb\3\2\2\2\u04eb\u04ec\5\u016c\u00b7\2\u04ec"+
		"w\3\2\2\2\u04ed\u04ee\5\u01b6\u00dc\2\u04ee\u04ef\5\u01ee\u00f8\2\u04ef"+
		"\u04f1\5\u0244\u0123\2\u04f0\u04f2\5\u0102\u0082\2\u04f1\u04f0\3\2\2\2"+
		"\u04f1\u04f2\3\2\2\2\u04f2\u04f6\3\2\2\2\u04f3\u04f4\5\u014c\u00a7\2\u04f4"+
		"\u04f5\7\22\2\2\u04f5\u04f7\3\2\2\2\u04f6\u04f3\3\2\2\2\u04f6\u04f7\3"+
		"\2\2\2\u04f7\u04f8\3\2\2\2\u04f8\u04f9\5\u016a\u00b6\2\u04f9y\3\2\2\2"+
		"\u04fa\u04fb\5\u01b6\u00dc\2\u04fb\u04fd\5\u0180\u00c1\2\u04fc\u04fe\5"+
		"\u0102\u0082\2\u04fd\u04fc\3\2\2\2\u04fd\u04fe\3\2\2\2\u04fe\u0502\3\2"+
		"\2\2\u04ff\u0500\5\u014c\u00a7\2\u0500\u0501\7\22\2\2\u0501\u0503\3\2"+
		"\2\2\u0502\u04ff\3\2\2\2\u0502\u0503\3\2\2\2\u0503\u0504\3\2\2\2\u0504"+
		"\u0505\5\u016e\u00b8\2\u0505{\3\2\2\2\u0506\u0507\5\u01b6\u00dc\2\u0507"+
		"\u0509\5\u01c8\u00e5\2\u0508\u050a\5\u0102\u0082\2\u0509\u0508\3\2\2\2"+
		"\u0509\u050a\3\2\2\2\u050a\u050e\3\2\2\2\u050b\u050c\5\u014c\u00a7\2\u050c"+
		"\u050d\7\22\2\2\u050d\u050f\3\2\2\2\u050e\u050b\3\2\2\2\u050e\u050f\3"+
		"\2\2\2\u050f\u0510\3\2\2\2\u0510\u0511\5\u0170\u00b9\2\u0511}\3\2\2\2"+
		"\u0512\u0513\5\u01b6\u00dc\2\u0513\u0515\5\u022e\u0118\2\u0514\u0516\5"+
		"\u0102\u0082\2\u0515\u0514\3\2\2\2\u0515\u0516\3\2\2\2\u0516\u0517\3\2"+
		"\2\2\u0517\u0518\5\u0166\u00b4\2\u0518\u0519\5\u01fc\u00ff\2\u0519\u051a"+
		"\5\u0154\u00ab\2\u051a\177\3\2\2\2\u051b\u051c\5\u01b6\u00dc\2\u051c\u051e"+
		"\5\u0216\u010c\2\u051d\u051f\5\u0102\u0082\2\u051e\u051d\3\2\2\2\u051e"+
		"\u051f\3\2\2\2\u051f\u0520\3\2\2\2\u0520\u0521\5\u0164\u00b3\2\u0521\u0081"+
		"\3\2\2\2\u0522\u0523\5\u01b6\u00dc\2\u0523\u0525\5\u0226\u0114\2\u0524"+
		"\u0526\5\u0102\u0082\2\u0525\u0524\3\2\2\2\u0525\u0526\3\2\2\2\u0526\u0527"+
		"\3\2\2\2\u0527\u0528\5\u0154\u00ab\2\u0528\u0083\3\2\2\2\u0529\u052a\5"+
		"\u01b6\u00dc\2\u052a\u052c\5\u01e0\u00f1\2\u052b\u052d\5\u0102\u0082\2"+
		"\u052c\u052b\3\2\2\2\u052c\u052d\3\2\2\2\u052d\u052e\3\2\2\2\u052e\u052f"+
		"\5\u014c\u00a7\2\u052f\u0085\3\2\2\2\u0530\u0531\5\u01b6\u00dc\2\u0531"+
		"\u0533\5\u01d0\u00e9\2\u0532\u0534\5\u0102\u0082\2\u0533\u0532\3\2\2\2"+
		"\u0533\u0534\3\2\2\2\u0534\u0538\3\2\2\2\u0535\u0536\5\u014c\u00a7\2\u0536"+
		"\u0537\7\22\2\2\u0537\u0539\3\2\2\2\u0538\u0535\3\2\2\2\u0538\u0539\3"+
		"\2\2\2\u0539\u053a\3\2\2\2\u053a\u053b\5\u00d2j\2\u053b\u0087\3\2\2\2"+
		"\u053c\u053d\5\u01ac\u00d7\2\u053d\u053f\5\u0226\u0114\2\u053e\u0540\5"+
		"\u0100\u0081\2\u053f\u053e\3\2\2\2\u053f\u0540\3\2\2\2\u0540\u0541\3\2"+
		"\2\2\u0541\u0542\5\u0156\u00ac\2\u0542\u0544\5\u008aF\2\u0543\u0545\5"+
		"\u008cG\2\u0544\u0543\3\2\2\2\u0544\u0545\3\2\2\2\u0545\u0089\3\2\2\2"+
		"\u0546\u0547\5\u0288\u0145\2\u0547\u0548\5\u00a2R\2\u0548\u0549\5\u028a"+
		"\u0146\2\u0549\u054c\3\2\2\2\u054a\u054c\bF\1\2\u054b\u0546\3\2\2\2\u054b"+
		"\u054a\3\2\2\2\u054c\u008b\3\2\2\2\u054d\u054e\5\u0248\u0125\2\u054e\u0552"+
		"\5\u0092J\2\u054f\u0550\5\u0192\u00ca\2\u0550\u0551\5\u008eH\2\u0551\u0553"+
		"\3\2\2\2\u0552\u054f\3\2\2\2\u0552\u0553\3\2\2\2\u0553\u055e\3\2\2\2\u0554"+
		"\u0556\5\u0248\u0125\2\u0555\u0557\5\u008eH\2\u0556\u0555\3\2\2\2\u0556"+
		"\u0557\3\2\2\2\u0557\u055b\3\2\2\2\u0558\u0559\5\u0192\u00ca\2\u0559\u055a"+
		"\5\u0092J\2\u055a\u055c\3\2\2\2\u055b\u0558\3\2\2\2\u055b\u055c\3\2\2"+
		"\2\u055c\u055e\3\2\2\2\u055d\u054d\3\2\2\2\u055d\u0554\3\2\2\2\u055e\u008d"+
		"\3\2\2\2\u055f\u0560\5\u01a4\u00d3\2\u0560\u0561\5\u0202\u0102\2\u0561"+
		"\u0562\5\u01a0\u00d1\2\u0562\u0563\5\u0288\u0145\2\u0563\u0569\5\u0090"+
		"I\2\u0564\u0565\5\u0298\u014d\2\u0565\u0566\5\u0090I\2\u0566\u0568\3\2"+
		"\2\2\u0567\u0564\3\2\2\2\u0568\u056b\3\2\2\2\u0569\u0567\3\2\2\2\u0569"+
		"\u056a\3\2\2\2\u056a\u056c\3\2\2\2\u056b\u0569\3\2\2\2\u056c\u056d\5\u028a"+
		"\u0146\2\u056d\u008f\3\2\2\2\u056e\u0570\5\u0158\u00ad\2\u056f\u0571\5"+
		"\u0162\u00b2\2\u0570\u056f\3\2\2\2\u0570\u0571\3\2\2\2\u0571\u0091\3\2"+
		"\2\2\u0572\u0578\5\u0094K\2\u0573\u0574\5\u0192\u00ca\2\u0574\u0575\5"+
		"\u0094K\2\u0575\u0577\3\2\2\2\u0576\u0573\3\2\2\2\u0577\u057a\3\2\2\2"+
		"\u0578\u0576\3\2\2\2\u0578\u0579\3\2\2\2\u0579\u0093\3\2\2\2\u057a\u0578"+
		"\3\2\2\2\u057b\u057c\5\u0096L\2\u057c\u057d\7\u00ae\2\2\u057d\u057e\5"+
		"\u0098M\2\u057e\u0584\3\2\2\2\u057f\u0580\5\u0096L\2\u0580\u0581\7\u00ae"+
		"\2\2\u0581\u0582\5\u009aN\2\u0582\u0584\3\2\2\2\u0583\u057b\3\2\2\2\u0583"+
		"\u057f\3\2\2\2\u0584\u0095\3\2\2\2\u0585\u0586\7\u00ac\2\2\u0586\u0097"+
		"\3\2\2\2\u0587\u058a\5\u0146\u00a4\2\u0588\u058a\5\u0144\u00a3\2\u0589"+
		"\u0587\3\2\2\2\u0589\u0588\3\2\2\2\u058a\u0099\3\2\2\2\u058b\u058c\5\u028c"+
		"\u0147\2\u058c\u0592\5\u009cO\2\u058d\u058e\5\u0298\u014d\2\u058e\u058f"+
		"\5\u009cO\2\u058f\u0591\3\2\2\2\u0590\u058d\3\2\2\2\u0591\u0594\3\2\2"+
		"\2\u0592\u0590\3\2\2\2\u0592\u0593\3\2\2\2\u0593\u0595\3\2\2\2\u0594\u0592"+
		"\3\2\2\2\u0595\u0596\5\u028e\u0148\2\u0596\u009b\3\2\2\2\u0597\u0598\5"+
		"\u009eP\2\u0598\u0599\7\13\2\2\u0599\u059a\5\u00a0Q\2\u059a\u009d\3\2"+
		"\2\2\u059b\u059c\5\u0146\u00a4\2\u059c\u009f\3\2\2\2\u059d\u05a0\5\u0146"+
		"\u00a4\2\u059e\u05a0\5\u0144\u00a3\2\u059f\u059d\3\2\2\2\u059f\u059e\3"+
		"\2\2\2\u05a0\u00a1\3\2\2\2\u05a1\u05a7\5\u00a4S\2\u05a2\u05a3\5\u0298"+
		"\u014d\2\u05a3\u05a4\5\u00a4S\2\u05a4\u05a6\3\2\2\2\u05a5\u05a2\3\2\2"+
		"\2\u05a6\u05a9\3\2\2\2\u05a7\u05a5\3\2\2\2\u05a7\u05a8\3\2\2\2\u05a8\u05ad"+
		"\3\2\2\2\u05a9\u05a7\3\2\2\2\u05aa\u05ab\5\u0298\u014d\2\u05ab\u05ac\5"+
		"\u00a8U\2\u05ac\u05ae\3\2\2\2\u05ad\u05aa\3\2\2\2\u05ad\u05ae\3\2\2\2"+
		"\u05ae\u00a3\3\2\2\2\u05af\u05b0\5\u015a\u00ae\2\u05b0\u05b1\5\u015c\u00af"+
		"\2\u05b1\u05b2\5\u00a6T\2\u05b2\u05bc\3\2\2\2\u05b3\u05b4\5\u015a\u00ae"+
		"\2\u05b4\u05b5\5\u015c\u00af\2\u05b5\u05b6\5\u021e\u0110\2\u05b6\u05bc"+
		"\3\2\2\2\u05b7\u05b8\5\u015a\u00ae\2\u05b8\u05b9\5\u015c\u00af\2\u05b9"+
		"\u05bc\3\2\2\2\u05ba\u05bc\bS\1\2\u05bb\u05af\3\2\2\2\u05bb\u05b3\3\2"+
		"\2\2\u05bb\u05b7\3\2\2\2\u05bb\u05ba\3\2\2\2\u05bc\u00a5\3\2\2\2\u05bd"+
		"\u05be\5\u020c\u0107\2\u05be\u05bf\5\u01dc\u00ef\2\u05bf\u05c4\3\2\2\2"+
		"\u05c0\u05c1\5\u020c\u0107\2\u05c1\u05c2\bT\1\2\u05c2\u05c4\3\2\2\2\u05c3"+
		"\u05bd\3\2\2\2\u05c3\u05c0\3\2\2\2\u05c4\u00a7\3\2\2\2\u05c5\u05c6\5\u020c"+
		"\u0107\2\u05c6\u05c7\5\u01dc\u00ef\2\u05c7\u05c8\5\u0288\u0145\2\u05c8"+
		"\u05c9\5\u00aaV\2\u05c9\u05ca\5\u028a\u0146\2\u05ca\u00a9\3\2\2\2\u05cb"+
		"\u05cf\5\u00acW\2\u05cc\u05cf\5\u00aeX\2\u05cd\u05cf\5\u00b0Y\2\u05ce"+
		"\u05cb\3\2\2\2\u05ce\u05cc\3\2\2\2\u05ce\u05cd\3\2\2\2\u05cf\u00ab\3\2"+
		"\2\2\u05d0\u05d1\5\u0158\u00ad\2\u05d1\u00ad\3\2\2\2\u05d2\u05d3\5\u00b6"+
		"\\\2\u05d3\u05d4\5\u0298\u014d\2\u05d4\u05d5\5\u00b4[\2\u05d5\u00af\3"+
		"\2\2\2\u05d6\u05d7\5\u0288\u0145\2\u05d7\u05d8\5\u00b2Z\2\u05d8\u05d9"+
		"\5\u028a\u0146\2\u05d9\u05da\5\u0298\u014d\2\u05da\u05db\5\u00b4[\2\u05db"+
		"\u00b1\3\2\2\2\u05dc\u05e2\5\u00b6\\\2\u05dd\u05de\5\u0298\u014d\2\u05de"+
		"\u05df\5\u00b6\\\2\u05df\u05e1\3\2\2\2\u05e0\u05dd\3\2\2\2\u05e1\u05e4"+
		"\3\2\2\2\u05e2\u05e0\3\2\2\2\u05e2\u05e3\3\2\2\2\u05e3\u00b3\3\2\2\2\u05e4"+
		"\u05e2\3\2\2\2\u05e5\u05eb\5\u00b8]\2\u05e6\u05e7\5\u0298\u014d\2\u05e7"+
		"\u05e8\5\u00b8]\2\u05e8\u05ea\3\2\2\2\u05e9\u05e6\3\2\2\2\u05ea\u05ed"+
		"\3\2\2\2\u05eb\u05e9\3\2\2\2\u05eb\u05ec\3\2\2\2\u05ec\u00b5\3\2\2\2\u05ed"+
		"\u05eb\3\2\2\2\u05ee\u05ef\5\u0158\u00ad\2\u05ef\u00b7\3\2\2\2\u05f0\u05f1"+
		"\5\u0158\u00ad\2\u05f1\u00b9\3\2\2\2\u05f2\u05f3\5\u0194\u00cb\2\u05f3"+
		"\u05f4\5\u019c\u00cf\2\u05f4\u00bb\3\2\2\2\u05f5\u05f6\5\u00be`\2\u05f6"+
		"\u05f7\5\u00dep\2\u05f7\u05ff\3\2\2\2\u05f8\u05f9\5\u00be`\2\u05f9\u05fa"+
		"\5\u00f6|\2\u05fa\u05ff\3\2\2\2\u05fb\u05fc\5\u00be`\2\u05fc\u05fd\5\u00e4"+
		"s\2\u05fd\u05ff\3\2\2\2\u05fe\u05f5\3\2\2\2\u05fe\u05f8\3\2\2\2\u05fe"+
		"\u05fb\3\2\2\2\u05ff\u00bd\3\2\2\2\u0600\u0602\5\u019e\u00d0\2\u0601\u0603"+
		"\5\u00c0a\2\u0602\u0601\3\2\2\2\u0602\u0603\3\2\2\2\u0603\u0604\3\2\2"+
		"\2\u0604\u0606\5\u019c\u00cf\2\u0605\u0607\5\u00fe\u0080\2\u0606\u0605"+
		"\3\2\2\2\u0606\u0607\3\2\2\2\u0607\u00bf\3\2\2\2\u0608\u060b\5\u01ea\u00f6"+
		"\2\u0609\u060b\5\u0236\u011c\2\u060a\u0608\3\2\2\2\u060a\u0609\3\2\2\2"+
		"\u060b\u00c1\3\2\2\2\u060c\u060d\5\u0190\u00c9\2\u060d\u060e\5\u01e0\u00f1"+
		"\2\u060e\u060f\5\u014c\u00a7\2\u060f\u0610\5\u0248\u0125\2\u0610\u0611"+
		"\5\u0212\u010a\2\u0611\u0612\7\u00ae\2\2\u0612\u0613\5\u028c\u0147\2\u0613"+
		"\u0614\5\u00c4c\2\u0614\u0618\5\u028e\u0148\2\u0615\u0616\5\u0192\u00ca"+
		"\2\u0616\u0617\5\u00c8e\2\u0617\u0619\3\2\2\2\u0618\u0615\3\2\2\2\u0618"+
		"\u0619\3\2\2\2\u0619\u00c3\3\2\2\2\u061a\u0620\5\u00c6d\2\u061b\u061c"+
		"\5\u0298\u014d\2\u061c\u061d\5\u00c6d\2\u061d\u061f\3\2\2\2\u061e\u061b"+
		"\3\2\2\2\u061f\u0622\3\2\2\2\u0620\u061e\3\2\2\2\u0620\u0621\3\2\2\2\u0621"+
		"\u00c5\3\2\2\2\u0622\u0620\3\2\2\2\u0623\u0624\7\u00a7\2\2\u0624\u0625"+
		"\7\13\2\2\u0625\u062a\7\u00a7\2\2\u0626\u0627\7\u00a7\2\2\u0627\u0628"+
		"\7\13\2\2\u0628\u062a\7\u00a8\2\2\u0629\u0623\3\2\2\2\u0629\u0626\3\2"+
		"\2\2\u062a\u00c7\3\2\2\2\u062b\u062c\5\u01b8\u00dd\2\u062c\u062d\7\u00ae"+
		"\2\2\u062d\u062e\5\u0148\u00a5\2\u062e\u00c9\3\2\2\2\u062f\u0630\5\u023a"+
		"\u011e\2\u0630\u0631\5\u014c\u00a7\2\u0631\u00cb\3\2\2\2\u0632\u0634\5"+
		"\u0230\u0119\2\u0633\u0635\5\u0226\u0114\2\u0634\u0633\3\2\2\2\u0634\u0635"+
		"\3\2\2\2\u0635\u0636\3\2\2\2\u0636\u0637\5\u0154\u00ab\2\u0637\u00cd\3"+
		"\2\2\2\u0638\u0639\5\u01ac\u00d7\2\u0639\u063b\5\u01d0\u00e9\2\u063a\u063c"+
		"\5\u0100\u0081\2\u063b\u063a\3\2\2\2\u063b\u063c\3\2\2\2\u063c\u063e\3"+
		"\2\2\2\u063d\u063f\5\u00d2j\2\u063e\u063d\3\2\2\2\u063e\u063f\3\2\2\2"+
		"\u063f\u0640\3\2\2\2\u0640\u0641\5\u00d0i\2\u0641\u0642\5\u00d4k\2\u0642"+
		"\u00cf\3\2\2\2\u0643\u0644\5\u01fc\u00ff\2\u0644\u0645\5\u0154\u00ab\2"+
		"\u0645\u0648\3\2\2\2\u0646\u0648\bi\1\2\u0647\u0643\3\2\2\2\u0647\u0646"+
		"\3\2\2\2\u0648\u00d1\3\2\2\2\u0649\u064c\7\u00ac\2\2\u064a\u064c\5\u0146"+
		"\u00a4\2\u064b\u0649\3\2\2\2\u064b\u064a\3\2\2\2\u064c\u00d3\3\2\2\2\u064d"+
		"\u064e\5\u0288\u0145\2\u064e\u064f\5\u00d6l\2\u064f\u0650\5\u028a\u0146"+
		"\2\u0650\u0653\3\2\2\2\u0651\u0653\bk\1\2\u0652\u064d\3\2\2\2\u0652\u0651"+
		"\3\2\2\2\u0653\u00d5\3\2\2\2\u0654\u065a\5\u0158\u00ad\2\u0655\u065a\5"+
		"\u00d8m\2\u0656\u065a\5\u00dan\2\u0657\u065a\5\u00dco\2\u0658\u065a\b"+
		"l\1\2\u0659\u0654\3\2\2\2\u0659\u0655\3\2\2\2\u0659\u0656\3\2\2\2\u0659"+
		"\u0657\3\2\2\2\u0659\u0658\3\2\2\2\u065a\u00d7\3\2\2\2\u065b\u065c\5\u01de"+
		"\u00f0\2\u065c\u065f\5\u0288\u0145\2\u065d\u0660\5\u0158\u00ad\2\u065e"+
		"\u0660\bm\1\2\u065f\u065d\3\2\2\2\u065f\u065e\3\2\2\2\u0660\u0661\3\2"+
		"\2\2\u0661\u0662\5\u028a\u0146\2\u0662\u00d9\3\2\2\2\u0663\u0664\5\u01ba"+
		"\u00de\2\u0664\u0667\5\u0288\u0145\2\u0665\u0668\5\u0158\u00ad\2\u0666"+
		"\u0668\bn\1\2\u0667\u0665\3\2\2\2\u0667\u0666\3\2\2\2\u0668\u0669\3\2"+
		"\2\2\u0669\u066a\5\u028a\u0146\2\u066a\u00db\3\2\2\2\u066b\u066c\5\u01c6"+
		"\u00e4\2\u066c\u066f\5\u0288\u0145\2\u066d\u0670\5\u0158\u00ad\2\u066e"+
		"\u0670\bo\1\2\u066f\u066d\3\2\2\2\u066f\u066e\3\2\2\2\u0670\u0671\3\2"+
		"\2\2\u0671\u0672\5\u028a\u0146\2\u0672\u00dd\3\2\2\2\u0673\u0675\5\u01ae"+
		"\u00d8\2\u0674\u0676\5\u00e0q\2\u0675\u0674\3\2\2\2\u0675\u0676\3\2\2"+
		"\2\u0676\u0677\3\2\2\2\u0677\u0679\5\u0112\u008a\2\u0678\u067a\5\u00fe"+
		"\u0080\2\u0679\u0678\3\2\2\2\u0679\u067a\3\2\2\2\u067a\u067d\3\2\2\2\u067b"+
		"\u067e\5\u0118\u008d\2\u067c\u067e\bp\1\2\u067d\u067b\3\2\2\2\u067d\u067c"+
		"\3\2\2\2\u067e\u0681\3\2\2\2\u067f\u0682\5\u0102\u0082\2\u0680\u0682\5"+
		"\u00e6t\2\u0681\u067f\3\2\2\2\u0681\u0680\3\2\2\2\u0681\u0682\3\2\2\2"+
		"\u0682\u00df\3\2\2\2\u0683\u0689\5\u00e2r\2\u0684\u0685\5\u0298\u014d"+
		"\2\u0685\u0686\5\u00e2r\2\u0686\u0688\3\2\2\2\u0687\u0684\3\2\2\2\u0688"+
		"\u068b\3\2\2\2\u0689\u0687\3\2\2\2\u0689\u068a\3\2\2\2\u068a\u00e1\3\2"+
		"\2\2\u068b\u0689\3\2\2\2\u068c\u0696\5\u0158\u00ad\2\u068d\u068e\5\u0158"+
		"\u00ad\2\u068e\u0691\5\u0294\u014b\2\u068f\u0692\5\u0146\u00a4\2\u0690"+
		"\u0692\5\u0142\u00a2\2\u0691\u068f\3\2\2\2\u0691\u0690\3\2\2\2\u0692\u0693"+
		"\3\2\2\2\u0693\u0694\5\u0296\u014c\2\u0694\u0696\3\2\2\2\u0695\u068c\3"+
		"\2\2\2\u0695\u068d\3\2\2\2\u0696\u00e3\3\2\2\2\u0697\u0698\5\u0238\u011d"+
		"\2\u0698\u069a\5\u0154\u00ab\2\u0699\u069b\5\u00f8}\2\u069a\u0699\3\2"+
		"\2\2\u069a\u069b\3\2\2\2\u069b\u069c\3\2\2\2\u069c\u069f\5\u00ecw\2\u069d"+
		"\u06a0\5\u0118\u008d\2\u069e\u06a0\bs\1\2\u069f\u069d\3\2\2\2\u069f\u069e"+
		"\3\2\2\2\u06a0\u06a3\3\2\2\2\u06a1\u06a4\5\u0102\u0082\2\u06a2\u06a4\5"+
		"\u00e6t\2\u06a3\u06a1\3\2\2\2\u06a3\u06a2\3\2\2\2\u06a3\u06a4\3\2\2\2"+
		"\u06a4\u00e5\3\2\2\2\u06a5\u06a6\5\u01cc\u00e7\2\u06a6\u06a7\5\u00e8u"+
		"\2\u06a7\u00e7\3\2\2\2\u06a8\u06ae\5\u00eav\2\u06a9\u06aa\5\u0192\u00ca"+
		"\2\u06aa\u06ab\5\u00eav\2\u06ab\u06ad\3\2\2\2\u06ac\u06a9\3\2\2\2\u06ad"+
		"\u06b0\3\2\2\2\u06ae\u06ac\3\2\2\2\u06ae\u06af\3\2\2\2\u06af\u00e9\3\2"+
		"\2\2\u06b0\u06ae\3\2\2\2\u06b1\u06b2\7\u00ac\2\2\u06b2\u06b3\7\u00ae\2"+
		"\2\u06b3\u06b4\5\u0130\u0099\2\u06b4\u00eb\3\2\2\2\u06b5\u06b6\5\u021a"+
		"\u010e\2\u06b6\u06bc\5\u00eex\2\u06b7\u06b8\5\u0298\u014d\2\u06b8\u06b9"+
		"\5\u00eex\2\u06b9\u06bb\3\2\2\2\u06ba\u06b7\3\2\2\2\u06bb\u06be\3\2\2"+
		"\2\u06bc\u06ba\3\2\2\2\u06bc\u06bd\3\2\2\2\u06bd\u06c1\3\2\2\2\u06be\u06bc"+
		"\3\2\2\2\u06bf\u06c1\bw\1\2\u06c0\u06b5\3\2\2\2\u06c0\u06bf\3\2\2\2\u06c1"+
		"\u00ed\3\2\2\2\u06c2\u06c3\5\u0158\u00ad\2\u06c3\u06c6\5\u02a4\u0153\2"+
		"\u06c4\u06c7\5\u0130\u0099\2\u06c5\u06c7\5\u0136\u009c\2\u06c6\u06c4\3"+
		"\2\2\2\u06c6\u06c5\3\2\2\2\u06c7\u0710\3\2\2\2\u06c8\u06c9\5\u0158\u00ad"+
		"\2\u06c9\u06ca\5\u02a4\u0153\2\u06ca\u06cd\5\u0158\u00ad\2\u06cb\u06ce"+
		"\5\u029c\u014f\2\u06cc\u06ce\5\u029e\u0150\2\u06cd\u06cb\3\2\2\2\u06cd"+
		"\u06cc\3\2\2\2\u06ce\u06cf\3\2\2\2\u06cf\u06d0\5\u0142\u00a2\2\u06d0\u0710"+
		"\3\2\2\2\u06d1\u06d2\5\u0158\u00ad\2\u06d2\u06d3\5\u02a4\u0153\2\u06d3"+
		"\u06d6\5\u0158\u00ad\2\u06d4\u06d7\5\u029c\u014f\2\u06d5\u06d7\5\u029e"+
		"\u0150\2\u06d6\u06d4\3\2\2\2\u06d6\u06d5\3\2\2\2\u06d7\u06d8\3\2\2\2\u06d8"+
		"\u06d9\5\u00f2z\2\u06d9\u0710\3\2\2\2\u06da\u06db\5\u0158\u00ad\2\u06db"+
		"\u06dc\5\u02a4\u0153\2\u06dc\u06df\5\u0158\u00ad\2\u06dd\u06e0\5\u029c"+
		"\u014f\2\u06de\u06e0\5\u029e\u0150\2\u06df\u06dd\3\2\2\2\u06df\u06de\3"+
		"\2\2\2\u06e0\u06e1\3\2\2\2\u06e1\u06e2\5\u00f0y\2\u06e2\u0710\3\2\2\2"+
		"\u06e3\u06e4\5\u0158\u00ad\2\u06e4\u06e5\5\u02a4\u0153\2\u06e5\u06e8\5"+
		"\u0158\u00ad\2\u06e6\u06e9\5\u029c\u014f\2\u06e7\u06e9\5\u029e\u0150\2"+
		"\u06e8\u06e6\3\2\2\2\u06e8\u06e7\3\2\2\2\u06e9\u06ea\3\2\2\2\u06ea\u06eb"+
		"\5\u00f4{\2\u06eb\u0710\3\2\2\2\u06ec\u06ed\5\u0158\u00ad\2\u06ed\u06ee"+
		"\5\u02a4\u0153\2\u06ee\u06f1\5\u00f0y\2\u06ef\u06f2\5\u029c\u014f\2\u06f0"+
		"\u06f2\5\u029e\u0150\2\u06f1\u06ef\3\2\2\2\u06f1\u06f0\3\2\2\2\u06f2\u06f3"+
		"\3\2\2\2\u06f3\u06f4\7\u00ac\2\2\u06f4\u0710\3\2\2\2\u06f5\u06f6\5\u0158"+
		"\u00ad\2\u06f6\u06f7\5\u02a4\u0153\2\u06f7\u06fa\5\u00f2z\2\u06f8\u06fb"+
		"\5\u029c\u014f\2\u06f9\u06fb\5\u029e\u0150\2\u06fa\u06f8\3\2\2\2\u06fa"+
		"\u06f9\3\2\2\2\u06fb\u06fc\3\2\2\2\u06fc\u06fd\7\u00ac\2\2\u06fd\u0710"+
		"\3\2\2\2\u06fe\u06ff\5\u0158\u00ad\2\u06ff\u0700\5\u02a4\u0153\2\u0700"+
		"\u0703\5\u00f4{\2\u0701\u0704\5\u029c\u014f\2\u0702\u0704\5\u029e\u0150"+
		"\2\u0703\u0701\3\2\2\2\u0703\u0702\3\2\2\2\u0704\u0705\3\2\2\2\u0705\u0706"+
		"\7\u00ac\2\2\u0706\u0710\3\2\2\2\u0707\u0708\5\u0158\u00ad\2\u0708\u0709"+
		"\5\u0294\u014b\2\u0709\u070a\5\u0142\u00a2\2\u070a\u070b\5\u0296\u014c"+
		"\2\u070b\u070c\5\u02a4\u0153\2\u070c\u070d\5\u0130\u0099\2\u070d\u0710"+
		"\3\2\2\2\u070e\u0710\bx\1\2\u070f\u06c2\3\2\2\2\u070f\u06c8\3\2\2\2\u070f"+
		"\u06d1\3\2\2\2\u070f\u06da\3\2\2\2\u070f\u06e3\3\2\2\2\u070f\u06ec\3\2"+
		"\2\2\u070f\u06f5\3\2\2\2\u070f\u06fe\3\2\2\2\u070f\u0707\3\2\2\2\u070f"+
		"\u070e\3\2\2\2\u0710\u00ef\3\2\2\2\u0711\u0712\5\u028c\u0147\2\u0712\u0718"+
		"\5\u0130\u0099\2\u0713\u0714\5\u0298\u014d\2\u0714\u0715\5\u0130\u0099"+
		"\2\u0715\u0717\3\2\2\2\u0716\u0713\3\2\2\2\u0717\u071a\3\2\2\2\u0718\u0716"+
		"\3\2\2\2\u0718\u0719\3\2\2\2\u0719\u071b\3\2\2\2\u071a\u0718\3\2\2\2\u071b"+
		"\u071c\5\u028e\u0148\2\u071c\u00f1\3\2\2\2\u071d\u071e\5\u028c\u0147\2"+
		"\u071e\u071f\5\u0130\u0099\2\u071f\u0720\5\u029a\u014e\2\u0720\u0721\5"+
		"\u0130\u0099\2\u0721\u0728\3\2\2\2\u0722\u0723\5\u0130\u0099\2\u0723\u0724"+
		"\5\u029a\u014e\2\u0724\u0725\5\u0130\u0099\2\u0725\u0727\3\2\2\2\u0726"+
		"\u0722\3\2\2\2\u0727\u072a\3\2\2\2\u0728\u0726\3\2\2\2\u0728\u0729\3\2"+
		"\2\2\u0729\u072b\3\2\2\2\u072a\u0728\3\2\2\2\u072b\u072c\5\u028e\u0148"+
		"\2\u072c\u00f3\3\2\2\2\u072d\u072e\5\u0294\u014b\2\u072e\u0734\5\u0130"+
		"\u0099\2\u072f\u0730\5\u029a\u014e\2\u0730\u0731\5\u0130\u0099\2\u0731"+
		"\u0733\3\2\2\2\u0732\u072f\3\2\2\2\u0733\u0736\3\2\2\2\u0734\u0732\3\2"+
		"\2\2\u0734\u0735\3\2\2\2\u0735\u0737\3\2\2\2\u0736\u0734\3\2\2\2\u0737"+
		"\u0738\5\u0296\u014c\2\u0738\u00f5\3\2\2\2\u0739\u073a\5\u01d6\u00ec\2"+
		"\u073a\u073b\5\u01d8\u00ed\2\u073b\u073c\5\u0154\u00ab\2\u073c\u073d\5"+
		"\u0106\u0084\2\u073d\u0740\5\u0104\u0083\2\u073e\u0741\5\u0100\u0081\2"+
		"\u073f\u0741\3\2\2\2\u0740\u073e\3\2\2\2\u0740\u073f\3\2\2\2\u0741\u0743"+
		"\3\2\2\2\u0742\u0744\5\u00f8}\2\u0743\u0742\3\2\2\2\u0743\u0744\3\2\2"+
		"\2\u0744\u00f7\3\2\2\2\u0745\u0746\5\u0240\u0121\2\u0746\u0747\5\u00fc"+
		"\177\2\u0747\u0756\3\2\2\2\u0748\u0749\5\u0240\u0121\2\u0749\u074a\5\u00fc"+
		"\177\2\u074a\u074b\5\u0192\u00ca\2\u074b\u074c\5\u00fa~\2\u074c\u0756"+
		"\3\2\2\2\u074d\u074e\5\u0240\u0121\2\u074e\u074f\5\u00fa~\2\u074f\u0756"+
		"\3\2\2\2\u0750\u0751\5\u0240\u0121\2\u0751\u0752\5\u00fa~\2\u0752\u0753"+
		"\5\u0192\u00ca\2\u0753\u0754\5\u00fc\177\2\u0754\u0756\3\2\2\2\u0755\u0745"+
		"\3\2\2\2\u0755\u0748\3\2\2\2\u0755\u074d\3\2\2\2\u0755\u0750\3\2\2\2\u0756"+
		"\u00f9\3\2\2\2\u0757\u0758\5\u0228\u0115\2\u0758\u0759\5\u0142\u00a2\2"+
		"\u0759\u00fb\3\2\2\2\u075a\u075b\5\u0232\u011a\2\u075b\u075c\5\u0142\u00a2"+
		"\2\u075c\u00fd\3\2\2\2\u075d\u075e\5\u0240\u0121\2\u075e\u075f\5\u00fa"+
		"~\2\u075f\u00ff\3\2\2\2\u0760\u0761\5\u01cc\u00e7\2\u0761\u0762\5\u01f6"+
		"\u00fc\2\u0762\u0763\5\u01be\u00e0\2\u0763\u0101\3\2\2\2\u0764\u0765\5"+
		"\u01cc\u00e7\2\u0765\u0766\5\u01be\u00e0\2\u0766\u0103\3\2\2\2\u0767\u0768"+
		"\5\u0242\u0122\2\u0768\u0769\5\u0288\u0145\2\u0769\u076c\5\u010a\u0086"+
		"\2\u076a\u076d\5\u028a\u0146\2\u076b\u076d\b\u0083\1\2\u076c\u076a\3\2"+
		"\2\2\u076c\u076b\3\2\2\2\u076d\u0770\3\2\2\2\u076e\u0770\b\u0083\1\2\u076f"+
		"\u0767\3\2\2\2\u076f\u076e\3\2\2\2\u0770\u0105\3\2\2\2\u0771\u0772\5\u0288"+
		"\u0145\2\u0772\u0773\5\u0108\u0085\2\u0773\u0774\5\u028a\u0146\2\u0774"+
		"\u0777\3\2\2\2\u0775\u0777\b\u0084\1\2\u0776\u0771\3\2\2\2\u0776\u0775"+
		"\3\2\2\2\u0777\u0107\3\2\2\2\u0778\u0780\5\u0158\u00ad\2\u0779\u077c\5"+
		"\u0298\u014d\2\u077a\u077d\5\u0158\u00ad\2\u077b\u077d\b\u0085\1\2\u077c"+
		"\u077a\3\2\2\2\u077c\u077b\3\2\2\2\u077d\u077f\3\2\2\2\u077e\u0779\3\2"+
		"\2\2\u077f\u0782\3\2\2\2\u0780\u077e\3\2\2\2\u0780\u0781\3\2\2\2\u0781"+
		"\u0785\3\2\2\2\u0782\u0780\3\2\2\2\u0783\u0785\b\u0085\1\2\u0784\u0778"+
		"\3\2\2\2\u0784\u0783\3\2\2\2\u0785\u0109\3\2\2\2\u0786\u078c\5\u010c\u0087"+
		"\2\u0787\u0788\5\u0298\u014d\2\u0788\u0789\5\u010c\u0087\2\u0789\u078b"+
		"\3\2\2\2\u078a\u0787\3\2\2\2\u078b\u078e\3\2\2\2\u078c\u078a\3\2\2\2\u078c"+
		"\u078d\3\2\2\2\u078d\u010b\3\2\2\2\u078e\u078c\3\2\2\2\u078f\u0792\5\u0130"+
		"\u0099\2\u0790\u0792\5\u0136\u009c\2\u0791\u078f\3\2\2\2\u0791\u0790\3"+
		"\2\2\2\u0792\u0795\3\2\2\2\u0793\u0795\b\u0087\1\2\u0794\u0791\3\2\2\2"+
		"\u0794\u0793\3\2\2\2\u0795\u010d\3\2\2\2\u0796\u0798\5\u0218\u010d\2\u0797"+
		"\u0799\5\u01b4\u00db\2\u0798\u0797\3\2\2\2\u0798\u0799\3\2\2\2\u0799\u079a"+
		"\3\2\2\2\u079a\u079b\5\u011a\u008e\2\u079b\u079d\5\u0112\u008a\2\u079c"+
		"\u079e\5\u0118\u008d\2\u079d\u079c\3\2\2\2\u079d\u079e\3\2\2\2\u079e\u07a0"+
		"\3\2\2\2\u079f\u07a1\5\u0114\u008b\2\u07a0\u079f\3\2\2\2\u07a0\u07a1\3"+
		"\2\2\2\u07a1\u07a3\3\2\2\2\u07a2\u07a4\5\u0110\u0089\2\u07a3\u07a2\3\2"+
		"\2\2\u07a3\u07a4\3\2\2\2\u07a4\u07a6\3\2\2\2\u07a5\u07a7\5\u018e\u00c8"+
		"\2\u07a6\u07a5\3\2\2\2\u07a6\u07a7\3\2\2\2\u07a7\u010f\3\2\2\2\u07a8\u07ab"+
		"\5\u01e4\u00f3\2\u07a9\u07ac\5\u0142\u00a2\2\u07aa\u07ac\b\u0089\1\2\u07ab"+
		"\u07a9\3\2\2\2\u07ab\u07aa\3\2\2\2\u07ac\u0111\3\2\2\2\u07ad\u07ae\5\u01c4"+
		"\u00e3\2\u07ae\u07af\5\u0154\u00ab\2\u07af\u07b2\3\2\2\2\u07b0\u07b2\b"+
		"\u008a\1\2\u07b1\u07ad\3\2\2\2\u07b1\u07b0\3\2\2\2\u07b2\u0113\3\2\2\2"+
		"\u07b3\u07b4\5\u0204\u0103\2\u07b4\u07b5\5\u0116\u008c\2\u07b5\u0115\3"+
		"\2\2\2\u07b6\u07b9\5\u0158\u00ad\2\u07b7\u07ba\5\u0198\u00cd\2\u07b8\u07ba"+
		"\5\u01b0\u00d9\2\u07b9\u07b7\3\2\2\2\u07b9\u07b8\3\2\2\2\u07b9\u07ba\3"+
		"\2\2\2\u07ba\u07bd\3\2\2\2\u07bb\u07bd\b\u008c\1\2\u07bc\u07b6\3\2\2\2"+
		"\u07bc\u07bb\3\2\2\2\u07bd\u0117\3\2\2\2\u07be\u07bf\5\u0246\u0124\2\u07bf"+
		"\u07c0\5\u011e\u0090\2\u07c0\u0119\3\2\2\2\u07c1\u07cd\5\u0282\u0142\2"+
		"\u07c2\u07c8\5\u011c\u008f\2\u07c3\u07c4\5\u0298\u014d\2\u07c4\u07c5\5"+
		"\u011c\u008f\2\u07c5\u07c7\3\2\2\2\u07c6\u07c3\3\2\2\2\u07c7\u07ca\3\2"+
		"\2\2\u07c8\u07c6\3\2\2\2\u07c8\u07c9\3\2\2\2\u07c9\u07cd\3\2\2\2\u07ca"+
		"\u07c8\3\2\2\2\u07cb\u07cd\b\u008e\1\2\u07cc\u07c1\3\2\2\2\u07cc\u07c2"+
		"\3\2\2\2\u07cc\u07cb\3\2\2\2\u07cd\u011b\3\2\2\2\u07ce\u07dd\5\u0158\u00ad"+
		"\2\u07cf\u07d3\5\u0158\u00ad\2\u07d0\u07d1\5\u0196\u00cc\2\u07d1\u07d2"+
		"\7\u00ac\2\2\u07d2\u07d4\3\2\2\2\u07d3\u07d0\3\2\2\2\u07d3\u07d4\3\2\2"+
		"\2\u07d4\u07dd\3\2\2\2\u07d5\u07d9\5\u012c\u0097\2\u07d6\u07d7\5\u0196"+
		"\u00cc\2\u07d7\u07d8\7\u00ac\2\2\u07d8\u07da\3\2\2\2\u07d9\u07d6\3\2\2"+
		"\2\u07d9\u07da\3\2\2\2\u07da\u07dd\3\2\2\2\u07db\u07dd\b\u008f\1\2\u07dc"+
		"\u07ce\3\2\2\2\u07dc\u07cf\3\2\2\2\u07dc\u07d5\3\2\2\2\u07dc\u07db\3\2"+
		"\2\2\u07dd\u011d\3\2\2\2\u07de\u07e4\5\u0120\u0091\2\u07df\u07e0\5\u0192"+
		"\u00ca\2\u07e0\u07e1\5\u0120\u0091\2\u07e1\u07e3\3\2\2\2\u07e2\u07df\3"+
		"\2\2\2\u07e3\u07e6\3\2\2\2\u07e4\u07e2\3\2\2\2\u07e4\u07e5\3\2\2\2\u07e5"+
		"\u011f\3\2\2\2\u07e6\u07e4\3\2\2\2\u07e7\u07ee\5\u0122\u0092\2\u07e8\u07ee"+
		"\5\u0124\u0093\2\u07e9\u07ee\5\u0126\u0094\2\u07ea\u07eb\7\u00ac\2\2\u07eb"+
		"\u07ee\b\u0091\1\2\u07ec\u07ee\b\u0091\1\2\u07ed\u07e7\3\2\2\2\u07ed\u07e8"+
		"\3\2\2\2\u07ed\u07e9\3\2\2\2\u07ed\u07ea\3\2\2\2\u07ed\u07ec\3\2\2\2\u07ee"+
		"\u0121\3\2\2\2\u07ef\u07f0\5\u0158\u00ad\2\u07f0\u07f3\5\u012a\u0096\2"+
		"\u07f1\u07f4\5\u0130\u0099\2\u07f2\u07f4\b\u0092\1\2\u07f3\u07f1\3\2\2"+
		"\2\u07f3\u07f2\3\2\2\2\u07f4\u0123\3\2\2\2\u07f5\u07f6\5\u0158\u00ad\2"+
		"\u07f6\u07f7\5\u01ce\u00e8\2\u07f7\u07f9\5\u0288\u0145\2\u07f8\u07fa\5"+
		"\u012e\u0098\2\u07f9\u07f8\3\2\2\2\u07f9\u07fa\3\2\2\2\u07fa\u07fb\3\2"+
		"\2\2\u07fb\u07fc\5\u028a\u0146\2\u07fc\u0125\3\2\2\2\u07fd\u0800\5\u0128"+
		"\u0095\2\u07fe\u0801\5\u012a\u0096\2\u07ff\u0801\b\u0094\1\2\u0800\u07fe"+
		"\3\2\2\2\u0800\u07ff\3\2\2\2\u0801\u0802\3\2\2\2\u0802\u0803\5\u0128\u0095"+
		"\2\u0803\u0127\3\2\2\2\u0804\u0807\5\u022c\u0117\2\u0805\u0808\5\u0288"+
		"\u0145\2\u0806\u0808\b\u0095\1\2\u0807\u0805\3\2\2\2\u0807\u0806\3\2\2"+
		"\2\u0808\u080b\3\2\2\2\u0809\u080c\5\u0158\u00ad\2\u080a\u080c\b\u0095"+
		"\1\2\u080b\u0809\3\2\2\2\u080b\u080a\3\2\2\2\u080c\u080f\3\2\2\2\u080d"+
		"\u0810\5\u028a\u0146\2\u080e\u0810\b\u0095\1\2\u080f\u080d\3\2\2\2\u080f"+
		"\u080e\3\2\2\2\u0810\u0813\3\2\2\2\u0811\u0813\b\u0095\1\2\u0812\u0804"+
		"\3\2\2\2\u0812\u0811\3\2\2\2\u0813\u0129\3\2\2\2\u0814\u081d\5\u02a4\u0153"+
		"\2\u0815\u081d\5\u02a6\u0154\2\u0816\u081d\5\u02a8\u0155\2\u0817\u081d"+
		"\5\u02aa\u0156\2\u0818\u081d\5\u02ac\u0157\2\u0819\u081d\5\u01a8\u00d5"+
		"\2\u081a\u081d\5\u01aa\u00d6\2\u081b\u081d\b\u0096\1\2\u081c\u0814\3\2"+
		"\2\2\u081c\u0815\3\2\2\2\u081c\u0816\3\2\2\2\u081c\u0817\3\2\2\2\u081c"+
		"\u0818\3\2\2\2\u081c\u0819\3\2\2\2\u081c\u081a\3\2\2\2\u081c\u081b\3\2"+
		"\2\2\u081d\u012b\3\2\2\2\u081e\u081f\7\u00ac\2\2\u081f\u0820\7\3\2\2\u0820"+
		"\u0821\7\23\2\2\u0821\u0829\7\4\2\2\u0822\u0823\7\u00ac\2\2\u0823\u0825"+
		"\7\3\2\2\u0824\u0826\5\u012e\u0098\2\u0825\u0824\3\2\2\2\u0825\u0826\3"+
		"\2\2\2\u0826\u0827\3\2\2\2\u0827\u0829\7\4\2\2\u0828\u081e\3\2\2\2\u0828"+
		"\u0822\3\2\2\2\u0829\u012d\3\2\2\2\u082a\u082e\5\u0130\u0099\2\u082b\u082e"+
		"\7\u00ac\2\2\u082c\u082e\5\u012c\u0097\2\u082d\u082a\3\2\2\2\u082d\u082b"+
		"\3\2\2\2\u082d\u082c\3\2\2\2\u082e\u0837\3\2\2\2\u082f\u0833\5\u0298\u014d"+
		"\2\u0830\u0834\5\u0130\u0099\2\u0831\u0834\7\u00ac\2\2\u0832\u0834\5\u012c"+
		"\u0097\2\u0833\u0830\3\2\2\2\u0833\u0831\3\2\2\2\u0833\u0832\3\2\2\2\u0834"+
		"\u0836\3\2\2\2\u0835\u082f\3\2\2\2\u0836\u0839\3\2\2\2\u0837\u0835\3\2"+
		"\2\2\u0837\u0838\3\2\2\2\u0838\u012f\3\2\2\2\u0839\u0837\3\2\2\2\u083a"+
		"\u0842\5\u0140\u00a1\2\u083b\u0842\5\u0146\u00a4\2\u083c\u0842\5\u0142"+
		"\u00a2\2\u083d\u0842\5\u0144\u00a3\2\u083e\u0842\5\u014a\u00a6\2\u083f"+
		"\u0842\5\u0148\u00a5\2\u0840\u0842\5\u01f8\u00fd\2\u0841\u083a\3\2\2\2"+
		"\u0841\u083b\3\2\2\2\u0841\u083c\3\2\2\2\u0841\u083d\3\2\2\2\u0841\u083e"+
		"\3\2\2\2\u0841\u083f\3\2\2\2\u0841\u0840\3\2\2\2\u0842\u0131\3\2\2\2\u0843"+
		"\u0849\5\u0130\u0099\2\u0844\u0849\5\u0138\u009d\2\u0845\u0849\5\u013a"+
		"\u009e\2\u0846\u0849\5\u013c\u009f\2\u0847\u0849\5\u013e\u00a0\2\u0848"+
		"\u0843\3\2\2\2\u0848\u0844\3\2\2\2\u0848\u0845\3\2\2\2\u0848\u0846\3\2"+
		"\2\2\u0848\u0847\3\2\2\2\u0849\u0133\3\2\2\2\u084a\u084b\5\u0132\u009a"+
		"\2\u084b\u084c\5\u029a\u014e\2\u084c\u084d\5\u0132\u009a\2\u084d\u0135"+
		"\3\2\2\2\u084e\u0853\5\u0138\u009d\2\u084f\u0853\5\u013e\u00a0\2\u0850"+
		"\u0853\5\u013c\u009f\2\u0851\u0853\5\u013a\u009e\2\u0852\u084e\3\2\2\2"+
		"\u0852\u084f\3\2\2\2\u0852\u0850\3\2\2\2\u0852\u0851\3\2\2\2\u0853\u0137"+
		"\3\2\2\2\u0854\u0855\5\u028c\u0147\2\u0855\u085b\5\u0134\u009b\2\u0856"+
		"\u0857\5\u0298\u014d\2\u0857\u0858\5\u0134\u009b\2\u0858\u085a\3\2\2\2"+
		"\u0859\u0856\3\2\2\2\u085a\u085d\3\2\2\2\u085b\u0859\3\2\2\2\u085b\u085c"+
		"\3\2\2\2\u085c\u085e\3\2\2\2\u085d\u085b\3\2\2\2\u085e\u085f\5\u028e\u0148"+
		"\2\u085f\u0139\3\2\2\2\u0860\u0861\5\u028c\u0147\2\u0861\u0867\5\u0132"+
		"\u009a\2\u0862\u0863\5\u0298\u014d\2\u0863\u0864\5\u0132\u009a\2\u0864"+
		"\u0866\3\2\2\2\u0865\u0862\3\2\2\2\u0866\u0869\3\2\2\2\u0867\u0865\3\2"+
		"\2\2\u0867\u0868\3\2\2\2\u0868\u086a\3\2\2\2\u0869\u0867\3\2\2\2\u086a"+
		"\u086b\5\u028e\u0148\2\u086b\u013b\3\2\2\2\u086c\u086d\5\u0294\u014b\2"+
		"\u086d\u0873\5\u0132\u009a\2\u086e\u086f\5\u0298\u014d\2\u086f\u0870\5"+
		"\u0132\u009a\2\u0870\u0872\3\2\2\2\u0871\u086e\3\2\2\2\u0872\u0875\3\2"+
		"\2\2\u0873\u0871\3\2\2\2\u0873\u0874\3\2\2\2\u0874\u0876\3\2\2\2\u0875"+
		"\u0873\3\2\2\2\u0876\u0877\5\u0296\u014c\2\u0877\u013d\3\2\2\2\u0878\u0879"+
		"\5\u0288\u0145\2\u0879\u087f\5\u0132\u009a\2\u087a\u087b\5\u0298\u014d"+
		"\2\u087b\u087c\5\u0132\u009a\2\u087c\u087e\3\2\2\2\u087d\u087a\3\2\2\2"+
		"\u087e\u0881\3\2\2\2\u087f\u087d\3\2\2\2\u087f\u0880\3\2\2\2\u0880\u0882"+
		"\3\2\2\2\u0881\u087f\3\2\2\2\u0882\u0883\5\u028a\u0146\2\u0883\u013f\3"+
		"\2\2\2\u0884\u0885\7\u00ad\2\2\u0885\u0141\3\2\2\2\u0886\u0887\7\u00a8"+
		"\2\2\u0887\u0143\3\2\2\2\u0888\u0889\t\2\2\2\u0889\u0145\3\2\2\2\u088a"+
		"\u088b\7\u00a7\2\2\u088b\u0147\3\2\2\2\u088c\u088d\t\3\2\2\u088d\u0149"+
		"\3\2\2\2\u088e\u088f\7\u00aa\2\2\u088f\u014b\3\2\2\2\u0890\u0895\7\u00ac"+
		"\2\2\u0891\u0892\7\f\2\2\u0892\u0893\7\u00ac\2\2\u0893\u0895\7\f\2\2\u0894"+
		"\u0890\3\2\2\2\u0894\u0891\3\2\2\2\u0895\u014d\3\2\2\2\u0896\u089c\7\u00ac"+
		"\2\2\u0897\u0898\7\f\2\2\u0898\u0899\7\u00ac\2\2\u0899\u089c\7\f\2\2\u089a"+
		"\u089c\b\u00a8\1\2\u089b\u0896\3\2\2\2\u089b\u0897\3\2\2\2\u089b\u089a"+
		"\3\2\2\2\u089c\u014f\3\2\2\2\u089d\u08ae\7\u00ac\2\2\u089e\u089f\7\f\2"+
		"\2\u089f\u08a0\7\u00ac\2\2\u08a0\u08ae\7\f\2\2\u08a1\u08ae\7o\2\2\u08a2"+
		"\u08ae\7g\2\2\u08a3\u08ae\7`\2\2\u08a4\u08ae\7\67\2\2\u08a5\u08ae\7O\2"+
		"\2\u08a6\u08ae\7\u0082\2\2\u08a7\u08ae\7G\2\2\u08a8\u08ae\7l\2\2\u08a9"+
		"\u08ae\7\u0080\2\2\u08aa\u08ae\7c\2\2\u08ab\u08ae\7L\2\2\u08ac\u08ae\7"+
		"P\2\2\u08ad\u089d\3\2\2\2\u08ad\u089e\3\2\2\2\u08ad\u08a1\3\2\2\2\u08ad"+
		"\u08a2\3\2\2\2\u08ad\u08a3\3\2\2\2\u08ad\u08a4\3\2\2\2\u08ad\u08a5\3\2"+
		"\2\2\u08ad\u08a6\3\2\2\2\u08ad\u08a7\3\2\2\2\u08ad\u08a8\3\2\2\2\u08ad"+
		"\u08a9\3\2\2\2\u08ad\u08aa\3\2\2\2\u08ad\u08ab\3\2\2\2\u08ad\u08ac\3\2"+
		"\2\2\u08ae\u0151\3\2\2\2\u08af\u08c0\7\u00ac\2\2\u08b0\u08b1\7\f\2\2\u08b1"+
		"\u08b2\7\u00ac\2\2\u08b2\u08c0\7\f\2\2\u08b3\u08c0\7o\2\2\u08b4\u08c0"+
		"\7g\2\2\u08b5\u08c0\7`\2\2\u08b6\u08c0\7\67\2\2\u08b7\u08c0\7O\2\2\u08b8"+
		"\u08c0\7\u0082\2\2\u08b9\u08c0\7G\2\2\u08ba\u08c0\7l\2\2\u08bb\u08c0\7"+
		"\u0080\2\2\u08bc\u08c0\7c\2\2\u08bd\u08c0\7L\2\2\u08be\u08c0\7P\2\2\u08bf"+
		"\u08af\3\2\2\2\u08bf\u08b0\3\2\2\2\u08bf\u08b3\3\2\2\2\u08bf\u08b4\3\2"+
		"\2\2\u08bf\u08b5\3\2\2\2\u08bf\u08b6\3\2\2\2\u08bf\u08b7\3\2\2\2\u08bf"+
		"\u08b8\3\2\2\2\u08bf\u08b9\3\2\2\2\u08bf\u08ba\3\2\2\2\u08bf\u08bb\3\2"+
		"\2\2\u08bf\u08bc\3\2\2\2\u08bf\u08bd\3\2\2\2\u08bf\u08be\3\2\2\2\u08c0"+
		"\u0153\3\2\2\2\u08c1\u08c8\5\u014e\u00a8\2\u08c2\u08c3\5\u014c\u00a7\2"+
		"\u08c3\u08c4\5\u0284\u0143\2\u08c4\u08c5\5\u014e\u00a8\2\u08c5\u08c8\3"+
		"\2\2\2\u08c6\u08c8\b\u00ab\1\2\u08c7\u08c1\3\2\2\2\u08c7\u08c2\3\2\2\2"+
		"\u08c7\u08c6\3\2\2\2\u08c8\u0155\3\2\2\2\u08c9\u08d0\5\u0152\u00aa\2\u08ca"+
		"\u08cb\5\u014c\u00a7\2\u08cb\u08cc\5\u0284\u0143\2\u08cc\u08cd\5\u0152"+
		"\u00aa\2\u08cd\u08d0\3\2\2\2\u08ce\u08d0\b\u00ac\1\2\u08cf\u08c9\3\2\2"+
		"\2\u08cf\u08ca\3\2\2\2\u08cf\u08ce\3\2\2\2\u08d0\u0157\3\2\2\2\u08d1\u08e2"+
		"\7\u00ac\2\2\u08d2\u08d3\7\f\2\2\u08d3\u08d4\7\u00ac\2\2\u08d4\u08e2\7"+
		"\f\2\2\u08d5\u08e2\7o\2\2\u08d6\u08e2\7g\2\2\u08d7\u08e2\7`\2\2\u08d8"+
		"\u08e2\7\67\2\2\u08d9\u08e2\7O\2\2\u08da\u08e2\7\u0082\2\2\u08db\u08e2"+
		"\7G\2\2\u08dc\u08e2\7l\2\2\u08dd\u08e2\7\u0080\2\2\u08de\u08e2\7c\2\2"+
		"\u08df\u08e2\7L\2\2\u08e0\u08e2\7P\2\2\u08e1\u08d1\3\2\2\2\u08e1\u08d2"+
		"\3\2\2\2\u08e1\u08d5\3\2\2\2\u08e1\u08d6\3\2\2\2\u08e1\u08d7\3\2\2\2\u08e1"+
		"\u08d8\3\2\2\2\u08e1\u08d9\3\2\2\2\u08e1\u08da\3\2\2\2\u08e1\u08db\3\2"+
		"\2\2\u08e1\u08dc\3\2\2\2\u08e1\u08dd\3\2\2\2\u08e1\u08de\3\2\2\2\u08e1"+
		"\u08df\3\2\2\2\u08e1\u08e0\3\2\2\2\u08e2\u0159\3\2\2\2\u08e3\u08f4\7\u00ac"+
		"\2\2\u08e4\u08e5\7\f\2\2\u08e5\u08e6\7\u00ac\2\2\u08e6\u08f4\7\f\2\2\u08e7"+
		"\u08f4\7o\2\2\u08e8\u08f4\7g\2\2\u08e9\u08f4\7`\2\2\u08ea\u08f4\7\67\2"+
		"\2\u08eb\u08f4\7O\2\2\u08ec\u08f4\7\u0082\2\2\u08ed\u08f4\7G\2\2\u08ee"+
		"\u08f4\7l\2\2\u08ef\u08f4\7\u0080\2\2\u08f0\u08f4\7c\2\2\u08f1\u08f4\7"+
		"L\2\2\u08f2\u08f4\7P\2\2\u08f3\u08e3\3\2\2\2\u08f3\u08e4\3\2\2\2\u08f3"+
		"\u08e7\3\2\2\2\u08f3\u08e8\3\2\2\2\u08f3\u08e9\3\2\2\2\u08f3\u08ea\3\2"+
		"\2\2\u08f3\u08eb\3\2\2\2\u08f3\u08ec\3\2\2\2\u08f3\u08ed\3\2\2\2\u08f3"+
		"\u08ee\3\2\2\2\u08f3\u08ef\3\2\2\2\u08f3\u08f0\3\2\2\2\u08f3\u08f1\3\2"+
		"\2\2\u08f3\u08f2\3\2\2\2\u08f4\u015b\3\2\2\2\u08f5\u08f8\5\u0160\u00b1"+
		"\2\u08f6\u08f8\5\u015e\u00b0\2\u08f7\u08f5\3\2\2\2\u08f7\u08f6\3\2\2\2"+
		"\u08f8\u015d\3\2\2\2\u08f9\u08fc\5\u025e\u0130\2\u08fa\u08fd\5\u0280\u0141"+
		"\2\u08fb\u08fd\b\u00b0\1\2\u08fc\u08fa\3\2\2\2\u08fc\u08fb\3\2\2\2\u08fd"+
		"\u0913\3\2\2\2\u08fe\u0901\5\u026a\u0136\2\u08ff\u0902\5\u0280\u0141\2"+
		"\u0900\u0902\b\u00b0\1\2\u0901\u08ff\3\2\2\2\u0901\u0900\3\2\2\2\u0902"+
		"\u0913\3\2\2\2\u0903\u0906\5\u0264\u0133\2\u0904\u0907\5\u0280\u0141\2"+
		"\u0905\u0907\b\u00b0\1\2\u0906\u0904\3\2\2\2\u0906\u0905\3\2\2\2\u0907"+
		"\u0913\3\2\2\2\u0908\u090b\5\u0266\u0134\2\u0909\u090c\5\u0280\u0141\2"+
		"\u090a\u090c\b\u00b0\1\2\u090b\u0909\3\2\2\2\u090b\u090a\3\2\2\2\u090c"+
		"\u0913\3\2\2\2\u090d\u0910\5\u0276\u013c\2\u090e\u0911\5\u0280\u0141\2"+
		"\u090f\u0911\b\u00b0\1\2\u0910\u090e\3\2\2\2\u0910\u090f\3\2\2\2\u0911"+
		"\u0913\3\2\2\2\u0912\u08f9\3\2\2\2\u0912\u08fe\3\2\2\2\u0912\u0903\3\2"+
		"\2\2\u0912\u0908\3\2\2\2\u0912\u090d\3\2\2\2\u0913\u015f\3\2\2\2\u0914"+
		"\u092a\5\u024c\u0127\2\u0915\u092a\5\u024e\u0128\2\u0916\u092a\5\u0250"+
		"\u0129\2\u0917\u092a\5\u0252\u012a\2\u0918\u092a\5\u0254\u012b\2\u0919"+
		"\u092a\5\u0256\u012c\2\u091a\u092a\5\u0258\u012d\2\u091b\u092a\5\u025a"+
		"\u012e\2\u091c\u092a\5\u025c\u012f\2\u091d\u092a\5\u0260\u0131\2\u091e"+
		"\u092a\5\u0262\u0132\2\u091f\u092a\5\u0268\u0135\2\u0920\u092a\5\u026c"+
		"\u0137\2\u0921\u092a\5\u026e\u0138\2\u0922\u092a\5\u0270\u0139\2\u0923"+
		"\u092a\5\u0272\u013a\2\u0924\u092a\5\u0274\u013b\2\u0925\u092a\5\u027a"+
		"\u013e\2\u0926\u092a\5\u027c\u013f\2\u0927\u092a\5\u027e\u0140\2\u0928"+
		"\u092a\5\u0278\u013d\2\u0929\u0914\3\2\2\2\u0929\u0915\3\2\2\2\u0929\u0916"+
		"\3\2\2\2\u0929\u0917\3\2\2\2\u0929\u0918\3\2\2\2\u0929\u0919\3\2\2\2\u0929"+
		"\u091a\3\2\2\2\u0929\u091b\3\2\2\2\u0929\u091c\3\2\2\2\u0929\u091d\3\2"+
		"\2\2\u0929\u091e\3\2\2\2\u0929\u091f\3\2\2\2\u0929\u0920\3\2\2\2\u0929"+
		"\u0921\3\2\2\2\u0929\u0922\3\2\2\2\u0929\u0923\3\2\2\2\u0929\u0924\3\2"+
		"\2\2\u0929\u0925\3\2\2\2\u0929\u0926\3\2\2\2\u0929\u0927\3\2\2\2\u0929"+
		"\u0928\3\2\2\2\u092a\u0161\3\2\2\2\u092b\u092e\5\u0198\u00cd\2\u092c\u092e"+
		"\5\u01b0\u00d9\2\u092d\u092b\3\2\2\2\u092d\u092c\3\2\2\2\u092e\u0163\3"+
		"\2\2\2\u092f\u0930\7\u00ac\2\2\u0930\u0165\3\2\2\2\u0931\u0932\7\u00ac"+
		"\2\2\u0932\u0167\3\2\2\2\u0933\u0934\5\u0146\u00a4\2\u0934\u0169\3\2\2"+
		"\2\u0935\u0936\7\u00ac\2\2\u0936\u016b\3\2\2\2\u0937\u0938\7\u00ac\2\2"+
		"\u0938\u016d\3\2\2\2\u0939\u093a\7\u00ac\2\2\u093a\u016f\3\2\2\2\u093b"+
		"\u093c\7\u00ac\2\2\u093c\u0171\3\2\2\2\u093d\u093e\7\u00ac\2\2\u093e\u0173"+
		"\3\2\2\2\u093f\u0940\7\u00ac\2\2\u0940\u0175\3\2\2\2\u0941\u0942\5\u0146"+
		"\u00a4\2\u0942\u0177\3\2\2\2\u0943\u0944\7\u00ac\2\2\u0944\u0179\3\2\2"+
		"\2\u0945\u0946\5\u017c\u00bf\2\u0946\u0947\5\u015c\u00af\2\u0947\u017b"+
		"\3\2\2\2\u0948\u0949\7\u00ac\2\2\u0949\u017d\3\2\2\2\u094a\u094b\7\31"+
		"\2\2\u094b\u017f\3\2\2\2\u094c\u094d\7\32\2\2\u094d\u0181\3\2\2\2\u094e"+
		"\u094f\7\33\2\2\u094f\u0183\3\2\2\2\u0950\u0951\7\36\2\2\u0951\u0185\3"+
		"\2\2\2\u0952\u0953\7\35\2\2\u0953\u0187\3\2\2\2\u0954\u0955\7\34\2\2\u0955"+
		"\u0189\3\2\2\2\u0956\u0957\7\33\2\2\u0957\u0958\7g\2\2\u0958\u018b\3\2"+
		"\2\2\u0959\u095a\7\37\2\2\u095a\u018d\3\2\2\2\u095b\u095c\7\37\2\2\u095c"+
		"\u095d\7=\2\2\u095d\u018f\3\2\2\2\u095e\u095f\7 \2\2\u095f\u0191\3\2\2"+
		"\2\u0960\u0961\7!\2\2\u0961\u0193\3\2\2\2\u0962\u0963\7#\2\2\u0963\u0195"+
		"\3\2\2\2\u0964\u0965\7$\2\2\u0965\u0197\3\2\2\2\u0966\u0967\7%\2\2\u0967"+
		"\u0199\3\2\2\2\u0968\u0969\7&\2\2\u0969\u019b\3\2\2\2\u096a\u096b\7\'"+
		"\2\2\u096b\u019d\3\2\2\2\u096c\u096d\7(\2\2\u096d\u019f\3\2\2\2\u096e"+
		"\u096f\7)\2\2\u096f\u01a1\3\2\2\2\u0970\u0971\7*\2\2\u0971\u01a3\3\2\2"+
		"\2\u0972\u0973\7+\2\2\u0973\u01a5\3\2\2\2\u0974\u0975\7-\2\2\u0975\u01a7"+
		"\3\2\2\2\u0976\u0977\7/\2\2\u0977\u01a9\3\2\2\2\u0978\u0979\7/\2\2\u0979"+
		"\u097a\7L\2\2\u097a\u01ab\3\2\2\2\u097b\u097c\7\60\2\2\u097c\u01ad\3\2"+
		"\2\2\u097d\u097e\7\62\2\2\u097e\u01af\3\2\2\2\u097f\u0980\7\63\2\2\u0980"+
		"\u01b1\3\2\2\2\u0981\u0982\7\64\2\2\u0982\u01b3\3\2\2\2\u0983\u0984\7"+
		"\65\2\2\u0984\u01b5\3\2\2\2\u0985\u0986\7\66\2\2\u0986\u01b7\3\2\2\2\u0987"+
		"\u0988\7\67\2\2\u0988\u01b9\3\2\2\2\u0989\u098a\79\2\2\u098a\u01bb\3\2"+
		"\2\2\u098b\u098c\7:\2\2\u098c\u01bd\3\2\2\2\u098d\u098e\7;\2\2\u098e\u01bf"+
		"\3\2\2\2\u098f\u0990\7=\2\2\u0990\u01c1\3\2\2\2\u0991\u0992\7>\2\2\u0992"+
		"\u01c3\3\2\2\2\u0993\u0994\7?\2\2\u0994\u01c5\3\2\2\2\u0995\u0996\7@\2"+
		"\2\u0996\u01c7\3\2\2\2\u0997\u0998\7A\2\2\u0998\u01c9\3\2\2\2\u0999\u099a"+
		"\7B\2\2\u099a\u01cb\3\2\2\2\u099b\u099c\7C\2\2\u099c\u01cd\3\2\2\2\u099d"+
		"\u099e\7D\2\2\u099e\u01cf\3\2\2\2\u099f\u09a0\7E\2\2\u09a0\u01d1\3\2\2"+
		"\2\u09a1\u09a2\7G\2\2\u09a2\u01d3\3\2\2\2\u09a3\u09a4\7H\2\2\u09a4\u01d5"+
		"\3\2\2\2\u09a5\u09a6\7I\2\2\u09a6\u01d7\3\2\2\2\u09a7\u09a8\7J\2\2\u09a8"+
		"\u01d9\3\2\2\2\u09a9\u09aa\7K\2\2\u09aa\u01db\3\2\2\2\u09ab\u09ac\7L\2"+
		"\2\u09ac\u01dd\3\2\2\2\u09ad\u09ae\7M\2\2\u09ae\u01df\3\2\2\2\u09af\u09b0"+
		"\7N\2\2\u09b0\u01e1\3\2\2\2\u09b1\u09b2\7O\2\2\u09b2\u01e3\3\2\2\2\u09b3"+
		"\u09b4\7Q\2\2\u09b4\u01e5\3\2\2\2\u09b5\u09b6\7\u0099\2\2\u09b6\u01e7"+
		"\3\2\2\2\u09b7\u09b8\7\u009a\2\2\u09b8\u01e9\3\2\2\2\u09b9\u09ba\7T\2"+
		"\2\u09ba\u01eb\3\2\2\2\u09bb\u09bc\7U\2\2\u09bc\u01ed\3\2\2\2\u09bd\u09be"+
		"\7V\2\2\u09be\u01ef\3\2\2\2\u09bf\u09c0\7W\2\2\u09c0\u01f1\3\2\2\2\u09c1"+
		"\u09c2\7Z\2\2\u09c2\u01f3\3\2\2\2\u09c3\u09c4\7Y\2\2\u09c4\u01f5\3\2\2"+
		"\2\u09c5\u09c6\7[\2\2\u09c6\u01f7\3\2\2\2\u09c7\u09c8\7\\\2\2\u09c8\u01f9"+
		"\3\2\2\2\u09c9\u09ca\7]\2\2\u09ca\u01fb\3\2\2\2\u09cb\u09cc\7^\2\2\u09cc"+
		"\u01fd\3\2\2\2\u09cd\u09ce\7`\2\2\u09ce\u01ff\3\2\2\2\u09cf\u09d0\7a\2"+
		"\2\u09d0\u0201\3\2\2\2\u09d1\u09d2\7b\2\2\u09d2\u0203\3\2\2\2\u09d3\u09d4"+
		"\7b\2\2\u09d4\u09d5\7)\2\2\u09d5\u0205\3\2\2\2\u09d6\u09d7\7c\2\2\u09d7"+
		"\u0207\3\2\2\2\u09d8\u09d9\7d\2\2\u09d9\u0209\3\2\2\2\u09da\u09db\7g\2"+
		"\2\u09db\u020b\3\2\2\2\u09dc\u09dd\7h\2\2\u09dd\u020d\3\2\2\2\u09de\u09df"+
		"\7j\2\2\u09df\u020f\3\2\2\2\u09e0\u09e1\7k\2\2\u09e1\u0211\3\2\2\2\u09e2"+
		"\u09e3\7l\2\2\u09e3\u0213\3\2\2\2\u09e4\u09e5\7m\2\2\u09e5\u0215\3\2\2"+
		"\2\u09e6\u09e7\7o\2\2\u09e7\u0217\3\2\2\2\u09e8\u09e9\7q\2\2\u09e9\u0219"+
		"\3\2\2\2\u09ea\u09eb\7r\2\2\u09eb\u021b\3\2\2\2\u09ec\u09ed\7s\2\2\u09ed"+
		"\u021d\3\2\2\2\u09ee\u09ef\7t\2\2\u09ef\u021f\3\2\2\2\u09f0\u09f1\7u\2"+
		"\2\u09f1\u0221\3\2\2\2\u09f2\u09f3\7v\2\2\u09f3\u0223\3\2\2\2\u09f4\u09f5"+
		"\7w\2\2\u09f5\u0225\3\2\2\2\u09f6\u09f7\7x\2\2\u09f7\u0227\3\2\2\2\u09f8"+
		"\u09f9\7z\2\2\u09f9\u0229\3\2\2\2\u09fa\u09fb\7{\2\2\u09fb\u022b\3\2\2"+
		"\2\u09fc\u09fd\7|\2\2\u09fd\u022d\3\2\2\2\u09fe\u09ff\7}\2\2\u09ff\u022f"+
		"\3\2\2\2\u0a00\u0a01\7\177\2\2\u0a01\u0231\3\2\2\2\u0a02\u0a03\7\u0080"+
		"\2\2\u0a03\u0233\3\2\2\2\u0a04\u0a05\7\u0082\2\2\u0a05\u0235\3\2\2\2\u0a06"+
		"\u0a07\7\u0083\2\2\u0a07\u0237\3\2\2\2\u0a08\u0a09\7\u0084\2\2\u0a09\u0239"+
		"\3\2\2\2\u0a0a\u0a0b\7\u0085\2\2\u0a0b\u023b\3\2\2\2\u0a0c\u0a0d\7\u0086"+
		"\2\2\u0a0d\u023d\3\2\2\2\u0a0e\u0a0f\7\u00a5\2\2\u0a0f\u023f\3\2\2\2\u0a10"+
		"\u0a11\7\u0087\2\2\u0a11\u0241\3\2\2\2\u0a12\u0a13\7\u0088\2\2\u0a13\u0243"+
		"\3\2\2\2\u0a14\u0a15\7\u0089\2\2\u0a15\u0245\3\2\2\2\u0a16\u0a17\7\u008a"+
		"\2\2\u0a17\u0247\3\2\2\2\u0a18\u0a19\7\u008b\2\2\u0a19\u0249\3\2\2\2\u0a1a"+
		"\u0a1b\7n\2\2\u0a1b\u024b\3\2\2\2\u0a1c\u0a1d\7\u008d\2\2\u0a1d\u024d"+
		"\3\2\2\2\u0a1e\u0a1f\7\u008e\2\2\u0a1f\u024f\3\2\2\2\u0a20\u0a21\7\u008f"+
		"\2\2\u0a21\u0251\3\2\2\2\u0a22\u0a23\7\u0090\2\2\u0a23\u0253\3\2\2\2\u0a24"+
		"\u0a25\7\u0091\2\2\u0a25\u0255\3\2\2\2\u0a26\u0a27\7\u0092\2\2\u0a27\u0257"+
		"\3\2\2\2\u0a28\u0a29\7\u0093\2\2\u0a29\u0259\3\2\2\2\u0a2a\u0a2b\7\u0094"+
		"\2\2\u0a2b\u025b\3\2\2\2\u0a2c";
	private static final String _serializedATNSegment1 =
		"\u0a2d\7\u0095\2\2\u0a2d\u025d\3\2\2\2\u0a2e\u0a2f\7\u0096\2\2\u0a2f\u025f"+
		"\3\2\2\2\u0a30\u0a31\7\u0097\2\2\u0a31\u0261\3\2\2\2\u0a32\u0a33\7\u0098"+
		"\2\2\u0a33\u0263\3\2\2\2\u0a34\u0a35\7\u0099\2\2\u0a35\u0265\3\2\2\2\u0a36"+
		"\u0a37\7\u009b\2\2\u0a37\u0267\3\2\2\2\u0a38\u0a39\7\u009c\2\2\u0a39\u0269"+
		"\3\2\2\2\u0a3a\u0a3b\7r\2\2\u0a3b\u026b\3\2\2\2\u0a3c\u0a3d\7\u009d\2"+
		"\2\u0a3d\u026d\3\2\2\2\u0a3e\u0a3f\7\u009f\2\2\u0a3f\u026f\3\2\2\2\u0a40"+
		"\u0a41\7\u009e\2\2\u0a41\u0271\3\2\2\2\u0a42\u0a43\7z\2\2\u0a43\u0273"+
		"\3\2\2\2\u0a44\u0a45\7\u00a0\2\2\u0a45\u0275\3\2\2\2\u0a46\u0a47\7\u00a1"+
		"\2\2\u0a47\u0277\3\2\2\2\u0a48\u0a49\7\u00ac\2\2\u0a49\u0279\3\2\2\2\u0a4a"+
		"\u0a4b\7\u00a2\2\2\u0a4b\u027b\3\2\2\2\u0a4c\u0a4d\7\u00a3\2\2\u0a4d\u027d"+
		"\3\2\2\2\u0a4e\u0a4f\7\u00a4\2\2\u0a4f\u027f\3\2\2\2\u0a50\u0a51\5\u0290"+
		"\u0149\2\u0a51\u0a57\5\u015c\u00af\2\u0a52\u0a53\5\u0298\u014d\2\u0a53"+
		"\u0a54\5\u015c\u00af\2\u0a54\u0a56\3\2\2\2\u0a55\u0a52\3\2\2\2\u0a56\u0a59"+
		"\3\2\2\2\u0a57\u0a55\3\2\2\2\u0a57\u0a58\3\2\2\2\u0a58\u0a5a\3\2\2\2\u0a59"+
		"\u0a57\3\2\2\2\u0a5a\u0a5b\5\u0292\u014a\2\u0a5b\u0281\3\2\2\2\u0a5c\u0a5d"+
		"\7\23\2\2\u0a5d\u0283\3\2\2\2\u0a5e\u0a5f\7\22\2\2\u0a5f\u0285\3\2\2\2"+
		"\u0a60\u0a61\7\2\2\3\u0a61\u0287\3\2\2\2\u0a62\u0a63\7\3\2\2\u0a63\u0289"+
		"\3\2\2\2\u0a64\u0a65\7\4\2\2\u0a65\u028b\3\2\2\2\u0a66\u0a67\7\5\2\2\u0a67"+
		"\u028d\3\2\2\2\u0a68\u0a69\7\6\2\2\u0a69\u028f\3\2\2\2\u0a6a\u0a6b\7\u00af"+
		"\2\2\u0a6b\u0291\3\2\2\2\u0a6c\u0a6d\7\u00b0\2\2\u0a6d\u0293\3\2\2\2\u0a6e"+
		"\u0a6f\7\7\2\2\u0a6f\u0295\3\2\2\2\u0a70\u0a71\7\b\2\2\u0a71\u0297\3\2"+
		"\2\2\u0a72\u0a73\7\t\2\2\u0a73\u0299\3\2\2\2\u0a74\u0a75\7\13\2\2\u0a75"+
		"\u029b\3\2\2\2\u0a76\u0a77\7\26\2\2\u0a77\u029d\3\2\2\2\u0a78\u0a79\7"+
		"\30\2\2\u0a79\u029f\3\2\2\2\u0a7a\u0a7b\7\r\2\2\u0a7b\u02a1\3\2\2\2\u0a7c"+
		"\u0a7d\7\f\2\2\u0a7d\u02a3\3\2\2\2\u0a7e\u0a7f\7\u00ae\2\2\u0a7f\u02a5"+
		"\3\2\2\2\u0a80\u0a81\7\u00af\2\2\u0a81\u02a7\3\2\2\2\u0a82\u0a83\7\u00b0"+
		"\2\2\u0a83\u02a9\3\2\2\2\u0a84\u0a85\7\u00b1\2\2\u0a85\u02ab\3\2\2\2\u0a86"+
		"\u0a87\7\u00b2\2\2\u0a87\u02ad\3\2\2\2\u00ce\u02af\u02b2\u02b8\u02bd\u02bf"+
		"\u02c4\u02c7\u02ca\u02f6\u0306\u0309\u0310\u0315\u0320\u032a\u0336\u033f"+
		"\u0346\u034b\u0353\u0358\u035c\u0361\u0370\u0376\u0380\u038d\u0394\u039c"+
		"\u03ae\u03b3\u03bf\u03c3\u03c7\u03cc\u03df\u03e6\u03ee\u03f2\u0405\u040e"+
		"\u041d\u041f\u042b\u0439\u0440\u0447\u044d\u0450\u0453\u045e\u046e\u0482"+
		"\u0499\u04a7\u04ae\u04b7\u04ca\u04d2\u04d8\u04dd\u04e4\u04e9\u04f1\u04f6"+
		"\u04fd\u0502\u0509\u050e\u0515\u051e\u0525\u052c\u0533\u0538\u053f\u0544"+
		"\u054b\u0552\u0556\u055b\u055d\u0569\u0570\u0578\u0583\u0589\u0592\u059f"+
		"\u05a7\u05ad\u05bb\u05c3\u05ce\u05e2\u05eb\u05fe\u0602\u0606\u060a\u0618"+
		"\u0620\u0629\u0634\u063b\u063e\u0647\u064b\u0652\u0659\u065f\u0667\u066f"+
		"\u0675\u0679\u067d\u0681\u0689\u0691\u0695\u069a\u069f\u06a3\u06ae\u06bc"+
		"\u06c0\u06c6\u06cd\u06d6\u06df\u06e8\u06f1\u06fa\u0703\u070f\u0718\u0728"+
		"\u0734\u0740\u0743\u0755\u076c\u076f\u0776\u077c\u0780\u0784\u078c\u0791"+
		"\u0794\u0798\u079d\u07a0\u07a3\u07a6\u07ab\u07b1\u07b9\u07bc\u07c8\u07cc"+
		"\u07d3\u07d9\u07dc\u07e4\u07ed\u07f3\u07f9\u0800\u0807\u080b\u080f\u0812"+
		"\u081c\u0825\u0828\u082d\u0833\u0837\u0841\u0848\u0852\u085b\u0867\u0873"+
		"\u087f\u0894\u089b\u08ad\u08bf\u08c7\u08cf\u08e1\u08f3\u08f7\u08fc\u0901"+
		"\u0906\u090b\u0910\u0912\u0929\u092d\u0a57";
	public static final String _serializedATN = Utils.join(
		new String[] {
			_serializedATNSegment0,
			_serializedATNSegment1
		},
		""
	);
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}