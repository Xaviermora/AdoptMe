import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionItemComponent } from './notificacion-item.component';

describe('NotificacionItemComponent', () => {
  let component: NotificacionItemComponent;
  let fixture: ComponentFixture<NotificacionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificacionItemComponent]
    });
    fixture = TestBed.createComponent(NotificacionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
