import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDividerModule, MatIconModule, MatMenuModule } from "@angular/material";
import { UiMonacoEditorComponent } from "./ui-monaco-editor/ui-monaco-editor.component";

@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule,

    ],
    declarations: [
        UiMonacoEditorComponent,
    ],
    exports: [
        UiMonacoEditorComponent,
    ],

})
export class UiMonacoEditorModule {
    constructor() {

    }
}
