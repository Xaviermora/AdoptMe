import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarEnAdopcionComponent } from './dar-en-adopcion.component';

describe('DarEnAdopcionComponent', () => {
  let component: DarEnAdopcionComponent;
  let fixture: ComponentFixture<DarEnAdopcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarEnAdopcionComponent]
    });
    fixture = TestBed.createComponent(DarEnAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
