import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PizzaService } from 'src/app/services/pizza.service';
import { Router } from '@angular/router';
import { IPizza } from '../../models/pizza';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.scss']
})
export class AddPizzaComponent implements OnInit {

  @Output() addPizzaEvent: EventEmitter<IPizza> = new EventEmitter();
  @ViewChild('frame') public frame;

  constructor(private _pizzaService: PizzaService, private route: Router) { }

  pizzaForm = new FormGroup({
    label: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });


  ngOnInit() {

  }

  addPizza() {
    this.addPizzaEvent.emit(this.pizzaForm.value);
    this.frame.hide();
  }
}

// TODO : Add forms validators
