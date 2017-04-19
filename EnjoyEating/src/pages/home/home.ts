import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { PrincipalPage } from '../principal/principal';
import { TabsPage } from '../../../menu/src/pages/tabs/tabs';
import { RestauranteService } from '../../providers/auth-service';
import { LoginService } from '../../providers/login-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public service: LoginService ) {}

  next() {
    this.navCtrl.push(LoginPage);
  }

  nextr() {
    this.navCtrl.push(RegisterPage);
  }

  nextp() {
    this.navCtrl.push(TabsPage);
  }

}
