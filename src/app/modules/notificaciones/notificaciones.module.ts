import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionesRoutingModule } from './notificaciones-routing.module';
import { NotificacionItemComponent } from './components/notificacion-item/notificacion-item.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NotificacionItemComponent,
    NotificacionesComponent
  ],
  imports: [
    CommonModule,
    NotificacionesRoutingModule,
    SharedModule
  ]
})
export class NotificacionesModule { }
