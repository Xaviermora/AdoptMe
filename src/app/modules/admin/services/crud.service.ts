import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Pripiedad para acceder a la coleccion de usuarios
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  private reportesCollection: AngularFirestoreCollection<any>
  
  //Inyecta nuestra base de datos de Firestore para acceder a las colecciones
  constructor(private database: AngularFirestore) {
    this.usuariosCollection = database.collection('usuarios')
    this.reportesCollection = database.collection('reportes')
  }

 //Metodo para obtener los usuarios
  getUserCollection(){
    
    //Obtiene y a su vez hace el retorno de los cambios y la coleccion de usuarios
    return this.database.collection('usuarios').valueChanges();
   
  }
  
  ngOnInit(): void{}

  //Metodo para actualizar usuarios

  updateUserCollection(uid: string, newData: Usuario){
    
    //Actualiza la informacion del usuario seleccionado con los nuevos datos
    return this.usuariosCollection.doc(uid).update(newData);
  }

  //Metodo para borrar usuario

  borrarUser(uid: string){
    //Retorno de una nueva promesa
    return new Promise((resolve, reject) => {
    
      try{
        //Intenta borrar el documento del usuario seleccionado, con el uid brindado
        const borrar = this.usuariosCollection.doc(uid).delete()
        //Si tiene exito, resuelve la promesa con "borrar"
        resolve (borrar)
      }
      catch(error){
        //Si falla, rechaza la promesa con el error
        reject(error)
      }
    })
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
  
  async createReporte(datosReporte: any){
    const reporte = {
      id: this.database.createId(),
      datosReporte,
    }
  
    return await this.reportesCollection.doc(reporte.id).set(reporte)
  }
}

  

