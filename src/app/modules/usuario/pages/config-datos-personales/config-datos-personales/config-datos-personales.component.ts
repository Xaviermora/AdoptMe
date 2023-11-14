import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { CiudadesService } from 'src/app/shared/services/ciudades.service';

@Component({
  selector: 'app-config-datos-personales',
  templateUrl: './config-datos-personales.component.html',
  styleUrls: ['./config-datos-personales.component.css']
})
export class ConfigDatosPersonalesComponent {
  @Input() usuario!: Usuario
  ciudades!: string[]

  datosPersonalesUpdate = new FormGroup({
    ciudad: new FormControl('', Validators.required),
    tipoDeVivienda: new FormControl('', Validators.required),
    telefono: new FormControl(0, Validators.required),
    dni: new FormControl(0, Validators.required)
  })
  datosPersonalesUpdateIsSubmitted: boolean = false

  constructor(private ciudadesService: CiudadesService){}

  ngOnInit(){
    this.ciudades = this.ciudadesService.ciudades

    this.datosPersonalesUpdate.setValue({
      ciudad: this.usuario.ciudad,
      tipoDeVivienda: this.usuario.tipoDeVivienda,
      telefono: this.usuario.telefono,
      dni: this.usuario.dni
    })
  }

  onSubmit(){
    this.datosPersonalesUpdateIsSubmitted = true
  }
}
