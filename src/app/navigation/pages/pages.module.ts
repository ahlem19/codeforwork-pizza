import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroPageComponent } from './intro-page/intro-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PizzaMenuPageComponent } from './pizza-menu-page/pizza-menu-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { PizzaModule } from '../../pizza/pizza.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    IntroPageComponent,
    CatalogPageComponent,
    OrderPageComponent,
    ProfilePageComponent,
    PizzaMenuPageComponent,
    ContactPageComponent,
    AboutUsPageComponent,
    PaymentPageComponent,
    HomePageComponent,
    DashboardPageComponent],
  imports: [
    CommonModule,
    PizzaModule,
    MaterialModule
  ],
  exports: [
    IntroPageComponent,
    CatalogPageComponent,
    OrderPageComponent,
    ProfilePageComponent,
    PizzaMenuPageComponent,
    ContactPageComponent,
    AboutUsPageComponent,
    PaymentPageComponent,
    HomePageComponent,
    DashboardPageComponent]
})
export class PagesModule { }
