declare module "sheetclip" {

    export default class SheetClip {
        parse(s: string): any[];
        stringify(arr: any[]):string;
    }

}
