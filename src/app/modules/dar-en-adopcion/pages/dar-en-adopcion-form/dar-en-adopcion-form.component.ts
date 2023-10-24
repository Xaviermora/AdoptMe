import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalesService } from 'src/app/shared/services/animales.service';

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
  razas=[
    "Calle",
    "Vereda",
    "Asfalto",
    "PLaza"
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

  darEnAdopcion = new FormGroup({
    animal: new FormControl('', Validators.required),
    nombre: new FormControl(''),
    edad: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    castrado: new FormControl(false),
    raza: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    imgs: new FormControl([''], Validators.required),
    descripcion: new FormControl(''),
    requisitos: new FormControl('')
  })
  darEnAdopcionIsSubmitted: boolean = false


  constructor(private animalesService: AnimalesService){}

  async onSubmit(){
    this.darEnAdopcionIsSubmitted = true
    console.log(this.darEnAdopcion.value)
    if(this.darEnAdopcion.status == 'VALID'){
      await this.animalesService.addAnimal(this.darEnAdopcion.value)
    }
  }
}
