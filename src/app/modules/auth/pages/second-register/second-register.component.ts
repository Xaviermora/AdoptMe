import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { Router } from '@angular/router';

// Función para la validadción del form
function mayorDeEdad(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const fechaDeNacimiento = control.value
    const actualYear = new Date().getFullYear()
    let year: any
    if(fechaDeNacimiento){
      year = fechaDeNacimiento.match(/[0-9]{4}/) // Se obtiene el año de la fecha de nacimiento dada por el usuario
    } 
    return actualYear - year >= 18 ? null : {mayorDeEdad: false} // Se determina si es mayor o no
  }
}

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
    provincia: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    tipoDeVivienda: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required)
  })
  datosPersonalesIsSubmitted: boolean = false
  provincias = [
    "Río Negro",
  ];
  ciudades = [
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
  terminosYCondicionesChecked: boolean = false
  
  constructor(private authService: AuthService, private usuariosService: UsuariosService, private router: Router){}

  onSubmit(){
    this.datosPersonalesIsSubmitted = true
    if(this.datosPersonales.status == 'VALID' && this.terminosYCondicionesChecked){
      this.authService.currentUser().then(async user => {
        if(user){
          let credentialsUser = {
            uid: user.uid,
            email: user.email,
            ...this.datosPersonales.value
          }
          await this.usuariosService.addUser(credentialsUser)
          this.router.navigate(['/'])
        }
      })
    }
  }
}
