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
  //Formulario con campos de email, contraseña y repetir
  register1 = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repeatPassword: new FormControl('', Validators.required)
  })
  //Bandera para mensaje de error y Contenido del mensaje error
  errorMsg!: boolean
  errorMsgContent!: string

  //bandera para verificacion de email enviado
  sendedEmailVerification: boolean = false
  //bandera para formulario registro enviado
  register1IsSubmitted: boolean = false

  inputPasswordFocusOut: boolean = false
  //bandera de carga durante una peticion
  loading: boolean = false

  //se inyectan las dependencias de AuthService Y Router
  constructor(private authService: AuthService, private router: Router){}
  
  // Registro con google mediante el servicio
  continueWithGoogle(){
    this.authService.authWithGoogle()
  }

  onSubmit(){
    //se marca el formulario como enviado
    this.register1IsSubmitted = true
    //toma los valores de email, contraseña y contraseña repetida de los valores asignados en el formulario
    const { email, password, repeatPassword } = this.register1.value
    
   
    if(email && password && !this.register1.controls.password.errors?.['minlength']){ // Se verifica que los datos existan y la contraseña cumpla con el minimo de caracteres pedidos
      if(password === repeatPassword){
        //valida la bandera de carga
        this.loading = true
        //Valida los datos y password iguales, llama al servicio para crear la cuenta correspondiente
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
