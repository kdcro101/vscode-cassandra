
import { sampleSize} from "lodash";

export const generateId = () => {
    return sampleSize("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 16).join("");
};
