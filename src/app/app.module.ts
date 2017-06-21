import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CrypticoComponent} from "../page/rsa/cryptico/cryptico.component";
import {JsEncryptComponent} from "../page/rsa/jencrypt/jsencrypt";
import {AppRouteModule} from "./route.module";

@NgModule({
  declarations: [
    AppComponent,
    CrypticoComponent,
    JsEncryptComponent
  ],
  imports: [
    AppRouteModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
