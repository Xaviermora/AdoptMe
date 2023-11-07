import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-config-datos-personales',
  templateUrl: './config-datos-personales.component.html',
  styleUrls: ['./config-datos-personales.component.css']
})
export class ConfigDatosPersonalesComponent {
  provincias!: string[]
  ciudades!: string[]

  datosPersonalesUpdate = new FormGroup({
    provincia: new FormControl(''),
    ciudad: new FormControl({value: '', disabled: true}, Validators.required)
  })

  constructor(){}
}
