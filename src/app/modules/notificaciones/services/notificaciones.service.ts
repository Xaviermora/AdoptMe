import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Notificacion } from 'src/app/models/notificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private notificacionesCollection: AngularFirestoreCollection<Notificacion>

  constructor(private database: AngularFirestore) {
    this.notificacionesCollection = this.database.collection<Notificacion>('notificaciones')
  }

  getNotificaciones(){
    return this.notificacionesCollection.valueChanges();
  }

  async createNotificacion(data: any){
    const notificacion = {
      id: this.database.createId(),
      ...data
    }

    await this.notificacionesCollection.doc(notificacion.id).set(notificacion)
  }
}
