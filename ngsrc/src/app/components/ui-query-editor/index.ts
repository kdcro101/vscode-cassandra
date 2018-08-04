import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UiQueryEditorComponent } from "./ui-query-editor/ui-query-editor.component";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
      UiQueryEditorComponent
  ],
  exports: [
      UiQueryEditorComponent
  ]
})
export class UiQueryEditorModule { }
