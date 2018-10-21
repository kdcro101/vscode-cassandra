import { AnalyzedStatement, CqlAnalysis } from "../../../../../../../src/types/parser";
import { decoBaseColumnsKnown } from "./decorations/base-columns-known";
import { decoColumnsKeys } from "./decorations/columns-keys";
import { decoColumnsKnown } from "./decorations/columns-known";
import { decoValues } from "./decorations/values";
import { markColumnNoValue } from "./markers/column-no-value";
import { markColumnNotFound } from "./markers/column-not-found";
import { markKeyspaceReferenceError } from "./markers/keyspace-reference-error";
import { markTableReferenceError } from "./markers/table-reference-error";
import { markValueNotDefined } from "./markers/value-no-destination";

export const decorationsForStatement = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement, analysis: CqlAnalysis): monaco.editor.IModelDeltaDecoration[] => {

    let out: monaco.editor.IModelDeltaDecoration[] = [];
    switch (statement.type) {
        case "select":
            out = decoColumnsKnown(model, statement, analysis)
                .concat(decoColumnsKeys(model, statement));
            break;
        case "insert":
            out = decoColumnsKnown(model, statement, analysis)
                .concat(decoColumnsKeys(model, statement))
                .concat(decoValues(model, statement));
            break;
        case "delete":
            out = decoColumnsKnown(model, statement, analysis)
                .concat(decoColumnsKeys(model, statement));
            break;
        case "update":
            out = decoColumnsKnown(model, statement, analysis)
                .concat(decoColumnsKeys(model, statement));
            break;
        case "createMaterializedView":
            out = decoBaseColumnsKnown(model, statement, analysis);
            //     .concat(decoColumnsKeys(model, statement));
            break;
        case "createIndex":
            out = decoColumnsKnown(model, statement, analysis);
            break;
        default:
            out = null;
            break;
    }

    return out;
};
export const markersForStatement = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement, analysis: CqlAnalysis): monaco.editor.IMarkerData[] => {

    let out: monaco.editor.IMarkerData[] = [];
    switch (statement.type) {
        case "select":
            out = markColumnNotFound(model, statement, analysis)
                .concat(markTableReferenceError(model, statement, analysis))
                .concat(markKeyspaceReferenceError(model, statement, analysis));
            break;
        case "insert":
            out = markColumnNotFound(model, statement, analysis)
                .concat(markColumnNoValue(model, statement))
                .concat(markValueNotDefined(model, statement))
                .concat(markTableReferenceError(model, statement, analysis))
                .concat(markKeyspaceReferenceError(model, statement, analysis));
            break;
        case "delete":
            out = markColumnNotFound(model, statement, analysis);
            break;
        case "createIndex":
            out = markColumnNotFound(model, statement, analysis)
                .concat(markTableReferenceError(model, statement, analysis))
                .concat(markKeyspaceReferenceError(model, statement, analysis));
            break;
        default:
            out = null;
            break;
    }

    return out;
};
