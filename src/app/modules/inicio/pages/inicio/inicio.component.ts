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
        descripcion: "Ver los animales que se dan en adopcion en el sitio, con informacion detallada",
        imagen: "../../../../../assets/image.1.png",
        alt: "",
        boton: "Ver animales"
      },
      {
        id: "",
        descripcion: "Crear una ficha de adopcion para los animales",
        imagen: "../../../../../assets/image.1.png",
        alt: "",
        boton: "Dar en adopcion"
      }
    ]
  }
}
