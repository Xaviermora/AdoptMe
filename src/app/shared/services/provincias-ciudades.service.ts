import { Injectable } from '@angular/core';

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
        "Cipolleti",
        "General Fernandez Oro",
      ]
    }
  ]

  constructor() { }
}
