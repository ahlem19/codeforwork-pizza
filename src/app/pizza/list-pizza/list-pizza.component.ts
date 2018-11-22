import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { AddPizzaComponent } from '../add-pizza/add-pizza.component';
import { UpdatePizzaComponent } from '../update-pizza/update-pizza.component';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {
 
   p: number = 1 ;
  @ViewChild('adddetail') 
  private addPizzaComponent:AddPizzaComponent;
  @ViewChild('updatedetail') 
  private updatePizzaComponent:UpdatePizzaComponent;
  
  pizzas:any;
  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.pizzaService.getAllPizza().subscribe(res=>{
      this.pizzas=res;
    });
  }

  showDetailForAdd(){
    this.addPizzaComponent.frame.show();
  }

  showDetailForUpdate(){
    this.updatePizzaComponent.frame.show();
  }
 
  deletePizza(id:string){
    this.pizzaService.deletePizza(id)
    .subscribe(
      (response:Response)=>{
        this.pizzaService.getAllPizza().subscribe(res=>{
          this.pizzas=res;
        });
      },
      error=>alert("Network or Server Error")
    )
  }

}
