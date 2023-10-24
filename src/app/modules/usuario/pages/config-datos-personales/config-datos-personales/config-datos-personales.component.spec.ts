import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDatosPersonalesComponent } from './config-datos-personales.component';

describe('ConfigDatosPersonalesComponent', () => {
  let component: ConfigDatosPersonalesComponent;
  let fixture: ComponentFixture<ConfigDatosPersonalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigDatosPersonalesComponent]
    });
    fixture = TestBed.createComponent(ConfigDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
