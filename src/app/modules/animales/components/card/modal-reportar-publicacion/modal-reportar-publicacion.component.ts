import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-reportar-publicacion',
  templateUrl: './modal-reportar-publicacion.component.html',
  styleUrls: ['./modal-reportar-publicacion.component.css']
})
export class ModalReportarPublicacionComponent {
  @Input() animalId!: string
}
