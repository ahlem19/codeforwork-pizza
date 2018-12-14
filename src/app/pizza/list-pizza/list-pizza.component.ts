import { Component, OnInit, ViewChild } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { AddPizzaComponent } from '../add-pizza/add-pizza.component';
import { UpdatePizzaComponent } from '../update-pizza/update-pizza.component';
import { IPizza } from '../../config';
import { Observable } from 'rxjs';
import * as config from '../../config';




@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {

  private headElements = ['Picture', 'Label', 'Ingredients', 'Price', 'U', 'X', 'E'];
  @ViewChild('adddetail') private addPizzaComponent: AddPizzaComponent;
  @ViewChild('updatedetail') private updatePizzaComponent: UpdatePizzaComponent;

  _pizzaStore$: Observable<{ _pizzas: IPizza[], counter: number }>;
  pizzaToUpdate: IPizza;
  pizza: any;
  statusLoading = false;
  searchText = '';

  constructor(private _pizzaService: PizzaService) {
  }

  ngOnInit() {
    this._pizzaStore$ = this._pizzaService.getAllPizza();
    this._pizzaService.loadPizzaFromAPI();
  }


  savePizza(pizza: IPizza) {
    this._pizzaService.addPizza({ pizza: pizza });
  }

  saveUpdatedPizza(pizza: IPizza) {
    this._pizzaService.updatePizza(pizza._id, { pizza: pizza });
  }

  deletePizza(id: string) {
    this._pizzaService.deletePizza(id);
  }


  showAddForm() {
    this.addPizzaComponent.frame.show();
  }

  showUpdateForm(pizza) {
    this.updatePizzaComponent.pizza = pizza;
    this.updatePizzaComponent.frame.show();
  }

  showUploadder(pizza, currentPizza) {
    this.pizza = pizza;
    return currentPizza ? false : true;
  }

  getPictureUrl(picture) {
    return picture ?
       `${config.local.rootUrl}ressources/pizza-pictures/${picture}`
      : `${config.local.rootUrl}ressources/pizza-pictures/default.jpg` ;
  }

  refresh(event) {
    console.log(`%c Refresh()`, 'background-color:green;color:white');
    alert('Pizza Picture Updated Successfully');
    this._pizzaService.loadPizzaFromAPI();
  }
}
