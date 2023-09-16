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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService, private router: Router){}

  async onSubmit(){
    const { email, password, repeatPassword } = this.register1.value
    
    if(password === repeatPassword && email && password){ // Se verifica que las contraseñas coincidan y los datos existan
      try {
        const res = await this.authService.register(email, password)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
