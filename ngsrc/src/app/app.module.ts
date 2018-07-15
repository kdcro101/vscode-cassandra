import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UIRouterModule, UIView } from "@uirouter/angular";

import { UiContentHorizontalModule } from "./components/ui-content-horizontal";
import { QueryBuilderComponent } from "./query-builder/query-builder.component";
import { routerConfig } from "./router";

export const rootRoutes = [

    { name: "query-builder", url: "/query-builder", component: QueryBuilderComponent },
    // { name: "bootstate.**", url: "/bs", loadChildren: "./bootstate/bootstate.module#BootstateModule" },
    // { name: "logout.**", url: "/logout", loadChildren: "./logout/logout.module#LogoutModule" },
    // { name: "system.**", url: "/system", loadChildren: "./system/system.module#SystemModule" },

];

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatIconModule,
        UiContentHorizontalModule,
        UIRouterModule.forRoot({ states: rootRoutes, useHash: true, otherwise: { state: "query-builder" }, config: routerConfig }),
    ],
    declarations: [
        QueryBuilderComponent
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    ],
    bootstrap: [UIView],
})
export class AppModule {

    constructor() {
        const isDark =
            document.body.classList.contains("vscode-dark") || document.body.classList.contains("vscode-high-contrast") ? true : false;

        if (isDark) {
            document.body.classList.add("dark-theme");
        }
    }

}
