import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule, MatSelectModule } from "@angular/material";
import { UiMonacoEditorModule } from "../ui-monaco-editor";
import { UiQueryComponent } from "./ui-query/ui-query.component";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatOptionModule,
        MatButtonModule,
        UiMonacoEditorModule,
    ],
    declarations: [
        UiQueryComponent,
    ],
    exports: [
        UiQueryComponent,
    ],
})
export class UiQueryModule {

    constructor() {

    }

}
