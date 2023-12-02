import { Component } from '@angular/core';
import { AnimalesService } from '../../services/animales.service';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent {
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

  hasFilter(){
    // Se comprueba que exista algún filtro
    return Object.values(this.filtros.value).some(value => value !== null && value !== undefined && value !== '');
  }
}
