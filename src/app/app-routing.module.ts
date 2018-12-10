import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroPageComponent } from './navigation/pages/intro-page/intro-page.component';
import { CatalogComponent } from './pizza/catalog/catalog.component';
import { DashboardPageComponent } from './navigation/pages/dashboard-page/dashboard-page.component';
import { CatalogPageComponent } from './navigation/pages/catalog-page/catalog-page.component';
import { ContactPageComponent } from './navigation/pages/contact-page/contact-page.component';
import { AboutUsPageComponent } from './navigation/pages/about-us-page/about-us-page.component';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ListPizzaComponent } from './pizza/list-pizza/list-pizza.component';
import { AuthGuard } from './user/_guard/auth.guard';


const routes: Routes = [
  {
    path: 'intro',
    component: IntroPageComponent
  },
  {
    path: 'pizza-menu',
    component: ListPizzaComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'catalog',
    component: CatalogPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: './user/user.module#UserModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'aboutus',
    component: AboutUsPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserModule, OrderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
