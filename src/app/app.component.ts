import { Component } from '@angular/core';
import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webApp';
  constructor(private pizza: PizzaService) {
    pizza.getAllPizza().subscribe(res=>{
      console.log(res);
    })
  }

}
