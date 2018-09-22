
export const wordWrap = (str: string, maxWidth: number = 80) => {

    const white = new RegExp(/^\s$/);
    const newLineStr = "\n";
    let done = false;
    let res = "";

    do {
        let found = false;
        // Inserts new line at first whitespace of the line
        for (let i = maxWidth - 1; i >= 0; i--) {
            if (white.test(str.charAt(i))) {
                res = res + [str.slice(0, i), newLineStr].join("");
                str = str.slice(i + 1);
                found = true;
                break;
            }
        }
        // Inserts new line at maxWidth position, the word is too long to wrap
        if (!found) {
            res += [str.slice(0, maxWidth), newLineStr].join("");
            str = str.slice(maxWidth);
        }

        if (str.length < maxWidth) {
            done = true;
        }
    } while (!done);

    return res + str;
};
