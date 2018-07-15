import { CommonModule } from "@angular/common";
import { NgModule } from  "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UiContentScrollComponent } from "./ui-content-scroll.component";

export interface UiContentScrollInterface {
    update: () => void;
}

@NgModule({
imports: [
        CommonModule,
        FlexLayoutModule,

],
exports: [
    UiContentScrollComponent,
],
declarations: [
    UiContentScrollComponent,
],
})
export class UiContentScrollModule {

}
