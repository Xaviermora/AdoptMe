import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasCiudadesService {
  ubicaciones = [
    {
      provincia: 'Rio Negro',
      ciudades: [
        "Cipolleti",
        "General Fernandez Oro",
        "Ciudad de General Roca",
        "San Carlos de Bariloche",
        "El Bolson",
        "Viedma",
        "Villa Regina",
        "Catriel",
        "Las Grutas",
        "Cinco Saltos",
        "Allen"
      ]
    },
    {
      provincia: 'Neuquen',
      ciudades: [
        "Neuquén",
        "Plottier",
        "Cutral-Có",
        "Plaza Huincul",
        "Centenario",
        "Zapala",
        "San Martín de los Andes",
        "Junín de los Andes",
        "Villa La Angostura",
        "Rincón de los Sauces",
        "Chos Malal",
        "Las Lajas",
        "Aluminé",
        "Loncopué",
        "Añelo"
      ]
    },
    {
      provincia: 'Chubut',
      ciudades: [
        "Rawson",
        "Trelew",
        "Comodoro Rivadavia",
        "Puerto Madryn",
        "Esquel",
        "Río Gallegos",
        "Gaiman",
        "Dolavon",
        "Puerto Pirámides",
        "Sarmiento",
        "Trevelin",
        "Paso de Indios",
        "Tecka",
        "Río Mayo",
        "El Hoyo"
      ]
    },
    {
      provincia: 'Santa Cruz',
      ciudades: [
        "Río Gallegos",
        "El Calafate",
        "Caleta Olivia",
        "Pico Truncado",
        "Las Heras",
        "Puerto San Julián",
        "Comandante Luis Piedrabuena",
        "Puerto Santa Cruz",
        "28 de Noviembre",
        "Gobernador Gregores",
        "Río Turbio",
        "Perito Moreno",
        "Los Antiguos",
        "Puerto Deseado",
        "Tellier"
      ]
    }
  ]

  constructor() { }

  getProvincias(){
    return this.ubicaciones.map(ubicacion => ubicacion.provincia)
  }

  getCiudades(form: FormGroup){
    let ciudades: Subject<string[]> = new Subject()

    form.controls['provincia'].valueChanges.subscribe(provincia => { // Se subscribe al observable de cuando el valor de la provincia cambia
      if (form.controls['ciudad'].disabled) form.controls['ciudad'].enable() // Se habilita el select de ciudad si no lo está
      this.ubicaciones
        .filter(ubicacion => ubicacion.provincia === provincia) // Se filtra a las ciudades por la provincia seleccionada
        .map(provincia => ciudades.next(provincia.ciudades)) // Se devuelve el array de las ciudades de la provincia seleccionada
    })

    return ciudades.asObservable()
  }
}
