import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UsuariosService } from '../services/usuarios.service';

export const userInSession = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return new Promise(resolve => {
    authService.user.subscribe(user => user ? resolve(true) : router.createUrlTree(['/login']))
  })
};

export const userNotInSession = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return new Promise<boolean>(resolve => {
    authService.user.subscribe(user => !user ? resolve(true) : router.createUrlTree(['/']))
  })
};

export const userNotExistsInCollection = () => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const usuariosService = inject(UsuariosService)

  return new Promise(resolve => {
    authService.user.subscribe(user => {
      if(user) usuariosService.userExists(user.uid).subscribe(userExists => userExists ? router.navigate(['/']) : resolve(true))
    })
  })
}

export const userExistsInCollection = () => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const usuariosService = inject(UsuariosService)

  return new Promise((resolve) => {
    authService.user.subscribe(user => {
      if(user) usuariosService.userExists(user.uid).subscribe(userExists => userExists ? resolve(true) : router.navigate(['/datos-personales']))
    })
  })
}