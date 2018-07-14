import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UIRouterModule, UIView } from "@uirouter/angular";

import { routerConfig } from "./router";

export const rootRoutes = [

    // { name: "public.**", url: "/out", loadChildren: "./public/public.module#PublicModule" },
    // { name: "bootstate.**", url: "/bs", loadChildren: "./bootstate/bootstate.module#BootstateModule" },
    // { name: "logout.**", url: "/logout", loadChildren: "./logout/logout.module#LogoutModule" },
    // { name: "system.**", url: "/system", loadChildren: "./system/system.module#SystemModule" },

];

@NgModule({
    declarations: [],
    imports: [
        BrowserAnimationsModule,
        UIRouterModule.forRoot({ states: rootRoutes, useHash: true, otherwise: { state: "private.user.home" }, config: routerConfig }),
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
