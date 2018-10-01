import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
    MatButtonModule,
    MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
    MatOptionModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatTooltipModule,
} from "@angular/material";
import { UiDialogModule } from "../../dialogs";
import { UiDataGridModule } from "../ui-data-grid";
import { UiMonacoEditorModule } from "../ui-monaco-editor";
import { UiQueryComponent } from "./ui-query/ui-query.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatIconModule,
        MatProgressBarModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatOptionModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        UiMonacoEditorModule,
        UiDataGridModule,
        UiDialogModule,
    ],
    declarations: [
        UiQueryComponent,
    ],
    exports: [
        UiQueryComponent,
    ],
    entryComponents: [
    ],
})
export class UiQueryModule {

    constructor() {

    }

}
