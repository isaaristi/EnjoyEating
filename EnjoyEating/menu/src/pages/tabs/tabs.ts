import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

import { PrincipalPage } from '../../../../src/pages/principal/principal';
import { DetallesPage } from '../../../../src/pages/detalles/detalles';
import { UsuarioPage } from '../../../../src/pages/usuario/usuario';
import { BuscarPage } from '../../../../src/pages/buscar/buscar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PrincipalPage;
  tab2Root: any = BuscarPage;
  tab3Root: any = UsuarioPage;

  mainContent: any;
  constructor(public navCtrl: NavController) {
    this.mainContent = PrincipalPage;
  }
}
