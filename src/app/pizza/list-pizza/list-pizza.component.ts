import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { DetailPizzaComponent } from '../detail-pizza/detail-pizza.component';
import { IPizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {

  @ViewChild('detail')
  private detailPizzaComponent: DetailPizzaComponent;

  pizzas: any;
  constructor(private pizzaService: PizzaService) {

  }

  ngOnInit() {
    this.pizzaService.getAllPizza().subscribe(res => {
      this.pizzas = res;
    });
  }

  showDetail() {
    this.detailPizzaComponent.idpizza="";
    this.detailPizzaComponent.isUpdate=false;
    this.detailPizzaComponent.frame.show();
  }

  updatePizza(pizza: any) {
    console.log(pizza);
    var updatePizza: IPizza = {
      label: pizza.label,
      ingredient: pizza.ingredient,
      price: pizza.price
    }
    this.detailPizzaComponent.idpizza=pizza._id;
    this.detailPizzaComponent.isUpdate=true;
    this.detailPizzaComponent.pizzaForm.setValue(updatePizza);

    this.detailPizzaComponent.frame.show();
    //TODO :update pizza
    // alert("test");
  }
  
  deletePizza(id: string) {
    this.pizzaService.deletePizza(id)
      .subscribe(
        (response: Response) => {
          alert(response);
          this.pizzaService.getAllPizza().subscribe(res => {
            this.pizzas = res;
          });
        },
        error => alert("Network or Server Error")
      )
  }

}
