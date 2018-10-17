import { CassandraTable } from "../../../../../../../../src/types";
import { CqlAnalysis } from "../../../../../../../../src/types/parser";
export const isKeyspaceTableValid = (keyspace: string, table: string, analysis: CqlAnalysis): boolean => {

    if (!keyspace || !table) {
        return false;
    }

    const refs = analysis.references;
    let tableData: CassandraTable = null;

    try {
        tableData = refs.objects[keyspace]["tables"][table];
    } catch (e) {
        return false;
    }

    if (!tableData) {
        return false;
    }

    return true;
};
