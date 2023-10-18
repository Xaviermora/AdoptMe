import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarEnAdopcionFormComponent } from './dar-en-adopcion-form.component';

describe('DarEnAdopcionFormComponent', () => {
  let component: DarEnAdopcionFormComponent;
  let fixture: ComponentFixture<DarEnAdopcionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarEnAdopcionFormComponent]
    });
    fixture = TestBed.createComponent(DarEnAdopcionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
