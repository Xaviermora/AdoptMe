import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAuthGoogleComponent } from './boton-auth-google.component';

describe('BotonAuthGoogleComponent', () => {
  let component: BotonAuthGoogleComponent;
  let fixture: ComponentFixture<BotonAuthGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonAuthGoogleComponent]
    });
    fixture = TestBed.createComponent(BotonAuthGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
