import { Component, Input, AfterViewInit } from '@angular/core';
import { Modal } from 'flowbite';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit{
  @Input() animal!: Animal
  modal!: Modal
  imgActual: number = 0 // Posición de la imagen que se esta mostrando en el carousel

  constructor(){}

  ngAfterViewInit(){
    setTimeout(() => {
      const $targetEl = document.getElementById(`modal-${this.animal.id}`);
      this.modal = new Modal($targetEl);
    }, 0)
  }

  movimientoImgs(){
    this.animal.imgs.forEach((_: any, i: number) => {
      let img = document.getElementById(`${this.animal.id}-img-${i}`) // Se obtiene la imagen

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
