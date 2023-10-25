import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSeguridadComponent } from './config-seguridad.component';

describe('ConfigSeguridadComponent', () => {
  let component: ConfigSeguridadComponent;
  let fixture: ComponentFixture<ConfigSeguridadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigSeguridadComponent]
    });
    fixture = TestBed.createComponent(ConfigSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
