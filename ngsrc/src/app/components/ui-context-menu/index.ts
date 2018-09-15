import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule, MatRippleModule } from "@angular/material";
import { UiContextMenuComponent } from "./ui-context-menu/ui-context-menu.component";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        MatRippleModule,
    ],
    declarations: [UiContextMenuComponent],
    exports: [
        UiContextMenuComponent,
    ],
    entryComponents: [
        UiContextMenuComponent,
    ],
})
export class UiContextMenuModule { }
