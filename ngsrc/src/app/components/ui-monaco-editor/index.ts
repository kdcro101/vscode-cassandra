import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MatMenuModule } from "@angular/material";
import { UiMonacoEditorComponent } from "./ui-monaco-editor/ui-monaco-editor.component";

import { MatMenu } from "@angular/material";

import {
    animate,
    group,
    query,
    sequence,
    state,
    style,
    transition,
    trigger,
} from "@angular/animations";
import { UiContextMenuModule } from "../ui-context-menu";

@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        UiContextMenuModule,

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
