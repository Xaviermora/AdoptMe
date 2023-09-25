import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-register',
  templateUrl: './first-register.component.html',
  styleUrls: ['./first-register.component.css']
})
export class FirstRegisterComponent {
  register1 = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repeatPassword: new FormControl('', Validators.required)
  })
  errorMsg!: boolean
  errorMsgContent!: string
  sendedEmailVerification: boolean = false
  register1IsSubmitted: boolean = false
  inputPasswordFocusOut: boolean = false
  loading: boolean = false

  constructor(private authService: AuthService, private router: Router){}
  
  continueWithGoogle(){
    this.authService.authWithGoogle()
  }

  onSubmit(){
    this.register1IsSubmitted = true
    const { email, password, repeatPassword } = this.register1.value
    
    if(email && password && !this.register1.controls.password.errors?.['minlength']){ // Se verifica que los datos existan y la contraseña cumpla con el minimo de caracteres pedidos
      if(password === repeatPassword){
        this.loading = true
        this.authService.register(email, password)
        .then(() => this.router.navigate(['/datos-personales']))
        .catch(error => {
          if(error.code !== 'auth/weak-password'){ // La contraseña debil ya se comprueba en los validators del form entonces no se toma
            this.errorMsg = true
            this.errorMsgContent = this.authService.firebaseErrors(error.code)
          }
          this.loading = false
        })
      }else{
        this.errorMsg = true
        this.errorMsgContent = 'Las contraseñas no coinciden'
      }
    }
  }
}
