import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.css']
})
export class InputPhoneComponent {
  @Input() control: FormControl = new FormControl()
}
