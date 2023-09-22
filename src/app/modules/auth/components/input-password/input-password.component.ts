import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent {
  @Input() type: string = 'password'
  @Input() label!: string
  @Input() idInput!: string
  hide: boolean = true

  changeVisibility(type: string){
    this.hide = !this.hide
    this.type = type
  }
}
