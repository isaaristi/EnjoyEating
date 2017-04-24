import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Menu} from '../../models/menu';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  menu: Menu[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.menu = this.navParams.get("menu");

  }

}
