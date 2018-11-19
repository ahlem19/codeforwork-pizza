import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url from '../config.js';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private _http: HttpClient) {

  }

  getAllPizza() {
    //TODO:to implement xhr
    return this._http.get( `${url.local.rootUrl}pizza`);
  }
  
  addPizza() {
    //TODO:to implement xhr

  }

  deletePizza() {
    //TODO:to implement xhr
  }

  updatePizza() {
    //TODO:to implement xhr
  }

  getPizzaById() {
    //TODO:to implement xhr
  }
}
