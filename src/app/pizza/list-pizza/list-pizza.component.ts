import { Component, OnInit, ViewChild } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { AddPizzaComponent } from '../add-pizza/add-pizza.component';
import { UpdatePizzaComponent } from '../update-pizza/update-pizza.component';
import { IPizza } from 'src/app/models/pizza';
import { Observable, BehaviorSubject } from 'rxjs';
import { refreshService } from 'src/app/services/update.service';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {
  page = 1;
  @ViewChild('adddetail') private addPizzaComponent: AddPizzaComponent;
  @ViewChild('updatedetail') private updatePizzaComponent: UpdatePizzaComponent;

  _pizzaStore$: Observable<{_pizzas: IPizza[], counter: number}>;
  pizzaToUpdate: IPizza;

  constructor( private _pizzaService: PizzaService,private socket:refreshService) {
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

}
