

declare module "json-beautify" {
    export default function beautify(obj: any, replacer: Function, padding: number, width?: number): string;
}
