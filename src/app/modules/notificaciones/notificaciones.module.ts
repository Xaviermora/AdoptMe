import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionesRoutingModule } from './notificaciones-routing.module';
import { NotificacionItemComponent } from './components/notificacion-item/notificacion-item.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';


@NgModule({
  declarations: [
    NotificacionItemComponent,
    NotificacionesComponent
  ],
  imports: [
    CommonModule,
    NotificacionesRoutingModule
  ]
})
export class NotificacionesModule { }
