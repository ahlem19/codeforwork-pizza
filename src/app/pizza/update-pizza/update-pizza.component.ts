import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IPizza } from '../../models/pizza';

@Component({
  selector: 'app-update-pizza',
  templateUrl: './update-pizza.component.html',
  styleUrls: ['./update-pizza.component.scss']
})
export class UpdatePizzaComponent implements OnInit {
  @ViewChild('frame') public frame;
  @Output() updatePizzaEvent: EventEmitter<IPizza> = new EventEmitter();
  public pizza?: IPizza;

  pizzaForm: FormGroup = this.pizzaForm = new FormGroup({
    _id: new FormControl(''),
    label: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    picture: new FormControl('')
  });

  constructor() {
  }

  ngOnInit() {
  }

  updatePizza() {
    this.updatePizzaEvent.emit(this.pizzaForm.value);
    this.frame.hide();
  }

  setPizzaToTheForm() {
    this.pizzaForm.setValue({
      _id: this.pizza._id,
      label: this.pizza.label,
      ingredients: this.pizza.ingredients,
      price: this.pizza.price,
      picture: this.pizza.picture
    });
  }

}
