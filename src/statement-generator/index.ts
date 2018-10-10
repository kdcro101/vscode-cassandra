import wrap = require("word-wrap");
import { functionClone } from "./function/clone";
import { functionCreate } from "./function/create";
import { functionDrop } from "./function/drop";
import { indexCreate } from "./index/create";
import { indexDrop } from "./index/drop";
import { keyspaceAlter } from "./keyspace/alter";
import { keyspaceClone } from "./keyspace/clone";
import { keyspaceCreate } from "./keyspace/create";
import { keyspaceDrop } from "./keyspace/drop";
import { tableAlterAdd } from "./table/alter-add";
import { tableAlterDrop } from "./table/alter-drop";
import { tableClone } from "./table/clone";
import { tableDrop } from "./table/drop";
import { tableSelect, tableSelectAll } from "./table/select";
import { tableTruncate } from "./table/truncate";

export class StatementGenerator {

    public tableSelectAll = tableSelectAll;
    public tableSelect = tableSelect;
    public tableClone = tableClone;
    public tableDrop = tableDrop;
    public tableTruncate = tableTruncate;
    public tableAlterAdd = tableAlterAdd;
    public tableAlterDrop = tableAlterDrop;
    public keyspaceDrop = keyspaceDrop;
    public keyspaceAlter = keyspaceAlter;
    public keyspaceClone = keyspaceClone;
    public keyspaceCreate = keyspaceCreate;
    public indexCreate = indexCreate;
    public indexDrop = indexDrop;
    public functionCreate = functionCreate;
    public functionClone = functionClone;
    public functionDrop = functionDrop;

    constructor(private limit: number = 1000) {

    }

}
