import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { wrongOptionSearchSelect } from 'src/app/shared/validators/custom-validators';
import { AnimalesService } from '../../services/animales.service';
import { CiudadesService } from 'src/app/shared/services/ciudades.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {
  filtros = new FormGroup({
    animal: new FormControl(''),
    sexo: new FormControl(''),
    castrado: new FormControl(''),
    raza: new FormControl('', wrongOptionSearchSelect(this.animalesService.razas)),
    edad: new FormControl(''),
    ciudad: new FormControl('')
  })
  filtrosOpen!: boolean
  @Output() filterForm = new EventEmitter<any>()
  @Output() newFilter = new EventEmitter<any>()

  constructor(public animalesService: AnimalesService, public ciudadesService: CiudadesService){}

  ngOnInit(){
    this.filterForm.emit(this.filtros)

    this.filtros.valueChanges.subscribe(value => this.newFilter.emit(value))
  }
}
