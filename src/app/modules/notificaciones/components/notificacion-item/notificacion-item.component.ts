import { Component, Input } from '@angular/core';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-notificacion-item',
  templateUrl: './notificacion-item.component.html',
  styleUrls: ['./notificacion-item.component.css']
})
export class NotificacionItemComponent {
  @Input() idUsuarioAdoptante!: string

  constructor(public usuariosService: UsuariosService){}
}
