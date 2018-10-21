import { CassandraTable } from "../../../../../../../../src/types/index";
import { CqlAnalysis } from "../../../../../../../../src/types/parser";
export type BaseKeyspaceTableResult = "invalid" | "mismatched" | "valid" | "nonexistent";
export const isKeyspaceTableValid = (keyspace: string, table: string, analysis: CqlAnalysis): boolean => {

    if (!keyspace || !table) {
        return false;
    }

    const refs = analysis.references;

    if (!refs.objects[keyspace]) {
        return false;
    }
    try {
        if (refs.objects[keyspace]["tables"][table]) {
            return true;
        }
    } catch { }
    try {
        if (refs.objects[keyspace]["views"][table]) {
            return true;
        }
    } catch { }

    return false;
};

export const isBaseKeyspaceTableValid = (keyspace: string,
    baseKeyspace: string, baseTable: string, analysis: CqlAnalysis): BaseKeyspaceTableResult => {

    if (!keyspace || !baseKeyspace || !baseTable) {
        return "invalid";
    }

    if (keyspace !== baseKeyspace) {
        return "mismatched";
    }

    const refs = analysis.references;

    if (!refs.objects[keyspace]) {
        return "nonexistent";
    }
    try {
        if (refs.objects[keyspace]["tables"][baseTable]) {
            return "valid";
        }
    } catch { }

    return "nonexistent";
};

export const getBaseTableData = (baseKeyspace: string, baseTable: string, analysis: CqlAnalysis): CassandraTable => {

    try {
        return analysis.references.objects[baseKeyspace].tables[baseTable];
    } catch {
        return null;
    }

};
