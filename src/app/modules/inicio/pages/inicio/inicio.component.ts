import { Component } from '@angular/core';

// importamos interfaz 'inicio'
import { Perro } from 'src/app/models/perro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //propiedad publica (tipo array)
  public info: Perro[];
  
  //inicializa la propiedad info
    constructor(){
      this.info = [
      {
        id:"",
        descripcion: "",
        imagen: "../../../../../assets/image.1.png",
        alt: "",
        boton: "Ver animales"
      },
      {
        id: "",
        descripcion: "",
        imagen: "../../../../../assets/image.1.png",
        alt: "",
        boton: "Dar en adopcion"
      }
    ]
  }
}
