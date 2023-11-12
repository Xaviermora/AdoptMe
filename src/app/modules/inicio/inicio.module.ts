import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { HerosectionComponent } from './pages/herosection/herosection.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';


@NgModule({
  declarations: [
    InicioComponent,
    HerosectionComponent,
    ServiciosComponent,
    QuienesSomosComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ],

})
export class InicioModule { }
