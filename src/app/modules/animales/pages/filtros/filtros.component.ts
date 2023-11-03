import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { wrongOptionSearchSelect } from 'src/app/shared/validators/custom-validators';

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
  ciudad=[
    "Cipolleti",
    "General Fernandez Oro",
    "Ciudad de General Roca",
    "San Carlos de Bariloche",
    "El Bolson",
    "Viedma",
    "Villa Regina",
    "Catriel",
    "Las Grutas",
    "Cinco Saltos",
    "Allen"
  ]

  filtros = new FormGroup({
    animal: new FormControl(''),
    sexo: new FormControl(''),
    castrado: new FormControl(''),
    raza: new FormControl('', wrongOptionSearchSelect(this.razas)),
    edad: new FormControl(''),
    provincia: new FormControl(''),
    ciudad: new FormControl('')
  })
  filtrosOpen!: boolean
  @Output() filterForm = new EventEmitter<any>()
  @Output() newFilter = new EventEmitter<any>()

  ngOnInit(){
    this.filterForm.emit(this.filtros)

    this.filtros.valueChanges.subscribe(value => this.newFilter.emit(value))
  }
}
