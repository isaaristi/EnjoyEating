import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Restaurante } from '../models/restaurante';
import { URL } from '../app/app.config';

@Injectable()
export class RestauranteService {

  constructor(public http: Http) { }

  all(): Observable<Restaurante[]> {
    return this.http.get(URL + "/restaurante").map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }

  add(restaurante: Restaurante): Observable<{ success: boolean }> {
    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);
    return this.http.post(URL + "/restaurante", restaurante, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });

  }

  /*loadData() {
    this.data = [

      {
        nombre: 'El Quijote Terraza Barbacoa',
        logo: '../assets/img/quijotelogo.jpg',
        direccion: 'Calle 10 #9-17',
        imagen: '../assets/img/popayanelquijote.jpg',
        telefono: 8234104,
        tipo: 'Restaurante tradicional'
      },

      {
        nombre: 'Carantanta',
        logo: '../assets/img/carantantalogo.jpg',
        direccion: 'Cra 9 # 11N-18',
        imagen: '../assets/img/carantantaimagen.jpeg',
        telefono: 8367977,
        tipo: 'restaurante tradicional'
      },

      {
        nombre: 'La Cosecha Parrillada',
        logo: '../assets/img/cosechalogo.jpeg',
        direccion: 'Avenida El Papódromo # 18 N -20',
        imagen: '../assets/img/cosechaimagen.jpeg',
        telefono: 8236799,
        tipo: 'Restaurante tradicional'
      },

      {
        nombre: 'Corrales y Peroles',
        logo: '../assets/img/corraleslogo.jpeg',
        direccion: 'Km 3 Vía A Cali Popayán, Vereda Rio Blanco',
        imagen: '../assets/img/corralesimagen.jpeg',
        telefono: 8246747,
        tipo: 'Restaurante tradicional'
      },

      {
        nombre: 'Pio Pio',
        logo: '../assets/img/piopiologo.jpg',
        direccion: 'Calle 6 #8-67',
        imagen: '../assets/img/piopioimagen.jpeg',
        telefono: 8243859,
        tipo: 'Asaderos de Pollo'
      },

      {
        nombre: 'Mora Castilla',
        logo: '../assets/img/moralogo.jpg',
        direccion: 'Calle 2 #4-42',
        imagen: '../assets/img/moraimagen.png',
        telefono: 3006159425,
        tipo: 'Comida típica'
      },

      {
        nombre: 'American Sandwish',
        logo: '../assets/img/americanlogo.jpeg',
        direccion: 'Calle 2 #4-42',
        imagen: '../assets/img/americanimagen.jpg',
        telefono: 3006159425,
        tipo: 'Comidas Rápidas'
      },

      {
        nombre: 'Bananos',
        logo: '../assets/img/bananoslogo.jpeg',
        direccion: 'Calle 2 #4-42',
        imagen: '../assets/img/bananosimagen.jpg',
        telefono: 3006159425,
        tipo: 'Comidas Rápidas'
      },

      {
        nombre: 'Pedro Parrilla',
        logo: '../assets/img/pedrologo.jpeg',
        direccion: "Calle 2 #4-42",
        imagen: '../assets/img/pedroimagen.jpg',
        telefono: 3006159425,
        tipo: 'Comidas Rápidas'
      },

      {
        nombre: 'La Blanca',
        logo: '../assets/img/blancalogo.jpeg',
        direccion: 'Calle 2 #4-42',
        imagen: '../assets/img/blancaimagen.jpeg',
        telefono: 3006159425,
        tipo: 'Salsamentaria'
      },

      {
        nombre: 'Pikando',
        logo: '../assets/img/pikandologo.jpg',
        direccion: 'Calle 2 #4-42',
        imagen: '../assets/img/pikandoimagen.jpg',
        telefono: 3006159425,
        tipo: 'Asados'
      }
    ];
  }*/

}


