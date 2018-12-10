import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxUploaderModule } from 'ngx-uploader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import 'hammerjs';
import { MaterialModule } from './shared/material/material.module';
import { MainMenuComponent } from './navigation/main-menu/main-menu.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { PagesModule } from './navigation/pages/pages.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { PizzaModule } from './pizza/pizza.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PizzaService } from './pizza/services/pizza.service';
import { JwtInterceptorService } from './user/_helpers/jwt.interceptor.service';
import { ErrorInterceptor } from './user/_helpers/error.interceptor.service';

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
    PizzaModule,
    InfiniteScrollModule
  ],
  providers: [
    PizzaService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
