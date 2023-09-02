import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InputComponent } from './components/input/input.component';
import { ButtonAuthGoogleComponent } from './components/button-auth-google/button-auth-google.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputPasswordComponent } from './components/input-password/input-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    InputComponent,
    ButtonAuthGoogleComponent,
    InputPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
