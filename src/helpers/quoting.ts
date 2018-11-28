export const quouteCaseSensitive = (input: string) => {
    const rx = new RegExp(/[A-Z]/);
    const res = rx.test(input);

    if (res) {
        return `"${input}"`;
    }

    return input;
};
