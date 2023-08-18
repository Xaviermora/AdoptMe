import { Component, Input, OnInit } from '@angular/core';
import { Carousel, CarouselItem } from 'flowbite';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{  
  imagenesAnimal: string[] = [
    '../../../../../assets/michi.jpeg',
    '../../../../../assets/michi.jpeg'
  ]

  constructor(){}

  ngOnInit(){
    const carousel = new Carousel();
    const $prevButton = document.getElementById('data-carousel-prev');
    const $nextButton = document.getElementById('data-carousel-next');

    $prevButton?.addEventListener('click', () => carousel.prev())

    $nextButton?.addEventListener('click', () => carousel.next())
  }
}
