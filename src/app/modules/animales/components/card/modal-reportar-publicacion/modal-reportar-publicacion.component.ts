import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Modal } from 'flowbite';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-modal-reportar-publicacion',
  templateUrl: './modal-reportar-publicacion.component.html',
  styleUrls: ['./modal-reportar-publicacion.component.css']
})
export class ModalReportarPublicacionComponent {
  @Input() animalId!: string
  @Input() modal!: Modal

  motivosReporte: string[] = [
    'Información falsa',
    'Desnudos o actividad sexual',
    'Violencia',
    'Estafa o fraude',
    'Es spam',
    'Lenguaje o simbolos que incitan al odio',
    'Otro motivo'
  ]

  reportarPublicacion!: FormGroup
  descripcionReporte = new FormControl('')
  showToast: boolean = false
  msgToast: string = ''
  severity!: string

  constructor(private adminService: CrudService){}

  ngOnInit(){
    this.reportarPublicacion = new FormGroup({})

    this.motivosReporte.forEach(motivo => {
      this.reportarPublicacion.addControl(motivo, new FormControl(false))
    })
  }

  getControl(control: string){
    return this.reportarPublicacion.get(control) as FormControl
  }

  toggleCheckbox(control: string){
    let checkoxControl = this.getControl(control) as FormControl
    checkoxControl.setValue(!checkoxControl.value)
  }

  onSubmit(){
    let motivos: string[] = []

    for (const motivo in this.reportarPublicacion.value) {
      if(this.reportarPublicacion.value[motivo] === true) motivos.push(motivo)
    }

    const reporte = {
      reporte: 'Publicación',
      idContenido: this.animalId,
      motivos,
      descripcion: this.descripcionReporte.value
    }

    this.adminService.createReporte(reporte)
    .then(() => {
      this.severity = 'success'
      this.msgToast = 'Se envio el reporte'
      this.showToast = true
    })
    .catch((err) => console.log(err))
  }
}
