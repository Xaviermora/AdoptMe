import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private authService: AuthService){}
}
