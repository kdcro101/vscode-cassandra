import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressBarModule } from "@angular/material";
import { UiDataGridComponent } from "./ui-data-grid/ui-data-grid.component";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatProgressBarModule,
    ],
    declarations: [
        UiDataGridComponent,
    ],
    exports: [
        UiDataGridComponent,
    ],
})
export class UiDataGridModule { }
