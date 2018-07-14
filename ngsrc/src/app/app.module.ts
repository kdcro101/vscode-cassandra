import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UIRouterModule } from "@uirouter/angular";
import { AppComponent } from "./app.component";
import { routerConfig } from "./router";

export const rootRoutes = [

  { name: "public.**", url: "/out", loadChildren: "./public/public.module#PublicModule" },
  { name: "bootstate.**", url: "/bs", loadChildren: "./bootstate/bootstate.module#BootstateModule" },
  { name: "logout.**", url: "/logout", loadChildren: "./logout/logout.module#LogoutModule" },
  { name: "system.**", url: "/system", loadChildren: "./system/system.module#SystemModule" },

];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    UIRouterModule.forRoot({ states: rootRoutes, useHash: true, otherwise: { state: "private.user.home" }, config: routerConfig }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
