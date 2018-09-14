import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import {
    MatButtonModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatTooltipModule,
} from "@angular/material";
import { UiDataGridModule } from "../ui-data-grid";
import { UiMonacoEditorModule } from "../ui-monaco-editor";
import { UiQueryComponent } from "./ui-query/ui-query.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MatIconModule,
        MatProgressBarModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatOptionModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatTooltipModule,
        UiMonacoEditorModule,
        UiDataGridModule,
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
