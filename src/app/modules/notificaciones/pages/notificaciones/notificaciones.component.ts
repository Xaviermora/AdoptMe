import { Component } from '@angular/core';
import { NotificacionesService } from '../../services/notificaciones.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  notificaciones: any

  constructor(public notificacionesService: NotificacionesService){
    this.notificacionesService.getNotificaciones().subscribe(notificaciones => this.notificaciones = notificaciones)
  }
}
