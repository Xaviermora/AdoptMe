import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAuthGoogleComponent } from './button-auth-google.component';

describe('ButtonAuthGoogleComponent', () => {
  let component: ButtonAuthGoogleComponent;
  let fixture: ComponentFixture<ButtonAuthGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAuthGoogleComponent]
    });
    fixture = TestBed.createComponent(ButtonAuthGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
