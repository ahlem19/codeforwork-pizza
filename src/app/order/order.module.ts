import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [OrderListComponent, CartComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports: [ OrderRoutingModule]
})
export class OrderModule { }
