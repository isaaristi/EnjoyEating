import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestauranteService } from '../../providers/auth-service';

@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html'
})
export class DetallesPage {

  nombre: string;
  imagen: string;
  direccion: string;
  telefono: number;
  tipo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }


  ionViewDidLoad() {
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.direccion = this.navParams.get("direccion");
    this.telefono = this.navParams.get("telefono");
    this.tipo = this.navParams.get("tipo");
    console.log('ionViewDidLoad DetallesPage');
  }

}
