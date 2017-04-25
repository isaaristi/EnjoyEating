import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PrincipalPage } from '../pages/principal/principal';
import { RestauranteService } from '../providers/auth-service';
import { DetallesPage } from '../pages/detalles/detalles';
import { TabsPage } from '../../menu/src/pages/tabs/tabs';
import { IonicStorageModule } from '@ionic/storage';
import { LoginService } from '../providers/login-service';
import { MenuPage } from '../pages/menu/menu';
import { MapPage } from '../pages/map/map';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {HttpMapa} from '../providers/http-mapa';
import {TiposPage} from '../pages/tipos/tipos';
import {BuscarPage} from '../pages/buscar/buscar';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    PrincipalPage,
    DetallesPage,
    TabsPage,
    MenuPage,
    MapPage,
    TiposPage,
    BuscarPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6fgLgJdUSb2syfbAjJSVSnebwzgpa1Zw'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    PrincipalPage,
    DetallesPage,
    TabsPage,
    MenuPage,
    MapPage,
    TiposPage,
    BuscarPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, RestauranteService, LoginService, HttpMapa]
})
export class AppModule { }

