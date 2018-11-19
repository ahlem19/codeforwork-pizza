import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPizzaComponent } from './pizza/list-pizza/list-pizza.component';
import { PizzaService } from './services/pizza.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import 'hammerjs';
import { MaterialModule } from './shared/material/material.module';
import { MainMenuComponent } from './navigation/main-menu/main-menu.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { DetailPizzaComponent } from './pizza/detail-pizza/detail-pizza.component';
@NgModule({
  declarations: [
    AppComponent,
    ListPizzaComponent,
    MainMenuComponent,
    FooterComponent,
    DetailPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
