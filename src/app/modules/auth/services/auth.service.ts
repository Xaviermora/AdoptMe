import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any
  constructor(private auth: AngularFireAuth) { }

  register(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  currentUser(){
    return this.auth.currentUser
  }
}
