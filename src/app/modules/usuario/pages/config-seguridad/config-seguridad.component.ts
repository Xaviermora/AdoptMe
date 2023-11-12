import { AfterViewInit, Component } from '@angular/core';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-config-seguridad',
  templateUrl: './config-seguridad.component.html',
  styleUrls: ['./config-seguridad.component.css']
})
export class ConfigSeguridadComponent implements AfterViewInit{
  modal!: Modal
  constructor(){}

  ngAfterViewInit(){
    const $targetEl = document.getElementById('modalEliminarCuenta')
    this.modal = new Modal($targetEl)
  }
}
