import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { DetailPizzaComponent } from '../detail-pizza/detail-pizza.component';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {
 
  @ViewChild('detail') 
  private detailPizzaComponent:DetailPizzaComponent;
  
  pizzas:any;
  constructor(private pizzaService: PizzaService) {
    
  }

  ngOnInit() {
    this.pizzaService.getAllPizza().subscribe(res=>{
      this.pizzas=res;
    });
  }

  showDetail(){
    this.detailPizzaComponent.frame.show();
  }
  updatePizza(){
    //TODO :update pizza
    alert("test");
  }
  deletePizza(id:string){
    this.pizzaService.deletePizza(id)
    .subscribe(
      (response:Response)=>{alert(response);
        this.pizzaService.getAllPizza().subscribe(res=>{
          this.pizzas=res;
        });
      },
      error=>alert("Network or Server Error")
    )
  }

}
