import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUploaderModule } from 'ngx-uploader';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPizzaComponent } from './pizza/list-pizza/list-pizza.component';
import { PizzaService } from './services/pizza.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import 'hammerjs';
import {NgxPaginationModule} from 'ngx-pagination';
import { MaterialModule } from './shared/material/material.module';
import { MainMenuComponent } from './navigation/main-menu/main-menu.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AddPizzaComponent } from './pizza/add-pizza/add-pizza.component';
import { UpdatePizzaComponent } from './pizza/update-pizza/update-pizza.component';
import { PictureUploaderComponent } from './pizza/picture-uploader/picture-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPizzaComponent,
    MainMenuComponent,
    FooterComponent,
    AddPizzaComponent,
    UpdatePizzaComponent,
    PictureUploaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    NgxUploaderModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
