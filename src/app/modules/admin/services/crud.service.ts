import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private usuariosColeccion: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) {
    this.usuariosColeccion = database.collection('usuarios')
   }

  getDatos(){
    return this.database.collection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
}
