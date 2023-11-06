import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { HerosectionComponent } from './pages/herosection/herosection.component';
@NgModule({
  declarations: [
    InicioComponent,
    HerosectionComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule, 
    SharedModule
  ],
  exports: [
    MatCardModule
  ]
})
export class InicioModule { }
