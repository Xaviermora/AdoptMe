import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private $userInSession = new BehaviorSubject<any>(null)

  constructor(private auth: AngularFireAuth, private router: Router) { }

  register(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  setUserInSession(user: Usuario){
    this.$userInSession.next(user)
  }

  getUserInSession(){
    return this.$userInSession.asObservable()
  }

  authWithGoogle(){
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
    return this.auth.sendPasswordResetEmail(email)
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
