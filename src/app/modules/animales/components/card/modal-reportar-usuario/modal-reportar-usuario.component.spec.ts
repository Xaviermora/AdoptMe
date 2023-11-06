import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReportarUsuarioComponent } from './modal-reportar-usuario.component';

describe('ModalReportarUsuarioComponent', () => {
  let component: ModalReportarUsuarioComponent;
  let fixture: ComponentFixture<ModalReportarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalReportarUsuarioComponent]
    });
    fixture = TestBed.createComponent(ModalReportarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
