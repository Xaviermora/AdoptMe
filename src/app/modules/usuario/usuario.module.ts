import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { PerfilComponent } from './pages/perfil/perfil/perfil.component';
import { PfpIconComponent } from './components/pfp-icon/pfp-icon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigDatosPersonalesComponent } from './pages/config-datos-personales/config-datos-personales/config-datos-personales.component';


@NgModule({
  declarations: [
    PerfilComponent,
    PfpIconComponent,
    ConfigDatosPersonalesComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
