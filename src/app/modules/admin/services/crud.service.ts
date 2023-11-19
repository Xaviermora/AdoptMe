import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
    this.usuariosCollection = database.collection('usuarios')
  }

  createTable(usuario: Usuario){
    return new Promise(async(resolve, reject) => {
      try{
        const id = this.database.createId();
        usuario.uid = id;

        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        resolve(resultado);
      }catch(error){
        reject(error);
      }
    })
  }

  getUserCollection(){
    return this.database.collection('usuarios').valueChanges();
    /*  return this.usuariosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data()))) */
  }
  ngOnInit(): void{}
}
