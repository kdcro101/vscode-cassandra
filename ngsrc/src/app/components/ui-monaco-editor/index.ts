import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { UiMonacoEditorComponent } from "./ui-monaco-editor/ui-monaco-editor.component";

@NgModule({
    imports: [
        CommonModule,

    ],
    declarations: [
        UiMonacoEditorComponent,
    ],
    exports: [
        UiMonacoEditorComponent,
    ],

})
export class UiMonacoEditorModule { }
