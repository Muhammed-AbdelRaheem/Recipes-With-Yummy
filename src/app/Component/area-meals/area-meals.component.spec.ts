import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaMealsComponent } from './area-meals.component';

describe('AreaMealsComponent', () => {
  let component: AreaMealsComponent;
  let fixture: ComponentFixture<AreaMealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaMealsComponent]
    });
    fixture = TestBed.createComponent(AreaMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
