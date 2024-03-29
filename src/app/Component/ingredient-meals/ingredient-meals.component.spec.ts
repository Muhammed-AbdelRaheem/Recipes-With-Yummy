import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientMealsComponent } from './ingredient-meals.component';

describe('IngredientMealsComponent', () => {
  let component: IngredientMealsComponent;
  let fixture: ComponentFixture<IngredientMealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientMealsComponent]
    });
    fixture = TestBed.createComponent(IngredientMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
