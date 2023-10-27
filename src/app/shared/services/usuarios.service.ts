import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
    this.usuariosCollection = this.database.collection<Usuario>('usuarios')
  }

  getUser(id: string){
    return this.usuariosCollection.doc(id).snapshotChanges().pipe(
      take(1), // Se toma solamente el primer valor
      map(d => d.payload.data())
    )
  }

  async addUser(usuario: any){
    await this.usuariosCollection.doc(usuario.uid).set(usuario)
  }
}
