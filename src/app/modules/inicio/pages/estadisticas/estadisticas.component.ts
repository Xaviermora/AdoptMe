import { Component } from '@angular/core';
import { Informacion } from 'src/app/models/informacion';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})



export class EstadisticasComponent {
  
  public infodivision: Informacion[];
  constructor(){
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
