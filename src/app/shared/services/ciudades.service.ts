import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  ciudades: string[] = [
    "Cipolletti",
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

  constructor() { }
}
