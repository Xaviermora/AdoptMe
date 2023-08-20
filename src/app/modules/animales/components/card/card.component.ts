import { Component, OnInit } from '@angular/core';
import { Carousel, CarouselOptions, IndicatorItem } from 'flowbite';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{  
  imagenesAnimal: string[] = [
    '../../../../../assets/michi.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cat_on_its_back.jpg/220px-Cat_on_its_back.jpg'
  ]

  constructor(){}
  
  ngOnInit(){
    const carousel = new Carousel();

    // Funcionalidad del movimiento de imagenes siguiente y anterior
    const $prevButton = document.getElementById('data-carousel-prev');
    const $nextButton = document.getElementById('data-carousel-next');
  
    $prevButton?.addEventListener('click', () => carousel.prev())
  
    $nextButton?.addEventListener('click', () => carousel.next())
  }

  x(){console.log('d')}
}
