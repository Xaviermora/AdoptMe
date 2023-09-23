import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent {
  @Input() idInput!: string
  @Input() label!: string
  check: boolean = false
  @Output() isChecked = new EventEmitter<boolean>() 

  getChecked(){
    this.isChecked.emit(this.check)
  }
}
