import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Dropdown } from 'flowbite';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements AfterViewInit{
  configOption: string = 'Perfil publico'

  constructor(){}
  
  ngAfterViewInit(){
    const $targetDropdownEl = document.getElementById('configOptions')
    const $triggerDropdownEl = document.getElementById('configOptionsTrigger')

    new Dropdown($targetDropdownEl, $triggerDropdownEl)
  }
}
