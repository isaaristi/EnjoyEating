import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import {  PrincipalPage } from '../pages/principal/principal';
import {LoginPage} from '../pages/login/login';
import {TabsPage} from '../../menu/src/pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, public storage: Storage) {

    storage.ready().then(() => {

      storage.get("logged").then((val) => {
        if (val) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = HomePage;
        }
      });

    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
