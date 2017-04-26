import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { LoginService } from '../../providers/login-service';
import { TabsPage } from '../../../menu/src/pages/tabs/tabs';
import {Users} from '../../models/users';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user: Users;
  users: string;
  email: string;
  pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: LoginService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public storage: Storage) {

      this.user = new Users();

     }

  register(user:Users) {
    let loading = this.loadingCtrl.create({
      content: "Cargando..."
    });
    loading.present();
    this.user.username = this.users;
    this.user.email = this.email;
    this.user.password = this.pass;

    this.service.signin(this.user).subscribe(res => {
      loading.dismiss();
      console.log("User: "+this.users + "res:"+res);
      //let data = {username:this.users, password:this.pass};
   // this.storage.set("logged",true);
   // this.storage.set("user", data);
      if (res.success) {
        this.navCtrl.setRoot(TabsPage);
      } else {
        this.toastCtrl.create({ message: "El usuario ya exitste", duration: 3000 }).present();
      }
    });
  }

}
