import { Component } from '@angular/core';
import { Informacion } from 'src/app/models/informacion';

// importamos interfaz 'inicio'
import { Perro } from 'src/app/models/perro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //propiedad publica (tipo array)
  public infotarjeta: Perro[];
  public infodivision: Informacion[];
  
  //inicializa la propiedad info
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
    this.infodivision = [
      {
        idInformacion: "",
        cantidad: 9.999,
        nombre: "Miembros"
      },
      {
        idInformacion: "",
        cantidad: 9.999,
        nombre: "Publicaciones"
      },
      {
        idInformacion: "",
        cantidad: 9.999,
        nombre: "Adopciones"
      }
    ]
  }
}
