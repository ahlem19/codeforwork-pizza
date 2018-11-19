import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPizzaComponent } from './pizza/list-pizza/list-pizza.component';

const routes: Routes = [
  {
    path:"pizza",
    component:ListPizzaComponent
  },

  {
    path:"**",
    component:ListPizzaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
