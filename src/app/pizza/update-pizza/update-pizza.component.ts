import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-update-pizza',
  templateUrl: './update-pizza.component.html',
  styleUrls: ['./update-pizza.component.scss']
})
export class UpdatePizzaComponent implements OnInit {
  @ViewChild('frame') public frame;
  pizzaForm = new FormGroup({
    label: new FormControl('', Validators.required),
    ingredient: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  constructor(private _pizzaService: PizzaService) { }

  ngOnInit() {

  }


updatePizza() {
    this._pizzaService.addPizza({ pizza: this.pizzaForm.value })
      .subscribe(
        (response: Response) => {
           console.log('update ok')
        },
        (error: any) => alert("Netwwork or server Error")),
      (complete) => console.log('XHR request is completed')

    this.frame.hide();
  }

  x: boolean = true;
  private id: string;
  public editPizza(id: string, label: string, ingredient: string, price: number) {
    console.log(id)
    this.frame.show();
    this.pizzaForm.setValue({ label: label, ingredient: ingredient, price: price });
    this.x = false;
    this.id = id ;

  }
  savePizza() {
    this._pizzaService.updatePizza(this.id, { pizza: this.pizzaForm.value })
      .subscribe(
        (response: Response) => {
          this.route.navigate(["pizza"])
        },
        (error: any) => alert("Netwwork or server Error")),
      (complete) => console.log('XHR request is completed')

    this.frame.hide();

  }


}
