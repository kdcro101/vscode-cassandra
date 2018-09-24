import { Injectable } from "@angular/core";

declare var document: Document;

declare var codeFontFamily: string;
declare var codeFontSize: string;
declare var codeLineHeight: number;

@Injectable({
    providedIn: "root",
})
export class ThemeService {
    public isDark: boolean = false;

    constructor() {
        this.isDark =
            document.body.classList.contains("vscode-dark") || document.body.classList.contains("vscode-high-contrast") ? true : false;

        if (this.isDark) {
            document.body.classList.add("dark-theme");
        }
    }
    public getEditorFontFamily(): string {
        const f = (codeFontFamily && codeFontFamily.trim() !== "") ? codeFontFamily : "Inconsolata";
        return f;
    }
    public getEditorFontSize(): number {
        const size = parseInt(codeFontSize, 10);
        const s = (size && size > 0) ? size : 15;
        return s;
    }
    public getEditorLineHeight(): number {
        const fs = this.getEditorFontSize();
        const lh = fs + 2 + 4;
        const s = (codeLineHeight && codeLineHeight > 0) ? codeLineHeight : 20;
        return s;
    }
}
