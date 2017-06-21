import {NgModel} from '@angular/forms';


import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core';
import {CrypticoComponent} from "../page/rsa/cryptico/cryptico.component";
import {JsEncryptComponent} from "../page/rsa/jencrypt/jsencrypt";


const appRoutes: Routes = [
  {path: 'crypticoLink', component: CrypticoComponent},
  {path: 'jsencryptLink', component: JsEncryptComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRouteModule {

constructor(){
}

}

