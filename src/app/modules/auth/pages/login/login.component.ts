import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //formulario para el login
  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  //bandera para un mensaje de error
  errorMsg: boolean = false

  //Contenido del mensaje de error
  errorMsgContent!: string

  //Bandera de carga durante el pedido
  loading: boolean = false
  //bandera para envio de formulario
  loginIsSubmitted: boolean = false

  constructor(private authService: AuthService, private router: Router, private usuariosService: UsuariosService){}

  continueWithGoogle(){
    //Auth con google mediante el servicio auth
    this.authService.authWithGoogle()
  }

  onSubmit(){
    //Marca el formulario como enviado
    this.loginIsSubmitted = true
    //Toma los valores de email y password
    const { email, password } = this.login.value
    
    //Llama al servicio para el login con los datos
    if(email && password){
      this.loading = true
      this.authService.login(email, password)
      .then(res => {
        if(res.user){
          this.usuariosService.userExists(res.user.uid).subscribe(async userExists => {
             // Se comprueba que el usuario este en la colección es decir que haya completado el formulario de datos personales
            userExists ? this.router.navigate(['/']) : this.router.navigate(['/datos-personales'])
          })
        }
      })
      .catch(error => {
        this.errorMsgContent = this.authService.firebaseErrors(error.code)
        this.errorMsg = true
        this.loading = false
      })
    }
  }
}
