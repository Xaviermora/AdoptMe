import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  private reportesCollection: AngularFirestoreCollection<any>

  constructor(private database: AngularFirestore) {
    this.usuariosCollection = database.collection('usuarios')
    this.reportesCollection = database.collection('reportes')
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
  
  async createReporte(datosReporte: any){
    const reporte = {
      id: this.database.createId(),
      datosReporte,
    }

    await this.reportesCollection.doc(reporte.id).set(reporte)
  }
}
