import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Animal } from 'src/app/models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  private animalesCollection: AngularFirestoreCollection<any>

  constructor(private database: AngularFirestore) {
    this.animalesCollection = this.database.collection<Animal>('animales')
  }

  getAnimales(){
    return this.animalesCollection.valueChanges()
  }

  async addAnimal(datosAnimal: any, userId: string){
    const animal = {
      id: this.database.createId(),
      ...datosAnimal,
      userId 
    }

    await this.animalesCollection.doc(animal.id).set(animal)
  }
}
