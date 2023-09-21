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

  constructor(private authService: AuthService, private router: Router){}

  async onSubmit(){
    const { email, password } = this.login.value

    if(email && password){
      try {
        const res = await this.authService.login(email, password)
        console.log(res)
        this.router.navigate(['/'])
      } catch (error) {
        console.log(error)
      }
    }
  }
}
