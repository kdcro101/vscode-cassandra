
import  sampleSize from "lodash-es/sampleSize";

export const generateId = () => {
    return sampleSize("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 16).join("");
};
