import { Injectable } from "@angular/core";

declare var document: Document;

@Injectable({
    providedIn: "root"
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

}
