import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFilmComponent } from './pizza-film.component';

describe('PizzaFilmComponent', () => {
  let component: PizzaFilmComponent;
  let fixture: ComponentFixture<PizzaFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
