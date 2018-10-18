import { AnalyzedStatement, CqlAnalysis } from "../../../../../../../../src/types/parser";

export const markTableReferenceError = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement, analysis: CqlAnalysis): monaco.editor.IMarkerData[] => {

    const out: monaco.editor.IMarkerData[] = [];
    const spec = statement.rules.tableSpec;
    const refs = analysis.references;

    if (!spec || !spec.tableToken) {
        console.log(`[markTableReferenceError] no spec or no tableToken`);
        return [];
    }

    const token = spec.tableToken;
    const keyspace = spec.keyspaceToken ? spec.keyspaceToken.text : spec.keyspaceAmbiental;

    if (refs.objects && refs.objects[keyspace] && refs.objects[keyspace]["tables"] && refs.objects[keyspace]["tables"][token.text]) {
        console.log(`[markTableReferenceError] everything ok with TABLE`);
        return [];
    }
    let message = "";
    if (!refs.keyspaces.find((k) => k === keyspace)) {
        console.log(`[markTableReferenceError] no keyspace -> ${keyspace}`);
        message = `No keyspace selected. Select keyspace from dropdown or define it in query`;
    } else {
        message = `table ${statement.table} not exists in ${statement.keyspace}`;
    }

    const ps = model.getPositionAt(token.charStart);
    const pe = model.getPositionAt(token.charStop);

    const o: monaco.editor.IMarkerData = {
        severity: monaco.MarkerSeverity.Error,
        message,
        startLineNumber: ps.lineNumber,
        startColumn: ps.column,
        endLineNumber: pe.lineNumber,
        endColumn: pe.column + 1,
    };
    out.push(o);

    return out;

};
