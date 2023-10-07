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
  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  errorMsg: boolean = false
  errorMsgContent!: string
  loading: boolean = false
  loginIsSubmitted: boolean = false

  constructor(private authService: AuthService, private router: Router, private usuariosService: UsuariosService){}
  
  continueWithGoogle(){
    this.authService.authWithGoogle()
  }

  onSubmit(){
    this.loginIsSubmitted = true
    const { email, password } = this.login.value
    
    if(email && password){
      this.loading = true
      this.authService.login(email, password)
      .then((res) => {
        console.log(res.user?.uid)
        console.log(this.usuariosService.getUser(res.user!.uid))
        // this.router.navigate(['/'])
      })
      .catch(error => {
        this.errorMsgContent = this.authService.firebaseErrors(error.code)
        this.errorMsg = true
        this.loading = false
      })
    }
  }
}
