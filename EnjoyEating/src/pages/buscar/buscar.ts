import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestauranteService } from '../../providers/auth-service';
import {Menu} from '../../models/menu';
import {Restaurante} from '../../models/restaurante';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})
export class BuscarPage {

restaurante: Restaurante[];
menu: Menu[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: RestauranteService) {
    this.restaurante = [];
    this.menu =[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');

  }

    getItems(ev) {
    //this.initializeItems();
    var val = ev.target.value;
    this.service.getIngredientes(val).subscribe(data => this.menu = data);
    if (val && val.trim() != '') {
      this.menu = this.menu.filter((rest) => {
        return (rest.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

}
