import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UsuariosService } from '../services/usuarios.service';

export const userInSession = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.user.subscribe(user => {
    if (user) {
      return true; // Permite el acceso si el usuario no está en sesión
    } else {
      // Redirige a la página principal si el usuario ya está en sesión
      return router.navigate(['/login']);
    }
});
};

export const userNotInSession = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.user.subscribe(user => {
    if (!user) {
      return true; // Permite el acceso si el usuario no está en sesión
    } else {
      // Redirige a la página principal si el usuario ya está en sesión
      return router.navigate(['/']);
    }
  });
};

export const userNotExistsInCollection = () => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const usuariosService = inject(UsuariosService)

  return authService.user.subscribe(user => {
    return usuariosService.userExists(user!.uid).subscribe(userExists => {
      if(!userExists){ return true }
      else{ return router.navigate(['/datos-personales']) } 
    })
  })
}

export const userExistsInCollection = () => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const usuariosService = inject(UsuariosService)

  return authService.user.subscribe(user => {
    return usuariosService.userExists(user!.uid).subscribe(userExists => {
      if(userExists){ return true }
      else{ return router.navigate(['/datos-personales']) } 
    })
  })
}

export const isAdmin = () => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const usuariosService = inject(UsuariosService)

  return authService.user.subscribe(user => {
    return usuariosService.getUser(user!.uid).subscribe(usuario => {
      if(usuario?.role == 'admin'){ return true}
      else{ return router.navigate(['/'])}
    })
  })
}