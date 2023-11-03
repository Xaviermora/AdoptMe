import { Component } from '@angular/core';
import { AnimalesService } from '../../services/animales.service';
import { Animal } from 'src/app/models/animal';

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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cat_on_its_back.jpg/220px-Cat_on_its_back.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gato_Siam%C3%A9s_ojos_azules.JPG/220px-Gato_Siam%C3%A9s_ojos_azules.JPG'
      ]
    }
  ]
  animales: Animal[] = []
  filtros!: any
  loadingAnimales: boolean = true

  constructor(private animalesService: AnimalesService){}

  ngOnInit(){
    this.animalesService.getAnimales().subscribe(animales => {
      this.animales = animales
      this.loadingAnimales = false
    })
  }

  filtersChange(filters: any){
    this.animalesService.getAnimales(filters).subscribe(animales => {
      this.loadingAnimales = true
      this.animales = animales
      this.loadingAnimales = false
    })
  }

  hasValue(){
    return Object.values(this.filtros.value).some(value => value !== null && value !== undefined && value !== '');
  }
}
