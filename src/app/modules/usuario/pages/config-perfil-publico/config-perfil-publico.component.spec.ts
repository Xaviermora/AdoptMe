import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPerfilPublicoComponent } from './config-perfil-publico.component';

describe('ConfigPerfilPublicoComponent', () => {
  let component: ConfigPerfilPublicoComponent;
  let fixture: ComponentFixture<ConfigPerfilPublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigPerfilPublicoComponent]
    });
    fixture = TestBed.createComponent(ConfigPerfilPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
