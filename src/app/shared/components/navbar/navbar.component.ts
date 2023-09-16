import { Component,Input } from '@angular/core';
import { Collapse } from 'flowbite';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuIsActive: boolean = false

  ngOnInit(){
    const $targetEl = document.getElementById('menu')
    new Collapse($targetEl);
  }
}
