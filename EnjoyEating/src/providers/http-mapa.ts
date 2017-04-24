import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Mapa } from '../models/mapa';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//AIzaSyA6fgLgJdUSb2syfbAjJSVSnebwzgpa1Zw

@Injectable()
export class HttpMapa {

  constructor(public http: Http) {
  }

  get(placeid: string): Observable<Mapa> {
    return this.http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid="+placeid+"&key=AIzaSyA6fgLgJdUSb2syfbAjJSVSnebwzgpa1Zw")
      .map(this.proccessResponse).catch(this.processError);
  }

  private proccessResponse(response: Response) {
    let body = response.json();

    let channel = body.result.geometry;
    let dir = body.result.formatted_address;

    let direccion = dir;
    let lat = channel.location.lat;
    let long = channel.location.lng;
    let horario = body.result.opening_hours.open_now;
    let dia = body.result.opening_hours.periods;

    let mapa = new Mapa(lat, long, direccion);
    return mapa;
  }

  private processError() {
    return Observable.throw("Error al consumir el servicio");
  }

}
