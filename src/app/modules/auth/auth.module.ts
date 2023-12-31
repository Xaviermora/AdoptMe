import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ButtonAuthGoogleComponent } from './components/button-auth-google/button-auth-google.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstRegisterComponent } from './pages/first-register/first-register.component';
import { SecondRegisterComponent } from './pages/second-register/second-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    ButtonAuthGoogleComponent,
    FirstRegisterComponent,
    SecondRegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
