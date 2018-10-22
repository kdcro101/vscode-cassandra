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
		K_REPLICATION=106, K_RETURNS=107, K_REVOKE=108, K_SCHEMA=109, K_SELECT=110, 
		K_SET=111, K_SFUNC=112, K_STATIC=113, K_STORAGE=114, K_STYPE=115, K_SUPERUSER=116, 
		K_TABLE=117, K_THREE=118, K_TIMESTAMP=119, K_TO=120, K_TOKEN=121, K_TRIGGER=122, 
		K_TRUE=123, K_TRUNCATE=124, K_TTL=125, K_TWO=126, K_TYPE=127, K_UNLOGGED=128, 
		K_UPDATE=129, K_USE=130, K_USING=131, K_VALUES=132, K_VIEW=133, K_WHERE=134, 
		K_WITH=135, K_WRITETIME=136, K_ASCII=137, K_BIGINT=138, K_BLOB=139, K_BOOLEAN=140, 
		K_COUNTER=141, K_DATE=142, K_DECIMAL=143, K_DOUBLE=144, K_FLOAT=145, K_FROZEN=146, 
		K_INET=147, K_INT=148, K_LIST=149, K_ROLES=150, K_ROLE=151, K_MAP=152, 
		K_SMALLINT=153, K_TEXT=154, K_TIMEUUID=155, K_TIME=156, K_TINYINT=157, 
		K_TUPLE=158, K_UUID=159, K_VARCHAR=160, K_VARINT=161, CODE_BLOCK=162, 
		STRING_LITERAL=163, DECIMAL_LITERAL=164, FLOAT_LITERAL=165, HEXADECIMAL_LITERAL=166, 
		REAL_LITERAL=167, OBJECT_NAME=168, UUID=169, OPERATOR_EQ=170, OPERATOR_LT=171, 
		OPERATOR_GT=172, OPERATOR_LTE=173, OPERATOR_GTE=174, K_USERS=175, K_USER=176;
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
		RULE_primaryKeyDefinition = 84, RULE_primaryKeySimple = 85, RULE_primaryKeyComposite = 86, 
		RULE_compoundKey = 87, RULE_partitionKeyList = 88, RULE_clusteringKeyList = 89, 
		RULE_applyBatch = 90, RULE_beginBatch = 91, RULE_beginBatchSpec = 92, 
		RULE_batchType = 93, RULE_alterKeyspace = 94, RULE_replicationList = 95, 
		RULE_replicationListItem = 96, RULE_durableWrites = 97, RULE_use = 98, 
		RULE_truncate = 99, RULE_createIndex = 100, RULE_createIndexSubject = 101, 
		RULE_index = 102, RULE_createIndexDef = 103, RULE_createIndexTarget = 104, 
		RULE_indexKeysSpec = 105, RULE_indexEntriesSSpec = 106, RULE_indexFullSpec = 107, 
		RULE_delete = 108, RULE_deleteColumnList = 109, RULE_deleteColumnItem = 110, 
		RULE_update = 111, RULE_ifSpec = 112, RULE_ifConditionList = 113, RULE_ifCondition = 114, 
		RULE_updateAssignments = 115, RULE_updateAssignmentElement = 116, RULE_assignmentSet = 117, 
		RULE_assignmentMap = 118, RULE_assignmentList = 119, RULE_insert = 120, 
		RULE_usingTtlTimestamp = 121, RULE_timestamp = 122, RULE_ttl = 123, RULE_usingTimestampSpec = 124, 
		RULE_ifNotExist = 125, RULE_ifExist = 126, RULE_insertValuesSpec = 127, 
		RULE_insertColumnSpec = 128, RULE_columnList = 129, RULE_baseColumnList = 130, 
		RULE_expressionList = 131, RULE_expression = 132, RULE_select = 133, RULE_limitSpec = 134, 
		RULE_fromSpec = 135, RULE_orderSpec = 136, RULE_orderSpecElement = 137, 
		RULE_whereSpec = 138, RULE_selectElements = 139, RULE_selectElement = 140, 
		RULE_relationElements = 141, RULE_relationElement = 142, RULE_relationElementConstant = 143, 
		RULE_relationElementIn = 144, RULE_relationElementToken = 145, RULE_relationElementTokenSpec = 146, 
		RULE_relationOperator = 147, RULE_functionCall = 148, RULE_functionArgs = 149, 
		RULE_constant = 150, RULE_collectionElement = 151, RULE_collectionMapElement = 152, 
		RULE_constantCollection = 153, RULE_constantMap = 154, RULE_constantSet = 155, 
		RULE_constantList = 156, RULE_constantTuple = 157, RULE_constantUuid = 158, 
		RULE_constantDecimal = 159, RULE_constantFloat = 160, RULE_constantString = 161, 
		RULE_constantBoolean = 162, RULE_constantHexadecimal = 163, RULE_keyspace = 164, 
		RULE_baseKeyspace = 165, RULE_table = 166, RULE_baseTable = 167, RULE_materializedView = 168, 
		RULE_keyspaceObject = 169, RULE_objectUnknown = 170, RULE_aggregateSpec = 171, 
		RULE_typeSpec = 172, RULE_functionSpec = 173, RULE_tableSpec = 174, RULE_baseTableSpec = 175, 
		RULE_indexSpec = 176, RULE_materializedViewSpec = 177, RULE_tableOrMaterializedViewSpec = 178, 
		RULE_objectUnknownSpec = 179, RULE_columnSpec = 180, RULE_column = 181, 
		RULE_columnUnknownSpec = 182, RULE_columnUnknown = 183, RULE_dataType = 184, 
		RULE_dataTypeCollection = 185, RULE_dataTypeFundamental = 186, RULE_orderDirection = 187, 
		RULE_role = 188, RULE_trigger = 189, RULE_triggerClass = 190, RULE_type = 191, 
		RULE_aggregate = 192, RULE_function = 193, RULE_language = 194, RULE_user = 195, 
		RULE_password = 196, RULE_hashKey = 197, RULE_param = 198, RULE_paramName = 199, 
		RULE_kwAdd = 200, RULE_kwAggregate = 201, RULE_kwAll = 202, RULE_kwAllFunctions = 203, 
		RULE_kwAllKeyspaces = 204, RULE_kwAllRoles = 205, RULE_kwAllPermissions = 206, 
		RULE_kwAllow = 207, RULE_kwAllowFiltering = 208, RULE_kwAlter = 209, RULE_kwAnd = 210, 
		RULE_kwApply = 211, RULE_kwAs = 212, RULE_kwAsc = 213, RULE_kwAuthorize = 214, 
		RULE_kwBatch = 215, RULE_kwBegin = 216, RULE_kwBy = 217, RULE_kwCalled = 218, 
		RULE_kwClustering = 219, RULE_kwCompact = 220, RULE_kwContains = 221, 
		RULE_kwContainsKey = 222, RULE_kwCreate = 223, RULE_kwDelete = 224, RULE_kwDesc = 225, 
		RULE_kwDescibe = 226, RULE_kwDistinct = 227, RULE_kwDrop = 228, RULE_kwDurableWrites = 229, 
		RULE_kwEntries = 230, RULE_kwExecute = 231, RULE_kwExists = 232, RULE_kwFiltering = 233, 
		RULE_kwFinalfunc = 234, RULE_kwFrom = 235, RULE_kwFull = 236, RULE_kwFunction = 237, 
		RULE_kwGrant = 238, RULE_kwIf = 239, RULE_kwIn = 240, RULE_kwIndex = 241, 
		RULE_kwInitcond = 242, RULE_kwInput = 243, RULE_kwInsertInto = 244, RULE_kwIs = 245, 
		RULE_kwKey = 246, RULE_kwKeys = 247, RULE_kwKeyspace = 248, RULE_kwLanguage = 249, 
		RULE_kwLimit = 250, RULE_kwList = 251, RULE_kwListRoles = 252, RULE_kwListUsers = 253, 
		RULE_kwLogged = 254, RULE_kwLogin = 255, RULE_kwMaterializedView = 256, 
		RULE_kwModify = 257, RULE_kwNosuperuser = 258, RULE_kwNorecursive = 259, 
		RULE_kwNot = 260, RULE_kwNull = 261, RULE_kwOf = 262, RULE_kwOn = 263, 
		RULE_kwOptions = 264, RULE_kwOr = 265, RULE_kwOrder = 266, RULE_kwOrderBy = 267, 
		RULE_kwPartition = 268, RULE_kwPassword = 269, RULE_kwPermissions = 270, 
		RULE_kwPrimary = 271, RULE_kwRename = 272, RULE_kwReplace = 273, RULE_kwReplication = 274, 
		RULE_kwReturns = 275, RULE_kwRole = 276, RULE_kwSelect = 277, RULE_kwSet = 278, 
		RULE_kwSfunc = 279, RULE_kwStatic = 280, RULE_kwStorage = 281, RULE_kwStype = 282, 
		RULE_kwSuperuser = 283, RULE_kwTable = 284, RULE_kwTimestamp = 285, RULE_kwTo = 286, 
		RULE_kwToken = 287, RULE_kwTrigger = 288, RULE_kwTruncate = 289, RULE_kwTtl = 290, 
		RULE_kwType = 291, RULE_kwUnlogged = 292, RULE_kwUpdate = 293, RULE_kwUse = 294, 
		RULE_kwUser = 295, RULE_kwUsers = 296, RULE_kwUsing = 297, RULE_kwValues = 298, 
		RULE_kwWhere = 299, RULE_kwWith = 300, RULE_kwRevoke = 301, RULE_dataTypeAscii = 302, 
		RULE_dataTypeBigint = 303, RULE_dataTypeBlob = 304, RULE_dataTypeBoolean = 305, 
		RULE_dataTypeCounter = 306, RULE_dataTypeDate = 307, RULE_dataTypeDecimal = 308, 
		RULE_dataTypeDouble = 309, RULE_dataTypeFloat = 310, RULE_dataTypeFrozen = 311, 
		RULE_dataTypeInet = 312, RULE_dataTypeInt = 313, RULE_dataTypeList = 314, 
		RULE_dataTypeMap = 315, RULE_dataTypeSmallInt = 316, RULE_dataTypeSet = 317, 
		RULE_dataTypeText = 318, RULE_dataTypeTime = 319, RULE_dataTypeTimeUuid = 320, 
		RULE_dataTypeTimestamp = 321, RULE_dataTypeTinyInt = 322, RULE_dataTypeTuple = 323, 
		RULE_dataTypeUserDefined = 324, RULE_dataTypeUuid = 325, RULE_dataTypeVarChar = 326, 
		RULE_dataTypeVarInt = 327, RULE_dataTypeStructure = 328, RULE_specialStar = 329, 
		RULE_specialDot = 330, RULE_eof = 331, RULE_syntaxBracketLr = 332, RULE_syntaxBracketRr = 333, 
		RULE_syntaxBracketLc = 334, RULE_syntaxBracketRc = 335, RULE_syntaxBracketLa = 336, 
		RULE_syntaxBracketRa = 337, RULE_syntaxBracketLs = 338, RULE_syntaxBracketRs = 339, 
		RULE_syntaxComma = 340, RULE_syntaxColon = 341, RULE_syntaxPlus = 342, 
		RULE_syntaxMinus = 343, RULE_syntaxSquote = 344, RULE_syntaxDquote = 345, 
		RULE_syntaxOperatorEq = 346, RULE_syntaxOperatorLt = 347, RULE_syntaxOperatorGt = 348, 
		RULE_syntaxOperatorLte = 349, RULE_syntaxOperatorGte = 350;
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
		"K_RETURNS", "K_REVOKE", "K_SCHEMA", "K_SELECT", "K_SET", "K_SFUNC", "K_STATIC", 
		"K_STORAGE", "K_STYPE", "K_SUPERUSER", "K_TABLE", "K_THREE", "K_TIMESTAMP", 
		"K_TO", "K_TOKEN", "K_TRIGGER", "K_TRUE", "K_TRUNCATE", "K_TTL", "K_TWO", 
		"K_TYPE", "K_UNLOGGED", "K_UPDATE", "K_USE", "K_USING", "K_VALUES", "K_VIEW", 
		"K_WHERE", "K_WITH", "K_WRITETIME", "K_ASCII", "K_BIGINT", "K_BLOB", "K_BOOLEAN", 
		"K_COUNTER", "K_DATE", "K_DECIMAL", "K_DOUBLE", "K_FLOAT", "K_FROZEN", 
		"K_INET", "K_INT", "K_LIST", "K_ROLES", "K_ROLE", "K_MAP", "K_SMALLINT", 
		"K_TEXT", "K_TIMEUUID", "K_TIME", "K_TINYINT", "K_TUPLE", "K_UUID", "K_VARCHAR", 
		"K_VARINT", "CODE_BLOCK", "STRING_LITERAL", "DECIMAL_LITERAL", "FLOAT_LITERAL", 
		"HEXADECIMAL_LITERAL", "REAL_LITERAL", "OBJECT_NAME", "UUID", "OPERATOR_EQ", 
		"OPERATOR_LT", "OPERATOR_GT", "OPERATOR_LTE", "OPERATOR_GTE", "K_USERS", 
		"K_USER"
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
			setState(703);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (SEMI - 8)) | (1L << (K_ALTER - 8)) | (1L << (K_APPLY - 8)) | (1L << (K_BEGIN - 8)) | (1L << (K_CREATE - 8)) | (1L << (K_DELETE - 8)) | (1L << (K_DROP - 8)) | (1L << (K_GRANT - 8)) | (1L << (K_INSERT - 8)))) != 0) || ((((_la - 108)) & ~0x3f) == 0 && ((1L << (_la - 108)) & ((1L << (K_REVOKE - 108)) | (1L << (K_SELECT - 108)) | (1L << (K_TRUNCATE - 108)) | (1L << (K_UPDATE - 108)) | (1L << (K_USE - 108)) | (1L << (K_LIST - 108)))) != 0)) {
				{
				setState(702);
				cqls();
				}
			}

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
			setState(719);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(717);
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
						setState(710);
						cql();
						setState(712);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==MINUSMINUS) {
							{
							setState(711);
							match(MINUSMINUS);
							}
						}

						setState(714);
						statementSeparator();
						}
						break;
					case SEMI:
						{
						setState(716);
						empty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(721);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			setState(730);
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
				setState(722);
				cql();
				setState(727);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(724);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==MINUSMINUS) {
						{
						setState(723);
						match(MINUSMINUS);
						}
					}

					setState(726);
					statementSeparator();
					}
					break;
				}
				}
				break;
			case SEMI:
				{
				setState(729);
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
			setState(732);
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
			setState(734);
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
			setState(774);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(736);
				beginBatch();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(737);
				alterKeyspace();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(738);
				alterMaterializedView();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(739);
				alterRole();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(740);
				alterTable();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(741);
				alterType();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(742);
				alterUser();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(743);
				applyBatch();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(744);
				createAggregate();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(745);
				createFunction();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(746);
				createIndex();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(747);
				createKeyspace();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(748);
				createMaterializedView();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(749);
				createRole();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(750);
				createTable();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(751);
				createTrigger();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(752);
				createType();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(753);
				createUser();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(754);
				delete();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(755);
				dropAggregate();
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(756);
				dropFunction();
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(757);
				dropIndex();
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(758);
				dropKeyspace();
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(759);
				dropMaterializedView();
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(760);
				dropRole();
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(761);
				dropTable();
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(762);
				dropTrigger();
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(763);
				dropType();
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(764);
				dropUser();
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(765);
				grant();
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(766);
				insert();
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(767);
				listPermissions();
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(768);
				listRoles();
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(769);
				revoke();
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(770);
				select();
				}
				break;
			case 36:
				enterOuterAlt(_localctx, 36);
				{
				setState(771);
				truncate();
				}
				break;
			case 37:
				enterOuterAlt(_localctx, 37);
				{
				setState(772);
				update();
				}
				break;
			case 38:
				enterOuterAlt(_localctx, 38);
				{
				setState(773);
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
			setState(776);
			kwRevoke();
			setState(777);
			priviledge();
			setState(778);
			kwOn();
			setState(779);
			resource();
			setState(780);
			kwFrom();
			setState(781);
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
		public KwListUsersContext kwListUsers() {
			return getRuleContext(KwListUsersContext.class,0);
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
			setState(783);
			kwListUsers();
			}
		}
		catch (RecognitionException re) {
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
			setState(785);
			kwListRoles();
			setState(789);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OF) {
				{
				setState(786);
				kwOf();
				setState(787);
				role();
				}
			}

			setState(792);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_NORECURSIVE) {
				{
				setState(791);
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
			setState(794);
			kwList();
			setState(795);
			priviledge();
			setState(799);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ON) {
				{
				setState(796);
				kwOn();
				setState(797);
				resource();
				}
			}

			setState(804);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OF) {
				{
				setState(801);
				kwOf();
				setState(802);
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
			setState(806);
			kwGrant();
			setState(807);
			priviledge();
			setState(808);
			kwOn();
			setState(809);
			resource();
			setState(810);
			kwTo();
			setState(811);
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
			setState(825);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ALL:
				enterOuterAlt(_localctx, 1);
				{
				setState(815);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
				case 1:
					{
					setState(813);
					kwAll();
					}
					break;
				case 2:
					{
					setState(814);
					kwAllPermissions();
					}
					break;
				}
				}
				break;
			case K_ALTER:
				enterOuterAlt(_localctx, 2);
				{
				setState(817);
				kwAlter();
				}
				break;
			case K_AUTHORIZE:
				enterOuterAlt(_localctx, 3);
				{
				setState(818);
				kwAuthorize();
				}
				break;
			case K_DESCRIBE:
				enterOuterAlt(_localctx, 4);
				{
				setState(819);
				kwDescibe();
				}
				break;
			case K_EXECUTE:
				enterOuterAlt(_localctx, 5);
				{
				setState(820);
				kwExecute();
				}
				break;
			case K_CREATE:
				enterOuterAlt(_localctx, 6);
				{
				setState(821);
				kwCreate();
				}
				break;
			case K_DROP:
				enterOuterAlt(_localctx, 7);
				{
				setState(822);
				kwDrop();
				}
				break;
			case K_MODIFY:
				enterOuterAlt(_localctx, 8);
				{
				setState(823);
				kwModify();
				}
				break;
			case K_SELECT:
				enterOuterAlt(_localctx, 9);
				{
				setState(824);
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
			setState(853);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(827);
				kwAllFunctions();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(828);
				kwAllFunctions();
				setState(829);
				kwIn();
				setState(830);
				kwKeyspace();
				setState(831);
				keyspace();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(833);
				kwFunction();
				setState(837);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
				case 1:
					{
					setState(834);
					keyspace();
					setState(835);
					match(DOT);
					}
					break;
				}
				setState(839);
				function();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(841);
				kwAllKeyspaces();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(842);
				kwKeyspace();
				setState(843);
				keyspace();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(846);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_TABLE) {
					{
					setState(845);
					kwTable();
					}
				}

				setState(848);
				tableSpec();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(849);
				kwAllRoles();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(850);
				kwRole();
				setState(851);
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
			setState(855);
			kwCreate();
			setState(856);
			kwUser();
			setState(858);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(857);
				ifNotExist();
				}
			}

			setState(860);
			user();
			setState(861);
			kwWith();
			setState(862);
			kwPassword();
			setState(863);
			constantString();
			setState(866);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_SUPERUSER:
				{
				setState(864);
				kwSuperuser();
				}
				break;
			case K_NOSUPERUSER:
				{
				setState(865);
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
			setState(868);
			kwCreate();
			setState(869);
			kwRole();
			setState(871);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(870);
				ifNotExist();
				}
			}

			setState(873);
			role();
			setState(875);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(874);
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
			setState(877);
			kwCreate();
			setState(878);
			kwType();
			setState(880);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(879);
				ifNotExist();
				}
			}

			setState(882);
			objectUnknownSpec();
			setState(883);
			syntaxBracketLr();
			setState(884);
			typeMemberColumnList();
			setState(885);
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
		public List<ColumnSpecContext> columnSpec() {
			return getRuleContexts(ColumnSpecContext.class);
		}
		public ColumnSpecContext columnSpec(int i) {
			return getRuleContext(ColumnSpecContext.class,i);
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
			setState(887);
			columnSpec();
			setState(888);
			dataType();
			setState(895);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(889);
				syntaxComma();
				setState(890);
				columnSpec();
				setState(891);
				dataType();
				}
				}
				setState(897);
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
			setState(898);
			kwCreate();
			setState(899);
			kwTrigger();
			setState(901);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(900);
				ifNotExist();
				}
			}

			setState(903);
			objectUnknownSpec();
			setState(904);
			kwUsing();
			setState(905);
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
		public KwMaterializedViewContext kwMaterializedView() {
			return getRuleContext(KwMaterializedViewContext.class,0);
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
		public BaseColumnListContext baseColumnList() {
			return getRuleContext(BaseColumnListContext.class,0);
		}
		public KwFromContext kwFrom() {
			return getRuleContext(KwFromContext.class,0);
		}
		public BaseTableSpecContext baseTableSpec() {
			return getRuleContext(BaseTableSpecContext.class,0);
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
			setState(907);
			kwCreate();
			setState(908);
			kwMaterializedView();
			setState(910);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(909);
				ifNotExist();
				}
			}

			setState(912);
			objectUnknownSpec();
			setState(913);
			kwAs();
			setState(914);
			kwSelect();
			setState(915);
			baseColumnList();
			setState(916);
			kwFrom();
			setState(917);
			baseTableSpec();
			setState(918);
			materializedViewWhere();
			setState(919);
			primaryKeyElement();
			setState(923);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(920);
				kwWith();
				setState(921);
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
			setState(925);
			kwWhere();
			setState(926);
			columnNotNullList();
			setState(930);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_AND) {
				{
				setState(927);
				kwAnd();
				setState(928);
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
			setState(932);
			columnNotNull();
			setState(938);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(933);
					kwAnd();
					setState(934);
					columnNotNull();
					}
					} 
				}
				setState(940);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
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
			setState(941);
			columnSpec();
			setState(942);
			kwIs();
			setState(943);
			kwNot();
			setState(944);
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
			setState(956);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(946);
				tableOptions();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(947);
				tableOptions();
				setState(948);
				kwAnd();
				setState(949);
				clusteringOrder();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(951);
				clusteringOrder();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(952);
				clusteringOrder();
				setState(953);
				kwAnd();
				setState(954);
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
			setState(958);
			kwCreate();
			setState(959);
			kwKeyspace();
			setState(961);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(960);
				ifNotExist();
				}
			}

			setState(963);
			objectUnknown();
			setState(964);
			kwWith();
			setState(965);
			kwReplication();
			setState(966);
			match(OPERATOR_EQ);
			setState(967);
			syntaxBracketLc();
			setState(968);
			replicationList();
			setState(969);
			syntaxBracketRc();
			setState(973);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_AND) {
				{
				setState(970);
				kwAnd();
				setState(971);
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
			setState(975);
			kwCreate();
			setState(977);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OR) {
				{
				setState(976);
				orReplace();
				}
			}

			setState(979);
			kwFunction();
			setState(981);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(980);
				ifNotExist();
				}
			}

			setState(983);
			objectUnknownSpec();
			setState(984);
			syntaxBracketLr();
			setState(986);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OBJECT_NAME) {
				{
				setState(985);
				paramList();
				}
			}

			setState(988);
			syntaxBracketRr();
			setState(989);
			returnMode();
			setState(990);
			kwReturns();
			setState(991);
			dataType();
			setState(992);
			kwLanguage();
			setState(993);
			language();
			setState(994);
			kwAs();
			setState(995);
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
			setState(997);
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
			setState(999);
			param();
			setState(1005);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1000);
				syntaxComma();
				setState(1001);
				param();
				}
				}
				setState(1007);
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
			setState(1012);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_CALLED:
				{
				setState(1008);
				kwCalled();
				}
				break;
			case K_RETURNS:
				{
				setState(1009);
				kwReturns();
				setState(1010);
				kwNull();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1014);
			kwOn();
			setState(1015);
			kwNull();
			setState(1016);
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
			setState(1018);
			kwCreate();
			setState(1020);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_OR) {
				{
				setState(1019);
				orReplace();
				}
			}

			setState(1022);
			kwAggregate();
			setState(1024);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1023);
				ifNotExist();
				}
			}

			setState(1026);
			objectUnknownSpec();
			setState(1027);
			syntaxBracketLr();
			setState(1028);
			dataType();
			setState(1029);
			syntaxBracketRr();
			setState(1030);
			kwSfunc();
			setState(1031);
			function();
			setState(1032);
			kwStype();
			setState(1033);
			dataType();
			setState(1034);
			kwFinalfunc();
			setState(1035);
			function();
			setState(1036);
			kwInitcond();
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
			setState(1043);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1039);
				constant();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1040);
				initCondList();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1041);
				initCondListNested();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1042);
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
			setState(1045);
			syntaxBracketLc();
			setState(1046);
			initCondHashItem();
			setState(1052);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1047);
				syntaxComma();
				setState(1048);
				initCondHashItem();
				}
				}
				setState(1054);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1055);
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
			setState(1057);
			hashKey();
			setState(1058);
			match(COLON);
			setState(1059);
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
			setState(1061);
			syntaxBracketLr();
			setState(1062);
			initCondList();
			setState(1069);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LR_BRACKET || _la==COMMA) {
				{
				setState(1067);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case COMMA:
					{
					setState(1063);
					syntaxComma();
					setState(1064);
					constant();
					}
					break;
				case LR_BRACKET:
					{
					setState(1066);
					initCondList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(1071);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1072);
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
			setState(1074);
			syntaxBracketLr();
			setState(1075);
			constant();
			setState(1081);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1076);
				syntaxComma();
				setState(1077);
				constant();
				}
				}
				setState(1083);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1084);
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
			setState(1086);
			kwOr();
			setState(1087);
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
			setState(1089);
			kwAlter();
			setState(1090);
			kwUser();
			setState(1091);
			user();
			setState(1092);
			kwWith();
			setState(1093);
			userPassword();
			setState(1095);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_NOSUPERUSER || _la==K_SUPERUSER) {
				{
				setState(1094);
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
			setState(1097);
			kwPassword();
			setState(1098);
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
			setState(1102);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_SUPERUSER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1100);
				kwSuperuser();
				}
				break;
			case K_NOSUPERUSER:
				enterOuterAlt(_localctx, 2);
				{
				setState(1101);
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
		public TypeSpecContext typeSpec() {
			return getRuleContext(TypeSpecContext.class,0);
		}
		public AlterTypeOperationContext alterTypeOperation() {
			return getRuleContext(AlterTypeOperationContext.class,0);
		}
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
			setState(1104);
			kwAlter();
			setState(1105);
			kwType();
			setState(1106);
			typeSpec();
			setState(1107);
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
			setState(1110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ALTER) {
				{
				setState(1109);
				alterTypeAlterType();
				}
			}

			setState(1113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ADD) {
				{
				setState(1112);
				alterTypeAdd();
				}
			}

			setState(1116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_RENAME) {
				{
				setState(1115);
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
			setState(1118);
			kwRename();
			setState(1119);
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
			setState(1121);
			alterTypeRenameItem();
			setState(1127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(1122);
				kwAnd();
				setState(1123);
				alterTypeRenameItem();
				}
				}
				setState(1129);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
		}
		public KwToContext kwTo() {
			return getRuleContext(KwToContext.class,0);
		}
		public ColumnUnknownSpecContext columnUnknownSpec() {
			return getRuleContext(ColumnUnknownSpecContext.class,0);
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
			setState(1130);
			columnSpec();
			setState(1131);
			kwTo();
			setState(1132);
			columnUnknownSpec();
			}
		}
		catch (RecognitionException re) {
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
		public List<ColumnUnknownSpecContext> columnUnknownSpec() {
			return getRuleContexts(ColumnUnknownSpecContext.class);
		}
		public ColumnUnknownSpecContext columnUnknownSpec(int i) {
			return getRuleContext(ColumnUnknownSpecContext.class,i);
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
			setState(1134);
			kwAdd();
			setState(1135);
			columnUnknownSpec();
			setState(1136);
			dataType();
			setState(1143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1137);
				syntaxComma();
				setState(1138);
				columnUnknownSpec();
				setState(1139);
				dataType();
				}
				}
				setState(1145);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
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
			setState(1146);
			kwAlter();
			setState(1147);
			columnSpec();
			setState(1148);
			kwType();
			setState(1149);
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
			setState(1151);
			kwAlter();
			setState(1152);
			kwTable();
			setState(1153);
			tableSpec();
			setState(1154);
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
			setState(1163);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1156);
				alterTableAdd();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1157);
				alterTableDropColumns();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1158);
				alterTableDropColumns();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1159);
				alterTableDropCompactStorage();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1160);
				alterTableRename();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1161);
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
			setState(1165);
			kwWith();
			setState(1166);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
		}
		public KwToContext kwTo() {
			return getRuleContext(KwToContext.class,0);
		}
		public ColumnUnknownSpecContext columnUnknownSpec() {
			return getRuleContext(ColumnUnknownSpecContext.class,0);
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
			setState(1168);
			kwRename();
			setState(1169);
			columnSpec();
			setState(1170);
			kwTo();
			setState(1171);
			columnUnknownSpec();
			}
		}
		catch (RecognitionException re) {
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
			setState(1173);
			kwDrop();
			setState(1174);
			kwCompact();
			setState(1175);
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
			setState(1177);
			kwDrop();
			setState(1178);
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
		public List<ColumnSpecContext> columnSpec() {
			return getRuleContexts(ColumnSpecContext.class);
		}
		public ColumnSpecContext columnSpec(int i) {
			return getRuleContext(ColumnSpecContext.class,i);
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
			setState(1180);
			columnSpec();
			setState(1186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1181);
				syntaxComma();
				setState(1182);
				columnSpec();
				}
				}
				setState(1188);
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
			setState(1189);
			kwAdd();
			setState(1190);
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
		public List<ColumnUnknownSpecContext> columnUnknownSpec() {
			return getRuleContexts(ColumnUnknownSpecContext.class);
		}
		public ColumnUnknownSpecContext columnUnknownSpec(int i) {
			return getRuleContext(ColumnUnknownSpecContext.class,i);
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
			setState(1192);
			columnUnknownSpec();
			setState(1193);
			dataType();
			setState(1200);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1194);
				syntaxComma();
				setState(1195);
				columnUnknownSpec();
				setState(1196);
				dataType();
				}
				}
				setState(1202);
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
			setState(1203);
			kwAlter();
			setState(1204);
			kwRole();
			setState(1205);
			role();
			setState(1207);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(1206);
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
			setState(1209);
			kwWith();
			{
			setState(1210);
			roleWithOptions();
			setState(1216);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(1211);
				kwAnd();
				setState(1212);
				roleWithOptions();
				}
				}
				setState(1218);
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
			setState(1235);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_PASSWORD:
				enterOuterAlt(_localctx, 1);
				{
				setState(1219);
				kwPassword();
				setState(1220);
				match(OPERATOR_EQ);
				setState(1221);
				constantString();
				}
				break;
			case K_LOGIN:
				enterOuterAlt(_localctx, 2);
				{
				setState(1223);
				kwLogin();
				setState(1224);
				match(OPERATOR_EQ);
				setState(1225);
				constantBoolean();
				}
				break;
			case K_SUPERUSER:
				enterOuterAlt(_localctx, 3);
				{
				setState(1227);
				kwSuperuser();
				setState(1228);
				match(OPERATOR_EQ);
				setState(1229);
				constantBoolean();
				}
				break;
			case K_OPTIONS:
				enterOuterAlt(_localctx, 4);
				{
				setState(1231);
				kwOptions();
				setState(1232);
				match(OPERATOR_EQ);
				setState(1233);
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
		public KwMaterializedViewContext kwMaterializedView() {
			return getRuleContext(KwMaterializedViewContext.class,0);
		}
		public MaterializedViewSpecContext materializedViewSpec() {
			return getRuleContext(MaterializedViewSpecContext.class,0);
		}
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
			setState(1237);
			kwAlter();
			setState(1238);
			kwMaterializedView();
			setState(1239);
			materializedViewSpec();
			setState(1243);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(1240);
				kwWith();
				setState(1241);
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
			setState(1245);
			kwDrop();
			setState(1246);
			kwUser();
			setState(1248);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1247);
				ifExist();
				}
			}

			setState(1250);
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
		public TypeSpecContext typeSpec() {
			return getRuleContext(TypeSpecContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
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
			setState(1252);
			kwDrop();
			setState(1253);
			kwType();
			setState(1255);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1254);
				ifExist();
				}
			}

			setState(1257);
			typeSpec();
			}
		}
		catch (RecognitionException re) {
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
		public KwMaterializedViewContext kwMaterializedView() {
			return getRuleContext(KwMaterializedViewContext.class,0);
		}
		public MaterializedViewSpecContext materializedViewSpec() {
			return getRuleContext(MaterializedViewSpecContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
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
			kwMaterializedView();
			setState(1262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1261);
				ifExist();
				}
			}

			setState(1264);
			materializedViewSpec();
			}
		}
		catch (RecognitionException re) {
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
		public AggregateSpecContext aggregateSpec() {
			return getRuleContext(AggregateSpecContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
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

			setState(1271);
			aggregateSpec();
			}
		}
		catch (RecognitionException re) {
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
		public FunctionSpecContext functionSpec() {
			return getRuleContext(FunctionSpecContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
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
			setState(1273);
			kwDrop();
			setState(1274);
			kwFunction();
			setState(1276);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1275);
				ifExist();
				}
			}

			setState(1278);
			functionSpec();
			}
		}
		catch (RecognitionException re) {
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
			setState(1280);
			kwDrop();
			setState(1281);
			kwTrigger();
			setState(1283);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1282);
				ifExist();
				}
			}

			setState(1285);
			trigger();
			setState(1286);
			kwOn();
			setState(1287);
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
			setState(1289);
			kwDrop();
			setState(1290);
			kwRole();
			setState(1292);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1291);
				ifExist();
				}
			}

			setState(1294);
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
			setState(1296);
			kwDrop();
			setState(1297);
			kwTable();
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
			setState(1303);
			kwDrop();
			setState(1304);
			kwKeyspace();
			setState(1306);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1305);
				ifExist();
				}
			}

			setState(1308);
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
		public IndexSpecContext indexSpec() {
			return getRuleContext(IndexSpecContext.class,0);
		}
		public IfExistContext ifExist() {
			return getRuleContext(IfExistContext.class,0);
		}
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
			setState(1310);
			kwDrop();
			setState(1311);
			kwIndex();
			setState(1313);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1312);
				ifExist();
				}
			}

			setState(1315);
			indexSpec();
			}
		}
		catch (RecognitionException re) {
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
			setState(1317);
			kwCreate();
			setState(1318);
			kwTable();
			setState(1320);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1319);
				ifNotExist();
				}
			}

			setState(1322);
			objectUnknownSpec();
			setState(1323);
			createTableDef();
			setState(1325);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WITH) {
				{
				setState(1324);
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
			setState(1332);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(1327);
				syntaxBracketLr();
				setState(1328);
				columnDefinitionList();
				setState(1329);
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
			setState(1350);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1334);
				kwWith();
				setState(1335);
				tableOptions();
				setState(1339);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AND) {
					{
					setState(1336);
					kwAnd();
					setState(1337);
					clusteringOrder();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1341);
				kwWith();
				setState(1343);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_CLUSTERING) {
					{
					setState(1342);
					clusteringOrder();
					}
				}

				setState(1348);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AND) {
					{
					setState(1345);
					kwAnd();
					setState(1346);
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
			setState(1352);
			kwClustering();
			setState(1353);
			kwOrder();
			setState(1354);
			kwBy();
			setState(1355);
			syntaxBracketLr();
			setState(1356);
			clusteringOrderItem();
			setState(1362);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1357);
				syntaxComma();
				setState(1358);
				clusteringOrderItem();
				}
				}
				setState(1364);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1365);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
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
			setState(1367);
			columnSpec();
			setState(1369);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ASC || _la==K_DESC) {
				{
				setState(1368);
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
			setState(1371);
			tableOptionItem();
			setState(1377);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,77,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1372);
					kwAnd();
					setState(1373);
					tableOptionItem();
					}
					} 
				}
				setState(1379);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,77,_ctx);
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
			setState(1388);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1380);
				tableOptionName();
				setState(1381);
				match(OPERATOR_EQ);
				setState(1382);
				tableOptionValue();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1384);
				tableOptionName();
				setState(1385);
				match(OPERATOR_EQ);
				setState(1386);
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
			setState(1390);
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
			setState(1394);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1392);
				constantString();
				}
				break;
			case DECIMAL_LITERAL:
			case FLOAT_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1393);
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
			setState(1396);
			syntaxBracketLc();
			setState(1397);
			optionHashItem();
			setState(1403);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1398);
				syntaxComma();
				setState(1399);
				optionHashItem();
				}
				}
				setState(1405);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1406);
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
			setState(1408);
			optionHashKey();
			setState(1409);
			match(COLON);
			setState(1410);
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
			setState(1412);
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
			setState(1416);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1414);
				constantString();
				}
				break;
			case DECIMAL_LITERAL:
			case FLOAT_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1415);
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
			setState(1418);
			columnDefinition();
			setState(1424);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,82,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1419);
					syntaxComma();
					setState(1420);
					columnDefinition();
					}
					} 
				}
				setState(1426);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,82,_ctx);
			}
			setState(1430);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(1427);
				syntaxComma();
				setState(1428);
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
			setState(1444);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1432);
				columnUnknown();
				setState(1433);
				dataType();
				setState(1434);
				primaryKeyModifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1436);
				columnUnknown();
				setState(1437);
				dataType();
				setState(1438);
				kwStatic();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1440);
				columnUnknown();
				setState(1441);
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
			setState(1452);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1446);
				kwPrimary();
				setState(1447);
				kwKey();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1449);
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
			setState(1454);
			kwPrimary();
			setState(1455);
			kwKey();
			setState(1456);
			syntaxBracketLr();
			setState(1457);
			primaryKeyDefinition();
			setState(1458);
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
		public PrimaryKeySimpleContext primaryKeySimple() {
			return getRuleContext(PrimaryKeySimpleContext.class,0);
		}
		public PrimaryKeyCompositeContext primaryKeyComposite() {
			return getRuleContext(PrimaryKeyCompositeContext.class,0);
		}
		public CompoundKeyContext compoundKey() {
			return getRuleContext(CompoundKeyContext.class,0);
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
			setState(1463);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,86,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1460);
				primaryKeySimple();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1461);
				primaryKeyComposite();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1462);
				compoundKey();
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

	public static class PrimaryKeySimpleContext extends ParserRuleContext {
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
		}
		public PrimaryKeySimpleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryKeySimple; }
	}

	public final PrimaryKeySimpleContext primaryKeySimple() throws RecognitionException {
		PrimaryKeySimpleContext _localctx = new PrimaryKeySimpleContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_primaryKeySimple);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1465);
			columnSpec();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryKeyCompositeContext extends ParserRuleContext {
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public PartitionKeyListContext partitionKeyList() {
			return getRuleContext(PartitionKeyListContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public PrimaryKeyCompositeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryKeyComposite; }
	}

	public final PrimaryKeyCompositeContext primaryKeyComposite() throws RecognitionException {
		PrimaryKeyCompositeContext _localctx = new PrimaryKeyCompositeContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_primaryKeyComposite);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1467);
			syntaxBracketLr();
			setState(1468);
			partitionKeyList();
			setState(1469);
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

	public static class CompoundKeyContext extends ParserRuleContext {
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
		}
		public SyntaxCommaContext syntaxComma() {
			return getRuleContext(SyntaxCommaContext.class,0);
		}
		public ClusteringKeyListContext clusteringKeyList() {
			return getRuleContext(ClusteringKeyListContext.class,0);
		}
		public SyntaxBracketLrContext syntaxBracketLr() {
			return getRuleContext(SyntaxBracketLrContext.class,0);
		}
		public PartitionKeyListContext partitionKeyList() {
			return getRuleContext(PartitionKeyListContext.class,0);
		}
		public SyntaxBracketRrContext syntaxBracketRr() {
			return getRuleContext(SyntaxBracketRrContext.class,0);
		}
		public CompoundKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundKey; }
	}

	public final CompoundKeyContext compoundKey() throws RecognitionException {
		CompoundKeyContext _localctx = new CompoundKeyContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_compoundKey);
		try {
			setState(1481);
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
			case K_TTL:
			case K_TYPE:
			case K_ROLES:
			case K_ROLE:
			case OBJECT_NAME:
			case K_USERS:
			case K_USER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1471);
				columnSpec();
				{
				setState(1472);
				syntaxComma();
				setState(1473);
				clusteringKeyList();
				}
				}
				break;
			case LR_BRACKET:
				enterOuterAlt(_localctx, 2);
				{
				setState(1475);
				syntaxBracketLr();
				setState(1476);
				partitionKeyList();
				setState(1477);
				syntaxBracketRr();
				{
				setState(1478);
				syntaxComma();
				setState(1479);
				clusteringKeyList();
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

	public static class PartitionKeyListContext extends ParserRuleContext {
		public List<ColumnSpecContext> columnSpec() {
			return getRuleContexts(ColumnSpecContext.class);
		}
		public ColumnSpecContext columnSpec(int i) {
			return getRuleContext(ColumnSpecContext.class,i);
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
			setState(1483);
			columnSpec();
			}
			setState(1489);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1484);
				syntaxComma();
				setState(1485);
				columnSpec();
				}
				}
				setState(1491);
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
		public List<ColumnSpecContext> columnSpec() {
			return getRuleContexts(ColumnSpecContext.class);
		}
		public ColumnSpecContext columnSpec(int i) {
			return getRuleContext(ColumnSpecContext.class,i);
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
			setState(1492);
			columnSpec();
			}
			setState(1498);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1493);
				syntaxComma();
				setState(1494);
				columnSpec();
				}
				}
				setState(1500);
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
			setState(1501);
			kwApply();
			setState(1502);
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
		enterRule(_localctx, 182, RULE_beginBatch);
		try {
			setState(1513);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1504);
				beginBatchSpec();
				setState(1505);
				delete();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1507);
				beginBatchSpec();
				setState(1508);
				insert();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1510);
				beginBatchSpec();
				setState(1511);
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
		enterRule(_localctx, 184, RULE_beginBatchSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1515);
			kwBegin();
			setState(1517);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_LOGGED || _la==K_UNLOGGED) {
				{
				setState(1516);
				batchType();
				}
			}

			setState(1519);
			kwBatch();
			setState(1521);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1520);
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
		enterRule(_localctx, 186, RULE_batchType);
		try {
			setState(1525);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_LOGGED:
				enterOuterAlt(_localctx, 1);
				{
				setState(1523);
				kwLogged();
				}
				break;
			case K_UNLOGGED:
				enterOuterAlt(_localctx, 2);
				{
				setState(1524);
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
		enterRule(_localctx, 188, RULE_alterKeyspace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1527);
			kwAlter();
			setState(1528);
			kwKeyspace();
			setState(1529);
			keyspace();
			setState(1530);
			kwWith();
			setState(1531);
			kwReplication();
			setState(1532);
			match(OPERATOR_EQ);
			setState(1533);
			syntaxBracketLc();
			setState(1534);
			replicationList();
			setState(1535);
			syntaxBracketRc();
			setState(1539);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_AND) {
				{
				setState(1536);
				kwAnd();
				setState(1537);
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
		enterRule(_localctx, 190, RULE_replicationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1541);
			replicationListItem();
			setState(1547);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1542);
				syntaxComma();
				setState(1543);
				replicationListItem();
				}
				}
				setState(1549);
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
		enterRule(_localctx, 192, RULE_replicationListItem);
		try {
			setState(1556);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,96,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1550);
				match(STRING_LITERAL);
				setState(1551);
				match(COLON);
				setState(1552);
				match(STRING_LITERAL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1553);
				match(STRING_LITERAL);
				setState(1554);
				match(COLON);
				setState(1555);
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
		enterRule(_localctx, 194, RULE_durableWrites);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1558);
			kwDurableWrites();
			setState(1559);
			match(OPERATOR_EQ);
			setState(1560);
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
		enterRule(_localctx, 196, RULE_use);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1562);
			kwUse();
			setState(1563);
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
		enterRule(_localctx, 198, RULE_truncate);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1565);
			kwTruncate();
			setState(1567);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_TABLE) {
				{
				setState(1566);
				kwTable();
				}
			}

			setState(1569);
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
		public ObjectUnknownContext objectUnknown() {
			return getRuleContext(ObjectUnknownContext.class,0);
		}
		public CreateIndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createIndex; }
	}

	public final CreateIndexContext createIndex() throws RecognitionException {
		CreateIndexContext _localctx = new CreateIndexContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_createIndex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1571);
			kwCreate();
			setState(1572);
			kwIndex();
			setState(1574);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_IF) {
				{
				setState(1573);
				ifNotExist();
				}
			}

			setState(1577);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DQUOTE || _la==K_DURABLE_WRITES || ((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & ((1L << (K_INITCOND - 69)) | (1L << (K_KEY - 69)) | (1L << (K_LANGUAGE - 69)) | (1L << (K_LEVEL - 69)) | (1L << (K_OPTIONS - 69)) | (1L << (K_PARTITION - 69)) | (1L << (K_PERMISSIONS - 69)) | (1L << (K_REPLICATION - 69)) | (1L << (K_TTL - 69)) | (1L << (K_TYPE - 69)))) != 0) || ((((_la - 150)) & ~0x3f) == 0 && ((1L << (_la - 150)) & ((1L << (K_ROLES - 150)) | (1L << (K_ROLE - 150)) | (1L << (OBJECT_NAME - 150)) | (1L << (K_USERS - 150)) | (1L << (K_USER - 150)))) != 0)) {
				{
				setState(1576);
				objectUnknown();
				}
			}

			setState(1579);
			createIndexSubject();
			setState(1580);
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
		enterRule(_localctx, 202, RULE_createIndexSubject);
		try {
			setState(1586);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ON:
				enterOuterAlt(_localctx, 1);
				{
				setState(1582);
				kwOn();
				setState(1583);
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

	public static class IndexContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public ConstantStringContext constantString() {
			return getRuleContext(ConstantStringContext.class,0);
		}
		public IndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_index; }
	}

	public final IndexContext index() throws RecognitionException {
		IndexContext _localctx = new IndexContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_index);
		try {
			setState(1590);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(1588);
				match(OBJECT_NAME);
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1589);
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
		enterRule(_localctx, 206, RULE_createIndexDef);
		try {
			setState(1597);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(1592);
				syntaxBracketLr();
				setState(1593);
				createIndexTarget();
				setState(1594);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
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
		enterRule(_localctx, 208, RULE_createIndexTarget);
		try {
			setState(1604);
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
			case K_TTL:
			case K_TYPE:
			case K_ROLES:
			case K_ROLE:
			case OBJECT_NAME:
			case K_USERS:
			case K_USER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1599);
				columnSpec();
				}
				break;
			case K_KEYS:
				enterOuterAlt(_localctx, 2);
				{
				setState(1600);
				indexKeysSpec();
				}
				break;
			case K_ENTRIES:
				enterOuterAlt(_localctx, 3);
				{
				setState(1601);
				indexEntriesSSpec();
				}
				break;
			case K_FULL:
				enterOuterAlt(_localctx, 4);
				{
				setState(1602);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
		}
		public IndexKeysSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexKeysSpec; }
	}

	public final IndexKeysSpecContext indexKeysSpec() throws RecognitionException {
		IndexKeysSpecContext _localctx = new IndexKeysSpecContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_indexKeysSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1606);
			kwKeys();
			setState(1607);
			syntaxBracketLr();
			setState(1610);
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
			case K_TTL:
			case K_TYPE:
			case K_ROLES:
			case K_ROLE:
			case OBJECT_NAME:
			case K_USERS:
			case K_USER:
				{
				setState(1608);
				columnSpec();
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
			setState(1612);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
		}
		public IndexEntriesSSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexEntriesSSpec; }
	}

	public final IndexEntriesSSpecContext indexEntriesSSpec() throws RecognitionException {
		IndexEntriesSSpecContext _localctx = new IndexEntriesSSpecContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_indexEntriesSSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1614);
			kwEntries();
			setState(1615);
			syntaxBracketLr();
			setState(1618);
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
			case K_TTL:
			case K_TYPE:
			case K_ROLES:
			case K_ROLE:
			case OBJECT_NAME:
			case K_USERS:
			case K_USER:
				{
				setState(1616);
				columnSpec();
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
			setState(1620);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
		}
		public IndexFullSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexFullSpec; }
	}

	public final IndexFullSpecContext indexFullSpec() throws RecognitionException {
		IndexFullSpecContext _localctx = new IndexFullSpecContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_indexFullSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1622);
			kwFull();
			setState(1623);
			syntaxBracketLr();
			setState(1626);
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
			case K_TTL:
			case K_TYPE:
			case K_ROLES:
			case K_ROLE:
			case OBJECT_NAME:
			case K_USERS:
			case K_USER:
				{
				setState(1624);
				columnSpec();
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
			setState(1628);
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
		enterRule(_localctx, 216, RULE_delete);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1630);
			kwDelete();
			setState(1632);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DQUOTE || _la==K_DURABLE_WRITES || ((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & ((1L << (K_INITCOND - 69)) | (1L << (K_KEY - 69)) | (1L << (K_LANGUAGE - 69)) | (1L << (K_LEVEL - 69)) | (1L << (K_OPTIONS - 69)) | (1L << (K_PARTITION - 69)) | (1L << (K_PERMISSIONS - 69)) | (1L << (K_REPLICATION - 69)) | (1L << (K_TTL - 69)) | (1L << (K_TYPE - 69)))) != 0) || ((((_la - 150)) & ~0x3f) == 0 && ((1L << (_la - 150)) & ((1L << (K_ROLES - 150)) | (1L << (K_ROLE - 150)) | (1L << (OBJECT_NAME - 150)) | (1L << (K_USERS - 150)) | (1L << (K_USER - 150)))) != 0)) {
				{
				setState(1631);
				deleteColumnList();
				}
			}

			setState(1634);
			fromSpec();
			setState(1636);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1635);
				usingTimestampSpec();
				}
			}

			setState(1640);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_WHERE:
				{
				setState(1638);
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
			setState(1644);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,110,_ctx) ) {
			case 1:
				{
				setState(1642);
				ifExist();
				}
				break;
			case 2:
				{
				setState(1643);
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
		enterRule(_localctx, 218, RULE_deleteColumnList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1646);
			deleteColumnItem();
			}
			setState(1652);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1647);
				syntaxComma();
				setState(1648);
				deleteColumnItem();
				}
				}
				setState(1654);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
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
		enterRule(_localctx, 220, RULE_deleteColumnItem);
		try {
			setState(1664);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,113,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1655);
				columnSpec();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1656);
				columnSpec();
				setState(1657);
				syntaxBracketLs();
				setState(1660);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case STRING_LITERAL:
					{
					setState(1658);
					constantString();
					}
					break;
				case DECIMAL_LITERAL:
					{
					setState(1659);
					constantDecimal();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1662);
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
		public TableOrMaterializedViewSpecContext tableOrMaterializedViewSpec() {
			return getRuleContext(TableOrMaterializedViewSpecContext.class,0);
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
		enterRule(_localctx, 222, RULE_update);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1666);
			kwUpdate();
			setState(1667);
			tableOrMaterializedViewSpec();
			setState(1669);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1668);
				usingTtlTimestamp();
				}
			}

			setState(1671);
			updateAssignments();
			setState(1674);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_WHERE:
				{
				setState(1672);
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
			setState(1678);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,116,_ctx) ) {
			case 1:
				{
				setState(1676);
				ifExist();
				}
				break;
			case 2:
				{
				setState(1677);
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
		enterRule(_localctx, 224, RULE_ifSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1680);
			kwIf();
			setState(1681);
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
		enterRule(_localctx, 226, RULE_ifConditionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1683);
			ifCondition();
			}
			setState(1689);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(1684);
				kwAnd();
				setState(1685);
				ifCondition();
				}
				}
				setState(1691);
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
		enterRule(_localctx, 228, RULE_ifCondition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1692);
			match(OBJECT_NAME);
			setState(1693);
			match(OPERATOR_EQ);
			setState(1694);
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
		enterRule(_localctx, 230, RULE_updateAssignments);
		int _la;
		try {
			setState(1707);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_SET:
				enterOuterAlt(_localctx, 1);
				{
				setState(1696);
				kwSet();
				{
				setState(1697);
				updateAssignmentElement();
				}
				setState(1703);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1698);
					syntaxComma();
					setState(1699);
					updateAssignmentElement();
					}
					}
					setState(1705);
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
		public List<ColumnSpecContext> columnSpec() {
			return getRuleContexts(ColumnSpecContext.class);
		}
		public ColumnSpecContext columnSpec(int i) {
			return getRuleContext(ColumnSpecContext.class,i);
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
		enterRule(_localctx, 232, RULE_updateAssignmentElement);
		try {
			setState(1786);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,128,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1709);
				columnSpec();
				setState(1710);
				syntaxOperatorEq();
				setState(1713);
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
					setState(1711);
					constant();
					}
					break;
				case LR_BRACKET:
				case LC_BRACKET:
				case LS_BRACKET:
					{
					setState(1712);
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
				setState(1715);
				columnSpec();
				setState(1716);
				syntaxOperatorEq();
				setState(1717);
				columnSpec();
				setState(1720);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1718);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1719);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1722);
				constantDecimal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1724);
				columnSpec();
				setState(1725);
				syntaxOperatorEq();
				setState(1726);
				columnSpec();
				setState(1729);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1727);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1728);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1731);
				assignmentMap();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1733);
				columnSpec();
				setState(1734);
				syntaxOperatorEq();
				setState(1735);
				columnSpec();
				setState(1738);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1736);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1737);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1740);
				assignmentSet();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1742);
				columnSpec();
				setState(1743);
				syntaxOperatorEq();
				setState(1744);
				columnSpec();
				setState(1747);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1745);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1746);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1749);
				assignmentList();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1751);
				columnSpec();
				setState(1752);
				syntaxOperatorEq();
				setState(1753);
				assignmentSet();
				setState(1756);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1754);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1755);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1758);
				match(OBJECT_NAME);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1760);
				columnSpec();
				setState(1761);
				syntaxOperatorEq();
				setState(1762);
				assignmentMap();
				setState(1765);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1763);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1764);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1767);
				match(OBJECT_NAME);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1769);
				columnSpec();
				setState(1770);
				syntaxOperatorEq();
				setState(1771);
				assignmentList();
				setState(1774);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS:
					{
					setState(1772);
					syntaxPlus();
					}
					break;
				case MINUS:
					{
					setState(1773);
					syntaxMinus();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1776);
				match(OBJECT_NAME);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1778);
				columnSpec();
				setState(1779);
				syntaxBracketLs();
				setState(1780);
				constantDecimal();
				setState(1781);
				syntaxBracketRs();
				setState(1782);
				syntaxOperatorEq();
				setState(1783);
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
		enterRule(_localctx, 234, RULE_assignmentSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1788);
			syntaxBracketLc();
			setState(1789);
			constant();
			setState(1795);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1790);
				syntaxComma();
				setState(1791);
				constant();
				}
				}
				setState(1797);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1798);
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
		enterRule(_localctx, 236, RULE_assignmentMap);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1800);
			syntaxBracketLc();
			{
			setState(1801);
			constant();
			setState(1802);
			syntaxColon();
			setState(1803);
			constant();
			}
			setState(1811);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_FALSE || _la==K_NULL || ((((_la - 123)) & ~0x3f) == 0 && ((1L << (_la - 123)) & ((1L << (K_TRUE - 123)) | (1L << (STRING_LITERAL - 123)) | (1L << (DECIMAL_LITERAL - 123)) | (1L << (FLOAT_LITERAL - 123)) | (1L << (HEXADECIMAL_LITERAL - 123)) | (1L << (UUID - 123)))) != 0)) {
				{
				{
				setState(1805);
				constant();
				setState(1806);
				syntaxColon();
				setState(1807);
				constant();
				}
				}
				setState(1813);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1814);
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
		enterRule(_localctx, 238, RULE_assignmentList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1816);
			syntaxBracketLs();
			setState(1817);
			constant();
			setState(1823);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COLON) {
				{
				{
				setState(1818);
				syntaxColon();
				setState(1819);
				constant();
				}
				}
				setState(1825);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1826);
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
		public KwInsertIntoContext kwInsertInto() {
			return getRuleContext(KwInsertIntoContext.class,0);
		}
		public TableOrMaterializedViewSpecContext tableOrMaterializedViewSpec() {
			return getRuleContext(TableOrMaterializedViewSpecContext.class,0);
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
		enterRule(_localctx, 240, RULE_insert);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1828);
			kwInsertInto();
			setState(1829);
			tableOrMaterializedViewSpec();
			setState(1830);
			insertColumnSpec();
			setState(1831);
			insertValuesSpec();
			setState(1834);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_IF:
				{
				setState(1832);
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
			setState(1837);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_USING) {
				{
				setState(1836);
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
		enterRule(_localctx, 242, RULE_usingTtlTimestamp);
		try {
			setState(1855);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,134,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1839);
				kwUsing();
				setState(1840);
				ttl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1842);
				kwUsing();
				setState(1843);
				ttl();
				setState(1844);
				kwAnd();
				setState(1845);
				timestamp();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1847);
				kwUsing();
				setState(1848);
				timestamp();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1850);
				kwUsing();
				setState(1851);
				timestamp();
				setState(1852);
				kwAnd();
				setState(1853);
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
		enterRule(_localctx, 244, RULE_timestamp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1857);
			kwTimestamp();
			setState(1858);
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
		enterRule(_localctx, 246, RULE_ttl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1860);
			kwTtl();
			setState(1861);
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
		enterRule(_localctx, 248, RULE_usingTimestampSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1863);
			kwUsing();
			setState(1864);
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
		enterRule(_localctx, 250, RULE_ifNotExist);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1866);
			kwIf();
			setState(1867);
			kwNot();
			setState(1868);
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
		enterRule(_localctx, 252, RULE_ifExist);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1870);
			kwIf();
			setState(1871);
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
		enterRule(_localctx, 254, RULE_insertValuesSpec);
		try {
			setState(1881);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_VALUES:
				enterOuterAlt(_localctx, 1);
				{
				setState(1873);
				kwValues();
				setState(1874);
				syntaxBracketLr();
				setState(1875);
				expressionList();
				setState(1878);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case RR_BRACKET:
					{
					setState(1876);
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
		enterRule(_localctx, 256, RULE_insertColumnSpec);
		try {
			setState(1888);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(1883);
				syntaxBracketLr();
				setState(1884);
				columnList();
				setState(1885);
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
		public List<ColumnSpecContext> columnSpec() {
			return getRuleContexts(ColumnSpecContext.class);
		}
		public ColumnSpecContext columnSpec(int i) {
			return getRuleContext(ColumnSpecContext.class,i);
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
		enterRule(_localctx, 258, RULE_columnList);
		int _la;
		try {
			setState(1902);
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
			case K_TTL:
			case K_TYPE:
			case K_ROLES:
			case K_ROLE:
			case OBJECT_NAME:
			case K_USERS:
			case K_USER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1890);
				columnSpec();
				setState(1898);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1891);
					syntaxComma();
					setState(1894);
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
					case K_TTL:
					case K_TYPE:
					case K_ROLES:
					case K_ROLE:
					case OBJECT_NAME:
					case K_USERS:
					case K_USER:
						{
						setState(1892);
						columnSpec();
						}
						break;
					case RR_BRACKET:
					case COMMA:
						{
						 this.notifyErrorListeners("rule.column"); 
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					setState(1900);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case RR_BRACKET:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.columnList"); 
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

	public static class BaseColumnListContext extends ParserRuleContext {
		public List<ColumnSpecContext> columnSpec() {
			return getRuleContexts(ColumnSpecContext.class);
		}
		public ColumnSpecContext columnSpec(int i) {
			return getRuleContext(ColumnSpecContext.class,i);
		}
		public List<SyntaxCommaContext> syntaxComma() {
			return getRuleContexts(SyntaxCommaContext.class);
		}
		public SyntaxCommaContext syntaxComma(int i) {
			return getRuleContext(SyntaxCommaContext.class,i);
		}
		public BaseColumnListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_baseColumnList; }
	}

	public final BaseColumnListContext baseColumnList() throws RecognitionException {
		BaseColumnListContext _localctx = new BaseColumnListContext(_ctx, getState());
		enterRule(_localctx, 260, RULE_baseColumnList);
		int _la;
		try {
			setState(1916);
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
			case K_TTL:
			case K_TYPE:
			case K_ROLES:
			case K_ROLE:
			case OBJECT_NAME:
			case K_USERS:
			case K_USER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1904);
				columnSpec();
				setState(1912);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1905);
					syntaxComma();
					setState(1908);
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
					case K_TTL:
					case K_TYPE:
					case K_ROLES:
					case K_ROLE:
					case OBJECT_NAME:
					case K_USERS:
					case K_USER:
						{
						setState(1906);
						columnSpec();
						}
						break;
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
					setState(1914);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case K_FROM:
				enterOuterAlt(_localctx, 2);
				{
				 this.notifyErrorListeners("rule.baseColumnList"); 
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
		enterRule(_localctx, 262, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1918);
			expression();
			setState(1924);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1919);
				syntaxComma();
				setState(1920);
				expression();
				}
				}
				setState(1926);
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
		enterRule(_localctx, 264, RULE_expression);
		try {
			setState(1932);
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
				setState(1929);
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
					setState(1927);
					constant();
					}
					break;
				case LR_BRACKET:
				case LC_BRACKET:
				case LS_BRACKET:
					{
					setState(1928);
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
		enterRule(_localctx, 266, RULE_select);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1934);
			kwSelect();
			setState(1936);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_DISTINCT) {
				{
				setState(1935);
				kwDistinct();
				}
			}

			setState(1938);
			selectElements();
			setState(1939);
			fromSpec();
			setState(1941);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WHERE) {
				{
				setState(1940);
				whereSpec();
				}
			}

			setState(1944);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ORDER) {
				{
				setState(1943);
				orderSpec();
				}
			}

			setState(1947);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_LIMIT) {
				{
				setState(1946);
				limitSpec();
				}
			}

			setState(1950);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ALLOW) {
				{
				setState(1949);
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
		enterRule(_localctx, 268, RULE_limitSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1952);
			kwLimit();
			setState(1955);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DECIMAL_LITERAL:
				{
				setState(1953);
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
		public TableOrMaterializedViewSpecContext tableOrMaterializedViewSpec() {
			return getRuleContext(TableOrMaterializedViewSpecContext.class,0);
		}
		public FromSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fromSpec; }
	}

	public final FromSpecContext fromSpec() throws RecognitionException {
		FromSpecContext _localctx = new FromSpecContext(_ctx, getState());
		enterRule(_localctx, 270, RULE_fromSpec);
		try {
			setState(1961);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_FROM:
				enterOuterAlt(_localctx, 1);
				{
				setState(1957);
				kwFrom();
				setState(1958);
				tableOrMaterializedViewSpec();
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
		enterRule(_localctx, 272, RULE_orderSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1963);
			kwOrderBy();
			setState(1964);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
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
		enterRule(_localctx, 274, RULE_orderSpecElement);
		try {
			setState(1972);
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
			case K_TTL:
			case K_TYPE:
			case K_ROLES:
			case K_ROLE:
			case OBJECT_NAME:
			case K_USERS:
			case K_USER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1966);
				columnSpec();
				setState(1969);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case K_ASC:
					{
					setState(1967);
					kwAsc();
					}
					break;
				case K_DESC:
					{
					setState(1968);
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
		enterRule(_localctx, 276, RULE_whereSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1974);
			kwWhere();
			setState(1975);
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
		enterRule(_localctx, 278, RULE_selectElements);
		int _la;
		try {
			setState(1988);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,157,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1977);
				specialStar();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1978);
				selectElement();
				setState(1984);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1979);
					syntaxComma();
					setState(1980);
					selectElement();
					}
					}
					setState(1986);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
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
		enterRule(_localctx, 280, RULE_selectElement);
		int _la;
		try {
			setState(2004);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,160,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1990);
				columnSpec();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1991);
				columnSpec();
				setState(1995);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AS) {
					{
					setState(1992);
					kwAs();
					setState(1993);
					match(OBJECT_NAME);
					}
				}

				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1997);
				functionCall();
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
		enterRule(_localctx, 282, RULE_relationElements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(2006);
			relationElement();
			}
			setState(2012);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(2007);
				kwAnd();
				setState(2008);
				relationElement();
				}
				}
				setState(2014);
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
		enterRule(_localctx, 284, RULE_relationElement);
		try {
			setState(2021);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,162,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2015);
				relationElementConstant();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2016);
				relationElementIn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2017);
				relationElementToken();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2018);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
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
		enterRule(_localctx, 286, RULE_relationElementConstant);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2023);
			columnSpec();
			setState(2024);
			relationOperator();
			setState(2027);
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
				setState(2025);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
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
		enterRule(_localctx, 288, RULE_relationElementIn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2029);
			columnSpec();
			setState(2030);
			kwIn();
			setState(2031);
			syntaxBracketLr();
			setState(2033);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_FALSE || _la==K_NULL || ((((_la - 123)) & ~0x3f) == 0 && ((1L << (_la - 123)) & ((1L << (K_TRUE - 123)) | (1L << (STRING_LITERAL - 123)) | (1L << (DECIMAL_LITERAL - 123)) | (1L << (FLOAT_LITERAL - 123)) | (1L << (HEXADECIMAL_LITERAL - 123)) | (1L << (OBJECT_NAME - 123)) | (1L << (UUID - 123)))) != 0)) {
				{
				setState(2032);
				functionArgs();
				}
			}

			setState(2035);
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
		enterRule(_localctx, 290, RULE_relationElementToken);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2037);
			relationElementTokenSpec();
			setState(2040);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,165,_ctx) ) {
			case 1:
				{
				setState(2038);
				relationOperator();
				}
				break;
			case 2:
				{
				 this.notifyErrorListeners("rule.relationOperator"); 
				}
				break;
			}
			setState(2042);
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
		public ColumnSpecContext columnSpec() {
			return getRuleContext(ColumnSpecContext.class,0);
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
		enterRule(_localctx, 292, RULE_relationElementTokenSpec);
		try {
			setState(2058);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,169,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2044);
				kwToken();
				setState(2047);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LR_BRACKET:
					{
					setState(2045);
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
				case K_TOKEN:
				case K_TTL:
				case K_TYPE:
				case K_ROLES:
				case K_ROLE:
				case OBJECT_NAME:
				case OPERATOR_EQ:
				case OPERATOR_LT:
				case OPERATOR_GT:
				case OPERATOR_LTE:
				case OPERATOR_GTE:
				case K_USERS:
				case K_USER:
					{
					 this.notifyErrorListeners("rule.syntaxBracketLr"); 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2051);
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
				case K_TTL:
				case K_TYPE:
				case K_ROLES:
				case K_ROLE:
				case OBJECT_NAME:
				case K_USERS:
				case K_USER:
					{
					setState(2049);
					columnSpec();
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
				setState(2055);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case RR_BRACKET:
					{
					setState(2053);
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
		enterRule(_localctx, 294, RULE_relationOperator);
		try {
			setState(2068);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,170,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2060);
				syntaxOperatorEq();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2061);
				syntaxOperatorLt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2062);
				syntaxOperatorGt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2063);
				syntaxOperatorLte();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2064);
				syntaxOperatorGte();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2065);
				kwContains();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2066);
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
		enterRule(_localctx, 296, RULE_functionCall);
		int _la;
		try {
			setState(2080);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,172,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2070);
				match(OBJECT_NAME);
				setState(2071);
				match(LR_BRACKET);
				setState(2072);
				match(STAR);
				setState(2073);
				match(RR_BRACKET);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2074);
				match(OBJECT_NAME);
				setState(2075);
				match(LR_BRACKET);
				setState(2077);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_FALSE || _la==K_NULL || ((((_la - 123)) & ~0x3f) == 0 && ((1L << (_la - 123)) & ((1L << (K_TRUE - 123)) | (1L << (STRING_LITERAL - 123)) | (1L << (DECIMAL_LITERAL - 123)) | (1L << (FLOAT_LITERAL - 123)) | (1L << (HEXADECIMAL_LITERAL - 123)) | (1L << (OBJECT_NAME - 123)) | (1L << (UUID - 123)))) != 0)) {
					{
					setState(2076);
					functionArgs();
					}
				}

				setState(2079);
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
		enterRule(_localctx, 298, RULE_functionArgs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2085);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,173,_ctx) ) {
			case 1:
				{
				setState(2082);
				constant();
				}
				break;
			case 2:
				{
				setState(2083);
				match(OBJECT_NAME);
				}
				break;
			case 3:
				{
				setState(2084);
				functionCall();
				}
				break;
			}
			setState(2095);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2087);
				syntaxComma();
				setState(2091);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,174,_ctx) ) {
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
				}
				}
				setState(2097);
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
		enterRule(_localctx, 300, RULE_constant);
		try {
			setState(2105);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,176,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2098);
				constantUuid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2099);
				constantString();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2100);
				constantDecimal();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2101);
				constantFloat();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2102);
				constantHexadecimal();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2103);
				constantBoolean();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2104);
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
		enterRule(_localctx, 302, RULE_collectionElement);
		try {
			setState(2112);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,177,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2107);
				constant();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2108);
				constantMap();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2109);
				constantSet();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2110);
				constantList();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2111);
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
		enterRule(_localctx, 304, RULE_collectionMapElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2114);
			collectionElement();
			setState(2115);
			syntaxColon();
			setState(2116);
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
		enterRule(_localctx, 306, RULE_constantCollection);
		try {
			setState(2122);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,178,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2118);
				constantMap();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2119);
				constantTuple();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2120);
				constantList();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2121);
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
		enterRule(_localctx, 308, RULE_constantMap);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2124);
			syntaxBracketLc();
			setState(2125);
			collectionMapElement();
			setState(2131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2126);
				syntaxComma();
				setState(2127);
				collectionMapElement();
				}
				}
				setState(2133);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2134);
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
		enterRule(_localctx, 310, RULE_constantSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2136);
			syntaxBracketLc();
			setState(2137);
			collectionElement();
			setState(2143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2138);
				syntaxComma();
				setState(2139);
				collectionElement();
				}
				}
				setState(2145);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2146);
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
		enterRule(_localctx, 312, RULE_constantList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2148);
			syntaxBracketLs();
			setState(2149);
			collectionElement();
			setState(2155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2150);
				syntaxComma();
				setState(2151);
				collectionElement();
				}
				}
				setState(2157);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2158);
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
		enterRule(_localctx, 314, RULE_constantTuple);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2160);
			syntaxBracketLr();
			setState(2161);
			collectionElement();
			setState(2167);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2162);
				syntaxComma();
				setState(2163);
				collectionElement();
				}
				}
				setState(2169);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2170);
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
		enterRule(_localctx, 316, RULE_constantUuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2172);
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
		enterRule(_localctx, 318, RULE_constantDecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2174);
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
		enterRule(_localctx, 320, RULE_constantFloat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2176);
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
		enterRule(_localctx, 322, RULE_constantString);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2178);
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
		enterRule(_localctx, 324, RULE_constantBoolean);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2180);
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
		enterRule(_localctx, 326, RULE_constantHexadecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2182);
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
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public KeyspaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyspace; }
	}

	public final KeyspaceContext keyspace() throws RecognitionException {
		KeyspaceContext _localctx = new KeyspaceContext(_ctx, getState());
		enterRule(_localctx, 328, RULE_keyspace);
		try {
			setState(2204);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,183,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2184);
				match(OBJECT_NAME);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2185);
				match(DQUOTE);
				setState(2186);
				match(OBJECT_NAME);
				setState(2187);
				match(DQUOTE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2188);
				match(K_ROLE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2189);
				match(K_PERMISSIONS);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2190);
				match(K_OPTIONS);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2191);
				match(K_DURABLE_WRITES);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2192);
				match(K_LANGUAGE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2193);
				match(K_TYPE);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(2194);
				match(K_INITCOND);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(2195);
				match(K_REPLICATION);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(2196);
				match(K_TTL);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(2197);
				match(K_PARTITION);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(2198);
				match(K_KEY);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(2199);
				match(K_LEVEL);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(2200);
				match(K_USERS);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(2201);
				match(K_USER);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(2202);
				match(K_ROLE);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(2203);
				match(K_ROLES);
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

	public static class BaseKeyspaceContext extends ParserRuleContext {
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
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public BaseKeyspaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_baseKeyspace; }
	}

	public final BaseKeyspaceContext baseKeyspace() throws RecognitionException {
		BaseKeyspaceContext _localctx = new BaseKeyspaceContext(_ctx, getState());
		enterRule(_localctx, 330, RULE_baseKeyspace);
		try {
			setState(2226);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,184,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2206);
				match(OBJECT_NAME);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2207);
				match(DQUOTE);
				setState(2208);
				match(OBJECT_NAME);
				setState(2209);
				match(DQUOTE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2210);
				match(K_ROLE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2211);
				match(K_PERMISSIONS);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2212);
				match(K_OPTIONS);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2213);
				match(K_DURABLE_WRITES);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2214);
				match(K_LANGUAGE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2215);
				match(K_TYPE);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(2216);
				match(K_INITCOND);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(2217);
				match(K_REPLICATION);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(2218);
				match(K_TTL);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(2219);
				match(K_PARTITION);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(2220);
				match(K_KEY);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(2221);
				match(K_LEVEL);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(2222);
				match(K_USERS);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(2223);
				match(K_USER);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(2224);
				match(K_ROLE);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(2225);
				match(K_ROLES);
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

	public static class TableContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
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
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public TableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table; }
	}

	public final TableContext table() throws RecognitionException {
		TableContext _localctx = new TableContext(_ctx, getState());
		enterRule(_localctx, 332, RULE_table);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2228);
			_la = _input.LA(1);
			if ( !(((((_la - 53)) & ~0x3f) == 0 && ((1L << (_la - 53)) & ((1L << (K_DURABLE_WRITES - 53)) | (1L << (K_INITCOND - 53)) | (1L << (K_KEY - 53)) | (1L << (K_LANGUAGE - 53)) | (1L << (K_LEVEL - 53)) | (1L << (K_OPTIONS - 53)) | (1L << (K_PARTITION - 53)) | (1L << (K_PERMISSIONS - 53)) | (1L << (K_REPLICATION - 53)))) != 0) || ((((_la - 125)) & ~0x3f) == 0 && ((1L << (_la - 125)) & ((1L << (K_TTL - 125)) | (1L << (K_TYPE - 125)) | (1L << (K_ROLES - 125)) | (1L << (K_ROLE - 125)) | (1L << (OBJECT_NAME - 125)) | (1L << (K_USERS - 125)) | (1L << (K_USER - 125)))) != 0)) ) {
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

	public static class BaseTableContext extends ParserRuleContext {
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
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public BaseTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_baseTable; }
	}

	public final BaseTableContext baseTable() throws RecognitionException {
		BaseTableContext _localctx = new BaseTableContext(_ctx, getState());
		enterRule(_localctx, 334, RULE_baseTable);
		try {
			setState(2250);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,185,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2230);
				match(OBJECT_NAME);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2231);
				match(DQUOTE);
				setState(2232);
				match(OBJECT_NAME);
				setState(2233);
				match(DQUOTE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2234);
				match(K_ROLE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2235);
				match(K_PERMISSIONS);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2236);
				match(K_OPTIONS);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2237);
				match(K_DURABLE_WRITES);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2238);
				match(K_LANGUAGE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2239);
				match(K_TYPE);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(2240);
				match(K_INITCOND);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(2241);
				match(K_REPLICATION);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(2242);
				match(K_TTL);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(2243);
				match(K_PARTITION);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(2244);
				match(K_KEY);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(2245);
				match(K_LEVEL);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(2246);
				match(K_USERS);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(2247);
				match(K_USER);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(2248);
				match(K_ROLE);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(2249);
				match(K_ROLES);
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

	public static class MaterializedViewContext extends ParserRuleContext {
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
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public MaterializedViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_materializedView; }
	}

	public final MaterializedViewContext materializedView() throws RecognitionException {
		MaterializedViewContext _localctx = new MaterializedViewContext(_ctx, getState());
		enterRule(_localctx, 336, RULE_materializedView);
		try {
			setState(2272);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,186,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2252);
				match(OBJECT_NAME);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2253);
				match(DQUOTE);
				setState(2254);
				match(OBJECT_NAME);
				setState(2255);
				match(DQUOTE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2256);
				match(K_ROLE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2257);
				match(K_PERMISSIONS);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2258);
				match(K_OPTIONS);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2259);
				match(K_DURABLE_WRITES);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2260);
				match(K_LANGUAGE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2261);
				match(K_TYPE);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(2262);
				match(K_INITCOND);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(2263);
				match(K_REPLICATION);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(2264);
				match(K_TTL);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(2265);
				match(K_PARTITION);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(2266);
				match(K_KEY);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(2267);
				match(K_LEVEL);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(2268);
				match(K_USERS);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(2269);
				match(K_USER);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(2270);
				match(K_ROLE);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(2271);
				match(K_ROLES);
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
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public KeyspaceObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyspaceObject; }
	}

	public final KeyspaceObjectContext keyspaceObject() throws RecognitionException {
		KeyspaceObjectContext _localctx = new KeyspaceObjectContext(_ctx, getState());
		enterRule(_localctx, 338, RULE_keyspaceObject);
		try {
			setState(2294);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,187,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2274);
				match(OBJECT_NAME);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2275);
				match(DQUOTE);
				setState(2276);
				match(OBJECT_NAME);
				setState(2277);
				match(DQUOTE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2278);
				match(K_ROLE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2279);
				match(K_PERMISSIONS);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2280);
				match(K_OPTIONS);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2281);
				match(K_DURABLE_WRITES);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2282);
				match(K_LANGUAGE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2283);
				match(K_TYPE);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(2284);
				match(K_INITCOND);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(2285);
				match(K_REPLICATION);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(2286);
				match(K_TTL);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(2287);
				match(K_PARTITION);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(2288);
				match(K_KEY);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(2289);
				match(K_LEVEL);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(2290);
				match(K_USERS);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(2291);
				match(K_USER);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(2292);
				match(K_ROLE);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(2293);
				match(K_ROLES);
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
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public ObjectUnknownContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnknown; }
	}

	public final ObjectUnknownContext objectUnknown() throws RecognitionException {
		ObjectUnknownContext _localctx = new ObjectUnknownContext(_ctx, getState());
		enterRule(_localctx, 340, RULE_objectUnknown);
		try {
			setState(2316);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,188,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2296);
				match(OBJECT_NAME);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2297);
				match(DQUOTE);
				setState(2298);
				match(OBJECT_NAME);
				setState(2299);
				match(DQUOTE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2300);
				match(K_ROLE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2301);
				match(K_PERMISSIONS);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2302);
				match(K_OPTIONS);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2303);
				match(K_DURABLE_WRITES);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2304);
				match(K_LANGUAGE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2305);
				match(K_TYPE);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(2306);
				match(K_INITCOND);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(2307);
				match(K_REPLICATION);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(2308);
				match(K_TTL);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(2309);
				match(K_PARTITION);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(2310);
				match(K_KEY);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(2311);
				match(K_LEVEL);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(2312);
				match(K_USERS);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(2313);
				match(K_USER);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(2314);
				match(K_ROLE);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(2315);
				match(K_ROLES);
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

	public static class AggregateSpecContext extends ParserRuleContext {
		public AggregateContext aggregate() {
			return getRuleContext(AggregateContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public SpecialDotContext specialDot() {
			return getRuleContext(SpecialDotContext.class,0);
		}
		public AggregateSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregateSpec; }
	}

	public final AggregateSpecContext aggregateSpec() throws RecognitionException {
		AggregateSpecContext _localctx = new AggregateSpecContext(_ctx, getState());
		enterRule(_localctx, 342, RULE_aggregateSpec);
		try {
			setState(2328);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,189,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2318);
				aggregate();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2319);
				keyspace();
				setState(2320);
				specialDot();
				setState(2321);
				aggregate();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2323);
				keyspace();
				setState(2324);
				specialDot();
				 this.notifyErrorListeners("rule.aggregate"); 
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.aggregateSpec"); 
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

	public static class TypeSpecContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public SpecialDotContext specialDot() {
			return getRuleContext(SpecialDotContext.class,0);
		}
		public TypeSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeSpec; }
	}

	public final TypeSpecContext typeSpec() throws RecognitionException {
		TypeSpecContext _localctx = new TypeSpecContext(_ctx, getState());
		enterRule(_localctx, 344, RULE_typeSpec);
		try {
			setState(2340);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,190,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2330);
				type();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2331);
				keyspace();
				setState(2332);
				specialDot();
				setState(2333);
				type();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2335);
				keyspace();
				setState(2336);
				specialDot();
				 this.notifyErrorListeners("rule.type"); 
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.typeSpec"); 
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

	public static class FunctionSpecContext extends ParserRuleContext {
		public FunctionContext function() {
			return getRuleContext(FunctionContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public SpecialDotContext specialDot() {
			return getRuleContext(SpecialDotContext.class,0);
		}
		public FunctionSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionSpec; }
	}

	public final FunctionSpecContext functionSpec() throws RecognitionException {
		FunctionSpecContext _localctx = new FunctionSpecContext(_ctx, getState());
		enterRule(_localctx, 346, RULE_functionSpec);
		try {
			setState(2352);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,191,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2342);
				function();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2343);
				keyspace();
				setState(2344);
				specialDot();
				setState(2345);
				function();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2347);
				keyspace();
				setState(2348);
				specialDot();
				 this.notifyErrorListeners("rule.function"); 
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.functionSpec"); 
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

	public static class TableSpecContext extends ParserRuleContext {
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public List<SyntaxDquoteContext> syntaxDquote() {
			return getRuleContexts(SyntaxDquoteContext.class);
		}
		public SyntaxDquoteContext syntaxDquote(int i) {
			return getRuleContext(SyntaxDquoteContext.class,i);
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
		enterRule(_localctx, 348, RULE_tableSpec);
		try {
			setState(2374);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,192,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2354);
				table();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2355);
				syntaxDquote();
				setState(2356);
				table();
				setState(2357);
				syntaxDquote();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2359);
				keyspace();
				setState(2360);
				specialDot();
				setState(2361);
				table();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2363);
				keyspace();
				setState(2364);
				specialDot();
				setState(2365);
				syntaxDquote();
				setState(2366);
				table();
				setState(2367);
				syntaxDquote();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2369);
				keyspace();
				setState(2370);
				specialDot();
				 this.notifyErrorListeners("rule.table"); 
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
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

	public static class BaseTableSpecContext extends ParserRuleContext {
		public BaseTableContext baseTable() {
			return getRuleContext(BaseTableContext.class,0);
		}
		public List<SyntaxDquoteContext> syntaxDquote() {
			return getRuleContexts(SyntaxDquoteContext.class);
		}
		public SyntaxDquoteContext syntaxDquote(int i) {
			return getRuleContext(SyntaxDquoteContext.class,i);
		}
		public BaseKeyspaceContext baseKeyspace() {
			return getRuleContext(BaseKeyspaceContext.class,0);
		}
		public SpecialDotContext specialDot() {
			return getRuleContext(SpecialDotContext.class,0);
		}
		public BaseTableSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_baseTableSpec; }
	}

	public final BaseTableSpecContext baseTableSpec() throws RecognitionException {
		BaseTableSpecContext _localctx = new BaseTableSpecContext(_ctx, getState());
		enterRule(_localctx, 350, RULE_baseTableSpec);
		try {
			setState(2396);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,193,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2376);
				baseTable();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2377);
				syntaxDquote();
				setState(2378);
				baseTable();
				setState(2379);
				syntaxDquote();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2381);
				baseKeyspace();
				setState(2382);
				specialDot();
				setState(2383);
				baseTable();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2385);
				baseKeyspace();
				setState(2386);
				specialDot();
				setState(2387);
				syntaxDquote();
				setState(2388);
				baseTable();
				setState(2389);
				syntaxDquote();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2391);
				baseKeyspace();
				setState(2392);
				specialDot();
				 this.notifyErrorListeners("rule.baseTable"); 
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				 this.notifyErrorListeners("rule.baseTableSpec"); 
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

	public static class IndexSpecContext extends ParserRuleContext {
		public IndexContext index() {
			return getRuleContext(IndexContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public SpecialDotContext specialDot() {
			return getRuleContext(SpecialDotContext.class,0);
		}
		public IndexSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexSpec; }
	}

	public final IndexSpecContext indexSpec() throws RecognitionException {
		IndexSpecContext _localctx = new IndexSpecContext(_ctx, getState());
		enterRule(_localctx, 352, RULE_indexSpec);
		try {
			setState(2408);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,194,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2398);
				index();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2399);
				keyspace();
				setState(2400);
				specialDot();
				setState(2401);
				index();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2403);
				keyspace();
				setState(2404);
				specialDot();
				 this.notifyErrorListeners("rule.index"); 
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.indexSpec"); 
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

	public static class MaterializedViewSpecContext extends ParserRuleContext {
		public MaterializedViewContext materializedView() {
			return getRuleContext(MaterializedViewContext.class,0);
		}
		public KeyspaceContext keyspace() {
			return getRuleContext(KeyspaceContext.class,0);
		}
		public SpecialDotContext specialDot() {
			return getRuleContext(SpecialDotContext.class,0);
		}
		public MaterializedViewSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_materializedViewSpec; }
	}

	public final MaterializedViewSpecContext materializedViewSpec() throws RecognitionException {
		MaterializedViewSpecContext _localctx = new MaterializedViewSpecContext(_ctx, getState());
		enterRule(_localctx, 354, RULE_materializedViewSpec);
		try {
			setState(2420);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,195,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2410);
				materializedView();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2411);
				keyspace();
				setState(2412);
				specialDot();
				setState(2413);
				materializedView();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2415);
				keyspace();
				setState(2416);
				specialDot();
				 this.notifyErrorListeners("rule.materializedView"); 
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				 this.notifyErrorListeners("rule.materializedViewSpec"); 
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

	public static class TableOrMaterializedViewSpecContext extends ParserRuleContext {
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public MaterializedViewSpecContext materializedViewSpec() {
			return getRuleContext(MaterializedViewSpecContext.class,0);
		}
		public TableOrMaterializedViewSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableOrMaterializedViewSpec; }
	}

	public final TableOrMaterializedViewSpecContext tableOrMaterializedViewSpec() throws RecognitionException {
		TableOrMaterializedViewSpecContext _localctx = new TableOrMaterializedViewSpecContext(_ctx, getState());
		enterRule(_localctx, 356, RULE_tableOrMaterializedViewSpec);
		try {
			setState(2425);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,196,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2422);
				tableSpec();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2423);
				materializedViewSpec();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				 this.notifyErrorListeners("rule.tableOrMaterializedViewSpec"); 
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
		enterRule(_localctx, 358, RULE_objectUnknownSpec);
		try {
			setState(2433);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,197,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2427);
				objectUnknown();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2428);
				keyspace();
				setState(2429);
				specialDot();
				setState(2430);
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

	public static class ColumnSpecContext extends ParserRuleContext {
		public ColumnContext column() {
			return getRuleContext(ColumnContext.class,0);
		}
		public List<SyntaxDquoteContext> syntaxDquote() {
			return getRuleContexts(SyntaxDquoteContext.class);
		}
		public SyntaxDquoteContext syntaxDquote(int i) {
			return getRuleContext(SyntaxDquoteContext.class,i);
		}
		public ColumnSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnSpec; }
	}

	public final ColumnSpecContext columnSpec() throws RecognitionException {
		ColumnSpecContext _localctx = new ColumnSpecContext(_ctx, getState());
		enterRule(_localctx, 360, RULE_columnSpec);
		try {
			setState(2440);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_DURABLE_WRITES:
			case K_INITCOND:
			case K_KEY:
			case K_LANGUAGE:
			case K_LEVEL:
			case K_OPTIONS:
			case K_PARTITION:
			case K_PERMISSIONS:
			case K_REPLICATION:
			case K_TTL:
			case K_TYPE:
			case K_ROLES:
			case K_ROLE:
			case OBJECT_NAME:
			case K_USERS:
			case K_USER:
				enterOuterAlt(_localctx, 1);
				{
				setState(2435);
				column();
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2436);
				syntaxDquote();
				setState(2437);
				column();
				setState(2438);
				syntaxDquote();
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
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public ColumnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_column; }
	}

	public final ColumnContext column() throws RecognitionException {
		ColumnContext _localctx = new ColumnContext(_ctx, getState());
		enterRule(_localctx, 362, RULE_column);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2442);
			_la = _input.LA(1);
			if ( !(((((_la - 53)) & ~0x3f) == 0 && ((1L << (_la - 53)) & ((1L << (K_DURABLE_WRITES - 53)) | (1L << (K_INITCOND - 53)) | (1L << (K_KEY - 53)) | (1L << (K_LANGUAGE - 53)) | (1L << (K_LEVEL - 53)) | (1L << (K_OPTIONS - 53)) | (1L << (K_PARTITION - 53)) | (1L << (K_PERMISSIONS - 53)) | (1L << (K_REPLICATION - 53)))) != 0) || ((((_la - 125)) & ~0x3f) == 0 && ((1L << (_la - 125)) & ((1L << (K_TTL - 125)) | (1L << (K_TYPE - 125)) | (1L << (K_ROLES - 125)) | (1L << (K_ROLE - 125)) | (1L << (OBJECT_NAME - 125)) | (1L << (K_USERS - 125)) | (1L << (K_USER - 125)))) != 0)) ) {
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

	public static class ColumnUnknownSpecContext extends ParserRuleContext {
		public ColumnUnknownContext columnUnknown() {
			return getRuleContext(ColumnUnknownContext.class,0);
		}
		public List<SyntaxDquoteContext> syntaxDquote() {
			return getRuleContexts(SyntaxDquoteContext.class);
		}
		public SyntaxDquoteContext syntaxDquote(int i) {
			return getRuleContext(SyntaxDquoteContext.class,i);
		}
		public ColumnUnknownSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnUnknownSpec; }
	}

	public final ColumnUnknownSpecContext columnUnknownSpec() throws RecognitionException {
		ColumnUnknownSpecContext _localctx = new ColumnUnknownSpecContext(_ctx, getState());
		enterRule(_localctx, 364, RULE_columnUnknownSpec);
		try {
			setState(2449);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_DURABLE_WRITES:
			case K_INITCOND:
			case K_KEY:
			case K_LANGUAGE:
			case K_LEVEL:
			case K_OPTIONS:
			case K_PARTITION:
			case K_PERMISSIONS:
			case K_REPLICATION:
			case K_TTL:
			case K_TYPE:
			case K_ROLES:
			case K_ROLE:
			case OBJECT_NAME:
			case K_USERS:
			case K_USER:
				enterOuterAlt(_localctx, 1);
				{
				setState(2444);
				columnUnknown();
				}
				break;
			case DQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(2445);
				syntaxDquote();
				setState(2446);
				columnUnknown();
				setState(2447);
				syntaxDquote();
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
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public ColumnUnknownContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnUnknown; }
	}

	public final ColumnUnknownContext columnUnknown() throws RecognitionException {
		ColumnUnknownContext _localctx = new ColumnUnknownContext(_ctx, getState());
		enterRule(_localctx, 366, RULE_columnUnknown);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2451);
			_la = _input.LA(1);
			if ( !(((((_la - 53)) & ~0x3f) == 0 && ((1L << (_la - 53)) & ((1L << (K_DURABLE_WRITES - 53)) | (1L << (K_INITCOND - 53)) | (1L << (K_KEY - 53)) | (1L << (K_LANGUAGE - 53)) | (1L << (K_LEVEL - 53)) | (1L << (K_OPTIONS - 53)) | (1L << (K_PARTITION - 53)) | (1L << (K_PERMISSIONS - 53)) | (1L << (K_REPLICATION - 53)))) != 0) || ((((_la - 125)) & ~0x3f) == 0 && ((1L << (_la - 125)) & ((1L << (K_TTL - 125)) | (1L << (K_TYPE - 125)) | (1L << (K_ROLES - 125)) | (1L << (K_ROLE - 125)) | (1L << (OBJECT_NAME - 125)) | (1L << (K_USERS - 125)) | (1L << (K_USER - 125)))) != 0)) ) {
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
		enterRule(_localctx, 368, RULE_dataType);
		try {
			setState(2455);
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
				setState(2453);
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
				setState(2454);
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
		enterRule(_localctx, 370, RULE_dataTypeCollection);
		try {
			setState(2482);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_FROZEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(2457);
				dataTypeFrozen();
				setState(2460);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_LT:
					{
					setState(2458);
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
				setState(2462);
				dataTypeSet();
				setState(2465);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_LT:
					{
					setState(2463);
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
				setState(2467);
				dataTypeList();
				setState(2470);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_LT:
					{
					setState(2468);
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
				setState(2472);
				dataTypeMap();
				setState(2475);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_LT:
					{
					setState(2473);
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
				setState(2477);
				dataTypeTuple();
				setState(2480);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OPERATOR_LT:
					{
					setState(2478);
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
		enterRule(_localctx, 372, RULE_dataTypeFundamental);
		try {
			setState(2505);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ASCII:
				enterOuterAlt(_localctx, 1);
				{
				setState(2484);
				dataTypeAscii();
				}
				break;
			case K_BIGINT:
				enterOuterAlt(_localctx, 2);
				{
				setState(2485);
				dataTypeBigint();
				}
				break;
			case K_BLOB:
				enterOuterAlt(_localctx, 3);
				{
				setState(2486);
				dataTypeBlob();
				}
				break;
			case K_BOOLEAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(2487);
				dataTypeBoolean();
				}
				break;
			case K_COUNTER:
				enterOuterAlt(_localctx, 5);
				{
				setState(2488);
				dataTypeCounter();
				}
				break;
			case K_DATE:
				enterOuterAlt(_localctx, 6);
				{
				setState(2489);
				dataTypeDate();
				}
				break;
			case K_DECIMAL:
				enterOuterAlt(_localctx, 7);
				{
				setState(2490);
				dataTypeDecimal();
				}
				break;
			case K_DOUBLE:
				enterOuterAlt(_localctx, 8);
				{
				setState(2491);
				dataTypeDouble();
				}
				break;
			case K_FLOAT:
				enterOuterAlt(_localctx, 9);
				{
				setState(2492);
				dataTypeFloat();
				}
				break;
			case K_INET:
				enterOuterAlt(_localctx, 10);
				{
				setState(2493);
				dataTypeInet();
				}
				break;
			case K_INT:
				enterOuterAlt(_localctx, 11);
				{
				setState(2494);
				dataTypeInt();
				}
				break;
			case K_SMALLINT:
				enterOuterAlt(_localctx, 12);
				{
				setState(2495);
				dataTypeSmallInt();
				}
				break;
			case K_TEXT:
				enterOuterAlt(_localctx, 13);
				{
				setState(2496);
				dataTypeText();
				}
				break;
			case K_TIME:
				enterOuterAlt(_localctx, 14);
				{
				setState(2497);
				dataTypeTime();
				}
				break;
			case K_TIMEUUID:
				enterOuterAlt(_localctx, 15);
				{
				setState(2498);
				dataTypeTimeUuid();
				}
				break;
			case K_TIMESTAMP:
				enterOuterAlt(_localctx, 16);
				{
				setState(2499);
				dataTypeTimestamp();
				}
				break;
			case K_TINYINT:
				enterOuterAlt(_localctx, 17);
				{
				setState(2500);
				dataTypeTinyInt();
				}
				break;
			case K_UUID:
				enterOuterAlt(_localctx, 18);
				{
				setState(2501);
				dataTypeUuid();
				}
				break;
			case K_VARCHAR:
				enterOuterAlt(_localctx, 19);
				{
				setState(2502);
				dataTypeVarChar();
				}
				break;
			case K_VARINT:
				enterOuterAlt(_localctx, 20);
				{
				setState(2503);
				dataTypeVarInt();
				}
				break;
			case OBJECT_NAME:
				enterOuterAlt(_localctx, 21);
				{
				setState(2504);
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
		enterRule(_localctx, 374, RULE_orderDirection);
		try {
			setState(2509);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ASC:
				enterOuterAlt(_localctx, 1);
				{
				setState(2507);
				kwAsc();
				}
				break;
			case K_DESC:
				enterOuterAlt(_localctx, 2);
				{
				setState(2508);
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
		enterRule(_localctx, 376, RULE_role);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2511);
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
		enterRule(_localctx, 378, RULE_trigger);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2513);
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
		enterRule(_localctx, 380, RULE_triggerClass);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2515);
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

	public static class TypeContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 382, RULE_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2517);
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
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public TerminalNode K_USER() { return getToken(CqlParser.K_USER, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public AggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregate; }
	}

	public final AggregateContext aggregate() throws RecognitionException {
		AggregateContext _localctx = new AggregateContext(_ctx, getState());
		enterRule(_localctx, 384, RULE_aggregate);
		try {
			setState(2539);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,209,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2519);
				match(OBJECT_NAME);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2520);
				match(DQUOTE);
				setState(2521);
				match(OBJECT_NAME);
				setState(2522);
				match(DQUOTE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2523);
				match(K_ROLE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2524);
				match(K_PERMISSIONS);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2525);
				match(K_OPTIONS);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2526);
				match(K_DURABLE_WRITES);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2527);
				match(K_LANGUAGE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2528);
				match(K_TYPE);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(2529);
				match(K_INITCOND);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(2530);
				match(K_REPLICATION);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(2531);
				match(K_TTL);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(2532);
				match(K_PARTITION);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(2533);
				match(K_KEY);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(2534);
				match(K_LEVEL);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(2535);
				match(K_USERS);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(2536);
				match(K_USER);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(2537);
				match(K_ROLE);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(2538);
				match(K_ROLES);
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

	public static class FunctionContext extends ParserRuleContext {
		public TerminalNode OBJECT_NAME() { return getToken(CqlParser.OBJECT_NAME, 0); }
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 386, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2541);
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
		enterRule(_localctx, 388, RULE_language);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2543);
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
		enterRule(_localctx, 390, RULE_user);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2545);
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
		enterRule(_localctx, 392, RULE_password);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2547);
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
		enterRule(_localctx, 394, RULE_hashKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2549);
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
		enterRule(_localctx, 396, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2551);
			paramName();
			setState(2552);
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
		enterRule(_localctx, 398, RULE_paramName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2554);
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
		enterRule(_localctx, 400, RULE_kwAdd);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2556);
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
		enterRule(_localctx, 402, RULE_kwAggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2558);
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
		enterRule(_localctx, 404, RULE_kwAll);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2560);
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
		enterRule(_localctx, 406, RULE_kwAllFunctions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2562);
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
		enterRule(_localctx, 408, RULE_kwAllKeyspaces);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2564);
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
		enterRule(_localctx, 410, RULE_kwAllRoles);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2566);
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
		enterRule(_localctx, 412, RULE_kwAllPermissions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2568);
			match(K_ALL);
			setState(2569);
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
		enterRule(_localctx, 414, RULE_kwAllow);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2571);
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
		enterRule(_localctx, 416, RULE_kwAllowFiltering);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2573);
			match(K_ALLOW);
			setState(2574);
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
		enterRule(_localctx, 418, RULE_kwAlter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2576);
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
		enterRule(_localctx, 420, RULE_kwAnd);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2578);
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
		enterRule(_localctx, 422, RULE_kwApply);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2580);
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
		enterRule(_localctx, 424, RULE_kwAs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2582);
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
		enterRule(_localctx, 426, RULE_kwAsc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2584);
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
		enterRule(_localctx, 428, RULE_kwAuthorize);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2586);
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
		enterRule(_localctx, 430, RULE_kwBatch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2588);
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
		enterRule(_localctx, 432, RULE_kwBegin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2590);
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
		enterRule(_localctx, 434, RULE_kwBy);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2592);
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
		enterRule(_localctx, 436, RULE_kwCalled);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2594);
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
		enterRule(_localctx, 438, RULE_kwClustering);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2596);
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
		enterRule(_localctx, 440, RULE_kwCompact);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2598);
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
		enterRule(_localctx, 442, RULE_kwContains);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2600);
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
		enterRule(_localctx, 444, RULE_kwContainsKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2602);
			match(K_CONTAINS);
			setState(2603);
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
		enterRule(_localctx, 446, RULE_kwCreate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2605);
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
		enterRule(_localctx, 448, RULE_kwDelete);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2607);
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
		enterRule(_localctx, 450, RULE_kwDesc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2609);
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
		enterRule(_localctx, 452, RULE_kwDescibe);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2611);
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
		enterRule(_localctx, 454, RULE_kwDistinct);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2613);
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
		enterRule(_localctx, 456, RULE_kwDrop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2615);
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
		enterRule(_localctx, 458, RULE_kwDurableWrites);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2617);
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
		enterRule(_localctx, 460, RULE_kwEntries);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2619);
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
		enterRule(_localctx, 462, RULE_kwExecute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2621);
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
		enterRule(_localctx, 464, RULE_kwExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2623);
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
		enterRule(_localctx, 466, RULE_kwFiltering);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2625);
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
		enterRule(_localctx, 468, RULE_kwFinalfunc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2627);
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
		enterRule(_localctx, 470, RULE_kwFrom);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2629);
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
		enterRule(_localctx, 472, RULE_kwFull);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2631);
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
		enterRule(_localctx, 474, RULE_kwFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2633);
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
		enterRule(_localctx, 476, RULE_kwGrant);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2635);
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
		enterRule(_localctx, 478, RULE_kwIf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2637);
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
		enterRule(_localctx, 480, RULE_kwIn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2639);
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
		enterRule(_localctx, 482, RULE_kwIndex);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2641);
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
		enterRule(_localctx, 484, RULE_kwInitcond);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2643);
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
		enterRule(_localctx, 486, RULE_kwInput);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2645);
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

	public static class KwInsertIntoContext extends ParserRuleContext {
		public TerminalNode K_INSERT() { return getToken(CqlParser.K_INSERT, 0); }
		public TerminalNode K_INTO() { return getToken(CqlParser.K_INTO, 0); }
		public KwInsertIntoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwInsertInto; }
	}

	public final KwInsertIntoContext kwInsertInto() throws RecognitionException {
		KwInsertIntoContext _localctx = new KwInsertIntoContext(_ctx, getState());
		enterRule(_localctx, 488, RULE_kwInsertInto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2647);
			match(K_INSERT);
			setState(2648);
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
		enterRule(_localctx, 490, RULE_kwIs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2650);
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
		enterRule(_localctx, 492, RULE_kwKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2652);
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
		enterRule(_localctx, 494, RULE_kwKeys);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2654);
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
		enterRule(_localctx, 496, RULE_kwKeyspace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2656);
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
		enterRule(_localctx, 498, RULE_kwLanguage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2658);
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
		enterRule(_localctx, 500, RULE_kwLimit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2660);
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
		enterRule(_localctx, 502, RULE_kwList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2662);
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
		public TerminalNode K_LIST() { return getToken(CqlParser.K_LIST, 0); }
		public TerminalNode K_ROLES() { return getToken(CqlParser.K_ROLES, 0); }
		public KwListRolesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwListRoles; }
	}

	public final KwListRolesContext kwListRoles() throws RecognitionException {
		KwListRolesContext _localctx = new KwListRolesContext(_ctx, getState());
		enterRule(_localctx, 504, RULE_kwListRoles);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2664);
			match(K_LIST);
			setState(2665);
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

	public static class KwListUsersContext extends ParserRuleContext {
		public TerminalNode K_LIST() { return getToken(CqlParser.K_LIST, 0); }
		public TerminalNode K_USERS() { return getToken(CqlParser.K_USERS, 0); }
		public KwListUsersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwListUsers; }
	}

	public final KwListUsersContext kwListUsers() throws RecognitionException {
		KwListUsersContext _localctx = new KwListUsersContext(_ctx, getState());
		enterRule(_localctx, 506, RULE_kwListUsers);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2667);
			match(K_LIST);
			setState(2668);
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

	public static class KwLoggedContext extends ParserRuleContext {
		public TerminalNode K_LOGGED() { return getToken(CqlParser.K_LOGGED, 0); }
		public KwLoggedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwLogged; }
	}

	public final KwLoggedContext kwLogged() throws RecognitionException {
		KwLoggedContext _localctx = new KwLoggedContext(_ctx, getState());
		enterRule(_localctx, 508, RULE_kwLogged);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2670);
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
		enterRule(_localctx, 510, RULE_kwLogin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2672);
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

	public static class KwMaterializedViewContext extends ParserRuleContext {
		public TerminalNode K_MATERIALIZED() { return getToken(CqlParser.K_MATERIALIZED, 0); }
		public TerminalNode K_VIEW() { return getToken(CqlParser.K_VIEW, 0); }
		public KwMaterializedViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwMaterializedView; }
	}

	public final KwMaterializedViewContext kwMaterializedView() throws RecognitionException {
		KwMaterializedViewContext _localctx = new KwMaterializedViewContext(_ctx, getState());
		enterRule(_localctx, 512, RULE_kwMaterializedView);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2674);
			match(K_MATERIALIZED);
			setState(2675);
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

	public static class KwModifyContext extends ParserRuleContext {
		public TerminalNode K_MODIFY() { return getToken(CqlParser.K_MODIFY, 0); }
		public KwModifyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwModify; }
	}

	public final KwModifyContext kwModify() throws RecognitionException {
		KwModifyContext _localctx = new KwModifyContext(_ctx, getState());
		enterRule(_localctx, 514, RULE_kwModify);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2677);
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
		enterRule(_localctx, 516, RULE_kwNosuperuser);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2679);
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
		enterRule(_localctx, 518, RULE_kwNorecursive);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2681);
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
		enterRule(_localctx, 520, RULE_kwNot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2683);
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
		enterRule(_localctx, 522, RULE_kwNull);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2685);
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
		enterRule(_localctx, 524, RULE_kwOf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2687);
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
		enterRule(_localctx, 526, RULE_kwOn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2689);
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
		enterRule(_localctx, 528, RULE_kwOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2691);
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
		enterRule(_localctx, 530, RULE_kwOr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2693);
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
		enterRule(_localctx, 532, RULE_kwOrder);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2695);
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
		enterRule(_localctx, 534, RULE_kwOrderBy);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2697);
			match(K_ORDER);
			setState(2698);
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
		enterRule(_localctx, 536, RULE_kwPartition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2700);
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
		enterRule(_localctx, 538, RULE_kwPassword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2702);
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
		enterRule(_localctx, 540, RULE_kwPermissions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2704);
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
		enterRule(_localctx, 542, RULE_kwPrimary);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2706);
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
		enterRule(_localctx, 544, RULE_kwRename);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2708);
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
		enterRule(_localctx, 546, RULE_kwReplace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2710);
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
		enterRule(_localctx, 548, RULE_kwReplication);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2712);
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
		enterRule(_localctx, 550, RULE_kwReturns);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2714);
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
		enterRule(_localctx, 552, RULE_kwRole);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2716);
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
		enterRule(_localctx, 554, RULE_kwSelect);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2718);
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
		enterRule(_localctx, 556, RULE_kwSet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2720);
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
		enterRule(_localctx, 558, RULE_kwSfunc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2722);
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
		enterRule(_localctx, 560, RULE_kwStatic);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2724);
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
		enterRule(_localctx, 562, RULE_kwStorage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2726);
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
		enterRule(_localctx, 564, RULE_kwStype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2728);
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
		enterRule(_localctx, 566, RULE_kwSuperuser);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2730);
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
		enterRule(_localctx, 568, RULE_kwTable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2732);
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
		enterRule(_localctx, 570, RULE_kwTimestamp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2734);
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
		enterRule(_localctx, 572, RULE_kwTo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2736);
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
		enterRule(_localctx, 574, RULE_kwToken);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2738);
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
		enterRule(_localctx, 576, RULE_kwTrigger);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2740);
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
		enterRule(_localctx, 578, RULE_kwTruncate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2742);
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
		enterRule(_localctx, 580, RULE_kwTtl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2744);
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
		enterRule(_localctx, 582, RULE_kwType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2746);
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
		enterRule(_localctx, 584, RULE_kwUnlogged);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2748);
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
		enterRule(_localctx, 586, RULE_kwUpdate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2750);
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
		enterRule(_localctx, 588, RULE_kwUse);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2752);
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
		enterRule(_localctx, 590, RULE_kwUser);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2754);
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
		enterRule(_localctx, 592, RULE_kwUsers);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2756);
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
		enterRule(_localctx, 594, RULE_kwUsing);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2758);
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
		enterRule(_localctx, 596, RULE_kwValues);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2760);
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

	public static class KwWhereContext extends ParserRuleContext {
		public TerminalNode K_WHERE() { return getToken(CqlParser.K_WHERE, 0); }
		public KwWhereContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwWhere; }
	}

	public final KwWhereContext kwWhere() throws RecognitionException {
		KwWhereContext _localctx = new KwWhereContext(_ctx, getState());
		enterRule(_localctx, 598, RULE_kwWhere);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2762);
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
		enterRule(_localctx, 600, RULE_kwWith);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2764);
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
		enterRule(_localctx, 602, RULE_kwRevoke);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2766);
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
		enterRule(_localctx, 604, RULE_dataTypeAscii);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2768);
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
		enterRule(_localctx, 606, RULE_dataTypeBigint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2770);
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
		enterRule(_localctx, 608, RULE_dataTypeBlob);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2772);
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
		enterRule(_localctx, 610, RULE_dataTypeBoolean);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2774);
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
		enterRule(_localctx, 612, RULE_dataTypeCounter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2776);
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
		enterRule(_localctx, 614, RULE_dataTypeDate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2778);
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
		enterRule(_localctx, 616, RULE_dataTypeDecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2780);
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
		enterRule(_localctx, 618, RULE_dataTypeDouble);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2782);
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
		enterRule(_localctx, 620, RULE_dataTypeFloat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2784);
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
		enterRule(_localctx, 622, RULE_dataTypeFrozen);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2786);
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
		enterRule(_localctx, 624, RULE_dataTypeInet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2788);
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
		enterRule(_localctx, 626, RULE_dataTypeInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2790);
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
		enterRule(_localctx, 628, RULE_dataTypeList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2792);
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
		enterRule(_localctx, 630, RULE_dataTypeMap);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2794);
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
		enterRule(_localctx, 632, RULE_dataTypeSmallInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2796);
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
		enterRule(_localctx, 634, RULE_dataTypeSet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2798);
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
		enterRule(_localctx, 636, RULE_dataTypeText);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2800);
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
		enterRule(_localctx, 638, RULE_dataTypeTime);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2802);
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
		enterRule(_localctx, 640, RULE_dataTypeTimeUuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2804);
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
		enterRule(_localctx, 642, RULE_dataTypeTimestamp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2806);
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
		enterRule(_localctx, 644, RULE_dataTypeTinyInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2808);
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
		enterRule(_localctx, 646, RULE_dataTypeTuple);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2810);
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
		enterRule(_localctx, 648, RULE_dataTypeUserDefined);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2812);
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
		enterRule(_localctx, 650, RULE_dataTypeUuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2814);
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
		enterRule(_localctx, 652, RULE_dataTypeVarChar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2816);
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
		enterRule(_localctx, 654, RULE_dataTypeVarInt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2818);
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
		enterRule(_localctx, 656, RULE_dataTypeStructure);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2820);
			syntaxBracketLa();
			setState(2821);
			dataType();
			setState(2827);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2822);
				syntaxComma();
				setState(2823);
				dataType();
				}
				}
				setState(2829);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2830);
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
		enterRule(_localctx, 658, RULE_specialStar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2832);
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
		enterRule(_localctx, 660, RULE_specialDot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2834);
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
		enterRule(_localctx, 662, RULE_eof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2836);
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
		enterRule(_localctx, 664, RULE_syntaxBracketLr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2838);
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
		enterRule(_localctx, 666, RULE_syntaxBracketRr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2840);
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
		enterRule(_localctx, 668, RULE_syntaxBracketLc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2842);
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
		enterRule(_localctx, 670, RULE_syntaxBracketRc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2844);
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
		enterRule(_localctx, 672, RULE_syntaxBracketLa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2846);
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
		enterRule(_localctx, 674, RULE_syntaxBracketRa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2848);
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
		enterRule(_localctx, 676, RULE_syntaxBracketLs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2850);
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
		enterRule(_localctx, 678, RULE_syntaxBracketRs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2852);
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
		enterRule(_localctx, 680, RULE_syntaxComma);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2854);
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
		enterRule(_localctx, 682, RULE_syntaxColon);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2856);
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
		enterRule(_localctx, 684, RULE_syntaxPlus);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2858);
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
		enterRule(_localctx, 686, RULE_syntaxMinus);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2860);
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
		enterRule(_localctx, 688, RULE_syntaxSquote);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2862);
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
		enterRule(_localctx, 690, RULE_syntaxDquote);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2864);
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
		enterRule(_localctx, 692, RULE_syntaxOperatorEq);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2866);
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
		enterRule(_localctx, 694, RULE_syntaxOperatorLt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2868);
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
		enterRule(_localctx, 696, RULE_syntaxOperatorGt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2870);
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
		enterRule(_localctx, 698, RULE_syntaxOperatorLte);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2872);
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
		enterRule(_localctx, 700, RULE_syntaxOperatorGte);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2874);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u00b2\u0b3f\4\2\t"+
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
		"\t\u0154\4\u0155\t\u0155\4\u0156\t\u0156\4\u0157\t\u0157\4\u0158\t\u0158"+
		"\4\u0159\t\u0159\4\u015a\t\u015a\4\u015b\t\u015b\4\u015c\t\u015c\4\u015d"+
		"\t\u015d\4\u015e\t\u015e\4\u015f\t\u015f\4\u0160\t\u0160\3\2\5\2\u02c2"+
		"\n\2\3\2\5\2\u02c5\n\2\3\2\3\2\3\3\3\3\5\3\u02cb\n\3\3\3\3\3\3\3\7\3\u02d0"+
		"\n\3\f\3\16\3\u02d3\13\3\3\3\3\3\5\3\u02d7\n\3\3\3\5\3\u02da\n\3\3\3\5"+
		"\3\u02dd\n\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u0309\n\6\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\t\5\t\u0318\n\t\3\t\5\t\u031b\n\t\3"+
		"\n\3\n\3\n\3\n\3\n\5\n\u0322\n\n\3\n\3\n\3\n\5\n\u0327\n\n\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\f\3\f\5\f\u0332\n\f\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\5\f\u033c\n\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u0348"+
		"\n\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u0351\n\r\3\r\3\r\3\r\3\r\3\r\5\r"+
		"\u0358\n\r\3\16\3\16\3\16\5\16\u035d\n\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\5\16\u0365\n\16\3\17\3\17\3\17\5\17\u036a\n\17\3\17\3\17\5\17\u036e\n"+
		"\17\3\20\3\20\3\20\5\20\u0373\n\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\7\21\u0380\n\21\f\21\16\21\u0383\13\21\3\22\3\22"+
		"\3\22\5\22\u0388\n\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\5\23\u0391\n"+
		"\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u039e"+
		"\n\23\3\24\3\24\3\24\3\24\3\24\5\24\u03a5\n\24\3\25\3\25\3\25\3\25\7\25"+
		"\u03ab\n\25\f\25\16\25\u03ae\13\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u03bf\n\27\3\30\3\30\3\30"+
		"\5\30\u03c4\n\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\5\30"+
		"\u03d0\n\30\3\31\3\31\5\31\u03d4\n\31\3\31\3\31\5\31\u03d8\n\31\3\31\3"+
		"\31\3\31\5\31\u03dd\n\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\32\3\32\3\33\3\33\3\33\3\33\7\33\u03ee\n\33\f\33\16\33\u03f1\13\33"+
		"\3\34\3\34\3\34\3\34\5\34\u03f7\n\34\3\34\3\34\3\34\3\34\3\35\3\35\5\35"+
		"\u03ff\n\35\3\35\3\35\5\35\u0403\n\35\3\35\3\35\3\35\3\35\3\35\3\35\3"+
		"\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\5\36\u0416\n\36"+
		"\3\37\3\37\3\37\3\37\3\37\7\37\u041d\n\37\f\37\16\37\u0420\13\37\3\37"+
		"\3\37\3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\7!\u042e\n!\f!\16!\u0431\13!\3!\3"+
		"!\3\"\3\"\3\"\3\"\3\"\7\"\u043a\n\"\f\"\16\"\u043d\13\"\3\"\3\"\3#\3#"+
		"\3#\3$\3$\3$\3$\3$\3$\5$\u044a\n$\3%\3%\3%\3&\3&\5&\u0451\n&\3\'\3\'\3"+
		"\'\3\'\3\'\3(\5(\u0459\n(\3(\5(\u045c\n(\3(\5(\u045f\n(\3)\3)\3)\3*\3"+
		"*\3*\3*\7*\u0468\n*\f*\16*\u046b\13*\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,"+
		"\7,\u0478\n,\f,\16,\u047b\13,\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3/\3/\3/\3"+
		"/\3/\3/\3/\5/\u048e\n/\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\62\3"+
		"\62\3\62\3\62\3\63\3\63\3\63\3\64\3\64\3\64\3\64\7\64\u04a3\n\64\f\64"+
		"\16\64\u04a6\13\64\3\65\3\65\3\65\3\66\3\66\3\66\3\66\3\66\3\66\7\66\u04b1"+
		"\n\66\f\66\16\66\u04b4\13\66\3\67\3\67\3\67\3\67\5\67\u04ba\n\67\38\3"+
		"8\38\38\38\78\u04c1\n8\f8\168\u04c4\138\39\39\39\39\39\39\39\39\39\39"+
		"\39\39\39\39\39\39\59\u04d6\n9\3:\3:\3:\3:\3:\3:\5:\u04de\n:\3;\3;\3;"+
		"\5;\u04e3\n;\3;\3;\3<\3<\3<\5<\u04ea\n<\3<\3<\3=\3=\3=\5=\u04f1\n=\3="+
		"\3=\3>\3>\3>\5>\u04f8\n>\3>\3>\3?\3?\3?\5?\u04ff\n?\3?\3?\3@\3@\3@\5@"+
		"\u0506\n@\3@\3@\3@\3@\3A\3A\3A\5A\u050f\nA\3A\3A\3B\3B\3B\5B\u0516\nB"+
		"\3B\3B\3C\3C\3C\5C\u051d\nC\3C\3C\3D\3D\3D\5D\u0524\nD\3D\3D\3E\3E\3E"+
		"\5E\u052b\nE\3E\3E\3E\5E\u0530\nE\3F\3F\3F\3F\3F\5F\u0537\nF\3G\3G\3G"+
		"\3G\3G\5G\u053e\nG\3G\3G\5G\u0542\nG\3G\3G\3G\5G\u0547\nG\5G\u0549\nG"+
		"\3H\3H\3H\3H\3H\3H\3H\3H\7H\u0553\nH\fH\16H\u0556\13H\3H\3H\3I\3I\5I\u055c"+
		"\nI\3J\3J\3J\3J\7J\u0562\nJ\fJ\16J\u0565\13J\3K\3K\3K\3K\3K\3K\3K\3K\5"+
		"K\u056f\nK\3L\3L\3M\3M\5M\u0575\nM\3N\3N\3N\3N\3N\7N\u057c\nN\fN\16N\u057f"+
		"\13N\3N\3N\3O\3O\3O\3O\3P\3P\3Q\3Q\5Q\u058b\nQ\3R\3R\3R\3R\7R\u0591\n"+
		"R\fR\16R\u0594\13R\3R\3R\3R\5R\u0599\nR\3S\3S\3S\3S\3S\3S\3S\3S\3S\3S"+
		"\3S\3S\5S\u05a7\nS\3T\3T\3T\3T\3T\3T\5T\u05af\nT\3U\3U\3U\3U\3U\3U\3V"+
		"\3V\3V\5V\u05ba\nV\3W\3W\3X\3X\3X\3X\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\5Y"+
		"\u05cc\nY\3Z\3Z\3Z\3Z\7Z\u05d2\nZ\fZ\16Z\u05d5\13Z\3[\3[\3[\3[\7[\u05db"+
		"\n[\f[\16[\u05de\13[\3\\\3\\\3\\\3]\3]\3]\3]\3]\3]\3]\3]\3]\5]\u05ec\n"+
		"]\3^\3^\5^\u05f0\n^\3^\3^\5^\u05f4\n^\3_\3_\5_\u05f8\n_\3`\3`\3`\3`\3"+
		"`\3`\3`\3`\3`\3`\3`\3`\5`\u0606\n`\3a\3a\3a\3a\7a\u060c\na\fa\16a\u060f"+
		"\13a\3b\3b\3b\3b\3b\3b\5b\u0617\nb\3c\3c\3c\3c\3d\3d\3d\3e\3e\5e\u0622"+
		"\ne\3e\3e\3f\3f\3f\5f\u0629\nf\3f\5f\u062c\nf\3f\3f\3f\3g\3g\3g\3g\5g"+
		"\u0635\ng\3h\3h\5h\u0639\nh\3i\3i\3i\3i\3i\5i\u0640\ni\3j\3j\3j\3j\3j"+
		"\5j\u0647\nj\3k\3k\3k\3k\5k\u064d\nk\3k\3k\3l\3l\3l\3l\5l\u0655\nl\3l"+
		"\3l\3m\3m\3m\3m\5m\u065d\nm\3m\3m\3n\3n\5n\u0663\nn\3n\3n\5n\u0667\nn"+
		"\3n\3n\5n\u066b\nn\3n\3n\5n\u066f\nn\3o\3o\3o\3o\7o\u0675\no\fo\16o\u0678"+
		"\13o\3p\3p\3p\3p\3p\5p\u067f\np\3p\3p\5p\u0683\np\3q\3q\3q\5q\u0688\n"+
		"q\3q\3q\3q\5q\u068d\nq\3q\3q\5q\u0691\nq\3r\3r\3r\3s\3s\3s\3s\7s\u069a"+
		"\ns\fs\16s\u069d\13s\3t\3t\3t\3t\3u\3u\3u\3u\3u\7u\u06a8\nu\fu\16u\u06ab"+
		"\13u\3u\5u\u06ae\nu\3v\3v\3v\3v\5v\u06b4\nv\3v\3v\3v\3v\3v\5v\u06bb\n"+
		"v\3v\3v\3v\3v\3v\3v\3v\5v\u06c4\nv\3v\3v\3v\3v\3v\3v\3v\5v\u06cd\nv\3"+
		"v\3v\3v\3v\3v\3v\3v\5v\u06d6\nv\3v\3v\3v\3v\3v\3v\3v\5v\u06df\nv\3v\3"+
		"v\3v\3v\3v\3v\3v\5v\u06e8\nv\3v\3v\3v\3v\3v\3v\3v\5v\u06f1\nv\3v\3v\3"+
		"v\3v\3v\3v\3v\3v\3v\3v\5v\u06fd\nv\3w\3w\3w\3w\3w\7w\u0704\nw\fw\16w\u0707"+
		"\13w\3w\3w\3x\3x\3x\3x\3x\3x\3x\3x\3x\7x\u0714\nx\fx\16x\u0717\13x\3x"+
		"\3x\3y\3y\3y\3y\3y\7y\u0720\ny\fy\16y\u0723\13y\3y\3y\3z\3z\3z\3z\3z\3"+
		"z\5z\u072d\nz\3z\5z\u0730\nz\3{\3{\3{\3{\3{\3{\3{\3{\3{\3{\3{\3{\3{\3"+
		"{\3{\3{\5{\u0742\n{\3|\3|\3|\3}\3}\3}\3~\3~\3~\3\177\3\177\3\177\3\177"+
		"\3\u0080\3\u0080\3\u0080\3\u0081\3\u0081\3\u0081\3\u0081\3\u0081\5\u0081"+
		"\u0759\n\u0081\3\u0081\5\u0081\u075c\n\u0081\3\u0082\3\u0082\3\u0082\3"+
		"\u0082\3\u0082\5\u0082\u0763\n\u0082\3\u0083\3\u0083\3\u0083\3\u0083\5"+
		"\u0083\u0769\n\u0083\7\u0083\u076b\n\u0083\f\u0083\16\u0083\u076e\13\u0083"+
		"\3\u0083\5\u0083\u0771\n\u0083\3\u0084\3\u0084\3\u0084\3\u0084\5\u0084"+
		"\u0777\n\u0084\7\u0084\u0779\n\u0084\f\u0084\16\u0084\u077c\13\u0084\3"+
		"\u0084\5\u0084\u077f\n\u0084\3\u0085\3\u0085\3\u0085\3\u0085\7\u0085\u0785"+
		"\n\u0085\f\u0085\16\u0085\u0788\13\u0085\3\u0086\3\u0086\5\u0086\u078c"+
		"\n\u0086\3\u0086\5\u0086\u078f\n\u0086\3\u0087\3\u0087\5\u0087\u0793\n"+
		"\u0087\3\u0087\3\u0087\3\u0087\5\u0087\u0798\n\u0087\3\u0087\5\u0087\u079b"+
		"\n\u0087\3\u0087\5\u0087\u079e\n\u0087\3\u0087\5\u0087\u07a1\n\u0087\3"+
		"\u0088\3\u0088\3\u0088\5\u0088\u07a6\n\u0088\3\u0089\3\u0089\3\u0089\3"+
		"\u0089\5\u0089\u07ac\n\u0089\3\u008a\3\u008a\3\u008a\3\u008b\3\u008b\3"+
		"\u008b\5\u008b\u07b4\n\u008b\3\u008b\5\u008b\u07b7\n\u008b\3\u008c\3\u008c"+
		"\3\u008c\3\u008d\3\u008d\3\u008d\3\u008d\3\u008d\7\u008d\u07c1\n\u008d"+
		"\f\u008d\16\u008d\u07c4\13\u008d\3\u008d\5\u008d\u07c7\n\u008d\3\u008e"+
		"\3\u008e\3\u008e\3\u008e\3\u008e\5\u008e\u07ce\n\u008e\3\u008e\3\u008e"+
		"\3\u008e\3\u008e\5\u008e\u07d4\n\u008e\3\u008e\5\u008e\u07d7\n\u008e\3"+
		"\u008f\3\u008f\3\u008f\3\u008f\7\u008f\u07dd\n\u008f\f\u008f\16\u008f"+
		"\u07e0\13\u008f\3\u0090\3\u0090\3\u0090\3\u0090\3\u0090\3\u0090\5\u0090"+
		"\u07e8\n\u0090\3\u0091\3\u0091\3\u0091\3\u0091\5\u0091\u07ee\n\u0091\3"+
		"\u0092\3\u0092\3\u0092\3\u0092\5\u0092\u07f4\n\u0092\3\u0092\3\u0092\3"+
		"\u0093\3\u0093\3\u0093\5\u0093\u07fb\n\u0093\3\u0093\3\u0093\3\u0094\3"+
		"\u0094\3\u0094\5\u0094\u0802\n\u0094\3\u0094\3\u0094\5\u0094\u0806\n\u0094"+
		"\3\u0094\3\u0094\5\u0094\u080a\n\u0094\3\u0094\5\u0094\u080d\n\u0094\3"+
		"\u0095\3\u0095\3\u0095\3\u0095\3\u0095\3\u0095\3\u0095\3\u0095\5\u0095"+
		"\u0817\n\u0095\3\u0096\3\u0096\3\u0096\3\u0096\3\u0096\3\u0096\3\u0096"+
		"\5\u0096\u0820\n\u0096\3\u0096\5\u0096\u0823\n\u0096\3\u0097\3\u0097\3"+
		"\u0097\5\u0097\u0828\n\u0097\3\u0097\3\u0097\3\u0097\3\u0097\5\u0097\u082e"+
		"\n\u0097\7\u0097\u0830\n\u0097\f\u0097\16\u0097\u0833\13\u0097\3\u0098"+
		"\3\u0098\3\u0098\3\u0098\3\u0098\3\u0098\3\u0098\5\u0098\u083c\n\u0098"+
		"\3\u0099\3\u0099\3\u0099\3\u0099\3\u0099\5\u0099\u0843\n\u0099\3\u009a"+
		"\3\u009a\3\u009a\3\u009a\3\u009b\3\u009b\3\u009b\3\u009b\5\u009b\u084d"+
		"\n\u009b\3\u009c\3\u009c\3\u009c\3\u009c\3\u009c\7\u009c\u0854\n\u009c"+
		"\f\u009c\16\u009c\u0857\13\u009c\3\u009c\3\u009c\3\u009d\3\u009d\3\u009d"+
		"\3\u009d\3\u009d\7\u009d\u0860\n\u009d\f\u009d\16\u009d\u0863\13\u009d"+
		"\3\u009d\3\u009d\3\u009e\3\u009e\3\u009e\3\u009e\3\u009e\7\u009e\u086c"+
		"\n\u009e\f\u009e\16\u009e\u086f\13\u009e\3\u009e\3\u009e\3\u009f\3\u009f"+
		"\3\u009f\3\u009f\3\u009f\7\u009f\u0878\n\u009f\f\u009f\16\u009f\u087b"+
		"\13\u009f\3\u009f\3\u009f\3\u00a0\3\u00a0\3\u00a1\3\u00a1\3\u00a2\3\u00a2"+
		"\3\u00a3\3\u00a3\3\u00a4\3\u00a4\3\u00a5\3\u00a5\3\u00a6\3\u00a6\3\u00a6"+
		"\3\u00a6\3\u00a6\3\u00a6\3\u00a6\3\u00a6\3\u00a6\3\u00a6\3\u00a6\3\u00a6"+
		"\3\u00a6\3\u00a6\3\u00a6\3\u00a6\3\u00a6\3\u00a6\3\u00a6\3\u00a6\5\u00a6"+
		"\u089f\n\u00a6\3\u00a7\3\u00a7\3\u00a7\3\u00a7\3\u00a7\3\u00a7\3\u00a7"+
		"\3\u00a7\3\u00a7\3\u00a7\3\u00a7\3\u00a7\3\u00a7\3\u00a7\3\u00a7\3\u00a7"+
		"\3\u00a7\3\u00a7\3\u00a7\3\u00a7\5\u00a7\u08b5\n\u00a7\3\u00a8\3\u00a8"+
		"\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9"+
		"\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9"+
		"\3\u00a9\3\u00a9\5\u00a9\u08cd\n\u00a9\3\u00aa\3\u00aa\3\u00aa\3\u00aa"+
		"\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa"+
		"\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\3\u00aa\5\u00aa\u08e3"+
		"\n\u00aa\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab"+
		"\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab"+
		"\3\u00ab\3\u00ab\3\u00ab\5\u00ab\u08f9\n\u00ab\3\u00ac\3\u00ac\3\u00ac"+
		"\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac"+
		"\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\5\u00ac"+
		"\u090f\n\u00ac\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad"+
		"\3\u00ad\3\u00ad\3\u00ad\5\u00ad\u091b\n\u00ad\3\u00ae\3\u00ae\3\u00ae"+
		"\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00ae\5\u00ae\u0927"+
		"\n\u00ae\3\u00af\3\u00af\3\u00af\3\u00af\3\u00af\3\u00af\3\u00af\3\u00af"+
		"\3\u00af\3\u00af\5\u00af\u0933\n\u00af\3\u00b0\3\u00b0\3\u00b0\3\u00b0"+
		"\3\u00b0\3\u00b0\3\u00b0\3\u00b0\3\u00b0\3\u00b0\3\u00b0\3\u00b0\3\u00b0"+
		"\3\u00b0\3\u00b0\3\u00b0\3\u00b0\3\u00b0\3\u00b0\3\u00b0\5\u00b0\u0949"+
		"\n\u00b0\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1"+
		"\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1"+
		"\3\u00b1\3\u00b1\3\u00b1\5\u00b1\u095f\n\u00b1\3\u00b2\3\u00b2\3\u00b2"+
		"\3\u00b2\3\u00b2\3\u00b2\3\u00b2\3\u00b2\3\u00b2\3\u00b2\5\u00b2\u096b"+
		"\n\u00b2\3\u00b3\3\u00b3\3\u00b3\3\u00b3\3\u00b3\3\u00b3\3\u00b3\3\u00b3"+
		"\3\u00b3\3\u00b3\5\u00b3\u0977\n\u00b3\3\u00b4\3\u00b4\3\u00b4\5\u00b4"+
		"\u097c\n\u00b4\3\u00b5\3\u00b5\3\u00b5\3\u00b5\3\u00b5\3\u00b5\5\u00b5"+
		"\u0984\n\u00b5\3\u00b6\3\u00b6\3\u00b6\3\u00b6\3\u00b6\5\u00b6\u098b\n"+
		"\u00b6\3\u00b7\3\u00b7\3\u00b8\3\u00b8\3\u00b8\3\u00b8\3\u00b8\5\u00b8"+
		"\u0994\n\u00b8\3\u00b9\3\u00b9\3\u00ba\3\u00ba\5\u00ba\u099a\n\u00ba\3"+
		"\u00bb\3\u00bb\3\u00bb\5\u00bb\u099f\n\u00bb\3\u00bb\3\u00bb\3\u00bb\5"+
		"\u00bb\u09a4\n\u00bb\3\u00bb\3\u00bb\3\u00bb\5\u00bb\u09a9\n\u00bb\3\u00bb"+
		"\3\u00bb\3\u00bb\5\u00bb\u09ae\n\u00bb\3\u00bb\3\u00bb\3\u00bb\5\u00bb"+
		"\u09b3\n\u00bb\5\u00bb\u09b5\n\u00bb\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3"+
		"\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bc"+
		"\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bc\5\u00bc"+
		"\u09cc\n\u00bc\3\u00bd\3\u00bd\5\u00bd\u09d0\n\u00bd\3\u00be\3\u00be\3"+
		"\u00bf\3\u00bf\3\u00c0\3\u00c0\3\u00c1\3\u00c1\3\u00c2\3\u00c2\3\u00c2"+
		"\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c2"+
		"\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c2\5\u00c2"+
		"\u09ee\n\u00c2\3\u00c3\3\u00c3\3\u00c4\3\u00c4\3\u00c5\3\u00c5\3\u00c6"+
		"\3\u00c6\3\u00c7\3\u00c7\3\u00c8\3\u00c8\3\u00c8\3\u00c9\3\u00c9\3\u00ca"+
		"\3\u00ca\3\u00cb\3\u00cb\3\u00cc\3\u00cc\3\u00cd\3\u00cd\3\u00ce\3\u00ce"+
		"\3\u00cf\3\u00cf\3\u00d0\3\u00d0\3\u00d0\3\u00d1\3\u00d1\3\u00d2\3\u00d2"+
		"\3\u00d2\3\u00d3\3\u00d3\3\u00d4\3\u00d4\3\u00d5\3\u00d5\3\u00d6\3\u00d6"+
		"\3\u00d7\3\u00d7\3\u00d8\3\u00d8\3\u00d9\3\u00d9\3\u00da\3\u00da\3\u00db"+
		"\3\u00db\3\u00dc\3\u00dc\3\u00dd\3\u00dd\3\u00de\3\u00de\3\u00df\3\u00df"+
		"\3\u00e0\3\u00e0\3\u00e0\3\u00e1\3\u00e1\3\u00e2\3\u00e2\3\u00e3\3\u00e3"+
		"\3\u00e4\3\u00e4\3\u00e5\3\u00e5\3\u00e6\3\u00e6\3\u00e7\3\u00e7\3\u00e8"+
		"\3\u00e8\3\u00e9\3\u00e9\3\u00ea\3\u00ea\3\u00eb\3\u00eb\3\u00ec\3\u00ec"+
		"\3\u00ed\3\u00ed\3\u00ee\3\u00ee\3\u00ef\3\u00ef\3\u00f0\3\u00f0\3\u00f1"+
		"\3\u00f1\3\u00f2\3\u00f2\3\u00f3\3\u00f3\3\u00f4\3\u00f4\3\u00f5\3\u00f5"+
		"\3\u00f6\3\u00f6\3\u00f6\3\u00f7\3\u00f7\3\u00f8\3\u00f8\3\u00f9\3\u00f9"+
		"\3\u00fa\3\u00fa\3\u00fb\3\u00fb\3\u00fc\3\u00fc\3\u00fd\3\u00fd\3\u00fe"+
		"\3\u00fe\3\u00fe\3\u00ff\3\u00ff\3\u00ff\3\u0100\3\u0100\3\u0101\3\u0101"+
		"\3\u0102\3\u0102\3\u0102\3\u0103\3\u0103\3\u0104\3\u0104\3\u0105\3\u0105"+
		"\3\u0106\3\u0106\3\u0107\3\u0107\3\u0108\3\u0108\3\u0109\3\u0109\3\u010a"+
		"\3\u010a\3\u010b\3\u010b\3\u010c\3\u010c\3\u010d\3\u010d\3\u010d\3\u010e"+
		"\3\u010e\3\u010f\3\u010f\3\u0110\3\u0110\3\u0111\3\u0111\3\u0112\3\u0112"+
		"\3\u0113\3\u0113\3\u0114\3\u0114\3\u0115\3\u0115\3\u0116\3\u0116\3\u0117"+
		"\3\u0117\3\u0118\3\u0118\3\u0119\3\u0119\3\u011a\3\u011a\3\u011b\3\u011b"+
		"\3\u011c\3\u011c\3\u011d\3\u011d\3\u011e\3\u011e\3\u011f\3\u011f\3\u0120"+
		"\3\u0120\3\u0121\3\u0121\3\u0122\3\u0122\3\u0123\3\u0123\3\u0124\3\u0124"+
		"\3\u0125\3\u0125\3\u0126\3\u0126\3\u0127\3\u0127\3\u0128\3\u0128\3\u0129"+
		"\3\u0129\3\u012a\3\u012a\3\u012b\3\u012b\3\u012c\3\u012c\3\u012d\3\u012d"+
		"\3\u012e\3\u012e\3\u012f\3\u012f\3\u0130\3\u0130\3\u0131\3\u0131\3\u0132"+
		"\3\u0132\3\u0133\3\u0133\3\u0134\3\u0134\3\u0135\3\u0135\3\u0136\3\u0136"+
		"\3\u0137\3\u0137\3\u0138\3\u0138\3\u0139\3\u0139\3\u013a\3\u013a\3\u013b"+
		"\3\u013b\3\u013c\3\u013c\3\u013d\3\u013d\3\u013e\3\u013e\3\u013f\3\u013f"+
		"\3\u0140\3\u0140\3\u0141\3\u0141\3\u0142\3\u0142\3\u0143\3\u0143\3\u0144"+
		"\3\u0144\3\u0145\3\u0145\3\u0146\3\u0146\3\u0147\3\u0147\3\u0148\3\u0148"+
		"\3\u0149\3\u0149\3\u014a\3\u014a\3\u014a\3\u014a\3\u014a\7\u014a\u0b0c"+
		"\n\u014a\f\u014a\16\u014a\u0b0f\13\u014a\3\u014a\3\u014a\3\u014b\3\u014b"+
		"\3\u014c\3\u014c\3\u014d\3\u014d\3\u014e\3\u014e\3\u014f\3\u014f\3\u0150"+
		"\3\u0150\3\u0151\3\u0151\3\u0152\3\u0152\3\u0153\3\u0153\3\u0154\3\u0154"+
		"\3\u0155\3\u0155\3\u0156\3\u0156\3\u0157\3\u0157\3\u0158\3\u0158\3\u0159"+
		"\3\u0159\3\u015a\3\u015a\3\u015b\3\u015b\3\u015c\3\u015c\3\u015d\3\u015d"+
		"\3\u015e\3\u015e\3\u015f\3\u015f\3\u0160\3\u0160\3\u0160\2\2\u0161\2\4"+
		"\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNP"+
		"RTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e"+
		"\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\u00a6"+
		"\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6\u00b8\u00ba\u00bc\u00be"+
		"\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc\u00ce\u00d0\u00d2\u00d4\u00d6"+
		"\u00d8\u00da\u00dc\u00de\u00e0\u00e2\u00e4\u00e6\u00e8\u00ea\u00ec\u00ee"+
		"\u00f0\u00f2\u00f4\u00f6\u00f8\u00fa\u00fc\u00fe\u0100\u0102\u0104\u0106"+
		"\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e"+
		"\u0120\u0122\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136"+
		"\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u014a\u014c\u014e"+
		"\u0150\u0152\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166"+
		"\u0168\u016a\u016c\u016e\u0170\u0172\u0174\u0176\u0178\u017a\u017c\u017e"+
		"\u0180\u0182\u0184\u0186\u0188\u018a\u018c\u018e\u0190\u0192\u0194\u0196"+
		"\u0198\u019a\u019c\u019e\u01a0\u01a2\u01a4\u01a6\u01a8\u01aa\u01ac\u01ae"+
		"\u01b0\u01b2\u01b4\u01b6\u01b8\u01ba\u01bc\u01be\u01c0\u01c2\u01c4\u01c6"+
		"\u01c8\u01ca\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01de"+
		"\u01e0\u01e2\u01e4\u01e6\u01e8\u01ea\u01ec\u01ee\u01f0\u01f2\u01f4\u01f6"+
		"\u01f8\u01fa\u01fc\u01fe\u0200\u0202\u0204\u0206\u0208\u020a\u020c\u020e"+
		"\u0210\u0212\u0214\u0216\u0218\u021a\u021c\u021e\u0220\u0222\u0224\u0226"+
		"\u0228\u022a\u022c\u022e\u0230\u0232\u0234\u0236\u0238\u023a\u023c\u023e"+
		"\u0240\u0242\u0244\u0246\u0248\u024a\u024c\u024e\u0250\u0252\u0254\u0256"+
		"\u0258\u025a\u025c\u025e\u0260\u0262\u0264\u0266\u0268\u026a\u026c\u026e"+
		"\u0270\u0272\u0274\u0276\u0278\u027a\u027c\u027e\u0280\u0282\u0284\u0286"+
		"\u0288\u028a\u028c\u028e\u0290\u0292\u0294\u0296\u0298\u029a\u029c\u029e"+
		"\u02a0\u02a2\u02a4\u02a6\u02a8\u02aa\u02ac\u02ae\u02b0\u02b2\u02b4\u02b6"+
		"\u02b8\u02ba\u02bc\u02be\2\5\3\2\u00a6\u00a7\4\2<<}}\17\2\67\67GGLLOP"+
		"``ccggll\177\177\u0081\u0081\u0098\u0099\u00aa\u00aa\u00b1\u00b2\2\u0bb5"+
		"\2\u02c1\3\2\2\2\4\u02d1\3\2\2\2\6\u02de\3\2\2\2\b\u02e0\3\2\2\2\n\u0308"+
		"\3\2\2\2\f\u030a\3\2\2\2\16\u0311\3\2\2\2\20\u0313\3\2\2\2\22\u031c\3"+
		"\2\2\2\24\u0328\3\2\2\2\26\u033b\3\2\2\2\30\u0357\3\2\2\2\32\u0359\3\2"+
		"\2\2\34\u0366\3\2\2\2\36\u036f\3\2\2\2 \u0379\3\2\2\2\"\u0384\3\2\2\2"+
		"$\u038d\3\2\2\2&\u039f\3\2\2\2(\u03a6\3\2\2\2*\u03af\3\2\2\2,\u03be\3"+
		"\2\2\2.\u03c0\3\2\2\2\60\u03d1\3\2\2\2\62\u03e7\3\2\2\2\64\u03e9\3\2\2"+
		"\2\66\u03f6\3\2\2\28\u03fc\3\2\2\2:\u0415\3\2\2\2<\u0417\3\2\2\2>\u0423"+
		"\3\2\2\2@\u0427\3\2\2\2B\u0434\3\2\2\2D\u0440\3\2\2\2F\u0443\3\2\2\2H"+
		"\u044b\3\2\2\2J\u0450\3\2\2\2L\u0452\3\2\2\2N\u0458\3\2\2\2P\u0460\3\2"+
		"\2\2R\u0463\3\2\2\2T\u046c\3\2\2\2V\u0470\3\2\2\2X\u047c\3\2\2\2Z\u0481"+
		"\3\2\2\2\\\u048d\3\2\2\2^\u048f\3\2\2\2`\u0492\3\2\2\2b\u0497\3\2\2\2"+
		"d\u049b\3\2\2\2f\u049e\3\2\2\2h\u04a7\3\2\2\2j\u04aa\3\2\2\2l\u04b5\3"+
		"\2\2\2n\u04bb\3\2\2\2p\u04d5\3\2\2\2r\u04d7\3\2\2\2t\u04df\3\2\2\2v\u04e6"+
		"\3\2\2\2x\u04ed\3\2\2\2z\u04f4\3\2\2\2|\u04fb\3\2\2\2~\u0502\3\2\2\2\u0080"+
		"\u050b\3\2\2\2\u0082\u0512\3\2\2\2\u0084\u0519\3\2\2\2\u0086\u0520\3\2"+
		"\2\2\u0088\u0527\3\2\2\2\u008a\u0536\3\2\2\2\u008c\u0548\3\2\2\2\u008e"+
		"\u054a\3\2\2\2\u0090\u0559\3\2\2\2\u0092\u055d\3\2\2\2\u0094\u056e\3\2"+
		"\2\2\u0096\u0570\3\2\2\2\u0098\u0574\3\2\2\2\u009a\u0576\3\2\2\2\u009c"+
		"\u0582\3\2\2\2\u009e\u0586\3\2\2\2\u00a0\u058a\3\2\2\2\u00a2\u058c\3\2"+
		"\2\2\u00a4\u05a6\3\2\2\2\u00a6\u05ae\3\2\2\2\u00a8\u05b0\3\2\2\2\u00aa"+
		"\u05b9\3\2\2\2\u00ac\u05bb\3\2\2\2\u00ae\u05bd\3\2\2\2\u00b0\u05cb\3\2"+
		"\2\2\u00b2\u05cd\3\2\2\2\u00b4\u05d6\3\2\2\2\u00b6\u05df\3\2\2\2\u00b8"+
		"\u05eb\3\2\2\2\u00ba\u05ed\3\2\2\2\u00bc\u05f7\3\2\2\2\u00be\u05f9\3\2"+
		"\2\2\u00c0\u0607\3\2\2\2\u00c2\u0616\3\2\2\2\u00c4\u0618\3\2\2\2\u00c6"+
		"\u061c\3\2\2\2\u00c8\u061f\3\2\2\2\u00ca\u0625\3\2\2\2\u00cc\u0634\3\2"+
		"\2\2\u00ce\u0638\3\2\2\2\u00d0\u063f\3\2\2\2\u00d2\u0646\3\2\2\2\u00d4"+
		"\u0648\3\2\2\2\u00d6\u0650\3\2\2\2\u00d8\u0658\3\2\2\2\u00da\u0660\3\2"+
		"\2\2\u00dc\u0670\3\2\2\2\u00de\u0682\3\2\2\2\u00e0\u0684\3\2\2\2\u00e2"+
		"\u0692\3\2\2\2\u00e4\u0695\3\2\2\2\u00e6\u069e\3\2\2\2\u00e8\u06ad\3\2"+
		"\2\2\u00ea\u06fc\3\2\2\2\u00ec\u06fe\3\2\2\2\u00ee\u070a\3\2\2\2\u00f0"+
		"\u071a\3\2\2\2\u00f2\u0726\3\2\2\2\u00f4\u0741\3\2\2\2\u00f6\u0743\3\2"+
		"\2\2\u00f8\u0746\3\2\2\2\u00fa\u0749\3\2\2\2\u00fc\u074c\3\2\2\2\u00fe"+
		"\u0750\3\2\2\2\u0100\u075b\3\2\2\2\u0102\u0762\3\2\2\2\u0104\u0770\3\2"+
		"\2\2\u0106\u077e\3\2\2\2\u0108\u0780\3\2\2\2\u010a\u078e\3\2\2\2\u010c"+
		"\u0790\3\2\2\2\u010e\u07a2\3\2\2\2\u0110\u07ab\3\2\2\2\u0112\u07ad\3\2"+
		"\2\2\u0114\u07b6\3\2\2\2\u0116\u07b8\3\2\2\2\u0118\u07c6\3\2\2\2\u011a"+
		"\u07d6\3\2\2\2\u011c\u07d8\3\2\2\2\u011e\u07e7\3\2\2\2\u0120\u07e9\3\2"+
		"\2\2\u0122\u07ef\3\2\2\2\u0124\u07f7\3\2\2\2\u0126\u080c\3\2\2\2\u0128"+
		"\u0816\3\2\2\2\u012a\u0822\3\2\2\2\u012c\u0827\3\2\2\2\u012e\u083b\3\2"+
		"\2\2\u0130\u0842\3\2\2\2\u0132\u0844\3\2\2\2\u0134\u084c\3\2\2\2\u0136"+
		"\u084e\3\2\2\2\u0138\u085a\3\2\2\2\u013a\u0866\3\2\2\2\u013c\u0872\3\2"+
		"\2\2\u013e\u087e\3\2\2\2\u0140\u0880\3\2\2\2\u0142\u0882\3\2\2\2\u0144"+
		"\u0884\3\2\2\2\u0146\u0886\3\2\2\2\u0148\u0888\3\2\2\2\u014a\u089e\3\2"+
		"\2\2\u014c\u08b4\3\2\2\2\u014e\u08b6\3\2\2\2\u0150\u08cc\3\2\2\2\u0152"+
		"\u08e2\3\2\2\2\u0154\u08f8\3\2\2\2\u0156\u090e\3\2\2\2\u0158\u091a\3\2"+
		"\2\2\u015a\u0926\3\2\2\2\u015c\u0932\3\2\2\2\u015e\u0948\3\2\2\2\u0160"+
		"\u095e\3\2\2\2\u0162\u096a\3\2\2\2\u0164\u0976\3\2\2\2\u0166\u097b\3\2"+
		"\2\2\u0168\u0983\3\2\2\2\u016a\u098a\3\2\2\2\u016c\u098c\3\2\2\2\u016e"+
		"\u0993\3\2\2\2\u0170\u0995\3\2\2\2\u0172\u0999\3\2\2\2\u0174\u09b4\3\2"+
		"\2\2\u0176\u09cb\3\2\2\2\u0178\u09cf\3\2\2\2\u017a\u09d1\3\2\2\2\u017c"+
		"\u09d3\3\2\2\2\u017e\u09d5\3\2\2\2\u0180\u09d7\3\2\2\2\u0182\u09ed\3\2"+
		"\2\2\u0184\u09ef\3\2\2\2\u0186\u09f1\3\2\2\2\u0188\u09f3\3\2\2\2\u018a"+
		"\u09f5\3\2\2\2\u018c\u09f7\3\2\2\2\u018e\u09f9\3\2\2\2\u0190\u09fc\3\2"+
		"\2\2\u0192\u09fe\3\2\2\2\u0194\u0a00\3\2\2\2\u0196\u0a02\3\2\2\2\u0198"+
		"\u0a04\3\2\2\2\u019a\u0a06\3\2\2\2\u019c\u0a08\3\2\2\2\u019e\u0a0a\3\2"+
		"\2\2\u01a0\u0a0d\3\2\2\2\u01a2\u0a0f\3\2\2\2\u01a4\u0a12\3\2\2\2\u01a6"+
		"\u0a14\3\2\2\2\u01a8\u0a16\3\2\2\2\u01aa\u0a18\3\2\2\2\u01ac\u0a1a\3\2"+
		"\2\2\u01ae\u0a1c\3\2\2\2\u01b0\u0a1e\3\2\2\2\u01b2\u0a20\3\2\2\2\u01b4"+
		"\u0a22\3\2\2\2\u01b6\u0a24\3\2\2\2\u01b8\u0a26\3\2\2\2\u01ba\u0a28\3\2"+
		"\2\2\u01bc\u0a2a\3\2\2\2\u01be\u0a2c\3\2\2\2\u01c0\u0a2f\3\2\2\2\u01c2"+
		"\u0a31\3\2\2\2\u01c4\u0a33\3\2\2\2\u01c6\u0a35\3\2\2\2\u01c8\u0a37\3\2"+
		"\2\2\u01ca\u0a39\3\2\2\2\u01cc\u0a3b\3\2\2\2\u01ce\u0a3d\3\2\2\2\u01d0"+
		"\u0a3f\3\2\2\2\u01d2\u0a41\3\2\2\2\u01d4\u0a43\3\2\2\2\u01d6\u0a45\3\2"+
		"\2\2\u01d8\u0a47\3\2\2\2\u01da\u0a49\3\2\2\2\u01dc\u0a4b\3\2\2\2\u01de"+
		"\u0a4d\3\2\2\2\u01e0\u0a4f\3\2\2\2\u01e2\u0a51\3\2\2\2\u01e4\u0a53\3\2"+
		"\2\2\u01e6\u0a55\3\2\2\2\u01e8\u0a57\3\2\2\2\u01ea\u0a59\3\2\2\2\u01ec"+
		"\u0a5c\3\2\2\2\u01ee\u0a5e\3\2\2\2\u01f0\u0a60\3\2\2\2\u01f2\u0a62\3\2"+
		"\2\2\u01f4\u0a64\3\2\2\2\u01f6\u0a66\3\2\2\2\u01f8\u0a68\3\2\2\2\u01fa"+
		"\u0a6a\3\2\2\2\u01fc\u0a6d\3\2\2\2\u01fe\u0a70\3\2\2\2\u0200\u0a72\3\2"+
		"\2\2\u0202\u0a74\3\2\2\2\u0204\u0a77\3\2\2\2\u0206\u0a79\3\2\2\2\u0208"+
		"\u0a7b\3\2\2\2\u020a\u0a7d\3\2\2\2\u020c\u0a7f\3\2\2\2\u020e\u0a81\3\2"+
		"\2\2\u0210\u0a83\3\2\2\2\u0212\u0a85\3\2\2\2\u0214\u0a87\3\2\2\2\u0216"+
		"\u0a89\3\2\2\2\u0218\u0a8b\3\2\2\2\u021a\u0a8e\3\2\2\2\u021c\u0a90\3\2"+
		"\2\2\u021e\u0a92\3\2\2\2\u0220\u0a94\3\2\2\2\u0222\u0a96\3\2\2\2\u0224"+
		"\u0a98\3\2\2\2\u0226\u0a9a\3\2\2\2\u0228\u0a9c\3\2\2\2\u022a\u0a9e\3\2"+
		"\2\2\u022c\u0aa0\3\2\2\2\u022e\u0aa2\3\2\2\2\u0230\u0aa4\3\2\2\2\u0232"+
		"\u0aa6\3\2\2\2\u0234\u0aa8\3\2\2\2\u0236\u0aaa\3\2\2\2\u0238\u0aac\3\2"+
		"\2\2\u023a\u0aae\3\2\2\2\u023c\u0ab0\3\2\2\2\u023e\u0ab2\3\2\2\2\u0240"+
		"\u0ab4\3\2\2\2\u0242\u0ab6\3\2\2\2\u0244\u0ab8\3\2\2\2\u0246\u0aba\3\2"+
		"\2\2\u0248\u0abc\3\2\2\2\u024a\u0abe\3\2\2\2\u024c\u0ac0\3\2\2\2\u024e"+
		"\u0ac2\3\2\2\2\u0250\u0ac4\3\2\2\2\u0252\u0ac6\3\2\2\2\u0254\u0ac8\3\2"+
		"\2\2\u0256\u0aca\3\2\2\2\u0258\u0acc\3\2\2\2\u025a\u0ace\3\2\2\2\u025c"+
		"\u0ad0\3\2\2\2\u025e\u0ad2\3\2\2\2\u0260\u0ad4\3\2\2\2\u0262\u0ad6\3\2"+
		"\2\2\u0264\u0ad8\3\2\2\2\u0266\u0ada\3\2\2\2\u0268\u0adc\3\2\2\2\u026a"+
		"\u0ade\3\2\2\2\u026c\u0ae0\3\2\2\2\u026e\u0ae2\3\2\2\2\u0270\u0ae4\3\2"+
		"\2\2\u0272\u0ae6\3\2\2\2\u0274\u0ae8\3\2\2\2\u0276\u0aea\3\2\2\2\u0278"+
		"\u0aec\3\2\2\2\u027a\u0aee\3\2\2\2\u027c\u0af0\3\2\2\2\u027e\u0af2\3\2"+
		"\2\2\u0280\u0af4\3\2\2\2\u0282\u0af6\3\2\2\2\u0284\u0af8\3\2\2\2\u0286"+
		"\u0afa\3\2\2\2\u0288\u0afc\3\2\2\2\u028a\u0afe\3\2\2\2\u028c\u0b00\3\2"+
		"\2\2\u028e\u0b02\3\2\2\2\u0290\u0b04\3\2\2\2\u0292\u0b06\3\2\2\2\u0294"+
		"\u0b12\3\2\2\2\u0296\u0b14\3\2\2\2\u0298\u0b16\3\2\2\2\u029a\u0b18\3\2"+
		"\2\2\u029c\u0b1a\3\2\2\2\u029e\u0b1c\3\2\2\2\u02a0\u0b1e\3\2\2\2\u02a2"+
		"\u0b20\3\2\2\2\u02a4\u0b22\3\2\2\2\u02a6\u0b24\3\2\2\2\u02a8\u0b26\3\2"+
		"\2\2\u02aa\u0b28\3\2\2\2\u02ac\u0b2a\3\2\2\2\u02ae\u0b2c\3\2\2\2\u02b0"+
		"\u0b2e\3\2\2\2\u02b2\u0b30\3\2\2\2\u02b4\u0b32\3\2\2\2\u02b6\u0b34\3\2"+
		"\2\2\u02b8\u0b36\3\2\2\2\u02ba\u0b38\3\2\2\2\u02bc\u0b3a\3\2\2\2\u02be"+
		"\u0b3c\3\2\2\2\u02c0\u02c2\5\4\3\2\u02c1\u02c0\3\2\2\2\u02c1\u02c2\3\2"+
		"\2\2\u02c2\u02c4\3\2\2\2\u02c3\u02c5\7\27\2\2\u02c4\u02c3\3\2\2\2\u02c4"+
		"\u02c5\3\2\2\2\u02c5\u02c6\3\2\2\2\u02c6\u02c7\5\u0298\u014d\2\u02c7\3"+
		"\3\2\2\2\u02c8\u02ca\5\n\6\2\u02c9\u02cb\7\27\2\2\u02ca\u02c9\3\2\2\2"+
		"\u02ca\u02cb\3\2\2\2\u02cb\u02cc\3\2\2\2\u02cc\u02cd\5\6\4\2\u02cd\u02d0"+
		"\3\2\2\2\u02ce\u02d0\5\b\5\2\u02cf\u02c8\3\2\2\2\u02cf\u02ce\3\2\2\2\u02d0"+
		"\u02d3\3\2\2\2\u02d1\u02cf\3\2\2\2\u02d1\u02d2\3\2\2\2\u02d2\u02dc\3\2"+
		"\2\2\u02d3\u02d1\3\2\2\2\u02d4\u02d9\5\n\6\2\u02d5\u02d7\7\27\2\2\u02d6"+
		"\u02d5\3\2\2\2\u02d6\u02d7\3\2\2\2\u02d7\u02d8\3\2\2\2\u02d8\u02da\5\6"+
		"\4\2\u02d9\u02d6\3\2\2\2\u02d9\u02da\3\2\2\2\u02da\u02dd\3\2\2\2\u02db"+
		"\u02dd\5\b\5\2\u02dc\u02d4\3\2\2\2\u02dc\u02db\3\2\2\2\u02dd\5\3\2\2\2"+
		"\u02de\u02df\7\n\2\2\u02df\7\3\2\2\2\u02e0\u02e1\5\6\4\2\u02e1\t\3\2\2"+
		"\2\u02e2\u0309\5\u00b8]\2\u02e3\u0309\5\u00be`\2\u02e4\u0309\5r:\2\u02e5"+
		"\u0309\5l\67\2\u02e6\u0309\5Z.\2\u02e7\u0309\5L\'\2\u02e8\u0309\5F$\2"+
		"\u02e9\u0309\5\u00b6\\\2\u02ea\u0309\58\35\2\u02eb\u0309\5\60\31\2\u02ec"+
		"\u0309\5\u00caf\2\u02ed\u0309\5.\30\2\u02ee\u0309\5$\23\2\u02ef\u0309"+
		"\5\34\17\2\u02f0\u0309\5\u0088E\2\u02f1\u0309\5\"\22\2\u02f2\u0309\5\36"+
		"\20\2\u02f3\u0309\5\32\16\2\u02f4\u0309\5\u00dan\2\u02f5\u0309\5z>\2\u02f6"+
		"\u0309\5|?\2\u02f7\u0309\5\u0086D\2\u02f8\u0309\5\u0084C\2\u02f9\u0309"+
		"\5x=\2\u02fa\u0309\5\u0080A\2\u02fb\u0309\5\u0082B\2\u02fc\u0309\5~@\2"+
		"\u02fd\u0309\5v<\2\u02fe\u0309\5t;\2\u02ff\u0309\5\24\13\2\u0300\u0309"+
		"\5\u00f2z\2\u0301\u0309\5\22\n\2\u0302\u0309\5\20\t\2\u0303\u0309\5\f"+
		"\7\2\u0304\u0309\5\u010c\u0087\2\u0305\u0309\5\u00c8e\2\u0306\u0309\5"+
		"\u00e0q\2\u0307\u0309\5\u00c6d\2\u0308\u02e2\3\2\2\2\u0308\u02e3\3\2\2"+
		"\2\u0308\u02e4\3\2\2\2\u0308\u02e5\3\2\2\2\u0308\u02e6\3\2\2\2\u0308\u02e7"+
		"\3\2\2\2\u0308\u02e8\3\2\2\2\u0308\u02e9\3\2\2\2\u0308\u02ea\3\2\2\2\u0308"+
		"\u02eb\3\2\2\2\u0308\u02ec\3\2\2\2\u0308\u02ed\3\2\2\2\u0308\u02ee\3\2"+
		"\2\2\u0308\u02ef\3\2\2\2\u0308\u02f0\3\2\2\2\u0308\u02f1\3\2\2\2\u0308"+
		"\u02f2\3\2\2\2\u0308\u02f3\3\2\2\2\u0308\u02f4\3\2\2\2\u0308\u02f5\3\2"+
		"\2\2\u0308\u02f6\3\2\2\2\u0308\u02f7\3\2\2\2\u0308\u02f8\3\2\2\2\u0308"+
		"\u02f9\3\2\2\2\u0308\u02fa\3\2\2\2\u0308\u02fb\3\2\2\2\u0308\u02fc\3\2"+
		"\2\2\u0308\u02fd\3\2\2\2\u0308\u02fe\3\2\2\2\u0308\u02ff\3\2\2\2\u0308"+
		"\u0300\3\2\2\2\u0308\u0301\3\2\2\2\u0308\u0302\3\2\2\2\u0308\u0303\3\2"+
		"\2\2\u0308\u0304\3\2\2\2\u0308\u0305\3\2\2\2\u0308\u0306\3\2\2\2\u0308"+
		"\u0307\3\2\2\2\u0309\13\3\2\2\2\u030a\u030b\5\u025c\u012f\2\u030b\u030c"+
		"\5\26\f\2\u030c\u030d\5\u0210\u0109\2\u030d\u030e\5\30\r\2\u030e\u030f"+
		"\5\u01d8\u00ed\2\u030f\u0310\5\u017a\u00be\2\u0310\r\3\2\2\2\u0311\u0312"+
		"\5\u01fc\u00ff\2\u0312\17\3\2\2\2\u0313\u0317\5\u01fa\u00fe\2\u0314\u0315"+
		"\5\u020e\u0108\2\u0315\u0316\5\u017a\u00be\2\u0316\u0318\3\2\2\2\u0317"+
		"\u0314\3\2\2\2\u0317\u0318\3\2\2\2\u0318\u031a\3\2\2\2\u0319\u031b\5\u0208"+
		"\u0105\2\u031a\u0319\3\2\2\2\u031a\u031b\3\2\2\2\u031b\21\3\2\2\2\u031c"+
		"\u031d\5\u01f8\u00fd\2\u031d\u0321\5\26\f\2\u031e\u031f\5\u0210\u0109"+
		"\2\u031f\u0320\5\30\r\2\u0320\u0322\3\2\2\2\u0321\u031e\3\2\2\2\u0321"+
		"\u0322\3\2\2\2\u0322\u0326\3\2\2\2\u0323\u0324\5\u020e\u0108\2\u0324\u0325"+
		"\5\u017a\u00be\2\u0325\u0327\3\2\2\2\u0326\u0323\3\2\2\2\u0326\u0327\3"+
		"\2\2\2\u0327\23\3\2\2\2\u0328\u0329\5\u01de\u00f0\2\u0329\u032a\5\26\f"+
		"\2\u032a\u032b\5\u0210\u0109\2\u032b\u032c\5\30\r\2\u032c\u032d\5\u023e"+
		"\u0120\2\u032d\u032e\5\u017a\u00be\2\u032e\25\3\2\2\2\u032f\u0332\5\u0196"+
		"\u00cc\2\u0330\u0332\5\u019e\u00d0\2\u0331\u032f\3\2\2\2\u0331\u0330\3"+
		"\2\2\2\u0332\u033c\3\2\2\2\u0333\u033c\5\u01a4\u00d3\2\u0334\u033c\5\u01ae"+
		"\u00d8\2\u0335\u033c\5\u01c6\u00e4\2\u0336\u033c\5\u01d0\u00e9\2\u0337"+
		"\u033c\5\u01c0\u00e1\2\u0338\u033c\5\u01ca\u00e6\2\u0339\u033c\5\u0204"+
		"\u0103\2\u033a\u033c\5\u022c\u0117\2\u033b\u0331\3\2\2\2\u033b\u0333\3"+
		"\2\2\2\u033b\u0334\3\2\2\2\u033b\u0335\3\2\2\2\u033b\u0336\3\2\2\2\u033b"+
		"\u0337\3\2\2\2\u033b\u0338\3\2\2\2\u033b\u0339\3\2\2\2\u033b\u033a\3\2"+
		"\2\2\u033c\27\3\2\2\2\u033d\u0358\5\u0198\u00cd\2\u033e\u033f\5\u0198"+
		"\u00cd\2\u033f\u0340\5\u01e2\u00f2\2\u0340\u0341\5\u01f2\u00fa\2\u0341"+
		"\u0342\5\u014a\u00a6\2\u0342\u0358\3\2\2\2\u0343\u0347\5\u01dc\u00ef\2"+
		"\u0344\u0345\5\u014a\u00a6\2\u0345\u0346\7\22\2\2\u0346\u0348\3\2\2\2"+
		"\u0347\u0344\3\2\2\2\u0347\u0348\3\2\2\2\u0348\u0349\3\2\2\2\u0349\u034a"+
		"\5\u0184\u00c3\2\u034a\u0358\3\2\2\2\u034b\u0358\5\u019a\u00ce\2\u034c"+
		"\u034d\5\u01f2\u00fa\2\u034d\u034e\5\u014a\u00a6\2\u034e\u0358\3\2\2\2"+
		"\u034f\u0351\5\u023a\u011e\2\u0350\u034f\3\2\2\2\u0350\u0351\3\2\2\2\u0351"+
		"\u0352\3\2\2\2\u0352\u0358\5\u015e\u00b0\2\u0353\u0358\5\u019c\u00cf\2"+
		"\u0354\u0355\5\u022a\u0116\2\u0355\u0356\5\u017a\u00be\2\u0356\u0358\3"+
		"\2\2\2\u0357\u033d\3\2\2\2\u0357\u033e\3\2\2\2\u0357\u0343\3\2\2\2\u0357"+
		"\u034b\3\2\2\2\u0357\u034c\3\2\2\2\u0357\u0350\3\2\2\2\u0357\u0353\3\2"+
		"\2\2\u0357\u0354\3\2\2\2\u0358\31\3\2\2\2\u0359\u035a\5\u01c0\u00e1\2"+
		"\u035a\u035c\5\u0250\u0129\2\u035b\u035d\5\u00fc\177\2\u035c\u035b\3\2"+
		"\2\2\u035c\u035d\3\2\2\2\u035d\u035e\3\2\2\2\u035e\u035f\5\u0188\u00c5"+
		"\2\u035f\u0360\5\u025a\u012e\2\u0360\u0361\5\u021c\u010f\2\u0361\u0364"+
		"\5\u0144\u00a3\2\u0362\u0365\5\u0238\u011d\2\u0363\u0365\5\u0206\u0104"+
		"\2\u0364\u0362\3\2\2\2\u0364\u0363\3\2\2\2\u0364\u0365\3\2\2\2\u0365\33"+
		"\3\2\2\2\u0366\u0367\5\u01c0\u00e1\2\u0367\u0369\5\u022a\u0116\2\u0368"+
		"\u036a\5\u00fc\177\2\u0369\u0368\3\2\2\2\u0369\u036a\3\2\2\2\u036a\u036b"+
		"\3\2\2\2\u036b\u036d\5\u017a\u00be\2\u036c\u036e\5n8\2\u036d\u036c\3\2"+
		"\2\2\u036d\u036e\3\2\2\2\u036e\35\3\2\2\2\u036f\u0370\5\u01c0\u00e1\2"+
		"\u0370\u0372\5\u0248\u0125\2\u0371\u0373\5\u00fc\177\2\u0372\u0371\3\2"+
		"\2\2\u0372\u0373\3\2\2\2\u0373\u0374\3\2\2\2\u0374\u0375\5\u0168\u00b5"+
		"\2\u0375\u0376\5\u029a\u014e\2\u0376\u0377\5 \21\2\u0377\u0378\5\u029c"+
		"\u014f\2\u0378\37\3\2\2\2\u0379\u037a\5\u016a\u00b6\2\u037a\u0381\5\u0172"+
		"\u00ba\2\u037b\u037c\5\u02aa\u0156\2\u037c\u037d\5\u016a\u00b6\2\u037d"+
		"\u037e\5\u0172\u00ba\2\u037e\u0380\3\2\2\2\u037f\u037b\3\2\2\2\u0380\u0383"+
		"\3\2\2\2\u0381\u037f\3\2\2\2\u0381\u0382\3\2\2\2\u0382!\3\2\2\2\u0383"+
		"\u0381\3\2\2\2\u0384\u0385\5\u01c0\u00e1\2\u0385\u0387\5\u0242\u0122\2"+
		"\u0386\u0388\5\u00fc\177\2\u0387\u0386\3\2\2\2\u0387\u0388\3\2\2\2\u0388"+
		"\u0389\3\2\2\2\u0389\u038a\5\u0168\u00b5\2\u038a\u038b\5\u0254\u012b\2"+
		"\u038b\u038c\5\u017e\u00c0\2\u038c#\3\2\2\2\u038d\u038e\5\u01c0\u00e1"+
		"\2\u038e\u0390\5\u0202\u0102\2\u038f\u0391\5\u00fc\177\2\u0390\u038f\3"+
		"\2\2\2\u0390\u0391\3\2\2\2\u0391\u0392\3\2\2\2\u0392\u0393\5\u0168\u00b5"+
		"\2\u0393\u0394\5\u01aa\u00d6\2\u0394\u0395\5\u022c\u0117\2\u0395\u0396"+
		"\5\u0106\u0084\2\u0396\u0397\5\u01d8\u00ed\2\u0397\u0398\5\u0160\u00b1"+
		"\2\u0398\u0399\5&\24\2\u0399\u039d\5\u00a8U\2\u039a\u039b\5\u025a\u012e"+
		"\2\u039b\u039c\5,\27\2\u039c\u039e\3\2\2\2\u039d\u039a\3\2\2\2\u039d\u039e"+
		"\3\2\2\2\u039e%\3\2\2\2\u039f\u03a0\5\u0258\u012d\2\u03a0\u03a4\5(\25"+
		"\2\u03a1\u03a2\5\u01a6\u00d4\2\u03a2\u03a3\5\u011c\u008f\2\u03a3\u03a5"+
		"\3\2\2\2\u03a4\u03a1\3\2\2\2\u03a4\u03a5\3\2\2\2\u03a5\'\3\2\2\2\u03a6"+
		"\u03ac\5*\26\2\u03a7\u03a8\5\u01a6\u00d4\2\u03a8\u03a9\5*\26\2\u03a9\u03ab"+
		"\3\2\2\2\u03aa\u03a7\3\2\2\2\u03ab\u03ae\3\2\2\2\u03ac\u03aa\3\2\2\2\u03ac"+
		"\u03ad\3\2\2\2\u03ad)\3\2\2\2\u03ae\u03ac\3\2\2\2\u03af\u03b0\5\u016a"+
		"\u00b6\2\u03b0\u03b1\5\u01ec\u00f7\2\u03b1\u03b2\5\u020a\u0106\2\u03b2"+
		"\u03b3\5\u020c\u0107\2\u03b3+\3\2\2\2\u03b4\u03bf\5\u0092J\2\u03b5\u03b6"+
		"\5\u0092J\2\u03b6\u03b7\5\u01a6\u00d4\2\u03b7\u03b8\5\u008eH\2\u03b8\u03bf"+
		"\3\2\2\2\u03b9\u03bf\5\u008eH\2\u03ba\u03bb\5\u008eH\2\u03bb\u03bc\5\u01a6"+
		"\u00d4\2\u03bc\u03bd\5\u0092J\2\u03bd\u03bf\3\2\2\2\u03be\u03b4\3\2\2"+
		"\2\u03be\u03b5\3\2\2\2\u03be\u03b9\3\2\2\2\u03be\u03ba\3\2\2\2\u03bf-"+
		"\3\2\2\2\u03c0\u03c1\5\u01c0\u00e1\2\u03c1\u03c3\5\u01f2\u00fa\2\u03c2"+
		"\u03c4\5\u00fc\177\2\u03c3\u03c2\3\2\2\2\u03c3\u03c4\3\2\2\2\u03c4\u03c5"+
		"\3\2\2\2\u03c5\u03c6\5\u0156\u00ac\2\u03c6\u03c7\5\u025a\u012e\2\u03c7"+
		"\u03c8\5\u0226\u0114\2\u03c8\u03c9\7\u00ac\2\2\u03c9\u03ca\5\u029e\u0150"+
		"\2\u03ca\u03cb\5\u00c0a\2\u03cb\u03cf\5\u02a0\u0151\2\u03cc\u03cd\5\u01a6"+
		"\u00d4\2\u03cd\u03ce\5\u00c4c\2\u03ce\u03d0\3\2\2\2\u03cf\u03cc\3\2\2"+
		"\2\u03cf\u03d0\3\2\2\2\u03d0/\3\2\2\2\u03d1\u03d3\5\u01c0\u00e1\2\u03d2"+
		"\u03d4\5D#\2\u03d3\u03d2\3\2\2\2\u03d3\u03d4\3\2\2\2\u03d4\u03d5\3\2\2"+
		"\2\u03d5\u03d7\5\u01dc\u00ef\2\u03d6\u03d8\5\u00fc\177\2\u03d7\u03d6\3"+
		"\2\2\2\u03d7\u03d8\3\2\2\2\u03d8\u03d9\3\2\2\2\u03d9\u03da\5\u0168\u00b5"+
		"\2\u03da\u03dc\5\u029a\u014e\2\u03db\u03dd\5\64\33\2\u03dc\u03db\3\2\2"+
		"\2\u03dc\u03dd\3\2\2\2\u03dd\u03de\3\2\2\2\u03de\u03df\5\u029c\u014f\2"+
		"\u03df\u03e0\5\66\34\2\u03e0\u03e1\5\u0228\u0115\2\u03e1\u03e2\5\u0172"+
		"\u00ba\2\u03e2\u03e3\5\u01f4\u00fb\2\u03e3\u03e4\5\u0186\u00c4\2\u03e4"+
		"\u03e5\5\u01aa\u00d6\2\u03e5\u03e6\5\62\32\2\u03e6\61\3\2\2\2\u03e7\u03e8"+
		"\7\u00a4\2\2\u03e8\63\3\2\2\2\u03e9\u03ef\5\u018e\u00c8\2\u03ea\u03eb"+
		"\5\u02aa\u0156\2\u03eb\u03ec\5\u018e\u00c8\2\u03ec\u03ee\3\2\2\2\u03ed"+
		"\u03ea\3\2\2\2\u03ee\u03f1\3\2\2\2\u03ef\u03ed\3\2\2\2\u03ef\u03f0\3\2"+
		"\2\2\u03f0\65\3\2\2\2\u03f1\u03ef\3\2\2\2\u03f2\u03f7\5\u01b6\u00dc\2"+
		"\u03f3\u03f4\5\u0228\u0115\2\u03f4\u03f5\5\u020c\u0107\2\u03f5\u03f7\3"+
		"\2\2\2\u03f6\u03f2\3\2\2\2\u03f6\u03f3\3\2\2\2\u03f7\u03f8\3\2\2\2\u03f8"+
		"\u03f9\5\u0210\u0109\2\u03f9\u03fa\5\u020c\u0107\2\u03fa\u03fb\5\u01e8"+
		"\u00f5\2\u03fb\67\3\2\2\2\u03fc\u03fe\5\u01c0\u00e1\2\u03fd\u03ff\5D#"+
		"\2\u03fe\u03fd\3\2\2\2\u03fe\u03ff\3\2\2\2\u03ff\u0400\3\2\2\2\u0400\u0402"+
		"\5\u0194\u00cb\2\u0401\u0403\5\u00fc\177\2\u0402\u0401\3\2\2\2\u0402\u0403"+
		"\3\2\2\2\u0403\u0404\3\2\2\2\u0404\u0405\5\u0168\u00b5\2\u0405\u0406\5"+
		"\u029a\u014e\2\u0406\u0407\5\u0172\u00ba\2\u0407\u0408\5\u029c\u014f\2"+
		"\u0408\u0409\5\u0230\u0119\2\u0409\u040a\5\u0184\u00c3\2\u040a\u040b\5"+
		"\u0236\u011c\2\u040b\u040c\5\u0172\u00ba\2\u040c\u040d\5\u01d6\u00ec\2"+
		"\u040d\u040e\5\u0184\u00c3\2\u040e\u040f\5\u01e6\u00f4\2\u040f\u0410\5"+
		":\36\2\u04109\3\2\2\2\u0411\u0416\5\u012e\u0098\2\u0412\u0416\5B\"\2\u0413"+
		"\u0416\5@!\2\u0414\u0416\5<\37\2\u0415\u0411\3\2\2\2\u0415\u0412\3\2\2"+
		"\2\u0415\u0413\3\2\2\2\u0415\u0414\3\2\2\2\u0416;\3\2\2\2\u0417\u0418"+
		"\5\u029e\u0150\2\u0418\u041e\5> \2\u0419\u041a\5\u02aa\u0156\2\u041a\u041b"+
		"\5> \2\u041b\u041d\3\2\2\2\u041c\u0419\3\2\2\2\u041d\u0420\3\2\2\2\u041e"+
		"\u041c\3\2\2\2\u041e\u041f\3\2\2\2\u041f\u0421\3\2\2\2\u0420\u041e\3\2"+
		"\2\2\u0421\u0422\5\u02a0\u0151\2\u0422=\3\2\2\2\u0423\u0424\5\u018c\u00c7"+
		"\2\u0424\u0425\7\13\2\2\u0425\u0426\5:\36\2\u0426?\3\2\2\2\u0427\u0428"+
		"\5\u029a\u014e\2\u0428\u042f\5B\"\2\u0429\u042a\5\u02aa\u0156\2\u042a"+
		"\u042b\5\u012e\u0098\2\u042b\u042e\3\2\2\2\u042c\u042e\5B\"\2\u042d\u0429"+
		"\3\2\2\2\u042d\u042c\3\2\2\2\u042e\u0431\3\2\2\2\u042f\u042d\3\2\2\2\u042f"+
		"\u0430\3\2\2\2\u0430\u0432\3\2\2\2\u0431\u042f\3\2\2\2\u0432\u0433\5\u029c"+
		"\u014f\2\u0433A\3\2\2\2\u0434\u0435\5\u029a\u014e\2\u0435\u043b\5\u012e"+
		"\u0098\2\u0436\u0437\5\u02aa\u0156\2\u0437\u0438\5\u012e\u0098\2\u0438"+
		"\u043a\3\2\2\2\u0439\u0436\3\2\2\2\u043a\u043d\3\2\2\2\u043b\u0439\3\2"+
		"\2\2\u043b\u043c\3\2\2\2\u043c\u043e\3\2\2\2\u043d\u043b\3\2\2\2\u043e"+
		"\u043f\5\u029c\u014f\2\u043fC\3\2\2\2\u0440\u0441\5\u0214\u010b\2\u0441"+
		"\u0442\5\u0224\u0113\2\u0442E\3\2\2\2\u0443\u0444\5\u01a4\u00d3\2\u0444"+
		"\u0445\5\u0250\u0129\2\u0445\u0446\5\u0188\u00c5\2\u0446\u0447\5\u025a"+
		"\u012e\2\u0447\u0449\5H%\2\u0448\u044a\5J&\2\u0449\u0448\3\2\2\2\u0449"+
		"\u044a\3\2\2\2\u044aG\3\2\2\2\u044b\u044c\5\u021c\u010f\2\u044c\u044d"+
		"\5\u0144\u00a3\2\u044dI\3\2\2\2\u044e\u0451\5\u0238\u011d\2\u044f\u0451"+
		"\5\u0206\u0104\2\u0450\u044e\3\2\2\2\u0450\u044f\3\2\2\2\u0451K\3\2\2"+
		"\2\u0452\u0453\5\u01a4\u00d3\2\u0453\u0454\5\u0248\u0125\2\u0454\u0455"+
		"\5\u015a\u00ae\2\u0455\u0456\5N(\2\u0456M\3\2\2\2\u0457\u0459\5X-\2\u0458"+
		"\u0457\3\2\2\2\u0458\u0459\3\2\2\2\u0459\u045b\3\2\2\2\u045a\u045c\5V"+
		",\2\u045b\u045a\3\2\2\2\u045b\u045c\3\2\2\2\u045c\u045e\3\2\2\2\u045d"+
		"\u045f\5P)\2\u045e\u045d\3\2\2\2\u045e\u045f\3\2\2\2\u045fO\3\2\2\2\u0460"+
		"\u0461\5\u0222\u0112\2\u0461\u0462\5R*\2\u0462Q\3\2\2\2\u0463\u0469\5"+
		"T+\2\u0464\u0465\5\u01a6\u00d4\2\u0465\u0466\5T+\2\u0466\u0468\3\2\2\2"+
		"\u0467\u0464\3\2\2\2\u0468\u046b\3\2\2\2\u0469\u0467\3\2\2\2\u0469\u046a"+
		"\3\2\2\2\u046aS\3\2\2\2\u046b\u0469\3\2\2\2\u046c\u046d\5\u016a\u00b6"+
		"\2\u046d\u046e\5\u023e\u0120\2\u046e\u046f\5\u016e\u00b8\2\u046fU\3\2"+
		"\2\2\u0470\u0471\5\u0192\u00ca\2\u0471\u0472\5\u016e\u00b8\2\u0472\u0479"+
		"\5\u0172\u00ba\2\u0473\u0474\5\u02aa\u0156\2\u0474\u0475\5\u016e\u00b8"+
		"\2\u0475\u0476\5\u0172\u00ba\2\u0476\u0478\3\2\2\2\u0477\u0473\3\2\2\2"+
		"\u0478\u047b\3\2\2\2\u0479\u0477\3\2\2\2\u0479\u047a\3\2\2\2\u047aW\3"+
		"\2\2\2\u047b\u0479\3\2\2\2\u047c\u047d\5\u01a4\u00d3\2\u047d\u047e\5\u016a"+
		"\u00b6\2\u047e\u047f\5\u0248\u0125\2\u047f\u0480\5\u0172\u00ba\2\u0480"+
		"Y\3\2\2\2\u0481\u0482\5\u01a4\u00d3\2\u0482\u0483\5\u023a\u011e\2\u0483"+
		"\u0484\5\u015e\u00b0\2\u0484\u0485\5\\/\2\u0485[\3\2\2\2\u0486\u048e\5"+
		"h\65\2\u0487\u048e\5d\63\2\u0488\u048e\5d\63\2\u0489\u048e\5b\62\2\u048a"+
		"\u048e\5`\61\2\u048b\u048e\5^\60\2\u048c\u048e\b/\1\2\u048d\u0486\3\2"+
		"\2\2\u048d\u0487\3\2\2\2\u048d\u0488\3\2\2\2\u048d\u0489\3\2\2\2\u048d"+
		"\u048a\3\2\2\2\u048d\u048b\3\2\2\2\u048d\u048c\3\2\2\2\u048e]\3\2\2\2"+
		"\u048f\u0490\5\u025a\u012e\2\u0490\u0491\5\u0092J\2\u0491_\3\2\2\2\u0492"+
		"\u0493\5\u0222\u0112\2\u0493\u0494\5\u016a\u00b6\2\u0494\u0495\5\u023e"+
		"\u0120\2\u0495\u0496\5\u016e\u00b8\2\u0496a\3\2\2\2\u0497\u0498\5\u01ca"+
		"\u00e6\2\u0498\u0499\5\u01ba\u00de\2\u0499\u049a\5\u0234\u011b\2\u049a"+
		"c\3\2\2\2\u049b\u049c\5\u01ca\u00e6\2\u049c\u049d\5f\64\2\u049de\3\2\2"+
		"\2\u049e\u04a4\5\u016a\u00b6\2\u049f\u04a0\5\u02aa\u0156\2\u04a0\u04a1"+
		"\5\u016a\u00b6\2\u04a1\u04a3\3\2\2\2\u04a2\u049f\3\2\2\2\u04a3\u04a6\3"+
		"\2\2\2\u04a4\u04a2\3\2\2\2\u04a4\u04a5\3\2\2\2\u04a5g\3\2\2\2\u04a6\u04a4"+
		"\3\2\2\2\u04a7\u04a8\5\u0192\u00ca\2\u04a8\u04a9\5j\66\2\u04a9i\3\2\2"+
		"\2\u04aa\u04ab\5\u016e\u00b8\2\u04ab\u04b2\5\u0172\u00ba\2\u04ac\u04ad"+
		"\5\u02aa\u0156\2\u04ad\u04ae\5\u016e\u00b8\2\u04ae\u04af\5\u0172\u00ba"+
		"\2\u04af\u04b1\3\2\2\2\u04b0\u04ac\3\2\2\2\u04b1\u04b4\3\2\2\2\u04b2\u04b0"+
		"\3\2\2\2\u04b2\u04b3\3\2\2\2\u04b3k\3\2\2\2\u04b4\u04b2\3\2\2\2\u04b5"+
		"\u04b6\5\u01a4\u00d3\2\u04b6\u04b7\5\u022a\u0116\2\u04b7\u04b9\5\u017a"+
		"\u00be\2\u04b8\u04ba\5n8\2\u04b9\u04b8\3\2\2\2\u04b9\u04ba\3\2\2\2\u04ba"+
		"m\3\2\2\2\u04bb\u04bc\5\u025a\u012e\2\u04bc\u04c2\5p9\2\u04bd\u04be\5"+
		"\u01a6\u00d4\2\u04be\u04bf\5p9\2\u04bf\u04c1\3\2\2\2\u04c0\u04bd\3\2\2"+
		"\2\u04c1\u04c4\3\2\2\2\u04c2\u04c0\3\2\2\2\u04c2\u04c3\3\2\2\2\u04c3o"+
		"\3\2\2\2\u04c4\u04c2\3\2\2\2\u04c5\u04c6\5\u021c\u010f\2\u04c6\u04c7\7"+
		"\u00ac\2\2\u04c7\u04c8\5\u0144\u00a3\2\u04c8\u04d6\3\2\2\2\u04c9\u04ca"+
		"\5\u0200\u0101\2\u04ca\u04cb\7\u00ac\2\2\u04cb\u04cc\5\u0146\u00a4\2\u04cc"+
		"\u04d6\3\2\2\2\u04cd\u04ce\5\u0238\u011d\2\u04ce\u04cf\7\u00ac\2\2\u04cf"+
		"\u04d0\5\u0146\u00a4\2\u04d0\u04d6\3\2\2\2\u04d1\u04d2\5\u0212\u010a\2"+
		"\u04d2\u04d3\7\u00ac\2\2\u04d3\u04d4\5\u009aN\2\u04d4\u04d6\3\2\2\2\u04d5"+
		"\u04c5\3\2\2\2\u04d5\u04c9\3\2\2\2\u04d5\u04cd\3\2\2\2\u04d5\u04d1\3\2"+
		"\2\2\u04d6q\3\2\2\2\u04d7\u04d8\5\u01a4\u00d3\2\u04d8\u04d9\5\u0202\u0102"+
		"\2\u04d9\u04dd\5\u0164\u00b3\2\u04da\u04db\5\u025a\u012e\2\u04db\u04dc"+
		"\5\u0092J\2\u04dc\u04de\3\2\2\2\u04dd\u04da\3\2\2\2\u04dd\u04de\3\2\2"+
		"\2\u04des\3\2\2\2\u04df\u04e0\5\u01ca\u00e6\2\u04e0\u04e2\5\u0250\u0129"+
		"\2\u04e1\u04e3\5\u00fe\u0080\2\u04e2\u04e1\3\2\2\2\u04e2\u04e3\3\2\2\2"+
		"\u04e3\u04e4\3\2\2\2\u04e4\u04e5\5\u0188\u00c5\2\u04e5u\3\2\2\2\u04e6"+
		"\u04e7\5\u01ca\u00e6\2\u04e7\u04e9\5\u0248\u0125\2\u04e8\u04ea\5\u00fe"+
		"\u0080\2\u04e9\u04e8\3\2\2\2\u04e9\u04ea\3\2\2\2\u04ea\u04eb\3\2\2\2\u04eb"+
		"\u04ec\5\u015a\u00ae\2\u04ecw\3\2\2\2\u04ed\u04ee\5\u01ca\u00e6\2\u04ee"+
		"\u04f0\5\u0202\u0102\2\u04ef\u04f1\5\u00fe\u0080\2\u04f0\u04ef\3\2\2\2"+
		"\u04f0\u04f1\3\2\2\2\u04f1\u04f2\3\2\2\2\u04f2\u04f3\5\u0164\u00b3\2\u04f3"+
		"y\3\2\2\2\u04f4\u04f5\5\u01ca\u00e6\2\u04f5\u04f7\5\u0194\u00cb\2\u04f6"+
		"\u04f8\5\u00fe\u0080\2\u04f7\u04f6\3\2\2\2\u04f7\u04f8\3\2\2\2\u04f8\u04f9"+
		"\3\2\2\2\u04f9\u04fa\5\u0158\u00ad\2\u04fa{\3\2\2\2\u04fb\u04fc\5\u01ca"+
		"\u00e6\2\u04fc\u04fe\5\u01dc\u00ef\2\u04fd\u04ff\5\u00fe\u0080\2\u04fe"+
		"\u04fd\3\2\2\2\u04fe\u04ff\3\2\2\2\u04ff\u0500\3\2\2\2\u0500\u0501\5\u015c"+
		"\u00af\2\u0501}\3\2\2\2\u0502\u0503\5\u01ca\u00e6\2\u0503\u0505\5\u0242"+
		"\u0122\2\u0504\u0506\5\u00fe\u0080\2\u0505\u0504\3\2\2\2\u0505\u0506\3"+
		"\2\2\2\u0506\u0507\3\2\2\2\u0507\u0508\5\u017c\u00bf\2\u0508\u0509\5\u0210"+
		"\u0109\2\u0509\u050a\5\u015e\u00b0\2\u050a\177\3\2\2\2\u050b\u050c\5\u01ca"+
		"\u00e6\2\u050c\u050e\5\u022a\u0116\2\u050d\u050f\5\u00fe\u0080\2\u050e"+
		"\u050d\3\2\2\2\u050e\u050f\3\2\2\2\u050f\u0510\3\2\2\2\u0510\u0511\5\u017a"+
		"\u00be\2\u0511\u0081\3\2\2\2\u0512\u0513\5\u01ca\u00e6\2\u0513\u0515\5"+
		"\u023a\u011e\2\u0514\u0516\5\u00fe\u0080\2\u0515\u0514\3\2\2\2\u0515\u0516"+
		"\3\2\2\2\u0516\u0517\3\2\2\2\u0517\u0518\5\u015e\u00b0\2\u0518\u0083\3"+
		"\2\2\2\u0519\u051a\5\u01ca\u00e6\2\u051a\u051c\5\u01f2\u00fa\2\u051b\u051d"+
		"\5\u00fe\u0080\2\u051c\u051b\3\2\2\2\u051c\u051d\3\2\2\2\u051d\u051e\3"+
		"\2\2\2\u051e\u051f\5\u014a\u00a6\2\u051f\u0085\3\2\2\2\u0520\u0521\5\u01ca"+
		"\u00e6\2\u0521\u0523\5\u01e4\u00f3\2\u0522\u0524\5\u00fe\u0080\2\u0523"+
		"\u0522\3\2\2\2\u0523\u0524\3\2\2\2\u0524\u0525\3\2\2\2\u0525\u0526\5\u0162"+
		"\u00b2\2\u0526\u0087\3\2\2\2\u0527\u0528\5\u01c0\u00e1\2\u0528\u052a\5"+
		"\u023a\u011e\2\u0529\u052b\5\u00fc\177\2\u052a\u0529\3\2\2\2\u052a\u052b"+
		"\3\2\2\2\u052b\u052c\3\2\2\2\u052c\u052d\5\u0168\u00b5\2\u052d\u052f\5"+
		"\u008aF\2\u052e\u0530\5\u008cG\2\u052f\u052e\3\2\2\2\u052f\u0530\3\2\2"+
		"\2\u0530\u0089\3\2\2\2\u0531\u0532\5\u029a\u014e\2\u0532\u0533\5\u00a2"+
		"R\2\u0533\u0534\5\u029c\u014f\2\u0534\u0537\3\2\2\2\u0535\u0537\bF\1\2"+
		"\u0536\u0531\3\2\2\2\u0536\u0535\3\2\2\2\u0537\u008b\3\2\2\2\u0538\u0539"+
		"\5\u025a\u012e\2\u0539\u053d\5\u0092J\2\u053a\u053b\5\u01a6\u00d4\2\u053b"+
		"\u053c\5\u008eH\2\u053c\u053e\3\2\2\2\u053d\u053a\3\2\2\2\u053d\u053e"+
		"\3\2\2\2\u053e\u0549\3\2\2\2\u053f\u0541\5\u025a\u012e\2\u0540\u0542\5"+
		"\u008eH\2\u0541\u0540\3\2\2\2\u0541\u0542\3\2\2\2\u0542\u0546\3\2\2\2"+
		"\u0543\u0544\5\u01a6\u00d4\2\u0544\u0545\5\u0092J\2\u0545\u0547\3\2\2"+
		"\2\u0546\u0543\3\2\2\2\u0546\u0547\3\2\2\2\u0547\u0549\3\2\2\2\u0548\u0538"+
		"\3\2\2\2\u0548\u053f\3\2\2\2\u0549\u008d\3\2\2\2\u054a\u054b\5\u01b8\u00dd"+
		"\2\u054b\u054c\5\u0216\u010c\2\u054c\u054d\5\u01b4\u00db\2\u054d\u054e"+
		"\5\u029a\u014e\2\u054e\u0554\5\u0090I\2\u054f\u0550\5\u02aa\u0156\2\u0550"+
		"\u0551\5\u0090I\2\u0551\u0553\3\2\2\2\u0552\u054f\3\2\2\2\u0553\u0556"+
		"\3\2\2\2\u0554\u0552\3\2\2\2\u0554\u0555\3\2\2\2\u0555\u0557\3\2\2\2\u0556"+
		"\u0554\3\2\2\2\u0557\u0558\5\u029c\u014f\2\u0558\u008f\3\2\2\2\u0559\u055b"+
		"\5\u016a\u00b6\2\u055a\u055c\5\u0178\u00bd\2\u055b\u055a\3\2\2\2\u055b"+
		"\u055c\3\2\2\2\u055c\u0091\3\2\2\2\u055d\u0563\5\u0094K\2\u055e\u055f"+
		"\5\u01a6\u00d4\2\u055f\u0560\5\u0094K\2\u0560\u0562\3\2\2\2\u0561\u055e"+
		"\3\2\2\2\u0562\u0565\3\2\2\2\u0563\u0561\3\2\2\2\u0563\u0564\3\2\2\2\u0564"+
		"\u0093\3\2\2\2\u0565\u0563\3\2\2\2\u0566\u0567\5\u0096L\2\u0567\u0568"+
		"\7\u00ac\2\2\u0568\u0569\5\u0098M\2\u0569\u056f\3\2\2\2\u056a\u056b\5"+
		"\u0096L\2\u056b\u056c\7\u00ac\2\2\u056c\u056d\5\u009aN\2\u056d\u056f\3"+
		"\2\2\2\u056e\u0566\3\2\2\2\u056e\u056a\3\2\2\2\u056f\u0095\3\2\2\2\u0570"+
		"\u0571\7\u00aa\2\2\u0571\u0097\3\2\2\2\u0572\u0575\5\u0144\u00a3\2\u0573"+
		"\u0575\5\u0142\u00a2\2\u0574\u0572\3\2\2\2\u0574\u0573\3\2\2\2\u0575\u0099"+
		"\3\2\2\2\u0576\u0577\5\u029e\u0150\2\u0577\u057d\5\u009cO\2\u0578\u0579"+
		"\5\u02aa\u0156\2\u0579\u057a\5\u009cO\2\u057a\u057c\3\2\2\2\u057b\u0578"+
		"\3\2\2\2\u057c\u057f\3\2\2\2\u057d\u057b\3\2\2\2\u057d\u057e\3\2\2\2\u057e"+
		"\u0580\3\2\2\2\u057f\u057d\3\2\2\2\u0580\u0581\5\u02a0\u0151\2\u0581\u009b"+
		"\3\2\2\2\u0582\u0583\5\u009eP\2\u0583\u0584\7\13\2\2\u0584\u0585\5\u00a0"+
		"Q\2\u0585\u009d\3\2\2\2\u0586\u0587\5\u0144\u00a3\2\u0587\u009f\3\2\2"+
		"\2\u0588\u058b\5\u0144\u00a3\2\u0589\u058b\5\u0142\u00a2\2\u058a\u0588"+
		"\3\2\2\2\u058a\u0589\3\2\2\2\u058b\u00a1\3\2\2\2\u058c\u0592\5\u00a4S"+
		"\2\u058d\u058e\5\u02aa\u0156\2\u058e\u058f\5\u00a4S\2\u058f\u0591\3\2"+
		"\2\2\u0590\u058d\3\2\2\2\u0591\u0594\3\2\2\2\u0592\u0590\3\2\2\2\u0592"+
		"\u0593\3\2\2\2\u0593\u0598\3\2\2\2\u0594\u0592\3\2\2\2\u0595\u0596\5\u02aa"+
		"\u0156\2\u0596\u0597\5\u00a8U\2\u0597\u0599\3\2\2\2\u0598\u0595\3\2\2"+
		"\2\u0598\u0599\3\2\2\2\u0599\u00a3\3\2\2\2\u059a\u059b\5\u0170\u00b9\2"+
		"\u059b\u059c\5\u0172\u00ba\2\u059c\u059d\5\u00a6T\2\u059d\u05a7\3\2\2"+
		"\2\u059e\u059f\5\u0170\u00b9\2\u059f\u05a0\5\u0172\u00ba\2\u05a0\u05a1"+
		"\5\u0232\u011a\2\u05a1\u05a7\3\2\2\2\u05a2\u05a3\5\u0170\u00b9\2\u05a3"+
		"\u05a4\5\u0172\u00ba\2\u05a4\u05a7\3\2\2\2\u05a5\u05a7\bS\1\2\u05a6\u059a"+
		"\3\2\2\2\u05a6\u059e\3\2\2\2\u05a6\u05a2\3\2\2\2\u05a6\u05a5\3\2\2\2\u05a7"+
		"\u00a5\3\2\2\2\u05a8\u05a9\5\u0220\u0111\2\u05a9\u05aa\5\u01ee\u00f8\2"+
		"\u05aa\u05af\3\2\2\2\u05ab\u05ac\5\u0220\u0111\2\u05ac\u05ad\bT\1\2\u05ad"+
		"\u05af\3\2\2\2\u05ae\u05a8\3\2\2\2\u05ae\u05ab\3\2\2\2\u05af\u00a7\3\2"+
		"\2\2\u05b0\u05b1\5\u0220\u0111\2\u05b1\u05b2\5\u01ee\u00f8\2\u05b2\u05b3"+
		"\5\u029a\u014e\2\u05b3\u05b4\5\u00aaV\2\u05b4\u05b5\5\u029c\u014f\2\u05b5"+
		"\u00a9\3\2\2\2\u05b6\u05ba\5\u00acW\2\u05b7\u05ba\5\u00aeX\2\u05b8\u05ba"+
		"\5\u00b0Y\2\u05b9\u05b6\3\2\2\2\u05b9\u05b7\3\2\2\2\u05b9\u05b8\3\2\2"+
		"\2\u05ba\u00ab\3\2\2\2\u05bb\u05bc\5\u016a\u00b6\2\u05bc\u00ad\3\2\2\2"+
		"\u05bd\u05be\5\u029a\u014e\2\u05be\u05bf\5\u00b2Z\2\u05bf\u05c0\5\u029c"+
		"\u014f\2\u05c0\u00af\3\2\2\2\u05c1\u05c2\5\u016a\u00b6\2\u05c2\u05c3\5"+
		"\u02aa\u0156\2\u05c3\u05c4\5\u00b4[\2\u05c4\u05cc\3\2\2\2\u05c5\u05c6"+
		"\5\u029a\u014e\2\u05c6\u05c7\5\u00b2Z\2\u05c7\u05c8\5\u029c\u014f\2\u05c8"+
		"\u05c9\5\u02aa\u0156\2\u05c9\u05ca\5\u00b4[\2\u05ca\u05cc\3\2\2\2\u05cb"+
		"\u05c1\3\2\2\2\u05cb\u05c5\3\2\2\2\u05cc\u00b1\3\2\2\2\u05cd\u05d3\5\u016a"+
		"\u00b6\2\u05ce\u05cf\5\u02aa\u0156\2\u05cf\u05d0\5\u016a\u00b6\2\u05d0"+
		"\u05d2\3\2\2\2\u05d1\u05ce\3\2\2\2\u05d2\u05d5\3\2\2\2\u05d3\u05d1\3\2"+
		"\2\2\u05d3\u05d4\3\2\2\2\u05d4\u00b3\3\2\2\2\u05d5\u05d3\3\2\2\2\u05d6"+
		"\u05dc\5\u016a\u00b6\2\u05d7\u05d8\5\u02aa\u0156\2\u05d8\u05d9\5\u016a"+
		"\u00b6\2\u05d9\u05db\3\2\2\2\u05da\u05d7\3\2\2\2\u05db\u05de\3\2\2\2\u05dc"+
		"\u05da\3\2\2\2\u05dc\u05dd\3\2\2\2\u05dd\u00b5\3\2\2\2\u05de\u05dc\3\2"+
		"\2\2\u05df\u05e0\5\u01a8\u00d5\2\u05e0\u05e1\5\u01b0\u00d9\2\u05e1\u00b7"+
		"\3\2\2\2\u05e2\u05e3\5\u00ba^\2\u05e3\u05e4\5\u00dan\2\u05e4\u05ec\3\2"+
		"\2\2\u05e5\u05e6\5\u00ba^\2\u05e6\u05e7\5\u00f2z\2\u05e7\u05ec\3\2\2\2"+
		"\u05e8\u05e9\5\u00ba^\2\u05e9\u05ea\5\u00e0q\2\u05ea\u05ec\3\2\2\2\u05eb"+
		"\u05e2\3\2\2\2\u05eb\u05e5\3\2\2\2\u05eb\u05e8\3\2\2\2\u05ec\u00b9\3\2"+
		"\2\2\u05ed\u05ef\5\u01b2\u00da\2\u05ee\u05f0\5\u00bc_\2\u05ef\u05ee\3"+
		"\2\2\2\u05ef\u05f0\3\2\2\2\u05f0\u05f1\3\2\2\2\u05f1\u05f3\5\u01b0\u00d9"+
		"\2\u05f2\u05f4\5\u00fa~\2\u05f3\u05f2\3\2\2\2\u05f3\u05f4\3\2\2\2\u05f4"+
		"\u00bb\3\2\2\2\u05f5\u05f8\5\u01fe\u0100\2\u05f6\u05f8\5\u024a\u0126\2"+
		"\u05f7\u05f5\3\2\2\2\u05f7\u05f6\3\2\2\2\u05f8\u00bd\3\2\2\2\u05f9\u05fa"+
		"\5\u01a4\u00d3\2\u05fa\u05fb\5\u01f2\u00fa\2\u05fb\u05fc\5\u014a\u00a6"+
		"\2\u05fc\u05fd\5\u025a\u012e\2\u05fd\u05fe\5\u0226\u0114\2\u05fe\u05ff"+
		"\7\u00ac\2\2\u05ff\u0600\5\u029e\u0150\2\u0600\u0601\5\u00c0a\2\u0601"+
		"\u0605\5\u02a0\u0151\2\u0602\u0603\5\u01a6\u00d4\2\u0603\u0604\5\u00c4"+
		"c\2\u0604\u0606\3\2\2\2\u0605\u0602\3\2\2\2\u0605\u0606\3\2\2\2\u0606"+
		"\u00bf\3\2\2\2\u0607\u060d\5\u00c2b\2\u0608\u0609\5\u02aa\u0156\2\u0609"+
		"\u060a\5\u00c2b\2\u060a\u060c\3\2\2\2\u060b\u0608\3\2\2\2\u060c\u060f"+
		"\3\2\2\2\u060d\u060b\3\2\2\2\u060d\u060e\3\2\2\2\u060e\u00c1\3\2\2\2\u060f"+
		"\u060d\3\2\2\2\u0610\u0611\7\u00a5\2\2\u0611\u0612\7\13\2\2\u0612\u0617"+
		"\7\u00a5\2\2\u0613\u0614\7\u00a5\2\2\u0614\u0615\7\13\2\2\u0615\u0617"+
		"\7\u00a6\2\2\u0616\u0610\3\2\2\2\u0616\u0613\3\2\2\2\u0617\u00c3\3\2\2"+
		"\2\u0618\u0619\5\u01cc\u00e7\2\u0619\u061a\7\u00ac\2\2\u061a\u061b\5\u0146"+
		"\u00a4\2\u061b\u00c5\3\2\2\2\u061c\u061d\5\u024e\u0128\2\u061d\u061e\5"+
		"\u014a\u00a6\2\u061e\u00c7\3\2\2\2\u061f\u0621\5\u0244\u0123\2\u0620\u0622"+
		"\5\u023a\u011e\2\u0621\u0620\3\2\2\2\u0621\u0622\3\2\2\2\u0622\u0623\3"+
		"\2\2\2\u0623\u0624\5\u015e\u00b0\2\u0624\u00c9\3\2\2\2\u0625\u0626\5\u01c0"+
		"\u00e1\2\u0626\u0628\5\u01e4\u00f3\2\u0627\u0629\5\u00fc\177\2\u0628\u0627"+
		"\3\2\2\2\u0628\u0629\3\2\2\2\u0629\u062b\3\2\2\2\u062a\u062c\5\u0156\u00ac"+
		"\2\u062b\u062a\3\2\2\2\u062b\u062c\3\2\2\2\u062c\u062d\3\2\2\2\u062d\u062e"+
		"\5\u00ccg\2\u062e\u062f\5\u00d0i\2\u062f\u00cb\3\2\2\2\u0630\u0631\5\u0210"+
		"\u0109\2\u0631\u0632\5\u015e\u00b0\2\u0632\u0635\3\2\2\2\u0633\u0635\b"+
		"g\1\2\u0634\u0630\3\2\2\2\u0634\u0633\3\2\2\2\u0635\u00cd\3\2\2\2\u0636"+
		"\u0639\7\u00aa\2\2\u0637\u0639\5\u0144\u00a3\2\u0638\u0636\3\2\2\2\u0638"+
		"\u0637\3\2\2\2\u0639\u00cf\3\2\2\2\u063a\u063b\5\u029a\u014e\2\u063b\u063c"+
		"\5\u00d2j\2\u063c\u063d\5\u029c\u014f\2\u063d\u0640\3\2\2\2\u063e\u0640"+
		"\bi\1\2\u063f\u063a\3\2\2\2\u063f\u063e\3\2\2\2\u0640\u00d1\3\2\2\2\u0641"+
		"\u0647\5\u016a\u00b6\2\u0642\u0647\5\u00d4k\2\u0643\u0647\5\u00d6l\2\u0644"+
		"\u0647\5\u00d8m\2\u0645\u0647\bj\1\2\u0646\u0641\3\2\2\2\u0646\u0642\3"+
		"\2\2\2\u0646\u0643\3\2\2\2\u0646\u0644\3\2\2\2\u0646\u0645\3\2\2\2\u0647"+
		"\u00d3\3\2\2\2\u0648\u0649\5\u01f0\u00f9\2\u0649\u064c\5\u029a\u014e\2"+
		"\u064a\u064d\5\u016a\u00b6\2\u064b\u064d\bk\1\2\u064c\u064a\3\2\2\2\u064c"+
		"\u064b\3\2\2\2\u064d\u064e\3\2\2\2\u064e\u064f\5\u029c\u014f\2\u064f\u00d5"+
		"\3\2\2\2\u0650\u0651\5\u01ce\u00e8\2\u0651\u0654\5\u029a\u014e\2\u0652"+
		"\u0655\5\u016a\u00b6\2\u0653\u0655\bl\1\2\u0654\u0652\3\2\2\2\u0654\u0653"+
		"\3\2\2\2\u0655\u0656\3\2\2\2\u0656\u0657\5\u029c\u014f\2\u0657\u00d7\3"+
		"\2\2\2\u0658\u0659\5\u01da\u00ee\2\u0659\u065c\5\u029a\u014e\2\u065a\u065d"+
		"\5\u016a\u00b6\2\u065b\u065d\bm\1\2\u065c\u065a\3\2\2\2\u065c\u065b\3"+
		"\2\2\2\u065d\u065e\3\2\2\2\u065e\u065f\5\u029c\u014f\2\u065f\u00d9\3\2"+
		"\2\2\u0660\u0662\5\u01c2\u00e2\2\u0661\u0663\5\u00dco\2\u0662\u0661\3"+
		"\2\2\2\u0662\u0663\3\2\2\2\u0663\u0664\3\2\2\2\u0664\u0666\5\u0110\u0089"+
		"\2\u0665\u0667\5\u00fa~\2\u0666\u0665\3\2\2\2\u0666\u0667\3\2\2\2\u0667"+
		"\u066a\3\2\2\2\u0668\u066b\5\u0116\u008c\2\u0669\u066b\bn\1\2\u066a\u0668"+
		"\3\2\2\2\u066a\u0669\3\2\2\2\u066b\u066e\3\2\2\2\u066c\u066f\5\u00fe\u0080"+
		"\2\u066d\u066f\5\u00e2r\2\u066e\u066c\3\2\2\2\u066e\u066d\3\2\2\2\u066e"+
		"\u066f\3\2\2\2\u066f\u00db\3\2\2\2\u0670\u0676\5\u00dep\2\u0671\u0672"+
		"\5\u02aa\u0156\2\u0672\u0673\5\u00dep\2\u0673\u0675\3\2\2\2\u0674\u0671"+
		"\3\2\2\2\u0675\u0678\3\2\2\2\u0676\u0674\3\2\2\2\u0676\u0677\3\2\2\2\u0677"+
		"\u00dd\3\2\2\2\u0678\u0676\3\2\2\2\u0679\u0683\5\u016a\u00b6\2\u067a\u067b"+
		"\5\u016a\u00b6\2\u067b\u067e\5\u02a6\u0154\2\u067c\u067f\5\u0144\u00a3"+
		"\2\u067d\u067f\5\u0140\u00a1\2\u067e\u067c\3\2\2\2\u067e\u067d\3\2\2\2"+
		"\u067f\u0680\3\2\2\2\u0680\u0681\5\u02a8\u0155\2\u0681\u0683\3\2\2\2\u0682"+
		"\u0679\3\2\2\2\u0682\u067a\3\2\2\2\u0683\u00df\3\2\2\2\u0684\u0685\5\u024c"+
		"\u0127\2\u0685\u0687\5\u0166\u00b4\2\u0686\u0688\5\u00f4{\2\u0687\u0686"+
		"\3\2\2\2\u0687\u0688\3\2\2\2\u0688\u0689\3\2\2\2\u0689\u068c\5\u00e8u"+
		"\2\u068a\u068d\5\u0116\u008c\2\u068b\u068d\bq\1\2\u068c\u068a\3\2\2\2"+
		"\u068c\u068b\3\2\2\2\u068d\u0690\3\2\2\2\u068e\u0691\5\u00fe\u0080\2\u068f"+
		"\u0691\5\u00e2r\2\u0690\u068e\3\2\2\2\u0690\u068f\3\2\2\2\u0690\u0691"+
		"\3\2\2\2\u0691\u00e1\3\2\2\2\u0692\u0693\5\u01e0\u00f1\2\u0693\u0694\5"+
		"\u00e4s\2\u0694\u00e3\3\2\2\2\u0695\u069b\5\u00e6t\2\u0696\u0697\5\u01a6"+
		"\u00d4\2\u0697\u0698\5\u00e6t\2\u0698\u069a\3\2\2\2\u0699\u0696\3\2\2"+
		"\2\u069a\u069d\3\2\2\2\u069b\u0699\3\2\2\2\u069b\u069c\3\2\2\2\u069c\u00e5"+
		"\3\2\2\2\u069d\u069b\3\2\2\2\u069e\u069f\7\u00aa\2\2\u069f\u06a0\7\u00ac"+
		"\2\2\u06a0\u06a1\5\u012e\u0098\2\u06a1\u00e7\3\2\2\2\u06a2\u06a3\5\u022e"+
		"\u0118\2\u06a3\u06a9\5\u00eav\2\u06a4\u06a5\5\u02aa\u0156\2\u06a5\u06a6"+
		"\5\u00eav\2\u06a6\u06a8\3\2\2\2\u06a7\u06a4\3\2\2\2\u06a8\u06ab\3\2\2"+
		"\2\u06a9\u06a7\3\2\2\2\u06a9\u06aa\3\2\2\2\u06aa\u06ae\3\2\2\2\u06ab\u06a9"+
		"\3\2\2\2\u06ac\u06ae\bu\1\2\u06ad\u06a2\3\2\2\2\u06ad\u06ac\3\2\2\2\u06ae"+
		"\u00e9\3\2\2\2\u06af\u06b0\5\u016a\u00b6\2\u06b0\u06b3\5\u02b6\u015c\2"+
		"\u06b1\u06b4\5\u012e\u0098\2\u06b2\u06b4\5\u0134\u009b\2\u06b3\u06b1\3"+
		"\2\2\2\u06b3\u06b2\3\2\2\2\u06b4\u06fd\3\2\2\2\u06b5\u06b6\5\u016a\u00b6"+
		"\2\u06b6\u06b7\5\u02b6\u015c\2\u06b7\u06ba\5\u016a\u00b6\2\u06b8\u06bb"+
		"\5\u02ae\u0158\2\u06b9\u06bb\5\u02b0\u0159\2\u06ba\u06b8\3\2\2\2\u06ba"+
		"\u06b9\3\2\2\2\u06bb\u06bc\3\2\2\2\u06bc\u06bd\5\u0140\u00a1\2\u06bd\u06fd"+
		"\3\2\2\2\u06be\u06bf\5\u016a\u00b6\2\u06bf\u06c0\5\u02b6\u015c\2\u06c0"+
		"\u06c3\5\u016a\u00b6\2\u06c1\u06c4\5\u02ae\u0158\2\u06c2\u06c4\5\u02b0"+
		"\u0159\2\u06c3\u06c1\3\2\2\2\u06c3\u06c2\3\2\2\2\u06c4\u06c5\3\2\2\2\u06c5"+
		"\u06c6\5\u00eex\2\u06c6\u06fd\3\2\2\2\u06c7\u06c8\5\u016a\u00b6\2\u06c8"+
		"\u06c9\5\u02b6\u015c\2\u06c9\u06cc\5\u016a\u00b6\2\u06ca\u06cd\5\u02ae"+
		"\u0158\2\u06cb\u06cd\5\u02b0\u0159\2\u06cc\u06ca\3\2\2\2\u06cc\u06cb\3"+
		"\2\2\2\u06cd\u06ce\3\2\2\2\u06ce\u06cf\5\u00ecw\2\u06cf\u06fd\3\2\2\2"+
		"\u06d0\u06d1\5\u016a\u00b6\2\u06d1\u06d2\5\u02b6\u015c\2\u06d2\u06d5\5"+
		"\u016a\u00b6\2\u06d3\u06d6\5\u02ae\u0158\2\u06d4\u06d6\5\u02b0\u0159\2"+
		"\u06d5\u06d3\3\2\2\2\u06d5\u06d4\3\2\2\2\u06d6\u06d7\3\2\2\2\u06d7\u06d8"+
		"\5\u00f0y\2\u06d8\u06fd\3\2\2\2\u06d9\u06da\5\u016a\u00b6\2\u06da\u06db"+
		"\5\u02b6\u015c\2\u06db\u06de\5\u00ecw\2\u06dc\u06df\5\u02ae\u0158\2\u06dd"+
		"\u06df\5\u02b0\u0159\2\u06de\u06dc\3\2\2\2\u06de\u06dd\3\2\2\2\u06df\u06e0"+
		"\3\2\2\2\u06e0\u06e1\7\u00aa\2\2\u06e1\u06fd\3\2\2\2\u06e2\u06e3\5\u016a"+
		"\u00b6\2\u06e3\u06e4\5\u02b6\u015c\2\u06e4\u06e7\5\u00eex\2\u06e5\u06e8"+
		"\5\u02ae\u0158\2\u06e6\u06e8\5\u02b0\u0159\2\u06e7\u06e5\3\2\2\2\u06e7"+
		"\u06e6\3\2\2\2\u06e8\u06e9\3\2\2\2\u06e9\u06ea\7\u00aa\2\2\u06ea\u06fd"+
		"\3\2\2\2\u06eb\u06ec\5\u016a\u00b6\2\u06ec\u06ed\5\u02b6\u015c\2\u06ed"+
		"\u06f0\5\u00f0y\2\u06ee\u06f1\5\u02ae\u0158\2\u06ef\u06f1\5\u02b0\u0159"+
		"\2\u06f0\u06ee\3\2\2\2\u06f0\u06ef\3\2\2\2\u06f1\u06f2\3\2\2\2\u06f2\u06f3"+
		"\7\u00aa\2\2\u06f3\u06fd\3\2\2\2\u06f4\u06f5\5\u016a\u00b6\2\u06f5\u06f6"+
		"\5\u02a6\u0154\2\u06f6\u06f7\5\u0140\u00a1\2\u06f7\u06f8\5\u02a8\u0155"+
		"\2\u06f8\u06f9\5\u02b6\u015c\2\u06f9\u06fa\5\u012e\u0098\2\u06fa\u06fd"+
		"\3\2\2\2\u06fb\u06fd\bv\1\2\u06fc\u06af\3\2\2\2\u06fc\u06b5\3\2\2\2\u06fc"+
		"\u06be\3\2\2\2\u06fc\u06c7\3\2\2\2\u06fc\u06d0\3\2\2\2\u06fc\u06d9\3\2"+
		"\2\2\u06fc\u06e2\3\2\2\2\u06fc\u06eb\3\2\2\2\u06fc\u06f4\3\2\2\2\u06fc"+
		"\u06fb\3\2\2\2\u06fd\u00eb\3\2\2\2\u06fe\u06ff\5\u029e\u0150\2\u06ff\u0705"+
		"\5\u012e\u0098\2\u0700\u0701\5\u02aa\u0156\2\u0701\u0702\5\u012e\u0098"+
		"\2\u0702\u0704\3\2\2\2\u0703\u0700\3\2\2\2\u0704\u0707\3\2\2\2\u0705\u0703"+
		"\3\2\2\2\u0705\u0706\3\2\2\2\u0706\u0708\3\2\2\2\u0707\u0705\3\2\2\2\u0708"+
		"\u0709\5\u02a0\u0151\2\u0709\u00ed\3\2\2\2\u070a\u070b\5\u029e\u0150\2"+
		"\u070b\u070c\5\u012e\u0098\2\u070c\u070d\5\u02ac\u0157\2\u070d\u070e\5"+
		"\u012e\u0098\2\u070e\u0715\3\2\2\2\u070f\u0710\5\u012e\u0098\2\u0710\u0711"+
		"\5\u02ac\u0157\2\u0711\u0712\5\u012e\u0098\2\u0712\u0714\3\2\2\2\u0713"+
		"\u070f\3\2\2\2\u0714\u0717\3\2\2\2\u0715\u0713\3\2\2\2\u0715\u0716\3\2"+
		"\2\2\u0716\u0718\3\2\2\2\u0717\u0715\3\2\2\2\u0718\u0719\5\u02a0\u0151"+
		"\2\u0719\u00ef\3\2\2\2\u071a\u071b\5\u02a6\u0154\2\u071b\u0721\5\u012e"+
		"\u0098\2\u071c\u071d\5\u02ac\u0157\2\u071d\u071e\5\u012e\u0098\2\u071e"+
		"\u0720\3\2\2\2\u071f\u071c\3\2\2\2\u0720\u0723\3\2\2\2\u0721\u071f\3\2"+
		"\2\2\u0721\u0722\3\2\2\2\u0722\u0724\3\2\2\2\u0723\u0721\3\2\2\2\u0724"+
		"\u0725\5\u02a8\u0155\2\u0725\u00f1\3\2\2\2\u0726\u0727\5\u01ea\u00f6\2"+
		"\u0727\u0728\5\u0166\u00b4\2\u0728\u0729\5\u0102\u0082\2\u0729\u072c\5"+
		"\u0100\u0081\2\u072a\u072d\5\u00fc\177\2\u072b\u072d\3\2\2\2\u072c\u072a"+
		"\3\2\2\2\u072c\u072b\3\2\2\2\u072d\u072f\3\2\2\2\u072e\u0730\5\u00f4{"+
		"\2\u072f\u072e\3\2\2\2\u072f\u0730\3\2\2\2\u0730\u00f3\3\2\2\2\u0731\u0732"+
		"\5\u0254\u012b\2\u0732\u0733\5\u00f8}\2\u0733\u0742\3\2\2\2\u0734\u0735"+
		"\5\u0254\u012b\2\u0735\u0736\5\u00f8}\2\u0736\u0737\5\u01a6\u00d4\2\u0737"+
		"\u0738\5\u00f6|\2\u0738\u0742\3\2\2\2\u0739\u073a\5\u0254\u012b\2\u073a"+
		"\u073b\5\u00f6|\2\u073b\u0742\3\2\2\2\u073c\u073d\5\u0254\u012b\2\u073d"+
		"\u073e\5\u00f6|\2\u073e\u073f\5\u01a6\u00d4\2\u073f\u0740\5\u00f8}\2\u0740"+
		"\u0742\3\2\2\2\u0741\u0731\3\2\2\2\u0741\u0734\3\2\2\2\u0741\u0739\3\2"+
		"\2\2\u0741\u073c\3\2\2\2\u0742\u00f5\3\2\2\2\u0743\u0744\5\u023c\u011f"+
		"\2\u0744\u0745\5\u0140\u00a1\2\u0745\u00f7\3\2\2\2\u0746\u0747\5\u0246"+
		"\u0124\2\u0747\u0748\5\u0140\u00a1\2\u0748\u00f9\3\2\2\2\u0749\u074a\5"+
		"\u0254\u012b\2\u074a\u074b\5\u00f6|\2\u074b\u00fb\3\2\2\2\u074c\u074d"+
		"\5\u01e0\u00f1\2\u074d\u074e\5\u020a\u0106\2\u074e\u074f\5\u01d2\u00ea"+
		"\2\u074f\u00fd\3\2\2\2\u0750\u0751\5\u01e0\u00f1\2\u0751\u0752\5\u01d2"+
		"\u00ea\2\u0752\u00ff\3\2\2\2\u0753\u0754\5\u0256\u012c\2\u0754\u0755\5"+
		"\u029a\u014e\2\u0755\u0758\5\u0108\u0085\2\u0756\u0759\5\u029c\u014f\2"+
		"\u0757\u0759\b\u0081\1\2\u0758\u0756\3\2\2\2\u0758\u0757\3\2\2\2\u0759"+
		"\u075c\3\2\2\2\u075a\u075c\b\u0081\1\2\u075b\u0753\3\2\2\2\u075b\u075a"+
		"\3\2\2\2\u075c\u0101\3\2\2\2\u075d\u075e\5\u029a\u014e\2\u075e\u075f\5"+
		"\u0104\u0083\2\u075f\u0760\5\u029c\u014f\2\u0760\u0763\3\2\2\2\u0761\u0763"+
		"\b\u0082\1\2\u0762\u075d\3\2\2\2\u0762\u0761\3\2\2\2\u0763\u0103\3\2\2"+
		"\2\u0764\u076c\5\u016a\u00b6\2\u0765\u0768\5\u02aa\u0156\2\u0766\u0769"+
		"\5\u016a\u00b6\2\u0767\u0769\b\u0083\1\2\u0768\u0766\3\2\2\2\u0768\u0767"+
		"\3\2\2\2\u0769\u076b\3\2\2\2\u076a\u0765\3\2\2\2\u076b\u076e\3\2\2\2\u076c"+
		"\u076a\3\2\2\2\u076c\u076d\3\2\2\2\u076d\u0771\3\2\2\2\u076e\u076c\3\2"+
		"\2\2\u076f\u0771\b\u0083\1\2\u0770\u0764\3\2\2\2\u0770\u076f\3\2\2\2\u0771"+
		"\u0105\3\2\2\2\u0772\u077a\5\u016a\u00b6\2\u0773\u0776\5\u02aa\u0156\2"+
		"\u0774\u0777\5\u016a\u00b6\2\u0775\u0777\b\u0084\1\2\u0776\u0774\3\2\2"+
		"\2\u0776\u0775\3\2\2\2\u0777\u0779\3\2\2\2\u0778\u0773\3\2\2\2\u0779\u077c"+
		"\3\2\2\2\u077a\u0778\3\2\2\2\u077a\u077b\3\2\2\2\u077b\u077f\3\2\2\2\u077c"+
		"\u077a\3\2\2\2\u077d\u077f\b\u0084\1\2\u077e\u0772\3\2\2\2\u077e\u077d"+
		"\3\2\2\2\u077f\u0107\3\2\2\2\u0780\u0786\5\u010a\u0086\2\u0781\u0782\5"+
		"\u02aa\u0156\2\u0782\u0783\5\u010a\u0086\2\u0783\u0785\3\2\2\2\u0784\u0781"+
		"\3\2\2\2\u0785\u0788\3\2\2\2\u0786\u0784\3\2\2\2\u0786\u0787\3\2\2\2\u0787"+
		"\u0109\3\2\2\2\u0788\u0786\3\2\2\2\u0789\u078c\5\u012e\u0098\2\u078a\u078c"+
		"\5\u0134\u009b\2\u078b\u0789\3\2\2\2\u078b\u078a\3\2\2\2\u078c\u078f\3"+
		"\2\2\2\u078d\u078f\b\u0086\1\2\u078e\u078b\3\2\2\2\u078e\u078d\3\2\2\2"+
		"\u078f\u010b\3\2\2\2\u0790\u0792\5\u022c\u0117\2\u0791\u0793\5\u01c8\u00e5"+
		"\2\u0792\u0791\3\2\2\2\u0792\u0793\3\2\2\2\u0793\u0794\3\2\2\2\u0794\u0795"+
		"\5\u0118\u008d\2\u0795\u0797\5\u0110\u0089\2\u0796\u0798\5\u0116\u008c"+
		"\2\u0797\u0796\3\2\2\2\u0797\u0798\3\2\2\2\u0798\u079a\3\2\2\2\u0799\u079b"+
		"\5\u0112\u008a\2\u079a\u0799\3\2\2\2\u079a\u079b\3\2\2\2\u079b\u079d\3"+
		"\2\2\2\u079c\u079e\5\u010e\u0088\2\u079d\u079c\3\2\2\2\u079d\u079e\3\2"+
		"\2\2\u079e\u07a0\3\2\2\2\u079f\u07a1\5\u01a2\u00d2\2\u07a0\u079f\3\2\2"+
		"\2\u07a0\u07a1\3\2\2\2\u07a1\u010d\3\2\2\2\u07a2\u07a5\5\u01f6\u00fc\2"+
		"\u07a3\u07a6\5\u0140\u00a1\2\u07a4\u07a6\b\u0088\1\2\u07a5\u07a3\3\2\2"+
		"\2\u07a5\u07a4\3\2\2\2\u07a6\u010f\3\2\2\2\u07a7\u07a8\5\u01d8\u00ed\2"+
		"\u07a8\u07a9\5\u0166\u00b4\2\u07a9\u07ac\3\2\2\2\u07aa\u07ac\b\u0089\1"+
		"\2\u07ab\u07a7\3\2\2\2\u07ab\u07aa\3\2\2\2\u07ac\u0111\3\2\2\2\u07ad\u07ae"+
		"\5\u0218\u010d\2\u07ae\u07af\5\u0114\u008b\2\u07af\u0113\3\2\2\2\u07b0"+
		"\u07b3\5\u016a\u00b6\2\u07b1\u07b4\5\u01ac\u00d7\2\u07b2\u07b4\5\u01c4"+
		"\u00e3\2\u07b3\u07b1\3\2\2\2\u07b3\u07b2\3\2\2\2\u07b3\u07b4\3\2\2\2\u07b4"+
		"\u07b7\3\2\2\2\u07b5\u07b7\b\u008b\1\2\u07b6\u07b0\3\2\2\2\u07b6\u07b5"+
		"\3\2\2\2\u07b7\u0115\3\2\2\2\u07b8\u07b9\5\u0258\u012d\2\u07b9\u07ba\5"+
		"\u011c\u008f\2\u07ba\u0117\3\2\2\2\u07bb\u07c7\5\u0294\u014b\2\u07bc\u07c2"+
		"\5\u011a\u008e\2\u07bd\u07be\5\u02aa\u0156\2\u07be\u07bf\5\u011a\u008e"+
		"\2\u07bf\u07c1\3\2\2\2\u07c0\u07bd\3\2\2\2\u07c1\u07c4\3\2\2\2\u07c2\u07c0"+
		"\3\2\2\2\u07c2\u07c3\3\2\2\2\u07c3\u07c7\3\2\2\2\u07c4\u07c2\3\2\2\2\u07c5"+
		"\u07c7\b\u008d\1\2\u07c6\u07bb\3\2\2\2\u07c6\u07bc\3\2\2\2\u07c6\u07c5"+
		"\3\2\2\2\u07c7\u0119\3\2\2\2\u07c8\u07d7\5\u016a\u00b6\2\u07c9\u07cd\5"+
		"\u016a\u00b6\2\u07ca\u07cb\5\u01aa\u00d6\2\u07cb\u07cc\7\u00aa\2\2\u07cc"+
		"\u07ce\3\2\2\2\u07cd\u07ca\3\2\2\2\u07cd\u07ce\3\2\2\2\u07ce\u07d7\3\2"+
		"\2\2\u07cf\u07d3\5\u012a\u0096\2\u07d0\u07d1\5\u01aa\u00d6\2\u07d1\u07d2"+
		"\7\u00aa\2\2\u07d2\u07d4\3\2\2\2\u07d3\u07d0\3\2\2\2\u07d3\u07d4\3\2\2"+
		"\2\u07d4\u07d7\3\2\2\2\u07d5\u07d7\b\u008e\1\2\u07d6\u07c8\3\2\2\2\u07d6"+
		"\u07c9\3\2\2\2\u07d6\u07cf\3\2\2\2\u07d6\u07d5\3\2\2\2\u07d7\u011b\3\2"+
		"\2\2\u07d8\u07de\5\u011e\u0090\2\u07d9\u07da\5\u01a6\u00d4\2\u07da\u07db"+
		"\5\u011e\u0090\2\u07db\u07dd\3\2\2\2\u07dc\u07d9\3\2\2\2\u07dd\u07e0\3"+
		"\2\2\2\u07de\u07dc\3\2\2\2\u07de\u07df\3\2\2\2\u07df\u011d\3\2\2\2\u07e0"+
		"\u07de\3\2\2\2\u07e1\u07e8\5\u0120\u0091\2\u07e2\u07e8\5\u0122\u0092\2"+
		"\u07e3\u07e8\5\u0124\u0093\2\u07e4\u07e5\7\u00aa\2\2\u07e5\u07e8\b\u0090"+
		"\1\2\u07e6\u07e8\b\u0090\1\2\u07e7\u07e1\3\2\2\2\u07e7\u07e2\3\2\2\2\u07e7"+
		"\u07e3\3\2\2\2\u07e7\u07e4\3\2\2\2\u07e7\u07e6\3\2\2\2\u07e8\u011f\3\2"+
		"\2\2\u07e9\u07ea\5\u016a\u00b6\2\u07ea\u07ed\5\u0128\u0095\2\u07eb\u07ee"+
		"\5\u012e\u0098\2\u07ec\u07ee\b\u0091\1\2\u07ed\u07eb\3\2\2\2\u07ed\u07ec"+
		"\3\2\2\2\u07ee\u0121\3\2\2\2\u07ef\u07f0\5\u016a\u00b6\2\u07f0\u07f1\5"+
		"\u01e2\u00f2\2\u07f1\u07f3\5\u029a\u014e\2\u07f2\u07f4\5\u012c\u0097\2"+
		"\u07f3\u07f2\3\2\2\2\u07f3\u07f4\3\2\2\2\u07f4\u07f5\3\2\2\2\u07f5\u07f6"+
		"\5\u029c\u014f\2\u07f6\u0123\3\2\2\2\u07f7\u07fa\5\u0126\u0094\2\u07f8"+
		"\u07fb\5\u0128\u0095\2\u07f9\u07fb\b\u0093\1\2\u07fa\u07f8\3\2\2\2\u07fa"+
		"\u07f9\3\2\2\2\u07fb\u07fc\3\2\2\2\u07fc\u07fd\5\u0126\u0094\2\u07fd\u0125"+
		"\3\2\2\2\u07fe\u0801\5\u0240\u0121\2\u07ff\u0802\5\u029a\u014e\2\u0800"+
		"\u0802\b\u0094\1\2\u0801\u07ff\3\2\2\2\u0801\u0800\3\2\2\2\u0802\u0805"+
		"\3\2\2\2\u0803\u0806\5\u016a\u00b6\2\u0804\u0806\b\u0094\1\2\u0805\u0803"+
		"\3\2\2\2\u0805\u0804\3\2\2\2\u0806\u0809\3\2\2\2\u0807\u080a\5\u029c\u014f"+
		"\2\u0808\u080a\b\u0094\1\2\u0809\u0807\3\2\2\2\u0809\u0808\3\2\2\2\u080a"+
		"\u080d\3\2\2\2\u080b\u080d\b\u0094\1\2\u080c\u07fe\3\2\2\2\u080c\u080b"+
		"\3\2\2\2\u080d\u0127\3\2\2\2\u080e\u0817\5\u02b6\u015c\2\u080f\u0817\5"+
		"\u02b8\u015d\2\u0810\u0817\5\u02ba\u015e\2\u0811\u0817\5\u02bc\u015f\2"+
		"\u0812\u0817\5\u02be\u0160\2\u0813\u0817\5\u01bc\u00df\2\u0814\u0817\5"+
		"\u01be\u00e0\2\u0815\u0817\b\u0095\1\2\u0816\u080e\3\2\2\2\u0816\u080f"+
		"\3\2\2\2\u0816\u0810\3\2\2\2\u0816\u0811\3\2\2\2\u0816\u0812\3\2\2\2\u0816"+
		"\u0813\3\2\2\2\u0816\u0814\3\2\2\2\u0816\u0815\3\2\2\2\u0817\u0129\3\2"+
		"\2\2\u0818\u0819\7\u00aa\2\2\u0819\u081a\7\3\2\2\u081a\u081b\7\23\2\2"+
		"\u081b\u0823\7\4\2\2\u081c\u081d\7\u00aa\2\2\u081d\u081f\7\3\2\2\u081e"+
		"\u0820\5\u012c\u0097\2\u081f\u081e\3\2\2\2\u081f\u0820\3\2\2\2\u0820\u0821"+
		"\3\2\2\2\u0821\u0823\7\4\2\2\u0822\u0818\3\2\2\2\u0822\u081c\3\2\2\2\u0823"+
		"\u012b\3\2\2\2\u0824\u0828\5\u012e\u0098\2\u0825\u0828\7\u00aa\2\2\u0826"+
		"\u0828\5\u012a\u0096\2\u0827\u0824\3\2\2\2\u0827\u0825\3\2\2\2\u0827\u0826"+
		"\3\2\2\2\u0828\u0831\3\2\2\2\u0829\u082d\5\u02aa\u0156\2\u082a\u082e\5"+
		"\u012e\u0098\2\u082b\u082e\7\u00aa\2\2\u082c\u082e\5\u012a\u0096\2\u082d"+
		"\u082a\3\2\2\2\u082d\u082b\3\2\2\2\u082d\u082c\3\2\2\2\u082e\u0830\3\2"+
		"\2\2\u082f\u0829\3\2\2\2\u0830\u0833\3\2\2\2\u0831\u082f\3\2\2\2\u0831"+
		"\u0832\3\2\2\2\u0832\u012d\3\2\2\2\u0833\u0831\3\2\2\2\u0834\u083c\5\u013e"+
		"\u00a0\2\u0835\u083c\5\u0144\u00a3\2\u0836\u083c\5\u0140\u00a1\2\u0837"+
		"\u083c\5\u0142\u00a2\2\u0838\u083c\5\u0148\u00a5\2\u0839\u083c\5\u0146"+
		"\u00a4\2\u083a\u083c\5\u020c\u0107\2\u083b\u0834\3\2\2\2\u083b\u0835\3"+
		"\2\2\2\u083b\u0836\3\2\2\2\u083b\u0837\3\2\2\2\u083b\u0838\3\2\2\2\u083b"+
		"\u0839\3\2\2\2\u083b\u083a\3\2\2\2\u083c\u012f\3\2\2\2\u083d\u0843\5\u012e"+
		"\u0098\2\u083e\u0843\5\u0136\u009c\2\u083f\u0843\5\u0138\u009d\2\u0840"+
		"\u0843\5\u013a\u009e\2\u0841\u0843\5\u013c\u009f\2\u0842\u083d\3\2\2\2"+
		"\u0842\u083e\3\2\2\2\u0842\u083f\3\2\2\2\u0842\u0840\3\2\2\2\u0842\u0841"+
		"\3\2\2\2\u0843\u0131\3\2\2\2\u0844\u0845\5\u0130\u0099\2\u0845\u0846\5"+
		"\u02ac\u0157\2\u0846\u0847\5\u0130\u0099\2\u0847\u0133\3\2\2\2\u0848\u084d"+
		"\5\u0136\u009c\2\u0849\u084d\5\u013c\u009f\2\u084a\u084d\5\u013a\u009e"+
		"\2\u084b\u084d\5\u0138\u009d\2\u084c\u0848\3\2\2\2\u084c\u0849\3\2\2\2"+
		"\u084c\u084a\3\2\2\2\u084c\u084b\3\2\2\2\u084d\u0135\3\2\2\2\u084e\u084f"+
		"\5\u029e\u0150\2\u084f\u0855\5\u0132\u009a\2\u0850\u0851\5\u02aa\u0156"+
		"\2\u0851\u0852\5\u0132\u009a\2\u0852\u0854\3\2\2\2\u0853\u0850\3\2\2\2"+
		"\u0854\u0857\3\2\2\2\u0855\u0853\3\2\2\2\u0855\u0856\3\2\2\2\u0856\u0858"+
		"\3\2\2\2\u0857\u0855\3\2\2\2\u0858\u0859\5\u02a0\u0151\2\u0859\u0137\3"+
		"\2\2\2\u085a\u085b\5\u029e\u0150\2\u085b\u0861\5\u0130\u0099\2\u085c\u085d"+
		"\5\u02aa\u0156\2\u085d\u085e\5\u0130\u0099\2\u085e\u0860\3\2\2\2\u085f"+
		"\u085c\3\2\2\2\u0860\u0863\3\2\2\2\u0861\u085f\3\2\2\2\u0861\u0862\3\2"+
		"\2\2\u0862\u0864\3\2\2\2\u0863\u0861\3\2\2\2\u0864\u0865\5\u02a0\u0151"+
		"\2\u0865\u0139\3\2\2\2\u0866\u0867\5\u02a6\u0154\2\u0867\u086d\5\u0130"+
		"\u0099\2\u0868\u0869\5\u02aa\u0156\2\u0869\u086a\5\u0130\u0099\2\u086a"+
		"\u086c\3\2\2\2\u086b\u0868\3\2\2\2\u086c\u086f\3\2\2\2\u086d\u086b\3\2"+
		"\2\2\u086d\u086e\3\2\2\2\u086e\u0870\3\2\2\2\u086f\u086d\3\2\2\2\u0870"+
		"\u0871\5\u02a8\u0155\2\u0871\u013b\3\2\2\2\u0872\u0873\5\u029a\u014e\2"+
		"\u0873\u0879\5\u0130\u0099\2\u0874\u0875\5\u02aa\u0156\2\u0875\u0876\5"+
		"\u0130\u0099\2\u0876\u0878\3\2\2\2\u0877\u0874\3\2\2\2\u0878\u087b\3\2"+
		"\2\2\u0879\u0877\3\2\2\2\u0879\u087a\3\2\2\2\u087a\u087c\3\2\2\2\u087b"+
		"\u0879\3\2\2\2\u087c\u087d\5\u029c\u014f\2\u087d\u013d\3\2\2\2\u087e\u087f"+
		"\7\u00ab\2\2\u087f\u013f\3\2\2\2\u0880\u0881\7\u00a6\2\2\u0881\u0141\3"+
		"\2\2\2\u0882\u0883\t\2\2\2\u0883\u0143\3\2\2\2\u0884\u0885\7\u00a5\2\2"+
		"\u0885\u0145\3\2\2\2\u0886\u0887\t\3\2\2\u0887\u0147\3\2\2\2\u0888\u0889"+
		"\7\u00a8\2\2\u0889\u0149\3\2\2\2\u088a\u089f\7\u00aa\2\2\u088b\u088c\7"+
		"\f\2\2\u088c\u088d\7\u00aa\2\2\u088d\u089f\7\f\2\2\u088e\u089f\7\u0099"+
		"\2\2\u088f\u089f\7g\2\2\u0890\u089f\7`\2\2\u0891\u089f\7\67\2\2\u0892"+
		"\u089f\7O\2\2\u0893\u089f\7\u0081\2\2\u0894\u089f\7G\2\2\u0895\u089f\7"+
		"l\2\2\u0896\u089f\7\177\2\2\u0897\u089f\7c\2\2\u0898\u089f\7L\2\2\u0899"+
		"\u089f\7P\2\2\u089a\u089f\7\u00b1\2\2\u089b\u089f\7\u00b2\2\2\u089c\u089f"+
		"\7\u0099\2\2\u089d\u089f\7\u0098\2\2\u089e\u088a\3\2\2\2\u089e\u088b\3"+
		"\2\2\2\u089e\u088e\3\2\2\2\u089e\u088f\3\2\2\2\u089e\u0890\3\2\2\2\u089e"+
		"\u0891\3\2\2\2\u089e\u0892\3\2\2\2\u089e\u0893\3\2\2\2\u089e\u0894\3\2"+
		"\2\2\u089e\u0895\3\2\2\2\u089e\u0896\3\2\2\2\u089e\u0897\3\2\2\2\u089e"+
		"\u0898\3\2\2\2\u089e\u0899\3\2\2\2\u089e\u089a\3\2\2\2\u089e\u089b\3\2"+
		"\2\2\u089e\u089c\3\2\2\2\u089e\u089d\3\2\2\2\u089f\u014b\3\2\2\2\u08a0"+
		"\u08b5\7\u00aa\2\2\u08a1\u08a2\7\f\2\2\u08a2\u08a3\7\u00aa\2\2\u08a3\u08b5"+
		"\7\f\2\2\u08a4\u08b5\7\u0099\2\2\u08a5\u08b5\7g\2\2\u08a6\u08b5\7`\2\2"+
		"\u08a7\u08b5\7\67\2\2\u08a8\u08b5\7O\2\2\u08a9\u08b5\7\u0081\2\2\u08aa"+
		"\u08b5\7G\2\2\u08ab\u08b5\7l\2\2\u08ac\u08b5\7\177\2\2\u08ad\u08b5\7c"+
		"\2\2\u08ae\u08b5\7L\2\2\u08af\u08b5\7P\2\2\u08b0\u08b5\7\u00b1\2\2\u08b1"+
		"\u08b5\7\u00b2\2\2\u08b2\u08b5\7\u0099\2\2\u08b3\u08b5\7\u0098\2\2\u08b4"+
		"\u08a0\3\2\2\2\u08b4\u08a1\3\2\2\2\u08b4\u08a4\3\2\2\2\u08b4\u08a5\3\2"+
		"\2\2\u08b4\u08a6\3\2\2\2\u08b4\u08a7\3\2\2\2\u08b4\u08a8\3\2\2\2\u08b4"+
		"\u08a9\3\2\2\2\u08b4\u08aa\3\2\2\2\u08b4\u08ab\3\2\2\2\u08b4\u08ac\3\2"+
		"\2\2\u08b4\u08ad\3\2\2\2\u08b4\u08ae\3\2\2\2\u08b4\u08af\3\2\2\2\u08b4"+
		"\u08b0\3\2\2\2\u08b4\u08b1\3\2\2\2\u08b4\u08b2\3\2\2\2\u08b4\u08b3\3\2"+
		"\2\2\u08b5\u014d\3\2\2\2\u08b6\u08b7\t\4\2\2\u08b7\u014f\3\2\2\2\u08b8"+
		"\u08cd\7\u00aa\2\2\u08b9\u08ba\7\f\2\2\u08ba\u08bb\7\u00aa\2\2\u08bb\u08cd"+
		"\7\f\2\2\u08bc\u08cd\7\u0099\2\2\u08bd\u08cd\7g\2\2\u08be\u08cd\7`\2\2"+
		"\u08bf\u08cd\7\67\2\2\u08c0\u08cd\7O\2\2\u08c1\u08cd\7\u0081\2\2\u08c2"+
		"\u08cd\7G\2\2\u08c3\u08cd\7l\2\2\u08c4\u08cd\7\177\2\2\u08c5\u08cd\7c"+
		"\2\2\u08c6\u08cd\7L\2\2\u08c7\u08cd\7P\2\2\u08c8\u08cd\7\u00b1\2\2\u08c9"+
		"\u08cd\7\u00b2\2\2\u08ca\u08cd\7\u0099\2\2\u08cb\u08cd\7\u0098\2\2\u08cc"+
		"\u08b8\3\2\2\2\u08cc\u08b9\3\2\2\2\u08cc\u08bc\3\2\2\2\u08cc\u08bd\3\2"+
		"\2\2\u08cc\u08be\3\2\2\2\u08cc\u08bf\3\2\2\2\u08cc\u08c0\3\2\2\2\u08cc"+
		"\u08c1\3\2\2\2\u08cc\u08c2\3\2\2\2\u08cc\u08c3\3\2\2\2\u08cc\u08c4\3\2"+
		"\2\2\u08cc\u08c5\3\2\2\2\u08cc\u08c6\3\2\2\2\u08cc\u08c7\3\2\2\2\u08cc"+
		"\u08c8\3\2\2\2\u08cc\u08c9\3\2\2\2\u08cc\u08ca\3\2\2\2\u08cc\u08cb\3\2"+
		"\2\2\u08cd\u0151\3\2\2\2\u08ce\u08e3\7\u00aa\2\2\u08cf\u08d0\7\f\2\2\u08d0"+
		"\u08d1\7\u00aa\2\2\u08d1\u08e3\7\f\2\2\u08d2\u08e3\7\u0099\2\2\u08d3\u08e3"+
		"\7g\2\2\u08d4\u08e3\7`\2\2\u08d5\u08e3\7\67\2\2\u08d6\u08e3\7O\2\2\u08d7"+
		"\u08e3\7\u0081\2\2\u08d8\u08e3\7G\2\2\u08d9\u08e3\7l\2\2\u08da\u08e3\7"+
		"\177\2\2\u08db\u08e3\7c\2\2\u08dc\u08e3\7L\2\2\u08dd\u08e3\7P\2\2\u08de"+
		"\u08e3\7\u00b1\2\2\u08df\u08e3\7\u00b2\2\2\u08e0\u08e3\7\u0099\2\2\u08e1"+
		"\u08e3\7\u0098\2\2\u08e2\u08ce\3\2\2\2\u08e2\u08cf\3\2\2\2\u08e2\u08d2"+
		"\3\2\2\2\u08e2\u08d3\3\2\2\2\u08e2\u08d4\3\2\2\2\u08e2\u08d5\3\2\2\2\u08e2"+
		"\u08d6\3\2\2\2\u08e2\u08d7\3\2\2\2\u08e2\u08d8\3\2\2\2\u08e2\u08d9\3\2"+
		"\2\2\u08e2\u08da\3\2\2\2\u08e2\u08db\3\2\2\2\u08e2\u08dc\3\2\2\2\u08e2"+
		"\u08dd\3\2\2\2\u08e2\u08de\3\2\2\2\u08e2\u08df\3\2\2\2\u08e2\u08e0\3\2"+
		"\2\2\u08e2\u08e1\3\2\2\2\u08e3\u0153\3\2\2\2\u08e4\u08f9\7\u00aa\2\2\u08e5"+
		"\u08e6\7\f\2\2\u08e6\u08e7\7\u00aa\2\2\u08e7\u08f9\7\f\2\2\u08e8\u08f9"+
		"\7\u0099\2\2\u08e9\u08f9\7g\2\2\u08ea\u08f9\7`\2\2\u08eb\u08f9\7\67\2"+
		"\2\u08ec\u08f9\7O\2\2\u08ed\u08f9\7\u0081\2\2\u08ee\u08f9\7G\2\2\u08ef"+
		"\u08f9\7l\2\2\u08f0\u08f9\7\177\2\2\u08f1\u08f9\7c\2\2\u08f2\u08f9\7L"+
		"\2\2\u08f3\u08f9\7P\2\2\u08f4\u08f9\7\u00b1\2\2\u08f5\u08f9\7\u00b2\2"+
		"\2\u08f6\u08f9\7\u0099\2\2\u08f7\u08f9\7\u0098\2\2\u08f8\u08e4\3\2\2\2"+
		"\u08f8\u08e5\3\2\2\2\u08f8\u08e8\3\2\2\2\u08f8\u08e9\3\2\2\2\u08f8\u08ea"+
		"\3\2\2\2\u08f8\u08eb\3\2\2\2\u08f8\u08ec\3\2\2\2\u08f8\u08ed\3\2\2\2\u08f8"+
		"\u08ee\3\2\2\2\u08f8\u08ef\3\2\2\2\u08f8\u08f0\3\2\2\2\u08f8\u08f1\3\2"+
		"\2\2\u08f8\u08f2\3\2\2\2\u08f8\u08f3\3\2\2\2\u08f8\u08f4\3\2\2\2\u08f8"+
		"\u08f5\3\2\2\2\u08f8\u08f6\3\2\2\2\u08f8\u08f7\3\2\2\2\u08f9\u0155\3\2"+
		"\2\2\u08fa\u090f\7\u00aa\2\2\u08fb\u08fc\7\f\2\2\u08fc\u08fd\7\u00aa\2"+
		"\2\u08fd\u090f\7\f\2\2\u08fe\u090f\7\u0099\2\2\u08ff\u090f\7g\2\2\u0900"+
		"\u090f\7`\2\2\u0901\u090f\7\67\2\2\u0902\u090f\7O\2\2\u0903\u090f\7\u0081"+
		"\2\2\u0904\u090f\7G\2\2\u0905\u090f\7l\2\2\u0906\u090f\7\177\2\2\u0907"+
		"\u090f\7c\2\2\u0908\u090f\7L\2\2\u0909\u090f\7P\2\2\u090a\u090f\7\u00b1"+
		"\2\2\u090b\u090f\7\u00b2\2\2\u090c\u090f\7\u0099\2\2\u090d\u090f\7\u0098"+
		"\2\2\u090e\u08fa\3\2\2\2\u090e\u08fb\3\2\2\2\u090e\u08fe\3\2\2\2\u090e"+
		"\u08ff\3\2\2\2\u090e\u0900\3\2\2\2\u090e\u0901\3\2\2\2\u090e\u0902\3\2"+
		"\2\2\u090e\u0903\3\2\2\2\u090e\u0904\3\2\2\2\u090e\u0905\3\2\2\2\u090e"+
		"\u0906\3\2\2\2\u090e\u0907\3\2\2\2\u090e\u0908\3\2\2\2\u090e\u0909\3\2"+
		"\2\2\u090e\u090a\3\2\2\2\u090e\u090b\3\2\2\2\u090e\u090c\3\2\2\2\u090e"+
		"\u090d\3\2\2\2\u090f\u0157\3\2\2\2\u0910\u091b\5\u0182\u00c2\2\u0911\u0912"+
		"\5\u014a\u00a6\2\u0912\u0913\5\u0296\u014c\2\u0913\u0914\5\u0182\u00c2"+
		"\2\u0914\u091b\3\2\2\2\u0915\u0916\5\u014a\u00a6\2\u0916\u0917\5\u0296"+
		"\u014c\2\u0917\u0918\b\u00ad\1\2\u0918\u091b\3\2\2\2\u0919\u091b\b\u00ad"+
		"\1\2\u091a\u0910\3\2\2\2\u091a\u0911\3\2\2\2\u091a\u0915\3\2\2\2\u091a"+
		"\u0919\3\2\2\2\u091b\u0159\3\2\2\2\u091c\u0927\5\u0180\u00c1\2\u091d\u091e"+
		"\5\u014a\u00a6\2\u091e\u091f\5\u0296\u014c\2\u091f\u0920\5\u0180\u00c1"+
		"\2\u0920\u0927\3\2\2\2\u0921\u0922\5\u014a\u00a6\2\u0922\u0923\5\u0296"+
		"\u014c\2\u0923\u0924\b\u00ae\1\2\u0924\u0927\3\2\2\2\u0925\u0927\b\u00ae"+
		"\1\2\u0926\u091c\3\2\2\2\u0926\u091d\3\2\2\2\u0926\u0921\3\2\2\2\u0926"+
		"\u0925\3\2\2\2\u0927\u015b\3\2\2\2\u0928\u0933\5\u0184\u00c3\2\u0929\u092a"+
		"\5\u014a\u00a6\2\u092a\u092b\5\u0296\u014c\2\u092b\u092c\5\u0184\u00c3"+
		"\2\u092c\u0933\3\2\2\2\u092d\u092e\5\u014a\u00a6\2\u092e\u092f\5\u0296"+
		"\u014c\2\u092f\u0930\b\u00af\1\2\u0930\u0933\3\2\2\2\u0931\u0933\b\u00af"+
		"\1\2\u0932\u0928\3\2\2\2\u0932\u0929\3\2\2\2\u0932\u092d\3\2\2\2\u0932"+
		"\u0931\3\2\2\2\u0933\u015d\3\2\2\2\u0934\u0949\5\u014e\u00a8\2\u0935\u0936"+
		"\5\u02b4\u015b\2\u0936\u0937\5\u014e\u00a8\2\u0937\u0938\5\u02b4\u015b"+
		"\2\u0938\u0949\3\2\2\2\u0939\u093a\5\u014a\u00a6\2\u093a\u093b\5\u0296"+
		"\u014c\2\u093b\u093c\5\u014e\u00a8\2\u093c\u0949\3\2\2\2\u093d\u093e\5"+
		"\u014a\u00a6\2\u093e\u093f\5\u0296\u014c\2\u093f\u0940\5\u02b4\u015b\2"+
		"\u0940\u0941\5\u014e\u00a8\2\u0941\u0942\5\u02b4\u015b\2\u0942\u0949\3"+
		"\2\2\2\u0943\u0944\5\u014a\u00a6\2\u0944\u0945\5\u0296\u014c\2\u0945\u0946"+
		"\b\u00b0\1\2\u0946\u0949\3\2\2\2\u0947\u0949\b\u00b0\1\2\u0948\u0934\3"+
		"\2\2\2\u0948\u0935\3\2\2\2\u0948\u0939\3\2\2\2\u0948\u093d\3\2\2\2\u0948"+
		"\u0943\3\2\2\2\u0948\u0947\3\2\2\2\u0949\u015f\3\2\2\2\u094a\u095f\5\u0150"+
		"\u00a9\2\u094b\u094c\5\u02b4\u015b\2\u094c\u094d\5\u0150\u00a9\2\u094d"+
		"\u094e\5\u02b4\u015b\2\u094e\u095f\3\2\2\2\u094f\u0950\5\u014c\u00a7\2"+
		"\u0950\u0951\5\u0296\u014c\2\u0951\u0952\5\u0150\u00a9\2\u0952\u095f\3"+
		"\2\2\2\u0953\u0954\5\u014c\u00a7\2\u0954\u0955\5\u0296\u014c\2\u0955\u0956"+
		"\5\u02b4\u015b\2\u0956\u0957\5\u0150\u00a9\2\u0957\u0958\5\u02b4\u015b"+
		"\2\u0958\u095f\3\2\2\2\u0959\u095a\5\u014c\u00a7\2\u095a\u095b\5\u0296"+
		"\u014c\2\u095b\u095c\b\u00b1\1\2\u095c\u095f\3\2\2\2\u095d\u095f\b\u00b1"+
		"\1\2\u095e\u094a\3\2\2\2\u095e\u094b\3\2\2\2\u095e\u094f\3\2\2\2\u095e"+
		"\u0953\3\2\2\2\u095e\u0959\3\2\2\2\u095e\u095d\3\2\2\2\u095f\u0161\3\2"+
		"\2\2\u0960\u096b\5\u00ceh\2\u0961\u0962\5\u014a\u00a6\2\u0962\u0963\5"+
		"\u0296\u014c\2\u0963\u0964\5\u00ceh\2\u0964\u096b\3\2\2\2\u0965\u0966"+
		"\5\u014a\u00a6\2\u0966\u0967\5\u0296\u014c\2\u0967\u0968\b\u00b2\1\2\u0968"+
		"\u096b\3\2\2\2\u0969\u096b\b\u00b2\1\2\u096a\u0960\3\2\2\2\u096a\u0961"+
		"\3\2\2\2\u096a\u0965\3\2\2\2\u096a\u0969\3\2\2\2\u096b\u0163\3\2\2\2\u096c"+
		"\u0977\5\u0152\u00aa\2\u096d\u096e\5\u014a\u00a6\2\u096e\u096f\5\u0296"+
		"\u014c\2\u096f\u0970\5\u0152\u00aa\2\u0970\u0977\3\2\2\2\u0971\u0972\5"+
		"\u014a\u00a6\2\u0972\u0973\5\u0296\u014c\2\u0973\u0974\b\u00b3\1\2\u0974"+
		"\u0977\3\2\2\2\u0975\u0977\b\u00b3\1\2\u0976\u096c\3\2\2\2\u0976\u096d"+
		"\3\2\2\2\u0976\u0971\3\2\2\2\u0976\u0975\3\2\2\2\u0977\u0165\3\2\2\2\u0978"+
		"\u097c\5\u015e\u00b0\2\u0979\u097c\5\u0164\u00b3\2\u097a\u097c\b\u00b4"+
		"\1\2\u097b\u0978\3\2\2\2\u097b\u0979\3\2\2\2\u097b\u097a\3\2\2\2\u097c"+
		"\u0167\3\2\2\2\u097d\u0984\5\u0156\u00ac\2\u097e\u097f\5\u014a\u00a6\2"+
		"\u097f\u0980\5\u0296\u014c\2\u0980\u0981\5\u0156\u00ac\2\u0981\u0984\3"+
		"\2\2\2\u0982\u0984\b\u00b5\1\2\u0983\u097d\3\2\2\2\u0983\u097e\3\2\2\2"+
		"\u0983\u0982\3\2\2\2\u0984\u0169\3\2\2\2\u0985\u098b\5\u016c\u00b7\2\u0986"+
		"\u0987\5\u02b4\u015b\2\u0987\u0988\5\u016c\u00b7\2\u0988\u0989\5\u02b4"+
		"\u015b\2\u0989\u098b\3\2\2\2\u098a\u0985\3\2\2\2\u098a\u0986\3\2\2\2\u098b"+
		"\u016b\3\2\2\2\u098c\u098d\t\4\2\2\u098d\u016d\3\2\2\2\u098e\u0994\5\u0170"+
		"\u00b9\2\u098f\u0990\5\u02b4\u015b\2\u0990\u0991\5\u0170\u00b9\2\u0991"+
		"\u0992\5\u02b4\u015b\2\u0992\u0994\3\2\2\2\u0993\u098e\3\2\2\2\u0993\u098f"+
		"\3\2\2\2\u0994\u016f\3\2\2\2\u0995\u0996\t\4\2\2\u0996\u0171\3\2\2\2\u0997"+
		"\u099a\5\u0176\u00bc\2\u0998\u099a\5\u0174\u00bb\2\u0999\u0997\3\2\2\2"+
		"\u0999\u0998\3\2\2\2\u099a\u0173\3\2\2\2\u099b\u099e\5\u0270\u0139\2\u099c"+
		"\u099f\5\u0292\u014a\2\u099d\u099f\b\u00bb\1\2\u099e\u099c\3\2\2\2\u099e"+
		"\u099d\3\2\2\2\u099f\u09b5\3\2\2\2\u09a0\u09a3\5\u027c\u013f\2\u09a1\u09a4"+
		"\5\u0292\u014a\2\u09a2\u09a4\b\u00bb\1\2\u09a3\u09a1\3\2\2\2\u09a3\u09a2"+
		"\3\2\2\2\u09a4\u09b5\3\2\2\2\u09a5\u09a8\5\u0276\u013c\2\u09a6\u09a9\5"+
		"\u0292\u014a\2\u09a7\u09a9\b\u00bb\1\2\u09a8\u09a6\3\2\2\2\u09a8\u09a7"+
		"\3\2\2\2\u09a9\u09b5\3\2\2\2\u09aa\u09ad\5\u0278\u013d\2\u09ab\u09ae\5"+
		"\u0292\u014a\2\u09ac\u09ae\b\u00bb\1\2\u09ad\u09ab\3\2\2\2\u09ad\u09ac"+
		"\3\2\2\2\u09ae\u09b5\3\2\2\2\u09af\u09b2\5\u0288\u0145\2\u09b0\u09b3\5"+
		"\u0292\u014a\2\u09b1\u09b3\b\u00bb\1\2\u09b2\u09b0\3\2\2\2\u09b2\u09b1"+
		"\3\2\2\2\u09b3\u09b5\3\2\2\2\u09b4\u099b\3\2\2\2\u09b4\u09a0\3\2\2\2\u09b4"+
		"\u09a5\3\2\2\2\u09b4\u09aa\3\2\2\2\u09b4\u09af\3\2\2\2\u09b5\u0175\3\2"+
		"\2\2\u09b6\u09cc\5\u025e\u0130\2\u09b7\u09cc\5\u0260\u0131\2\u09b8\u09cc"+
		"\5\u0262\u0132\2\u09b9\u09cc\5\u0264\u0133\2\u09ba\u09cc\5\u0266\u0134"+
		"\2\u09bb\u09cc\5\u0268\u0135\2\u09bc\u09cc\5\u026a\u0136\2\u09bd\u09cc"+
		"\5\u026c\u0137\2\u09be\u09cc\5\u026e\u0138\2";
	private static final String _serializedATNSegment1 =
		"\u09bf\u09cc\5\u0272\u013a\2\u09c0\u09cc\5\u0274\u013b\2\u09c1\u09cc\5"+
		"\u027a\u013e\2\u09c2\u09cc\5\u027e\u0140\2\u09c3\u09cc\5\u0280\u0141\2"+
		"\u09c4\u09cc\5\u0282\u0142\2\u09c5\u09cc\5\u0284\u0143\2\u09c6\u09cc\5"+
		"\u0286\u0144\2\u09c7\u09cc\5\u028c\u0147\2\u09c8\u09cc\5\u028e\u0148\2"+
		"\u09c9\u09cc\5\u0290\u0149\2\u09ca\u09cc\5\u028a\u0146\2\u09cb\u09b6\3"+
		"\2\2\2\u09cb\u09b7\3\2\2\2\u09cb\u09b8\3\2\2\2\u09cb\u09b9\3\2\2\2\u09cb"+
		"\u09ba\3\2\2\2\u09cb\u09bb\3\2\2\2\u09cb\u09bc\3\2\2\2\u09cb\u09bd\3\2"+
		"\2\2\u09cb\u09be\3\2\2\2\u09cb\u09bf\3\2\2\2\u09cb\u09c0\3\2\2\2\u09cb"+
		"\u09c1\3\2\2\2\u09cb\u09c2\3\2\2\2\u09cb\u09c3\3\2\2\2\u09cb\u09c4\3\2"+
		"\2\2\u09cb\u09c5\3\2\2\2\u09cb\u09c6\3\2\2\2\u09cb\u09c7\3\2\2\2\u09cb"+
		"\u09c8\3\2\2\2\u09cb\u09c9\3\2\2\2\u09cb\u09ca\3\2\2\2\u09cc\u0177\3\2"+
		"\2\2\u09cd\u09d0\5\u01ac\u00d7\2\u09ce\u09d0\5\u01c4\u00e3\2\u09cf\u09cd"+
		"\3\2\2\2\u09cf\u09ce\3\2\2\2\u09d0\u0179\3\2\2\2\u09d1\u09d2\7\u00aa\2"+
		"\2\u09d2\u017b\3\2\2\2\u09d3\u09d4\7\u00aa\2\2\u09d4\u017d\3\2\2\2\u09d5"+
		"\u09d6\5\u0144\u00a3\2\u09d6\u017f\3\2\2\2\u09d7\u09d8\7\u00aa\2\2\u09d8"+
		"\u0181\3\2\2\2\u09d9\u09ee\7\u00aa\2\2\u09da\u09db\7\f\2\2\u09db\u09dc"+
		"\7\u00aa\2\2\u09dc\u09ee\7\f\2\2\u09dd\u09ee\7\u0099\2\2\u09de\u09ee\7"+
		"g\2\2\u09df\u09ee\7`\2\2\u09e0\u09ee\7\67\2\2\u09e1\u09ee\7O\2\2\u09e2"+
		"\u09ee\7\u0081\2\2\u09e3\u09ee\7G\2\2\u09e4\u09ee\7l\2\2\u09e5\u09ee\7"+
		"\177\2\2\u09e6\u09ee\7c\2\2\u09e7\u09ee\7L\2\2\u09e8\u09ee\7P\2\2\u09e9"+
		"\u09ee\7\u00b1\2\2\u09ea\u09ee\7\u00b2\2\2\u09eb\u09ee\7\u0099\2\2\u09ec"+
		"\u09ee\7\u0098\2\2\u09ed\u09d9\3\2\2\2\u09ed\u09da\3\2\2\2\u09ed\u09dd"+
		"\3\2\2\2\u09ed\u09de\3\2\2\2\u09ed\u09df\3\2\2\2\u09ed\u09e0\3\2\2\2\u09ed"+
		"\u09e1\3\2\2\2\u09ed\u09e2\3\2\2\2\u09ed\u09e3\3\2\2\2\u09ed\u09e4\3\2"+
		"\2\2\u09ed\u09e5\3\2\2\2\u09ed\u09e6\3\2\2\2\u09ed\u09e7\3\2\2\2\u09ed"+
		"\u09e8\3\2\2\2\u09ed\u09e9\3\2\2\2\u09ed\u09ea\3\2\2\2\u09ed\u09eb\3\2"+
		"\2\2\u09ed\u09ec\3\2\2\2\u09ee\u0183\3\2\2\2\u09ef\u09f0\7\u00aa\2\2\u09f0"+
		"\u0185\3\2\2\2\u09f1\u09f2\7\u00aa\2\2\u09f2\u0187\3\2\2\2\u09f3\u09f4"+
		"\7\u00aa\2\2\u09f4\u0189\3\2\2\2\u09f5\u09f6\5\u0144\u00a3\2\u09f6\u018b"+
		"\3\2\2\2\u09f7\u09f8\7\u00aa\2\2\u09f8\u018d\3\2\2\2\u09f9\u09fa\5\u0190"+
		"\u00c9\2\u09fa\u09fb\5\u0172\u00ba\2\u09fb\u018f\3\2\2\2\u09fc\u09fd\7"+
		"\u00aa\2\2\u09fd\u0191\3\2\2\2\u09fe\u09ff\7\31\2\2\u09ff\u0193\3\2\2"+
		"\2\u0a00\u0a01\7\32\2\2\u0a01\u0195\3\2\2\2\u0a02\u0a03\7\33\2\2\u0a03"+
		"\u0197\3\2\2\2\u0a04\u0a05\7\36\2\2\u0a05\u0199\3\2\2\2\u0a06\u0a07\7"+
		"\35\2\2\u0a07\u019b\3\2\2\2\u0a08\u0a09\7\34\2\2\u0a09\u019d\3\2\2\2\u0a0a"+
		"\u0a0b\7\33\2\2\u0a0b\u0a0c\7g\2\2\u0a0c\u019f\3\2\2\2\u0a0d\u0a0e\7\37"+
		"\2\2\u0a0e\u01a1\3\2\2\2\u0a0f\u0a10\7\37\2\2\u0a10\u0a11\7=\2\2\u0a11"+
		"\u01a3\3\2\2\2\u0a12\u0a13\7 \2\2\u0a13\u01a5\3\2\2\2\u0a14\u0a15\7!\2"+
		"\2\u0a15\u01a7\3\2\2\2\u0a16\u0a17\7#\2\2\u0a17\u01a9\3\2\2\2\u0a18\u0a19"+
		"\7$\2\2\u0a19\u01ab\3\2\2\2\u0a1a\u0a1b\7%\2\2\u0a1b\u01ad\3\2\2\2\u0a1c"+
		"\u0a1d\7&\2\2\u0a1d\u01af\3\2\2\2\u0a1e\u0a1f\7\'\2\2\u0a1f\u01b1\3\2"+
		"\2\2\u0a20\u0a21\7(\2\2\u0a21\u01b3\3\2\2\2\u0a22\u0a23\7)\2\2\u0a23\u01b5"+
		"\3\2\2\2\u0a24\u0a25\7*\2\2\u0a25\u01b7\3\2\2\2\u0a26\u0a27\7+\2\2\u0a27"+
		"\u01b9\3\2\2\2\u0a28\u0a29\7-\2\2\u0a29\u01bb\3\2\2\2\u0a2a\u0a2b\7/\2"+
		"\2\u0a2b\u01bd\3\2\2\2\u0a2c\u0a2d\7/\2\2\u0a2d\u0a2e\7L\2\2\u0a2e\u01bf"+
		"\3\2\2\2\u0a2f\u0a30\7\60\2\2\u0a30\u01c1\3\2\2\2\u0a31\u0a32\7\62\2\2"+
		"\u0a32\u01c3\3\2\2\2\u0a33\u0a34\7\63\2\2\u0a34\u01c5\3\2\2\2\u0a35\u0a36"+
		"\7\64\2\2\u0a36\u01c7\3\2\2\2\u0a37\u0a38\7\65\2\2\u0a38\u01c9\3\2\2\2"+
		"\u0a39\u0a3a\7\66\2\2\u0a3a\u01cb\3\2\2\2\u0a3b\u0a3c\7\67\2\2\u0a3c\u01cd"+
		"\3\2\2\2\u0a3d\u0a3e\79\2\2\u0a3e\u01cf\3\2\2\2\u0a3f\u0a40\7:\2\2\u0a40"+
		"\u01d1\3\2\2\2\u0a41\u0a42\7;\2\2\u0a42\u01d3\3\2\2\2\u0a43\u0a44\7=\2"+
		"\2\u0a44\u01d5\3\2\2\2\u0a45\u0a46\7>\2\2\u0a46\u01d7\3\2\2\2\u0a47\u0a48"+
		"\7?\2\2\u0a48\u01d9\3\2\2\2\u0a49\u0a4a\7@\2\2\u0a4a\u01db\3\2\2\2\u0a4b"+
		"\u0a4c\7A\2\2\u0a4c\u01dd\3\2\2\2\u0a4d\u0a4e\7B\2\2\u0a4e\u01df\3\2\2"+
		"\2\u0a4f\u0a50\7C\2\2\u0a50\u01e1\3\2\2\2\u0a51\u0a52\7D\2\2\u0a52\u01e3"+
		"\3\2\2\2\u0a53\u0a54\7E\2\2\u0a54\u01e5\3\2\2\2\u0a55\u0a56\7G\2\2\u0a56"+
		"\u01e7\3\2\2\2\u0a57\u0a58\7H\2\2\u0a58\u01e9\3\2\2\2\u0a59\u0a5a\7I\2"+
		"\2\u0a5a\u0a5b\7J\2\2\u0a5b\u01eb\3\2\2\2\u0a5c\u0a5d\7K\2\2\u0a5d\u01ed"+
		"\3\2\2\2\u0a5e\u0a5f\7L\2\2\u0a5f\u01ef\3\2\2\2\u0a60\u0a61\7M\2\2\u0a61"+
		"\u01f1\3\2\2\2\u0a62\u0a63\7N\2\2\u0a63\u01f3\3\2\2\2\u0a64\u0a65\7O\2"+
		"\2\u0a65\u01f5\3\2\2\2\u0a66\u0a67\7Q\2\2\u0a67\u01f7\3\2\2\2\u0a68\u0a69"+
		"\7\u0097\2\2\u0a69\u01f9\3\2\2\2\u0a6a\u0a6b\7\u0097\2\2\u0a6b\u0a6c\7"+
		"\u0098\2\2\u0a6c\u01fb\3\2\2\2\u0a6d\u0a6e\7\u0097\2\2\u0a6e\u0a6f\7\u00b1"+
		"\2\2\u0a6f\u01fd\3\2\2\2\u0a70\u0a71\7T\2\2\u0a71\u01ff\3\2\2\2\u0a72"+
		"\u0a73\7U\2\2\u0a73\u0201\3\2\2\2\u0a74\u0a75\7V\2\2\u0a75\u0a76\7\u0087"+
		"\2\2\u0a76\u0203\3\2\2\2\u0a77\u0a78\7W\2\2\u0a78\u0205\3\2\2\2\u0a79"+
		"\u0a7a\7Z\2\2\u0a7a\u0207\3\2\2\2\u0a7b\u0a7c\7Y\2\2\u0a7c\u0209\3\2\2"+
		"\2\u0a7d\u0a7e\7[\2\2\u0a7e\u020b\3\2\2\2\u0a7f\u0a80\7\\\2\2\u0a80\u020d"+
		"\3\2\2\2\u0a81\u0a82\7]\2\2\u0a82\u020f\3\2\2\2\u0a83\u0a84\7^\2\2\u0a84"+
		"\u0211\3\2\2\2\u0a85\u0a86\7`\2\2\u0a86\u0213\3\2\2\2\u0a87\u0a88\7a\2"+
		"\2\u0a88\u0215\3\2\2\2\u0a89\u0a8a\7b\2\2\u0a8a\u0217\3\2\2\2\u0a8b\u0a8c"+
		"\7b\2\2\u0a8c\u0a8d\7)\2\2\u0a8d\u0219\3\2\2\2\u0a8e\u0a8f\7c\2\2\u0a8f"+
		"\u021b\3\2\2\2\u0a90\u0a91\7d\2\2\u0a91\u021d\3\2\2\2\u0a92\u0a93\7g\2"+
		"\2\u0a93\u021f\3\2\2\2\u0a94\u0a95\7h\2\2\u0a95\u0221\3\2\2\2\u0a96\u0a97"+
		"\7j\2\2\u0a97\u0223\3\2\2\2\u0a98\u0a99\7k\2\2\u0a99\u0225\3\2\2\2\u0a9a"+
		"\u0a9b\7l\2\2\u0a9b\u0227\3\2\2\2\u0a9c\u0a9d\7m\2\2\u0a9d\u0229\3\2\2"+
		"\2\u0a9e\u0a9f\7\u0099\2\2\u0a9f\u022b\3\2\2\2\u0aa0\u0aa1\7p\2\2\u0aa1"+
		"\u022d\3\2\2\2\u0aa2\u0aa3\7q\2\2\u0aa3\u022f\3\2\2\2\u0aa4\u0aa5\7r\2"+
		"\2\u0aa5\u0231\3\2\2\2\u0aa6\u0aa7\7s\2\2\u0aa7\u0233\3\2\2\2\u0aa8\u0aa9"+
		"\7t\2\2\u0aa9\u0235\3\2\2\2\u0aaa\u0aab\7u\2\2\u0aab\u0237\3\2\2\2\u0aac"+
		"\u0aad\7v\2\2\u0aad\u0239\3\2\2\2\u0aae\u0aaf\7w\2\2\u0aaf\u023b\3\2\2"+
		"\2\u0ab0\u0ab1\7y\2\2\u0ab1\u023d\3\2\2\2\u0ab2\u0ab3\7z\2\2\u0ab3\u023f"+
		"\3\2\2\2\u0ab4\u0ab5\7{\2\2\u0ab5\u0241\3\2\2\2\u0ab6\u0ab7\7|\2\2\u0ab7"+
		"\u0243\3\2\2\2\u0ab8\u0ab9\7~\2\2\u0ab9\u0245\3\2\2\2\u0aba\u0abb\7\177"+
		"\2\2\u0abb\u0247\3\2\2\2\u0abc\u0abd\7\u0081\2\2\u0abd\u0249\3\2\2\2\u0abe"+
		"\u0abf\7\u0082\2\2\u0abf\u024b\3\2\2\2\u0ac0\u0ac1\7\u0083\2\2\u0ac1\u024d"+
		"\3\2\2\2\u0ac2\u0ac3\7\u0084\2\2\u0ac3\u024f\3\2\2\2\u0ac4\u0ac5\7\u00b2"+
		"\2\2\u0ac5\u0251\3\2\2\2\u0ac6\u0ac7\7\u00b1\2\2\u0ac7\u0253\3\2\2\2\u0ac8"+
		"\u0ac9\7\u0085\2\2\u0ac9\u0255\3\2\2\2\u0aca\u0acb\7\u0086\2\2\u0acb\u0257"+
		"\3\2\2\2\u0acc\u0acd\7\u0088\2\2\u0acd\u0259\3\2\2\2\u0ace\u0acf\7\u0089"+
		"\2\2\u0acf\u025b\3\2\2\2\u0ad0\u0ad1\7n\2\2\u0ad1\u025d\3\2\2\2\u0ad2"+
		"\u0ad3\7\u008b\2\2\u0ad3\u025f\3\2\2\2\u0ad4\u0ad5\7\u008c\2\2\u0ad5\u0261"+
		"\3\2\2\2\u0ad6\u0ad7\7\u008d\2\2\u0ad7\u0263\3\2\2\2\u0ad8\u0ad9\7\u008e"+
		"\2\2\u0ad9\u0265\3\2\2\2\u0ada\u0adb\7\u008f\2\2\u0adb\u0267\3\2\2\2\u0adc"+
		"\u0add\7\u0090\2\2\u0add\u0269\3\2\2\2\u0ade\u0adf\7\u0091\2\2\u0adf\u026b"+
		"\3\2\2\2\u0ae0\u0ae1\7\u0092\2\2\u0ae1\u026d\3\2\2\2\u0ae2\u0ae3\7\u0093"+
		"\2\2\u0ae3\u026f\3\2\2\2\u0ae4\u0ae5\7\u0094\2\2\u0ae5\u0271\3\2\2\2\u0ae6"+
		"\u0ae7\7\u0095\2\2\u0ae7\u0273\3\2\2\2\u0ae8\u0ae9\7\u0096\2\2\u0ae9\u0275"+
		"\3\2\2\2\u0aea\u0aeb\7\u0097\2\2\u0aeb\u0277\3\2\2\2\u0aec\u0aed\7\u009a"+
		"\2\2\u0aed\u0279\3\2\2\2\u0aee\u0aef\7\u009b\2\2\u0aef\u027b\3\2\2\2\u0af0"+
		"\u0af1\7q\2\2\u0af1\u027d\3\2\2\2\u0af2\u0af3\7\u009c\2\2\u0af3\u027f"+
		"\3\2\2\2\u0af4\u0af5\7\u009e\2\2\u0af5\u0281\3\2\2\2\u0af6\u0af7\7\u009d"+
		"\2\2\u0af7\u0283\3\2\2\2\u0af8\u0af9\7y\2\2\u0af9\u0285\3\2\2\2\u0afa"+
		"\u0afb\7\u009f\2\2\u0afb\u0287\3\2\2\2\u0afc\u0afd\7\u00a0\2\2\u0afd\u0289"+
		"\3\2\2\2\u0afe\u0aff\7\u00aa\2\2\u0aff\u028b\3\2\2\2\u0b00\u0b01\7\u00a1"+
		"\2\2\u0b01\u028d\3\2\2\2\u0b02\u0b03\7\u00a2\2\2\u0b03\u028f\3\2\2\2\u0b04"+
		"\u0b05\7\u00a3\2\2\u0b05\u0291\3\2\2\2\u0b06\u0b07\5\u02a2\u0152\2\u0b07"+
		"\u0b0d\5\u0172\u00ba\2\u0b08\u0b09\5\u02aa\u0156\2\u0b09\u0b0a\5\u0172"+
		"\u00ba\2\u0b0a\u0b0c\3\2\2\2\u0b0b\u0b08\3\2\2\2\u0b0c\u0b0f\3\2\2\2\u0b0d"+
		"\u0b0b\3\2\2\2\u0b0d\u0b0e\3\2\2\2\u0b0e\u0b10\3\2\2\2\u0b0f\u0b0d\3\2"+
		"\2\2\u0b10\u0b11\5\u02a4\u0153\2\u0b11\u0293\3\2\2\2\u0b12\u0b13\7\23"+
		"\2\2\u0b13\u0295\3\2\2\2\u0b14\u0b15\7\22\2\2\u0b15\u0297\3\2\2\2\u0b16"+
		"\u0b17\7\2\2\3\u0b17\u0299\3\2\2\2\u0b18\u0b19\7\3\2\2\u0b19\u029b\3\2"+
		"\2\2\u0b1a\u0b1b\7\4\2\2\u0b1b\u029d\3\2\2\2\u0b1c\u0b1d\7\5\2\2\u0b1d"+
		"\u029f\3\2\2\2\u0b1e\u0b1f\7\6\2\2\u0b1f\u02a1\3\2\2\2\u0b20\u0b21\7\u00ad"+
		"\2\2\u0b21\u02a3\3\2\2\2\u0b22\u0b23\7\u00ae\2\2\u0b23\u02a5\3\2\2\2\u0b24"+
		"\u0b25\7\7\2\2\u0b25\u02a7\3\2\2\2\u0b26\u0b27\7\b\2\2\u0b27\u02a9\3\2"+
		"\2\2\u0b28\u0b29\7\t\2\2\u0b29\u02ab\3\2\2\2\u0b2a\u0b2b\7\13\2\2\u0b2b"+
		"\u02ad\3\2\2\2\u0b2c\u0b2d\7\26\2\2\u0b2d\u02af\3\2\2\2\u0b2e\u0b2f\7"+
		"\30\2\2\u0b2f\u02b1\3\2\2\2\u0b30\u0b31\7\r\2\2\u0b31\u02b3\3\2\2\2\u0b32"+
		"\u0b33\7\f\2\2\u0b33\u02b5\3\2\2\2\u0b34\u0b35\7\u00ac\2\2\u0b35\u02b7"+
		"\3\2\2\2\u0b36\u0b37\7\u00ad\2\2\u0b37\u02b9\3\2\2\2\u0b38\u0b39\7\u00ae"+
		"\2\2\u0b39\u02bb\3\2\2\2\u0b3a\u0b3b\7\u00af\2\2\u0b3b\u02bd\3\2\2\2\u0b3c"+
		"\u0b3d\7\u00b0\2\2\u0b3d\u02bf\3\2\2\2\u00d5\u02c1\u02c4\u02ca\u02cf\u02d1"+
		"\u02d6\u02d9\u02dc\u0308\u0317\u031a\u0321\u0326\u0331\u033b\u0347\u0350"+
		"\u0357\u035c\u0364\u0369\u036d\u0372\u0381\u0387\u0390\u039d\u03a4\u03ac"+
		"\u03be\u03c3\u03cf\u03d3\u03d7\u03dc\u03ef\u03f6\u03fe\u0402\u0415\u041e"+
		"\u042d\u042f\u043b\u0449\u0450\u0458\u045b\u045e\u0469\u0479\u048d\u04a4"+
		"\u04b2\u04b9\u04c2\u04d5\u04dd\u04e2\u04e9\u04f0\u04f7\u04fe\u0505\u050e"+
		"\u0515\u051c\u0523\u052a\u052f\u0536\u053d\u0541\u0546\u0548\u0554\u055b"+
		"\u0563\u056e\u0574\u057d\u058a\u0592\u0598\u05a6\u05ae\u05b9\u05cb\u05d3"+
		"\u05dc\u05eb\u05ef\u05f3\u05f7\u0605\u060d\u0616\u0621\u0628\u062b\u0634"+
		"\u0638\u063f\u0646\u064c\u0654\u065c\u0662\u0666\u066a\u066e\u0676\u067e"+
		"\u0682\u0687\u068c\u0690\u069b\u06a9\u06ad\u06b3\u06ba\u06c3\u06cc\u06d5"+
		"\u06de\u06e7\u06f0\u06fc\u0705\u0715\u0721\u072c\u072f\u0741\u0758\u075b"+
		"\u0762\u0768\u076c\u0770\u0776\u077a\u077e\u0786\u078b\u078e\u0792\u0797"+
		"\u079a\u079d\u07a0\u07a5\u07ab\u07b3\u07b6\u07c2\u07c6\u07cd\u07d3\u07d6"+
		"\u07de\u07e7\u07ed\u07f3\u07fa\u0801\u0805\u0809\u080c\u0816\u081f\u0822"+
		"\u0827\u082d\u0831\u083b\u0842\u084c\u0855\u0861\u086d\u0879\u089e\u08b4"+
		"\u08cc\u08e2\u08f8\u090e\u091a\u0926\u0932\u0948\u095e\u096a\u0976\u097b"+
		"\u0983\u098a\u0993\u0999\u099e\u09a3\u09a8\u09ad\u09b2\u09b4\u09cb\u09cf"+
		"\u09ed\u0b0d";
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