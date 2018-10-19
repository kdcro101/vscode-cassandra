import { CqlAnalysis } from "../../../../../../../../src/types/parser";
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
