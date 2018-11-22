import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url from '../config.js';
import { IPizza } from '../models/pizza.js';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private _http: HttpClient) {

  }

  getAllPizza() {

    return this._http.get( `${url.local.rootUrl}pizza`);
  }
  
  addPizza(_pizza:{pizza:IPizza}) {
    return this._http.post(`${url.local.rootUrl}pizza`,_pizza,{});

  }

  deletePizza(id:string) {
    return this._http.delete(`${url.local.rootUrl}pizza/${id}`)
  }

  updatePizza(id:string,_pizza:{pizza:IPizza}) {
return this._http.put(`${url.local.rootUrl}pizza/${id}`,_pizza)  
}

  getPizzaById() {
    //TODO:to implement xhr
  }
}
