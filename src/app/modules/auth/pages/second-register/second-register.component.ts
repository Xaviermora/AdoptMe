import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { Router } from '@angular/router';
import { mayorDeEdad } from 'src/app/shared/validators/custom-validators';
import { CiudadesService } from 'src/app/shared/services/ciudades.service';

@Component({
  selector: 'app-second-register',
  templateUrl: './second-register.component.html',
  styleUrls: ['./second-register.component.css']
})
export class SecondRegisterComponent {
  datosPersonales = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    fechaDeNacimiento: new FormControl('', [Validators.required, mayorDeEdad()]),
    ciudad: new FormControl('', Validators.required),
    tipoDeVivienda: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required)
  })
  datosPersonalesIsSubmitted: boolean = false
  terminosYCondicionesChecked = new FormControl(false, Validators.required)
  loading: boolean = false

  constructor(private authService: AuthService, private usuariosService: UsuariosService, private router: Router, public ciudadesService: CiudadesService){}

  onSubmit(){
    this.datosPersonalesIsSubmitted = true
    if(this.datosPersonales.status == 'VALID' && this.terminosYCondicionesChecked.value){
      this.authService.user.subscribe(async user => {
        this.loading = true
        if(user){
          let credentialsUser = {
            uid: user.uid,
            email: user.email,
            ...this.datosPersonales.value,
            photoUrl: user.photoURL
          }
          await this.usuariosService.addUser(credentialsUser)
          this.router.navigate(['/'])
        }
      })
    }
  }
}
