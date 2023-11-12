import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfpIconComponent } from './pfp-icon.component';

describe('PfpIconComponent', () => {
  let component: PfpIconComponent;
  let fixture: ComponentFixture<PfpIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PfpIconComponent]
    });
    fixture = TestBed.createComponent(PfpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
