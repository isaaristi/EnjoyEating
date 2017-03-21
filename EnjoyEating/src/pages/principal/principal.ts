import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Restaurante, RestauranteService } from '../../providers/auth-service';


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})

export class PrincipalPage {

  restaurantes: string;

  constructor(public navCtrl: NavController, private service: RestauranteService) {

this.restaurantes="trending";
  }
}


