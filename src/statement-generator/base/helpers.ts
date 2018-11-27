export const isCaseSensitive = (input: string): boolean => {

    const rx = new RegExp(/[A-Z]/);
    const res = rx.test(input);

    if (res) {
        return true;
    }

    return false;

};
