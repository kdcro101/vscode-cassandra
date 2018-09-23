import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatIconModule, MatSnackBarModule } from "@angular/material";
import { UiHistoryComponent } from "./ui-history/ui-history.component";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
    ],
    exports: [
        UiHistoryComponent,
    ],
    declarations: [
        UiHistoryComponent,
    ],
    entryComponents: [
        UiHistoryComponent,
    ],
})
export class UiHistoryModule { }
