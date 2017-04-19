import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestauranteService } from '../../providers/auth-service';
import { Restaurante } from '../../models/restaurante';
import { DetallesPage } from '../detalles/detalles';
import { TabsPage } from '../../../menu/src/pages/tabs/tabs';



@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})

export class PrincipalPage {

  restaurante: Restaurante[];
  restaurantes: string;


  constructor(public navCtrl: NavController, public service: RestauranteService) {
    this.restaurantes = "trending";
    this.restaurante = [];
  }

  ionViewDidEnter() {
    this.service.all().subscribe(data => this.restaurante = data);
  }

  next(index: number) {
    this.navCtrl.push(DetallesPage, {
      nombre: this.restaurante[index].nombre, imagen: this.restaurante[index].imagen,
      direccion: this.restaurante[index].direccion, telefono: this.restaurante[index].telefono, tipo: this.restaurante[index].tipo
    })
  }
}


