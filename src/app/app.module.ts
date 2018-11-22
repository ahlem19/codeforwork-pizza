import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPizzaComponent } from './pizza/list-pizza/list-pizza.component';
import { PizzaService } from './services/pizza.service';
import { MaterialModule } from './shared/material/material.module';
import { MainMenuComponent } from './navigation/main-menu/main-menu.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { DetailPizzaComponent } from './pizza/detail-pizza/detail-pizza.component';

import 'hammerjs';

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
