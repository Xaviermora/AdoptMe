import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  private animalesCollection: AngularFirestoreCollection<any>

  constructor(private database: AngularFirestore) {
    this.animalesCollection = this.database.collection<any>('animales')
  }

  getAnimales(){
    return this.animalesCollection.valueChanges()
  }

  async addAnimal(animal: any){
    const id = this.database.createId()

    await this.animalesCollection.doc(id).set({
      id,
      ...animal
    })
  }
}
