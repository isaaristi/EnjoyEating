import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from '../../pages/home/home';
import {Users} from '../../models/users';

@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioPage {

users: Users[];
nombre: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public storage:Storage) {
    storage.get("user").then( val =>{ console.log(val.user) });
  }

  ionViewDidLoad() {
    this.storage.get("user").then(val => {this.users = val;
    console.log(this.users);
    //this.nombre = this.users.username
    ;
  } );
    
    console.log('ionViewDidLoad UsuarioPage');
  }

  logout() {
    this.storage.set("logged", false);
    this.app.getRootNav().setRoot(HomePage);
  }

}
