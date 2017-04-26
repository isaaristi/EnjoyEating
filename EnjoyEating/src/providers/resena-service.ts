import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Restaurante } from '../models/restaurante';
import {Menu} from '../models/menu';
import { URL } from '../app/app.config';
import {Items} from '../models/items';
import {Resena} from '../models/resena';

@Injectable()
export class ResenaService {

  resena: Resena[];

  constructor(public http: Http) {
    console.log('Hello ResenaService Provider');
  }

all(idRes): Observable<Resena[]> {
    return this.http.get(URL + "/resena/" + idRes).map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  add(resena: Resena): Observable<{ success: boolean }> {
    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);

    return this.http.post(URL + "/resena", resena, options).map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }

}
