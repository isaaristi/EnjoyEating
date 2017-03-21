import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

next(){
  this.navCtrl.push(PrincipalPage);
}

}
