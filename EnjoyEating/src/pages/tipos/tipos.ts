import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestauranteService } from '../../providers/auth-service';
import { Restaurante } from '../../models/restaurante';
import { Menu } from '../../models/menu';
import { DetallesPage } from '../detalles/detalles';
import { TabsPage } from '../../../menu/src/pages/tabs/tabs';
import {HttpMapa} from '../../providers/http-mapa';

@Component({
  selector: 'page-tipos',
  templateUrl: 'tipos.html'
})
export class TiposPage {

restaurante: Restaurante[];
tipo:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: RestauranteService) {
    this.restaurante = [];
  }

  ionViewDidLoad() {
    this.tipo = this.navParams.get("tipo");
    this.service.all(this.tipo).subscribe(data => this.restaurante = data);
    console.log('ionViewDidLoad TiposPage');
  }

  getItems(ev) {
    //this.initializeItems();
    var val = ev.target.value;
    this.service.one(val).subscribe(data => this.restaurante = data);
    if (val && val.trim() != '') {
      this.restaurante = this.restaurante.filter((rest) => {
        return (rest.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

  next(index: number) {
    this.navCtrl.push(DetallesPage, {
      id: this.restaurante[index].id,
      nombre: this.restaurante[index].nombre, imagen: this.restaurante[index].imagen,
      direccion: this.restaurante[index].direccion, telefono: this.restaurante[index].telefono, tipo: this.restaurante[index].tipo,
      menu: this.restaurante[index].menu, placeid: this.restaurante[index].placeid
    })
  }

}
