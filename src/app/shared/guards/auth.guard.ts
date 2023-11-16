import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

export const userInSession = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.user.subscribe(user => {
    user ? true : router.navigate(['/login'])
  })
};

export const userNotInSession = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.user.subscribe(user => {
    !user ? true : router.navigate(['/'])
  })
};
