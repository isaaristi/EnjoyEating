import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ResenaService} from '../../providers/resena-service';
import {Resena} from '../../models/resena';

@Component({
  selector: 'page-resena',
  templateUrl: 'resena.html'
})
export class ResenaPage {

res: Resena;
resena: Resena[];
nombre: string;
placeid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public service: ResenaService) {
    storage.get("user").then( val =>{ console.log(val.username) });
    this.placeid = this.navParams.get("placeid");
    this.resena = [];

    this.res = new Resena();
    this.res.idRes = this.placeid;
  }


  ionViewDidLoad() {

console.log(this.res.idRes);
    this.service.all(this.placeid).subscribe(data => this.resena = data);

     this.storage.get("user").then(val => {this.nombre = val.username;
    console.log(val.username);
    console.log(val);
    this.res.idUs = val.username;
  } );
    console.log('ionViewDidLoad ResenaPage');
  }

  save(){
    this.service.add(this.res).subscribe(res=>{
      this.navCtrl.pop();
    });
  }


}
