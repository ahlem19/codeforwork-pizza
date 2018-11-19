import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {
  pizzas:any;
  constructor(private pizzaService: PizzaService) {
    
  }
  ngOnInit() {
    this.pizzaService.getAllPizza().subscribe(res=>{
      this.pizzas=res;
    })
  }

}
