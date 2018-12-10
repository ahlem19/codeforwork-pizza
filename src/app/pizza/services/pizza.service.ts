import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url from '../../config.js';
import { Observable, BehaviorSubject } from 'rxjs';
import { IPizza } from '../../shared/models/pizza';
interface PizzaStore {
  _pizzas: IPizza[];
  counter: number;
}
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private _pizzaStore: PizzaStore;
  private _pizzas$: BehaviorSubject<PizzaStore>;
  private nextPage = 0;

  constructor(private _http: HttpClient) {
    this._pizzaStore = { _pizzas: [], counter: 0 };
    this._pizzas$ = <BehaviorSubject<PizzaStore>>new BehaviorSubject({ _pizzas: [], counter: 0 });
  }

  getAllPizza(): Observable<PizzaStore> {
    return this._pizzas$.asObservable() as Observable<PizzaStore>;
  }

  addPizza(_pizza: { pizza: IPizza }) {
    return this._http.post(`${url.local.rootUrl}pizza`, _pizza, {})
      .subscribe(
        (data: any) => {
          this._pizzaStore._pizzas.push(data.core);

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

  loadPizzaFromAPI(isnext: boolean = false , cb= () => {}) {
    if (isnext) {this.nextPage += 5; }
    this._http.get(`${url.local.rootUrl}pizza?nextPage=${this.nextPage}`).subscribe(
      (data: IPizza[]) => {
         cb();
        if (this.nextPage === 0) {
          this._pizzaStore._pizzas = data;
        } else {
          this._pizzaStore._pizzas = this._pizzaStore._pizzas.concat(data);
        }
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
