import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Modal } from 'flowbite';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-modal-reportar-usuario',
  templateUrl: './modal-reportar-usuario.component.html',
  styleUrls: ['./modal-reportar-usuario.component.css']
})
export class ModalReportarUsuarioComponent {
  @Input() usuarioId!: string
  @Input() modal!: Modal

  motivosReporte: string[] = [
    'Nombre ofensivo',
    'Información falsa',
    'Desnudos o actividad sexual',
    'Violencia',
    'Estafa o fraude',
    'Otro motivo'
  ]

  reportarUsuario!: FormGroup
  descripcionReporte = new FormControl('')
  showToast: boolean = false
  msgToast: string = ''
  severity!: string
  loading: boolean = false

  constructor(private adminService: CrudService){}

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

  onSubmit(){
    let motivos: string[] = []

    for (const motivo in this.reportarUsuario.value) {
      if(this.reportarUsuario.value[motivo] === true) motivos.push(motivo)
    }

    if(motivos.length != 0){
      const reporte = {
        reporte: 'Usuario',
        idContenido: this.usuarioId,
        motivos,
        descripcion: this.descripcionReporte.value
      }

      this.adminService.createReporte(reporte)
      .then(() => {
        this.severity = 'success'
        this.msgToast = 'Se envió el reporte'
        this.showToast = true
      })
      .catch((err) => console.log(err))
    }else{
      this.severity = 'error'
      this.msgToast = 'No se seleccionó ningún motivo'
      this.showToast = true
    }
  }
}
