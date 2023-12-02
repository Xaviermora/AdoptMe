import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Notificacion } from 'src/app/models/notificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private notificacionesCollection: AngularFirestoreCollection<Notificacion>

  constructor(private database: AngularFirestore) {
    this.notificacionesCollection = this.database.collection<Notificacion>('notificaciones')
  }

  getNotificaciones(idUsuario: string){
    // Se devuelve un observable de las notificaciones que sean del usuario en sesión
    return new Observable<(Notificacion | null)[]>(observer => {
      this.notificacionesCollection.valueChanges().subscribe(notificaciones => {
        observer.next(notificaciones.filter(notificacion => {return notificacion.idUsuario === idUsuario}))
      })
    })
  }

  async createNotificacion(data: any){
    const notificacion = {
      id: this.database.createId(),
      ...data
    }

    await this.notificacionesCollection.doc(notificacion.id).set(notificacion)
  }

  async deleteNotificacion(id: string){
    await this.notificacionesCollection.doc(id).delete()
  }

  deleteNotificacionesByUserId(userId: string){
    // Eliminar las notificaciones que le pertenecen al usuario
    this.notificacionesCollection.ref.where('idUsuario', '==', userId).get().then(snapshot => {
      snapshot.docs.forEach(async doc => await doc.ref.delete());
    })

    // Eliminar las notificaciones que el usuario mando
    this.notificacionesCollection.ref.where('idUsuarioAdoptante', '==', userId).get().then(snapshot => {
      snapshot.docs.forEach(async doc => await doc.ref.delete());
    })
  }
}
