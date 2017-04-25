import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestauranteService } from '../../providers/auth-service';
import { Restaurante } from '../../models/restaurante';
import { Menu } from '../../models/menu';
import { DetallesPage } from '../detalles/detalles';
import { TabsPage } from '../../../menu/src/pages/tabs/tabs';
import { HttpMapa } from '../../providers/http-mapa';
import { Items } from '../../models/items';
import { TiposPage } from '../tipos/tipos';



@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})

export class PrincipalPage {

  restaurante: Restaurante[];
  restaurantes: string;
  nombre: string = '';

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }


  constructor(public navCtrl: NavController, public service: RestauranteService) {
    this.restaurantes = "trending";
    this.restaurante = [];
  }



  ionViewDidEnter() {
    this.service.all().subscribe(data => this.restaurante = data);
  }

  getItems(ev) {
    this.service.all().subscribe(data => this.restaurante = data);

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

  nextByType(type: String) {
    this.navCtrl.push(TiposPage, {
      tipo: type
    })

  }


}


