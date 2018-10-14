import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatDialogModule, MatIconModule } from "@angular/material";
import { UiDialogChangesCancelComponent } from "./ui-dialog-changes-cancel/ui-dialog-changes-cancel.component";
import {
    UiDialogHistoryClearConfirmationComponent,
} from "./ui-dialog-history-clear-confirmation/ui-dialog-history-clear-confirmation.component";

export { UiDialogChangesCancelComponent } from "./ui-dialog-changes-cancel/ui-dialog-changes-cancel.component";

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

        UiDialogHistoryClearConfirmationComponent,

    ],
    exports: [

        UiDialogChangesCancelComponent,
        UiDialogHistoryClearConfirmationComponent,

    ],
    entryComponents: [

        UiDialogChangesCancelComponent,
        UiDialogHistoryClearConfirmationComponent,
        UiDialogHistoryClearConfirmationComponent,

    ],
})
export class UiDialogModule {

    constructor() {

    }

}
