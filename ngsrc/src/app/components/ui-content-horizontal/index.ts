import { CommonModule } from "@angular/common";
import { NgModule } from  "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UiContentHorizontalComponent } from "./ui-content-horizontal.component";

@NgModule({
imports: [
        CommonModule,
        FlexLayoutModule,

],
exports: [
    UiContentHorizontalComponent,
],
declarations: [
    UiContentHorizontalComponent,
],
})
export class UiContentHorizontalModule {

}
