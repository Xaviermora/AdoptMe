import { Component } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent {
  publicaciones = [
    {
      id: 0,
      nombre: 'Figaro',
      imagenesAnimal: [
        '../../../../../assets/michi.jpeg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cat_on_its_back.jpg/220px-Cat_on_its_back.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gato_Siam%C3%A9s_ojos_azules.JPG/220px-Gato_Siam%C3%A9s_ojos_azules.JPG'
      ]
    },
    {
      id: 1,
      nombre: 'Figaro2',
      imagenesAnimal: [
        '../../../../../assets/michi.jpeg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cat_on_its_back.jpg/220px-Cat_on_its_back.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gato_Siam%C3%A9s_ojos_azules.JPG/220px-Gato_Siam%C3%A9s_ojos_azules.JPG'
      ]
    },
    {
      id: 2,
      nombre: 'Carlitos',
      imagenesAnimal: [
        '../../../../../assets/michi.jpeg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cat_on_its_back.jpg/220px-Cat_on_its_back.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gato_Siam%C3%A9s_ojos_azules.JPG/220px-Gato_Siam%C3%A9s_ojos_azules.JPG'
      ]
    }
  ]
}
