import { Component, OnInit, ViewChild } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { AddPizzaComponent } from '../add-pizza/add-pizza.component';
import { UpdatePizzaComponent } from '../update-pizza/update-pizza.component';
import { IPizza } from 'src/app/models/pizza';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {
  page = 1;
  @ViewChild('adddetail') private addPizzaComponent: AddPizzaComponent;
  @ViewChild('updatedetail') private updatePizzaComponent: UpdatePizzaComponent;

  pizzas$: Observable<IPizza[]>;
  pizzaToUpdate: IPizza;

  constructor(
    private _pizzaService: PizzaService
    ) {
  }

  ngOnInit() {
    this.pizzas$ = this._pizzaService.getAllPizza();
  }


  savePizza(pizza: IPizza) {

    this._pizzaService.addPizza({ pizza: pizza })
      .subscribe(
        (response: any) => {
          alert(response.message);
        },
        (error: any) => alert('Netwwork or Server Error')
      );

  }

  saveUpdatedPizza(pizza: IPizza) {
    this._pizzaService.updatePizza(pizza._id, { pizza: pizza })
    .subscribe(
      (data: any) => alert(data.message),
      (error: any) => alert('Netwwork or server Error')
      );
  }

  deletePizza(id: string) {
    this._pizzaService.deletePizza(id)
      .subscribe(
        (response: any) => {
          alert(response.message);
        },
        error => alert('Network or Server Error')
      );
  }


  showAddForm() {
    this.addPizzaComponent.frame.show();
  }

  showUpdateForm(pizza) {
    this.updatePizzaComponent.pizza = pizza;
    this.updatePizzaComponent.frame.show();
  }

}
