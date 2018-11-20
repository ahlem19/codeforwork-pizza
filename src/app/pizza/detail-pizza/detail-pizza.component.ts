import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';
import { PizzaService } from 'src/app/services/pizza.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-detail-pizza',
  templateUrl: './detail-pizza.component.html',
  styleUrls: ['./detail-pizza.component.scss'],
  // stratgie:onPush
})
export class DetailPizzaComponent implements OnInit {
  @ViewChild('frame')
  public frame;
  pizzaForm = new FormGroup({
    label: new FormControl('', Validators.required),
    ingredient: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  constructor(private _pizzaService: PizzaService,private route:Router) { }

  ngOnInit() {

  }
  addPizza() {
    //console.log(this.pizzaForm.value);
    this._pizzaService.addPizza({pizza:this.pizzaForm.value})
    .subscribe(
      (response :Response)=>{
        alert(response.toString());
        this.route.navigate(["pizza"])
      },
      (error:any)=>alert("Netwwork or server Error")),
      (complete)=>console.log('XHR request is completed')

    this.frame.hide();
  }


}

//TODO : Add forms validators 