import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuComponent } from './dropdown-menu.component';

describe('DropdownMenuComponent', () => {
  let component: DropdownMenuComponent;
  let fixture: ComponentFixture<DropdownMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownMenuComponent]
    });
    fixture = TestBed.createComponent(DropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
