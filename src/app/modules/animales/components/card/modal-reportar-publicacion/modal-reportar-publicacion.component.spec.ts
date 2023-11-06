import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReportarPublicacionComponent } from './modal-reportar-publicacion.component';

describe('ModalReportarPublicacionComponent', () => {
  let component: ModalReportarPublicacionComponent;
  let fixture: ComponentFixture<ModalReportarPublicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalReportarPublicacionComponent]
    });
    fixture = TestBed.createComponent(ModalReportarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
