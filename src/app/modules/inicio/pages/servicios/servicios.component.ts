import { Component } from '@angular/core';
import { Perro } from 'src/app/models/perro';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  public infotarjeta: Perro[];


  constructor(){
    this.infotarjeta = [
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
