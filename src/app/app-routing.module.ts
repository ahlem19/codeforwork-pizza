import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPizzaComponent } from './pizza/list-pizza/list-pizza.component';
import { CatalogComponent } from './pizza/catalog/catalog.component';

const routes: Routes = [
  {
    path: 'pizza',
    component: ListPizzaComponent
  },

  {
    path: 'catalog',
    component: CatalogComponent
  },

  {
    path: '**',
    redirectTo: 'pizza'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
