import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatDialogModule, MatIconModule } from "@angular/material";
import { UiDialogChangesCancelComponent } from "./ui-dialog-changes-cancel/ui-dialog-changes-cancel.component";
import { UiDialogUnsavedComponent } from "./ui-dialog-unsaved/ui-dialog-unsaved.component";

export { UiDialogChangesCancelComponent } from "./ui-dialog-changes-cancel/ui-dialog-changes-cancel.component";
export { UiDialogUnsavedComponent } from "./ui-dialog-unsaved/ui-dialog-unsaved.component";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
    ],
    declarations: [
        UiDialogChangesCancelComponent,
        UiDialogUnsavedComponent,
    ],
    exports: [
        UiDialogUnsavedComponent,
        UiDialogChangesCancelComponent,
    ],
    entryComponents: [
        UiDialogUnsavedComponent,
        UiDialogChangesCancelComponent,
    ],
})
export class UiDialogModule {

    constructor() {

    }

}
