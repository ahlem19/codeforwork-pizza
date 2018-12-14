import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPizza } from '../../shared/models/pizza';
import { PizzaService } from '../services/pizza.service';

import * as config from '../../config';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  _pizzaStore$: Observable<{ _pizzas: IPizza[], counter: number }>;
  statusLoading = false;
  searchText = '';

  constructor(private _pizzaService: PizzaService) { }

  ngOnInit() {
    this._pizzaStore$ = this._pizzaService.getAllPizza();
    this._pizzaService.loadPizzaFromAPI();
  }


  getPictureUrl(picture) {
    return picture ?
       `${config.local.rootUrl}ressources/pizza-pictures/${picture}`
      : `${config.local.rootUrl}ressources/pizza-pictures/default.jpg` ;
  }

}
