import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{  
  imagenesAnimal: string[] = [
    '../../../../../assets/michi.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cat_on_its_back.jpg/220px-Cat_on_its_back.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gato_Siam%C3%A9s_ojos_azules.JPG/220px-Gato_Siam%C3%A9s_ojos_azules.JPG'
  ]
  imgActual: number = 0 // Posición de la imagen que se esta mostrando en el carousel

  constructor(){
  }

  anteriorImg(){
    this.imgActual -= 1

    this.imagenesAnimal.forEach((_,i) => document.getElementById(`img-${i}`)!.style.transform = `translateX(-${(this.imgActual)*100}%)`)
  }

  siguienteImg(){
    this.imgActual += 1

    this.imagenesAnimal.forEach((_,i) => document.getElementById(`img-${i}`)!.style.transform = `translateX(-${(this.imgActual)*100}%)`)
  }
}
