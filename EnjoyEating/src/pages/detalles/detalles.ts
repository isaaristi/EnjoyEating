import { Component } from '@angular/core';
import { NavController, NavParams, App, ActionSheetController } from 'ionic-angular';
import { RestauranteService } from '../../providers/auth-service';
import { Menu } from '../../models/menu';
import { Restaurante } from '../../models/restaurante';
import { MenuPage } from '../menu/menu';
import { MapPage } from '../map/map';
import { HttpMapa } from '../../providers/http-mapa';
import { ResenaPage } from '../resena/resena';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html'
})
export class DetallesPage {
  id: string;
  nombre: string;
  imagen: string;
  direccion: string;
  telefono: number;
  tipo: string;
  menu: Menu[];
  placeid: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public service: HttpMapa,
    public actionsheetCtrl: ActionSheetController,
    public storage: Storage) { }


  ionViewDidLoad() {
    this.id = this.navParams.get("id")
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.direccion = this.navParams.get("direccion");
    this.telefono = this.navParams.get("telefono");
    this.tipo = this.navParams.get("tipo");
    this.menu = this.navParams.get("menu");
    this.placeid = this.navParams.get("placeid");
    console.log('ionViewDidLoad DetallesPage');
  }

  next() {
    this.navCtrl.push(MenuPage, {
      menu: this.menu
    })
  }

  mapa() {
    this.navCtrl.push(MapPage, {
      placeid: this.placeid, nombre: this.nombre, direccion: this.direccion
    })
  }

  resena() {
    this.app.getRootNav().push(ResenaPage, { placeid: this.placeid });
  }

  openGuardar() {
    let guardar = this.actionsheetCtrl.create({
      title: 'Agrega este sitio a tus favoritos',
      cssClass: 'action-sheet-basic-page',
      buttons: [
        {
          text: 'Guardar',
          handler: () => {
            console.log("Guardado");
            let data = {nombre: this.nombre, imagen: this.imagen, direccion: this.direccion,
            telefono: this.telefono, tipo: this.tipo}
            console.log(data);
            this.storage.set("guardar", true);
            this.storage.set("guardar", data);
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log("Eliminado");
            
            this.storage.set("guardar", false);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log("Cancelado");
            this.navCtrl.pop();
          }
        }
      ]
  });
  guardar.present();
}

openEstuve() {
    let guardar = this.actionsheetCtrl.create({
      title: 'Agrega este sitio a tu lista de visitados',
      cssClass: 'action-sheet-basic-page',
      buttons: [
        {
          text: 'Agregar',
          handler: () => {
            console.log("Guardado");
            let data = {nomb: this.nombre, img: this.imagen, direc: this.direccion,
            tel: this.telefono, tip: this.tipo}
            console.log(data);
            this.storage.set("estuve", true)
            this.storage.set("estuve", data);
            
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log("Eliminado");
            this.storage.set("estuve", false);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log("Cancelado");
            this.navCtrl.pop();
          }
        }
      ]
  });
  guardar.present();
}

}

