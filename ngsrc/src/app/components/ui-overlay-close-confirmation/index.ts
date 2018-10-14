import { A11yModule } from "@angular/cdk/a11y";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatDialogModule, MatIconModule, MatRippleModule } from "@angular/material";
import { UiOverlayCloseConfirmationComponent } from "./ui-overlay-close-confirmation/ui-overlay-close-confirmation.component";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatRippleModule,
        A11yModule,
    ],
    declarations: [UiOverlayCloseConfirmationComponent],
    exports: [
        UiOverlayCloseConfirmationComponent,
    ],
    entryComponents: [
        UiOverlayCloseConfirmationComponent,
    ],
})
export class UiOverlayCloseConfirmationModule { }
