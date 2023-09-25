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
    email: new FormControl('', Validators.required)
  })
  severityToast!: string
  showMsg: boolean = false
  msgContent!: string
  resetPasswordIsSubmitted: boolean = false

  constructor(private authService: AuthService){}

  onSubmit(){
    const email = this.resetPassword.value.email
    this.resetPasswordIsSubmitted = true

    if(email){
      this.authService.resetPassword(email)
      .then(() => {
        this.severityToast = 'info'
        this.msgContent = 'Le enviamos un correo para que cambie su contraseña.'
        this.showMsg = true
      })
      .catch(error => {
        this.severityToast = 'error'
        this.msgContent = this.authService.firebaseErrors(error.code)
        this.showMsg = true
      })
    }
  }
}
