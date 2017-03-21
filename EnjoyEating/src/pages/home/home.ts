import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { PrincipalPage } from '../principal/principal';
import {Restaurante, RestauranteService} from '../../providers/auth-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private service: RestauranteService) {

  }

  next() {
    this.navCtrl.push(LoginPage);
  }

  nextr() {
    this.navCtrl.push(RegisterPage);
  }

  nextp() {
    this.navCtrl.push(PrincipalPage);
  }

}
