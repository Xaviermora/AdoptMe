import { Component } from '@angular/core';

@Component({
  selector: 'app-dar-en-adopcion-form',
  templateUrl: './dar-en-adopcion-form.component.html',
  styleUrls: ['./dar-en-adopcion-form.component.css']
})
export class DarEnAdopcionFormComponent {
  edad=[
    "Cachorro lactante",
    "Cachorro",
    "Cachorro adolecente",
    "Adulto",
    "Senior"
  ]
}
