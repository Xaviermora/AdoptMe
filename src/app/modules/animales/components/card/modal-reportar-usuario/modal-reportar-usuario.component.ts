import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-reportar-usuario',
  templateUrl: './modal-reportar-usuario.component.html',
  styleUrls: ['./modal-reportar-usuario.component.css']
})
export class ModalReportarUsuarioComponent {
  @Input() usuarioId!: string

  motivosReporte: string[] = [
    'Nombre ofensivo',
    'Información falsa',
    'Desnudos o actividad sexual',
    'Violencia',
    'Estafa o fraude'
  ]

  reportarUsuario!: FormGroup

  ngOnInit(){
    this.reportarUsuario = new FormGroup({})

    this.motivosReporte.forEach(motivo => {
      this.reportarUsuario.addControl(motivo, new FormControl(false))
    })
  }

  getControl(control: string){
    return this.reportarUsuario.get(control) as FormControl
  }

  toggleCheckbox(control: string){
    let checkoxControl = this.getControl(control) as FormControl
    checkoxControl.setValue(!checkoxControl.value)
  }
}