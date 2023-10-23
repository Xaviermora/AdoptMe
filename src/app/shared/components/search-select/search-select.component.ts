import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.css']
})
export class SearchSelectComponent {
  @Input() idInput!: string
  @Input() idList!: string
  @Input() label!: string
  @Input() list!: any[]
  @Input() control: FormControl = new FormControl('')
}
