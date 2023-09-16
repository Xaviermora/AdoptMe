import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ButtonAuthGoogleComponent } from './components/button-auth-google/button-auth-google.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { FirstRegisterComponent } from './pages/first-register/first-register.component';
import { SecondRegisterComponent } from './pages/second-register/second-register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    ButtonAuthGoogleComponent,
    InputPasswordComponent,
    FirstRegisterComponent,
    SecondRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
