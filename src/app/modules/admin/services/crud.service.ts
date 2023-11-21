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

 
  getUserCollection(){
    return this.database.collection('usuarios').valueChanges();
    /* Obtener la informacion de la colleccion usuarios de firebase */
  }
  
  ngOnInit(): void{}

  updateUserCollection(){

  }

  borrarUser(uid: string){
    return new Promise((resolve, reject) => {
      try{
        const borrar = this.usuariosCollection.doc(uid).delete()
        resolve (borrar)
      }
      catch(error){
        reject(error)
      }
    })
  }
}


