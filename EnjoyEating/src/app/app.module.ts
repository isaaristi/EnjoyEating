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
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    PrincipalPage,
    DetallesPage,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, RestauranteService, LoginService]
})
export class AppModule { }

