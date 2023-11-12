import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDropdownMenuComponent } from './item-dropdown-menu.component';

describe('ItemDropdownMenuComponent', () => {
  let component: ItemDropdownMenuComponent;
  let fixture: ComponentFixture<ItemDropdownMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDropdownMenuComponent]
    });
    fixture = TestBed.createComponent(ItemDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
