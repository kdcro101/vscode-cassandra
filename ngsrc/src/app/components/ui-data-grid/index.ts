import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatIconModule, MatProgressBarModule, MatRippleModule } from "@angular/material";
import { UiDataGridComponent } from "./ui-data-grid/ui-data-grid.component";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatRippleModule,
        MatIconModule,
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
