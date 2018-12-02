import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ListPizzaComponent } from './list-pizza/list-pizza.component';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { UpdatePizzaComponent } from './update-pizza/update-pizza.component';
import { PictureUploaderComponent } from './picture-uploader/picture-uploader.component';
import { FilterPipe } from '../shared/filter.pipe';
import { CatalogComponent } from './catalog/catalog.component';
import { PizzaFilmComponent } from './pizza-film/pizza-film.component';
import { CommonModule } from '@angular/common';
import { PizzaService } from '../services/pizza.service';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUploaderModule } from 'ngx-uploader';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule(
  {
    declarations: [
      ListPizzaComponent,
      AddPizzaComponent,
      UpdatePizzaComponent,
      PictureUploaderComponent,
      FilterPipe,
      CatalogComponent,
      PizzaFilmComponent,
      FilterPipe
    ],
    imports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      NgxUploaderModule,
      MDBBootstrapModule.forRoot(),
      HttpClientModule,
      BrowserAnimationsModule,

],
    exports: [
      ListPizzaComponent,
      AddPizzaComponent,
      UpdatePizzaComponent,
      PictureUploaderComponent,
      FilterPipe,
      CatalogComponent,
      PizzaFilmComponent
    ],
    providers: [PizzaService],
    schemas: [ NO_ERRORS_SCHEMA ]
  }
)
export class PizzaModule {

}
