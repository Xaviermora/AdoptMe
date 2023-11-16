import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FirstRegisterComponent } from './pages/first-register/first-register.component';
import { SecondRegisterComponent } from './pages/second-register/second-register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { userNotInSession } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [userNotInSession]
  },
  {
    path: 'register',
    component: FirstRegisterComponent,
    canActivate: [userNotInSession]
  },
  {
    path: 'datos-personales',
    component: SecondRegisterComponent,
    canActivate: [userNotInSession]
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
