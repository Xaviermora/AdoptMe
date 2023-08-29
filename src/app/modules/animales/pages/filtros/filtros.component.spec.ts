import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosComponent } from './filtros.component';

describe('FiltrosComponent', () => {
  let component: FiltrosComponent;
  let fixture: ComponentFixture<FiltrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrosComponent]
    });
    fixture = TestBed.createComponent(FiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
