import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRegisterComponent } from './second-register.component';

describe('SecondRegisterComponent', () => {
  let component: SecondRegisterComponent;
  let fixture: ComponentFixture<SecondRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondRegisterComponent]
    });
    fixture = TestBed.createComponent(SecondRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
