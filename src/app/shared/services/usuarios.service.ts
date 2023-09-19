import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
    this.usuariosCollection = this.database.collection<Usuario>('usuarios')
  }

  constructor() { }
}
