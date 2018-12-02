import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUploaderModule } from 'ngx-uploader';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaService } from './services/pizza.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import 'hammerjs';
import { MaterialModule } from './shared/material/material.module';
import { MainMenuComponent } from './navigation/main-menu/main-menu.component';
import { FooterComponent } from './navigation/footer/footer.component';
<<<<<<< HEAD
=======
import { AddPizzaComponent } from './pizza/add-pizza/add-pizza.component';
import { UpdatePizzaComponent } from './pizza/update-pizza/update-pizza.component';
import { PictureUploaderComponent } from './pizza/picture-uploader/picture-uploader.component';
import { FilterPipe } from './shared/filter.pipe';
import { CatalogComponent } from './pizza/catalog/catalog.component';
>>>>>>> 0bd07b7cbf44fb9dc468fe6dfe397054147a2ceb
import { PagesModule } from './navigation/pages/pages.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { PizzaModule } from './pizza/pizza.module';
<<<<<<< HEAD



=======
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
>>>>>>> 0bd07b7cbf44fb9dc468fe6dfe397054147a2ceb
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    NgxUploaderModule,
    PagesModule,
    UserModule,
    OrderModule,
    PizzaModule
<<<<<<< HEAD
=======
    InfiniteScrollModule
>>>>>>> 0bd07b7cbf44fb9dc468fe6dfe397054147a2ceb
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
