import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router){}
  
  continueWithGoogle(){
    this.authService.authWithGoogle()
  }

  onSubmit(){
    this.loginIsSubmitted = true
    const { email, password } = this.login.value

    if(email && password){
      this.loading = true
      this.authService.login(email, password)
      .then(() => {
        this.router.navigate(['/'])
      })
      .catch(error => {
        this.errorMsgContent = this.authService.firebaseErrors(error.code)
        this.errorMsg = true
        this.loading = false
      })
    }
  }
}
