import { Component } from '@angular/core';

@Component({
  selector: 'app-second-register',
  templateUrl: './second-register.component.html',
  styleUrls: ['./second-register.component.css']
})
export class SecondRegisterComponent {
  datosPersonales = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    fechaDeNacimiento: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    tipoDeVivienda: new FormControl('', Validators.required),
    calle: new FormControl('', Validators.required),
    numVivienda: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required)
  })

  provincias = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
  ];  

  ciudades = [
    'a',
    'b',
    'c'
  ]
}
