import { UsuariosService } from 'src/app/shared/services/usuarios.service';
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
  formValuesChanged: boolean = false

  showToast: boolean = false
  severity!: string
  msgToast!: string

  loading: boolean = false

  constructor(private usuariosService: UsuariosService, private ciudadesService: CiudadesService){}

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

    if(this.datosPersonalesUpdate.valid && this.formValuesChanged){
      this.loading = true

      this.usuariosService.updateUser(this.usuario.uid, this.datosPersonalesUpdate.value)
      .then(() => {
        this.msgToast = 'Se actualizaron los datos con éxito'
        this.severity = 'success'
        this.showToast = true
        this.loading = false
        this.formValuesChanged = false
        this.datosPersonalesUpdateIsSubmitted = false
      })
      .catch(() => {
        this.msgToast = 'Hubo un error al actualizar los datos'
        this.severity = 'danger'
        this.showToast = true
        this.loading = false
      })
    }
  }
}
