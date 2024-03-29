import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymealsComponent } from './categorymeals.component';

describe('CategorymealsComponent', () => {
  let component: CategorymealsComponent;
  let fixture: ComponentFixture<CategorymealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorymealsComponent]
    });
    fixture = TestBed.createComponent(CategorymealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
