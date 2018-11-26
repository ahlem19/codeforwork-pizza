import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url from '../config.js';
import { Observable, BehaviorSubject } from 'rxjs';
import { IPizza } from '../models/pizza';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzas$: Observable<{_pizzas: IPizza[], counter: number}>;
  private _pizzaStore: {
    _pizzas: IPizza[],
    counter: number
  };

  private _pizzas$: BehaviorSubject<{_pizzas: IPizza[], counter: number}>;

  constructor(private _http: HttpClient) {
    this._pizzaStore = { _pizzas : [], counter: 0 };
    this._pizzas$ = <BehaviorSubject<{_pizzas: [], counter: 0 }>>new BehaviorSubject({_pizzas: [], counter: 0});
    this.pizzas$ = this._pizzas$.asObservable();
  }

  getAllPizza(): Observable<{_pizzas: IPizza[], counter: number}> {
    return this.pizzas$ as Observable<{_pizzas: IPizza[], counter: number}>;
  }

  addPizza(_pizza: { pizza: IPizza }) {
    return this._http.post(`${url.local.rootUrl}pizza`, _pizza, {})
      .subscribe(
        data => {
          this._pizzaStore._pizzas.push(_pizza.pizza);
          const pizStor = {
            _pizzas: Object.assign({}, this._pizzaStore)._pizzas,
            counter: this._pizzaStore._pizzas.length
          };
          this._pizzas$.next(pizStor);
        },
        error => console.error(error),
        () => console.log('addPizza from Service Completed')
      );
  }

  deletePizza(id: string) {
    return this._http.delete(`${url.local.rootUrl}pizza/${id}`)
      .subscribe(
        (data) => {
          this._pizzaStore._pizzas.forEach((piz, i) => {
            if (piz._id === id) {
              this._pizzaStore._pizzas.splice(i, 1);
            }
            const pizStor = {
              _pizzas: Object.assign({}, this._pizzaStore)._pizzas,
              counter: this._pizzaStore._pizzas.length
            };
            this._pizzas$.next(pizStor);
          });
        },
        (error) => alert('Netwwork or server Error'),
        () => console.log('deletePizza from Service Completed')
      );
  }

  updatePizza(id: string, _pizza: { pizza: IPizza }) {
    return this._http.put(`${url.local.rootUrl}pizza/${id}`, _pizza).
      subscribe(
        (data) => {
          this._pizzaStore._pizzas.forEach((piz, i) => {
            if (piz._id === id) {
              this._pizzaStore._pizzas[i] = _pizza.pizza;
            }
            const pizStor = {
              _pizzas: Object.assign({}, this._pizzaStore)._pizzas,
              counter: this._pizzaStore._pizzas.length
            };
            this._pizzas$.next(pizStor);
          });
        },
        (error) => alert('Netwwork or server Error'),
        () => console.log('updatePizza from Service Completed')
      );
  }

  getPizzaById() {
    // TODO:to implement xhr
  }

  loadPizzaFromAPI() {
    this._http.get(`${url.local.rootUrl}pizza`).subscribe(
      data => {
        this._pizzaStore._pizzas = data as IPizza[];
        const pizStor = {
          _pizzas: Object.assign({}, this._pizzaStore)._pizzas,
          counter: this._pizzaStore._pizzas.length
        };
        this._pizzas$.next(pizStor);
      },
      error => alert('Unable to load Pizza from Server'),
      () => console.log(`%c Loding Pizza from API is complet`, 'backgroung-color:tomato;color:white;')
    );
  }

}
