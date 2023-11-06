import { Component, Input } from '@angular/core';

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
}
