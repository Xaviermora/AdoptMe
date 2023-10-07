import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() idSelect!: string
  @Input() label!: string
  @Input() list!: string[]
  @Input() control: FormControl = new FormControl()
}
