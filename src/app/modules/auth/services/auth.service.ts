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
    //metodo para crear un nuevo usuario con email y contraseña
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string){
    //metodo para iniciar sesion con un usuario ya existente
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  authWithGoogle(){
    //inicia sesion con cuenta de google, haciendo aparecer un popup
    this.auth.signInWithPopup(new GoogleAuthProvider())
    .then((result) => {
      if(result.additionalUserInfo?.isNewUser){
        this.router.navigate(['/datos-personales'])
      }else{
        this.router.navigate(['/'])
      }
    }).catch((error) => {
      console.log(error)
    });
  }

  resetPassword(email: string){

    //envia un email de reinicio de contraseña

    return this.auth.sendPasswordResetEmail(email)
  }

  currentUser(){
    //toa la inforacion del usuario actual
    return this.auth.currentUser
  }

  firebaseErrors(error: string): string{

    //Los erorres los transforma a mensajes legibles para el usuario
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
