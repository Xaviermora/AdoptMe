import { Component } from '@angular/core';
import { NotificacionesService } from '../../services/notificaciones.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Notificacion } from 'src/app/models/notificacion';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  notificaciones!: (Notificacion | null)[]

  constructor(public notificacionesService: NotificacionesService, private authService: AuthService){}
  
  ngOnInit(){
    this.authService.user.subscribe(user => {
      if(user) this.notificacionesService.getNotificaciones(user.uid).subscribe(notificaciones => this.notificaciones = notificaciones) 
    })
  }
}
