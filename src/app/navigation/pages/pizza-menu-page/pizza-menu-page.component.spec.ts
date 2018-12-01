import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMenuPageComponent } from './pizza-menu-page.component';

describe('PizzaMenuPageComponent', () => {
  let component: PizzaMenuPageComponent;
  let fixture: ComponentFixture<PizzaMenuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaMenuPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
