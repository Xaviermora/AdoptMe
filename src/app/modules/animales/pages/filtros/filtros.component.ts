import { Component } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {
  razas=[
    "Calle",
    "Vereda",
    "Asfalto",
    "PLaza"
  ]
  animal=[
    "Perro",
    "Gato"
  ]
  edad=[
    "Cachorro lactante",
    "Cachorro",
    "Cachorro adolecente",
    "Adulto",
    "Senior"
  ]
  provincia=[
    "Neuquen",
    "Rio Negro"
  ]
}
