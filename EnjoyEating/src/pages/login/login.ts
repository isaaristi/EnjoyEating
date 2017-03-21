import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {

  nombre: string;
  pass: string;

  constructor(public navCtrl: NavController) {

  }

  next() {
    this.navCtrl.push(PrincipalPage);

  }

}
