import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from '../../pages/home/home';

@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    storage.get("user").then( val =>{ console.log(val.user) });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

  logout() {
    this.storage.set("logged", false);
    this.navCtrl.setRoot(HomePage);
  }

}
