import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { AnimalesService } from '../../animales/services/animales.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private router: Router, private usuariosService: UsuariosService, private animalesService: AnimalesService) { }

  register(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  async getCurrentUid(){
    let user = await this.auth.currentUser

    return user ? user.uid : null
  }

  get user(){
    return this.auth.authState
  }

  signOut(){
    return this.auth.signOut()
  }

  deleteAccount(){
    this.auth.currentUser.then(user => {
      user?.delete().then(async () => {
        await this.usuariosService.deleteUser(user.uid)
        this.animalesService.deleteAnimalByUserId(user.uid)
      }).catch(console.log)
    })
  }

  authWithGoogle(){
    this.auth.signInWithPopup(new GoogleAuthProvider())
    .then(async res => {
      if(res.user){
        this.usuariosService.userExists(res.user.uid).subscribe(async userExists => {
          // Se comprueba que el usuario este en la colección es decir que haya completado el formulario de datos personales
         userExists ? this.router.navigate(['/']) : this.router.navigate(['/datos-personales'])
        })
      }
    }).catch((error) => {
      console.log(error)
    });
  }

  resetPassword(email: string){
    return this.auth.sendPasswordResetEmail(email)
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
      case 'auth/network-request-failed':
        return 'Error de conexión a internet'
      default:
        return 'Error desconocido';
    }
  }
}
