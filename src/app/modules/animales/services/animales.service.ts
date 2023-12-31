import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, map, take } from 'rxjs';
import { Animal } from 'src/app/models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  private animalesCollection: AngularFirestoreCollection<any>
  
  razas: string[] = [
    "Calle",
    "Vereda",
    "Asfalto",
    "Plaza"
  ]
  animal: string[] = [
    'Perro',
    'Gato'
  ]
  edad: string[] = [
    "Cachorro lactante",
    "Cachorro",
    "Cachorro adolecente",
    "Adulto",
    "Senior"
  ]

  constructor(private database: AngularFirestore, private storage: AngularFireStorage) {
    this.animalesCollection = this.database.collection<Animal>('animales')
  }
  
  async uploadImgs(imgs: File[], userId: string): Promise<string[]>{
    return await Promise.all(imgs.map(async img => {
      let path = `animales/${userId}/${this.database.createId()}-${img.name}`
      let upload = await this.storage.upload(path, img)
      return await upload.ref.getDownloadURL()
    }))
  }

  getAnimal(id: string){
    return this.animalesCollection.doc(id).snapshotChanges().pipe(
      take(1), // Se toma solamente el primer valor
      map(d => d.payload.data())
    )
  }

  getAnimales(filters?: any){
    return new Observable<Animal[]>(observer => {
      this.animalesCollection.ref.onSnapshot({ // Se escuchan a los cambios
        next: (snapshot) => {
          let query: firebase.default.firestore.Query = snapshot.query // Se prepara la petición
    
          for(const filter in filters){
            // Si hay filtros agregarlos a la petición
            if(filters[filter]){
              query = query.where(filter, '==', filters[filter])
            }
          }
          
          // Se ejecuta la petición
          query.get().then((query: { docs: any[]; }) => {
            observer.next(query.docs.map(doc => {return doc.data()})) // Se agrega al observable los animales devueltos por la petición
          })
        }
      })
    })
  }

  async addAnimal(datosAnimal: any, userId: string){
    const animal = {
      id: this.database.createId(),
      ...datosAnimal,
      userId
    }

    await this.animalesCollection.doc(animal.id).set(animal)
  }

  deleteAnimalByUserId(userId: string){
    this.animalesCollection.ref.where('userId', '==', userId).get().then(snapshot => {
      snapshot.docs.forEach(async doc => await doc.ref.delete());
    })
  }
}
