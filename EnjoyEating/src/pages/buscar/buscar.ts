import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestauranteService } from '../../providers/auth-service';
import { Menu } from '../../models/menu';
import { Restaurante } from '../../models/restaurante';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})
export class BuscarPage {

  menu: Menu[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: RestauranteService) {

    this.menu = [];
  }

  ionViewDidEnter() {
    this.service.getAllIngredientes().subscribe(data => this.menu = data);
  }

  getItems(ev) {
    this.service.getAllIngredientes().subscribe(data => this.menu = data);
    //this.initializeItems();
    var val = ev.target.value;
    console.log(val);
    if (val != '') {
      this.service.getIngredientes(val).subscribe(data => this.menu = data);
      if (val && val.trim() != '') {
        this.menu = this.menu.filter((rest) => {
          return (rest.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

  }

}
