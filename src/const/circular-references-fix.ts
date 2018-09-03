let cache: any[] = [];

export const circularReferencesFix = (o: any): any => {

    cache = [];
    const s = JSON.stringify(o, replacer);
    const p = JSON.parse(s);
    return p;
};

const replacer = (key: string, value: any) => {
    if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Duplicate reference found
            try {
                // If this value does not reference a parent it can be deduped
                return JSON.parse(JSON.stringify(value));
            } catch (error) {
                // discard key if value cannot be deduped
                return;
            }
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
};
