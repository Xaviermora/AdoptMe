import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UsuariosService } from '../services/usuarios.service';

export const userInSession = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.user.subscribe(user => user ? true : router.navigate(['/login']))
};

export const userNotInSession = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.user.subscribe(user => !user ? true : router.navigate(['/']))
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