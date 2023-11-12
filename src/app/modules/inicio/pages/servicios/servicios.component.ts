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
        descripcion: "Ver los animales que se dan en adopcion",
        imagen: "../../../../../assets/Grupo perros.jpg",
        alt: "",
        boton: "Adopcion"
      },
      {
        id: "",
        descripcion: "Contactanos ante cualquier duda o necesidad",
        imagen: "../../../../../assets/Img perro y gato negro.jpg",
        alt: "",
        boton: "Contactanos"
      },
      {
        id:"",
        descripcion: "Ver los animales que se dan en adopcion",
        imagen: "../../../../../assets/Grupo cachorro.jpg",
        alt: "",
        boton: "Adoptar"
      },
    ]
  }
  
}
