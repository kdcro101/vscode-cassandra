import wrap = require("word-wrap");
import { indexCreate } from "./index/create";
import { indexDrop } from "./index/drop";
import { keyspaceAlter } from "./keyspace/alter";
import { keyspaceClone } from "./keyspace/clone";
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
    public indexCreate = indexCreate;
    public indexDrop = indexDrop;

    constructor(private limit: number = 1000) {

    }

}
