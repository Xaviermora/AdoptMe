import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  private animalesCollection: AngularFirestoreCollection<any>

  constructor(private database: AngularFirestore) {
    this.animalesCollection = this.database.collection<any>('animales')
  }

  async addAnimal(animal: any){
    await this.animalesCollection.doc(animal.uid).set(animal)
  }
}
