import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from '../../pages/home/home';

@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioPage {

users: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public storage:Storage) {
    storage.get("user").then( val =>{ console.log(val.user) });
  }

  ionViewDidLoad() {
    this.users = storage.get("user");
    console.log(this.users);
    console.log('ionViewDidLoad UsuarioPage');
  }

  logout() {
    this.storage.set("logged", false);
    this.app.getRootNav().setRoot(HomePage);
  }

}
