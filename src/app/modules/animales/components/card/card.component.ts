import { Component, Input } from '@angular/core';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() publicacion!: any
  
  imgActual: number = 0 // Posición de la imagen que se esta mostrando en el carousel

  constructor(){
    const $targetEl = document.getElementById('defaultModal');
    const modal = new Modal($targetEl, undefined);
  }

  movimientoImgs(){
    this.publicacion.imagenesAnimal.forEach((_: any, i: number) => {
      let img = document.getElementById(`${this.publicacion.id}-img-${i}`) // Se obtiene la imagen

      img!.style.transform = `translateX(-${(this.imgActual)*100}%)` // Se aplica el estilo a la imagen para que se mueva hacia un costado
    })
  }

  anteriorImg(){
    this.imgActual -= 1

    this.movimientoImgs()
  }

  siguienteImg(){
    this.imgActual += 1

    this.movimientoImgs()
  }
}
