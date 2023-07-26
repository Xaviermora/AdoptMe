import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-auth-google',
  templateUrl: './button-auth-google.component.html',
  styleUrls: ['./button-auth-google.component.css']
})
export class ButtonAuthGoogleComponent {
  @Input() contenido!: string
}
