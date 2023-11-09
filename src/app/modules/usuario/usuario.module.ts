import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { PerfilComponent } from './pages/perfil/perfil/perfil.component';
import { PfpIconComponent } from './components/pfp-icon/pfp-icon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigDatosPersonalesComponent } from './pages/config-datos-personales/config-datos-personales/config-datos-personales.component';
import { ConfigComponent } from './pages/config/config.component';
import { ConfigPerfilPublicoComponent } from './pages/config-perfil-publico/config-perfil-publico.component';
import { ConfigSeguridadComponent } from './pages/config-seguridad/config-seguridad.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PerfilComponent,
    PfpIconComponent,
    ConfigDatosPersonalesComponent,
    ConfigComponent,
    ConfigPerfilPublicoComponent,
    ConfigSeguridadComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
