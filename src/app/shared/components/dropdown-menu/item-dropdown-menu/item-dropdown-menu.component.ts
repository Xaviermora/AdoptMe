import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-dropdown-menu',
  templateUrl: './item-dropdown-menu.component.html',
  styleUrls: ['./item-dropdown-menu.component.css']
})
export class ItemDropdownMenuComponent {
  @Input() link!: string
}
