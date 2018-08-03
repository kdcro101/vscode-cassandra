import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UiQueryEditorComponent } from "./ui-query-editor/ui-query-editor.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      UiQueryEditorComponent
  ],
  exports: [
      UiQueryEditorComponent
  ]
})
export class UiQueryEditorModule { }
