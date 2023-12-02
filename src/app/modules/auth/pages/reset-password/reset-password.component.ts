import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPassword = new FormGroup({
    //FormGroup con solo el control de email para la contraseña
    email: new FormControl('', Validators.required)
  })
  severityToast!: string //error succes, etc
  showMsg: boolean = false // Determina si mostrar el Toast
  msgContent!: string // Contenido del mensaje del toast

  resetPasswordIsSubmitted: boolean = false // Bandera de envio de formulario
  loading: boolean = false //bandera de carga mientras procesa

  constructor(private authService: AuthService){}

  onSubmit(){
    //obtiene unicamente el valor de  email del formulario resetPassword
    const email = this.resetPassword.value.email
    //Marca al formulario como enviado
    this.resetPasswordIsSubmitted = true

    if(email){
      this.loading = true
      //Reset de contraseña con email mediante el authService
      this.authService.resetPassword(email)

      //Mostrar mensajes de exito o error
      .then(() => {
        this.severityToast = 'info'
        this.msgContent = 'Le enviamos un correo para que cambie su contraseña.'
        this.showMsg = true
        this.loading = false
      })
      .catch(error => {
        this.severityToast = 'error'
        this.msgContent = this.authService.firebaseErrors(error.code)
        this.showMsg = true
        this.loading = false
      })
    }
  }
}
