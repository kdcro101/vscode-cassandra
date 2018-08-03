import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material";
import { UIView } from "@uirouter/angular";
import { UiQueryEditorModule } from "../ui-query-editor";
import { UiQueryComponent } from "./ui-query/ui-query.component";

@NgModule({
    imports: [
        FlexLayoutModule,
        MatIconModule,
        UiQueryEditorModule
    ],
    declarations: [
        UiQueryComponent
    ],
    exports: [
        UiQueryComponent,
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    ],
    bootstrap: [UIView],
})
export class UiQueryModule {

    constructor() {

    }

}
