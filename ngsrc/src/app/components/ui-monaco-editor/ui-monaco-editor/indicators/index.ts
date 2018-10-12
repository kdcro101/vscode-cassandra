import { AnalyzedStatement } from "../../../../../../../src/types/parser";
import { decoColumnsKeys } from "./decorations/columns-keys";
import { decoColumnsKnown } from "./decorations/columns-known";
import { decoValues } from "./decorations/values";
import { insertMarkers } from "./insert";
import { selectDecorations, selectMarkers } from "./select";

export const decorationsForStatement = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement): monaco.editor.IModelDeltaDecoration[] => {

    let out: monaco.editor.IModelDeltaDecoration[] = [];
    switch (statement.type) {
        case "select":
            // out = selectDecorations(model, statement);
            out = decoColumnsKnown(model, statement)
                .concat(decoColumnsKeys(model, statement));
            break;
        case "insert":
            // out = insertDecorations(model, statement);
            out = decoColumnsKnown(model, statement)
                .concat(decoColumnsKeys(model, statement))
                .concat(decoValues(model, statement));
            break;
        case "delete":
            out = selectDecorations(model, statement);
            break;
        case "update":
            out = selectDecorations(model, statement);
            break;
        case "createMaterializedView":
            out = decoColumnsKnown(model, statement)
                .concat(decoColumnsKeys(model, statement));
            break;
        default:
            out = null;
            break;
    }

    return out;
};
export const markersForStatement = (model: monaco.editor.ITextModel,
    statement: AnalyzedStatement): monaco.editor.IMarkerData[] => {

    let out: monaco.editor.IMarkerData[] = [];
    switch (statement.type) {
        case "select":
            out = selectMarkers(model, statement);
            break;
        case "insert":
            out = insertMarkers(model, statement);
            break;
        case "delete":
            out = selectMarkers(model, statement);
            break;
        default:
            out = null;
            break;
    }

    return out;
};
