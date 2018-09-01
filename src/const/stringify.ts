export const stringify = (object: any): string => {
    const s = JSON.stringify(object, escape);

    return s;
};

const escape = (key: string, val: any): string => {
    if (typeof (val) !== "string") { return val; }
    return val
        .replace(/[\/]/g, "\\/")
        .replace(/[\f]/g, "\\f")
        .replace(/[\n]/g, "\\n")
        .replace(/[\r]/g, "\\r")
        .replace(/[\t]/g, "\\t")
        // .replace(/[\"]/g, "\\\"")
        .replace(/[\']/g, "\\'");
};
