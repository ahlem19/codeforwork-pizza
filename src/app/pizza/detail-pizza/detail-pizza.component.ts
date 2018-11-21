import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';
import { PizzaService } from 'src/app/services/pizza.service';
import { Route, Router } from '@angular/router';
import { IPizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-detail-pizza',
  templateUrl: './detail-pizza.component.html',
  styleUrls: ['./detail-pizza.component.scss'],
  // stratgie:onPush
})
export class DetailPizzaComponent implements OnInit {
  @ViewChild('frame')
  public frame;
  public idpizza = "";
  public isUpdate:boolean=false;
  pizzaForm = new FormGroup({
    label: new FormControl('', Validators.required),
    ingredient: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  constructor(private _pizzaService: PizzaService, private route: Router) { }

  ngOnInit() {

  }
  updatePizza() {
    //console.log(this.pizzaForm.value);
    let updatePizza: IPizza = this.pizzaForm.value;
    updatePizza.id = this.idpizza;
    this._pizzaService.updatePizza({ pizza: updatePizza })
      .subscribe(
        (response: { message: any, core: any }) => {
          // console.log(response.message);
          alert(response.message + "\n" + JSON.stringify(response.core));
        },
        (error: any) => alert("Netwwork or server Error")),
      (complete) => console.log('XHR request is completed')

    this.frame.hide();
  }
  addPizza() {
    //console.log(this.pizzaForm.value);
    this._pizzaService.addPizza({ pizza: this.pizzaForm.value })
      .subscribe(
        (response: { message: any, core: any }) => {
          // console.log(response.message);
          alert(response.message + "\n" + JSON.stringify(response.core));
        },
        (error: any) => alert("Netwwork or server Error")),
      (complete) => console.log('XHR request is completed')

    this.frame.hide();
  }


}

export enum Status { add, update }

//TODO : Add forms validators 