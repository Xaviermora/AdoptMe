import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  errorMsg: boolean = false
  errorMsgContent!: string
  loading: boolean = false
  
  constructor(private authService: AuthService, private router: Router){}
 
  onSubmit(){
    const { email, password } = this.login.value
    console.log(this.login)
    if(email && password){
      this.loading = true
      this.authService.login(email, password)
      .then((res) => {
        console.log(res)
        this.router.navigate(['/'])
      })
      .catch(error => {
        console.log(error.code)
        this.errorMsgContent = this.authService.firebaseErrors(error.code)
        this.errorMsg = true
        this.loading = false
      })
    }
  }

  stopShowingMsg(showMsg: boolean){
    this.errorMsg = showMsg
  }
}
