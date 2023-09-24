import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private router: Router) { }

  register(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  authWithGoogle(){
    this.auth.signInWithPopup(new GoogleAuthProvider())
    .then((result) => {
      if(result.additionalUserInfo?.isNewUser){
        this.router.navigate(['/second-register'])
      }else{
        this.router.navigate(['/'])
      }
    }).catch((error) => {
      console.log(error)
    });
  }

  currentUser(){
    return this.auth.currentUser
  }

  firebaseErrors(error: string): string{
    switch (error) {
      case 'auth/invalid-email':
        return 'Email invalido'
      case 'auth/user-not-found':
        return 'El usuario no existe'
      case 'auth/wrong-password':
        return 'Contraseña incorrecta'
      case 'auth/email-already-in-use':
        return 'El usuario ya existe'
      default:
        return 'Error desconocido';
    }
  }
}
