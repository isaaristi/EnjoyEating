import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { HttpMapa } from '../../providers/http-mapa';
import { Mapa } from '../../models/mapa';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  nombre: string;
  placeid: string;
  direccion: string;
  latitud:string;
  longitud:string;
  latitud1:string;
  longitud1:string;
  direc: string;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public client: HttpMapa) { 

    this.placeid = this.navParams.get("placeid");
    this.nombre = this.navParams.get("nombre");
    this.direc = this.navParams.get("direccion");

    client.get(this.placeid).subscribe(mapa => this.loadMapa(mapa,null));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

loadMapa(mapa: Mapa, err: string){
  if (err) {
    console.log(err);
    return;
  }
  this.direccion = mapa.direccion;
  this.latitud = mapa.latitud;
  this.longitud = mapa.longitud;

  console.log("direccion: "+this.direccion);
}

}
