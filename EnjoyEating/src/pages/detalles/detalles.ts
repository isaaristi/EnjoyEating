import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { RestauranteService } from '../../providers/auth-service';
import { Menu } from '../../models/menu';
import { Restaurante } from '../../models/restaurante';
import { MenuPage } from '../menu/menu';
import { MapPage } from '../map/map';
import { HttpMapa } from '../../providers/http-mapa';
import {ResenaPage} from '../resena/resena';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public service: HttpMapa) { }


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

  resena(){
    this.app.getRootNav().push(ResenaPage, {placeid: this.placeid});
  }

}

