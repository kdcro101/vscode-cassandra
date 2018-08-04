import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UiContentScrollModule } from "../ui-content-scroll";
import { UiQueryEditorComponent } from "./ui-query-editor/ui-query-editor.component";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    UiContentScrollModule
  ],
  declarations: [
      UiQueryEditorComponent
  ],
  exports: [
      UiQueryEditorComponent
  ]
})
export class UiQueryEditorModule { }
