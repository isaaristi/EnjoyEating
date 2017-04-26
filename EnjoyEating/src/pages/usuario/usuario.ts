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
info: string;
nom: string;
imagen: string;
telefono: string;
tipo: string;
direccion: string;
nomb:string;
direc:string;
tel:string;
img:string;
tip:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public storage:Storage) {
    storage.get("user").then( val =>{ console.log(val.username) });
    storage.get("guardar").then( val1 => { console.log(val1)});
    storage.get("estuve").then( val2 => {console.log(val2)});
    this.info = "estuve";
  }

  ionViewDidLoad() {
    this.storage.get("user").then(val => {this.nombre = val.username;
    console.log(val.username);
    console.log(val);
        //this.nombre = this.val.username
  } );

  this.storage.get("guardar").then(val1 => {
    this.nom = val1.nombre;
    this.imagen = val1.imagen;
    this.direccion = val1.direccion;
    this.telefono = val1.telefono;
    this.tipo = val1.tipo;
  });

  this.storage.get("estuve").then(val2 => {
    this.nomb = val2.nombre;
    this.img = val2.imagen;
    this.direc = val2.direccion;
    this.tel = val2.telefono;
    this.tip = val2.tipo;
  });
    
    console.log('ionViewDidLoad UsuarioPage');
  }

  logout() {
    this.storage.set("logged", false);
    this.app.getRootNav().setRoot(HomePage);
  }

}
