import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { Router } from '@angular/router';
import { mayorDeEdad } from 'src/app/shared/validators/custom-validators';
import { CiudadesService } from 'src/app/shared/services/ciudades.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-second-register',
  templateUrl: './second-register.component.html',
  styleUrls: ['./second-register.component.css']
})
export class SecondRegisterComponent {
  //FormGroup con datos personales y validacion de la entrada de datos
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
  credentialsUser!: any

  constructor(private authService: AuthService, private usuariosService: UsuariosService, private router: Router, public ciudadesService: CiudadesService){}

  onSubmit(){
    this.datosPersonalesIsSubmitted = true

    //Valida que el formulario fue enviado y que el checkbox este marmcado
    if(this.datosPersonales.valid && this.terminosYCondicionesChecked.value){
      
      this.authService.user.subscribe(async user => {
        this.loading = true
        if(user){
          //Crea un objeto con los datos que tiene que guardar del usuario y sus datos personales
          if(!user.photoURL) user.updateProfile({photoURL: 'https://firebasestorage.googleapis.com/v0/b/adoptme-4080b.appspot.com/o/default-user-photo.svg?alt=media&token=37073846-dc65-4429-93c3-ac69ca63edab'})

          this.credentialsUser = {
            uid: user.uid,
            email: user.email,
            ...this.datosPersonales.value,
            photoURL: user.photoURL,
            role: 'usuario'
          }

          //Guarda en la base de datos y redirecciona al inicio
          await this.usuariosService.addUser(this.credentialsUser)
          this.router.navigate(['/'])
        }
      })
    }
  }
}
